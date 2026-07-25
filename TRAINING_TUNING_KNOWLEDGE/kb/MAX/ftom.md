---
type: max
name: "ftom"
summary: "Convert frequency to a MIDI note number"
signal: false
url: "https://docs.cycling74.com/reference/ftom/"
package: "Max"
see_also: ["expr", "ftom~", "mtof"]
---
# ftom

Convert frequency to a MIDI note number

## Description

[ftom](https://docs.cycling74.com/reference/ftom) converts frequency to MIDI note numbers

## Arguments

### format[float] optional

If a float value is present, the [ftom](https://docs.cycling74.com/reference/ftom) object outputs floating-point values with fractional parts. By default, it outputs whole number values.

## Attributes

### base[float]

Sets the "base frequency" used when converting frequency values (e.g., A = 440.). The default is 440.

### map[atom]

A set of values for a keyboard map in Scala format:

- Size of map; the pattern repeats every so many keys (example: 12)
- First MIDI note number to retune (example: 0)
- Last MIDI note number to retune (example: 127)
- Middle note where the first entry of the mapping is mapped to (example: 60)
- Reference note for which frequency is given (example: 69)
- Frequency for reference note, as a float (example: 440.0)
- Frequency for reference note, as a float (example: 440.0)
- Scale degree to consider as formal octave, determines difference in pitch between adjacent mapping patterns (example: 12)
- Mapping (example: 0 1 2 3 4 5 6 7 8 9 10 11)

Note: to indicate an unmapped key, you can use either an "x" or "-1". At the end of the list, unmapped keys may be left out. For more information about keyboard mappings, visit
[the Scala documentation.](https://www.huygens-fokker.org/scala/help.htm#mappings)

### mapname[symbol]

The name of a valid keyboard map file in Scala format that has been saved in Max's search path will cause [ftom](https://docs.cycling74.com/reference/ftom) to use that mapping. The file extension (.kbm) can be omitted. For more information about keyboard mappings, visit
[the Scala documentation.](https://www.huygens-fokker.org/scala/help.htm#mappings)

### mid[int]

The note number where a Scala scale begins (default 60).

### ref[int]

The MIDI note number assigned to the base frequency (default 69).

### round[int]

When round is non-zero, [ftom](https://docs.cycling74.com/reference/ftom) outputs the closest whole MIDI note number value for the frequency it receives. Otherwise if in float mode, [ftom](https://docs.cycling74.com/reference/ftom) outputs a number with a fractional part corresponding to the distance between the two closest MIDI note numbers. If [ftom](https://docs.cycling74.com/reference/ftom) is in int output mode, it outputs the MIDI note number at or below the input frequency value. Example: in int mode with other attributes at their default values, 439 would output 69 when round is enabled and 68 when round disabled. 439 is closest to 440 Hz (MIDI note number 69).

### scale[atom]

A set of values, given as a list, for a scale described using the Scala format. The first value is the count of notes, followed either by floats defining a value in cents (example: 579.47057) or a ratio of two ints (example: 5/4). For more information, see
[the Scala documentation.](https://www.huygens-fokker.org/scala/scl_format.html)

### scalename[symbol]

A valid scale name from the
[Scala archive](https://www.huygens-fokker.org/docs/scalesdir.txt)
, will cause [ftom](https://docs.cycling74.com/reference/ftom) to use the tuning described in that scale for its frequency to MIDI conversion. For this purposes of this attribute, the file extension (.scl) can be omitted.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

Outputs the MIDI note number (from 0 to 127) corresponding to the frequency

Arguments:

- frequency
  [int]

### float

Outputs the MIDI note number (from 0 to 127) corresponding to the frequency

Arguments:

- frequency
  [float]

### list

Outputs a list of MIDI note numbers (from 0 to 127) corresponding to the frequencies in the input list

Arguments:

- list of frequencies
  [list]

## Output

### float

The MIDI note number that corresponds to the input frequency. When an input frequency falls between two equal tempered pitches, the value is rounded to the nearest int when [ftom](https://docs.cycling74.com/reference/ftom) is used in its default int mode. When [ftom](https://docs.cycling74.com/reference/ftom) is used in the optional float mode, the fractional part of the float is included, which could be used to calculate an additional pitch offset for applying MIDI pitch bend.

### int

The MIDI note number that corresponds to the input frequency. When an input frequency falls between two equal tempered pitches, the value is rounded to the nearest int when [ftom](https://docs.cycling74.com/reference/ftom) is used in its default int mode. When [ftom](https://docs.cycling74.com/reference/ftom) is used in the optional float mode, the fractional part of the float is included, which could be used to calculate an additional pitch offset for applying MIDI pitch bend.

## See Also

| Name | Description |
| --- | --- |
| [expr](https://docs.cycling74.com/reference/expr) | Evaluate a mathematical expression |
| [ftom~](https://docs.cycling74.com/reference/ftom~) | Convert frequency to MIDI note numbers at signal-rate |
| [mtof](https://docs.cycling74.com/reference/mtof) | Convert a MIDI note number to frequency |
