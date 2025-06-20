---
title: NMAP
description: All the usefull notes from Official NMAP docs
category: Offensive
pubDate: 2025-06-19
heroImage: ../../../assets/nmap.png
---
# Introduction
Nmap(Network Mapper) is an open-source and versatile network scanning tool widely used in cybersecurity and IT fields. It helps security professionals, network administrators, and penetration testers to map out networks, discover active hosts, and identify open ports and services.

## Key Features of NMAP
Nmap is a powerful tool with a variety of features designed for network discovery, analysis, and security assessment. Here are its key features:
1) Network Discovery
	- Identifies active hosts within a network
	- Supports scanning individual ports
2) Port Scanning
	- Scans for open, closed, or filtered ports on target systems
	- Supports scanning individual ports, specific port ranges, or all 65535 ports
3) Service Version Detection
	- Determines the  type and version of services running on open ports
	- Helps identify vulnerabilities associated with outdated services
4) Operating System Detection
	- Detects the operating system of target devices, including version details and hardware information
	- Useful for profiling target systems during penetration testing
5) Scripting Engine(NSA)
	- Executes Custom or built-in scripts to perform advanced tasks such as:
		- Vulnerability Detection
		- Malware Identification
		- Service Enumeration
		- Network Policy Compliance Checks
	- Includes pre-built scripts for specific use cases, such as identifying CVEs or SQL injection
6) Aggressive Scanning
	- Combines service version detection, OS detection, and traceroute in a single scan to gather comprehensive data about target
7) Output Customization
	- Generates reports in multiple formats:
		- Normal (-oN), XML (-oX), and grepable (-oG) formats
		- Supports saving outputs for later analysis or integration with other tools
8) Flexible Scanning Techniques
	- Offers a variety of scan modes to suit different needs:
		- SYN Scan (-sS): Stealthy and Efficient
		- TCP Connect Scan (-sT): Establishes a full TCP connection
		- UDP Scan (-sU): Explores open UDP Ports
		- Ping Scan (-sP): Detects live hosts without performing port scans
9) IPv6 Support
	- Fully supports IPv6 scanning to accommodate modern network configurations
10) Speed and Timing Control
	- Adjustable scanning speed to balance efficiency and stealth
		- -T4 for fast scans
		- -T0 for highly stealthy scans
11) Traceroute
	- Maps the path packets take to reach the target
	- Identifies intermediate devices and  networks in the route
12) Vulnerability Assessment
	- Leverage NSE scriptts to detect sppecific vulnerablities and misconfigurations, such as:
		- SQL injection
		- Weak SSL/TLS
		- Open SMB shares
13) Advanced Packet Manipulation
	- Customizes packet data, length, and checksum to evade detection or tailor scans for specific targets
14) Security and Privacy Testing
	- Detect web application vulnerabilities, HTTP headers, and SSL certificate issues
	- Performs brute-forcing and checks for anonymous login possibilities in FTP or SMB protocols

## Command Categories
- **Basic Scans**: Commands for scanning single targets, multiple targets, ranges or subnets.
- **Port Scans**: Includes specific port scans, all-port scans, and common-port scans
- **Service and OS Detection**: Commands for identifying services versions and operationg systems
- **Advanced Scans**: Techniques like TCP connect, SYN, and UDP scans, as  well as aggressive scanning
- **Output Options**: Saving results in various formats (normal, XML, grepable, all formats)
- **Script Usage**: Leveraging Nmap scripts for vulnerability detection,  HTTP enumeration, and more
- **Vulnerability Scanning**: Scripts targeting specific CVEs and weaknesses like SQL injection, XSS, and SSL/TLS issues
- **Miscellaneous Options**: Includes traceroute, adjusting scan speeds, and customized packet settings

## NMAP Commands

| Command                       | Description                                      |
| ----------------------------- | ------------------------------------------------ |
| nmap {target}                 | Basic Scan                                       |
| nmap {target1} {target2}      | Multi Target Scan                                |
| nmap 192.168.1.1-50           | Scan a Range of IPs                              |
| nmap 192.168.1.0/24           | Scan Entire Subnet                               |
| nmap -p 22,80,443 {target}    | Scan Specific Ports                              |
| nmap -p- {target}             | Scan Entire Ports                                |
| nmap -sV {target}             | Detects Service Version                          |
| nmap -O {target}              | Detect Operating System                          |
| nmap -sT {target}             | Performs TCP connect scan                        |
| nmap -sS {target}             | Performs SYN scan                                |
| nmap -sU {target}             | Performs UDP scan                                |
| nmap -A {target}              | Aggressive Scan                                  |
| nmap -Pn {target}             | Treat all hosts as online -- skip host discovery |
| nmap -sL {target}             | List targets without scanning                    |
| nmap -sn {target}             | Perform ping scan if hosts are alive             |
| nmap -oN output.txt           | Normal Output                                    |
| nmap -oX output.xml           | XML Output                                       |
| nmap -oG output.gnmap         | Grepable Output                                  |
| nmap --top-ports {number}     | Scans most common ports                          |
| nmap -6 {target}              | Performs IPv6 scan                               |
| nmap -T4 {target}             | Adjust Scan Speed                                |
| nmap --version-all            | Perform detailed version detection               |
| nmap --traceroute {target}    | Perform traceroute to determine the route        |
| nmap --sript vuln {target}    | Run vulnerability detection scripts              |
| nmap --script {script}        | Run a specific script                            |
| nmap --script=http-* {target} | Run HTTP-related scripts                         |
| nmap -sC {target}             | Run default category scripts                     |
