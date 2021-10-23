import fs from 'fs';

const matches = fs
  .readFileSync('football.csv', { encoding: 'utf-8' })
  .split('\n')
  .map((row: string): string[] => row.split(','))

let manUnitedWins = 0;

// match result enum
// enums can only hold strings or numbers!
// just a collection of closely related values
// also creates a new type
// eg you can create a function that returns type MatchResult now
enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D'
}

for (let match of matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) manUnitedWins++;
  else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) manUnitedWins++;
}

console.log(matches);
console.log(manUnitedWins);

