---
type: jitter
name: "jit.geom.xform"
summary: "Named geometry container"
signal: false
url: "https://docs.cycling74.com/reference/jit.geom.xform/"
package: "Jitter Geometry"
see_also: ["jit.geom.join", "jit.geom.thru"]
---
# jit.geom.xform

Transform geometry

## Description

Use [jit.geom.xform](https://docs.cycling74.com/reference/jit.geom.xform) to adjust the position, rotation or scale of geometry. The operator inherits attributes from the [jit.anim.node](https://docs.cycling74.com/reference/jit.anim.node) object, and as such can be bound to existing [jit.anim.node](https://docs.cycling74.com/reference/jit.anim.node) objects via the anim attribute. See that objects reference page for detailed descriptions of these attributes.

## Attributes

### anchor[3 floats]

Anchor

### anim[symbol]

Parent [jit.anim.node](https://docs.cycling74.com/reference/jit.anim.node) name

### animmode[symbol]

Anim Mode

Possible values:

'local'

'parent'

'world'

### direction[3 floats]

Direction

### inherit\_position[int]

Inherit Position

### inherit\_rotate[int]

Inherit Rotate

### inherit\_scale[int]

Inherit Scale

### invtransform[16 floats] read-only

Inverse Transform

### locklook[int]

Lock Look

### lockplane[int]

Lock Plane

Possible values:

0 = 'none'

1 = 'x-plane'

2 = 'y-plane'

3 = 'z-plane'

### lookat[3 floats]

Lookat

### movemode[symbol]

Move Mode

Possible values:

'local'

'parent'

'world'

### parentpos[3 floats]

Parent Pos

### parentquat[4 floats]

Parent Quat

### parentrot[4 floats]

Parent Rot

### parentscale[3 floats]

Parent Scale

### position[3 floats]

Position

### quat[4 floats]

Quat

### rotate[4 floats]

Rotate

### rotate\_order[symbol]

Rotate Order

Possible values:

'auto'

'xyz'

'xzy'

'yxz'

'yzx'

'zxy'

'zyx'

### rotatexyz[3 floats]

Rotate XYZ

### scale[3 floats]

Scale

### transform[16 floats]

Transform

### tripod[int]

Tripod

### turnmode[symbol]

Turn Mode

Possible values:

'local'

'parent'

'world'

### worlddir[3 floats] read-only

World Dir

### worldpos[3 floats] read-only

World Pos

### worldquat[4 floats] read-only

World Quat

### worldrot[4 floats] read-only

World Rot

### worldscale[3 floats] read-only

World Scale

### worldtransform[16 floats] read-only

World Transform

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

## See Also

| Name | Description |
| --- | --- |
| [jit.geom.join](https://docs.cycling74.com/reference/jit.geom.join) |  |
| [jit.geom.thru](https://docs.cycling74.com/reference/jit.geom.thru) |  |
