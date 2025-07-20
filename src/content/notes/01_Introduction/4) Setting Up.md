---
title: Setting Up
description: Before beginning any penetration testing engagement, it is essential to set up a reliable and efficient working environment.
category: Introduction
pubDate: 2025-07-08
heroImage: ../../../assets/SettingUp.jpg
---
A key factor in maintaining happiness and motivation is the quality of the working environment. Organizing your workspace to minimize fatigue is essential in any role. Below are some examples of how I have customized my own workspace to better suit my needs.

## **Operating System**
Given my strong interest in gaming, Linux customization (ricing), and my career in cybersecurity, I needed a system that delivers excellent gaming performance out of the box, offers extensive customization options, and supports hacking tools seamlessly.

I chose **CachyOS**, an Arch-based distribution designed with gamers in mind. Thanks to its Arch foundation, it provides access to a vast selection of packages for ricing and customization. Additionally, you can easily add the **BlackArch** repository to Pacman, unlocking over 2,000 hacking and security tools with minimal effort.

## **Browser**
When it comes to web browsers, I personally choose **Firefox** for its robust feature set and reliability. One of its standout advantages is the ability to seamlessly sync bookmarks, extensions, settings, and more across multiple devices. This makes it an excellent choice for maintaining a consistent and personalized browsing experience wherever you go.

#### **Extensions**:

| Name                               | Description                                                                                     |
| ---------------------------------- | ----------------------------------------------------------------------------------------------- |
| `ClearURLs`                        | Removes tracking elements from URLs                                                             |
| `CookieManager`                    | Edit cookies related to the current page and all its CORS frames right from the popup interface |
| `DuckDuckGo Privacy Essantials`    | Enhance your privacy while browsing with DuckDuckGo                                             |
| `Firefox Multi-Account Containers` | Multi-Account Containers helps you keep your online identities separate                         |
| `FoxyProxy`                        | Easy to use advanced Proxy Management tool                                                      |
| `Hack-Tools`                       | The all in one Red Team extensions for web pentesters                                           |
| `OWASP Penetration Testing Kit`    | As name implies testing kit                                                                     |
| `Privacy Badger`                   | Automatically blocks invisible trackers                                                         |
| `Proton Pass`                      | Encrypted Password managment                                                                    |
| `Proton VPN`                       | For secure browsing                                                                             |
| `To Google Translate`              | Highlight text and sent it to translator                                                        |
| `uBlock Origin`                    | An efficient blocker. Easy on CPU and memory                                                    |
| `Wappalyzer`                       | Identifies web technologies                                                                     |
| `Wavback Machine`                  | Time travel                                                                                     |

## **Noting, Logging & Reporting**
Note-taking is an essential aspect of penetration testing, as the process generates a large volume of information, results, and ideas that can be difficult to retain without proper documentation.

1. **Information Gathering and Note-Taking**  
    During penetration testing engagements, we inevitably gather large volumes of diverse information. This requires an adaptable approach, as the data we collect may suggest next steps or reveal new avenues for investigation. At the same time, vulnerabilities or misconfigurations can be easily overlooked if not properly documented. It is therefore essential to develop the habit of recording everything that warrants further examination. Tools such as **Obsidian** and **Xmind** are well suited for organizing and managing these notes effectively.

2. **Managing and Analyzing Results**  
    The outputs from scans and penetration testing activities are often extensive and produced in a short period, which can quickly become overwhelming. Initially, filtering out the most critical findings is challenging and requires practice to develop the ability to identify the essential fragments of information. Despite this, it is important to retain all collected data and results to avoid missing anything significant and to ensure information is available for later analysis. Additionally, these results often serve as the foundation for documentation. Tools like **GhostWriter** and **Pwndoc** can help streamline the documentation process and provide a clear overview of the steps taken during an engagement.

3. **Logging for Documentation and Accountability**  
    Comprehensive logging is vital both for thorough documentation and for legal protection. In the event that a third party attacks the client organization during a penetration test and damage occurs, logs can demonstrate that the activity in question was not related to our testing. Utilities such as `date` and `script` are invaluable here: `date` records precise timestamps for each command, while `script` captures all commands and their output to a background file. I have developed a dedicated script for this purpose, which can be found in the **Projects** section under the name **RedLogs**.

4. **Screenshots and Proof of Concept**  
    Screenshots provide clear, moment-in-time evidence of results and are essential for proof-of-concept demonstrations and documentation. However, some processes cannot be fully captured in static images. In these cases, using an application like **Peek** to create animated GIFs offers an effective way to record and present all necessary steps in a concise and accessible format.

## **Virtualization**
Even if we were trained by _Mr. Robot_ himself, we can't expect to be effective in the field without hands-on experience. You might wonder: _If we don’t test in the real world, how do we gain that experience?_ Welcome to the world of **Home Labs**. _(For reference, see the **Home-Lab** folder for a useful tips.)_
  
Home labs play a critical role in cybersecurity training and development. They provide a safe, controlled environment to practice techniques, test tools, and refine workflows without risking unintended consequences on production systems. By building and maintaining a home lab, security professionals can develop practical skills, experiment freely, and deepen their understanding of real-world scenarios.

To get started with a basic home lab setup, you’ll need virtualization software such as **VirtualBox** and/or **Proxmox VE**. Installation guides for these platforms are widely available online for all operating systems.

If you're using **CachyOS** or any other Arch-based distribution, here is a dedicated installation guide for [VirtualBox](VirtualBox.md).

## **Backups and Recovery**
