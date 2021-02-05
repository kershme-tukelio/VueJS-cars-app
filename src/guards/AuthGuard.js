export function authGuard(to, from, next) {
    const token = localStorage.getItem('token');

    if (!token) {
        console.log(token);
        next('/login');
        return;
    }

    next();
}