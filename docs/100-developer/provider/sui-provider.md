# Sui Provider

**FoxWallet uses the same protocol as Sui Wallet, and Sui network is only supported in FoxWallet mobile app, Chrome plugin is not yet supported**

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