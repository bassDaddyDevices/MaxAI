---
type: guide
name: "JavaScript for Max"
summary: "When to use js and jsui, the basic object skeleton, and custom UI drawing"
source: "SKILL.md (Max/M4L development guide)"
---

# JavaScript for Max

## JavaScript for Max

Use JavaScript for complex logic, data processing, or custom UI.

### When to Use JavaScript

**Good Use Cases**:
- Complex conditional logic
- Data structure manipulation (arrays, objects)
- String processing
- File I/O and parsing
- Mathematical sequences
- Custom UI drawing (jsui)

**Bad Use Cases**:
- Audio rate processing (too slow)
- Simple message routing (use Max objects)
- When Max objects exist for the task

### Basic JavaScript Object

```javascript
// In .js file:
inlets = 1;
outlets = 2;

function msg_int(v) {
    outlet(0, v * 2);        // Double the input
    outlet(1, "value is " + v); // Send message
}

function bang() {
    outlet(0, Math.random());
}
```

**In Max**:
```
[js myfile.js]
```

### jsui for Custom UI

```javascript
// In jsui code editor:
var value = 0;

function paint() {
    // Draw custom graphics
    with (sketch) {
        glclearcolor(0, 0, 0, 1);
        moveto(0, value * mgraphics.size[1]);
        lineto(mgraphics.size[0], value * mgraphics.size[1]);
        glcolor(1, 1, 1, 1);
    }
}

function onclick(x, y) {
    value = y / mgraphics.size[1];
    outlet(0, value);
    mgraphics.redraw();
}
```
