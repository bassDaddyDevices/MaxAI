---
type: jitter
name: "jit.mo.join"
summary: "Combine jit.mo streams and output a multi-plane matrix"
signal: false
url: "https://docs.cycling74.com/reference/jit.mo.join/"
package: "jit.mo"
see_also: ["jit.mo.func", "jit.mo.field", "jit.mo.time", "jit.anim.path", "jit.world"]
---
# jit.mo.join

Combine jit.mo streams and output a multi-plane matrix

## Description

Combine jit.mo streams and output a multi-plane matrix. Automatically connects to jit.world to drive animations. Inputs add multiple jit.mo/matrix inputs for additive control.

## Arguments

### Inlet Count[number] optional

Set the number of inlets and planecount of output.

### Dimension[number] optional

Set the dimension (number of elements) of the output matrix and any attached [jit.mo.func](https://docs.cycling74.com/reference/jit.mo.func) objects. jit.mo objects only support matrices with a dimcount of 1.

## Attributes

### fixed\_delta[float64]

Fixed frame delta time for animating functions (default = 0.0). When non-zero, animations will use this value to calculate output, rather than the delta time since last update.This can be useful when animating at a fixed rate regardless of the actual update rate.

### interval[time]

Animation interval (default = 0 ms). This attribute uses the Max time format syntax, so the interval can be either fixed or tempo-relative.When set to a non-zero value, the speed attribute is no longer user settable, and will be automatically set based on the interval value.

### scale[float64]

Output multiplier (default = 1.0).

### enable[long]

Enable Animation (default = 1). This affects any connected jit.mo.func objects

### speed[float64]

Animation speed (default = 1.). Scales animation speed of all connected jit.mo.func objects

### name[symbol]

Object name (default = UID).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.mo.func](https://docs.cycling74.com/reference/jit.mo.func) | Generate animated single dim matrices using a specified function |
| [jit.mo.field](https://docs.cycling74.com/reference/jit.mo.field) | Field manipulator for 3 plane jit.mo streams |
| [jit.mo.time](https://docs.cycling74.com/reference/jit.mo.time) | Outputs float time values using specified mode for realtime animation |
| [jit.anim.path](https://docs.cycling74.com/reference/jit.anim.path) | Evaluate a path of 3D transform points |
| [jit.world](https://docs.cycling74.com/reference/jit.world) | The Jitter world context |
