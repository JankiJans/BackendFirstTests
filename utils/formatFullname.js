module.exports = (fullName) => {
  if(!fullName) return 'Error'
  if (typeof fullName !== 'string') return 'Error';

  const [firstName, lastName, ...extraNames] = fullName.split(' ');
  if (extraNames.length > 0 || !firstName || !lastName) return 'Error';
  
  return firstName[0].toUpperCase + firstName.slice(1).toLowerCase() + lastName[0].toUpperCase + lastName.slice(1).toLowerCase() ;
};
