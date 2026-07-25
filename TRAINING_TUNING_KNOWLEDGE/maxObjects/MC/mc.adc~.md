---
type: mc
name: "mc.adc~"
summary: "Multichannel audio input and on/off"
signal: true
url: "https://docs.cycling74.com/reference/mc.adc~/"
package: "MC"
see_also: ["mc.adc~", "adstatus", "ezadc~", "ezdac~", "dac~"]
---
# mc.adc~

Audio input and on/off

## Description

The [adc~](https://docs.cycling74.com/reference/adc~) ("analog-to-digital converter") object outputs one or more signals (one per outlet) with audio from hardware input devices.

## Arguments

### inputs[int] optional

If [adc~](https://docs.cycling74.com/reference/adc~) has one numeric argument, it determines the number of outlets that produce signals from audio input hardware starting with logical input channel 1. If [adc~](https://docs.cycling74.com/reference/adc~) has more than one argument, it is taken as a list of logical input channels assigned to its outlets. If no arguments are supplied, [adc~](https://docs.cycling74.com/reference/adc~) will have two outlets, initially set to logical input channels 1 and 2.

If a symbol is provided as the first argument to [adc~](https://docs.cycling74.com/reference/adc~), its output will come from a named inport port in the Max mixer. If [adc~](https://docs.cycling74.com/reference/adc~) instances in a patcher hierarchy share the same name they will use the same mixer input port.

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

list  comprised of integers sets the logical input channels for each signal inlet.

Arguments:

- input-channel-designations
  [list]

### (mouse)

Double-clicking on [adc~](https://docs.cycling74.com/reference/adc~) opens the Audio Status window.

### open

Opens the Audio Status window.

### set

The word  set , followed by two numbers, sets the logical input channel for one of the object's signal outlets. The first number specifies the outlet number, where  1  is the leftmost outlet. The second number specifies the logical input channel (from 1 to 1024). If the second number is  0 , the outlet sends out the zero signal.

Arguments:

- logical-output-channel
  [int]
- logical-input-channel
  [int]

### start

Turns on audio processing in all loaded patches.

### startwindow

Turns on audio processing only in the patch in which this [adc~](https://docs.cycling74.com/reference/adc~) is located, and in subpatches of that patch. Turns off audio processing in all other patches.

### stop

Turns off audio processing in all loaded patches.

### wclose

Closes the Audio Status window if it is open

## Output

### signal

Audio from hardware input devices is output as a series of signals, one per outlet.

## See Also

| Name | Description |
| --- | --- |
| [mc.adc~](https://docs.cycling74.com/reference/mc.adc~) | Multichannel audio input and on/off |
| [adstatus](https://docs.cycling74.com/reference/adstatus) | Report and control audio driver settings |
| [ezadc~](https://docs.cycling74.com/reference/ezadc~) | Audio input and on/off button |
| [ezdac~](https://docs.cycling74.com/reference/ezdac~) | Audio output and on/off button |
| [dac~](https://docs.cycling74.com/reference/dac~) | Audio output and on/off |
