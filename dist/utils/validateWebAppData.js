import crypto from "crypto";
export var validateWebAppData = function (initData, botToken) {
    var params = new URLSearchParams(initData);
    var hash = params.get("hash");
    if (!hash) {
        return { isValid: false, reason: "Missing hash parameter" };
    }
    params.delete("hash");
    var dataCheckString = Array.from(params.entries())
        .map(function (_a) {
        var key = _a[0], value = _a[1];
        return "".concat(key, "=").concat(value);
    })
        .sort()
        .join("\n");
    var secretKey = crypto
        .createHmac("sha256", "WebAppData")
        .update(botToken)
        .digest();
    var generatedHash = crypto
        .createHmac("sha256", secretKey)
        .update(dataCheckString)
        .digest("hex");
    if (generatedHash !== hash) {
        return { isValid: false, reason: "Hash mismatch" };
    }
    var authDate = parseInt(params.get("auth_date") || "0", 10);
    var now = Math.floor(Date.now() / 1000);
    if (now - authDate > 86400) {
        return { isValid: false, reason: "Auth date is too old" };
    }
    return { isValid: true };
};
