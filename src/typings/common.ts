import type { langKey } from './language'

export type I18NData<T> = {
  [key in langKey]: T
}
