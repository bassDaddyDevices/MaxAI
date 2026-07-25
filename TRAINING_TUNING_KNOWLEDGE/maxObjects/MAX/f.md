---
type: max
name: "f"
summary: "Store a decimal number"
signal: false
url: "https://docs.cycling74.com/reference/f/"
package: "Max"
see_also: ["int", "pv", "value"]
---
# f

Store a decimal number

## Description

[float](https://docs.cycling74.com/reference/float) can store and output any given floating-point number.

## Arguments

### initial-value[float] optional

Sets an initial value to be stored in [float](https://docs.cycling74.com/reference/float). If there is no argument, the initial value is  0.0 . A float argument by itself, without the word  float , is another way of creating and initializing a [float](https://docs.cycling74.com/reference/float) object.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

In left inlet: Sends the stored value out the outlet.

### int

Converted to  float .

Arguments:

- input
  [int]

### (inlet1)

In right inlet: The number replaces the stored value without triggering output.

Arguments:

- set-input
  [float]

### float

In left inlet: The number replaces the currently stored value and is sent out the outlet.

Arguments:

- input
  [float]

### send

In left inlet: The word  send , followed by a name of a [receive](https://docs.cycling74.com/reference/receive) object, sends the number stored in the [float](https://docs.cycling74.com/reference/float) object to all [receive](https://docs.cycling74.com/reference/receive) objects with that name, without sending it out the [float](https://docs.cycling74.com/reference/float) object's outlet.

Arguments:

- receive-object-name
  [list]

### set

In left inlet: The word  set , followed by a number, replaces the stored value without triggering output.

Arguments:

- set-input
  [float]

## Output

### float

A number is stored in [float](https://docs.cycling74.com/reference/float) as a single-precision floating point number. The precision possible in the decimal portion of the number decreases as the integer part increases. Note: Because of the way decimal numbers are stored, a float value saved in a patcher file might be slightly altered when the file is reopened.

## See Also

| Name | Description |
| --- | --- |
| [int](https://docs.cycling74.com/reference/int) | Store an integer value |
| [pv](https://docs.cycling74.com/reference/pv) | Share data within a patch hierarchy |
| [value](https://docs.cycling74.com/reference/value) | Share data between other value objects |
