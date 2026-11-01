const loginForm = document.getElementById("login-form");
const API_KEY = "https://backend-fa0q.onrender.com"

loginForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("pwd").value;

    try {
        const response = await fetch(`${API_KEY}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });

        const data = await response.json();

        if (response.ok) {
            window.location.href = "forecast.html";
        } else {
            alert(data.message || "Login failed. Please check your details.");
        }
    } catch (error) {
        console.error("Login error:", error);
        alert("Unable to connect to the server. Please try again.");
    }
});
