const Bookshelf = require('../db');

const Vista_abogado_clientes = Bookshelf.Model.extend({
  tableName: 'vista_abogado_clientes',
});

module.exports = Vista_abogado_clientes