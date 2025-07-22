# React Native Task Manager
## Project Overview
A mobile task management application built with React Native and Expo, featuring a clean and intuitive interface for managing daily tasks. The app utilizes Redux for state management and TypeScript for type safety.

### Key Features
- Create tasks with title and description
- Mark tasks as complete/incomplete
- Remove tasks
- Real-time task list updates
- Clean and responsive UI
## Technology Stack
- React Native
- Expo Framework
- TypeScript
- Redux & React-Redux for state management
- Redux Thunk for async actions
- React Navigation for routing
- Expo Router for file-based routing
## Prerequisites
- Node.js (Latest LTS version recommended)
- npm or yarn package manager
- Expo CLI
- iOS Simulator (for Mac users) or Android Studio (for Android development)
## Installation
1. 1.
   Clone the repository:
```
git clone <repository-url>
```
2. 1.
   Navigate to the project directory:
```
cd task-manager
```
3. 1.
   Install dependencies:
```
npm install
```
4. 1.
   Start the development server:
```
npx expo start
```
## Usage
After starting the development server, you can:

- Press 'a' to open in Android emulator
- Press 'i' to open in iOS simulator
- Scan the QR code with Expo Go app on your physical device
### Development
The main application code is organized as follows:

- /app - Main application screens and components
- /src/store - Redux store configuration
  - /actions - Redux actions
  - /reducers - Redux reducers
  - /types - TypeScript type definitions
## Environment Variables
This project doesn't require any environment variables (.env) for basic functionality. All configurations are managed through app.json and package.json .

## Contributing
1. 1.
   Fork the repository
2. 2.
   Create your feature branch ( git checkout -b feature/AmazingFeature )
3. 3.
   Commit your changes ( git commit -m 'Add some AmazingFeature' )
4. 4.
   Push to the branch ( git push origin feature/AmazingFeature )
5. 5.
   Open a Pull Request
## License
This project is open source and available under the MIT License.

## Support
For support, please open an issue in the repository's issue tracker.