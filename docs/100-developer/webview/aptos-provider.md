# Aptos Provider

**FoxWallet uses the same protocol as Petra.**

### getProvider

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

### SDK
* [@manahippo/aptos-wallet-adapter](https://www.npmjs.com/package/@manahippo/aptos-wallet-adapter)
  ```js
  import { FoxWalletAdapter } from '@manahippo/aptos-wallet-adapter';
  ```
