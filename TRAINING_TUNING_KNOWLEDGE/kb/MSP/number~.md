---
type: msp
name: "number~"
summary: "Signal monitor and constant generator"
signal: true
url: "https://docs.cycling74.com/reference/number~/"
package: "MSP"
see_also: ["line~", "sig~", "snapshot~"]
---
# number~

Signal monitor and constant generator

## Description

Use the [number~](https://docs.cycling74.com/reference/number~) object to display signal values or generate them.

#### Discussion

The [number~](https://docs.cycling74.com/reference/number~) object has two different display modes. In Signal Monitor Mode it displays the value of the  signal  received in the left inlet.

In Signal Output Mode it displays the value of the  float  or  int  most recently received in the left inlet, or entered directly into the [number~](https://docs.cycling74.com/reference/number~) box (the signal being sent out the left outlet). When a [number~](https://docs.cycling74.com/reference/number~) object is highlighted (indicated by a yellow downward arrow), numerical keyboard input changes its value. Clicking the mouse or pressing Return or Enter stores a pending typed number and sends it out the left outlet as the new signal value.

## Arguments

None.

## Attributes

### bgcolor[4 floats]

Sets the color for the [number~](https://docs.cycling74.com/reference/number~) box object's displayed/unclicked background.

### ft1[float]: 0.

The word  ft1 , followed by a number, sets the interpolation ramp time in milliseconds. The default time is 0.

### interval[float]: 100.

Sets the update interval, in milliseconds. This controls the rate at which the display is updated when [number~](https://docs.cycling74.com/reference/number~) is input monitor display mode, as well as the rate that numbers are sent out the object's right outlet.

### maximum[atom]: <none>

Sets the maximum value that can be displayed or sent out by the object.

### minimum[atom]: <none>

Sets the minimum value that can be displayed or sent out by the object.

### monitormode[int]: 1

Toggles the signal monitor mode. The default is 1 (on).

### numdecimalplaces[int]: 0

Number of decimal places displayed

### sigoutmode[int]: 1

Toggles the signal output mode. The default is 1 (on).

### style[symbol]: >= 7.0.0

Sets the [style](https://docs.cycling74.com/userguide/styles) to be applied to the object. Styles can be set using the [Format Palette](https://docs.cycling74.com/userguide/format_palette).

### textcolor[4 floats]

Sets the color for the [number~](https://docs.cycling74.com/reference/number~) box object's displayed/unclicked number values. The  textcolor  attribute is mapped to the  textcolor\_inverse  style color.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

In signal output mode, a  bang  message will output the current signal value.

### int

Converted to  float .
In left inlet: The value is sent out the left outlet as a constant signal. When [number~](https://docs.cycling74.com/reference/number~) is in Signal Output display mode, the value is displayed. If the current ramp time is non-zero, the output signal will ramp between its previous value and the newly set value.

In right inlet: Sets a ramp time in milliseconds. The default time is 0.

Arguments:

- input
  [int]

### float

In left inlet: The value is sent out the left outlet as a constant signal. When [number~](https://docs.cycling74.com/reference/number~) is in Signal Output display mode, the value is displayed. If the current ramp time is non-zero, the output signal will ramp between its previous value and the newly set value.

In right inlet: Sets a ramp time in milliseconds. The default time is 0.

Arguments:

- input
  [float]

### (inlet1)

In right inlet: Sets a ramp time in milliseconds. The default time is 0.

Arguments:

- input
  [float]

### list

The first number sets the value of the signal sent out the left outlet, and the second number sets the ramp time in milliseconds.

Arguments:

- input-value
  [number]
- ramp-time
  [int]

### allow

The word  allow , followed by a number, sets what display modes can be used.  allow 1  restricts [number~](https://docs.cycling74.com/reference/number~) to signal output display mode.  allow 2  restricts [number~](https://docs.cycling74.com/reference/number~) to input monitor display mode.  allow 3  allows both modes, and lets the user switch between them by clicking on the left triangular area of [number~](https://docs.cycling74.com/reference/number~).

Arguments:

- display-mode-availability
  [int]

### flags

The  flags  message is provided for legacy support of the [number~](https://docs.cycling74.com/reference/number~) object; all the original functionality is now provided by object attributes.

Arguments:

- appearance/behavior
  [int]

### max

The word  max , followed by an optional number, sets the maximum value of [number~](https://docs.cycling74.com/reference/number~) for signal output. Note that unlike a floating-point number box, the maximum value of [number~](https://docs.cycling74.com/reference/number~) is not restricted to being an integer value. If the word  max  is not followed by a number, any maximum value is removed.

Arguments:

- maximum-value
  [number]

### min

The word  min , followed by an optional number, sets the minimum value of [number~](https://docs.cycling74.com/reference/number~) for signal output. Note that unlike a floating-point number box, the minimum value of [number~](https://docs.cycling74.com/reference/number~) is not restricted to being an integer value. If the word  min  is not followed by a number, any minimum value is removed.

Arguments:

- minimum-value
  [number]

### mode

The word  mode , followed by a number, sets the current display mode, if it is currently allowed (see the  allow  message).  mode 1  sets signal output display mode.  mode 2  sets signal input monitor display mode.

Arguments:

- display-mode
  [int]

### (mouse)

Clicking on the triangular area at the left side of [number~](https://docs.cycling74.com/reference/number~) will toggle between Signal Monitor display mode (green waveform) and Signal Output display mode (yellow or green downward arrow). When in Signal Output display mode, clicking in the area that displays the number changes the value of the signal sent out the left outlet of [number~](https://docs.cycling74.com/reference/number~) and/or selects it for typing.

### set

The word  set  followed by a number sets the [number~](https://docs.cycling74.com/reference/number~) object to display that number without causing output.

Arguments:

- set-input
  [float]

### signal

Any signal, the value of which is sampled and sent out the right outlet at regular intervals. When [number~](https://docs.cycling74.com/reference/number~) is in Signal Monitor display mode, the signal value is displayed.

## Output

### float

Out right outlet: Samples of the input signal are sent out at a rate specified by the  interval  message.

### signal

Out left outlet: When audio is on, [number~](https://docs.cycling74.com/reference/number~) sends a constant signal out its left outlet equal to the number most recently received in the left inlet (or entered by the user). It sends out this value independent of its  signal  input, and whether or not it is currently in Signal Output display mode. If the ramp time most recently received in the right inlet is set to a non-zero value, the output will interpolate between its previous value and a newly set value over the specified time.

## See Also

| Name | Description |
| --- | --- |
| [line~](https://docs.cycling74.com/reference/line~) | Linear signal ramp generator |
| [sig~](https://docs.cycling74.com/reference/sig~) | Convert numbers into audio signals |
| [snapshot~](https://docs.cycling74.com/reference/snapshot~) | Convert signal values to numbers |
