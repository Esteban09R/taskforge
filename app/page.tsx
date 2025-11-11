import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-3xl font-bold">TaskForge</h1>
      <Link href="/dashboard">
        <Button>Ir al Dashboard</Button>
      </Link>
    </main>
  )
}
