// 🔐 LOGIN FUNCTION
async function loginUser() {
    const username = prompt("Enter username:");
    const password = prompt("Enter password:");

    if (!username || !password) {
        alert("Username and password required");
        return;
    }

    try {
        const response = await fetch("/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        });

        const data = await response.json();

        if (!response.ok) {
            alert(data.msg || "Login failed");
            return;
        }

        // ✅ Save token
        localStorage.setItem("access_token", data.access_token);
        alert("Login Successful");

    } catch (error) {
        console.error(error);
        alert("Login Error");
    }
}



// 🔥 DETECT FUNCTION (PROTECTED)
async function sendToBackend() {

    const token = localStorage.getItem("access_token");

    if (!token) {
        alert("Please login first");
        return;
    }

    const rgbFile = document.getElementById("rgbInput").files[0];
    const thermalFile = document.getElementById("thermalInput").files[0];

    if (!rgbFile || !thermalFile) {
        alert("Please upload both images");
        return;
    }

    const formData = new FormData();
    formData.append("rgb_image", rgbFile);
    formData.append("thermal_image", thermalFile);

    try {

        const response = await fetch("/api/detect", {
            method: "POST",
            headers: {
                "Authorization": "Bearer " + token
            },
            body: formData
        });

        if (response.status === 401) {
            alert("Session expired. Please login again.");
            localStorage.removeItem("access_token");
            return;
        }

        if (!response.ok) {
            throw new Error("Request failed");
        }

        const data = await response.json();

        updateUI(data);

    } catch (error) {
        console.error(error);
        alert("Server Error");
    }
}



// 🎨 UI UPDATE FUNCTION
function updateUI(data) {

    const safeCard = document.querySelector(".status-card.safe");
    const alertCard = document.querySelector(".status-card.alert");
    const probabilityText = document.getElementById("probability");
    const circle = document.querySelector(".circle");

    const percent = Math.round(data.confidence * 100);

    probabilityText.innerText = percent + "%";

    circle.style.background =
        `conic-gradient(${percent > 70 ? "#ef4444" : "#22c55e"} 0% ${percent}%, #1e293b ${percent}% 100%)`;

    if (data.fire_detected) {
        safeCard.style.display = "none";
        alertCard.style.display = "block";
    } else {
        safeCard.style.display = "block";
        alertCard.style.display = "none";
    }
}