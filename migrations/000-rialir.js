exports.up = async function (sql) {
  await sql`
    CREATE TABLE IF NOT EXISTS rialir (
        id SERIAL PRIMARY KEY NOT NULL,
        try CHARACTER VARYING(255) NOT NULL,
    )
  `;
};

exports.down = async function (sql) {
  await sql`DROP TABLE IF EXISTS rialir`;
};
