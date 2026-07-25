---
type: msp
name: "dac~"
summary: "Audio output and on/off"
signal: true
url: "https://docs.cycling74.com/reference/dac~/"
package: "MSP"
see_also: ["mc.dac~", "adc~", "adstatus", "ezadc~", "ezdac~"]
---
# dac~

Audio output and on/off

## Description

The [dac~](https://docs.cycling74.com/reference/dac~) ("digital-to-analog converter") object sends its signal inputs to audio hardware. Double-click on a [dac~](https://docs.cycling74.com/reference/dac~) to open the Audio Status window to configure audio settings and hardware.

## Arguments

### outputs[int/symbol] optional

You can create a [dac~](https://docs.cycling74.com/reference/dac~) object with one or more logical channel numbers between 1 and 1024. Logical channels are assigned to audio device channels using either the Audio Status window, its I/O Mappings subwindow, or an [adstatus](https://docs.cycling74.com/reference/adstatus) object (with keyword  output ). If the computer's built-in audio hardware is being used, there will be two output channels available. Other audio drivers and/or devices may have more than two channels. If no argument is typed in, [dac~](https://docs.cycling74.com/reference/dac~) will have two inlets, for input channels 1 and 2.

If a symbol is provided as the first argument to a [dac~](https://docs.cycling74.com/reference/dac~) object, its output will be sent to the Max mixer. If [dac~](https://docs.cycling74.com/reference/dac~) instances in a patcher hierarchy share the same name they will use the same mixer output.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

A non-zero number turns on audio processing in all loaded patches.  0  turns off audio processing in all loaded patches.

Arguments:

- on/off-flag
  [int]

### list

list  comprised of integers sets the logical output channels for each signal inlet in order from left to right.

Arguments:

- output-channel-designations
  [list]

### (mouse)

Double-clicking on [dac~](https://docs.cycling74.com/reference/dac~) opens the Audio Status window.

### open

Opens the Audio Status window.

### set

In any inlet: The word  set , followed by a number, sets the logical output channel for the signal inlet in which the  set  message was received. For instance, sending  set 3  to the left inlet of [dac~](https://docs.cycling74.com/reference/dac~) makes the signal coming in the left inlet output to logical output channel 3.

Note that if the audio is on and you use the  set  message to change a [dac~](https://docs.cycling74.com/reference/dac~) to use logical channels that are not currently in use, no sound will be heard from these channels until the audio is turned off and on again. For example, if you have a [dac~](https://docs.cycling74.com/reference/dac~) object with arguments 1 2 3 4 and signals are only connected to the two leftmost inlets (for channels 1 and 2), the message  set 1 3  will not immediately route the leftmost audio signal to logical channel 3, because it is not currently in use. A method to get around this is to connect a [sig~](https://docs.cycling74.com/reference/sig~)  0  to each channel of a [dac~](https://docs.cycling74.com/reference/dac~) you plan on using for a  set  message. At this point, you might as well use a [matrix~](https://docs.cycling74.com/reference/matrix~) or [selector~](https://docs.cycling74.com/reference/selector~) object to do something similar before the audio signal reaches the [dac~](https://docs.cycling74.com/reference/dac~).

Arguments:

- output-channel-designation
  [int]

### signal

A signal coming into an inlet of [dac~](https://docs.cycling74.com/reference/dac~) is sent to the audio output channel corresponding to the inlet. The signal must be between -1 and 1 to avoid clipping.

### start

Turns on audio processing in all loaded patches.

### startwindow

Turns on audio processing only in the patch in which this [dac~](https://docs.cycling74.com/reference/dac~) is located, and in subpatches of that patch. Turns off audio processing in all other patches.

### stop

Turns off audio processing in all loaded patches.

### wclose

Closes the Audio Status window if it is open.

## Output

### Audio

[dac~](https://docs.cycling74.com/reference/dac~) produces no output internal to the application. Signals received in its inlets are sent to its assigned logical audio output channels. You can assign logical channels to device output channels in the I/O Mappings subwindow of the Audio Status window.

## See Also

| Name | Description |
| --- | --- |
| [mc.dac~](https://docs.cycling74.com/reference/mc.dac~) | Multichannel audio output and on/off |
| [adc~](https://docs.cycling74.com/reference/adc~) | Audio input and on/off |
| [adstatus](https://docs.cycling74.com/reference/adstatus) | Report and control audio driver settings |
| [ezadc~](https://docs.cycling74.com/reference/ezadc~) | Audio input and on/off button |
| [ezdac~](https://docs.cycling74.com/reference/ezdac~) | Audio output and on/off button |
