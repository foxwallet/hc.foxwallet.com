# Solana Provider

**FoxWallet employs the same protocol as Phantom. Currently, Solana network is only supported in the FoxWallet mobile app, with Chrome extension support coming soon.**

### Get Provider

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
## Supported Connectors

### [@foxwallet/wallet-adapter-foxwallet](https://www.npmjs.com/package/@foxwallet/wallet-adapter-foxwallet)