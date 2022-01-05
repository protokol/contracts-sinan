//SPDX-License-Identifier: MIT
pragma solidity 0.8.10;

import "@openzeppelin/contracts/token/ERC20/presets/ERC20PresetFixedSupply.sol";

contract SinanEnergyToken is ERC20PresetFixedSupply {
    constructor(address _owner)
        ERC20PresetFixedSupply(
            "SinanEnergyToken",
            "SET",
            100_000_000 * 10**18,
            _owner
        )
    {}
}
