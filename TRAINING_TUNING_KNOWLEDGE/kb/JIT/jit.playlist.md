---
type: jitter
name: "jit.playlist"
summary: "Play video files"
signal: false
url: "https://docs.cycling74.com/reference/jit.playlist/"
package: "MSP"
see_also: ["jit.movie", "playlist~", "mc.playlist~", "jit.world", "jit.pworld"]
---
# jit.playlist

Play video files

## Description

Use [jit.playlist](https://docs.cycling74.com/reference/jit.playlist) to organize sets of video files and play them back. Each video is given a visual representation in a clip where a selection from the entire video file may be choosen. Clips may be dragged within a jit.playlist to re-order them, or they maybe dragged to other jit.playlist objects by using the handle (dot) on the left side of the clip.

#### Discussion

The [jit.playlist](https://docs.cycling74.com/reference/jit.playlist) object inherits the following attributes from [jit.movie](https://docs.cycling74.com/reference/jit.movie). See the [jit.movie](https://docs.cycling74.com/reference/jit.movie) reference page for descriptions.

 *colormode

interp

unique

vol

rate

seamless\_loopcount (avf engine only)

cache\_size (viddll engine only)* Attributes inherited from [jit.movie](https://docs.cycling74.com/reference/jit.movie) are applied globally to each clip in the playlist. Use the  setclip  message to override values for specific clips. Global and clip specific attribute values are saved in the playlist's content dictionary and reloaded with the patch. Access these values via the  getcontent  message.

## Arguments

None.

## Attributes

### accentcolor[4 floats]

Sets the color of the loop icon when turned off.

### allowreorder[int]: 1

Allow the re-ordering of clips in jit.playlist by dragging the handle (dot on the left side) for a clip above or below other clips.

Possible values:

0 = 'Off'

1 = 'On'

2 = 'Automatic'

### bgcolor[4 floats]

Sets the background color of the object in RGBA format.

### clipheight[float]: 30.

Height alloted for each clip to be displayed. This value may be altered when dragging new clips into jit.playlist according to the expansion attribute.

### color[4 floats]

Sets the controls color (when on) of the object in RGBA format.

### drawto[symbol]

A render context name, used when output\_texture is enabled. If no value is specified the attribute is set implicitly. In this case use the  getclipattr  message to query the value.

### elementcolor[4 floats]

Sets the clip divider color of the object in RGBA format.

### expansion[symbol]: squeeze

Style of accomodation for adding clips to a jit.playlist with no empty space available.

Possible values:

'squeeze'
(
Maintain the size of the box and reduce the height of all clips to make room.
)
'static'
(
Maintain both the size of the box and the height of all clips. A scroll bar will need to be used to access clips out of view.
)
'grow'
(
Expand the size of the box downward, while maintaining the height of all clips.
)

### loop[int]

Turn looping on/off.

### loopreport[int]: 0

When loopreport is set to 1, the word "loopnotify", followed by the clip number and file name, will be sent out the second outlet of [jit.playlist](https://docs.cycling74.com/reference/jit.playlist) every time the selected video file reaches the end of a loop.

### output\_texture[int]

When output\_texture is set to 1, the video files in [jit.playlist](https://docs.cycling74.com/reference/jit.playlist) will be output as a texture. A valid GL context (e.g. a [jit.world](https://docs.cycling74.com/reference/jit.world) or [jit.pworld](https://docs.cycling74.com/reference/jit.pworld)) is required for texture output functionality.

### parameter\_enable[int]

Enables use of this object with [Max for Live Parameters](https://docs.cycling74.com/documentation/live_parameters.maxvig.xml) and allows for [setting initial parameter values](https://docs.cycling74.com/documentation/parameter_enable.maxvig.xml) in the Max environment.

### parameter\_mappable[int]: 1

When parameter\_mappable is enabled, the object will be available for mapping to keyboard or MIDI input using the [Mappings feature](https://docs.cycling74.com/documentation/mappings.maxvig.xml).

### reportprogress[int]: 0

When reportprogress is set to 1, the current playback position will be sent out the second outlet of [jit.playlist](https://docs.cycling74.com/reference/jit.playlist) as a float from 0-1.

### selectioncolor[4 floats]

Sets the selection color of the object in RGBA format.

### showname[int]: 1

When showname is set to 1, the name of the video file is displayed in the [jit.playlist](https://docs.cycling74.com/reference/jit.playlist) UI.

### style[symbol]:

Sets the [style](https://docs.cycling74.com/documentation/styles.maxvig.xml) to be applied to the object. Styles can be set using the [Format palette](https://docs.cycling74.com/documentation/format_palette.maxvig.xml).

### textcolor[4 floats]

Sets the color of the file name text in RGBA format.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

0 stops video playback. A number greater than zero begins playback of the clip with that index. Indices begin counting at 1.

### append

Add a new video file to the list. First argument specifies the video file. Second (optional) argument specifies the slot number for the clip (starting at 1). If no arguments are listed, clicking the append message in a locked patcher will open a dialog box where you can choose a file to append.

Arguments:

- video file
  [symbol]
- clip number
  [int]

### clear

Remove all clips from the playlist. To remove just one clip, right-click on the file you wish to remove in a locked patcher and choose "Remove" from the contextual menu.

### (drag)

Create a new [jit.playlist](https://docs.cycling74.com/reference/jit.playlist) object by dragging and dropping a compatible media file into an unlocked patch. To load additional media files into a [jit.playlist](https://docs.cycling74.com/reference/jit.playlist) object, drag the new file onto the [jit.playlist](https://docs.cycling74.com/reference/jit.playlist) UI until a line appears above or below the currently loaded file. To rearrange tracks within [jit.playlist](https://docs.cycling74.com/reference/jit.playlist), click and drag the handle (dot on the left side) up or down in a locked patch. To replace a currently loaded file, drag the new file over the old one until the entire track is highlighted.

### getclipattr

The word  getclipattr , followed by a clip number and attribute name, will send that attribute's value out the notification (middle) outlet of [jit.playlist](https://docs.cycling74.com/reference/jit.playlist). This allows you to retrieve an attribute state for a specific clip. You can retrieve read-only attributes (e.g. duration, moviedim, etc.), along with most attributes supported by [jit.movie](https://docs.cycling74.com/reference/jit.movie).

Arguments:

- clip
  [int]
- attribute
  [symbol]

### getcontent

The word  getcontent  sends the contents and behavior of all clips out the last outlet of [jit.playlist](https://docs.cycling74.com/reference/jit.playlist) in dictionary format. Connect the last outlet to a [dict.view](https://docs.cycling74.com/reference/dict.view) object to see the contents. Please note that most content states will not print their default values. These will only be printed if you explicitly set a value. For the "absolutepath" entry, the full file path for each clip will only be displayed if the file is not in Max's search path. If the file is in Max's search path, only the file name will be displayed.

### (mouse)

Use your mouse to play and stop a clip in [jit.playlist](https://docs.cycling74.com/reference/jit.playlist). Also use it to select small parts of the sample for playback.

### next

Plays the next clip loaded in [jit.playlist](https://docs.cycling74.com/reference/jit.playlist).

### pause

Pause playback of the current clip at the current position.

### remove

The word  remove , followed by a clip number starting at 1, removes that clip from the list.

Arguments:

- clip-number
  [int]

### resume

Resume playback from the current position if playback has been paused.

### selection

Select playback endpoints for a clip using a normalized range (0.0 is the beginning, 1.0 is the end). The first argument specifies which clip (starting at 1). The second argument is the start point for the clip, and the third argument is the end point. If only two arguments are given, they serve as the start and end points for all clips in jit.playlist. If only one argument is given, it serves as the clip number and clears any selection from that clip.

Arguments:

- clip
  [int]
- start
  [float]
- end
  [float]

### selectionms

Select playback endpoints for a clip in milliseconds. The first argument specifies which clip (starting at 1). The second argument is the start point for the clip, and the third argument is the end point. If only two arguments are given, they serve as the start and end points for all clips in jit.playlist. If only one argument is given, it serves as the end point for all clips in jit.playlist.

Arguments:

- clip
  [int]
- start
  [float]
- end
  [float]

### setclip

[jit.movie](https://docs.cycling74.com/reference/jit.movie) attributes are available in jit.playlist. To control a specific clip, use the "setclip" message followed by the clip number, attribute name, and value. The message "setclip 2 loop 1" will turn looping on for clip 2.

Arguments:

- clip
  [int]
- attribute
  [symbol]
- value
  [anything]

## See Also

| Name | Description |
| --- | --- |
| [jit.movie](https://docs.cycling74.com/reference/jit.movie) | Play a movie file |
| [playlist~](https://docs.cycling74.com/reference/playlist~) | Play sound files |
| [mc.playlist~](https://docs.cycling74.com/reference/mc.playlist~) | Play sound files with multichannel output |
| [jit.world](https://docs.cycling74.com/reference/jit.world) | The Jitter world context |
| [jit.pworld](https://docs.cycling74.com/reference/jit.pworld) | Display a Jitter GL context |
