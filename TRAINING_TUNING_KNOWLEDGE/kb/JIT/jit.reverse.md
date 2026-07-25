---
type: jitter
name: "jit.reverse"
summary: "Reverse output with respect to input"
signal: false
url: "https://docs.cycling74.com/reference/jit.reverse/"
package: "Jitter"
see_also: ["jit.cycle", "swap"]
---
# jit.reverse

Reverse output with respect to input

## Description

[jit.reverse](https://docs.cycling74.com/reference/jit.reverse) reverses the sequential order of data coming in its inlets, relative to its outlets; a [jit.reverse](https://docs.cycling74.com/reference/jit.reverse) object with 5 inlets will pass input sent to the left inlet to its rightmost outlet, pass inlet 2 data to outlet 4, and so on.

## Arguments

None.

## Attributes

### immediate[int]

Processing mode (default = 0 (left inlet only))

0 = output triggered by input to the left inlet only.

1 = input to any inlet is sent out the outlet associated with it immediately.

### reverse[int]

Reverse mapping flag (default = 1) When the flag is set, reverse mapping is enabled. Otherwise, mapping passes inlet 1 to outlet 1, inlet 2 to outlet 2, etc.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Any bang is passed to the corresponding outlet.

### int

Any integer value is passed to the corresponding outlet.

### float

Any floating point value is passed to the corresponding outlet.

### list

Any list is passed to the corresponding outlet.

### anything

Any input is passed to the corresponding outlet.

### clear

The  clear  message with no arguments initializes all inlets. Optional arguments specify by number the inlets to initialize. Inlet numbering starts from 0.

When initialized, no output will occur for the inlet's corresponding outlet until new input is received in that inlet.

Arguments:

- inlet-list
  [list]

## See Also

| Name | Description |
| --- | --- |
| [jit.cycle](https://docs.cycling74.com/reference/jit.cycle) | Cycle messages through outputs |
| [swap](https://docs.cycling74.com/reference/swap) | Swap position of two numbers |
