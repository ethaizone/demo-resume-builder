import mergeWith from 'lodash.mergewith'

/**
 * Merges two objects deeply, but replaces arrays if they exist
 * This function will mutate first object
 *
 * @param {Object} object - The first object to merge.
 * @param {Object} source - The second object to merge.
 */
export function mergeDeepButReplaceArray(object: Object, source: Object) {
  mergeWith(object, source, (srcValue, objValue) => {
    if (Array.isArray(srcValue)) {
      if (!Array.isArray(objValue)) {
        return srcValue
      } else {
        return objValue.splice(0, objValue.length, ...srcValue)
      }
    }
  })
}
