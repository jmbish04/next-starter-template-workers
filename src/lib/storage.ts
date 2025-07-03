import type { D1Database } from '@cloudflare/workers-types';

// Reference the global vars that will be resolved by wrangler.tom
const R2 = globalThis.RENO;
const DB = globalThis.DB as D1Database;

export { R2, DB, logRoomPhoto };

async function logRoomPhoto(roomId: number, key: string, isCard = false) {
  const stmt = `
    UPDATE rooms SET
      path_r2files = array_append(path_r2files, '')',
      is_card_preview = ${isCard}
    WHERE id = ${roomId}`
  return await DB.prepare(stmt).run();
}