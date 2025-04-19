"use client";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export default function HomePage() {
    return (
        <div>
            Hello Solana!
            <WalletMultiButton />
        </div>
    );
}
