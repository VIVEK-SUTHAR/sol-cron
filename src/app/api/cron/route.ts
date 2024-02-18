import {
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
  clusterApiUrl,
} from "@solana/web3.js";
const SENT_TO_ADDRESS = new PublicKey(
  "He7qYfzFh8ve5szBUGGcHc9fU25g9p45NVa29ezHLBjy"
);
export async function GET() {
  try {
    const connection = new Connection(clusterApiUrl("devnet"));
    const airDropSignature = await connection.requestAirdrop(
      SENT_TO_ADDRESS,
      LAMPORTS_PER_SOL*4
    );
    const txnHash = await connection.confirmTransaction(airDropSignature);
    console.log("txnHash", txnHash);
    return new Response("Success", { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Error", { status: 500 });
  }
}
