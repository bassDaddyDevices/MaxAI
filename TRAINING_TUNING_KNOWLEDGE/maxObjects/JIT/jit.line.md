---
type: jitter
name: "jit.line"
summary: "Outputs float time values using specified mode for realtime animation"
signal: false
url: "https://docs.cycling74.com/reference/jit.line/"
package: "jit.mo"
see_also: ["jit.mo.time", "jit.bang", "jit.framecount", "line"]
---
# jit.line

Generate timed ramp synched with render context

## Description

Generate ramps and line segements from one value to another within a specified amount of time, and output in synch with and timed by an external render context. jit.line functions as a drop in replacement for standard Max [line](https://docs.cycling74.com/reference/line) object, but removes stuttering associated with unsynched output between the line timer and context frames.

## Arguments

None.

## Attributes

### automatic[int]

Enables automatic update and output (default = 1). Requires a valid drawto context for synching with. When disabled updates and output require a bang message.

### drawto[symbol]

Bind to the named drawing context, allowing for updates to be received automatically when automatic is enabled.

### enable[int]

Enables animation and output of interpolated value (default = 1).

### fixed\_delta[float64]

Fixed frame delta time for calculating time output (default = 0.0). When non-zero, time functions will use this value to calculate output, rather than the delta time since last update.This can be useful when animating at a fixed rate regardless of the actual update rate.

### name[symbol]

Specifies the name of the instance (default = UID).

### targetname[symbol]

Target Name (unused)

### timevalue[float] read-only

Current interpolated value

### ui\_priority[int]

UI Priority (unused)

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Output interpolated value when automatic disabled

### int

Set current value and output immediately

### float

Set current value and output immediately

### list

Use various list combinations to reach a target value.

In one list combination, the first number specifies a starting value, followed by a comma and a number pair. The first number in the pair specifies the target value. The second number of the pair specifies the total amount of time (in milliseconds) in which [jit.line](https://docs.cycling74.com/reference/jit.line) should reach the target value. In that amount of time, numbers are output regularly in a line from the currently stored value to the target value.

An example of this type of list is  0, 1 1000 0 1000 . In this example, output would go from the starting value of 0 to 1 in one second, then back down to 0 in one second. Once the first ramp has reached its target value, the next one starts. A subsequent  list ,  float , or  int  in the left inlet clears all ramps yet to be generated.

If the list has an even number of elements greater than three, each pair of elements is considered a destination-ramptime pair in a breakpoint function. If the list has an odd number of elements greater than three, the last element will be ignored.

### reset

(Unused)

### update

Same functionality as  bang  message

## See Also

| Name | Description |
| --- | --- |
| [jit.mo.time](https://docs.cycling74.com/reference/jit.mo.time) | Outputs float time values using specified mode for realtime animation |
| [jit.bang](https://docs.cycling74.com/reference/jit.bang) | Output a frame bang |
| [jit.framecount](https://docs.cycling74.com/reference/jit.framecount) | Output a frame count |
| [line](https://docs.cycling74.com/reference/line) | Generate timed ramp |
