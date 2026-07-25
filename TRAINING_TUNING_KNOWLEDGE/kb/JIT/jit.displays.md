---
type: jitter
name: "jit.displays"
summary: "Set and query monitor attributes"
signal: false
url: "https://docs.cycling74.com/reference/jit.displays/"
package: "Jitter"
see_also: ["jit.desktop", "screensize"]
---
# jit.displays

Set and query monitor attributes

## Description

Senses additional display hardware attached to your computer and allows you to use standard Jitter  get\*  and  set\*  messages to enumerate the number and coordinates of any and all monitors. The object remembers the original state of your system's display settings when the object is instantiated, which can be easily recalled, and you can also use the object to enable display mirroring.

Typically, the [jit.displays](https://docs.cycling74.com/reference/jit.displays) object is saved as a portion of a performance patch setup to automatically determine the exact position of your attached hardware and move your output window as needed.

## Arguments

None.

## Attributes

### resetmode[int]

**Macintosh only**
Display mode flag (default = 1)

Enables or disables reset when the object is freed The [jit.displays](https://docs.cycling74.com/reference/jit.displays) object remembers the original state of your system's display settings when the object is instantiated (display settings can also be saved using the  snapshot  message. A  resetmode 1  will cause the original display settings to be restored when the patch is closed or the object is otherwise freed.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Equivalent to the  count  message. Sends a count of the attached displays out the object's outlet in the form  count   *number-of-displays* .

### coords

Sends the display screen coordinates for the display whose index is specified out the object's right outlet as a list in the form  coords   *display-index*   *left*   *top*   *bottom*   *right* . Displays are counted from 0 (0 is the primary display).

Arguments:

- display-index
  [int]

### count

Sends a count of the attached displays out the object's outlet in the form  count   *number-of-displays* .

### currentstate

Sends the current state of the display out the object's outlet as a list in the form  currentstate   *display-index*   *width*   *height*   *color-bit-depth*   *refresh-rate* . Note that LCD displays report a refresh rate of 0.

Arguments:

- display-index
  [int]

### getmode

Sends available display modes for display specified by  display-index  out the right outlet as a sequence of lists, one display per line. Each display is described by a list in the form  mode   *display-index*   *mode-index*   *width*   *height*   *color-bit-depth*   *refresh-rate* . Note: LCD displays have a refresh rate of 0.

Arguments:

- display-index
  [int]

### manual

**Macintosh only**
Sets the display to a configuration which provides the closest match for the ideal configuration specified by the arguments.

Arguments:

- display-index
  [int]
- width
  [int]
- height
  [int]
- bit-depth
  [int]

### mirror

**Macintosh only**
Enables video mirroring of the display whose number is specified by  src-display-index  to the display whose number is specified by  dst-display-index .

Arguments:

- src-display-index
  [int]
- dst-display-index
  [int]

### move

Changes the logical screen location of the display whose number is specified by  src-display-index . Two additional arguments specify the new screen location. If a location is chosen which overlaps with the location of another display, a new non-overlapping location will be automatically assigned. The final position of the display after a  move  can be verified using the  coords  message.

Arguments:

- display-index
  [int]
- newxtop
  [int]
- newytop
  [int]

### reset

Return displays to their snapshot state (see the  snapshot  method). Note that reset does not have any affect on video mirroring settings, which must be maintained manually.

### setmode

Change the display mode. The two arguments specify the display index, and the mode index (derived from the  getmode  message).

Arguments:

- display-index
  [int]
- mode-index
  [int]

### snapshot

Saves the current display mode (on all active displays) for use with the  reset  and  resetmode  messages. A snapshot is automatically taken when the object is instantiated.

### unmirror

**Macintosh only**
Disables video mirroring on the specified display.

Arguments:

- display-index
  [int]

## See Also

| Name | Description |
| --- | --- |
| [jit.desktop](https://docs.cycling74.com/reference/jit.desktop) | Copy the display into a matrix |
| [screensize](https://docs.cycling74.com/reference/screensize) | Output the monitor size |
