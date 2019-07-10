# tailwind-plugin-add-named-utils
A very simple tailwind plugin for adding basic utility classes. Useful for replacing built-in classes with custom-named classes.

## Usage

For example, let's pretend you want to add a custom-named utility for `line-height` with the prefix `lh` instead of using the built-in `leading`.

1. Install the plugin by copying `add-named-utils.js` somewhere in your repo (it's not available in npm yet).
2. Require the function as `addNamedUtil` at the top of the tailwind.js config.
3. Call `addNamedUtil` with the required options as part of the `plugins` array.
4. Register the custom util by its `configName` value in the `modules` object. Optionally, disable the corresponding equivalent module if replacing an existing util.
5. Define the utility class name suffixes and values within a property matching the `configName` value provided (e.g. `lineHeight`).

```js
const addNamedUtil = require('./path/to/plugin/add-named-utils.js')

module.exports = {
  /*
  |-----------------------------------------------------------------------------
  | Line-height
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your line-height utility values. Originally,
  | tailwind called this "leading" and created the class name 
  | `leading-{line-height}`.
  |
  | With the add-named-utils plugin, we now map the line-height utility values
  | to a custom class name. 
  |
  | Class name: .lh-{line-height}
  |
  */

  lineHeight: {
    normal: 'normal',
    tight: 1.15,
    comfy: 1.5,
    loose: 2
  },

  modules: {
    leading: false,
    lineHeight: [],
  },

  plugins: [
    addNamedUtil({
      className: 'lh',
      configName: 'lineHeight',
      property: 'line-height'
    })
  ]
}
```
