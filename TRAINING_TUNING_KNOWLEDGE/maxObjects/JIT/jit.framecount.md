---
type: jitter
name: "jit.framecount"
summary: "Outputs float time values using specified mode for realtime animation"
signal: false
url: "https://docs.cycling74.com/reference/jit.framecount/"
package: "jit.mo"
see_also: ["jit.mo.time", "jit.line", "jit.bang"]
---
# jit.framecount

Output a frame count

## Description

Outputs the count of frames as they are rendered by the attached context.

## Arguments

None.

## Attributes

### automatic[int]

Enables automatic update and output (default = 1). Requires a valid drawto context for synching with. When disabled updates and output require a bang message.

### drawto[symbol]

Bind to the named drawing context, allowing for updates to be received automatically when automatic is enabled.

### enable[int]

Enables output of frame count values (default = 1).

### fixed\_delta[float64]

Fixed frame delta time for calculating time output (default = 0.0). When non-zero, time functions will use this value to calculate output, rather than the delta time since last update.This can be useful when animating at a fixed rate regardless of the actual update rate.

### name[symbol]

Specifies the name of the instance (default = UID).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Output count when automatic disabled

### reset

Reset the frame count

### update

Same functionality as  bang  message

## See Also

| Name | Description |
| --- | --- |
| [jit.mo.time](https://docs.cycling74.com/reference/jit.mo.time) | Outputs float time values using specified mode for realtime animation |
| [jit.line](https://docs.cycling74.com/reference/jit.line) | Generate timed ramp synched with render context |
| [jit.bang](https://docs.cycling74.com/reference/jit.bang) | Output a frame bang |
