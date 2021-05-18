export const ratesByBase = {};

export const freeEndpoint = `https://free.currconv.com/api/v7/convert?apiKey=18e8625cb720fff0ef90&compact=ultra&q=`;

export async function fetchRate(base = 'USD', to = 'AED') {
        const res = await fetch(`${freeEndpoint}${base}_${to}`);
        const rates = await (await res).json();
        // console.log(rates); // {GBP_AED: 5.187526}
        return Object.values(rates)[0];
}

export async function convert(amount, from, to) {
        // check if we have rates to convert from that currency
        if (!ratesByBase[`${from}_${to}`]) {
                // console.log(`oh no, we don't have ${from}_${to} rate. Fetch from API`);
                const rates = await fetchRate(from, to);
                // console.log(rates);

                // store for next time
                ratesByBase[`${from}_${to}`] = rates;
                // console.log(ratesByBase);
        }

        // convert amount
        const convertedAmount = amount * ratesByBase[`${from}_${to}`];
        // console.log(`${amount} ${from} is ${to} ${convertedAmount}`);
        return convertedAmount;
}
