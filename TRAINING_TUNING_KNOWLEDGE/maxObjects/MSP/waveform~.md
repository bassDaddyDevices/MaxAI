---
type: msp
name: "waveform~"
summary: "buffer~ viewer and editor"
signal: true
url: "https://docs.cycling74.com/reference/waveform~/"
package: "MSP"
see_also: ["buffer~", "groove~"]
---
# waveform~

buffer~ viewer and editor

## Description

Use the [waveform~](https://docs.cycling74.com/reference/waveform~) object to view or edit the contents of a [buffer~](https://docs.cycling74.com/reference/buffer~).

## Arguments

None.

## Attributes

### allowdrag[int]: 1 >= 7.0.0

Toggles drag & drop functionality.

### attr\_bpm[float]: 120.

Specifies beats per minute as the time reference unit relative to a tempo and number of beats per bar, both of which you can set with the  bpm  message. [waveform~](https://docs.cycling74.com/reference/waveform~) can also calculate a tempo that fits your current selection, via the  setbpm  message.

### beats[int]: 4

Toggles the display of time in beat units if the  waveform~  object is set to display time in bpm units (set using the  setunit  attribute). The default is 0 (off).

### bgcolor[4 floats]

Sets the background color in RGBA format used to paint the entire object rectangle before the rest of the display components are drawn on top.

### buffername[symbol]

Sets the name of the [buffer~](https://docs.cycling74.com/reference/buffer~) object.

### chanoffset[int]: 1

Specifies a given channel in a multi-channel audio file to be displayed. Channel numbering starts at 1, and values must be in the range 1-4.

Possible values:

'1'

'2'

'3'

'4'

### clipdraw[int]: 0

When set to 1, will cause values being edited in draw mode to be clipped to the range of the display (as determined by the  vzoom  message).  clipdraw 0  disables clipping, allowing values to be scaled freely beyond the range of the window. The default is 0, no clipping.

### grid[float]: 1000.

Specifies that the selection start and end points should snap to the vertical grid lines, as set by the  grid  message. Since the spacing of the grid lines is affected by the current time measurement unit, and by the offset value (if an offset has been specified), snap to grid will be affected by these parameters as well.

### gridcolor[4 floats]

Sets the gridcolor in RGBA format. The  gridcolor  attribute is mapped to the  elementcolor  style color.

### invert[int]: 0

Toggles inverting the colors used for selected and non-selected portions of the  waveform~  object's display. The default is 0 (non-inverted).

### labels[int]: 1

Alias:
ruler

Toggles the display of the numerical labels of time measurement across the top of the display. Any non-zero int causes the labels to be drawn. An argument of  0 , or no argument, disables them.

### norulerclick[int]: 1

Toggles clicking and dragging in the ruler area of the [waveform~](https://docs.cycling74.com/reference/waveform~) display. The default is enabled.

### offset[float]: 0.

Causes all labels and time measurement markings to be shifted by a specified number of milliseconds. Snap behavior is shifted as well.  offset  can be removed by sending the message  offset 0. , or the  offset  message with no argument.

### outmode[int]: 4

Determines when selection start and end values are sent in response to mouse activity. Only the selection start and end (outlets 3 and 4) are affected. Mouse information is always sent from outlet 5, regardless of the selected mode.

 none : Selection start and end values are not sent in response to mouse activity. Sending the  outmode  message with no argument has the same effect as the same message with the argument  none .
 down : Causes the current selection start and end values to be sent (from outlets 3 and 4) only when you click inside the [waveform~](https://docs.cycling74.com/reference/waveform~) object's display.

 up : Causes selection start and end to be sent only when you release the mouse button, after clicking inside the [waveform~](https://docs.cycling74.com/reference/waveform~) object's display..

 downup : Causes selection start and end to be sent both when you click inside the [waveform~](https://docs.cycling74.com/reference/waveform~) object's display., and when the mouse button is released.

 continuous : Causes selection start and end to be sent on click, release, and throughout the drag operation, whenever the values change.

### quiet[int]: 0

Toggles outputting values from the  waveform~  object while dragging. The default is 0 (send values while dragging) inverting the colors used for selected and non-selected portions of the  waveform~  object's display. The default is 0 (output data while dragging).

### reflection[int]: 0

Reflection

### reflectioncolor[4 floats]

Reflection Color

### selectalpha[float]: 0.5

This attribute is used to import older patches that contain [waveform~](https://docs.cycling74.com/reference/waveform~) objects. Previously, the selection rectangle is painted using two legacy messages (rgb2 and rgb7) and a "blend" transfer mode. Max uses the alpha channel to set the selection color, and will automatically apply this attribute to older version patches containing this object. rectangle.

### selectioncolor[4 floats]

Sets the selection rectangle color which identifies the selection range in RGBA format.

### setmode[int]: 0

Determines how the [waveform~](https://docs.cycling74.com/reference/waveform~) object responds to mouse activity.

Possible values:

0 = 'None'
(
Set display only mode
)
Causes [waveform~](https://docs.cycling74.com/reference/waveform~) to enter a "display only" mode, in which clicking and dragging have no effect. For convenience, and to add custom interface behavior, mouse activity is still sent according to the mouseoutput mode. A  mode  message with no argument has the same effect as  mode none .

1 = 'Select'
(
Set default display mode
)
Sets the default display mode of the [waveform~](https://docs.cycling74.com/reference/waveform~) object. In select mode, the cursor appears as an I-beam within the [waveform~](https://docs.cycling74.com/reference/waveform~) display area. You can click and drag with the mouse to select a range of values. Mouse activity will cause [waveform~](https://docs.cycling74.com/reference/waveform~) to generate update messages, according to the mouseoutput setting.

2 = 'Loop'
(
Set loop display mode
)
Sets an alternative loop selection style that uses vertical mouse movement to grow and shrink the selection length, while horizontal movement is mapped to position. This works well to control a [groove~](https://docs.cycling74.com/reference/groove~) object. When loop mode is selected, moving your cursor inside the display area changes its appearance to a double I-beam.

3 = 'Move'
(
Set move display mode
)
Sets the move display mode of the [waveform~](https://docs.cycling74.com/reference/waveform~) object. This mode allows you to navigate the [waveform~](https://docs.cycling74.com/reference/waveform~) view. Vertical mouse movement lets you zoom in and out, while horizontal movement scrolls through the time range of the x-axis. Clicking on a point in the graph makes it the center reference point for the rest of the mouse event (until the mouse button is released). This lets you "grab" a spot and zoom in on it without having to constantly re-center the display.

4 = 'Draw'
(
Set draw display mode
)
Sets the draw display mode of the [waveform~](https://docs.cycling74.com/reference/waveform~) object. This mode allows you to edit the values of the target [buffer~](https://docs.cycling74.com/reference/buffer~), using a pencil tool. Clicking and dragging in draw mode directly changes the [buffer~](https://docs.cycling74.com/reference/buffer~) samples, and can not be undone. Sample values are interpolated linearly as you drag, resulting in a continuous change, even if you are zoomed out too far to see the individual samples.

### setunit[int]: 0

Sets the unit of time measurement used by the display.

Possible values:

0 = 'Millisecond'
(
Set timing to milliseconds
)
Sets the display unit to milliseconds (the default).

1 = 'Samples'
(
Set timing to sample position in the [buffer~](https://docs.cycling74.com/reference/buffer~)
)
Causes time values to be shown as sample positions in the target [buffer~](https://docs.cycling74.com/reference/buffer~). The first sample is numbered 0, unless the display has been shifted by the  offset  message.

2 = 'Phase'
(
Set timing to phase within the [buffer~](https://docs.cycling74.com/reference/buffer~)
)
Causes time to be displayed according to phase within the [buffer~](https://docs.cycling74.com/reference/buffer~), normalized so that the 0 refers to the first sample, and 1 refers to the last. This type of measurement unit is especially relevant when working with objects that use 0-1 signal sync, such as [phasor~](https://docs.cycling74.com/reference/phasor~) and [wave~](https://docs.cycling74.com/reference/wave~).

3 = 'BPM'
(
Set timing to beats per minute
)
Specifies beats per minute as the time reference unit, relative to a tempo and number of beats per bar, both of which you can set with the  bpm  message. [waveform~](https://docs.cycling74.com/reference/waveform~) can also calculate a tempo that fits your current selection, via the  setbpm  message.

### shadowalpha[float]: 0.

Shadow Alpha

### shadowblend[float]: 0.

Shadow Blend

### shadowline[int]: 1

Draw Shadow Line

### shadowproportion[float]: 0.

Shadow Proportion

### snapto[int]: 0

Sets the snap mode of the [waveform~](https://docs.cycling74.com/reference/waveform~) selection range.  snap  causes the start and end points of the selection to automatically move to specific points in the [buffer~](https://docs.cycling74.com/reference/buffer~), defined by the snap mode.

Possible values:

0 = 'Nothing'
(
Disable snap
)
Disables snap to allow free selection (the default).

1 = 'Grid'
(
Snap start and end point to vertical grid lines
)
Specifies that the selection start and end points should snap to the vertical grid lines, as set by the  grid  attribute. Since the spacing of the grid lines is affected by the current time measurement unit, and by the offset value (if an offset has been specified), snap to grid will be affected by these parameters as well.

2 = 'Zero Crossing'

### style[symbol]: >= 7.0.0

Sets the [style](https://docs.cycling74.com/userguide/styles) to be applied to the object. Styles can be set using the [Format Palette](https://docs.cycling74.com/userguide/format_palette).

### ticks[int]: 0

Specifies the number of ticks that should be drawn between each grid line. The default is eight. An argument of  0 , or no argument, disables the tick marks.

### vlabels[int]: 0

Toggles the drawing of vertical axis labels along the rightmost edge of the [waveform~](https://docs.cycling74.com/reference/waveform~) display. Any non-zero number causes the labels to be drawn. An argument of  0 , or no argument, disables them.

### voffset[float]: 0.

Sets the vertical offset of the [waveform~](https://docs.cycling74.com/reference/waveform~) display. A value of 0. places the x-axis in the middle, which is the default.

### vticks[int]: 1

Disables or enables display of the vertical axis tick marks along the left and right edges of the [waveform~](https://docs.cycling74.com/reference/waveform~) display. Any non-zero int causes the tick marks to be drawn. An argument of  0 , or no argument, disables them.

### vzoom[float]: 1.

Sets the vertical scaling of the [waveform~](https://docs.cycling74.com/reference/waveform~) display.

### waveformcolor[4 floats]

Sets the foreground color in RGBA format used to draw the [buffer~](https://docs.cycling74.com/reference/buffer~) data as a waveform graph. The  waveformcolor  attribute is mapped to the  color  style color.

### zoom\_orientation[int]: 0

Change the zoom orientation depending on mouse direction.

Possible values:

0 = 'Up'
(
Zoom when mouse is moved up
)
1 = 'Down'
(
Zoom when mouse is moved down
)

### zoomstyle[int]: 0

Sets drawing style when zoomed-in

Possible values:

0 = 'Line'
(
Draw waveform as a line
)
1 = 'Bars'
(
Draw waveform as bars above or below zero
)

### zoomthresh[float]: 1.

If the pixel-to-sample ratio (zoom factor) is greater than or equal to zoomthresh, the zoomed-in drawing style is used instead of the filled-in gradient. If the value of zoomthresh is 0, the zoomed-in drawing style is never used.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

A bang in any inlet will cause [waveform~](https://docs.cycling74.com/reference/waveform~) to dump/output the value to which it is set specific to the inlet in which the  bang  is received.

### int

Converted to  float  specific to each inlet.

In left inlet: Sets the display start time in milliseconds. Changing this value will offset and/or zoom the view, so that the requested time in the [buffer~](https://docs.cycling74.com/reference/buffer~) sample data is aligned to the left edge of the display. The default is 0 (display starts at the beginning of the target [buffer~](https://docs.cycling74.com/reference/buffer~)).

In 2nd inlet: Sets the display length in milliseconds. The default is the length of the [buffer~](https://docs.cycling74.com/reference/buffer~).
In 3rd inlet: Sets the start time of the selection range in milliseconds.

In 4th inlet: Sets the end time of the selection range in milliseconds.

Arguments:

- display-settings
  [int]

### float

In left inlet: Sets the display start time in milliseconds. Changing this value will offset and/or zoom the view, so that the requested time in the [buffer~](https://docs.cycling74.com/reference/buffer~) sample data is aligned to the left edge of the display. The default is 0 (display starts at the beginning of the target [buffer~](https://docs.cycling74.com/reference/buffer~)).

In 2nd inlet: Sets the display length in milliseconds. The default is the length of the [buffer~](https://docs.cycling74.com/reference/buffer~).
In 3rd inlet: Sets the start time of the selection range in milliseconds.

In 4th inlet: Sets the end time of the selection range in milliseconds.

Arguments:

- display-settings
  [float]

### list

In 5th inlet: The 5th inlet provides a link input, which allows any number of [waveform~](https://docs.cycling74.com/reference/waveform~) objects to share their start, length, select start, and select end values. Whenever any of these values changes, [waveform~](https://docs.cycling74.com/reference/waveform~) sends them all as a list out its right outlet. If this outlet is connected to the link input of another [waveform~](https://docs.cycling74.com/reference/waveform~) object, it will be updated as it receives the lists.

To complete the circuit, the second [waveform~](https://docs.cycling74.com/reference/waveform~) object's list output can be connected to the link input of the first. Then, changes in either one (via mouse clicks, etc.) will be reflected in the other. This is mainly useful when the [waveform~](https://docs.cycling74.com/reference/waveform~) objects are viewing different channels of the same [buffer~](https://docs.cycling74.com/reference/buffer~). Any number of [waveform~](https://docs.cycling74.com/reference/waveform~) objects can be linked in this fashion, forming one long, circular chain of links. In this case [waveform~](https://docs.cycling74.com/reference/waveform~) will prevent feedback from occurring.

Arguments:

- start
  [float]
- length
  [float]
- select-start
  [float]
- select-end
  [float]
- select-start-ms
  [int]
- select-end-ms
  [int]

### (drag)

Click and drag behavior for the [waveform~](https://docs.cycling74.com/reference/waveform~) object varies according to the object's mode of operation (see the  setmode  attribute).

### bpm

Specifies beats per minute as the time reference unit, relative to a tempo and number of beats per bar, both of which you can set with the  bpm  message. [waveform~](https://docs.cycling74.com/reference/waveform~) can also calculate a tempo that fits your current selection, via the  setbpm  message.

Arguments:

- tempo
  [int]
- beats-per-bar
  [int]

### buftime

The word  buftime , followed by a number between 20 and 60000, sets the minimum drawing interval in milliseconds when a [waveform~](https://docs.cycling74.com/reference/waveform~) object is redrawn due to changes in its associated [buffer~](https://docs.cycling74.com/reference/buffer~) object. Setting a higher number value will make some difference in CPU utilization. The default value is 500ms.

Arguments:

- drawing-interval
  [int]

### crop

The  crop  message will trim the audio data in the target [buffer~](https://docs.cycling74.com/reference/buffer~) to the current selection. It resizes the [buffer~](https://docs.cycling74.com/reference/buffer~) to the selection length, copies the selected samples into it, and displays the result at default settings. The [buffer~](https://docs.cycling74.com/reference/buffer~) is erased, except for the selected range. This is a "destructive edit," and cannot be undone.

### line

The word  line , followed by a integer or floating point value representing a time in milliseconds, will cause a vertical line to be superimposed on the waveform display at the millisecond point indicated by the argument. The purpose of this is to be able to visually indicate where the playback point of the waveform is at any given moment. If the argument of  line  is a negative value, the vertical line will be hidden.

The word  line , followed by a symbol, defines the unit used to display the line. The options are:

bpm: beats per minute

ms: milliseconds (the default)

phase: phase (range 0. - 1.0)

samples

Arguments:

- time
  [list]

### mode

This is a legacy message - this functionality is now provided by the  setmode  attribute.

Arguments:

- mouse-response-mode (symbol)
  [list]

### (mouse)

The way that the [waveform~](https://docs.cycling74.com/reference/waveform~) object responds to clicking and dragging varies according to how the object is configured using the  setmode  attribute.

### mouseoutput

The word  mouseoutput , followed by a symbol argument, determines when selection start and end values are sent in response to mouse activity. Only the selection start and end (outlets 3 and 4) are affected. Mouse information is always sent from outlet 5, regardless of the mouseoutput mode. Valid symbol arguments are,  none ,  down ,  up ,  downup , and  continuous .

 none - Selection start and end values are not sent in response to mouse activity. Sending the  mouseoutput  message with no argument has the same effect as the same message with the argument  none .
 down - Causes the current selection start and end values to be sent (from outlets 3 and 4) only when you click inside the [waveform~](https://docs.cycling74.com/reference/waveform~).
 up - Causes selection start and end to be sent only when you release the mouse button, after clicking inside the [waveform~](https://docs.cycling74.com/reference/waveform~).
 downup - Causes selection start and end to be sent both when you click inside the [waveform~](https://docs.cycling74.com/reference/waveform~), and when the mouse button is released.

 continuous - Causes selection start and end to be sent on click, release, and throughout the drag operation, whenever the values change.

Arguments:

- mouse-output-mode (symbol)
  [list]

### name

Identical to the  set  message. The word  name , followed by a symbol which is the name of a [buffer~](https://docs.cycling74.com/reference/buffer~) object, links [waveform~](https://docs.cycling74.com/reference/waveform~) to the target [buffer~](https://docs.cycling74.com/reference/buffer~), which is drawn with default display values. An optional int argument sets the channel offset, for viewing multi-channel [buffer~](https://docs.cycling74.com/reference/buffer~) objects. The name of the linked [buffer~](https://docs.cycling74.com/reference/buffer~) is copied to the buffername attribute and the channel offset is copied to the chanoffset attribute. Both are saved with the patcher.

If the  name  message is sent with no arguments, it will clear the [waveform~](https://docs.cycling74.com/reference/waveform~).

Arguments:

- buffer-name
  [symbol]
- channel
  [int]

### normalize

The word  normalize , followed by a float, will scale the sample values in the target [buffer~](https://docs.cycling74.com/reference/buffer~) so that the highest peak matches the value given by the argument. This can cause either amplification or attenuation of the audio, but in either case, every [buffer~](https://docs.cycling74.com/reference/buffer~) value is scaled, and this activity cannot be undone.

Arguments:

- maximum-peak-value
  [list]

### replacebuffercontents

The word  replacebuffercontents , followed by a symbol argument, will replace the current contents of the buffer with which the [waveform~](https://docs.cycling74.com/reference/waveform~) object is associated and display the new buffer contents.

Arguments:

- filename
  [symbol]

### set

Identical to the  name  message. The word  set , followed by a symbol which is the name of a [buffer~](https://docs.cycling74.com/reference/buffer~) object, links [waveform~](https://docs.cycling74.com/reference/waveform~) to the target [buffer~](https://docs.cycling74.com/reference/buffer~), which is drawn with default display values. An optional int argument sets the channel offset, for viewing multi-channel [buffer~](https://docs.cycling74.com/reference/buffer~) objects. The name of the linked [buffer~](https://docs.cycling74.com/reference/buffer~) is copied to the buffername attribute and the channel offset is copied to the chanoffset attribute. Both are saved with the patcher.

If the  set  message is sent with no arguments, it will clear the [waveform~](https://docs.cycling74.com/reference/waveform~).

Arguments:

- buffer-name
  [symbol]
- channel
  [int]

### setbpm

The word  setbpm , with no arguments, causes [waveform~](https://docs.cycling74.com/reference/waveform~) to calculate a tempo based on the current selection range. It automatically changes the display time unit to bpm, as if you had sent the message  unit bpm . A tempo is selected such that the selection range constitutes a logical multiple or subdivision of the bar, preserving the current beats per bar value, and attempting to find the closest value to the current tempo that satisfies its criteria. When a suitable tempo is selected, the offset parameter is adjusted so that the start time of the selection range falls exactly on a bar line.

The result is that the selection area will be framed precisely by a compatible tempo. One use of this technique is to quickly establish time labels and tick marks for a section of audio. After selecting a bar as accurately as possible, sending the  setbpm  message and turning on snap to label allows immediate quantization of the selection range to metric values.

If the target [buffer~](https://docs.cycling74.com/reference/buffer~) contains an audio segment that is already cropped to a logical number of beats or bars, the best technique is to select the entire range of the [buffer~](https://docs.cycling74.com/reference/buffer~) (with messages to the select start and end inlets), followed by the  setbpm  message. If the [buffer~](https://docs.cycling74.com/reference/buffer~) is cropped precisely, the resulting tempo overlay should be quite accurate, and immediately reveal the tempo along with metric information.

When a new tempo is calculated, it is sent from the rightmost outlet (the link outlet), to update any linked [waveform~](https://docs.cycling74.com/reference/waveform~) objects, and to be used in whatever manner required by the surrounding patch.

### snap

The word  snap , followed by a symbol argument, Sets the snap mode of the [waveform~](https://docs.cycling74.com/reference/waveform~) selection range.  snap  causes the start and end points of the selection to automatically move to specific points in the [buffer~](https://docs.cycling74.com/reference/buffer~), defined by the snap mode. Possible arguments are  none ,  grid , and  zero .

 none - Disables snap to allow free selection. This is the default. The  snap  message with no argument has the same effect.

 grid - Specifies that the selection start and end points should snap to the vertical grid lines, as set by the  grid  message. Since the spacing of the grid lines is affected by the current time measurement unit, and by the offset value (if an offset has been specified), snap to grid will be affected by these parameters as well.

 tick - Causes the selection start and end to snap to the tick divisions specified by the ticks message.

 zero - Instead of snapping the selection to a uniform grid, this mode searches for zero-crossings of the [buffer~](https://docs.cycling74.com/reference/buffer~) data. These are defined as the points where a positive sample follows a negative sample, or vice-versa. This can be useful to find loop and edit points.

Arguments:

- snap-mode (symbol)
  [list]

### undo

This mode works for [waveform~](https://docs.cycling74.com/reference/waveform~) selection only. It causes the selection start and end points to revert to their immediately previous values. This is helpful when you are making fine editing adjustments with the mouse and accidentally click in the wrong place, or otherwise cause the selection to change unintentionally. Repeated  undo  commands will toggle between the last two selection states.

### unit

The word  unit , followed by a symbol argument, sets the unit of time measurement used by the display. Valid symbol arguments are  ms ,  samples ,  phase , and  bpm .

 ms - Sets the display unit to milliseconds. This is the default.

 samples - Causes time values to be shown as sample positions in the target [buffer~](https://docs.cycling74.com/reference/buffer~). The first sample is numbered 0, unless the display has been shifted by the  offset  message.

 phase - Causes time to be displayed according to phase within the [buffer~](https://docs.cycling74.com/reference/buffer~), normalized so that the 0 refers to the first sample, and 1 refers to the last. This type of measurement unit is especially relevant when working with objects that use 0-1 signal sync, such as [phasor~](https://docs.cycling74.com/reference/phasor~) and [wave~](https://docs.cycling74.com/reference/wave~).
 bpm - Specifies beats per minute as the time reference unit, relative to a tempo and number of beats per bar, both of which you can set with the  bpm  message. [waveform~](https://docs.cycling74.com/reference/waveform~) can also calculate a tempo that fits your current selection, via the  setbpm  message.

Arguments:

- unit-of-measurement (symbol)
  [list]

## Output

### float

Out 1st outlet: The display start time of the waveform in milliseconds.

Out 2nd outlet: The display length in milliseconds.

Out 3rd outlet: The start time of the selection range in milliseconds.

Out 4th outlet: The end time of the selection range in milliseconds.

### list

Out 5th outlet: This is the mouse outlet, which sends information about mouse click/drag/release cycles that are initiated by clicking within the [waveform~](https://docs.cycling74.com/reference/waveform~) object. The list contains three numbers.

The first number is a float specifying the horizontal (x) position of the mouse, in 0-1 scale units relative to the [waveform~](https://docs.cycling74.com/reference/waveform~) object. x is always 0 at the left edge of the [waveform~](https://docs.cycling74.com/reference/waveform~), and 1. at the right edge.

The second number in the list is the floating-point y value of the mouse, scaled to match the [buffer~](https://docs.cycling74.com/reference/buffer~) values. With the default  vzoom  = 1. and  voffset  = 0., the top of the [waveform~](https://docs.cycling74.com/reference/waveform~) gives a y value of 1, and the bottom is -1.

Finally, the third number in the list is an int that indicates which portion of the mouse event is currently taking place. On mouse down, or click, this value is 1. During the drag, it is 2, and on mouse up it is 0. These can be helpful when creating custom responses to mouse clicks. Note that a drag (2) message is sent immediately after the mouse down (1) message, whether the mouse has moved or not, to indicate that the drag segment has begun.

Out 6th outlet: [waveform~](https://docs.cycling74.com/reference/waveform~) outputs a list containing its display start time, display length, selection start time, and selection end time, whenever one of these values changes (by mouse activity, float input, etc.). See the link input information above for more information.

## See Also

| Name | Description |
| --- | --- |
| [buffer~](https://docs.cycling74.com/reference/buffer~) | Store audio samples |
| [groove~](https://docs.cycling74.com/reference/groove~) | Variable-rate looping sample playback |
