// JS
import { Header } from './app/header';
import { Footer } from './app/footer';

// styles
import '../src/style.css';
import './styles/scss/main.scss';

// images
// This line is not need once copy-webpack is being used
// https://github.com/webpack-contrib/copy-webpack-plugin
// import webpackgif from './assets/images/webpack.gif';

let header = new Header();
let firstHeading = header.getFirstHeading();

let footer = new Footer();
let footerText = footer.getFooterText();

// setting the source of img
// This line is not need once copy-webpack is being used
// https://github.com/webpack-contrib/copy-webpack-plugin
// document.getElementById('webpack-gif').setAttribute('src', webpackgif);

// CONSOLE LOGS
console.log('This is index JS');
console.log(firstHeading);
console.log(footerText);
