module.exports = ({ className = '', configName = '', property = '' }) => {
  return ({ addUtilities, config, e }) => {
    const values = config(configName)
    const variants = config('modules')[configName]
    const newUtils = Object.keys(values).reduce(
      (obj, key) => ({
        ...obj,
        [`.${e(`${className}-${key}`)}`]: {
          [property]: values[key]
        }
      }),
      {}
    )
    addUtilities(newUtils, variants)
  }
}
