// use checkAuth function to redirect is user not authenticated

import { checkAuth, logout } from '../fetch-utils.js';

// add event listener to the logout button and call logout
checkAuth();

const logoutBtn = document.getElementById('logout');
logoutBtn.addEventListener('click', async () => {
    await logout();
});
