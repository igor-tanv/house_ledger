/*
input: 'matt:30 john:70'
output: { matt: '30', john: '70' }
*/

export function userShareObj(shares) {
  return shares.replace(/[,.;]/g, '')
    .replace(/\s\s+/g, ' ')
    .split(' ')
    .reduce((acc, cur) =>
      (acc[cur.split(':')[0]] = parseInt(cur.split(':')[1]), acc), {});
}