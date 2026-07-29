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

🛠️ Technologies Used:

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

🧩 ServiceNow Components:

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

📂 Project Structure:
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
 Current date is displayed
 Visitor pass is generated
 Print functionality works
