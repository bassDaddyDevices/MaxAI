---
type: max
name: "standalone"
summary: "Configure parameters for standalone applications"
signal: false
url: "https://docs.cycling74.com/reference/standalone/"
package: "Max"
---
# standalone

Configure parameters for standalone applications

## Description

The [standalone](https://docs.cycling74.com/reference/standalone) object lets you set options for creating a standalone application from a Max patch, and is used in conjunction with the  Build Application/Collective...  item found in the  File  menu. You should only have one [standalone](https://docs.cycling74.com/reference/standalone) object in your top-level patch.

## Arguments

None.

## Attributes

### allwindowsactive[int]

Controls the initial setting of All Windows Active when the standalone is launched.

### appicon\_mac[symbol]

Specify an .icns file as the standalone's application icon on MacOS.

### appicon\_win[symbol]

Specify an .ico file as the standalone's application icon on Windows.

### bundleidentifier[symbol]

The unique identifier string provided to the OS for your application bundle, e.g. "com.mycompany.myappname".

### cantclosetoplevelpatchers[int]

When selected, this option renders it impossible to close the top-level patcher in the standalone you build.

### cefsupport[int]

Enables Max's CEF support for the [jweb](https://docs.cycling74.com/reference/jweb) object in the standalone. Disable to reduce standalone size.

### copysupport[int]

When enabled, Max will copy additional resources to the standalone's support folder, including a full set of externals, shaders, Javascript support files, etc. Disable to reduce standalone size. Note that extensions and MIDI/audio externals are always included, even if this option is disabled.

### database[int]

Enables Max's file database support in the standalone.

### gensupport[int]

Enables Max's support for [gen~](https://docs.cycling74.com/reference/gen~), [jit.gen](https://docs.cycling74.com/reference/jit.gen), [jit.pix](https://docs.cycling74.com/reference/jit.pix) and [jit.gl.pix](https://docs.cycling74.com/reference/jit.gl.pix) objects. Disable to reduce standalone size.

### noloadbangdefeating[int]

When a patch is opened, the action of the [loadbang](https://docs.cycling74.com/reference/loadbang) object can be disabled if you hold down the Command and Shift keys (Macintosh) or Control and Shift keys (Windows). When checked, this option will make your standalone always perform loadbang actions regardless of the state of the keyboard.

### overdrive[int]

Controls the initial setting of [Overdrive](https://docs.cycling74.com/userguide/scheduler) when the standalone is launched.

### preffilename[symbol]

Save default settings for a standalone application to a custom Preference folder who's name is specified by a symbol. When the standalone is opened, it will save the standalone's preferences to a folder located at ~/Library/Application Support/[preffilename] (Mac) or C:\Users\[Your username]\AppData\Roaming\[preffilename] (Windows). If this is not set, standalone preferences will default to creating a folder within ~/Library/Application Support/Cycling '74 or C:\Users\[Your username]\AppData\Roaming\Cycling '74 named for the application.

### searchformissingfiles[int]

When checked, Max will use the search path to look for files that are not included in the collective inside your standalone. This includes objects that may not be present in a patch but are called on by Max to support the proper functioning of included objects. For example, the JSUI object requires various jitter objects to work, but does not require you to instantiate them in the patch.

The primary reason to disable searching for missing files is to test your standalone to see if it includes all the necessary files to work if you move it to another machine.

Please be aware that this option must be enabled (as it is by default) in order for users of your standalone application to be able to drag and drop files or otherwise use files not inluded in your application.

### statusvisible[int]

Status window flag

### usesearchpath[int]

When checked, the standalone will create a search path consisting of all subfolders of the folder containing the application. Leaving this option unchecked is primarily of interest to Mac users, who might wish to put their standalone into the Applications folder, but avoid the startup cost of adding all the subfolders of the Applications folder to the search path. On Windows, the application is inside its own folder, so there usually are an insignificant number of subfolders to worry about.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).
