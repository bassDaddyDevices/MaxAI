---
type: mc
name: "mc.tapin~"
summary: "Input to a delay line"
signal: true
url: "https://docs.cycling74.com/reference/mc.tapin~/"
package: "MC"
see_also: ["delay~", "mc.tapout~", "tapin~", "tapout~"]
---
# mc.tapin~

Input to a delay line

## Description

[mc.tapin~](https://docs.cycling74.com/reference/mc.tapin~) receives a multichannel in and copies into a delay line. Using [mc.tapout~](https://docs.cycling74.com/reference/mc.tapout~), you can read from the delay line at various delay times. You must connect the outlet of an [mc.tapin~](https://docs.cycling74.com/reference/mc.tapin~) object to the [mc.tapout~](https://docs.cycling74.com/reference/mc.tapout~) object you want to use with the delay line. Note that this is not a signal connection, since no signal travels between the objects. It is merely a way to indicate that the objects share the same delay memory.

## Arguments

### maximum-delay[number]ms optional

The maximum delay time in milliseconds. This determines the size of the delay line memory. If the sampling rate is increased after the object has been created, [mc.tapin~](https://docs.cycling74.com/reference/mc.tapin~) will attempt to resize the delay line. If no argument is present, the default maximum delay time is 100 milliseconds.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

In left inlet: An  int  resizes the delay line memory with the new maximum delay time specified in milliseconds (this clears the memory of the delay line, which may produce a click in the output).

Arguments:

- memory-size
  [int]

### float

In left inlet: A  float  resizes the delay line memory with the new maximum delay time specified in milliseconds (this clears the memory of the delay line, which may produce a click in the output).

Arguments:

- memory-size
  [float]

### clear

Clears the memory of the delay line (which may produce a click in the output).

### freeze

The word  freeze  followed by a non-zero number will cause [mc.tapin~](https://docs.cycling74.com/reference/mc.tapin~) to freeze its buffer memory. This means the object will keep echoing out of its output what has already been recorded into its memory at the point of freezing and no further input will be recorded. The word  freeze  followed by a 0 will reset the object to its default state of constantly recording and rerecording any given input into its memory buffer and outputting it after the specified delay time.

Arguments:

- behavioral-flag (0 or nonzero)
  [int]

### signal

The signal is written into a delay line that can be read by the [mc.tapout~](https://docs.cycling74.com/reference/mc.tapout~) object.

## Output

### tap

In order for the delay line to function, the outlet of [mc.tapin~](https://docs.cycling74.com/reference/mc.tapin~) must be connected to the left inlet of [mc.tapout~](https://docs.cycling74.com/reference/mc.tapout~). It cannot be connected to any other object.

## See Also

| Name | Description |
| --- | --- |
| [delay~](https://docs.cycling74.com/reference/delay~) | Delay a signal |
| [mc.tapout~](https://docs.cycling74.com/reference/mc.tapout~) | Output from a delay line |
| [tapin~](https://docs.cycling74.com/reference/tapin~) | Input to a delay line |
| [tapout~](https://docs.cycling74.com/reference/tapout~) | Output from a delay line |
