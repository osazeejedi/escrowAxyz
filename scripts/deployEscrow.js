// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {

  const price = hre.ethers.utils.parseEther("2");
  const buyer = "0x9ffBe81CFe722E2F696f6F152413635Fcdb85A3c"
  const seller = "0x9ffBe81CFe722E2F696f6F152413635Fcdb85A3c"

  const Escrow = await hre.ethers.getContractFactory("EscrowService");
  const escrow = await Escrow.deploy(buyer, seller, { value: (price) });

  await escrow.deployed();

  console.log(
    `escrow deployed to ${EscrowService.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
