---
type: max
name: "incdec"
summary: "Increment and decrement a value"
signal: false
url: "https://docs.cycling74.com/reference/incdec/"
package: "Max"
see_also: ["number", "umenu", "slider"]
---
# incdec

Increment and decrement a value

## Description

Increment or Decrement a value. When connected to a number box, Click the upper half of the object to increment, click the lower half to decrement.

## Arguments

None.

## Attributes

### annotation\_name[symbol]:

Info View Title

### bgcolor[4 floats]

Background Color

### elementcolor[4 floats] >= 7.0.0

Arrow Color

### fgcolor[4 floats]

Highlighted Arrow

### increment[float]: 1.

Sets the step size for increment/decrement.

### param\_connect[symbol]:

Establishes a two-way connection between the object and a parameter of a compatible object with parameters such as [gen~](https://docs.cycling74.com/reference/gen~) or [jit.gl.slab](https://docs.cycling74.com/reference/jit.gl.slab). The object can be used to change the value of the parameter and will update if the parameter value changes. The easiest way to set param\_connect is with the attribute's menu in the [inspector](https://docs.cycling74.com/userguide/inspector) or the Connect submenu of the [Object Action menu](https://docs.cycling74.com/userguide/action_menu). The menu displays all available parameters of compatible objects.

Setting the param\_connect attribute with a message requires the target parameter's path, which is the host object's scriping name followed by two colons and the parameter name. For example, for a [gen~](https://docs.cycling74.com/reference/gen~) object with scripting name  gen~\_AB , the path of the  freq  parameter would be  gen~\_AB::freq . You can set a value for the param\_connect before the host object or parameter exists, and the object will connect to the parameter once it exists. Refer to the user guide entry for [param\_connect](https://docs.cycling74.com/userguide/param_connect) for more details.

### parameter\_enable[int]

Enables use of this object with [Max for Live Parameters](https://docs.cycling74.com/userguide/m4l/live_parameters) and [setting initial parameter values](https://docs.cycling74.com/userguide/parameter_mode) in Max.

### parameter\_mappable[int]: 1

When parameter\_mappable is enabled, the object will be available for mapping to keyboard or MIDI input using the [Mappings feature](https://docs.cycling74.com/userguide/mapping).

### style[symbol]: >= 7.0.0

Sets the [style](https://docs.cycling74.com/userguide/styles) to be applied to the object. Styles can be set using the [Format Palette](https://docs.cycling74.com/userguide/format_palette).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

bang  message causes the [incdec](https://docs.cycling74.com/reference/incdec)  **object**  to output the currently stored value.

### int

A number sent to the [incdec](https://docs.cycling74.com/reference/incdec) object's inlet sets the value that will be incremented or decremented by clicking on the top or bottom of half of the object. The number is not sent out the outlet. [incdec](https://docs.cycling74.com/reference/incdec) is designed to be used with user interface objects such as the [number](https://docs.cycling74.com/reference/number) box, [dial](https://docs.cycling74.com/reference/dial), and the various sliders.

Arguments:

- input
  [int]

### float

A floating-point number sent to the [incdec](https://docs.cycling74.com/reference/incdec) object's inlet sets the value that will be incremented or decremented by clicking on the top or bottom of half of the object. The number is not sent out the outlet. [incdec](https://docs.cycling74.com/reference/incdec) is designed to be used with user interface objects such as the [number](https://docs.cycling74.com/reference/number) box, [dial](https://docs.cycling74.com/reference/dial), and the various sliders.

Arguments:

- input
  [float]

### dec

The  dec  message can be used to decrement and output the stored value.

### inc

The  inc  message can be used to increment and output the stored value.

### (mouse)

A mouse click increments or decrements the stored value (depending on which arrow is clicked) and sends it out the outlet.

### set

The word  set  followed by an integer value functions identically to the int message, and is provided for convenience.

Arguments:

- input
  [int]

## Output

### int

When you click on the top half of an [incdec](https://docs.cycling74.com/reference/incdec) object, it sends out a value that is one greater than the last value received at its inlet or sent out its outlet, whichever happened most recently. Holding the mouse button down continues to increment the output, gradually increasing in rate of output.

The same is true for the bottom half of the [incdec](https://docs.cycling74.com/reference/incdec)  **object** , except that the values are decremented.

## See Also

| Name | Description |
| --- | --- |
| [number](https://docs.cycling74.com/reference/number) | Display and output numbers, lists, and messages |
| [umenu](https://docs.cycling74.com/reference/umenu) | Pop-up menu |
| [slider](https://docs.cycling74.com/reference/slider) | Move a slider to output values |
