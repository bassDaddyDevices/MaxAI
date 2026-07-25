---
type: msp
name: "delay~"
summary: "Delay a signal"
signal: true
url: "https://docs.cycling74.com/reference/delay~/"
package: "MSP"
see_also: ["comb~", "tapin~", "tapout~", "mstosamps~", "sampstoms~", "pipe", "transport"]
---
# delay~

Delay a signal

## Description

Use the [delay~](https://docs.cycling74.com/reference/delay~) object to delay a signal by a certain amount of time. The delay time can be specified in samples (determined by the sampling rate), or using the Max [time format](https://docs.cycling74.com/userguide/time_value_syntax) syntax for tempo-relative values.

#### Discussion

The differences between [delay~](https://docs.cycling74.com/reference/delay~) and [tapin~](https://docs.cycling74.com/reference/tapin~) / [tapout~](https://docs.cycling74.com/reference/tapout~) are as follows: First, delay times with [delay~](https://docs.cycling74.com/reference/delay~) are specified in terms of samples rather than milliseconds, so they will change duration if the sampling rate changes. Second, the [delay~](https://docs.cycling74.com/reference/delay~) object can reliably delay a signal a number of samples that is less than a vector size. Finally, unlike [tapin~](https://docs.cycling74.com/reference/tapin~) and [tapout~](https://docs.cycling74.com/reference/tapout~), you cannot feed the output of [delay~](https://docs.cycling74.com/reference/delay~) back to its input. If you wish to use feedback with short delays, consider using the [comb~](https://docs.cycling74.com/reference/comb~) object. Note: While the [delay~](https://docs.cycling74.com/reference/delay~) object lets you specify time in any of Max's standard [time formats](https://docs.cycling74.com/userguide/time_value_syntax), the  interval  attribute argument should be used when specifying time in any other time unit besides milliseconds or notevalues (e.g.  delay 22050 @interval 11025 samples ).

If notevalue, ticks, or bars.beats.units are specified for the delay interval, the object will not operate unless the transport is running.

## Arguments

### maximum-delay-memory[int]samples optional

Set maximum delay time in samples. This determines the amount of memory allocated for the delay line.

### initial-delay-time[list]time-value optional

Set the initial delay time. The delay time can be either a number which specifies time in samples (e.g. delay~ 44100 200) or a [notevalue](https://docs.cycling74.com/userguide/time_value_syntax) (e.g. delay~ 2000 2n).

### ramp-time[int]time-value optional

Set the delay ramp time, in milliseconds. If the delay time is controlled using a float rather than a signal value, the delay time will be crossfaded.

## Attributes

### delay[Time Value]: 0 ms

Delay time

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

In right inlet: set delay time. The delay time cannot be less than 0 (no delay) nor can it be greater than the maximum delay time.

Arguments:

- delay-time
  [int]

### float

Set delay time (converted to int)

Arguments:

- delay-time
  [float]

### list

Set delay time in a Max [time format](https://docs.cycling74.com/userguide/time_value_syntax).

Arguments:

- time/transport-settings
  [list]

### anything

Set delay time in a Max [time format](https://docs.cycling74.com/userguide/time_value_syntax).

Arguments:

- time/transport-settings
  [list]

### clear

Zero the delay memory

### maxsize

Set maximum delay time

Arguments:

- maximum-delay-memory
  [int]

### ramp

Set the time to ramp to a new delay time

Arguments:

- ramp-time
  [float]

### signal

In left inlet: Signal to be delayed.

In right inlet: Set delay time. Signal-based delay uses interpolation, which introduces a one-sample delay.

## Output

### signal

The output consists of the input delayed by the specified number of samples.

## See Also

| Name | Description |
| --- | --- |
| [comb~](https://docs.cycling74.com/reference/comb~) | Apply a comb filter effect |
| [tapin~](https://docs.cycling74.com/reference/tapin~) | Input to a delay line |
| [tapout~](https://docs.cycling74.com/reference/tapout~) | Output from a delay line |
| [mstosamps~](https://docs.cycling74.com/reference/mstosamps~) | Convert milliseconds to samples |
| [sampstoms~](https://docs.cycling74.com/reference/sampstoms~) | Convert time from samples to milliseconds |
| [pipe](https://docs.cycling74.com/reference/pipe) | Delay numbers, lists or symbols |
| [transport](https://docs.cycling74.com/reference/transport) | Control a clock |
