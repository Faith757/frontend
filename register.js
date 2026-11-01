const form = document.getElementById('register-form')
const email = document.getElementById('email')
const password = document.getElementById('pwd')
const confirmPassword = document.getElementById('password')
const API_KEY = "https://backend-fa0q.onrender.com"

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const new_user = {
        email: email.value,
        password: password.value,
        confirmPassword: confirmPassword.value

    }
    try {
        const response = await fetch('API_KEY/user/registration', {
            method: 'POST',
            headers: {
                "content-type": "application/json",

            },
            body: JSON.stringify(new_user)
        })
        const data = await response.json();
        if (!response.ok) {
            alert(data.message)
            console.log(data.message)
            return
        }
        alert("registration successfully!")
        window.location.href = "login.html"
    } catch (error) {
    }
})