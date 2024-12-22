import { FC } from "react";
import { Children } from "@/lib/types/common";
import { IonContent } from "@ionic/react";

type PageLayoutProps = Children & {
  isUsePadding?: boolean;
  classes?: string;
  contentScrollY?: boolean;
  fullscreen?: boolean;
};

const PageWithoutTabBarLayout: FC<PageLayoutProps> = ({
  children,
  classes,
  isUsePadding = true,
  contentScrollY = true,
  fullscreen = true,
}) => {
  return (
    <IonContent
      fullscreen={fullscreen}
      scrollY={contentScrollY}
      className={`bg-white ${isUsePadding ? `ion-padding` : ``} ${classes ?? ``}`}
    >
      {children}
    </IonContent>
  );
};

export { PageWithoutTabBarLayout };
