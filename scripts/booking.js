document.addEventListener("DOMContentLoaded", function () {
  // ONLY RUN THIS CODE ON THE BOOKING PAGE
  if (!window.location.pathname.includes("booking.html")) return;

  // SAMPLE EVENT DATA - IN A REAL APP, THIS WOULD COME FROM DATABASE/API
  const sampleEvents = [
    {
      id: 1,
      title: "Summer Music Festival",
      date: "2084-07-15",
      location: "Central Park, New York",
      price: 75,
      image:
        "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      genre: "pop",
    },
    {
      id: 2,
      title: "Jazz Night",
      date: "2084-08-22",
      location: "Blue Note, Chicago",
      price: 45,
      image:
        "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      genre: "jazz",
    },
    {
      id: 3,
      title: "Rock Legends Tour",
      date: "2084-09-05",
      location: "Madison Square Garden",
      price: 120,
      image:
        "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      genre: "rock",
    },
    {
      id: 4,
      title: "EDM Explosion",
      date: "2084-07-30",
      location: "Electric Daisy Carnival, Las Vegas",
      price: 95,
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      genre: "electronic",
    },
    {
      id: 5,
      title: "Classical Evening",
      date: "2084-08-10",
      location: "Carnegie Hall, New York",
      price: 65,
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      genre: "classical",
    },
    {
      id: 6,
      title: "Indie Showcase",
      date: "2084-09-18",
      location: "Bowery Ballroom, New York",
      price: 35,
      image:
        "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      genre: "indie",
    },
    {
      id: 7,
      title: "Country Night",
      date: "2084-10-05",
      location: "Grand Ole Opry, Nashville",
      price: 55,
      image:
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      genre: "country",
    },
    {
      id: 8,
      title: "R&B Soul Fest",
      date: "2084-11-12",
      location: "Apollo Theater, New York",
      price: 75,
      image:
        "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      genre: "rnb",
    },
    {
      id: 9,
      title: "Hip-Hop Fest",
      date: "2084-11-18",
      location: "Queens, New York",
      price: 75,
      image:
        "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      genre: "rnb",
    },
  ];

  // GET EVENT ID FROM URL PARAMETERS
  const urlParams = new URLSearchParams(window.location.search);
  const eventId = urlParams.get("event");

  // FIND THE SELECTED EVENT
  const event = sampleEvents.find((e) => e.id.toString() === eventId);

  if (!event) {
    console.error("Event not found");
    return;
  }

  // DISPLAY EVENT DETAILS
  displayEventDetails(event);
  setupBookingForm(event);

  function displayEventDetails(event) {
    const eventDate = new Date(event.date);
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = eventDate.toLocaleDateString("en-US", options);

    // SAFELY UPDATE THE DOM ELEMENTS
    const setElementText = (id, text) => {
      const el = document.getElementById(id);
      if (el) el.textContent = text;
    };

    setElementText("booking-event-title", event.title);
    setElementText("booking-event-date", formattedDate);
    setElementText("booking-event-location", event.location);
    setElementText("booking-event-price", `$${event.price}`);

    const eventImage = document.getElementById("booking-event-image");
    if (eventImage) {
      eventImage.src = event.image;
      eventImage.alt = event.title;
    }
  }

  function setupBookingForm(event) {
    const form = document.querySelector(".booking-form .form");
    if (!form) return;

    const ticketsSelect = document.getElementById("tickets");
    if (!ticketsSelect) return;

    // CREATE TOTAL DISPLAY ELEMENT
    const totalElement = document.createElement("div");
    totalElement.className = "summary-total";

    // UPDATE TOTAL PRICE FUNCTION
    const updateTotalPrice = (price, quantity) => {
      const total = price * quantity;
      totalElement.textContent = `Total: $${total}`;

      const existingTotal = form.querySelector(".summary-total");
      if (existingTotal) {
        existingTotal.textContent = `Total: $${total}`;
      } else {
        form.appendChild(totalElement);
      }
    };

    // INITIAL PRICE CALCULATION
    updateTotalPrice(event.price, ticketsSelect.value);

    // TICKET QUANTITY CHANGE HANDLER
    ticketsSelect.addEventListener("change", function () {
      updateTotalPrice(event.price, this.value);
    });

    // FORM SUBMISSION HANDLER
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      if (validateForm()) {
        const submitBtn = form.querySelector('button[type="submit"]');
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.classList.add("loading");

          // SIMULATE API CALL
          setTimeout(() => {
            showConfirmation();
            submitBtn.disabled = false;
            submitBtn.classList.remove("loading");
          }, 1500);
        }
      }
    });

    // FORM VALIDATION
    function validateForm() {
      let isValid = true;
      const formGroups = form.querySelectorAll(".form-group");

      formGroups.forEach((group) => {
        const input = group.querySelector("input, select");
        if (!input) return;

        let errorMessage = group.querySelector(".error-message");
        if (!errorMessage) {
          errorMessage = document.createElement("span");
          errorMessage.className = "error-message";
          group.appendChild(errorMessage);
        }

        // RESET VALIDATION
        group.classList.remove("error");
        errorMessage.textContent = "";

        // VALIDATE REQUIRED FIELDS
        if (input.required && !input.value.trim()) {
          group.classList.add("error");
          errorMessage.textContent = "This field is required";
          isValid = false;
        }

        // VALIDATE EMAIL FORMAT
        if (input.type === "email" && input.value.trim()) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(input.value)) {
            group.classList.add("error");
            errorMessage.textContent = "Please enter a valid email";
            isValid = false;
          }
        }
      });

      return isValid;
    }

    // CONFIRMATION MODAL
    function showConfirmation() {
      const modal = document.createElement("div");
      modal.className = "modal";
      modal.innerHTML = `
                <div class="modal-content">
                    <i class="fas fa-check-circle"></i>
                    <h2>Booking Confirmed!</h2>
                    <p>Your tickets for ${event.title} have been successfully booked.</p>
                    <button class="btn-primary" id="close-modal">Continue</button>
                </div>
            `;

      document.body.appendChild(modal);
      modal.style.display = "flex";

      // CLOSE MODAL HANDLER
      document
        .getElementById("close-modal")
        .addEventListener("click", function () {
          modal.style.display = "none";
          document.body.removeChild(modal);
        });
    }
  }
});
