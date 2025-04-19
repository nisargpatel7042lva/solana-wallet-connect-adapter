
"use client";

import React, { useMemo } from "react";
import { clusterApiUrl } from "@solana/web3.js";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import "@solana/wallet-adapter-react-ui/styles.css";
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const endpoint = useMemo(() => clusterApiUrl("devnet"), []);
    const wallets = useMemo(
        () => [
            new PhantomWalletAdapter(),
        ],
        []
    );


    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                    {children}
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
}

