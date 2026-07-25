---
type: ableton
name: "live.menu"
summary: "Dropdown menu"
signal: false
url: "https://docs.cycling74.com/reference/live.menu/"
package: "Max for Live"
see_also: ["live.tab", "umenu"]
---
# live.menu

Dropdown menu

## Description

The [live.menu](https://docs.cycling74.com/reference/live.menu) object can be used to display text associated with incoming numbers and provide a general user interface. Item numbering starts from zero (0).

## Arguments

None.

## Attributes

### active[int]: 1

Toggles the object's active mode. When the active attribute is set to 0, the mouse action does not cause output and the inactive colors are used. The default is 1 (on).

### activebgcolor[4 floats]

Sets the background color of the display when the active attribute is set to 1.

### annotation\_name[symbol]:

The string that is prepended to annotations. This shows up in the Info pane in Live, and the clue window in Max.

### appearance[int]: 0 >= 8.0.0

Defines the display style.

Possible values:

0 = 'Default'

The text appears with the boundaries of the text box. All attributes, except those with 'lcd' in the name, are functional.

1 = 'LCD'

The text appears with the boundaries of the text box. To adjust the colors of the object you must use the attributes with 'lcd' in the name, such as inactivelcdcolor, lcdbgcolor, and lcdcolor.

### bordercolor[4 floats]

Sets the display color for the [live.menu](https://docs.cycling74.com/reference/live.menu) object's border in RGBA format.

### focusbordercolor[4 floats]

Sets the border color in RGBA format to be used when the [live.menu](https://docs.cycling74.com/reference/live.menu) has the focus.

### hltcolor[4 floats]

Sets the highlight color in RGBA format to be used when you select an item with the mouse.

### hlttextcolor[4 floats]

Sets the highlight text color in RGBA format to be used when you select an item with the mouse.

### inactivelcdcolor[4 floats] >= 8.0.0

Sets the text and highlight color when the appearance attribute is set to 1:LCD, and the active attribute is set to 0.

### lcdbgcolor[4 floats] >= 8.0.0

Sets the background color of the display when the appearance attribute is set to 1:LCD.

### lcdcolor[4 floats] >= 8.0.0

Sets the text and highlight color when the appearance attribute is set to 1:LCD.

### param\_connect[symbol]:

Establishes a two-way connection between the object and a parameter of a compatible object with parameters such as [gen~](https://docs.cycling74.com/reference/gen~) or [jit.gl.slab](https://docs.cycling74.com/reference/jit.gl.slab). The object can be used to change the value of the parameter and will update if the parameter value changes. The easiest way to set param\_connect is with the attribute's menu in the [inspector](https://docs.cycling74.com/userguide/inspector) or the Connect submenu of the [Object Action menu](https://docs.cycling74.com/userguide/action_menu). The menu displays all available parameters of compatible objects.

Setting the param\_connect attribute with a message requires the target parameter's path, which is the host object's scriping name followed by two colons and the parameter name. For example, for a [gen~](https://docs.cycling74.com/reference/gen~) object with scripting name  gen~\_AB , the path of the  freq  parameter would be  gen~\_AB::freq . You can set a value for the param\_connect before the host object or parameter exists, and the object will connect to the parameter once it exists. Refer to the user guide entry for [param\_connect](https://docs.cycling74.com/userguide/param_connect) for more details.

### parameter\_mappable[int]: 1

When parameter\_mappable is enabled, the object will be available for mapping to keyboard or MIDI input using the [Mappings feature](https://docs.cycling74.com/userguide/mapping).

### pictures[256 symbols]

Sets the paths of any pictures used when the usepicture attribute is set to 1. Bitmap images such as PNG or vectorized images (SVG) can be used.

### remapsvgcolors[int]: 0 >= 8.0.0

Sets the color that the SVG image will use. When usepicture is set to 1, and remapsvgcolors is set to 0, the color supplied by the SVG file are used; if set to 1, the color attributes for the appropriate display mode are used.

### textcolor[4 floats]

Sets the display color for the [live.menu](https://docs.cycling74.com/reference/live.menu) object's text in RGBA format.

### tricolor[4 floats]

Sets the triangle color in RGBA format.

### usepicture[int]: 0

Toggles the use of the pictures instead of text display. Note that you need to provide enough pictures by setting the pictures attribute properly.

### usesvgviewbox[int]: 0 >= 8.0.0

Sets the viewbox for the svg files when usepicture is set to 1. If usesvgviewbox is set to 0, Max determines the viewbox; if set to 1, uses the viewbox flag supplied by the svg file.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Sends the current item out the outlets.

### int

An integer specifies a menu item to be displayed, and causes the [live.menu](https://docs.cycling74.com/reference/live.menu) object to display that item and output information about its index and the symbol associated with that menu index. Menu item numbering starts at 0.

Arguments:

- item-index
  [int]

### float

Converted to  int .

Arguments:

- item-index
  [float]

### assign

The word  assign , followed by a floating point value, causes that value to be displayed and sent out the [live.menu](https://docs.cycling74.com/reference/live.menu) object's outlet. The value, however, will not be stored. If the Parameter Visibility attribute is set to Stored Only, the  assign  message will not add the new value to the Live application’s undo chain.

Arguments:

- assign-input
  [float]

### init

Restore and output the initial value.

### (mouse)

Clicking with the mouse lets you select a menu item to be displayed and outputs information about its index and the symbol associated with that menu index.

### outputvalue

Sends the current value out the outlet.

### rawfloat

A raw normalized value (between 0. and 1.) received in the inlet is converted to a real value, stored, displayed by [live.menu](https://docs.cycling74.com/reference/live.menu), and the current item is sent out the outlets.

Arguments:

- input-value
  [float]

### set

The word  set , followed by a number, specifies a menu item to be displayed by the [live.menu](https://docs.cycling74.com/reference/live.menu) object without triggering any output.

Arguments:

- item index
  [float]

### setsymbol

The word  setsymbol , followed by a message, selects a menu item to be displayed by name without triggering any output.

Arguments:

- menu item
  [list]

### symbol

The word  symbol , followed by a message, selects a menu item to be displayed by name. If the item is found, the menu item is displayed and information about its index and the symbol associated with that menu index.

Arguments:

- menu item
  [list]

## Output

### anything

Out middle outlet: The text of the selected menu item is sent out as a message.

### float

Out right outlet: When an output is triggered, a raw normalized value (between 0. and 1.) is sent out this outlet.

### int

Out left outlet: The number of the selected menu item is sent out. Menu items are numbered beginning with 0.

## See Also

| Name | Description |
| --- | --- |
| [live.tab](https://docs.cycling74.com/reference/live.tab) | A user interface tab/multiple button object in the style of Ableton Live. |
| [umenu](https://docs.cycling74.com/reference/umenu) | Pop-up menu |
