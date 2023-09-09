# Ethereum Provider

**FoxWallet uses the same protocol as MetaMask.**

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

### Use [@rainbow-me/rainbowkit](https://www.npmjs.com/package/@rainbow-me/rainbowkit)
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
