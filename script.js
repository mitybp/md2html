import MarkdownIt from "./node_modules/markdown-it";
var md = new MarkdownIt();
var result = md.render('# markdown-it rulezz!');

console.log(result)