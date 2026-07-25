---
type: max
name: "swatch"
summary: "Choose a color"
signal: false
url: "https://docs.cycling74.com/reference/swatch/"
package: "Max"
see_also: ["Dynamic Colors", "colorpicker", "panel"]
---
# swatch

Choose a color

## Description

Provides 2-dimensional selection and display of colors, representing hue along the horizontal axis and lightness along the vertical axis. A third color dimension, saturation, may be set by means of the  saturation  message.

## Arguments

None.

## Attributes

### annotation\_name[symbol]:

Info View Title

### compatibility[int]: 0

Toggles the number input and output of the [swatch](https://docs.cycling74.com/reference/swatch) object to be in the range of 0.-1.0 floating-point values (0, default) or to old-style 0-255 integer values (1).

### param\_connect[symbol]:

Establishes a two-way connection between the object and a parameter of a compatible object with parameters such as [gen~](https://docs.cycling74.com/reference/gen~) or [jit.gl.slab](https://docs.cycling74.com/reference/jit.gl.slab). The object can be used to change the value of the parameter and will update if the parameter value changes. The easiest way to set param\_connect is with the attribute's menu in the [inspector](https://docs.cycling74.com/userguide/inspector) or the Connect submenu of the [Object Action menu](https://docs.cycling74.com/userguide/action_menu). The menu displays all available parameters of compatible objects.

Setting the param\_connect attribute with a message requires the target parameter's path, which is the host object's scriping name followed by two colons and the parameter name. For example, for a [gen~](https://docs.cycling74.com/reference/gen~) object with scripting name  gen~\_AB , the path of the  freq  parameter would be  gen~\_AB::freq . You can set a value for the param\_connect before the host object or parameter exists, and the object will connect to the parameter once it exists. Refer to the user guide entry for [param\_connect](https://docs.cycling74.com/userguide/param_connect) for more details.

### parameter\_enable[int]

Enables use of this object with [Max for Live Parameters](https://docs.cycling74.com/userguide/m4l/live_parameters) and [setting initial parameter values](https://docs.cycling74.com/userguide/parameter_mode) in Max.

### parameter\_mappable[int]: 1

When parameter\_mappable is enabled, the object will be available for mapping to keyboard or MIDI input using the [Mappings feature](https://docs.cycling74.com/userguide/mapping).

### saturation[float]: 255.

Set the saturation of available swatch colors

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

bang  message causes output of the RGBA values of the current color at the selected (x,y) position on the 2-dimensional colorspace, taking into account the current saturation value.

### int

In left inlet: Set the red color value (ignores values over 1), and cause output of all values.

Note: Unlike most Max objects, input to any one of the three inlets will re-calculate the current color location on the swatch, and trigger output.

Arguments:

- red
  [int]

### (inlet1)

In middle inlet: Set the red color value (ignores values over 1), and cause output of all values.

Note: Unlike most Max objects, input to any one of the three inlets will re-calculate the current color location on the swatch, and trigger output.

Arguments:

- green
  [int]

### (inlet2)

In right inlet: Set the red color value (ignores values over 1), and cause output of all values.

Note: Unlike most Max objects, input to any one of the three inlets will re-calculate the current RGBA color location on the swatch, and trigger output.

Arguments:

- blue
  [int]

### float

Set the red color value (0.-1.), and cause output of all values.

Arguments:

- red
  [float]

### (inlet1)

Set the green color value (0.-1.), and cause output of all values.

Arguments:

- green
  [float]

### (inlet2)

Set the red color value (0.-1.), and cause output of all values.

Arguments:

- blue
  [float]

### list

A list of three numbers between 0. and 1. sets the four RGBA color components (red, green, blue, alpha), refreshes the display and causes RGBA output.

Arguments:

- red
  [number]
- green
  [number]
- blue
  [number]
- alpha
  [number]

### alpha

The word  alpha , followed by a floating-point number between 0. and 1., will set the RGBA alpha (opacity) value.

Arguments:

- opacity
  [float]

### hsl

The word  hsl , followed by a list of three numbers between 0. and 1., sets the color based on the given hue (x-axis), saturation, and lightness (y-axis) values. The [swatch](https://docs.cycling74.com/reference/swatch) object converts these values to RGBA color values, refreshes the display, and causes output of the RGBA values.

Arguments:

- hue
  [int]
- saturation
  [int]
- lightness
  [int]

### (mouse)

Clicking and dragging on the [swatch](https://docs.cycling74.com/reference/swatch) object will calculate and output the RGBA color at the selected (x, y) position on the 2-dimensional (hue-lightness) colorspace, taking into account the current saturation value.

### set

The word  set , followed by a list of three numbers between 0. and 1. sets the four RGBA color components (red, green, blue, alpha) and refreshes the display without causing RGBA output.

Arguments:

- red
  [number]
- green
  [number]
- blue
  [number]
- alpha
  [number]

### sethsl

The word  sethsl , followed by a list of three numbers between 0. and 1., sets the color based on the given hue (x-axis), saturation, and lightness (y-axis) values and the refreshes the display. Unlike the  hsl  message the  sethsl  message does not output the corresponding RGBA values.

Arguments:

- hue
  [int]
- saturation
  [int]
- lightness
  [int]

## Output

### int

Out right outlet: the current saturation value (calculated from an RGB list input, or output directly after a  saturation  message)

### list

Out left outlet: a list of four RGBA (red, green, blue, alpha) color values

## See Also

| Name | Description |
| --- | --- |
| [Dynamic Colors](https://docs.cycling74.com/userguide/dynamic_colors) | Dynamic Colors |
| [colorpicker](https://docs.cycling74.com/reference/colorpicker) | Select and output a color |
| [panel](https://docs.cycling74.com/reference/panel) | Colored background area |
