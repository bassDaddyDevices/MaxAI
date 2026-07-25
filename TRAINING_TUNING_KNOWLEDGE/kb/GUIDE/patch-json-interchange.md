---
type: guide
name: "Max Patch JSON Interchange"
summary: "The .maxpat JSON format, producing valid copy-paste-ready patch JSON, and programmatic patch analysis"
source: "SKILL.md (Max/M4L development guide)"
---

# Max Patch JSON Interchange

## Max Patch JSON Interchange

Max patches (.maxpat, .maxhelp, .amxd) are stored as JSON, making them ideal for sharing and collaborative analysis.

### Sharing Patches for Analysis

**IMPORTANT**: Use full patch JSON, **NOT snippets**.

**IMPORTANT**: Do not refference objects, **IE OBJ-23**. Use the name of the object

**Correct - Full Patch JSON**:
- File → Save As... → .maxpat
- Share entire file contents
- Contains complete patch structure
- Human-readable object graph
- Easy to analyze, modify, suggest improvements

**Incorrect - Snippets** (avoid):
- Copy/paste compressed snippets from Max
- Base64 encoded, not human-readable
- Difficult to parse or analyze programmatically
- Cannot easily extract specific sections

**How to Share**:
```
1. Save your patch as .maxpat
2. Open in text editor
3. Copy entire JSON contents
4. Share for analysis
```

### Max Patch JSON Structure

**Top-Level Structure**:
```json
{
  "patcher": {
    "fileversion": 1,
    "appversion": {
      "major": 8,
      "minor": 6
    },
    "boxes": [ /* All objects */ ],
    "lines": [ /* All patch cords */ ],
    "parameters": { /* Exposed parameters */ }
  }
}
```

### Providing Valid Patch JSON

**CRITICAL**: When providing Max patch JSON modifications or examples, **ALWAYS include the complete valid structure** with required wrappers.

**Required Top-Level Fields**:
```json
{
  "patcher": { ... },
  "classnamespace": "box",
  "appversion": {
    "major": 8,
    "minor": 6,
    "revision": 2
  }
}
```

**Minimum Valid Patch** (empty but complete):
```json
{
  "patcher": {
    "fileversion": 1,
    "appversion": {
      "major": 8,
      "minor": 6,
      "revision": 2
    },
    "rect": [100.0, 100.0, 640.0, 480.0],
    "boxes": [],
    "lines": []
  },
  "classnamespace": "box",
  "appversion": {
    "major": 8,
    "minor": 6,
    "revision": 2
  }
}
```

**Why This Matters**:
- Without `classnamespace`: Max won't recognize it as valid
- Without `appversion`: Can't determine compatibility
- Without proper nesting: Copy-paste won't work
- User can't directly paste into Max/M4L

**When Providing Patch Modifications**:
1. **Include full valid wrapper** - Don't just show `patcher.boxes` contents
2. **Use current Max version** - `8.6.2` for Live 12, `8.5.x` for Live 11
3. **Test copy-paste** - Ensure structure is complete
4. **Preserve existing data** - Don't remove unrelated sections

**Good Example** (complete and valid):
```json
{
  "patcher": {
    "fileversion": 1,
    "appversion": {
      "major": 8,
      "minor": 6,
      "revision": 2
    },
    "rect": [100.0, 100.0, 640.0, 480.0],
    "boxes": [
      {
        "box": {
          "maxclass": "live.dial",
          "varname": "frequency",
          "parameter_enable": 1,
          "patching_rect": [100, 200, 50, 50],
          "id": "obj-1",
          "numinlets": 1,
          "numoutlets": 2
        }
      }
    ],
    "lines": []
  },
  "classnamespace": "box",
  "appversion": {
    "major": 8,
    "minor": 6,
    "revision": 2
  }
}
```

**Bad Example** (incomplete, won't paste):
```json
{
  "boxes": [
    {
      "box": {
        "maxclass": "live.dial",
        "varname": "frequency"
      }
    }
  ]
}
```

### Partial Modifications vs Full Patches

**When suggesting modifications**:
- Provide the **specific changes** conceptually
- Then provide a **complete valid JSON** showing the full patch with changes
- User should be able to copy entire JSON and paste into .maxpat file

**Example Workflow**:
```
User: "Add a lowpass filter to this patch"

Response:
1. Explain what to add (conceptual)
2. Provide complete valid JSON with:
   - Full patcher wrapper
   - classnamespace
   - appversion
   - All existing boxes + new filter boxes
   - All existing lines + new connections
```

**Box (Object) Structure**:
```json
{
  "box": {
    "maxclass": "live.dial",
    "varname": "frequency",
    "parameter_enable": 1,
    "patching_rect": [100, 200, 50, 50],
    "presentation_rect": [10, 10, 50, 50],
    "id": "obj-42",
    "numinlets": 1,
    "numoutlets": 2
  }
}
```

**Line (Connection) Structure**:
```json
{
  "patchline": {
    "source": ["obj-1", 0],  // [object_id, outlet_index]
    "destination": ["obj-2", 1]  // [object_id, inlet_index]
  }
}
```

### Analyzing Patch Structure

**Finding Objects by Type**:
```javascript
// In analysis context
const liveObjects = patcher.boxes.filter(
  box => box.maxclass && box.maxclass.startsWith('live.')
);

const genObjects = patcher.boxes.filter(
  box => box.maxclass === 'gen~'
);
```

**Mapping Signal Flow**:
```javascript
// Build connection graph
const connections = patcher.lines.map(line => ({
  from: line.patchline.source[0],
  fromOutlet: line.patchline.source[1],
  to: line.patchline.destination[0],
  toInlet: line.patchline.destination[1]
}));

// Find all connections from a specific object
const outputsFrom = (objId) => connections.filter(
  c => c.from === objId
);
```

**Finding Parameters**:
```javascript
// All automatable parameters
const automatable = patcher.boxes.filter(
  box => box.parameter_enable === 1
);

// Parameters missing varnames
const needsVarname = automatable.filter(
  box => !box.varname
);
```

### Common Analysis Tasks

**1. Identify Audio Rate Bottlenecks**
Look for:
- Multiple `[poly~]` objects without voice limiting
- Gen~ objects without `@optimize 1`
- Redundant audio rate calculations
- Missing `[line~]` for parameter smoothing

**2. Find Signal Flow Issues**
Check for:
- Dead ends (objects with no outputs)
- Orphaned objects (no inputs or outputs)
- Circular dependencies (without proper delays)
- Mixed signal/message rate connections

**3. Validate Parameter Exposure**
Verify:
- All UI objects have `@parameter_enable 1`
- Meaningful `@varname` attributes set
- Appropriate `@automation_name` for user clarity
- Consistent `@range` and `@unit_style`

**4. Check Presentation Mode**
Look for:
- Objects with `presentation_rect` defined
- Logical layout (x/y coordinates)
- Overlapping UI elements
- Missing labels or comments

**5. Detect Performance Issues**
Search for:
- `[snapshot~]` with very fast rates (< 10ms)
- Audio rate objects that could be message rate
- Large buffer sizes without `@embed 0`
- Excessive use of `[delay]` vs `[pipe]`

### Collaborative Workflow

**When Sharing Patches**:
1. Save as .maxpat (not .amxd if seeking general advice)
2. Include comments explaining intent
3. Note specific issues or questions
4. Mention performance constraints
5. Share full JSON, not snippets

**When Receiving Analysis**:
1. Review suggested object changes
2. Check proposed connection modifications
3. Validate parameter recommendations
4. Test suggested optimizations incrementally
5. Profile before/after CPU usage

**Modifying Patches Programmatically**:
```javascript
// Example: Add @varname to all live.dial objects
patcher.boxes.forEach(box => {
  if (box.maxclass === 'live.dial' && !box.varname) {
    // Suggest varname based on automation_name
    box.varname = box.automation_name
      .toLowerCase()
      .replace(/\s+/g, '_');
  }
});
```

### Extract Specific Sections

**Find a Subpatcher**:
```javascript
const subpatchers = patcher.boxes.filter(
  box => box.maxclass === 'newobj' && 
         box.text && box.text.startsWith('p ')
);

// Subpatcher contents are in box.patcher
const subpatchContents = subpatchers[0].patcher;
```

**Isolate Gen~ Code**:
```javascript
const genPatches = patcher.boxes.filter(
  box => box.maxclass === 'gen~'
);

// Gen~ code is in box.gen_codebox or box.patcher
const genCode = genPatches[0].gen_codebox;
```

**Export pattrstorage Data**:
```javascript
const presetStorage = patcher.boxes.find(
  box => box.maxclass === 'pattrstorage'
);

// Stored presets are in box.saved_object_attributes.data
const presets = presetStorage.saved_object_attributes.data;
```

### Best Practices for JSON Patches

**DO**:
- Share complete .maxpat files for analysis
- Include context about the patch's purpose
- Use descriptive varnames and object names
- Add comments for complex sections
- Keep presentation mode organized
- **Always provide complete, valid JSON with classnamespace and appversion**
- **Ensure JSON is copy-paste ready into .maxpat files**

**DON'T**:
- Use compressed snippets for collaboration
- Manually edit JSON (use Max interface)
- Remove comments before sharing
- Share .amxd files if .maxpat is more appropriate
- Nest too deeply without documentation
- **Provide incomplete JSON structures missing required wrappers**
- **Show only partial patcher contents without full document structure**

### JSON Validity Checklist

Before providing Max patch JSON, verify:
- [ ] Includes `"classnamespace": "box"` at root level
- [ ] Includes `"appversion"` object at root level
- [ ] Includes complete `"patcher"` object
- [ ] All boxes have proper `"box"` wrapper
- [ ] Can be copied directly into a .maxpat file
- [ ] Max version specified (8.6.2 for Live 12, 8.5.x for Live 11)

### Troubleshooting JSON Issues

**Invalid JSON**:
- Max sometimes creates malformed JSON on crash
- Validate with `python -m json.tool patch.maxpat`
- Common issues: trailing commas, unescaped strings

**Missing Objects After Load**:
- Referenced external objects not installed
- Check `maxclass` fields for unknown types
- Look for `[newobj]` with unresolved text

**Performance Degradation**:
- Large patch files (> 1MB) load slowly
- Consider breaking into subpatchers
- Use `[poly~]` for repeated structures
