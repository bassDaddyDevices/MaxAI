---
type: max
name: "pvar"
summary: "Connect to a named object in a patcher"
signal: false
url: "https://docs.cycling74.com/reference/pvar/"
package: "Max"
see_also: ["receive", "send", "thispatcher", "value"]
---
# pvar

Connect to a named object in a patcher

## Description

The [pvar](https://docs.cycling74.com/reference/pvar) object lets you build user interfaces in one part of your patcher that are associated with the "process" part in another part of the patcher. Unlike the [send](https://docs.cycling74.com/reference/send) and [receive](https://docs.cycling74.com/reference/receive) objects, [pvar](https://docs.cycling74.com/reference/pvar) does not work globally; the [pvar](https://docs.cycling74.com/reference/pvar) object and its associated object must be in the same patcher. To set an object's name, select the object, open the inspector, then enter a name under Name > Scripting Name. The name cannot be a number, although it can contain numbers.

## Arguments

### object-name[symbol] optional

The first argument specifies the name of the object to which [pvar](https://docs.cycling74.com/reference/pvar) will be associated with. If no name is supplied, the  setname  message can be used to connect later.

### number-of-outlets[int] optional

The second argument specifies the number of outlets [pvar](https://docs.cycling74.com/reference/pvar) will have. [pvar](https://docs.cycling74.com/reference/pvar) connects to as many outlets as its associated object has, unless it is more than the number you specify as an argument. The default number of outlets is 1.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Performs the same function as  anything .

### int

Performs the same function as  anything .

Arguments:

- input-message
  [int]

### float

Performs the same function as  anything .

Arguments:

- input-message
  [float]

### list

Performs the same function as  anything .

Arguments:

- input-message
  [list]

### anything

The message is sent to the named object currently associated with [pvar](https://docs.cycling74.com/reference/pvar).

Arguments:

- input-message
  [list]

### loadbang

Performs the same function as  anything .

### setname

The word  setname , followed by a symbol, specifies the name of the object to which [pvar](https://docs.cycling74.com/reference/pvar) will be associated with. The named object must be in the same patcher as the [pvar](https://docs.cycling74.com/reference/pvar) object.

Arguments:

- object-name
  [symbol]

## Output

### any message

The outlets of [pvar](https://docs.cycling74.com/reference/pvar) correspond to the outlets of its associated named object. When the named object sends anything out one of its outlets, the output also comes out of the corresponding outlets of the [pvar](https://docs.cycling74.com/reference/pvar) object.

## See Also

| Name | Description |
| --- | --- |
| [receive](https://docs.cycling74.com/reference/receive) | Receive messages without patch cords |
| [send](https://docs.cycling74.com/reference/send) | Send messages without patch cords |
| [thispatcher](https://docs.cycling74.com/reference/thispatcher) | Send messages to a patcher |
| [value](https://docs.cycling74.com/reference/value) | Share data between other value objects |
