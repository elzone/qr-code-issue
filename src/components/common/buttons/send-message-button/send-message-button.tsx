import { Button, buttonVariants } from '@/components/ui/button';
import { ButtonHTMLAttributes, FC } from 'react';
import { VariantProps } from 'class-variance-authority';

type Props = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

const SendMessageButton: FC<Props> = ({ ...props }) => {
  return (
    <Button
      variant={`ghost`}
      size={`fit`}
      {...props}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 180 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="180"
          height="180"
          rx="90"
          fill="#07B6C1"
        />
        <g clipPath="url(#clip0_709_9601)">
          <ellipse
            cx="90"
            cy="90"
            rx="60"
            ry="60"
            transform="rotate(90 90 90)"
            fill="#07B6C1"
          />
          <path
            d="M102 72L120 90L102 108"
            stroke="white"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M117 90L57 90"
            stroke="white"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_709_9601">
            <rect
              width="120"
              height="120"
              fill="white"
              transform="translate(150 30) rotate(90)"
            />
          </clipPath>
        </defs>
      </svg>
    </Button>
  );
};

export { SendMessageButton };
