---
sidebar_position: 2
---

# WebView

### isFoxWallet
```js
// check the UserAgent include "FoxWallet"
var isFoxWallet = navigator.userAgent.indexOf('FoxWallet') > 0;

// check the var
var isFoxWallet = !!window.foxwallet;
```

### Ethereum Provider

**FoxWallet uses the same protocol as MetaMask.**

```js
function getProvider() {
  const provider = window.foxwallet && window.foxwallet.ethereum;
  if (!provider) {
    window.open('https://foxwallet.com/download');
    throw `Please guide users to download from FoxWallet official website`
  }
  return provider;
}
```

#### Example of requestAccounts

```
const Provider = getProvider();
const accounts = await Provider.request({ method: 'eth_requestAccounts' }); // string[], an array of a single, hexadecimal Ethereum address string.
```

### Solana Provider

**FoxWallet uses the same protocol as Phantom.**

```js
function getProvider() {
  const provider = window.foxwallet && window.foxwallet.solana;
  if (!provider) {
    window.open('https://foxwallet.com/download');
    throw `Please guide users to download from FoxWallet official website`
  }
  return provider;
}
```

#### SDK
* [@foxwallet/wallet-adapter-foxwallet](https://www.npmjs.com/package/@foxwallet/wallet-adapter-foxwallet)

### Aptos Provider

**FoxWallet uses the same protocol as Petra.**

```js
function getProvider() {
  const provider = window.foxwallet && window.foxwallet.aptos;
  if (!provider) {
    window.open('https://foxwallet.com/download');
    throw `Please guide users to download from FoxWallet official website`
  }
  return provider;
}
```

#### SDK
* [@manahippo/aptos-wallet-adapter](https://www.npmjs.com/package/@manahippo/aptos-wallet-adapter)
  ```js
  import { FoxWalletAdapter } from '@manahippo/aptos-wallet-adapter';
  ```

### Sui Provider

**FoxWallet uses the same protocol as Sui Wallet.**

Use injected provider or [Wallet Standard](https://github.com/wallet-standard/wallet-standard).

```js
function getProvider() {
  const provider = window.foxwallet && window.foxwallet.suiWallet;
  if (!provider) {
    window.open('https://foxwallet.com/download');
    throw `Please guide users to download from FoxWallet official website`
  }
  return provider;
}
```