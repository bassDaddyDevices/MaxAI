---
type: jitter
name: "jit.cellblock"
summary: "Edit rows and columns of data"
signal: false
url: "https://docs.cycling74.com/reference/jit.cellblock/"
package: "Max"
see_also: ["coll", "maximum", "minimum"]
---
# jit.cellblock

Edit rows and columns of data

## Description

Provides storage, viewing and editing of two-dimensional data. The format is similar to the "grid" display tools found in many other development environments. The current cell location, format, display and contents within [jit.cellblock](https://docs.cycling74.com/reference/jit.cellblock) can be set with the mouse or by using Max messages.

## Arguments

None.

## Attributes

### automouse[int]: 1

Enables/disables scrolling or selecting cells by clicking and dragging with the mouse. The default is 1 (enabled).

### bblend[int]: 0

Specifies the percentage of background blending for the [jit.cellblock](https://docs.cycling74.com/reference/jit.cellblock) object's display.In cases where there are both column and row background color overrides, this message will allow you to "blend" the colors. Column colors have a higher priority than row colors; if you have a row and column color that affect a cell, only the column color will normally be displayed. The  bblend  message allows you to make the column color transparant using a percentage value, thereby allowing the row color to be displayed. This message applies the color transparency to all column colors without discrimination.

### bgcolor[4 floats]

Sets the default background color of the [jit.cellblock](https://docs.cycling74.com/reference/jit.cellblock) object in RGBA format.

### border[int]: 1

Toggles drawing a border edge around the [jit.cellblock](https://docs.cycling74.com/reference/jit.cellblock).

### bordercolor[4 floats]

Sets the default border color of the [jit.cellblock](https://docs.cycling74.com/reference/jit.cellblock) object in RGBA format.

### colhead[int]: 0

Toggles the behavior of the first column. If the header option is selected, the first column will change color to the rgba setting, and will not be directly editable in selmode 5.

### cols[int]: 10

Sets the number of columns that are visible within the [jit.cellblock](https://docs.cycling74.com/reference/jit.cellblock). If the number of columns is greater than can be displayed, scrollbars will be shown.

### colwidth[int]: 66

Sets the default column width of the individual cells. Changing these settings may change whether the scrollbars are displayed.

### datadirty[int]: 0

Enables or disables the patcher-dirty flag. The default is 0 (disabled). When enabled, the [jit.cellblock](https://docs.cycling74.com/reference/jit.cellblock) object will dirty the patch whenever its cell data changes.

### fblend[int]: 0

Specifies the percentage of foreground blending for the [jit.cellblock](https://docs.cycling74.com/reference/jit.cellblock) object's display.In cases where there are both column and row foreground color overrides, this message will allow you to "blend" the colors. Column colors have a higher priority than row colors; if you have a row and column color that affect a cell, only the column color will normally be displayed. The  fblend  message allows you to make the column color transparent using a percentage value, thereby allowing the row color to be displayed. This message applies the color transparency to all column colors without discrimination.

### fgcolor[4 floats]

Sets the default foreground color of the [jit.cellblock](https://docs.cycling74.com/reference/jit.cellblock) object in RGBA format.

### grid[int]: 1

Toggles drawing a border edge around each individual cell.

### gridlinecolor[4 floats]

Sets the default grid line color of the [jit.cellblock](https://docs.cycling74.com/reference/jit.cellblock) object in RGBA format.

### hcellcolor[4 floats]

Sets the default selected cell color of the [jit.cellblock](https://docs.cycling74.com/reference/jit.cellblock) object in RGBA format.

### headercolor[4 floats]

Sets the default header color of the [jit.cellblock](https://docs.cycling74.com/reference/jit.cellblock) object in RGBA format.

### hscroll[int]: 1

Toggles horizontal scroll bar behavior. When set to 0, this attribute will override the [jit.cellblock](https://docs.cycling74.com/reference/jit.cellblock) object’s automatic handling of scrollbar display when there is more information to show than the current settings can manage.

### hsync[int]: 1

Toggles synchronizing horizontal movement with another [jit.cellblock](https://docs.cycling74.com/reference/jit.cellblock) object whose third outlet is connected to the right-most inlet of the [jit.cellblock](https://docs.cycling74.com/reference/jit.cellblock) object.

### interval[int]: 250

Sets the interval, in milliseconds, at which the display of the contents of a [coll](https://docs.cycling74.com/reference/coll) or [jit.matrix](https://docs.cycling74.com/reference/jit.matrix) object is updated.

### just[int]: 0

Sets the default text justification of all cells - left (0), center (1) or right (2).

Possible values:

0 = 'Left'

1 = 'Center'

2 = 'Right'

### neverdirty[int]: 0

When neverdirty is enabled, changes to column, row, or cell properties do not dirty the patcher.

### outmode[int]: 0

Sets the output mode of the cellblock. The output mode settings are:

0. separate values: Each cell is sent separately, and each data item within the cell is sent as a separate value.

1. as one list: If more than one cell is selected, all cell contents are formatted into a single list and output as a single cell output.

2. as one symbol: If more than one cell is selected, or if a cell has more than one value (e.g. a list), all values are combined into a single, space-separated symbol for output.

Possible values:

0 = 'Individual cells'

1 = 'As one list'

2 = 'As one symbol'

### precision[int]: 2

Sets the default floating point precision for all cells. This does not alter the actual contents of the cell - it only changes the displayed precision of those contents.

### readonly[int]: 0

Sets the read-only mode of the [jit.cellblock](https://docs.cycling74.com/reference/jit.cellblock) object. The mode settings are:

-1: Eliminate any readonly setting. This option removes the cell/col/row from the structure, preventing any intrusion of the cell/col/row setting on the overall cellblock setting.

0: readonly off

1: readonly on

### rowhead[int]: 0

Toggles the behavior of the first row. If the header option is selected, the first row will change color to the rgba setting, and will not be directly editable in selmode 5.

### rowheight[int]: 18

The word  rowheight , followed by a number, sets the default row height of the individual cells. Changing these settings may change whether the scrollbars are displayed.

### rows[int]: 10

Sets the number of columns and rows that are visible within the [jit.cellblock](https://docs.cycling74.com/reference/jit.cellblock). If the number of rows is greater than can be displayed, scrollbars will be shown.

### savemode[int]: 0

Toggles the ability save the [jit.cellblock](https://docs.cycling74.com/reference/jit.cellblock) object's cell contents as part of the main patcher. The default behavior is 0 (save the data as a separate file).

### sccolor[4 floats]

Sets the default text background color of the scroller in RGBA format.

### selmode[int]: 1

Sets the selection mode of the cellblock. The selection mode settings are:

0. no selection

1. select a single cell

2. select an entire column

3. select an entire row

4. select a single cell unless a column or row header is selected, in which case the entire column or row is selected.

5. in-place editing. A single cell is selected and values can be typed directly into the cell.

Possible values:

0 = 'No Selection'

1 = 'One Cell'

2 = 'Column'

3 = 'Row'

4 = 'Header Select'

5 = 'Inline Edit'

### selsync[int]: 1

Toggles synchronizing selection with another [jit.cellblock](https://docs.cycling74.com/reference/jit.cellblock) object whose third outlet is connected to the right-most inlet of the [jit.cellblock](https://docs.cycling74.com/reference/jit.cellblock) object.

### sgcolor[4 floats]

Sets the default text color of the scroller gutter in RGBA format.

### signalmode[symbol]: monitor

Signal Analysis Mode

Possible values:

'monitor'
(
Current values
)
Displays the current signal value based on the display interval.

'peak'
(
Peak values
)
Displays the peak value from the previous interval.

'average'
(
Averaged values
)
Displays the average of all values received during the previous interval.

'rms'
(
Root-mean-square
)
Displays the RMS (root-mean-square) of the values received during the previous interval.

### signalusecols[int]: 0

Signals Use Columns

### stcolor[4 floats]

Sets the default text color of the scroller handle (thumb) in RGBA format.

### textcolor[4 floats]

Sets the default text color of the [jit.cellblock](https://docs.cycling74.com/reference/jit.cellblock) object in RGBA format.

### vscroll[int]: 1

Toggles vertical scroll bar behavior. When set to 0, this attribute will override the [jit.cellblock](https://docs.cycling74.com/reference/jit.cellblock) object’s automatic handling of scrollbar display when there is more information to show than the current settings can manage.

### vsync[int]: 1

Toggles synchronizing vertical movement with another [jit.cellblock](https://docs.cycling74.com/reference/jit.cellblock) object whose third outlet is connected to the right-most inlet of the [jit.cellblock](https://docs.cycling74.com/reference/jit.cellblock) object.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Sends the contents out the object's left outlet, and sends a message through the third outlet in the form set value-list.

### list

Selects a cell within the cellblock. The message list col-number row-number is equivalent to the message select col-number row-number.

Arguments:

- column
  [int]
- row
  [int]

### append

The word  append , followed by a data element or a list of elements, will add the specified valid Max data to the contents of the currently selected cell.

Arguments:

- input
  [list]

### cell

The  cell  message allows you to control the appearance of a single cell within the cellblock. Using the  cell  message will override changes for both row and col message.

Arguments:

- column
  [int]
- row
  [int]
- setting
  [symbol]
- value
  [list]

### clear

The  clear  message removes data from the cellblock. The message  clear  <col-number row-number> clears the contents of the specified cell.  clear all  will clear the entire contents of the cellblock. The message  clear current  will clear the contents of the currently selected cell(s). The  clear  message with no arguments is equivalent to the message  clear current .

Arguments:

- option
  [list]

### col

The col message allows you to control the appearance of a single column within the cellblock. Using the col message to override color settings will override any color changes made with the row message. Using the cell message will, however, override color changes for both col and row messages.

Arguments:

- column
  [int]
- setting
  [symbol]
- value
  [list]

### deref

Disconnects a [jit.cellblock](https://docs.cycling74.com/reference/jit.cellblock) object from any attached [coll](https://docs.cycling74.com/reference/coll) objects.

### dump

Sends a listing of the contents of all non-empty cells out the object's left outlet, one line per cell. Each output line takes the form col-number row-number cell-contents.

### jit\_deref

The message  jit\_deref  will dereference the currently referenced [jit.matrix](https://docs.cycling74.com/reference/jit.matrix) object.

### jit\_matrix

The message  jit\_matrix  will cause the [jit.cellblock](https://docs.cycling74.com/reference/jit.cellblock) object's display/edit to directly reference the received [jit.matrix](https://docs.cycling74.com/reference/jit.matrix) rather than maintaining its own data structure.

Arguments:

- name
  [symbol]

### mode

Set operational modes

Arguments:

- operational-mode
  [list]

### plane

The word  plane  followed by an integer that specifies a numbered plane in a [jit.matrix](https://docs.cycling74.com/reference/jit.matrix) object, will display that plane. The special message  plane -1  will display all four planes of an RGBA [jit.matrix](https://docs.cycling74.com/reference/jit.matrix) object simultaneously.

Arguments:

- input
  [int]

### prepend

Adds the specified valid Max data to the beginning of the currently selected cell contents.

Arguments:

- input
  [list]

### read

Opens and reads the contents of a cellblock file from disk if a filename is specified. No attempts are made to verify the contents. If no filename is specified, a file dialog box will be displayed to allow selection of a saved cellblock file.

Arguments:

- filename
  [symbol]

### refer

The word  refer , followed by the name of a [coll](https://docs.cycling74.com/reference/coll), object, displays the contents of the named [coll](https://docs.cycling74.com/reference/coll) object's internal list. Changes to the data in the [jit.cellblock](https://docs.cycling74.com/reference/jit.cellblock) will change the contents of the attached [coll](https://docs.cycling74.com/reference/coll) object.

Arguments:

- name
  [symbol]

### refresh

Causes the [jit.cellblock](https://docs.cycling74.com/reference/jit.cellblock) object to be redrawn.

### row

The row message allows you to control the appearance of a single row within the cellblock.

Arguments:

- row
  [int]
- setting
  [symbol]
- value
  [list]

### rowblend

The word  rowblend , followed by two numbers in the range 0-100 specifying foreground and background blend percentages. blends the foreground and background colors for the cellblock object.

Arguments:

- foreground
  [int]
- background
  [int]

### select

The select message, followed by a column number and row number, will select the requested cell using the current selmode. The leftmost outlet of [jit.cellblock](https://docs.cycling74.com/reference/jit.cellblock) outputs a message in the format of  [column, row, cell contents] . The third outlet outputs a message in the format of  sync select [column, row] , which can be connected to another [jit.cellblock](https://docs.cycling74.com/reference/jit.cellblock) for synchronization between two cellblocks.

Arguments:

- column-number
  [int]
- row-number
  [int]

### send

The word  send , followed by the name of a [receive](https://docs.cycling74.com/reference/receive) object, will transmit cellblock values without using connected patch cords; it is the equivalent of sending the output through a [send](https://docs.cycling74.com/reference/send) object.

send receive-object col-number row-number will send the data in the specified cell to the specified received object. send receive-object all sends all non-empty cell contents to the specified receive object as a series of lists in the form cell-data-type value.

Arguments:

- name
  [symbol]
- option
  [list]

### set

Replaces a cell's data with the data specified. Two forms are supported:

set current value replaces the currently selected cell's contents.

set col-number row-number values replaces the specified cell's contents.

Arguments:

- input
  [list]

### setwithoutdirty

The word  setwithoutdirty  followed by any message to [jit.cellblock](https://docs.cycling74.com/reference/jit.cellblock), executes that message without dirtying the patcher. Example:  setwithoutdirty col 0 just 1  sets the text justification of column 0 without dirtying the patcher, which would normally occur when sending this message. You can also disable patcher dirtying permanently by enabling the neverdirty attribute. Ironically, doing so will itself dirty the patcher.

Arguments:

- message
  [list]

### signal

Displays signal input based on the signalmode attribute setting.

### sync

Receives input in the [jit.cellblock](https://docs.cycling74.com/reference/jit.cellblock) object's right inlet from another [jit.cellblock](https://docs.cycling74.com/reference/jit.cellblock) object, so that two cellblocks can maintain location and selection synchronization. Synchronization allows for multiple [jit.cellblock](https://docs.cycling74.com/reference/jit.cellblock) objects to react as if connected. One use of synchronization is used to force external cellblock objects to act as header rows and columns for a main [jit.cellblock](https://docs.cycling74.com/reference/jit.cellblock). For more information on setting synchronization, see the  mode  message.

Arguments:

- messages
  [list]

### text

Replaces the value of the currently selected cell with the incoming text values. This is provided as a convenient way of receiving the output of a [textedit](https://docs.cycling74.com/reference/textedit) object.

Arguments:

- input
  [list]

### write

Opens a file and writes the contents of a cellblock file to disk. If a filename is specified, that file is created and written. If no filename is specified, a file dialog box will be displayed to allow selection of a pathname and file.

Arguments:

- filename
  [symbol]

### writeagain

If a file has been written, the  writeagain  message will allow it to be rewritten without further user interaction.

## Menu Items

### Color

Choosing the  **Color...**  menu item from the  **Object**  menu when the object is selected opens a [color picker](https://docs.cycling74.com/documentation/color_palette.maxvig.xml), permitting adjustment to the appearance of the [jit.cellblock](https://docs.cycling74.com/reference/jit.cellblock) object.

## Output

### list

Out left outlet: A list containing the currently selected column number, row number and the contents of the cell. The form of the output will be dependent on the mode outmode setting, which will determine if the contents will be provided individually, as a single list or as a single symbol.

### list

Out the middle outlet: The Max message  set , followed by the cell contents, is provided as a "helper" output for routing the cell contents to either a [textedit](https://docs.cycling74.com/reference/textedit) or [message](https://docs.cycling74.com/reference/message) object.

### list

Out the right outlet: Synchronization messages are sent out the right outlet, meant as a source for the right inlet of other [jit.cellblock](https://docs.cycling74.com/reference/jit.cellblock) objects. These messages can also be used to determine the current state of movement within the cellblock - for instance, the  sync click  message notifies that a cell has been click-selected, while the  sync select  message notifies that a cell has been selected (either by clicking, or programmatically).

## See Also

| Name | Description |
| --- | --- |
| [coll](https://docs.cycling74.com/reference/coll) | Store and edit a collection of data |
| [maximum](https://docs.cycling74.com/reference/maximum) | Output the highest value |
| [minimum](https://docs.cycling74.com/reference/minimum) | Output the smallest value |
