/*
input: 'ollie, james, kevin'
output: { ollie: 'Ollie', james: 'James', kevin: 'Kevin' }
*/

export function usersToObject(usersString) {
  console.log(usersString, 7)
  return usersString.replace(/,/g, '')
    .replace(/\s\s+/g, ' ')
    .toLowerCase()
    .split(" ")
    .reduce((acc, cur) =>
      (acc[cur] = cur.charAt(0).toUpperCase() + cur.slice(1), acc), {});
}




