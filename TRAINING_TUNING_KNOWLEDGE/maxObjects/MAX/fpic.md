---
type: max
name: "fpic"
summary: "Display an image"
signal: false
url: "https://docs.cycling74.com/reference/fpic/"
package: "Max"
see_also: ["imovie", "lcd", "matrixctrl", "panel", "pictctrl", "pictslider", "ubutton"]
---
# fpic

Display an image

## Arguments

None.

## Attributes

### alpha[float]: 1.

Sets the transparency of the displayed image. The range is a floating point value in the range 0. (transparent) to 1.0 (opaque).

### autofit[int]: 0

Toggles the ability to automatically scale a loaded image file to fit the [fpic](https://docs.cycling74.com/reference/fpic) object's display area. This attribute is disabled when using an SVG file.

Possible values:

0 = 'Off'
(
No scaling
)
Do not scale image.

1 = 'Autofit'
(
Full scaling
)
Scale image to the box dimensions, ignoring aspect ratio (stretch or squash image to the object's display area).

2 = 'Use Aspect Ratio'
(
Aspect ratio scaling
)
Scale image to the box dimensions, taking the original aspect ratio into account.

### destrect[4 floats]

Specifies the left-top and bottom-right positions of the loaded graphic image. If these values do not correspond to the size of the graphic image, the image will be scaled to fit the current [fpic](https://docs.cycling74.com/reference/fpic) window size. Note that the destrect attribute is not saved; if you want to specify a horizontal and/or vertical offset, use the xoffset and yoffset attributes.

### embed[int]: 0

Toggles the ability to embed the graphic you are using and save it as part of the main patch. The default behavior is 0 (don't save the image with the patcher file).

### forceaspect[int]: 0 >= 7.0.0

When enabled, any change to the x or y scale of the fpic automatically adjusts the other so that the aspect ratio of fpic object remains the same as the source image.

### pic[symbol]: <none>

Designates the pathname of the graphic file for the [fpic](https://docs.cycling74.com/reference/fpic) to use.

### xoffset[float]: 0.

Specifies the number of pixels by which the upper left corner of the subpatch is to be offset horizontally within the [fpic](https://docs.cycling74.com/reference/fpic) object's viewing window.

### yoffset[float]: 0.

Specifies the number of pixels by which the upper left corner of the subpatch is to be offset vertically within the [fpic](https://docs.cycling74.com/reference/fpic) object's viewing window.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang >= 7.0.0

The image loaded by fpic will be sent via the outlet as a matrix in response to a  bang .

### (drag)

When a image file is dragged from the Max File Browser to an [fpic](https://docs.cycling74.com/reference/fpic) object, the image will be loaded.

### (mouse)

In an unlocked patcher, you can change the offset of the picture by holding down the Shift and Command keys on Macintosh or Shift and Control keys on Windows and dragging on [fpic](https://docs.cycling74.com/reference/fpic); the current offset of the picture is shown in the Assistance portion of the patcher window as you drag.

### noscale

Disable image scaling

### offset

The word  offset , followed by two numbers, specifies the number of pixels by which the left upper corner of the picture is to be offset horizontally and vertically from the left upper corner of the [fpic](https://docs.cycling74.com/reference/fpic) box. By default the left upper corner of the picture is located at the left upper corner of [fpic](https://docs.cycling74.com/reference/fpic) (that is, with an offset of 0,0). With successive slightly different  offset  messages, a picture can be moved inside [fpic](https://docs.cycling74.com/reference/fpic), and [fpic](https://docs.cycling74.com/reference/fpic) can window different portions of a large picture. (In order to give the appearance of smooth transitions when moving an image, the old image is not erased when using the  offset  message. This may cause an undesired appearance if your picture contains a blank background that doesn't cover up what's beneath it.)

Arguments:

- horizontal
  [int]
- vertical
  [int]

### pict

The word  pict , followed by the name of a graphics file in Max's search path, opens the file and displays the picture, replacing whatever picture was previously displayed. The [fpic](https://docs.cycling74.com/reference/fpic) object accepts PNG files and, if QuickTime Version 7.1 or later is installed, other picture file formats that are listed in the QuickTime appendix.

Arguments:

- filename
  [list]

### read

The word  read , followed by a symbol which specifies a filename, looks for a QuickTime graphic file with that name in Max's file search path, and opens it if it exists, displaying it in a graphic window. If the filename contains any spaces or special characters, the name should be enclosed in double quotes or each special character should be preceded by a backslash ( \ ). The word  read  by itself puts up a standard Open Document dialog box and displays the common graphics files supported by QuickTime.

Arguments:

- filename
  [list]

### readany

The word  readany , followed by a symbol which specifies a filename, functions in the same manner as the read message, except that the Open Document dialog box does not filter its display by the currently supported filetypes.

Arguments:

- filename
  [list]

### rect

The word  rect , followed by four numbers that specify the size of scaling rectangle to apply to fit the input image within, loads the graphics file from disc into RAM and displays it. The first two numbers specify the placement in the graphic window as offset values, and the second two numbers specify the width and height, in pixels, of the rectangle.

Arguments:

- horizontal
  [int]
- vertical
  [int]
- width
  [int]
- height
  [int]

## See Also

| Name | Description |
| --- | --- |
| [imovie](https://docs.cycling74.com/reference/imovie) | Play video |
| [lcd](https://docs.cycling74.com/reference/lcd) | Display graphics (deprecated) |
| [matrixctrl](https://docs.cycling74.com/reference/matrixctrl) | Matrix switch control |
| [panel](https://docs.cycling74.com/reference/panel) | Colored background area |
| [pictctrl](https://docs.cycling74.com/reference/pictctrl) | Picture-based control |
| [pictslider](https://docs.cycling74.com/reference/pictslider) | Picture-based slider control |
| [ubutton](https://docs.cycling74.com/reference/ubutton) | Transparent button |
