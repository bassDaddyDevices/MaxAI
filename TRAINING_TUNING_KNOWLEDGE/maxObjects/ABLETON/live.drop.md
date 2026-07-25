---
type: ableton
name: "live.drop"
summary: "Define a region for dragging and dropping a file"
signal: false
url: "https://docs.cycling74.com/reference/live.drop/"
package: "Max for Live"
see_also: ["dropfile"]
---
# live.drop

Define a region for dragging and dropping a file

## Description

The [live.drop](https://docs.cycling74.com/reference/live.drop) objects defines a region for dragging and dropping files and outputs the filepath when a file is dropped onto it.

## Arguments

None.

## Attributes

### annotation\_name[symbol]:

The string that is prepended to annotations. This shows up in the Info pane in Live, and the clue window in Max.

### bordercolor[4 floats]

Sets the display color for the [live.drop](https://docs.cycling74.com/reference/live.drop) object's border in RGBA format.

### decodemode[int]

When enabled (default), the [live.drop](https://docs.cycling74.com/reference/live.drop) object will attempt to decode non-PCM-audio files dropped on it from Live's file browser (for instance, .mp3, .mp4, .m4v, .mov, .flac, etc.). Decoded files will be cached to a temporary directory on the computer's hard drive. In this case, the filename and path passed out of the object's outlets will refer to the temporary decoded file, not to the original. This feature is limited to file types which Live can decode.

You might wish to disable decodemode if you are using the [live.drop](https://docs.cycling74.com/reference/live.drop) object to read, for instance, movie files for use in [jit.movie](https://docs.cycling74.com/reference/jit.movie) or if you otherwise need the original file data, rather than extracted audio from the dragged file.

### focusbordercolor[4 floats]

Sets the color of the [live.drop](https://docs.cycling74.com/reference/live.drop) object's border when the object has focus in RGBA format.

### legend[symbol]: Drop Something Here!

Sets the text which appears in the display area of the [live.drop](https://docs.cycling74.com/reference/live.drop) object.

### param\_connect[symbol]:

Establishes a two-way connection between the object and a parameter of a compatible object with parameters such as [gen~](https://docs.cycling74.com/reference/gen~) or [jit.gl.slab](https://docs.cycling74.com/reference/jit.gl.slab). The object can be used to change the value of the parameter and will update if the parameter value changes. The easiest way to set param\_connect is with the attribute's menu in the [inspector](https://docs.cycling74.com/userguide/inspector) or the Connect submenu of the [Object Action menu](https://docs.cycling74.com/userguide/action_menu). The menu displays all available parameters of compatible objects.

Setting the param\_connect attribute with a message requires the target parameter's path, which is the host object's scriping name followed by two colons and the parameter name. For example, for a [gen~](https://docs.cycling74.com/reference/gen~) object with scripting name  gen~\_AB , the path of the  freq  parameter would be  gen~\_AB::freq . You can set a value for the param\_connect before the host object or parameter exists, and the object will connect to the parameter once it exists. Refer to the user guide entry for [param\_connect](https://docs.cycling74.com/userguide/param_connect) for more details.

### parameter\_mappable[int]: 1

When parameter\_mappable is enabled, the object will be available for mapping to keyboard or MIDI input using the [Mappings feature](https://docs.cycling74.com/userguide/mapping).

### textcolor[4 floats]

Sets the color for the text which appears in the display area of the [live.drop](https://docs.cycling74.com/reference/live.drop) object in RGBA format.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Sends the current path out the outlet.

### (drag)

When a file is selected and dragged from the Live application's File Browser onto a [live.drop](https://docs.cycling74.com/reference/live.drop) object in a Max for Live device, the full pathname of the file is sent out the [live.drop](https://docs.cycling74.com/reference/live.drop) object's outlet.

The object will also provide the full pathname for a file when its icon is dragged from the Max File Browser or your computer's Finder onto a [live.drop](https://docs.cycling74.com/reference/live.drop) object.

The [live.drop](https://docs.cycling74.com/reference/live.drop) object can be used with encrypted and encoded samples from Live's File Browser. Encrypted samples will be decrypted, and a temporary filename will be passed from the object's outlet, which can be used by objects in MaxMSP. Note that this temporary file will become invalid  *1 minute*  after the last object (including [live.drop](https://docs.cycling74.com/reference/live.drop)) in MaxMSP has stopped using it.

Encoded samples (e.g. .mp3, .flac) are handled similarly, although they are not automatically invalidated after use. Please see the decodemode attribute for more information about encoded samples.

### clear

Clears the currently stored filepath.

### (mouse)

To drop a file, click on the name of an audio file or its icon in the Live application's file browser, drag it onto the [live.drop](https://docs.cycling74.com/reference/live.drop) object's display area, and release the mouse button.

When the mouse is positioned over the [live.drop](https://docs.cycling74.com/reference/live.drop) object, a round button will appear in the lower right-hand portion of the object's display. The button indicates the enabled or disabled state for dragging and dropping, and is enabled by default. To toggle drag and drop behavior, click on the round button. The button's color (set using the  circlecolor  and  circleoncolor  attributes found in the object Inspector) changes to indicate its state.

### set

The word  set , followed by a list that specifies a filepath, sets a filepath to be reported by the the [live.drop](https://docs.cycling74.com/reference/live.drop) when it is initialized. The  set  message allows you to store a filepath as reported by the object in the parameter and display and output the path as if a file had been manually dropped on the object.

Arguments:

- filepath-name
  [list]

## Output

### symbol

Out left outlet: When a file from the Live application browser (or a file icon from the Max File Browser or your computer's Finder) has been dragged onto the [live.drop](https://docs.cycling74.com/reference/live.drop) object and the mouse released within its box, the absolute pathname of the file is sent out the left outlet as a single symbol (i.e. surrounded by double quotes).

Absolute pathnames look like this:

"C:/Max Folder/extras/mystuff/mypatch.pat"

If you want to use the [live.drop](https://docs.cycling74.com/reference/live.drop) object to cause a file to be read by another object that accepts the  read  message with a filename argument, put a [prepend read](https://docs.cycling74.com/reference/prepend) object between [live.drop](https://docs.cycling74.com/reference/live.drop) object and the object that will open a file.

Out right outlet: When a file from the Live application browser (or a file icon from the Max File Browser or your computer's Finder) has been dragged onto the [live.drop](https://docs.cycling74.com/reference/live.drop) object and the mouse released within its box, the file type code of the file is sent out the right outlet.

## See Also

| Name | Description |
| --- | --- |
| [dropfile](https://docs.cycling74.com/reference/dropfile) | Drag and drop files |
