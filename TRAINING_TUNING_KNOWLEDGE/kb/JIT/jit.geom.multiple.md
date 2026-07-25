---
type: jitter
name: "jit.geom.multiple"
summary: "Named geometry container"
signal: false
url: "https://docs.cycling74.com/reference/jit.geom.multiple/"
package: "Jitter Geometry"
see_also: ["jit.geom.distribute"]
---
# jit.geom.multiple

Multiply surface geometry

## Description

[jit.geom.multiple](https://docs.cycling74.com/reference/jit.geom.multiple) multiplies incoming surface geometry. The second inlet provides positions for each instance through a geometry matrix (required). The third inlet can be used to provide scale values for each instance (optional). The fourth inlet can be used to provide rotation values for each instance (optional). The resulting instances are joined into a single surface.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

## See Also

| Name | Description |
| --- | --- |
| [jit.geom.distribute](https://docs.cycling74.com/reference/jit.geom.distribute) |  |
