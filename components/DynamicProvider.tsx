'use client';

import {
  DynamicContextProvider,
  DynamicWidget,
} from "@dynamic-labs/sdk-react-core";
import { EthersExtension } from "@dynamic-labs/ethers-v5";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";

export default function DynamicProvider({children}: {children: React.ReactNode}) {
  return (
    <DynamicContextProvider
      settings={{
        // Find your environment id at https://app.dynamic.xyz/dashboard/developer
        environmentId: process.env.NEXT_PUBLIC_DYNAMIC_ID as string,
        walletConnectorExtensions: [EthersExtension],
        walletConnectors: [EthereumWalletConnectors],
      }}
    >
      {children}
      <DynamicWidget />
    </DynamicContextProvider>
  );
}
