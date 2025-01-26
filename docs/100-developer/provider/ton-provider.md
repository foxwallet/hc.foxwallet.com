# Ton Provider

**FoxWallet employs the same protocol as TonKeeper. Currently, Ton network is only supported in the FoxWallet mobile app, with Chrome extension support coming soon.**

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