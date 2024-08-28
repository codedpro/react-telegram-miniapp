export interface PopupButton {
    /**
     * Optional. Identifier of the button, 0-64 characters. Set to empty string by default.
     * If the button is pressed, its id is returned in the callback and the popupClosed event.
     */
    id?: string;
    /**
     * Optional. Type of the button. Set to "default" by default.
     * Can be one of these values:
     * - 'default': A button with the default style.
     * - 'ok': A button with the localized text “OK”.
     * - 'close': A button with the localized text “Close”.
     * - 'cancel': A button with the localized text “Cancel”.
     * - 'destructive': A button with a style that indicates a destructive action (e.g. “Remove”, “Delete”, etc.).
     */
    type?: 'default' | 'ok' | 'close' | 'cancel' | 'destructive';
    /**
     * Optional. The text to be displayed on the button, 0-64 characters.
     * Required if type is 'default' or 'destructive'. Irrelevant for other types.
     */
    text?: string;
}
//# sourceMappingURL=popupButton.d.ts.map