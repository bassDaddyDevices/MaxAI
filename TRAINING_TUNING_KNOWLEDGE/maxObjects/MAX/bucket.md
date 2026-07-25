---
type: max
name: "bucket"
summary: "Pass numbers from outlet to outlet"
signal: false
url: "https://docs.cycling74.com/reference/bucket/"
package: "Max"
see_also: ["cycle", "decode", "gate", "spray"]
---
# bucket

Pass numbers from outlet to outlet

## Description

Outputs incoming values to outlets in bucket-brigade fashion. [bucket](https://docs.cycling74.com/reference/bucket) acts as an n-stage shift register which can shift its contents from outlet to outlet in either direction.

## Arguments

### outlets[int] optional

Sets the number of outlets. If there is no argument, there will be one outlet.

### output-flag[int] optional

A second non-zero argument sets the [bucket](https://docs.cycling74.com/reference/bucket) object to "echo to output" mode, whereby the number received in the inlet is stored and sent out the left outlet when it is received. This makes it somewhat easier to visualize the data coming from the outlets.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

All stored values are sent out, but their position is not shifted.

### int

The numbers currently stored in [bucket](https://docs.cycling74.com/reference/bucket) are sent out, then each number is moved one outlet to the right and the new number is stored to be sent out the left outlet the next time a number is received.

Arguments:

- input
  [int]

### float

The numbers currently stored in [bucket](https://docs.cycling74.com/reference/bucket) are sent out, then each number is moved one outlet to the right and the new number is stored to be sent out the left outlet the next time a number is received.

Arguments:

- input
  [float]

### L2R

Sets [bucket](https://docs.cycling74.com/reference/bucket) to shift its stored values from left to right (the default) whenever it receives a number in its inlet.

### R2L

Sets [bucket](https://docs.cycling74.com/reference/bucket) to shift its stored values from right to left whenever it receives a number in its inlet, placing the incoming number in the rightmost outlet.

### clear

The  clear  message resets the internal values of [bucket](https://docs.cycling74.com/reference/bucket) without causing any output.

### freeze

Suspends the [bucket](https://docs.cycling74.com/reference/bucket) output, but new incoming numbers continue to shift the stored values internally.

### l2r

Sets [bucket](https://docs.cycling74.com/reference/bucket) to shift its stored values from left to right (the default) whenever it receives a number in its inlet.

### r2l

Sets [bucket](https://docs.cycling74.com/reference/bucket) to shift its stored values from right to left whenever it receives a number in its inlet, placing the incoming number in the rightmost outlet.

### roll

The word  roll , followed by any number, causes [bucket](https://docs.cycling74.com/reference/bucket) to use the value stored in its rightmost outlet as input; thus, it sends its output, shifts all stored values to the right, then stores the value which had been in the rightmost outlet in the leftmost outlet (as if it had been received in the inlet).

### set

The word  set , followed by a number, sends that number out each outlet, and stores the number as the next value to be sent out each of its outlets.

Arguments:

- input
  [number]

### thaw

Resumes [bucket](https://docs.cycling74.com/reference/bucket) output.

## Output

### int or float

When a number is received, it is not sent out immediately, but the numbers stored in [bucket](https://docs.cycling74.com/reference/bucket) are sent out. The numbers are all moved one outlet to the right, and the newly received number is stored in the left position. When using the "echo to output" mode (set with a non-zero second argument to the object) the number received is sent out immediately, instead of the previous input value.

## See Also

| Name | Description |
| --- | --- |
| [cycle](https://docs.cycling74.com/reference/cycle) | Round-robin messages to outlets |
| [decode](https://docs.cycling74.com/reference/decode) | Send 1 or 0 out a specific outlet |
| [gate](https://docs.cycling74.com/reference/gate) | Pass input to an outlet |
| [spray](https://docs.cycling74.com/reference/spray) | Distribute a value to a numbered outlet |
