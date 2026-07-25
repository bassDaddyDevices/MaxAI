---
type: mc
name: "mc.pow~"
summary: "Signal power function (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.pow~/"
package: "MC"
see_also: ["log~", "curve~"]
---
# mc.pow~

Signal power function (multichannel)

## Description

[pow~](https://docs.cycling74.com/reference/pow~) raises the base value (set in the right inlet) to the power of the exponent (set in the left inlet). Either inlet can receive a  signal ,  float  or  int .

## Arguments

### base-value[number] optional

Sets the base value. The default value is 0. If a  signal  is connected to the right inlet, the argument is ignored.

## Attributes

### Multichannel Group Attributes

Shared across all objects — see [Multichannel Group Attributes](../_shared/mc-group-attributes.md).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

TEXT\_HERE

### float

In left inlet: Sets the exponent. If there is a  signal  connected to the left inlet, a number received in the left inlet is ignored.

In right inlet: Sets the base value. If there is a signal connected to the right inlet, a number received in the right inlet is ignored.

Arguments:

- exponent/base-value
  [float]

### signal

In left inlet: Sets the exponent.

In right inlet: Sets the base value.

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

## Output

### signal

The base value (from the right inlet) raised to the exponent (from the left inlet).

## See Also

| Name | Description |
| --- | --- |
| [log~](https://docs.cycling74.com/reference/log~) | Logarithm of a signal |
| [curve~](https://docs.cycling74.com/reference/curve~) | Exponential ramp generator |
