export interface IOptions {
    textResources?: ITextResources;
    themes?: IThemes;
    initialTheme?: string
}

export interface IThemes {
    light?: ITheme;
    dark?: ITheme;
    "high-contrast"?: ITheme;
}

export interface ITheme {
    "banner-background-color"?: string;
    "cookieModal-background-color"?: string;
    "preferences-background-color"?: string;
    "border-color"?: string;
    "close-button-color"?: string;
    "hyperlink-font-color"?: string;
    "text-color"?: string;
    "secondary-button-color"?: string;
    "secondary-button-hover-color"?: string;
    "secondary-button-disabled-opacity"?: string;
    "secondary-button-disabled-color"?: string;
    "secondary-button-border"?: string;
    "secondary-button-hover-border"?: string;
    "secondary-button-disabled-border"?: string;
    "secondary-button-focus-border-color"?: string;
    "secondary-button-text-color"?: string;
    "secondary-button-disabled-text-color"?: string;
    "secondary-button-hover-shadow"?: string;
    "primary-button-color"?: string;
    "primary-button-hover-color"?: string;
    "primary-button-disabled-opacity"?: string;
    "primary-button-disabled-color"?: string;
    "primary-button-border"?: string;
    "primary-button-hover-border"?: string;
    "primary-button-disabled-border"?: string;
    "primary-button-focus-border-color"?: string;
    "primary-button-text-color"?: string;
    "primary-button-disabled-text-color"?: string;
    "primary-button-hover-shadow"?: string;
    "radio-button-border-color"?: string;
    "radio-button-background-color"?: string;
    "radio-button-hover-border-color"?: string;
    "radio-button-hover-background-color"?: string;
    "radio-button-disabled-color"?: string;
    "radio-button-disabled-border-color"?: string;
}

export interface ITextResources {
    bannerMessageHtml?: string;
    acceptAllLabel?: string;
    moreInfoLabel?: string;
    preferencesDialogCloseLabel?: string;
    preferencesDialogTitle?: string;
    preferencesDialogDescHtml?: string;
    acceptLabel?: string;
    rejectLabel?: string;
    saveLabel?: string;
    resetLabel?: string;
}
