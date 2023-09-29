import type { RGB } from '@tma.js/colors';
import type { HeaderColorKey } from '@tma.js/bridge';

import type { StateEvents } from '../../state/index.js';

export type WebAppHeaderColor = HeaderColorKey | RGB;

export interface WebAppState {
  backgroundColor: RGB;
  headerColor: WebAppHeaderColor;
}

export type WebAppEvents = StateEvents<WebAppState>;

export type WebAppEventName = keyof WebAppEvents;

export type WebAppEventListener<E extends WebAppEventName> = WebAppEvents[E];
