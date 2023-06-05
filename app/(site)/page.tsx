import Hero from "@/app/(site)/components/Hero"
import Banner from "./components/Banner"
import Services from "@/app/(site)/components/Services"
import ClientWorks from "@/app/(site)/components/WorkShowcases"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Banner />
      <Services />
      <ClientWorks />
    </main>
  )
}
