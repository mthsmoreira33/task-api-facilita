import Link from "next/link";

export default function Home() {
  return (
    <main className="py-8 px-10">
      <h1 className="text-3xl font-bold">Alo</h1>
      <Link href={"/dashboard"}>Dashboard</Link>
    </main>
  );
}
