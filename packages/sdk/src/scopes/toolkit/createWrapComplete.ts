import { type IsSupported, wrapSafe } from '@/scopes/toolkit/wrapSafe.js';
import type { SafeWrapFn } from '@/scopes/toolkit/createWrapSafe.js';

export function createWrapComplete(
  component: string,
  isMounted: () => boolean,
  isSupported: IsSupported,
): SafeWrapFn<true> {
  return (name, fn) => wrapSafe(name, fn, {
    component,
    method: name,
    isMounted,
    isSupported,
  });
}
