# Aleo Provider

**FoxWallet uses the same protocol as Leo Wallet.**

## Get Provider

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
    const address = await provider.connect("ON_CHAIN_HISTORY", "testnetbeta");
    console.log("connected address ", address);
} catch (e) {
    console.log('connect failed');
}
```

### decrypt
Decrypt the ciphertext
```js
try {
    const provider = getProvider();
    const plaintext = await provider.decrypt("ciphertext1qgqxn5j5egd59rk0nfvvcrupgkf8c67d4k3sxpxvkzqs8ewjg0a67rvejfyppqralf8lqkjhefpuaptguctfkyzah25q5xjve6vvl0s8qc5mnrkg");
    console.log("decrypt plaintext ", plaintext);
} catch (e) {
    console.log('decrypt failed');
}
```

### requestRecords
Request the records of connected account
```js
try {
    const provider = getProvider();
    // type Record = {
    //    id: string;
    //    owner: string;
    //    program_id: string;
    //    spent: boolean;
    //    data: string;
    //    recordName: string;
    // }
    const records = await provider.requestRecords("credits.aleo");
    console.log("requestRecords ", records);
} catch (e) {
    console.log('requestRecords failed');
}
```

### requestRecordPlaintexts
Request the records with decrypted plaintext of connected account
```js
try {
    const provider = getProvider();
    // type Record = {
    //    id: string;
    //    owner: string;
    //    program_id: string;
    //    spent: boolean;
    //    data: string;
    //    recordName: string;
    //    plaintext: string;
    // }
    const records = await provider.requestRecordPlaintexts("credits.aleo");
    console.log("requestRecordPlaintexts ", records);
} catch (e) {
    console.log('requestRecordPlaintexts failed');
}
```

### requestTransaction
Request connected account to send transaction
```js
try {
    const provider = getProvider();
    const result = await provider.requestTransaction({
      address: "" /* connected address */,
      chainId: "testnetbeta",
      transitions: [{ program: "credits.aleo", functionName: "transfer_public", inputs: ["" /* transfer address */, "1000000u64"]}];
      fee: 5555 /* estimate fee */,
      feePrivate: false,
    });
    console.log("requestTransaction ", result);
} catch (e) {
    console.log('requestTransaction failed');
}
```

### transactionStatus
Request previous sent transaction's status
```js
try {
    const provider = getProvider();
    const result = await provider.transactionStatus("" /* transaction id */);
    // type Status = "Queued" | "Generating Prover Files" | "Generating Transaction" | "Broadcasting" | "Completed" | "Rejected" | "Finalized" | "Failed"
    console.log("transactionStatus ", result);
} catch (e) {
    console.log('transactionStatus failed');
}
```

### requestDeploy
Request deployment
```js
try {
    const provider = getProvider();
    const result = await provider.requestDeploy({
      address: ""  /* connected address */,
      chainId: "testnetbeta",
      program: "" /* the program content to be deployed */,
      fee: 2000000 /* estimate fee */;
      feePrivate: false;
    });
    console.log("requestDeploy ", result);
} catch (e) {
    console.log('requestDeploy failed');
}
```

## Supported Connectors

### [aleo-adapters](https://www.npmjs.com/package/aleo-adapters)

```bash
npm install aleo-adapters
```


```tsx
import { useMemo } from "react";
import { WalletProvider } from "aleo-hooks";

import { 
  FoxWalletAdapter,
  configureConnectionForPuzzle 
} from 'aleo-adapters';
import "./App.css";

function App() {
    const wallets = useMemo(
        () => [
            new FoxWalletAdapter({
                appName: 'Aleo app',
            }),
        ],
        [],
    );

    useEffect(() => {
        configureConnectionForPuzzle({
            dAppName: 'Aleo',
            dAppDescription: 'Aleo description',
            dAppUrl: `https://${window.location.host}`,
            dAppIconURL: '',
        });
    }, []);

  return (
    <WalletProvider wallets={wallets} autoConnect>
      <div className="App">
        Some content...
      </div>
    </WalletProvider>
  );
}

export default App;
```


### [@demox-labs/aleo-wallet-adapter](https://github.com/demox-labs/aleo-wallet-adapter)

```bash
npm install --save \
    @demox-labs/aleo-wallet-adapter-base \
    @demox-labs/aleo-wallet-adapter-react \
    @demox-labs/aleo-wallet-adapter-reactui \
    @demox-labs/aleo-wallet-adapter-leo \
    @foxwallet/aleo-wallet-adapter-fox \
    react
```

```tsx
import React, { FC, useMemo } from "react";
import { WalletProvider } from "@demox-labs/aleo-wallet-adapter-react";
import { WalletModalProvider } from "@demox-labs/aleo-wallet-adapter-reactui";
import { LeoWalletAdapter } from "@demox-labs/aleo-wallet-adapter-leo";
import { FoxWalletAdapter } from "@foxwallet/aleo-wallet-adapter-fox";
import {
  DecryptPermission,
  WalletAdapterNetwork,
} from "@demox-labs/aleo-wallet-adapter-base";

// Default styles that can be overridden by your app
require("@demox-labs/aleo-wallet-adapter-reactui/styles.css");

export const Wallet: FC = () => {
  const wallets = useMemo(
    () => [
      new LeoWalletAdapter({
        appName: "Leo Demo App",
      }),
      new FoxWalletAdapter({}),
    ],
    []
  );

  return (
    <WalletProvider
      wallets={wallets}
      decryptPermission={DecryptPermission.UponRequest}
      network={WalletAdapterNetwork.Localnet}
      autoConnect
    >
      <WalletModalProvider>
        // Your app's components go here
      </WalletModalProvider>
    </WalletProvider>
  );
};
```