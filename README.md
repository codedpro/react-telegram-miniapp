# React Telegram MiniApp

![npm](https://img.shields.io/npm/v/telegram-miniapp)
![license](https://img.shields.io/npm/l/telegram-miniapp)
![GitHub stars](https://img.shields.io/github/stars/codedpro/telegram-miniapp)
![GitHub issues](https://img.shields.io/github/issues/codedpro/telegram-miniapp)

## Overview

**React Telegram MiniApp** is a lightweight, developer-friendly library that facilitates the integration of Telegram Mini Apps within React and Next.js projects. It provides convenient hooks, components, and utilities to work with Telegram WebApps API, allowing you to create rich, interactive experiences in Telegram.

## Features

- 🌟 **TelegramProvider**: A context provider to initialize and manage the state of the Telegram WebApp across your React components.
- 🔄 **Custom Hooks**: Easily handle Telegram WebApp events like theme changes, button clicks, and more using provided hooks.
- 🔐 **Data Validation**: Securely validate the data received from the Telegram WebApp on your backend with provided utilities.
- 🛠️ **TypeScript Support**: Fully typed with TypeScript for a robust development experience.
- 🎛️ **Custom Script Loader**: Automatically loads the Telegram WebApp script based on the environment (Next.js or standard React).

## Installation

To install the package, use npm or yarn:

```bash
npm install react-telegram-miniapp
# or
yarn add react-telegram-miniapp
```

## Getting Started

### 1. Wrap Your Application with `TelegramProvider`

In your main app component or any component that needs access to the Telegram WebApp context, wrap it with `TelegramProvider`.

```tsx
import React from 'react';
import { TelegramProvider } from 'react-telegram-miniapp';

const MyApp = ({ Component, pageProps }) => (
  <TelegramProvider>
    <Component {...pageProps} />
  </TelegramProvider>
);

export default MyApp;
```

### 2. Use Hooks to Handle Telegram Events

You can use the provided hooks to respond to various Telegram WebApp events:

```tsx
import React from 'react';
import { useThemeChanged, useMainButtonClicked } from 'react-telegram-miniapp';

const MyComponent = () => {
  // Handle theme change
  useThemeChanged(() => {
    console.log("Theme changed!");
  });

  // Handle main button click
  useMainButtonClicked(() => {
    console.log("Main button clicked!");
  });

  return (
    <div>
      <h1>Hello, Telegram User!</h1>
    </div>
  );
};

export default MyComponent;
```

### 3. Validate Telegram WebApp Data on the Backend

You can securely validate data received from the Telegram WebApp using the `validateWebAppData` utility:

```typescript
import { validateWebAppData } from 'react-telegram-miniapp';

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

## API Documentation

### Components

#### `TelegramProvider`

- **Description**: Initializes and manages the state of the Telegram WebApp.
- **Props**:
  - `children`: ReactNode - The components wrapped by the provider.

### Hooks

#### `useThemeChanged`

- **Description**: Hook to handle the `themeChanged` event.
- **Usage**:

```tsx
useThemeChanged(() => {
  // Handle theme change
});
```

#### `useMainButtonClicked`

- **Description**: Hook to handle the `mainButtonClicked` event.
- **Usage**:

```tsx
useMainButtonClicked(() => {
  // Handle main button click
});
```

#### Other Hooks

- `useViewportChanged`: Handles the `viewportChanged` event.
- `useBackButtonClicked`: Handles the `backButtonClicked` event.
- `useSettingsButtonClicked`: Handles the `settingsButtonClicked` event.
- `useInvoiceClosed`: Handles the `invoiceClosed` event.
- `usePopupClosed`: Handles the `popupClosed` event.
- `useQrTextReceived`: Handles the `qrTextReceived` event.
- `useScanQrPopupClosed`: Handles the `scanQrPopupClosed` event.
- `useClipboardTextReceived`: Handles the `clipboardTextReceived` event.
- `useWriteAccessRequested`: Handles the `writeAccessRequested` event.
- `useContactRequested`: Handles the `contactRequested` event.
- `useBiometricManagerUpdated`: Handles the `biometricManagerUpdated` event.
- `useBiometricAuthRequested`: Handles the `biometricAuthRequested` event.
- `useBiometricTokenUpdated`: Handles the `biometricTokenUpdated` event.

### Utilities

#### `validateWebAppData`

- **Description**: Validates the integrity of data received from the Telegram WebApp.
- **Parameters**:
  - `initData: string` - The data received from the WebApp.
  - `botToken: string` - Your bot’s token.
  - `options?: ValidationOptions` - Optional configuration (e.g., expirationTime, logDetails).
- **Returns**: `{ isValid: boolean, reason?: string, details?: Record<string, any> }`
- **Usage**:

```typescript
const validationResult = validateWebAppData(initData, botToken, { logDetails: true });
```

## Advanced Usage

### Handling Multiple Events with Global Event Management

For more complex scenarios, you may want to manage multiple Telegram WebApp events centrally. You can achieve this by using a custom hook or a context for event management.

```typescript
import { useGlobalEventManager } from 'react-telegram-miniapp';

const { registerEvent, unregisterEvent } = useGlobalEventManager();

useEffect(() => {
  const themeHandler = () => console.log('Theme changed!');
  registerEvent('themeChanged', themeHandler);

  return () => unregisterEvent('themeChanged', themeHandler);
}, [registerEvent, unregisterEvent]);
```

### Customizing Event Handling with Options

You can customize how events are handled by passing options like `debounce`, `throttle`, `once`, and `debug`:

```typescript
useThemeChanged(() => {
  console.log('Theme changed!');
}, { debounce: 300, debug: true });
```


### Debugging Tips

- **Enable Debug Mode**: Pass `{ debug: true }` to any hook to log detailed information about events.
- **Check Validation Failures**: When using `validateWebAppData`, inspect the `details` object in the return value to understand why validation failed.

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/codedpro/telegram-miniapp/issues) if you want to contribute.


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

Special thanks to the contributors and the Telegram team for their awesome platform.

---

Developed by [CodedPro](https://github.com/codedpro)

---
