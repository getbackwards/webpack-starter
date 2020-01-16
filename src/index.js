import { Header } from './app/header';
import { Footer } from './app/footer';

let header = new Header();
let firstHeading = header.getFirstHeading();

let footer = new Footer();
let footerText = footer.getFooterText();

// CONSOLE LOGS
console.log('This is index JS');
console.log(firstHeading);
console.log(footerText);
