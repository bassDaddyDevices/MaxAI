---
type: max
name: "uzi"
summary: "Send many bang messages"
signal: false
url: "https://docs.cycling74.com/reference/uzi/"
package: "Max"
see_also: ["bline", "counter", "line", "metro"]
---
# uzi

Send many bang messages

## Description

Outputs a specified number of bang messages quickly. [uzi](https://docs.cycling74.com/reference/uzi) is designed for rapid-fire output of a large number of  bang  messages.

## Arguments

### initial[int] optional

Sets an initial number of  bang  messages to be sent out in response to a  bang  in the left inlet. If no argument is present, [uzi](https://docs.cycling74.com/reference/uzi) is initially set to send out one  bang .

### base[int] optional

An optional second argument sets the base value for the right outlet count. The base value defaults to 1 when no second argument is given.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

In left inlet: Begins sending out  bang  messages as fast as possible, one after another. The number of  bang  messages to send is determined by the last number received in either inlet.

### int

In left inlet: Sets the number of  bang  messages to send, then begins sending them out as fast as possible, one after another.

Arguments:

- input
  [int]

### (inlet1)

In right inlet: Sets the number of  bang  messages to send, without causing output.

Arguments:

- bangs-without-output
  [int]

### break

Same as  pause .

### continue

Same as  resume .

### offset

The word  offset  followed by a number of bangs will set the object to output a count of bangs which is offset by the given number (the number is subtracted from the previously assigned number of bangs to equal the new total number of bangs).

Arguments:

- start
  [int]

### pause

In left inlet: Causes [uzi](https://docs.cycling74.com/reference/uzi) to stop in the midst of sending its output. (Since [uzi](https://docs.cycling74.com/reference/uzi) sends its output as fast as possible, this message must be triggered in some way by the output of [uzi](https://docs.cycling74.com/reference/uzi) itself.) [uzi](https://docs.cycling74.com/reference/uzi) keeps track of how many  bang  messages it has sent, and if it receives the  pause  message before sending out all its  bang  messages, it can then be caused to send out the rest of its  bang  messages with a  resume  or  continue  message.

### resume

In left inlet: If [uzi](https://docs.cycling74.com/reference/uzi) has been stopped by a  pause  message in the midst of sending its output,  resume  causes it to send out the rest of its output.

## Output

### bang

Out left outlet: When [uzi](https://docs.cycling74.com/reference/uzi) receives a  bang  or int in its left inlet, a certain number of  bang  messages are sent out as fast as possible, one after another. The number of  bang  messages is determined by the most recent number received in either inlet.

Out middle outlet: After the last  bang  is sent out its left outlet, [uzi](https://docs.cycling74.com/reference/uzi) sends one  bang  out its middle outlet. This can be used as a signal that all the  bang  messages have been sent, much like the "carry" outlet on the [counter](https://docs.cycling74.com/reference/counter) object.

### int

Out right outlet: The number of each  bang  is sent out. Numbering begins from 1 (or from the base value specified by the optional second argument) each time an int or  bang  is received in the left inlet. If [uzi](https://docs.cycling74.com/reference/uzi) is being restarted with a  resume  or  continue  message, numbering begins wherever it left off.

## See Also

| Name | Description |
| --- | --- |
| [bline](https://docs.cycling74.com/reference/bline) | Generate ramps using bang |
| [counter](https://docs.cycling74.com/reference/counter) | Keep count based on bang messages |
| [line](https://docs.cycling74.com/reference/line) | Generate timed ramp |
| [metro](https://docs.cycling74.com/reference/metro) | Output a bang message at regular intervals |
