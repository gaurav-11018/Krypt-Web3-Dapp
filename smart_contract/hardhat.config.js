require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.15",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/-elZNKOF71NCtf5J3fW2Z5La_299En2o",
      accounts: [
        "7293b4eed2d7079be2091ffdb8668a6e1e81f2b506c1c0428711b9d109295541",
      ],
    },
  },
};
