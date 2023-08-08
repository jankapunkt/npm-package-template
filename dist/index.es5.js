function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * Returns true of a given parameter is not null and not undefined.
 * @param any any input is feasible
 * @return {boolean} true if defined, otherwise false
 */
var exists = function exists(any) {
  return any !== null && typeof any !== 'undefined';
};

/**
 * The possible states of the supertool.
 * @private
 */
var superToolStates = {
  great: 'great',
  cool: 'cool',
  awesome: 'awesome',
  swag: 'swag'
};

/**
 * The super tool class. Holds a state and implements the execute command.
 */
var SuperTool = /*#__PURE__*/function () {
  /**
   * Constructor initializes the state. If none is given, it defaults to {'great'}.
   * @param state one of the SuperTool.state values
   * @throws if state is not a valid state
   */

  function SuperTool() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$state = _ref.state,
      state = _ref$state === void 0 ? SuperTool.states.great : _ref$state;
    _classCallCheck(this, SuperTool);
    SuperTool.validateState(state);
    this._state = state;
  }

  /**
   * Validates and sets a new state value if given and returns the updated value. If no defined value is given it just returns the
   * current state value.
   * @param value {String|undefined} optional state to be set.
   * @return {String} the current state value
   */
  _createClass(SuperTool, [{
    key: "state",
    value: function state(value) {
      if (exists(value)) {
        SuperTool.validateState(value);
        this._state = value;
      }
      return this._state;
    }

    /**
     * Executes with the current internal state.
     * @return {string} the execution including the current state.
     */
  }, {
    key: "execute",
    value: function execute() {
      return "I feel ".concat(this._state, "!");
    }
  }], [{
    key: "states",
    get:
    /**
     * The possible states of the SuperTool.
     * @return {{great: string, cool: string, awesome: string, swag: string}}
     */

    function get() {
      return superToolStates;
    }

    /**
     * Validates a state. To be valid, the value needs to be part of the {SuperTool.states}.
     * Throws an Error if invalid. Returns void / undefined if passed.
     * @param value The state candidate to be validated.
     * @throws if state is not a valid state
     */
  }, {
    key: "validateState",
    value: function validateState(value) {
      if (!superToolStates[value]) {
        throw new Error("Invalid state: ".concat(value));
      }
    }
  }]);
  return SuperTool;
}();
export { SuperTool };
//# sourceMappingURL=index.es5.js.map
