/**
 * Is bracket nesting correct.
 * @param {string} str 
 * @param {[string[]]} config 
 * @returns {boolean} 
 */
function check(str, config)
{
  if (str.length % 2) return false

  const stack = []
  stack.peek = function () { return this[this.length - 1] }
  config = Object.fromEntries(config)

  for (const bracket of str)
    if (bracket === config[stack.peek()]) stack.pop()
    else if (bracket in config) stack.push(bracket)
    else return false

  return !stack.length;
}

module.exports = check