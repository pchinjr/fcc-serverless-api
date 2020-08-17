let tiny = require('tiny-json-http')
let test = require('tape')
let sandbox = require('@architect/sandbox')
let base = 'http://localhost:3333'
let end

// this starts a sandbox environment for the tests to excecute in.
test('start', async t=> {
  t.plan(1)
  end = await sandbox.start()
  t.ok(true, 'started')
})

test('get-index', async t => {
  t.plan(1)
  try {
    let result = await tiny.get({url: `${base}`})
    t.ok(result, 'Got response', console.log(result.body))
  } catch (err) {
    t.fail(err)
  }
})

test('get-echo', async t => {
  t.plan(1)
  try {
    let result = await tiny.get({url: `${base}/echo/praisecage`})
    t.equal(result.body.echo, 'praisecage', 'echo matches')
  } catch(err) {
    t.fail(err)
  }
})

test('get-json', async t => {
  t.plan(1)
  try {
    let result = await tiny.get({url: `${base}/json`})
    if (process.env.MESSAGE_STYLE) {
      t.equal(result.body.message, 'HELLO JSON', 'json matches')
    } else {
      t.equal(result.body.message,'Hello json', 'json matches')
    }
  } catch(err) {
    t.fail(err)
  }
})

test('get-name', async t => {
  t.plan(1)
  try {
    let result = await tiny.get({url: `${base}/name?first=nic&last=cage` })
    t.equal(result.body.name, 'nic cage', 'query param name matches')
  } catch(err) {
    t.fail(err)
  }
})

test('post-name', async t => {
  t.plan(1)
  try {
    let result = await tiny.post({url: `${base}/name`, data: {"first":"nic", "last":"cage"}})
    t.equal(result.body.name, 'nic cage', 'post form name matches')
  } catch(err) {
    t.fail(err)
  }
})

// this ends sandbox
test('end', async t=> {
  t.plan(1)
  await end()
  t.ok(true, 'ended')
})