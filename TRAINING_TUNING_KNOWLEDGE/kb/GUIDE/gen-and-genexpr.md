---
type: guide
name: "Gen~ and genexpr"
summary: "When to use Gen~, codebox basics, full genexpr operator reference, history and param access, DSP patterns, performance costs, limitations, and a cookbook"
source: "SKILL.md (Max/M4L development guide)"
---

# Gen~ and genexpr

## Gen~ Basics

Gen~ compiles to optimized machine code for maximum performance.

### When to Use Gen~

**Use Gen~ for**:
- CPU-intensive DSP (filters, distortion, oscillators)
- Sample-accurate timing requirements
- Per-sample conditional logic
- Custom synthesis algorithms

**Don't Use Gen~ for**:
- Simple signal math (regular `[*~]`, `[+~]` is fine)
- Message rate logic
- File I/O or external communication
- When regular Max is fast enough

### Gen~ Codebox Basics

**Operators** (different from Max objects):
```
// Math
+ - * / %         // Arithmetic
sin() cos() tan() // Trigonometry
abs() clip()      // Utilities
pow() sqrt()      // Power functions

// Logic
< > <= >= == !=   // Comparisons
&& || !           // Boolean logic

// Audio
sample()          // Read from buffer
peek()            // Read at index
poke()            // Write to buffer
```

**Variables**:
```
History h(0);     // Single-sample delay, init to 0
Param freq(440);  // User parameter
```

**Basic Codebox Example** (Simple filter):
```
History h(0);
Param cutoff(0.5);

out1 = in1 + (h - in1) * cutoff;
h = out1;
```

### Gen~ Best Practices

- Use `History` for feedback/memory
- Declare `Param` for user controls
- Minimize branching (`if` statements)
- Use `@index` attribute for polyphony
- Profile with `@optimize 1` vs `@optimize 0`

## Gen~ Expression Syntax (genexpr)

`genexpr` allows inline Gen~ code without opening a codebox. Critical for quick DSP operations.

### Expression Family Overview

**Three expression objects**:
- `[expr~]` - Basic math expressions (Max native, NOT Gen~)
- `[genexpr]` - Gen~ expressions (compiles to machine code)
- `[rnboexpr]` - RNBO expressions (for RNBO export compatibility)

**When to Use Which**:

| Use Case | Object | Why |
|----------|--------|-----|
| Simple math (add, multiply) | Max objects (`[*~]`, `[+~]`) | Fastest for simple ops |
| Complex inline formula | `[genexpr]` | Compiles, no separate file |
| Need Gen~ operators | `[genexpr]` | Access to full Gen~ operator set |
| Multiple expressions | `[gen~]` codebox | Better organization |
| Complex algorithms | `[gen~]` codebox | Multi-line, variables, loops |
| RNBO export target | `[rnboexpr]` | Ensures export compatibility |
| Legacy/compatibility | `[expr~]` | Older patches, simple cases |

### genexpr Basic Syntax

**Single Expression**:
```
[genexpr in1 * 0.5 + sin(in2 * 6.28318)]
//        ↑    ↑      ↑   ↑
//        input multiply function input
```

**Multiple Inputs**:
```
[genexpr in1 * in2 + in3]
//       in1  in2  in3 (left to right)
```

**Multiple Outputs** (use semicolons):
```
[genexpr out1 = in1 * 2; out2 = in1 * 0.5]
//       output1        output2
```

### Operator Reference

**Arithmetic**:
```
+ - * / %           // Basic math
                    // Note: % is modulo, NOT percentage
```

**Comparison** (returns 0 or 1):
```
< > <= >= == !=     // Standard comparisons
```

**Logical** (returns 0 or 1):
```
&& || !             // AND, OR, NOT
```

**Mathematical Functions**:
```
abs(x)              // Absolute value
sign(x)             // Returns -1, 0, or 1
min(a, b)           // Minimum of two values
max(a, b)           // Maximum of two values
clip(x, lo, hi)     // Clamp x between lo and hi
clamp(x, lo, hi)    // Same as clip
wrap(x, lo, hi)     // Wrap x between lo and hi
fold(x, lo, hi)     // Fold x between lo and hi (reflects)
scale(x, inLo, inHi, outLo, outHi)  // Linear scaling
```

**Trigonometry** (radians):
```
sin(x)              // Sine
cos(x)              // Cosine
tan(x)              // Tangent
asin(x)             // Arc sine
acos(x)             // Arc cosine
atan(x)             // Arc tangent
atan2(y, x)         // Two-argument arc tangent
sinh(x)             // Hyperbolic sine
cosh(x)             // Hyperbolic cosine
tanh(x)             // Hyperbolic tangent
```

**Exponential/Logarithmic**:
```
exp(x)              // e^x
exp2(x)             // 2^x
log(x)              // Natural log (ln)
log10(x)            // Base-10 log
log2(x)             // Base-2 log
pow(x, y)           // x^y
sqrt(x)             // Square root
rsqrt(x)            // Reciprocal square root (1/sqrt(x))
```

**Rounding**:
```
floor(x)            // Round down
ceil(x)             // Round up
round(x)            // Round to nearest
trunc(x)            // Truncate (towards zero)
fract(x)            // Fractional part (x - floor(x))
```

**Conditional** (ternary):
```
condition ? value_if_true : value_if_false

// Example:
in1 > 0 ? in1 : 0   // Rectifier (half-wave)
```

### Parameter Access

**Using Param objects**:
```
[param cutoff @min 0 @max 1 @default 0.5]
|
[genexpr in1 + (history(in1) - in1) * param("cutoff")]
```

**Syntax**:
- `param("name")` - Access parameter by name
- Name must match param object's name
- Parameters are message-rate (not per-sample)

### History (Feedback/Memory)

**Single-sample delay**:
```
[genexpr out1 = in1 + history(in1 * 0.5)]
//              ↑     ↑
//              current  previous output
```

**Multiple history taps**:
```
[genexpr out1 = in1 + history(in1, 1) * 0.5 + history(in1, 2) * 0.25]
//                    ↑                        ↑
//                    1 sample ago            2 samples ago
```

**Named history** (for clarity):
```
// In codebox (not genexpr):
History fb(0);
out1 = in1 + fb * 0.5;
fb = out1;
```

**Important**: `history()` in genexpr creates implicit feedback. Can't name it like `History` in codebox.

### Common Patterns

**Soft Clipping (Waveshaping)**:
```
[genexpr tanh(in1 * 2)]
// Smooth saturation
```

**Hard Clipping**:
```
[genexpr clip(in1, -1, 1)]
// Brick-wall limiting
```

**Crossfade (Linear Mix)**:
```
[genexpr in1 * (1 - in3) + in2 * in3]
// in1 = A, in2 = B, in3 = mix (0-1)
```

**Rectifier (Half-Wave)**:
```
[genexpr max(in1, 0)]
// Positive values only
```

**Full-Wave Rectifier**:
```
[genexpr abs(in1)]
// Absolute value
```

**Lowpass Filter (One-Pole)**:
```
[genexpr in1 + (history(out1) - in1) * in2]
// in1 = input, in2 = coefficient (0-1)
// Higher in2 = lower cutoff
```

**Highpass Filter (One-Pole)**:
```
[genexpr in1 - (in1 + (history(out1) - in1) * in2)]
// Invert lowpass response
```

**Sample & Hold**:
```
[genexpr in2 > 0 ? in1 : history(out1)]
// in1 = signal, in2 = trigger (hold when > 0)
```

**Ring Modulation**:
```
[genexpr in1 * in2]
// Classic ring mod (amplitude modulation with no DC offset)
```

**Frequency Shift** (single-sideband):
```
[genexpr in1 * cos(phasor(in2) * 6.28318) - hilbert(in1) * sin(phasor(in2) * 6.28318)]
// in2 = shift amount in Hz
// Requires hilbert transform (use codebox for this)
```

**Slew Limiter** (Rate limiting):
```
[genexpr min(max(in1, history(out1) - in2), history(out1) + in2)]
// in1 = input, in2 = max change per sample
```

### Performance Tips

**Efficient**:
```
[genexpr in1 * 0.5 + 0.5]     // Single expression
```

**Less Efficient**:
```
[genexpr in1]
|
[genexpr out1 * 0.5]
|
[genexpr out1 + 0.5]
```

**Rule**: Combine operations in one `genexpr` when possible. Each object has overhead.

**Expensive Operations** (use sparingly):
- `pow()` - Very expensive
- `exp()`, `log()` - Expensive
- `sin()`, `cos()` - Moderate cost
- `sqrt()` - Moderate cost
- Division (`/`) - Moderate cost

**Cheap Operations**:
- `+`, `-`, `*` - Very fast
- `abs()`, `min()`, `max()` - Fast
- Conditionals (`?:`) - Fast
- `clip()`, `clamp()` - Fast

### Limitations

**Cannot do in genexpr**:
- Multi-line code (use codebox)
- Named variables like `History h(0)` (use history() function)
- Named parameters like `Param freq(440)` (use param() function)
- Loops (for, while)
- Buffer access (peek, poke, sample)
- Complex algorithms

**Must use gen~ codebox for**:
- Algorithms requiring multiple statements
- Buffer operations (wavetable lookup, delay lines)
- Complex state management
- Clear variable naming
- Comments and documentation

### Debugging Expression Syntax

**Common errors**:

```
// WRONG: Missing operator
[genexpr in1 in2]

// RIGHT: Explicit operation
[genexpr in1 * in2]
```

```
// WRONG: Assignment without semicolon for multi-output
[genexpr out1 = in1 * 2 out2 = in1 * 0.5]

// RIGHT: Semicolon separator
[genexpr out1 = in1 * 2; out2 = in1 * 0.5]
```

```
// WRONG: Integer constants ambiguous
[genexpr in1 * 2]

// RIGHT: Float constants explicit
[genexpr in1 * 2.]
```

**Testing strategy**:
1. Test simple expression first
2. Add complexity incrementally
3. Verify output with `[scope~]`
4. Check for numerical issues (NaN, Inf)
5. Profile CPU usage

### Expression Cookbook

**DC Blocker (High-pass)**:
```
[genexpr in1 - history(in1) + 0.995 * history(out1)]
```

**Slew Rate Limiter**:
```
[genexpr clip(in1, history(out1) - 0.01, history(out1) + 0.01)]
// Limits change to ±0.01 per sample
```

**Soft Knee Compressor (Threshold)**:
```
[genexpr abs(in1) > 0.5 ? in1 * 0.5 : in1]
// Simple threshold at 0.5, 2:1 ratio above
```

**Exponential Decay**:
```
[genexpr in1 > 0 ? in1 : history(out1) * 0.999]
// Trigger in1, decays exponentially
```

**Sample-accurate Gate**:
```
[genexpr in1 * (in2 > 0)]
// in2 controls gate (0 = closed, >0 = open)
```

**Cheap Distortion**:
```
[genexpr in1 / (1 + abs(in1 * in2))]
// in2 = drive amount
```
