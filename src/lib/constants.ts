export const IS_PROD = false;

export const BASE_API_PATH = IS_PROD ? `apcheki.ru` : `dev.apcheki.ru`;

export const BASE_API_URL = `https://${BASE_API_PATH}`;

export const appAssetsPath = `${BASE_API_URL}/upload`;
