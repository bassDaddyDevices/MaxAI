---
type: jitter
name: "jit.phys.world"
summary: "Collision detection and rigid body dynamics"
signal: false
url: "https://docs.cycling74.com/reference/jit.phys.world/"
package: "Jitter"
see_also: ["jit.phys.body", "jit.phys.multiple", "jit.phys.ghost", "jit.phys.picker", "jit.gl.physdraw"]
---
# jit.phys.world

Collision detection and rigid body dynamics

## Description

The [jit.phys.world](https://docs.cycling74.com/reference/jit.phys.world) object encapsulates a physics simulation context to perform collision detection and rigid body dynamics on its child objects. Other physics objects in the same patch as a [jit.phys.world](https://docs.cycling74.com/reference/jit.phys.world) object are automatically added to the world. Multiple contexts can be managed by explicitly setting the name attribute of the [jit.phys.world](https://docs.cycling74.com/reference/jit.phys.world) object and the worldname attribute of the child physics objects. Dynamics can be disabled, allowing the world to be used solely for collision detections. A 2D simulation is achieved with the remove\_plane attribute.

#### Discussion

The physics engine maintains an internal timer for simulation steps that decouples the physics step frequency from the rendering frame rate. The fixedtimestep attribute controls the physics engine frequency, and the maxsubsteps attribute clamps the number of steps allowed between updates. The default frequency of 60 and maxsubsteps of 1 requires a FPS of 60. If the FPS is 30, maxsubsteps should be increased (allowing for more than 1 simulation step each update). If the simulation is behaving incorrectly (rigid body penetration, erratic movement, etc), try increasing the simulation frequency and sub-steps.

## Attributes

### automatic[int]

Enables and disables automatic mode where update messages are received from that target [jit.gl.render](https://docs.cycling74.com/reference/jit.gl.render) object (default = 1).

### collision\_mode[symbol]

Specifies the format of the collisions dictionary (default = simple)

Possible values:

'simple'
(
Report contact point positions and normals average
)
'complete'
(
All contact point position and normals reported
)

### collisions[int]

Enables and disables collision reporting out the second (dumpout) outlet.

### drawto[symbol]

Assign to the named drawing context, allowing for updates to be received automatically.

### dynamics[int]

Enables and disables rigid-body dynamics.

### enable[int]

Enable the physics simulation for all objects in this physics context (default = 1).

### fixed\_delta[float] >= 9.0.0

Locks the delta time value used when animating, in seconds (default = 0). When non-zero, updates are calculated using this value, rather than the actual time between frames. Useful for non realtime frame capture. If non-zero will override that of the bound [jit.world](https://docs.cycling74.com/reference/jit.world) fixed\_delta value.

### fixedtimestep[int]

Fixed time step value (Hz) of physics simulation (default = 60). Increasing this value increases the resolution of the simulation.

### gravity[3 floats]

A 3D vector describes the force of gravity applied to all objects in the world (default = 0, -9.8, 0).

### maxsubsteps[int]

Maximum number of internal simulation steps between updates (default = 1). Increase this number if FPS is low in order to prevent the simulation from losing time.

### name[symbol]

Specifies the name of the instance (default = UID).

### numcollisions[int] read-only

Specifies the number of collision points in the world.

### numthreads[int]

Sets the number of collison dispatcher threads (default = 1). Increasing the number of threads may improve performance, especially for physics scenes with distinct and separate groups of colliding objects.

### raytest\_mode[symbol]

Specifies how raytest messages return object hits for the  raytest  and  screenraytest  messages (default = closest)

Possible values:

'closest'
(
Return only the object closest to the camera
)
'all'
(
Return all intersecting objects
)

### remove\_plane[int]

Remove plane to enable 2D simulation (default = none).

Possible values:

0 = 'none'

1 = 'x'
(
Constrain simulation to Y and Z planes
)
2 = 'y'
(
Constrain simulation to X and Z planes
)
3 = 'z'
(
Constrain simulation to X and Y planes
)

### split\_impulse[int]

Enables and disables split impulse dynamics (default = 1). When enabled, split impulse will allow the dynamics solver to apply positional corrections when deep collision penetrations occur.

### targetname[symbol]

Specifies the name of a [jit.gl.render](https://docs.cycling74.com/reference/jit.gl.render) object to receive update messages from.

### worldbox[int]

Enables and disables the world bounds. (default = 1)

### worldbox\_scale[3 floats]

Changes the size and shape of the world bounds (default = 5, 5, 5).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Causes the world to perform a single step of the physics simulation, test and report collisions, and update all child objects.

### raytest

Perform ray-testing on the rigid bodies using the passed in ray endpoints, and report colliding objects out the right-hand (dumpout) outlet of the object, followed by the relative intersection position and world-space intersection. See raytest\_mode for more info.

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

### reset

Reset the simulation including dynamic and kinematic rigid bodies.

### screenraytest

Perform ray-testing on the rigid bodies using the passed in screen coords. The ray start point is taken by converting the screen coords to world-space, and the end point is generated by casting a ray from the camera position, through the start point to the camera far clip plane. The colliding objects name is reported out the right-hand (dumpout) outlet of the object, followed by the relative intersection position and world-space intersection. See raytest\_mode for more info.

Arguments:

- screen-x
  [float]
- screen-y
  [float]

## See Also

| Name | Description |
| --- | --- |
| [jit.phys.body](https://docs.cycling74.com/reference/jit.phys.body) | A rigid body and collision shape |
| [jit.phys.multiple](https://docs.cycling74.com/reference/jit.phys.multiple) | Uses matrices to simulate multiple rigid bodies |
| [jit.phys.ghost](https://docs.cycling74.com/reference/jit.phys.ghost) | A collision sensor and forcefield |
| [jit.phys.picker](https://docs.cycling74.com/reference/jit.phys.picker) | Constraint picking in a physics world |
| [jit.gl.physdraw](https://docs.cycling74.com/reference/jit.gl.physdraw) | A physics opengl debug drawer |
