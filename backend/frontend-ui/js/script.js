async function sendToBackend() {

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
        // ✅ SAME ORIGIN REQUEST
        const response = await fetch("/api/detect", {
            method: "POST",
            body: formData
        });

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