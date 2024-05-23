# Qtum Provider

## EVM part provider

**FoxWallet uses the same protocol as [Qnekt](https://github.com/qtumproject/metamask-extension).**

### getProvider

```js
function getProvider() {
  const provider = window.foxwallet && window.foxwallet.qtum;
  // available on Qtum mainnet only
  if (!provider) {
    window.open('https://foxwallet.com/download');
    throw `Please guide users to download from FoxWallet official website`
  }
  return provider;
}
```


### Testing DApp
- Link: https://qtumproject.github.io/test-dapp/
- Source Code: https://github.com/qtumproject/test-dapp

## BTC part provider

**FoxWallet uses the similar protocol as [UniSat](https://docs.unisat.io/dev/unisat-wallet-api) under `window.foxwallet.qtum.btc`**

### getProvider
```js
function getBTCProvider() {
  const provider = window.foxwallet && window.foxwallet.qtum && window.foxwallet.qtum.btc;
  if (!provider) {
    window.open('https://foxwallet.com/download');
    throw `Please guide users to download from FoxWallet official website`
  }
  return provider;
}
```

### requestAccounts
Connect the current account
* Returns: `Promise` returns `string[]` : Address of current account.
* Example:
    ```js
    try {
        const provider = getBTCProvider();
        let accounts = await provider.requestAccounts();
        console.log('connect success', accounts);
    } catch (e) {
        console.log('connect failed');
    }
    > connect success ['tb1qrn7tvhdf6wnh790384ahj56u0xaa0kqgautnnz']
    ```

### getAccounts
Get address of current account
* Returns: `Promise` - `string[]` : Address of current account.

### getNetwork
* Get Network
* Returns: `Promise` - `string`: the network. `livenet` and `testnet`

### switchNetwork
Switch to qtum mainnet or testnet
* Params:  network: `string`: `livenet`|`testnet`
* Returns: `Promise` - `string`: the network. `livenet` and `testnet`

* Example
    ```js
    try {
        const provider = getBTCProvider();  
        let network = await provider.switchNetwork("livenet");
        console.log(network)
    } catch (e) {
        console.log(e);
    }
    ```

### getBalance
Get BTC balance
* Returns: `Promise` - `Object`:
    * `confirmed` - `number` : the confirmed satoshis
    * `unconfirmed` - `number` : the unconfirmed satoshis
    * `total` - `number` : the total satoshis

### sendBitcoin
Send BTC
* Params:
    * toAddress: string
    * satoshis: number
    * options?: Object
        * feeRate: number
* Returns: `Promise` - `string`: txid
* Example
    ```js
    try {
        const provider = getBTCProvider();  
        let txid = await provider.sendBitcoin("qQvET4q6ojnxpEmu9M4dLaQPZ4idaVSYGT",1000);
        console.log(txid)
    } catch (e) {
        console.log(e);
    }
    ```

### getInscriptions
List inscriptions of current account
* Params:
  * page: number
  * size: number
* Returns: `Promise` - `Object`:
  * inscriptions
    * inscription_id - string :  the id of inscription.
    * inscription_number - number :  the number of inscription.
    * address - string : the address of inscription.
    * output_value - number : the output value of inscription.
    * content_body - string : the content of inscription when it's string.
    * content_type - string : the content type of inscription.
    * satpoint - string : the txid and vout of current location
    * content_length - string : the content length of inscription.
    * offset - number : the offset of inscription.
  * pagination_info
    * page - number : current page in pagination
    * page_size: number : current page size in pagination
    * total: number : total items
    * total_page: number : total page in pagination

### sendInscription
Send Inscription
* Params:
  * toAddress: string
  * inscriptionId: string
  * options?: Object
    * feeRate: number
* Returns: `Promise` - `string`: txid


### signMessage
sign message   
note: "bip322-simple" is not implemented for now because it's not compatible with P2PKH type address
* Params:
  * msg - string: a string to sign
  * type - string:  (Optional) "ecdsa" | "bip322-simple". default is "ecdsa" 
* Returns: `Promise` - `string`: the signature.

### pushTx
Broadcast raw transaction

### signPsbt
Traverse all inputs that match the current address to sign.
* Params:
  * psbtHex - string: the hex string of psbt to sign
* Retuns: `Promise` - `string`: the hex string of signed psbt

### signPsbts
Sign Multiple PSBTs at once

### pushPsbt
Push transaction with signed psbt
* Params:
  * psbtHex - string: the hex string of psbt to push
* Returns: `Promise` - `string`: txid    
