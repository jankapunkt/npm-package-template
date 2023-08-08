import { exists } from './utils.js'

/**
 * The possible states of the supertool.
 * @private
 */
const superToolStates = {
  great: 'great',
  cool: 'cool',
  awesome: 'awesome',
  swag: 'swag'
}

/**
 * The super tool class. Holds a state and implements the execute command.
 */

class SuperTool {
  /**
   * The possible states of the SuperTool.
   * @return {{great: string, cool: string, awesome: string, swag: string}}
   */

  static get states () {
    return superToolStates
  }

  /**
   * Validates a state. To be valid, the value needs to be part of the {SuperTool.states}.
   * Throws an Error if invalid. Returns void / undefined if passed.
   * @param value The state candidate to be validated.
   * @throws if state is not a valid state
   */

  static validateState (value) {
    if (!superToolStates[value]) {
      throw new Error(`Invalid state: ${value}`)
    }
  }

  /**
   * Constructor initializes the state. If none is given, it defaults to {'great'}.
   * @param state one of the SuperTool.state values
   * @throws if state is not a valid state
   */

  constructor ({ state = SuperTool.states.great } = {}) {
    SuperTool.validateState(state)
    this._state = state
  }

  /**
   * Validates and sets a new state value if given and returns the updated value. If no defined value is given it just returns the
   * current state value.
   * @param value {String|undefined} optional state to be set.
   * @return {String} the current state value
   */

  state (value) {
    if (exists(value)) {
      SuperTool.validateState(value)
      this._state = value
    }
    return this._state
  }

  /**
   * Executes with the current internal state.
   * @return {string} the execution including the current state.
   */

  execute () {
    return `I feel ${this._state}!`
  }
}

export default SuperTool
