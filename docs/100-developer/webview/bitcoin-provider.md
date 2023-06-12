# Bitcoin Provider

**FoxWallet uses the same protocol as [UniSat](https://docs.unisat.io/dev/unisat-wallet-api).**

### getProvider
```js
function getProvider() {
  const provider = window.foxwallet && window.foxwallet.bitcoin;
  if (!provider) {
    window.open('https://foxwallet.com/download');
    throw `Please guide users to download from FoxWallet official website`
  }
  return provider;
}
```

### requestAccounts
Connect the current account
* Returns: `Promise returns string[]` : Address of current account.
* Example:
    ```js
    try {
        const provider = getProvider();
        let accounts = await provider.requestAccounts();
        console.log('connect success', accounts);
    } catch (e) {
        console.log('connect failed');
    }
    > connect success ['tb1qrn7tvhdf6wnh790384ahj56u0xaa0kqgautnnz']
    ```

### getAccounts
Get address of current account
* Returns: `Promise returns string[]` : Address of current account.

### getNetwork
* Get Network
* Returns: `Promise - string`: the network. `livenet` and `testnet`

### getBalance
Get BTC balance
* Returns: `Promise - Object`:
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
* Returns: `Promise - string`: txid
* Example
    ```js
    try {
        const provider = getProvider();  
        let txid = await provider.sendBitcoin("tb1qrn7tvhdf6wnh790384ahj56u0xaa0kqgautnnz",1000);
        console.log(txid)
    } catch (e) {
        console.log(e);
    }
    ```

### getInscriptions
List inscriptions of current account
* Returns: `Promise - Object`:
    * total - number : the total count
    * list - Object[] :
    * inscriptionId - string : the id of inscription.
    * inscriptionNumber - string : the number of inscription.
    * address - string : the address of inscription.
    * outputValue - string : the output value of inscription.
    * content - string : the content url of inscription.
    * contentLength - string : the content length of inscription.
    * contentType - number : the content type of inscription.
    * preview - number : the preview link
    * timestamp - number : the blocktime of inscription.
    * offset - number : the offset of inscription.
    * genesisTransaction - string : the txid of genesis transaction
    * location - string : the txid and vout of current location    
* Note: to yield same result as unisat, private apis used, avoid using this, use you own api.

### sendInscription
Send Inscription
* Params: 
    * toAddress: string
    * inscriptionId: string
    * options?: Object
        * feeRate: number
* Returns: `Promise - string`: txid


### signMessage
* sign message
* Params:
    * msg - string: a string to sign
    * type - string:  (Optional) "ecdsa" | "bip322-simple". default is "ecdsa"
* Returns: Promise - string: the signature.

### pushTx
Broadcast raw transaction

### signPsbt
Traverse all inputs that match the current address to sign.
* Params:
    * psbtHex - string: the hex string of psbt to sign
* Retuns: Promise - string: the hex string of signed psbt

### signPsbts
Sign Multiple PSBTs at once

### pushPsbt
Push transaction
* Params:
    * psbtHex - string: the hex string of psbt to push
* Returns: `Promise - string`: txid    