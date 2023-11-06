# Elaine's Take-Home Assignment for Nintendo

For the purposes of this project, I created multiple custom components with custom styling based off of the image provided. The additional design flourishes I developed include some intuitive user experience features such as Read Less corresponding with Read More and the ability to edit text on screen (with a blinking animation).

The project is developed in ReactJS functional components, JavaScript, and CSS. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

I chose to use custom CSS for this project rather than a third party design libraries such as MaterialsUI for this project in order to showcase my CSS and design abilities, doing so also offers the most customization.

## Instructions

1. Make sure you have npm install if you don't you can use: https://docs.npmjs.com/.downloading-and-installing-node-js-and-npm
2. `npm install`
3. `npm start` to run the app
4. You should be able to access the app on localhost:3000 now!
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


### Custom Component Logic

The Architecture of the components is like so:
- CustomComponents
    - SearchBar
    - SideBar (different sections)
    - Modal
- Sections
    - SectionPage 
        - More CustomComponents here - EditableHeader, Buttons, etc.

Each component was developed and designed in a way to be modular and re-usable, for instance- the buttons have the ability to pass in a mode parameter describing the styling as "dark" or "light". All of the Search functionality including the Modal that pops up upon Search is self-contained within the SearchBar component. Because each component has a separation of concerns, within each SectionPage a developer or designer can choose what components should live on certain pages.

### Challenges

The most difficult component to develop was the SearchBar because of more complex logic to search through the pages, as well as requiring me to re-factor the way I served content to each section page. Originally, I had the Article copy directly within each section page as a variable (the way Title copy currently is) but in order to have search work more efficiently I refactored the article copy to come from a separate constants file.

I faced difficulties in determing the structure of the components, initially I wanted to minimize the amount of separate components I created in order to improve development speed. However, the more I developed the more I realized that creating custom components to address unique component requirements was the most intuitive and iterable design pattern. 

Taking the time to apply custom CSS onto every component to match the image design pattern took a while and used resources like (Lorem Ipsum image generator, @keyframes animation, image hex code selector) in order to match the initial design as closely as possible. Within the codebase, you can see when I initially used the index.css file to hold all the styling and then started to transition to separate stylesheets to make it more readable.


## Other Possible Stretch Goals

Due to time constraints, I chose to forgo additional complexity in the search bar. As a possible future add-on, I would add the ability to search by section vs. searching all the text. This requires a re-structure of the searchPages function I have. 

Re-factoring the content located in each page to live in ./constants.js so it's all in one place and easily editable is something that would also be helpful. All the content should be passed in via variable vs. strictly defined in the component.
