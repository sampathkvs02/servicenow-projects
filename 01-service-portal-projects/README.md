For your **Visitor Pass Management Portal**, you can make the GitHub README more attractive using **badges (stickers), emojis, navigation buttons, screenshots, and clickable links**. GitHub README files support Markdown, images, links, emojis, tables, and relative links between project files. ([GitHub Docs][1])

Use the following improved `README.md`. Copy and paste it into:

```text
01-service-portal-projects/
└── visitor-pass-management/
    └── README.md
```

````markdown
<div align="center">

# 🎫 Visitor Pass Management Portal :https://dev267954.service-now.com/vsk_software_pravite_limited_company

### A Custom ServiceNow Service Portal Project

![ServiceNow](https://img.shields.io/badge/ServiceNow-Service%20Portal-81B5A1?style=for-the-badge&logo=servicenow&logoColor=white)

![JavaScript](https://img.shields.io/badge/JavaScript-Client%20%26%20Server%20Side-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

![AngularJS](https://img.shields.io/badge/AngularJS-Service%20Portal-DD0031?style=for-the-badge&logo=angularjs&logoColor=white)

![HTML](https://img.shields.io/badge/HTML-Widget%20UI-E34F26?style=for-the-badge&logo=html5&logoColor=white)

![CSS](https://img.shields.io/badge/CSS-Visitor%20Card-1572B6?style=for-the-badge&logo=css3&logoColor=white)

![Status](https://img.shields.io/badge/Project-Completed-success?style=for-the-badge)

![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

<br>

[📖 Project Overview](#-project-overview)
•
[✨ Features](#-key-features)
•
[🔄 Project Flow](#-project-flow)
•
[🛠️ Technologies](#️-technologies-used)
•
[📂 Project Structure](#-project-structure)
•
[🚀 Installation](#-installation-guide)
•
[📸 Screenshots](#-screenshots)
•
[📚 Documentation](#-documentation)

</div>

---

## 📌 Project Overview

The **Visitor Pass Management Portal** is a custom ServiceNow Service Portal application developed to simplify visitor registration and visitor pass generation.

Users can enter visitor information through a custom Service Portal widget. When the user clicks **Generate Visitor Pass**, the visitor details are sent from the Client Controller to the Server Script.

The Server Script performs the following actions:

✅ Creates a new visitor record

✅ Stores visitor details in the custom table

✅ Generates a unique Visitor ID

✅ Gets the current date

✅ Returns the visitor information to the widget

✅ Displays a dynamic visitor pass

✅ Allows the visitor pass to be printed

> 💡 This project demonstrates ServiceNow Service Portal development, custom widgets, client-server communication, GlideRecord, custom tables, and Update Sets.

---

## ✨ Key Features

| Feature | Description |
|---|---|
| 📝 Visitor Registration | Captures visitor information using a custom form |
| 👤 Visitor Name | Stores the visitor's full name |
| 💼 Designation | Captures the visitor's designation |
| 📱 Mobile Number | Stores the visitor's contact number |
| 📍 Place | Captures the visitor's location |
| 🎯 Purpose of Visit | Records the reason for the visit |
| 🆔 Unique Visitor ID | Automatically generates a Visitor ID |
| 📅 Current Date | Automatically displays the current date |
| 💾 Record Storage | Saves visitor information in a custom table |
| 🎫 Dynamic Visitor Pass | Generates a visitor card after submission |
| 🖨️ Print Functionality | Allows the user to print the visitor pass |
| 🧩 Custom Widget | Developed using ServiceNow Service Portal |

---

## 🔄 Project Flow

```text
┌─────────────────────┐
│ 🌐 Open Portal      │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ 📝 Enter Visitor    │
│    Information      │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ 🟢 Generate Visitor │
│       Pass          │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ 💻 Client Controller│
│  c.server.get()     │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ ⚙️ Server Script    │
│  GlideRecord        │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ 🗄️ Custom Table     │
│ u_visitors_table    │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ 🆔 Generate Visitor │
│       ID            │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ 🎫 Display Visitor  │
│       Pass          │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ 🖨️ Print Visitor    │
│       Pass          │
└─────────────────────┘
````

---

## 🛠️ Technologies Used

| Technology           | Purpose                                  |
| -------------------- | ---------------------------------------- |
| 🟢 ServiceNow        | Main platform                            |
| 🌐 Service Portal    | Portal development                       |
| 🧩 Custom Widget     | Visitor registration and pass generation |
| 🧱 HTML              | Visitor form and card structure          |
| 🎨 CSS               | Visitor card design and styling          |
| 🟨 JavaScript        | Client and server logic                  |
| 🅰️ AngularJS        | Data binding using `ng-model`            |
| 🔄 Client Controller | Sends data to the Server Script          |
| ⚙️ Server Script     | Processes and stores visitor data        |
| 🗄️ GlideRecord      | Creates visitor records                  |
| 📋 Custom Table      | Stores visitor information               |
| 📦 Update Set        | Captures and deploys project changes     |

---

## 🧩 ServiceNow Components

| Component               | Configuration                       |
| ----------------------- | ----------------------------------- |
| 🌐 Portal               | VSK Software Private Limited Portal |
| 📄 Portal Page          | Visitor Pass Page                   |
| 🧩 Widget               | Visitor Pass                        |
| 🗄️ Custom Table        | `u_visitors_table`                  |
| 💻 Client Communication | `c.server.get()`                    |
| ⚙️ Server-Side API      | `GlideRecord`                       |
| 🆔 Visitor ID           | Generated using `GlideDateTime`     |
| 📅 Date                 | Generated using `GlideDate`         |
| 📦 Deployment           | Update Set XML                      |

ServiceNow widgets contain HTML, CSS, a client controller, and server-side logic, which matches the structure used in this project. ([ServiceNow Developers][2])

---

## 📂 Project Structure

```text
visitor-pass-management/
│
├── 📄 README.md
│
├── 📁 widget-code/
│   ├── 📄 html.html
│   ├── 🎨 css.css
│   ├── 💻 client-script.js
│   └── ⚙️ server-script.js
│
├── 📁 update-set/
│   └── 📦 visitor-pass-update-set.xml
│
├── 📁 database/
│   └── 🗄️ visitor-table-details.md
│
├── 📁 screenshots/
│   ├── 🖼️ 01-portal-home-page.png
│   ├── 🖼️ 02-visitor-registration-form.png
│   ├── 🖼️ 03-generated-visitor-card.png
│   └── 🖼️ 04-visitor-table-record.png
│
└── 📁 documentation/
    ├── 📖 installation-guide.md
    └── 🔄 project-flow.md
```

---

## 📁 Quick Navigation

### 💻 Widget Source Code

* [📄 View HTML Code](./widget-code/html.html)
* [🎨 View CSS Code](./widget-code/css.css)
* [💻 View Client Controller](./widget-code/client-script.js)
* [⚙️ View Server Script](./widget-code/server-script.js)

### 📦 Deployment Files

* [📦 View Update Set](./update-set/visitor-pass-update-set.xml)

### 🗄️ Database Details

* [🗄️ View Visitor Table Details](./database/visitor-table-details.md)

### 📖 Documentation

* [🚀 Installation Guide](./documentation/installation-guide.md)
* [🔄 Project Flow](./documentation/project-flow.md)

### 📸 Project Screenshots

* [🏠 Portal Home Page](./screenshots/01-portal-home-page.png)
* [📝 Visitor Registration Form](./screenshots/02-visitor-registration-form.png)
* [🎫 Generated Visitor Pass](./screenshots/03-generated-visitor-card.png)
* [🗄️ Visitor Table Record](./screenshots/04-visitor-table-record.png)

---

## 🚀 Installation Guide

### Step 1: Import the Update Set

Navigate to:

```text
System Update Sets
→ Retrieved Update Sets
→ Import Update Set from XML
```

Upload:

```text
visitor-pass-update-set.xml
```

### Step 2: Preview the Update Set

Open the imported Update Set and click:

```text
Preview Update Set
```

Review and resolve any conflicts.

### Step 3: Commit the Update Set

Click:

```text
Commit Update Set
```

### Step 4: Verify the Components

Check the following:

* ✅ Custom table is available
* ✅ Visitor Pass widget is available
* ✅ Portal page is available
* ✅ Widget is added to the portal page
* ✅ User has access to the portal

### Step 5: Test the Project

1. Open the ServiceNow portal.
2. Enter visitor information.
3. Click **Generate Visitor Pass**.
4. Verify the visitor card is displayed.
5. Verify the visitor record is created.
6. Click **Print Pass**.

---

## 📸 Screenshots

### 🏠 Portal Home Page

![Portal Home Page](./screenshots/01-portal-home-page.png)

### 📝 Visitor Registration Form

![Visitor Registration Form](./screenshots/02-visitor-registration-form.png)

### 🎫 Generated Visitor Pass

![Generated Visitor Pass](./screenshots/03-generated-visitor-card.png)

### 🗄️ Visitor Record

![Visitor Table Record](./screenshots/04-visitor-table-record.png)

---

## 🧪 Testing Checklist

* [x] Visitor form loads successfully
* [x] Name is captured
* [x] Designation is captured
* [x] Mobile number is captured
* [x] Place is captured
* [x] Purpose is captured
* [x] Visitor record is created
* [x] Unique Visitor ID is generated
* [x] Current date is displayed
* [x] Visitor pass is generated
* [x] Print functionality works

---

## 🐛 Troubleshooting

<details>

<summary><b>❌ Visitor card is not displayed</b></summary>

Check:

```javascript
data.showCard = true;
```

Check HTML:

```html
ng-if="c.data.showCard"
```

Also verify that the Client Controller receives the server response.

</details>

<details>

<summary><b>❌ Visitor record is not created</b></summary>

Check:

* Table name
* Field names
* GlideRecord syntax
* User permissions
* Server Script errors

Correct:

```javascript
var gr = new GlideRecord("u_visitors_table");
```

Incorrect:

```javascript
var gr = new gliderecord("u_visitors_table");
```

</details>

<details>

<summary><b>❌ Place value is empty</b></summary>

The Client Controller sends:

```javascript
city: c.data.city
```

Therefore, use:

```javascript
gr.u_place = input.city;
```

</details>

---

## 📚 Learning Resources

* [ServiceNow Developer Portal](https://developer.servicenow.com/)
* [ServiceNow Service Portal Learning](https://developer.servicenow.com/dev.do)
* [GitHub README Documentation](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes)
* [GitHub Markdown Guide](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

---

## 👨‍💻 Author

**Kodati Venkata Sampath**

🎯 Aspiring ServiceNow Developer

💼 ServiceNow Administrator | ServiceNow Developer | ITSM

⭐ If you found this project useful, consider giving the repository a star!

</div>
```
