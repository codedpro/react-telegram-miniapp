import React from "react";
import { WebApp, WebAppUser } from "../types";
export interface TelegramContextType {
    webApp?: WebApp;
    user?: WebAppUser;
    referralCode?: string | null;
}
export interface TelegramProviderProps {
    children: React.ReactNode;
    onReady?: (webApp: WebApp) => void;
    onError?: (error: string) => void;
}
export declare const TelegramContext: React.Context<TelegramContextType>;
export declare const TelegramProvider: React.FC<TelegramProviderProps>;
export declare const useTelegram: () => TelegramContextType;
//# sourceMappingURL=TelegramProvider.d.ts.map