# ChainLink Cripto Pulse

This component fetches the latest data from smart contracts on Ethereum using the ethers.js library. It displays the name of the token, its current price relative to Ether (ETH), and an icon representing the token.

## Functionalities
- Automatic price updates every 60 seconds.
- Time indicator for next update.
- Charging indicator display during data fetching.

## Technologies Used

- Next.js
- ethers.js
- Next UI (for rendering the token cards and add Skeleton)

## Learnings

- During the development of this project, I gained valuable knowledge about integration with oracle contracts on Chainlink and the Ethereum blockchain. 

- To get up-to-date data on ERC20 token prices, I learned to query oracle contracts on Chainlink. These contracts connect my application to the Chainlink network, allowing me to access accurate and reliable crypto asset price data.

- During the development of this project, I learned how to use NextUI to style React components. Below are some of the things I learned and how I applied this knowledge to the project:

### Reading NextUI Documentation

To customize NextUI component styles, I learned to read the official NextUI documentation. Here are the steps I followed:

1. I accessed the official NextUI documentation at [nextui.org](https://nextui.org/docs/getting-started/introduction).
2. I browsed the documentation to find information about the components I wanted to customize.
3. I learned about the properties available for each component and how to use them to modify styles.

### Changing Card Component Styles

To change the styles of the NextUI `Card` component, I consulted the NextUI component stories repository at `nextui-packages-components-card-stories-card.stories.tsx`. I found the `withDividerTemplate` component and learned how to customize the card style with dividers.

## Token Icon Font

For the token icons displayed in this project, I used Cripto Logos, a platform that provides SVG icons for various cryptocurrencies and tokens. 

Here is the link to Cripto Logos: [Cripto Logos](https://cryptologos.cc/)

By using this platform, I was able to find high-quality icons for the selected tokens, which helped enrich the visual experience of the project.




