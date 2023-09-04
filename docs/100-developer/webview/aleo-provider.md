# Aleo Provider

**FoxWallet uses the same protocol as Leo Wallet.**

### getProvider

```js
function getProvider() {
  const provider = window.foxwallet && window.foxwallet.aleo;
  if (!provider) {
    window.open("https://foxwallet.com/download");
    throw `Please guide users to download from FoxWallet official website`;
  }
  return provider;
}
```
