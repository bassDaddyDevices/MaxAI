---
type: guide
name: "Performance Optimization and Debugging"
summary: "CPU profiling, optimization strategies, memory management, and fixes for no audio, clicks, CPU spikes and preset recall problems"
source: "SKILL.md (Max/M4L development guide)"
---

# Performance Optimization and Debugging

## Performance Optimization

### CPU Efficiency

**Profile First**:
- Use Audio Status Window (Cmd+B / Ctrl+B)
- Monitor CPU % per object
- Identify bottlenecks before optimizing

**Optimization Strategies**:
1. **Reduce Audio Rate Calculations**: Move to control rate when possible
2. **Use poly~**: Parallelize identical processes
3. **Gen~ for Hot Loops**: Compile critical DSP
4. **Minimize Branching**: Avoid conditionals in audio rate
5. **Downsample**: Use `[downsamp~]` / `[upsamp~]` for slower processes
6. **Event Rate**: Use `[edge~]` to trigger from audio only on changes

**Example - Throttle Updates**:
```
[live.dial]
|
[change]      // Only pass when value changes
|
[line~]       // Smooth output
```

### Memory Management

- Clear buffers when not in use
- Limit polyphony voices
- Release `[coll]` and `[dict]` data when done
- Use `@embed 0` for large files

## Debugging Strategies

### Common Issues

**No Audio Output**:
- In M4L: Verify `[plugin~]` and `[plugout~]` are connected
- In standalone Max: Check `[dac~]` is on (Audio Status Window)
- Verify signal path with `[meter~]` or `[scope~]`
- Ensure proper signal rate (`~`) throughout chain
- Check volume/gain stages
- Verify track is armed/playing in Live (M4L context)

**Clicks/Pops**:
- Add `[line~]` for parameter smoothing
- Use `[selector~]` or `[gate~]` with ramps for switching
- Check block size (`@blocksize` in `[gen~]`)

**CPU Spikes**:
- Profile with Audio Status Window
- Look for redundant calculations
- Move logic to message rate if possible
- Consider `[defer]` for expensive operations

**Preset Recall Issues**:
- Verify `@parameter_enable 1` on all controls
- Check `pattrstorage` client list
- Use `@varname` for explicit naming
- Test preset recall in plugin host

### Testing Tools

```
[print]        // Debug messages to console
[meter~]       // Visual audio level
[scope~]       // Waveform display
[spectroscope~] // Frequency display
[message]      // Display current value
```
