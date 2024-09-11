export interface HapticFeedback {
    /**
     * A method that tells the Telegram app that an impact occurred.
     * The app may play the appropriate haptics based on the style value passed.
     *
     * @param style - The style of impact. It can be one of the following values:
     *  - 'light': Indicates a collision between small or lightweight UI objects.
     *  - 'medium': Indicates a collision between medium-sized or medium-weight UI objects.
     *  - 'heavy': Indicates a collision between large or heavyweight UI objects.
     *  - 'rigid': Indicates a collision between hard or inflexible UI objects.
     *  - 'soft': Indicates a collision between soft or flexible UI objects.
     */
    impactOccurred(style: 'light' | 'medium' | 'heavy' | 'rigid' | 'soft'): void;
    /**
     * A method that tells the Telegram app that a task or action has succeeded, failed, or produced a warning.
     * The app may play the appropriate haptics based on the type value passed.
     *
     * @param type - The type of notification. It can be one of the following values:
     *  - 'error': Indicates that a task or action has failed.
     *  - 'success': Indicates that a task or action has completed successfully.
     *  - 'warning': Indicates that a task or action produced a warning.
     */
    notificationOccurred(type: 'error' | 'success' | 'warning'): void;
    /**
     * A method that tells the Telegram app that the user has changed a selection.
     * The app may play the appropriate haptics.
     *
     * Do not use this feedback when the user makes or confirms a selection;
     * use it only when the selection changes.
     */
    selectionChanged(): void;
}
//# sourceMappingURL=hapticFeedback.d.ts.map