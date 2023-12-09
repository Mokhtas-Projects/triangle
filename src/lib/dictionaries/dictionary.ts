import type { Locale } from '@/i18n.config'

const dictionaries = {
	ar: () =>
		import('@/lib/dictionaries/ar.json').then((module) => module.default),
	en: () =>
		import('@/lib/dictionaries/en.json').then((module) => module.default)
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()
