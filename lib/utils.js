/**
 * Returns true of a given parameter is not null and not undefined.
 * @param any any input is feasible
 * @return {boolean} true if defined, otherwise false
 */
export const exists = any => any !== null && typeof any !== 'undefined'

/**
 * This should be removed by rollup's tree shaking
 * @private
 */
export const ignore = () => {}
