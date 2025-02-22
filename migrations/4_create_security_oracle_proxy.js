const CertiKSecurityOracle = artifacts.require("CertiKSecurityOracle");
const CertiKSecurityOracleProxy = artifacts.require("CertiKSecurityOracleProxy");

module.exports = async function(deployer, network, accounts) {
  try {
    await deployer.deploy(CertiKSecurityOracleProxy,
      CertiKSecurityOracle.address,
      {
        from: accounts[0]
      }
    );

    
  } catch (e) {
    console.log("Error deploy", e);
  }
};
