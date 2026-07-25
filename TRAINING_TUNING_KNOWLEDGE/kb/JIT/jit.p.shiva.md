---
type: jitter
name: "jit.p.shiva"
summary: "Generate/eliminate particles"
signal: false
url: "https://docs.cycling74.com/reference/jit.p.shiva/"
package: "Jitter"
see_also: ["jit.p.bounds", "jit.p.vishnu"]
---
# jit.p.shiva

Generate/eliminate particles

## Description

The [jit.p.shiva](https://docs.cycling74.com/reference/jit.p.shiva) object generates Jitter matrices conforming to the Jitter particle system specification.

#### Discussion

Particle system matrices must be 2-dimensional (n x 2, where n is the maximum number of particles), and may be composed of either  float32  or  float64  data types. Planes 0 and 1 are reserved and represent a unique particle ID and the current life of the particle, respectively. All other planes (from plane 2 to plane 31) may be used to manage qualities for each particle. The second row always holds the immediately previous value of row 1.

Particles are emitted at a rate determined by the emit attribute, until the maximum number of particles are active. When newborn, their life is set to a value determined by the life attribute. Each time a particle passes through [jit.p.shiva](https://docs.cycling74.com/reference/jit.p.shiva), its life is decremented. When life reaches zero, the particle is destroyed, allowing for new particles to be born. For this reason, particle systems in Jitter should be constructed as feedback systems. See the help files for examples.

Jitter objects with the  jit.p.  prefix expect properly specified particle systems matrices, and respect the reserved plane values. Other Jitter objects of use to particle systems construction (such as [jit.op](https://docs.cycling74.com/reference/jit.op)) have no knowledge of the matrix format, so care should be taken when you work with them, if you intend to feed the results back into [jit.p.shiva](https://docs.cycling74.com/reference/jit.p.shiva).

## Matrix Operator

matrix inputs:1, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 1 | 1 | 1 | 2 | 2 | float32 float64 |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### emit[int]

The maximum particles emitted per frame (default = 100)

### emit\_var[int]

The amount of emit variance (default = 15)

### init[30 floats]

The initial values, per-plane in mode 1 only (default = 0.)

### init\_var[30 floats]

The amount of init variance, per-plane (default = 0.)

### life[int]

The maximum particle life (default = 60)

### life\_var[int]

The amount of life variance (default = 15)

### mode[int]

Use init attribute flag (default = 0)

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.p.bounds](https://docs.cycling74.com/reference/jit.p.bounds) | Limit particles to a region of space |
| [jit.p.vishnu](https://docs.cycling74.com/reference/jit.p.vishnu) | Apply single force to particles |
