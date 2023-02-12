/**
 * Is bracket nesting correct.
 * @param {string} str 
 * @param {Array<Array<string>>} bracketsConfig 
 * @returns {boolean} 
 */
function check(str, bracketsConfig)
{
  const stack = []
  const config = Object.fromEntries(bracketsConfig)

  for (const bracket of str)
    if (bracket === config[stack[stack.length - 1]]) stack.pop()
    else if (bracket in config) stack.push(bracket)
    else return false

  return !stack.length;
}

module.exports = check