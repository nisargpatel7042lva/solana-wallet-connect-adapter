"use client";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export default function HomePage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
            Hello Solana!
            <WalletMultiButton />
        </div>
    );
}
