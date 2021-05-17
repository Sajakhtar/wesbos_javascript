// console.log('it works');

const fromInput = document.querySelector('[name="from_amount"]');
const fromSelect = document.querySelector('[name="from_currency"]');
const toSelect = document.querySelector('[name="to_currency"]');
const toEl = document.querySelector('.to_amount');

const form = document.querySelector('.app form');

// const endpoint = 'https://api.exchangeratesapi.io/latest';
// const API_KEY = 'df77cf872ac4a1032039527a85a5d9fb';
// const baseEndpoint = `https://api.exchangeratesapi.io/v1/latest?access_key=${API_KEY}`;

const ratesByBase = {};

const freeEndpoint = `https://free.currconv.com/api/v7/convert?apiKey=18e8625cb720fff0ef90&compact=ultra&q=`;

const currencies = {
        USD: 'United States Dollar',
        AUD: 'Australian Dollar',
        BGN: 'Bulgarian Lev',
        BRL: 'Brazilian Real',
        CAD: 'Canadian Dollar',
        CHF: 'Swiss Franc',
        CNY: 'Chinese Yuan',
        CZK: 'Czech Republic Koruna',
        DKK: 'Danish Krone',
        GBP: 'British Pound Sterling',
        HKD: 'Hong Kong Dollar',
        HRK: 'Croatian Kuna',
        HUF: 'Hungarian Forint',
        IDR: 'Indonesian Rupiah',
        ILS: 'Israeli New Sheqel',
        INR: 'Indian Rupee',
        JPY: 'Japanese Yen',
        KRW: 'South Korean Won',
        MXN: 'Mexican Peso',
        MYR: 'Malaysian Ringgit',
        NOK: 'Norwegian Krone',
        NZD: 'New Zealand Dollar',
        PHP: 'Philippine Peso',
        PLN: 'Polish Zloty',
        RON: 'Romanian Leu',
        RUB: 'Russian Ruble',
        SEK: 'Swedish Krona',
        SGD: 'Singapore Dollar',
        THB: 'Thai Baht',
        TRY: 'Turkish Lira',
        ZAR: 'South African Rand',
        EUR: 'Euro',
};

function generateOptions(options) {
        // console.log(options);
        // convert options object into array or arrays
        return Object.entries(options)
                .map(
                        ([currencyCode, currencyName]) =>
                                // console.log(currencyCode, currencyName);
                                `<option value="${currencyCode}">${currencyCode} - ${currencyName}</option>`
                )
                .join('');
}

async function fetchRate(base = 'USD', to = 'AED') {
        const res = await fetch(`${freeEndpoint}${base}_${to}`);
        const rates = await (await res).json();
        // console.log(rates); // {GBP_AED: 5.187526}
        return Object.values(rates)[0];
}

async function convert(amount, from, to) {
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

function formatCurrency(amount, currency) {
        return Intl.NumberFormat('en-US', {
                style: 'currency',
                currency,
        }).format(amount);
}

async function handleInput(e) {
        // console.log(e.target); // always the element being interacted with
        // console.log(e.currentTarget); // always the form
        const rawAmount = await convert(fromInput.value, fromSelect.value, toSelect.value);
        // console.log(rawAmount);

        // toEl.textContent = rawAmount;
        toEl.textContent = formatCurrency(rawAmount, toSelect.value);
}

const optionsHTML = generateOptions(currencies);
// console.log(optionsHTML);

// populate the options elements
fromSelect.innerHTML = optionsHTML;
toSelect.innerHTML = optionsHTML;

// Listen for input for a form, to cover all inputs in that form
form.addEventListener('input', handleInput);
