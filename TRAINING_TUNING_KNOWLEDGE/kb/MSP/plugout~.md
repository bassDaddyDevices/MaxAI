---
type: msp
name: "plugout~"
summary: "Define a Max for Live Device's audio outputs"
signal: true
url: "https://docs.cycling74.com/reference/plugout~/"
package: "MSP"
see_also: ["plugin~"]
---
# plugout~

Define a Max for Live Device's audio outputs

## Description

The [plugout~](https://docs.cycling74.com/reference/plugout~) object sends its output to the Live application as part of a Max for Live Audio device or Instrument.

## Arguments

### output-channel-destination[int] optional

Although the [plugout~](https://docs.cycling74.com/reference/plugout~) object will accept one or two int arguments as a courtesy to Max 4 users who wish to port older plug-ins, output channel specifications are disabled. This behavior is modified when Max for Live is in [Preview Mode](https://docs.cycling74.com/userguide/m4l/live_preview).

## Attributes

### chans[int]

Sets a maximum amount of channels for plugout~. These channels will be accessible in other Max for Lives devices and audio channels within Live.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### signal

By convention, a Max for Live gets all its audio from the Live application using the [plugin~](https://docs.cycling74.com/reference/plugin~) object and sends its audio output using the [plugout~](https://docs.cycling74.com/reference/plugout~) object. This audio output is limited to two channels.

## Output

### signal

When used in Max, the signal output of the [plugout~](https://docs.cycling74.com/reference/plugout~) object is simply its signal input. When used in the runtime plug-in environment, the signal output to the outlets is undefined, and the input is copied to the audio outputs of the plug-in.

## See Also

| Name | Description |
| --- | --- |
| [plugin~](https://docs.cycling74.com/reference/plugin~) | Define a Max for Live device's audio inputs |
