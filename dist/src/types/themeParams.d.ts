export interface ThemeParams {
    /**
     * Optional. Background color in the #RRGGBB format.
     * Also available as the CSS variable var(--tg-theme-bg-color).
     */
    bg_color?: string;
    /**
     * Optional. Main text color in the #RRGGBB format.
     * Also available as the CSS variable var(--tg-theme-text-color).
     */
    text_color?: string;
    /**
     * Optional. Hint text color in the #RRGGBB format.
     * Also available as the CSS variable var(--tg-theme-hint-color).
     */
    hint_color?: string;
    /**
     * Optional. Link color in the #RRGGBB format.
     * Also available as the CSS variable var(--tg-theme-link-color).
     */
    link_color?: string;
    /**
     * Optional. Button color in the #RRGGBB format.
     * Also available as the CSS variable var(--tg-theme-button-color).
     */
    button_color?: string;
    /**
     * Optional. Button text color in the #RRGGBB format.
     * Also available as the CSS variable var(--tg-theme-button-text-color).
     */
    button_text_color?: string;
    /**
     * Optional. Secondary background color in the #RRGGBB format.
     * Bot API 6.1+
     * Also available as the CSS variable var(--tg-theme-secondary-bg-color).
     */
    secondary_bg_color?: string;
    /**
     * Optional. Header background color in the #RRGGBB format.
     * Bot API 7.0+
     * Also available as the CSS variable var(--tg-theme-header-bg-color).
     */
    header_bg_color?: string;
    /**
     * Optional. Accent text color in the #RRGGBB format.
     * Bot API 7.0+
     * Also available as the CSS variable var(--tg-theme-accent-text-color).
     */
    accent_text_color?: string;
    /**
     * Optional. Background color for the section in the #RRGGBB format.
     * Bot API 7.0+
     * It is recommended to use this in conjunction with secondary_bg_color.
     * Also available as the CSS variable var(--tg-theme-section-bg-color).
     */
    section_bg_color?: string;
    /**
     * Optional. Header text color for the section in the #RRGGBB format.
     * Bot API 7.0+
     * Also available as the CSS variable var(--tg-theme-section-header-text-color).
     */
    section_header_text_color?: string;
    /**
     * Optional. Section separator color in the #RRGGBB format.
     * Bot API 7.6+
     * Also available as the CSS variable var(--tg-theme-section-separator-color).
     */
    section_separator_color?: string;
    /**
     * Optional. Subtitle text color in the #RRGGBB format.
     * Bot API 7.0+
     * Also available as the CSS variable var(--tg-theme-subtitle-text-color).
     */
    subtitle_text_color?: string;
    /**
     * Optional. Text color for destructive actions in the #RRGGBB format.
     * Bot API 7.0+
     * Also available as the CSS variable var(--tg-theme-destructive-text-color).
     */
    destructive_text_color?: string;
}
//# sourceMappingURL=themeParams.d.ts.map