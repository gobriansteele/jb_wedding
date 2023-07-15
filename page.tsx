import { Logo } from "@/components"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Logo />
      <main className="flex h-[calc(100vh-100px)] flex-col items-center justify-center">
        <iframe
          className="aspect-video w-[720px] max-w-full"
          src="https://www.youtube.com/embed/1Z4KKiWIUE0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </main>
    </div>
  )
}
