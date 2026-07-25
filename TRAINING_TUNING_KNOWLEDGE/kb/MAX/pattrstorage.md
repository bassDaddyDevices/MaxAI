---
type: max
name: "pattrstorage"
summary: "Save and recall pattr presets"
signal: false
url: "https://docs.cycling74.com/reference/pattrstorage/"
package: "Max"
see_also: ["autopattr", "pattrforward", "pattrhub", "pattrmarker"]
---
# pattrstorage

Save and recall pattr presets

## Description

View and modify client object data, and store or recall presets.

#### Discussion

Through the [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object, you can get/set any [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) or [autopattr](https://docs.cycling74.com/reference/autopattr) data (a la [pattrhub](https://docs.cycling74.com/reference/pattrhub), although you can talk to any object exposed to [pattr](https://docs.cycling74.com/reference/pattr) or [autopattr](https://docs.cycling74.com/reference/autopattr), not just those in the same patch). Data may be recalled as an interpolated value between 2 stored values.

## Arguments

### name[symbol] optional

A symbol argument may be optionally used to set the [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object's scripting name. In the absence of an argument, the [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object is given an arbitrary, semi-random name, such as u197000004.

## Attributes

### activewritemode[int]: 0

Sets the write mode for the active property of client objects. The default is 0 (disabled). When enabled, the active state of client objects will be saved with the XML preset data file and restored when this file is re-read.

### annotation\_name[symbol]:

Info View Title

### autopattr\_vis[int]: 0

Sets the visibility of [autopattr](https://docs.cycling74.com/reference/autopattr) objects in the clientwindow and storagewindow displays. The default is 0 (disabled). Since [autopattr](https://docs.cycling74.com/reference/autopattr) objects are not used for forming path names, one can generally ignore them for the purposes of display. When performing [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object functions, such as setting the  active  state or  priority  for an entire set of objects being exposed by a single [autopattr](https://docs.cycling74.com/reference/autopattr) object, the user needs to know the name of the objects' actual container object. Enabling  autopattr\_vis  may make this process somewhat clearer visually and conceptually.

### autorestore[int]: 1

Enables or disables the [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object's autorestore state. The default is 1 (on). When enabled, the [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object will automatically try to locate and read an XML file representing preset data when the patcher loads. The [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object will attempt to load the last-saved file. If the [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object in question has never saved a file, the object will attempt to load a file with the name (name).xml, where (name) is the patcher name of the [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object (usually, its argument).

### autowatch[int]: 0

Sets the [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object's file watching behavior. The default is 0 (disabled). When file watching is enabled, the most recently read or written XML data file will be reloaded automatically if it is modified. This allows you to use an external editor for your XML data file. When you save the file, the [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object will notice. Note that when the file is re-read, any currently unsaved data will be lost.

### backupmode[int]: 0

Sets the number of backup XML files to be maintained and rotated by the [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object when writing files. The default is 0 (disabled). The argument specifies the number of backups the [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object should make before the files start rotating (being automatically deleted to make room for new backups). The most recent backup is called pstoname.bak.xml. The next, pstoname\_1.bak.xml, followed by pstoname\_2.bak.xml, etc.

### changemode[int]: 0

Sets the [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object's data-filtration behavior. The default is 0 (disabled). When enabled, only changed values are sent from the [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object to client objects, and repeated data is filtered.

### client\_rect[4 floats]: 100. 100. 500. 600.

Sets a new size and position for the client list window. The window position is specified in global coordinates by 4 numbers (left, top, right, bottom).

### dirty[int]: 0

Enables or disables the patcher-dirty flag. The default is 0 (disabled). When enabled, the [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object will dirty the patch whenever its state changes.

### fileusagemode[int]: 0

Enables or disables the inclusion of JSON/XML storage files in collectives and standalones. The default is 0 (include storage file).

### flat[int]: 0

Enables or disables the [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object's client list display flag. The default is 0 (disabled). When enabled, the [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object's 2 windows will not display a hierarchical view of clients, instead display only data-containing objects (no patchers), and their full path name or alias.

### greedy[int]: 0

Sets the [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object's client search behavior flag. The  greedy  attribute provides a way to limit the amount of data a single [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object will manage. The following values are possible:

0 = disabled (the default). The [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object can see all [pattr](https://docs.cycling74.com/reference/pattr) objects or objects bound to [autopattr](https://docs.cycling74.com/reference/autopattr) objects in any child patches of the [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object (or child patches of those child patches, tunneling down through the patcher hierarchy), until another [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object is found. Although the [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object found in a child patch will be a client of the parent [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object, no other objects at that level or below in the patcher hierarchy will be.

1 = see everything. When the  greedy  attribute is set to 1, the [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object can see everything, all the way down to the bottom of the patcher hierarchy (including any [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) objects it finds along the way).

2 = clients only. When the  greedy  attribute is set to 2, the [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object can only see potential client objects in its patch. No other patches are searched.

Possible values:

0 = 'Off'

1 = 'Everything'

2 = 'Clients Only'

### notifymode[int]: 0

Sets the [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object's add/remove-notification behavior. The default is 0 (disabled). When enabled, the [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object will send a message from it's outlet every time an object is added or removed from its client list, in the form  [add/remove] [object pathname] . Note that the [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object must occasionally purge and fully rebuild its client list in response to certain events, resulting in significant output when  notifymode  is enabled and objects are being added and removed regularly.

### outputmode[int]: 0

Sets the [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object's auto-output behavior. The default is 0 (disabled). When enabled, the [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object will send a message from its outlet every time a value is sent to one of its client objects, in the form  [object pathname] [data ...] . The following modes are available:

0 = disabled

1 = output all values sent to client objects

2 = output only changed values sent to client objects (see changemode)
3 = output all values sent to client objects not initiated by a message to the [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object

4 = output only changed values sent to client objects not initiated by a message to the [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object (see changemode)
5 = output all values sent to client objects not initiated by a message to any [pattr](https://docs.cycling74.com/reference/pattr)-system object ([pattr](https://docs.cycling74.com/reference/pattr), [pattrhub](https://docs.cycling74.com/reference/pattrhub), [pattrforward](https://docs.cycling74.com/reference/pattrforward), [pattrstorage](https://docs.cycling74.com/reference/pattrstorage)).

6 = output only changed values sent to client objects not initiated by a message to any [pattr](https://docs.cycling74.com/reference/pattr)-system object (see changemode)

Possible values:

0 = 'Off'

1 = 'Output all values'

2 = 'Output changed values'

3 = 'Output all values (external)'

4 = 'Output changed values (external)'

5 = 'Output all values (non-pattr)'

6 = 'Output changed values (non-pattr)'

### parameter\_enable[int]

Enables use of this object with [Max for Live Parameters](https://docs.cycling74.com/userguide/m4l/live_parameters) and [setting initial parameter values](https://docs.cycling74.com/userguide/parameter_mode) in Max..

### savemode[int]: 1

Sets the [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object's save behavior. The default is 1 (prompt on object free). In this mode, if the [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object's preset data has changed (presets have been stored, deleted or modified since the last file  read  or  write  operation) at the time the object is freed, the object will prompt the user to write a preset file. In mode 2, [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) will attempt to autosave a preset file (without user interaction), whenever the patcher is saved. In mode 0, pattrstorage will neither prompt nor autosave. In mode 3, [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) will attempt to autosave a preset file (without user interaction), whenever the patcher is freed.

The following values are possible:

0 = Neither prompt nor autosave

1 = Prompt the user to save a preset file when the object is freed (default)

2 = Attempt to autosave whenever the patcher is saved, or if unsuccessful, prompt the user to save a preset file

3 = Attempt to autosave (without user interaction) when the patcher is freed. Failing that, prompt the user

Possible values:

0 = 'None'

1 = 'Prompt (free)'

2 = 'Autosave (save), or prompt'

3 = 'Autosave (free), or prompt'

### storage\_rect[4 floats]: 200. 200. 800. 500.

Sets a new size and position for the stored data window. The window position is specified in global coordinates by 4 numbers (left, top, right, bottom).

### subscribemode[int]: 0

Sets the subscription mode. The default is 0 (disabled). When enabled, the [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object uses a user-specified subscription list to determine which objects are clients, rather than discovering and maintaining all objects within the patcher/patcher hierarchy (as determined by the greedy attribute. The  subscribe  and  unsubscribe  messages can be used to add and remove objects to and from this list, and the  getsubscriptionlist  message can be used to output a list of currently subscribed objects.

### writefilter[int]: 1

When enabled (default), missing objects' data will be excluded from preset files saved by the [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object. When disabled, the data will be retained.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

Recalls the data from the preset specified by  int .

Arguments:

- index
  [int]

### float

Recalls the data from the preset specified by  float . If the number falls between two whole numbers (e.g.  1.5 ), the [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object will interpolate between the data stored in the preset corresponding to the integer portion of the float and the data stored at the preset numbered one higher (e.g.  1.5  will cause [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) to interpolate 50% between presets 1 and 2). See the  interp  message for more information about interpolation modes.

Arguments:

- index
  [float]

### anything

Incoming messages to the [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object are analyzed. If the first element of the message matches the path name or alias of an object maintained by the [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object (visible in the object's client list), the subsequent arguments in the message set that object's value. Otherwise, the message is ignored.

Arguments:

- arguments
  [list]

### active

The word  active , followed by a symbol that specifies the path name or alias of a client object and a 1 or 0, sets that object's active status. When a client object is active (default), its data will be recalled when presets are recalled--otherwise, the object is ignored during recall. Setting the  active  state of a parent object (such as a patcher-any client object containing other client objects), automatically sets the  active  state of the child objects of the parent to the same value.

Arguments:

- client
  [list]

### alias

The word  alias , followed by two symbols, generates an alias for the client object whose path name is given in the first argument. The alias permits the object to be referred to by a name given in the second argument.

For example,  alias a\_patcher::a\_pattr the\_pattr  would alias the object at the location a\_patcher::a\_pattr to the name the\_pattr.

Aliases can be used interchangeably with path names within the [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object, and are useful for referring to long paths by simpler, shorter names.

get  alias  The word get  alias , followed by a symbol that specifies the path name of a client object, returns that object's alias (if any) from the [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object's outlet, preceded by the symbol  alias .

Arguments:

- client
  [symbol]
- alias
  [symbol]

### clear

The word  clear  removes all presets from the [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object's internal list.

### client\_close

Closes the client list window.

### clientwindow

Opens the [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object's client list window (the title bar reads clientwindow (name), where (name) is the patcher name of the pattrstorage object which created the window).

Arguments:

- name
  [list]

### copy

The word  copy , followed by 2 or 3 arguments, copies the stored values from one numbered preset to another. Followed by 2 numbers, the stored values from the preset slot specified by the first number will be copied to the preset slot specified by the second number. If that slot doesn't yet exist, it will be automatically created. Followed by a symbol and 2 numbers, the stored values from a preset slot, as specified by the first number, of the [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object referred to by the symbol will be copied to a preset slot, as specified by the second number, of the object receiving the  copy  message. For example, the message  copy parent::psto\_parent 3 1  would cause preset 3 of the [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object called psto\_parent, located in the parent patch of the [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object receiving the  copy  message, to be copied to preset 1 of the [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object receiving the message. In order for this to function reliably, client path names must match exactly. If they do not, the data for that client is ignored.

Arguments:

- pattrstorage
  [symbol]
- from-index
  [int]
- t0-index
  [int]

### (mouse)

Double-clicking on a [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object opens the object's client list window, as if the object had received the  clientwindow  message.

### delete

The word  delete , followed by a number, clears any data in the preset whose index is specified by that number and removes the preset from the [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object's internal list. If  delete  is not followed by an argument, all presets are cleared and removed. See the  getslotlist  message for further information on viewing the object's list of presets.

Arguments:

- index
  [list]

### dump

The word  dump  reports the current value of all client objects from the [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object's outlet as a series of messages, each in the form  [object pathname] [data ...] . The output of  dump  is finished when the message  dump done  is output.

### fade

Identical to the  recall  message. Deprecated.

Arguments:

- list
  [list]

### fillempty

The word  fillempty  sets the value of any empty preset slots for all client objects to the current value of the respective object. For client [pattr](https://docs.cycling74.com/reference/pattr) objects with an initial value, the initial value will be used instead. No data is sent to the client objects themselves.

### getactive

The word  getactive , followed by a symbol that specifies the path name or alias of a client object, reports the active status of the client object from the [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object's outlet, preceded by the symbol  active .

Arguments:

- client
  [list]

### getalias

The word  getalias , followed by a symbol that specifies the path name or alias of a client object, will cause [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) to return that client-object's alias from its outlet.

Arguments:

- client
  [list]

### getclientlist

The word  getclientlist  reports the path names of any client objects from the [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object's outlet as a series of messages, each preceded by the symbol  clientlist . The output of  getclientlist  is finished when the message  clientlist done  is output.

### getcurrent

The word  getcurrent  reports the currently active preset from the [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object's outlet, preceded by the symbol  current .

### getedited

The word  getedited  reports the edit state of the currently active preset from the [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object's outlet, preceded by the symbol  edited . If the data in the currently active preset has been edited, the state is reported as  1 . Otherwise, the edit state is reported as  0 .

### getinterp

The word  getinterp , followed by a symbol that specifies the path name or alias of a client object, reports that object's interpolation mode from the [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object's outlet, preceded by the symbol  interp .

Arguments:

- client
  [list]

### getlockedslots

The word  getlockedslots  reports the indices of any locked slots from the [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object's outlet as a list, preceded by the symbol  lockedslots .

### getpriority

The word  getpriority , followed by a symbol that specifies the path name or alias of a client object, reports that object's priority from the [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object's outlet, preceded by the symbol  priority .

Arguments:

- client
  [list]

### getslotlist

The word  getslotlist  reports the numbers of any valid presets from the [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object's outlet, preceded by the symbol  slotlist .

### getslotname

The word  getslotname , followed by a number, causes the name of the preset slot specified by the number to be output from the pattrstorage object's outlet, preceded by the symbol  slotname .

Arguments:

- index
  [int]

### getslotnamelist

The word  getslotnamelist , followed by an optional number, reports the slot names of all used slots to be sent from the [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object's outlet as a series of messages, each preceded by the symbol  slotname . The output of  getslotnamelist  is finished when the message  slotname done  is output.

Without an argument, or with an argument of 0, the  getslotnamelist  message will cause all slots from 0 to the largest stored slot number to be output, regardless of whether the slot has been defined or not. This facilitates the use of the  getslotnamelist  message with objects such as [umenu](https://docs.cycling74.com/reference/umenu). To filter undefined slots (even if they have names), send the  getslotnamelist  message with a non-0 argument.

For more information, see the [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object's help file.

Arguments:

- range
  [int]

### getstoredvalue

The word  getstoredvalue , followed by a symbol that specifies the path name or alias of a client object and a number which specifies a preset, reports that object's value, as stored in that preset slot, from the [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object's outlet, in the form  [object pathname or alias] [data ...] .

Arguments:

- client
  [list]

### getsubscriptionlist

The word  getsubscriptionlist  causes the names of all subscribed objects to be sent from the [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object's outlet as a series of messages, each preceded by the symbol  subscriptionlist . The output of  getsubscriptionlist  is finished when the message  subscriptionlist done  is output. See the subscribemode attribute for more information.

### grab

The word  grab  causes the current value of all client objects to be reacquired by the [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object. This is particularly useful when the [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object is managing client objects whose data changes internally, without sending notifications to the [pattr](https://docs.cycling74.com/reference/pattr) system.

### insert

The word  insert , followed by a number, stores the data for every object maintained by [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) in a numbered preset. The number argument specifies the index of the preset to be stored. Any presets numbers at the specified index or higher are automatically incremented to make room for the inserted preset.

Arguments:

- index
  [int]

### interp

The word  interp , followed by at least 1 and up to 3 arguments ( symbol ,  symbol ,  float/symbol ), sets the interpolation status and mode for a specific client object. The first symbol specifies the path name or alias of a client object. The second symbol argument determines the mode, and can be one of the following values:

 off - No interpolation. Same as no additional argument.

 linear - Linear interpolation. Presets recalled using  float  or  fade  messages will be interpolated using a standard linear algorithm.

 thresh - Threshold. Takes optional 3rd argument, which sets the threshold. Presets recalled using  float  or  fade  messages will recall data from the first preset specified when the fade amount is below the threshold, and will recall data from the second preset specified when the fade amount is greater than or equal to the threshold.

 ithresh - Inverse threshold. Takes optional 3rd argument ( float ), which sets the threshold. Presets recalled using  float  or  fade  messages will recall data from the first preset specified when the fade amount is greater than or equal to the threshold, and will recall data from the second preset specified when the fade amount is less than the threshold.

 pow - Power curve. Takes optional 3rd argument ( float ), which sets the exponent to which the fade amount will be raised. Presets recalled using  float  or  fade  messages will recall data between the two specified presets, along the curve described. Power curves can be used to create faster or slower "attacks" and "decays" for the fade envelope.

 table - Table-specified curve. Takes optional 3rd argument ( symbol ), which specifies the name of a table to use for curve lookup. Presets recalled using  float  or  fade  messages will recall data between the two specified presets, along the curve described in the table. Tables are assumed to contain values between 0 and 100, representing the new fade amount \* 100 (this is clipped internal to the [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object, but is not normalized). The length of the table is stretched to match the expected fade values (between 0 and 1), so any number of table entries can be used. If the lookup fade amount does not fall exactly onto a table-specified value, linear interpolation is used to determine the new fade amount. Please see the [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) help file for examples of table-specified interpolation.

Arguments:

- arguments
  [list]

### locate

The word  locate , followed by a symbol corresponding to the path name or alias of an object, will cause the containing patcher of that object to be opened.

Arguments:

- client
  [symbol]

### lock

The word  lock , followed by 2 numbers, sets the lock status for a particular preset number. The first argument specifies the preset number to be locked or unlocked. The second argument specifies the lock state, and should be either 0 (unlocked) or 1 (locked). Locked presets cannot be deleted (using the  delete  or  remove  messages) or overwritten (using the  store  message). Locked presets can be moved (as a result of  insert ,  remove  or  renumber  messages, if performed on other presets). Locks are saved in the preset data file.

Arguments:

- index
  [int]
- status
  [int]

### lockall

The word  lockall , followed by a number, sets the lock status for all presets at once. The argument specifies the lock state, and should be either 0 (unlocked) or 1 (locked). Locked presets cannot be deleted (using the  delete  or  remove  messages) or overwritten (using the  store  message). Locked presets can be moved (as a result of  insert ,  remove  or  renumber  messages, if performed on other, unlocked presets). Locks are saved in the preset data file.

Arguments:

- status
  [int]

### priority

The word  priority , followed by a symbol that specifies the path name or alias of a client object and a number, sets the recall and display priority for that object. When presets are recalled, the data for client objects will be restored in the order established by  priority . Lower priorities are executed first. Negative priorities are permitted. Priority is only respected within a single level of the patcher hierarchy. Data in parent patchers will always be restored before data in nested patchers.

Arguments:

- client
  [list]

### purge

The word  purge  rebuilds the internal client list of the [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object, removing entries for client objects which have been deleted or moved. Typically, the [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object retains a reference to such objects, so that their settings ( priority ,  active ,  interp , etc.) can be restored if the objects reappear.

### read

The word  read , followed by an optional symbol that specifies a filename, reads an JSON or XML file representing preset data from disk into the [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object. If the argument is given, and represents a valid file path, the file will be read from that location--otherwise, a standard File Dialog will be presented for the user to manually choose the file to be read.

Arguments:

- filename
  [list]

### readagain

The word  readagain  re-reads an JSON or XML file previously specified by the  read  or  write  messages. If no file has been previously specified, a standard File Dialog will be presented for the user to manually choose the file to be read.

Arguments:

- filename
  [list]

### recall

The word  recall , followed by 1 to 4 arguments, recalls data from a preset. If  recall  is followed by a number or a floating-point number, the data for every object whose value is stored in the specified preset (or in the interpolated preset represented by a floating-point number - see the  float  message) will be recalled. If  recall  is followed by 2 arguments--a symbol and a number--and the  symbol  argument matches the path name or alias of a client object, only the data for the specified object will be recalled. The number argument always specifies the index (or interpolated index) of the preset to recall.

Followed by 3 or 4 arguments, the  recall  message recalls interpolated data from 2 presets at a specified weight between the two. If the word  recall  is followed by two numbers that specify the indices of two presets and a a floating point number between 0 and 1.0 that specifies an interpolation value, the data for every object whose value is stored in the specified presets will be recalled.

If  recall  is followed by a symbol that specifies the path name or alias of a client object followed by two numbers that specify the indices of two presets and a floating point interpolation value, only the data for the specified object will be recalled.

In these latter cases, the floating point argument specifies the weight of the interpolation, and should be between 0. and 1. A floating point argument of  0.  would simply recall the data for the preset matching the first index, and  1.  would recall the data for the preset matching the second index. See the  interp  message for more information about interpolation modes.

Arguments:

- client-name, preset-indices, and interpolation-value
  [list]

### recallmulti

The word  recallmulti , followed by at least 2 numeric arguments, permits weighted recall of multiple presets. Each argument determines the (normalized) weight of a particular preset in the final output. If the argument is an integer, the weight is 100%. If the argument is a floating point number, the integer part of the number determines the preset number, and the floating point part of the number determines the weight. For instance,  recallmulti 1.3 2.3 5.4  would weight preset 1 at 30%, preset 2 at 30% and preset 5 at 40%. Since weights are normalized, the total weight can be higher than 100%; for instance,  recallmulti 1.5 3.5 6.8  would calculate correct weights (27.77%, 27.77% and 44.44% respectively), and  recallmulti 1 2 3 ,  recallmulti 1.5 2.5 3.5  and  recallmulti 1.99 2.99 3.99  all result in the same output (33.33% for each member).

Arguments:

- weighted-pairs
  [list]

### remove

The word  remove , followed by a number, deletes the data for every object maintained by [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) in a numbered preset. The number argument specifies the index of the preset to be removed. Any presets numbers higher than the specified index are automatically decremented.

Arguments:

- index
  [int]

### renumber

The word  renumber  renumbers stored presets into consecutive preset slots, beginning with slot 1.

### resolvealias

The word  resolvealias , followed by a symbol that specifies the alias of a client object, returns that object's full path name (if any) from the [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object's outlet, preceded by the symbol  resolvealias .

Arguments:

- client
  [list]

### setall

The word  setall , followed by a symbol that specifies the path name or alias of a client object and a variable number of additional arguments corresponding to the value of the client object, sets the value of the specified client object  *for all preset slots*  to that value. No data is sent to the client object itself.

Arguments:

- client
  [list]

### setstoredvalue

The word  setstoredvalue , followed by a symbol that specifies the path name or alias of a client object, a number which specifies a preset and a variable number of additional arguments corresponding to the data expected by the client object, sets the value of the specified client object within the specified preset slot to the specified data.

Arguments:

- client
  [list]

### slotname

The word  slotname , followed by a number and an optional symbol, sets the name of the preset slot specified by the number. If the symbol argument is not present, the name of the slot is removed. Undefined slots can be given names for labeling purposes. If a [preset](https://docs.cycling74.com/reference/preset) object is linked to the [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object, it will display the slot name of the corresponding [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) slot.

Arguments:

- index
  [int]
- slotname
  [symbol]

### storage\_close

Closes the stored data window.

### storagewindow

Opens the [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object's stored data window (the title bar reads storagewindow (name), where (name) is the patcher name of the pattrstorage object which created the window).

Arguments:

- name
  [list]

### store

The word  store , followed by 1 or 2 arguments, stores data in a numbered preset. If the word  store  is followed by a number, the data for every object maintained by [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) will be stored. If  store  is followed by 2 arguments--a symbol and a number--and the symbol argument matches the path name or alias of a client object, only the data for the specified object will be stored. The number argument always specifies the index of the preset to be stored. If the preset index specified by the number argument is already in use, the existing data will be overwritten without a warning.

A storage slot of '0' is allowed, but \*IS NOT SAVED\* in a file. It can be used as a temporary slot for interpolation activities or other non-permanent experiments.

Arguments:

- client-and-index
  [list]

### storeagain

The word  storeagain  simply executes a  store  operation, using the most recently-use preset slot. If there is no previously-used preset slot (if the  store  message has never been sent to the object), the message is ignored.

Arguments:

- client
  [list]

### storenext

The word  storenext  executes a  store  operation, using the next empty preset slot, counting up from preset 1. For instance, if preset slots 1, 2 and 4 have data stored in them, and the [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object receives the  storenext  message, the current state of the client objects would be stored to preset slot 3. A second  storenext  message would cause the data to be stored to preset slot 5.

Arguments:

- client
  [list]

### subscribe

The word  subscribe , followed by one or more symbols, each corresponding to the path name or alias of an object, will add the specified object to the [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object's subscription list. See the subscribemode attribute for more information.

Arguments:

- target
  [list]

### unsubscribe

The word  unsubscribe , followed by one or more symbols, each corresponding to the path name or alias of an object, will remove the specified object from the [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) object's subscription list. See the subscribemode attribute for more information.

Arguments:

- target
  [list]

### write

The word  write , followed by an optional symbol that specifies a filename, writes any preset data to a JSON file on disk. If the argument is given, and represents a valid file path, the file will be saved at that location - otherwise, a standard File Dialog will be presented for the user to manually choose a name and location for the file to be saved.

Arguments:

- filename
  [list]

### writeagain

The word  writeagain  writes any preset data to a JSON file on disk previously specified by the  read  or  write  messages. If no file has been previously specified, a standard File Dialog will be presented for the user to manually choose a name and location for the file to be saved.

Arguments:

- filename
  [list]

### writejson

The word  writejson , followed by an optional symbol that specifies a filename, writes any preset data to a file on disk, in JSON format. If the argument is given, and represents a valid file path, the file will be saved at that location--otherwise, a standard File Dialog will be presented for the user to manually choose a name and location for the file to be saved.

Arguments:

- filename
  [symbol]

### writexml

The word  writexml , followed by an optional symbol that specifies a filename, writes any preset data to a file on disk, in XML format. If the argument is given, and represents a valid file path, the file will be saved at that location--otherwise, a standard File Dialog will be presented for the user to manually choose a name and location for the file to be saved.

Arguments:

- filename
  [symbol]

## Output

### anything

Multiple messages, corresponding to the various input messages above.

## See Also

| Name | Description |
| --- | --- |
| [autopattr](https://docs.cycling74.com/reference/autopattr) | Expose multiple objects to the pattr system |
| [pattrforward](https://docs.cycling74.com/reference/pattrforward) | Send any message to a named object |
| [pattrhub](https://docs.cycling74.com/reference/pattrhub) | Access all pattr objects in a patcher |
| [pattrmarker](https://docs.cycling74.com/reference/pattrmarker) | Provide pattr communication between patchers |
