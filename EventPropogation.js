// <!DOCTYPE html>
// <html>

// <head>
//     <title>DOM Manipulation</title>
//     <style>
//         body * {
//             margin: 10px;
//             border: 2px solid red
//         }
//     </style>

// </head>

// <body>
    
//     <h1 class="first" onclick="alert('this is the first heading!')">Somethiing</h1>
//     <h1 class="second">Document Object Model</h1>
//     <p id="para"> Lets Learn more about DOM manipulation here..</p> -->
//     <div style="background-color: yellow;">
//         <div style="background-color: yellowgreen;" id="innerDiv">
//             <h3 style="background-color: green;">Inner Heading</h3>
//         </div>
//     </div>

//     <script src="dom.js"> </script>

// </body>

// </html>
// js file


//Event Propogation

//Bubbling
document
  .querySelector('h3')
  .addEventListener('click', (event) => {
    event.stopPropagation();
    console.log('Heading 3 Clicked');
  });

document
  .getElementById('innerDiv')
  .addEventListener('click', () =>
    console.log('Inner Div Clicked'),true
  );

document
  .getElementsByTagName('div')[0]
  .addEventListener('click', () =>
    console.log('Outer div Clicked'),true
  );
document.body.addEventListener('click', () =>
  console.log('Body Clicked'),true
);
