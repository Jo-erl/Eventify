// SAMPLE ARTIST DATA
const trendingArtists = [
  {
    name: "Taylor Swift",
    genre: "Pop",
    followers: "82M",
    image:
      "https://media.vanityfair.com/photos/67a01ae8911e1866ed5f6b53/master/w_1600,c_limit/2197312451",
  },
  {
    name: "The Weeknd",
    genre: "R&B",
    followers: "65M",
    image:
      "https://www.rmf.fm/_files/Short_foto/4b1538ca9f7f0976b72a571844ae091d.jpg",
  },
  {
    name: "BTS",
    genre: "K-Pop",
    followers: "72M",
    image:
      "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/bts.png",
  },
  {
    name: "Drake",
    genre: "Hip-Hop",
    followers: "78M",
    image:
      "https://rollingout.com/wp-content/uploads/2024/12/shutterstock_1417641431-scaled-e1733577274303.jpg",
  },
  {
    name: "Billie Eilish",
    genre: "Alternative",
    followers: "53M",
    image:
      "https://people.com/thmb/39i-9boG5pjTSlMITh-T0q_K8ZI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(807x349:809x351):format(webp)/billie-eilish-grammys-2025-1-020225-4e6e27948ba34e4fb4a16ebf5f3ad499.jpg",
  },
  {
    name: "Ed Sheeran",
    genre: "Pop",
    followers: "110M",
    image:
      "https://people.com/thmb/6tVwpEBCW9vX76XlLGddxh4bDeM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(764x284:766x286):format(webp)/ed-sheeran-grammys-los-angeles-020424_2804-e092e3e56eee4cda8fab2a86d6562d93.jpg",
  },
  {
    name: "J. Cole",
    genre: "Hip-Hop",
    followers: "41M",
    image:
      "https://150893825.v2.pressablecdn.com/wp-content/uploads/2021/11/j-cole-thatgrapejuice-2021-platinum-pride-devile-motiv8-riaa-middle-child-1.png",
  },
  {
    name: "Kendrick Lamar",
    genre: "Hip-Hop",
    followers: "48M",
    image:
      "https://i8.amplience.net/i/naras/kendrick-lamar-2025-grammys-soty.jpg",
  },
  {
    name: "Santan Dave",
    genre: "UK Rap",
    followers: "6M",
    image:
      "https://pbs.twimg.com/profile_images/1701650260827742208/gXrSyxFY_400x400.jpg",
  },
  {
    name: "Ghetts",
    genre: "Grime",
    followers: "1.2M",
    image: "https://spaces.whynow.co.uk/2023/10/ghetts.jpg",
  },
];

// FUNCTION TO DISPLAY ARTISTS
function displayTrendingArtists() {
  const artistsGrid = document.querySelector(".artists-grid");

  if (artistsGrid) {
    artistsGrid.innerHTML = trendingArtists
      .map(
        (artist) => `
            <div class="artist-card">
                <div class="artist-image">
                    <img src="${artist.image}" alt="${artist.name}">
                </div>
                <div class="artist-info">
                    <h3>${artist.name}</h3>
                    <p class="artist-genre">${artist.genre}</p>
                    <p class="artist-followers">
                        <i class="fas fa-users"></i> ${artist.followers}
                    </p>
                </div>
            </div>
        `
      )
      .join("");
  }
}

// CALL THE FUNCTION WHEN THE PAGE LOADS
document.addEventListener("DOMContentLoaded", displayTrendingArtists);
