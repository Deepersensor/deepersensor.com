import Image from "next/image";
import Cards from "@/components/Cards";

export default function Home() {
  return (
    <div className="relative">
      {/* Quick chat overlay */}
      <div className="fixed bottom-8 right-8 bg-indigo-600 text-white px-4 py-2 rounded-full cursor-pointer hover:bg-indigo-700">
        Chat
      </div>
      {/* Back to Top button */}
      <a
        href="#"
        className="fixed bottom-8 left-8 bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700"
      >
        ↑ Top
      </a>
      <main className="p-8 sm:p-20">
        <div className="text-center">
          <Image
            className="mx-auto animate-pulse"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
        </div>
        <div className="mt-10">
          <Cards />
        </div>
      </main>
    </div>
  );
}
