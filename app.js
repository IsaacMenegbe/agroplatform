document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  const cropData = {
    maize: {
      soilHealth: "pH Level: 6.5, Moisture: 30%",
      requirements: "Fertilizer: NPK 20-10-10",
      pestAlert: "None Detected",
    },
    rice: {
      soilHealth: "pH Level: 5.5, Moisture: 50%",
      requirements: "Fertilizer: Urea",
      pestAlert: "Pests: Stem borers detected",
    },
    wheat: {
      soilHealth: "pH Level: 6.8, Moisture: 20%",
      requirements: "Fertilizer: NPK 15-15-15",
      pestAlert: "Pests: Aphids detected",
    },
  };

  document.getElementById("crop-select").addEventListener("change", updateDashboard);

  function updateDashboard() {
    const selectedCrop = document.getElementById("crop-select").value;
    const { soilHealth, requirements, pestAlert } = cropData[selectedCrop];
    document.getElementById("soil-health").textContent = soilHealth;
    document.getElementById("crop-requirements").textContent = requirements;
    document.getElementById("pest-alerts").textContent = pestAlert;
  }

  document.getElementById("crop-select").value = "maize";
  updateDashboard();

  window.scrollToDashboard = () => {
    document.getElementById("dashboard").scrollIntoView({ behavior: "smooth" });
  };

  window.fetchWeather = () => {
    document.getElementById("weather").textContent = "Cloudy, 28°C (Updated)";
  };
});