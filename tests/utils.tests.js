import { describe, it } from 'mocha'
import { expect } from 'chai'
import { exists } from '../lib/utils.js'

describe('exists', function () {
  it('returns true if the given parameter is defined', function () {
    const expectTrue = value => expect(exists(value)).to.equal(true)
    expectTrue('')
    expectTrue(0)
    expectTrue(false)
    expectTrue({})
    expectTrue([])
    expectTrue(new Date(0))
  })

  it('returns false if the given parameter is undefined or null', function () {
    const expectFalse = value => expect(exists(value)).to.equal(false)
    expectFalse()
    // we disable the next line, because we explicitly want to test against void
    expectFalse((void 0)) // eslint-disable-line
    expectFalse(undefined)
    expectFalse(null)

    let someVar
    expectFalse(someVar)
  })
})
