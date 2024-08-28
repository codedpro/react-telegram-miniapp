# React Telegram MiniApp

![npm version](https://img.shields.io/npm/v/telegram-miniapp)
![license](https://img.shields.io/npm/l/telegram-miniapp)
![GitHub stars](https://img.shields.io/github/stars/codedpro/telegram-miniapp)
![GitHub issues](https://img.shields.io/github/issues/codedpro/telegram-miniapp)

## Overview

**React Telegram MiniApp** is a developer-centric library tailored for seamless integration of Telegram Mini Apps into React and Next.js projects. It provides a rich set of hooks, components, and utilities to work with the Telegram WebApps API, enabling the creation of highly interactive experiences within Telegram.

## Features

- 🌟 **TelegramProvider**: Efficiently manage the Telegram WebApp context state across your React components.
- 🔄 **Custom Hooks**: Simplified handling of Telegram WebApp events like theme changes, button interactions, and more.
- 🔐 **Data Validation**: Securely validate data received from the Telegram WebApp on your backend.
- 🛠️ **TypeScript Support**: Fully typed, ensuring a robust and type-safe development experience.
- 🎛️ **Custom Script Loader**: Automatically loads the Telegram WebApp script based on the environment.

## Installation

Install the package using your preferred package manager:

```bash
npm install telegram-miniapp
# or
yarn add telegram-miniapp
# or
pnpm install telegram-miniapp
```

## Getting Started

### 1. Wrap Your Application with `TelegramProvider`

Wrap your main application component with `TelegramProvider` to initialize the Telegram WebApp context.

```tsx
import React from 'react';
import { TelegramProvider } from 'telegram-miniapp';

const MyApp = ({ Component, pageProps }) => (
  <TelegramProvider>
    <Component {...pageProps} />
  </TelegramProvider>
);

export default MyApp;
```

### 2. Utilize Hooks to Handle Telegram Events

Leverage the provided hooks to manage various Telegram WebApp events:

```tsx
import React from 'react';
import { useThemeChanged, useMainButtonClicked } from 'telegram-miniapp';

const MyComponent = () => {
  useThemeChanged(() => {
    console.log("Theme changed!");
  });

  useMainButtonClicked(() => {
    console.log("Main button clicked!");
  });

  return <h1>Hello, Telegram User!</h1>;
};

export default MyComponent;
```

### 3. Validate Telegram WebApp Data on the Backend

Securely validate the data received from the Telegram WebApp using the `validateWebAppData` utility:

```typescript
import { validateWebAppData } from 'telegram-miniapp';

const botToken = 'YOUR_BOT_TOKEN';

app.post('/validate-webapp-data', (req, res) => {
  const { initData } = req.body;

  const validationResult = validateWebAppData(initData, botToken);

  if (validationResult.isValid) {
    res.status(200).send('Data is valid');
  } else {
    res.status(400).send(`Invalid data: ${validationResult.reason}`);
  }
});
```

## Documentation

### Components

| Component          | Description                                                | Props                                        |
|--------------------|------------------------------------------------------------|----------------------------------------------|
| `TelegramProvider` | Initializes and manages the Telegram WebApp context.       | `children`: ReactNode - Components to wrap.  |

### Hooks

| Hook                        | Description                                         | Example Usage                                                                                     |
|-----------------------------|-----------------------------------------------------|----------------------------------------------------------------------------------------------------|
| `useThemeChanged`           | Handles the `themeChanged` event.                   | `useThemeChanged(() => { console.log("Theme changed!"); });`                                       |
| `useMainButtonClicked`      | Handles the `mainButtonClicked` event.              | `useMainButtonClicked(() => { console.log("Main button clicked!"); });`                            |
| `useViewportChanged`        | Handles the `viewportChanged` event.                | `useViewportChanged((event) => { console.log("Viewport changed:", event); });`                     |
| `useBackButtonClicked`      | Handles the `backButtonClicked` event.              | `useBackButtonClicked(() => { console.log("Back button clicked!"); });`                            |
| `useSettingsButtonClicked`  | Handles the `settingsButtonClicked` event.          | `useSettingsButtonClicked(() => { console.log("Settings button clicked!"); });`                    |
| `useInvoiceClosed`          | Handles the `invoiceClosed` event.                  | `useInvoiceClosed((event) => { console.log("Invoice closed:", event); });`                         |
| `usePopupClosed`            | Handles the `popupClosed` event.                    | `usePopupClosed((event) => { console.log("Popup closed:", event); });`                             |
| `useQrTextReceived`         | Handles the `qrTextReceived` event.                 | `useQrTextReceived((event) => { console.log("QR text received:", event.data); });`                 |
| `useScanQrPopupClosed`      | Handles the `scanQrPopupClosed` event.              | `useScanQrPopupClosed(() => { console.log("QR scan popup closed!"); });`                           |
| `useClipboardTextReceived`  | Handles the `clipboardTextReceived` event.          | `useClipboardTextReceived((event) => { console.log("Clipboard text received:", event.data); });`   |
| `useWriteAccessRequested`   | Handles the `writeAccessRequested` event.           | `useWriteAccessRequested((event) => { console.log("Write access requested:", event.status); });`   |
| `useContactRequested`       | Handles the `contactRequested` event.               | `useContactRequested((event) => { console.log("Contact requested:", event.status); });`            |
| `useBiometricManagerUpdated`| Handles the `biometricManagerUpdated` event.        | `useBiometricManagerUpdated(() => { console.log("Biometric manager updated!"); });`                |
| `useBiometricAuthRequested` | Handles the `biometricAuthRequested` event.         | `useBiometricAuthRequested((event) => { console.log("Biometric auth requested:", event.isAuthenticated); });` |
| `useBiometricTokenUpdated`  | Handles the `biometricTokenUpdated` event.          | `useBiometricTokenUpdated((event) => { console.log("Biometric token updated:", event.isUpdated); });` |

### Utilities

#### `validateWebAppData`

- **Description**: Validates the integrity of data received from the Telegram WebApp.
- **Parameters**:
  - `initData: string` - The data received from the WebApp.
  - `botToken: string` - Your bot’s token.
- **Returns**: `{ isValid: boolean, reason?: string }`
- **Example Usage**:

```typescript
const validationResult = validateWebAppData(initData, botToken);

if (validationResult.isValid) {
  console.log("Data is valid");
} else {
  console.log("Invalid data:", validationResult.reason);
}
```

## Advanced Usage

### Centralized Event Management

To manage multiple Telegram WebApp events centrally, utilize a custom hook or context:

```typescript
import { useGlobalEventManager } from 'telegram-miniapp';

const { registerEvent, unregisterEvent } = useGlobalEventManager();

useEffect(() => {
  const themeHandler = () => console.log('Theme changed!');
  registerEvent('themeChanged', themeHandler);

  return () => unregisterEvent('themeChanged', themeHandler);
}, [registerEvent, unregisterEvent]);
```

### Customizing Event Handling

Tailor event handling with options like `debounce`, `throttle`, `once`, and `debug`:

```typescript
useThemeChanged(() => {
  console.log('Theme changed!');
}, { debounce: 300, debug: true });
```

### Debugging Tips

- **Enable Debug Mode**: Pass `{ debug: true }` to any hook to log detailed event information.
- **Inspect Validation Failures**: When using `validateWebAppData`, check the `reason` to understand validation issues.

## Contributing

We welcome contributions, issues, and feature requests! Check the [issues page](https://github.com/codedpro/telegram-miniapp/issues) to see how you can help.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

Special thanks to the contributors and the Telegram team for their exceptional platform.

---

Developed by [CodedPro](https://github.com/codedpro)

---

