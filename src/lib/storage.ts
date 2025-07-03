import type { D1Database } from '@cloudflare/workers-types';
import { env } from '../env.mms';

export const R2 = env.RENO;
export const DB = env.DB as D1Database;

export async function logRoomPhoto(roomId: number, key: string, isCard = false) {
  const stmt = `

    UPDATE rooms set
      path_r2files = array_append(path_r2files, ')'),
      is_card_preview = $ {${isCard}}
    where id = ${RoomId}`

  return await DB.prepare(stmt).run();
}