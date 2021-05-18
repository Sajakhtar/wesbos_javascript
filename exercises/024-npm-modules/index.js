// console.log('it works');

import wait from 'waait';
// import faker from "faker";
import { name } from 'faker';
import { formatDistance, format } from 'date-fns';
import axios from 'axios';
import { intersection, cloneDeep, isEqual, repeat } from 'lodash';
import { to } from 'await-to-js';

// console.log(`Hello ${faker.name.firstName()}`);
console.log(`Hello ${name.firstName()}`);

/**
 * FAKER
 */

// const fakeNames = Array.from({ length: 10 }, name.firstName);
// console.log(fakeNames);

const fakeNames = Array.from({ length: 10 }, () => `${name.firstName()} ${name.lastName()}`);
// console.log(fakeNames);

/**
 * WAIT
 */

async function go() {
        console.log('going');
        await wait(2000);
        console.log('ending');
}

// go();

/**
 * DATE-FNS
 */

const diff = formatDistance(new Date(1986, 3, 4, 11, 32, 0), new Date(1986, 3, 4, 10, 32, 0), { addSuffix: true }); //= > 'in about 1 hour'

console.log(diff);

const diff2 = formatDistance(new Date(), new Date(2021, 7, 4, 10, 32, 0), { addSuffix: true });

console.log(diff2);

const diff3 = formatDistance(new Date(2021, 7, 4, 10, 32, 0), new Date(), { addSuffix: true });

console.log(diff3);

const myDate = new Date();
// Format as January the 12th 2021
// https://date-fns.org/v2.21.3/docs/format
const formatted = format(myDate, `LLLL 'the' do y`);
console.log(formatted);

/**
 * AXIOS
 */
async function getJoke() {
        const { data } = await axios.get('https://icanhazdadjoke.com/', {
                headers: {
                        Accept: 'application/json',
                },
        });
        console.log(data.joke);
}

getJoke();

/**
 * LODASH
 */

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const b = [5, 3, 8, 3, 7, 453, 34];

// what are the same numbers that exist in both arrays
const sameValues = intersection(a, b);
console.log(sameValues);

const p1 = { name: 'wes' };
const p2 = { name: 'wes' };

console.log(p1 === p2); // false

// isEqual Performs a deep comparison between two values to determine if they are equivalent.
console.log(isEqual(p1, p2)); // true

/**
 * AWAIT-TO-JS
 */

function checkIfNameIsCool(firstName) {
        return new Promise(function (resolve, reject) {
                if (firstName === 'wes') {
                        resolve('cool name');
                }

                reject(new Error('not a cool name'));
        });
}

async function checkName() {
        // const nameDesc = await checkIfNameIsCool('wes');
        // const nameDesc2 = await checkIfNameIsCool('jon');
        // console.log(nameDesc);
        // console.log(nameDesc2);

        // using await-to-js
        // always returns an array [error, resolve value]
        const response = await to(checkIfNameIsCool('wes'));
        console.log(response); // ['not a cool name', unedefined]
        const response2 = await to(checkIfNameIsCool('jon'));
        console.log(response2); // [null, 'cool name]

        // destructure
        const [err, successValue] = await to(checkIfNameIsCool('jim'));
        if (err) {
                // deal with it
                console.log(err);
        } else {
                console.log(successValue);
        }
}

checkName();
