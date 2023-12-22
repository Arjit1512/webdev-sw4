document.addEventListener('DOMContentLoaded', function () {
    const createAccountButton = document.getElementById('createAccount');
    const joinGroupButton = document.getElementById('joinGroup');
    const goBackButton = document.getElementById('goBack');
    const writePostButton = document.getElementById('writePost');
    const joinGroup2Button = document.getElementById('joinGroup2');
    const editButton = document.getElementById('editButton');

    createAccountButton.addEventListener('click', handleCreateAccountClick);
    joinGroupButton.addEventListener('click', gotoHome);
    goBackButton.addEventListener('click', goBack);
    writePostButton.addEventListener('click', writePost);
    joinGroup2Button.addEventListener('click', gotoHome);
    editButton.addEventListener('click', openEditPopup);

    document.getElementById('createAccount').addEventListener('click', function () {
        showPopup(true);
    });
    function handleCreateAccountClick() {
        console.log("Create account clicked");
        // Add your logic for handling the creation of an account
    }

    function gotoHome() {
        console.log("Go to home clicked");
        // Add your logic for navigating to the home page
    }

    function goBack() {
        console.log("Go back clicked");
        // Add your logic for going back
    }

    function writePost() {
        console.log("Write a post clicked");
        // Add your logic for handling the writing of a post
    }

    function openEditPopup() {
        console.log("Edit button clicked");
        // Add your logic for opening the edit popup
    }
});
