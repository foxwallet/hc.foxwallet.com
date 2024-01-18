# Custom Provider

### getProvider
```js
function getProvider() {
  const provider = window.foxwallet && window.foxwallet.custom;
  if (!provider) {
    window.open('https://foxwallet.com/download');
    throw `Please guide users to download from FoxWallet official website`
  }
  return provider;
}
```

### sync_wallet
Access the user's accounts includes information of all wallets.
* Returns  
`Promise` returns `Array<{uniqueId: chainUniqueId, address: string}>`
  * The `chainUniqueId` is defined in https://hc.foxwallet.com/docs/developer/chain-unique-id
* Example
  ```js
      const provider = getProvider();
      const accounts = await provider.syncWallet();
  ```  


