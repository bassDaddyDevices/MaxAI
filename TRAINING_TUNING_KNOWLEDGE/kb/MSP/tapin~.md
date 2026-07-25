---
type: msp
name: "tapin~"
summary: "Input to a delay line"
signal: true
url: "https://docs.cycling74.com/reference/tapin~/"
package: "MSP"
see_also: ["delay~", "tapout~"]
---
# tapin~

Input to a delay line

## Description

[tapin~](https://docs.cycling74.com/reference/tapin~) receives a signal in and copies into a delay line. Using [tapout~](https://docs.cycling74.com/reference/tapout~) objects, you can read from the delay line at various delay times. You must connect the outlet of a [tapin~](https://docs.cycling74.com/reference/tapin~) object to the [tapout~](https://docs.cycling74.com/reference/tapout~) objects you want to use with the delay line. Note that this is not a signal connection, since no signal travels between the objects. It is merely a way to indicate that the objects share the same delay memory.

## Arguments

### maximum-delay[number]ms optional

The maximum delay time in milliseconds. This determines the size of the delay line memory. If the sampling rate is increased after the object has been created, [tapin~](https://docs.cycling74.com/reference/tapin~) will attempt to resize the delay line. If no argument is present, the default maximum delay time is 100 milliseconds.

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

The word  freeze  followed by a non-zero number will cause [tapin~](https://docs.cycling74.com/reference/tapin~) to freeze its buffer memory. This means the object will keep echoing out of its output what has already been recorded into its memory at the point of freezing and no further input will be recorded. The word  freeze  followed by a 0 will reset the object to its default state of constantly recording and rerecording any given input into its memory buffer and outputting it after the specified delay time.

Arguments:

- behavioral-flag (0 or nonzero)
  [int]

### signal

The signal is written into a delay line that can be read by the [tapout~](https://docs.cycling74.com/reference/tapout~) object.

## Output

### tap

In order for the delay line to function, the outlet of [tapin~](https://docs.cycling74.com/reference/tapin~) must be connected to the left inlet of [tapout~](https://docs.cycling74.com/reference/tapout~). It cannot be connected to any other object.

## See Also

| Name | Description |
| --- | --- |
| [delay~](https://docs.cycling74.com/reference/delay~) | Delay a signal |
| [tapout~](https://docs.cycling74.com/reference/tapout~) | Output from a delay line |
