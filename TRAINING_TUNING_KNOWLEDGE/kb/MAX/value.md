---
type: max
name: "value"
summary: "Share data between other value objects"
signal: false
url: "https://docs.cycling74.com/reference/value/"
package: "Max"
see_also: ["float", "int", "pv", "pvar", "send", "receive"]
---
# value

Share data between other value objects

## Description

Shares data with other [value](https://docs.cycling74.com/reference/value) objects of the same name. If you send a message (number, list, or anything else) to one value object, it is set for all value objects with the same 'name' argument. You can get the contents out of a particular [value](https://docs.cycling74.com/reference/value) object by sending it a  bang .

## Arguments

### name[symbol] optional

Sets the name of the [value](https://docs.cycling74.com/reference/value) object. Other [value](https://docs.cycling74.com/reference/value) objects with the same name will share it's contents.

### initial[anything] optional

Additional arguments after the naming symbol initialize the contents of [value](https://docs.cycling74.com/reference/value). If no additional arguments are present, [value](https://docs.cycling74.com/reference/value) contains nothing.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Sends out the stored message.

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

The message is stored, to be shared by all other [value](https://docs.cycling74.com/reference/value) objects with the same name, even if they are in another patch. A message received in any other [value](https://docs.cycling74.com/reference/value) object that has the same name will change the stored value.

Arguments:

- input
  [list]

### (mouse)

Double-clicking on a [value](https://docs.cycling74.com/reference/value) object opens all windows containing [value](https://docs.cycling74.com/reference/value) objects with the same name.

### symbol

Performs the same function as  anything .

Arguments:

- input
  [symbol]

## Output

### any message

bang  in the inlet causes the stored message to be sent out.

## See Also

| Name | Description |
| --- | --- |
| [float](https://docs.cycling74.com/reference/float) | Store a decimal number |
| [int](https://docs.cycling74.com/reference/int) | Store an integer value |
| [pv](https://docs.cycling74.com/reference/pv) | Share data within a patch hierarchy |
| [pvar](https://docs.cycling74.com/reference/pvar) | Connect to a named object in a patcher |
| [send](https://docs.cycling74.com/reference/send) | Send messages without patch cords |
| [receive](https://docs.cycling74.com/reference/receive) | Receive messages without patch cords |
