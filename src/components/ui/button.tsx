import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

const buttonVariants = cva(
  'inline-flex text-[18px] gap-2 items-center justify-center rounded-md font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:bg-gray-300',
  {
    variants: {
      variant: {
        default: 'bg-primary text-white active:opacity-90',
        outline: 'border border-solid border-gray-200 bg-transparent',
        secondary:
          'bg-secondary text-secondary-foreground active:bg-secondary/90',
        ghost: 'bg-transparent',
        ghostPrimary: 'text-primary bg-transparent',
        link: 'text-primary underline-offset-4 active:underline active:opacity-90 bg-transparent',
        tabView:
          'inline-flex items-center border-solid border-2 border-gray-100 bg-white justify-center whitespace-nowrap rounded-lg text-sm font-semibold transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-gray-100 data-[state=active]:text-primary',
      },
      size: {
        default: 'h-12 px-4 py-2 w-full',
        icon: 'h-10 w-10',
        iconSmall: `h-5 w-5 md:h-10 md:w-10`,
        fit: 'p-0 m-0 w-fit',
        square: 'h-16 w-16',
        noSizeAround: 'p-0 m-0',
        tabView: 'h-10 p-2.5 w-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, isLoading, asChild = false, value, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    if (isLoading) {
      return (
        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          value={``}
          {...props}
        >
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        </Comp>
      );
    }
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        value={value}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
