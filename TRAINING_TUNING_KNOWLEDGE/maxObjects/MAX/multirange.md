---
type: max
name: "multirange"
summary: "Graphical function breakpoint editor"
signal: false
url: "https://docs.cycling74.com/reference/multirange/"
package: "Max"
see_also: ["mc.evolve~", "mc.function", "mc.gradient~", "mc.range~"]
---
# multirange

Graphical function breakpoint editor

## Description

multirange is designed to work with mc.evolve~ and mc.gradient to set their breakpoints

## Arguments

None.

## Attributes

### annotation\_name[symbol]:

Info View Title

### bgcolor[4 floats]

Sets the background color of the [multirange](https://docs.cycling74.com/reference/multirange) objects display panel in the RGBA format.

### color[4 floats]

Sets the color of the breakpoint and bar elements in the RGBA format.

### domain[float]: 1.

Sets the maximum displayed X value, then modifies the X values of all breakpoints so that they remain in the same place given the new domain.

### elementcolor[4 floats]

Sets the color of the regions between breakpoints and bar elements in the RGBA format.

### legend[int]: 1

Toggles the numerical display (legend) of the  multirange  object, displayed when a point is highlighted or updated.

### param\_connect[symbol]:

Establishes a two-way connection between the object and a parameter of a compatible object with parameters such as [gen~](https://docs.cycling74.com/reference/gen~) or [jit.gl.slab](https://docs.cycling74.com/reference/jit.gl.slab). The object can be used to change the value of the parameter and will update if the parameter value changes. The easiest way to set param\_connect is with the attribute's menu in the [inspector](https://docs.cycling74.com/userguide/inspector) or the Connect submenu of the [Object Action menu](https://docs.cycling74.com/userguide/action_menu). The menu displays all available parameters of compatible objects.

Setting the param\_connect attribute with a message requires the target parameter's path, which is the host object's scriping name followed by two colons and the parameter name. For example, for a [gen~](https://docs.cycling74.com/reference/gen~) object with scripting name  gen~\_AB , the path of the  freq  parameter would be  gen~\_AB::freq . You can set a value for the param\_connect before the host object or parameter exists, and the object will connect to the parameter once it exists. Refer to the user guide entry for [param\_connect](https://docs.cycling74.com/userguide/param_connect) for more details.

### parameter\_enable[int]

Enables use of this object with [Max for Live Parameters](https://docs.cycling74.com/userguide/m4l/live_parameters) and [setting initial parameter values](https://docs.cycling74.com/userguide/parameter_mode) in Max.

### parameter\_mappable[int]: 1

When parameter\_mappable is enabled, the object will be available for mapping to keyboard or MIDI input using the [Mappings feature](https://docs.cycling74.com/userguide/mapping).

### range[2 floats]: 0. 1.

Sets the minimum and maximum display ranges for Y and phase values.

### style[symbol]:

Sets the [style](https://docs.cycling74.com/userguide/styles) to be applied to the object. Styles can be set using the [Format Palette](https://docs.cycling74.com/userguide/format_palette).

### textcolor[4 floats]

Sets the display color for text in RGBA format.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Outputs a series of multi-element lists out the middle-left outlet. The first three lists are the inital breakpoint's phase, y2 and y1 values. The next three contain the phase, y2 and y1 values for all subsequent breakpoints.

### int

Sending a value within the [multirange](https://docs.cycling74.com/reference/multirange) object's
domain
returns a list with the y1, y2 and phase at that x position.

Arguments:

- lookup
  [int]

### float

Sending a value within the [multirange](https://docs.cycling74.com/reference/multirange) object's
domain
returns a list with the y1, y2 and phase at that x position.

Arguments:

- lookup
  [float]

### list

Creates a new breakpoint at the specified x-position. If the list contains only three values, the phase is set to the average of the y1 and y2 values. An optional 4th value can be used to speficy the phase value.

A list with 5 values modifies the breakpoint at the index specified by the first list element (beginning with 0).

Arguments:

- x-value
  [number]
- y2-value
  [number]
- y1-value
  [number]
- phase
  [number]

### clear

The word  clear  by itself erases all existing breakpoints. The word  clear  can also be followed by one or more breakpoint indices (starting at 0) to clear selected breakpoints.

### dump

Outputs a series of multiple element lists describing each break point out the [multirange](https://docs.cycling74.com/reference/multirange) object's middle-right outlet. Each list contains the breakpoints X, Y1, Y2 and phase values. An optional symbol argument can be used to specify a [receive](https://docs.cycling74.com/reference/receive) objects as a destination.

Arguments:

- receive-name
  [symbol]

### listdump

Outputs a single list which contains all X, Y and phase values for each of the breakpoints out the [multirange](https://docs.cycling74.com/reference/multirange) object's middle-right outlet. An optional symbol argument can be used to specify a [receive](https://docs.cycling74.com/reference/receive) objects as a destination.

Arguments:

- receive-name
  [symbol]

### (mouse)

You can use the mouse to add breakpoints to the [multirange](https://docs.cycling74.com/reference/multirange) function; the finished function can then be sent to a [mc.evolve~](https://docs.cycling74.com/reference/mc.evolve~) or [mc.gradient~](https://docs.cycling74.com/reference/mc.gradient~) object for use as a control signal in MSP. The X, Y1, Y2 and phase values of the breakpoint are displayed in the upper part of the object’s box.

Clicking on empty space in the function adds a breakpoint at the current X position, which you can begin to move immediately by dragging.

Clicking on the bar connecting the Y1 and Y2 nodes and dragging allows you to change the X position of the breakpoint.

Clicking on either y point of a breakpoint allows you to adjust the value by dragging.

Shift-clicking on a breakpoint deletes that point from the function. Command-clicking on Macintosh or Control-clicking on Windows on a breakpoint toggles the sustain property of the point. Sustain points are outlined in white. Whenever an editing operation with the mouse is completed, a bang is sent out the right outlet.

Points with a Y value of 0 are outlined circles; other points are solid. This allows you to see at a glance whether a function starts or ends at Y = 0.

## See Also

| Name | Description |
| --- | --- |
| [mc.evolve~](https://docs.cycling74.com/reference/mc.evolve~) | Generate a periodic multichannel function from breakpoint ranges |
| [mc.function](https://docs.cycling74.com/reference/mc.function) | Breakpoint function editor |
| [mc.gradient~](https://docs.cycling74.com/reference/mc.gradient~) | Generate a time-varying function over the space of a multichannel signal |
| [mc.range~](https://docs.cycling74.com/reference/mc.range~) | Generate a multichannel signal with a range of constant values |
