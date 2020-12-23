//* returns true if array of strings

export const isArrayOfStrings = (value: [string]): boolean => {
  if (!Array.isArray(value)) {
    return false
  }

  return value.every(element => typeof element === 'string')
}
