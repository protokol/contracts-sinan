import { task } from "hardhat/config";
import "@nomiclabs/hardhat-ethers";

task("deploy", "Deploy the contract")
    .addOptionalParam<string>("address", "The owner address of the contract")
    .setAction(async (taskArgs, {run, ethers}) => {
        await run("compile");
        let account = await (await ethers.getSigners())[0].getAddress();
        if (taskArgs.address){
                account = taskArgs.address;
        }

        console.log("Deploying contract!");
        const contractFactory = await ethers.getContractFactory("SinanEnergyToken");
        const contract = await contractFactory.deploy(account);
        await contract.deployed();

        console.log("Contract Address: ", contract.address);
        console.log("Contract Transaction: ", contract.deployTransaction.hash);
    });
