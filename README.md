# Game Show Buzzer

This program hosts a game show buzzer server for other devices to connect to via websockets. Users can buzz in from their devices and the host will be able to see who buzzed in and in what order. I made this app in a day because I like to host trivia nights with friends and needed a reliable way for people to buzz in to answer.

## Features

- Real-time buzzer system using WebSockets
- Host control panel to see buzz-in order and reset buzzers
- Plays buzzer sound on first buzz-in
- Network support for multiple devices
- Simple and responsive web interface

## How to Run

### Prerequisites

Make sure you have Node.js installed on your system.

### Installation

1. Clone or download this repository
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```

### Starting the Server

Run the following command in the project directory:

```bash
node main.js
```

The server will start on port 3000 and display network addresses for other devices to connect.

## Accessing the Application

Once the server is running, you can access the application through your web browser:

### Player/Contestant Interface

**URL:** `http://localhost:3000/`

- This is where participants connect to buzz in
- Players enter their name and click the buzzer button
- First player to buzz in will trigger the buzzer sound
- Other players will be blocked from buzzing until reset

### Host Control Panel

**URL:** `http://localhost:3000/host`

- This is the control interface for the game host
- Shows who buzzed in and in what order
- Displays real-time buzz-ins as they happen
- Has a "Reset" button to clear buzzers for the next question

### Network Access

Other devices on your network can connect using your computer's IP address instead of localhost:

- Player interface: `http://[YOUR-IP]:3000/`
- Host interface: `http://[YOUR-IP]:3000/host`

The server will display available IP addresses in the console when it starts.
