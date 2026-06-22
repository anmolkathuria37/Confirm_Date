# 💌 The Un-rejectable Proposal App (Dynamic & Customizable)

An interactive, playful, and mathematically absolute proposal web application built to eliminate the possibility of rejection. 😉 Now fully dynamic and customizable via URLs!

---

## ✨ Features

* **The Illusion of Choice:** The "No" button uses dynamic position shifting and text alteration on hover, making it physically impossible to click. 
* **Seamless Success Flow:** Clicking the "Yes" button instantly redirects the user to a custom "Thank You" page with a direct link to my Instagram handle.
* **🎯 Dynamic Personalization (Custom Routes):** You can personalize the proposal for anyone just by changing the URL path! (e.g., `/Nandini` will dynamically change the text to address Nandini).
* **✍️ White-Labeling (Query Parameters):** Want to claim ownership? Use the `?author=` query parameter to dynamically change the "Made with 💖 by" footer text.

---

## 🚀 How to Use & Customize (Dynamic URLs)

You don't need to change the code to customize it for different people. Just use the URL structure:

### 1. Personalize for a Specific Person
Append the person's name as a path parameter at the end of your deployed URL:
`https://heybeautiful.vercel.app/Nandini`
*Result:* The page dynamically updates its headings and questions to address **Nandini**.

### 2. Customize the Author Name
Use the `author` query parameter to update the creator's credit:
`https://heybeautiful.vercel.app/Nandini?author=Anmol%20Kathuria`
*Result:* The footer or credit section will dynamically display **"Made by Anmol Kathuria"**.

---

## 🛠️ Tech Stack

* **Frontend Framework:** React.js + Vite (leveraging React Router / URL parameter hooks)
* **Styling:** Tailwind CSS
* **Core Logic:** JavaScript (Dynamic state management, conditional rendering, and cursor-evasion mechanics)

---

## 📦 Local Setup

To run this project locally and test your custom routes:

```bash
# Clone the repository
git clone [https://github.com/anmolkathuria37/your-repo-name.git](https://github.com/anmolkathuria37/your-repo-name.git)

# Install dependencies
npm install

# Run the development server
npm run dev

```
## Disclaimer: No hearts were broken in the making of this application. Built for fun, dynamic routing practice, and interactive UX experimentation.
```
