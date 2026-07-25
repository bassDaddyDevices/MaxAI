---
type: max
name: "i"
summary: "Store an integer value"
signal: false
url: "https://docs.cycling74.com/reference/i/"
package: "Max"
see_also: ["float", "pv", "value"]
---
# i

Store an integer value

## Description

[int](https://docs.cycling74.com/reference/int) can store and output any given integer number.

## Arguments

### initial-value[number] optional

Sets an initial value to be stored in [int](https://docs.cycling74.com/reference/int). If there is no argument, the initial value is 0. An int argument by itself, without the word  int , is another way of creating and initializing an  **int**  object. Float values are converted to integers.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

In left inlet: Sends the stored value out the outlet.

### int

In left inlet: The number replaces the currently stored value and is sent out the outlet.

Arguments:

- input
  [int]

### (inlet1)

In right inlet: The number replaces the stored value without triggering output.

Arguments:

- set-input
  [int]

### float

Converted to  int .

Arguments:

- input
  [float]

### send

In left inlet: The word  send , followed by the name of a [receive](https://docs.cycling74.com/reference/receive) object, sends the value stored in [int](https://docs.cycling74.com/reference/int) to all [receive](https://docs.cycling74.com/reference/receive) objects with that name, without sending it out the outlet of the  **int** .

Arguments:

- receive-object-name
  [list]

### set

In left inlet: The word  set , followed by a number, replaces the stored value without triggering output.

Arguments:

- set-input
  [int]

## Output

### int

A number is stored in (and output from)  **int**  as a long (32-bit) integer.

## See Also

| Name | Description |
| --- | --- |
| [float](https://docs.cycling74.com/reference/float) | Store a decimal number |
| [pv](https://docs.cycling74.com/reference/pv) | Share data within a patch hierarchy |
| [value](https://docs.cycling74.com/reference/value) | Share data between other value objects |
