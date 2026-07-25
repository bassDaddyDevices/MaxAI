---
type: mc
name: "mc.fzero~"
summary: "Fundamental frequency and pitch estimator  (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.fzero~/"
package: "MC"
see_also: ["ftom", "mtof", "peakamp~", "retune~", "thresh~"]
---
# mc.fzero~

Fundamental frequency and pitch estimator (multichannel)

## Description

The [fzero~](https://docs.cycling74.com/reference/fzero~) object estimates the fundamental frequency of an an incoming, monophonic audio signal. It performs multiple layers of wavelet transforms on an incoming vector, comparing the spacing between the peaks in each.

## Arguments

None.

## Attributes

### freqmax[int]

The maximum frequency, in Hertz, that the object will report.

### freqmin[int]

The minimum frequency, in Hertz, that the object will report.

### onsetamp[float]

fzero~ gives a bang or list out the right outlet when a new event crosses this amplitude threshold.

### onsetlist[int]

Onset detector output: bang or list(pitch, amplitude)

### onsetperiod[atom\_long]

This attribute sets the minimum number of samples between reporting any offsets.

Possible values:

'16'
(
samples
)
'32'
(
samples
)
'64'
(
samples
)
'128'
(
samples
)
'256'
(
samples
)
'512'
(
samples
)
'1024'
(
samples
)
'2048'
(
samples
)
'4096'
(
samples
)

### onsetpitch[float]

fzero~ gives a bang or list out the right outlet when the frequency changes by this amount, in in MIDI notes.

### period[atom\_long]

Sets the time period between analyses in samples.

Possible values:

'16'
(
samples
)
'32'
(
samples
)
'64'
(
samples
)
'128'
(
samples
)
'256'
(
samples
)
'512'
(
samples
)
'1024'
(
samples
)
'2048'
(
samples
)
'4096'
(
samples
)

### quiet[int]

Silence messages in the Max Console

### size[atom\_long]

Sets the buffer size to specify how many samples are analyzed each time.

Possible values:

'128'
(
samples
)
'256'
(
samples
)
'512'
(
samples
)
'1024'
(
samples
)
'2048'
(
samples
)
'4096'
(
samples
)

### threshold[float]

If the peak amplitude of the buffer is below this threshold, then [fzero~](https://docs.cycling74.com/reference/fzero~) will report nothing.

### Multichannel Group Attributes

Shared across all objects — see [Multichannel Group Attributes](../_shared/mc-group-attributes-v2.md).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### signal

audio signal to be analyzed.

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

## Output

### bang

Out right outlet: New note onset detected.

### float

Out left outlet: Estimated fundamental frequency in Hertz.

Out middle outlet: Peak amplitude of the analysis buffer at the time of the last analysis.

## See Also

| Name | Description |
| --- | --- |
| [ftom](https://docs.cycling74.com/reference/ftom) | Convert frequency to a MIDI note number |
| [mtof](https://docs.cycling74.com/reference/mtof) | Convert a MIDI note number to frequency |
| [peakamp~](https://docs.cycling74.com/reference/peakamp~) | Report the maximum amplitude of a signal |
| [retune~](https://docs.cycling74.com/reference/retune~) | Ztx-based pitch detection and pitchshift |
| [thresh~](https://docs.cycling74.com/reference/thresh~) | Detect signal above a set level |
