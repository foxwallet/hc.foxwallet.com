---
sidebar_position: 5
---

# Q&A

### Is FoxWallet decentralized ?
Yes. FoxWallet is a decentralized multi-chain wallet based on its supporting to Web3 ecology and it is committed to becoming the securest and simplest basic tool for users to enter the blockchain world. 

First, FoxWallet supports the import of multiple sets of private keys and mnemonics, that is, users can manage all assets that support the public chains using one account. 

Secondly, as a decentralized wallet, users can store their digital assets here safely and trustingly. The private keys are kept by users themselves and the digital assets are stored on the blockchain. Users hold their own digital assets, and to them, the wallet is a tool to manage their on-chain assets and to read blockchain data. Back up private keys and mnemonics in a safe and correct manner to prevent the loss of digital assets effectively.

### How to delete a wallet ?
The user cannot delete the wallet if there is only one in FoxWallet. If there are several ones, the user can delete one or more through “Settings-> Wallets” to the detailed wallet page and clicking the “trash bin” icon button in the upper right. 

### What is the relationship between wallet and account ?
FoxWallet follows the BIP44 standard. Each wallet corresponds to a set of mnemonics. 

The mnemonics can derive multiple addresses (i.e., "Accounts" in FoxWallet), and each address corresponds to a unique private key. 

When using it, users only need to back up a set of mnemonics, and meanwhile, the multi-account mechanism can effectively prevent users from risks. 

### If I change my phone, is it possible to restore the various derived addresses?
Of course you can. Import your back-up mnemonics into your new phone and click “Add Account” in the “Wallet” or “Settings” page, then your addresses can be restored in order.

### Why each address(account) can derive a different private key ?
The private key for each address is different, and the address derivation principle is mnemonics => different deprived private keys based on the chain and account number => different public keys and addresses computed with different private keys.

### When importing the mnemonics from Filfox web wallet(https://wallet.filfox.info/) to FoxWallet App, there will appear different addresses. Why?
When developing the web wallet, the BIP44 coin number of Filecoin has not been determined yet. However, the development of FoxWallet follows BIP44 Protocol strictly, and thus there is an incompatibility between these two wallets.

When using it, users can deprive "Lotus type private key" through the wallet settings page on the web, and select "Import Private Key" to import them into the FoxWallet App.

### What does the “pending” value in the transaction record mean?
It represents the number of blocks confirmed for your transactions. With more block confirmation, it is harder for your transactions to be reversed.




