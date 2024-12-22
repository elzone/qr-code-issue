import { Button } from "@/components/ui/button";
import { FilePicker } from "@capawesome/capacitor-file-picker";
import { BarcodeScanner } from "@capacitor-mlkit/barcode-scanning";
import { BarcodeFormat } from "@capacitor-mlkit/barcode-scanning/dist/esm/definitions";
import { FC } from "react";

type QrCodeLoadFromFileProps = {
  setResultType: (value: string) => void;
};

const QrCodeLoadFromFile: FC<QrCodeLoadFromFileProps> = ({ setResultType }) => {
  const barcodeResult = async (barcodeResult: string) => {
    setResultType(barcodeResult);
  };

  const getBarCode = async (path: string) => {
    const { barcodes } = await BarcodeScanner.readBarcodesFromImage({
      path,
      formats: [BarcodeFormat.QrCode],
    });

    await barcodeResult(barcodes[0].rawValue);
  };

  const handleClick = async () => {
    const { files } = await FilePicker.pickImages({ limit: 1 });
    const path = files[0]?.path;

    if (!path) {
      return;
    }

    await getBarCode(path);
  };

  return <Button onClick={handleClick}>Загрузить фото</Button>;
};

export { QrCodeLoadFromFile };
