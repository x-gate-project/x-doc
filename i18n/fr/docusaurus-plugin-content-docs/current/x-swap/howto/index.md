---
sidebar_label: Procédure d'utilisation de X-Swap
sidebar_position: 1
---

# Procédure d'utilisation de X-Swap

## Procédure d'utilisation du Swap

**Le Swap désigne le processus d'échange d'une cryptomonnaie contre une autre.**

Contrairement aux bourses centralisées (CEX), les **bourses décentralisées (DEX)** comme X-Swap n'utilisent pas de carnet d'ordres mais s'appuient sur un **pool de liquidité** pour échanger des tokens.

**① Connecter un portefeuille (MetaMask, etc.)**

1. Cliquez sur « Connecter le portefeuille ».
2. Sélectionnez et connectez MetaMask (ou un autre portefeuille compatible).
3. Vérifiez que vous êtes bien connecté au bon réseau.

**② Définir les tokens à échanger**

1. Sur l'écran de swap, sélectionnez les tokens à échanger.
**(Exemple : pour « USDT → ETH »)**
Sélectionnez USDT pour « De (envoyer) ».
Sélectionnez ETH pour « À (recevoir) ». Entrez le montant d'USDT à échanger.
(Exemple : en entrant « 100 USDT », le montant d'ETH correspondant au taux sera affiché)
2. Vérifiez le prix, les frais de gaz et le slippage.
3. Vérifiez le « montant minimum reçu » qui peut varier en fonction de la liquidité du marché.

**③ Effectuer le Swap (échange)**

1. Cliquez sur le bouton « Swap ».
2. Votre portefeuille (MetaMask, etc.) s'affichera en pop-up.
3. Vérifiez les frais de gaz et confirmez la transaction.
4. Attendez que la transaction soit traitée sur la blockchain (cela peut prendre de quelques secondes à quelques minutes).

**④ Vérification de la transaction**

1. Après l'achèvement du Swap, vérifiez que l'ETH est reflété dans votre portefeuille.
2. Vérifiez la transaction sur Etherscan ([https://etherscan.io/](https://etherscan.io/)).
3. Copiez l'ID de la transaction (Tx Hash) depuis l'historique de MetaMask ou l'historique des transactions de Uniswap.
4. Recherchez-le sur Etherscan pour confirmer le succès de la transaction.

## Procédure d'utilisation du Pool

**Le Pool (ou pool de liquidité) est un mécanisme qui fournit la liquidité nécessaire pour les transactions de cryptomonnaies.**

Sur une DEX comme X-Swap, vous pouvez **déposer des cryptomonnaies dans un pool de liquidité pour gagner des frais de transaction.**

**① Connecter un portefeuille**

1. Cliquez sur « Connecter le portefeuille ».
2. Sélectionnez et connectez un portefeuille comme MetaMask.
3. Vérifiez que vous êtes connecté au réseau cible, tel que le mainnet Ethereum ou BSC.

**② Ajouter de la liquidité**

1. Ouvrez l'onglet « Pool ».
2. Sélectionnez « Add Liquidity » (Ajouter de la liquidité).
3. Choisissez une paire de tokens à fournir en liquidité (exemple : USDT / ETH).
    - Les tokens doivent être fournis à un ratio de 1:1
    - Entrez par exemple 100 USDT et le montant équivalent d'ETH
4. Saisissez le montant et vérifiez la part de pool (le pourcentage de tokens LP).
5. Cliquez sur « Approve » pour autoriser l'utilisation des tokens dans le portefeuille.
6. Cliquez sur « Supply » pour approuver la transaction.
7. Vérifiez les frais (frais de gaz) et effectuez l'approbation finale.

**③ Vérification des récompenses obtenues**

- À chaque swap, les frais de transaction (par exemple 0,3%) sont distribués aux fournisseurs de liquidité du pool.
- Les récompenses s'accumulent en fonction de la durée pendant laquelle vous fournissez de la liquidité.
- Les tokens LP sont nécessaires lorsqu'on retire sa liquidité.

**④ Retrait de la liquidité**

1. Ouvrez l'onglet « Pool ».
2. Sélectionnez la paire de liquidités que vous avez fournie.
3. Cliquez sur « Remove » pour retirer la liquidité.
4. Choisissez le pourcentage à retirer (exemple : 100% pour tout retirer).
5. Approuvez et confirmez la transaction avec le portefeuille.
6. Les tokens originaux (USDT et ETH) ainsi que les récompenses obtenues reviendront dans le portefeuille.

- Les montants des tokens déposés peuvent varier suite aux swaps (perte impermanente).
- Fournir sa liquidité sur une longue période augmente les récompenses des frais de transaction.