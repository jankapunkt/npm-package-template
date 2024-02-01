/**
 * The super tool class. Holds a state and implements the execute command.
 */
export class SuperTool {
    /**
     * The possible states of the SuperTool.
     * @return {{great: string, cool: string, awesome: string, swag: string}}
     */
    static get states(): {
        great: string;
        cool: string;
        awesome: string;
        swag: string;
    };
    /**
     * Validates a state. To be valid, the value needs to be part of the {SuperTool.states}.
     * Throws an Error if invalid. Returns void / undefined if passed.
     * @param value The state candidate to be validated.
     * @throws if state is not a valid state
     */
    static validateState(value: any): void;
    /**
     * Constructor initializes the state. If none is given, it defaults to {'great'}.
     * @param state one of the SuperTool.state values
     * @throws if state is not a valid state
     */
    constructor({ state }?: {
        state?: string;
    });
    _state: string;
    /**
     * Validates and sets a new state value if given and returns the updated value. If no defined value is given it just returns the
     * current state value.
     * @param value {String|undefined} optional state to be set.
     * @return {String} the current state value
     */
    state(value: string | undefined): string;
    /**
     * Executes with the current internal state.
     * @return {string} the execution including the current state.
     */
    execute(): string;
}
