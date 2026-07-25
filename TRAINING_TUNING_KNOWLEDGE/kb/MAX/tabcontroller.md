---
type: max
name: "tabcontroller"
summary: "Define and manage patcher tabs"
signal: false
url: "https://docs.cycling74.com/reference/tabcontroller/"
package: "Max"
see_also: ["dict", "loadbang"]
---
# tabcontroller

Define and manage patcher tabs

## Description

The [tabcontroller](https://docs.cycling74.com/reference/tabcontroller) object is placed in a top-level patcher. When provided with a dictionary of tab names and patcher references, it will create tabs in that patcher for each dictionary entry. References in the dictionary can refer to embedded subpatchers or patcher files. When patcher files are used, they will not be loaded until you click on the tab. Moreoever, tabs can be shown in a vertically scrolling list at the left side of the patcher window. These features permit a patcher using [tabcontroller](https://docs.cycling74.com/reference/tabcontroller) to show an arbitrarily large list of patchers, making it ideal for presenting a set of related tutorials or examples. Note that RNBO or Gen subpatchers in tabs are loaded immediately when loading their parent patchers.

## Arguments

None.

## Attributes

### disableinternals[int]

When disableinternals is enabled, clicking on tabs specified via  patcher  in [tabcontroller](https://docs.cycling74.com/reference/tabcontroller) 's dictionary will do nothing. This permits using embedded subpatcher tabs as category headers for filename-based patcher tabs. disableinternals is disabled by default.

### exclusivemidi[int]

When exclusivemidi is enabled, MIDI input and output will only be active in the patcher currently showing. exclusivemidi is disabled by default.

### folder[symbol]

Names a folder that will be used to add patchers as tabs, similar to the action of the  addfolder  message.

### orientation[int]

Sets the orientation of the tabs in the main patcher window. To show a large scrolling list of tabs, use the left (1) orientation, since the horizontal space of a patcher window is finite and tabs at the top of a window do not scroll. Note that [tabcontroller](https://docs.cycling74.com/reference/tabcontroller) is currently the only way to configure tabs to appear on the left side of a window; this cannot be accomplished via a patcher attribute.

Possible values:

0 = 'top'
(
Tabs at Top
)
Tabs will be shown at the top of the patcher window as with help files.

1 = 'left'
(
Tabs at Left
)
Tabs will be shown at the left side of a patcher window.

### recursive[int]

When using the folder attribute, when the recursive attribute is enabled, [tabcontroller](https://docs.cycling74.com/reference/tabcontroller) adds tabs for patchers found in the subfolders of the specified folder.

### showroot[int]

The showroot attribute, when enabled, shows a tab for the top-level ("root") patcher containing the [tabcontroller](https://docs.cycling74.com/reference/tabcontroller) object. Enabling showroot is helpful while developing using [tabcontroller](https://docs.cycling74.com/reference/tabcontroller) but you'll probably want to turn it off before sharing your work with others. Note that showroot can only be set as an attribute argument to [tabcontroller](https://docs.cycling74.com/reference/tabcontroller)-- it cannot be changed via a message or the inspector. Therefore if you want to turn off showroot you need to do so by retyping the [tabcontroller](https://docs.cycling74.com/reference/tabcontroller) object.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### add

The  add  message adds a tab to the end of the current set of tabs. The first argument is the tab name, which, if there are no additional arguments, is also the patcher filename to load into the tab. The second optional argument is the patcher filename. Following the second argument, any additional arguments are passed to the patcher when it is loaded, replacing #1 - #9 or for use with the [patcherargs](https://docs.cycling74.com/reference/patcherargs) object.

Arguments:

- tabname
  [symbol]
- patchername
  [symbol]
- arguments
  [list]

### addfolder

The  addfolder  message will add a tab for each patcher file in the named folder passed as an argument. Each patcher's tab name will be its filename.

Arguments:

- foldername
  [symbol]

### clear

The  clear  message will clear all current tabs managed by [tabcontroller](https://docs.cycling74.com/reference/tabcontroller).

### dictionary

When [tabcontroller](https://docs.cycling74.com/reference/tabcontroller) receives a dictionary, it clears any existing tabs and creates a new tab for each entry in the dictionary. To create tabs when loading the patcher containing a [tabcontroller](https://docs.cycling74.com/reference/tabcontroller), store the dictionary in a [dict](https://docs.cycling74.com/reference/dict) object with embed set to 1, then connect the [dict](https://docs.cycling74.com/reference/dict) to [tabcontroller](https://docs.cycling74.com/reference/tabcontroller) and a [loadbang](https://docs.cycling74.com/reference/loadbang) to the [dict](https://docs.cycling74.com/reference/dict).

The format of the dictionary expected by [tabcontroller](https://docs.cycling74.com/reference/tabcontroller) is a single array of dictionaries with the key  tabs . Each entry contains the key  tab  with the tab name, and either a  patcher  naming an embedded subpatcher or  filename  with a patcher filename. For a vertical list of tabs, you can specify an option tab indent level with  indent ; the default (leftmost) indent is 0. Example:

"tabs": [

"tab" : "one",

"patcher" : "xyz"

},

"tab" : "two",

"filename" : "myfile.maxpat",

"indent" : 1,

"arguments" : [2, 3, 4]

Arguments:

- dictionaryname
  [symbol]

### remove

The  remove  message removes a named tab. Note that only file-based tabs can be removed. Embedded subpatcher tabs or tabs associated with patchers containing subpatcher tabs cannot be removed.

Arguments:

- tabname
  [symbol]

### setactive

The  setactive  message brings the patcher associated with the specified tab name to the front of the main patcher window, loading it if necessary, and highlighting the tab's name, scrolling the list of tabs to show the name if necessary.

Arguments:

- tabname
  [symbol]

### setactivefilename

The  setactivefilename  message brings the patcher with the specified filename to the front of the main patcher window, loading it if necessary, and highlighting its tab's name, scrolling the list of tabs to show the tab name if necessary.

Arguments:

- filename
  [symbol]

## See Also

| Name | Description |
| --- | --- |
| [dict](https://docs.cycling74.com/reference/dict) | Create and access dictionaries |
| [loadbang](https://docs.cycling74.com/reference/loadbang) | Send a bang when a patcher is loaded |
