---
type: msp
name: "retune~"
summary: "Ztx-based pitch detection and pitchshift"
signal: true
url: "https://docs.cycling74.com/reference/retune~/"
package: "MSP"
see_also: ["fbinshift~", "freqshift~", "fzero~", "gizmo~", "hilbert~", "pitchshift~"]
---
# retune~

Ztx-based pitch detection and pitchshift

## Arguments

### standard pitch[int] optional

Reference tuning in Hz, the default is 440 Hz.

## Attributes

### correction\_ambience\_threshold[float]: 0.3

Set the automatic bypass when the signal contains too much noise or background ambience (reverb). A value between 0.2 and 0.4 is usually a good starting point. Range: (-10...10).

### correction\_amount[float]: 100.

Set the amount of pitch correction. 0 means no correction, 100 means full correction.

### correction\_bypass[float]: 100.

Define the sibilance threshold at which the original signal is passed through unaffected. This bypass switch is required to make sure that sibilances in vocal recordings don’t sound too processed. A default setting of 100 is good.

### correction\_threshold[float]: 0.

Define the threshold at which the correction takes effect. For most applications this should be set to 0 as this will correct notes that are more that 0 cent off, wrt their ideal pitch. A setting of 10 will allow a pitch deviation of 10 cents in either direction before the correction takes effect.

### enablednotes[36 atoms]: all

Either the keyword “all” or a list of notes in the range from 0 to the size of the current scale minus 1 (0 .. 11 in the case of a chromatic scale) determines which notes retune will quantize to. That list may also be sent in the form of a message (e.g. enablednotes 0 2 3 5 7 9 10 ).

### notebase[int]

Base note for the currently used scale.

Possible values:

0 = 'C'

1 = 'C#'

2 = 'D'

3 = 'D#'

4 = 'E'

5 = 'F'

6 = 'F#'

7 = 'G'

8 = 'G#'

9 = 'A'

10 = 'A#'

11 = 'B'

### notelist[36 symbols]

A list of note values or relations is used to specified the scale values used for retuning. The format follows the format used in the Scala definition standard.

e.g.:

Chromatic Scale: 100 200 300 400 500 600 700 800 900 1000 1100

Major Scale: 200 400 500 700 900 1100

Pythagorean Major Scale: 9/8 81/64 4/3 3/2 27/16 243/128

### pitchdetection[int]

Returns the average pitch of the segment that is currently being analyzed. This can be used as a pitch detector. A return value of 0.0 means that no coherent pitch could be estimated. You should expect an output fundamental frequency in the range of 50 Hz to 1000 Hz. Please note that this feature is experimental and might produce unpredictable results. In particular, it might introduce octave errors for the measured pitch depending on the input signal. Output as a signal from the second outlet.

### quality[int]

Sets the relative quality for retuning operations.

Possible values:

'basic'
(
Basic quality for retuning calculations (the default)
)
'good'
(
Good quality for retuning calculations
)
'better'
(
Better quality for retuning calculations
)
'best'
(
Highest quality for retuning calculations
)

### reportlatency[int]

Enable (1) or disable (0) sending latency information out the right outlet of the [retune~](https://docs.cycling74.com/reference/retune~) object. Latency is reported in samples.

### retune[int]

Enable (1) or disable (0) retuning.

### use\_16bit[int]

Enable (1) or disable (0) 16-bit processing. Better CPU performance can be obtained by using 16-bit processing, and it is reccomended if you are using the object for pitch detection and not retuning.

### windowsize[int]: 0

Specifies the window size to be used for retuning calculations. The range is between 16 samples and the currently used signal vector size.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### list

MIDI notes as list e.g. “60 100” and “60 0” to enable/disable notes in the current notelist. If the default 12 tone chromatic scale is active, sending the note C3 (60) will enable note 0 (60 modulo 12), which is C.

Arguments:

- MIDI note
  [list]

### defaulttuning

Go back to the default 12 note chromatic tuning.

### flush

The  flush  message is used in conjunction with sending MIDI notes and will re-enable all notes in a scale.

### getlatency

Report the latency in samples introduced by the retune~ object out the rightmost outlet.

### signal

Signal values in the second or third inlets are used to lock the retuned signal to a specific pitch (Hz) (inlet 2) or to de fine detune modulation (inlet 3) values (Cents).

## See Also

| Name | Description |
| --- | --- |
| [fbinshift~](https://docs.cycling74.com/reference/fbinshift~) | Frequency domain frequency shifter for pfft~ |
| [freqshift~](https://docs.cycling74.com/reference/freqshift~) | Time-domain frequency shifter |
| [fzero~](https://docs.cycling74.com/reference/fzero~) | Fundamental frequency and pitch estimator |
| [gizmo~](https://docs.cycling74.com/reference/gizmo~) | Frequency-domain pitch shifter for pfft~ |
| [hilbert~](https://docs.cycling74.com/reference/hilbert~) | Phase quadrature filter |
| [pitchshift~](https://docs.cycling74.com/reference/pitchshift~) | Ztx-based real-time pitchshifting |
