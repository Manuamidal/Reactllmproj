# Code Explanation Tool

A web application that uses AI to explain code snippets in multiple programming languages.

## Features

- **Multi-language Support**: Explain code in Python, JavaScript, and Java
- **Real-time Processing**: Get instant explanations for your code
- **Clean UI**: User-friendly interface built with React and Tailwind CSS
- **Server-side Processing**: Secure API calls using Next.js Server Actions

## Project Structure

```
rellmproj/
├── src/
│   ├── components/
│   │   ├── forms/
│   │   │   └── CodeExForm.jsx      # Main form component
│   │   ├── CodeExplaination.jsx    # Display explanations
│   │   └── Error.jsx               # Error display component
│   └── actions/
│       └── index.js                # Server action for code explanation
└── README.md
```

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables in `.env.local`:
   ```
   VITE_API_BASE_URL=your_api_url_here
   ```

## Usage

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and navigate to the application
3. Select a programming language from the dropdown
4. Paste your code in the textarea
5. Click "Explain Code" to get an explanation

## Technologies Used

- **React** - UI framework
- **Next.js** - Server-side rendering and API routes
- **Tailwind CSS** - Styling
- **Server Actions** - Secure server-side operations

## Security

- Uses Content Security Policy (CSP) compliant code (no eval)
- Server-side processing for code explanations
- Secure API calls with proper error handling
