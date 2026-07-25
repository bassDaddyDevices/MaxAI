---
type: max
name: "pattrforward"
summary: "Send any message to a named object"
signal: false
url: "https://docs.cycling74.com/reference/pattrforward/"
package: "Max"
see_also: ["autopattr", "forward", "pattr", "pattrhub", "pattrmarker", "pattrstorage", "receive", "send", "thispatcher"]
---
# pattrforward

Send any message to a named object

## Description

Routes messages or selects new message routing destinations according to the messages it receives. You can also use the [pattrforward](https://docs.cycling74.com/reference/pattrforward) object to route messages directly to a specific inlet of an object exposed by [pattr](https://docs.cycling74.com/reference/pattr) or [autopattr](https://docs.cycling74.com/reference/autopattr) objects, and also send messages directly to a subpatcher, abstraction or bpatcher.

#### Discussion

The [pattrforward](https://docs.cycling74.com/reference/pattrforward) object uses an object's Scripting Name (its  varname  attribute, set using an object's Inspector) when specifying the path to objects you want to send messages to. For example, if you want to send a message to an object named  *my\_dial*  in a subpatcher, and you've also set the Scripting Name of the subpatcher to  *my\_controls* , then you would send the message  send my\_controls::my\_dial  to the [pattrforward](https://docs.cycling74.com/reference/pattrforward) object to set the destination for future messages.

## Arguments

### target[symbol] optional

A symbol argument may be optionally used to specify the target object.

## Attributes

### send[symbol]

The word  send , followed by the patcher name of any object in the patcher hierarchy, sets the target object. Names can refer to objects in patchers other than the one in which the [pattrforward](https://docs.cycling74.com/reference/pattrforward) object resides. A double-colon syntax ('::') is used to separate levels of the patcher hierarchy. For example,  some\_subpatcher::some\_object  or  parent::some\_other\_object  would be valid target object names.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

bang  is passed to the target object.

### int

An int is passed to the target object.

Arguments:

- input
  [int]

### float

A float is passed to the target object.

Arguments:

- input
  [float]

### list

A list is passed to the target object.

Arguments:

- input
  [list]

### anything

Incoming messages to the [pattrforward](https://docs.cycling74.com/reference/pattrforward) object are analyzed. If the first element of the message matches the symbols in0, in1 ... inN, the [pattrforward](https://docs.cycling74.com/reference/pattrforward) object will forward all remaining arguments to a specific inlet of the target object. in0 refers to the leftmost inlet (this is the default behavior of the [pattrforward](https://docs.cycling74.com/reference/pattrforward) object), in1 refers to the inlet to the 2nd inlet from the left, and so on.

If the target object is a subpatcher, abstraction or bpatcher, the special element inx can be used to send messages directly to the patcher object (in essence, in order to communicate with a virtual [thispatcher](https://docs.cycling74.com/reference/thispatcher) object associated with the patch).

Arguments:

- input
  [list]

### (mouse)

Double-clicking on the [pattrforward](https://docs.cycling74.com/reference/pattrforward) object reveals the current target object in its parent patcher.

## Output

### anything

A message received in the inlet of [pattrforward](https://docs.cycling74.com/reference/pattrforward) is sent to the named object anywhere in the patcher hierarchy.

## See Also

| Name | Description |
| --- | --- |
| [autopattr](https://docs.cycling74.com/reference/autopattr) | Expose multiple objects to the pattr system |
| [forward](https://docs.cycling74.com/reference/forward) | Send messages to specified receive objects |
| [pattr](https://docs.cycling74.com/reference/pattr) | Provide an alias with a named data wrapper |
| [pattrhub](https://docs.cycling74.com/reference/pattrhub) | Access all pattr objects in a patcher |
| [pattrmarker](https://docs.cycling74.com/reference/pattrmarker) | Provide pattr communication between patchers |
| [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) | Save and recall pattr presets |
| [receive](https://docs.cycling74.com/reference/receive) | Receive messages without patch cords |
| [send](https://docs.cycling74.com/reference/send) | Send messages without patch cords |
| [thispatcher](https://docs.cycling74.com/reference/thispatcher) | Send messages to a patcher |
