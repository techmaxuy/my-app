import { Counter } from "@/components/ui/counter"

export default function HomePage() {
  return (
    <div className="flex justify-center items-center min-h-screen w-full ">
      <main className="w-full max-w-md mx-auto">
        <Counter />
      </main>
    </div>
  )
}