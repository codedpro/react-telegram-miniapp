import { useEffect, useRef } from "react";
import { useTelegram } from "../Components/TelegramProvider";
var useTelegramEvent = function (eventType, eventHandler, options) {
    var webApp = useTelegram().webApp;
    var lastCalled = useRef(0);
    var timeoutIdRef = useRef(null);
    useEffect(function () {
        if (!webApp)
            return;
        var handler = function (event) {
            if (options === null || options === void 0 ? void 0 : options.debug) {
                console.log("Event: ".concat(eventType), event);
            }
            var now = Date.now();
            if ((options === null || options === void 0 ? void 0 : options.throttle) && now - lastCalled.current < options.throttle) {
                return;
            }
            lastCalled.current = now;
            if (options === null || options === void 0 ? void 0 : options.debounce) {
                if (timeoutIdRef.current) {
                    clearTimeout(timeoutIdRef.current);
                }
                timeoutIdRef.current = setTimeout(function () {
                    eventHandler(event, options === null || options === void 0 ? void 0 : options.context);
                }, options.debounce);
            }
            else {
                eventHandler(event, options === null || options === void 0 ? void 0 : options.context);
            }
            if (options === null || options === void 0 ? void 0 : options.once) {
                webApp.offEvent(eventType, handler);
            }
        };
        webApp.onEvent(eventType, handler);
        return function () {
            if (timeoutIdRef.current) {
                clearTimeout(timeoutIdRef.current);
            }
            webApp.offEvent(eventType, handler);
        };
    }, [webApp, eventType, eventHandler, options]);
};
export var useThemeChanged = function (handler, options) {
    useTelegramEvent("themeChanged", handler, options);
};
export var useViewportChanged = function (handler, options) {
    useTelegramEvent("viewportChanged", handler, options);
};
export var useMainButtonClicked = function (handler, options) {
    useTelegramEvent("mainButtonClicked", handler, options);
};
export var useBackButtonClicked = function (handler, options) {
    useTelegramEvent("backButtonClicked", handler, options);
};
export var useSettingsButtonClicked = function (handler, options) {
    useTelegramEvent("settingsButtonClicked", handler, options);
};
export var useInvoiceClosed = function (handler, options) {
    useTelegramEvent("invoiceClosed", handler, options);
};
export var usePopupClosed = function (handler, options) {
    useTelegramEvent("popupClosed", handler, options);
};
export var useQrTextReceived = function (handler, options) {
    useTelegramEvent("qrTextReceived", handler, options);
};
export var useScanQrPopupClosed = function (handler, options) {
    useTelegramEvent("scanQrPopupClosed", handler, options);
};
export var useClipboardTextReceived = function (handler, options) {
    useTelegramEvent("clipboardTextReceived", handler, options);
};
export var useWriteAccessRequested = function (handler, options) {
    useTelegramEvent("writeAccessRequested", handler, options);
};
export var useContactRequested = function (handler, options) {
    useTelegramEvent("contactRequested", handler, options);
};
export var useBiometricManagerUpdated = function (handler, options) {
    useTelegramEvent("biometricManagerUpdated", handler, options);
};
export var useBiometricAuthRequested = function (handler, options) {
    useTelegramEvent("biometricAuthRequested", handler, options);
};
export var useBiometricTokenUpdated = function (handler, options) {
    useTelegramEvent("biometricTokenUpdated", handler, options);
};
