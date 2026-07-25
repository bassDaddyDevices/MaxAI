---
type: max
name: "matrixctrl"
summary: "Matrix switch control"
signal: false
url: "https://docs.cycling74.com/reference/matrixctrl/"
package: "Max"
see_also: ["crosspatch", "dial", "kslider", "matrix~", "pictctrl", "pictslider", "router", "rslider", "slider", "ubutton"]
---
# matrixctrl

Matrix switch control

## Description

Provides a user interface control containing a group of cells in a grid. Cell states can either be on/off or incremental steps. This object is especially useful for controlling the [matrix~](https://docs.cycling74.com/reference/matrix~) object.

#### Discussion

[matrixctrl](https://docs.cycling74.com/reference/matrixctrl) is a user interface object that consists of a rectangular grid of switch-like controls called cells. All of the cells in a [matrixctrl](https://docs.cycling74.com/reference/matrixctrl) object have the same appearance and behavior. Each cell has two or more states. By default, the cells have two states, representing "off" and "on." You can create cells with any number of states. Clicking on a cell increases its state by one. After a cell reaches its last state, it returns to its zero state when clicked again--thus, a cell with only two states will toggle back and forth between these states with each mouse click.

[matrixctrl](https://docs.cycling74.com/reference/matrixctrl) was originally constructed to control the MSP object [matrix~](https://docs.cycling74.com/reference/matrix~), but is useful for other user interface applications, such as groups of switches, groups of visual indicators, and drum-machine-oriented sequencers.

Note: The [matrixctrl](https://docs.cycling74.com/reference/matrixctrl) object customarily uses images saved in Portable Network Graphics (.png) format. If you are using Max on Windows, we recommend that you install QuickTime and choose a complete install of all optional components to work with images other than PNG or PICT files.

## Arguments

None.

## Attributes

### active[int]: 1

Toggles [matrixctrl](https://docs.cycling74.com/reference/matrixctrl) to ignore or respond to mouse clicks, respectively. By default, [matrixctrl](https://docs.cycling74.com/reference/matrixctrl) responds to mouse clicks.

### annotation\_name[symbol]:

Info View Title

### autosize[int]: 0

Toggles automatically resizing to rows and columns for the [matrixctrl](https://docs.cycling74.com/reference/matrixctrl) object's display area when a cell picture is added.

### bgcolor[4 floats] >= 7.0.0

Sets the default background color in RGBA format.

### bkgndpict[symbol]: <default>

Designates the graphics file that the [matrixctrl](https://docs.cycling74.com/reference/matrixctrl) object will use for the matrix background image. By convention, the [matrixctrl](https://docs.cycling74.com/reference/matrixctrl) object uses images saved in Portable Network Graphics (.png) format. If you are using Max on Windows and want to to work with images other than PNG or PICT files, we recommend that you install QuickTime and choose a complete install of all optional components. The symbol used as a filename must either be the name of a file in Max's current search path, or an absolute pathname for the file (e.g. " MyDisk:/Documents/UI Pictures/CoolBkgnd.png "). The word  bkgndpicture  by itself puts up a standard Open Document dialog box.

### cellpict[symbol]: <default>

Designates the graphics file that the [matrixctrl](https://docs.cycling74.com/reference/matrixctrl) object will use for each cell. By convention, the [matrixctrl](https://docs.cycling74.com/reference/matrixctrl) object uses images saved in Portable Network Graphics (.png) format. If you are using Max on Windows and want to to work with images other than PNG or PICT files, we recommend that you install QuickTime and choose a complete install of all optional components. The symbol used as a filename must either be the name of a file in Max's current search path, or an absolute pathname for the file (e.g. " MyDisk:/Documents/UI Pictures/Cell.png ").

### clickedimage[int]: 1

Specifies that the graphics file used by the [matrixctrl](https://docs.cycling74.com/reference/matrixctrl) object contains an additional image to be displayed when a cell is clicked.

### clickvalue[atom\_long]: -1

Toggles the click value mode. If the  clickvalue  message is followed by a zero or a positive number, clicking on a cell sets its value to the given number. If  clickvalue  is followed by a negative number, the matrixctrl object reverts to its default behavior in which clicking a cell increments its value. The  clickvalue  message allows the use of the [matrixctrl](https://docs.cycling74.com/reference/matrixctrl) object to create grid editors by creating graphics files which contain a sequence of images, each of which is assigned to a different value; as you click through the sequence of images, the cell image will change to reflect velocity, note, etc.

### color[4 floats] >= 7.0.0

Sets the default color for a cell in the "on" state in RGBA format.

### columns[atom\_long]: 8

Sets the number of columns in the [matrixctrl](https://docs.cycling74.com/reference/matrixctrl) object's display.

### dialmode[int]: 0

Determines how individual cells in [matrixctrl](https://docs.cycling74.com/reference/matrixctrl) are activated and if cell values are stored as integers or floats. The default is 0 (off).

Possible values:

0 = 'Off'
(
Allows cells within the matrix to react to a simple click.
)
1 = 'Indexed'
(
Allows the object to behave like a matrix of dials where a cell will need to be clicked and dragged on to change its value.
)
2 = 'Gain'
(
Similar to Indexed mode, Gain causes the object to behave like a matrix of dials where a cell will need to be clicked and dragged on to change its value. However, this mode is for float gain tracking, where cell values are stored as floats.
)

### dialtracking[int]: 0

Sets whether or not the [matrixctrl](https://docs.cycling74.com/reference/matrixctrl) object will use vertical mouse tracking while it is in  dialmode .

### elementcolor[4 floats] >= 7.0.0

Sets the default color for a cell in the "off" state in RGBA format.

### horizontalmargin[atom\_long]: 1

Sets a horizontal margin (in pixels) between the outermost cells and the edge of the matrixctrl object's bounding box.

### horizontalspacing[atom\_long]: 0

Sets the horizontal distance (in pixels) between adjacent cells in the matrixctrl object.

### imagemask[int]: 0

Specifies that the [matrixctrl](https://docs.cycling74.com/reference/matrixctrl) cell graphics file has additional rows of images for use as image masks. This attribute is present for legacy support - it has been superseded by the use of alpha channels in images.

### inactiveimage[int]: 1

Specifies that the [matrixctrl](https://docs.cycling74.com/reference/matrixctrl) cell graphics file has additional rows of images for use in an inactive state (set with an  active 0  message).

### invisiblebkgnd[int]: 0

Specifies that the [matrixctrl](https://docs.cycling74.com/reference/matrixctrl) will be drawn without a background image, and its cells will be superimposed over any underlying Max objects.  invisiblebkgnd 0  disables this feature.

### one/column[int]: 0

One Non-Zero Cell Per Column

### one/matrix[int]: 0

Toggles only allowing one cell in the entire object to have a non-zero state. Setting any other cell in the matrix to a non-zero state causes any other non-zero cells to change to the zero state.  one/matrix 0  removes this constraint.

### one/row[int]: 0

Toggles only allowing one cell per row to have a non-zero state. Setting any cell in a row to a non-zero state causes any other non-zero cells to change to the zero state.  one/row 0  removes this constraint.

### parameter\_enable[int]

Enables use of this object with [Max for Live Parameters](https://docs.cycling74.com/userguide/m4l/live_parameters) and [setting initial parameter values](https://docs.cycling74.com/userguide/parameter_mode) in Max.

### range[atom\_long]: 2

Sets the number of possible states each cell can have. It must be set to a value of at least 2 (for states 0 and 1).

### rows[atom\_long]: 4

Sets the number of rows in the [matrixctrl](https://docs.cycling74.com/reference/matrixctrl) object's display.

### scale[int]: 1

Toggles scaling graphics when the [matrixctrl](https://docs.cycling74.com/reference/matrixctrl) object's display area is resized.

### style[symbol]: >= 7.0.0

Sets the [style](https://docs.cycling74.com/userguide/styles) to be applied to the object. Styles can be set using the [Format Palette](https://docs.cycling74.com/userguide/format_palette).

### verticalmargin[atom\_long]: 1

Sets a vertical margin (in pixels) between the outermost cells and the edge of the matrixctrl object's bounding box.

### verticalspacing[atom\_long]: 0

Sets the vertical distance (in pixels) between adjacent cells in the [matrixctrl](https://docs.cycling74.com/reference/matrixctrl) object.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

bang  causes [matrixctrl](https://docs.cycling74.com/reference/matrixctrl) to dump its current state in lists of three values for each cell pair, in the format

horizontal-coordinate vertical-coordinate value

### list

A list of ints sets cells in the [matrixctrl](https://docs.cycling74.com/reference/matrixctrl) object using the format <horizontal-coordinate vertical-coordinate value>. Multiple triplets of values can be used to set more than one cell. Coordinates for the cells start at 0 in the upper-left hand corner and the values for each cell start at 0 and go up to the value range minus one, set by the object's inspector. Substituting the symbols  inc  and  dec  in place of the value will increment or decrement that cell coordinate by a value of one. Changing the cell state with a list causes the list to be output from [matrixctrl](https://docs.cycling74.com/reference/matrixctrl).

Arguments:

- values
  [list]

### bkgndpicture

This is a legacy message - it has been superseded by the  bkgndpict  attribute.

Arguments:

- filename
  [symbol]

### cellpicture

This is a legacy message - it has been superseded by the  cellpict  attribute.

Arguments:

- filename
  [symbol]

### clear

The word  clear  will set the value of all cells to 0.

### dictionary

The word  dictionary  followed a symbol naming a Max dictionary object, replaces all existing cell states with the ones in the dictionary. If the dictionary has no cell states, the existing connections are cleared. The format of the dictionary is an entry named "connections" containing an array of dictionaries, each one with entries for "in" (row), "out" (column), and "gain" (cell value).

Arguments:

- dictionary name
  [symbol]

### disable

Performs the same as  disablecell .

Arguments:

- coordinates
  [list]

### disablecell

The word  disablecell , followed by a list of number pairs which specify the horizontal and vertical coordinates of a cell or cells, sets the designated cell or cells so that they do not respond to mouse clicks. The  disablecell  message expects at least one pair of numbers, but more may be added to disable multiple cells (e.g.,  disable 0 0 3 4 9 12 ). Although disabled cells will ignore mouse clicks, their values can be set using messages.

Arguments:

- coordinates
  [list]

### enablecell

The word  enablecell , followed by a list of number pairs which specify the horizontal and vertical coordinates of a cell or cells, will set any designated cell or cells which have been disabled using the  disablecell  message to respond to mouse clicks again. The  enablecell  message expects at least one pair of numbers, but more may be added to enable multiple cells (e.g.,  enable 1 1 1 2 2 2 ).

Arguments:

- coordinates
  [list]

### getcolumn

The word  getcolumn , followed by a number, sends the values of the cells in the column designated by the number out its right outlet. Column numbers start at 0.

Arguments:

- column
  [int]

### getrow

The word  getrow , followed by a number, sends the values of the cells in the row designated by the number out its right outlet. Row numbers start at 0.

Arguments:

- row
  [int]

### (mouse)

A mouse click on a cell will increase its value by one. Values in [matrixctrl](https://docs.cycling74.com/reference/matrixctrl) will wrap back to 0 once they have reached their maximum possible state. Dragging across several cells will set their values to that of the first cell clicked. Dragging across cells while holding down the Shift key will allow you to drag in straight horizontal or vertical lines only.

### readanybkgnd

The word  readanybkgnd  followed by the name of a file will read any type of file into the [matrixctrl](https://docs.cycling74.com/reference/matrixctrl) object and attempt to interpret it as a background image.

Arguments:

- filename
  [list]

### readanycell

The word  readanycell  followed by the name of a file will read any type of file into the [matrixctrl](https://docs.cycling74.com/reference/matrixctrl) object and attempt to interpret it as a cell image.

Arguments:

- filename
  [list]

### set

The word  set , followed by a list as described above, changes the state of [matrixctrl](https://docs.cycling74.com/reference/matrixctrl) without echoing the values to the output.

Arguments:

- input
  [list]

## Picture File Format

### Specifications

The background pictures the [matrixctrl](https://docs.cycling74.com/reference/matrixctrl) object uses are, by convention, saved in Portable Network Graphics (.png) format. If you are using Max on Windows and want to to work with images other than PNG or PICT files, we recommend that you install QuickTime and choose a complete install of all optional components. The symbol used as a filename must either be the name of a file in Max's current search path, or an absolute pathname for the file (e.g. " MyDisk:/Documents/UI Pictures/Cell.png "). If the [matrixctrl](https://docs.cycling74.com/reference/matrixctrl) is larger than the chosen picture, copies of the picture will be added to fill the object.

Cell picture files must be in the following format:

![](''images/image137.png)

The picture is made up of a grid of images. All images have the same width and height. Each column of images represents one cell state. The picture must have at least two columns, since cells must have at least two states.

The first row of images is used for the idle (or "not clicked") appearance of the cells. The first row of images is mandatory; all subsequent rows are optional. The second row are images for the clicked appearance; these images will be used to draw the cell when it is clicked. The appearance of the cell reverts to its idle image when the mouse is released. The third row of images are used when the [matrixctrl](https://docs.cycling74.com/reference/matrixctrl) is in its inactive state, i.e. when it has received an  active 0  message.

Image masks can be used to create cells with non-rectangular outlines. These masks are in the lower rows of the picture file. If you wish to use masks for any of the cell images, you must provide masks for all of them--each row of images will have a corresponding row of masks. Like all masks for Max's picture-based controls, black pixels create areas of the corresponding image that will be drawn, and while pixels create invisible areas.

## Output

### list

When a cell changes state in response to a mouse click, a list is sent out the [matrixctrl](https://docs.cycling74.com/reference/matrixctrl) object's left outlet. The list contains the column, row, and value (state) of the clicked control. Individual cells can also be set by sending lists to the object's left inlet. Rows and columns are numbered starting with zero, at the upper-left corner of the matrix.

The numbers received in the inlet are compared with the arguments. If the numbers are the same, and in the same order, they are sent out the outlet as a list.

## See Also

| Name | Description |
| --- | --- |
| [crosspatch](https://docs.cycling74.com/reference/crosspatch) | Patching Editor for Matrix Objects |
| [dial](https://docs.cycling74.com/reference/dial) | Output numbers using an onscreen dial |
| [kslider](https://docs.cycling74.com/reference/kslider) | Output numbers from an onscreen keyboard |
| [matrix~](https://docs.cycling74.com/reference/matrix~) | Signal routing and mixing matrix |
| [pictctrl](https://docs.cycling74.com/reference/pictctrl) | Picture-based control |
| [pictslider](https://docs.cycling74.com/reference/pictslider) | Picture-based slider control |
| [router](https://docs.cycling74.com/reference/router) | Route messages to multiple locations |
| [rslider](https://docs.cycling74.com/reference/rslider) | Display or change a range of numbers |
| [slider](https://docs.cycling74.com/reference/slider) | Move a slider to output values |
| [ubutton](https://docs.cycling74.com/reference/ubutton) | Transparent button |
