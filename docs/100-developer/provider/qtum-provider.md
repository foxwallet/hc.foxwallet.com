# Qtum Provider

**FoxWallet uses the same protocol as [Qnekt](https://github.com/qtumproject/metamask-extension).**

### getProvider

```js
function getProvider() {
  const provider = window.foxwallet && window.foxwallet.qtum;
  if (!provider) {
    window.open('https://foxwallet.com/download');
    throw `Please guide users to download from FoxWallet official website`
  }
  return provider;
}
```
