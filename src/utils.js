export function setUserData(userData) {
    sessionStorage.setItem('userData', JSON.stringify(userData));
}

export function getUserData() {
    return JSON.parse(sessionStorage.getItem('userData'));
}

export function clearUserData() {
    sessionStorage.removeItem('userData');
}

export function handleSubmit(callback) {
    return async function (event) {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        const inputs = form.querySelectorAll('input:enabled, textarea:enabled, button:enabled, select:enabled');
        inputs.forEach(i => i.disabled = true);

        await callback(data, form);

        inputs.forEach(i => i.disabled = false);
    }
}