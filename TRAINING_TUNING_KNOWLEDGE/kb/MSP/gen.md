---
type: msp
name: "gen"
summary: "Generate native audio event processing routines"
signal: false
url: "https://docs.cycling74.com/reference/gen/"
package: "MSP"
see_also: ["Gen Common Operators", "Gen Overview", "gen~ Operators", "gen~"]
---
# gen

Generate native audio event processing routines

## Description

The [gen](https://docs.cycling74.com/reference/gen) object turns an embedded Gen patcher into event processing routines analagous to what the [gen~](https://docs.cycling74.com/reference/gen~) object does for audio signals. The Gen patcher can be built from a wide set of low-level Gen operator objects as well as embedded code expressions.

## Arguments

### patcher-name[symbol] optional

The first argument, if given, specifies the name of a .gendsp patcher to be loaded which already exists and is in the Max search path. The patcher can also be specified using the gen attribute. If no Gen patcher is specified by argument or gen attribute, an embedded Gen patcher is created instead.

## Attributes

### active[int]: 0

The gen object contains an internal metro controlled by the active and interval attributes. When you change @interval the sample rate is updated (and currently the patch is recompiled); for an interval of 250 the sample rate is 4 samples per second. This permits oscillators etc. to work at any resolution in the event domain.

### autoexport[int]: 1

Automaticall export code on edit. Equivalent to sending the exportcode message every time an edit is made.

### cpu[float] read-only

Reports cpu usage as a fraction of available compute time, if cpumeasure is enabled.

### cpumeasure[int]: 0

CPU monitoring must be enabled for cpu to work.

### dumpoutlet[int]: 0

Enables an additional "dump" outlet for diagnostics, such as reading the cpu attribute.

### exportfolder[symbol]:

Folder to export code into. Used by the exportcode message to determine what directory to write source files into.

### exportname[symbol]:

Export Filename

### exportnotifier[symbol]:

Receive object name to receive export notification

### exportscript[symbol]:

Post export script

### exportscriptargs[symbol]:

Post export script arguments

### gen[symbol]:

Gen patcher name to load from disk

### hot[int]: 0

Any inlet will trigger output when >hot is on. Otherwise the standard behavior of only the left inlet triggering output will be used.

### interval[float]: 5.

The gen object contains an internal metro controlled by the active and interval attributes. When you change @interval the sample rate is updated (and currently the patch is recompiled); for an interval of 250 the sample rate is 4 samples per second. This permits oscillators etc. to work at any resolution in the event domain.

### nocache[int]: 0

The nocache attribute, with an argument of 1, recompiles the Gen patcher regardless of whether another instance of Gen has already compiled it. When set to 0 (default), Gen caches previous compiles to save on load time.

### poll[int]: 0

Enable attribute polling

### title[symbol]

Alias:
t

Set patcher title.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Execute a calculation of the gen patcher or expression.

### int

Set input value (if signal is not attached).

Arguments:

- value
  [int]

### float

Set input value (if signal is not attached).

Arguments:

- value
  [float]

### (mouse)

Double-click to open the Gen patcher.

### exportcode

Export a gen patcher as C++ code.

### open

View the Gen patcher.

### reload

Reload the Gen patcher.

### reset

Reset all parameters to defaults (including history values and buffer object associations).

### reset\_param

Resets a specific param, history or buffer object to the default initial value.

Arguments:

- name
  [symbol]

### set

Set input value without executing a calculation

Arguments:

- value
  [float]

### wclose

Close the view of the Gen patcher.

## See Also

| Name | Description |
| --- | --- |
| [Gen Common Operators](https://docs.cycling74.com/userguide/gen/gen_common_operators) | Gen Common Operators |
| [Gen Overview](https://docs.cycling74.com/userguide/gen/gen_overview) | Gen Overview |
| [gen~ Operators](https://docs.cycling74.com/userguide/gen/gen~_operators) | gen~ Operators |
| [gen~](https://docs.cycling74.com/reference/gen~) | Generate native audio signal processing routines |
