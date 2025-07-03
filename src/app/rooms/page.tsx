import Image from "next/image";
import Link from "next/link";
import { rooms } from "../../data/rooms";

export default function RoomsPage() {
  const lower = rooms.filter((r) => r.level === "lower");
  const upper = rooms.filter((r) => r.level === "upper");

  const renderList = (list: typeof rooms) => (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {list.map((room) => (
        <Link
          key={room.id}
          href={`/rooms/${room.id}`}
          className="border rounded-lg overflow-hidden hover:shadow"
        >
          <div className="relative h-40">
            <Image
              src={room.mood[0].src}
              alt={room.mood[0].alt}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-2 text-center font-semibold">{room.name}</div>
        </Link>
      ))}
    </div>
  );

  return (
    <main className="p-8 space-y-6">
      <h1 className="text-3xl font-bold">Rooms</h1>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Lower Level</h2>
        {renderList(lower)}
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Upper Level</h2>
        {renderList(upper)}
      </section>
    </main>
  );
}
