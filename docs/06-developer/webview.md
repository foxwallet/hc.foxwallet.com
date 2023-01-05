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
