import { Header } from './app/header';
import { Footer } from './app/footer';

let header = new Header();
let firstHeading = header.getFirstHeading();
console.log(firstHeading);

let footer = new Footer();
let footerText = footer.getFooterText();

// CONSOLE LOGS
console.log('This is index JS');
console.log(footerText);
