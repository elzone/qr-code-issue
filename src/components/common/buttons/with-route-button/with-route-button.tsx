import { Button, buttonVariants } from '@/components/ui/button';
import { Children } from '@/lib/types/common';
import { RouteAction, useIonRouter } from '@ionic/react';
import { ButtonHTMLAttributes, FC } from 'react';
import { VariantProps } from 'class-variance-authority';
import { RouterDirection } from '@ionic/react/dist/types/models';

type WithRouteButtonProps = Children &
  ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    route: string;
    routerDirection?: RouterDirection;
    routeAction?: RouteAction;
    onClick?: () => void;
  };

const WithRouteButton: FC<WithRouteButtonProps> = ({
  children,
  route,
  routerDirection = `forward`,
  routeAction = 'push',
  onClick,
  ...props
}) => {
  const router = useIonRouter();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }

    router.push(route, routerDirection, routeAction);
  };

  return (
    <Button
      onClick={handleClick}
      {...props}
    >
      {children}
    </Button>
  );
};

export { WithRouteButton };
