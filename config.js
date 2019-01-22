const heroku_url =  process.env.DATABASE_URL || 'postgres://ytmnqlmf:d58EZjzsJJeRTLbdlQ6z1aCdnzS9KFwV@pellefant.db.elephantsql.com:5432/ytmnqlmf'
module.exports = {
  basePath: '/',
  port: process.env.PORT || 3000,
  //SECRET_TOKEN: 'miclavedetokens',
  db: {
    client: 'pg',
    connection: heroku_url  /*{
      host     : '127.0.0.1',
      port     : '5432', //5432
      user     : 'postgres',
      password : 'postgres',
      database : 'themis',
      charset  : 'utf8'
    } */
  }
}
