---
type: max
name: "xbendin"
summary: "Interpret extra precision MIDI pitch bend values"
signal: false
url: "https://docs.cycling74.com/reference/xbendin/"
package: "Max"
see_also: ["bendin", "midiin", "xbendout"]
---
# xbendin

Interpret extra precision MIDI pitch bend values

## Description

Acts as a 14-bit pitch bend filter/processor and [xbendin2](https://docs.cycling74.com/reference/xbendin) serves as a 2-byte pitch bend filter/processor.

## Arguments

### channel[int] optional

The number specifies a MIDI channel on which to recognize pitch bend messages. If there is no argument, [xbendin](https://docs.cycling74.com/reference/xbendin) recognizes pitch bend messages on all channels, and the channel number is sent out the extra outlet on the right.

### xbendin2[symbol] optional

Normally, [xbendin](https://docs.cycling74.com/reference/xbendin) sends pitch bend values out the left outlet as 14-bit values. If the object is called [xbendin2](https://docs.cycling74.com/reference/xbendin), however, there will be an additional outlet. The most significant data byte of the message is sent out the leftmost outlet, and the least significant data byte is sent out the second outlet.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

The numbers are individual bytes of a MIDI message stream, received from an object such as [midiin](https://docs.cycling74.com/reference/midiin) or [seq](https://docs.cycling74.com/reference/seq). MIDI pitch bend messages are recognized by [xbendin](https://docs.cycling74.com/reference/xbendin), and the pitch bend data is sent out in full precision.

Arguments:

- input
  [int]

## Output

### int

The pitch bend value is sent out the left outlet of [xbendin](https://docs.cycling74.com/reference/xbendin) as a single 14-bit value. If the object is called [xbendin2](https://docs.cycling74.com/reference/xbendin), there is an additional outlet. The most significant 7 bits are sent out the leftmost outlet, and the least significant (extra precision) 7 bits are sent out the second outlet. If there is no channel number specified as an argument (omni on), [xbendin](https://docs.cycling74.com/reference/xbendin) will have an extra outlet on the right, which will output the channel number of the incoming pitch bend message.

## See Also

| Name | Description |
| --- | --- |
| [bendin](https://docs.cycling74.com/reference/bendin) | Output MIDI pitch bend values |
| [midiin](https://docs.cycling74.com/reference/midiin) | Output raw MIDI data |
| [xbendout](https://docs.cycling74.com/reference/xbendout) | Format extra precision MIDI pitch bend messages |
