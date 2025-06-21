---
title: Remote Control
category: Home-Lab
pubDate: 2025-06-20
heroImage: ../../../assets/tailscale.png
---
### 🎯 Why Tailscale?

* Secure remote access (SSH, RDP, etc.) with **no port forwarding**
* Works across NAT/firewalls
* Lets you host services (like web apps, pentesting labs) using **MagicDNS**
* Free for personal/small-team use

---

## ✅ Step-by-Step Plan

### 🔧 1. **Install Tailscale on Club Laptops**

On each ZorinOS club machine:

```bash
curl -fsSL https://tailscale.com/install.sh | sh
sudo tailscale up
```

Log in using the **same account** (e.g., your GitHub or Google login).

🛡️ Optional: Set a device name:

```bash
sudo tailscale up --hostname=club-pc-01
```

---

### 🖥️ 2. **Remote Access for Maintenance**

From your internship machine (even behind firewall):

```bash
ssh user@club-pc-01.tailnet-name.ts.net
```

Use this to:

* Run updates (`sudo apt update && sudo apt upgrade`)
* Share files via `scp` or `rsync`
* Monitor logs and services

---

### 📂 3. **Sync/Share Files Easily**

Use `rsync` over Tailscale or a cloud folder like:

* **Syncthing** (self-hosted peer-to-peer sync)
* Or mount a remote folder:

  ```bash
  sshfs user@club-pc-01.tailnet-name.ts.net:/home/user ~/club-pc
  ```

---

### 🧪 4. **Run/Host VM Services**

If you're using something like VirtualBox, QEMU, or Docker:

* VMs can bind to `0.0.0.0` or a specific Tailscale IP
* Expose web services (e.g., CTF challenges, web apps):

  ```bash
  python3 -m http.server 8080
  ```

Access from your machine at:

```
http://club-pc-01.tailnet-name.ts.net:8080
```

Or use **Tailscale Funnel** to expose a service publicly:

```bash
tailscale funnel enable 8080
```

---

### 🔒 5. **Security Best Practices**

* Use strong user passwords or SSH keys
* Install `ufw` firewall and allow only necessary ports
* Consider a script to auto-update and reboot on a schedule

---

### 💡 Optional Add-ons

* **Cockpit** for web-based admin GUI (`sudo apt install cockpit`)
* **VS Code Remote SSH** for editing files via GUI

---

## 🧭 Summary

| Need                 | Tool                               |
| -------------------- | ---------------------------------- |
| Secure remote access | Tailscale                          |
| GUI access           | RustDesk or Cockpit + Tailscale    |
| File sharing         | SCP, SSHFS, Syncthing              |
| VM service hosting   | Local VMs + Tailscale IP or Funnel |
| Easy management      | Tailscale admin console            |

---
Below is a step-by-step setup for:

1. 📂 **Secure file sharing over Tailscale**
    
2. 🧪 **Binding VirtualBox VMs to Tailscale via Bridged Adapter**
    

---

## ✅ **1. File Sharing over Tailscale (SCP or SSHFS)**

Assume:

- You control `laptop-A` and want to connect from `laptop-B`
    
- Both are connected to the same Tailscale tailnet
    

### 🔧 Step A: Install and Start Tailscale

On **both** machines:

```bash
curl -fsSL https://tailscale.com/install.sh | sh
sudo tailscale up
```

Login with the same Tailscale account to join the tailnet.

Check connection:

```bash
tailscale status
```

You’ll see something like:

```
100.98.76.44   laptop-A  idle
100.100.10.20 laptop-B  active
```

### 📂 Option A: Using SCP (Single File/Folder Transfers)

From `laptop-B` to copy a file **to** `laptop-A`:

```bash
scp myfile.txt user@laptop-A.tailnet-name.ts.net:/home/user/
```

Or copy a folder **from** `laptop-A` to `laptop-B`:

```bash
scp -r user@laptop-A.tailnet-name.ts.net:/home/user/project ./project
```

---

### 📂 Option B: Using SSHFS (Mount remote folder)

On your machine (`laptop-B`):

```bash
sudo apt install sshfs
mkdir ~/remote-laptop-A
sshfs user@laptop-A.tailnet-name.ts.net:/home/user ~/remote-laptop-A
```

To unmount:

```bash
fusermount -u ~/remote-laptop-A
```

---

## ✅ **2. Binding VirtualBox VMs to Tailscale using Bridged Adapter**

You can **bridge your VM to Tailscale** so it gets a Tailscale IP.

### 🔧 Step A: On the Host (ZorinOS Club Laptop)

Install Tailscale:

```bash
curl -fsSL https://tailscale.com/install.sh | sh
sudo tailscale up
```

Check Tailscale interface name (e.g., `tailscale0`):

```bash
ip addr show
```

Let’s say it’s `tailscale0`.

### 🔧 Step B: Configure VirtualBox Network Adapter

In VirtualBox:

1. Select your VM → **Settings**
    
2. Go to **Network** tab
    
3. Enable **Adapter 1**
    
4. Attach to: **Bridged Adapter**
    
5. Choose **tailscale0** from the **Name** dropdown
    

> If `tailscale0` does **not** appear: VirtualBox may not detect virtual interfaces. You can instead bridge to `eth0` or `wlan0` and run Tailscale **inside the VM** (see next).

---

### 🧪 Better Alternative: Run Tailscale **inside the VM**

Install Tailscale inside the VM:

```bash
curl -fsSL https://tailscale.com/install.sh | sh
sudo tailscale up
```

Now the VM gets its own Tailscale IP, and you can:

- SSH into the VM directly
    
- Expose services from the VM to your own system
    

This works better and avoids VirtualBox's limited support for virtual interfaces like `tailscale0`.

---

## ✅ Summary

|Task|Command / Setting|
|---|---|
|Enable Tailscale|`sudo tailscale up`|
|File Transfer via SCP|`scp file user@hostname.tailnet-name.ts.net:/path/`|
|Mount with SSHFS|`sshfs user@host:/path /mount/dir`|
|Bridged VM (basic)|Use `Bridged Adapter → eth0`|
|Bridged VM (preferred)|Install Tailscale **inside VM**|


### 🧩 Option 1: **Shared Tailnet via Invite or Org Domain**

You can allow multiple devices (with different user logins) into the **same Tailnet** using:

#### A. **Personal Tailnet** with Device Approvals

If you're using a personal (free) Tailscale account:

- Devices can be added by **inviting** or **manually approving** them via [https://login.tailscale.com/admin/machines](https://login.tailscale.com/admin/machines)
    
- You log into each device with a **different user**, but you **own the tailnet** as admin
    
- All devices can talk to each other securely
    

**How to do it:**

1. On each club laptop:
    
    ```bash
    sudo tailscale up
    ```
    
    → Login with a different Tailscale account (e.g., create one for `clubpc01@gmail.com`, etc.)
    
2. Go to your admin account → **Machines** tab  
    Approve the new devices to join the tailnet.
    
3. Now they’re visible and connectable via `.tailnet-name.ts.net`.
    

---

#### B. **Use a Custom Domain Tailnet (Team or Club-wide)**

If your university club has a **Google Workspace** or custom email domain (like `@university.edu`):

- Set up Tailscale with that domain
    
- Anyone logging in with `@university.edu` gets automatically added to the tailnet
    

👉 No manual invites or approval needed if using **"Auto Approve" rules**.

---

### 🛠️ How to Check Who’s in the Tailnet

Log in at:  
👉 [https://login.tailscale.com/admin/machines](https://login.tailscale.com/admin/machines)

You’ll see:

- Hostnames
    
- Users
    
- Expiry/connection status
    
- Access control options
    

---

## 🛡️ Extra: Access Control (ACLs)

If you want to **restrict access** (e.g., prevent laptop A from seeing laptop B):

- Use the `ACL` feature in your admin panel:
    
    ```json
    {
      "ACLs": [
        {
          "Action": "accept",
          "Users": ["admin@domain.com"],
          "Ports": ["*:*"]
        },
        {
          "Action": "accept",
          "Users": ["clubpc01@domain.com"],
          "Ports": ["clubpc01:22", "clubvm1:80"]
        }
      ]
    }
    ```
    

---

## ✅ Summary

|Goal|Works with Different Accounts?|How|
|---|---|---|
|Same Tailnet, different users|✅|Invite & approve in dashboard|
|Auto-join via club email domain|✅|Use `@university.edu` login|
|Remote file/VM access|✅|Tailscale IP or DNS works fine|
|Restrict who can see what|✅|Configure ACLs in admin console|

### 🔍 1. **Check if SSH is installed and running**

```bash
sudo systemctl status ssh
```

If it says **inactive**, run:

```bash
sudo apt update
sudo apt install openssh-server
sudo systemctl enable ssh
sudo systemctl start ssh
```

Then verify:

```bash
sudo ss -tlnp | grep :22
```

✅ You should see something like:

```
LISTEN 0 128 *:22   *:* users:(("sshd",pid=...,fd=3))
```

---

### 🔥 2. **Allow SSH in Firewall (if UFW is enabled)**

```bash
sudo ufw allow ssh
sudo ufw reload
```

---

### 🔐 3. **Test from Same Machine (Local Loopback)**

On `acer`, try:

```bash
ssh localhost
```

If this fails, SSH isn't working yet — fix that first before testing remotely.

---

## 🧪 Test Again

Once SSH is confirmed working locally:

Try again from your laptop:

```bash
ssh lab@100.90.47.44
```

Or:

```bash
tailscale ssh lab@acer
```

Both should work.

---

## 🛠 Bonus Tip: Auto-Start Tailscale SSH on Boot

On `acer`, add this to ensure it always comes up ready:

```bash
sudo tailscale up --ssh --accept-routes --advertise-tags=tag:club-pc
```

> You can add `--hostname=acer` too, to make device names stable.
