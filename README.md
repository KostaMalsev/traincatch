# Traincatch

This application helps users identify the next available train from Tel Aviv HaShalom to BeerSheva University.

## Overview

The application fetches real-time data from the Israel Railways API and processes it to determine the next relevant trains. The criteria include:

- Trains that are direct (i.e., do not stop at Ashkelon).
- Trains that depart within a specific time frame.

### Files in the Repository

1. **index.html**

```html
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width,height=device-height,user-scalable=no,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0">
    <meta charset="utf-8">
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <div class="debug dialog"></div>
    <script src="main.js"></script>
  </body>
</html>
```

- Structure of the main webpage, including the styling sheet and JavaScript functionalities.

2. **styles.css**

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

input[type="file"] {
  display: none;
}

.button-wrapper {
  display: flex;
  grid-gap: 15px;
}

.hidden {
  display: none !important;
}

.button {
  text-decoration: none;
  padding: 10px 24px;
  border-radius: 3px;
  background-color: #00af9c;
  font-size: 14px;
  text-transform: uppercase;
  cursor: pointer;
  display: inline-block;
  color: #131c21;
}

.dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #323739;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  z-index: 10000;
  will-change: transform;
}

.dialog.visible {
  pointer-events: auto;
  transform: none;
}

.dialog .title {
  color: #f1f1f2e0;
  font-size: 50px;
  margin-bottom: 15px;
  font-weight: 500;
}

.dialog .subtitle {
  color: #a6a8aa;
  font-size: 50px;
  line-height: 20px;
  max-width: 200px;
  text-align: center;
}
```

- Contains basic styling for the webpage including button styles, dialog box styles, etc.

### Usage

To run the project, simply open the index.html file in your browser. The JavaScript code will execute and display relevant train information dynamically.