

export function usersToObject(usersString) {
  return usersString.toLowerCase().split(" ")
    .reduce((acc, cur) =>
      (acc[cur] = cur.charAt(0).toUpperCase() + cur.slice(1), acc), {});
}

// sample output: { ollie: 'Ollie', james: 'James', kevin: 'Kevin' }



