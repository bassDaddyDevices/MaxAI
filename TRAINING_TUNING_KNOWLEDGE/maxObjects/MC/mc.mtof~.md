---
type: mc
name: "mc.mtof~"
summary: "Convert a MIDI note number to frequency at signal rate (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.mtof~/"
package: "MC"
see_also: ["expr", "ftom", "ftom~", "mtof"]
---
# mc.mtof~

Convert a MIDI note number to frequency at signal rate (multichannel)

## Description

Use [mtof~](https://docs.cycling74.com/reference/mtof~) to convert MIDI note numbers to frequency at signal rate

## Arguments

None.

## Attributes

### base[float]

Sets the "base frequency" used when calculating frequency values (e.g., A = 440.). The default is 440.

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

Note: to indicate an unmapped key, you can use either an "x" or "-1". At the end of the list, unmapped keys may be left out. For more information about mappings, visit
[the Scala documentation.](https://www.huygens-fokker.org/scala/help.htm#mappings)

### mapname[symbol]

The name of a valid keyboard map file in Scala format that has been saved in Max's search path will cause [mtof~](https://docs.cycling74.com/reference/mtof~) to use that mapping. The file extension (.kbm) can be omitted. For more information about keyboard mappings, visit
[the Scala documentation.](https://www.huygens-fokker.org/scala/help.htm#mappings)

### mid[int]

The note number where a Scala scale begins (default 60).

### ref[int]

The MIDI note number assigned to the base frequency (default 69).

### scale[atom]

A set of values, given as a list, for a scale described using the Scala format. The first value is the count of notes, followed either by floats defining a value in cents (example: 579.47057) or a ratio of two ints (example: 5/4). For more information, see the
[the Scala documentation.](https://www.huygens-fokker.org/scala/scl_format.html)

### scalename[symbol]

A valid scale name from the
[Scala archive](https://www.huygens-fokker.org/docs/scalesdir.txt)
, will cause [mtof~](https://docs.cycling74.com/reference/mtof~) to use the tuning described in that scale for its MIDI to frequency conversion. For this purposes of this attribute, the file extension (.scl) can be omitted.

### Multichannel Group Attributes

Shared across all objects — see [Multichannel Group Attributes](../_shared/mc-group-attributes-v2.md).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### signal

Outputs the frequency corresponding to the input MIDI note number

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

## Output

### signal

The frequency corresponding to the input MIDI note number as a signal.

## See Also

| Name | Description |
| --- | --- |
| [expr](https://docs.cycling74.com/reference/expr) | Evaluate a mathematical expression |
| [ftom](https://docs.cycling74.com/reference/ftom) | Convert frequency to a MIDI note number |
| [ftom~](https://docs.cycling74.com/reference/ftom~) | Convert frequency to MIDI note numbers at signal-rate |
| [mtof](https://docs.cycling74.com/reference/mtof) | Convert a MIDI note number to frequency |
