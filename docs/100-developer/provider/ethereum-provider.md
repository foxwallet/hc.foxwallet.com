# Ethereum Provider

**FoxWallet employs the same protocol as Metamask. Currently, EVM network is only supported in the FoxWallet mobile app, with Chrome extension support coming soon.**

## GetProvider

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

## Example of requestAccounts

```
const Provider = getProvider();
const accounts = await Provider.request({ method: 'eth_requestAccounts' }); // string[], an array of a single, hexadecimal Ethereum address string.
```

## Supported Connectors

### [WalletConnect](https://explorer.walletconnect.com/foxwallet)
- https://explorer.walletconnect.com/foxwallet
- ID: `c7708575a2c3c9e6a8ab493d56cdcc56748f03956051d021b8cd8d697d9a3fd2`

```tsx
import { createWeb3Modal } from '@web3modal/wagmi/react'

createWeb3Modal({
  //...
  featuredWalletIds: [
    'c7708575a2c3c9e6a8ab493d56cdcc56748f03956051d021b8cd8d697d9a3fd2', // FoxWallet
  ]
})
```

### [@rainbow-me/rainbowkit](https://www.npmjs.com/package/@rainbow-me/rainbowkit)
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

### [@web3-onboard](https://github.com/blocknative/web3-onboard)
```tsx
import injectedModule from '@web3-onboard/injected-wallets'

const injected = injectedModule({
  sort: wallets => {
    const foxWallet = wallets.find(
      ({ label }) => label === ProviderLabel.FoxWallet
    )

    return (
      [
        foxWallet,
        ...wallets.filter(
          ({ label }) => label !== ProviderLabel.FoxWallet
        )
      ].filter(wallet => wallet)
    )
  }
})
```
