import React, { createContext, useContext, useEffect, useMemo, useState, } from "react";
import Script from "../utils/ScriptLoader";
export var TelegramContext = createContext({});
export var TelegramProvider = function (_a) {
    var children = _a.children, onReady = _a.onReady, onError = _a.onError;
    var _b = useState(null), webApp = _b[0], setWebApp = _b[1];
    var _c = useState(null), error = _c[0], setError = _c[1];
    var _d = useState(null), referralCode = _d[0], setReferralCode = _d[1];
    useEffect(function () {
        var _a;
        try {
            var app = (_a = window.Telegram) === null || _a === void 0 ? void 0 : _a.WebApp;
            if (app) {
                app.ready();
                setWebApp(app);
                var startParam = app.initDataUnsafe.start_param;
                if (startParam) {
                    setReferralCode(startParam);
                    console.log("Referral code: ".concat(startParam));
                }
                if (onReady)
                    onReady(app);
                console.log("Telegram WebApp is ready.");
            }
            else {
                var errorMessage = "Telegram WebApp is not available.";
                setError(errorMessage);
                if (onError)
                    onError(errorMessage);
                console.error(errorMessage);
            }
        }
        catch (err) {
            var errorMessage = "Failed to initialize Telegram WebApp: ".concat(err.message || "Unknown error");
            setError(errorMessage);
            if (onError)
                onError(errorMessage);
            console.error(errorMessage);
        }
    }, [onReady, onError]);
    var value = useMemo(function () {
        return webApp
            ? {
                webApp: webApp,
                user: webApp.initDataUnsafe.user,
                referralCode: referralCode,
            }
            : {};
    }, [webApp, referralCode]);
    return (React.createElement(TelegramContext.Provider, { value: value },
        React.createElement(Script, { src: "https://telegram.org/js/telegram-web-app.js", strategy: "beforeInteractive" }),
        error ? React.createElement("div", null,
            "Error: ",
            error) : children));
};
export var useTelegram = function () { return useContext(TelegramContext); };
