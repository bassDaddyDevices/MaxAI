---
type: mc
name: "mc.+=~"
summary: "Signal accumulator (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.%2B%3D~/"
package: "MC"
see_also: ["+~"]
---
# mc.+=~

Signal accumulator (multichannel)

## Description

[+=~](https://docs.cycling74.com/reference/plusequals~) adds all the values it receives. The result can grow very large, very fast.

## Arguments

### initial-sum[float] optional

Sets the initial value for the sum. The default is 0.

## Attributes

### Multichannel Group Attributes

Shared across all objects — see [Multichannel Group Attributes](../_shared/mc-group-attributes.md).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Resets the sum to 0.

### set

The word  set , followed by a number, sets the stored value to that number, without triggering output.

Arguments:

- stored-sum
  [float]

### signal

Each sample of the input is added to all previous samples to produce a running sum. For instance, assuming the sum started at 0, an input signal consisting of 1, 1, 1, 1 would produce 1, 2, 3, 4 as an output signal.

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

## Output

### signal

Each sample of the output is the sum of all previous input samples.

## See Also

| Name | Description |
| --- | --- |
| [+~](https://docs.cycling74.com/reference/plus~) | Add signals |
