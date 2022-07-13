pragma ton -solidity = 0.58.1;

pragma AbiHeader expire;
pragma AbiHeader time;
pragma AbiHeader pubkey;

contract Soul {
    uint256 only_owner_can_call_this_function = 5100;

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
        require(_owners[msg.pubkey()] == true, only_owner_can_call_this_function);
        _;
    }

    function setVoteMinThreshold(uint256 threshold) onlyOwner public {
        _voteMinThreshold = threshold;
        tvm.accept();
    }

    function addOwner(uint256 ownerPubKey) onlyOwner public {
        _owners[ownerPubKey] = true;
        tvm.accept();
    }

    function removeOwner(uint256 ownerPubKey) onlyOwner public {
        _owners[ownerPubKey] = false;
        tvm.accept();
    }

    function approveSbt(address sbtAddress, bool approve) onlyOwner public {
        _approvedSbt[sbtAddress] = approve;
        tvm.accept();
    }
}
