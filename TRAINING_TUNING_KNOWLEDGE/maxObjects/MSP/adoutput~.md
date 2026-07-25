---
type: msp
name: "adoutput~"
summary: "Access audio driver output channel"
signal: true
url: "https://docs.cycling74.com/reference/adoutput~/"
package: "MSP"
see_also: ["adstatus", "dac~"]
---
# adoutput~

Access audio driver output channel

## Description

Use the [adoutput~](https://docs.cycling74.com/reference/adoutput~) object to record the current audio output or to feed it back into your patcher. The output of [adoutput~](https://docs.cycling74.com/reference/adoutput~) is delayed by one signal vector with respect to the actual output.

#### Discussion

By default [adoutput~](https://docs.cycling74.com/reference/adoutput~) outputs the audio driver's channel 1 out its left outlet and channel 2 out its right outlet. Optional arguments specify the channels you want. Remember, these are not the logical channels used by [dac~](https://docs.cycling74.com/reference/dac~) and [adc~](https://docs.cycling74.com/reference/adc~)-- they are the audio driver object's "real" channels. A channel number of 0 turns off an output. Channel numbers higher than the number of real channels of the current audio driver also result in a zero output.

## Arguments

### audiodriver-output-channels[int] optional

The arguments specify output channels of the current audiodriver. There is no limit to the number of channels you can specify. By default, [adoutput~](https://docs.cycling74.com/reference/adoutput~) creates two outlets and assigns the audio output from channels 1 and 2 of the current audiodriver to them. Note that these channel numbers are not the same as the logical channel numbers used by the [dac~](https://docs.cycling74.com/reference/dac~) and [adc~](https://docs.cycling74.com/reference/adc~) objects, but represent the "physical" outputs of the driver after any remapping has taken place. You configure the relationship between logical [dac~](https://docs.cycling74.com/reference/dac~) channels and the audiodriver's real channels with the I/O Mappings subwindow of the Audio Status window.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### set

The word  set , followed by two numbers, assigns an audio driver output channel to a signal outlet of the [adoutput~](https://docs.cycling74.com/reference/adoutput~) object. The first number is the index of the outlet, where a value of 0 refers to the left outlet. The second number is the index of the audio driver output device channel where 1 refers to the first channel. If the second number is 0, the specified outlet is turned off and outputs a zero signal.

Arguments:

- outlet-index
  [int]
- audiodriver-output-channel-index
  [int]

## Output

### signal

Each outlet of [adoutput~](https://docs.cycling74.com/reference/adoutput~) outputs a signal from the assigned audiodriver channel, delayed by the number of samples of the current signal vector size.

## See Also

| Name | Description |
| --- | --- |
| [adstatus](https://docs.cycling74.com/reference/adstatus) | Report and control audio driver settings |
| [dac~](https://docs.cycling74.com/reference/dac~) | Audio output and on/off |
