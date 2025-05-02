// SET CURRENT DATE FOR LAST UPDATED
document.addEventListener("DOMContentLoaded", function () {
  // FORMAT: MONTH DAY, YEAR (E.G., JUNE 15, 2023)
  const options = { year: "numeric", month: "long", day: "numeric" };
  const currentDate = new Date().toLocaleDateString("en-US", options);

  // SET DATE IN ALL ELEMENTS WITH ID 'CURRENT-DATE'
  document.querySelectorAll("#current-date").forEach((el) => {
    el.textContent = currentDate;
  });

  // SET CURRENT YEAR IN FOOTER
  document.getElementById("current-year").textContent =
    new Date().getFullYear();
});
