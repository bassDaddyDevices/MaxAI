---
type: msp
name: "begin~"
summary: "Define a switchable part of a signal network"
signal: true
url: "https://docs.cycling74.com/reference/begin~/"
package: "MSP"
see_also: ["selector~", "gate~"]
---
# begin~

Define a switchable part of a signal network

## Description

**The begin~ object is OBSOLETE. For controlling audio processing in a patcher, please use the poly~ object.**  The [begin~](https://docs.cycling74.com/reference/begin~) designated the beginning portion of a signal network that could be turned off when not needed. The outlet of [begin~](https://docs.cycling74.com/reference/begin~) was connected to the signal inlet of another object to define the beginning of a signal network that would eventually pass through a [gate~](https://docs.cycling74.com/reference/gate~) or [selector~](https://docs.cycling74.com/reference/selector~). This feature became obsolete in Max 6 and [begin~](https://docs.cycling74.com/reference/begin~) no longer does anything at all.

#### Discussion

One [begin~](https://docs.cycling74.com/reference/begin~) can be used for each [gate~](https://docs.cycling74.com/reference/gate~) or selector~ signal inlet. When the signal coming into gate~ or selector~ is shut off, no processing occurs in any of the objects in the signal network between the [begin~](https://docs.cycling74.com/reference/begin~) and the [gate~](https://docs.cycling74.com/reference/gate~) or [selector~](https://docs.cycling74.com/reference/selector~).

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Output

### signal

A constant signal of  0  used to designate the beginning portion of a signal network that will be turned off whenever used in tandem with [gate~](https://docs.cycling74.com/reference/gate~) and [selector~](https://docs.cycling74.com/reference/selector~) objects.

## See Also

| Name | Description |
| --- | --- |
| [selector~](https://docs.cycling74.com/reference/selector~) | Assign one of several inputs to an outlet |
| [gate~](https://docs.cycling74.com/reference/gate~) | Route a signal to one of several outlets |
