// import currencies from './currencies.js';

// export function handleButtonClick(e) {
//         // console.log(e);
//         console.log(currencies);
// }

export async function handleButtonClick(e) {
        // console.log(e);

        // destructuring - 'default' is a reserved keyword so we have to rename it
        const { localCurrency, default: currency } = await import('./currencies.js');
        console.log(localCurrency);
        console.log(currency);
}
