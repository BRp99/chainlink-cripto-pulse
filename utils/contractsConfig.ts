export const contractsConfig = [
  {
    name: "AAVE / ETH",
    address: "0x6Df09E975c830ECae5bd4eD9d90f3A95a4f88012",
    abi: ["function latestRoundData() view returns (uint80 roundId, int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound)"],
  },
  {
    name: "COMP / ETH",
    address: "0x1B39Ee86Ec5979ba5C322b826B3ECb8C79991699",
    abi: ["function latestRoundData() view returns (uint80 roundId, int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound)"],
  },
  {
    name: "DAI / ETH",
    address: "0x773616E4d11A78F511299002da57A0a94577F1f4",
    abi: ["function latestRoundData() view returns (uint80 roundId, int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound)"],
  },
  {
    name: "LINK / ETH",
    address: "0xDC530D9457755926550b59e8ECcdaE7624181557",
    abi: ["function latestRoundData() view returns (uint80 roundId, int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound)"],
  },
  {
    name: "MKR / ETH",
    address: "0x24551a8Fb2A7211A25a17B1481f043A8a8adC7f2",
    abi: ["function latestRoundData() view returns (uint80 roundId, int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound)"],
  },
  {
    name: "SNX / ETH",
    address: "0x79291A9d692Df95334B1a0B3B4AE6bC606782f8c",
    abi: ["function latestRoundData() view returns (uint80 roundId, int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound)"],
  },
  {
    name: "UNI / ETH",
    address: "0xD6aA3D25116d8dA79Ea0246c4826EB951872e02e",
    abi: ["function latestRoundData() view returns (uint80 roundId, int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound)"],
  },
  {
    name: "USDT / ETH",
    address: "0xEe9F2375b4bdF6387aa8265dD4FB8F16512A1d46",
    abi: ["function latestRoundData() view returns (uint80 roundId, int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound)"],
  },
  {
    name: "WBTC / BTC",
    address: "0xfdFD9C85aD200c506Cf9e21F1FD8dd01932FBB23",
    abi: ["function latestRoundData() view returns (uint80 roundId, int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound)"],
  },
  {
    name: "YFI / ETH",
    address: "0x7c5d4F8345e66f68099581Db340cd65B078C41f4",
    abi: ["function latestRoundData() view returns (uint80 roundId, int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound)"],
  },
  // Add more contracts
]

// INFO about latestRoundData:
//answer
// is the answer for the given round

//answeredInRound
//is the round ID of the round in which the answer was computed. (Only some AggregatorV3Interface implementations return meaningful values)

//roundId
//is the round ID from the aggregator for which the data was retrieved combined with a phase to ensure that round IDs get larger as time moves forward.

//startedAt
//is the timestamp when the round was started. (Only some AggregatorV3Interface implementations return meaningful values)

//updatedAt
//is the timestamp when the round last was updated (i.e. answer was last computed)
