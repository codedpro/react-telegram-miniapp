interface EventOptions {
    debounce?: number;
    throttle?: number;
    once?: boolean;
    debug?: boolean;
    context?: any;
}
export declare const useThemeChanged: (handler: () => void, options?: EventOptions) => void;
export declare const useViewportChanged: (handler: (event: {
    isStateStable: boolean;
}) => void, options?: EventOptions) => void;
export declare const useMainButtonClicked: (handler: () => void, options?: EventOptions) => void;
export declare const useBackButtonClicked: (handler: () => void, options?: EventOptions) => void;
export declare const useSettingsButtonClicked: (handler: () => void, options?: EventOptions) => void;
export declare const useInvoiceClosed: (handler: (event: {
    url: string;
    status: string;
}) => void, options?: EventOptions) => void;
export declare const usePopupClosed: (handler: (event: {
    button_id: string | null;
}) => void, options?: EventOptions) => void;
export declare const useQrTextReceived: (handler: (event: {
    data: string;
}) => void, options?: EventOptions) => void;
export declare const useScanQrPopupClosed: (handler: () => void, options?: EventOptions) => void;
export declare const useClipboardTextReceived: (handler: (event: {
    data: string | null;
}) => void, options?: EventOptions) => void;
export declare const useWriteAccessRequested: (handler: (event: {
    status: string;
}) => void, options?: EventOptions) => void;
export declare const useContactRequested: (handler: (event: {
    status: string;
}) => void, options?: EventOptions) => void;
export declare const useBiometricManagerUpdated: (handler: () => void, options?: EventOptions) => void;
export declare const useBiometricAuthRequested: (handler: (event: {
    isAuthenticated: boolean;
    biometricToken?: string;
}) => void, options?: EventOptions) => void;
export declare const useBiometricTokenUpdated: (handler: (event: {
    isUpdated: boolean;
}) => void, options?: EventOptions) => void;
export {};
//# sourceMappingURL=useTelegramEvents.d.ts.map