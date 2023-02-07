/* const config1 = [['(', ')']];
const config2 = [['(', ')'], ['[', ']']];
const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
const config4 = [['|', '|']];
const config5 = [['(', ')'], ['|', '|']];
const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']]; */

/**
 * Is bracket nesting correct.
 * @param {string} str 
 * @param {Array<Array<string>>} bracketsConfig 
 * @returns {boolean} 
 */
function check(str, bracketsConfig)
{
  const stack = []

  // Read config
  const [opens, closes] = bracketsConfig.reduce(([openList, closeList], [open, close]) => ([{ ...openList, [open]: close }, { ...closeList, [close]: open }]), [{}, {}])

  // Check nesting
  const isOpen = (bracket) => bracket in opens
  const isClose = (bracket) => bracket in closes
  const isRequired = (bracket) => opens[stack[stack.length - 1]] === bracket        // Is current bracket closes previous

  for (const bracket of str)
    if (isOpen(bracket))
      if (isClose(bracket)) isRequired(bracket) ? stack.pop() : stack.push(bracket) // If bracket is from "twins" pair. Example: ["|", "|"]
      else stack.push(bracket)                                                      // If bracket is just open 
    else if (isClose(bracket) && isRequired(bracket)) stack.pop()                   // If bracket is closing and correct
    else return false

  return !stack.length;
}

/* console.log(check("([{}])",config3)) */
/* console.log(check('|()|', config5)) */

module.exports = check