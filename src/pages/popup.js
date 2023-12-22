// if (typeof linkElement === 'undefined') {
//     // Try to find the link element in the head
//     const linkElement = document.querySelector('link[href="./app.css"]');

//     // If the link element is not found, create and append it
//     if (!linkElement) {
//         // Remove const here
//         linkElement = document.createElement('link');
//         linkElement.rel = 'stylesheet';
//         linkElement.href = './app.css';
//         document.head.appendChild(linkElement);
//     }
// }

// function showPopup(isSignUp = true) {
//     console.log('showPopup called with isSignUp:', isSignUp);

//     // Check if the modal already exists
//     if (!document.getElementById('overlay')) {
//         // Create a modal element
//         const modal = document.createElement('div');
//         modal.id = 'overlay';
//         modal.className = 'overlay';
//         modal.style.display = 'flex';

//         // Add HTML content for the modal based on the mode (Create Account or Sign In)
//         modal.innerHTML = `
//         <div id="popup" class="popup">
//             <div class="close-btn" onclick="closePopup()">
//                 <span>X</span>
//             </div>
//             <div class='div1'>
//                 <h2>${isSignUp ? 'Create Account' : 'Sign In'}</h2>   
//                 <form onsubmit="${isSignUp ? 'handleSubmit(event)' : 'handleSignIn(event)'}; return false;">
//                     ${isSignUp ? `
//                         <label for="firstName">First Name:</label>
//                         <input type="text" id="firstName" name="firstName" required /><br />

//                         <label for="lastName">Last Name:</label>
//                         <input type="text" id="lastName" name="lastName" required /><br />
//                     ` : ''}
//                     <label for="email">Email:</label>
//                     <input type="email" id="email" name="email" required /><br />

//                     <label for="password">Password:</label>
//                     <input type="password" id="password" name="password" required /><br />

//                     <button type="submit" id="submitButton">${isSignUp ? 'Create Account' : 'Sign In'}</button>
//                 </form>
//             </div>
//             <div class='div2'>
//                 <p style="position: relative; right: 40%;">
//                     ${isSignUp ? 'Already have an account?' : "Don't have an account?"}
//                 </p>
//                 <a onclick="toggleMode()" style="position: absolute; color: blue; top: 3.8%; cursor: pointer; left: 60%;">
//                     <nobr>${isSignUp ? 'Sign In' : 'Create Account'}</nobr>
//                 </a>
//             </div>
//             <img src="../sources/login.png" class='login-img' alt="">
//             <div class='p555'>
//                 <p>
//                     By ${isSignUp ? 'Signing Up' : 'Signing In'} you're agreeing to our <br>
//                     Terms & Conditions, Privacy policy
//                 </p>
//             </div>
//         </div>
//         `;

//         document.body.appendChild(modal);

//         // Change button text directly in the DOM
//         const submitButton = document.getElementById('submitButton');
//         if (submitButton) {
//             submitButton.innerText = isSignUp ? 'Create Account' : 'Login';
//         }

//         // Remove the First Name and Last Name fields if it's the Sign In mode
//         if (!isSignUp) {
//             const firstNameLabel = modal.querySelector('label[for="firstName"]');
//             const lastNameLabel = modal.querySelector('label[for="lastName"]');
//             const firstNameInput = modal.querySelector('#firstName');
//             const lastNameInput = modal.querySelector('#lastName');

//             if (firstNameLabel) {
//                 firstNameLabel.remove();
//             }

//             if (lastNameLabel) {
//                 lastNameLabel.remove();
//             }

//             if (firstNameInput) {
//                 console.log('Removing firstNameInput');
//                 firstNameInput.remove();
//             }

//             if (lastNameInput) {
//                 console.log('Removing lastNameInput');
//                 lastNameInput.remove();
//             }
//         }
//     }
// }


// function closePopup() {
//     console.log('closePopup called');

//     // Check if the modal exists
//     const modal = document.getElementById('overlay');
//     if (modal) {
//         // Remove the modal from the DOM
//         modal.parentNode.removeChild(modal);
//     }
// }

// function toggleMode() {
//     console.log('toggleMode called');

//     // Check the current mode (Create Account or Sign In)
//     const popupTitle = document.querySelector('#popup h2');
//     const toggleText = document.querySelector('.div2 p');
//     const toggleLink = document.querySelector('.div2 a');

//     const isSignUp = popupTitle.innerText === 'Create Account';

//     // Toggle between Create Account and Sign In modes
//     popupTitle.innerText = isSignUp ? 'Sign In' : 'Create Account';
//     toggleText.innerText = isSignUp ? "Don't have an account?" : 'Already have an account?';
//     toggleLink.innerText = isSignUp ? 'Create Account' : 'Sign In';

//     // Clear input fields
//     const firstNameInput = document.getElementById('firstName');
//     const lastNameInput = document.getElementById('lastName');
//     const emailInput = document.getElementById('email');
//     const passwordInput = document.getElementById('password');

//     if (isSignUp) {
//         // Clear values only if it's the Create Account mode
//         if (firstNameInput) {
//             console.log('Clearing firstNameInput value');
//             firstNameInput.value = '';
//         }

//         if (lastNameInput) {
//             console.log('Clearing lastNameInput value');
//             lastNameInput.value = '';
//         }
//     }

//     if (emailInput) {
//         console.log('Clearing emailInput value');
//         emailInput.value = '';
//     }

//     if (passwordInput) {
//         console.log('Clearing passwordInput value');
//         passwordInput.value = '';
//     }
// }

// function handleSubmit(event) {
//     event.preventDefault();
//     // Handle form submission logic for Create Account
//     console.log('Create Account Logic');

//     // Redirect to the "home.html" file
//     window.location.href = 'home.html';
// }

// function handleSignIn(event) {
//     event.preventDefault();
//     // Handle form submission logic for Sign In
//     console.log('Sign In Logic');
//     // Close the popup after handling Sign In logic
//     closePopup();
// }



// Function to show the popup with the specified mode (default is signup)
// Function to show the popup with the specified mode (default is signup)
// Function to show the popup with the specified mode (default is signup)
function showPopup(isSignUp = true) {
    console.log('showPopup called with isSignUp:', isSignUp);

    // Check if the modal already exists
    if (!document.getElementById('overlay')) {
        // Create a modal element
        const modal = document.createElement('div');
        modal.id = 'overlay';
        modal.className = 'overlay';
        modal.style.display = 'flex';

        // Add HTML content for the modal based on the mode (Create Account or Sign In)
        modal.innerHTML = `
        <div id="popup" class="popup">
            <div class="close-btn" onclick="closePopup()">
                <button class="imp-btn"><i class="fa-solid fa-x"></i></button>
            </div>
            <div class='div1'>
                <h2>${isSignUp ? 'Create Account' : 'Sign In'}</h2>   
                <form onsubmit="${isSignUp ? 'handleSignup(event)' : 'handleSignIn(event)'}; return false;">
                    ${isSignUp ? createSignupTemplate() : createLoginTemplate()}
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required /><br />

                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required /><br />

                    <button type="submit">${isSignUp ? 'Create Account' : 'Sign In'}</button>
                </form>
            </div>
            <div class='div2'>
                <p style="position: relative; right: 40%;">
                    ${isSignUp ? 'Already have an account?' : "Don't have an account?"}
                </p>
                <a onclick="toggleMode()" style="position: absolute; color: blue; top: 3.8%; cursor: pointer; left: 60%;">
                    <nobr>${isSignUp ? 'Sign In' : 'Create Account'}</nobr>
                </a>
            </div>
            <img src="../sources/login.png" class='login-img' alt="">
            <div class='p555'>
                <p>
                    By ${isSignUp ? 'Signing Up' : 'Signing In'} you're agreeing to our <br>
                    Terms & Conditions, Privacy policy
                </p>
            </div>
        </div>
        `;

        document.body.appendChild(modal);
    }
}

// Function to create the HTML template for the Create Account mode
function createSignupTemplate() {
    return `
        <label for="firstName">First Name:</label>
        <input type="text" id="firstName" name="firstName" required /><br />

        <label for="lastName">Last Name:</label>
        <input type="text" id="lastName" name="lastName" required /><br />
    `;
}

// Function to create the HTML template for the Sign In mode
function createLoginTemplate() {
    return ''; // No additional fields for Sign In
}

// Function to handle form submission for Create Account
function handleSignup(event) {
    event.preventDefault();
    // Handle form submission logic for Create Account
    console.log('Create Account Logic');

    // Redirect to the "home.html" file
    window.location.href = 'home.html';
}

// Function to handle form submission for Sign In
function handleSignIn(event) {
    event.preventDefault();
    // Handle form submission logic for Sign In
    console.log('Sign In Logic');
    // Close the popup after handling Sign In logic
    closePopup();
}




// Function to close the popup
function closePopup() {
    console.log('closePopup called');

    // Check if the modal exists
    const modal = document.getElementById('overlay');
    if (modal) {
        // Remove the modal from the DOM
        modal.parentNode.removeChild(modal);
    }
}

// Function to toggle between Create Account and Sign In modes
function toggleMode() {
    console.log('toggleMode called');

    // Check the current mode (Create Account or Sign In)
    const popupTitle = document.querySelector('#popup h2');
    const toggleText = document.querySelector('.div2 p');
    const toggleLink = document.querySelector('.div2 a');

    const isSignUp = popupTitle.innerText === 'Create Account';

    // Toggle between Create Account and Sign In modes
    popupTitle.innerText = isSignUp ? 'Sign In' : 'Create Account';
    toggleText.innerText = isSignUp ? "Don't have an account?" : 'Already have an account?';
    toggleLink.innerText = isSignUp ? 'Create Account' : 'Sign In';

    // Clear input fields
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    if (isSignUp) {
        // Clear values only if it's the Create Account mode
        if (firstNameInput) {
            console.log('Clearing firstNameInput value');
            firstNameInput.value = '';
        }

        if (lastNameInput) {
            console.log('Clearing lastNameInput value');
            lastNameInput.value = '';
        }
    }

    if (emailInput) {
        console.log('Clearing emailInput value');
        emailInput.value = '';
    }

    if (passwordInput) {
        console.log('Clearing passwordInput value');
        passwordInput.value = '';
    }

}