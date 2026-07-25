---
type: max
name: "project"
summary: "TEXT_HERE"
signal: false
url: "https://docs.cycling74.com/reference/project/"
package: "Max"
see_also: ["bogus"]
---
# project

TEXT\_HERE

## Arguments

None.

## Attributes

### amxdtype[int]

Sets the type of device that will be created when the project is exported to a Max for Live device.

Possible values:

0 = 'None'

1 = 'Audio'

2 = 'MIDI'

3 = 'Instrument'

4 = 'MIDI Generator'

5 = 'MIDI Transformation'

### autolocalize[int]

If enabled, files added to a Project will always be copied to the Project's folder before being included in the Project.

### autoorganize[int]

If enabled, files in the Project's folder are automatically sorted into appropriate subfolders based on the file's category (e.g. "Patchers", "Code", "Media", etc.).

### browsertext[symbol]:

Sets the annotation name for the project. If set, the project can be searched for in the File Browser using this name.

### devpath[symbol]: .

Allows you to choose a project-specific folder for development of AMXD based projects. When set, all device files for the project will be saved to and referenced from this location. When disabled, the project uses the global folder ~/Documents/Max 8/Max for Live Devices.

### devpathtype[int]: 0

If enabled, allows you to specify the path type for the folder specified in the Development Path setting.

Possible values:

0 = 'disabled'

1 = 'relative to device'

2 = 'absolute'

### hideprojectwindow[int]

If enabled (and only if the Project contains patchers which are marked "Open on Project Load"), the Project window will not be visible after the Project opens.

### includepackages[int]: 0

Include Packages When Freezing

### readonly[int]

If enabled, the exported Max for Live device will be read only.

### showdependencies[int]

If enabled, implicit dependencies are displayed in the Project window.

### sortmode[int]

If set to "Manual", project items can be arranged manually. If set to "Ascending", project items will automatically be arranged from A-Z. If set to "Descending", project items will automatically be arranged from Z-A.

Possible values:

0 = 'Manual'

1 = 'Ascending'

2 = 'Descending'

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [bogus](https://docs.cycling74.com/reference/bogus) |  |
