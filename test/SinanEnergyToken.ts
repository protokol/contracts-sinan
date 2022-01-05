import { expect } from "chai";
import { ethers } from "hardhat";
import { SinanEnergyToken, SinanEnergyToken__factory } from "../typechain";

describe("ERC20 SinanEnergyToken", function () {
  it("Should have initial supply on owner address", async function () {
    const accounts = await ethers.getSigners();
    const signer = await accounts[0].getAddress();

    const contractFactory = await ethers.getContractFactory("SinanEnergyToken") as SinanEnergyToken__factory;
    const contract = await contractFactory.deploy(signer) as SinanEnergyToken;
    await contract.deployed();

    const totalSupply = await contract.totalSupply();
    const ownerWalletSupply = await contract.balanceOf(await contract.signer.getAddress());

    expect(totalSupply).to.be.equal(ownerWalletSupply);
  });
});
