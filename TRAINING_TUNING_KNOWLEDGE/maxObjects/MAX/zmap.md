---
type: max
name: "zmap"
summary: "Maps input range of values to output range"
signal: false
url: "https://docs.cycling74.com/reference/zmap/"
package: "Max"
see_also: ["scale", "expr"]
---
# zmap

Maps input range of values to output range

## Description

Maps an input range of values and to an output range of values. Similar to [scale](https://docs.cycling74.com/reference/scale), but clips values to the ranges, and does not allow inverted scaling.

## Arguments

### minimum-input[number] optional

The minimum input value. If the low values is higher than the corresponding high value, the two values are reversed to preserve the high-low relationship.

### maximum-input[number] optional

The maximum input value. If the low values is higher than the corresponding high value, the two values are reversed to preserve the high-low relationship.

### minimum-output[number] optional

The minimum output value. If the low values is higher than the corresponding high value, the two values are reversed to preserve the high-low relationship. The [zmap](https://docs.cycling74.com/reference/zmap) object will clip to the boundaries of the output range.

### maximum-output[number] optional

The maximum output value. If the low values is higher than the corresponding high value, the two values are reversed to preserve the high-low relationship. The [zmap](https://docs.cycling74.com/reference/zmap) object will clip to the boundaries of the output range.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Perform the scaling operation on the most recently received input value. If the range values have been changed, the scaling will be based on the new range.

### int

Converted to  float .

Arguments:

- input
  [int]

### float

In left inlet: The incoming value is scaled according to the mapping provided by the arguments, or values received in the other inlets.

Note: The preservation of the high-low relationship is different from the behavior of the [scale](https://docs.cycling74.com/reference/scale) object, which lets you do reverse scaling. Also, note that the [zmap](https://docs.cycling74.com/reference/zmap) object will clip to the boundaries of the output range.

Arguments:

- input
  [float]

### (inlet1)

In second inlet: Sets the low input value. If the value is higher than the high input value, the two values are reversed to preserve the high-low relationship.

Arguments:

- minimum-input
  [float]

### (inlet2)

In third inlet: Sets the high input value. If the value is lower than the low input value, the two values are reversed to preserve the high-low relationship.

Arguments:

- maximum-input
  [float]

### (inlet3)

In fourth inlet: Sets the low output value. If the value is higher than the high output value, the two values are reversed to preserve the high-low relationship.

Arguments:

- minimum-output
  [float]

### (inlet4)

In right inlet: Sets the high output value. If the value is higher than the high output value, the two values are reversed to preserve the high-low relationship.

Arguments:

- maximum-output
  [float]

### list

In left inlet: A list of numbers sent to the left inlet will trigger the output of a list consisting of the results of performing the specified scaling operation on each item in the input list.

Arguments:

- input
  [list]

## Output

### float

When [zmap](https://docs.cycling74.com/reference/zmap) receives a value in its leftmost inlet, that value is scaled to the indicated output range of values.

## See Also

| Name | Description |
| --- | --- |
| [scale](https://docs.cycling74.com/reference/scale) | Map values to an output range |
| [expr](https://docs.cycling74.com/reference/expr) | Evaluate a mathematical expression |
