---
type: max
name: "cycle"
summary: "Round-robin messages to outlets"
signal: false
url: "https://docs.cycling74.com/reference/cycle/"
package: "Max"
see_also: ["bucket", "counter", "spell", "spray"]
---
# cycle

Round-robin messages to outlets

## Description

Each incoming number is sent to the next outlet, wrapping around to the first outlet after the last has been reached.

## Arguments

### outlets[int] optional

Determines the number of outlets. If there is no argument, there will be one outlet.

### mode[int] optional

Sets the output mode. If it is non-zero, [cycle](https://docs.cycling74.com/reference/cycle) detects separate "events" and restarts at the leftmost outlet when a new event occurs. Examples of separate events include messages with delays between them, and messages triggered by successive mouse clicks or MIDI events. A stream of items separated by commas in a message box is considered a single event. If this argument is not present or is  0 , the values cycle through all the outlets, regardless of whether they are attached to separate events or not.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Sends a bang to the next outlet.

### int

The input to be directed to successive outlets.

Arguments:

- input
  [int]

### float

The input to be directed to successive outlets.

Arguments:

- input
  [float]

### list

The stream of ints, floats, or symbols to be directed to successive outlets.

Arguments:

- input
  [list]

### anything

The stream of ints, floats, or symbols to be directed to successive outlets.

Arguments:

- input
  [list]

### set

The word  set , followed by a number, specifies an outlet to which the next input should be directed, if in cycle mode. Outlets are numbered beginning with 0; if an outlet number is specified that does not actually exist, the message is ignored. (This message has no effect when [cycle](https://docs.cycling74.com/reference/cycle) is in event-sensitive mode, in which case each message is always sent out beginning at the leftmost outlet.)

Arguments:

- outlet number
  [int]

### symbol

The stream of ints, floats, or symbols to be directed to successive outlets.

Arguments:

- input
  [symbol]

### thresh

The word  thresh , followed by a number, sets the output mode, in the same way as the second typed-in argument. If the number is non-zero, [cycle](https://docs.cycling74.com/reference/cycle) will detect separate "events" and restart at the leftmost outlet whenever a new event occurs. If the number is  0 , each number received will be directed to the next outlet in the cycle.

Arguments:

- mode
  [int]

## Output

### anything

Out any outlet: In cycle mode, each successive int, float, or symbol received, either separately or as part of a list, is directed to an outlet to the right of the previous number. When the cycle reaches the rightmost outlet, the next number is sent out the left outlet.

In event-sensitive mode, any int, float, or symbol which is a new event restarts the output at the left outlet.

## See Also

| Name | Description |
| --- | --- |
| [bucket](https://docs.cycling74.com/reference/bucket) | Pass numbers from outlet to outlet |
| [counter](https://docs.cycling74.com/reference/counter) | Keep count based on bang messages |
| [spell](https://docs.cycling74.com/reference/spell) | Convert input to UTF-8 (Unicode) codes |
| [spray](https://docs.cycling74.com/reference/spray) | Distribute a value to a numbered outlet |
