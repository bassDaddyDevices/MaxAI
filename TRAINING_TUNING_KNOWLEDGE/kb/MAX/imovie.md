---
type: max
name: "imovie"
summary: "Play video"
signal: false
url: "https://docs.cycling74.com/reference/imovie/"
package: "Max"
see_also: ["lcd", "movie", "playbar"]
---
# imovie

Play video

## Description

Plays a movie in a user-interface object within the patcher window.

## Arguments

None.

## Attributes

### autofit[int]: 0

Sets the movie to fit automatically within the size of the [imovie](https://docs.cycling74.com/reference/imovie) window.

### border[int]: 1

Toggles the drawing of border around the [imovie](https://docs.cycling74.com/reference/imovie) object. The default is 1 (draw border).

### moviedim[2 ints] read-only

Displays the original dimensions of the movie in pixels.

### name[symbol]

Specifies the name of the file that the [imovie](https://docs.cycling74.com/reference/imovie) object will display. The symbol used as a filename must either be the name of a file in Max's current search path, or an absolute pathname for the file (e.g. "MyDisk:/Documents/movies/krakatoa.mov"). The file name can be specified using the object's Inspector. The word  name  by itself puts up a standard Open Document dialog box.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Same as  resume .

### int

Sets the current time location of the movie. If the movie is playing, it will play from the newly set location. 0 is always the beginning. The end time varies from one movie to another. (The  length  message reports the end time location out the left outlet.)

Arguments:

- location
  [int]

### (drag)

When a QuickTIme movie file is dragged from the Max File Browser to a [imovie](https://docs.cycling74.com/reference/imovie) object, the file will be loaded.

### active

The word  active , followed by a non-zero number, makes the movie active (the default). Followed by a 0,  active  makes the movie inactive. An inactive movie will not play or change location.

Arguments:

- flag
  [int]

### clear

Has the same effect as  dispose  with no arguments.

### dispose

Removes all movies from the [imovie](https://docs.cycling74.com/reference/imovie) object's memory. If the word  dispose  is followed by the name of a loaded movie, only the named movie will be removed.

Arguments:

- filename
  [symbol]

### duration

Reports the duration of the movie (in milliseconds) from the left outlet.

### getduration

Reports the end time position of the movie (in Time Units) from the left outlet.

### getrate

Reports the current rate multiplied by 65536 out the right outlet. Thus, normal speed is reported as  65536 , half speed is reported as  32768 , double speed backward is reported as -131072 , etc. If the movie is not playing, the rate is reported as  0 , and if no movie has yet been loaded nothing is sent out.

### gettime

Reports the current time location of the movie.

### length

The  length  message's functionality is equivalent to the  getduration  message.

### loadintoram

The word  loadintoram , followed by a non-zero number, attempts to load the entire movie into memory, if possible. The default is 0.

Arguments:

- flag (0 or non-zero)
  [int]

### loop

The word  loop , followed by a number in the range 0-2, controls looping for the current film on. The options are:

0: looping off (default) 1: looping on 2: palindrome mode (forward and then backward)

Arguments:

- flag
  [int]

### loopend

Sets the ending point of a loop. The default value the time value that represents the end of the movie.

Arguments:

- endpoint
  [int]

### looppoints

The word  looppoints , followed by two numbers, sets the beginning and end points of a loop. the default values are 0 (i.e., the start of the film) for the start point and the end of the film for the endpoint.

Arguments:

- start
  [int]
- end
  [int]

### loopset

See the  looppoints  entry.

Arguments:

- start
  [int]
- end
  [int]

### loopstart

Sets the beginning point of a loop. The default value is 0 (the start of the movie).

Arguments:

- startpoint
  [int]

### matrix

The word  matrix , followed by nine floating point numbers, reloads the current movie into RAM after performing a transformation matrix operation on the image. This transformation is the same one used for the mapping points from one coordinate space (i.e, the original image) into another coordinate space (a scaled, rotated, or translated version of the original image).

The transform matrix operation consists of nine matrix elements

Arguments:

- transform
  [list]

### (mouse)

Double-clicking on the [imovie](https://docs.cycling74.com/reference/imovie) object will make the movie window active.

### mute

The word  mute , followed by a non-zero number, turns off the movie's sound (if it has any). Followed by a 0,  mute  turns on the movie's sound (the default).

Arguments:

- flag
  [int]

### next

The word  next , followed by a number, moves the time location ahead by that amount. If no number is supplied,  next  moves the time ahead by 5. (The actual time meaning of these units varies from movie to movie.)

Arguments:

- time-units
  [int]

### nextmovie

Stops the movie if it is playing, and switches to the movie that was loaded just prior to the current movie. (The movies are stored in reverse order from the order in which they were loaded.) If there is no prior movie,  nextmovie  wraps around back to the most recently loaded movie. Note that the title of the movie window is not automatically changed, even though the "current movie" has been changed by  nextmovie .

### palindrome

The word  palindrome , followed by a non-zero number, sets the movie to play in palindrome mode (forward and then backward). Looping must be turned on.  palindrome 0  (the default) disables palindrome mode.

Arguments:

- flag
  [int]

### passive

The word  passive , followed by a non-zero number, sets the passive mode. In passive mode, starting a movie will not cause the frame to change unless a bang message is received.  passive   0  (the default) sets the movie object to respond to normal  start  messages.

Arguments:

- flag
  [int]

### pause

Pause movie playback

### prev

The word  prev , followed by a number, moves the time location backward by that amount. If no number is supplied,  prev  moves the time backward by 5.

Arguments:

- time-units
  [int]

### quality

The word  quality , followed by a number, sets the minimum interval, in milliseconds, between movie redraws. The default is 0 (i.e., no minimum).

Arguments:

- interval
  [int]

### rate

The word  rate , followed by one or more integers or floats, sets the playing speed of the movie. If  rate  is followed by one integer, that number is taken to be a whole number playing speed. If  rate  is followed by two numbers, the first number is taken to be the numerator and the second the denominator of a fractional speed.  1  is the normal playing speed,  0  means the movie is stopped, and a negative rate plays backwards.  rate 1 2  would play the movie at half speed. Immediately after you send a non-zero  rate  message, the movie will begin playing, so you may wish to precede any  rate  messages with an integer to locate to the desired starting position.

Arguments:

- speed
  [list]

### rd

Same as  read .

Arguments:

- filename
  [symbol]

### read

The word  read , followed by a symbol, looks for a movie file with that name in Max's file search path, and opens it if it exists, displaying the movie's first frame in a movie window. If the filename contains any spaces or special characters, the name should be enclosed in double quotes or each special character should be preceded by a backslash ( \ ). The word  read  by itself puts up a standard Open Document dialog box and reads in any movie file you select. The  read  message will open at least 26 different types of files that can be opened. These include movie files such as MPEG, audio files including AIFF and MP3, and graphics files including GIF and JPEG.

Arguments:

- filename
  [symbol]

### readany

The  readany  message opens any type of file to try to interpret it as a movie or other supported media file.

Arguments:

- filename
  [symbol]

### rect

The word  rect , followed by four numbers, specifies the size of the rectangle in which the movie is displayed within the movie window. The first two numbers specify the position of the rectangle within the movie window, in relative coordinates, and the second two numbers specify the width and height, in pixels, of the rectangle.

Arguments:

- x
  [int]
- y
  [int]
- width
  [int]
- height
  [int]

### reload

The word  reload  will reload the current movie into memory (can be used to refresh; for example, if a movie is playing and the  stop  message is sent followed by  reload , the movie will reload into memory and be set to play from the beginning as a newly loaded movie).

### resume

Begins playing the movie from its current location, at the most recently specified rate.

### start

Sets the movie's rate to 1 and begins playing from the beginning. If the word  start  is followed by the name of a specific loaded movie, that movie becomes the current movie before starting.

Arguments:

- filename
  [symbol]

### startat

The word  startat , followed by a number, set the current time location of the movie and begins playing from that point.

Arguments:

- location
  [list]

### stop

Stops the movie.

### switch

The word  switch , followed by a symbol, makes the named movie the active one without changing the transport state (See the  start  message).

Arguments:

- filename
  [symbol]

### time

The word  time , followed by a number that specifies a frame number, goes to the time location specified by the number. When no argument is present, the  time  message's functionality is equivalent to the  gettime  message.

Arguments:

- frame
  [int]

### timescale

Reports the timescale of the movie (the number of Time Units per second) from the left outlet.

### vol

The word  vol , followed by a number in the range 1-255, sets the movie's sound volume. Optionally, the volume can be set by using the word  vol , followed by a floating-point value in the range 0. - 1.0.

Arguments:

- volume
  [number]

## Output

### int

Out left outlet: The end time of the movie is sent out in response to the  length  message; the current time in the movie is sent out in response to the  time  message; 0 is sent out in response to the  start  message.

Out middle outlet: The horizontal position of the mouse, relative to the left edge of the movie, is sent out when the mouse is clicked or dragged inside the movie.

Out right outlet: The vertical position of the mouse, relative to the top edge of the movie, is sent out when the mouse is clicked or dragged inside the movie.

## See Also

| Name | Description |
| --- | --- |
| [lcd](https://docs.cycling74.com/reference/lcd) | Display graphics (deprecated) |
| [movie](https://docs.cycling74.com/reference/movie) | Play a movie in a window |
| [playbar](https://docs.cycling74.com/reference/playbar) | Control video or audio file playback |
