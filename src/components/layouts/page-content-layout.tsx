import { FC } from 'react';
import { Children } from '@/lib/types/common';

type PageContentLayoutProps = Children & {
  classes?: string;
};

const PageContentLayout: FC<PageContentLayoutProps> = ({
  children,
  classes = `space-y-4`,
}) => {
  return <div className={`pb-4 ${classes}`}>{children}</div>;
};

export { PageContentLayout };
