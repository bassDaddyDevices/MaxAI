---
type: max
name: "pcontrol"
summary: "Open and close subwindows"
signal: false
url: "https://docs.cycling74.com/reference/pcontrol/"
package: "Max"
see_also: ["bpatcher", "inlet", "patcher", "thispatcher"]
---
# pcontrol

Open and close subwindows

## Description

Serves as a remote control for patcher/subpatcher windows and functions.

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### close

Closes the patcher window of any subpatches or patcher objects connected to the [pcontrol](https://docs.cycling74.com/reference/pcontrol) object's outlet.

Arguments:

- patcher
  [list]

### help

The word  help , followed by a symbol, opens a help file in Max's max-help folder with the name of the symbol followed by .help .

Arguments:

- filename
  [symbol]

### load

The word  load , followed by the name of a patcher file, opens that file if it can be found in Max's search path. The file name may optionally be followed by up to nine numbers and/or symbols, which will be substituted for the appropriate changeable  #  arguments ( #1  to  #9 ) in the patch being opened.

Arguments:

- filename
  [list]

### loadunique

The word  loadunique , followed by the name of a patcher file, opens a single instance that file if it can be found in Max's search path. If the file has already been loaded, the previously loaded copy will be activated (i.e. only a single copy of the file may be opened). As with the  load  message, the file name may optionally be followed by up to nine numbers and/or symbols, which will be substituted for the appropriate changeable  #  arguments ( #1  to  #9 ) in the patch being opened.

Arguments:

- patcher
  [list]

### open

Opens the patcher window of any subpatches or patcher objects connected to the [pcontrol](https://docs.cycling74.com/reference/pcontrol) object's outlet.

Arguments:

- patcher
  [list]

### shroud

The word  shroud , followed by the name of a patcher file, opens that file but does not show its window. (Use this message with care, since having patchers open but invisible can potentially lead to some disconcerting results.)

Arguments:

- filename
  [list]

### shroudunique

The word  shroudunique , followed by the name of a patcher file, opens that file but does not show its window. As with  loadunique , if the file has already been loaded, another copy will not be loaded. (Use this message with care, since having patchers open but invisible can potentially lead to some disconcerting results.)

Arguments:

- filename
  [list]

## Output

### Patcher-Control

Any subpatches or patcher objects connected to the [pcontrol](https://docs.cycling74.com/reference/pcontrol) object's outlet can have their patcher window opened or closed, or MIDI and Audio enabled/disabled, when the appropriate message is received in the inlet of [pcontrol](https://docs.cycling74.com/reference/pcontrol). The word  enable  followed by a  1  or a  0  will turn MIDI and Audio on or off for a patcher connected to the [pcontrol](https://docs.cycling74.com/reference/pcontrol) outlet. When followed by  1 1  or  0 1 , the  enable  message will also turn MIDI and Audio on or off for any subpatchers inside that connected patcher.

## See Also

| Name | Description |
| --- | --- |
| [bpatcher](https://docs.cycling74.com/reference/bpatcher) | Embed a subpatch with a visible UI |
| [inlet](https://docs.cycling74.com/reference/inlet) | Receive messages from outside a patcher |
| [patcher](https://docs.cycling74.com/reference/patcher) | Create a subpatch within a patch |
| [thispatcher](https://docs.cycling74.com/reference/thispatcher) | Send messages to a patcher |
