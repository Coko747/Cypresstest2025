# Cypresstest2025
This is a test for QA - huge 
This project was created as part of the QA Craft Growth Automation Challenge 2025.
It includes automated tests written in Cypress that validate essential flows such as navigation, login, and order management on the site https://www.laboratoriodetesting.com.
Setup Requirements
Before getting started, make sure you have the following installed on your machine:
Node.js (recommended version: 18 or higher)
Git
You can verify your installation with:
node -v
npm -v
git --version
Installation
Clone this repository:
git clone https://github.com/ClaraERozo/automation-challenge.git
cd automation-challenge
Install the project dependencies:
npm install
Launch Cypress in interactive mode:
npx cypress open
Running the Tests
Interactive mode (recommended):
npx cypress open
Headless mode:
npx cypress run
:file_folder: Project Structure
/cypress
  /e2e
    - scenario_1.cy.js
    - scenario_2.cy.js
  /support
    - e2e.js
cypress.config.js
package.json
README.md
:speech_balloon: Notes
The tests focus on validating key functionalities related to browsing and order visibility on the site.
laboratoriodetesting.com
Laboratorio de Testing | Home
nodejs.orgnodejs.org
Node.js — Run JavaScript Everywhere
Node.js® is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts.
