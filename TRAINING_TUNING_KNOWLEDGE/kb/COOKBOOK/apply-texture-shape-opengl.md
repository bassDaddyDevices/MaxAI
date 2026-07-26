---
type: cookbook
name: "Apply a texture to a shape in OpenGL"
summary: "The OpenGL object jit.gl.gridshape allows you to create and render standard 3D geometrical shapes (cube, sphere, cone, etc.)."
chapter: "Jitter"
keywords: ["jit.gl.gridshape", "jit.gl.handle", "texture", "OpenGL"]
objects: ["b", "counter", "jit.gl.gridshape", "jit.gl.handle", "jit.gl.render", "jit.matrix", "jit.window", "loadbang", "metro", "pak", "prepend", "route", "select", "unpack"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/texturedsphere.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/texturedsphere2.png"
---

# Apply a texture to a shape in OpenGL

The OpenGL object **jit.gl.gridshape** allows you to create and render standard 3D geometrical shapes (cube, sphere, cone, etc.). It creates those shapes using a number of polygons attached together on a grid, thus its name. To make those objects look a bit more interesting—either more realistic or more unusual—you can apply a texture to the surface of the object. The visual content of the texture comes from a 2D image matrix (e.g., **jit.matrix**) which then gets wrapped around the object's surface. For example, you could use an image of a granite countertop and apply it to sphere, giving the impression of a granite sphere.

This patch shows one way (perhaps the simplest and most direct way) to do that. You send to **jit.gl.gridshape** a message consisting of the word *texture*, followed by a name for the texture, followed by a *jit\_matrix* message for the image you want to use. This sets the *texture* attribute **jit.gl.gridshape** to that name, and tells **jit.gl.gridshape** that that name refers to that specific image matrix. (Another way is to use the **jit.gl.texture** object to create a named texture, then just set the *texture* attribute **jit.gl.gridshape** to that name.)

When the patch is opened, we import an image of a sunset into the **jit.matrix** object, using the *importmovie* message. When you do that, the object tries to find and open the file. (You should identify the file by a complete path name, or the file should be in the Max file search path.) As soon as it has done that, the object then sends an *importmovie* message out its right outlet with two arguments: the name of the file and a "success flag", 1 for success or 0 for failure. So our patch uses the **route** object to look for that message, disregards the file name, and looks at the success flag; if the success flag is 1, it sends a *bang*. That *bang* first triggers the **jit.matrix** to send out its matrix address, *jit\_matrix mypicture*. To that, we prepend the words *texture cdtexture*, so that the full message to the **jit.gl.gridshape** object will be *texture cdtexture jit\_matrix mypicture*. That sets the object's *texture* attribute to the name *cdtexture*, which points to the matrix *mypicture*. We also send a *usetexture cdtexture* message to the **jit.gl.render** object, so that it, too, knows about this texture. Now each time that the shape is rendered, it will use that texture.

We included the ability to import a different image as the texture, to resize the sphere, and to move the camera. We also included a **jit.handle** object, which makes it easy to rotate the sphere. In this case we've linked the rotation to the frame rate of rendering, so that each time a new frame is displayed, the rotation around the x axis is incremented one degree by the **counter**.

## Objects used

`b` ×2, `pak` ×2, `select`, `unpack`, `route`, `loadbang`, `counter`, `jit.gl.handle`, `metro`, `prepend`, `jit.gl.gridshape`, `jit.matrix`, `jit.gl.render`, `jit.window`

*Patch contains 28 boxes, 30 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/texturedsphere.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/texturedsphere2.png`
