const ownerPubkey = '0x23861c4516667bad8706ca175ecf8bc7c4001cb4b20bb0e5e111e1907121d375';

async function deploySoul() {
    const Soul = await locklift.factory.getContract('Soul');
    const [keyPair] = await locklift.keys.getKeyPairs();

    const soul = await locklift.giver.deployContract({
        contract: Soul,
        constructorParams: {
            firstOwnerPubKey: ownerPubkey
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
    const json = "";

    const collection = await locklift.giver.deployContract({
        contract: Collection,
        constructorParams: {
            codeNft: Nft.code,
            ownerPubkey: ownerPubkey,
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
