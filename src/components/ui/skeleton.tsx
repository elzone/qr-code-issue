import { cn } from '@/lib/utils';

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'rounded-md bg-gray-100 relative \n' +
          '    before:absolute before:inset-0\n' +
          '    before:-translate-x-full\n' +
          '    before:animate-[shimmer_2s_infinite]\n' +
          '    before:bg-gradient-to-r\n' +
          '    before:from-transparent before:bg-white/20 before:to-transparent isolate\n' +
          '    overflow-hidden',
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
