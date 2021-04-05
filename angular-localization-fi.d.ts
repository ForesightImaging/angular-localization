export interface Locale {
    setLocale(value: string);
    getLocale(): string;
    getString(key: string, params?: string | string[]): string;
}

export type LocaleNames = Language[];
export interface Language {
    locale: string;
    language: string;
}

export interface LocaleEvents {
    readonly resourceUpdates: string;
    readonly localeChanges: string;
};