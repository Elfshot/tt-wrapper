import { randomInt } from 'crypto';

/**
 * Picks a random item from an array
 * @param array The array to pick a random item from
 * @example
 * const randomEntry = pickRandom([1, 2, 3, 4]) // 1
 */

export function pickRandom<T>(array: readonly T[]): T {
  const { length } = array;
  return array[randomInt(length - 1)];
}

/**
 * Add commads to a number or string
 * @param num Numbers to commafy
 * @returns String with commas (100,000 format)
 */

export function addCommas(num: string | number): string {
  // return Math.round(typeof num === 'string'? parseFloat(num): num).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return Math.round(typeof num === 'string'? parseFloat(num) : num).toLocaleString('en-us');
}

/**
 * Format arrays or string
 * @param item Array or string to convert
 * @returns String in the format of 'This, Is, An, Example'
 */

export function lowerSpace(item: string[] | string): string {
  if (typeof(item) == 'string') item = [item];
  let string = '';
  item.forEach((value, index) => {
    string += `${index === 0?'':', '}${value.toLowerCase().replace(/(^.{1})/g, value[0].toUpperCase())}`;
  });
  return string;
}

/**
 * ms -> h, min, s
 * @param s ms
 * @returns time string
 */

export function msToTime(s: number): string {
  const ms = s % 1000;
  s = (s - ms) / 1000;
  const secs = s % 60;
  s = (s - secs) / 60;
  const mins = s % 60;
  const hrs = (s - mins) / 60;

  return `${hrs}h ${mins}m ${secs}s`;
}

/**
 * Shortens the long number to numbers like: 1.2Tril, 100Bil, 11Mil, 12.5K, 123
 * @param num Number to convert to short string
 * @param sign True to show a plus on positive numbers like: +100Mil (default - false)
 * @returns string
 */

export function shortenLargeMoney (num: number, sign = false): string {
  const absNum = Math.abs(num);
  let numString = String(absNum);
  if(absNum >= 1_000_000_000_000){
    numString = Number(Number(absNum / 1_000_000_000_000).toFixed(2)) + ' Tril';
  }else if(absNum >= 1_000_000_000){
    numString = Number(Number(absNum / 1_000_000_000).toFixed(2)) + ' Bil';
  }else if(absNum >= 1_000_000){
    numString = Number(Number(absNum / 1_000_000).toFixed(2)) + ' Mil';
  }else if(absNum >= 1_000){
    numString = Number(Number(absNum / 1_000).toFixed(2)) + 'k';
  }
  return (num === 0 ? '' : num < 0 ? '-' : (sign ? '+' : '')) + numString;
}

export function compareTwoStrings(first: string, second: string) {
  first = first.replace(/\s+/g, '');
  second = second.replace(/\s+/g, '');

  if (first === second) return 1; // identical or empty
  if (first.length < 2 || second.length < 2) return 0; // if either is a 0-letter or 1-letter string

  const firstBigrams = new Map();
  for (let i = 0; i < first.length - 1; i++) {
    const bigram = first.substring(i, i + 2);
    const count = firstBigrams.has(bigram)
      ? firstBigrams.get(bigram) + 1
      : 1;

    firstBigrams.set(bigram, count);
  }

  let intersectionSize = 0;
  for (let i = 0; i < second.length - 1; i++) {
    const bigram = second.substring(i, i + 2);
    const count = firstBigrams.has(bigram)
      ? firstBigrams.get(bigram)
      : 0;

    if (count > 0) {
      firstBigrams.set(bigram, count - 1);
      intersectionSize++;
    }
  }

  return (2.0 * intersectionSize) / (first.length + second.length - 2);
}

export function findBestMatch(mainString: string, targetStrings: string[], wholeArr = false) {
  const ratings = [];
  let bestMatchIndex = 0;

  for (let i = 0; i < targetStrings.length; i++) {
    const currentTargetString = targetStrings[i];
    const currentRating = compareTwoStrings(mainString, currentTargetString);
    ratings.push({ target: currentTargetString, rating: currentRating });
    if (currentRating > ratings[bestMatchIndex].rating) {
      bestMatchIndex = i;
    }
  }
	
  if (wholeArr) {
    ratings.sort((t1, t2) => t1.rating - t2.rating);
    return ratings;
  }
  
  return ratings[bestMatchIndex];
}

/**
 * Async delay function- pass ms wanted to delay
 * @param ms time to delay in ms
 * @returns empty promise
 */
export async function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


/**
 * Check is something is a JS object
 * @param item Item in question
 * @returns True/False
 */
export const isObject = (item: any) => {
  return (item && (typeof item === 'object') && (!Array.isArray(item)));
};

/**
 * Merge two objects together (Deep)
 * @param target will be overridden
 * @param sources will be that data that overwrites {target}
 * @returns merged object
 */
export function objectMerge(target: { [key: string]: any }, ...sources: { [key: string]: any }[]): { [key: string]: any } {
  if (!sources?.length) return target;
  const source = sources.shift();
  
  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, {
          [key]: {}
        });
        objectMerge(target[key], source[key]);
      } else {
        Object.assign(target, {
          [key]: source[key]
        });
      }
    }
  }
  
  return objectMerge(target, ...sources);
}

/**
 * Calculate Level from EXP
 * @param exp EXP
 * @returns {number} 
 */
export const calculateLevel = (exp: number) => {
  return Math.floor((Math.sqrt(1 + (8 * exp) / 5) - 1) / 2);
};

/**
 * Return boolean for a 1 in x chance
 * @param x denominator chance
 * @returns Boolean
 * @example 1 in 100 chance: chance(100)
*/
export function oneInXChance(x: number) {
  return Math.floor(Math.random() * x) === 0;
}

/**
 * Return a joinable tycoon link
 * @param int Server int 1-2; 1:main, 2:beta
 * @returns https joinable link.
 * @example getJoinLink(1) -> "https://ttapi.elfshot.xyz/join?server=1"
 */
export function getJoinLink(int: number) {
  return `https://ttapi.elfshot.xyz/join?server=${int}`;
}

/*
function msToDxp(ms: number) {
  const split = msToTime(ms).split(' ').map((item) => item.trim());
  if (split[0] === '0h') split.shift();
  return split.join(' ');
}
*/

export function vehModelToPngLink(model: string) {
  return `https://cdn.tycoon.community/dealership/vehicles/${model}.png`;
}