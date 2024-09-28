import { writable } from 'svelte/store';

import en from './locale/en.json';
import pt from './locale/pt.json';

type Locale = 'en' | 'pt';

export const language = writable<Locale>('pt');

export function t(locale: Locale = 'pt') {
  const locales = {
    en,
    pt
  };

  return locales[locale];
}
