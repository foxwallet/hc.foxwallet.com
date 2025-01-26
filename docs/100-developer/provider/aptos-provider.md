# Aptos Provider

**FoxWallet employs the same protocol as Petra. Currently, Aptos network is only supported in the FoxWallet mobile app, with Chrome extension support coming soon.**

## Get Provider

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

## Supported Connectors
### [@manahippo/aptos-wallet-adapter](https://www.npmjs.com/package/@manahippo/aptos-wallet-adapter)
  ```js
  import { FoxWalletAdapter } from '@manahippo/aptos-wallet-adapter';
  ```
