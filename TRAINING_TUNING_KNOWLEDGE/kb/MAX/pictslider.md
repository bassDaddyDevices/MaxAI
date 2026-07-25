---
type: max
name: "pictslider"
summary: "Picture-based slider control"
signal: false
url: "https://docs.cycling74.com/reference/pictslider/"
package: "Max"
see_also: ["dial", "kslider", "multislider", "nslider", "pictctrl", "rslider", "slider", "tab", "textbutton", "ubutton"]
---
# pictslider

Picture-based slider control

## Description

A slider control that uses pictures in external files for its appearance. It uses two pictures--one for the "knob" and one for the background over which the knob moves. The [pictslider](https://docs.cycling74.com/reference/pictslider) object has default pictures that are used if you do not want to supply pictures of your own, but its intended use is creating controls with customized appearances.

#### Discussion

You can use the [pictslider](https://docs.cycling74.com/reference/pictslider) object to create horizontal or vertical sliders, as well as two-dimensional controllers (virtual trackpads or joysticks).

Note: The [pictslider](https://docs.cycling74.com/reference/pictslider) object customarily uses images saved in Portable Network Graphics (.png) format. If you are using Max on Windows, we recommend that you install QuickTime and choose a complete install of all optional components to work with images other than PNG or PICT files.

## Arguments

None.

## Attributes

### active[int]: 1

Toggles mouse control of the [pictslider](https://docs.cycling74.com/reference/pictslider) object. The default is 1 (enabled). If a separate set of inactive images is present in the pictslider object's graphics file and if the inactive images attribute is set, the active message will also change the appearance of the control.

### annotation\_name[symbol]:

Info View Title

### bgcolor[4 floats] >= 7.0.0

Sets the background color of the [pictslider](https://docs.cycling74.com/reference/pictslider) object in RGBA format.

### bkgnddrag[int]: 0

Toggles background drag mode for the [pictslider](https://docs.cycling74.com/reference/pictslider) object. When this mode is enabled, clicking and dragging anywhere in the background area of the slider will move the knob; the knob will move relative to the motion of the mouse, just as if you had clicked in the knob itself. The message  bkgnddrag 0  disables this mode. You must also uncheck the KnobJumps to Click Location checkbox in the [pictslider](https://docs.cycling74.com/reference/pictslider) object's Inspector or send the object a  jump 0  message to enable this mode.

### bkgndpict[symbol]: <default>

Designates the graphics file that the [pictslider](https://docs.cycling74.com/reference/pictslider) object will use for the control's background image. The symbol used as a filename must either be the name of a file in Max's current search path, or an absolute pathname for the file (e.g. " MyDisk:/Documents/UI Pictures/CoolBkgnd.png ").

### bkgndsize[int]: 0

Sets the [pictslider](https://docs.cycling74.com/reference/pictslider) object to change the size of the object to match the size of the background picture. After receiving this message, the object's size cannot be changed.  bkgndsize 0  allows the control to be resized in the usual manner by dragging its lower-right corner.

### bottommargin[int]: 0

Sets the bottom margin, in pixels, for the [pictslider](https://docs.cycling74.com/reference/pictslider). The margin reduces the area in which the knob moves; if a margin is zero, the knob can move all the way to the bottom of the slider.

### bottomvalue[atom\_long]: 0

Sets the values emitted by the [pictslider](https://docs.cycling74.com/reference/pictslider) object when the knob is moved as far as possible to the bottom. The message  bottomvalue 100  will cause the control to send 100 out of its left outlet when the knob is moved all the way to the bottom.

### clickedimage[int]: 1

Specifies that the graphics file used by the [pictslider](https://docs.cycling74.com/reference/pictslider) object contains an additional image to be displayed when the control is clicked.

### color[4 floats] >= 7.0.0

Sets the knob color of the [pictslider](https://docs.cycling74.com/reference/pictslider) object in RGBA format.

### elementcolor[4 floats] >= 7.0.0

Sets the knob color of the [pictslider](https://docs.cycling74.com/reference/pictslider) object when it is dragged in RGBA format.

### horizontaltracking[float]: 1.

Sets the horizontal tracking ratio for movements of the [pictslider](https://docs.cycling74.com/reference/pictslider) object's knob. The default value is 1.0. Values greater than one cause the knob to move more quickly when dragged; values less than one cause it to move more slowly.

### imagemask[int]: 0

When set to 1, specifies that the graphics file used by the [pictslider](https://docs.cycling74.com/reference/pictslider) object contains image masks. This attribute is present for legacy support - it has been superseded by the use of alpha channels in images.

### inactiveimage[int]: 1

When set to non-zero, specifies that the graphics file used by the [pictslider](https://docs.cycling74.com/reference/pictslider) object contains additional images for the object's inactive state.

### invisiblebkgnd[int]: 0

When set to non-zero, the [pictslider](https://docs.cycling74.com/reference/pictslider) object will not draw any background image. The knob will appear to float above any objects underneath it.

### jump[int]: 1

When set to non-zero, makes [pictslider](https://docs.cycling74.com/reference/pictslider) move the knob to the position of the cursor if you click in the object outside of the knob.  jump 0  disables this behavior; you must click in the knob itself to move it.

### knobpict[symbol]: <default>

Designates the graphics file that the [pictslider](https://docs.cycling74.com/reference/pictslider) object will use for the control's knob image. By convention, the [pictslider](https://docs.cycling74.com/reference/pictslider) object uses images saved in Portable Network Graphics (.png) format. If you are using Max on Windows and want to to work with images other than PNG or PICT files, we recommend that you install QuickTime and choose a complete install of all optional components. The symbol used as a filename must either be the name of a file in Max's current search path, or an absolute pathname for the file (e.g. " MyDisk:/Documents/UI Pictures/CoolKnob.png ").

### leftmargin[int]: 0

Sets the left margin, in pixels, for the [pictslider](https://docs.cycling74.com/reference/pictslider). The margin reduces the area in which the knob moves; if a margin is zero, the knob can move all the way to the left of the slider.

### leftvalue[atom\_long]: 0

Sets the values emitted by the [pictslider](https://docs.cycling74.com/reference/pictslider) object when the knob is moved as far as possible to the left. The message  leftvalue 100  will cause the control to send 100 out of its left outlet when the knob is moved all the way to the left.

### movehorizontal[int]: 1

When set to non-zero, allows the knob to change when the mouse is moved horizontally. The message  movehorizontal 0  prevents the knob from moving when the mouse is moved horizontally.

### movevertical[int]: 1

When set to non-zero, allows the knob to change when the mouse is moved vertically. The message  movevertical 0  prevents the knob from moving when the mouse is moved vertically.

### param\_connect[symbol]:

Establishes a two-way connection between the object and a parameter of a compatible object with parameters such as [gen~](https://docs.cycling74.com/reference/gen~) or [jit.gl.slab](https://docs.cycling74.com/reference/jit.gl.slab). The object can be used to change the value of the parameter and will update if the parameter value changes. The easiest way to set param\_connect is with the attribute's menu in the [inspector](https://docs.cycling74.com/userguide/inspector) or the Connect submenu of the [Object Action menu](https://docs.cycling74.com/userguide/action_menu). The menu displays all available parameters of compatible objects.

Setting the param\_connect attribute with a message requires the target parameter's path, which is the host object's scriping name followed by two colons and the parameter name. For example, for a [gen~](https://docs.cycling74.com/reference/gen~) object with scripting name  gen~\_AB , the path of the  freq  parameter would be  gen~\_AB::freq . You can set a value for the param\_connect before the host object or parameter exists, and the object will connect to the parameter once it exists. Refer to the user guide entry for [param\_connect](https://docs.cycling74.com/userguide/param_connect) for more details.

### parameter\_enable[int]

Enables use of this object with [Max for Live Parameters](https://docs.cycling74.com/userguide/m4l/live_parameters) and [setting initial values of parameters](https://docs.cycling74.com/userguide/parameter_mode) in Max.

### parameter\_mappable[int]: 1

When parameter\_mappable is enabled, the object will be available for mapping to keyboard or MIDI input using the [Mappings feature](https://docs.cycling74.com/userguide/mapping). (default = 1).

### rightmargin[int]: 0

Sets the right margin, in pixels, for the [pictslider](https://docs.cycling74.com/reference/pictslider). The margin reduces the area in which the knob moves; if a margin is zero, the knob can move all the way to the right of the slider.

### rightvalue[atom\_long]: 127

Sets the values emitted by the [pictslider](https://docs.cycling74.com/reference/pictslider) object when the knob is moved as far as possible to the right. The message  rightvalue 100  will cause the control to send 100 out of its left outlet when the knob is moved all the way to the right.

### scaleknob[int]: 0

When set to non-zero, tells the [pictslider](https://docs.cycling74.com/reference/pictslider) object to stretch or shrink the knob when you change the size of the entire object.  scaleknob 0  will result in the knob always being drawn at its original size.

### style[symbol]: >= 7.0.0

Sets the [style](https://docs.cycling74.com/userguide/styles) to be applied to the object. Styles can be set using the [Format Palette](https://docs.cycling74.com/userguide/format_palette).

### topmargin[int]: 0

Sets the top margin, in pixels, for the [pictslider](https://docs.cycling74.com/reference/pictslider). The margin reduces the area in which the knob moves; if a margin is zero, the knob can move all the way to the top of the slider.

### topvalue[atom\_long]: 127

Sets the values emitted by the [pictslider](https://docs.cycling74.com/reference/pictslider) object when the knob is moved as far as possible to the top. The message  topvalue 100  will cause the control to send 100 out of its left outlet when the knob is moved all the way to the top.

### verticaltracking[float]: 1.

Sets the vertical tracking ratio for movements of the [pictslider](https://docs.cycling74.com/reference/pictslider) object's knob. The default value is 1.0. Values greater than one cause the knob to move more quickly when dragged; values less than one cause it to move more slowly.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

In left inlet: Sends the current values of the [pictslider](https://docs.cycling74.com/reference/pictslider) to its outlets. The horizontal value is sent out the left outlet; the vertical value out its right outlet.

### int

In left inlet: sets the [pictslider](https://docs.cycling74.com/reference/pictslider) object's horizontal value. The value is also sent out the left outlet, and the [pictslider](https://docs.cycling74.com/reference/pictslider) object's current vertical value is sent out the right outlet.

In right inlet: sets the [pictslider](https://docs.cycling74.com/reference/pictslider) object's vertical value. The value is also sent out the right outlet, and the control's current horizontal value is sent out the left outlet.

Arguments:

- input
  [int]

### float

Converted to  int .

Arguments:

- input
  [float]

### list

In left inlet: A list of two numbers sent to the left inlet sets the [pictslider](https://docs.cycling74.com/reference/pictslider) object's horizontal value to the first number and its vertical value to the second. The two values are sent out the left and right outlets.

Arguments:

- horizontal
  [int]
- vertical
  [int]

### (drag)

When a image file is dragged from the Max File Browser to a [pictslider](https://docs.cycling74.com/reference/pictslider) object, the image will be loaded as the object's background image.

### bkgndpicture

The word  bkgndpicture , followed by a symbol that specifies a filename, designates the graphics file that the [pictslider](https://docs.cycling74.com/reference/pictslider) object will use for the control's background image. By convention, the [pictslider](https://docs.cycling74.com/reference/pictslider) object uses images saved in Portable Network Graphics (.png) format. If you are using Max on Windows and want to to work with images other than PNG or PICT files, we recommend that you install QuickTime and choose a complete install of all optional components. The symbol used as a filename must either be the name of a file in Max's current search path, or an absolute pathname for the file (e.g. " MyDisk:/Documents/UI Pictures/CoolBkgnd.png ").

Arguments:

- filename
  [list]

### knobpicture

In left inlet: The word  knobpicture , followed by a symbol that specifies a filename, designates the graphics file that the [pictslider](https://docs.cycling74.com/reference/pictslider) object will use for the control's knob file. The symbol used as a filename must either be the name of a file in Max's current search path, or an absolute pathname for the file (e.g. " MyDisk:/Documents/UI Pictures/CoolKnob.png "). The word  knobpicture  by itself puts up a standard Open Document dialog box.

Arguments:

- filename
  [list]

### (mouse)

Clicking on the [pictctrl](https://docs.cycling74.com/reference/pictctrl) object and dragging sends the current value out the outlet. Additional behaviors depend on how the object is configured using messages or setting attributes.

### readanybkgnd

The word  readanybkgnd  followed by the name of a file will read any type of file into the [pictslider](https://docs.cycling74.com/reference/pictslider) object and attempt to interpret it as a background image.

Arguments:

- filename
  [list]

### readanyknob

The word  readanyknob  followed by the name of a file will read any type of file into the [pictslider](https://docs.cycling74.com/reference/pictslider) object and attempt to interpret it as a knob image.

Arguments:

- filename
  [list]

### set

In left inlet: The word  set , followed by a number, sets the pictcslider object's horizontal value but does not send the value out its left outlet.The word  set , followed by two numbers, sets the [pictslider](https://docs.cycling74.com/reference/pictslider) object's horizontal value to the first number and its vertical value to the to the second number, but does not send the values out its outlets.

In right inlet: The word  set , followed by a number, sets the [pictslider](https://docs.cycling74.com/reference/pictslider) object's vertical value, but does not send the value out its right outlet.

Arguments:

- horizontal
  [int]
- vertical
  [int]

### track

In left inlet: The word  track , followed by a float, sets the tracking ratio for horizontal movements of the [pictslider](https://docs.cycling74.com/reference/pictslider) object's knob.

In right inlet: The word  track , followed by a float, sets the tracking ratio for vertical movements of the [pictslider](https://docs.cycling74.com/reference/pictslider) object's knob.

Arguments:

- ratio
  [float]

## Picture File Format

### Specifications

The [pictslider](https://docs.cycling74.com/reference/pictslider) object uses the two picture files: one for the background, and one for the knob that is moved over the background with the mouse.

Background picture files can be in PICT format, or if QuickTime Version 3.0 or later is installed, one of the other graphics file formats listed in Jitter Appendix A. Background picture files must have the following layout:

![](''images/image190.png)

Only one image is required; if only one image is supplied, it will be used for drawing all states of the background. Additional images are placed to the right of the first image. You can add images for the inactive state of the control. The inactive image will be used after the control has received an  active 0  message.

Knob files must be in PICT format with the following layout:

![](''images/image191.png)

The picture is made up of a grid of one or more images. All images have the same width and height.

Only one image is required; if only one image is supplied, it will be used for drawing all states of the knob. Additional images are placed to the right of the first image. You can add images for either or both the "clicked" or inactive states of the control. The "clicked" image will be shown when the user is dragging the control's knob. The inactive image will be used after the control has received an  active 0  message.

Image masks can be used to create knobs with non-rectangular outlines. These masks are directly below their corresponding images in the picture file. If you wish to use masks for any of the knob images, you must provide masks for all of them--each image will have a corresponding row of masks. Black pixels in the mask image create areas of the corresponding image that will be drawn, and white pixels create invisible areas.

## Output

### int

Moving the slider's knob by clicking and dragging it with the mouse, or sending values to either of its inlets, causes its horizontal value to be emitted from the left outlet and its vertical value to be emitted from the right outlet. Incoming values are constrained to the ranges determined by the top/bottom and left/right values set in the inspector.

## See Also

| Name | Description |
| --- | --- |
| [dial](https://docs.cycling74.com/reference/dial) | Output numbers using an onscreen dial |
| [kslider](https://docs.cycling74.com/reference/kslider) | Output numbers from an onscreen keyboard |
| [multislider](https://docs.cycling74.com/reference/multislider) | Display data as sliders or a scrolling display |
| [nslider](https://docs.cycling74.com/reference/nslider) | Output numbers from a notation display |
| [pictctrl](https://docs.cycling74.com/reference/pictctrl) | Picture-based control |
| [rslider](https://docs.cycling74.com/reference/rslider) | Display or change a range of numbers |
| [slider](https://docs.cycling74.com/reference/slider) | Move a slider to output values |
| [tab](https://docs.cycling74.com/reference/tab) | Tab control |
| [textbutton](https://docs.cycling74.com/reference/textbutton) | Button with text |
| [ubutton](https://docs.cycling74.com/reference/ubutton) | Transparent button |
