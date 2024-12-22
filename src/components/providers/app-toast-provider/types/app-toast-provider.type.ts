export type PageToastProps = {
  message: string;
  type?: 'success' | 'error' | 'warning';
  duration?: number;
  position?: 'top' | 'middle' | 'bottom';
};
