(function() {
    let savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);

    // Ensure the correct icon is set before the page renders
    let iconClass = savedTheme === "dark" ? "sun" : "moon";
    document.write('<style>#moon { visibility: hidden; }</style>'); // Hide icon during load
    window.addEventListener("DOMContentLoaded", function() {
        document.getElementById("moon").className = iconClass;
        document.getElementById("moon").style.visibility = "visible"; // Show after setting
    });
})();