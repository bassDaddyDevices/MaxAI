---
type: ableton
name: "live.grid"
summary: "A UI grid of steps, with constraints and directions"
signal: false
url: "https://docs.cycling74.com/reference/live.grid/"
package: "Max for Live"
see_also: ["live.step", "multislider", "itable", "matrixctrl", "chucker~"]
---
# live.grid

A UI grid of steps, with constraints and directions

## Description

[live.grid](https://docs.cycling74.com/reference/live.grid) is a user interfaces object designed for use with the [chucker~](https://docs.cycling74.com/reference/chucker~) object. It provides a display grid of steps, constraints for transposition, and playback direction for use in controlling the [chucker~](https://docs.cycling74.com/reference/chucker~) object.

## Arguments

None.

## Attributes

### amountcolor[4 floats]

Defines the color of the overlay in RGBA format.

### annotation\_name[symbol]:

The string that is prepended to annotations. This shows up in the Info pane in Live, and the clue window in Max.

### bgstepcolor[4 floats]

Sets the background step color of the [live.grid](https://docs.cycling74.com/reference/live.grid) object in RGBA format.

### bgstepcolor2[4 floats]

Sets the second background step color of the [live.grid](https://docs.cycling74.com/reference/live.grid) object in RGBA format.

### bordercolor[4 floats]

Sets the border color of the [live.grid](https://docs.cycling74.com/reference/live.grid) object in RGBA format.

### bordercolor2[4 floats]

Sets the second border color of the [live.grid](https://docs.cycling74.com/reference/live.grid) object in RGBA format.

### columns[int]: 16

Sets the number of columns in the [live.grid](https://docs.cycling74.com/reference/live.grid) object's display

### direction[int]: 1

Toggles the display of the directions arrows.

### direction\_height[float]: 15.

Sets the height of the direction panel.

### directioncolor[4 floats]

Sets the color of the direction's arrows in RGBA format.

### displayamount[int]: 0

Enables the display the of the  amountcolor  attribute color over [live.grid](https://docs.cycling74.com/reference/live.grid) steps. This is only available in non-matrix mode.

### freezecolor[4 floats]

Sets the color of all frozen steps in RGBA format.

### hbgcolor[4 floats]

Sets the highlighted background color of the [live.grid](https://docs.cycling74.com/reference/live.grid) object in RGBA format.

### link[int]: 0

Toggles  link  mode. When activated, all the necessary messages to synchronize two [live.grid](https://docs.cycling74.com/reference/live.grid) objects are sent out the right outlet.

### marker\_horizontal[int]: 4

Defines the "first beat" indicator on the [live.grid](https://docs.cycling74.com/reference/live.grid) object's horizontal axis. The  bgstepcolor  attribute sets the display color for this indicator. To hide the indicator, set the attribute value to zero.

### marker\_vertical[int]: 4

Defines the "first beat" indicator on the [live.grid](https://docs.cycling74.com/reference/live.grid) object's vertical axis. The  bgstepcolor  attribute sets the display color for this indicator. To hide the indicator, set the attribute value to zero.

### matrixmode[int]: 0

Toggles matrix mode for the object's display. In matrix mode, multiple cells in a row or column may be selected.

Note: The  list  and  steps  messages change their syntax slightly when used in conjunction with this attribute. See the listing for these messages for more details.

### mode[int]: 0

Defines the current display mode.

Possible values:

0 = 'Step Edit'

1 = 'Step constraint'

### rounded[float]: 4.

Defines the roundness of the grid in pixels.

### rows[int]: 16

Sets the number of rows in the [live.grid](https://docs.cycling74.com/reference/live.grid) object's display. The minimum number of rows is 2 when the  matrixmode  attribute is not set, and 1 if it is.

### spacing[float]: 1.

Defines the grid spacing in pixels.

### stepcolor[4 floats]

Sets the step color of the [live.grid](https://docs.cycling74.com/reference/live.grid) object in RGBA format.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

Sets, displays and outputs the current step. The list sent out the left outlet of the [live.grid](https://docs.cycling74.com/reference/live.grid) object takes the form  step(s)   direction (optional, depending on the visibility of the directions panel) . When the [live.grid](https://docs.cycling74.com/reference/live.grid) object is in Matrix Mode and there is no value selected in the column, a 0 is sent as the step value.

Arguments:

- step-index
  [int]

### list

When the  direction  attribute is set to 0, a list of 2 values sets the step index and value.

When the  direction  attribute is set to 1, a  list  of 3 values sets the step index, value and direction.

When the  matrixmode  attribute is set to 1, a list of 3 values sets the object's behavior:  x ,  y , and  state (0/1) . An optional fourth value can be used to set direction (-1/0/1).

Arguments:

- input-list
  [list]

### clear

The  clear  message is only used when the  matrixmode  attribute is enabled, and will deselect all currently set rows and columns.

### constraint

Sets the constraint for a specific step. For instance, the message  constraint 3 0 0 1 1  sets the constraints of the third step (column numbering starts at 1) to 0 0 1 1.

Arguments:

- constraint of the step
  [list]

### directions

Sets the grid directions, used to indicate the direction of playback of a step:

-1 : Backward

 0 : Stop

 1 : Forward

Arguments:

- directions
  [list]

### down

Decreases (lowers) the current values of all the steps by one. New step values are sent out the second outlet.

Note: The current constraints, if any, are also taken into account when altering current step values; the resulting shift might be "rounded" to the closest step.

### freeze

Set the index to 0 to hide the overlay used to indicate frozen values. Any index greater than zero sets and displays the frozen step.

Arguments:

- step-index
  [int]

### getcell

The word  cell , followed by a pair of numbers that specifies the  *x*  and  *y*  indices of a cell in the [live.grid](https://docs.cycling74.com/reference/live.grid) display, will send a list consisting of the word  cell , a number pair that specifies the  *x*  and  *y*  indices, and the value of the cell (column numbering starts at 1).

Arguments:

- x-index
  [int]
- y-index
  [int]

### getcolumn

The word  getcolumn , followed by a number that specifies a column in the [live.grid](https://docs.cycling74.com/reference/live.grid) display, will send a list consisting of the word  column , a number that specifies the column index, and a list of the current column values out the fourth (dumpout) outlet (column numbering starts at 1).

Arguments:

- column
  [int]

### getconstraint

The word  getconstraint , followed by a number that specifies a column in the [live.grid](https://docs.cycling74.com/reference/live.grid) display, will send a list consisting of the column number followed by a list indicating the constrain state of each cell in the column, from bottom to top (column numbering starts at 1). Constraints are indicated as follows:

 0 : Constraint

 1 : No constraint

Arguments:

- column
  [int]

### getdirections

The word  getdirections , followed by a number that specifies a column in the [live.grid](https://docs.cycling74.com/reference/live.grid) display, will send a list consisting of the column number followed by the direction out the fourth (dumpout) outlet (column numbering starts at 1). The direction is indicated as follows:

-1 : Backward

 0 : Stop

 1 : Forward

Arguments:

- column
  [int]

### getrow

The word  getrow , followed by a number that specifies a row in the [live.grid](https://docs.cycling74.com/reference/live.grid) display, will send a list consisting of the word  row , a number that specifies the row index, and a list of the current row values out the fourth (dumpout) outlet (row numbering starts at 1).

Arguments:

- row
  [int]

### init

Restores and outputs the initial values.

### left

Rotate the values of all steps to the left. New steps values are sent out the second outlet.

Note: The current constraints, if any, are also taken into account when altering current step values; the resulting shift might be "rounded" to the closest step.

### linkdump

When the  link  attribute is set to 1, the  linkdump  message sends all messages required to synchronize one [live.grid](https://docs.cycling74.com/reference/live.grid) object to another [live.grid](https://docs.cycling74.com/reference/live.grid) object out the object's right outlet.

### random

The word  random  generates new step values or step constraints, depending on the current  mode . An optional second argument can be used to select a portion of the UI object to randomize:

 steps : Randomize the steps values

 constraint : Randomize constraints and make sure that the steps values are correct with respect to the new constraints grid

 directions : Randomize directions if the  direction  attribute is set to 1.

Arguments:

- type (optional)
  [list]

### reset

The word  reset  sets the default values or clears the constraints, depending on the current  mode . An optional second argument can be used to select a portion of the UI object to reset:

 steps : Reset the steps values (Note: since the reset may interact with the current constraints, a given step value may not be completely reset)

 constraint : Clear all constraints

 directions : Set all the directions to  forward  if the  direction  attribute is set to 1.

Arguments:

- type (optional)
  [list]

### right

Rotate the values of all the steps to the right. New steps values are sent out the second outlet.

Note: The current constraints, if any, are also taken into account when altering current step values; the resulting shift might be "rounded" to the closest step.

### set

Sets and displays the current output step without causing output.

Arguments:

- step-index
  [int]

### setcell

The word  setcell , followed by a pair of numbers that specifies the  *x*  and  *y*  indices of a cell in the [live.grid](https://docs.cycling74.com/reference/live.grid) display and a number value, will set the value of the specified cell (column numbering starts at 1).

Arguments:

- x-index
  [int]
- y-index
  [int]
- value
  [int]

### steps

Sets the values of all the steps at once. Value numbering starts at 1.

Arguments:

- step values
  [list]

### up

Increases (raises) the values of all steps. New steps values are sent out the second outlet.

Note: The current constraints, if any, are also taken into account when altering current step values; the resulting shift might be "rounded" to the closest step.

## Output

### anything

Out the fifth outlet: dumpout message used to query the [live.grid](https://docs.cycling74.com/reference/live.grid) object.

Out the rightmost outlet: Synchronization messages are sent through this outlet when the  link  attribute is set to 1.

### list

Out the leftmost outlet: Current step value: y value, direction (optional, depending on the visibility of the directions pane).

Out second outlet: The steps values are sent out this outlet whenever they are changed via the mouse or a message. If the [live.grid](https://docs.cycling74.com/reference/live.grid) object is in Matrix Mode, the step value/y value coordinates of all "on" points are sent out the outlet.

Out third outlet: The directions values are sent out this outlet whenever they are changed via the mouse or a message. Note that this outlet does not output anything when the  direction  attribute is set to 0.

Out the fourth outlet: Mouseover information: x, y, direction (optional, depending on the visibility of the directions panel). Also when the mouse is used to change a setting, the message  mousechange  *N*   is sent, where  *N*  indicates the type of change (0 = steps, 1 = directions, 2 = constraints).

## See Also

| Name | Description |
| --- | --- |
| [live.step](https://docs.cycling74.com/reference/live.step) | Step Sequencer UI object |
| [multislider](https://docs.cycling74.com/reference/multislider) | Display data as sliders or a scrolling display |
| [itable](https://docs.cycling74.com/reference/itable) | Data table editor |
| [matrixctrl](https://docs.cycling74.com/reference/matrixctrl) | Matrix switch control |
| [chucker~](https://docs.cycling74.com/reference/chucker~) | Segment audio and reorder it on looped playback |
