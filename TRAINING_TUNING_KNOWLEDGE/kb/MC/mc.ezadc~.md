---
type: mc
name: "mc.ezadc~"
summary: "Audio input and on/off button"
signal: true
url: "https://docs.cycling74.com/reference/mc.ezadc~/"
package: "MC"
see_also: ["adc~", "adstatus", "dac~", "ezdac~"]
---
# mc.ezadc~

Audio input and on/off button

## Description

[ezadc~](https://docs.cycling74.com/reference/ezadc~) works as a user interface version of the [adc~](https://docs.cycling74.com/reference/adc~) object. It appears as a button which can be clicked with the mouse to turn audio on or off.

## Arguments

None.

## Attributes

### bgcolor[4 floats]

Background Color

### color[4 floats] >= 7.0.0

Select the color to show the audio on status.

### elementcolor[4 floats] >= 7.0.0

Select the color to show the audio off status.

### local[int]: 0

Switch is Local

### style[symbol]: >= 7.0.0

Sets the [style](https://docs.cycling74.com/userguide/styles) to be applied to the object. Styles can be set using the [Format Palette](https://docs.cycling74.com/userguide/format_palette).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

A non-zero number turns on audio processing in all loaded patches. A value of  0  turns all audio processing off.

Arguments:

- stop/start-flag
  [int]

### list

list  comprised of integers sets the logical input channels for each signal inlet.

Arguments:

- input-channel-designations
  [list]

### (mouse)

Clicking on [ezadc~](https://docs.cycling74.com/reference/ezadc~) toggles audio processing on or off. Audio on is represented by the object being highlighted.

### local

The word  local , followed by  1 , makes a click to turn on an [ezadc~](https://docs.cycling74.com/reference/ezadc~) object equivalent to sending it the  startwindow message . The message  local 0  returns the [ezadc~](https://docs.cycling74.com/reference/ezadc~) object to its default mode where a click to turn it on is equivalent to the  start  message.

Arguments:

- behavioral
  [int]

### open

Opens the Audio Status window. The window is also brought to the front.

### set

The word  set , followed by two numbers, sets the logical input channel for one of the object's signal outlets. The first number specifies the outlet number, where  1  is the leftmost outlet. The second number specifies the logical input channel (from 1 to 512). If the second number is  0 , the outlet sends out the zero signal.

Arguments:

- logical-output-channel
  [int]
- logical-input-channel
  [int]

### start

Turns on audio processing in all loaded patches.

### startwindow

Turns on audio processing only in the patch in which this [ezadc~](https://docs.cycling74.com/reference/ezadc~) is located, and in subpatches of that patch. Turns off audio processing in all other patches.

### stop

Turns off audio processing in all loaded patches.

### wclose

Closes the Audio Status window.

## Output

### signal

Out left outlet: Audio input from channel 1.

Out right outlet: Audio input from channel 2.

## See Also

| Name | Description |
| --- | --- |
| [adc~](https://docs.cycling74.com/reference/adc~) | Audio input and on/off |
| [adstatus](https://docs.cycling74.com/reference/adstatus) | Report and control audio driver settings |
| [dac~](https://docs.cycling74.com/reference/dac~) | Audio output and on/off |
| [ezdac~](https://docs.cycling74.com/reference/ezdac~) | Audio output and on/off button |
