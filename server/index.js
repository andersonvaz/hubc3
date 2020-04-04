const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

    // Express GET endpoint

    const mysql = require('mysql');

    const db = mysql.createConnection({
	host: "45.227.112.141",
	user: "cleobilla",
	password: "MgQ5TGAFPfnIwNfH!",
	database: "cleobilla"	
    });
    
    
    app.get('/api/empresas', (req, res) => {
	db.query('select cod,nome,logoNome,telefone,url from tabEmpresa', (error, results) => {
	    if (error) return res.status(500).json({type: 'error', error})
	    res.json(results)
	})
    })

    app.get('/api/produtos/:empresa', (req, res) => {
	db.query('select nome, descricao, preco from tabProdutos where codEmpresa='+req.params.empresa, (error, results) => {
	    if (error) return res.status(500).json({type: 'error', error})
	    res.json(results)
	})
    })
    
  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
