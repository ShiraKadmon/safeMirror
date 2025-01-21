# SafeMirror – Empowering Teen Girls

SafeMirror is a web-based application designed to empower young girls by providing practical tools to navigate social media, promote body image positivity, and create safe online spaces.
Developed as part of the BESAFE Hackathon 2025 organized by AppsFlyer in collaboration with QueenB, SafeMirror aims to support teens in handling the challenges of social media, encouraging self-love and mental well-being.

## Introduction
This project includes the development of a platform that provides a range of features, including an educational bot powered by the GEMINI API, a positive quiz, and a supportive forum. The application is aimed at helping young girls foster a positive self-image, enhance their well-being, and navigate social media in a safe, empowering way.
### Key Features:
Age-tailored user experience: Designed with expert advice from נשים לגופן, offering educational and empowering experiences for teens.
Interactive educational bot: Provides personalized support through the GEMINI API.
Positive WhatsApp notifications: Sends daily reminders promoting self-compassion and inspiration.
Empowering quiz: A self-reflective quiz to boost confidence and personal growth, powered by the GEMINI API.
Anonymous forum: A safe space for users to share experiences and connect.
Professional content & support pages: Featuring expert resources, social media profiles of inspiring women, and motivational content.

## Technologies Used:
Backend: Node.js, Express
Frontend: React, Vite
Database: MongoDB
Bot Integration: GEMINI API (used for bot and quiz features)
WhatsApp Notifications: Ultramsg API

## Future Enhancements:
Mobile Application: Development of a mobile app version for improved accessibility.
Cloud Infrastructure: Moving to a global cloud infrastructure to support external users and persistent WhatsApp notifications.
Advanced GEMINI Account: Leveraging deep learning techniques to enhance bot capabilities and further personalize user experiences.
User Permissions: Future integration of Frontegg for advanced user management and moderation.
Google Login: Adding a Google login option for user convenience.
Forum Pagination: Implementing pagination for forum scalability.

## Project Structure:
Client Directory (client/): Contains the React application, including assets, components, and services.
Server Directory (server/): The Express backend handling API requests and serving data.

## Introduction
This template includes a simple feature to display a random rubber duck from example READ ONLY database. 
This feature demonstrates the integration of the frontend with the backend and can be used to test if your setup is working correctly.

1. Client:
   - The home page contains a button labeled `Show Random Duck`.
   - When clicked, this button sends a request to the backend to fetch a random rubber duck.
   - The details of the random rubber duck, including its name and image, are displayed on the page.
2. Backend:
   - The server has an endpoint `/api/rubberDucks/random` that selects a random rubber duck from the database and returns its details in the response.
   - The server contains more endpoints, but without corresponding implementation in the client. These endpoints are to set example of more types of requests.
