---
type: guide
name: "RNBO and rnboexpr"
summary: "rnboexpr vs genexpr, RNBO-compatible operator subset, parameter handling via inlets, export workflow and targets"
source: "SKILL.md (Max/M4L development guide)"
---

# RNBO and rnboexpr

## RNBO Expression Syntax (rnboexpr)

`rnboexpr` is similar to `genexpr` but ensures RNBO export compatibility.

### Key Differences from genexpr

| Feature | genexpr | rnboexpr |
|---------|---------|----------|
| Export to RNBO | ❌ May not work | ✅ Guaranteed |
| Operator set | Full Gen~ | RNBO-compatible subset |
| Parameters | `param("name")` | `in2`, `in3` (use inlets) |
| Syntax | Gen~ style | Simplified |
| Use case | Max-only devices | RNBO export targets |

### Basic rnboexpr Syntax

**Same as genexpr for simple math**:
```
[rnboexpr in1 * 0.5 + sin(in2 * 6.28318)]
```

**Multiple outputs**:
```
[rnboexpr out1 = in1 * 2; out2 = in1 * 0.5]
```

### Parameter Handling in RNBO

**Don't use** `param()` function in rnboexpr.

**Instead, use inlets**:
```
[param cutoff @min 0 @max 1]
|
[rnboexpr in1 + (history(in1) - in1) * in2]
//                                      ↑
//                                   parameter via inlet
```

### RNBO-Compatible Operators

**Guaranteed to work**:
```
// Arithmetic
+ - * / %

// Comparison
< > <= >= == !=

// Logical
&& || !

// Math functions
abs() min() max() clip()
floor() ceil() round()
sin() cos() tan()
exp() log() pow() sqrt()
```

**May not work** (check RNBO docs):
```
// Advanced functions (verify compatibility)
atan2() sinh() cosh() tanh()
wrap() fold() scale()
rsqrt() exp2() log2()
```

### When to Use rnboexpr

**Use rnboexpr when**:
- Planning to export to VST/AU via RNBO
- Targeting web audio deployment
- Building for hardware (Raspberry Pi, etc.)
- Need guaranteed cross-platform compatibility

**Use genexpr when**:
- Max for Live device only (no export)
- Need full Gen~ operator set
- More complex expressions possible
- Better parameter integration with `param()`

### RNBO Export Workflow

**1. Development (can use genexpr)**:
```
[genexpr in1 * param("drive") + 0.5]
```

**2. Pre-export (convert to rnboexpr)**:
```
[param drive @min 0 @max 10]
|
[rnboexpr in1 * in2 + 0.5]
```

**3. Validate**:
- Test in RNBO patcher
- Check for unsupported operators
- Verify all parameters accessible

### Common RNBO Patterns

**Waveshaper (RNBO-safe)**:
```
[rnboexpr tanh(in1 * in2)]
// in1 = audio, in2 = drive amount
```

**Crossfade**:
```
[rnboexpr in1 * (1 - in3) + in2 * in3]
```

**Filter (One-Pole)**:
```
[rnboexpr in1 + (history(out1) - in1) * in2]
```

**Soft Clip (Piecewise)**:
```
[rnboexpr in1 < -1 ? -0.66 : (in1 > 1 ? 0.66 : in1 - (in1 * in1 * in1) / 3)]
// Smooth cubic saturation
```

## RNBO Overview

RNBO exports Max/Gen~ patches to C++, plugins, or hardware.

### Key Differences from Gen~

- Uses `[rnbo.in~]` / `[rnbo.out~]` instead of `[in~]` / `[out~]`
- Parameters via `[param]` object
- More flexible I/O configuration
- Supports message I/O alongside audio

### RNBO Export Targets

- **VST/AU Plugins**: Standalone plugins for DAWs
- **Web Audio**: JavaScript web applications
- **C++ Source**: For embedded systems
- **Raspberry Pi**: Hardware devices
- **Max**: Use as regular Max objects

### Basic RNBO Patch

```
[rnbo.in~ 1]
|
[gen~]  // Your DSP code
|
[rnbo.out~ 1]

[param cutoff @min 0 @max 1] // Exposed parameter
```
