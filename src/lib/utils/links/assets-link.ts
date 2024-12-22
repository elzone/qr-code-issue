import { appAssetsPath } from '@/lib/constants';

export const assetsLink = (asset: string) => {
  return `${appAssetsPath}/${asset}`;
};

export const replaceHtmlImageWithAssetLink = (htmlText: string) => {
  return htmlText?.replaceAll(`"/upload`, `"${appAssetsPath}`);
};
