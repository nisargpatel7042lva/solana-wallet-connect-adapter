"use client";

import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export default function HomePage() {
    const { publicKey, connected } = useWallet();

    return (
        <div className="w-full h-screen flex flex-col items-center justify-between bg-gradient-to-b from-gray-900 via-gray-800 to-black text-gray-100">
            {/* Header Section */}
            <header className="w-full p-4 bg-opacity-50 backdrop-blur-md bg-gray-800 shadow-md flex justify-between items-center">
                <h1 className="text-3xl font-bold text-blue-400">Solana Wallet Connect</h1>
                <WalletMultiButton className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700" />
            </header>

            {/* Main Content */}
            <main className="flex flex-col items-center justify-center gap-12 p-6 text-center">
                <h2 className="text-5xl font-extrabold text-blue-400 drop-shadow-lg">
                    Seamlessly Connect to Solana
                </h2>
                <p className="text-lg text-gray-300 max-w-lg">
                    Unlock the power of decentralized applications by connecting your Solana wallet. Manage your assets, interact with dApps, and explore the blockchain ecosystem with ease.
                </p>

                {/* Glass Card */}
                <div className="bg-opacity-30 backdrop-blur-md bg-gray-800 p-8 rounded-xl shadow-2xl w-full max-w-md border border-gray-700">
                    {connected ? (
                        <div>
                            <h3 className="text-2xl font-semibold text-green-400">
                                Wallet Connected
                            </h3>
                            <p className="text-gray-300 mt-4">
                                Your wallet is successfully connected. Here is your public key:
                            </p>
                            <p className="font-mono text-sm text-gray-400 mt-2 break-all">
                                {publicKey?.toBase58()} 
                            </p>
                        </div>
                    ) : (
                        <div>
                            <h3 className="text-2xl font-semibold text-red-400">
                                Wallet Not Connected
                            </h3>
                            <p className="text-gray-300 mt-4">
                                To get started, connect your wallet using the button above and explore the decentralized world of Solana.
                            </p>
                        </div>
                    )}
                </div>
            </main>

            {/* Footer Section */}
            <footer className="w-full p-4 bg-opacity-50 backdrop-blur-md bg-gray-800 text-gray-400 text-center">
                <p>
                    Built with ❤️ using the Solana Wallet Adapter. © {new Date().getFullYear()} Solana Wallet Connect.
                </p>
            </footer>
        </div>
    );
}