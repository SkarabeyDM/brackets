/**
 * Is bracket nesting correct.
 * @param {string} str 
 * @param {[[string]]} config 
 * @returns {boolean} 
 */
function check(str, config)
{
  const stack = []
  config = Object.fromEntries(config)

  for (const bracket of str)
    if (bracket === config[stack[stack.length - 1]]) stack.pop()
    else if (bracket in config) stack.push(bracket)
    else return false

  return !stack.length;
}

module.exports = check