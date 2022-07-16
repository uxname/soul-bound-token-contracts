# Soul Bound Token

# Identix.SBT

---

by [Identix.Space](https://identix.space) team

based on TIP 4.2 standard described [here](https://docs.everscale.network/standard/TIP-4)

---

## SBT concept

Our goal was to demonstrate the concept of Soulbound tokens proposed in
the [Decentralized Society: Finding Web3's Soul](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4105763) paper on
the Everscale network and show its possible practical application.

## What we have done for the hackathon

- **SBT contract**. An implementation of Soulbound NFTs on Everscale, publicly visible and non-transferable.
- **Soul contract**. Identity representation on the network. A Soul is a separate contract that allowed us to lay the
  possibility of social recovery for the future.
- **Collection contract** for SBT issuers.
- **Demo Web app**. We have implemented Soul-based authentication and SBT import functionality.

The solution doesn't rely on centralized storage of SBT data: the frontend interacts with smart contracts directly.

## How to build

- `npm install`
- Use `npm run build` for compile contracts
- Use `npm run deploy:local` or `npm run deploy:devnet` to deploy to devnet or local network

## The demo concept

### SBT applications

The value of SBTs lies in allowing token issuers to endow a person with specific verifiable attributes. Thus, SBTs are
suitable in the following areas:

- Digital Identity (public certificates and achievements)
- Web3 onboarding

### Our usecase

We decided to demonstrate the practical value of SBTs using a DEX onboarding use case:

- SBT Issuers distribute their tokens among a certain group of users. In our case following "fake" NFTs are engaged:
    - **Cross-Chain Master** by Octus Bridge
    - **Experienced Trader Level 5 by** Uniswap
    - **Private Club Member** by GrandBazar
- The user presents his SBTs to **the Exchange** during onboarding to get a premium status with specific bonuses.
- The Exchange can automatically verify the pack of SBTs to make the decision.

All this makes it possible to implement a system of discounts and bonuses for web3 ecosystems in order to engage users
and increase the popularity and adoption of target web3 services.

### Futher directions

- Social recovery for a Soul
- Collection & SBT issuance UI
- Verification rules
- SBT revocation
