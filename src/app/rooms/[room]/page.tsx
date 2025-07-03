import Image from "next/image";
import Link from "next/link";
import { rooms } from "../../../data/rooms";

export default async function RoomPage({ params }: { params: Promise<{ room: string }> }) {
  const { room: roomId } = await params;
  const room = rooms.find((r) => r.id === roomId);

  if (!room) {
    return <main className="p-8">Room not found.</main>;
  }

  return (
    <main className="p-8 space-y-4">
      <h1 className="text-3xl font-bold">{room.name}</h1>
      <p className="italic">Level: {room.level === "lower" ? "Lower" : "Upper"}</p>
      <p>{room.overview}</p>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {room.mood.map((photo) => (
          <div key={photo.src} className="relative h-40">
            <Image src={photo.src} alt={photo.alt} fill className="object-cover rounded" />
          </div>
        ))}
      </div>
      <Link href="/rooms" className="text-blue-600 underline">
        Back to rooms
      </Link>
    </main>
  );
}
