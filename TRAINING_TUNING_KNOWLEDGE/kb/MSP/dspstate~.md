---
type: msp
name: "dspstate~"
summary: "Report current DSP settings"
signal: true
url: "https://docs.cycling74.com/reference/dspstate~/"
package: "MSP"
see_also: ["adstatus", "sampstoms~", "mstosamps~"]
---
# dspstate~

Report current DSP settings

## Description

[dspstate~](https://docs.cycling74.com/reference/dspstate~) can be used for calculations that require the sampling rate of current DSP processing block size. You can also use the leftmost outlet to trigger some event when the audio is turned on or off.

#### Discussion

[dspstate~](https://docs.cycling74.com/reference/dspstate~) outputs state information automatically whenever the audio is turned on or off. You can also get the information by sending a  bang . Connecting a signal to the [dspstate~](https://docs.cycling74.com/reference/dspstate~) object's inlet reports information about that signal, although currently, all signals have the same sampling rate and vector size. Note that [dspstate~](https://docs.cycling74.com/reference/dspstate~) will not output anything if the audio is not turned on in its window.

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Triggers a report out the [dspstate~](https://docs.cycling74.com/reference/dspstate~) object's outlets, telling whether the audio is on or off, the current sampling rate, and the signal vector size.

### signal

If a signal is connected to the [dspstate~](https://docs.cycling74.com/reference/dspstate~) object's inlet, [dspstate~](https://docs.cycling74.com/reference/dspstate~) reports that signal's sampling rate and vector size, rather than the global sampling rate and signal vector size.

## Output

### float

Out second outlet: Sampling rate of the connected  signal  or the global sampling rate.

### int

Out left outlet: If the audio is on or being turned on, 1 is sent out. If the audio is off or being turned off, 0 is sent out.

### int

Out third outlet: Current DSP signal vector size.

### int

Out fourth outlet: Current I/O signal vector size.

## See Also

| Name | Description |
| --- | --- |
| [adstatus](https://docs.cycling74.com/reference/adstatus) | Report and control audio driver settings |
| [sampstoms~](https://docs.cycling74.com/reference/sampstoms~) | Convert time from samples to milliseconds |
| [mstosamps~](https://docs.cycling74.com/reference/mstosamps~) | Convert milliseconds to samples |
