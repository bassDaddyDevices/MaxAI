---
type: msp
name: "minus~"
summary: "Signal subtraction"
signal: true
url: "https://docs.cycling74.com/reference/minus~/"
package: "MSP"
see_also: ["+~", "!-~"]
---
# minus~

Signal subtraction

## Description

Use the [-~](https://docs.cycling74.com/reference/minus~) object to perform signal subtraction (to output a signal which is the difference between two signals).

## Arguments

### initial-subtraction-value[number] optional

Sets an initial amount to subtract from the signal coming into the left inlet. If a signal is connected to the right inlet, the argument is overidden. If no argument is present, and no signal is connected to the right inlet, the initial value is  0  by default.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

In left inlet: Subtracts the signal coming into the right inlet from this value. If a signal is connected to both left and right inlets, a  float  or  int  connected to either inlet will be ignored.

In right inlet: An amount to subtract from the signal coming into the left inlet. If a signal is connected to both left and right inlets, a  float  or  int  connected to either inlet will be ignored.

Arguments:

- input
  [int]

### float

In left inlet: Subtracts the signal coming into the right inlet from this value. If a signal is connected to both left and right inlets, a  float  or  int  connected to either inlet will be ignored.

In right inlet: An amount to subtract from the signal coming into the left inlet. If a signal is connected to both left and right inlets, a  float  or  int  connected to either inlet will be ignored.

Arguments:

- input
  [float]

### signal

In left inlet: The signal coming into the right inlet or a constant value received in the right inlet is subtracted from this signal. All signal inputs to a single inlet are summed. If a signal and number are both sent to the left inlet, the specified operation will be performed with those values.

In right inlet: The signal is subtracted from the signal coming into the left inlet, or a constant value received in the left inlet. All signal inputs to a single inlet are summed.

## Output

### signal

The difference between the two inputs.

## See Also

| Name | Description |
| --- | --- |
| [+~](https://docs.cycling74.com/reference/plus~) | Add signals |
| [!-~](https://docs.cycling74.com/reference/rminus~) | Signal subtraction (inlets reversed) |
