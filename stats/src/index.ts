import { CsvFileReader } from './CsvFileReader';

const reader = new CsvFileReader('football.csv');

reader.read();

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

for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) manUnitedWins++;
  else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) manUnitedWins++;
}

console.log(manUnitedWins);

