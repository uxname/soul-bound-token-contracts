async function deploySoul() {
  const Soul = await locklift.factory.getContract('Soul');
  const [keyPair] = await locklift.keys.getKeyPairs();
  const ownerPubkey = "0xd49252892c447b61cfa53fda5c2a4792a9ecd4cc5d16a80f064b9854609e8d2a";

  const soul = await locklift.giver.deployContract({
    contract: Soul,
    constructorParams: {
      firstOwnerPubKey : ownerPubkey
    },
    initParams: {},
    keyPair,
  }, locklift.utils.convertCrystal(1, 'nano'));

  return soul.address;
}

async function main() {
  const soulAddress = await deploySoul();
  console.log(`Soul address: ${soulAddress}`);

  const Collection = await locklift.factory.getContract('Collection');
  const Nft = await locklift.factory.getContract('Nft');
  const [keyPair] = await locklift.keys.getKeyPairs();
  const ownerPubkey = "0xd49252892c447b61cfa53fda5c2a4792a9ecd4cc5d16a80f064b9854609e8d2a";
  const json = "";

  const collection = await locklift.giver.deployContract({
    contract: Collection,
    constructorParams: {
      codeNft : Nft.code,
      ownerPubkey : ownerPubkey,
      json: json,
      name: 'Harward',
      schemaUri: 'https://schema.org/harward',
    },
    initParams: {},
    keyPair,
  }, locklift.utils.convertCrystal(1, 'nano'));

  console.log(`Collection deployed at: ${collection.address}`);

  // const collectionContract  = locklift.giver.getDeployedContract(
  //     "Collection", //name inferred from your contracts
  //     collection.address,
  // );
  // const res = await collectionContract.methods.mintNft({
  //   json: json,
  //   ownerSoul: soulAddress
  // }).call();
  //
  // console.log(res);
}

main()
  .then(() => process.exit(0))
  .catch(e => {
    console.log(e);
    process.exit(1);
  });
