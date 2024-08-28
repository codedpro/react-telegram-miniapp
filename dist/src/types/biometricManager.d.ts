import { BiometricRequestAccessParams } from './biometricRequestAccessParams';
import { BiometricAuthenticateParams } from './biometricAuthenticateParams';
export interface BiometricManager {
    /**
     * Shows whether the biometrics object is initialized.
     */
    isInited: boolean;
    /**
     * Shows whether biometrics is available on the current device.
     */
    isBiometricAvailable: boolean;
    /**
     * The type of biometrics currently available on the device. Can be one of these values:
     * - 'finger': Fingerprint-based biometrics.
     * - 'face': Face-based biometrics.
     * - 'unknown': Biometrics of an unknown type.
     */
    biometricType: 'finger' | 'face' | 'unknown';
    /**
     * Shows whether permission to use biometrics has been requested.
     */
    isAccessRequested: boolean;
    /**
     * Shows whether permission to use biometrics has been granted.
     */
    isAccessGranted: boolean;
    /**
     * Shows whether the biometric token is saved in secure storage on the device.
     */
    isBiometricTokenSaved: boolean;
    /**
     * A unique device identifier that can be used to match the token to the device.
     */
    deviceId: string;
    /**
     * A method that initializes the BiometricManager object. It should be called before the object's first use.
     *
     * @param callback - An optional callback function that will be called when the object is initialized.
     */
    init(callback?: () => void): void;
    /**
     * A method that requests permission to use biometrics according to the params argument.
     *
     * @param params - The parameters for the biometric access request.
     * @param callback - An optional callback function that will be called when the access is requested.
     * The first argument will be a boolean indicating whether the user granted access.
     */
    requestAccess(params: BiometricRequestAccessParams, callback?: (accessGranted: boolean) => void): void;
    /**
     * A method that authenticates the user using biometrics according to the params argument.
     *
     * @param params - The parameters for the biometric authentication request.
     * @param callback - An optional callback function that will be called when the authentication is complete.
     * The first argument will be a boolean indicating whether the user authenticated successfully.
     * If successful, the second argument will be the biometric token.
     */
    authenticate(params: BiometricAuthenticateParams, callback?: (authenticated: boolean, token?: string) => void): void;
    /**
     * A method that updates the biometric token in secure storage on the device.
     *
     * @param token - The new biometric token. To remove the token, pass an empty string.
     * @param callback - An optional callback function that will be called when the token is updated.
     * The first argument will be a boolean indicating whether the token was updated.
     */
    updateBiometricToken(token: string, callback?: (updated: boolean) => void): void;
    /**
     * A method that opens the biometric access settings for bots.
     *
     * Note that this method can be called only in response to user interaction with the Mini App interface (e.g. a click inside the Mini App or on the main button).
     */
    openSettings(): void;
}
//# sourceMappingURL=biometricManager.d.ts.map