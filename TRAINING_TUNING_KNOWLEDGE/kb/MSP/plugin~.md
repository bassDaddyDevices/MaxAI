---
type: msp
name: "plugin~"
summary: "Define a Max for Live device's audio inputs"
signal: true
url: "https://docs.cycling74.com/reference/plugin~/"
package: "MSP"
see_also: ["plugout~"]
---
# plugin~

Define a Max for Live device's audio inputs

## Description

The [plugin~](https://docs.cycling74.com/reference/plugin~) object receives its input from the Live application as part of a Max for Live audio device.

## Arguments

### input-channels[list] optional

Up to 64 input channels can be used, and the number refers to the logical input position. If there are no channels specified, a default of 2 channels will be used.

## Attributes

### chans[int]

Maximum Channels

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### signal

By convention, a Max for Live gets all its audio from the Live application using the [plugin~](https://docs.cycling74.com/reference/plugin~) object and sends its audio output using the [plugout~](https://docs.cycling74.com/reference/plugout~) object. This audio output determined by the channel arguments to the object. This behavior is modified when Max for Live is in [Preview Mode](https://docs.cycling74.com/userguide/m4l/live_preview).

## Output

### signal

When used in Max, the signal output of the [plugin~](https://docs.cycling74.com/reference/plugin~) object is simply its signal input. When used in the runtime plug-in environment, the signal output will be the left and right channels of the audio input to the plug-in from the host. If the plug-in is inserted in a mono context, it's possible that only the left channel will contain the incoming audio signal and the right channel will be 0. The exact nature of the audio input to the plug-in is up to the host mixer.

## See Also

| Name | Description |
| --- | --- |
| [plugout~](https://docs.cycling74.com/reference/plugout~) | Define a Max for Live Device's audio outputs |
