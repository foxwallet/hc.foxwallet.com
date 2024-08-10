# Cosmos Provider

**FoxWallet uses the same protocol as Keplr Wallet, only support Coreum, Sei, Injective and Nibiru currently.**

## Get Provider

```js
function getProvider() {
  const provider = window.foxwallet && window.foxwallet.cosmos;
  if (!provider) {
    window.open("https://foxwallet.com/download");
    throw `Please guide users to download from FoxWallet official website`;
  }
  return provider;
}
```

## Methods

### Get Key
```ts
getKey(chainId: string): Promise<{
  // Name of the selected Wallet.
  username: string;
  algo: string;
  pubKey: Uint8Array;
  address: Uint8Array;
  bech32Address: string;
}>

await provider.getKey('coreum-mainnet-1')
```

### Sign Amino
```ts
signAmino(chainId: string, signer: string, signDoc: StdSignDoc): Promise<AminoSignResponse>
```
Similar to CosmJS OfflineSigner's signAmino, FoxWallet's signAmino requires the chain ID as a required parameter. It signs the Amino-encoded StdSignDoc.

### Sign Direct
```ts
signDirect(chainId:string, signer:string, signDoc: {
  /** SignDoc bodyBytes */
  bodyBytes?: Uint8Array | null;
  /** SignDoc authInfoBytes */
  authInfoBytes?: Uint8Array | null;
  /** SignDoc chainId */
  chainId?: string | null;
  /** SignDoc accountNumber */
  accountNumber?: Long | null;
}): Promise<DirectSignResponse>
```
Similar to CosmJS OfflineDirectSigner's signDirect,  FoxWallet's signDirect requires the chain ID as a required parameter. It signs the Proto-encoded StdSignDoc.

### Send Transaction
```ts
sendTx(
  chainId: string,
  tx: Uint8Array,
  mode: BroadcastMode
): Promise<Uint8Array>;
```
To request broadcast a transaction, it'll return the transaction hash if the broadcast is successfully, otherwise it throws an error.

### Sign Arbitrary
```ts
signArbitrary(
  chainId: string,
  signer: string,
  data: string | Uint8Array
): Promise<StdSignature>;
```
This is an experimental implementation of [ADR-36](https://github.com/cosmos/cosmos-sdk/blob/main/docs/architecture/adr-036-arbitrary-signature.md). The risk of using this feature is borne by you.

## Supported Connectors

### CosmosJS
```ts

const offlineSigner = window.foxwallet.cosmos.getOfflineSigner(chainId);
// or use window.foxwallet.getOfflineSigner to obtain an OfflineSigner 
// const offlineSigner = window.foxwallet.getOfflineSigner(chainId);

const accounts = await offlineSigner.getAccounts();

const cosmJS = new SigningCosmosClient(
    "https://full-node.mainnet-1.coreum.dev:26657",
    accounts[0].address,
    offlineSigner,
);
```