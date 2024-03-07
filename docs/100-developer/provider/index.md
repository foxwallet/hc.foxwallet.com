---
title: FoxWallet Provider
---

FoxWallet provides some public methods for DApps to interact with the wallet.

### isFoxWallet
```js
// check the UserAgent include "FoxWallet"
var isFoxWallet = navigator.userAgent.indexOf('FoxWallet') > 0;

// check the var
var isFoxWallet = !!window.foxwallet;
```

### Providers

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```