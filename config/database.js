module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cfg8ocha6gdma8mu6c2g-a.singapore-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'sample_6lac'),
      user: env('DATABASE_USERNAME', 'admin'),
      password: env('DATABASE_PASSWORD', 'qXOTbYu48WSEWr5SNg7vgtgyOl1yS8rE'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
