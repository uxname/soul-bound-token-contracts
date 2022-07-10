async function main() {
  const Collection = await locklift.factory.getContract('Collection');
  const Nft = await locklift.factory.getContract('Nft');
  const [keyPair] = await locklift.keys.getKeyPairs();
  const ownerPubkey = "0x978cae5ccb0048de4bf6c76ffba5c2686987fd72494137de8373a84e5f720063";
  const json = "";

  const collection = await locklift.giver.deployContract({
    contract: Collection,
    constructorParams: {
      codeNft : Nft.code,
      ownerPubkey : ownerPubkey,
      json : json
    },
    initParams: {},
    keyPair,
  }, locklift.utils.convertCrystal(1, 'nano'));

  console.log(`Collection deployed at: ${collection.address}`);
}

main()
  .then(() => process.exit(0))
  .catch(e => {
    console.log(e);
    process.exit(1);
  });
