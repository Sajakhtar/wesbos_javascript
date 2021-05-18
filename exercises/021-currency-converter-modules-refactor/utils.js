export function generateOptions(options) {
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

export function formatCurrency(amount, currency) {
        return Intl.NumberFormat('en-US', {
                style: 'currency',
                currency,
        }).format(amount);
}
