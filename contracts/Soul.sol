pragma ton -solidity = 0.58.1;

pragma AbiHeader expire;
pragma AbiHeader time;
pragma AbiHeader pubkey;

contract Soul {
    uint256 ONLY_OWNER_CAN_CALL_THIS_FUNCTION = 5100;

    mapping(uint256 => bool) public _owners;
    uint256 public _voteMinThreshold;
    mapping(address => bool) public _approvedSbt;

    constructor(uint256 firstOwnerPubKey) public {
        tvm.accept();
        _owners[firstOwnerPubKey] = true;
        _voteMinThreshold = 1;
    }

    // only owner modifier
    modifier onlyOwner {
        require(_owners[msg.pubkey()] == true, ONLY_OWNER_CAN_CALL_THIS_FUNCTION);
        _;
    }

    function setVoteMinThreshold(uint256 threshold) onlyOwner public {
        tvm.accept();
        _voteMinThreshold = threshold;
    }

    function addOwner(uint256 ownerPubKey) onlyOwner public {
        tvm.accept();
        _owners[ownerPubKey] = true;
    }

    function removeOwner(uint256 ownerPubKey) onlyOwner public {
        tvm.accept();
        _owners[ownerPubKey] = false;
    }

    function approveSbt(address sbtAddress, bool approve) onlyOwner public {
        tvm.accept();
        _approvedSbt[sbtAddress] = approve;
    }
}
