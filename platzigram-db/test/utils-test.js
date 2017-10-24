'use strict'

const test = require('ava')
const utils = require('../lib/utils')

// test('this should pass', t => {
//   t.pass()
// })

// test('this should fail', t => {
//   t.fail()
// })

// test('it should support async/awit', async t => {
//   let p = Promise.resolve(42)
//   let secret = await p
//   t.is(secret, 42)
// })

// Estamos requiriendo una funcion de un archivo externo que lo que hara es coger la descripcion
// de nuestra foto y agarrar cada hashtag y entregarnolo en minuscula
test('extracting hashtags from text', t => {
  let tags = utils.extractTags('a #picture with tags #AwEsOmE #Platzi #AVA and #100 ##yes')

  t.deepEqual(tags, [
    'picture',
    'awesome',
    'platzi',
    'ava',
    '100',
    'yes'
  ])

  tags = utils.extractTags('a picture with no tags')
  t.deepEqual(tags, [])

  tags = utils.extractTags()
  t.deepEqual(tags, [])

  tags = utils.extractTags(null)
  t.deepEqual(tags, [])
})
