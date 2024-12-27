# Next.js Starter Template

A production-ready starter template for Next.js applications featuring Auth0 authentication, Tailwind CSS, and more.

## Features

- 🔐 Authentication with Auth0
- 🎨 Styling with Tailwind CSS
- 📱 Responsive design
- 🔒 Protected routes
- 🧭 Easy navigation
- 🏃‍♂️ Fast page loads with Next.js App Router

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- An Auth0 account

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/yourusername/next-js-template.git
cd next-js-template
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. Set up your Auth0 application:
   - Create a new application in Auth0
   - Set the callback URL to \`http://localhost:3000/api/auth/callback\`
   - Set the logout URL to \`http://localhost:3000\`

4. Create a \`.env.local\` file in the root directory with the following variables:
\`\`\`
AUTH0_SECRET='use [openssl rand -hex 32] to generate a 32 bytes value'
AUTH0_BASE_URL='http://localhost:3000'
AUTH0_ISSUER_BASE_URL='https://YOUR_AUTH0_DOMAIN'
AUTH0_CLIENT_ID='YOUR_AUTH0_CLIENT_ID'
AUTH0_CLIENT_SECRET='YOUR_AUTH0_CLIENT_SECRET'
\`\`\`

5. Start the development server:
\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

Visit \`http://localhost:3000\` to see your application.

## Project Structure

- \`/app\` - Next.js App Router pages and API routes
- \`/components\` - React components
- \`/public\` - Static assets

## Authentication Flow

1. Users can log in via the navigation bar or dedicated login page
2. After successful authentication, users are redirected to the dashboard
3. Protected routes (like /dashboard) require authentication
4. Users with active sessions are automatically redirected to the dashboard

## Deployment

This template is ready to deploy on Vercel:

1. Push your code to a Git repository
2. Import the project in Vercel
3. Set the environment variables in your Vercel project settings
4. Deploy!

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

