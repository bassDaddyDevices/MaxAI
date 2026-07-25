---
type: jitter
name: "jit.geometry"
summary: "Named geometry container"
signal: false
url: "https://docs.cycling74.com/reference/jit.geometry/"
package: "Jitter Geometry"
see_also: ["jit.geom.shape", "jit.geom.togeom", "jit.geom.todict", "jit.geom.tomatrix", "jit.geom.tomesh"]
---
# jit.geometry

Named geometry container

## Description

The [jit.geometry](https://docs.cycling74.com/reference/jit.geometry) object is a named container for geometry data. Geometry data sent to its inlet is stored and can be referenced by the registered name in a geometry graph by sending the message  jit\_geometry   *registered\_name* .

## Attributes

### enable[int]

Toggles processing of this geometry in any geometry graphs that reference it (default = 1).

### name[symbol]

The registered geometry name (default = UID).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Output stored geometry

### jit\_geometry

Input geometry to store

### output

Output stored geometry

## See Also

| Name | Description |
| --- | --- |
| [jit.geom.shape](https://docs.cycling74.com/reference/jit.geom.shape) |  |
| [jit.geom.togeom](https://docs.cycling74.com/reference/jit.geom.togeom) |  |
| [jit.geom.todict](https://docs.cycling74.com/reference/jit.geom.todict) |  |
| [jit.geom.tomatrix](https://docs.cycling74.com/reference/jit.geom.tomatrix) |  |
| [jit.geom.tomesh](https://docs.cycling74.com/reference/jit.geom.tomesh) |  |
