import fs from 'fs';

// abstract classes are never used with the 'new' keyword to instantiate an object
export abstract class CsvFileReader<T> {
  data: T[] = [];

  constructor(public filename: string) {}

  // abstract methods are implemented by the child class
  abstract mapRow(row: string[]): T;

  read():void {
    this.data = fs
    .readFileSync(this.filename, { encoding: 'utf-8' })
    .split('\n')
    .map((row: string): string[] => row.split(','))
    .map(this.mapRow)
  }
}