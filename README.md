This project was created as part of the **QA Craft Growth Automation Challenge 2025**.  
It includes automated tests written in **Cypress** that validate essential flows such as navigation, login, and order management on the site [https://www.laboratoriodetesting.com](https://www.laboratoriodetesting.com).

## Setup Requirements

Before getting started, make sure you have the following installed on your machine:

- [Node.js (recommended version: 18 or higher)](https://nodejs.org/)
- [Git](https://git-scm.com/)

You can verify your installation with:

```bash
node -v
npm -v
git --version
```

##  Installation

1. Clone this repository:

```bash
git clone https://github.com/ClaraERozo/automation-challenge.git
cd automation-challenge
```

2. Install the project dependencies:

```bash
npm install
```

3. Launch Cypress in interactive mode:

```bash
npx cypress open
```

##  Running the Tests

- **Interactive mode (recommended):**

```bash
npx cypress open
```

- **Headless mode:**

```bash
npx cypress run
```

## 📁 Project Structure

```
/cypress
  /e2e
    - scenario_1.cy.js
    - scenario_2.cy.js
  /support
    - e2e.js
cypress.config.js
package.json
README.md
```

## 💬 Notes

- The tests focus on validating key functionalities related to browsing and order visibility on the site.
