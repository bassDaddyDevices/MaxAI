---
type: msp
name: "vst~"
summary: "Host VST, VST3 and Audio Unit plug-ins"
signal: true
url: "https://docs.cycling74.com/reference/vst~/"
package: "MSP"
see_also: ["amxd~"]
---
# vst~

Host VST, VST3 and Audio Unit plug-ins

## Description

Use the [vst~](https://docs.cycling74.com/reference/vst~) object to load a real-time VST, VST3 or Audio Unit plug-in and use its audio processing in MSP. When [vst~](https://docs.cycling74.com/reference/vst~) is instantiated as [mcs.vst~](https://docs.cycling74.com/reference/mcs.vst~), the plug-in's audio inputs are combined into a single multichannel inlet and its audio outputs are combined into a single multichannel outlet.

#### Discussion

Some plug-ins have their own editing window, which is visible when you double-click on the object. Otherwise, double-clicking on the object displays a default parameter editing window. The number of signal inputs and outputs default to 2, but the number required by the plug-in may be less than that. If you want to specify a larger number of inputs and outputs, you can supply them as optional arguments.

Audio plug-ins loaded into a [vst~](https://docs.cycling74.com/reference/vst~) object can be synchronized by enabling the global transport (choose  **GlobalTransport**  from the Extras menu and click on the global transport's Activate button).

## Arguments

### number-of-inputs/outputs[int] optional

If the first or first and second arguments are numbers, they set the number of audio inputs and outputs. If there is only one number, it sets the number of outlets. If there are two numbers, the first one sets the number of inlets and the second sets the number of outlets.

### VST-plugin-filename[symbol] optional

Sets the name of a VST or Audio Unit plug-in file to load when the object is created. You can load a plug-in after the object is created (or replace the one currently in use) with the  plug  message.

### preset-effects-name[symbol] optional

After the plug-in name, a name containing preset effects for the plug-in can be specified. If found, it will be loaded after the plug-in has been loaded.

## Attributes

### annotation\_name[symbol]:

Annotation Name

### autosave[int]: 1

Autosave Snapshot

### bypass[int]: 0

Bypasses plug-in processing and passes all audio through the [vst~](https://docs.cycling74.com/reference/vst~) object.

### currentplug[atom] read-only

Currently Loaded Plugin

### enablehscroll[int]: 0 >= 7.0.0

Enable Horizontal Scrollbar

### enablevscroll[int]: 1 >= 7.0.0

Enable Vertical Scrollbar

### floateditorwindow[int]: 0

Float Editor Window

### genericeditor[int]: 0 >= 7.0.0

Use a generic editor interface for a plug-in. Note that some Audio Unit plug-ins will not show generic interfaces.

### legacytransport[int]: 0

Previous versions of Max did not correctly link the Max transport with plug-ins' internal transport. If existing patchers require the old behavior for proper operation, this attribute can be enabled for backward compatibility. The new behavior (attribute disabled) is generally preferable.

### mcisolate[int]: 0

Isolate parameter changes to a specified channel.

### parameter\_enable[int] >= 7.0.0

Enables use of this object with [Max for Live Parameters](https://docs.cycling74.com/userguide/m4l/live_parameters) and [setting initial parameter values](https://docs.cycling74.com/userguide/parameter_mode) in Max.

### prefer[symbol]: VST

In the absence of other information, such as an absolute path to a plug-in file or an explicit typed plug-in path (e.g.  C74\_VST:/[pluginname] ,  C74\_VST3:/[pluginname] , or  C74\_AU:/[pluginname]  on OSX), the prefer attribute will be used to preferentially load one type of plug-in before other available formats when using the  plug  message. Note that the variations  plug\_vst ,  plug\_vst3 , and  plug\_au  can also be used to override the specified preference.

Possible values:

'VST'

'VST3'

'AudioUnit'

### transport[symbol]

Sets the transport name. By default, this is unset, and the [vst~](https://docs.cycling74.com/reference/vst~) object will use the default transport (the Global Transport in Max, Live's transport in Max for Live). Setting this enables sync to [user-defined transports and clock sources](https://docs.cycling74.com/userguide/transport).

### valuemode[int]: 0

Determines the output at the [vst~](https://docs.cycling74.com/reference/vst~) object's fifth-from-right outlet. In Value mode (the default: 0), the object will send the parameter's index followed by a floating-point value between 0. and 1. (e.g.  2 0.25 ). In String mode (1), the object will send the parameter's index followed by a symbol value (e.g.  2 -6dB ). In Both mode (2), the object will send the parameter's index followed by a floating-point value and a symbol value (e.g.  2 0.25 -6dB ).

Possible values:

0 = 'Value'
(
Output parameter's normalized value (0. - 1.)
)
1 = 'String'
(
Output parameter's symbolic value
)
2 = 'Both'
(
Output parameter's normalized value followed by the symbolic value
)

### Snapshot Attributes

### autosave[int] write-only

When the containing patcher is saved, the state of this object's snapshots will also be saved.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

In left inlet: Changes the effect program of the currently loaded plug-in. The first program is number 1.

Arguments:

- effect-program
  [int]

### float

In left inlet: Floating point values are converted to  int  values and used to change the effect program of the currently loaded plug-in. The first program is number 1.

Arguments:

- effect-program
  [float]

### list

In left inlet: Changes a parameter value in the currently loaded plug-in. The first list element is the parameter number (starting at 1) and the second element is the parameter value. The second number should be a float between 0 and 1, where 0 is the minimum value of the parameter and 1 is the maximum.

Arguments:

- plugin-parameter
  [symbol]
- setting
  [float]

### anything

A symbol that names a plug-in parameter followed by a float between 0 and 1 set the value of the parameter.

Arguments:

- plugin-parameter
  [symbol]
- setting
  [float]

### (drag)

When a plug-in file is dragged from the file browser to a [vst~](https://docs.cycling74.com/reference/vst~) object, the plug-in will be loaded.

### (mouse)

Double-clicking on a [vst~](https://docs.cycling74.com/reference/vst~) object opens the plug-in's edit window.

### disable

The word  disable , followed by a non-zero argument, stops any further processing by the currently loaded plug-in and outputs a zero signal.  disable 0  enables processing for the plug-in.

Arguments:

- mute-flag (0 or nonzero)
  [int]

### drop

Unload the currently loaded plugin.

### get

The word  get , followed by a number or symbol argument, reports parameter values and plug-in information. This is output from the fifth-from-right outlet of [vst~](https://docs.cycling74.com/reference/vst~) as a list with the query index (or plug-in info index) as the first element and the desired information as the second element.

If a symbol argument is provided, and the symbol corresponds to the name of a parameter, the  get  message outputs the current parameter value (a float between 0 and 1) of the named parameter. Otherwise, nothing is output.

If a number argument is provided, and the number argument is between 1 and the number of parameters of the currently loaded plug-in (inclusive), the  get  message outputs the current parameter value (a float between 0 and 1) of the numbered parameter. If the argument is 0 nothing is output.

If a negative number argument is provided, the  get  message outputs a list with the first element specifying the number argument and the remaining elements specifying the following information:

 get -1  the plug-in's number of inputs

 get -2  the plug-in's number of outputs

 get -3  the plug-in's number of programs (VST) or factory presets (Audio Unit)

 get -4  the plug-in's number of parameters

 get -5  whether the plug-in's canMono flag is set. This indicates that the plug-in can be used in either a stereo or mono context

 get -6  1 if the plug-in has its own edit window, 0 if it doesn't

 get -7  1 if the plug-in is a synth plug-in, 0 if it isn't

 get -8  the unique ID of the plug-in as an integer value

 get -9  four integer values representing the left, top, right, and bottom coordinates of the desired rectangle of the plug-in UI edit window

 get -10  an integer value representing the initial delay of the plug-in in samples to allow you to automatically compensate for the plugin's latency in your patch

 get -11  the plug-in's number of user preset files (Audio Unit only)

Arguments:

- parameter-data-query-index or parameter-name
  [int or symbol]

### getsubnames

In left inlet: When using the [vst~](https://docs.cycling74.com/reference/vst~) object to host a VST shell plug-in (e.g., WaveShell) that is not instantiated with a specific plug-in name, the word  getsubnames  causes a list of sub plug-in names to be sent out the second-from-right outlet of the [vst~](https://docs.cycling74.com/reference/vst~) object.

### midievent

The word  midievent , followed by two to four numbers, sends a MIDI event to the plug-in. The first three number arguments are the bytes of the MIDI message. The fourth, optional, argument is a detune parameter used for MIDI note messages. The value ranges from -63 to 64 cents, with 0 being the default.

Arguments:

- MIDI-message (2 to 4 numbers)
  [list]

### mpeevent

Send MPE messages to the hosted VST, VST3, or Audio Unit plug-in.

Arguments:

- MPE-messages
  [list]

### open

The word  open  with no arguments opens the plug-in's edit window. If the window was previously opened then the edit window location will persist. The word  open  followed by two integer values specifying the left and top window coordinates respectively will open or move the plug-in's edit window to the given coordinates.

Arguments:

- window-coordinates
  [list]

### params

The word  params  causes a list of the plug-in's parameters to be sent out the sixth-from-right outlet.

### pgmnames

The word  pgmnames  causes a list of the plug-in's current program names to be sent out the right outlet.

### plug

In left inlet: The word  plug  with no arguments opens a standard open file dialog allowing you to choose a new VST or Audio Unit plug-in to host. The word  plug  followed by a symbol argument searches for plug-in with the specified name in the Max search path. If a new plug-in is opened and found, the old plug-in (if any) is discarded and the new one loaded. An optional second argument to the  plug  message can be used to specify a plug-in name within a shell plug-in (e.g., WaveShell). This can either be a symbolic plug-in name or an associated ID value as displayed by the  printids  message).

For mc.vst~, if the attribute @mcisolate is set to 1, sending a plug message will allow the user to load a VST for each instance individually. When @mcisolate is set to 0, any plug message received loads that plug-in to all instances.

When the Max application starts up, the system VST folder will be added to the max search path. On the Macintosh this is generally /Library/Audio/Plug-ins/VST/ and on windows this is the folder specified in the VSTPluginsPath string value under the registry key HKLM\Software\VST. On Mac OS, Audio Unit plug-ins will be scanned and .auinfo files for Apple built-in and user-installed plug-ins will be added to the search path.

Arguments:

- plug-in-name
  [symbol]

### plug\_au

Attempt to load an AudioUnit plug-in by name. Equivalent to  plug C74\_AU:/<plug-in name> .

Arguments:

- filename
  [list]

### plug\_vst

Attempt to load a VST plug-in by name. Equivalent to  plug C74\_VST:/<plug-in name> .

Arguments:

- filename
  [list]

### plug\_vst3

Attempt to load a VST3 plug-in by name. Equivalent to  plug C74\_VST3:/<plug-in name> .

Arguments:

- filename
  [list]

### presetnames

For Audio Unit plug-ins only, the word  presetnames  causes a list of the plug-in's user preset filenames to be sent out the right outlet.

### printids

In left inlet: When using the [vst~](https://docs.cycling74.com/reference/vst~) object to host a VST shell plug-in (e.g., WaveShell) that is not instantiated with a specific plug-in name, the word  printids  causes a list of sub plug-in IDs to be displayed in the Max Console.

### read

With no arguments,  read  opens a standard open file dialog prompting for a file of effect programs, either in bank or individual program format.  read  accepts an optional symbol argument where it looks for a VST plug-in bank or effect program file in the Max search path.

Arguments:

- filename
  [symbol]

### scan

Re-scan the system VST folders for new plug-ins. On the Macintosh this is generally /Library/Audio/Plug-ins/VST/ and on windows this is the folder specified in the VSTPluginsPath string value under the registry key HKLM\Software\VST. On Mac OS, Audio Unit plug-ins will be scanned and .auinfo files for Apple built-in and user-installed plug-ins will be added to the search path. The optional arguments 0, 1, 2, or 3, set the scan type to 0=default, 1=partial, 2=full, and 3=reset.

Arguments:

- scan type
  [int]

### set

In left inlet: The word  set , followed by a symbol, changes the name of the current effect program to the symbol.

Arguments:

- effect-program-name
  [symbol]

### signal

Input to be processed by the plug-in. If the plug-in is an instrument plug-in, the input will be ignored.

### subname

In left inlet: The word  subname , followed by a plug-in name or plug-in ID, will cause a shell VST plug-in (e.g., WaveShell) to be re-instantiated with the specified name/ID.

Arguments:

- plug-in-name
  [symbol]

### sysexevent

The word  sysexevent , followed by a sequence of numbers, sends a sysex message to the plug-in. The message should be complete and properly formatted (e.g. with a header  0xF0  ( 240 ) byte and a trailing  0xF7  ( 247 ) byte). If the first number in the list is  *not*   0xF0  ( 240 ), it will be interpreted as a sample offset for the message.

Arguments:

- sample-offset
  [int]
- sysex-bytes
  [list]

### unplug

Unload the currently loaded plugin.

### wclose

Closes the plug-in's edit window.

### write

For VST plug-ins, with no arguments,  write  opens a standard Save As dialog box prompting you to choose the name and type of the effect program file (single program or bank).  write  accepts an optional symbol argument that specifies a full or partial destination pathname. An individual program file is written in this case. For Audio Unit plug-ins, the filename argument is required, and specifies the name of a user preset that will be written to a standard plug-in user preset location.

Arguments:

- file/pathname
  [symbol]

### writebank

With no arguments,  writebank  opens a standard Save As dialog box prompting you to choose the name of the effect program bank file.  writebank  accepts an optional symbol argument that specifies a full or partial destination pathname. For Audio Unit plug-ins, the  writebank  message is the same as  write  and saves only the current settings to a named file.

Arguments:

- program-bank-file/pathname
  [symbol]

### writepgm

With no arguments,  writepgm  opens a standard Save As dialog box prompting you to choose the name of the individual effect program file.  writepgm  accepts an optional symbol argument that specifies a full or partial destination pathname. For Audio Unit plug-ins, the  writepgm  message is the same as  write  and saves the current settings to a named file.

Arguments:

- inividual-effect-program-file/pathname
  [symbol]

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

## Output

### float

Out fifth-from-right outlet: Parameter values or plug-in informational values in response to the  get  message.

### int

Out fifth-from-right outlet: Parameter values or plug-in informational values in response to the  get  message.

Out fourth-from-right outlet: Raw MIDI bytes received by the plug-in (but not any MIDI messages received using the  midievent  message). Please note though that some plug-ins echo their MIDI input to their MIDI output.

### list

Out second-from-right outlet: When a VST shell plug-in (e.g., WaveShell) is instantiated without specifying a plug-in name, a list of symbols specifying sub plug-in IDs are sent out the seventh outlet in response to the  printids  message.

### signal

Out left outlet (and other signal outlets as defined by the number of outputs argument): Audio output from the plug-in. The left outlet is the left channel (or channel 1).

### symbol

Out sixth-from-right outlet: The plug-in's parameters are sent out as a series of symbols in response to the  params  message.

Note: Some plug-ins, especially those with their own editors, fail to name the parameters.

Out third-from-right outlet: A series of symbols are sent out in response to the  pgmnames  message. If there are no program names, the message  pgmnames: Default  is output.

Out second-from-right outlet: When a VST shell plug-in (e.g., WaveShell) is instantiated without specifying a plug-in name, a series of symbols specifying plug-in names are sent out the seventh outlet in response to the  getsubnames  message.

Out right outlet: An Audio Unit plug-in's user preset files are sent out as a series of symbols in response to the  presetnames  message.

## See Also

| Name | Description |
| --- | --- |
| [amxd~](https://docs.cycling74.com/reference/amxd~) | Host Max for Live devices |
