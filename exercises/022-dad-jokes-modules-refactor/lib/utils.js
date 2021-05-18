export function randomItemFromArray(arr, not) {
        const item = arr[Math.floor(Math.random() * arr.length)];
        // console.log(item);

        if (item === not) {
                console.log('that was used last time, look again');
                randomItemFromArray(arr, not); // recursion
        }

        // console.log(item);
        return item;
}
