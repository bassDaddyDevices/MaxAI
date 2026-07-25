---
type: mc
name: "mc.sig~"
summary: "Convert numbers into audio signals (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.sig~/"
package: "MC"
see_also: ["line~", "mcs.sig~", "snapshot~"]
---
# mc.sig~

Convert numbers into audio signals (multichannel)

## Description

Use the [sig~](https://docs.cycling74.com/reference/sig~) object to convert regular numbers into audio signals.

#### Discussion

The [sig~](https://docs.cycling74.com/reference/sig~) object is sample-accurate when Scheduler in Audio Interrupt is enabled. More details [here](https://docs.cycling74.com/userguide/sample_accurate_messages).

## Arguments

### initial-output-value[number] optional

One or more numbers set the initial output signal values. The number of values entered determines the number of outlets.

## Attributes

### Multichannel Group Attributes

Shared across all objects — see [Multichannel Group Attributes](../_shared/mc-group-attributes-v2.md).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

Number to be output as a  signal

Arguments:

- input
  [int]

### float

Number to be output as a  signal

Arguments:

- input
  [float]

### list

A list sets values for each output corresponding to the position of the number in the list.

Arguments:

- input
  [list]

### set

The message  set  followed by an int, then a float, sets the value for a specified index. The first  int  argument sets the index (outlet). The second  float  argument sets the value for that index. The index starts at 0 for the leftmost outlet.

Arguments:

- index
  [int]
- value
  [float]

### signal

If a signal patch cord is connected to the inlet of [sig~](https://docs.cycling74.com/reference/sig~), the value of the signal will be ignored. However, you can use the connection to influence the order of DSP operations. The connection guarantees that [sig~](https://docs.cycling74.com/reference/sig~) and whatever is connected to it will occur after any objects connected to the inlet of [sig~](https://docs.cycling74.com/reference/sig~). This advanced technique is known as  **order forcing** .

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

## Output

### signal

[sig~](https://docs.cycling74.com/reference/sig~) outputs a constant signal consisting of the value of its argument or the most recently received  int  or  float  in its inlet.

## See Also

| Name | Description |
| --- | --- |
| [line~](https://docs.cycling74.com/reference/line~) | Linear signal ramp generator |
| [mcs.sig~](https://docs.cycling74.com/reference/mcs.sig~) | Convert numbers to audio signals (multichannel output) |
| [snapshot~](https://docs.cycling74.com/reference/snapshot~) | Convert signal values to numbers |
