Nestino --- Hotel Room Booking System
Nestino is a hotel room booking web application built with Next.js. It
is designed to let visitors explore accommodation options, choose their
stay dates and guest count, and move through a reservation-oriented
experience.
The project brings together a responsive React interface, shared booking
state, and a MongoDB/Mongoose data layer. It is also a portfolio project
for practicing modern frontend development and full-stack application
structure.
Features
- Hotel booking experience --- a reservation-focused flow for
  visitors planning a stay.
- Room discovery --- a room catalog designed around a collection
  of approximately 60 rooms.
- Stay details --- manage check-in and check-out dates and guest
  counts.
- Shared booking state --- Redux Toolkit and React Redux are used
  to manage application state.
- Database integration --- MongoDB with Mongoose for
  document-oriented data modeling.
- Responsive interface --- built with Next.js and modern styling
  tools for different screen sizes.
- Reusable UI --- uses React components and interface libraries to
  support consistent UI patterns.
- Modern Next.js foundation --- uses the App Router and the
  Next.js production build workflow.
Project status: This README describes the project based on its
current known setup. Features such as payment processing, email
confirmations, user accounts, and production booking availability are
not claimed here unless they are implemented in the repository.

Tech Stack
  Technology                                Role
  Next.js 16         React framework and application
                                            routing
  React 19            UI components
  JavaScript / TypeScript tooling           Application development; the
                                            repository currently includes
                                            TypeScript configuration
  Tailwind CSS  Utility-first styling
  4                                         
  Redux                                    Shared application state
  Toolkit   
  React                                    Connecting React components to
  Redux       Redux
  MongoDB       Document database
  Mongoose       MongoDB object modeling
  date-fns         Date utilities
  Headless UI    Accessible, unstyled UI primitives
  Heroicons and   Icons
  Hugeicons       
  ESLint             Code linting
Getting Started
Prerequisites
- Node.js compatible with the installed Next.js
  version
- npm
- A MongoDB database if you want to run features that read or write
  persistent data
1. Clone the repository
git clone https://github.com/DEV-POUYA/Nestino.git
cd Nestino
2. Install dependencies
npm install
3. Configure environment variables
If your local configuration uses environment variables for MongoDB,
create a .env.local file in the project root and add the variable
names expected by the application's database connection code.
For example:
MONGODB_URI=your_mongodb_connection_string
Use the exact variable name expected by the repository. Never commit
real credentials or production secrets to GitHub.
4. Start the development server
npm run dev
Open http://localhost:3000 in your browser.
Available Scripts
  Command           Description
  npm run dev     Start the local development server
  npm run build   Create a production build
  npm run start   Start the production server after building
  npm run lint    Run ESLint
Booking State
The booking interface uses shared state for core trip details,
including:
- Check-in date
- Check-out date
- Number of adults
- Number of children
The initial guest state has been configured with one adult and no
children. Date and guest values can be used across components as a
visitor moves through the booking experience.
Project Structure
The repository is organized around the Next.js App Router and separates
UI components, data models, state management, and supporting utilities.
Nestino/
├── app/          # App Router pages and route handlers
├── components/   # Reusable interface components
├── lib/          # Shared libraries and application helpers
├── models/       # MongoDB/Mongoose data models
├── redux/        # Redux Toolkit state management
├── utility/      # Utility functions
├── assets/       # Project assets
├── public/       # Public static files
├── package.json
└── README.md
This is a high-level overview; individual files may vary as the project
evolves.
Deployment
Nestino is a Next.js application and can be deployed to a platform that
supports Next.js, such as Netlify or
Vercel.
Before deploying:
1. Confirm that npm run build completes successfully.
2. Add the required environment variables in the hosting provider's
   project settings.
3. Ensure the production database is reachable from the deployed
   application.
4. Do not upload the local .next build directory manually; let the
   hosting platform build the application from the repository.
If database-backed features are enabled, configure the production
MongoDB connection securely before using them.
Future Improvements
Potential next steps for the project include:
- Clear loading, empty, and error states for room data
- More advanced room filtering and sorting
- Stronger validation for check-in/check-out dates and guest limits
- Automated tests for booking state and reservation flows
- Improved accessibility and end-to-end testing
- Reservation confirmation and notification workflows, if required
- Production monitoring and deployment documentation
Author
Pouya Yamouti
Frontend developer focused on building responsive web applications with
React and Next.js.
- GitHub: @DEV-POUYA
License
No license has been specified in this README. Add a LICENSE file if
you want to define the terms under which others may use, modify, or
distribute the project.
