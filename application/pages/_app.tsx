import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";

const activeChain = {
  chainId: 1571747963,
  rpc: ["https://cranegeode-rpc.eu-north-2.gateway.fm"],
  shortName: "cranegeode",
  slug: "cranegeode",
  chain: "cranegeode",
  name: "Crane Geode",
  testnet: true,
  explorers: [
    {
      name: "blockscout",
      url: "https://cranegeode-blockscout.eu-north-2.gateway.fm/",
      standard: "EIP3091",
    },
  ],
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
      activeChain={activeChain}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
