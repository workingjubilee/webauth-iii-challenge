// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './users.sqlite3'
    },
    useNullAsDefault: true,
  }

};
