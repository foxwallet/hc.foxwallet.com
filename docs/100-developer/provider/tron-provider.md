# Tron Provider

**FoxWallet uses the same protocol as TronLink, only support Mainnet and Shasta currently.**

## Get Provider

```js
function getProvider() {
  const provider = window.foxwallet && window.foxwallet.tronLink;
  if (!provider) {
    window.open("https://foxwallet.com/download");
    throw `Please guide users to download from FoxWallet official website`;
  }
  if (!provider.ready) {
    throw `The provider is not ready, please try reopen current page again.`;
  }
  return provider;
}
```

## Methods

### connect
Connect the current account
* Returns: `Promise`
* Example:
```js
try {
    const provider = getProvider();
    provider.on("connect", (address) => {
      console.log("connected address ", address);
    });
    const address = await provider.request({ method: 'tron_requestAccounts '});
    console.log("connected address ", address);
} catch (e) {
    console.log('connect failed');
}
```

### signMessageV2
Sign a message
* Returns: `Promise`
* Example:
```js
function signMessage(message, privateKey) {
  try {
      const provider = getProvider();
      const signedMessage = await provider.tronWeb.trx.signMessageV2(message, privateKey);
      console.log("signed message ", signedMessage);
  } catch (e) {
      console.log('sign message failed');
  }
}
```

### sign
Sign a transaction
* Returns: `Promise`
* Example:
```js
function transfer(transaction, privateKey) {
  try {
      const provider = getProvider();
      const tradeobj = await provider.tronWeb.transactionBuilder.sendTrx("TNo9e8MWQpGVqdyySxLSTw3gjgFQWE3vfg", 100,"TM2TmqauSEiRf16CyFgzHV2BVxBejY9iyR",1);  
      const signedtxn = await provider.tronWeb.trx.sign(tradeobj, privateKey);
      const receipt = await provider.tronWeb.trx.sendRawTransaction(signedtxn);
      console.log(receipt);
  } catch (e) {
      console.log('transfer failed');
  }
}
```

### multiSign
Sign a transaction with permissionId
* Returns: `Promise`
* Example:
```js
function transfer(transaction, privateKey) {
  try {
      const provider = getProvider();
      const tradeobj = await provider.tronWeb.transactionBuilder.freezeBalance(provider.tronWeb.toSun(100), 3, "ENERGY", "415d73f56d93a9380a100d2a340dd30dc3df6e0746", "415d73f56d93a9380a100d2a340dd30dc3df6e0746", 0);
      const signedtxn = await provider.tronWeb.trx.multiSign(tradeobj, privateKey, 0);
      const receipt = await provider.tronWeb.trx.sendRawTransaction(signedtxn);
      console.log(receipt);
  } catch (e) {
      console.log('transfer failed');
  }
}
```

## Tips
The `tronWeb` is a dynamic instance that will be reinitialized when necessary, so the recommend way to access it from FoxWallet:
```js
  const provider = getProvider();
  const balance = await provider.tronWeb.getBalance(address);
  const signedMsg = await provider.tronWeb.signMessage(message, privateKey);
  ...
```
not recommend:
```js
  const tronWeb = getProvider().tronWeb;
  const balance = await tronWeb.getBalance(address);
  const signedMsg = await tronWeb.signMessage(message, privateKey);
```

## Other Resources
- [tronwallet-adapter](https://github.com/web3-geek/tronwallet-adapter)
- [tronweb](https://tronweb.network/docu/docs/intro)

