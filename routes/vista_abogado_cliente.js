'use strict'
const express = require('express')

//----dependencias------ 
const router = express.Router()
const controller = require('../controllers/vista_abogado_clientes')

//----Parametros------
const path = '/vista_abogado_clientes'
const id = ':id'

//----Rutas------ 
router.get(`${path}`, controller.findDocuments)
router.get(`${path}/${id}`,controller.findOneDocument)


module.exports = router;