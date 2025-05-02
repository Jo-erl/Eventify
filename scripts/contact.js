document.addEventListener("DOMContentLoaded", () => {
  // FORM SUBMISSION HANDLER
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // GET THE SELECTED SUBJECT
      const subject = document
        .getElementById("subject-dropdown")
        .getAttribute("data-value");
      if (!subject) {
        alert("Please select a subject for your message");
        return;
      }

      // GET FORM DATA
      const formData = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        subject: subject,
        message: document.getElementById("message").value.trim(),
      };

      // SIMPLE VALIDATION
      if (!formData.name || !formData.email || !formData.message) {
        alert("Please fill in all required fields");
        return;
      }

      console.log("Form submitted:", formData);
      alert(
        `Thank you for your ${formData.subject} inquiry! We'll respond within 24 hours.`
      );

      this.reset();
      document
        .getElementById("subject-dropdown")
        .setAttribute("data-value", "");
      document.querySelector("#subject-dropdown .custom-selected").textContent =
        "Select a topic";
    });
  }

  // FAQ ACCORDION FUNCTIONALITY 
  const faqQuestions = document.querySelectorAll(".faq-question");
  if (faqQuestions.length > 0) {
    faqQuestions.forEach((question) => {
      question.addEventListener("click", () => {
        const faqItem = question.closest(".faq-item");
        const answer = question.nextElementSibling;
        const icon = question.querySelector("i");

        // TOGGLE ACTIVE STATE
        faqItem.classList.toggle("active");

        // TOGGLE ICON ROTATION
        icon.style.transform = faqItem.classList.contains("active")
          ? "rotate(180deg)"
          : "rotate(0deg)";

        // TOGGLE ANSWER VISIBILITY
        if (faqItem.classList.contains("active")) {
          answer.style.maxHeight = answer.scrollHeight + "px";
          // CLOSE OTHER FAQS
          document.querySelectorAll(".faq-item").forEach((item) => {
            if (item !== faqItem) {
              item.classList.remove("active");
              item.querySelector("i").style.transform = "rotate(0deg)";
              item.querySelector(".faq-answer").style.maxHeight = "0";
            }
          });
        } else {
          answer.style.maxHeight = "0";
        }
      });
    });
  }
});
