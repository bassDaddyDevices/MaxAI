---
type: max
name: "dict.view"
summary: "View the contents of a dictionary"
signal: false
url: "https://docs.cycling74.com/reference/dict.view/"
package: "Max"
see_also: ["Dictionaries", "dict", "dict.print"]
---
# dict.view

View the contents of a dictionary

## Description

Use the [dict.view](https://docs.cycling74.com/reference/dict.view) object to view the contents of a dictionary.

## Arguments

None.

## Attributes

### bgcolor[4 floats] >= 7.0.0

Sets the display color for even numbered rows using the RGBA format in the range 0. - 1.

### stripecolor[4 floats] >= 7.0.0

Sets the display color for odd numbered rows using the RGBA format in the range 0. - 1.

### style[symbol]: >= 7.0.0

Sets the [style](https://docs.cycling74.com/userguide/styles) to be applied to the object. Styles can be set using the [Format Palette](https://docs.cycling74.com/userguide/format_palette).

### textcolor[4 floats] >= 7.0.0

Sets the display color for text using the RGBA format in the range 0. - 1.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Refresh the display

### dictionary

Display a dictionary.

Arguments:

- name
  [symbol]

### expand

The word  expand , when followed by a number, sets the display of [dict.view](https://docs.cycling74.com/reference/dict.view) to show the specified level of hierarchy.  expand 0  will collapse all levels;  expand 1  will expand only the first level, etc.

When  expand  is followed by the name of a key associated with a sub-dictionary, [dict.view](https://docs.cycling74.com/reference/dict.view) will expand the associated dictionary. If multiple dictionaries are associated with the key argument to  expand  only the first one encountered will be expanded.

Arguments:

- level
  [int]

### expandall

The word  expandall  expands [dict.view](https://docs.cycling74.com/reference/dict.view) to show all levels of all sub-dictionaries.

### (mouse)

Clicking on a triangle will expand or collapse that element in the dictionary hierarchy. You can scroll the view of the dictionary using the mousewheel or trackpad or by clicking and dragging the scrollbar on the right.

## See Also

| Name | Description |
| --- | --- |
| [Dictionaries](https://docs.cycling74.com/userguide/dictionaries) | Dictionaries |
| [dict](https://docs.cycling74.com/reference/dict) | Create and access dictionaries |
| [dict.print](https://docs.cycling74.com/reference/dict.print) | Post a dictionary to the Max Console |
