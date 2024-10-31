# Promptopia

Promptopia is a Next.js-based platform designed for users to share and explore AI-generated prompts. Whether you're someone looking to create or just explore ideas, this platform allows you to contribute your prompts and view others' creations from across the globe.

Basically, I have developed a Next.js application that highlights the key features of Next.js along with a comprehensive CRUD AI Prompt sharing system utilizing a MongoDB database and implementing NextAuth authentication.

### ⚙️ Tech Stack
- Next.js
- MongoDB
- NextAuth
- TailwindCSS

# Features

- **✨ Modern Design with Glassmorphism Style**: Enjoy a sleek and trendy look that embraces the glassmorphism aesthetic, giving the app a fresh and modern feel.

- **🔍 Discover & Share AI Prompts**: Dive into a world of community-shared AI prompts and unleash your creativity by contributing your own for everyone to explore.

- **✏️ Edit & Delete Your Prompts**: Flexibility at your fingertips! Easily tweak your prompts anytime or remove them when they're no longer needed.

- **👤 Personalized Profile Page**: Each user gets a unique profile page that highlights all the prompts they've crafted, showcasing their contributions to the community.

- **🌍 Explore Fellow Creators**: Check out other users' profiles to see the fantastic prompts they've shared, building a vibrant community of creators.

- **📋 Copy to Clipboard**: Instantly copy AI prompts with a handy "Copy to Clipboard" feature, making it a breeze to save ideas for later use.

- **🏷️ Tag-Based Prompt Search**: Effortlessly find prompts related to specific topics by searching through designated tags, simplifying your quest for inspiration.

- **🔐 Secure Google Authentication**: Enjoy a seamless and secure login experience with Google authentication powered by NextAuth, keeping your account safe.

- **📱 Fully Responsive Design**: Whether on a desktop or a smartphone, Promptopia ensures a fantastic user experience on all devices.

- **🛠️ Clean Code Architecture & Reusability**: Built with an emphasis on maintainable code architecture and reusability, making it easy to enhance and expand in the future.

## Screenshots

### Home Page
![Home Page](Screenshot%202024-10-08%20190241.png)

### Profile Page
![Profile Page](Screenshot%202024-10-08%20190313.png)

🤸 **Quick Start**  
Get your project up and running locally by following these steps:

### Prerequisites
Before you start, ensure you have the following installed on your machine:

- **Git**
- **Node.js**
- **npm** (Node Package Manager)

### Cloning the Repository
First, clone the repository to your local machine:

```bash
git clone https://github.com/chandanmaheshwari753/Promptopia.git
```

### Installation
Next, install the project dependencies using npm:

```bash
npm install
```

### Set Up Environment Variables
Create a new file named `.env` in the root of your project and add the following content:

```plaintext
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_URL_INTERNAL=http://localhost:3000
NEXTAUTH_SECRET=
GOOGLE_ID=
GOOGLE_CLIENT_SECRET=
MONGODB_URI=
```

Make sure to replace the placeholder values with your actual credentials. You can obtain these credentials by signing up on the corresponding websites like Google Cloud Console, Cryptpool (for a random Auth Secret), and MongoDB.

### Running the Project
Finally, start the project with:

```bash
npm run dev
```

Open your browser and go to **http://localhost:3000** to see your project in action!


