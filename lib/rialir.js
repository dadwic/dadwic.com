import sql from './db';

export async function create() {
  return await sql`
    INSERT INTO rialir (try) VALUES (1900)
    RETURNING id, try
  `;
}

export async function update(rate) {
  return await sql`
    UPDATE rialir SET try=${rate} WHERE id=1
    RETURNING try
  `;
}
