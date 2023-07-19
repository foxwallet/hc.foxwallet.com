---
title: How Iron Fish Works in FoxWallet
sidebar_label: How it works
---

# How Iron Fish Works in FoxWallet
1. Generate/import keys on FoxWallet app.
2. Upload view keys to FoxWallet backend.
3. Decrypt transactions on FoxWallet backend.
4. Get account info from FoxWallet backend.
5. Send transaction:
    * Create raw tx on FoxWallet app.
    * Sign tx on FoxWallet app.
    * Post signed tx to FoxWallet backed and then broadcast it

## Why need to download components, what are they ?
The Iron Fish components needed to download are the [official zero-knowledge-proof params](https://github.com/iron-fish/ironfish/tree/84030d9b2a8761b4d8be18dbbac83ee6dd0a5334/ironfish-rust/src/sapling_params), the total size is about 90MB.  

In order not to make the app package too large, FoxWallet puts these parameters in the CDN.

## Note
* Your spending key will not upload to FoxWallet backend, **your funds are safe**
* FoxWallet will take good care of your view keys, **no one else can get your view keys**
* Balance and transaction history api are well protected, **your privacy remains**

