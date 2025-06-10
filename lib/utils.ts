import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function directusAssetUrl(assetId: string) {
  return `http://34.56.54.244:48085/assets/${assetId}`;
}
