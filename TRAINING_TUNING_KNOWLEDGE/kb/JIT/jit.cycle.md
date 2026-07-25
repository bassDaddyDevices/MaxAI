---
type: jitter
name: "jit.cycle"
summary: "Cycle messages through outputs"
signal: false
url: "https://docs.cycling74.com/reference/jit.cycle/"
package: "Jitter"
see_also: ["cycle", "jit.reverse", "router"]
---
# jit.cycle

Cycle messages through outputs

## Description

Route messages, unchanged, through the object's outlets sequentially. Lists remain intact, unlike the Max [cycle](https://docs.cycling74.com/reference/cycle) object. The [jit.cycle](https://docs.cycling74.com/reference/jit.cycle) object takes a single integer argument, which sets the number of outlets.

## Arguments

None.

## Attributes

### index[int]

The current outlet

### hi[int]

Outlet high limit (default = rightmost outlet) Outlets with indices higher than the value of the hi attribute are ignored during routing. Outlet indices begin numbering at 0.

### mode[int]

Cycle mode (default = 0 (left to right))

0 = left to right (from lo to hi)
1 = right to left (from hi to lo)
2 = pendulum mode, starting from lo, passing sequentially to hi, and then back to lo

Possible values:

0 = 'Left to Right'

1 = 'Right to Left'

2 = 'Pendulum'

### lo[int]

Outlet low limit (default = 0 (leftmost outlet)) Outlets with indices lower than the value of the lo attribute are ignored during routing. Outlet indices begin numbering at 0.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Any  bang  message sent to the [jit.cycle](https://docs.cycling74.com/reference/jit.cycle) object is sent out the next outlet in sequence.

### int

Any int sent to the [jit.cycle](https://docs.cycling74.com/reference/jit.cycle) object is sent out the next outlet in sequence.

### float

Any float sent to the [jit.cycle](https://docs.cycling74.com/reference/jit.cycle) object is sent out the next outlet in sequence.

### list

Any list sent to the [jit.cycle](https://docs.cycling74.com/reference/jit.cycle) object is sent out the next outlet in sequence.

### anything

Any message sent to the [jit.cycle](https://docs.cycling74.com/reference/jit.cycle) object is sent out the next outlet in sequence.

### reset

Causes the index to jump to either the lo or hi value, depending on the current cycle mode setting (mode).

## See Also

| Name | Description |
| --- | --- |
| [cycle](https://docs.cycling74.com/reference/cycle) | Round-robin messages to outlets |
| [jit.reverse](https://docs.cycling74.com/reference/jit.reverse) | Reverse output with respect to input |
| [router](https://docs.cycling74.com/reference/router) | Route messages to multiple locations |
