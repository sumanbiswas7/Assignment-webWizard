/**
 * Checks if an email address is valid.
 * A valid email address must meet the following criteria:
 * - Have a valid email format.
 *
 * @param {string} email - The email address to validate.
 * @returns {boolean} - Returns true if the email address is valid, false otherwise.
 */
export function isValidEmail(email: string): boolean {
  const pattern =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return pattern.test(email);
}
