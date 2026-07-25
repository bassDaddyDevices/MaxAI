---
type: max
name: "mpeformat"
summary: "Prepare data in the form of a Multidimensional Polyphonic Expression (MPE) MIDI message"
signal: false
url: "https://docs.cycling74.com/reference/mpeformat/"
package: "Max"
see_also: ["midiformat", "midiin", "midiparse", "mpeconfig", "mpeparse", "polymidiin"]
---
# mpeformat

Prepare data in the form of a Multidimensional Polyphonic Expression (MPE) MIDI message

## Description

Numbers received in the inlets from [midiformat](https://docs.cycling74.com/reference/midiformat) objects are routed as MPE-compatible MIDI messages. In addition, the object outputs  mpeevent  messages for use with instruments hosted by the [vst~](https://docs.cycling74.com/reference/vst~) object.

## Arguments

### channels[int] optional

An argument can be used to set the number of MIDI input channels. The number of inlets will be one more than the argument value, since the leftmost inlet is a global MIDI input. If no argument is specified, one Zone Master Channel input and 15 channel inputs will be created.

## Attributes

### chanrange[int]: 1

The channel range specifies the number of channels following the Zone Master Channel (15 by default.  masterchannel 1, chanrage 15  will be all 16 channels, and  masterchannel 1, chanrange 5  will be master channel 1 and the zone will run until the end of channel 6). The default value of the attribute is the same value as the first argument to the [mpeformat](https://docs.cycling74.com/reference/mpeformat) object (i.e. the number of input channels). If you set the attribute's value as an argument (e.g.  @chanrange 4 , you will set the number of inlets the object has, as well.

Note: You can set this attribute to a value between 1 and the Channel range if this change only effects the config MIDI message received from a [mpeconfig](https://docs.cycling74.com/reference/mpeconfig) object.

### masterchan[int]: 1

Sets the first MIDI channel to be addressed. All other channels number from there.

### zone[int]: 1

Sets the MPE MIDI Zone ID.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

bang  message to the leftmost inlet will send out the MPE configuration message for the current state of this object out the [mpeformat](https://docs.cycling74.com/reference/mpeformat) object's left outlet.

### int

Numbers received in the other inlets are used as data for MIDI messages and routed to the input channel corresponding to the inlet.

Arguments:

- byte
  [int]

### float

Converted to  int .

Arguments:

- byte
  [float]

### midievent

In any inlet: The MIDI Event Message. The message is a list composed of the symbol  midievent , followed by a list of integers which specify the MIDI event type and value.

### mpeevent

In any inlet: The MPE event message is a list composed of the symbol  mpeevent , followed by 6 integers which specify the Zone Master Channel, Zone Index, Voice Number, Channel Number, MIDI Message Number, and Data.

Arguments:

- MPE message
  [list]

### reset

The message  reset  resets an individual voice (if received in a voice inlet) or all voices (if received in the leftmost inlet).

## See Also

| Name | Description |
| --- | --- |
| [midiformat](https://docs.cycling74.com/reference/midiformat) | Prepare data in the form of a MIDI message |
| [midiin](https://docs.cycling74.com/reference/midiin) | Output raw MIDI data |
| [midiparse](https://docs.cycling74.com/reference/midiparse) | Interpret raw MIDI data |
| [mpeconfig](https://docs.cycling74.com/reference/mpeconfig) | Configure a MIDI device that supports Multidimensional Polyphonic Expression (MPE) messages |
| [mpeparse](https://docs.cycling74.com/reference/mpeparse) | Interpret raw MPE MIDI data |
| [polymidiin](https://docs.cycling74.com/reference/polymidiin) | Output Multidimensional Polyphonic Expression (MPE) MIDI data |
