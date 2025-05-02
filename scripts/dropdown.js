// INITIALIZE ALL CUSTOM DROPDOWNS
function setupCustomDropdown(dropdownId) {
  const dropdown = document.getElementById(dropdownId);
  if (!dropdown) return;

  const selected = dropdown.querySelector(".custom-selected");
  const options = dropdown.querySelector(".custom-options");
  const hiddenInput = document.querySelector(
    `input[name="${dropdownId.replace("-dropdown", "")}"]`
  );

  // CLICK HANDLER FOR SELECTED ELEMENT
  selected.addEventListener("click", (e) => {
    e.stopPropagation();
    document.querySelectorAll(".custom-options").forEach((opt) => {
      if (opt !== options) opt.style.display = "none";
    });
    options.style.display =
      options.style.display === "block" ? "none" : "block";
  });

  // CLICK HANDLER FOR OPTIONS
  options.querySelectorAll("li").forEach((option) => {
    option.addEventListener("click", (e) => {
      e.stopPropagation();
      selected.textContent = option.textContent;
      dropdown.setAttribute("data-value", option.dataset.value);
      if (hiddenInput) hiddenInput.value = option.dataset.value;
      options.style.display = "none";

      // UPDATE ACTIVE STATE
      options
        .querySelectorAll("li")
        .forEach((li) => li.classList.remove("active"));
      option.classList.add("active");
    });
  });
}

// INITIALIZE ALL DROPDOWNS WHEN DOM LOADS
document.addEventListener("DOMContentLoaded", () => {
  // INITIALIZE EVENT PAGE DROPDOWNS
  if (document.querySelector(".all-events")) {
    ["genre-dropdown", "date-dropdown", "price-dropdown"].forEach(
      setupCustomDropdown
    );
  }

  // INITIALIZE CONTACT PAGE DROPDOWN
  if (document.getElementById("subject-dropdown")) {
    setupCustomDropdown("subject-dropdown");
  }

  // CLOSE DROPDOWNS WHEN CLICKING OUTSIDE
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".custom-dropdown")) {
      document.querySelectorAll(".custom-options").forEach((el) => {
        el.style.display = "none";
      });
    }
  });
});
