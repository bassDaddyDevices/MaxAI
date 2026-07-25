---
type: guide
name: "Presets and UI/UX"
summary: "pattrstorage and JSON file I/O for preset management, presentation mode, UI object choice and interface best practices"
source: "SKILL.md (Max/M4L development guide)"
---

# Presets and UI/UX

## Preset Management

### Using pattrstorage

**Setup**:
```
[pattrstorage preset-name]
|
[autopattr @autoname 1]  // Auto-connect parameters
```

**Manual Parameter Registration**:
```
[live.dial @varname freq]  // @varname creates the link
|
[pattrstorage]
```

**Store/Recall**:
```
[1(  [2(  [3(  // Preset numbers
|    |    |
[pattrstorage]
|
[live.menu]  // Display presets
```

**Save to File**:
```
[write presets.json(  // Export
[read presets.json(   // Import
|
[pattrstorage]
```

### JSON File I/O

**Write JSON**:
```
[dict mydata]
|
[write path/to/file.json]
```

**Read JSON**:
```
[dict mydata]
|
[read path/to/file.json]
```

Use JavaScript for complex JSON manipulation.

## UI/UX Best Practices

### Presentation Mode

Create clean, professional interfaces:
1. **Patching Mode**: Full development view
2. **Presentation Mode**: User-facing UI only

**Enable for UI Objects**:
```
Inspector → Appearance → Include in Presentation
```

**Positioning**:
- Grid alignment (Cmd+Y / Ctrl+Y for grid snap)
- Consistent spacing
- Logical grouping (group related controls)

### UI Object Recommendations

**For Parameters**:
- `[live.dial]` - Continuous values, automation support
- `[live.menu]` - Discrete choices
- `[live.toggle]` - Binary on/off
- `[live.numbox]` - Numeric entry

**For Display**:
- `[live.meter~]` - Audio level
- `[live.scope~]` - Waveform
- `[live.gain~]` - Level control with meter
- `[comment]` - Labels and instructions

**For Organization**:
- `[panel]` - Visual grouping/backgrounds
- `[comment]` - Section headers
- Consistent colors for signal types

### User Experience

- **Clear Labeling**: Every control needs context
- **Logical Layout**: Left-to-right, top-to-bottom signal flow
- **Visual Hierarchy**: Important controls prominent
- **Safe Defaults**: Device should sound good immediately
- **Tooltips**: Use Inspector → Help → Tooltip for guidance
