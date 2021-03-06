'use strict'

import test from 'ava'
import micro from 'micro'
import listen from 'test-listen'
import request from 'request-promise'
import auth from '../auth'
import fixtures from './fixtures/index'
import utils from '../lib/utils'
import config from '../config'

test.beforeEach(async t => {
  let srv = micro(auth)
  t.context.url = await listen(srv)
})

test('success auth POST /', async t => {
  let user = fixtures.getUser()
  let url = t.context.url

  let options = {
    method: 'POST',
    uri: url,
    body: {
      username: user.username,
      password: user.password
    },
    json: true
  }

  let token = await request(options)
  let decoded = await utils.verifyToken(token, config.secret)

  t.is(decoded.username, user.username)
})
