const config1 = [['(', ')']];
const config2 = [['(', ')'], ['[', ']']];
const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
const config4 = [['|', '|']];
const config5 = [['(', ')'], ['|', '|']];
const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];

function check(str, bracketsConfig) {
  // Write config
  const bracketsTypes = new Set(["open", "close", "both"])
  let brackets = new Map()
  bracketsConfig.forEach((element, i) => {
    i++
    if ((element[1] === element[0])) {
      brackets.set(element[0], { num: i, type: "both" })
    } else {
      brackets.set(element[0], { num: i, type: "open" })
      brackets.set(element[1], { num: i, type: "close" })
    }
  });

  // Check nesting
  const stack = []

  for (let i = 0; i < str.length; i++) {
    const brkt = brackets.get(str[i]);
    const peek = stack[stack.length - 1]
    switch (brkt.type) {
      case "open": stack.push(brkt.num); break;
      case "close":
        if (peek === brkt.num) {
          stack.pop()
        }else return false
        break;
      case "both":
        if (peek === brkt.num)
          stack.pop()
        else
          stack.push(brkt.num)
    }
  }

  return Boolean(!stack.length)
}

//console.log(check("([{}])",config3))
console.log(check('[]()(', config2))

module.exports = check