# 🎓 Final Project – Personal Portfolio Website

You will build your own website that introduces you as a programmer and showcases the JavaScript projects you’ve built this year.

---

## 🔧 What You Need to Include

### 🧑‍💻 About You Section
- A short description of yourself as a programmer  
- A reflection on what you learned this year in Computer Science

### 🗂 Project Gallery Section
- Showcase all your graded JavaScript projects  
- Include:
  - A short description of each project  
  - A working version that visitors can use or view  

> **Reminder:** If you took the AP Exam, do **not** include your Create Performance Task project on this website.

### 🎨 Design Requirement
- Your website should have a modern, clean look  
- Make sure all linked projects match your website’s style (update CSS if necessary)

### 🌍 Deployment Requirement
- Deploy using GitHub Pages or Netlify  
- Submit your live website link in the Google Form on Classroom

---

## 💡 Ways to Display Your Projects

Choose whichever works best for your layout:

### 🔗 Option 1: Link to Separate Pages
Move your project files into folders like `/calculator/index.html`

**Example:**  
```html  
<a href="calculator/index.html">Try My Calculator App</a>  
```

---

### 📄 Option 2: Build a Projects Page (`projects.html`)
Create a `projects.html` file and render all your projects as cards or sections. You can include:
- An image preview  
- A description  
- Clickable links or live previews  

---

## 🎨 Styling Help – CSS Grid (Optional but Recommended)

Use CSS Grid to organize your layout cleanly.

**Docs:** [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)  
**Tutorial:** [CSS Grid Crash Course (YouTube)](https://www.youtube.com/watch?v=jV8B24rSN5o)

### Example CSS Grid with Areas:

```
css  
.container {  
  display: grid;  
  grid-template-columns: repeat(2, 1fr);  
  grid-template-areas:  
    "header header"  
    "sidebar content"  
    "footer footer";  
}  
.header { grid-area: header; }  
.sidebar { grid-area: sidebar; }  
.content { grid-area: content; }  
.footer { grid-area: footer; }  
```

---

### Scale Your Grid as Needed

```css  
/* More columns */  
.container {  
  grid-template-columns: repeat(6, 1fr);  
  grid-template-areas:  
    "header header header header header header"  
    "sidebar sidebar content content content content"  
    "footer footer footer footer footer footer";  
}  
```

---

### Why Use `grid-template-areas`?
- Easier to manage layout  
- Named sections make HTML cleaner and easier to work with  

---

## 📁 How to Set Up Your Repository on GitHub

### Step-by-step Instructions
1. Go to [github.com](https://github.com) and sign in or create an account  
2. Click the “+” icon in the top right → **New repository**  
3. Name it something like `final-project-portfolio`  
4. Set it to **Public** and click **Create repository**

---

### How to Add Your Files

#### Option 1: Upload Files
- Go to your repo → Click **Add file** → **Upload files**  
- Upload your files (e.g., `index.html`, `style.css`, `images`, etc.)  
- Click **Commit changes** (this means "upload and save")

#### Option 2: Chromebook Users
- If you can’t download files:
  - Click a file like `index.html` in your repo  
  - Click the pencil ✏️ to edit  
  - Copy and paste your code from CodePen or another source  
  - Scroll down and click **Commit changes**  
- If you *can* download files, use Option 1 instead

---

### How to Edit Files
1. Click any file  
2. Click the ✏️ icon to open the editor  
3. Edit your content  
4. Scroll down and click **Commit changes**

---

## 🌐 How to Publish Your Website Using GitHub Pages

### Steps:
1. Go to your GitHub repository  
2. Click the **Settings** tab  
3. In the left sidebar, scroll to **Pages**  
4. Under “Branch”, select:
   - `main`  
   - `/ (root)`  
5. Click **Save**  
6. Copy the live link GitHub gives you  
7. Open it in a new tab and test that it works  

👉 [GitHub Pages Official Guide](https://pages.github.com/)

---

## ✅ Final Submission Checklist

- [ ] Website includes an About You section and Project Gallery  
- [ ] Website is clean, modern, and functional  
- [ ] All projects are working and visually match your website  
- [ ] Website is deployed using GitHub Pages or Netlify  
- [ ] A `README.md` is included in your project repo with:
  - A short intro about you as a student developer  
  - What your site includes and what you learned this year  
  - A section describing your projects and their features  
  - A link to your GitHub repository  
  - A link to your live website  
- [ ] Your folder in the class repo includes all files from your project and your personal `README.md`

---

💬 You are allowed to use ChatGPT to help you write your `README.md`.  
You are responsible for checking the formatting and making sure the file renders correctly on GitHub.

> 💡 Please note: these instructions are separate from the `README.md` file in the Student Webpages repository. Make sure you read both documents thoroughly before submitting your project.
