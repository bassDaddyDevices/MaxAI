---
type: max
name: "mpeconfig"
summary: "Configure a MIDI device that supports Multidimensional Polyphonic Expression (MPE) messages"
signal: false
url: "https://docs.cycling74.com/reference/mpeconfig/"
package: "Max"
see_also: ["midiin", "midiformat", "midiparse", "mpeformat", "mpeparse", "polymidiin"]
---
# mpeconfig

Configure a MIDI device that supports Multidimensional Polyphonic Expression (MPE) messages

## Description

The [mpeconfig](https://docs.cycling74.com/reference/mpeconfig) object is used to set up and configure zones for interpreting incoming MIDI to MPE devices.

## Arguments

None.

## Attributes

### chanrange[int]: 15

The channel range specifies the number of channels following the zone master channel. (e.g.  masterchannel 1, chanrage 15  will be all 16 channels, and  masterchannel 1, chanrange 5  will be master channel 1 and the zone will run until the end of channel 6).

### masterchan[int]: 1

The zone master channel specifies the first channel for the currently defined zone.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

The  bang  message causes a zone to be defined based on the current settings of  masterchan  and  chanrange . You can have a maximum of 7 zones.

### clear

The  clear  message clears all currently configured zones and returns them to their default state.

### createzone

The word  createzone , followed by a list of two integers that define the Master channel and the Note bend range, will define a zone. No  bang  message is required when using this message. You can have a maximum of 7 zones configured in any way you wish amongst the 16 channels.

Arguments:

- master-channel
  [int]
- note-bend-range
  [int]

### masterbendrange

The word  masterbendrange , followed by an integer that specifies the maximum pitch bend range in semitones, will set the pitch bend range for all zones. that define the Master channel and the Note bend range, will define a zone. No  bang  message is required when using this message.

Arguments:

- max-bend-range
  [int]

### notebendrange

The word  notebandrange , followed by an integer that specifies the maximum pitch bend range in semitones, will set the pitch bend range for a specified master channel.

 **Note:**  If no master channel is set using a  @masterchan  attribute, the  notebandrange  message must always be preceded by a  masterchan  message to select a master channel, and followed by a  bang  message to define the zone.

Arguments:

- max-bend-range
  [int]

## See Also

| Name | Description |
| --- | --- |
| [midiin](https://docs.cycling74.com/reference/midiin) | Output raw MIDI data |
| [midiformat](https://docs.cycling74.com/reference/midiformat) | Prepare data in the form of a MIDI message |
| [midiparse](https://docs.cycling74.com/reference/midiparse) | Interpret raw MIDI data |
| [mpeformat](https://docs.cycling74.com/reference/mpeformat) | Prepare data in the form of a Multidimensional Polyphonic Expression (MPE) MIDI message |
| [mpeparse](https://docs.cycling74.com/reference/mpeparse) | Interpret raw MPE MIDI data |
| [polymidiin](https://docs.cycling74.com/reference/polymidiin) | Output Multidimensional Polyphonic Expression (MPE) MIDI data |
