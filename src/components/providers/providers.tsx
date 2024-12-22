import { AppToastProvider } from '@/components/providers/app-toast-provider/app-toast-provider';
import { Children } from '@/lib/types/common';
import { AppNativeServiceProvider } from '@/components/providers/app-native-service-provider';

const Providers = ({ children }: Children) => {
  return (
    <>
      {children}
      <AppToastProvider />
      <AppNativeServiceProvider />
    </>
  );
};

export default Providers;
