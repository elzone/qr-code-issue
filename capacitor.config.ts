import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.qr.code.issue",
  appName: "QR-code",
  webDir: "dist",
  plugins: {},
  server: {
    androidScheme: "https",
  },
};

export default config;
