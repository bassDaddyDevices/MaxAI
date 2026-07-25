---
type: max
name: "vstscan"
summary: "Audio Plugin Scanner"
signal: false
url: "https://docs.cycling74.com/reference/vstscan/"
package: "Max"
see_also: ["vst~"]
---
# vstscan

Audio Plugin Scanner

## Description

Vstscan provides an interface to audio plugin scanning so that this functionality may be presented in patchers and standalones. You can use vstscan to build menus of plugin names for use in patcher code.

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### cancel

The  cancel  message immediately stops plugin scanning (the currently-scanning plugin will be blacklisted).

### listau

List AudioUnit plug-ins via the [vstscan](https://docs.cycling74.com/reference/vstscan) object's leftmost outlet. Each entry is preceded by the selector  plug\_au . The optional arguments  instrument ,  effect  and  blacklist  can be used alone or in combination to restrict the listing the the desired type of plug-in.

Arguments:

- types
  [list]

### listvst

List VST plug-ins via the [vstscan](https://docs.cycling74.com/reference/vstscan) object's leftmost outlet. Each entry is preceded by the selector  plug\_vst . The optional arguments  instrument ,  effect  and  blacklist  can be used alone or in combination to restrict the listing the the desired type of plug-in.

Arguments:

- types
  [list]

### listvst3

List VST3 plug-ins via the [vstscan](https://docs.cycling74.com/reference/vstscan) object's leftmost outlet. Each entry is preceded by the selector  plug\_vst3 . The optional arguments  instrument ,  effect  and  blacklist  can be used alone or in combination to restrict the listing the the desired type of plug-in.

Arguments:

- types
  [list]

### scan

Re-scan the system plug-in folders for new plug-ins. On MacOS, this is generally (for VST plug-ins) /Library/Audio/Plug-ins/VST/ , while on Windows this is the folder specified in the VSTPluginsPath string value under the registry key HKLM\Software\VST. The scanning process will cause info files to be generated in Max's preferences folder and added to the search path.

As of Max 8, there are two scanning modes. The minimal/fast scanning method quickly gathers information about plug-ins based on files on disk without accessing the plug-ins, while complete/slow scanning performs a full scan of installed plug-ins, accessing the plug-ins to determine compatibility and features. The "slow" scan is only slow once, future runs perform a quick update to determine any changes to the last-scanned state of the operating system.

The  scanmode  argument can be used to specify the type of scanning:

- 0 or  default  (default): perform the default complete/slow scan. If minimal/fast scanning was previously selected, enable complete/slow scanning and perform a full scan. If complete/slow scanning is already enabled, perform a quick update scan.
- 1 or  partial : if any plug-ins were blacklisted by previous scans, reset the blacklist state of those plugins and perform an update scan.
- 2 or  full : completely reset the information gathered by previous scans and perform a full scan.
- 3 or  reset : reset the scanning state and select minimal/fast scanning.

Arguments:

- scanmode
  [list]

### skip

If a plugin cannot be scanned in a reasonable amount of time, it may cause the process to hang for up to 5 minutes (at which point Max will display a dialog, asking whether the plugin should be skipped). The  skip  message can force Max to skip scanning immediately. The currently-scanning plugin will be blacklisted, and scanning will continue.

## See Also

| Name | Description |
| --- | --- |
| [vst~](https://docs.cycling74.com/reference/vst~) | Host VST, VST3 and Audio Unit plug-ins |
