export interface BackButton {
    /**
     * Shows whether the button is visible. Set to false by default.
     */
    isVisible: boolean;
    /**
     * A method that sets the button press event handler.
     * An alias for Telegram.WebApp.onEvent('backButtonClicked', callback).
     *
     * @param callback - The function to be called when the button is clicked.
     */
    onClick(callback: () => void): void;
    /**
     * A method that removes the button press event handler.
     * An alias for Telegram.WebApp.offEvent('backButtonClicked', callback).
     *
     * @param callback - The function to be removed from the button click event.
     */
    offClick(callback: () => void): void;
    /**
     * A method to make the button active and visible.
     */
    show(): void;
    /**
     * A method to hide the button.
     */
    hide(): void;
}
//# sourceMappingURL=backButton.d.ts.map