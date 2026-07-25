---
type: max
name: "themecolor"
summary: "Change and/or listen for changes in interface colors"
signal: false
url: "https://docs.cycling74.com/reference/themecolor/"
package: "Max"
see_also: ["Dynamic Colors", "bgcolor", "colorpicker", "swatch", "thispatcher"]
---
# themecolor

Change and/or listen for changes in interface colors

## Description

Output the interface color whenever it changes, query Max for current color settings, and change an interface color.

#### Discussion

Interface colors in Max are determined by the selection of a theme in the Preferences window. If you wish to change any of these colors, or if you want your user interface objects to match your current style selection, you can use this object to get the color - or to change the user interface color to match your object.

## Arguments

None.

## Attributes

### color[symbol]

The current color to be watched by the object. When this interface color changes, a bang will be sent out the right outlet, and the color values (RGBA) will be sent out the left outlet.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Outputs the currently selected interface color from the leftmost outlet.

### list

A list of four colors (RGBA) will change the value of the current interface color.

Arguments:

- input
  [list]

### anything

The message  color , followed by a valid interface color, will change the current color that the [themecolor](https://docs.cycling74.com/reference/themecolor) object is watching.

A message containing a valid interface color will output the values of that color from the leftmost outlet.

A message containing a valid interface color, followed by four RGBA color values, will change the select interface color to the new values.

Arguments:

- input
  [list]

## See Also

| Name | Description |
| --- | --- |
| [Dynamic Colors](https://docs.cycling74.com/userguide/dynamic_colors) | Dynamic Colors |
| [bgcolor](https://docs.cycling74.com/reference/bgcolor) | Set background color |
| [colorpicker](https://docs.cycling74.com/reference/colorpicker) | Select and output a color |
| [swatch](https://docs.cycling74.com/reference/swatch) | Choose a color |
| [thispatcher](https://docs.cycling74.com/reference/thispatcher) | Send messages to a patcher |
