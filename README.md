# FEDF-REVIEW-2 — FED Review Project

A comprehensive **React demo application** for managing student group projects with authentication, CRUD operations, and data persistence.

## 🌟 Features

✅ **UI/UX Design** — Modern gradient theme with MUI components, responsive design, custom typography (Inter, Lora, Poppins)  
✅ **Routing & Navigation** — 9 pages with React Router v6 (Home, Dashboard, Projects, Profile, About, Contact, Signin, Signup, ProjectDetail)  
✅ **Validation & Error Handling** — Form validation (email, password strength, required fields), error alerts, try-catch blocks  
✅ **Authentication** — AWS Amplify conditional integration + demo fallback auth with session storage  
✅ **CRUD Operations** — Full Create, Read, Update, Delete for projects with localStorage persistence  
✅ **Data Persistence** — localStorage for projects (`demo_projects_v1`) and contact messages (`demo_contacts`)  
✅ **API Integration** — Simulated weather API data (weather conditions, temperature) for demo projects  
✅ **Git & Version Control** — Clean commit history, proper branching (main/gh-pages), GitHub deployment  

## 📁 Project Structure

```
src/
├── pages/                    # Page components
│   ├── Home.js
│   ├── Dashboard.js
│   ├── Projects.js           # Full CRUD + weather API data
│   ├── ProjectDetail.js
│   ├── Profile.js
│   ├── About.js
│   ├── Contact.js            # Form validation + localStorage
│   ├── Signin.js             # Email validation + session auth
│   └── Signup.js             # Strong password validation
├── components/
│   ├── NavBar.js
│   └── Footer.js
├── utils/
│   └── auth.js               # Authentication utilities
├── App.js                    # Routes configuration
├── index.css                 # Global styles + typography tokens
├── theme.js                  # MUI theme with gradients
└── aws-exports.js            # Amplify config (placeholder)
```

## 🚀 How to Run

```bash
# Install dependencies
npm install

# Start development server
npm start
# Opens at http://localhost:3000

# Build for production
npm run build

# Deploy to GitHub Pages
npm run gh-pages-deploy
```

## 🔗 Live Demo

- **Development**: http://localhost:3000
- **Production**: https://Vaishu-N-9885.github.io/FEDF-REVIEW-2/
- **Typography Demo**: `/fonts-demo.html`

## 🛠️ Technologies Used

- **Frontend**: React 18, React Router v6
- **UI Framework**: Material-UI (MUI) v5
- **Styling**: CSS-in-JS, custom CSS with gradients
- **Typography**: Inter (UI), Lora (headings), Poppins (buttons)
- **State Management**: React hooks (useState, useEffect)
- **Storage**: localStorage for demo data persistence
- **Authentication**: AWS Amplify (optional), demo fallback auth
- **Build**: Create React App (react-scripts)

## 📋 Rubric Compliance

| Rubric | Status | Details |
|--------|--------|---------|
| UI/UX Design & Visual Aesthetics | ✅ | Gradient color palette, responsive grid, MUI components, typography tokens |
| Routing & Navigation | ✅ | 9 routes configured, working links in NavBar, wildcard redirect |
| Validation & Error Handling | ✅ | Email/password validation, field required checks, error alerts, try-catch blocks |
| Authentication | ✅ | AWS Amplify conditional + demo fallback with localStorage session |
| API Integration | ✅ | Simulated weather API (weather, temperature) in project cards |
| CRUD Operations | ✅ | Create, Read, Update, Delete for projects; Edit/Delete buttons in UI |
| Data Persistence | ✅ | localStorage for projects (`demo_projects_v1`), contacts, user session |
| Git Usage | ✅ | Clean history, main + gh-pages branches, GitHub Pages deployment |

## 📝 Local Storage Schema

```javascript
// Projects
localStorage['demo_projects_v1'] = [
  {
    id: 1,
    name: 'Weather App',
    description: '...',
    status: 'In Progress',
    weather: 'Sunny',
    temp: '25°C',
    createdAt: '2025-11-29T...'
  }
]

// Contacts (from Contact form submissions)
localStorage['demo_contacts'] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    message: '...',
    sentAt: '2025-11-29T...'
  }
]

// User Session (after Signin/Signup)
localStorage['demo_user'] = {
  username: 'john_doe',
  email: 'john@example.com',
  loginTime: '2025-11-29T...'
}
```

## 🔐 Authentication Setup (Optional)

To enable AWS Amplify authentication:

1. Update `src/aws-exports.js` with your Amplify configuration:
   ```javascript
   export default {
     aws_user_pools_id: 'YOUR_ID',
     aws_user_pools_web_client_id: 'YOUR_CLIENT_ID',
     aws_cognito_identity_pool_id: 'YOUR_POOL_ID',
     aws_project_region: 'us-east-1'
   };
   ```

2. The app will automatically detect valid config and use Amplify Authenticator instead of demo auth.

## 📱 Pages & Features

- **Home** — Landing page with introduction
- **Signin** — Email/username + password login (demo or Amplify)
- **Signup** — Create account with email validation & password strength check
- **Projects** — Full CRUD: view, create, edit (in dialog), delete projects with weather data
- **ProjectDetail** — Individual project view
- **Dashboard** — User dashboard (placeholder)
- **Profile** — User profile (placeholder)
- **About** — About page
- **Contact** — Contact form with validation & submission logging to localStorage

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Large `node_modules` | Already in `.gitignore`; use `npm ci` for clean install |
| CORS errors in API calls | This demo uses simulated API data; replace with your own endpoint |
| Build fails | Run `npm install --legacy-peer-deps` |
| Amplify not working | Ensure `aws-exports.js` is properly configured; demo fallback will work without it |

## 📦 Dependencies

Key packages:
- `react` & `react-dom` — Core framework
- `react-router-dom` — Client-side routing
- `@mui/material` — UI components
- `@aws-amplify/ui-react` — Auth UI (optional)
- `aws-amplify` — AWS services (optional)

## 🎯 Next Steps

- [ ] Connect to real backend API
- [ ] Add unit/integration tests (Jest, React Testing Library)
- [ ] Implement real authentication (JWT, OAuth)
- [ ] Add data export/import functionality
- [ ] Deploy to Vercel or Netlify with CI/CD
- [ ] Add dark mode toggle

## 📄 License

MIT

---

**Repository**: https://github.com/Vaishu-N-9885/FEDF-REVIEW-2  
**Live URL**: https://Vaishu-N-9885.github.io/FEDF-REVIEW-2/
