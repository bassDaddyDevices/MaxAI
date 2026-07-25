---
type: mc
name: "mc.+~"
summary: "Add signals (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.%2B~/"
package: "MC"
see_also: ["+=~", "-~", "!-~"]
---
# mc.+~

Add signals (multichannel)

## Description

Use the [+~](https://docs.cycling74.com/reference/plus~) object to add two signals together, or to add an offset value to a signal.

## Arguments

### initial-offset[number] optional

Sets an initial offset to add to the signal coming into the left inlet. If a signal is connected to the right inlet, the argument is ignored. If no argument is present, and no signal is connected to the right inlet, the initial value is  0  by default.

## Attributes

### Multichannel Group Attributes

Shared across all objects — see [Multichannel Group Attributes](../_shared/mc-group-attributes.md).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

In left inlet: An offset to add to the signal coming into the right inlet. If a signal is connected to both left and right inlets, a  float  or  int  connected to either inlet will be ignored.

In right inlet: An offset to add to the signal coming into the left inlet. If a signal is connected to both left and right inlets, a  float  or  int  connected to either inlet will be ignored.

Arguments:

- offset
  [int]

### float

In left inlet: An offset to add to the signal coming into the right inlet. If a signal is connected to both left and right inlets, a  float  or  int  connected to either inlet will be ignored.

In right inlet: An offset to add to the signal coming into the left inlet. If a signal is connected to both left and right inlets, a  float  or  int  connected to either inlet will be ignored.

Arguments:

- offset
  [float]

### signal

In left inlet: The signal is added to the signal coming into the right inlet, or a constant value received in the right inlet. All signal inputs to a single inlet are summed. If a signal and number are both sent to the left inlet, the specified operation will be performed with those values.

In right inlet: The signal is added to the signal coming into the left inlet, or a constant value received in the left inlet. All signal inputs to a single inlet are summed.

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

## Output

### signal

The sum of the two inputs.

## See Also

| Name | Description |
| --- | --- |
| [+=~](https://docs.cycling74.com/reference/plusequals~) | Signal accumulator |
| [-~](https://docs.cycling74.com/reference/minus~) | Signal subtraction |
| [!-~](https://docs.cycling74.com/reference/rminus~) | Signal subtraction (inlets reversed) |
