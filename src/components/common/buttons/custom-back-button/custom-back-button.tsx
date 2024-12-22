import { useHistory } from 'react-router';
import { Children } from '@/lib/types/common';
import { ButtonHTMLAttributes, FC } from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import { VariantProps } from 'class-variance-authority';

type CustomBackButtonProps = Children &
  ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

const CustomBackButton: FC<CustomBackButtonProps> = ({
  children,
  ...props
}) => {
  const history = useHistory();

  return (
    <Button
      {...props}
      onClick={() => history.goBack()}
    >
      {children}
    </Button>
  );
};

export { CustomBackButton };
