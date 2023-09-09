# Sui Provider

**FoxWallet uses the same protocol as Sui Wallet.**

Use injected provider or [Wallet Standard](https://github.com/wallet-standard/wallet-standard).

### getProvider

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