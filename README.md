# Movie App React Project
This is a simple movie app built using React. The main objective of this project is to learn and practice React concepts like components, props, state, and hooks while building a functional app. You can view the page [here, Press home button after u see the page](https://shashank-m-n.github.io/Movie-App-React/). (Note: The site might be taken down in the future.)

## Features
- Search for movies using an input field.
- View a list of movies with thumbnails.
- Mark movies as favorites.
- Navigate between "Home" and "Favorites" pages.

## Project Structure
The project is organized as follows:

```
Movie-App-React-Project
|
|-- public/          
|
|-- src/             # Source code
|   |-- assets/      
|   |-- components/  
|   |-- contexts/    
|   |-- css/         
|   |-- pages/       
|   |-- services/    
|   |-- App.jsx      
|   |-- main.jsx     # Entry point for the app
|
|-- .gitignore       
|-- package.json     
|-- README.md        
|-- vite.config.js   
```

## How to Use

### Prerequisites
- Make sure you have [Node.js](https://nodejs.org/) installed on your computer.
- Install a package manager like `npm` (comes with Node.js) or `yarn`.

### Steps to Run the Project
1. Clone the repository:
   ```bash
   git clone https://github.com/Shashank-M-N/Movie-App-React.git
   ```
2. Navigate into the project directory:
   ```bash
   cd Movie-App-React-Project
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and go to `http://localhost:5173` (or the URL displayed in the terminal).

### Additional Scripts
- **Build the project:**
  ```bash
  npm run build
  ```
- **Preview the production build:**
  ```bash
  npm run preview
  ```

## Technologies Used
- **React**: For building the user interface.
- **Vite**: As the build tool for faster development.
- **CSS**: For styling the components.
- **TMDB API**: For fetching movie data dynamically.

## Notes
- This project is not intended for production use. It is a personal project for learning React.
- The movie data is fetched from the TMDB API.

## Future Improvements
- Add more detailed movie information on click.
