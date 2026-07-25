---
type: jitter
name: "jit.geom-group"
summary: "Messages and attributes common to Jitter Geometry objects"
signal: false
url: "https://docs.cycling74.com/reference/jit.geom-group/"
package: "Jitter Geometry"
---

# jit.geom-group

Messages and attributes common to Jitter Geometry objects

## Arguments

None.

## Attributes

### async[int]

Enables asyncronous geometry processing (default = 1). When enabled, geometry processing happens in a background thread. Changing the value of async will change that value for all geometry operators bound to that context.

### bypass[int]

Bypass geometry processing (default = 0). When enabled geometry input is passed on to the next geometry operator in the graph unmodified.

### enable[int]

Enables the geometry operator (default = 1). When disabled, no geometry is processed or output.

### name[symbol] read-only

Geometry operator name (default = UID). Querying the name attribute returns the unique identifier symbol for this geometry operator.

## Messages

### bang

Output geometry for generator operators. Other operator types ignore this message.

### cancel

Attempts to cancel any geometry processing currently active in the operator.

### clear

Clears and resets the geometry operator.

### output

Output geometry for generator operators. Other operator types ignore this message.
