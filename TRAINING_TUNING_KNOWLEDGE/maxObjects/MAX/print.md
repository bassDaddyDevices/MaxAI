---
type: max
name: "print"
summary: "Print any message in the Max Console"
signal: false
url: "https://docs.cycling74.com/reference/print/"
package: "Max"
see_also: ["console"]
---
# print

Print any message in the Max Console

## Description

[print](https://docs.cycling74.com/reference/print) will print any input into the Max Console for debugging, messaging, or analysis purposes. Selecting "Show Output" from the Object Action Menu opens the sidebar Max console and filters output to only show posts from the [print](https://docs.cycling74.com/reference/print) object.

## Arguments

### identifier[anything] optional

The argument is an identifier for the [print](https://docs.cycling74.com/reference/print) object. Each message printed in the Max Console is preceded by the name of the [print](https://docs.cycling74.com/reference/print) object. The name can be either a number or a word. If there is no argument, the name of the [print](https://docs.cycling74.com/reference/print) object is  print . Using an argument to [print](https://docs.cycling74.com/reference/print) can help distinguish the output of two or more [print](https://docs.cycling74.com/reference/print) objects.

## Attributes

### bettersymquotes[int]: 0

When enabled, numerical symbols will be quoted in the Max Console (e.g. "3.14", and quoted symbols will be enslashed (e.g.  \"3.14\") for clarity. When disabled (default), the legacy behavior will be used (numerical symbols will be unquoted, quoted symbols will not display slashes).

### deltatime[int]: 0

Print Time Between Messages

### floatprecision[int]: 0

Selects regular, low, or high precision float display

Possible values:

0 = 'regular'

1 = 'low'

2 = 'high'

### level[int]: 0

Selects the style of text displayed in the Max Console. Except for the  Error  style, these styles are only used for display, and have no additional meaning in Max. Messages displayed using the  Error  style will also appear at any [error](https://docs.cycling74.com/reference/error) objects in the patcher.

Four styles are available: Print (0), Warn (1), Error (2), Bug (3)

Possible values:

0 = 'Print'
(
Normal (default)
)
In Max 8's default theme, white text against the default (dark) background.

1 = 'Warn'
(
Warning
)
In Max 8's default theme, green text against the default (dark) background.

2 = 'Error'
(
Error
)
In Max 8's default theme, white text against a red background.

3 = 'Bug'
(
Bug
)
In Max 8's default theme, blue text against the default (dark) background.

### popup[int]: 0

Popup When Message Received

### time[int]: 0

Prints scheduler time before message

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Performs the same function as  anything .

### int

Performs the same function as  anything .

Arguments:

- input
  [int]

### float

Performs the same function as  anything .

Arguments:

- input
  [float]

### list

Performs the same function as  anything .

Arguments:

- input
  [list]

### anything

Messages are not interpreted by the [print](https://docs.cycling74.com/reference/print) object. They are simply printed verbatim in the Max Console.

Arguments:

- input
  [list]

### array

Sending an array to [print](https://docs.cycling74.com/reference/print) will display the contents of the array in the console as though it were a single line.

Arguments:

- array
  [symbol]

### (mouse)

Double-clicking on any [print](https://docs.cycling74.com/reference/print) object opens the Max Console or brings it to the front.

### dictionary

Sending a dictionary to [print](https://docs.cycling74.com/reference/print) will display the fully expanded contents of the dictionary in the console as though it were a single line.

Arguments:

- dict
  [symbol]

### string

Sending a string object to [print](https://docs.cycling74.com/reference/print) will display the contents of the string in the console on a single line.

Arguments:

- string
  [symbol]

## Output

### anything

There are no outlets. The message received in the inlet is printed in the Max Console.

## See Also

| Name | Description |
| --- | --- |
| [console](https://docs.cycling74.com/reference/console) | Console Output in Patcher |
