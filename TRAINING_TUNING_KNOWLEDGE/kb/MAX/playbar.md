---
type: max
name: "playbar"
summary: "Control video or audio file playback"
signal: false
url: "https://docs.cycling74.com/reference/playbar/"
package: "Max"
see_also: ["jit.movie", "movie", "imovie"]
---
# playbar

Control video or audio file playback

## Description

Interacts with [movie](https://docs.cycling74.com/reference/movie), [imovie](https://docs.cycling74.com/reference/imovie), [sfplay~](https://docs.cycling74.com/reference/sfplay~) or [jit.movie](https://docs.cycling74.com/reference/jit.movie) to control the playback, position and looping of the media

## Arguments

None.

## Attributes

### bgcolor[4 floats] >= 7.0.0

Sets the background color of the [playbar](https://docs.cycling74.com/reference/playbar) object in RGBA format.

### color[4 floats] >= 7.0.0

Sets the color of the controls for the [playbar](https://docs.cycling74.com/reference/playbar) object in RGBA format.

### disabledcolor[4 floats] >= 7.0.0

Sets the controls color of the [playbar](https://docs.cycling74.com/reference/playbar) object in RGBA format when the object is disabled.

### hideloop[int]: 0

Hide loop control

### hiderwff[int]: 0

Hide the rewind/forward controls

### refreshrate[float]: 30.

When [playbar](https://docs.cycling74.com/reference/playbar) is controlling a jit.movie, the refreshrate attribute sets the rate in fps at which the movie is played back.

### selectioncolor[4 floats] >= 7.0.0

Sets the selection color of the [playbar](https://docs.cycling74.com/reference/playbar) object in RGBA format.

### style[symbol]: >= 7.0.0

Sets the [style](https://docs.cycling74.com/userguide/styles) to be applied to the object. Styles can be set using the [Format Palette](https://docs.cycling74.com/userguide/format_palette).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

If the left outlet of a [playbar](https://docs.cycling74.com/reference/playbar) object is connected to a [movie](https://docs.cycling74.com/reference/movie) or [imovie](https://docs.cycling74.com/reference/imovie) object,  bang  links the two objects together so the [playbar](https://docs.cycling74.com/reference/playbar) can control the movie. After [playbar](https://docs.cycling74.com/reference/playbar) and [movie](https://docs.cycling74.com/reference/movie) are linked, any messages sent to the [movie](https://docs.cycling74.com/reference/movie) object which change its location or playing status are reflected in the [playbar](https://docs.cycling74.com/reference/playbar) object. (Linking will happen automatically when a patcher file containing connected [playbar](https://docs.cycling74.com/reference/playbar) and [movie](https://docs.cycling74.com/reference/movie) objects is loaded. Thus, sending the  bang  to [playbar](https://docs.cycling74.com/reference/playbar) is only necessary when you're building a patch.)

### loop

The word  loop  followed by a non-zero number will turn looping on;  loop  followed by a 0 will turn looping off.

Arguments:

- flag
  [int]

### (mouse)

Clicking and dragging with the mouse can be used to start/stop a movie, rewind/fast-forward it, or to select a particular point in the movie.

### palindrome

The word  palindrome  followed by a non-zero number will turn palindrome-playback on (loop forward and backwards);  palindrome  followed by a 0 will turn palindrome-playback off. Looping must be turned on for palindrome-playback.

Note: the palindrome mode of playback does not work with the [sfplay~](https://docs.cycling74.com/reference/sfplay~) object.

Arguments:

- flag
  [int]

## Output

### (internal)

Out left outlet: Once the [playbar](https://docs.cycling74.com/reference/playbar) and a [movie](https://docs.cycling74.com/reference/movie) object are linked, the [playbar](https://docs.cycling74.com/reference/playbar) controls the movie. [playbar](https://docs.cycling74.com/reference/playbar) only supports being connected to one [movie](https://docs.cycling74.com/reference/movie) object at a time. The connection must be made with a patch cord; it cannot take place via a [send](https://docs.cycling74.com/reference/send)- [receive](https://docs.cycling74.com/reference/receive) pair.

### int

Out right outlet: Each command processed by [playbar](https://docs.cycling74.com/reference/playbar) is sent by number out its right outlet. A directory of command numbers and their meaning can be found in the QuickTime Standard Movie Play Controller documentation. By properly interpreting these commands, you can potentially use [playbar](https://docs.cycling74.com/reference/playbar) for other purposes besides movie control. However, the "thumb" in the controller has no range until an associated movie with a non-zero duration is linked to the [playbar](https://docs.cycling74.com/reference/playbar).

## See Also

| Name | Description |
| --- | --- |
| [jit.movie](https://docs.cycling74.com/reference/jit.movie) | Play a movie file |
| [movie](https://docs.cycling74.com/reference/movie) | Play a movie in a window |
| [imovie](https://docs.cycling74.com/reference/imovie) | Play video |
