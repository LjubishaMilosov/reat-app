export type PageId = string;
export type PagesConfig = Record<PageId, Record<string, string>>;
export type HostsConfig = Record<string, string>;
export type ElementKey = string;
export type ElementLocator = string;
export type PageElementMappings = Record<PageId, Record<ElementKey, ElementLocator>>
export type globalVariables = { [key: string]: string };
export type EmailsConfig = Record<string, string>;

export type GlobalConfig = {
    hostsConfig:HostsConfig;
    pagesConfig:PagesConfig;
    pageElementMappings: PageElementMappings;
    emailsConfig: EmailsConfig;
}