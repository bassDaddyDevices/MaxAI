---
type: jitter
name: "jit.gl.meshwarp"
summary: "Video mapping tool"
signal: false
url: "https://docs.cycling74.com/reference/jit.gl.meshwarp/"
package: "Jitter Tools"
see_also: ["jit.gl.mesh", "jit.gl.videoplane"]
---
# jit.gl.meshwarp

Video mapping tool

## Description

The jit.gl.meshwarp object deforms visual material projected on a two-dimensional mesh.
It can be used for video-mapping or other creative applications.

## Arguments

### drawto[message] optional

The named drawing context in which to draw (default = none). A named drawing context
is a named instance of a [jit.world](https://docs.cycling74.com/reference/jit.world), [jit.pworld](https://docs.cycling74.com/reference/jit.pworld) or [jit.gl.node](https://docs.cycling74.com/reference/jit.gl.node) object. If no argument is
provided the object will find a context implicitly.

## Attributes

### apply\_mask[]

Hide or show meshwarp plane using existing masks (default = 0)

### color[]

The color of the mesh (default = 1. 1. 1. 1.)

### curvature[]

A quick way to set both the X and Y NURBS order, which determines the curvature of the underlying canvas mesh (range 0. to 1.)
Sets both dims of nurbs\_order, based on the current mesh\_dim. The attribute is float type, however
output is clamped to int values and therefore may look choppy when adjusting.

### enable[]

Enable flag (default = 1) When the flag is set, drawing is enabled.

### invert\_mask[]

When the flag is set, the mask is inverted.
Only what is contained inside the masks will be shown in the meshwarp plane.

### layer[]

Object layer number (default = 0). When in automatic mode, the layer number determines
the rendering order (low to high). Objects in the same layer have no guarantee which will be rendered first.

### lock\_to\_aspect[]

Locks the scale to match the proportions of the input texture (default = 0).
When set to active, the scale attribute will only respond to the second attribute argument (y scale).

### mask\_mode[]

When the flag is set, masking mode is enabled and the following editing operations are supported:

- Create new mask:  ***shift + double click***  on meshwarp plane
- Move mask:  ***ctrl/cmd + drag***  on blue mask dot
- Delete mask:  ***shift + double click***  on blue mask dot
- Modify mask shape:  ***click and drag***  on yellow mask dots
- Add mask vertex:  ***shift + double click***  on mask edge line
- Delete mask vertex:  ***shift + double click***  on yellow mask dot

### meshdim[]

Dimension of the UI mesh. Sets the number of clickable vertices displayed (default = 4 4)

### nurbs\_order[]

Set the X and Y order of the underlying NURBS canvas mesh.
The order determines the curvature of the canvas mesh (default = 1 1).

### output\_texture[]

Capture to internal texture (default = 0).
When enabled, the rendering of this meshwarp is captured to texture and the texture name is output out the left outlet.
The dimensions of the texture are equal to the dimensions of the rendering window.

### position[]

The 3D origin in the form x y z (default = 0. 0. 0.)

### rotatez[]

Sets the current rotation about the positive z axes (default = 0.).
Angles are expressed in degrees.

### scale[]

The 3D scaling factor in the form x y z (default = 1. 1. 1.)

### show\_position\_handle[]

Show / Hide position handle circle flag (default = 1)

### show\_scale\_handles[]

Show / Hide scale handle circles flag (default = 1)

### show\_ui[]

Show or hide the interactive user interface for the jit.gl.meshwarp (default = 1).
When the flag is set, the object will be highlighted if not currently selected.

### texture[]

The name of the texture to be applied (default = none).

### grid\_color[]

Set the color of the UI mesh grid (default = random);

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### jit\_gl\_texture

Binds the texture specified by texture-name to this object. Equivalent to setting the texture attribute to texture-name.

### mesh\_matrix

The vertex data for the meshwarp can be set with a matrix.
The matrix must be two dimensional and have two planes for the X and Y vertex coordinates.

### output\_mesh\_matrix

Outputs the meshwarp vertex data as a matrix.

### read

Read the complete current state of the jit.gl.meshwarp object from a JSON file (.json).
If no filename is specified, a file dialog will open to let you choose a file.

### redo

Redo latest undone UI changes. Can be also called by pressing "ctrl + y/cmd + shift + z" on the keyboard.

### reset

Reset the jit.gl.meshwarp to the default state. It will reset the scale, position, rotation and color attributes.

### reset\_mask

Deletes any existing masks.

### save

Save the complete current state of the jit.gl.meshwarp object to a JSON file (.json).
If no filename is specified, a file dialog will open to let you choose a file.

### undo

Undo latest UI changes. Can be also called by pressing "ctrl/cmd + z" on the keyboard.

## See Also

| Name | Description |
| --- | --- |
| [jit.gl.mesh](https://docs.cycling74.com/reference/jit.gl.mesh) | Generate GL geometry from matrices |
| [jit.gl.videoplane](https://docs.cycling74.com/reference/jit.gl.videoplane) | Display video in OpenGL |
