---
type: jitter
name: "jit.qball"
summary: "Convert messages at scheduler time to low priority"
signal: false
url: "https://docs.cycling74.com/reference/jit.qball/"
package: "Jitter"
see_also: ["jit.qfaker"]
---
# jit.qball

Convert messages at scheduler time to low priority

## Description

The [jit.qball](https://docs.cycling74.com/reference/jit.qball) object places all messages received at scheduler time in the low priority queue, even if overdrive is turned off.

#### Discussion

This is useful for event synchronization and/or graceful data rate reduction (e.g. drop video frames, or drawing commands in the event that they may not be rendered as fast as requested).

## Arguments

None.

## Attributes

### mode[symbol]

The means of handling multiple messages prior to being serviced by the low priority queue (default = usurp)

 usurp  = multiple messages replace one another;

 defer  = multiple messages accumulate;

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Any bang received at scheduler time will be placed in the low priority queue. When the low priority queue services this message, it will be sent out the left outlet. If the message received is being sent from the low priority queue it is immediately sent out the leftmost outlet.

If mode =  usurp , and the low priority queue has not yet serviced the last received message, it will be replaced by the most recently received message.

If mode =  defer , then the most recently received message will be placed in the low priority queue without affecting previously received messages.

### int

Any number received at scheduler time will be placed in the low priority queue. When the low priority queue services this message, it will be sent out the left outlet. If the number received is being sent from the low priority queue it is immediately sent out the leftmost outlet.

If mode =  usurp , and the low priority queue has not yet serviced the last received message, it will be replaced by the most recently received message.

If mode =  defer , then the most recently received message will be placed in the low priority queue without affecting previously received messages.

### float

Any number received at scheduler time will be placed in the low priority queue. When the low priority queue services this message, it will be sent out the left outlet. If the message received is being sent from the low priority queue it is immediately sent out the leftmost outlet.

If mode =  usurp , and the low priority queue has not yet serviced the last received message, it will be replaced by the most recently received message.

If mode =  defer , then the most recently received message will be placed in the low priority queue without affecting previously received messages.

### list

Any list received at scheduler time will be placed in the low priority queue. When the low priority queue services this message, it will be sent out the left outlet. If the message received is being sent from the low priority queue it is immediately sent out the leftmost outlet.

If mode =  usurp , and the low priority queue has not yet serviced the last received message, it will be replaced by the most recently received message.

If mode =  defer , then the most recently received message will be placed in the low priority queue without affecting previously received messages.

### anything

Any message received at scheduler time will be placed in the low priority queue. When the low priority queue services this message, it will be sent out the left outlet. If the message received is being sent from the low priority queue it is immediately sent out the leftmost outlet.

If mode =  usurp , and the low priority queue has not yet serviced the last received message, it will be replaced by the most recently received message.

If mode =  defer , then the most recently received message will be placed in the low priority queue without affecting previously received messages.

### defer

For internal use only.

### usurp

For internal use only.

## See Also

| Name | Description |
| --- | --- |
| [jit.qfaker](https://docs.cycling74.com/reference/jit.qfaker) | Fake queue status |
