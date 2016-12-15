 /* Flat color palette (full) downloaded from
 *  http://htmlcolorcodes.com/color-charts/
 *
 *  Check out our powerful color picker
 *  http://htmlcolorcodes.com/color-picker/
 *
 *  Want to learn more about colors in SCSS?
 *  http://htmlcolorcodes.com/tutorials/
 *
 *  - - - - - - - - - - - - - - - - - -
 *  Credits:
 *
 *  Original color palette by
 *  http://designmodo.github.io/Flat-UI/
 *
 *  - - - - - - - - - - - - - - - - - -
 *  How to use:
 *
 *  Include this file with your stylesheets
 *  in the <head> of your HTML file:
 *
 *  <head>
 *    ...
 *    <link href="path/to/css/flat_colors_full.css" rel="stylesheet">
 *    ...
 *  </head>
 *
 *  and in the body of your HTML you can style
 *  any element using a class:
 *
 *  <body>
 *    ...
 *    <h1 class="turquoise-500">Your Colored Title</h1>
 *    ...
 *  </body>
 *
 *  - - - - - - - - - - - - - - - - - -
 *  Note:
 *
 *  .color and .color-500 are the same', simply there
 *  for your convenience.
 */

// var colors = [
// /* Turquoise */

//    ['#e8f8f5',
//    '#d1f2eb',
//    '#a3e4d7',
//    '#76d7c4',
//    '#48c9b0',
//    '#1abc9c',
//    '#17a589',
//    '#148f77',
//    '#117864',
//    '#0e6251'],

// /* Green Sea */

//     ['#e8f6f3',
//     '#d0ece7',
//     '#a2d9ce',
//     '#73c6b6',
//     '#45b39d',
//     '#16a085',
//     '#138d75',
//     '#117a65',
//     '#0e6655',
//     '#0b5345'],

// /* Emerald */

//    ['#eafaf1',
//     '#d5f5e3',
//     '#abebc6',
//     '#82e0aa',
//     '#58d68d',
//     '#2ecc71',
//     '#28b463',
//     '#239b56',
//     '#1d8348',
//     '#186a3b'],

// /* Nephritis */
//    ['#e9f7ef',
//     '#d4efdf',
//     '#a9dfbf',
//     '#7dcea0',
//     '#52be80',
//     '#27ae60',
//     '#229954',
//     '#1e8449',
//     '#196f3d',
//     '#145a32'],

// /* Peter River */

//      ['#ebf5fb',
//      '#d6eaf8',
//      '#aed6f1',
//      '#85c1e9',
//      '#5dade2',
//      '#3498db',
//      '#2e86c1',
//      '#2874a6',
//      '#21618c',
//      '#1b4f72'],

// /* Belize Hole */
//     ['#eaf2f8',
//     '#d4e6f1',
//     '#a9cce3',
//     '#7fb3d5',
//     '#5499c7',
//     '#2980b9',
//     '#2471a3',
//     '#1f618d',
//     '#1a5276',
//     '#154360'],

// /* Amethyst */

//    ['#f5eef8',
//    '#ebdef0',
//    '#d7bde2',
//    '#c39bd3',
//    '#af7ac5',
//    '#9b59b6',
//    '#884ea0',
//    '#76448a',
//    '#633974',
//    '#512e5f'],

// /* Wisteria */

//    ['#f4ecf7',
//    '#e8daef',
//    '#d2b4de',
//    '#bb8fce',
//    '#a569bd',
//    '#8e44ad',
//    '#7d3c98',
//    '#6c3483',
//    '#5b2c6f',
//    '#4a235a'],

// /* Sunflower */

//     ['#fef9e7',
//     '#fcf3cf',
//     '#f9e79f',
//     '#f7dc6f',
//     '#f4d03f',
//     '#f1c40f',
//     '#d4ac0d',
//     '#b7950b',
//     '#9a7d0a',
//     '#7d6608'],

// /* Orange */

//    ['#fef5e7',
//    '#fdebd0',
//    '#fad7a0',
//    '#f8c471',
//    '#f5b041',
//    '#f39c12',
//    '#d68910',
//    '#b9770e',
//    '#9c640c',
//    '#7e5109'],

// /* Carrot */

//    ['#fdf2e9',
//    '#fae5d3',
//    '#f5cba7',
//    '#f0b27a',
//    '#eb984e',
//    '#e67e22',
//    '#ca6f1e',
//    '#af601a',
//    '#935116',
//    '#784212'],

// /* Pumpkin */

//     ['#fbeee6',
//     '#f6ddcc',
//     '#edbb99',
//     '#e59866',
//     '#dc7633',
//     '#d35400',
//     '#ba4a00',
//     '#a04000',
//     '#873600',
//     '#6e2c00'],

// /* Alizarin */

//     ['#fdedec',
//     '#fadbd8',
//     '#f5b7b1',
//     '#f1948a',
//     '#ec7063',
//     '#e74c3c',
//     '#cb4335',
//     '#b03a2e',
//     '#943126',
//     '#78281f'],

// /* Pomegranate */

//     ['#f9ebea',
//     '#f2d7d5',
//     '#e6b0aa',
//     '#d98880',
//     '#cd6155',
//     '#c0392b',
//     '#a93226',
//     '#922b21',
//     '#7b241c',
//     '#641e16'],

// /* Clouds */

//     ['#fdfefe',
//     '#fbfcfc',
//     '#f7f9f9',
//     '#f4f6f7',
//     '#f0f3f4',
//     '#ecf0f1',
//     '#d0d3d4',
//     '#b3b6b7',
//     '#979a9a',
//     '#7b7d7d'],

// /* Silver */

//     ['#f8f9f9',
//     '#f2f3f4',
//     '#e5e7e9',
//     '#d7dbdd',
//     '#cacfd2',
//     '#bdc3c7',
//     '#a6acaf',
//     '#909497',
//     '#797d7f',
//     '#626567'],

// /* Concrete */

//     ['#f4f6f6',
//     '#eaeded',
//     '#d5dbdb',
//     '#bfc9ca',
//     '#aab7b8',
//     '#95a5a6',
//     '#839192',
//     '#717d7e',
//     '#5f6a6a',
//     '#4d5656'],

// /* Asbestos */
//     ['#f2f4f4',
//     '#e5e8e8',
//     '#ccd1d1',
//     '#b2babb',
//     '#99a3a4',
//     '#7f8c8d',
//     '#707b7c',
//     '#616a6b',
//     '#515a5a',
//     '#424949'],


//     /* Wet Asphalt */
//     ['#ebedef',
//     '#d6dbdf',
//     '#aeb6bf',
//     '#85929e',
//     '#5d6d7e',
//     '#34495e',
//     '#2e4053',
//     '#283747',
//     '#212f3c',
//     '#1b2631'],

// /* Midnight Blue */
//     ['#eaecee',
//     '#d5d8dc',
//     '#abb2b9',
//     '#808b96',
//     '#566573',
//     '#2c3e50',
//     '#273746',
//     '#212f3d',
//     '#1c2833',
//     '#17202a']
// ];
// // console.log(colors);


var transposed = [ [ '#e8f8f5',
    '#e8f6f3',
    '#eafaf1',
    '#e9f7ef',
    '#ebf5fb',
    '#eaf2f8',
    '#f5eef8',
    '#f4ecf7',
    '#fef9e7',
    '#fef5e7',
    '#fdf2e9',
    '#fbeee6',
    '#fdedec',
    '#f9ebea',
    '#fdfefe',
    '#f8f9f9',
    '#f4f6f6',
    '#f2f4f4',
    '#ebedef',
    '#eaecee' ],
  [ '#d1f2eb',
    '#d0ece7',
    '#d5f5e3',
    '#d4efdf',
    '#d6eaf8',
    '#d4e6f1',
    '#ebdef0',
    '#e8daef',
    '#fcf3cf',
    '#fdebd0',
    '#fae5d3',
    '#f6ddcc',
    '#fadbd8',
    '#f2d7d5',
    '#fbfcfc',
    '#f2f3f4',
    '#eaeded',
    '#e5e8e8',
    '#d6dbdf',
    '#d5d8dc' ],
  [ '#a3e4d7',
    '#a2d9ce',
    '#abebc6',
    '#a9dfbf',
    '#aed6f1',
    '#a9cce3',
    '#d7bde2',
    '#d2b4de',
    '#f9e79f',
    '#fad7a0',
    '#f5cba7',
    '#edbb99',
    '#f5b7b1',
    '#e6b0aa',
    '#f7f9f9',
    '#e5e7e9',
    '#d5dbdb',
    '#ccd1d1',
    '#aeb6bf',
    '#abb2b9' ],
  [ '#76d7c4',
    '#73c6b6',
    '#82e0aa',
    '#7dcea0',
    '#85c1e9',
    '#7fb3d5',
    '#c39bd3',
    '#bb8fce',
    '#f7dc6f',
    '#f8c471',
    '#f0b27a',
    '#e59866',
    '#f1948a',
    '#d98880',
    '#f4f6f7',
    '#d7dbdd',
    '#bfc9ca',
    '#b2babb',
    '#85929e',
    '#808b96' ],
  [ '#48c9b0',
    '#45b39d',
    '#58d68d',
    '#52be80',
    '#5dade2',
    '#5499c7',
    '#af7ac5',
    '#a569bd',
    '#f4d03f',
    '#f5b041',
    '#eb984e',
    '#dc7633',
    '#ec7063',
    '#cd6155',
    '#f0f3f4',
    '#cacfd2',
    '#aab7b8',
    '#99a3a4',
    '#5d6d7e',
    '#566573' ],
  [ '#1abc9c',
    '#16a085',
    '#2ecc71',
    '#27ae60',
    '#3498db',
    '#2980b9',
    '#9b59b6',
    '#8e44ad',
    '#f1c40f',
    '#f39c12',
    '#e67e22',
    '#d35400',
    '#e74c3c',
    '#c0392b',
    '#ecf0f1',
    '#bdc3c7',
    '#95a5a6',
    '#7f8c8d',
    '#34495e',
    '#2c3e50' ],
  [ '#17a589',
    '#138d75',
    '#28b463',
    '#229954',
    '#2e86c1',
    '#2471a3',
    '#884ea0',
    '#7d3c98',
    '#d4ac0d',
    '#d68910',
    '#ca6f1e',
    '#ba4a00',
    '#cb4335',
    '#a93226',
    '#d0d3d4',
    '#a6acaf',
    '#839192',
    '#707b7c',
    '#2e4053',
    '#273746' ],
  [ '#148f77',
    '#117a65',
    '#239b56',
    '#1e8449',
    '#2874a6',
    '#1f618d',
    '#76448a',
    '#6c3483',
    '#b7950b',
    '#b9770e',
    '#af601a',
    '#a04000',
    '#b03a2e',
    '#922b21',
    '#b3b6b7',
    '#909497',
    '#717d7e',
    '#616a6b',
    '#283747',
    '#212f3d' ],
  [ '#117864',
    '#0e6655',
    '#1d8348',
    '#196f3d',
    '#21618c',
    '#1a5276',
    '#633974',
    '#5b2c6f',
    '#9a7d0a',
    '#9c640c',
    '#935116',
    '#873600',
    '#943126',
    '#7b241c',
    '#979a9a',
    '#797d7f',
    '#5f6a6a',
    '#515a5a',
    '#212f3c',
    '#1c2833' ],
  [ '#0e6251',
    '#0b5345',
    '#186a3b',
    '#145a32',
    '#1b4f72',
    '#154360',
    '#512e5f',
    '#4a235a',
    '#7d6608',
    '#7e5109',
    '#784212',
    '#6e2c00',
    '#78281f',
    '#641e16',
    '#7b7d7d',
    '#626567',
    '#4d5656',
    '#424949',
    '#1b2631',
    '#17202a' ] ]

// var transposed = transpose(colors);
// console.log(transpose(colors));
module.exports = transposed;

/*  Want more? Check our our other color palettes at
 *  http://htmlcolorcodes.com/color-charts/
 */
