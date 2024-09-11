import { ThemeParams } from "./themeParams";
import { WebAppInitData } from "./webAppInitData";
import { WebAppUser } from "./webAppUser";
import { WebAppChat } from "./webAppChat";
import { BackButton } from "./backButton";
import { MainButton } from "./mainButton";
import { SettingsButton } from "./settingsButton";
import { HapticFeedback } from "./hapticFeedback";
import { CloudStorage } from "./cloudStorage";
import { BiometricManager } from "./biometricManager";
import { BiometricRequestAccessParams } from "./biometricRequestAccessParams";
import { BiometricAuthenticateParams } from "./biometricAuthenticateParams";
import { StoryShareParams } from "./storyShareParams";
import { StoryWidgetLink } from "./storyWidgetLink";
import { ScanQrPopupParams } from "./scanQrPopupParams";
import { PopupParams } from "./popupParams";
import { PopupButton } from "./popupButton";
export interface WebApp {
    initData: string;
    initDataUnsafe: WebAppInitData;
    version: string;
    platform: string;
    colorScheme: "light" | "dark";
    themeParams: ThemeParams;
    isExpanded: boolean;
    viewportHeight: number;
    viewportStableHeight: number;
    headerColor: string;
    backgroundColor: string;
    isClosingConfirmationEnabled: boolean;
    isVerticalSwipesEnabled: boolean;
    BackButton: BackButton;
    MainButton: MainButton;
    SettingsButton: SettingsButton;
    HapticFeedback: HapticFeedback;
    CloudStorage: CloudStorage;
    BiometricManager: BiometricManager;
    isVersionAtLeast(version: string): boolean;
    setHeaderColor(color: string): void;
    setBackgroundColor(color: string): void;
    enableClosingConfirmation(): void;
    disableClosingConfirmation(): void;
    enableVerticalSwipes(): void;
    disableVerticalSwipes(): void;
    onEvent(eventType: string, eventHandler: (event: any) => void): void;
    offEvent(eventType: string, eventHandler: (event: any) => void): void;
    sendData(data: string): void;
    switchInlineQuery(query: string, choose_chat_types?: string[]): void;
    openLink(url: string, options?: {
        try_instant_view?: boolean;
    }): void;
    openTelegramLink(url: string): void;
    openInvoice(url: string, callback?: (status: string) => void): void;
    shareToStory(media_url: string, params?: StoryShareParams): void;
    showPopup(params: PopupParams): void;
    showAlert(message: string, callback?: () => void): void;
    showConfirm(message: string, callback?: (result: boolean) => void): void;
    showScanQrPopup(params: ScanQrPopupParams): void;
    closeScanQrPopup(): void;
    readTextFromClipboard(callback?: (text: string) => void): void;
    requestWriteAccess(callback?: (granted: boolean) => void): void;
    requestContact(callback?: (granted: boolean) => void): void;
    ready(): void;
    expand(): void;
    close(): void;
}
export type { ThemeParams, WebAppInitData, WebAppUser, WebAppChat, BackButton, MainButton, SettingsButton, HapticFeedback, CloudStorage, BiometricManager, BiometricRequestAccessParams, BiometricAuthenticateParams, StoryShareParams, StoryWidgetLink, ScanQrPopupParams, PopupParams, PopupButton, };
//# sourceMappingURL=index.d.ts.map