---
type: max
name: "chooser"
summary: "Display a scrolling list of selectable items"
signal: false
url: "https://docs.cycling74.com/reference/chooser/"
package: "Max"
see_also: ["umenu", "sfplay~", "folder", "jit.playlist", "playlist~"]
---
# chooser

Display a scrolling list of selectable items

## Description

The chooser object is similar to the [umenu](https://docs.cycling74.com/reference/umenu) object, but it displays a scrolling list of selectable items rather than a pop-up menu.

## Arguments

None.

## Attributes

### autopopulate[int]: 0

When the autopopulate attribute is enabled, the [chooser](https://docs.cycling74.com/reference/chooser) object updates its item list whenever the prefix attribute is set with a path or the collection or filekind attributes are set with a database query. When autopopulate is disabled, changing the object's current folder or file query has no effect on the item list. However, if you enable autopopulate after changing the prefix, collection, or filekind attributes, the item list will immediately update.

### bgcolor[4 floats]

Sets the background color of one of the [chooser](https://docs.cycling74.com/reference/chooser) object's rows in RGBA format. The other row background color is set by the stripecolor attribute.

### collection[symbol]:

When the collection attribute is set to a collection name, the item list will be populated with the names of files contained in the named collection. You can define a collection of files using the [File Browser](https://docs.cycling74.com/documentation/file_browser.maxvig.xml).

Possible values:

''

'Lessons'

'Plug-ins'

'Sample Collection'

'Vizzie Control'

'Vizzie Effect'

'Vizzie Generate'

'Vizzie Input'

'Vizzie Mix-Composite'

'Vizzie Output'

'Vizzie Transform'

'Vizzie Utility'

### depth[int]: 0

If the value of depth is 0, only the files contained in the folder specified by prefix will be added to the item list. If depth is greater than zero, then items in subfolders of the prefix folder will be added to the list, with the folder names(s) prepended to them. Items in subfolders up to the level specified by the depth attribute are included.

### enabledrag[int]: 1

When the enabledrag attribute is enabled, you can drag a named file item in the list to any Max object that accepts it (such as a [playlist~](https://docs.cycling74.com/reference/playlist~)).

### factorycontent[int]: 0

When the factorycontent attribute is enabled, files added to the chooser via the use of the collection or filekind query will include example files that ship with the Max application.

### filekind[symbol]:

The filekind attribute permits you to build a list of [chooser](https://docs.cycling74.com/reference/chooser) items containing all files of a specified type currently present in Max's search path. In order for the filenames to appear, the autopopulate attribute must be enabled.

Possible values:

''

'application'

'audiofile'

'audioplugin'

'bitmapandvectorfile'

'clipping'

'collective'

'dict'

'dictfile'

'file'

'gendsp'

'genexpr'

'genjit'

'helpfile'

'imagefile'

'java'

'javascript'

'jitterdatafile'

'json'

'lesson'

'livedevice'

'llllfile'

'lua'

'material'

'maxdatafile'

'maxforlive'

'maxpresets'

'maxsnapshot'

'midifile'

'model'

'moviefile'

'object'

'openexrfile'

'pass'

'patcher'

'preset'

'project'

'prototype'

'queryfile'

'reffile'

'rnbopat'

'sdiffile'

'shader'

'snippetfile'

'stringsfile'

'stylesheet'

'template'

'textfile'

'tutorial'

'vectorimagefile'

'video'

'vignette'

'webpage'

'xmlfile'

### filtertext[symbol]:

The filtertext attribute defines a text filter that modifies the list populated by the prefix, collection, or filekind attributes. Only files that contain the text in filtertext will be included in the [chooser](https://docs.cycling74.com/reference/chooser) object's list. When filtertext is empty, no filtering occurs.

### headerheight[int]: 0

The headerheight attribute sets the height of the [chooser](https://docs.cycling74.com/reference/chooser) object's header in pixels. By default the height is zero and the header is not shown.

### headerlabel[symbol]:

Header Label

### items[atom]

The items attribute is used by the inspector to set the text of all the items in the list after you edit them. However, when changing this attribute with a message, you can only set the first item, so we recommend using a  clear  message followed by a series of  append  messages to set a list of multiple items.

### keynavigate[int]: 1

The keynavigate attribute enables/disables letter key search navigation for [chooser](https://docs.cycling74.com/reference/chooser). When enabled (1) and the [chooser](https://docs.cycling74.com/reference/chooser) object is selected, pressing a letter on your keyboard will cause [chooser](https://docs.cycling74.com/reference/chooser) to select the item that begins with that letter. When disabled, key search navigation does not work. Disabling this attribute can be useful if you are using other key commands in your patch, such as with the [key](https://docs.cycling74.com/reference/key) object.

### margin[int]: 0

The margin attribute sets the left and right text margins used when drawing the item text. When the margin attribute is 0, the object draws the text using a default margin equal to 80% of the currently used font's height.

### multiselect[int]: 0

When multiselect is enabled, the [chooser](https://docs.cycling74.com/reference/chooser) object permits a user to select more than one item at a time by shift-clicking or command / control clicking. In addition, the multiselect attribute modifies how the [chooser](https://docs.cycling74.com/reference/chooser) object sends selected items out its outlets. The first and third item index outlets will send the message  selectedindices  followed by a list of one or more indices for each of the selected items. The second and fourth item contents outlets send the message  selecteditems  followed by a list of one or more symbols with the contents of each of the selected items.

### parameter\_enable[int]

Enables use of this object with [Max for Live Parameters](https://docs.cycling74.com/documentation/live_parameters.maxvig.xml) and allows for [setting initial parameter values](https://docs.cycling74.com/documentation/parameter_enable.maxvig.xml) in the Max environment.

### parameter\_mappable[int]: 1

When parameter\_mappable is enabled, the object will be available for mapping to keyboard or MIDI input using the [Mappings feature](https://docs.cycling74.com/documentation/mappings.maxvig.xml).

### prefix[symbol]:

The prefix attribute specifies a file path that will be used to populate the list of items. A file will be included in the list if its name contains the text of the current value of the filtertext attribute and its type is included in the types specified by the types attribute. In addition the depth attribute controls whether files contained within any subfolders of the prefix folder are listed. In order for the contents of the folder designated by prefix set the item list, the autopopulate attribute must be enabled.

### prefix\_mode[int]: 0

The prefix\_mode attribute controls how the [chooser](https://docs.cycling74.com/reference/chooser) object outputs the path location of a chosen filename when using prefix to list the contents of a folder.

Possible values:

0 = 'Concatenate'

The file name is combined with its containing folder name to create a single complete path name.

1 = 'Prepend'

The containing folder name is output as a separate symbol followed by the file name. This prefix mode cannot be used when multiselect is enabled.

2 = 'Ignore'

Only the file name is output.

### preview[int]: 0

When the preview attribute is enabled, the [chooser](https://docs.cycling74.com/reference/chooser) object shows a play button the to left of each item. If you connect the fifth outlet of [chooser](https://docs.cycling74.com/reference/chooser) to an object that can play the type of file displayed in the list ([sfplay~](https://docs.cycling74.com/reference/sfplay~), [jit.movie](https://docs.cycling74.com/reference/jit.movie), or [jit.playlist](https://docs.cycling74.com/reference/jit.playlist), clicking the play button next to an item will send commands to the connected object to begin playing the file specified by the item.

### selectedclick[int]: 0

When selectedclick is enabled, clicking on an already selected item reports that item. Otherwise items are only reported when the selection changes.

### selectioncolor[4 floats]

Sets the background color of the [chooser](https://docs.cycling74.com/reference/chooser) object's currently selected item in RGBA format. A custom background color for the selected item is only displayed if the useselectioncolor attribute is enabled.

### showdotfiles[int]: 0

Toggles the display of a any files whose names begin with a dot (period). The display of these files is normally supressed.

### stripecolor[4 floats]

Sets the second (alternating) background row color in RGBA format. The other row background color is set by the bgcolor attribute.

### style[symbol]:

Sets the style to be used for the [chooser](https://docs.cycling74.com/reference/chooser) object's visual display.

### textcolor[4 floats]

Sets the text color of the [chooser](https://docs.cycling74.com/reference/chooser) object in RGBA format.

### types[atom]

The types attribute is used in conjunciton with the prefix attribute. It permits filtering files contained in the prefix folder according to one or more types. The types are four-character type codes as those used by the [folder](https://docs.cycling74.com/reference/folder) object such as AIFF, WAVE, TEXT, and JSON.

### useselectioncolor[int]: 0

Toggles the use of the selectcolor attribute to define a custom selection color.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Sends the contents of the currently selected item out the second outlet and the index of the currently selected out the left outlet.

### int

Sets the currently selected item to the specified index, then sends that item's contents out the second outlet and its index out the left outlet.

Arguments:

- index
  [int]

### float

Sets the currently selected item to the specified index, then sends that item's contents out the second outlet and its index out the left outlet.

Arguments:

- index
  [float]

### anything

If the [chooser](https://docs.cycling74.com/reference/chooser) object contains an item whose contents matches the message, that item will be selected. Then the item's contents will be sent out the second outlet and its index will be sent out the left outlet. If there is no match, the currently selected item is not changed and no output occurs.

Arguments:

- contents
  [list]

### append

The word  append , followed by any message, appends that message to the end of the [chooser](https://docs.cycling74.com/reference/chooser) object's item list.

Arguments:

- message
  [list]

### clear

Removes all items

### count

Sends the number of items currently in the item list out the right outlet, preceded by the word  count .

### delete

The word  delete , followed by one or more item numbers, removes the numbered items from the item list.

Arguments:

- indices
  [list]

### deselect

The word  deselect  removes the visual reprepesentation of the selected item from the chooser object. It does not change the chooser object's current value, so a bang will still output the last selected item.

### dictionary

The word  dictionary , followed by a dictionary name, will set the items for [chooser](https://docs.cycling74.com/reference/chooser). You can also attach the first outlet of a [dict](https://docs.cycling74.com/reference/dict) object to the first inlet of [chooser](https://docs.cycling74.com/reference/chooser). In order for this to work, the dictionary needs to include an "items" entry. For example, the following dictionary entry will populate [chooser](https://docs.cycling74.com/reference/chooser) with the items "hank, carol, andreas, roland":

"items" : [ "hank", "carol", "andreas", "roland" ]

Arguments:

- dict-name
  [symbol]

### insert

The word  insert , followed by an index number and a message, inserts a new item to the list at the position specified by the index.

Arguments:

- index
  [int]
- message
  [list]

### (mouse)

A single-click on an item selects the item, causing its contents to be sent out the second outlet and its index to be sent out the left outlet. A double-click on an item sends its contents out the fourth outlet and its item index out the third outlet.

### next

The  next  message selects the next item in the list, then sends the selected item's contents out the second outlet and its index out the left outlet.

### play

The word  play , followed by an index number, sends a command to an object (such as [sfplay~](https://docs.cycling74.com/reference/sfplay~) or [jit.movie](https://docs.cycling74.com/reference/jit.movie)) connected to the fifth outlet to open and play the specified media file. The index argument selects the file to play.

Arguments:

- index
  [int]

### prev

The  prev  message selects the previous item in the list, then sends the selected item's contents out the second outlet and its index out the left outlet.

### progress

When the preview attribute is on, the word  progress , followed by a float between 0.0 and 1.0, will update the display of the current preview progress circle.

Arguments:

- position
  [float]

### set

The word  set , followed by a number, sets the currently selected item to the specified index, but does not produce any output.

Arguments:

- index
  [int]

### setnext

Selects the item below the currently selected item in the list, but does not produce any output.

### setprev

Selects the item above the currently selected item in the list, but does not produce any output.

### sort

The word  sort  followed by a positive number, sorts the [chooser](https://docs.cycling74.com/reference/chooser) object's items alphetically in ascending order (A-Z).  sort  followed by a negative number sorts the list of items alphabetically in descending order (Z - A).

Arguments:

- direction
  [int]

### stop

The word  stop  causes the current preview playback of any item to stop.

## See Also

| Name | Description |
| --- | --- |
| [umenu](https://docs.cycling74.com/reference/umenu) | Pop-up menu |
| [sfplay~](https://docs.cycling74.com/reference/sfplay~) | Play audio file from disk |
| [folder](https://docs.cycling74.com/reference/folder) | List the files in a folder |
| [jit.playlist](https://docs.cycling74.com/reference/jit.playlist) | Play video files |
| [playlist~](https://docs.cycling74.com/reference/playlist~) | Play sound files |
