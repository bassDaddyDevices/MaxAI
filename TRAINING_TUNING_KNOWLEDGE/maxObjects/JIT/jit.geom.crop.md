---
type: jitter
name: "jit.geom.crop"
summary: "Named geometry container"
signal: false
url: "https://docs.cycling74.com/reference/jit.geom.crop/"
package: "Jitter Geometry"
see_also: ["jit.geom.close"]
---
# jit.geom.crop

Crop surface geometry

## Description

Use [jit.geom.crop](https://docs.cycling74.com/reference/jit.geom.crop) to limit surface geometry to a bounding area area defined by a min and max value.

## Attributes

### coordmode[symbol]

Specifies how min and max should be interpreted.

Possible values:

'absolute'
(
Absolute coordinates
)
Coordinates are specified in world space.

'relative'
(
Relative coordinates
)
Coordinates are interpreted in 0-1 range based on the surface bounds.

### invert[int]

Inverts the crop (only supported for mode 'simple').

### max[3 floats]

The maximum coordinate of the crop bounding box.

### min[3 floats]

The minimum coordinate of the crop bounding box.

### mode[symbol]

Specifies how the crop is performed (default = 'cut').

Possible values:

'simple'
(
Simple mode
)
Removes all faces outside of the crop bounds.

'cut'
(
Cut mode
)
Performs a clean cut to remove geometry outside of the crop bounds.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

## See Also

| Name | Description |
| --- | --- |
| [jit.geom.close](https://docs.cycling74.com/reference/jit.geom.close) |  |
