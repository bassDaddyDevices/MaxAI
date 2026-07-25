---
type: max
name: "message"
summary: "Send any message"
signal: false
url: "https://docs.cycling74.com/reference/message/"
package: "Max"
see_also: ["append", "atoi", "comment", "itoa", "jit.cellblock", "prepend", "receive"]
---
# message

Send any message

## Description

[message](https://docs.cycling74.com/reference/message) displays and sends any given message with the capability to handle specified arguments.

## Arguments

### message[list] optional

The initial contents of the [message](https://docs.cycling74.com/reference/message) box are typed in when the patcher window is unlocked. Any message can be contained in a [message](https://docs.cycling74.com/reference/message) box. Certain characters have special meaning.

### changeable-arg[symbol] optional

A dollar sign ( $ ), followed immediately by a number in the range 1-9, is a changeable argument. This argument's value can be replaced by the corresponding item in a list received in the inlet. (Example:  $2  stores the second item in a list as its value before sending out the contents of the [message](https://docs.cycling74.com/reference/message) box .) The value of a changeable argument is initially  0 .

### comma[symbol] optional

A comma (, ) divides a message into separate messages which will be sent out in order. (Example:  3, 4, 5  sends out  3 , then  4 , then  5 .)

### backslash[symbol] optional

A backslash ( \ ) is used to negate (escape) the traits of a special character. When a backslash immediately precedes a dollar sign, comma, or semicolon, the character is treated as a normal character. (Example:  Notes played were C\, E\, and G .)

## Attributes

### bgfillcolor[4 floats] >= 7.0.0

Sets the background color of the [message](https://docs.cycling74.com/reference/message) box in RGBA format. The [message](https://docs.cycling74.com/reference/message) box can be configured to display a gradient background color using the [format palette](https://docs.cycling74.com/userguide/format_palette).

### convertobj[int]: 0

Alias:
parseobj

When convertobj is enabled, messages containing dictionaries, arrays or strings sent to the right inlet of [message](https://docs.cycling74.com/reference/message) will be converted to text representations rather than object references. As an example, an array consisting of the values 1, 2, and 3 will set the [message](https://docs.cycling74.com/reference/message) contents to  1 2 3  when convertobj is enabled and something like  array u821001852  (the exact number will vary) when convertobj is disabled.

### dontreplace[int]: 0 >= 7.0.4

When dontreplace is enabled, the [message](https://docs.cycling74.com/reference/message) box will not have any text in it when loading a file or pasting from the clipboard. This can be useful if you want to use the object to display incoming messages or data.

### style[symbol]: >= 7.0.0

Sets the [style](https://docs.cycling74.com/userguide/styles) to be applied to the object. Styles can be set using the [Format Palette](https://docs.cycling74.com/userguide/format_palette).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

In left inlet: Sends out the contents of the [message](https://docs.cycling74.com/reference/message) box. A mouse click on the [message](https://docs.cycling74.com/reference/message) box has the same effect.

In right inlet: Sets the contents of the [message](https://docs.cycling74.com/reference/message) box to 'bang' without triggering output.

### int

In left inlet: The number replaces the value stored in the argument  $1 , if such an argument exists, then sends out the contents of the [message](https://docs.cycling74.com/reference/message) box.

In right inlet: Sets the contents of the [message](https://docs.cycling74.com/reference/message) box without triggering output.

Arguments:

- input
  [int]

### float

In left inlet: The number replaces the value stored in the argument  $1 , if such an argument exists, then sends out the contents of the [message](https://docs.cycling74.com/reference/message) box.

In right inlet: Sets the contents of the [message](https://docs.cycling74.com/reference/message) box without triggering output.

Arguments:

- input
  [float]

### list

Each item in the list replaces the value of its corresponding  $  argument, if such an argument exists, then sends out the contents of the [message](https://docs.cycling74.com/reference/message) box.

In right inlet: Sets the contents of the [message](https://docs.cycling74.com/reference/message) box without triggering output.

Arguments:

- input
  [list]

### anything

See the  list  listing

Arguments:

- message
  [list]

### append

The word  append  followed by any message will set the [message](https://docs.cycling74.com/reference/message) box to display that message after any text which it already contains without triggering output.

Arguments:

- message
  [list]

### (mouse)

A mouse click on a [message](https://docs.cycling74.com/reference/message) box sends its contents out the object's outlet.

### prepend

The word  prepend  followed by any message will set the [message](https://docs.cycling74.com/reference/message) box to display that message before any text which it already contains without triggering output.

Arguments:

- message
  [list]

### set

The word  set , followed by a message, sets the contents of the [message](https://docs.cycling74.com/reference/message) box to that new message, without triggering output. The word  set  by itself clears the contents of the [message](https://docs.cycling74.com/reference/message) box .

Arguments:

- message
  [list]

### setargs

The word  setargs , followed by a message, sets the changeable argument(s) (e.g. $1) of the receiving [message](https://docs.cycling74.com/reference/message) box, without triggering output.

Arguments:

- message
  [list]

### symbol

In left inlet: The symbol replaces the value stored in the argument  $1 , if such an argument exists, then sends out the contents of the [message](https://docs.cycling74.com/reference/message) box.

In right inlet: Sets the contents of the [message](https://docs.cycling74.com/reference/message) box without triggering output.

Arguments:

- input
  [symbol]

## Menu Items

### Color

Choosing the  **Color...**  menu item from the  **Object**  menu when the object is selected opens a [color picker](https://docs.cycling74.com/documentation/color_palette.maxvig.xml), permitting adjustment to the appearance of the [message box](https://docs.cycling74.com/reference/message).

## Output

### anything

The contents of the [message](https://docs.cycling74.com/reference/message) box are sent out the outlet. If a semicolon is present, the rest of the message (or up to the next semicolon) is sent to the specified [receive](https://docs.cycling74.com/reference/receive) object, rather than out the outlet.

## See Also

| Name | Description |
| --- | --- |
| [append](https://docs.cycling74.com/reference/append) | Append arguments to the end of a message |
| [atoi](https://docs.cycling74.com/reference/atoi) | Convert characters to integers |
| [comment](https://docs.cycling74.com/reference/comment) | Explanatory note or label |
| [itoa](https://docs.cycling74.com/reference/itoa) | Convert character codes to symbol |
| [jit.cellblock](https://docs.cycling74.com/reference/jit.cellblock) | Edit rows and columns of data |
| [prepend](https://docs.cycling74.com/reference/prepend) | Add a message in front of input |
| [receive](https://docs.cycling74.com/reference/receive) | Receive messages without patch cords |
