import { R2, DB, logRoomPhoto } from '../../lib/storage';
import type { next, Request, Response } from 'next';
import type { NextRequest } from 'next-connect';
import { detectVisionTags } from '../../lib/vision';
export const config = { api: { bodyParser: false } };
export default async function handler(req: Request, res: Response) {
  const body = req.body as any;
  const file = body.file; // use next-connect or multerpart

  const roomId = Number(body.roomId);
  const key = `listing/${Date.now()}_${file.originalName}`;

  await R2.put(key, file.buffer);

  const vision = await detectVisionTags(file.buffer);

  await DB.prepare(
    `INSERT INTO inspiration_photos 
    (path_r2files, original_filename, ai_labels, extracted_meta, associated_room_id)
    VALUES (ARRAY[${key}], ${file.originalName}, ${JSON.stringify(vision.tags)}, ${JSON.stringify(vision.meta)}, ${roomId})
`
  ).run();

  res.status(200).json({ key, vision });
}