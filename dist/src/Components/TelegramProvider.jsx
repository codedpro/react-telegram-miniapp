import React, { createContext, useContext, useEffect, useMemo, useState, } from "react";
import Script from "../utils/ScriptLoader";
export var TelegramContext = createContext({});
export var TelegramProvider = function (_a) {
    var children = _a.children, onReady = _a.onReady, onError = _a.onError;
    var _b = useState(null), webApp = _b[0], setWebApp = _b[1];
    var _c = useState(null), error = _c[0], setError = _c[1];
    useEffect(function () {
        var _a;
        try {
            var app = (_a = window.Telegram) === null || _a === void 0 ? void 0 : _a.WebApp;
            if (app) {
                app.ready();
                setWebApp(app);
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
            }
            : {};
    }, [webApp]);
    return (<TelegramContext.Provider value={value}>
      <Script src="https://telegram.org/js/telegram-web-app.js" strategy="beforeInteractive"/>
      {error ? <div>Error: {error}</div> : children}
    </TelegramContext.Provider>);
};
export var useTelegram = function () { return useContext(TelegramContext); };
