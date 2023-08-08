/* global beforeEach afterEach */
import { describe, it } from 'mocha'
import { expect } from 'chai'
import { SuperTool } from '../lib/index.js'

describe('SuperTool', function () {
  let tool

  beforeEach(function () {
    tool = new SuperTool()
  })

  afterEach(function () {
    tool = null
  })

  describe('validateState (static)', function () {
    it('throws if the value is not a valid state', function () {
      const expectThrow = value => {
        const fn = () => SuperTool.validateState(value)
        expect(fn).to.throw(`${value}`)
      }
      expectThrow()
      expectThrow(null)
      expectThrow(undefined)
      expectThrow('foo')
      expectThrow({})
      expectThrow([])
      expectThrow(1)
      expectThrow(true)
    })

    it('returns nothing on a valid state', function () {
      const expectValid = value => expect(SuperTool.validateState(value)).to.be.undefined
      expectValid(SuperTool.states.great)
      expectValid(SuperTool.states.awesome)
      expectValid(SuperTool.states.cool)
      expectValid(SuperTool.states.swag)
    })
  })

  describe('constructor', function () {
    it('is created with default state', function () {
      expect(tool.state()).to.equal(SuperTool.states.great)
    })

    it('can be created with an explicit initial state', function () {
      const toolExplicit = new SuperTool({ state: SuperTool.states.awesome })
      expect(toolExplicit.state()).to.equal(SuperTool.states.awesome)
    })
  })

  describe('state', function () {
    it('returns the current state if no value is given', function () {
      // before call
      expect(tool._state).to.equal(SuperTool.states.great)
      // call
      expect(tool.state()).to.equal(SuperTool.states.great)
      // after call
      expect(tool._state).to.equal(SuperTool.states.great)
    })

    it('sets the current state if the state is a valid state value', function () {
      // before call
      expect(tool._state).to.equal(SuperTool.states.great)
      // call
      expect(tool.state(SuperTool.states.awesome)).to.equal(SuperTool.states.awesome)
      // after call
      expect(tool._state).to.equal(SuperTool.states.awesome)
    })
  })

  describe('execute', function () {
    it('executes the current state', function () {
      expect(tool.execute()).to.equal(`I feel ${SuperTool.states.great}!`)
      tool.state(SuperTool.states.swag)
      expect(tool.execute()).to.equal(`I feel ${SuperTool.states.swag}!`)
    })
  })
})
