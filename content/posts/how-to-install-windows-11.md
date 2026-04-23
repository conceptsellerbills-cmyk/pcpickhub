---
title: "How to Install Windows 11: Complete Step-by-Step Guide"
date: "2025-02-18"
description: "Learn how to install Windows 11 from scratch or upgrade from Windows 10 — complete guide covering requirements, USB creation, installation, and setup."
keyword: "how to install windows 11"
category: "Windows & OS"
---

## Before You Begin: Windows 11 System Requirements

Windows 11 has more stringent system requirements than Windows 10. Before attempting installation, verify your hardware meets Microsoft's minimum specifications:

- **Processor:** 1 GHz or faster with 2 or more cores on a compatible 64-bit processor (see Microsoft's compatibility list)
- **RAM:** 4 GB minimum (8 GB strongly recommended for usable performance)
- **Storage:** 64 GB minimum available storage
- **TPM:** Trusted Platform Module (TPM) version 2.0 — this is the requirement that blocks the most machines
- **Secure Boot:** Capable UEFI firmware with Secure Boot
- **DirectX 12 compatible graphics** with WDDM 2.0 driver
- **Display:** High-definition (720p) display, 9-inch or larger diagonal, 8 bits per channel

### Checking Compatibility

**Method 1: PC Health Check App**
Download Microsoft's PC Health Check application from Microsoft's official website. Run it and click "Check now" to see if your PC meets Windows 11 requirements. It will identify any failing requirements.

**Method 2: Check TPM manually**
Press Windows + R, type "tpm.msc" and press Enter. If TPM is present and enabled, you will see its version. If you see "Compatible TPM cannot be found," check your BIOS settings — TPM is often present but disabled by default in BIOS.

**Enabling TPM in BIOS:**
Restart your PC and enter BIOS setup (typically pressing Del, F2, or F10 during startup — the key is displayed briefly on boot). Look for TPM, Security Device, PTT (Intel), or fTPM (AMD) in the Security settings section. Enable it and save changes.

## Method 1: Upgrade from Windows 10 (Existing PC)

For compatible machines already running Windows 10, upgrading is the simplest path:

**Step 1:** Ensure your Windows 10 installation is up to date. Open Settings > Windows Update and install all available updates.

**Step 2:** Back up your important files. Upgrades are generally safe, but backup is non-negotiable before any major OS change. Use an external drive, cloud storage, or both.

**Step 3:** Check for the Windows 11 upgrade notification. On eligible PCs, Windows Update will offer the Windows 11 upgrade. Go to Settings > Windows Update — if your PC is compatible, you should see "Windows 11 is ready for your PC" or a similar notification.

**Step 4:** If you do not see the upgrade offered, use the Windows 11 Installation Assistant. Download it from Microsoft's official Windows 11 download page. Run it as Administrator, accept the license terms, and follow the prompts. The tool will download Windows 11 and install it while preserving your files and apps.

**Step 5:** The upgrade process takes 30-90 minutes depending on your hardware speed. Your PC will restart several times. Do not power off during this process.

**Step 6:** After installation completes and you reach the Windows 11 desktop, verify your files and applications are intact. Most apps will be preserved, though some older applications may need reinstallation.

## Method 2: Clean Install Using USB (Recommended for New Builds or Fresh Installs)

A clean installation wipes the drive and installs Windows 11 fresh — no accumulated software, settings, or potential conflicts from previous installations. This is the preferred method for new PC builds and for PCs where you want a completely fresh start.

### Creating a Windows 11 Bootable USB Drive

**Requirements:**
- USB drive of at least 8 GB (will be formatted/erased)
- A PC already running Windows 10 or 11 to create the media
- Internet connection for downloading

**Step 1: Download the Media Creation Tool**
Go to Microsoft's official Windows 11 download page and download the "Create Windows 11 Installation Media" tool.

**Step 2: Run the Media Creation Tool**
Run the downloaded tool as Administrator. Accept the license terms. The tool will detect your current language and edition automatically — accept the defaults or customize as needed. Select "USB flash drive" when asked where to install the media.

**Step 3: Select your USB drive**
The tool will list available USB drives. Select your target drive. Double-check it is the correct drive — all data on it will be erased. Click Next.

**Step 4: Wait for download and creation**
The tool downloads Windows 11 (approximately 4-5 GB) and creates the bootable USB. This takes 15-45 minutes depending on your internet speed and USB drive speed.

### Installing from the USB Drive

**Step 1: Enter BIOS/UEFI**
With the USB drive inserted and the target PC powered off, start the PC and immediately press the BIOS key (Del, F2, F10, or F12 — varies by manufacturer). Your BIOS or startup screen typically shows the key briefly.

**Step 2: Configure boot order**
In BIOS, find the boot order settings. Set the USB drive as the first boot device. Ensure Secure Boot is enabled (required for Windows 11). Save settings and exit.

**Step 3: Boot from USB**
The PC should restart and boot from the USB drive, displaying the Windows 11 installation setup screen. If it boots back into Windows instead, recheck your boot order settings.

**Step 4: Begin installation**
Select your language, time, and keyboard preferences. Click "Install now."

**Step 5: Product key**
Enter your Windows 11 product key if you have one. If you are reinstalling on a PC that previously had an activated Windows installation, you can click "I don't have a product key" — Windows will activate automatically after installation using your Microsoft account or the digital license linked to your hardware.

**Step 6: Select edition**
Choose the Windows 11 edition matching your license (Home, Pro, etc.). Click Next.

**Step 7: Accept license terms**
Read and accept Microsoft's license terms. Click Next.

**Step 8: Choose installation type**
Select "Custom: Install Windows only (advanced)" for a clean installation. (Choose "Upgrade" only if doing an in-place upgrade, which should use Method 1.)

**Step 9: Select drive/partition**
You will see a list of drives and partitions. For a clean install on a new drive, select the unallocated space or the entire drive and click Next. For a clean install on an existing drive, delete all existing partitions (your data will be erased — confirm you have backups), select the unallocated space, and click Next.

**Step 10: Installation**
Windows 11 will copy files, expand them, and install features and updates. This takes 15-30 minutes. The PC will restart several times automatically.

## Post-Installation Setup

After installation completes, you will go through the Out-of-Box Experience (OOBE):

1. **Select region and keyboard layout**
2. **Connect to network** — Wi-Fi or Ethernet
3. **Sign in with Microsoft account** — Windows 11 Home requires a Microsoft account for initial setup. You can create one or sign in to an existing account. (A workaround exists to create a local account: during setup, disconnect from the internet before the sign-in screen.)
4. **Privacy settings** — Review each setting and disable data sharing settings you are not comfortable with. Diagnostics, location, and advertising ID are the main settings to consider.
5. **OneDrive setup** — Configure or skip OneDrive as preferred.
6. **Microsoft 365 / Xbox game pass offers** — These are optional upsell screens; click "No thanks" or "Not now" to skip.

## After Installation

**Install drivers:** Open Device Manager (right-click Start > Device Manager) and check for any yellow exclamation mark icons indicating missing drivers. For new builds, visit your motherboard manufacturer's website for chipset, network, and audio drivers. Visit your GPU manufacturer for graphics drivers (NVIDIA or AMD).

**Run Windows Update:** Settings > Windows Update. Run and install all available updates, including optional updates.

**Install applications:** Re-install your essential software. Consider using the free Ninite tool (ninite.com) to install a curated batch of popular applications simultaneously.

**Create a restore point:** After everything is configured correctly, create a System Restore point as a recovery baseline.