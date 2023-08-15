#!/bin/bash

# Create main project directory
mkdir my-seat-booking-library
cd my-seat-booking-library

# Create source code directory
mkdir -p src/components
mkdir -p src/types
mkdir -p src/utils

# Create examples directory
mkdir examples

# Create documentation directory
mkdir docs

# Create test directory
mkdir test

# Create package.json
echo '{
  "name": "my-seat-booking-library",
  "version": "1.0.0",
  "description": "A React library for seat booking and reservation",
  "main": "src/index.ts",
  "scripts": {
    "start": "webpack --mode development",
    "build": "webpack --mode production",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Your Name",
  "license": "MIT",
  "devDependencies": {
    "webpack": "^5.0.0",
    "webpack-cli": "^4.0.0",
    "ts-loader": "^8.0.0",
    "typescript": "^4.0.0",
    "react": "^17.0.0",
    "react-dom": "^17.0.0"
  }
}' > package.json

# Create tsconfig.json
echo '{
  "compilerOptions": {
    "target": "ES6",
    "module": "CommonJS",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true
  }
}' > tsconfig.json

# Create webpack.config.js
echo 'const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  }
};' > webpack.config.js

# Create initial TypeScript files
touch src/index.ts
touch src/components/Seat.tsx
touch src/components/SeatRow.tsx
touch src/components/SeatMap.tsx
touch src/components/ReservationSummary.tsx
touch src/types/SeatData.ts
touch src/utils/ReservationManager.ts

# Create initial example files
touch examples/BasicExample.tsx
touch examples/AdvancedExample.tsx

# Create initial documentation file
touch docs/index.md

# Create initial test files
touch test/SeatMap.test.tsx
touch test/ReservationManager.test.ts

echo "Project structure has been set up!"

# Navigate back to the project root
cd ..
