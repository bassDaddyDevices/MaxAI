---
type: max
name: "quickthresh"
summary: "Fast chord detection"
signal: false
url: "https://docs.cycling74.com/reference/quickthresh/"
package: "Max"
see_also: ["bondo", "buddy", "iter", "join", "pack", "thresh"]
---
# quickthresh

Fast chord detection

## Description

Combines numbers when they are received close together. [quickthresh](https://docs.cycling74.com/reference/quickthresh) is a faster, low-latency alternative to [thresh](https://docs.cycling74.com/reference/thresh) that is optimized for chord detection.

## Arguments

### threshold[number]ms optional

The base threshold time in milliseconds; all notes received within this time period The default value for the base threshold is 40 ms.

### fudge[number]ms optional

The "fudge" time in milliseconds - if any notes are played within this amount of time at the end of the base thresh time, the threshold is extended. If not provided, the default value is 10 ms.

### extension[number]ms optional

The thresh extension time in milliseconds. This is an additional time frame added to the first argument, if necessary, in order to capture additional notes (due to sloppy playing) into the list. The default value is 20 ms.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

bang  will reset [quickthresh](https://docs.cycling74.com/reference/quickthresh) and output the notes in its buffer.

### int

The incoming values which appear within a certain time threshold are stored and output as a list. See the argument descriptions to learn how the time thresholding works.

Arguments:

- input
  [int]

### (inlet1)

Sets the millisecond value for the base thresh time. All values received in the left inlet within this time period are collected into a list.

Arguments:

- threshold
  [int]

### (inlet2)

Sets the "fudge" time in milliseconds. If there are any incoming values within this amount of time at the end of the base thresh time, the threshold is extended to allow more values to be added to the list.

Arguments:

- fudge
  [int]

### (inlet3)

In fourth inlet: Sets the threshold extension in milliseconds. This is an extension of the base thresh time, which is used if values arrive in the object's inlet in the "fudge" time zone.

Arguments:

- extension
  [int]

### float

In left inlet: The incoming values which appear within a certain time threshold are stored and output as a list. See the arguments' descriptions to learn how the time thresholding works.

Arguments:

- input
  [float]

### (inlet1)

In second inlet: Sets the millisecond value for the base thresh time. All values received in the left inlet within this time period are collected into a list.

Arguments:

- threshold
  [float]

### (inlet2)

In third inlet: Sets the "fudge" time in milliseconds. If there are any incoming values within this amount of time at the end of the base thresh time, the threshold is extended to allow more values to be added to the list.

Arguments:

- fudge
  [float]

### (inlet3)

In fourth inlet: Sets the threshold extension in milliseconds. This is an extension of the base thresh time, which is used if values arrive in the object's inlet in the "fudge" time zone.

Arguments:

- extension
  [float]

### set

The word  set , followed by three millisecond values, can be used to set the three threshold parameter values (base thresh time, "fudge" time and thresh extension).

Arguments:

- threshold
  [int]
- fudge
  [int]
- extension
  [int]

## Output

### float

When [quickthresh](https://docs.cycling74.com/reference/quickthresh) has used up its threshold time, any incoming values that were played within the time threshold are output as a list.

## See Also

| Name | Description |
| --- | --- |
| [bondo](https://docs.cycling74.com/reference/bondo) | Synchronize a group of messages |
| [buddy](https://docs.cycling74.com/reference/buddy) | Synchronize arriving data |
| [iter](https://docs.cycling74.com/reference/iter) | Break a list into individual messages |
| [join](https://docs.cycling74.com/reference/join) | Combine items into a list |
| [pack](https://docs.cycling74.com/reference/pack) | Create a list |
| [thresh](https://docs.cycling74.com/reference/thresh) | Combine numbers, symbols and lists when received close together |
