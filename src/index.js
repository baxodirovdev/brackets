module.exports = function check(str, bracketsConfig) {
 const parsedBracketConfig = bracketsConfig.map((r) => {
        return `${r[0]}${r[1]}`;
    });

    let prevLength = str.length;

    while (str !== "") {
        parsedBracketConfig.forEach((r) => {
            str = str.replace(r, "");
        });

        if(prevLength === str.length){
          return false
        }

        prevLength = str.length
    }
    return true
}
