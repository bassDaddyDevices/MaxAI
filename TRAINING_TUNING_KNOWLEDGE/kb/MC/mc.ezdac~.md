---
type: mc
name: "mc.ezdac~"
summary: "Audio output and on/off button"
signal: true
url: "https://docs.cycling74.com/reference/mc.ezdac~/"
package: "MC"
see_also: ["adstatus", "ezadc~", "adc~"]
---
# mc.ezdac~

Audio output and on/off button

## Description

[ezdac~](https://docs.cycling74.com/reference/ezdac~) works as a user interface version of the [dac~](https://docs.cycling74.com/reference/dac~) object. It appears as a button which can be clicked with the mouse to turn audio on or off.

## Arguments

None.

## Attributes

### bgcolor[4 floats]

Sets the color of the [ezdac~](https://docs.cycling74.com/reference/ezdac~) button background in RGBA format.

### color[4 floats] >= 7.0.0

Sets the icon color in RGBA format when ezdac~ is on.

### elementcolor[4 floats] >= 7.0.0

Sets the icon color in RGBA format when ezdac~ is off.

### local[int]: 0

Toggles enabling/disabling audio input for the local window only in the patch in which this [ezdac~](https://docs.cycling74.com/reference/ezdac~) is located, and in subpatches of that patch. Turns off audio processing in all other patches.

### style[symbol]: >= 7.0.0

Sets the [style](https://docs.cycling74.com/userguide/styles) to be applied to the object. Styles can be set using the [Format Palette](https://docs.cycling74.com/userguide/format_palette).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

A non-zero number turns on audio processing in all loaded patches.  0  turns off audio processing in all loaded patches.

Arguments:

- on/off-flag
  [int]

### list

list  comprised of integers, sets the logical output channels for each signal inlet in order from left to right.

Arguments:

- output-channel-designations
  [list]

### (mouse)

Clicking on [ezdac~](https://docs.cycling74.com/reference/ezdac~) toggles audio processing on or off. Audio on is represented by the object being highlighted.

### local

The word  local , followed by  1 , makes a click to turn on an [ezdac~](https://docs.cycling74.com/reference/ezdac~) object equivalent to sending it the  startwindow message . The message  local 0  returns the [ezdac~](https://docs.cycling74.com/reference/ezdac~) object to its default mode where a click to turn it on is equivalent to the  start  message.

Arguments:

- behavioral
  [int]

### open

Opens the Audio Status window. The window is also brought to the front.

### set

In any inlet: The word  set , followed by a number, sets the logical output channel for the signal inlet in which the  set  message was received. For instance, sending  set 3  to the left inlet of [ezdac~](https://docs.cycling74.com/reference/ezdac~) makes the signal coming in the left inlet output to logical output channel 3.

Note that if the audio is on and you use the  set  message to change a [ezdac~](https://docs.cycling74.com/reference/ezdac~) to use logical channels that are not currently in use, no sound will be heard from these channels until the audio is turned off and on again.

Arguments:

- output-channel-designation
  [int]

### signal

In left inlet: The signal is sent to audio output channel 1. The signal in each inlet must be between -1 and 1 to avoid clipping by the DAC.

In right inlet: The signal is sent to audio output channel 2.

### start

Turns on audio processing in all loaded patches.

### startwindow

Turns on audio processing only in the patch in which this [ezdac~](https://docs.cycling74.com/reference/ezdac~) is located, and in subpatches of that patch. Turns off audio processing in all other patches.

### stop

Turns off audio processing in all loaded patches.

### wclose

Closes the Audio Status window.

## Output

### Audio

None. The signal received in the inlet is sent to the corresponding audio output channel.

## See Also

| Name | Description |
| --- | --- |
| [adstatus](https://docs.cycling74.com/reference/adstatus) | Report and control audio driver settings |
| [ezadc~](https://docs.cycling74.com/reference/ezadc~) | Audio input and on/off button |
| [adc~](https://docs.cycling74.com/reference/adc~) | Audio input and on/off |
