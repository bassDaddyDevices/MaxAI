---
type: jitter
name: "jit.gl.picker"
summary: "Mouse picking in an opengl context"
signal: false
url: "https://docs.cycling74.com/reference/jit.gl.picker/"
package: "Jitter"
see_also: ["jit.phys.picker", "jit.gl.handle"]
---
# jit.gl.picker

Mouse picking in an opengl context

## Description

The [jit.gl.picker](https://docs.cycling74.com/reference/jit.gl.picker) object responds to mouse interaction in the destination by reporting the name of jit.gl (OB3D) objects intersecting with the mouse. If an intersection occurs object outputs the message  mouse  followed by the intersecting object name, followed by a 0 or 1 representing the left mouse button state. If a previously intersecting object is no longer intersecting, a  mouseout  message is output followed by the object name and mouse button state.

#### Discussion

This OB3D object optionally takes one argument: the name of a [drawing context](https://docs.cycling74.com/userguide/jitter/graphics_processing#graphics-contexts). This is a named instance of a [jit.world](https://docs.cycling74.com/reference/jit.world), or [jit.pworld](https://docs.cycling74.com/reference/jit.pworld) object, or a [jit.gl.node](https://docs.cycling74.com/reference/jit.gl.node) sub-context. This value may also be set via the OB3D drawto attribute. If no argument is present, the object is implicitly added to the first valid drawing context or sub-context found in the current patch or by searching up the patcher hierarchy.

## Attributes

### filters[10 symbols]

Specify a list of filterclass names that can be picked (default = all). Possible values include  all  and  default . Additional values include any user-specified filterclass names (maximum allowed = 10).

### fixed\_delta[float] >= 9.0.0

Unused

### hover[int]

Enable mouse hovering (default = 1)

### ui\_priority[int]

UI priority value (default = -1000). When multiple UI objects are listening to the same window, ui\_priority determines the order objects receive input. Lower values test first.

### OB3D Attributes

### drawto[symbol]

The named drawing context in which to draw (default = none) A named drawing context is a named instance of a jit.window, jit.pwindow, or jit.matrix object that has an instance of the jit.gl.render object associated with it.

### enable[int]

Enable flag (default = 1) When the flag is set, drawing is enabled.

### layer[int]

Object layer number (default = 0) When in automatic mode, the layer number determines the rendering order (low to high). Objects in the same layer have no guarantee which will be rendered first.

### name[symbol]

The instance name (default = UID)

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### touch

Detect and report object intersections from screen coordinate args. If an intersection is detected, the dump outlet outputs the object name.

Arguments:

- screen-x
  [long]
- screen-y
  [long]

### touch\_ray

Detect and report object intersections from ray coordinate args. The first 3 args set the ray start position, and the last 3 set the ray end. If an intersection is detected, the dump outlet outputs the object name.

Arguments:

- x-from
  [float]
- y-from
  [float]
- z-from
  [float]
- x-to
  [float]
- y-to
  [float]
- z-to
  [float]

### OB3D Messages

### draw

Draws the object in the named drawing destination. If the matrixoutput attribute is supported and set to 1, the geometry matrices are sent out the object's left outlet.

### drawraw

Equivalent to  draw  with the inherit\_all attribute set to 1.

### drawimmediate

Equivalent to  draw  but ignoring any potential renderer setup

## See Also

| Name | Description |
| --- | --- |
| [jit.phys.picker](https://docs.cycling74.com/reference/jit.phys.picker) | Constraint picking in a physics world |
| [jit.gl.handle](https://docs.cycling74.com/reference/jit.gl.handle) | Use mouse movement to control position/rotation |
