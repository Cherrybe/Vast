# Vast: Financial Application for MSMEs  

## Overview

**Vast** is a financial management application designed for MSMEs (Micro, Small, and Medium Enterprises) to provide actionable insights into their finances. The platform aims to empower businesses with an overview of income, expenses, and revenue, coupled with personalized tips to optimize their financial health.

## Features  
- **Dashboard:** A centralized hub displaying key financial metrics, trends, and performance insights.  
- **Financial Tips:** Contextual recommendations to improve income, control expenses, and boost revenue.  
- **Interactive Insights:** Visualized financial data for smarter decision-making.  

## Technologies Used  
- **Frameworks:** [Vue 3](https://vuejs.org/) with [TypeScript](https://www.typescriptlang.org/) and [Vite](https://vitejs.dev/) for a modern, scalable architecture.  
- **State Management:** [Pinia](https://pinia.vuejs.org/) for efficient state management.  
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) for responsive and maintainable design.  

## Target Audience  
Vast is designed for MSME companies and infrastructure providers seeking tools to better understand and manage their financial performance.

- **MSMEs:** Small to medium-sized businesses looking for a comprehensive financial management platform.
- **Infrastructure Providers:** Companies offering financial services to MSMEs, aiming to enhance their offerings with Vast's insights and recommendations.
- **Financial Institutions:** Banks and other financial institutions looking to provide value-added services to their MSME clients.
- **Government Agencies:** Organizations supporting MSMEs through financial literacy and resource allocation.
- **Developers:** Software developers interested in building upon Vast's API or integrating it into their
applications.
- **Educators:** Teachers and trainers looking for a platform to educate students about financial management and
entrepreneurship.
- **Entrepreneurs:** Small business owners seeking to improve their financial management skills and strategies.
- **Financial Analysts:** Professionals analyzing financial data to make informed business decisions.
- **Accountants:** Professionals responsible for managing and analyzing financial data for businesses.

## Directory Structure
The project is organized into several key directories:

```plaintext
+---public
|       vite.svg
|
\---src
    |   App.vue
    |   main.ts
    |   style.css
    |   vite-env.d.ts
    |   vue-shim.d.ts
    |
    +---assets
    |   +---fonts
    |   |   +---inter
    |   |   |       inter-v18-latin-100.woff2
    |   |   |       inter-v18-latin-100italic.woff2
    |   |   |       inter-v18-latin-200.woff2
    |   |   |       inter-v18-latin-200italic.woff2
    |   |   |       inter-v18-latin-300.woff2
    |   |   |       inter-v18-latin-300italic.woff2
    |   |   |       inter-v18-latin-500.woff2
    |   |   |       inter-v18-latin-500italic.woff2
    |   |   |       inter-v18-latin-600.woff2
    |   |   |       inter-v18-latin-600italic.woff2
    |   |   |       inter-v18-latin-700.woff2
    |   |   |       inter-v18-latin-700italic.woff2
    |   |   |       inter-v18-latin-800.woff2
    |   |   |       inter-v18-latin-800italic.woff2
    |   |   |       inter-v18-latin-900.woff2
    |   |   |       inter-v18-latin-900italic.woff2
    |   |   |       inter-v18-latin-italic.woff2
    |   |   |       inter-v18-latin-regular.woff2
    |   |   |
    |   |   \---poppins
    |   |           poppins-v21-latin-100.woff2
    |   |           poppins-v21-latin-100italic.woff2
    |   |           poppins-v21-latin-200.woff2
    |   |           poppins-v21-latin-200italic.woff2
    |   |           poppins-v21-latin-300.woff2
    |   |           poppins-v21-latin-300italic.woff2
    |   |           poppins-v21-latin-500.woff2
    |   |           poppins-v21-latin-500italic.woff2
    |   |           poppins-v21-latin-600.woff2
    |   |           poppins-v21-latin-600italic.woff2
    |   |           poppins-v21-latin-700.woff2
    |   |           poppins-v21-latin-700italic.woff2
    |   |           poppins-v21-latin-800.woff2
    |   |           poppins-v21-latin-800italic.woff2
    |   |           poppins-v21-latin-900.woff2
    |   |           poppins-v21-latin-900italic.woff2
    |   |           poppins-v21-latin-italic.woff2
    |   |           poppins-v21-latin-regular.woff2
    |   |
    |   \---icons
    |       +---svg
    |       |       Arrowdown.svg
    |       |       BanIcon.svg
    |       |       BarChart.svg
    |       |       BellIcon.svg
    |       |       DashboardIcon.svg
    |       |       InsightIcon.svg
    |       |       LogoIcon.svg
    |       |       MailIcon.svg
    |       |       MenuIcon.svg
    |       |       SettingsIcon.svg
    |       |       UserIcon.svg
    |       |       vue.svg
    |       |
    |       \---vue
    |               BanIcon.vue
    |               BarChart.vue
    |               BellIcon.vue
    |               BonusGenerated.vue
    |               BonusIcon.vue
    |               DashboardIcon.vue
    |               EwalletIcon.vue
    |               IncomeIcon.vue
    |               InsightIcon.vue
    |               MailIcon.vue
    |               MenuIcon.vue
    |               PaidIcon.vue
    |               PendingPay.vue
    |               SettingIcon.vue
    |               UserIcon.vue
    |
    +---components
    |   |   SelectComponent.vue
    |   |   UserProfile.vue
    |   |
    |   | 
    |   +---card
    |   |       CardData.ts
    |   |       CardItem.vue
    |   |       FinanceCard.vue
    |   |       FinanceData.ts
    |   |
    |   |
    |   +---dashboard
    |   |   |   ExpenseCard.vue
    |   |   |   ExpenseCard.vue
    |   |   |   FinancialTip.vue
    |   |   |   MonthlyNetCash.vue
    |   |   |   MonthlyNetCash.vue
    |   |   |   RevenueTrends.vue
    |   |   |   TopExpenses.vue
    |   |   |
    |   |   \---charts
    |   |           Barchart.ts
    |   |           Doughnut.ts
    |   |           Linechart.ts
    |   |
    |   +---insights
    |   |       Insights.vue
    |   |
    |   \---navigation
    |           NavigationItem.vue
    |           SideNavigation.vue
    |           TopNavigation.vue
    |
    +---router
    |       index.ts
    |
    +---styles
    |       fonts.css
    |
    +---tailwind-theme-objects
    |       fonts.ts
    |       index.ts
    |
    \---views
            DashboardView.vue
```
## `package.json` Overview
- Project Name: Vast
- Version: 0.0.0
- Type: Module

## Scripts
- `dev`: Runs the development server using Vite.
- `build`: Compiles TypeScript and builds the project for production.
- `lint`: Runs ESLint to analyze and fix code issues.

## Dependencies
- Vue3 Composition API: For building reusable components.
- Vue3 Router: For client-side routing.
- Vue3 Router DOM: For client-side routing.
- Apache Echarts: For building responsive graph interfaces.
- Pinia: For state management.
- Jest: For unit testing.
- Vue3-toastify: For alerts.
- Gtiart-vue-dialog: For responsive dialog boxES.

## DevDependencies
- Vite: For building and serving the application.
- ESLint: For code linting,maintaining code quality, and analysis.
- TypeScript: For type safety and code completion.
- Tailwind CSS & PostCSS: Tools for writing optimized and maintainable styles.
- Vue-tsc: Support typescript, for type checking and type declaration generation

## Installation and Setup
To install and set up the project, follow these steps:
1. Clone the repository:
   ```
   git clone https://github.com/Cherrybe/Vast.git
   cd vast
   ```
2. Install dependencies:
   ```
    pnpm install
   ```
3. Run the development server:
   ```
    pnpm run dev
   ```
4. Run test:
   ```
    pnpm test
   ```
5. Build the project:
   ```
    pnpm run build
   ```
## Project Architecture
The Vast project follows a modular architecture where each feature is encapsulated within its own directory. This approach promotes maintainability and scalability, allowing for easy updates and feature additions.
- **Components**: Reusable UI components.
- **Store**: Centralized state management using Pina.
- **Routes**: Handles navigation across different views.
- **Assets**: Images, icons, and other static assets.
