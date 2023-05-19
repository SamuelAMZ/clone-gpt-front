import { redirect } from "next/navigation";

export default function Home() {
  redirect("/auth");

  return (
    <main>
      <p className="coming-soon">Coming Soon</p>
    </main>
  );
}
