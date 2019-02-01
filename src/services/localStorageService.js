/**
 *
 * @param user
 */
export const persist = user => {
    localStorage.setItem('authenticated_user', JSON.stringify({
        user: user,
        authenticated_time: Date.now()
    }));
};

export const extract = () => {
    localStorage.removeItem('authenticated_user');
};

/**
 *
 * @returns {boolean}
 */
export const isUserAuthenticated = () => {
    const currentUnixTime = Date.now();
    const authenticated_user = localStorage.getItem('authenticated_user');

    if (null !== authenticated_user) {
        const user = JSON.parse(authenticated_user);
        // check if not expired - 1 min for example
        // const isExpired = (currentUnixTime - user.authenticated_time) > 36000;
        // if (isExpired) {
        //     localStorage.removeItem('authenticated_user');
        //     return false;
        // }
        //
        return true;
    }

    return false;
};

/**
 *
 * @returns {*}
 */
export const getAuthenticatedUserIfExist = () => {
    const user = localStorage.getItem('authenticated_user');
    if (null !== user) {
        return user;
    }

    return null;
};
