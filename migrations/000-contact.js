exports.up = async function (sql) {
  await sql`
    CREATE TABLE IF NOT EXISTS contacts (
        id SERIAL PRIMARY KEY NOT NULL,
        name CHARACTER VARYING(255) NOT NULL,
        email CHARACTER VARYING(255) NOT NULL,
        message CHARACTER VARYING(255) NOT NULL
    )
  `;
};

exports.down = async function (sql) {
  await sql`DROP TABLE IF EXISTS contacts`;
};
