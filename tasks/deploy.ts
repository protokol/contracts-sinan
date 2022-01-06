import { task } from "hardhat/config";
import "@nomiclabs/hardhat-ethers";

task("deploy", "Deploy the contract")
    .setAction(async (taskArgs, {run, ethers}) => {
        await run("compile");

        console.log("Deploying contract!");
        const contractFactory = await ethers.getContractFactory("SinanEnergyToken");
        const contract = await contractFactory.deploy();
        await contract.deployed();

        console.log("Contract Address: ", contract.address);
        console.log("Contract Transaction: ", contract.deployTransaction.hash);
    });
