import { escape, unescape } from "../utility/escape";

let text = escape("Curly, Larry & Moe");
let text_unscape = unescape(text);

console.log(text);
console.log(text_unscape);
