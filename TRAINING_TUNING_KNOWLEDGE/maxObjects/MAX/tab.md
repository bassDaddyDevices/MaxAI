---
type: max
name: "tab"
summary: "Tab control"
signal: false
url: "https://docs.cycling74.com/reference/tab/"
package: "Max"
see_also: ["matrixctrl", "pictctrl", "pictslider", "textbutton", "ubutton"]
---
# tab

Tab control

## Description

The [tab](https://docs.cycling74.com/reference/tab) can be used to create multiple button and multiple column displays and interfaces.

## Arguments

None.

## Attributes

### activesafe[int]: 1

When set to one, protects the currently active tab from text truncation.

### annotation\_name[symbol]:

Info View Title

### bgcolor[4 floats] >= 7.0.0

Sets the background color of the [tab](https://docs.cycling74.com/reference/tab) objet in RGBA format.

### button[int]: 0

Toggles button mode for the [tab](https://docs.cycling74.com/reference/tab) object.

### colorselectedtext[int]: 0 >= 7.0.0

Toggles the coloring of a contrasting text color for selected and unselected text. When enabled, the selected text color is set using the  htabcolor  attribute, and the unselected text color is set using the  tabcolor  attribute.

### contrastactivetab[int]: 1 >= 7.0.0

Toggles the use of a contrasting tab color.

### gradient[float]: 0.

Toggles the application of a gradient effect to the tab buttons.

### htabcolor[4 floats]

Sets the color of the selected tab in RGBA format. The  htabcolor  attribute is mapped to the  color  style color.

### margin[int]: 4

Sets the text margin, in pixels, for tab text.

### mode[int]: 0

Sets the text tab layout mode. The modes are:

0 separate tab entries are equally spaced. This is the default.

1 separate tab entries are proportionally spaced according to the text.

Note: to add multiple words, use the backslash before a space (e.g. "one\ down")

Possible values:

0 = 'Equal Spaced'

1 = 'Proportional'

### multiline[int]: 1

Toggles allowing multiple lines of text in a tab. When set, you can resize the object to create multicolumn displays.

### param\_connect[symbol]:

Establishes a two-way connection between the object and a parameter of a compatible object with parameters such as [gen~](https://docs.cycling74.com/reference/gen~) or [jit.gl.slab](https://docs.cycling74.com/reference/jit.gl.slab). The object can be used to change the value of the parameter and will update if the parameter value changes. The easiest way to set param\_connect is with the attribute's menu in the [inspector](https://docs.cycling74.com/userguide/inspector) or the Connect submenu of the [Object Action menu](https://docs.cycling74.com/userguide/action_menu). The menu displays all available parameters of compatible objects.

Setting the param\_connect attribute with a message requires the target parameter's path, which is the host object's scriping name followed by two colons and the parameter name. For example, for a [gen~](https://docs.cycling74.com/reference/gen~) object with scripting name  gen~\_AB , the path of the  freq  parameter would be  gen~\_AB::freq . You can set a value for the param\_connect before the host object or parameter exists, and the object will connect to the parameter once it exists. Refer to the user guide entry for [param\_connect](https://docs.cycling74.com/userguide/param_connect) for more details.

### parameter\_enable[int]

Enables use of this object with [Max for Live Parameters](https://docs.cycling74.com/userguide/m4l/live_parameters) and [setting initial parameter values](https://docs.cycling74.com/userguide/parameter_mode) in Max.

### parameter\_mappable[int]: 1

When parameter\_mappable is enabled, the object will be available for mapping to keyboard or MIDI input using the [Mappings feature](https://docs.cycling74.com/userguide/mapping). (default = 1).

### rounded[float]: 8.

Sets the radius, in pixels for the [tab](https://docs.cycling74.com/reference/tab) object.

### segmented[int]: 0

Segmented

### spacing\_x[float]: 4.

Sets the horizontal spacing for the [tab](https://docs.cycling74.com/reference/tab) object in pixels.

### spacing\_y[float]: 4.

Sets the vertical spacing for the [tab](https://docs.cycling74.com/reference/tab) object in pixels.

### style[symbol]: >= 7.0.0

Sets the [style](https://docs.cycling74.com/userguide/styles) to be applied to the object. Styles can be set using the [Format Palette](https://docs.cycling74.com/userguide/format_palette).

### tabcolor[4 floats]

Sets the tab color for unselected items in RGBA format. The  tabcolor  attribute is mapped to the  elementcolor  style color.

### tabs[symbol]: one two three

Sets the tab text for each tab in the [tab](https://docs.cycling74.com/reference/tab) object.

### textcolor[4 floats]

Sets the text color for the [tab](https://docs.cycling74.com/reference/tab) object when the tab is unselected in RGBA format. The  textcolor  attribute is mapped to the  textcolor\_inverse  style color.

### truncate[int]: 1

Sets the truncation to be applied to tab text

Possible values:

0 = 'No truncation'

1 = 'Truncate from the right'

2 = 'Truncate from the middle'

### valign[int]: 1

Sets the vertical alignment for tabs

Possible values:

0 = 'Top'

1 = 'Center'

2 = 'Bottom'

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

bang  message will retrigger the object's output.

### int

The number specifies a tab item to be sent out, and causes [tab](https://docs.cycling74.com/reference/tab) to display that item and send the index out the first outlet and the tab text out the second outlet. The items are numbered starting at 0. A tab can also be chosen with the mouse.

Arguments:

- tab
  [int]

### float

Converted to  int .

Arguments:

- tab
  [float]

### (mouse)

Clicking on a tab button will highlight and set the selection and send the index out the first outlet and the tab text out the second outlet.

### next

Selects the next index to the [tab](https://docs.cycling74.com/reference/tab) object and causes [tab](https://docs.cycling74.com/reference/tab) to display that item and send the new index out the first outlet and the tab text out the second outlet. If the last index is currently displayed, it wraps around to the first index.

### prev

Selects the previous index to the [tab](https://docs.cycling74.com/reference/tab) object and causes [tab](https://docs.cycling74.com/reference/tab) to display that item and send the new index out the first outlet and the tab text out the second outlet. If the first index is currently displayed, it wraps around to the last index.

### set

The word  set , followed by a number, specifies a tab item to be selected, and causes [tab](https://docs.cycling74.com/reference/tab) to display that item, but does not cause any output.

Arguments:

- tab
  [list]

### setsymbol

The word  setsymbol , followed by a symbol that specifies a tab item, causes [tab](https://docs.cycling74.com/reference/tab) to display that item but does not send output.

Arguments:

- tab
  [list]

### symbol

The word  symbol , followed by a symbol that specifies a tab item, causes [tab](https://docs.cycling74.com/reference/tab) to display that item and send the index out the first outlet and the tab text out the second outlet.

Arguments:

- tab name
  [list]

## See Also

| Name | Description |
| --- | --- |
| [matrixctrl](https://docs.cycling74.com/reference/matrixctrl) | Matrix switch control |
| [pictctrl](https://docs.cycling74.com/reference/pictctrl) | Picture-based control |
| [pictslider](https://docs.cycling74.com/reference/pictslider) | Picture-based slider control |
| [textbutton](https://docs.cycling74.com/reference/textbutton) | Button with text |
| [ubutton](https://docs.cycling74.com/reference/ubutton) | Transparent button |
