// SAMPLE EVENT DATA
const events = [
  {
    id: 1,
    title: "Summer Music Festival",
    date: "2023-07-15",
    location: "Central Park, New York",
    price: 75,
    image:
      "https://images.unsplash.com/photo-1656401992374-5ce15b9a11fa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    genre: "pop",
  },
  {
    id: 2,
    title: "Jazz Night",
    date: "2023-08-22",
    location: "Blue Note, Chicago",
    price: 45,
    image:
      "https://images.unsplash.com/photo-1562593631-a478156c5e2f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    genre: "jazz",
  },
  {
    id: 3,
    title: "Rock Legends Tour",
    date: "2023-09-05",
    location: "Madison Square Garden",
    price: 120,
    image:
      "https://images.unsplash.com/photo-1547525372-7acfcbcd8acc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    genre: "rock",
  },
  {
    id: 4,
    title: "EDM Explosion",
    date: "2023-07-30",
    location: "Electric Daisy Carnival, Las Vegas",
    price: 95,
    image:
      "https://images.unsplash.com/photo-1501527459-2d5409f8cf9f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    genre: "electronic",
  },
  {
    id: 5,
    title: "Classical Evening",
    date: "2023-08-10",
    location: "Carnegie Hall, New York",
    price: 65,
    image:
      "https://images.unsplash.com/photo-1587834423414-9545adae44ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    genre: "classical",
  },
  {
    id: 6,
    title: "Indie Showcase",
    date: "2023-09-18",
    location: "Bowery Ballroom, New York",
    price: 35,
    image:
      "https://images.unsplash.com/photo-1466386460451-cbc548bf581b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    genre: "indie",
  },
  {
    id: 7,
    title: "Country Night",
    date: "2023-10-05",
    location: "Grand Ole Opry, Nashville",
    price: 55,
    image:
      "https://images.unsplash.com/photo-1731337149604-6b41bb6fa42e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    genre: "country",
  },
  {
    id: 8,
    title: "R&B Soul Fest",
    date: "2023-11-12",
    location: "Apollo Theater, New York",
    price: 75,
    image:
      "https://images.unsplash.com/photo-1692272171452-fb8b07024663?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    genre: "rnb",
  },
  {
    id: 9,
    title: "Hip-Hop Fest",
    date: "2023-11-18",
    location: "Queens, New York",
    price: 75,
    image:
      "https://images.unsplash.com/photo-1724360957395-cdc64c761c8d?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    genre: "hiphop",
  },
];

// DISPLAY FEATURED EVENTS ON HOMEPAGE
function displayFeaturedEvents() {
  const eventsGrid = document.querySelector(".events-grid");
  if (eventsGrid) {
    const featuredEvents = events.slice(0, 6);
    featuredEvents.forEach((event) => {
      const eventCard = createEventCard(event);
      eventsGrid.appendChild(eventCard);
    });
  }
}

// DISPLAY ALL EVENTS ON EVENTS PAGE
function displayAllEvents() {
  const eventsGrid = document.querySelector(".all-events .events-grid");
  if (eventsGrid) {
    events.forEach((event) => {
      const eventCard = createEventCard(event);
      eventsGrid.appendChild(eventCard);
    });
  }
}

// CREATE EVENT CARD ELEMENT
function createEventCard(event) {
  const eventDate = new Date(event.date);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = eventDate.toLocaleDateString("en-US", options);

  const eventCard = document.createElement("div");
  eventCard.className = "event-card";
  eventCard.setAttribute("data-genre", event.genre.toLowerCase());
  eventCard.setAttribute("data-date", event.date);
  eventCard.setAttribute("data-price", event.price);
  eventCard.innerHTML = `
    <div class="event-image">
      <img src="${event.image}" alt="${event.title}" loading="lazy">
    </div>
    <div class="event-info">
      <h3>${event.title}</h3>
      <div class="event-date"><i class="far fa-calendar-alt"></i> ${formattedDate}</div>
      <div class="event-location"><i class="fas fa-map-marker-alt"></i> ${event.location}</div>
      <div class="event-price">$${event.price}</div>
      <a href="booking.html?event=${event.id}" class="btn-primary">Book Now</a>
    </div>
  `;
  return eventCard;
}

// SETUP CUSTOM DROPDOWN LOGIC
function setupCustomDropdown(dropdownId) {
  const dropdown = document.getElementById(dropdownId);
  const selected = dropdown.querySelector(".custom-selected");
  const options = dropdown.querySelector(".custom-options");

  selected.addEventListener("click", () => {
    document.querySelectorAll(".custom-options").forEach((el) => {
      if (el !== options) el.style.display = "none";
    });
    options.style.display =
      options.style.display === "block" ? "none" : "block";
  });

  options.querySelectorAll("li").forEach((option) => {
    option.addEventListener("click", () => {
      selected.textContent = option.textContent;
      dropdown.setAttribute("data-value", option.dataset.value);
      options.style.display = "none";
      options
        .querySelectorAll("li")
        .forEach((el) => el.classList.remove("active"));
      option.classList.add("active");
    });
  });
}

// APPLY FILTERS BASED ON CUSTOM DROPDOWNS
function filterEvents() {
  const genreFilter =
    document.getElementById("genre-dropdown").getAttribute("data-value") ||
    "all";
  const dateFilter =
    document.getElementById("date-dropdown").getAttribute("data-value") ||
    "all";
  const priceFilter =
    document.getElementById("price-dropdown").getAttribute("data-value") ||
    "all";
  const eventCards = document.querySelectorAll(".event-card");

  eventCards.forEach((card) => {
    const cardGenre = card.getAttribute("data-genre").toLowerCase();
    const cardDate = new Date(card.getAttribute("data-date"));
    const cardPrice = parseInt(card.getAttribute("data-price"));

    let matchesGenre =
      genreFilter === "all" || cardGenre === genreFilter.toLowerCase();
    let matchesDate = true;
    let matchesPrice = true;

    const today = new Date();
    const nextWeek = new Date(today);
    nextWeek.setDate(today.getDate() + 7);
    const nextMonth = new Date(today);
    nextMonth.setMonth(today.getMonth() + 1);

    if (dateFilter === "this-week") {
      matchesDate = cardDate >= today && cardDate <= nextWeek;
    } else if (dateFilter === "this-month") {
      matchesDate =
        cardDate.getMonth() === today.getMonth() &&
        cardDate.getFullYear() === today.getFullYear();
    } else if (dateFilter === "next-month") {
      matchesDate =
        cardDate.getMonth() === nextMonth.getMonth() &&
        cardDate.getFullYear() === nextMonth.getFullYear();
    }

    if (priceFilter === "0-50") {
      matchesPrice = cardPrice <= 50;
    } else if (priceFilter === "50-100") {
      matchesPrice = cardPrice > 50 && cardPrice <= 100;
    } else if (priceFilter === "100+") {
      matchesPrice = cardPrice > 100;
    }

    card.style.display =
      matchesGenre && matchesDate && matchesPrice ? "block" : "none";
  });
}

// INITIALIZATION LOGIC
document.addEventListener("DOMContentLoaded", () => {
  if (
    document.querySelector(".events-grid") &&
    !document.querySelector(".all-events")
  ) {
    displayFeaturedEvents();
  }

  if (document.querySelector(".all-events")) {
    displayAllEvents();

    ["genre-dropdown", "date-dropdown", "price-dropdown"].forEach(
      setupCustomDropdown
    );

    const applyFiltersBtn = document.getElementById("apply-filters");
    if (applyFiltersBtn) {
      applyFiltersBtn.addEventListener("click", filterEvents);
    }
  }

  // CLOSE DROPDOWNS ON OUTSIDE CLICK
  document.addEventListener("click", (e) => {
    document.querySelectorAll(".custom-dropdown").forEach((dropdown) => {
      if (!dropdown.contains(e.target)) {
        dropdown.querySelector(".custom-options").style.display = "none";
      }
    });
  });
});
