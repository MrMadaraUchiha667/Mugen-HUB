# MUGEN-HUB

### The Ultimate Community Platform for M.U.G.E.N

*A modern open-source platform for discovering, sharing and preserving M.U.G.E.N content.*

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![Version](https://img.shields.io/badge/version-v0.1-blue.svg)]()
[![PHP](https://img.shields.io/badge/PHP-8.0+-777BB4?logo=php)]()
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript&logoColor=black)]()
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)]()
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)]()
[![License](https://img.shields.io/badge/license-MIT-green.svg)]()

</div>

---

# 📖 About

MUGEN-HUB is an open-source platform created to modernize how the M.U.G.E.N community discovers, shares and manages content.

Instead of functioning as a simple download repository, MUGEN-HUB provides an ecosystem where players and creators can interact through user profiles, achievements, favorites, rankings and community features.

Inspired by platforms like:

- 🎮 Nexus Mods
- 🍌 GameBanana
- 🌐 ModDB

But focused **100% on M.U.G.E.N.**

---

# ✨ Main Features

## 🌎 Public Website

- Character Catalog
- Stages
- Screenpacks
- Dynamic Search
- Download System
- Responsive Layout
- Dark Theme
- Favorites
- Dynamic Pages

---

## 👤 User System

- User Registration
- Secure Login
- User Profiles
- Avatar Upload
- Favorite Characters
- Download History
- Achievements
- XP System
- User Levels
- Badges

---

## 👑 Administration Panel

- Administrator Login
- Dashboard
- Upload Characters
- Upload Stages
- Upload Screenpacks
- Upload Portraits
- Dynamic Content Management
- JSON Database
- Ready for MySQL

---

## 🏆 Gamification

- Automatic Achievements
- XP Rewards
- User Levels
- Community Badges
- Future Ranking System
- Creator Reputation

---

# 🖼️ Screenshots

## Homepage

<img width="1600" height="900" alt="image" src="https://github.com/user-attachments/assets/5f45003a-76b7-4a41-8e31-12420101cdf4" />

---

## Characters

<img width="1600" height="900" alt="image" src="https://github.com/user-attachments/assets/3ae8c824-f3af-48fc-a7ff-41adec0acaf9" />

---

## Character Details

<img width="1600" height="900" alt="image" src="https://github.com/user-attachments/assets/bc19ea54-92c0-4f4c-bfac-3eab56b9d98d" />

---

## Admin Dashboard

<img width="1600" height="900" alt="image" src="https://github.com/user-attachments/assets/21ee8656-2b4a-4ccb-b9d4-d375f715a5c1" />

---

## User Profile

<img width="1600" height="900" alt="image" src="https://github.com/user-attachments/assets/013a7d39-2b2e-4de2-be02-958f5adb3703" />

---

# 🚀 Why MUGEN-HUB?

For over two decades, the M.U.G.E.N community has relied on scattered websites and outdated archives.

MUGEN-HUB aims to become the next generation platform by providing:

✅ Modern UI

✅ Community Features

✅ Creator Recognition

✅ Dynamic Uploads

✅ Automatic Achievements

✅ Open Source

✅ Mobile Friendly

---

# 🎯 Vision

Our long-term vision is to become the largest platform dedicated exclusively to M.U.G.E.N.

A place where creators can publish their work, players can discover new content, and the community can grow together.

---

# 🏗️ Architecture

```
                    ADMIN PANEL
                         │
                         ▼
                 Upload Character
                         │
                         ▼
                  upload.php
                         │
                         ▼
              uploads/characters/
                         │
                         ▼
                add-content.php
                         │
                         ▼
                  database.json
                         │
                         ▼
                get-content.php
                         │
                         ▼
                  MUGEN-HUB SITE
                         │
                         ▼
              Characters Appearing
                 Automatically
```

---

# 🏆 Gamification Flow

```
User Action
      │
      ▼
Achievement Check
      │
      ▼
Achievement Unlocked
      │
      ▼
XP Granted
      │
      ▼
Level Up
      │
      ▼
Badge Earned
```

---

# 📁 Project Structure

```
MUGEN-HUB
│
├── admin/
│   ├── css/
│   ├── js/
│   ├── login.html
│   ├── dashboard.html
│   └── add-content.html
│
├── api/
│   ├── database.json
│   ├── users.json
│   ├── achievements.json
│   ├── login.php
│   ├── register.php
│   ├── profile.php
│   ├── update-profile.php
│   ├── upload-avatar.php
│   ├── save-favorite.php
│   ├── comments.php
│   ├── check-achievements.php
│   └── add-xp.php
│
├── uploads/
│   ├── avatars/
│   ├── characters/
│   ├── stages/
│   └── screenpacks/
│
├── user/
│   ├── login.html
│   ├── register.html
│   ├── profile.html
│   ├── edit-profile.html
│   └── achievements.html
│
├── css/
├── js/
├── assets/
├── docs/
│
├── index.html
├── personagens.html
├── personagem.html
├── stages.html
└── screenpacks.html
```

---

# ⚙️ Technologies

| Technology | Description |
|------------|-------------|
| HTML5 | Website Structure |
| CSS3 | Responsive Styling |
| JavaScript ES6 | Frontend Logic |
| PHP 8+ | Backend API |
| JSON | Database |
| Git | Version Control |
| GitHub | Repository Hosting |

---

# 🌟 Current Features

| Feature | Status |
|---------|--------|
| Public Website | ✅ |
| Dynamic Catalog | ✅ |
| Admin Panel | ✅ |
| Backend API | ✅ |
| Upload System | ✅ |
| User Accounts | ✅ |
| Login | ✅ |
| Profiles | ✅ |
| Avatars | ✅ |
| Favorites | ✅ |
| Achievements | ✅ |
| XP System | ✅ |
| Levels | ✅ |
| Badges | ✅ |
| Rankings | 🚧 |
| Notifications | 🚧 |
| Messaging | 📅 |
| MySQL | 📅 |

---

# 📈 Development Progress

```
██████████████████░░░░░░░░░░░░ 65%

Frontend          ██████████ 100%
Backend           ████████░░ 80%
Authentication    ██████████ 100%
Gamification      ███████░░░ 70%
Community         ██████░░░░ 60%
REST API          ██░░░░░░░░ 20%
MySQL             ░░░░░░░░░░ 0%
```

---

# 🚀 Getting Started

## Requirements

Before running MUGEN-HUB, make sure your environment meets the following requirements:

| Software        | Version               |
| --------------- | --------------------- |
| PHP             | 8.0 or higher         |
| Apache or Nginx | Latest                |
| Git             | Latest                |
| Modern Browser  | Chrome, Firefox, Edge |

> **Note:** The current version uses a JSON database. Future versions will support MySQL.

---

# 📥 Installation

## Clone the Repository

```bash
git clone https://github.com/MrMadaraUchiha667/Mugen-HUB.git
```

Enter the project folder:

```bash
cd Mugen-HUB
```

---

## XAMPP Installation

Move the project into your `htdocs` directory.

Example:

```text
C:\xampp\htdocs\Mugen-HUB
```

Start:

* Apache
* PHP

Then open:

```
http://localhost/Mugen-HUB
```

---

## Linux (Apache)

Clone the project inside your web directory:

```bash
sudo git clone https://github.com/MrMadaraUchiha667/Mugen-HUB.git /var/www/html/Mugen-HUB
```

Set permissions:

```bash
sudo chmod -R 775 uploads
sudo chmod -R 775 api
```

Restart Apache:

```bash
sudo systemctl restart apache2
```

---

## Nginx

Configure your server root:

```text
root /var/www/Mugen-HUB;
index index.html index.php;
```

Enable PHP-FPM and restart Nginx.

---

# 📂 Upload Directories

The following folders must be writable by PHP.

```text
uploads/

├── avatars/
├── characters/
├── screenpacks/
└── stages/
```

---

# 🗄 Database Structure

Current storage uses JSON files.

```text
api/

database.json
users.json
achievements.json
```

Advantages:

* Easy deployment
* No database server required
* Lightweight
* Great for development
* Simple backup

Future versions will support:

* MySQL
* MariaDB
* PostgreSQL

---

# 🌐 Website Architecture

```text
Browser
   │
   ▼
Frontend (HTML/CSS/JS)
   │
   ▼
PHP API
   │
   ▼
JSON Database
   │
   ▼
Uploads
```

---

# 📡 API Overview

Current endpoints:

```text
api/

login.php
register.php
profile.php
update-profile.php
upload-avatar.php

save-favorite.php

comments.php

check-achievements.php

add-xp.php

get-content.php

upload.php

add-content.php
```

---

# 🔐 Authentication

## Register

Creates a new account.

Endpoint:

```
POST api/register.php
```

Fields:

| Name     | Type   |
| -------- | ------ |
| username | string |
| email    | string |
| password | string |

---

## Login

Endpoint

```
POST api/login.php
```

Response

```json
{
  "success": true,
  "username": "MrMadara"
}
```

---

# 👤 Profile

Endpoint

```
GET api/profile.php
```

Returns

* Username
* Avatar
* XP
* Level
* Favorites
* Achievements

---

# ✏ Update Profile

Endpoint

```
POST api/update-profile.php
```

Allows users to edit:

* Display name
* Biography
* Social links
* Avatar

---

# 🖼 Avatar Upload

Endpoint

```
POST api/upload-avatar.php
```

Uploads are stored in:

```text
uploads/avatars/
```

---

# ❤️ Favorites

Endpoint

```
POST api/save-favorite.php
```

Allows users to save:

* Characters
* Stages
* Screenpacks

Future versions will include favorite collections.

---

# 💬 Comments

Endpoint

```
POST api/comments.php
```

Features:

* Create comments
* Delete own comments
* Creator replies (planned)
* Like system (planned)

---

# 🏆 Achievement System

Endpoint

```
POST api/check-achievements.php
```

Automatically verifies:

* Downloads
* Favorites
* Uploads
* Community activity

When requirements are met:

```
Achievement

↓

XP

↓

Level

↓

Badge
```

---

# ⭐ XP System

Endpoint

```
POST api/add-xp.php
```

Current progression:

Example

| Action             |  XP |
| ------------------ | --: |
| Download Character |  10 |
| Upload Content     | 100 |
| Daily Login        |   5 |
| First Favorite     |  15 |

Values are configurable.

---

# 📦 Content Upload Flow

```text
Admin Login

↓

Dashboard

↓

Upload Character

↓

upload.php

↓

uploads/characters/

↓

add-content.php

↓

database.json

↓

Public Website
```

No manual editing is required.

The catalog updates dynamically.

---

# 🔎 Dynamic Search

The search engine supports:

* Characters
* Authors
* Games
* Series
* Screenpacks
* Stages

Results are displayed instantly without page reloads.

---

# 🎮 Supported Content Types

Current:

* Characters (.zip)
* Stages
* Screenpacks

Future:

* Lifebars
* Portrait Packs
* Music Packs
* Full Games
* Motifs
* Add-ons
* Tools

---

# 🔒 Security

Current protections include:

* Input validation
* JSON validation
* Upload verification
* Directory isolation

Planned improvements:

* CSRF protection
* Rate limiting
* Session tokens
* Password hashing improvements
* reCAPTCHA
* Email verification
* Two-factor authentication (2FA)

---

# ⚡ Performance

Designed with simplicity in mind.

Features:

* Lightweight frontend
* No heavy frameworks
* Fast JSON reads
* Modular JavaScript
* Responsive interface

Future improvements:

* Caching
* Lazy loading
* CDN support
* Image optimization
* API pagination

---

# 🔄 Migration to MySQL

The backend was designed to simplify migration.

Current:

```
PHP
↓

JSON
```

Future:

```
PHP

↓

PDO

↓

MySQL
```

Minimal frontend changes will be required thanks to the API abstraction layer.

# 🗺️ Roadmap

The following roadmap outlines the long-term vision for MUGEN-HUB.

## ✅ Phase 1 — Public Platform

* [x] Homepage
* [x] Characters Catalog
* [x] Character Details
* [x] Stages
* [x] Screenpacks
* [x] Search Engine
* [x] Responsive Layout
* [x] Theme System

---

## ✅ Phase 2 — Administration

* [x] Admin Login
* [x] Dashboard
* [x] Upload Characters
* [x] Upload Stages
* [x] Upload Screenpacks
* [x] Dynamic Content
* [x] JSON Database

---

## ✅ Phase 3 — Community

* [x] User Registration
* [x] Login
* [x] User Profiles
* [x] Avatar Upload
* [x] Favorites
* [x] Comments (Foundation)

---

## ✅ Phase 4 — Gamification

* [x] Achievements
* [x] XP System
* [x] Levels
* [x] Badges

---

## 🚧 Phase 5 — Community Expansion

* [ ] Global Rankings
* [ ] Reputation System
* [ ] Creator Pages
* [ ] User Following
* [ ] Notifications
* [ ] Direct Messages
* [ ] Reviews
* [ ] Reactions
* [ ] Collections
* [ ] Playlists

---

## 🚧 Phase 6 — Content Expansion

* [ ] Lifebars
* [ ] Motifs
* [ ] Portrait Packs
* [ ] Music Packs
* [ ] Full Games
* [ ] AI Patches
* [ ] WinMUGEN Support
* [ ] IKEMEN GO Support

---

## 🚧 Phase 7 — Infrastructure

* [ ] MySQL Support
* [ ] REST API
* [ ] API Authentication
* [ ] Docker
* [ ] CDN Integration
* [ ] Redis Cache
* [ ] Image Optimization

---

# 🤝 Contributing

Contributions are welcome and appreciated.

## Ways to contribute

* Report bugs
* Suggest new features
* Improve documentation
* Optimize performance
* Submit Pull Requests
* Improve accessibility
* Translate the project

---

## Development Workflow

1. Fork the repository.

2. Create a feature branch.

```bash
git checkout -b feature/amazing-feature
```

3. Commit your changes.

```bash
git commit -m "feat: add amazing feature"
```

4. Push the branch.

```bash
git push origin feature/amazing-feature
```

5. Open a Pull Request.

---

# 📋 Commit Convention

MUGEN-HUB follows the Conventional Commits specification.

Examples:

```text
feat: add achievement system

fix: correct login validation

docs: update README

style: improve responsive layout

refactor: optimize API responses

perf: improve search performance

test: add authentication tests

chore: update dependencies
```

---

# 📐 Coding Standards

## HTML

* Semantic elements
* Accessibility-first
* Valid HTML5

---

## CSS

* Modular files
* Responsive design
* CSS variables
* Mobile-first approach

---

## JavaScript

* ES6+
* Modular architecture
* Clear naming conventions
* Avoid global variables

---

## PHP

* Organized endpoints
* Input validation
* Secure file handling
* JSON responses
* Future PDO compatibility

---

# 📚 Documentation

Future documentation will include:

* REST API Reference
* PHP SDK
* JavaScript SDK
* Plugin Development Guide
* Theme Customization
* Deployment Guide

---

# 🌎 Browser Support

| Browser | Supported |
| ------- | --------- |
| Chrome  | ✅         |
| Firefox | ✅         |
| Edge    | ✅         |
| Opera   | ✅         |
| Safari  | ✅         |

---

# 📱 Mobile Support

Designed for:

* Desktop
* Tablet
* Mobile

Responsive layouts are available throughout the platform.

---

# 🛠 Planned Integrations

Future integrations may include:

* Discord OAuth
* GitHub OAuth
* Google Login
* Steam Login
* Twitch Login

---

# ❓ Frequently Asked Questions

### Is MUGEN-HUB free?

Yes. The project is completely open source.

---

### Can I host my own instance?

Yes.

Clone the repository, configure PHP and you're ready to go.

---

### Does it require MySQL?

Not currently.

The platform works using JSON storage.

---

### Will MySQL be supported?

Yes.

Database abstraction was designed to simplify migration.

---

### Can I contribute?

Absolutely.

Community contributions are highly encouraged.

---

# 🐞 Reporting Issues

Found a bug?

Please include:

* Operating System
* PHP Version
* Browser
* Steps to reproduce
* Expected behavior
* Screenshots (if applicable)

---

# 💡 Feature Requests

Suggestions are always welcome.

Examples:

* New content categories
* Community tools
* Performance improvements
* UI/UX enhancements

---

# ❤️ Acknowledgements

Special thanks to:

* The M.U.G.E.N Community
* Character creators
* Stage creators
* Screenpack creators
* Open-source contributors

Your work keeps the community alive.

---

# 📊 Project Goals

MUGEN-HUB aims to become:

* A modern M.U.G.E.N repository
* A creator-focused platform
* A preservation project
* A collaborative community
* An open-source ecosystem

---

# 📄 License

This project is licensed under the MIT License.

See the `LICENSE` file for more information.

---

# 👨‍💻 Author

**Thales ("MrMadaraUchiha667")**

Founder of **PixelCraft Studio**

Passionate about game development, open-source software, server technology and preserving the M.U.G.E.N community.

GitHub:

https://github.com/MrMadaraUchiha667

---

# ⭐ Support the Project

If you enjoy MUGEN-HUB:

* ⭐ Star this repository
* 🍴 Fork the project
* 🐞 Report bugs
* 💡 Suggest features
* 🤝 Contribute with Pull Requests
* 📢 Share the project with the M.U.G.E.N community

Every contribution helps make MUGEN-HUB even better.

---

<div align="center">

# 🎮 MUGEN-HUB

### Preserve. Share. Play.

Made with ❤️ for the M.U.G.E.N Community.

</div>
