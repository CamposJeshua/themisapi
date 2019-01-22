const heroku_url =  process.env.DATABASE_URL || 'postgres://arorrxllnqaega:945f31cd5883f6386e099c3891343e5993d425beae84acb2227fe4906fa3ed3a@ec2-54-235-68-3.compute-1.amazonaws.com:5432/dbi340b5kb69eu'
module.exports = {
  basePath: '/',
  port: process.env.PORT || 3000,
  SECRET_TOKEN: 'miclavedetokens',
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
