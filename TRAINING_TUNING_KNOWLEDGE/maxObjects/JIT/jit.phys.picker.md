---
type: jitter
name: "jit.phys.picker"
summary: "Constraint picking in a physics world"
signal: false
url: "https://docs.cycling74.com/reference/jit.phys.picker/"
package: "Jitter"
see_also: ["jit.phys.world", "jit.phys.body", "jit.gl.picker"]
---
# jit.phys.picker

Constraint picking in a physics world

## Description

The [jit.phys.picker](https://docs.cycling74.com/reference/jit.phys.picker) object responds to mouse clicks and drags in the destination by creating a constraint on [jit.phys.body](https://docs.cycling74.com/reference/jit.phys.body) objects intersecting with the mouse. Multi-touch picking is facilitated by the  touch  message.

#### Discussion

When an intersection occurs, the [jit.phys.body](https://docs.cycling74.com/reference/jit.phys.body) name and current mouse-state is sent out the leftmost outlet. If dynamics is enabled, a point-to-point constraint is created on the picked body that persists until the mouse button is released. When dragging a rigid-body with dynamics enabled, holding down the option key will move the object towards and away from the camera. If the option key is held and the mouse is released, the constraint will persist, allowing the mouse to be repositioned on the rigid-body.

## Attributes

### body[symbol] read-only

The name of the [jit.phys.body](https://docs.cycling74.com/reference/jit.phys.body) currently intersecting with the mouse.

### dynamics[int]

Enable/disable dynamic constraint picking intersecting bodies (default = 1).

### enable[int]

Enable the picker contraint and ray-testing in the physics simulation (default = 1).

### filterclass[symbol]

Set the name of this object's collision filter-class (default = default). Other objects most specify the  filterclass  name in their  filters  list to enable collisions with this object. Maximum allowed unique names is 10.

### filters[10 symbols]

Specify a list of filterclass names to enable collisions with (default = all). Possible values include  all  and  default . Additional values include any user-specified filterclass names (maximum allowed = 10).

### hover[int]

Enable/disable mouse hovering allowing for picking without the mouse button down (default = 0).

### local\_position[3 floats] read-only

The local-space constraint position on the picked body (default = 0 0 0).

### output\_positions[int]

Enable/disable the output of local and world position values when an object is selected(default = 0). When enabled the local position on the clicked object, and the world-space position of the constraint are output following the object name and mouse-state.

### pickmode[symbol]

Determines how the constraint is applied to the intersecting body (default = surface).

Possible values:

'center'
(
The constraint is applied to the bodies center of mass
)
'surface'
(
The constraint is applied to the intersecting surface point
)

### position[3 floats] read-only

The current constraint picking position (default = 0 0 0).

### strength[float]

Set the constraint strength (default = 0.2). Determines what proportion of the joint error will be fixed each simulation step. Values between 0.1 and 0.8 are recommended.

### stretch[float]

Set the constraint stretch (default = 0.0). Setting to a positive value allows forces acting on rigid bodies to violate the constraint by an amount proportional to the stretch value.

### ui\_priority[int]

UI priority value (default = -800). When multiple UI objects are listening to the same window, ui\_priority determines the order objects receive input. Lower values test first.

### worldname[symbol]

The name of a [jit.phys.world](https://docs.cycling74.com/reference/jit.phys.world) context this constraint picker is bound to.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### touch

Update the multi-touch point at  index  (or create if doesn't exist). The constraint is enabled if  down  is 1, and the position is set from  screen-x  and  screen-y .

Arguments:

- index
  [long]
- down
  [long]
- screen-x
  [long]
- screen-y
  [long]

## See Also

| Name | Description |
| --- | --- |
| [jit.phys.world](https://docs.cycling74.com/reference/jit.phys.world) | Collision detection and rigid body dynamics |
| [jit.phys.body](https://docs.cycling74.com/reference/jit.phys.body) | A rigid body and collision shape |
| [jit.gl.picker](https://docs.cycling74.com/reference/jit.gl.picker) | Mouse picking in an opengl context |
