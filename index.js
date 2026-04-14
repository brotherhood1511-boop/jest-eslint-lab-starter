
// Utility Functions

/**
 * Capitalizes the first letter of each word in the input string.
 * @param {string} input - The input string.
 * @returns {string} - The formatted string.
 */
function capitalizeWords(input) {
    return input.replace(/\b\w/g, char => char.toUpperCase());
}

/**
 * Filters active users from the array.
 * @param {Array} users - An array of user objects.
 * @returns {Array} - An array of active user objects.
 */
function filterActiveUsers(users) {
    return users.filter(user => user.isActive);
}

/**
 * Logs an action performed by a user with a timestamp.
 * @param {string} action - The action performed.
 * @param {string} username - The name of the user.
 * @returns {string} - The log message.
 */
function logAction(action, username) {
    const timestamp = new Date().toISOString();
    return `User ${username} performed ${action} at ${timestamp}`;
}

module.exports = { capitalizeWords, filterActiveUsers, logAction };

describe('capitalizeWords', () => {
test('capitalizes normal sentence', () => {
expect(capitalizeWords('hello world')).toBe('Hello World');
});

test('handles empty string', () => {
expect(capitalizeWords('')).toBe('');
});

test('handles single word', () => {
expect(capitalizeWords('hello')).toBe('Hello');
});

test('handles special characters', () => {
expect(capitalizeWords('hello-world')).toBe('Hello-World');
});
});

describe('filterActiveUsers', () => {
test('filters active users', () => {
const users = [
{ name: 'A', isActive: true },
{ name: 'B', isActive: false }
];

expect(filterActiveUsers(users)).toEqual([
{ name: 'A', isActive: true }
]);
});

test('all inactive users', () => {
const users = [
{ name: 'A', isActive: false }
];

expect(filterActiveUsers(users)).toEqual([]);
});

test('empty array', () => {
expect(filterActiveUsers([])).toEqual([]);
});
});
describe('logAction', () => {
test('returns correct log format', () => {
const result = logAction('login', 'DJ');
expect(result).toContain('User DJ performed login at');
});

test('handles empty inputs', () => {
const result = logAction('', '');
expect(result).toContain('User  performed  at');
});
});