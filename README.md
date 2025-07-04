# Cypresstest2025
This repository was developed as part of the QA Craft Growth Automation Challenge 2025. It contains end-to-end test scenarios implemented using Cypress, targeting critical functional flows such as site navigation, user login, and order lifecycle management on https://www.laboratoriodetesting.com. The test suite aims to ensure application stability, regression coverage, and reliability of core features.
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
## :file_folder: Project Structure
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
## :speech_balloon: Notes
- The tests focus on validating key functionalities related to browsing and order visibility on the site.
