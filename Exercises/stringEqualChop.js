
/* Write a JavaScript function to chop a string into chunks of a given length.
That ~~(double tilde) is a double NOT bitwise operator.

Test Data:
console.log(string_chop('w3resource'));
console.log(string_chop('w3resource',2));
console.log(string_chop('w3resource',3));
["w3resource"]
["w3", "re", "so", "ur", "ce"]
["w3r", "eso", "urc", "e"] */

string_chop = function (str, size) {
    if(str == null) return [];
    str = String(str);
    size = ~~size;
    return size > 0 ? str.match(new RegExp('.{1,'+size+'}', 'g')):[str];
}
console.log(string_chop('1helloJavascript',7.50));
console.log(string_chop('1helloJavascript'));
console.log(string_chop('*1Javascript000',2.5));
console.log(string_chop(123456987, 2));