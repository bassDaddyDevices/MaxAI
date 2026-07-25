---
type: jitter
name: "jit.lcd"
summary: "QuickDraw wrapper (deprecated)"
signal: false
url: "https://docs.cycling74.com/reference/jit.lcd/"
package: "Jitter"
see_also: ["jit.gl.sketch", "lcd"]
---
# jit.lcd

QuickDraw wrapper (deprecated)

## Description

The [jit.lcd](https://docs.cycling74.com/reference/jit.lcd) object is a wrapper for many QuickDraw commands.

## Matrix Operator

matrix inputs:0, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 1 | 1 | 1 | 4 | 1 | char |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### ascii

Writes the ASCII character specified by the  *character*  argument at the current pen location using the current font and textmode, then moves the pen position to the right of that character. Numbers that exceed the 0-255 range are restricted to that range with a modulus operation.

Arguments:

- character
  [int]

### brgb

Sets the current background color. All values should be in the range 0-255.

Arguments:

- red
  [int]
- green
  [int]
- blue
  [int]

### clearpicts

The word  clearpicts , followed by a symbol, deletes all of an [lcd](https://docs.cycling74.com/reference/lcd) object's named pictures from memory so that they can no longer be drawn. To remove the images from the [lcd](https://docs.cycling74.com/reference/lcd) object's display, the command should be followed by a  clear  message.

### clipoval

Clips drawing commands to the oval specified by  *left top right bottom*  The arguments are specified in pixels, relative to the top left corner of the viewing area.

Arguments:

- left
  [int]
- top
  [int]
- bottom
  [int]
- right
  [int]

### clippoly

Clips drawing commands to the polygon specified by the up to 254  *x/y-pairs*  arguments. These integer pairs are specified in pixels, relative to the top left corner of the viewing area.

Arguments:

- x/y int pairs
  [list]

### cliprect

Clips drawing commands to the rectangle specified by  *left* ,  *top* ,  *right* , and  *bottom*  arguments. These integer arguments are specified in pixels, relative to the top left corner of the viewing area.

Arguments:

- left
  [int]
- top
  [int]
- bottom
  [int]
- right
  [int]

### cliproundrect

Clips drawing commands to the rounded rectangle specified by  *left* ,  *top* ,  *right* ,  *bottom* ,  *horizontal-roundness* , and  *vertical-roundness*  arguments. These integer arguments are specified in pixels, relative to the top left corner of the viewing area.

Arguments:

- left
  [int]
- top
  [int]
- bottom
  [int]
- right
  [int]
- horizontal-roundness
  [int]
- vertical-roundness
  [int]

### color

Sets the current pen color to the value specified by the  *color-index*  argument.

Arguments:

- color-index
  [int]

### deletepict

The word  deletepict , followed by a symbol, deletes the named the picture from memory so that it can no longer be drawn. To remove the image from the [lcd](https://docs.cycling74.com/reference/lcd) object's display, the command should be followed by a  clear  message.

Arguments:

- any symbol
  [list]

### drawpict

Draws the named picture or matrix. A destination rectangle into which the picture is scaled and drawn may optionally be specified by the  *x-offset* ,  *y-offset* ,  *width* , and  *height*  integer arguments. A source rectangle that specifies the area of the picture to use in the operation may also be optionally specified by the  *src-x-offset* ,  *src-y-offset* ,  *src-width* , and  *src-height*  integer arguments. The position of the destination and source rectangles are relative to the top left corner of the [jit.lcd](https://docs.cycling74.com/reference/jit.lcd) object's display area. Unless otherwise specified, both rectangles are set to be the same size as the picture. All arguments are optional and default to zero. The current penmode will used as the transfer mode.

Arguments:

- pict-name
  [symbol]
- x-offset
  [int]
- y-offset
  [int]
- width
  [int]
- height
  [int]
- src-x-offset
  [int]
- src-y-offset
  [int]
- src-width
  [int]
- src-height
  [int]

### font

Sets the current font name and size. Fonts can be specified by either their ID number or name. Font size is specified in points.

Arguments:

- mutex
  group

  font-id
  [int]

  font-name
  [symbol]

  endmutex group
- font-size ()
  [int]

### framearc

Paints the outline of an arc. The  *left* ,  *top* ,  *right* , and  *bottom*  arguments describe the top and bottom extremities in pixels of an oval across which the arc will be drawn, and the  *start-angle*  and  *arc-length*  arguments describe the position of the arc with respect to the oval. The location of the oval/arc is relative to the top left corner of the [jit.lcd](https://docs.cycling74.com/reference/jit.lcd) object's display area. A color may also optionally be specified using a single number that selects a color from Max's color palette (similar to the  color  message), or by using three additional numbers that describe an RGB value (similar to the  frgb  message). The width of the line segment describing the arc is set using the  pensize  message to the [jit.lcd](https://docs.cycling74.com/reference/jit.lcd) object.

Arguments:

- left
  [int]
- top
  [int]
- bottom
  [int]
- right
  [int]
- start-angle
  [int]
- arc-length
  [int]
- mutex
  group

  color-index
  [int]

  red
  [int]

  green
  [int]

  blue
  [int]

  endmutex group

### frameoval

Draws the unfilled outline of an oval. The  *left* ,  *top* ,  *right* , and  *bottom*  integer arguments describe the top and bottom extremities in pixels of the oval. The location of the oval is relative to the top left corner of the [jit.lcd](https://docs.cycling74.com/reference/jit.lcd) object's display area. Optional additional arguments to specify the color of the border may also follow. If a single integer argument is used, it specifies a color from Max's color palette. Three integer arguments specify an RGB color. The width of the border of the oval is set using the  pensize  message to the [jit.lcd](https://docs.cycling74.com/reference/jit.lcd) object.

Arguments:

- left
  [int]
- top
  [int]
- bottom
  [int]
- right
  [int]
- mutex
  group

  color-index
  [int]

  red
  [int]

  green
  [int]

  blue
  [int]

  endmutex group

### framepoly

Draws the unfilled outline of a polygon specified by up to 254 integer  *x/y-pair*  arguments. Each integer pair specifies a pixels relative to the top left corner of the [jit.lcd](https://docs.cycling74.com/reference/jit.lcd) object's display area. A polygon is closed by specifying an x/y pair having the same values as the first integer pair. The width of the border of the polygon is set using the  pensize  message to the [jit.lcd](https://docs.cycling74.com/reference/jit.lcd) object.

Arguments:

- x/y int pairs
  [list]

### framerect

Draws the unfilled outline of a rectangle specified by the  *left* ,  *top* ,  *right* , and  *bottom*  integer arguments. The edge positions are specified as pixels relative to the top left corner of the [jit.lcd](https://docs.cycling74.com/reference/jit.lcd) object's display area. Optional additional arguments to specify the color of the border may also follow. If a single integer argument is used, it specifies a color from Max's color palette. Three integer arguments specify an RGB color. The width of the border of the rectangle is set using the  pensize  message to the [jit.lcd](https://docs.cycling74.com/reference/jit.lcd) object.

Arguments:

- left
  [int]
- top
  [int]
- bottom
  [int]
- right
  [int]
- mutex
  group

  color-index
  [int]

  red
  [int]

  green
  [int]

  blue
  [int]

  endmutex group

### frameroundrect

Draws the unfilled outline of a rounded rectangle. The  *left* ,  *top* ,  *right* , and  *bottom*  integer arguments describe the top and bottom extremities of the rectangle, and the The  *horizontal-roundness*  and  *vertical-roundness]*  integer arguments specify the amount of corner rounding in pixels. The location of the rounded rectangle is relative to the top left corner of the [jit.lcd](https://docs.cycling74.com/reference/jit.lcd) object's display area. Optional additional arguments to specify the color of the border may also follow. If a single integer argument is used, it specifies a color from Max's color palette. Three integer arguments specify an RGB color. The width of the border of the rectangle is set using the  pensize  message to the [jit.lcd](https://docs.cycling74.com/reference/jit.lcd) object.

Arguments:

- left
  [int]
- top
  [int]
- bottom
  [int]
- right
  [int]
- horizontal-roundness
  [int]
- vertical-roundness
  [int]
- mutex
  group

  color-index
  [int]

  red
  [int]

  green
  [int]

  blue
  [int]

  endmutex group

### frgb

Sets the current foreground color. All arguments should be in the range 0-255.

Arguments:

- red
  [int]
- green
  [int]
- blue
  [int]

### getpenloc

Sends the x and y coordinates of the current pen location out the right outlet of the object as a list in the form  penloc   *x-offset*   *y-offset* . The numbers represent local coordinates relative to the top left corner of the [jit.lcd](https://docs.cycling74.com/reference/jit.lcd) object's display area. The first number is the number of pixels to the right of that corner, and the second number is the number of pixels down from that corner.

### getpixel

Sends the color of the pixel specified by the x and y offset arguments and the coordinates out the object's right outlet as a list in the form  pixel   *red*   *green*   *blue*   *x-offset*   *y-offset* . The three color values should be in the range 0-255. The pixel location is specified relative to the top left corner of the [jit.lcd](https://docs.cycling74.com/reference/jit.lcd) object's display area. If a pixel is out of range, the  getpixel  message will output  pixel 0 0 0 x y , where  *x*  and  *y*  are the out of range location specified.

Arguments:

- x-offset
  [int]
- y-offset
  [int]

### line

Draws a line from the current pen position to the relative point specified by two integer  *x-offset*  and  *x-offset*  arguments. The endpoint of the line becomes the new pen position. Positive values for the  *x-offset*  and  *x-offset*  arguments draw the line to the right or down, and negative arguments draw up or to the left.

Arguments:

- x-offset
  [int]
- y-offset
  [int]

### linesegment

Draws a line segment. The  *x-start* ,  *y-start* ,  *x-end* , and  *y-end*  arguments specify the start and end points of the line segment. The location of the start and end points is relative to the top left corner of the [jit.lcd](https://docs.cycling74.com/reference/jit.lcd) object's display area. Optional additional arguments to specify the color of the line segment may also follow. If a single integer argument is used, it specifies a color from Max's color palette. Three integer arguments specify an RGB color. The width of the line segment is set using the  pensize  message to the [jit.lcd](https://docs.cycling74.com/reference/jit.lcd) object.

Arguments:

- x-start
  [int]
- y-start
  [int]
- x-end
  [int]
- y-end
  [int]
- mutex
  group

  color-index
  [int]

  red
  [int]

  green
  [int]

  blue
  [int]

  endmutex group

### lineto

Draws a line from the current pen position to the relative point specified by two integer  *x-offset*  and  *x-offset*  arguments. Positive values for the  *x-offset*  and  *x-offset*  arguments draw the line to the right or down, and negative arguments draw up or to the left.

Arguments:

- x-offset
  [int]
- y-offset
  [int]

### move

Moves the pen position relative to its current location. The new location is specified by the two integer  *x-offset*  and  *x-offset*  arguments. Positive values for the  *x-offset*  and  *x-offset*  arguments move the pen position to the right or down, and negative arguments move it up or to the left.

Arguments:

- x-offset
  [int]
- y-offset
  [int]

### moveto

Sets the pen position at which the next graphic instruction will be drawn. The new location is specified by the two integer  *x-offset*  and  *x-offset*  arguments that are relative to the top left corner of the [jit.lcd](https://docs.cycling74.com/reference/jit.lcd) object's display area.

Arguments:

- x-offset
  [int]
- y-offset
  [int]

### noclip

Removes any clipping area that may be in place.

### oprgb

Sets the current opcode color used in some of the [jit.lcd](https://docs.cycling74.com/reference/jit.lcd) object's transfermodes, such as "blend". All arguments should be in the range 0-255.

Arguments:

- red
  [int]
- green
  [int]
- blue
  [int]

### paintarc

Paints an arc. The  *left* ,  *top* ,  *right* , and  *bottom*  integer arguments describe the top and bottom extremities in pixels of an oval across which the arc will be drawn, and the  *start-angle*  and  *arc-length*  arguments describe the position of the arc with respect to the oval. The location of the oval/arc is relative to the top left corner of the [jit.lcd](https://docs.cycling74.com/reference/jit.lcd) object's display area. Optional additional arguments to specify the color of the arc may also follow. If a single integer argument is used, it specifies a color from Max's color palette. Three integer arguments specify an RGB color.

Arguments:

- left
  [int]
- top
  [int]
- bottom
  [int]
- right
  [int]
- start-angle
  [int]
- arc-length
  [int]
- mutex
  group

  color-index
  [int]

  red
  [int]

  green
  [int]

  blue
  [int]

  endmutex group

### paintoval

Paints an oval. The  *left* ,  *top* ,  *right* , and  *bottom*  integer arguments describe the top and bottom extremities in pixels of the oval. The location of the oval is relative to the top left corner of the [jit.lcd](https://docs.cycling74.com/reference/jit.lcd) object's display area. Optional additional arguments to specify the color of the oval may also follow. If a single integer argument is used, it specifies a color from Max's color palette. Three integer arguments specify an RGB color.

Arguments:

- left
  [int]
- top
  [int]
- bottom
  [int]
- right
  [int]
- mutex
  group

  color-index
  [int]

  red
  [int]

  green
  [int]

  blue
  [int]

  endmutex group

### paintpoly

Paints a polygon specified by up to 254 integer  *x/y-pair*  arguments. Each integer pair specifies a pixel relative to the top left corner of the [jit.lcd](https://docs.cycling74.com/reference/jit.lcd) object's display area. A polygon is closed by specifying an x/y pair having the same values as the first integer pair.

Arguments:

- x/y int pairs
  [list]

### paintrect

Paints a rectangle specified by the  *left* ,  *top* ,  *right* , and  *bottom*  integer arguments. The edge positions are specified as pixels relative to the top left corner of the [jit.lcd](https://docs.cycling74.com/reference/jit.lcd) object's display area. Optional additional arguments to specify the color of the rectangle may also follow. If a single integer argument is used, it specifies a color from Max's color palette. Three integer arguments specify an RGB color.

Arguments:

- left
  [int]
- top
  [int]
- bottom
  [int]
- right
  [int]
- mutex
  group

  color-index
  [int]

  red
  [int]

  green
  [int]

  blue
  [int]

  endmutex group

### paintroundrect

Paints a rounded rectangle. The  *left* ,  *top* ,  *right* , and  *bottom*  integer arguments describe the top and bottom extremities of the rectangle, and the The  *horizontal-roundness*  and  *vertical-roundness]*  integer arguments specify the amount of corner rounding in pixels. The location of the rounded rectangle is relative to the top left corner of the [jit.lcd](https://docs.cycling74.com/reference/jit.lcd) object's display area. Optional additional arguments to specify the color of the rectangle may also follow. If a single integer argument is used, it specifies a color from Max's color palette. Three integer arguments specify an RGB color.

Arguments:

- left
  [int]
- top
  [int]
- bottom
  [int]
- right
  [int]
- horizontal-roundness
  []
- vertical-roundness
  []
- mutex
  group

  color-index
  [int]

  red
  [int]

  green
  [int]

  blue
  [int]

  endmutex group

### penmode

Sets the transfer mode for subsequent drawing operations. The transfer mode is set using an integer argument in the range 0-39. Since JUCE does not support pen modes, the only available penmode is 32 (Blend). All other penmodes are ignored.

Arguments:

- penmode-index
  [int]

### pensize

Sets the pen size to be used in subsequent drawing operations. The pen size is set with two integer arguments, though the second argument is not supported due to differences in QuickDraw emulation.

Arguments:

- number-of-pixels
  [int]

### readpict

Reads a picture file specified by the symbol  *pict-name*  from disk into RAM. This named picture can then be drawn in lcd with the  drawpict  and  tilepict  messages.

Arguments:

- pict-name
  [symbol]

### reset

Erases the contents of the [jit.lcd](https://docs.cycling74.com/reference/jit.lcd) object's display area and resets the object to its default values. This message is equivalent to this series of messages to the [jit.lcd](https://docs.cycling74.com/reference/jit.lcd) object:

clear

pensize 1

penmode 0

frgb 0 0 0 (black)

brgb 255 255 255 (white)

### scrollrect

Moves or "scrolls" a rectangle defined by the  *left* ,  *top* ,  *right* , and  *bottom*  integer arguments in the direction specified by the  *x-offset*  and  *y-offset*  integer arguments. the first four arguments in the direction specified by the fifth and sixth ints within the [jit.lcd](https://docs.cycling74.com/reference/jit.lcd) object's display area.

Arguments:

- left
  [int]
- top
  [int]
- right
  [int]
- bottom
  [int]
- left
  [int]
- x-offset
  [int]
- y-offset
  [int]

### setpixel

Sets the pixel located at the coordinates specified by the  *x-offset*  and  *y-offset*  coordinates to the RGB value specified by the  *red* ,  *green* , and  *blue*  arguments. The RGB values should be integers in the range 0-255. The pixel location is specified relative to the top left corner of the [jit.lcd](https://docs.cycling74.com/reference/jit.lcd) object's display area.

Arguments:

- x-offset
  [int]
- y-offset
  [int]
- red
  [int]
- green
  [int]
- blue
  [int]

### textface

Sets the font style(s) to be used when rendering text. Font styles may be specified individually with a single symbol argument, or as a list. Valid font styles are  normal ,  bold ,  italic ,  underline ,  outline ,  shadow ,  condense , and  extend ;

Arguments:

- font-style
  [list]

### textmode

Sets the text rendering mode using an integer argument in the range 0-39. Supported textmodes are:

0 = Copy

1 = Or

2 = Xor

3 = Bic

4 = NotCopy

5 = NotOr

6 = NotXor

7 = NotBic

32 = Blend

33 = AddPin

34 = AddOver

35 = SubPin

36 = Transparent

37 = AddMax

38 = SubOver

39 = AddMin

For more information on the effects of each rendering mode, refer to the QuickDraw documentation in  **Inside Macintosh** .

Arguments:

- mode-index
  [int]

### tilepict

Fills a rectangle by tiling a picture. The name of a [jit.matrix](https://docs.cycling74.com/reference/jit.matrix) object can be used in place of the name of a PICT file, provided that the named [jit.matrix](https://docs.cycling74.com/reference/jit.matrix) object is a 4 plane char data matrix.

Four optional integers can be used to specify a destination rectangle in which the picture is tiled and four integers that specify the area of the picture to use in the operation can be added. Destination and source rectangles are specified by their left, top, width, and height values in pixels. The destination and source rectangles are specified relative to the top left corner of the matrix. If no destination rectangle is specified, the destination is set to the size of the lcd matrix and the source is set to be the same size as the picture.

Arguments:

- pict-name
  [symbol]
- dst-left
  [int]
- dst-top
  [int]
- dst-right
  [int]
- dst-bottom
  [int]
- src-left
  [int]
- src-top
  [int]
- src-right
  [int]
- src-bottom
  [int]

### write

Writes the text specified by the  *symbol*  argument at the current pen location, using the current font and textmode.

Arguments:

- symbol
  [symbol]

### writepict

Writes the current contents of the [jit.lcd](https://docs.cycling74.com/reference/jit.lcd) object's display area to a PICT file. If no filename argument is present, a Save As dialog will prompt you to choose a filename and location to write the PICT file.

Arguments:

- filename
  [symbol]

## See Also

| Name | Description |
| --- | --- |
| [jit.gl.sketch](https://docs.cycling74.com/reference/jit.gl.sketch) | Use drawing commands with OpenGL |
| [lcd](https://docs.cycling74.com/reference/lcd) | Display graphics (deprecated) |
