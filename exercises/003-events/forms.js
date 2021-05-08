// console.log('it works');

const wes = document.querySelector('.wes');

wes.addEventListener('click', function (e) {
        console.log(e);

        const shoudChangePage = confirm('This website might be malicious, do you wish to proceed');

        console.log(shoudChangePage);

        if (!shoudChangePage) {
                e.preventDefault();
        }
});

/**
 * Form default
 */

const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener('submit', function (e) {
        // console.log(e);
        // e.preventDefault();
        console.dir(e.currentTarget);

        // we can do the following dot notation since the htmls form elements all have a name attribute
        // this save you from using e.currentTarget.querySelector('[name="email"]'
        console.log(e.currentTarget.name.value);
        console.log(e.currentTarget.email.value);
        console.log(e.currentTarget.agree.checked);

        const name = e.currentTarget.name.value;

        if (name.includes('Chad')) {
                alert('sorry bro');
                e.preventDefault();
        }
});

// console.log(signupForm.name);

function logEvent(e) {
        console.log(e.type);
        console.log(e.currentTarget.value);
}
signupForm.name.addEventListener('keyup', logEvent);
signupForm.name.addEventListener('keydown', logEvent);
signupForm.name.addEventListener('focus', logEvent);
signupForm.name.addEventListener('blur', logEvent);

/**
 * Accessibility
 */

const photo = document.querySelector('.photo');

// photo.addEventListener('click', function (e) {
//         console.log('photo clicked');
// });

function handlePhotoClick(e) {
        if (e.type === 'click' || e.key === 'Enter') {
                console.log('photo clicked');
        }
}

photo.addEventListener('click', handlePhotoClick);
photo.addEventListener('keyup', handlePhotoClick); // listen for Enter keyup
