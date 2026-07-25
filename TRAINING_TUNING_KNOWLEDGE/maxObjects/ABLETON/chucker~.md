---
type: ableton
name: "chucker~"
summary: "Segment audio and reorder it on looped playback"
signal: true
url: "https://docs.cycling74.com/reference/chucker~/"
package: "Max for Live"
see_also: ["buffer~", "groove~"]
---
# chucker~

Segment audio and reorder it on looped playback

## Description

[chucker~](https://docs.cycling74.com/reference/chucker~) takes a specified amount of audio data, stores the data in an internal buffer, divides the buffered data into equal sections, and allows the sections to be reordered on playback.

## Arguments

### buffer-size-in-ms[int] optional

An optional integer argument can be used to set the number of milliseconds to allocate for the recorded sound. (e.g. an argument of 8000 will allocate enough memory for a stereo output of 8 seconds)

Note: The actual allocation will be larger than what is specified by the argument, since the [chucker~](https://docs.cycling74.com/reference/chucker~) object supports two buffers and provides for double-buffering.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### directions

The word  directions , followed by a 1 or 2 to indicate left or right channel and a list of integer values whose length is equal to the number of steps, sets the direction of playback for the sections. Playback direction is specified as follows:

1: forward (the default)

0: mute

-1: reverse

Arguments:

- direction-specifier
  [list]

### fademode

Sets the fade method for segment smoothing. Modes include:

0: Classic (same as Max 5)

1: Pre-fade (fades use buffered audio, fade executes prior to segment transition)

2: Post-fade (fades use buffered audio, fade executes after segment transition)

Arguments:

- mode
  [int]

### freeze

The message  freeze 1  causes the current buffer segment to loop on playback. Sending the message  freeze 0  resumes normal playback.

Arguments:

- buffer-segment
  [int]

### nstep

The word  nsteps , followed by an integer in the range 1 - 64, sets the number of equal portions into which the [chucker~](https://docs.cycling74.com/reference/chucker~) object's internal buffer is segmented for playback.

Arguments:

- number-of-steps
  [int]

### signal

In left inlet: Left channel audio input.

In middle inlet: Right channel audio input.

In right inlet: An audio signal in the range 0. - 1.0 provides the audio sync input. This task is typically done using a [phasor~](https://docs.cycling74.com/reference/phasor~) object's output as input.

### smooth

The word  smooth , followed by a floating point number in the range 0. - 1.0, sets an amount of smoothing (crossfading) between the individual segments being reordered for playback.

Arguments:

- smooth-amount
  [float]

### steps

The word  steps , followed by a 1 or 2 to indicate left or right channel and a list of integer values whose range is between 1 and the number of steps and whose length is equal to the number of steps, sets the order of playback for the sections.

e.g. the message  steps 1 4 3 2 1, steps 2 1 2 3 4 , when sent to a [chucker~](https://docs.cycling74.com/reference/chucker~) object whose number of steps is set to 4, will play the four left channel segments in reverse order, and the right channel in regular order. order

Arguments:

- channel and range
  [list]

## See Also

| Name | Description |
| --- | --- |
| [buffer~](https://docs.cycling74.com/reference/buffer~) | Store audio samples |
| [groove~](https://docs.cycling74.com/reference/groove~) | Variable-rate looping sample playback |
