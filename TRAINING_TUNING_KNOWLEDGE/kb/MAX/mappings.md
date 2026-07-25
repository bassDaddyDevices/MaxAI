---
type: max
name: "mappings"
summary: "Utility object for Mappings"
signal: false
url: "https://docs.cycling74.com/reference/mappings/"
package: "Max"
see_also: ["midiin", "notein", "ctlin", "bendin", "xbendin", "key"]
---
# mappings

Utility object for Mappings

## Description

The [mappings](https://docs.cycling74.com/reference/mappings) object allows you to enable and disable keyboard and MIDI mapping from your Max patcher, as well as some other useful utilities.

## Arguments

None.

## Attributes

### file[symbol]:

The
file
attribute can be used to specify the current .maxmap file.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### (mouse)

Double-click on the [mappings](https://docs.cycling74.com/reference/mappings) object to open the Mappings Window for the current patcher.

### key

A non-zero value for  on/off  will enable Keyboard Mapping mode. A zero value will disable it.

Arguments:

- on/off
  [int]

### midi

A non-zero value for  on/off  will enable MIDI Mapping mode. A zero value will disable it.

Arguments:

- on/off
  [int]

### open

Open the Mappings Window for the current patcher.

### read

The message  read  followed by a  filename  argument will attempt to read the specified .maxmap file and apply the contained mappings to the current patcher. Without an argument, an Open File dialog will be presented.

Arguments:

- filename
  [symbol]

### write

The message  write  followed by a  filename  argument will attempt to write the current mappings to the specified .maxmap file. Without an argument, a Save File dialog will be presented.

Arguments:

- filename
  [symbol]

## See Also

| Name | Description |
| --- | --- |
| [midiin](https://docs.cycling74.com/reference/midiin) | Output raw MIDI data |
| [notein](https://docs.cycling74.com/reference/notein) | Receive MIDI note messages |
| [ctlin](https://docs.cycling74.com/reference/ctlin) | Output received MIDI control values |
| [bendin](https://docs.cycling74.com/reference/bendin) | Output MIDI pitch bend values |
| [xbendin](https://docs.cycling74.com/reference/xbendin) | Interpret extra precision MIDI pitch bend values |
| [key](https://docs.cycling74.com/reference/key) | Report keyboard presses |
