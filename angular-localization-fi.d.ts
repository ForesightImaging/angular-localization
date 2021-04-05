export interface Locale {
    setLocale(value: string);
    getLocale(): string;
    getString(key: string, params?: string | string[]): string;
}