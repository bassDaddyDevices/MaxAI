---
type: mc
name: "mc.!-~"
summary: "Signal subtraction (inlets reversed) (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.!-~/"
package: "MC"
see_also: ["+~", "-~"]
---
# mc.!-~

Signal subtraction (inlets reversed) (multichannel)

## Description

The [!-~](https://docs.cycling74.com/reference/rminus~) object functions just like the [-~](https://docs.cycling74.com/reference/minus~) object, but the inlet order is reversed.

## Arguments

### initial-subtraction-value[number] optional

Sets an initial amount to subtract from the signal coming into the right inlet. If a signal is only connected to the left inlet, that value is subtracted from the given argument. If a signal is connected to both the left and right inlets, the argument is overridden by the signal coming into the right inlet. If no argument is present, the initial value is  0  by default.

## Attributes

### Multichannel Group Attributes

Shared across all objects — see [Multichannel Group Attributes](../_shared/mc-group-attributes.md).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

In left inlet: An amount to subtract from the signal coming into the right inlet. If a signal is connected to both left and right inlets, a  float  or  int  connected to either inlet will be ignored.

In right inlet: Subtracts the signal coming into the left inlet from this value. If a signal is connected to both left and right inlets, a  float  or  int  connected to either inlet will be ignored.

Arguments:

- input
  [int]

### float

In left inlet: An amount to subtract from the signal coming into the right inlet. If a signal is connected to both left and right inlets, a  float  or  int  connected to either inlet will be ignored.

In right inlet: Subtracts the signal coming into the left inlet from this value. If a signal is connected to both left and right inlets, a  float  or  int  connected to either inlet will be ignored.

Arguments:

- input
  [float]

### signal

In left inlet: The signal is subtracted from the signal coming into the right inlet, or a constant value received in the right inlet. All signal inputs to a single inlet are summed. If a signal and number are both sent to the left inlet, the specified operation will be performed with those values.

In right inlet: The signal coming into the left inlet or a constant value received in the left inlet is subtracted from this signal. All signal inputs to a single inlet are summed.

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

## Output

### signal

The difference between the two inputs.

## See Also

| Name | Description |
| --- | --- |
| [+~](https://docs.cycling74.com/reference/plus~) | Add signals |
| [-~](https://docs.cycling74.com/reference/minus~) | Signal subtraction |
