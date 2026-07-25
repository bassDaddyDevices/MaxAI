---
type: max
name: "pv"
summary: "Share data within a patch hierarchy"
signal: false
url: "https://docs.cycling74.com/reference/pv/"
package: "Max"
see_also: ["float", "int", "pvar", "receive", "send", "value"]
---
# pv

Share data within a patch hierarchy

## Description

Creates a value that is shared between objects, but only within a single patcher. Unlike the [value](https://docs.cycling74.com/reference/value) object, [pv](https://docs.cycling74.com/reference/pv) objects that share the same name only share the same value if they are in the same patcher, or one of its subpatches.

#### Discussion

The [pv](https://docs.cycling74.com/reference/pv) also object cannot be the receiver of a message sent remotely by a [message](https://docs.cycling74.com/reference/message) box (the first symbol after a semicolon).

## Arguments

### name[symbol] optional

Obligatory. The first argument provides an identifying name. All [pv](https://docs.cycling74.com/reference/pv) objects with that name within the patcher will share the same value.

### message[anything] optional

Any message typed in after the first argument initializes the stored contents of the [pv](https://docs.cycling74.com/reference/pv) object. Note that when two or more [pv](https://docs.cycling74.com/reference/pv) objects in a patcher file that share the same name are initialized to different values, the one which is initialized last determines the value. Since the order in which [pv](https://docs.cycling74.com/reference/pv) objects will be initialized cannot be precisely determined, the best practice is to initialize only one of the related [pv](https://docs.cycling74.com/reference/pv) objects.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Sends out the stored message.

### int

Performs the same as the  anything  message.

Arguments:

- input
  [int]

### float

Performs the same as the  anything  message.

Arguments:

- input
  [float]

### list

Performs the same as the  anything  message.

Arguments:

- input
  [list]

### anything

The message is stored, to be shared by all other [pv](https://docs.cycling74.com/reference/pv) objects of the same name that are inside the object's patcher or its subpatches (or, if in a subpatch, its parent patch). A message received in any other such [pv](https://docs.cycling74.com/reference/pv) object will change the stored message.

Arguments:

- input
  [list]

### status

Posts information about the communications between all [pv](https://docs.cycling74.com/reference/pv) objects involved in the patcher.

### symbol

Performs the same as the  anything  message.

Arguments:

- input
  [symbol]

## Output

### any message

When  bang  is received in the inlet, the stored message is sent out.

## See Also

| Name | Description |
| --- | --- |
| [float](https://docs.cycling74.com/reference/float) | Store a decimal number |
| [int](https://docs.cycling74.com/reference/int) | Store an integer value |
| [pvar](https://docs.cycling74.com/reference/pvar) | Connect to a named object in a patcher |
| [receive](https://docs.cycling74.com/reference/receive) | Receive messages without patch cords |
| [send](https://docs.cycling74.com/reference/send) | Send messages without patch cords |
| [value](https://docs.cycling74.com/reference/value) | Share data between other value objects |
