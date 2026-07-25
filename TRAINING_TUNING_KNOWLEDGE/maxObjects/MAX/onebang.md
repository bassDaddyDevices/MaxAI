---
type: max
name: "onebang"
summary: "Gate bangs using a bang"
signal: false
url: "https://docs.cycling74.com/reference/onebang/"
package: "Max"
see_also: ["gate", "Ggate"]
---
# onebang

Gate bangs using a bang

## Description

Allows a  bang  in the left inlet to pass through ONLY if a  bang  has been received in the right inlet. After that, a  bang  in the left inlet will not get through again until a  bang  has been received again in the right inlet.

## Arguments

### initialization[int] optional

A non-zero argument sets [onebang](https://docs.cycling74.com/reference/onebang) to permit a  bang  to be sent out the left outlet the first time a  bang  is received in the left inlet.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

In left inlet: Causes a  bang  to be sent out the left inlet only if a bang has been received in the right inlet since the last bang was sent out.

In right inlet: Resets [onebang](https://docs.cycling74.com/reference/onebang) to permit a  bang  to be sent out the next time a  bang  is received in the left inlet.

### int

In either inlet: Same as a  bang .

Arguments:

- input
  [int]

### float

In either inlet: Same as a  bang .

Arguments:

- input
  [float]

### list

In either inlet: Same as a  bang .

Arguments:

- input
  [list]

### anything

In either inlet: Converted to  bang .

Arguments:

- input
  [list]

### stop

In left inlet: Undoes the effect of a  bang  in the right inlet.

## Output

### bang

When [onebang](https://docs.cycling74.com/reference/onebang) receives a  bang  in its left inlet, it sends a  bang  out its left outlet only if it has received a  bang  in its right inlet since the last time it sent out a  bang . Otherwise, it sends a  bang  out its right outlet.

## See Also

| Name | Description |
| --- | --- |
| [gate](https://docs.cycling74.com/reference/gate) | Pass input to an outlet |
| [Ggate](https://docs.cycling74.com/reference/gswitch2) | Send input to one of two outlets |
