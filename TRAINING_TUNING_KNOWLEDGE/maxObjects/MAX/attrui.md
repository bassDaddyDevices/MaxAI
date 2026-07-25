---
type: max
name: "attrui"
summary: "Inspect attributes"
signal: false
url: "https://docs.cycling74.com/reference/attrui/"
package: "Max"
see_also: ["Dynamic Colors", "getattr", "pattr"]
---
# attrui

Inspect attributes

## Description

Use [attrui](https://docs.cycling74.com/reference/attrui) object to inspect the attribute values of the object(s) it is connected to.

## Arguments

None.

## Attributes

### align[atom] renamed

### annotation\_name[symbol]:

Info View Title

### attr[symbol]: nothing

Sets the name of the inspected attribute

### attr\_display[int]: 0

Sets whether the attribute name or its label is displayed on the left side of the object

Possible values:

0 = 'Name'

1 = 'Label'

### attrfilter[64 symbols]: none

The attrfilter attribute can contain one or more attribute names that determine the contents of the object's attribute selection popup menu. For example, if attrfilter is set to  bgcolor elementcolor  only those two attributes will appear in the menu. Send the message  attrfilter  with no arguments to show all attributes in the menu.

### bgcolor[4 floats]

Sets the background color

### displaymode[int]: 0

Configures the attribute value display

Possible values:

0 = 'Automatic'
(
Display is based on the attribute style
)
In Automatic mode, [attrui](https://docs.cycling74.com/reference/attrui) configures the display based on the style of the attribute. For example, a color attribute shows a color editor or a toggle attribute shows a checkbox.

1 = 'Single Number (int)'
(
Display is always a single number
)
In Single Number (int) mode, the attribute is always shown as a single number in a number-box style. This is appropriate for showing only one attribute whose type is  int . You can restrict [attrui](https://docs.cycling74.com/reference/attrui) to show a single attribute using the lock attribute.

2 = 'Single Number (float)'
(
Display is always a single number
)
In Single Number (float) mode, the attribute is always shown as a single number in a number-box style. This is appropriate for showing only one attribute whose type is  int . You can restrict [attrui](https://docs.cycling74.com/reference/attrui) to show a single attribute using the lock attribute.

3 = 'Multi Number (int)'
(
Display is always multiple numbers
)
In Multi Number (int) mode, the attribute is always represented with multiple int number boxes.

4 = 'Multi Number (float)'
(
Display is always multiple numbers
)
In Multi Number (float) mode, the attribute is always represented with multiple float number boxes.

5 = 'List'
(
Display is always a list text field
)
In List mode, the attribute is always shown in a textfield you can change by typing.

6 = 'Color (RGBA)'
(
Display is always a color picker
)
7 = 'Color (ARGB)'
(
Display is always a color picker
)
8 = 'Checkbox'
(
Display is always a checkbox
)

### htricolor[4 floats]

Set the highlighted triangle color (when the numbers are focused)

### lock[int]: 0

When enabled, the selected attribute cannot be changed

### menu\_display[int]: 0

Sets whether the attribute menu shows attribute names, labels, or both

Possible values:

0 = 'Label'

1 = 'Name'

2 = 'Label & Attribute'

### orientation[atom\_long]: 0

Display [attrui](https://docs.cycling74.com/reference/attrui) horizontally or vertically

Possible values:

0 = 'Horizontal'

1 = 'Vertical'

### parameter\_enable[int]

Enables use of this object with [Max for Live Parameters](https://docs.cycling74.com/userguide/m4l/live_parameters) and [setting initial parameter values](https://docs.cycling74.com/userguide/parameter_mode) in Max.

### paramonly[int]: 0

When paramonly is enabled, only attributes of objects such as [gen~](https://docs.cycling74.com/reference/gen~) and [rnbo~](https://docs.cycling74.com/reference/rnbo~) that are defined with [param](https://docs.cycling74.com/reference/param) objects are included in the attribute popup menu.

### showcaption[int]

Display attribute label on mouse over

### showgetonly[int]: 0

When enabled, attributes that cannot be changed are included in the object's popup menu and can be selected for display

### storeinpreset[int]: 1

Toggles on/off the ability to store an [attrui](https://docs.cycling74.com/reference/attrui) 's data with the [preset](https://docs.cycling74.com/reference/preset) object or [pattrstorage](https://docs.cycling74.com/reference/pattrstorage). The default is 1 (on).

### style[symbol]: >= 7.0.0

Sets the [style](https://docs.cycling74.com/userguide/styles) to be applied to the object. Styles can be set using the [Format Palette](https://docs.cycling74.com/userguide/format_palette).

### text\_width[float]: 100.

Set the with of the attribute name in horizontal mode. You can also click and drag in the middle line to change it.

### textcolor[4 floats]

Set the text color

### textjustification[int]: 0 >= 7.0.0

Sets the attribute name text justification

Possible values:

0 = 'left'

1 = 'center'

2 = 'right'

### tricolor[4 floats]

Sets the color of the number box triangle

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

The currently selected attribute of all connected objects will be set to the  int  value.

Arguments:

- input
  [int]

### float

The currently selected attribute of all connected objects will be set to the  float  value.

Arguments:

- input
  [float]

### list

The currently selected attribute of all connected objects will be set to the  list  value.

Arguments:

- input
  [any]

### anything

The currently selected attribute of all connected objects will be set to the incoming value.

Arguments:

- input
  [any]

### (mouse)

Choose an attribute from the popup menu on the left half of [attrui](https://docs.cycling74.com/reference/attrui) to inspect. Use the controls on the right half to view or change the attribute's value.

## See Also

| Name | Description |
| --- | --- |
| [Dynamic Colors](https://docs.cycling74.com/userguide/dynamic_colors) | Dynamic Colors |
| [getattr](https://docs.cycling74.com/reference/getattr) | Query object attributes |
| [pattr](https://docs.cycling74.com/reference/pattr) | Provide an alias with a named data wrapper |
