---
type: ableton
name: "live.step"
summary: "Step Sequencer UI object"
signal: false
url: "https://docs.cycling74.com/reference/live.step/"
package: "Max for Live"
see_also: ["live.grid", "multislider", "matrixctrl"]
---
# live.step

Step Sequencer UI object

## Description

[live.step](https://docs.cycling74.com/reference/live.step) displays multiple sequences which have multiple steps composed of pitch, velocity, and duration. Two additional steps (Extra 1 and Extra 2) are available for user-defined display.

## Arguments

None.

## Attributes

### annotation\_name[symbol]:

The string that is prepended to annotations. This shows up in the Info pane in Live, and the clue window in Max.

### autoscroll[int]: 1

When set to 1, this attribute lets you expand the scrolling dragging the cursor to the edge of the display or to drag a selected pitch beyond the range of the current visual display.

### bgcolor[4 floats]

Sets the background color of the [live.step](https://docs.cycling74.com/reference/live.step) object in RGBA format.

### bgcolor2[4 floats]

Sets the second background color of the [live.step](https://docs.cycling74.com/reference/live.step) object in RGBA format.

### bgrulercolor[4 floats]

Sets the ruler background color of the [live.step](https://docs.cycling74.com/reference/live.step) object in RGBA format.

### bgunitcolor[4 floats]

Sets the unit background color of the [live.step](https://docs.cycling74.com/reference/live.step) object in RGBA format.

### blackkeycolor[4 floats]

Sets the color for the upper (black) keys in RGBA format.

### bordercolor[4 floats]

Sets the border color of the [live.step](https://docs.cycling74.com/reference/live.step) object in RGBA format.

### display\_seq[atom\_long]: 1

Sets the sequence to be displayed (index numbering starts at 1).

### duration\_active[int]: 1

Activates display of the duration layer

### editlooponly[int]: 0

When the  editlooponly  attribute is set to 1, the edit messages ( up ,  down ,  left ,  right ,  random ,  scramble ,  sort ) are only applied to indices inside the loop selection.

### extra1\_active[int]: 1

Activates display of the user-definable extra1 layer

### extra1\_max[atom\_long]: 127

Sets the maximum value for the user-definable extra1 layer.

### extra1\_min[atom\_long]: 0

Sets the minimum value for the user-definable extra1 layer

### extra1\_signed[int]: 0

Displays the user-definable extra1 layer as Signed.

### extra2\_active[int]: 1

Activates display of the user-definable extra2 layer

### extra2\_max[atom\_long]: 127

Sets the maximum value for the user-definable extra2 layer

### extra2\_min[atom\_long]: 0

Sets the minimum value for the user-definable extra2 layer

### extra2\_signed[int]: 0

Displays the user-definable extra2 layer as Signed.

### extra\_thickness[float]: 0.5

Sets the thickness of the vertical bars displayed in the extra1 layer. Values should be in the range of 0. (invisible) to 1.0 (full width).

### hbgcolor[4 floats]

Sets the highlight background color of the [live.step](https://docs.cycling74.com/reference/live.step) object in RGBA format.

### loopbordercolor[4 floats]

Sets the loop border color of the [live.step](https://docs.cycling74.com/reference/live.step) object in RGBA format.

### loopruler[int]: 1

Toggles the display of the loop ruler.

### mode[int]: 0

An integer or symbol can be used to set the information display mode of the [live.step](https://docs.cycling74.com/reference/live.step) object.

Possible values:

0 = 'All'
(
Set/change the [live.step](https://docs.cycling74.com/reference/live.step) values displayed
)
Display note, velocity, duration, and user-definable extra1 and extra2 values at once.

1 = 'Pitch'
(
Display pitch
)
Display pitch values.

2 = 'Velocity'
(
Display velocity
)
Display velocity bars.

3 = 'Duration'
(
Display duration
)
Display duration bars.

4 = 'Extra1'
(
Display extra1
)
Display extra1 bars.

5 = 'Extra2'
(
Display extra2
)
Display extra2 bars.

### nseq[atom\_long]: 1

Defines the number of sequences.

### param\_connect[symbol]:

Connect to Parameter

### pitch\_active[int]: 1

Activates display of the pitch layer

### stepcolor[4 floats]

Sets the step color of the [live.step](https://docs.cycling74.com/reference/live.step) object in RGBA format.

### stepcolor2[4 floats]

Sets the second step color of the [live.step](https://docs.cycling74.com/reference/live.step) object in RGBA format.

### target\_seq[atom\_long]

Defines the sequence to be edited (index numbering starts at 1).

### textcolor[4 floats]

Sets the text color of the [live.step](https://docs.cycling74.com/reference/live.step) object in RGBA format.

### unitruler[int]: 1

Toggles the display of the unit ruler.

### usestepcolor2[int]: 1

Toggles the use of a second step color in the display

### velocity\_active[int]: 1

Activates display of the Velocity layer

### whitekeycolor[4 floats]

Sets the color for the lower level (white) keys in RGBA format.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

If the  target\_seq  attribute is set to zero, a  bang  message will send the values associated with the current step of all sequences out the object's left outlet. If the  target\_seq  attribute is set to a value greater than zero, a  bang  message will send the values associated with the current step of the currently specified sequence out the object's left outlet.

### int

If the  target\_seq  attribute is set to zero, an integer sets the current step of all sequences to the corresponding integer (index numbering starts at 1). If the  target\_seq  attribute is set to a value greater than zero, an integer sets the current step of the currently specified sequence. The values associated with the current step are sent out the object's left outlet.

Arguments:

- step-index
  [int]

### active

If the  target\_seq  attribute is set to zero, the message  active 0  deactivates all sequences. The word  active , followed by any non-zero value, will activate all sequences.

If the  target\_seq  attribute is set to a value greater than zero, the message  active 0  deactivates the specified sequence. The word  active , followed by any non-zero value, will activate the specified sequence.

Arguments:

- 0/1
  [int]

### copy

The word  copy  will copy the entire sequence. One or two optional integer arguments may be used to specify starting and ending indices (index numbering starts at 1). For example,  copy 2  will copy the sequence starting at index 2, while  copy 2 5  will copy starting at index 2 and ending at index 5.

Arguments:

- start-index
  [int]
- stop-index
  [int]

### dictionary

Replaces the current sequence or all sequences of live.step by the content of a named dictionary. If multiple sequences are present in the dictionary, every sequences is replaced.

Arguments:

- dictionary-name
  [symbol]

### direction

The word  direction  followed by an integer in the range 0-4, sets the playback direction for sequence playback. The playback options are:

 0 : forward

 1 : backward

 2 : back and forth

 3 : Rotate

 4 : random

If the  target\_seq  attribute is set to zero, the integer argument sets the direction of all sequences when  live.step  object's playback is controlled using the  time  message.

If the  target\_seq  attribute is set to a value greater than zero, an integer sets the direction of the specified sequence when  live.step  object's playback is controlled using the  time  message.

Arguments:

- direction-value
  [int]

### doedit

The word  doedit , followed by a number in the range 0-4, provides a simple means to move or rotate the parameters stored in the [live.step](https://docs.cycling74.com/reference/live.step) object. The modes specified by the number arguments are:

 0 : transpose the pitch upward.

 1 : transpose the pitch downward.

 2 : Rotate the steps to the left.

 3 : Rotate the steps to the right

 4 : Randomize steps depending on the  mode  attribute. For instance, if the  mode  is set to velocity,  doedit  4 will only randomize the velocity.

For more advanced editing features, use the  up ,  down ,  left ,  right ,  random ,  scramble , and  sort  messages.

Arguments:

- edit-mode
  [int]

### down

The word  down  will decreases the values of the sequence based on the  target\_seq  and  mode  attributes. For instance, if the  mode  attribute is set to velocity, the  down  message will only decrease the velocity of the currently specified sequence (or all the sequences if the  target\_seq  attribute is set to zero).

An optional argument may be used with the  down  message to specify the parameters to be decreased without having to use the  mode  attribute. The optional arguments are:

 all : decrease all parameters

 pitch : transpose pitches downward

 velocity : decrease velocities

 duration : decrease durations

 extra1 : decrease values for the user-definable Extra 1 parameter

 extra2 : decrease values for the user-definable Extra 2 parameter

Arguments:

- parameter
  [symbol]

### dump

Sends the values (pitch, velocity, duration, extra1, extra2) of all steps of the currently specified sequence out the [live.step](https://docs.cycling74.com/reference/live.step) object's right outlet.

### dump\_to\_dict

Sends out a dictionary of the current sequence or all sequences (if target\_seq is set to 0), via the dump outlet.

### duration

The word  duration , followed by an integer that specifies a starting index into a sequence (index numbering starts with 1) and a list of values (in ticks), will set the duration values for the current sequence specified by the  target\_seq  attribute.

Arguments:

- start-index/values
  [list]

### extra1

The word  extra1 , followed by an integer that specifies a starting index into a sequence (index numbering starts with 1) and a list of values, will set the extra1 values for the current sequence specified by the  target\_seq  attribute.

Arguments:

- start-index/values
  [list]

### extra2

The word  extra2 , followed by an integer that specifies a starting index into a sequence (index numbering starts with 1) and a list of values, will set the extra2 values for the current sequence specified by the  target\_seq  attribute.

Arguments:

- start-index/values
  [list]

### fetch

The word  fetch , followed by a symbol that specifies a step parameter (pitch, velocity, duration, extra1, or extra2) and an integer that specifies a step number, will send a list out of the [live.step](https://docs.cycling74.com/reference/live.step) object's fourth (dumpout) outlet in the form  *<parameter-name> <step-number> <value>* .

Arguments:

- parameter name
  [symbol]
- step number
  [int]

### fold

The word  fold , followed by a 0 or 1, toggles the folded display mode. When folding is enabled, the [live.step](https://docs.cycling74.com/reference/live.step) object only displays those pitches which are present in the sequence specified by the  target\_seq  attribute rather than all possible pitches. Fold mode displays only the pitches specific to  *each individual sequence* .
Note: Sequence editing messages such as  up ,  down , and  random  use the list of pitches displayed in fold state when performing operations (i.e., the  random  message will only choose randomly from among the pitches displayed on fold mode. These operations are also dependent on the target sequence, as well). for all sequences.

Arguments:

- 0/1
  [int]

### fold\_pitch

The word  fold\_pitch , followed by an integer or list of integers that specify MIDI note numbers, sets the pitches to be displayed by the [live.step](https://docs.cycling74.com/reference/live.step) object in fold mode. As with the  fold  message, the  fold\_pitch  message sets pitches to be displayed in the sequence specified by the  target\_seq  attribute.

Arguments:

- pitches-list
  [list]

### getactive

The message  getactive  will send the active state of the currently specified sequence out the [live.step](https://docs.cycling74.com/reference/live.step) object's fourth (dumpout) outlet in the form of a list preceded by the word  active .

### getcurrentstep

The message  getcurrentstep  will send the current step of the sequence out the [live.step](https://docs.cycling74.com/reference/live.step) object's fourth (dumpout) outlet in the form of a number preceded by the word  currentstep . When working with multiple sequences, the  getcurrentstep  message will report the current step of the targeted sequence (specified by the  target\_seq  attribute).

### getdirection

The message  getdirection  will send the direction state of the currently specified sequence out the [live.step](https://docs.cycling74.com/reference/live.step) object's fourth (dumpout) outlet in the form of a list preceded by the word  direction .

### getduration

The message  getduration  will send a list of all the duration values in the sequence specified by the  target\_seq  attribute out the [live.step](https://docs.cycling74.com/reference/live.step) object's fourth (dumpout) outlet in the form of a list preceded by the word  duration .

### getextra1

The message  getextra1  will send a list of all the extra1 values in the sequence specified by the  target\_seq  attribute out the [live.step](https://docs.cycling74.com/reference/live.step) object's fourth (dumpout) outlet in the form of a list preceded by the word  extra1 .

### getextra2

The message  getextra2  will send a list of all the extra2 values in the sequence specified by the  target\_seq  attribute out the [live.step](https://docs.cycling74.com/reference/live.step) object's fourth (dumpout) outlet in the form of a list preceded by the word  extra2 .

### getinterval

The message  getinterval  will send the interval of the currently specified sequence out the [live.step](https://docs.cycling74.com/reference/live.step) object's fourth (dumpout) outlet in the form of a list preceded by the word  interval .

### getloop

The message  getloop  will send the loop points of the currently specified sequence out the [live.step](https://docs.cycling74.com/reference/live.step) object's fourth (dumpout) outlet in the form of a list preceded by the word  loop .

### getmodelist

The message  getmodelist  will send the list of the display modes out the [live.step](https://docs.cycling74.com/reference/live.step) object's fourth (dumpout) outlet in the form of a list preceded by the word  modelist .

### getnstep

The message  getnstep  will send the number of steps in the currently specified sequence out the [live.step](https://docs.cycling74.com/reference/live.step) object's fourth (dumpout) outlet in the form of a list preceded by the word  nstep .

### getpitch

The message  getpitch  will send a list of all the pitch values in the sequence specified by the  target\_seq  attribute out the [live.step](https://docs.cycling74.com/reference/live.step) object's fourth (dumpout) outlet in the form of a list preceded by the word  pitch .

### getstep

The message  getstep  will send a list of the values (pitch, velocity, duration, extra1, extra2) of the specified index of the currently specified sequence out the [live.step](https://docs.cycling74.com/reference/live.step) object's fourth (dumpout) outlet in the form of a list preceded by the word  step .

Arguments:

- step-index
  [int]

### getvelocity

The message  getvelocity  will send a list of all the velocity values in the sequence specified by the  target\_seq  attribute out the [live.step](https://docs.cycling74.com/reference/live.step) object's fourth (dumpout) outlet in the form of a list preceded by the word  velocity .

### getzoom

The message  getzoom  will send the zoom pitch values of the currently specified sequence out the [live.step](https://docs.cycling74.com/reference/live.step) object's fourth (dumpout) outlet in the form of a list preceded by the word  zoom .

### init

Restores and outputs the initial values entered when Initial Enabled is checked in the [live.step](https://docs.cycling74.com/reference/live.step) object's Inspector.

### interval

Sets the interval of the currently specified sequence.

Arguments:

- time-value
  [list]

### left

The word  left  will rotate (left-shift) the values of the sequence based on the  target\_seq  and  mode  attributes. For instance, if the  mode  attribute is set to velocity, the  left  message will only rotate the velocity of the currently specified sequence (or all the sequences if the  target\_seq  attribute is set to zero).

An optional argument may be used with the  left  message to specify the parameters to be rotated without having to use the  mode  attribute. The optional arguments are:

 all : Rotate all parameters to the left

 pitch : Rotate all pitches to the left

 velocity : Rotate all velocities to the left

 duration : Rotate all durations to the left

 extra1 : Rotate all user-definable Extra 1 parameters to the left

 extra2 : Rotate all user-definable Extra 2 parameters to the left

Arguments:

- parameter
  [symbol]

### loop

The word  loop , followed by two numbers that specify starting and ending indices, sets the loop points of the currently specified sequence.

Arguments:

- start-index
  [int]
- stop-index
  [int]

### (mouse)

Whenever the [live.step](https://docs.cycling74.com/reference/live.step) object is edited using the mouse, the message  changed  followed by a number in the range 0-2 will be sent out the object's dumpout outlet. The number specifies what portion of the [live.step](https://docs.cycling74.com/reference/live.step) display has been modified, as follows:

0: The pitch, velocity, duration, extra1, or extra2 settings have been modified.

1: The looping portion of the UI has been modified.

2: Edits have been made in the ruler area of the UI.

### next

The  next  message will send the values associated with the next step of all sequences out the object's left outlet. If the  target\_seq  attribute is set to a value greater than zero, a  next  message will send the values associated with the next step of the currently specified sequence out the object's left outlet.

### nstep

Sets the number of steps in the target sequence.

Arguments:

- number of steps
  [int]

### paste

When the  paste  message is received without argument, all parameters are pasted at the same location as they were copied. An optional argument to specify parameter type (pitch, velocity, duration, extra1, extra2) can be used to paste only specific items. An additional option number argument specifies the starting index where the copied steps will be pasted (index numbering starts at 1).

Arguments:

- parameter
  [symbol]
- start-index
  [int]

### pitch

The word  pitch , followed by an integer that specifies a starting index into a sequence (index numbering starts with 1) and a list of values, will set the pitch values for the current sequence specified by the  target\_seq  attribute.

Arguments:

- start-index/values
  [list]

### random

The word  random  will randomize the values of the sequence based on the  target\_seq  and  mode  attributes. For instance, if the  mode  attribute is set to velocity, the  random  message will only scramble the velocity of the currently specified sequence (or all the sequences if the  target\_seq  attribute is set to zero).

An optional argument may be used with the  random  message to specify the parameters to be scrambled without having to use the  mode  attribute. The optional arguments are:

 all : Randomize all parameters

 pitch : Randomize all pitches

 velocity : Randomize all velocities

 duration : Randomize all durations

 extra1 : Randomize all values for the user-definable Extra 1 parameter

 extra2 : Randomize all values for the user-definable Extra 2 parameter

Arguments:

- parameter
  [symbol]

### reset

The  reset  message allows you to deactivate the current step. It is equivalent to setting the current step to 0.

### right

The word  right  will rotate (right-shift) the values of the sequence based on the  target\_seq  and  mode  attributes. For instance, if the  mode  attribute is set to velocity, the  left  message will only rotate the velocity of the currently specified sequence (or all the sequences if the  target\_seq  attribute is set to zero).

An optional argument may be used with the  right  message to specify the parameters to be rotated without having to use the  mode  attribute. The optional arguments are:

 all : Rotate all parameters to the right

 pitch : Rotate all pitches to the right

 velocity : Rotate all velocities to the right

 duration : Rotate all durations to the right

 extra1 : Rotate all values for the user-definable Extra 1 parameter to the right

 extra2 : Rotate all values for the user-definable Extra 2 parameter to the right

Arguments:

- parameter
  [symbol]

### scramble

The word  scramble  will randomize the order of the values of the sequence based on the  target\_seq  and  mode  attributes. For instance, if the  mode  attribute is set to velocity, the  left  message will only scramble the velocity of the currently specified sequence (or all the sequences if the  target\_seq  attribute is set to zero).

An optional argument may be used with the  scramble  message to specify the parameters to be scrambled without having to use the  mode  attribute. The optional arguments are:

 all : Randomize the order of all parameters

 pitch : Randomize the order of all pitches

 velocity : Randomize the order of all velocities

 duration : Randomize the order of all durations

 extra1 : Randomize the order of all user-definable Extra 1 parameters

 extra2 : Randomize the order of all user-definable Extra 2 parameters

If you are not using  mode  all, and that you pass  1  as argument,  scramble  will keep your steps synchronized. For instance, the  scramble pitch 1  message will reorder the pitches, but the other parameters will follow.

Arguments:

- parameter
  [symbol]
- keep-step-sync
  [int]

### set

If the  target\_seq  attribute is set to zero, the word  set , followed by an integer sets the current step of all the sequences to the corresponding integer (index numbering starts at 1).

If the  target\_seq  attribute is set to a value greater than zero, the word  set , followed by an integer sets the current step of the currently specified sequence.

Arguments:

- step-index
  [int]

### setall

The word  setall , followed by a number, will assign that value to every layer in the currently targeted sequence when the the [live.step](https://docs.cycling74.com/reference/live.step) object is in display mode. An optional first argument specifying a specific layer (i.e.  setall velocity 85 ) can be used to set all values in a specify layer. When the  editlooponly  attribute is set to 1, the  setall  message will only be applied to indices inside the loop selection.

Arguments:

- value
  [list]

### settimeshift

The word  settimeshift , followed by a positive or negative number that specifies an offset, will move to the relative position from the current step in the sequence and first that step (e.g., sending the message  settimeshift -1  when the current step number is 3 will cause the content of step 2 to fire.

Arguments:

- time-shift
  [float]

### sort

The word  sort  will sort the step values of the sequence based on the  target\_seq  and  mode  attributes. For instance, if the  mode  attribute is set to velocity, the  sort  message will only sort the velocity values of the currently specified sequence (or all the sequences if the  target\_seq  attribute is set to zero).

Optional arguments may be used with the  sort  message to specify behavior, synchronization, and direction of sortint. The can be used to set the parameters to be sorted without having to use the  mode  attribute. The optional arguments are:

 all : Sort the order of all parameters

 pitch : Sort the order of the pitches

 velocity : Sort the order of the velocities

 duration : Sort the order of the durations

 extra1 : Sort the order of all user-definable Extra 1 parameters

 extra2 : Sort the order of all user-definable Extra 2 parameters

The first integer argument specifies whether or not to keep the step values synchronized - it only works if the  mode  attribute is not set to  all . For instance, the message  sort pitch 1  will reorder the steps based on the pitch, but the velocity, duration and user-definable extra1 and extra2 values associated to the pitch will be maintained. An optional second integer argument can be used to set the sorting order:

 1 : Ascending (the default) -1 : Descending.

Arguments:

- parameter
  [symbol]
- keep-step-sync
  [int]
- direction
  [int]

### step

The word  step , followed by a list of four integers, sets the values of a specific step. The required arguments are:

the index (index numbering starts at 1)

the MIDI note number (0-127)

the note velocity (0-127)

the duration (30, 60, 120, 240, 480, 960, 1920, 3840 ticks)

Arguments:

- index
  [int]
- midi-note
  [int]
- velocity
  [int]
- duration
  [int]

### time

The word  time , followed by a list of 6 numbers, defines the timing position in the sequence. The required arguments are  bar ,  beat ,  unit ,  resolution-in-ppq ,  time-signature-numerator , and  time-signature-denominator . The [live.step](https://docs.cycling74.com/reference/live.step) object does not have an internal  clock , so you need to send the time message often if you want to use it to drive the [live.step](https://docs.cycling74.com/reference/live.step) object.

Arguments:

- bar
  [int]
- beat
  [int]
- unit
  [int]
- resolution
  [int]
- time-sig-numerator
  [list]
- time-sig-denominator
  [list]

### up

The word  up  will increase the values of the sequence based on the  target\_seq  and  mode  attributes. For instance, if the  mode  attribute is set to velocity, the  up  message will only increase the velocity of the currently specified sequence (or all the sequences if the  target\_seq  attribute is set to zero).

An optional argument may be used with the  up  message to specify the parameters to be increased without having to use the  mode  attribute. The optional arguments are:

 all : Increase all parameters

 pitch : Transpose pitches upward

 velocity : Increase velocities

 duration : Increase durations

 extra1 : Increase the value of all user-definable Extra 1 parameters

 extra2 : Increase the value of all user-definable Extra 2 parameters

Arguments:

- parameter
  [symbol]

### velocity

The word  velocity , followed by an integer that specifies a starting index into a sequence (index numbering starts with 1) and a list of values, will set the velocity values for the current sequence specified by the  target\_seq  attribute.

Arguments:

- start-index/values
  [list]

### zoom

Sets the the upper and lower displayed range of the currently specified sequence.

Arguments:

- low-pitch
  [float]
- high-pitch
  [float]

### zoom\_fit

The word  zoom\_fit  will cause the currently displayed pitch range of the [live.step](https://docs.cycling74.com/reference/live.step) object to adjust so that the highest and lowest note values become the upper and lower limits of the display.

### zoom\_in

The word  zoom\_in  will cause the current pitch range of the [live.step](https://docs.cycling74.com/reference/live.step) object display to decrease by a factor of a fifth (7 steps) at the top and bottom, resulting in a "zoom in" effect.

### zoom\_out

The word  zoom\_out  will cause the current pitch range of the [live.step](https://docs.cycling74.com/reference/live.step) object display to increase by a factor of a fifth (7 steps) at the top and bottom, resulting in a "zoom out" effect.

## Output

### anything

Out the fourth outlet: The output in response to dumpout messages used to query the [live.step](https://docs.cycling74.com/reference/live.step) object.

### int

Out the third outlet: Mouseover information.

Out the fifth outlet: Sequence index out.

### list

Out the leftmost outlet: Step values.

Out the second outlet: Current loop points for each sequence.

## See Also

| Name | Description |
| --- | --- |
| [live.grid](https://docs.cycling74.com/reference/live.grid) | A UI grid of steps, with constraints and directions |
| [multislider](https://docs.cycling74.com/reference/multislider) | Display data as sliders or a scrolling display |
| [matrixctrl](https://docs.cycling74.com/reference/matrixctrl) | Matrix switch control |
