---
type: ableton
name: "live.comment"
summary: "Explanatory note or label"
signal: false
url: "https://docs.cycling74.com/reference/live.comment/"
package: "Max"
see_also: ["ubutton", "textedit", "message", "textbutton", "live.comment"]
---
# live.comment

Explanatory note or label

## Description

[comment](https://docs.cycling74.com/reference/comment) displays text which is typed into it in order to serve as a label or explanatory text.

## Arguments

None.

## Attributes

### bgcolor[4 floats]

Sets the background color of the comment box in RGBA format. The  bgcolor  attribute is mapped to the  clearcolor  style color.

### bubble[int]: 0

Enable bubble comments

### bubble\_bgcolor[4 floats]

Bubble Background Color

### bubble\_outlinecolor[4 floats]

Bubble Outline Color

### bubblepoint[float]: 0.5

Bubble Arrow Point (0-1)

### bubbleside[int]: 1

Sets the side from which the arrow will originate on bubble comments.

Possible values:

0 = 'Top'

1 = 'Left'

2 = 'Bottom'

3 = 'Right'

### bubbletextmargin[int]: 5

Bubble Text Margin

### bubbleusescolors[int]: 0 >= 8.0.0

Turns on drawing the bubble outline and background in the comment's textcolor and bgcolor.

### style[symbol]: >= 7.0.0

Sets the [style](https://docs.cycling74.com/userguide/styles) to be applied to the object. Styles can be set using the [Format Palette](https://docs.cycling74.com/userguide/format_palette).

### suppressinlet[int]: 0 >= 7.1.0

Suppress the display of an inlet.

### underline[int]: 0

Toggles underlining the comment's text. This value can only be set using the Underline setting in the [comment](https://docs.cycling74.com/reference/comment) object's Inspector.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### append

The word  append  followed by any message will set the [comment](https://docs.cycling74.com/reference/comment) object to display that message after any text which it already contains.

Arguments:

- message
  [list]

### prepend

The word  prepend  followed by any message will set the [comment](https://docs.cycling74.com/reference/comment) object to display that message before any text which it already contains.

Arguments:

- message
  [list]

### set

The word  set  followed by any message will set the [comment](https://docs.cycling74.com/reference/comment) object to display that message.

Arguments:

- message
  [list]

### setwithtruncation

The word  set  followed by a symbol and a width (in pixels) will truncate the symbol to the given width. An optional third symbol will be appended onto the truncated text.

Arguments:

- message
  [symbol]
- width
  [int]
- suffix
  [symbol]

### string

TEXT\_HERE

## Menu Items

### Color

Choosing the  **Color...**  menu item from the  **Object**  menu when the object is selected opens a [color picker](https://docs.cycling74.com/documentation/color_palette.maxvig.xml), permitting adjustment to the appearance of the [comment](https://docs.cycling74.com/reference/comment) object.

## Output

### (visual)

[comment](https://docs.cycling74.com/reference/comment) has no outlets, sends no output, and does not affect patch functionality.

## See Also

| Name | Description |
| --- | --- |
| [ubutton](https://docs.cycling74.com/reference/ubutton) | Transparent button |
| [textedit](https://docs.cycling74.com/reference/textedit) | Enter text |
| [message](https://docs.cycling74.com/reference/message) | Send any message |
| [textbutton](https://docs.cycling74.com/reference/textbutton) | Button with text |
| [live.comment](https://docs.cycling74.com/reference/live.comment) | Explanatory note or label (Max for Live) |
