# Welcome to TubeFlix

Welcome to TubeFlix, a video streaming platform built using React, Tailwind CSS, and YouTube's public API. TubeFlix lets you enjoy your favorite videos in a user-friendly interface, free from distractions. Experience seamless video playback, easy video discovery, and a straightforward user interface. Dive in today and explore a vast world of video content at your fingertips!

## Features 📋
- **Browse Videos**: Use the left navigation bar to explore video categories.
- **Search Functionality**: Find videos effortlessly using the search bar.
- **Full Video Controls**: Enjoy a viewing experience just like on YouTube.
- **Video Suggestions**: Receive suggested videos during playback.
- **Connection Interruption Notifications**: A beautiful UI alerts you when your internet connection is interrupted.
- **Seamless Reconnection**: Automatically redirects back to the video page upon internet connection resumption.
- **Responsive Design**: Ensures compatibility across all devices.
- **Shimmer UI Effect**: Adds eye-catching animations during content loading, enhancing the visual appeal.
- **Light and Dark Mode**: Matches the browser's theme preference automatically with an option to toggle at any time.

## Pages 📚
- **Home**: Main landing page of TubeFlix.
- **Video**: Individual video playback page.
- **Search Result**: Displays search results.

## Frameworks & Libraries 🛠️
- **ReactJS**
- **Tailwind CSS**
- **tailwindcss/line-clamp**
- **react-router-dom**
- **axios**
- **js-abbreviation-number**
- **moment**
- **react-icons**
- **react-player**

## Usage 🍕
Follow these steps to get TubeFlix running on your local machine:

1. **Clone the Repository**: Clone the TubeFlix GitHub repository to your local system.
2. **Install Dependencies**: Run `npm install` in the terminal within the project directory to install the required dependencies.
3. **Get API Key**:
   - Visit the Rapid API website.
   - Search for "youtube" and select the API named "YouTube" — ensure it's freemium and verified.
   - Subscribe to this API and copy the API key.
4. **Set Up Environment**:
   - Create a `.env` file in the project root directory.
   - Add your YouTube API key with the variable `REACT_APP_YOUTUBE_API_KEY=<your-api-key>`.
5. **Start the Development Server**: Use `npm start` to launch the development server.
6. **Open Your Browser**: Navigate to `http://localhost:3000` to view the application.

⭐ **Star this repo on GitHub** — your support helps!
