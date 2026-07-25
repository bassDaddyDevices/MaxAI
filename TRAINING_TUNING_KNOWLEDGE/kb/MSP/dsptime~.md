---
type: msp
name: "dsptime~"
summary: "Report milliseconds of audio processed"
signal: true
url: "https://docs.cycling74.com/reference/dsptime~/"
package: "MSP"
see_also: ["adstatus"]
---
# dsptime~

Report milliseconds of audio processed

## Description

[dsptime~](https://docs.cycling74.com/reference/dsptime~) reports the time in milliseconds since the audio was last turned on when triggered by a  bang .

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

When [dsptime~](https://docs.cycling74.com/reference/dsptime~) receives a  bang , it reports the number of milliseconds corresponding to the number of audio samples that have currently been processed.

### signal

If a signal is connected to the [dsptime~](https://docs.cycling74.com/reference/dsptime~) object's inlet, [dsptime~](https://docs.cycling74.com/reference/dsptime~) reports the number of milliseconds corresponding to the number of audio samples that have currently been processed within the connected signal.

## Output

### float

The number of milliseconds corresponding to the number of audio samples that have currently been processed. The value is based on the processed audio sample count, not the real time of the millisecond timer. This means you can use the [dsptime~](https://docs.cycling74.com/reference/dsptime~) object as a sort of clock in conjunction with the NonRealTime audio driver.

## See Also

| Name | Description |
| --- | --- |
| [adstatus](https://docs.cycling74.com/reference/adstatus) | Report and control audio driver settings |
