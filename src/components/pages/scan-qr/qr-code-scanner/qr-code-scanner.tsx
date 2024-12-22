import { useIonViewDidEnter } from "@ionic/react";
import {
  BarcodeFormat,
  BarcodeScannedEvent,
  BarcodeScanner,
  BarcodesScannedEvent,
  ScanErrorEvent,
} from "@capacitor-mlkit/barcode-scanning";
import { FC, useCallback } from "react";

type QrCodeScannerProps = {
  setIsShow: (value: boolean) => void;
  scanError: (value: string) => void;
};

const QrCodeScanner: FC<QrCodeScannerProps> = ({ setIsShow, scanError }) => {
  const handleBarcodeScanned = async (e: BarcodesScannedEvent) => {
    stopScan();
    const barcodeData = e.barcodes[0].rawValue;
  };

  const handleScanError = useCallback(
    (e: ScanErrorEvent) => {
      scanError(e.message);
    },
    [scanError],
  );

  const scan = async () => {
    // Спрятать дефолтные элементы управления
    document.querySelector("body")?.classList.add("barcode-scanning-active");

    await BarcodeScanner.addListener("barcodesScanned", handleBarcodeScanned);
    await BarcodeScanner.addListener("scanError", handleScanError);

    await BarcodeScanner.startScan({ formats: [BarcodeFormat.QrCode] });

    // Сигнал для отрисовки кастомных элементов управления
    setTimeout(() => {
      setIsShow(true);
    }, 300);
  };

  const stopScan = async () => {
    await BarcodeScanner.removeAllListeners();

    await BarcodeScanner.stopScan();

    document.querySelector("body")?.classList.remove("barcode-scanning-active");
  };

  useIonViewDidEnter(() => {
    scan();
  }, []);

  return null;
};

export { QrCodeScanner };
