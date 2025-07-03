import Image from "next/image";
import Link from "next/link";
import { photos } from "../data/photos";

export default function Home() {
  return (
    <main className="p-8 space-y-6">
      <h1 className="text-3xl font-bold">Home Remodel Collaboration</h1>
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 auto-rows-[150px]">
        {photos.map((photo, idx) => (
          <div
            key={photo.src}
            className={`relative rounded overflow-hidden ${idx === 0 ? "col-span-2 row-span-2 md:h-96" : "h-40"}`}
          >
            <Image src={photo.src} alt={photo.alt} fill className="object-cover" />
          </div>
        ))}
      </div>
      <Link href="/rooms" className="text-blue-600 underline">
        Explore Rooms
      </Link>
    </main>
  );
}
