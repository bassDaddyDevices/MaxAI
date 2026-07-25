---
type: mc
name: "mc.amxd~"
summary: "Host Max for Live devices (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.amxd~/"
package: "Max for Live"
see_also: ["vst~", "mcs.amxd~"]
---
# mc.amxd~

Host Max for Live devices (multichannel)

## Description

Use the [amxd~](https://docs.cycling74.com/reference/amxd~) object to load a Max for Live device and use it in MSP. When the [amxd~](https://docs.cycling74.com/reference/amxd~) object is instantiated as [mcs.amxd~](https://docs.cycling74.com/reference/mcs.amxd~) its audio inputs combined into a single multichannel input and its audio outputs are combined into a single multichannel output.

## Arguments

### devicename[symbol] optional

Name of the Max for Live device to load.

## Attributes

### active[int]: 1

Setting  active  to false will disable audio and MIDI processing.

### annotation\_name[symbol]:

The string that is prepended to annotations. This shows up in the Info pane in Live, and the clue window in Max.

### autosave[int]: 1

Autosave Snapshot

### autosize[int]: 1

Automatically calculate the window size for the Max for Live device on load.

### latency[int]: 0

Latency (ms)

### mcisolate[int]: 0

Isolate parameter changes to a specified channel.

### parameter\_enable[int]

Enables use of this object with [Max for Live Parameters](https://docs.cycling74.com/userguide/m4l/live_parameters) and [setting initial values of parameters](https://docs.cycling74.com/userguide/parameter_mode) in Max.

### patchername[symbol]: <none>

Specify the Max for Live device to be loaded

### realtime\_params[int]: 0

Enables real-time parameter info updates out of the 4th outlet.

### showheader[int]: 1

Show a Header for the Max for Live device.

### Snapshot Attributes

### autosave[int] write-only

When the containing patcher is saved, the state of this object's snapshots will also be saved.

### Multichannel Group Attributes

Shared across all objects — see [Multichannel Group Attributes](../_shared/mc-group-attributes.md).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### anything

Control Parameter values with a message consisting of the parameter name and the value e.g.: "Gain -6"

Arguments:

- Parameter
  [list]

### (drag)

Drag a Max for Live .amxd file from the patcher window sidebar or the Finder/Explorer onto an [amxd~](https://docs.cycling74.com/reference/amxd~) object to load the Max for Live device into the object.

### (mouse)

Click and drag a Max for Live .amxd file from the patcher window sidebar to create an [amxd~](https://docs.cycling74.com/reference/amxd~) object containing the Max for Live device.

### drag\_replace

In an unlocked patch, drag any Max for Live device onto the amxd~ object to replace the loaded device.

### getinfo

Get info about a specific parameter out of the 4th outlet.

Arguments:

- parameter-name
  [symbol]

### getparams

Get a list of all available parameters out of the 4th outlet.

### getvalue

Get the value of a specific parameter out of the 4th outlet.

Arguments:

- parameter-name
  [symbol]

### midievent

The word  midievent , followed by two to four numbers, sends a MIDI event to the Max for Live device. The first three number arguments are the bytes of the MIDI message. The fourth, optional, argument is a detune parameter used for MIDI note messages. The value ranges from -63 to 64 cents, with 0 being the default.

Arguments:

- MIDI-message (2 to 4 numbers)
  [list]

### midiin

In the third inlet, send MIDI messages to the Max for Live device.

Arguments:

- MIDI
  [int]

### open

The  open  message with no arguments opens a floating window for the Max for Live device. If the window was previously opened, then the edit window location will be brought to the front.

Arguments:

- window-coordinates
  [list]

### signal

Input to be processed by the Max for Live device. If the device is an instrument plug-in, the input will be ignored.

### Snapshot Messages

### snapshot >= 7.0.0

Create a snapshot. When  embedsnapshot  is on it will be saved into the current patcher. Otherwise it will be saved in an external file. You can determine the filename by an argument to this message.

Arguments:

- file-name
  [symbol]

### restore >= 7.0.0

Restore a snapshot. When  embedsnapshot  is on, the snapshot that is embedded in the current patcher will be used. Otherwise it will be loaded from an external file. You can determine the filename by an argument to this message.

Arguments:

- file-name
  [symbol]

### addsnapshot

Add a new snapshot. If there are no arguments, it will append the new snapshot to the current list of snapshots. If the first argument is a string containing a file path, Max will try to save a .maxsnap file to that location. If the first argument is a number, it will save the snapshot to that slot, incrementing subsequent slots. If the second argument is a string, it will set the name of the snapshot.

Arguments:

- userpath
  [String]
- index
  [Number]
- name
  [String]

### deletesnapshot

Delete a snapshot at the given index, decrementing subsequent slots.

Arguments:

- index
  [Number]

### exportsnapshot

Exports a snapshot from the given index, specified by the first argument. The second argument specifies the file name and path to export a maxsnap file to. If the second argument is empty, a File dialog box will open, allowing you to specify a file name and location.

Arguments:

- index
  [Number]
- filename
  [String]

### importsnapshot

Imports a snapshot to the given index, specified by the first argument. The second argument specifies the file name and path to load a maxsnap file from. If the second argument is empty, a File dialog box will open, allowing you to choose a file.

Arguments:

- index
  [Number]
- filename
  [String]

### setsnapshotname

Set the name of the snapshot at the given index.

Arguments:

- index
  [Number]
- name
  [String]

### setembedsnapshot

Set the embed state of the snapshot at the index.

Arguments:

- index
  [Number]
- embedstate
  [Number]

### movesnapshot

Change a snapshot's index.

Arguments:

- srcindex
  [Number]
- dstindex
  [Number]

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

## See Also

| Name | Description |
| --- | --- |
| [vst~](https://docs.cycling74.com/reference/vst~) | Host VST, VST3 and Audio Unit plug-ins |
| [mcs.amxd~](https://docs.cycling74.com/reference/mcs.amxd~) | Host Max for Live devices |
