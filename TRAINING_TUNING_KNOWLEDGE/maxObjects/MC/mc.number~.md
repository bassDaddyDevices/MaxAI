---
type: mc
name: "mc.number~"
summary: "Signal monitor and constant generator"
signal: true
url: "https://docs.cycling74.com/reference/mc.number~/"
package: "MC"
see_also: ["MC Visualization and Probing", "number~", "line~", "sig~", "snapshot~"]
---
# mc.number~

Multichannel signal monitor and constant generator

## Description

Use the [mc.number~](https://docs.cycling74.com/reference/mc.number~) object to display or generate multichannel signal values.

#### Discussion

The [mc.number~](https://docs.cycling74.com/reference/mc.number~) object operates in two different modes. Switch modes by clicking on the icon on the left side of the object box.

In  *signal monitor mode*  (denoted by a wave) it displays the value of the multichannel signal connected to its left inlet. Click one of the dots below the number to select an input channel for display.

In  *signal output mode*  (denoted by a downward arrow), [mc.number~](https://docs.cycling74.com/reference/mc.number~) displays a value received in the left inlet or entered into the object box. This number also becomes a constant signal value for a channel in [mc.number~](https://docs.cycling74.com/reference/mc.number~) 's multichannel signal output. Highlight the object for typing by clicking on the number, or scroll on the number to change its value. Click one of the dots below the number display to select a channel for generating a signal.

## Arguments

None.

## Attributes

### bgcolor[4 floats]

Background color

### chans[int]: 0

When the value of chans is non-zero the [mc.number~](https://docs.cycling74.com/reference/mc.number~) object displays and outputs a fixed number of channels regardless of the number of channels in a connected multichannel signal. When chans is 0 (the default), the object auto-adapts to the channel count of the connected multichannel signal.

### color[4 floats]

Sets the color of the active channel indicator.

### displaychan[int]: 1

The displaychan attribute sets the currently selected channel for display in either signal monitor mode or signal output mode. In addition, the value of displaychan attribute determines the output channel whose value will be set by numbers sent to the object's left inlet.

### ft1[float]: 0.

The ft1 attribute sets the ramp time of the output signal in milliseconds. The default time is 0.

### interval[float]: 100.

Sets the [mc.number~](https://docs.cycling74.com/reference/mc.number~) object's display update rate (in milliseconds). This is also the rate at which the connected multichannel signal is sampled and output as float values out the object's middle outlet.

### maximum[atom]: <none>

Sets the maximum value that can be displayed or output.

### minimum[atom]: <none>

Sets the minimum value that can be displayed or output.

### monitormode[int]: 1

The monitormode attribute enables or disables signal monitor mode.

### numdecimalplaces[int]: 0

Sets the number of decimal places shown for a displayed or entered value.

### sigoutmode[int]: 1

The sigoutmode attribute enables or disables signal output mode.

### style[symbol]: >= 7.0.0

Sets the [style](https://docs.cycling74.com/userguide/styles) to be applied to the object. Styles can be set using the [Format Palette](https://docs.cycling74.com/userguide/format_palette).

### textcolor[4 floats]

Sets the color for the [mc.number~](https://docs.cycling74.com/reference/mc.number~) object's number values. The  textcolor  attribute is mapped to the  textcolor\_inverse  style color.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

The  bang  message currently has no effect.

### int

Converted to  float .

Arguments:

- input-value or ramp-time
  [int]

### float

In left inlet: The value becomes a constant signal for the currently displayed channel in the multichannel output. When [mc.number~](https://docs.cycling74.com/reference/mc.number~) is in signal output mode, the value is displayed. If the ramp time is non-zero, the output signal will ramp between its previous value and the newly set value.

In right inlet: Sets a ramp time in milliseconds. The default time is 0.

Arguments:

- input-value or ramp-time
  [float]

### (inlet1)

In right inlet: Sets a ramp time in milliseconds. The default time is 0.

Arguments:

- ramp time
  [float]

### list

The first number sets a constant value for the output signal (see the  float  message above for details), and the second number sets the ramp time in milliseconds.

Arguments:

- input-value
  [number]
- ramp-time
  [int]

### allow

The word  allow , followed by a number, sets what display modes can be used.  allow 1  restricts [mc.number~](https://docs.cycling74.com/reference/mc.number~) to signal output display mode.  allow 2  restricts [mc.number~](https://docs.cycling74.com/reference/mc.number~) to input monitor display mode.  allow 3  (the default) premits the use of both modes, and lets you click on the icon at the left side of the object to switch between them.

Arguments:

- display-mode-availability
  [int]

### flags

The  flags  message is provided for legacy support of the [mc.number~](https://docs.cycling74.com/reference/mc.number~) object; all the original functionality is now provided by object attributes.

Arguments:

- appearance/behavior
  [int]

### max

The word  max , followed by an optional number, sets the maximum value of [mc.number~](https://docs.cycling74.com/reference/mc.number~) for signal output. The word  max  with no arguments clears any previously set maximum value.

Arguments:

- maximum value
  [number]

### min

The word  min , followed by an optional number, sets the minimum value of [number~](https://docs.cycling74.com/reference/number~) for signal output. The word  min  with no arguments clears any previously set minimum value.

Arguments:

- minimum value
  [number]

### mode

The word  mode , followed by a number, sets the current display mode, if it is currently allowed (see the  allow  message).  mode 1  sets signal output mode.  mode 2  sets signal input monitor mode.

Arguments:

- display-mode
  [int]

### (mouse)

Click on the icon at the left side of [number~](https://docs.cycling74.com/reference/number~) to switch between  *signal monitor mode*  (wave) and  *signal output mode*  (arrow). When in signal output mode, click on the number to highlight it for typing. Scroll on the number to change it. In either mode, click the dots below the number to choose a channel value to display.

### set

The word  set  followed by a number sets the [mc.number~](https://docs.cycling74.com/reference/mc.number~) object to display that number in signal output mode without causing output.

Arguments:

- set input
  [float]

### signal

[mc.number~](https://docs.cycling74.com/reference/mc.number~) samples values from a connected multichannel signal at a rate specified by its interval attribute. Sampled values are sent out the middle outlet, preceded by a channel index out the right outlet. When [mc.number~](https://docs.cycling74.com/reference/mc.number~) is in  *signal monitor mode* , it displays sampled values for the currently selected display channel.

## Output

### float

Out middle outlet: Samples of the input multichannel signal are sent out at a rate specified by the interval attribute.

### float

Out right outlet: Immediately preceding sample output from the middle outlet, [mc.number~](https://docs.cycling74.com/reference/mc.number~) outputs the channel index of the sampled signal value.

### signal

Out left outlet: When audio is on, [mc.number~](https://docs.cycling74.com/reference/mc.number~) outputs a multichannel signal consisting of constant values, set by values in signal output mode or received in its left inlet. If a non-zero ramp time is set, changes in output will ramp from previous to new values over the specified time.

## See Also

| Name | Description |
| --- | --- |
| [MC Visualization and Probing](https://docs.cycling74.com/userguide/mc/mc_visualization) | MC Visualization and Probing |
| [number~](https://docs.cycling74.com/reference/number~) | Signal monitor and constant generator |
| [line~](https://docs.cycling74.com/reference/line~) | Linear signal ramp generator |
| [sig~](https://docs.cycling74.com/reference/sig~) | Convert numbers into audio signals |
| [snapshot~](https://docs.cycling74.com/reference/snapshot~) | Convert signal values to numbers |
