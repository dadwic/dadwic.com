import sql from './db';

export async function create({ name, email, message }) {
  return await sql`
    INSERT INTO contacts (name, email, message) VALUES (${name}, ${email}, ${message})
    RETURNING id, name, email, message
  `;
}
