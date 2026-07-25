---
type: max
name: "colorpicker"
summary: "Select and output a color"
signal: false
url: "https://docs.cycling74.com/reference/colorpicker/"
package: "Max"
see_also: ["Dynamic Colors", "panel", "swatch"]
---
# colorpicker

Select and output a color

## Arguments

None.

## Attributes

### compatibility[int]: 1

Sets the output format used by the [colorpicker](https://docs.cycling74.com/reference/colorpicker) object. When set to zero, the output will be in RGBA format (four floating point numbers in the range 0. - 1.0). Setting this attribute to 1 (the default) will output RGB format (three integer values in the range 0 - 255).

### currentcolor[4 floats]

Sets the initial color in the Color Picker dialog.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Same as double-clicking the object. See the entry for  (mouse) .

### list

A list of numbers can be used to set the RGB or RGBA color components of the default color that initially appears in the Color Picker dialog when it is opened. A list of four floating poing numbers in the range 0. - 1.0 will specify the default color in RGBA format. For compatibility, a list of three integers in the range 0 - 255 will specify the color in the old style RGB format.

Arguments:

- red
  [number]
- green
  [number]
- blue
  [number]
- alpha
  [number]

### (mouse)

Double-clicking the object opens the Color Picker dialog box. If the patcher is unlocked, hold down the Command key on Macintosh or the Control key on Windows while double-clicking to open the dialog.

## Output

### list

After you open the Color Picker dialog box and make a selection, clicking on the OK button will send a list of the RGB equivalents of the color you selected out the outlet. If you click the Cancel button, no messages are sent.

## See Also

| Name | Description |
| --- | --- |
| [Dynamic Colors](https://docs.cycling74.com/userguide/dynamic_colors) | Dynamic Colors |
| [panel](https://docs.cycling74.com/reference/panel) | Colored background area |
| [swatch](https://docs.cycling74.com/reference/swatch) | Choose a color |
