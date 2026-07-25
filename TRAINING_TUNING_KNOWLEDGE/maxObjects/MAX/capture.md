---
type: max
name: "capture"
summary: "Store values to view or edit"
signal: false
url: "https://docs.cycling74.com/reference/capture/"
package: "Max"
see_also: ["itable", "text"]
---
# capture

Store values to view or edit

## Description

Stores items in the order they are received for viewing, editing, and saving.

## Arguments

### maximum[int] optional

The first argument sets a maximum number of items to store. If there is no argument, [capture](https://docs.cycling74.com/reference/capture) will store up to 512 items. Once the maximum has been exceeded, the earliest stored item is dropped as each new item is received.

### display-format[symbol] optional

If the second argument is  a , all items will be displayed in ASCII form in the editing window. If the second argument is  x , all numbers will be displayed in hexadecimal form in the editing window. If the second argument is  m , numbers less than 128 are displayed in decimal, and numbers greater than 128 are in hexadecimal. If there is no argument, all items are displayed in decimal.

## Attributes

### listout[int]: 0

When enabled, the [capture](https://docs.cycling74.com/reference/capture) object will dump its contents as a list. Otherwise the object sends its contents one item at a time. Default = 0.

### precision[int]: 4

Floating-point precision to use when printing floating-point numbers to the [capture](https://docs.cycling74.com/reference/capture) object's window. Default = 4.

### size[atom\_long]: 512

The maximum number of items which can be stored in the [capture](https://docs.cycling74.com/reference/capture) object's internal buffer. When resized, the object will attempt to retain the existing captured data. If the current capture position is already greater than the new size (if the buffer size is reduced), it will be reset to 0. Default = 512.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

Numbers or symbols are stored in the order in which they are received.

Arguments:

- input
  [int]

### float

Numbers or symbols are stored in the order in which they are received.

Arguments:

- input
  [float]

### list

All numbers and/or symbols in the list are stored in order from first to last.

Arguments:

- input
  [list]

### anything

All numbers and/or symbols are stored in order from first to last.

Arguments:

- input
  [list]

### clear

Erases the contents of a [capture](https://docs.cycling74.com/reference/capture) object.

### count

Sends the number of items collected since the last  count  message out the right outlet of the [capture](https://docs.cycling74.com/reference/capture) object. Upon receipt of the  count  message, the object's internal count will be reset to 0 unless  flag  is set.

Arguments:

- flag
  [int]

### (mouse)

Double-clicking on the object in a locked patcher will open a window which displays all values stored internally.

### dump

Outputs the contents of the [capture](https://docs.cycling74.com/reference/capture) object, one item at a time, out the left outlet.

### open

Causes the window associated with the [capture](https://docs.cycling74.com/reference/capture) object to become visible. The window is also brought to the front. Double-clicking on the [capture](https://docs.cycling74.com/reference/capture) object in a locked patcher has the same effect.

### wclose

Closes the window associated with the [capture](https://docs.cycling74.com/reference/capture) object.

### write

The word  write , followed by a symbol, saves the contents of the [capture](https://docs.cycling74.com/reference/capture) object into a text file, using the symbol as the filename.

Arguments:

- filename
  [symbol]

## Output

### int

Out right outlet: The number of items received since last  count  message was received is sent out the right outlet in response to a  count  message.

### int, float, symbol

Out left outlet: The captured contents are sent out the left outlet, one at a time, in response to the  dump  message.

Double-clicking on [capture](https://docs.cycling74.com/reference/capture) (when the patcher window is locked) opens an editing window in which the stored numbers can be viewed and edited. Editing the window does not actually alter the contents of capture, but is useful for cutting and pasting values into a [table](https://docs.cycling74.com/reference/table) or a separate file. (Although [capture](https://docs.cycling74.com/reference/capture) can continue to store items while the editing window is open, the editing window is not updated. It must be closed and reopened to view the newly stored items.)

## See Also

| Name | Description |
| --- | --- |
| [itable](https://docs.cycling74.com/reference/itable) | Data table editor |
| [text](https://docs.cycling74.com/reference/text) | Format messages as a text file |
