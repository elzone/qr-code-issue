import { PageContentLayout } from "@/components/layouts/page-content-layout";
import { createPortal } from "react-dom";
import { useState } from "react";
import { QrCodeScannerWrapper } from "@/components/pages/scan-qr/qr-code-scanner-wrapper/qr-code-scanner-wrapper";
import { BarcodeScanner } from "@capacitor-mlkit/barcode-scanning";
import { QrCodeLoadFromFile } from "@/components/pages/scan-qr/qr-code-load-from-file/qr-code-load-from-file";
import { PageWithoutTabBarLayout } from "@/components/layouts/page-without-tab-bar-layout";
import { PageWrapper } from "@/components/page-wrapper";

const ScanQrPage = () => {
  const [isCustomControlsShow, setIsCustomControlsShow] = useState(false);

  const clearBarcodeScanner = async () => {
    setIsCustomControlsShow(false);
    await BarcodeScanner.stopScan();

    await BarcodeScanner.removeAllListeners();
  };

  const handleSetResultType = (result: string) => {
    console.log("---->", result);
    document.dispatchEvent(
      new CustomEvent("AppToast", {
        detail: {
          message: `Result: ${JSON.stringify(result)}`,
          duration: 10000,
        },
      }),
    );
  };

  return (
    <>
      <PageWrapper>
        <PageWithoutTabBarLayout classes={`!bg-transparent`} fullscreen={true}>
          <PageContentLayout>
            <QrCodeScannerWrapper
              setIsCustomControlsShow={setIsCustomControlsShow}
              setResultType={handleSetResultType}
            />
            {isCustomControlsShow &&
              createPortal(
                <div className={`relative h-screen`}>
                  <div className={`absolute top-48 w-full flex justify-center`}>
                    <div
                      className={`w-48 h-48 md:w-64 md:h-64 border border-4 border-white rounded-lg`}
                    />
                  </div>
                  <div className={"absolute w-full bottom-10 p-4 pb-8"}>
                    <div
                      className={
                        "flex flex-col space-y-4 items-center justify-center"
                      }
                    >
                      <QrCodeLoadFromFile setResultType={handleSetResultType} />
                    </div>
                  </div>
                </div>,
                document.body,
              )}
          </PageContentLayout>
        </PageWithoutTabBarLayout>
      </PageWrapper>
    </>
  );
};

export default ScanQrPage;
