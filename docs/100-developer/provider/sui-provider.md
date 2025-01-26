# Sui Provider

**FoxWallet employs the same protocol as Sui Wallet. Currently, Sui network is only supported in the FoxWallet mobile app, with Chrome extension support coming soon.**

Use injected provider or [Wallet Standard](https://github.com/wallet-standard/wallet-standard).

### Get Provider

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