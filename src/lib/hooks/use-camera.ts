import { BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';

export const useCamera = () => {
  const checkCameraPermissions = async () => {
    try {
      await BarcodeScanner.isSupported();
      await BarcodeScanner.requestPermissions();
    } catch (e) {
      console.log(e);
    }
  };

  return { checkCameraPermissions };
};
