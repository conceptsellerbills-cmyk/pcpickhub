---
title: "How to Overclock Your CPU in 2025 (Safe Step-by-Step Guide)"
date: "2026-04-22"
description: "Learn how to overclock your CPU safely in 2025 — a step-by-step guide for Intel and AMD processors covering tools, settings, and stability testing."
keyword: "how to overclock cpu"
category: "PC Hardware"
---

CPU overclocking is the practice of running your processor faster than its rated speed to squeeze additional performance without buying new hardware. When done correctly, it's safe and can provide meaningful gains in CPU-bound tasks and games. With over 700,000 monthly searches, "how to overclock CPU" continues to attract enthusiasts and performance seekers. This guide provides a current, safe approach to overclocking both Intel and AMD processors in 2025.

## What Is CPU Overclocking?

Your CPU ships with a rated base clock and boost clock. The manufacturer tests chips and sets conservative default speeds to ensure reliability across varying quality silicon and temperature conditions. Overclocking pushes the clock speed higher, requiring more voltage — which generates more heat.

**Benefits**: 5–20% performance increase in CPU-bound scenarios (high frame rate gaming, video encoding, 3D rendering, compilation).

**Risks**: Reduced component lifespan (minimal with conservative overclocks), system instability if overclock settings are wrong, possible damage if voltage is set too high (rare with modern safeguards).

**Prerequisites for overclocking**:
1. An unlocked CPU (Intel K/KF/KS series; all modern AMD Ryzen CPUs are unlockable)
2. An overclocking-capable motherboard (Intel Z-series; AMD B550, B650, X570, X670)
3. An adequate CPU cooler (overclocking increases heat output)
4. BIOS access and basic familiarity with BIOS settings

## Before You Start

**Check your cooler**: Overclocking significantly increases CPU temperature. A budget cooler rated for 65W TDP cannot handle a 125W base CPU running at higher voltages. For modern Intel CPUs, a 240mm AIO liquid cooler or high-end air cooler (DeepCool AK620, Noctua NH-D15) is recommended. For AMD Ryzen, the stock cooler (if included) may handle modest overclocks; for aggressive overclocking, use an aftermarket cooler.

**Update BIOS**: Always use the latest BIOS version. Manufacturers regularly improve overclocking support, stability profiles, and power management with updates. Check your motherboard manufacturer's website.

**Install monitoring software**:
- **CPU-Z** — reads CPU speed, voltage, and memory details in real-time
- **HWiNFO64** — comprehensive hardware monitoring (temperatures, voltages, power consumption)
- **Prime95** or **CINEBENCH R23** — stress testing tools to verify stability

**Document your baseline**:
Before changing anything, run your stress test and record: default max temperature under load, current clock speeds during all-core load, and baseline CINEBENCH or other benchmark scores.

## Intel CPU Overclocking (K-Series, LGA1700/1851)

Intel overclocking is performed primarily through multiplier adjustments in BIOS.

### Step 1: Enter BIOS
Restart your PC and press Delete or F2 (varies by motherboard brand) during POST to enter BIOS.

### Step 2: Disable Intel Performance Boost features
For a clean overclock, disable:
- Intel Turbo Boost Technology
- Intel Speed Step
- CPU Enhanced Halt (C1E)

These automatic boost features can interfere with manual overclock settings on some boards.

### Step 3: Set CPU multiplier
Navigate to CPU overclocking settings (location varies: Advanced → OC, or a dedicated OC tab). Find "CPU Core Ratio" or "CPU Multiplier."

**Conservative starting point for 13th gen (i5-13600K, i7-13700K, i9-13900K)**:
- All-core multiplier: Start 2–3 bins above stock all-core boost
  - i9-13900K stock all-core: ~55x. Start at 57x (5.7 GHz)
  - i7-13700K stock all-core: ~52x. Start at 54x (5.4 GHz)
  - i5-13600K stock all-core: ~49x. Start at 51x (5.1 GHz)

### Step 4: Set voltage
**CPU Core Voltage (Vcore)**: Set to "Override" or "Fixed" mode. Start conservatively:
- i5-13600K: 1.25V
- i7-13700K: 1.25V
- i9-13900K: 1.30V

**Do not exceed 1.40V for daily use on 13th/14th gen (Intel 7 process). 1.45V is an absolute maximum for short testing.**

### Step 5: Save and test
Save BIOS settings (F10 on most boards). Boot Windows. Run CPU-Z and confirm multiplier and voltage are applied.

Run Prime95 Small FFTs for 20 minutes minimum. Monitor temperatures:
- Under 90°C: proceed
- 90–100°C: improve cooling before increasing further
- Over 100°C: reduce multiplier or voltage

If system crashes or BSOD: reduce multiplier by 1 or increase voltage by 0.025V increments and retest.

### Step 6: Stability testing
If no crash during 20 minutes, run:
- Prime95 Blend mode: 30 minutes (tests RAM too)
- AIDA64 CPU Stress: 1 hour
- Real-world gaming: 2 hours

Only declare stable after extended testing. An unstable overclock that crashes after 45 minutes of gaming is worse than no overclock.

## AMD CPU Overclocking (Ryzen 7000/5000)

AMD Ryzen overclocking can be approached two ways: manual all-core OC (similar to Intel approach) or Precision Boost Override (PBO) — the AMD-recommended method.

### Method A: Precision Boost Override (Recommended for AMD)

PBO is AMD's automatic overclocking system that allows the CPU to exceed stock power limits more aggressively while maintaining per-core optimization.

**In BIOS (Ryzen 7000 on AM5):**
1. Navigate to AMD Overclocking or CBS → CPU settings
2. Enable "Precision Boost Override 2"
3. Set PPT (Package Power Tracking), TDC, and EDC limits. A common starting point:
   - PPT: +10% above stock
   - TDC: +10%
   - EDC: +10%
4. Enable Curve Optimizer (negative values per-core reduce voltage on strong cores, allowing higher boost)

PBO is safer than manual overclocking because it lets AMD's internal boost algorithm do the heavy lifting while you expand the power budget headroom.

### Method B: Manual All-Core Overclock

For Ryzen 5000 (AM4):
- Navigate to CPU Core Frequency settings
- Set all-core frequency: Ryzen 9 5900X/5950X: 4.7–4.8 GHz all-core start
- Set CPU voltage: 1.30V start, do not exceed 1.40V for daily use

For Ryzen 7000 (AM5):
- Manual all-core overclock is generally less effective than PBO due to how the Zen 4 architecture manages power states
- Strongly recommend PBO + Curve Optimizer over manual all-core for Ryzen 7000

## Memory Overclocking: EXPO and XMP

Always enable EXPO (AMD) or XMP (Intel) in BIOS. These pre-configured profiles run RAM at its rated speed (e.g., DDR5-6000 instead of DDR5-4800 default).

This is not technically overclocking — it's running the RAM at the speed it was sold as — but the default JEDEC speeds are significantly slower, and enabling XMP/EXPO is the single easiest performance gain in any PC.

## Tools for Ongoing Monitoring

After overclocking, keep HWiNFO64 running during sessions to monitor:
- CPU Package Temperature (target: under 90°C during gaming; Prime95 all-core load will be higher and is not representative of gaming temps)
- CPU Core Voltage (verify it matches your BIOS setting)
- Clock speeds (verify cores are hitting your target frequency)

## Resetting to Defaults

If your overclock causes instability, simply clear CMOS (jumper on motherboard or battery removal for 30 seconds) to restore default settings. Most modern motherboards also have a CMOS reset button on the rear I/O panel.

## Is CPU Overclocking Worth It in 2025?

For gaming at 1440p or 4K (GPU-limited): minimal benefit. GPU is the bottleneck.

For gaming at 1080p with high-end GPU (CPU-limited): 5–15% frame rate increase in CPU-bound titles is achievable.

For content creation (video encoding, Blender renders): meaningful speed gains from additional clock speed.

For most users, enabling XMP/EXPO is the easiest win. Full manual overclocking rewards enthusiasts willing to spend time tuning and testing.

## Conclusion

CPU overclocking in 2025 is more accessible than ever with automated tools like PBO and better BIOS interfaces. Start conservatively, test thoroughly, and monitor temperatures constantly. A stable 5–10% all-core overclock, combined with XMP/EXPO memory, provides tangible performance improvements for CPU-bound workloads — with minimal risk when done correctly.

---

## Related Articles

- [How to Speed Up Your PC: Proven Tips to Make Your Computer Faster](/how-to-speed-up-your-pc)
- [Logitech Brio 101 Review: Full HD 1080p Webcam for Meetings, Streaming & Nintendo Switch 2 (2025)](/logitech-brio-101-webcam-review)
- [Best Gaming Chair 2025: Top Picks for Comfort and Support](/best-gaming-chair-2025)
- [Best Gaming PC Under $1000 in 2025: Top Builds and Prebuilts](/best-gaming-pc-under-1000-2025)
- [Best SSDs for Gaming in 2025: Fastest Drives for Your PC or PS5](/best-ssd-for-gaming-2025)
