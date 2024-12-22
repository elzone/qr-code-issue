import { QrCodeScanner } from "@/components/pages/scan-qr/qr-code-scanner/qr-code-scanner";
import { FC } from "react";

type QrCodeScannerWrapperProps = {
  setIsCustomControlsShow: (value: boolean) => void;
  setResultType: (value: string) => void;
};

const QrCodeScannerWrapper: FC<QrCodeScannerWrapperProps> = ({
  setIsCustomControlsShow,
  setResultType,
}) => {
  const handleScanError = () => {
    setResultType("error");
  };

  return (
    <>
      <QrCodeScanner
        setIsShow={setIsCustomControlsShow}
        scanResult={setResultType}
        scanError={handleScanError}
      />
    </>
  );
};

export { QrCodeScannerWrapper };
