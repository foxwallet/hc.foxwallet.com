# Ton Provider

**FoxWallet uses the same protocol as TonKeeper, and Ton network is only supported in FoxWallet mobile app, Chrome plugin is not yet supported**

## Get Provider

```js
function getProvider() {
  const provider = window.foxwallet && window.foxwallet.tonconnect;
  if (!provider) {
    window.open("https://foxwallet.com/download");
    throw `Please guide users to download from FoxWallet official website`;
  }
  return provider;
}
```