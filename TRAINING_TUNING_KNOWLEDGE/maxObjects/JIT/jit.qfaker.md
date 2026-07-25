---
type: jitter
name: "jit.qfaker"
summary: "Fake queue status"
signal: false
url: "https://docs.cycling74.com/reference/jit.qfaker/"
package: "Jitter"
see_also: ["jit.qball"]
---
# jit.qfaker

Fake queue status

## Description

Use the [jit.qfaker](https://docs.cycling74.com/reference/jit.qfaker) object to set the low priority queue status so that messages received at scheduler time can be executed at scheduler time even in the instance that Max would normally place such events on the low priority queue.

#### Discussion

**WARNING** : this object must be used with caution, since it has the potential of causing tasks to execute in the hardware interrupt which are not interrupt-safe (e.g. reading/writing files, many QuickTime calls, copying video data to the screen).

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

the bang will be immediately sent out the leftmost outlet without modification. However, the low priority queue state will be set to "on".

### int

The number will be immediately sent out the leftmost outlet without modification. However, the low priority queue state will be set to "on".

### float

The number will be immediately sent out the leftmost outlet without modification. However, the low priority queue state will be set to "on".

### list

The list will be immediately sent out the leftmost outlet without modification. However, the low priority queue state will be set to "on".

### anything

Any message will be immediately sent out the leftmost outlet without modification. However, the low priority queue state will be set to "on".

## See Also

| Name | Description |
| --- | --- |
| [jit.qball](https://docs.cycling74.com/reference/jit.qball) | Convert messages at scheduler time to low priority |
