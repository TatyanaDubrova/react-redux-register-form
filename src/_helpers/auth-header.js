export function authHeader() {
    let user = JSON.parse(localStorage.getItem('user'));
    console.log('user in authHeader:', user);

    if (user && user.token) {
        return { 'Authorization': user.token };
    } else {
        return {};
    }
}