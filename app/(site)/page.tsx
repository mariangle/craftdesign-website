import Hero from "@/app/(site)/components/Hero"
import Services from "@/app/(site)/components/Services"
import ClientWorks from "@/app/(site)/components/ClientWorks"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <ClientWorks />
    </main>
  )
}
