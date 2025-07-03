import { DB } from '../../lib/storage';

export default async function handler(req, res) {
  const result = await DB.prepare('SELECT * FROM rooms').all();
  res.status(200).json(result.results);
}