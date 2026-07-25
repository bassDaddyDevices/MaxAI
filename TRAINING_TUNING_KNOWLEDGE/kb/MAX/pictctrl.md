---
type: max
name: "pictctrl"
summary: "Picture-based control"
signal: false
url: "https://docs.cycling74.com/reference/pictctrl/"
package: "Max"
see_also: ["dial", "kslider", "matrixctrl", "pictslider", "rslider", "slider", "tab", "textbutton", "ubutton"]
---
# pictctrl

Picture-based control

## Description

Creating buttons, switches, knobs, and other controls using images from a picture file for its appearance.

#### Discussion

Note: The [pictctrl](https://docs.cycling74.com/reference/pictctrl) object object customarily uses images saved in Portable Network Graphics (.png) format. If you are using Max on Windows, we recommend that you install QuickTime and choose a complete install of all optional components to work with images other than PNG or PICT files.

## Arguments

None.

## Attributes

### active[int]: 1

Toggles mouse control of the [pictctrl](https://docs.cycling74.com/reference/pictctrl) object. The default is 1 (enabled). If a separate set of inactive images is present in the [pictctrl](https://docs.cycling74.com/reference/pictctrl) object's picture file and if the inactive images attribute is set, the  active  message will also change the appearance of the control.

### annotation\_name[symbol]:

Info View Title

### clickedimage[int]: 0

Toggles the use of an alternate set of image frames in your picture file to give the dial a different appearance when the user clicks on it and drags the mouse pointer.  clickedimage 0  disables this feature.

### clickincrement[int]: 0

Sets the output value to increment by 1 each time the object is clicked (Click to Increment mode). Any movement of the mouse after clicking is ignored. When the uppermost value is reached, the value returns to zero with the next click. All other mouse tracking modes are disabled.  clickincrement 0  disables Click to Increment mode.

### clip[int]: 1

Causes pictctrl, while in dial-mode, to clip mouse-movement within the range of the dial. When followed by a 0, [pictctrl](https://docs.cycling74.com/reference/pictctrl) will wrap around to the minimum when it surpasses the maximum value (within the range of the dial) and vice versa to the maximum when it surpasses the minimum value.

### degrees[int]: 270

Specifies the degree-of-rotation [pictctrl](https://docs.cycling74.com/reference/pictctrl) has while in dial-mode.

### frames[int]: 10

Specifies the number of images (columns) in the picture file. The number of frames does not have to be the same as the range of the control; the [pictctrl](https://docs.cycling74.com/reference/pictctrl) object will use the nearest image for any given value.

### imagemask[int]: 0

When non-zero, indicates that your picture file has an image mask. The default is 0 (no image mask). Enabling imagemask enables checking for transparent parts of an image. If the threshold attribute is set to a value greater than zero and less than one, mouse clicks on transport portions of an image will be ignored by [pictctrl](https://docs.cycling74.com/reference/pictctrl).

### inactiveimage[int]: 0

When non-zero, indicates that your picture file has an additional row of images for its inactive state. The default is 0 (no inactive state).

### mode[int]: 0

Selects mode of operation for the [pictctrl](https://docs.cycling74.com/reference/pictctrl) object.

 Button  (the default)

 Toggle
 Dial mode

Possible values:

0 = 'Button'

1 = 'Toggle'

2 = 'Dial'

### multiplier[int]: 0

Sets a multiplier value. When [pictctrl](https://docs.cycling74.com/reference/pictctrl) is in dial mode, the object's value is multiplied by this number before being sent out the outlet. The multiplication happens before the addition of the Offset value. The default multiplier value is 1.

### name[symbol]: <default>

Designates the graphics file that the [pictctrl](https://docs.cycling74.com/reference/pictctrl) object will use will use for the control's button or dial file. By convention, the [pictslider](https://docs.cycling74.com/reference/pictslider) object uses images saved in Portable Network Graphics (.png) format. If you are using Max on Windows and want to to work with images other than PNG or PICT files, we recommend that you install QuickTime and choose a complete install of all optional components. The symbol used as a filename must either be the name of a file in Max's current search path, or an absolute pathname for the file (e.g. " MyDisk:/Documents/UI Pictures/CoolButton.png ").

### offset[atom\_long]: 0

Sets an offset value. When [pictctrl](https://docs.cycling74.com/reference/pictctrl) is in dial mode, the offset value is added to the object's value before being sent out the outlet. The default offset value is 0.

### param\_connect[symbol]:

Establishes a two-way connection between the object and a parameter of a compatible object with parameters such as [gen~](https://docs.cycling74.com/reference/gen~) or [jit.gl.slab](https://docs.cycling74.com/reference/jit.gl.slab). The object can be used to change the value of the parameter and will update if the parameter value changes. The easiest way to set param\_connect is with the attribute's menu in the [inspector](https://docs.cycling74.com/userguide/inspector) or the Connect submenu of the [Object Action menu](https://docs.cycling74.com/userguide/action_menu). The menu displays all available parameters of compatible objects.

Setting the param\_connect attribute with a message requires the target parameter's path, which is the host object's scriping name followed by two colons and the parameter name. For example, for a [gen~](https://docs.cycling74.com/reference/gen~) object with scripting name  gen~\_AB , the path of the  freq  parameter would be  gen~\_AB::freq . You can set a value for the param\_connect before the host object or parameter exists, and the object will connect to the parameter once it exists. Refer to the user guide entry for [param\_connect](https://docs.cycling74.com/userguide/param_connect) for more details.

### parameter\_enable[int]

Enables use of this object with [Max for Live Parameters](https://docs.cycling74.com/userguide/m4l/live_parameters) and [setting initial values of parameters](https://docs.cycling74.com/userguide/parameter_mode) in Max.

### parameter\_mappable[int]: 1

When parameter\_mappable is enabled, the object will be available for mapping to keyboard or MIDI input using the [Mappings feature](https://docs.cycling74.com/userguide/mapping).

### range[int]: 128

Sets the range of the [pictctrl](https://docs.cycling74.com/reference/pictctrl) object when it is in dial mode. The default value is 128.

### ratio[int]: 2

Specifies how many pixels the mouse pointer must move before the value of the dial changes by one increment. If the [pictctrl](https://docs.cycling74.com/reference/pictctrl) object is using Circular Tracking, the ratio message specifies how many degrees the cursor must move, relative to the center of the object, to increase the value by one.

### snap[int]: 0

Sets [pictctrl](https://docs.cycling74.com/reference/pictctrl) to snap to the image's original size. When followed by a 0, [pictctrl](https://docs.cycling74.com/reference/pictctrl) will not snap to the image's original size.

### threshold[float]: 0.

The threshold attribute is the alpha value above which an image pixel's alpha value needs to exceed for a mouse click to register. This permits using an image with transparency where the transparent portion of the image will not register mouse clicks. In order for this attribute to have any effect it should be set to a value greater than zero but less than one (0.5 is a suggested value). Setting threshold to a higher value permits ignoring semi-transparent portions of an image. To ignore clicks on transparent parts of an image, you will also need to use a PNG format image file and tell the [pictctrl](https://docs.cycling74.com/reference/pictctrl) object your image has transparency by enabling the imagemask attribute.

### trackcircular[int]: 0

Sets the [pictctrl](https://docs.cycling74.com/reference/pictctrl) object to respond when you click on it and drag the mouse in a circular arc relative to the control's center (Circular Tracking mode). Moving the mouse clockwise increases the control's value, and moving it counterclockwise decreases its value. Enabling circular tracking disables all other tracking modes.  trackcircular 0  disables circular tracking.

### trackhorizontal[int]: 0

Sets the [pictctrl](https://docs.cycling74.com/reference/pictctrl) object to respond when you click on it and drag the mouse horizontally; moving the mouse to the right increases the object's value, and moving it to the left decreases the value. Enabling this mode of operation disables the Circular Tracking and Click to Increment modes (see the  clickincrement  and  trackcircular  messages).

### tracking[int]: 0

Toggles live tracking. If live tracking is on, the [pictctrl](https://docs.cycling74.com/reference/pictctrl) object will change its state if the mouse moves in and out of the rectangular border of the object with the mouse button held down.  tracking 0  disables live tracking

### trackvertical[int]: 0

Sets the [pictctrl](https://docs.cycling74.com/reference/pictctrl) object to respond when you click on it and drag the mouse vertically; moving the mouse up increases the object's value, and moving it down decreases the value. Enabling this mode of operation disables the Circular Tracking and Click to Increment modes (see the  clickincrement  and  trackcircular  messages).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Sends the current value of the [pictctrl](https://docs.cycling74.com/reference/pictctrl) to the outlet.

### int

Sets the value of the button or knob set by the control, and sends the current value out the outlet. In button and toggle mode, the value must be either 0 or 1. In dial mode, the range of values is determined by [pictctrl](https://docs.cycling74.com/reference/pictctrl) object's Range attribute.

Arguments:

- input
  [int]

### float

Converted to  int .

Arguments:

- input
  [float]

### (drag)

When a image file is dragged from the Max File Browser to a [pictctrl](https://docs.cycling74.com/reference/pictctrl) object, the image will be loaded.

### link

The word  link , followed by a filename to a file which has already been loaded into the [pictctrl](https://docs.cycling74.com/reference/pictctrl) object will link the object with that file.

Arguments:

- filename
  [symbol]

### (mouse)

Clicking on the [pictctrl](https://docs.cycling74.com/reference/pictctrl) object and dragging sends the current value out the outlet. Additional behaviors depend on how the object is configured using messages or setting attributes using the Inspector.

### picture

The word  picture  followed by the name of an image file will read that file into the [pictctrl](https://docs.cycling74.com/reference/pictctrl) object. The word with no name following opens a standard file dialog for choosing an image file.

Arguments:

- imagefile-name
  [list]

### read

The word  read  followed by the name of an image file will read that file into the [pictctrl](https://docs.cycling74.com/reference/pictctrl) object. The word with no name following opens a standard file dialog for choosing an image file.

Arguments:

- filename
  [list]

### readany

The word  readany  followed by the name of a file will read any type of file into the [pictctrl](https://docs.cycling74.com/reference/pictctrl) object and attempt to interpret it as a picture.

Arguments:

- filename
  [list]

### set

The word  set , followed by a number, sets the value of the button or knob to that number, without triggering output.

Arguments:

- input
  [int]

## Picture File Format

### Specifications

When you create a new [pictctrl](https://docs.cycling74.com/reference/pictctrl) object in a patcher window, it has no associated picture file. Use the Open button in the Inspector to choose a picture file for the control. By convention, the [pictctrl](https://docs.cycling74.com/reference/pictctrl) object uses images saved in Portable Network Graphics (.png) format. If you are using Max on Windows and want to to work with images other than PNG or PICT files, we recommend that you install QuickTime and choose a complete install of all optional components. The layout of the picture in the file varies depending on which mode of operation the [pictctrl](https://docs.cycling74.com/reference/pictctrl) uses. All three modes require that the pictures be made up of a grid of images, in which all images have the same width and height.

Button mode has the simplest layout:

![](''images/image186.png)

The first row of images is mandatory: these two images are used for the idle and clicked states (values zero and one, respectively) of the button. The next row of images, if present, is used for the control when it is in its inactive state. The next rows contain the masks for the top row of images, and the inactive images if present.

Toggle mode has a similar layout:

![](''images/image187.png)

In this mode, the top two rows are mandatory. The first row of images are used when the control's value is zero, the next row when its value is one. The third row is optional; it is used for the control when it is in its inactive state. (Note that there are no "clicked" images for the inactive state, since when inactive, the control ignores mouse clicks.) The next rows contain masks for the images.

The Dial mode layout varies in size depending on how many image frames it has, which must be the same as the Image Frames parameter as set in the inspector:

![](''images/image188.png)

The first row of images is mandatory: one image for each visually distinct state of the control. Dials need as many picts as you wish them to have visible states. Note that dials can receive and send a larger range of values than are represented by picts (e.g. your dial can have a range of 128 even if you only use eight pict frames to represent the range of the dial). The next row of images is optional, and is used when the user is clicking and dragging on the object to change its value. The next row is also optional; (Note that there are no "clicked" images for the inactive state, since when inactive, the control ignores mouse clicks.) The following rows contain masks for the images.

## Output

### int

The current value of the [pictctrl](https://docs.cycling74.com/reference/pictctrl) object. In toggle and button modes this will be a 0 or a 1. In dial mode, this value is specified by the range, offset, and multiplier that you set in the Inspector window.

## See Also

| Name | Description |
| --- | --- |
| [dial](https://docs.cycling74.com/reference/dial) | Output numbers using an onscreen dial |
| [kslider](https://docs.cycling74.com/reference/kslider) | Output numbers from an onscreen keyboard |
| [matrixctrl](https://docs.cycling74.com/reference/matrixctrl) | Matrix switch control |
| [pictslider](https://docs.cycling74.com/reference/pictslider) | Picture-based slider control |
| [rslider](https://docs.cycling74.com/reference/rslider) | Display or change a range of numbers |
| [slider](https://docs.cycling74.com/reference/slider) | Move a slider to output values |
| [tab](https://docs.cycling74.com/reference/tab) | Tab control |
| [textbutton](https://docs.cycling74.com/reference/textbutton) | Button with text |
| [ubutton](https://docs.cycling74.com/reference/ubutton) | Transparent button |
