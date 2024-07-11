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

### eth_accounts
get connected addresses
* Returns: `Promise` returns `string[]` : connected addresses.
* Example:
    ```js
    try {
        const provider = getProvider();
        let accounts = await provider.request({
          "method": "eth_accounts",
          "params": []
        });
        console.log(accounts);
    } catch (e) {}
    > ['0xa77392123a1085f75e62eec7dea7e0e1e5142d5f']
    ```

### eth_coinbase
get the coinbase address.
* Returns: `Promise` returns `string` : coinbase address.
* Example:
    ```js
    try {
        const provider = getProvider();
        let accounts = await provider.request({
          "method": "eth_coinbase",
          "params": []
        });
        console.log(accounts);
    } catch (e) {}
    > '0xa77392123a1085f75e62eec7dea7e0e1e5142d5f'
    ```
### eth_chainId
the chain ID of the current network.
* Returns: `Promise` returns `string` : coinbase address.
* Example:
    ```js
    try {
        const provider = getProvider();
        let chainId = await provider.request({
          "method": "eth_chainId",
          "params": []
        });
        console.log(chainId);
    } catch (e) {}
    > '0x1'
    ```
  
### personal_sign / btc_personalSign
Presents a plain text signature challenge to the user and returns the signed response. 
Equivalent to eth_sign on some other wallets, and prepends a safe prefix to the signed message to prevent the challenge tricking users into signing a financial transaction.
This method requires that the user has granted permission to interact with their account first, so make sure to call eth_requestAccounts (recommended) or wallet_requestPermissions first.
`btc_personalSign` uses signHashBtc rather than signHash
* Params: 
    * `challenge` - `string`  A hex-encoded UTF-8 string to present to the user.
    * `address` - `string` The address of the requested signing account.
* Returns: `Promise` returns `string` : the signed data
* Example:
    ```js
    try {
        const provider = getProvider();
        let response = await provider.request({
          "method": "personal_sign",
          "params": [
            {
              "challenge": "0x506c65617365207369676e2074686973206d65737361676520746f20636f6e6669726d20796f7572206964656e746974792e",
              "address": "0x4B0897b0513FdBeEc7C469D9aF4fA6C0752aBea7"
            }
          ]
        });
        console.log(response);
    } catch (e) {}
    > '0x43d7215ebe96c09a5adac69fc76dea5647286b501954ea273e417cf65e6c80e1db4891826375a7de02467a3e01caf125f64c851a8e9ee9467fd6f7e83523b2115bed8e79d527a85e28a36807d79b85fc551b5c15c1ead2e43456c31f565219203db2aed86cb3601b33ec3b410836d4be7718c6148dc9ac82ecc0a04c5edecd8914'
    ```
  
### personal_ecRecover / btc_ecRecover
//todo not in eth 
Presents a plain text signature challenge to the user and returns the signed response. 
Equivalent to eth_sign on some other wallets, and prepends a safe prefix to the signed message to prevent the challenge tricking users into signing a financial transaction.
This method requires that the user has granted permission to interact with their account first, so make sure to call eth_requestAccounts (recommended) or wallet_requestPermissions first.
`btc_ecRecover` uses recoverAddressBtc rather than recoverAddress
* Params: 
    * `challenge` - `string`  A hex-encoded UTF-8 string to present to the user.
    * `address` - `string` The address of the requested signing account.
* Returns: `Promise` returns `string` : the signed data
* Example:
    ```js
    try {
        const provider = getProvider();
        let response = await provider.request({
          "method": "personal_sign",
          "params": [
            {
              "challenge": "0x506c65617365207369676e2074686973206d65737361676520746f20636f6e6669726d20796f7572206964656e746974792e",
              "address": "0x4B0897b0513FdBeEc7C469D9aF4fA6C0752aBea7"
            }
          ]
        });
        console.log(response);
    } catch (e) {}
    > '0x43d7215ebe96c09a5adac69fc76dea5647286b501954ea273e417cf65e6c80e1db4891826375a7de02467a3e01caf125f64c851a8e9ee9467fd6f7e83523b2115bed8e79d527a85e28a36807d79b85fc551b5c15c1ead2e43456c31f565219203db2aed86cb3601b33ec3b410836d4be7718c6148dc9ac82ecc0a04c5edecd8914'
    ```  

### eth_signTypedData_v4 / btc_signTypedData_v4
Presents a data message for the user to sign in a structured and readable format and returns the signed response. Introduced by [EIP-712](https://eips.ethereum.org/EIPS/eip-712). This method requires that the user has granted permission to interact with their account first, so make sure to call eth_requestAccounts (recommended) or wallet_requestPermissions first.
`btc_signTypedData_v4` uses signHashBtc rather than signHash
* Params: 
    * `address` - `string` The address of the requested signing account.
    * `TypedData` - `obj` data to sign
* Returns: `Promise` returns `string` : the signed data
* Example:
    ```js
    try {
        const provider = getProvider();
        let response = await provider.request({
          "method": "eth_signTypedData_v4",
          "params": [
                  "0x0000000000000000000000000000000000000000",
                  {
                    "types": {
                      "EIP712Domain": [
                        {
                          "name": "name",
                          "type": "string"
                        },
                        {
                          "name": "version",
                          "type": "string"
                        },
                        {
                          "name": "chainId",
                          "type": "uint256"
                        },
                        {
                          "name": "verifyingContract",
                          "type": "address"
                        }
                      ],
                      "Person": [
                        {
                          "name": "name",
                          "type": "string"
                        },
                        {
                          "name": "wallet",
                          "type": "address"
                        }
                      ],
                      "Mail": [
                        {
                          "name": "from",
                          "type": "Person"
                        },
                        {
                          "name": "to",
                          "type": "Person"
                        },
                        {
                          "name": "contents",
                          "type": "string"
                        }
                      ]
                    },
                    "primaryType": "Mail",
                    "domain": {
                      "name": "Ether Mail",
                      "version": "1",
                      "chainId": 1,
                      "verifyingContract": "0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC"
                    },
                    "message": {
                      "from": {
                        "name": "Cow",
                        "wallet": "0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826"
                      },
                      "to": {
                        "name": "Bob",
                        "wallet": "0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB"
                      },
                      "contents": "Hello, Bob!"
                    }
                  }
                ]
        });
        console.log(response);
    } catch (e) {}
    > '0x43d7215ebe96c09a5adac69fc76dea5647286b501954ea273e417cf65e6c80e1db4891826375a7de02467a3e01caf125f64c851a8e9ee9467fd6f7e83523b2115bed8e79d527a85e28a36807d79b85fc551b5c15c1ead2e43456c31f565219203db2aed86cb3601b33ec3b410836d4be7718c6148dc9ac82ecc0a04c5edecd8914'
    ```

### eth_sendTransaction
Creates a new wallet confirmation to make an Ethereum transaction from the user's account. This method requires that the user has granted permission to interact with their account first, so make sure to call eth_requestAccounts (recommended) or wallet_requestPermissions first.
* Params:
  * `Transaction` The transaction object to sign and send.
* Returns: `Promise` returns `string` : the signed data
* Example:
    ```js
    try {
        const provider = getProvider();
        let response = await provider.request({
          "method": "eth_sendTransaction",
          "params": [
            {
              "to": "0x4B0897b0513FdBeEc7C469D9aF4fA6C0752aBea7",
              "from": "0xDeaDbeefdEAdbeefdEadbEEFdeadbeefDEADbEEF",
              "gas": "0x76c0",
              "value": "0x8ac7230489e80000",
              "data": "0x",
              "gasPrice": "0x4a817c800"
            }
          ]
        });
        console.log(response);
    } catch (e) {}
    > '0x43d7215ebe96c09a5adac69fc76dea5647286b501954ea273e417cf65e6c80e1db4891826375a7de02467a3e01caf125f64c851a8e9ee9467fd6f7e83523b2115bed8e79d527a85e28a36807d79b85fc551b5c15c1ead2e43456c31f565219203db2aed86cb3601b33ec3b410836d4be7718c6148dc9ac82ecc0a04c5edecd8914'
    ```
### eth_requestAccounts
Requests that the user provide an Ethereum address to be identified by. This method is specified by EIP-1102. Internally, this method calls wallet_requestPermissions for permission to call eth_accounts.
* Returns: `Promise` returns `string` : the account address
* Example:
    ```js
    try {
        const provider = getProvider();
        let response = await provider.request({
          "method": "eth_requestAccounts",
          "params": []
        });
        console.log(response);
    } catch (e) {}
    > '0xa77392123a1085f75e62eec7dea7e0e1e5142d5f'
    ```

### wallet_watchAsset
add specified token in FoxWallet. Returns a boolean indicating if the token was successfully added.
* Returns: `Promise` returns `boolean`
* Example:
    ```js
    try {
        const provider = getProvider();
        let response = await provider.request({
          "method": "wallet_watchAsset",
          "params": {
            "type": "ERC20",
            "options": {
              "address": "0xb60e8dd61c5d32be8058bb8eb970870f07233155",
              "symbol": "FOO",
              "decimals": 18,
              "image": "https://foo.io/token-image.svg"
            }
          }
        });
        console.log(response);
    } catch (e) {}
    > true
    ```

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

### getPublicKey
Get publicKey of current account.
* Returns: `Promise` - `string`: empty string when not connected

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
