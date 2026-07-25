---
type: max
name: "grab"
summary: "Intercept the output of another object"
signal: false
url: "https://docs.cycling74.com/reference/grab/"
package: "Max"
see_also: ["preset", "table"]
---
# grab

Intercept the output of another object

## Description

[grab](https://docs.cycling74.com/reference/grab) can send a message and extract the result from the receiving object.

 **Note:**  The [grab](https://docs.cycling74.com/reference/grab) object cannot be used to communicate from a [send](https://docs.cycling74.com/reference/send) to a [receive](https://docs.cycling74.com/reference/receive) between Max for Live devices.

## Arguments

### number-of-outlets[int] optional

The first argument sets the number of outlets, in addition to the right outlet. If there is no argument, [grab](https://docs.cycling74.com/reference/grab) has 1 additional outlet.

### receive-name[symbol] optional

If a symbol is present as a second argument, the message received in the inlet is sent to all [receive](https://docs.cycling74.com/reference/receive) objects named by the symbol, instead of being sent out the right outlet. In this case the rightmost outlet, which would normally send out the incoming message if no second argument were present, will not exist.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Performs the same function as  anything .

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

The message is sent out the right outlet, or if a second argument is present the message is sent to [receive](https://docs.cycling74.com/reference/receive) objects named by the second argument.

Arguments:

- input
  [list]

### set

If a second argument has been typed into [grab](https://docs.cycling74.com/reference/grab) specifying the name of a [receive](https://docs.cycling74.com/reference/receive) object, then the word  set , followed by a symbol, specifies the name of a (different) [receive](https://docs.cycling74.com/reference/receive) object via which [grab](https://docs.cycling74.com/reference/grab) can grab messages from remote objects.

Arguments:

- input
  [symbol]

## Output

### anything

Out right outlet: The right outlet should be connected only to the leftmost inlet of other objects. The message received in the inlet is sent out to the left inlet of all objects connected to the right outlet. Whatever goes out their outlets, however, is then intercepted by [grab](https://docs.cycling74.com/reference/grab).

Out other outlets: Whatever would normally be sent out the outlets of the objects connected to the right outlet, is sent out the [grab](https://docs.cycling74.com/reference/grab) object's outlets instead, in response to a message from [grab](https://docs.cycling74.com/reference/grab). Whatever would be sent out the leftmost outlet of the other objects is sent out the leftmost outlet of [grab](https://docs.cycling74.com/reference/grab), and so on. Note: Only the output that is sent out the outlets of other objects can be intercepted by [grab](https://docs.cycling74.com/reference/grab). Other types of output, such as transmission of MIDI messages or printing in the Max Console, cannot be intercepted by [grab](https://docs.cycling74.com/reference/grab). Also, [grab](https://docs.cycling74.com/reference/grab) does not intercept the output of timing objects such as [seq](https://docs.cycling74.com/reference/seq), [metro](https://docs.cycling74.com/reference/metro), and [clocker](https://docs.cycling74.com/reference/clocker).

Connecting the right outlet of [grab](https://docs.cycling74.com/reference/grab) to the inlet of a patcher object, however, will not grab the output of the subpatch. It will simply grab the output of the [inlet](https://docs.cycling74.com/reference/inlet) object inside the subpatch, which is exactly the same as its input. However, [grab](https://docs.cycling74.com/reference/grab) can communicate with remote objects via a [receive](https://docs.cycling74.com/reference/receive) object named as the second argument to [grab](https://docs.cycling74.com/reference/grab).

If a second argument is present, the message received in the inlet is sent directly to [receive](https://docs.cycling74.com/reference/receive) objects named by the argument instead of being sent out the right outlet. Any such [receive](https://docs.cycling74.com/reference/receive) objects should be connected only to the leftmost inlet of other objects. The rightmost outlet, which would otherwise be used to grab the output of other objects, does not appear if the second argument is used.

Note that if [grab](https://docs.cycling74.com/reference/grab) is connected to other objects remotely via numerous [receive](https://docs.cycling74.com/reference/receive) objects of the same name, the order in which [grab](https://docs.cycling74.com/reference/grab) communicates with those other objects is undefined, so the order in which their output will be sent out of the [grab](https://docs.cycling74.com/reference/grab) object's other outlets is unpredictable.

## See Also

| Name | Description |
| --- | --- |
| [preset](https://docs.cycling74.com/reference/preset) | Store and recall settings |
| [table](https://docs.cycling74.com/reference/table) | Store and edit an array of numbers |
