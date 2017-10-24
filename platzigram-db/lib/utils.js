'use strict'

// Devolvemmos un objeto con la funcion que nos retorna el array con los hashtags
// que tenga nuestra foto
const utils = {
  extractTags
}

function extractTags (text) {
  if (text == null) return []

  let matches = text.match(/#(\w+)/g)

  if (matches === null) return []

  matches = matches.map(normalize)

  return matches
}

function normalize (text) {
  text = text.toLowerCase()
  text = text.replace(/#/g, '')
  return text
}

module.exports = utils
