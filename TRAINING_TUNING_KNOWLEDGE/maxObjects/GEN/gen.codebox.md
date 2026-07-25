---
type: gen
name: "gen.codebox"
summary: "Generate native audio signal processing routines"
signal: false
url: "https://docs.cycling74.com/reference/gen.codebox/"
package: "MSP"
see_also: ["bogus"]
---
# gen.codebox

TEXT\_HERE

## Arguments

None.

## Attributes

### bgcolor[4 floats]

Sets the color for the object's background frame.

### linenumbers[int]: 1

Show lefthand column containing line numbers for non empty lines.

### linenumberwidth[int32]: 20

Set the width of lefthand line number column in pixels.

### margin[int32]: 4

Set the width of the left and righthand margin in pixels

### style[symbol]:

Style

### textcolor[4 floats]

The default textcolor (typically overridden by syntax coloring)

### title[symbol]

Set patcher title.

### poll[int]: 0

Enable attribute polling

### exportscriptargs[symbol]:

Post export script arguments

### exportscript[symbol]:

Post export script

### exportnotifier[symbol]:

Receive object name to receive export notification

### exportname[symbol]:

Export Filename

### exportfolder[symbol]:

Folder to export code into. Used by the exportcode message to determine what directory to write source files into.

### dumpoutlet[int]: 0

Enables an additional "dump" outlet for diagnostics, such as reading the cpu attribute.

### gen[symbol]

Gen patcher name to load from disk

### cpumeasure[int]

CPU monitoring must be enabled for cpu to work.

### cpu[float]

Reports cpu usage as a fraction of available compute time, if cpumeasure is enabled.

### autoexport[int]: 1

Automaticall export code on edit. Equivalent to sending the exportcode message every time an edit is made.

### hot[int]

Any inlet will trigger output when >hot is on. Otherwise the standard behavior of only the left inlet triggering output will be used.

### active[int]

The gen object contains an internal metro controlled by the active and interval attributes. When you change @interval the sample rate is updated (and currently the patch is recompiled); for an interval of 250 the sample rate is 4 samples per second. This permits oscillators etc. to work at any resolution in the event domain.

### interval[float]

The gen object contains an internal metro controlled by the active and interval attributes. When you change @interval the sample rate is updated (and currently the patch is recompiled); for an interval of 250 the sample rate is 4 samples per second. This permits oscillators etc. to work at any resolution in the event domain.

### nocache[int]: 0

The nocache attribute, with an argument of 1, recompiles the Gen patcher regardless of whether another instance of Gen has already compiled it. When set to 0 (default), Gen caches previous compiles to save on load time.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### (mouse)

Double-click to open the Gen patcher.

### exportcode

Export a gen patcher as C++ code.

### open

View the Gen patcher.

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

### set

Set input value without executing a calculation

Arguments:

- value
  [float]

### bang

Execute a calculation of the gen patcher or expression.

### reload

Reload the Gen patcher.

### wclose

Close the view of the Gen patcher.

### reset

Reset all parameters to defaults (including history values and buffer object associations).

### reset\_param

Resets a specific param, history or buffer object to the default initial value.

Arguments:

- name
  [symbol]

## See Also

| Name | Description |
| --- | --- |
| [bogus](https://docs.cycling74.com/reference/bogus) |  |
