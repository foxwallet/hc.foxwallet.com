---
sidebar_position: 2
---

# WebView

### isFoxWallet
```
// check the UserAgent include "FoxWallet"
var isFoxWallet = navigator.userAgent.indexOf('FoxWallet') > 0;

// check the var
var isFoxWallet = !!window.foxwallet;
```

### Ethereum Provider

**FoxWallet uses the same protocol as MetaMask.**

```
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

```
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

```
function getProvider() {
  const provider = window.foxwallet && window.foxwallet.aptos;
  if (!provider) {
    window.open('https://foxwallet.com/download');
    throw `Please guide users to download from FoxWallet official website`
  }
  return provider;
}
```
