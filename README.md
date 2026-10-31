# Syed Irfan - Personal Portfolio Website

A warm, handcrafted, and responsive developer portfolio website designed for **Syed Mahammad Irfan**, Aspiring Software Developer and B.Tech student at **Madanapalle Institute of Technology & Science**.

---

## 🎨 Design Aesthetic: Handcrafted Warm Beige & Editorial Serif

- **Palette:** Warm oatmeal linen (`#FAF7F2`), biscuit beige (`#F3ECE2`), crisp warm paper cards (`#FFFFFF`), with rich terracotta (`#BA542B`) and honey amber (`#D47B3E`) accents.
- **Typography:** Bespoke editorial pairing—**Newsreader** serif headlines with **Plus Jakarta Sans** for clear body copy.
- **Profile Photo:** Connected directly to your real portrait in `assets/profile.jpg`.
- **Personality:** Authentic, human-made developer feel without sterile corporate templates or artificial neon glows.

---

## 📁 Project Structure

```text
my portfolio/
├── index.html                  # Semantic HTML5 markup with warm editorial typography
├── style.css                   # Custom handcrafted warm beige & terracotta stylesheet
├── script.js                   # Vanilla JavaScript (mobile menu, scroll spy, contact modal)
├── README.md                   # Beginner-friendly guide and documentation
└── assets/
    ├── profile.jpg             # Your personal portrait photo
    ├── New.jpg                 # Original portrait photo
    └── resume.pdf              # Your resume PDF file
```

---

## 🚀 How to Run the Website Locally

You can open and view this website on your computer without installing any complex software.

### Method 1: Double-Click (Easiest)
1. Open File Explorer on your computer.
2. Navigate to your project folder: `my portfolio`.
3. Double-click the file named **`index.html`**.
4. The website will open instantly in your default web browser (Chrome, Edge, Firefox, Brave, etc.).

### Method 2: Using VS Code Live Server (Recommended for Development)
1. Open the `my portfolio` folder in **Visual Studio Code**.
2. Install the **Live Server** extension (by Ritwick Dey) from the Extensions tab (`Ctrl + Shift + X`).
3. Right-click on `index.html` and click **"Open with Live Server"**.
4. Any changes you make to the code will automatically refresh in your browser.

---

## 📷 How to Add Your Profile Photo

1. Prepare your preferred photo (square or portrait orientation works best).
2. Rename your image file to:
   ```text
   profile.jpg
   ```
3. Copy or move that photo into the **`assets`** folder inside your project.
4. Refresh your browser (`Ctrl + F5`). Your photo will automatically replace the placeholder avatar!

> **Tip:** If your image is a PNG or JPEG format, simply save it as `profile.jpg` in the `assets/` folder.

---

## 📄 How to Update Your Resume

1. We have already safely linked your existing resume into **`assets/resume.pdf`**.
2. Whenever you update your resume in the future:
   - Export your new resume as a PDF file named **`resume.pdf`**.
   - Replace the file in the **`assets/`** folder with your new PDF.
   - The "Download Resume" buttons on the website will immediately download the updated version!

---

## ✏️ How to Customize Your Information

All details are clearly marked with beginner-friendly comments in `index.html`:

- **Email Address:** Search for `syedirfan61944@gmail.com` in `index.html` (lines in the Contact section) and `script.js` to update your preferred contact email.
- **Projects:** Open `index.html` and search for `<section class="section projects-section" id="projects">`. You can easily change titles, descriptions, and repository URLs.
- **GitHub Links:** Search for `https://github.com/syedirfan-001` to update any repository or profile link.

---

## 🌐 How to Publish for Free on GitHub Pages

Publishing your website on GitHub Pages makes it live on the internet with a free `https://<username>.github.io` link!

### Step-by-Step Guide:

1. **Create a GitHub Repository:**
   - Log in to your GitHub account: [github.com](https://github.com).
   - Click the **"+"** icon in the top right corner and select **New repository**.
   - Repository name:
     - Name it `portfolio` (or `syedirfan-001.github.io` for a primary root domain).
     - Set visibility to **Public**.
     - Leave "Add a README file" unchecked (since we already have one).
     - Click **Create repository**.

2. **Upload Your Files to GitHub:**
   - On the repository page, click **"uploading an existing file"** or use Git terminal commands:
     ```bash
     git init
     git add .
     git commit -m "Initial commit of personal portfolio website"
     git branch -M main
     git remote add origin https://github.com/syedirfan-001/<your-repo-name>.git
     git push -u origin main
     ```

3. **Enable GitHub Pages:**
   - In your GitHub repository, click on the **Settings** tab.
   - In the left sidebar, click on **Pages** (under "Code and automation").
   - Under **Build and deployment > Source**, select **Deploy from a branch**.
   - Under **Branch**, select `main` (and `/root`), then click **Save**.

4. **Access Your Live Website:**
   - Wait 1-2 minutes for GitHub to build your site.
   - Refresh the Pages settings page to see your live URL:
     ```text
     https://syedirfan-001.github.io/<your-repo-name>/
     ```
   - Share this link on LinkedIn, your resume, and with recruiters!

---

## 🛠️ Technologies Used

- **HTML5:** Semantic document structure and accessible tags.
- **CSS3:** Modern design tokens, custom glassmorphism, responsive CSS grid/flexbox, and glow keyframes.
- **Vanilla JavaScript:** Fast, dependency-free interactive scripts for mobile navigation, scroll-spy link tracking, and client-side form handling.

