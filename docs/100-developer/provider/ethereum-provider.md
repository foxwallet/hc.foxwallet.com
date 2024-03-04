# Ethereum Provider

**FoxWallet's ethereum provider is compatible with MetaMask.**

### getProvider

```js
function getProvider() {
  const provider = window.foxwallet && window.foxwallet.ethereum;
  if (!provider) {
    window.open('https://foxwallet.com/download');
    throw `Please guide users to download from FoxWallet official website`
  }
  return provider;
}
```

### Example of requestAccounts

```
const Provider = getProvider();
const accounts = await Provider.request({ method: 'eth_requestAccounts' }); // string[], an array of a single, hexadecimal Ethereum address string.
```

### Supported Connectors

- [@rainbow-me/rainbowkit](https://www.npmjs.com/package/@rainbow-me/rainbowkit)
```tsx
import {
  getDefaultWallets,
  connectorsForWallets,
} from '@rainbow-me/rainbowkit';
import { foxWallet } from '@rainbow-me/rainbowkit/wallets';

const { wallets } = getDefaultWallets({ appName, projectId, chains });
const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: 'Popular',
    wallets: [foxWallet({ projectId, chains })],
  },
]);
```

- [WalletConnect](https://explorer.walletconnect.com/foxwallet)'s [@web3modal](https://docs.walletconnect.com/web3modal/about)
```tsx
import { createWeb3Modal } from '@web3modal/wagmi/react'

createWeb3Modal({
  //...
  featuredWalletIds: [
    'c7708575a2c3c9e6a8ab493d56cdcc56748f03956051d021b8cd8d697d9a3fd2', // FoxWallet
  ]
})
```

- [@web3-onboard](https://github.com/blocknative/web3-onboard)
```tsx
import injectedModule from '@web3-onboard/injected-wallets'
```
