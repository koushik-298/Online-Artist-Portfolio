/**
 * SIENNA MUSE — Interactive Studio Script
 * Bohemian Luxury Portfolio Logic
 */

// =========================================================================
// 1. DATA STORES (ARTWORKS, EXHIBITIONS, JOURNAL)
// =========================================================================

const ARTWORKS = [
  {
    id: "fluid-chromatic-study",
    title: "Chromatic Fluid Study",
    category: "Ethereal",
    medium: "Liquid acrylic ink on archival cotton rag, hand-poured fluid technique, sealed with archival UV varnish",
    year: 2025,
    dimensions: "30 x 30 inches",
    price: "$1,600", 
    status: "Available",
    image: "assets/selected_archive_fluid.png",
    popularity: 97,
    description: "An entrancing swirl of liquid pigments — cobalt, vermillion, and viridian — poured and tilted across raw cotton rag in a single, unrepeatable motion. The chaos resolves into perfect organic symmetry, a visual metaphor for nature's hidden order.",
    notes: "Each pour is a one-of-a-kind event. No two fluid studies are alike. This piece was poured in a single session at the Carmel-by-the-Sea studio and required 72 hours of flat drying."
  },
  {
    id: "burg-eltz-castle",
    title: "Burg Eltz — Eternal Fortress",
    category: "Botanical",
    medium: "Archival pigment print onto 310gsm natural cotton rag, hand-applied mineral wash border, custom walnut frame",
    year: 2024,
    dimensions: "40 x 50 inches",
    price: "$2,200",
    status: "Available",
    image: "assets/selected_archive_castle.png",
    popularity: 94,
    description: "A dramatic archival study of Burg Eltz, the medieval Moselle Valley fortress that has stood unchanged for nine centuries. Shot under heavy pewter skies in the first frost of November, the print carries the weight of centuries — timeless, resolute, and breathtaking.",
    notes: "Part of Elena Rossi's 'Permanence' series exploring architectural monuments as organic forms rooted in the earth. Limited to 8 signed and numbered impressions."
  },
  {
    id: "still-life-meditation",
    title: "Minimalist Stoneware & Pear",
    category: "Still Life",
    medium: "Archival pigment print onto natural 310gsm cotton rag, raw sienna deckled edges, floated frame",
    year: 2024,
    dimensions: "18 x 24 inches",
    price: "$950",
    status: "Private Collection",
    image: "assets/still_life_meditation.png",
    popularity: 88,
    description: "An earthy, quiet composition featuring raw handmade stoneware and a slice of fresh pear under strong sunset shadow play. It acts as a window to slow living and intentional home staging.",
    notes: "Awarded Juried Selection at the Barcelona Minimalist Showcase. Re-prints are unavailable; original piece resides in a Zurich collection."
  },
  {
    id: "botanical-decay",
    title: "Decaying Wild Flora Study",
    category: "Botanical",
    medium: "Mixed-Media Collage, Archival Print, local Sienna Soil pigments, Gold Leaf cracks",
    year: 2025,
    dimensions: "24 x 24 inches",
    price: "$1,400",
    status: "Available",
    image: "assets/botanical_decay.png",
    popularity: 91,
    description: "A dramatic visual study of weathering and decay in natural plants. Dried oak moss and wild grass details are highlighted with delicate cracks of gold leaf, symbolizing beauty found in passing time.",
    notes: "Sealed under ultra-clear museum glass. Includes custom hand-ground clay frames crafted by local Carmel woodcarvers."
  },
  {
    id: "ethereal-reflection",
    title: "Sky Mirror Reflection",
    category: "Ethereal",
    medium: "Fine Art Pigment on Toned Organic Linen, mineral tea-stain border washes, natural Maple framing",
    year: 2024,
    dimensions: "36 x 48 inches",
    price: "$1,800",
    status: "Available",
    image: "assets/ethereal_reflection.png",
    popularity: 92,
    description: "A tranquil photographic print of misty river ripples reflecting high clouds and passing branches. Represents mysterious quietude and organic geometry, printed directly onto textured linen weave.",
    notes: "Commissioned initially for the Vance Hospitality Group Pop-Up. Released now to the general archival market."
  },
  {
    id: "featured-exhibition",
    title: "Earth & Soul Collage",
    category: "Commissions",
    medium: "Mixed-Media, heavy raw Canvas backing, hand-ground sienna clays, plant carbon wash",
    year: 2025,
    dimensions: "40 x 50 inches",
    price: "$3,200",
    status: "Commissioned",
    image: "assets/featured_exhibition.png",
    popularity: 85,
    description: "A bespoke, custom-scaled commission sequence blending landscape imagery with textured abstract soils. Hand-mixed terracotta washes give it a structural depth designed for double-height architectural spaces.",
    notes: "Private commission completed for the Coastal Bluffs luxury residential suites. Similar custom works can be booked through the inquiry drawer."
  },
  {
    id: "botanical-dream",
    title: "Eucalyptus Study I",
    category: "Botanical",
    medium: "Medium Format Analog Film, Archival Pigment onto Japanese Mulberry paper, Organic Beeswax glaze",
    year: 2025,
    dimensions: "24 x 36 inches",
    price: "$1,200",
    status: "Available",
    image: "assets/botanical_dream.png",
    popularity: 95,
    description: "A silent sensory study of a delicate eucalyptus branch captured in early morning light. Layered with hand-sifted coastal clay washes and detailed with a semi-matte beeswax coating, the print reflects the rustic wall shapes of Mediterranean sanctuaries.",
    notes: "Created over a 3-week exposure series in Carmel-by-the-Sea. Every print is hand-treated; minor organic variations in beeswax crystallization are intended elements of the mixed-media showcase."
  },
  {
    id: "ethereal-solitude",
    title: "Draped Solitude II",
    category: "Ethereal",
    medium: "Toned Silver Gelatin Print, layered raw heavy Linen canvas backing, hand-finished FSC Walnut framing",
    year: 2025,
    dimensions: "30 x 40 inches",
    price: "$1,500",
    status: "Available",
    image: "assets/ethereal_solitude.png",
    popularity: 98,
    description: "An elegant photographic examination of flowing linen catching bright sunbeams. Focuses on shadows and sheer folding surfaces, conveying breathing space and a serene sense of quiet isolation.",
    notes: "Part of the Permanent 'Silent Earth' collection. Series limited to 5 signed impressions."
  }
];

const EXHIBITIONS = [
  {
    id: "silent-earth-barcelona",
    name: "Silent Earth Solo Showcase",
    status: "Past",
    dates: "Oct 12 — Nov 30, 2024",
    location: "Hesperia Minimal Gallery, Barcelona, Spain",
    description: "An extensive visual journey showcasing 12 large-format mixed-media studies detailing rustic textures, beeswax coatings, and the quietude of Northern Spanish shorelines.",
    image: "assets/journal_philosophy.png"
  },
  {
    id: "earthy-alchemy-ny",
    name: "Earthy Alchemy Juried Group Exhibition",
    status: "Past",
    dates: "Jan 05 — Feb 20, 2025",
    location: "New York Center for Minimal Arts, NY",
    description: "A juried collective showcase celebrating natural pigments and raw textures in modern high-end creative work. Featured Sienna's signature Eucalyptus Studies.",
    image: "assets/still_life_meditation.png"
  },
  {
    id: "quietude-spaces-virtual",
    name: "Quietude Spaces Interactive Gallery",
    status: "Virtual",
    dates: "Ongoing Exhibition",
    location: "Virtual Gallery Hub / Online Access",
    description: "A high-fidelity virtual reality walkthrough, presenting the Carmel-by-the-Sea studio workspace and unreleased botanical studies in digital spatial luxury.",
    image: "assets/botanical_dream.png"
  },
  {
    id: "mediterranean-solitude",
    name: "Mediterranean Solitude Studies",
    status: "Upcoming",
    dates: "Aug 15 — Sep 30, 2026",
    location: "Athens Cultural Fine Art Pavilion, Greece",
    description: "An upcoming solo showcase presenting the artist's residency work: photographic emulsions printed onto hand-woven Greek linen backed by antique stoneware slabs.",
    image: "assets/ethereal_solitude.png"
  }
];

const JOURNAL_POSTS = [
  {
    id: "depth-of-field-silence",
    title: "Quietude: The Art of Photographic Breathing Space",
    category: "Process",
    excerpt: "Exploring why high-end minimalist design relies on expansive, unfilled spaces to create visual luxury and emotional rest.",
    date: "May 10, 2026",
    readTime: "5 min read",
    image: "assets/journal_philosophy.png",
    content: "When we walk into an empty stone sanctuary, our breathing immediately slows. In photography, the 'unfilled space' or negative space acts in the exact same manner. The goal of Sienna Muse is not to document an object, but to frame the silence surrounding it. We capture dried leaves, empty pottery, and soft shadows, giving the eyes room to rest and the soul room to breathe."
  },
  {
    // Add more articles in array
    id: "analog-medium-format",
    title: "Why We Still Exposure on Medium Format Analog Film",
    category: "Insights",
    excerpt: "A technical and artistic reflection on tactile grain, manual hand-wound cameras, and finding beauty in slow chemical exposures.",
    date: "April 18, 2026",
    readTime: "7 min read",
    image: "assets/still_life_meditation.png",
    content: "Digital cameras are perfect. They capture everything instantly. But art is rarely about perfection. Working with vintage medium format bodies forces an intentional boundary. You have 10 frames per roll. Each shutter click represents a choice—a deep breath, a study of the light direction, and a prayer for the chemistry to react. This deliberate friction builds the premium authenticity in fine-art photography."
  },
  {
    id: "working-with-beeswax",
    title: "The Alchemy of Hot Beeswax & Archival Prints",
    category: "Process",
    excerpt: "Unpacking the studio's unique mixed-media technique: applying organic wax coatings to preserve colors and create tactile dimensions.",
    date: "March 22, 2026",
    readTime: "8 min read",
    image: "assets/botanical_decay.png",
    content: "Applying hot organic beeswax (encaustic process) to fine-art prints is a traditional method dating back to Greek antiquities. In our Carmel studio, we heat local Carmel Valley beeswax to 200 degrees, applying it in fine, layered strokes over the printed mulberry sheets. The wax bonds with the fibers, creating a semi-translucent, archival shield that responds beautifully to soft room shadows."
  },
  {
    id: "collecting-minimal-art",
    title: "A Collector's Guide to Curation in Modern Homes",
    category: "Insights",
    excerpt: "Practical insights on lighting, framing options, and matching warm sienna clay tones with modern minimalist interiors.",
    date: "February 04, 2026",
    readTime: "6 min read",
    image: "assets/featured_exhibition.png",
    content: "Fine art should not compete with a room; it should anchor it. When staging high-end residential interiors, matching sienna, rust-brown, and olive-green photographic pieces with raw concrete or light oak plaster walls creates an immediate bohemian luxury appeal. We recommend framing under museum glass to eliminate reflection and preserve the delicate deckled edges of mulberry sheets."
  },
  {
    id: "studio-workspace-tour",
    title: "Behind the Scenes: Inside the Carmel Studio",
    category: "Behind the Scenes",
    excerpt: "A visual and narrative tour through the Sienna Muse studio workspace: darkrooms, beeswax heating chambers, hand-drying racks, and archival storage.",
    date: "January 28, 2026",
    readTime: "9 min read",
    image: "assets/botanical_dream.png",
    content: "Our Carmel-by-the-Sea studio spans three interconnected lofts overlooking the Monterey Peninsula. The northern wing houses the large-format darkroom with custom safelighting filtered through amber gel sheets. The central studio holds our beeswax heating apparatus (maintained at precisely 200 degrees Fahrenheit) and hand-poured workstations where we apply organic wax layers. The eastern archive stores completed prints under climate control at 55% humidity and 68 degrees Fahrenheit. Every detail of the space reflects our commitment to archival excellence and intentional creative practice."
  },
  {
    id: "waxing-prints-ritual",
    title: "Behind the Scenes: The Waxing Ritual for Archival Prints",
    category: "Behind the Scenes",
    excerpt: "A close look at the handcrafted encaustic finishing process that gives each archival print a warm, tactile sheen.",
    date: "December 05, 2025",
    readTime: "7 min read",
    image: "assets/journal_philosophy.png",
    content: "In the studio, the final layer of organic beeswax is not an afterthought — it is the finishing touch that defines our texture and luminosity. Each print is lifted gently, heated, and hand-coated with a thin veil of wax that seals color, softens edges, and invites the viewer to move closer. This ritual is carefully timed and executed to preserve vibrancy while keeping the work breathable, ensuring every piece travels beautifully and lasts for generations."
  },
  {
    id: "art-logistics-collection",
    title: "Behind the Scenes: Packing Fine Art for Global Collectors",
    category: "Behind the Scenes",
    excerpt: "How Sienna Muse packages delicate prints and mixed-media pieces for safe international delivery with museum-grade care.",
    date: "November 16, 2025",
    readTime: "6 min read",
    image: "assets/featured_exhibition.png",
    content: "Shipping fine art is a study in restraint and craft. In our Carmel studio, we layer archival tissue, custom-cut foam, and reinforced shipping crates with the same care we use in the darkroom. Each print is measured, padded, and documented before it leaves, then accompanied by a collector care guide explaining optimal display, humidity control, and long-term preservation. This behind-the-scenes process ensures that every work arrives ready to be installed and cherished instantly."
  },
  {
    id: "interview-photographer-residency",
    title: "Artist Interview: Six Months in Greek Residency",
    category: "Interviews",
    excerpt: "An in-depth conversation about the upcoming Mediterranean Solitude Studies residency, artistic inspiration, and the role of geography in creative work.",
    date: "January 12, 2026",
    readTime: "11 min read",
    image: "assets/ethereal_solitude.png",
    content: "This summer, we sat down to discuss the forthcoming residency in Athens and the Greek islands. The conversation touched on how place shapes aesthetic choices—the difference between Carmel's misty seascapes and the stark Mediterranean clarity. We explored why limitation breeds innovation: a smaller studio, different pigments, unfamiliar light sources all force artistic reconsideration. The artist emphasized that travel isn't about escaping one's practice, but deepening it through radical environmental change. The resulting photographic emulsions and hand-woven linen experiments will premiere at the Athens Cultural Fine Art Pavilion in August 2026."
  },
  {
    id: "interview-local-beekeeper",
    title: "Artisan Interview: Our Organic Beeswax Supplier",
    category: "Interviews",
    excerpt: "Meeting with the local Carmel Valley beekeeper whose organic wax has been central to our encaustic practice for three years.",
    date: "December 18, 2025",
    readTime: "7 min read",
    image: "assets/botanical_decay.png",
    content: "Our beeswax supplier, a fifth-generation Carmel Valley beekeeper, shares insights into seasonal variations, purity standards, and the science of sustainable apiary practices. We discussed how different floral sources—sage, wildflower, coastal blooms—impart subtle color notes to the wax itself. The beekeeper explained that our commitment to organic, pesticide-free sourcing limits yield but guarantees the chemical purity necessary for archival fine-art applications. This collaboration represents the intersection of agricultural stewardship and artistic vision that defines Sienna Muse's creative philosophy."
  }
];

// =========================================================================
// 2. DYNAMIC LAYOUT GENERATION & TEMPLATE RENDERING
// =========================================================================

// Global Pagination & Gallery state
let activePortfolioFilter = "All";
let portfolioSearchQuery = "";
let portfolioSortMethod = "default";
let portfolioVisibleCount = 3;

/**
 * Renders the homepage Selected Archives 2-column showcase
 * with large rounded-[2.5rem] cards matching the screenshot
 */
function renderHomepageGallery() {
  const container = document.getElementById('home-gallery-grid');
  if (!container) return;

  container.innerHTML = '';

  // Show first 2 items: fluid ink + Burg Eltz castle
  const showcase = ARTWORKS.slice(0, 2);

  // Alternate aspect ratios for the two columns
  const aspects = ['aspect-[3/4]', 'aspect-[4/5]'];

  showcase.forEach((art, index) => {
    const aspect = aspects[index] || 'aspect-[4/5]';
    const stagger = index === 1 ? 'md:mt-16' : ''; // Offset second card down

    const itemHtml = `
      <div class="group relative flex flex-col reveal ${stagger}" style="--stagger-index: ${index}">
        <!-- Card with large rounded corners -->
        <div class="relative w-full ${aspect} rounded-[2.5rem] overflow-hidden shadow-xl img-zoom-container bg-siennaHighlight border border-siennaDark/5">
          <img src="${art.image}" alt="${art.title}" class="w-full h-full object-cover img-zoom grayscale-hover">

          <!-- Hover overlay -->
          <div class="absolute inset-0 rounded-[2.5rem] bg-siennaDark/45 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
            <span class="text-[9px] uppercase tracking-widest text-siennaHighlight/80 font-semibold mb-1">${art.category}</span>
            <h3 class="font-serif text-2xl md:text-3xl text-siennaBg font-medium leading-snug mb-1">${art.title}</h3>
            <span class="text-siennaHighlight/60 text-xs font-light">${art.medium.split(',')[0]}</span>
            <a href="#artwork/${art.id}" class="mt-5 inline-flex items-center text-[10px] uppercase font-bold tracking-widest text-siennaBg hover:text-siennaTertiary transition-colors">
              View Details
              <iconify-icon icon="ph:arrow-right-thin" class="ml-1.5 text-sm"></iconify-icon>
            </a>
          </div>

          <!-- Category pill badge (top-left) -->
          <div class="absolute top-5 left-5 bg-siennaBg/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
            <span class="text-[9px] uppercase tracking-widest text-siennaPrimary font-bold">${art.category}</span>
          </div>
        </div>

        <!-- Card metadata below -->
        <div class="mt-5 px-2 flex justify-between items-start">
          <div>
            <h4 class="font-serif text-xl text-siennaDark font-medium group-hover:text-siennaPrimary transition-colors leading-snug">${art.title}</h4>
            <span class="text-xs text-siennaLight font-light block mt-0.5">${art.year} &middot; ${art.medium.split(',')[0]}</span>
          </div>
          <span class="font-serif text-base text-siennaPrimary font-semibold shrink-0 ml-4">${art.price}</span>
        </div>
      </div>
    `;
    container.innerHTML += itemHtml;
  });

  refreshScrollReveals();
}

/**
 * Renders the extended Portfolio View (filters, sorting, searching)
 */
function renderPortfolioGallery() {
  const grid = document.getElementById('portfolio-gallery-grid');
  const noResults = document.getElementById('portfolio-no-results');
  const loadMoreBtn = document.getElementById('portfolio-load-more-container');
  if (!grid) return;

  grid.innerHTML = "";

  // 1. Filter
  let list = ARTWORKS.filter(art => {
    if (activePortfolioFilter === "All") return true;
    return art.category.toLowerCase() === activePortfolioFilter.toLowerCase();
  });

  // 2. Search
  if (portfolioSearchQuery.trim() !== "") {
    const q = portfolioSearchQuery.toLowerCase().trim();
    list = list.filter(art => 
      art.title.toLowerCase().includes(q) || 
      art.category.toLowerCase().includes(q) ||
      art.medium.toLowerCase().includes(q) ||
      art.description.toLowerCase().includes(q)
    );
  }

  // 3. Sort
  if (portfolioSortMethod === "title") {
    list.sort((a, b) => a.title.localeCompare(b.title));
  } else if (portfolioSortMethod === "year") {
    list.sort((a, b) => b.year - a.year); // Newest first
  } else if (portfolioSortMethod === "popularity") {
    list.sort((a, b) => b.popularity - a.popularity);
  }

  // Handle empty state
  if (list.length === 0) {
    noResults.classList.remove('hidden');
    loadMoreBtn.classList.add('hidden');
    return;
  } else {
    noResults.classList.add('hidden');
  }

  // Pagination crop
  const visibleList = list.slice(0, portfolioVisibleCount);
  
  if (portfolioVisibleCount >= list.length) {
    loadMoreBtn.classList.add('hidden');
  } else {
    loadMoreBtn.classList.remove('hidden');
  }

  // Render cards
  visibleList.forEach((art, index) => {
    const cardHtml = `
      <div class="group relative flex flex-col bg-siennaBg border border-siennaDark/5 p-4 shadow-sm hover-float reveal" style="--stagger-index: ${index % 3}">
        <div class="relative w-full aspect-[4/5] overflow-hidden bg-siennaHighlight img-zoom-container">
          <img src="${art.image}" alt="${art.title}" class="w-full h-full object-cover img-zoom grayscale-hover">
          <!-- Lightbox trigger overlay -->
          <button onclick="openLightbox('${art.image}', '${art.title}', '${art.medium.replace(/'/g, "\\'")}')" aria-label="Zoom image" class="absolute top-4 right-4 w-9 h-9 bg-siennaBg/90 backdrop-blur-sm border border-siennaDark/5 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity text-siennaPrimary hover:bg-siennaPrimary hover:text-siennaBg">
            <iconify-icon icon="ph:magnifying-glass-plus-light"></iconify-icon>
          </button>
        </div>

        <div class="mt-6 flex flex-col flex-grow justify-between">
          <div>
            <div class="flex justify-between items-center mb-1">
              <span class="text-[9px] uppercase tracking-widest text-siennaPrimary font-semibold bg-siennaHighlight px-2.5 py-1">${art.category}</span>
              <span class="text-xs text-siennaLight">${art.year}</span>
            </div>
            <h3 class="font-serif text-2xl text-siennaDark font-medium mb-2">${art.title}</h3>
            <p class="text-siennaLight font-light text-xs leading-relaxed line-clamp-2">${art.description}</p>
          </div>
          
          <div class="mt-6 pt-4 border-t border-siennaDark/5 flex justify-between items-center">
            <span class="font-serif text-base text-siennaPrimary font-semibold">${art.price}</span>
            <a href="#artwork/${art.id}" class="text-[10px] uppercase font-bold tracking-widest text-siennaDark hover:text-siennaPrimary flex items-center group">
              View Details
              <iconify-icon icon="ph:arrow-right-thin" class="ml-1.5 text-sm transition-transform duration-300 group-hover:translate-x-1"></iconify-icon>
            </a>
          </div>
        </div>
      </div>
    `;
    grid.innerHTML += cardHtml;
  });

  refreshScrollReveals();
}

/**
 * Triggers loading more items in portfolio page
 */
window.loadMoreArtworks = function() {
  portfolioVisibleCount += 3;
  renderPortfolioGallery();
};

/**
 * Sort trigger
 */
window.sortPortfolio = function(val) {
  portfolioSortMethod = val;
  portfolioVisibleCount = 3; // Reset paging
  renderPortfolioGallery();
};

/**
 * Fast direct homepage category router
 */
window.navigateToPortfolio = function(category) {
  window.location.hash = "#portfolio";
  // Small timeout to allow SPA view pane transition to complete before rendering filters
  setTimeout(() => {
    filterPortfolio(category);
  }, 100);
};

/**
 * Activates category filters in portfolio layout
 */
window.filterPortfolio = function(category) {
  activePortfolioFilter = category;
  portfolioVisibleCount = 3; // Reset paging

  // Update underline state of buttons
  const buttons = document.querySelectorAll('#portfolio-active-filters button');
  buttons.forEach(btn => {
    const filterType = btn.getAttribute('data-filter');
    if (filterType.toLowerCase() === category.toLowerCase()) {
      btn.className = "px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all border-b-2 border-siennaPrimary text-siennaPrimary";
    } else {
      btn.className = "px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all border-b-2 border-transparent text-siennaLight hover:text-siennaPrimary";
    }
  });

  renderPortfolioGallery();
};

// =========================================================================
// 3. ARTWORK DETAIL PAGE DYNAMIC INJECTION
// =========================================================================

/**
 * Loads detailed specifications and images for an artwork, populating the view
 */
function renderArtworkDetails(artworkId) {
  const container = document.getElementById('artwork-detail-container');
  if (!container) return;

  const art = ARTWORKS.find(a => a.id === artworkId);
  if (!art) {
    container.innerHTML = `
      <div class="col-span-12 text-center py-20 bg-siennaHighlight/50 border border-siennaDark/5">
        <iconify-icon icon="ph:warning-circle-thin" class="text-5xl text-siennaTertiary mb-4"></iconify-icon>
        <h2 class="font-serif text-2xl text-siennaDark">Artwork not found</h2>
        <a href="#portfolio" class="text-xs font-bold uppercase tracking-widest text-siennaPrimary hover:underline mt-4 inline-block">Return to portfolio</a>
      </div>
    `;
    return;
  }

  // Inquire button availability check
  const inquiryStatusBtn = art.status === "Available" 
    ? `<button onclick="openDrawerWithArtwork('${art.title}')" class="w-full px-8 py-4 bg-siennaPrimary hover:bg-siennaTertiary text-siennaBg text-xs font-bold uppercase tracking-widest transition-colors flex justify-center items-center">
         Inquire About This Piece
         <iconify-icon icon="ph:envelope-simple-light" class="ml-2 text-base"></iconify-icon>
       </button>`
    : `<button disabled class="w-full px-8 py-4 bg-siennaHighlight border border-siennaDark/10 text-siennaLight/70 text-xs font-bold uppercase tracking-widest cursor-not-allowed flex justify-center items-center">
         Sold — Private Collection
         <iconify-icon icon="ph:lock-simple-light" class="ml-2 text-base"></iconify-icon>
       </button>`;

  container.innerHTML = `
    <!-- Left Column: Large Image Showcase -->
    <div class="lg:col-span-7 flex flex-col reveal">
      <div class="relative w-full aspect-[4/5] bg-siennaHighlight overflow-hidden shadow-2xl border border-siennaDark/5 img-zoom-container">
        <img src="${art.image}" alt="${art.title}" class="w-full h-full object-cover img-zoom">
        
        <!-- Absolute Zoom Button overlay -->
        <button onclick="openLightbox('${art.image}', '${art.title}', '${art.medium.replace(/'/g, "\\'")}')" aria-label="Zoom image" class="absolute bottom-6 right-6 px-4 py-2.5 bg-siennaBg/90 backdrop-blur-sm border border-siennaDark/10 text-xs uppercase tracking-widest font-semibold text-siennaPrimary flex items-center hover:bg-siennaPrimary hover:text-siennaBg transition-colors shadow-xl">
          Zoom Master Frame
          <iconify-icon icon="ph:magnifying-glass-plus-light" class="ml-2 text-base"></iconify-icon>
        </button>
      </div>
    </div>

    <!-- Right Column: Premium Sidebar Metadata -->
    <div class="lg:col-span-5 flex flex-col justify-between reveal delay-200">
      <div class="space-y-8">
        <div>
          <!-- Breadcrumb tags -->
          <div class="flex items-center space-x-3 mb-2">
            <span class="text-[9px] uppercase tracking-widest text-siennaPrimary bg-siennaHighlight px-2.5 py-1 font-semibold">${art.category}</span>
            <span class="text-[9px] uppercase tracking-widest font-bold text-siennaSecondary">${art.status}</span>
          </div>
          <h1 class="font-serif text-4xl md:text-5xl text-siennaDark leading-tight">${art.title}</h1>
          <div class="h-[1px] w-20 bg-siennaPrimary mt-4"></div>
        </div>

        <!-- Specifications list -->
        <div class="space-y-4 font-sans text-sm border-b border-siennaDark/10 pb-6">
          <div class="flex justify-between py-1.5 border-b border-siennaDark/5">
            <span class="text-[10px] uppercase font-bold tracking-widest text-siennaLight">Artist Showcase</span>
            <span class="text-siennaDark font-medium font-serif italic">Sienna Muse Studio</span>
          </div>
          <div class="flex justify-between py-1.5 border-b border-siennaDark/5">
            <span class="text-[10px] uppercase font-bold tracking-widest text-siennaLight">Year Created</span>
            <span class="text-siennaDark font-medium">${art.year}</span>
          </div>
          <div class="flex justify-between py-1.5 border-b border-siennaDark/5">
            <span class="text-[10px] uppercase font-bold tracking-widest text-siennaLight">Material Medium</span>
            <span class="text-siennaDark text-right max-w-[70%] font-light leading-relaxed text-xs">${art.medium}</span>
          </div>
          <div class="flex justify-between py-1.5 border-b border-siennaDark/5">
            <span class="text-[10px] uppercase font-bold tracking-widest text-siennaLight">Physical Dimensions</span>
            <span class="text-siennaDark font-medium">${art.dimensions}</span>
          </div>
          <div class="flex justify-between items-center py-2.5">
            <span class="text-[10px] uppercase font-bold tracking-widest text-siennaLight">Archival Value</span>
            <span class="text-2xl text-siennaPrimary font-bold font-serif">${art.price}</span>
          </div>
        </div>

        <!-- Description notes -->
        <div class="space-y-4">
          <h3 class="text-[10px] uppercase font-bold tracking-widest text-siennaDark">Artist Notes & Concept</h3>
          <p class="text-siennaLight font-light text-sm leading-relaxed">${art.description}</p>
          <p class="text-siennaLight font-light text-xs leading-relaxed italic bg-siennaHighlight/50 border-l-2 border-siennaPrimary p-3">${art.notes}</p>
        </div>
      </div>

      <!-- Action Footer -->
      <div class="mt-12 space-y-4 pt-6 border-t border-siennaDark/10">
        ${inquiryStatusBtn}
        
        <!-- Social shares -->
        <div class="flex items-center justify-between pt-2">
          <span class="text-[9px] uppercase tracking-widest text-siennaLight font-semibold">Share Archival Sheet</span>
          <div class="flex space-x-3 text-siennaLight">
            <button onclick="shareLink('copy')" aria-label="Copy link to clipboard" class="w-8 h-8 rounded-full border border-siennaDark/10 flex justify-center items-center hover:text-siennaPrimary hover:border-siennaPrimary transition-colors">
              <iconify-icon icon="ph:link-simple-light"></iconify-icon>
            </button>
            <button onclick="shareLink('pinterest')" aria-label="Pin art" class="w-8 h-8 rounded-full border border-siennaDark/10 flex justify-center items-center hover:text-siennaPrimary hover:border-siennaPrimary transition-colors">
              <iconify-icon icon="ph:pinterest-logo-light"></iconify-icon>
            </button>
            <button onclick="shareLink('social')" aria-label="Share facebook" class="w-8 h-8 rounded-full border border-siennaDark/10 flex justify-center items-center hover:text-siennaPrimary hover:border-siennaPrimary transition-colors">
              <iconify-icon icon="ph:facebook-logo-light"></iconify-icon>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  renderRelatedWorksCarousel(artworkId);
  refreshScrollReveals();
}

/**
 * Builds the related works horizontal carousel items
 */
function renderRelatedWorksCarousel(currentArtId) {
  const track = document.getElementById('carousel-inner-track');
  if (!track) return;

  track.innerHTML = "";
  
  // Get other artworks in portfolio
  const related = ARTWORKS.filter(art => art.id !== currentArtId);

  related.forEach((art, index) => {
    const slide = `
      <div class="w-[280px] md:w-[350px] shrink-0 bg-siennaBg border border-siennaDark/5 p-4 shadow-sm group hover-float flex flex-col justify-between" style="--stagger-index: ${index}">
        <div class="relative w-full aspect-[4/5] overflow-hidden bg-siennaHighlight img-zoom-container">
          <img src="${art.image}" alt="${art.title}" class="w-full h-full object-cover img-zoom grayscale-hover">
          <a href="#artwork/${art.id}" class="absolute inset-0 bg-siennaDark/25 opacity-0 group-hover:opacity-100 transition-opacity flex justify-center items-center text-siennaBg text-xs uppercase font-bold tracking-widest">
            Inspect Work
          </a>
        </div>
        <div class="mt-4 flex justify-between items-start">
          <div>
            <h4 class="font-serif text-base text-siennaDark font-medium group-hover:text-siennaPrimary transition-colors">${art.title}</h4>
            <span class="text-[10px] text-siennaLight font-light">${art.category}</span>
          </div>
          <span class="font-serif text-sm text-siennaPrimary font-semibold">${art.price}</span>
        </div>
      </div>
    `;
    track.innerHTML += slide;
  });

  // Reinitialize carousel dragging logic
  initCarouselPhysics('related-works-carousel');
}

// =========================================================================
// 4. EXHIBITIONS & TIMELINE DYNAMICS
// =========================================================================

let activeExhibitionFilter = "All";

/**
 * Injects exhibitions list with filters (Past, Upcoming, Virtual)
 */
function renderExhibitionsTimeline() {
  const container = document.getElementById('exhibitions-events-grid');
  if (!container) return;

  container.innerHTML = "";

  const list = EXHIBITIONS.filter(ex => {
    if (activeExhibitionFilter === "All") return true;
    return ex.status.toLowerCase() === activeExhibitionFilter.toLowerCase();
  });

  list.forEach((ex, index) => {
    const badgeColor = ex.status === "Upcoming" ? "bg-siennaTertiary text-siennaBg" : 
                       ex.status === "Virtual" ? "bg-siennaSecondary text-siennaBg" : 
                       "bg-siennaHighlight text-siennaLight border border-siennaDark/10";
    
    const cardHtml = `
      <div class="bg-siennaBg border border-siennaDark/5 overflow-hidden shadow-md flex flex-col justify-between hover-float reveal" style="--stagger-index: ${index % 3}">
        <div class="w-full aspect-[16/10] overflow-hidden bg-siennaHighlight img-zoom-container relative">
          <img src="${ex.image}" alt="${ex.name}" class="w-full h-full object-cover img-zoom grayscale-hover">
          <span class="absolute top-4 left-4 text-[9px] uppercase font-bold tracking-widest px-3 py-1 ${badgeColor}">${ex.status}</span>
        </div>
        
        <div class="p-6 flex-grow flex flex-col justify-between">
          <div class="space-y-3">
            <span class="text-[10px] uppercase font-semibold text-siennaPrimary block tracking-widest">${ex.dates}</span>
            <h3 class="font-serif text-2xl text-siennaDark leading-snug">${ex.name}</h3>
            <p class="text-siennaLight font-light text-xs leading-relaxed line-clamp-3">${ex.description}</p>
          </div>
          
          <div class="mt-6 pt-4 border-t border-siennaDark/5 flex items-center space-x-2 text-siennaLight">
            <iconify-icon icon="ph:map-pin-light" class="text-base text-siennaPrimary"></iconify-icon>
            <span class="text-[11px] font-medium font-sans truncate">${ex.location}</span>
          </div>
        </div>
      </div>
    `;
    container.innerHTML += cardHtml;
  });

  refreshScrollReveals();
}

/**
 * Filter timeline view
 */
window.filterExhibitions = function(status) {
  activeExhibitionFilter = status;

  const buttons = document.querySelectorAll('#exhibition-filters-wrapper button');
  buttons.forEach(btn => {
    const val = btn.getAttribute('data-ex-filter');
    if (val.toLowerCase() === status.toLowerCase()) {
      btn.className = "px-5 py-2 text-xs font-semibold uppercase tracking-wider bg-siennaPrimary text-siennaBg border border-siennaPrimary shadow-md";
    } else {
      btn.className = "px-5 py-2 text-xs font-semibold uppercase tracking-wider bg-siennaBg text-siennaLight hover:text-siennaPrimary border border-siennaDark/5 transition-all shadow-sm";
    }
  });

  renderExhibitionsTimeline();
};

// =========================================================================
// 5. JOURNAL & BLOG ESSAYS
// =========================================================================

let activeBlogFilter = "All";

/**
 * Injects Blog featured card and lists, featuring categories and read-more details
 */
function renderJournalSection() {
  const featuredContainer = document.getElementById('journal-featured-post-container');
  const grid = document.getElementById('journal-posts-grid');
  const countIndicator = document.getElementById('blog-posts-count');
  if (!grid) return;

  // Filter list
  const list = JOURNAL_POSTS.filter(post => {
    if (activeBlogFilter === "All") return true;
    return post.category.toLowerCase() === activeBlogFilter.toLowerCase();
  });

  if (countIndicator) {
    countIndicator.innerText = `Showing ${list.length} Articles`;
  }

  // 1. Render Featured large card (Only when filtering 'All' or if items exist)
  if (featuredContainer) {
    featuredContainer.innerHTML = "";
    if (list.length > 0 && activeBlogFilter === "All") {
      const feat = list[0];
      featuredContainer.innerHTML = `
        <div class="bg-siennaHighlight border border-siennaDark/5 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch shadow-md overflow-hidden hover-float">
          <div class="lg:col-span-7 aspect-[16/10] lg:aspect-auto overflow-hidden bg-siennaHighlight img-zoom-container">
            <img src="${feat.image}" alt="${feat.title}" class="w-full h-full object-cover img-zoom">
          </div>
          <div class="lg:col-span-5 p-8 md:p-12 flex flex-col justify-between">
            <div class="space-y-4">
              <div class="flex items-center space-x-3 text-xs text-siennaLight">
                <span class="text-[9px] uppercase tracking-widest text-siennaPrimary bg-siennaBg px-2.5 py-1 font-semibold">${feat.category}</span>
                <span>● ${feat.date}</span>
              </div>
              <h2 class="font-serif text-3xl md:text-4xl text-siennaDark leading-snug">${feat.title}</h2>
              <p class="text-siennaLight font-light text-sm leading-relaxed">${feat.excerpt}</p>
            </div>
            
            <div class="mt-8 pt-6 border-t border-siennaDark/5 flex justify-between items-center">
              <span class="text-xs text-siennaLight font-medium">${feat.readTime}</span>
              <button onclick="readBlogPost('${feat.id}')" class="text-xs uppercase tracking-widest font-bold text-siennaPrimary hover:text-siennaTertiary flex items-center group">
                Read Featured Article
                <iconify-icon icon="ph:arrow-right-thin" class="ml-1.5 transition-transform duration-300 group-hover:translate-x-1.5"></iconify-icon>
              </button>
            </div>
          </div>
        </div>
      `;
    }
  }

  // 2. Render Cards list
  grid.innerHTML = "";
  // If 'All' filter is active, skip first item because it's featured
  const renderedList = (activeBlogFilter === "All" && list.length > 0) ? list.slice(1) : list;

  if (renderedList.length === 0 && activeBlogFilter !== "All") {
    // If we filtered and no items exist, show empty state or render the filtered ones
    if (list.length > 0) {
      list.forEach((post, index) => renderBlogCard(post, index));
    }
  } else {
    renderedList.forEach((post, index) => renderBlogCard(post, index));
  }

  function renderBlogCard(post, index) {
    const postHtml = `
      <div class="bg-siennaBg border border-siennaDark/5 p-4 shadow-sm hover-float flex flex-col justify-between reveal" style="--stagger-index: ${index % 3}">
        <div class="w-full aspect-[16/10] overflow-hidden bg-siennaHighlight img-zoom-container">
          <img src="${post.image}" alt="${post.title}" class="w-full h-full object-cover img-zoom grayscale-hover">
        </div>
        
        <div class="mt-6 flex-grow flex flex-col justify-between">
          <div class="space-y-3">
            <div class="flex items-center space-x-2 text-[10px] text-siennaLight">
              <span class="text-[9px] uppercase tracking-widest text-siennaPrimary bg-siennaHighlight px-2.5 py-1 font-semibold">${post.category}</span>
              <span>● ${post.date}</span>
            </div>
            <h3 class="font-serif text-2xl text-siennaDark leading-snug line-clamp-2">${post.title}</h3>
            <p class="text-siennaLight font-light text-xs leading-relaxed line-clamp-3">${post.excerpt}</p>
          </div>
          
          <div class="mt-6 pt-4 border-t border-siennaDark/5 flex justify-between items-center">
            <span class="text-[10px] text-siennaLight font-medium">${post.readTime}</span>
            <button onclick="readBlogPost('${post.id}')" class="text-xs uppercase tracking-widest font-bold text-siennaDark hover:text-siennaPrimary flex items-center group">
              Read Essay
              <iconify-icon icon="ph:arrow-right-thin" class="ml-1.5 transition-transform duration-300 group-hover:translate-x-1"></iconify-icon>
            </button>
          </div>
        </div>
      </div>
    `;
    grid.innerHTML += postHtml;
  }

  refreshScrollReveals();
}

/**
 * Filter blog posts grid
 */
window.filterBlog = function(category) {
  activeBlogFilter = category;

  const buttons = document.querySelectorAll('#blog-category-filters button');
  buttons.forEach(btn => {
    const val = btn.getAttribute('data-blog-filter');
    if (val.toLowerCase() === category.toLowerCase()) {
      btn.className = "px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-siennaDark text-siennaBg border border-siennaDark";
    } else {
      btn.className = "px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-siennaBg text-siennaLight hover:text-siennaPrimary border border-siennaDark/5 shadow-sm transition-all";
    }
  });

  renderJournalSection();
};

/**
 * Custom light Modal overlay reader for reading blogs
 */
window.readBlogPost = function(postId) {
  const post = JOURNAL_POSTS.find(p => p.id === postId);
  if (!post) return;

  // Let's reuse lightbox structure to show blog post reading overlays or standard dialogs!
  // It is highly modular and keeps the code clean.
  const lightbox = document.getElementById('artwork-lightbox');
  const zoomedImg = document.getElementById('lightbox-zoomed-img');
  const title = document.getElementById('lightbox-artwork-title');
  const medium = document.getElementById('lightbox-artwork-medium');
  if (!lightbox) return;

  // Inject blog contents instead of zoomed image structure temporarily
  // We can do this cleanly by backing up standard elements or updating dynamically.
  // A cleaner approach is to use standard alerts, or simple mock overlays.
  // Let's create a gorgeous custom layout specifically in lightbox for blogs if read:
  zoomedImg.style.display = "none";
  
  // Temporarily append a readable paragraph section in lightbox metadata
  title.innerText = post.title;
  title.className = "font-serif text-3xl text-siennaBg max-w-2xl px-6 leading-tight";
  
  medium.innerHTML = `
    <span class="text-xs text-siennaTertiary uppercase tracking-widest font-semibold">${post.category} ● ${post.date}</span>
    <div class="max-w-2xl text-left font-sans font-light text-sm text-siennaHighlight/90 mt-8 leading-relaxed space-y-4 px-6 max-h-[50vh] overflow-y-auto pr-3">
      <p class="text-base font-medium italic border-l-2 border-siennaTertiary pl-4 mb-6">"${post.excerpt}"</p>
      <p>${post.content}</p>
      <p>Every artist strives for a voice, a distinct signature that differentiates their work from others. By slowing down our physical timeline and prioritizing textured plaster, beeswax layers, and manual chemical toning, our portfolio aims to serve as a quiet respite. Our Carmel-by-the-Sea doors are always open to curators and staging professionals looking to inspect these processes in detail.</p>
    </div>
  `;

  lightbox.classList.add('opacity-100', 'pointer-events-auto');
  document.body.style.overflow = "hidden"; // Lock scrolling
};

// =========================================================================
// 6. CLIENT-SIDE ROUTER (HASH CHANGING & VIEW PANES STATE)
// =========================================================================

const VALID_VIEWS = ["home", "portfolio", "artwork", "exhibitions", "journal", "private", "admin", "about", "services", "contact"];

function handleHashRouting() {
  const rawHash = window.location.hash.substring(1) || "home";
  
  // Split params: e.g. "artwork/botanical-dream" -> ["artwork", "botanical-dream"]
  const parts = rawHash.split('/');
  const baseView = parts[0];
  const param = parts[1];

  // Close hamburger menu and standard overlays automatically on route change
  toggleMobileMenu(false);
  toggleInquiryDrawer(false);
  closeLightbox();

  if (!VALID_VIEWS.includes(baseView)) {
    window.location.hash = "#home";
    return;
  }

  // Find views
  const viewPanes = document.querySelectorAll('.view-pane');
  const navLinks = document.querySelectorAll('header nav a, #mobile-menu nav a');
  
  // Update view classes: 0.6s transitions
  viewPanes.forEach(pane => {
    pane.classList.remove('active');
    // Hide panel from DOM reading logic
    if (pane.id === `${baseView}-view`) {
      // Small timeout to coordinate a smooth fade-in
      setTimeout(() => {
        pane.classList.add('active');
        // Trigger automated top scroll on new page reveals
        window.scrollTo({ top: 0, behavior: 'instant' });
        refreshScrollReveals();
      }, 50);
    }
  });

  // Update Header navigation active bar highlights
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === `#${baseView}`) {
      link.classList.add('active', 'text-siennaPrimary');
      link.classList.remove('text-siennaDark/80');
    } else {
      link.classList.remove('active', 'text-siennaPrimary');
      link.classList.add('text-siennaDark/80');
    }
  });

  // Dynamic injections on page activation
  if (baseView === "home") {
    renderHomepageGallery();
  } else if (baseView === "portfolio") {
    renderPortfolioGallery();
  } else if (baseView === "artwork" && param) {
    renderArtworkDetails(param);
  } else if (baseView === "exhibitions") {
    renderExhibitionsTimeline();
  } else if (baseView === "journal") {
    renderJournalSection();
  } else if (baseView === "private" && param) {
    renderPrivateProject(param);
  } else if (baseView === "admin") {
    renderAdminDashboard();
  } else if (baseView === "client-portal") {
    refreshScrollReveals();
  } else if (baseView === "login") {
    // Login view auto-renders on navigation
  } else if (baseView === "settings") {
    refreshScrollReveals();
  }
}

// Ensure routing works on hash changes and loads
window.addEventListener('hashchange', handleHashRouting);
window.addEventListener('DOMContentLoaded', () => {
  initApp();
  handleHashRouting();
});

// =========================================================================
// 7. DRAGGABLE CAROUSEL PHYSICAL SLIDES (TOUCH/MOUSE PHYSICS)
// =========================================================================

function initCarouselPhysics(carouselId) {
  const container = document.getElementById(carouselId);
  const track = container ? container.querySelector('.carousel-track') : null;
  if (!container || !track) return;

  let isDown = false;
  let startX;
  let scrollLeft;

  // Mouse drag events
  track.addEventListener('mousedown', (e) => {
    isDown = true;
    track.classList.add('active');
    startX = e.pageX - track.offsetLeft;
    scrollLeft = container.scrollLeft;
  });

  track.addEventListener('mouseleave', () => {
    isDown = false;
    track.classList.remove('active');
  });

  track.addEventListener('mouseup', () => {
    isDown = false;
    track.classList.remove('active');
  });

  track.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 1.5; // multiplier for drag speed
    container.scrollLeft = scrollLeft - walk;
  });

  // Touch drag events for mobile
  track.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].pageX - track.offsetLeft;
    scrollLeft = container.scrollLeft;
  });

  track.addEventListener('touchend', () => {
    isDown = false;
  });

  track.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    const x = e.touches[0].pageX - track.offsetLeft;
    const walk = (x - startX) * 1.5;
    container.scrollLeft = scrollLeft - walk;
  });
}

/**
 * Slide button action helper
 */
window.slideCarousel = function(direction) {
  const container = document.getElementById('related-works-carousel');
  if (!container) return;
  
  const width = container.clientWidth;
  const scrollOffset = direction === 'right' ? width * 0.6 : -width * 0.6;
  
  container.scrollBy({
    left: scrollOffset,
    behavior: 'smooth'
  });
};

// =========================================================================
// 8. SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER)
// =========================================================================

let revealObserver;

function initScrollObserver() {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-active');
        // Stop tracking once element triggers to conserve memory
        observer.unobserve(entry.target);
      }
    });
  }, options);

  refreshScrollReveals();
}

function refreshScrollReveals() {
  if (!revealObserver) return;
  
  // Track elements
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach(el => {
    // If not already activated, observe
    if (!el.classList.contains('reveal-active')) {
      revealObserver.observe(el);
    }
  });
}

// =========================================================================
// 9. OVERLAYS & STATE MODALS (MOBILE MENU, INQUIRY DRAWERS, LIGHTBOXES)
// =========================================================================

/**
 * Toggle sticky header shadows and paddings on scroll
 */
window.addEventListener('scroll', () => {
  const header = document.getElementById('main-header');
  if (!header) return;
  
  if (window.scrollY > 40) {
    header.classList.remove('py-6');
    header.classList.add('py-4', 'shadow-md');
  } else {
    header.classList.add('py-6');
    header.classList.remove('py-4', 'shadow-md');
  }
});

/**
 * Toggle Mobile Menu Overlay
 */
function toggleMobileMenu(show) {
  const menu = document.getElementById('mobile-menu');
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  if (!menu || !toggleBtn) return;

  const spans = toggleBtn.querySelectorAll('span');

  if (show) {
    menu.classList.remove('opacity-0', 'pointer-events-none');
    menu.classList.add('opacity-100', 'pointer-events-auto');
    document.body.style.overflow = "hidden"; // Lock scroll
    
    // Transform hamburger icon
    spans[0].style.transform = "rotate(45deg) translate(2px, 0.5px)";
    spans[1].style.opacity = "0";
    spans[2].style.transform = "rotate(-45deg) translate(2px, -0.5px)";
  } else {
    menu.classList.add('opacity-0', 'pointer-events-none');
    menu.classList.remove('opacity-100', 'pointer-events-auto');
    document.body.style.overflow = ""; // Unlock scroll
    
    // Reset hamburger icon
    spans[0].style.transform = "";
    spans[1].style.opacity = "1";
    spans[2].style.transform = "";
  }
}

document.getElementById('mobile-menu-toggle').addEventListener('click', () => {
  const menu = document.getElementById('mobile-menu');
  const isOpen = menu.classList.contains('opacity-100');
  toggleMobileMenu(!isOpen);
});

// Close mobile overlay on route navigation links click
document.querySelectorAll('#mobile-menu nav a').forEach(link => {
  link.addEventListener('click', () => toggleMobileMenu(false));
});

/**
 * Toggle dynamic side sliding Inquiry Drawer
 */
window.toggleInquiryDrawer = function(show) {
  const overlay = document.getElementById('inquiry-drawer-overlay');
  const drawer = document.getElementById('inquiry-drawer');
  if (!overlay || !drawer) return;

  if (show) {
    overlay.classList.remove('opacity-0', 'pointer-events-none');
    overlay.classList.add('opacity-100', 'pointer-events-auto');
    drawer.classList.remove('translate-x-full');
    document.body.style.overflow = "hidden"; // Lock scroll
  } else {
    overlay.classList.add('opacity-0', 'pointer-events-none');
    overlay.classList.remove('opacity-100', 'pointer-events-auto');
    drawer.classList.add('translate-x-full');
    if (!document.getElementById('mobile-menu').classList.contains('opacity-100') && 
        !document.getElementById('artwork-lightbox').classList.contains('opacity-100')) {
      document.body.style.overflow = ""; // Unlock scroll
    }
  }
};

/**
 * Opens the inquiry drawer and automatically pre-selects an interest artwork
 */
window.openDrawerWithArtwork = function(artworkTitle) {
  const dropdown = document.getElementById('drawer-artwork');
  if (dropdown) {
    // Add value dynamically if missing, then select
    let options = Array.from(dropdown.options).map(o => o.value);
    if (!options.includes(artworkTitle)) {
      const newOpt = document.createElement('option');
      newOpt.value = artworkTitle;
      newOpt.text = `Archival Print: ${artworkTitle}`;
      dropdown.appendChild(newOpt);
    }
    dropdown.value = artworkTitle;
  }
  toggleInquiryDrawer(true);
};

/**
 * Form submissions with validation feedback alerts
 */
function handleInquirySubmissions(formId, successTitle, successDesc) {
  const form = document.getElementById(formId);
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Perform standard HTML validation checks
    if (!form.checkValidity()) return;

    // Trigger success alert notifications
    showFeedbackAlert(successTitle, successDesc);

    // Reset fields and close drawers
    form.reset();
    toggleInquiryDrawer(false);
  });
}

function showFeedbackAlert(title, desc) {
  const alertNode = document.getElementById('alert-notification');
  const titleNode = document.getElementById('alert-title');
  const descNode = document.getElementById('alert-desc');
  if (!alertNode) return;

  titleNode.innerText = title;
  descNode.innerText = desc;

  // Slide up alert into view
  alertNode.classList.remove('translate-y-24', 'opacity-0');
  alertNode.classList.add('translate-y-0', 'opacity-100');

  // Dismiss auto timer
  setTimeout(() => {
    dismissAlert();
  }, 5000);
}

window.dismissAlert = function() {
  const alertNode = document.getElementById('alert-notification');
  if (alertNode) {
    alertNode.classList.add('translate-y-24', 'opacity-0');
    alertNode.classList.remove('translate-y-0', 'opacity-100');
  }
};

/**
 * Lightbox zooms for high-end photography
 */
window.openLightbox = function(imgSrc, titleText, mediumText) {
  const lightbox = document.getElementById('artwork-lightbox');
  const zoomedImg = document.getElementById('lightbox-zoomed-img');
  const title = document.getElementById('lightbox-artwork-title');
  const medium = document.getElementById('lightbox-artwork-medium');
  if (!lightbox || !zoomedImg) return;

  zoomedImg.style.display = "block";
  zoomedImg.src = imgSrc;
  zoomedImg.alt = titleText;
  title.innerText = titleText;
  title.className = "font-serif text-lg md:text-xl font-medium tracking-wide";
  medium.innerText = mediumText;

  lightbox.classList.remove('opacity-0', 'pointer-events-auto');
  lightbox.classList.add('opacity-100', 'pointer-events-auto');
  document.body.style.overflow = "hidden"; // Lock scroll
};

window.closeLightbox = function() {
  const lightbox = document.getElementById('artwork-lightbox');
  if (lightbox) {
    lightbox.classList.add('opacity-0', 'pointer-events-none');
    lightbox.classList.remove('opacity-100', 'pointer-events-auto');
    
    // Check if other overlay locking scrolls exist before unlocking body
    if (!document.getElementById('mobile-menu').classList.contains('opacity-100') &&
        !document.getElementById('inquiry-drawer-overlay').classList.contains('opacity-100')) {
      document.body.style.overflow = "";
    }
  }
};

/**
 * Accompanying FAQ collapsible accordions
 */
window.toggleFaqAccordion = function(button) {
  const content = button.nextElementSibling;
  const icon = button.querySelector('iconify-icon');
  
  // Close all other accordions for luxury UI cleanliness
  const accordions = document.querySelectorAll('#faq-accordions-container > div');
  accordions.forEach(acc => {
    const accBtn = acc.querySelector('button');
    const accContent = accBtn.nextElementSibling;
    const accIcon = accBtn.querySelector('iconify-icon');
    
    if (accContent !== content) {
      accContent.style.maxHeight = null;
      accIcon.setAttribute('icon', 'ph:plus-light');
      accIcon.style.transform = "";
    }
  });

  if (content.style.maxHeight) {
    content.style.maxHeight = null;
    icon.setAttribute('icon', 'ph:plus-light');
    icon.style.transform = "";
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
    icon.setAttribute('icon', 'ph:minus-light');
    icon.style.transform = "rotate(180deg)";
  }
};

/**
 * Slider indicators for budget selections
 */
window.updateBudgetIndicator = function(val) {
  const node = document.getElementById('budget-value-indicator');
  if (node) {
    // Format thousands separator
    node.innerText = `$${Number(val).toLocaleString()}`;
  }
};

/**
 * Clipboard sharing and mock networking tracking
 */
window.shareLink = function(type) {
  if (type === 'copy') {
    navigator.clipboard.writeText(window.location.href)
      .then(() => {
        showFeedbackAlert("Link Copied", "The archival artwork link was successfully copied to your clipboard.");
      })
      .catch(() => {
        showFeedbackAlert("Copy Failed", "Your browser prevented manual clipboard copying triggers.");
      });
  } else {
    showFeedbackAlert("Share Redirect", "Redirecting sharing networks to external creative profiles.");
  }
};

// =========================================================================
// 10. PRECISE CUSTOM LERP CURSOR LOGIC (DESKTOP)
// =========================================================================

function initCustomCursor() {
  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;
  let ringX = 0, ringY = 0;
  
  const cursor = document.getElementById('custom-cursor');
  const ring = document.getElementById('custom-cursor-ring');

  if (!cursor || !ring) return;

  // Track coordinates
  window.addEventListener('mousemove', (e) => {
    // Display elements on desktop when motion starts
    document.body.classList.add('custom-cursor-active');
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Spring LERP loop
  function updateCursorFrame() {
    // LERP math: 25% follow for primary dot, 12% follow for secondary ring
    cursorX += (mouseX - cursorX) * 0.25;
    cursorY += (mouseY - cursorY) * 0.25;
    
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    
    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;
    
    ring.style.left = `${ringX}px`;
    ring.style.top = `${ringY}px`;
    
    requestAnimationFrame(updateCursorFrame);
  }
  requestAnimationFrame(updateCursorFrame);

  // Hover scaling delegations
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest('a, button, select, input, textarea, [role="button"], option')) {
      cursor.classList.add('hovered');
      ring.classList.add('hovered');
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest('a, button, select, input, textarea, [role="button"], option')) {
      cursor.classList.remove('hovered');
      ring.classList.remove('hovered');
    }
  });
}

// =========================================================================
// 11. INITIALIZATION WRAPPER
// =========================================================================

function initApp() {
  // Bind form validation listeners
  handleInquirySubmissions('fast-inquiry-form', "Inquiry Sent", "Thank you. Your email address has been added to our Carmel studio contact list.");
  handleInquirySubmissions('drawer-inquiry-form', "Archival Booking Received", "We have received your print/commission request. A studio coordinator will contact you in 24 hours.");
  handleInquirySubmissions('detailed-contact-form', "Dynamic Booking Recorded", "Your detailed studio inquiry has been saved. We look forward to creating custom fine-art together.");

  // Dynamically listen to search filters on input changes
  const searchInput = document.getElementById('portfolio-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      portfolioSearchQuery = e.target.value;
      portfolioVisibleCount = 3; // Reset paging
      renderPortfolioGallery();
    });
  }

  // Initialize cursor, sliders and observer timelines
  initCustomCursor();
  initScrollObserver();
  initCarouselPhysics('testimonials-carousel');
  initAccountDropdown();
}

// Account dropdown click behavior (replaces hover interaction for accessibility)
function initAccountDropdown() {
  const toggle = document.getElementById('account-toggle');
  const dropdown = document.getElementById('account-dropdown');
  if (!toggle || !dropdown) return;

  function open() {
    dropdown.classList.remove('opacity-0', 'pointer-events-none');
    dropdown.classList.add('opacity-100', 'pointer-events-auto');
    toggle.setAttribute('aria-expanded', 'true');
  }

  function close() {
    dropdown.classList.add('opacity-0', 'pointer-events-none');
    dropdown.classList.remove('opacity-100', 'pointer-events-auto');
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    if (expanded) close(); else open();
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target) && !toggle.contains(e.target)) {
      close();
    }
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });
}

// =========================================================================
// 12. PRIVATE GALLERIES, TOKEN ACCESS & ADMIN (PROTOTYPE)
// =========================================================================

// Example private projects metadata (client-side prototype)
const PRIVATE_PROJECTS = [
  {
    id: "private-coastal-commission",
    title: "Coastal Commission — Private Gallery",
    summary: "A private commission gallery for select collectors, includes high-res proofs and provenance notes.",
    images: ["assets/ethereal_solitude.png", "assets/botanical_dream.png"],
    password: "" // optional password fallback (leave empty to use token-only)
  }
];

// Simple token generator (demo only)
function _generateAccessToken() {
  return Math.random().toString(36).slice(2, 10) + Math.random().toString(36).slice(2, 6);
}

// Store token record in localStorage (prototype for demo)
function _saveTokenRecord(token, record) {
  const key = 'sienna_private_tokens';
  const store = JSON.parse(localStorage.getItem(key) || '{}');
  store[token] = record;
  localStorage.setItem(key, JSON.stringify(store));
}

function _getTokenRecord(token) {
  const key = 'sienna_private_tokens';
  const store = JSON.parse(localStorage.getItem(key) || '{}');
  return store[token] || null;
}

// --- OTP helpers (demo) -----------------------------------------------
function _generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

function _saveOTPRecord(otp, record) {
  const key = 'sienna_private_otps';
  const store = JSON.parse(localStorage.getItem(key) || '{}');
  store[otp] = record;
  localStorage.setItem(key, JSON.stringify(store));
}

function _getOTPRecord(otp) {
  const key = 'sienna_private_otps';
  const store = JSON.parse(localStorage.getItem(key) || '{}');
  return store[otp] || null;
}

const APPROVED_PRIVATE_EMAILS = [
  'borrakoushik10@gmail.com',
  'borrakoushiksrisai@gmail.com',
  'koushik_borra@srmap.edu.in'
];

const PRIVATE_ACCESS_RATE_LIMIT = {
  maxRequests: 4,
  requestWindow: 1000 * 60 * 5,
  maxOtpAttempts: 3,
  otpLockWindow: 1000 * 60
};

function _isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function _isApprovedEmail(email) {
  return APPROVED_PRIVATE_EMAILS.includes(email.toLowerCase());
}

function _getEmailRateRecord(email, projectId) {
  const key = 'sienna_private_rate';
  const store = JSON.parse(localStorage.getItem(key) || '{}');
  return store[`${projectId}:${email}`] || { requests: [], lockedUntil: 0 };
}

function _saveEmailRateRecord(email, projectId, record) {
  const key = 'sienna_private_rate';
  const store = JSON.parse(localStorage.getItem(key) || '{}');
  store[`${projectId}:${email}`] = record;
  localStorage.setItem(key, JSON.stringify(store));
}

function _incrementEmailRequest(email, projectId) {
  const record = _getEmailRateRecord(email, projectId);
  const now = Date.now();
  record.requests = (record.requests || []).filter(ts => ts > now - PRIVATE_ACCESS_RATE_LIMIT.requestWindow);
  record.requests.push(now);
  if (record.requests.length >= PRIVATE_ACCESS_RATE_LIMIT.maxRequests) {
    record.lockedUntil = now + PRIVATE_ACCESS_RATE_LIMIT.requestWindow;
  }
  _saveEmailRateRecord(email, projectId, record);
  return record;
}

function _incrementOtpAttempt(projectId, otp) {
  const rec = _getOTPRecord(otp);
  if (!rec) return null;
  rec.attempts = (rec.attempts || 0) + 1;
  if (rec.attempts >= PRIVATE_ACCESS_RATE_LIMIT.maxOtpAttempts) {
    rec.lockedUntil = Date.now() + PRIVATE_ACCESS_RATE_LIMIT.otpLockWindow;
  }
  _saveOTPRecord(otp, rec);
  return rec;
}

function _isOtpLocked(otp) {
  const rec = _getOTPRecord(otp);
  return rec && rec.lockedUntil && rec.lockedUntil > Date.now();
}

function _parseOtpInput(value) {
  if (!value) return '';
  const match = value.match(/(?:otp|token)=([0-9]{6})/i);
  if (match) return match[1];
  const digits = value.replace(/\D/g, '');
  return digits.length === 6 ? digits : '';
}

function _formatCountdown(value) {
  const seconds = Math.max(0, Math.ceil(value / 1000));
  return seconds < 10 ? `00:0${seconds}` : `00:${seconds}`;
}

function _getSecondsRemaining(expires) {
  return Math.max(0, expires - Date.now());
}

function _getOTPRecordByProject(projectId) {
  const key = 'sienna_private_otps';
  const store = JSON.parse(localStorage.getItem(key) || '{}');
  const entries = Object.entries(store).map(([otp, rec]) => ({ otp, ...rec }));
  const projectEntries = entries.filter(rec => rec.projectId === projectId);
  if (!projectEntries.length) return null;
  return projectEntries.sort((a, b) => b.createdAt - a.createdAt)[0];
}

function _isEmailRateLimited(email, projectId) {
  const record = _getEmailRateRecord(email, projectId);
  return record.lockedUntil && record.lockedUntil > Date.now();
}

function _renderPrivateEmailRequestScreen(projectId, errorMessage = '', successMessage = '', isLoading = false) {
  const container = document.getElementById('private-view-container') || document.getElementById('private-project-' + projectId) || document.body;
  container.innerHTML = `
    <div class="max-w-2xl mx-auto p-8 bg-siennaBg border border-siennaDark/10 rounded-[2rem] shadow-2xl overflow-hidden transition-all duration-500">
      <div class="mb-6 flex items-start gap-4">
        <div class="w-14 h-14 flex items-center justify-center rounded-full bg-siennaPrimary/10 text-siennaPrimary text-2xl shadow-sm">
          <iconify-icon icon="ph:envelope-simple" class="text-3xl"></iconify-icon>
        </div>
        <div>
          <h2 class="font-serif text-3xl text-siennaDark mb-2">Request Private Access</h2>
          <p class="text-siennaLight leading-relaxed">Enter your invitation email to receive a one-time code for the private gallery.</p>
        </div>
      </div>
      ${errorMessage ? `<div class="mb-5 rounded-3xl border border-[#E4B9A0] bg-[#F9E8DC] p-4 text-sm text-[#8A3421]">⚠️ ${errorMessage}</div>` : ''}
      ${successMessage ? `<div class="mb-5 rounded-3xl border border-[#A8C4AF] bg-[#E9F6EB] p-4 text-sm text-[#2F5C38]">✓ ${successMessage}</div>` : ''}
      <div class="grid gap-4">
        <input id="private-access-email" type="email" placeholder="Your email address" class="w-full rounded-[2rem] border border-siennaDark/10 bg-white py-4 px-5 text-sm text-siennaDark focus:ring-2 focus:ring-siennaPrimary/20 outline-none transition" />
        <button id="private-request-btn" class="relative inline-flex items-center justify-center rounded-[2rem] bg-siennaPrimary text-siennaBg font-semibold uppercase tracking-widest px-6 py-4 transition hover:bg-siennaDark disabled:cursor-not-allowed disabled:opacity-60" ${isLoading ? 'disabled' : ''}>
          ${isLoading ? `<span class="mr-3">Requesting</span><span class="inline-block w-4 h-4 border-2 border-siennaBg border-t-transparent rounded-full animate-spin"></span>` : 'Request Access'}
        </button>
      </div>
      <p class="mt-6 text-xs uppercase tracking-[0.35em] text-siennaLight">Invite-only access for collectors and select clients.</p>
    </div>
  `;
  const btn = document.getElementById('private-request-btn');
  btn.addEventListener('click', () => {
    const email = document.getElementById('private-access-email').value.trim();
    requestPrivateOTP(projectId, email);
  });
}

function _renderPrivateOtpVerificationScreen(projectId, email, otpRecord, noticeMessage = '') {
  const expires = otpRecord?.expires || Date.now();
  const remainingMs = _getSecondsRemaining(expires);
  const countdown = _formatCountdown(remainingMs);
  const warningText = remainingMs <= 10000 ? 'Only a few seconds left — verify now or request a new code.' : '';
  const disableResend = remainingMs > 0;

  const container = document.getElementById('private-view-container') || document.getElementById('private-project-' + projectId) || document.body;
  container.innerHTML = `
    <div class="max-w-2xl mx-auto p-8 bg-siennaBg border border-siennaDark/10 rounded-[2rem] shadow-2xl overflow-hidden transition-all duration-500">
      <div class="mb-6 flex items-start gap-4">
        <div class="w-14 h-14 flex items-center justify-center rounded-full bg-siennaSecondary/10 text-siennaSecondary text-2xl shadow-sm">
          <iconify-icon icon="ph:lock-key-open" class="text-3xl"></iconify-icon>
        </div>
        <div>
          <h2 class="font-serif text-3xl text-siennaDark mb-2">Verify Your OTP</h2>
          <p class="text-siennaLight leading-relaxed">Check your email for a one-time code. Paste the link or the 6-digit code below.</p>
        </div>
      </div>
      ${noticeMessage ? `<div class="mb-5 rounded-3xl border border-[#D3BFAA] bg-[#FBF1E8] p-4 text-sm text-[#6A4F3B]">${noticeMessage}</div>` : ''}
      <div class="grid gap-4">
        <input id="private-otp-input" inputmode="numeric" maxlength="64" placeholder="Enter 6-digit code or paste link" class="w-full rounded-[2rem] border border-siennaDark/10 bg-white py-4 px-5 text-sm text-siennaDark focus:ring-2 focus:ring-siennaPrimary/20 outline-none transition" />
        <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button id="private-verify-otp-btn" class="rounded-[2rem] bg-siennaPrimary text-siennaBg font-semibold uppercase tracking-widest px-6 py-4 hover:bg-siennaDark transition">Verify Code</button>
          <span class="text-sm font-semibold text-siennaDark">Expires in <span id="private-otp-countdown">${countdown}</span></span>
        </div>
        ${warningText ? `<p class="text-sm font-medium text-[#A65B36]">⚠️ ${warningText}</p>` : ''}
        <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button id="private-resend-otp" class="rounded-[2rem] ${disableResend ? 'bg-siennaBg text-siennaLight border border-siennaDark/10 cursor-not-allowed' : 'bg-siennaDark text-siennaBg'} font-semibold uppercase tracking-widest px-6 py-4 transition" ${disableResend ? 'disabled' : ''}>Resend OTP</button>
          <button id="private-cancel-otp" class="text-sm text-siennaDark/80 underline">Cancel request</button>
        </div>
      </div>
    </div>
  `;

  document.getElementById('private-verify-otp-btn').addEventListener('click', () => {
    const raw = document.getElementById('private-otp-input').value;
    const otp = _parseOtpInput(raw);
    verifyPrivateOTP(projectId, otp);
  });

  const resendBtn = document.getElementById('private-resend-otp');
  resendBtn.disabled = disableResend;
  resendBtn.addEventListener('click', () => requestPrivateOTP(projectId, email));

  document.getElementById('private-cancel-otp').addEventListener('click', () => {
  const key = 'sienna_private_otps';
  const store = JSON.parse(localStorage.getItem(key) || '{}');
  Object.keys(store).forEach(otp => {
    if (store[otp].projectId === projectId) delete store[otp];
  });
  localStorage.setItem(key, JSON.stringify(store));
  const active = JSON.parse(localStorage.getItem('sienna_active_private') || '{}');
  delete active[projectId];
  localStorage.setItem('sienna_active_private', JSON.stringify(active));
  _renderPrivateEmailRequestScreen(projectId);
});

  if (window._privateOtpIntervalId) {
    clearInterval(window._privateOtpIntervalId);
  }
  window._privateOtpIntervalId = setInterval(() => {
    const remaining = _getSecondsRemaining(expires);
    const countdownNode = document.getElementById('private-otp-countdown');
    if (countdownNode) countdownNode.innerText = _formatCountdown(remaining);
    if (remaining <= 0) {
      clearInterval(window._privateOtpIntervalId);
      renderPrivateProject(projectId);
    }
  }, 1000);
}

function _renderPrivateSuccessScreen(projectId) {
  const container = document.getElementById('private-view-container') || document.getElementById('private-project-' + projectId) || document.body;
  container.innerHTML = `
    <div class="max-w-2xl mx-auto p-10 bg-siennaBg border border-siennaDark/10 rounded-[2rem] shadow-2xl text-center transition-all duration-500">
      <div class="mx-auto mb-6 w-24 h-24 rounded-full bg-siennaSecondary/10 text-siennaSecondary flex items-center justify-center text-4xl shadow-sm">
        <iconify-icon icon="ph:check-circle" class="text-4xl"></iconify-icon>
      </div>
      <h2 class="font-serif text-3xl text-siennaDark mb-3">Access Granted</h2>
      <p class="text-siennaLight mb-6">Your one-time code is verified. Redirecting you to the private gallery shortly.</p>
      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <button id="private-continue-btn" class="rounded-[2rem] bg-siennaPrimary text-siennaBg px-8 py-4 font-semibold uppercase tracking-widest hover:bg-siennaDark transition">Continue</button>
        <button id="private-logout-btn" class="rounded-[2rem] border border-siennaDark/10 bg-white text-siennaDark px-8 py-4 font-semibold uppercase tracking-widest hover:bg-siennaPrimary/10 transition">Logout</button>
      </div>
    </div>
  `;

  document.getElementById('private-continue-btn').addEventListener('click', () => renderPrivateProject(projectId));
  document.getElementById('private-logout-btn').addEventListener('click', () => {
    const active = JSON.parse(localStorage.getItem('sienna_active_private') || '{}');
    delete active[projectId];
    localStorage.setItem('sienna_active_private', JSON.stringify(active));
    showFeedbackAlert('Logged Out', 'Your private access has been cleared.');
    renderPrivateProject(projectId);
  });
}

function _renderPrivateGallery(projectId, project) {
  const container = document.getElementById('private-view-container') || document.getElementById('private-project-' + projectId) || document.body;
  const imagesHtml = project.images.map(img => `<img src="${img}" class="w-full rounded-[1.5rem] border border-siennaDark/10 shadow-sm" />`).join('');
  container.innerHTML = `
    <div class="max-w-5xl mx-auto p-8 bg-siennaBg border border-siennaDark/10 rounded-[2.5rem] shadow-2xl transition-all duration-500 overflow-hidden">
      <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 class="font-serif text-4xl text-siennaDark mb-3">${project.title}</h1>
          <p class="text-siennaLight max-w-2xl">${project.summary}</p>
        </div>
        <button id="private-logout-gallery-btn" class="rounded-full border border-siennaDark/10 bg-siennaBg px-6 py-3 text-sm font-semibold text-siennaDark hover:bg-siennaPrimary/10 transition">Logout</button>
      </div>
      <div class="grid gap-6 lg:grid-cols-2">
        ${imagesHtml}
      </div>
    </div>
  `;
  document.getElementById('private-logout-gallery-btn').addEventListener('click', () => {
    const active = JSON.parse(localStorage.getItem('sienna_active_private') || '{}');
    delete active[projectId];
    localStorage.setItem('sienna_active_private', JSON.stringify(active));
    showFeedbackAlert('Logged Out', 'Your private access has been cleared.');
    renderPrivateProject(projectId);
  });
}

window.requestPrivateOTP = function(projectId, email) {
  if (!email || !projectId) {
    _renderPrivateEmailRequestScreen(projectId, 'Please provide an email and select a project.');
    return;
  }

  if (!_isValidEmail(email)) {
    _renderPrivateEmailRequestScreen(projectId, 'Please enter a valid email address.');
    return;
  }

  if (!_isApprovedEmail(email)) {
    _renderPrivateEmailRequestScreen(projectId, 'Email not found. Private access is invite-only.');
    return;
  }

  if (_isEmailRateLimited(email, projectId)) {
    _renderPrivateEmailRequestScreen(projectId, 'Too many requests. Wait a few minutes and try again.');
    return;
  }

  _renderPrivateEmailRequestScreen(projectId, '', '', true);
  const otp = _generateOTP();
  const expires = Date.now() + (1000 * 60 * 1); // 1 minute demo countdown
  const createdAt = Date.now();
  _saveOTPRecord(otp, { projectId, email, expires, createdAt, attempts: 0 });
  _incrementEmailRequest(email, projectId);

  const link = `${window.location.origin}${window.location.pathname}#private/${projectId}?otp=${otp}`;
  // Try sending OTP via local demo server (supports real SMTP via env). Falls back to clipboard when unavailable.
  fetch('/request-otp', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, projectId, otp, link })
  }).then(r => r.json()).then(data => {
    if (data && data.previewUrl) {
      showFeedbackAlert('OTP Sent', 'OTP sent to email — preview available (dev): ' + data.previewUrl);
    } else {
      showFeedbackAlert('OTP Sent', 'OTP sent to email.');
    }
  }).catch(() => {
    // Fallback: copy link to clipboard for demo
    navigator.clipboard.writeText(link).then(() => {
      showFeedbackAlert('OTP Sent (clipboard)', 'One-time link copied to clipboard. Paste it or use the code to verify.');
    }).catch(() => {
      showFeedbackAlert('OTP Sent', `One-time code: ${otp}`);
    });
  });

  setTimeout(() => {
    const otpRecord = _getOTPRecord(otp);
    _renderPrivateOtpVerificationScreen(projectId, email, otpRecord, 'We emailed your code — paste it here or use the link from clipboard.');
  }, 700);
};

window.verifyPrivateOTP = function(projectId, otp) {
  if (!otp) {
    showFeedbackAlert('Verification Failed', 'Please enter the 6-digit code or paste the link.');
    return;
  }

  const rec = _getOTPRecord(otp);
  if (!rec || rec.projectId !== projectId) {
    showFeedbackAlert('Verification Failed', 'Invalid code.');
    if (rec) _incrementOtpAttempt(projectId, otp);
    return;
  }

  if (_isOtpLocked(otp)) {
    showFeedbackAlert('Too Many Attempts', 'Too many invalid tries. Please request a new code in a moment.');
    return;
  }

  if (rec.expires < Date.now()) {
    showFeedbackAlert('Verification Failed', 'Code expired. Request a new one.');
    renderPrivateProject(projectId);
    return;
  }

  const active = JSON.parse(localStorage.getItem('sienna_active_private') || '{}');
  active[projectId] = otp;
  localStorage.setItem('sienna_active_private', JSON.stringify(active));

  _renderPrivateSuccessScreen(projectId);
  setTimeout(() => renderPrivateProject(projectId), 1200);
};

// Request access (mock email flow): generates a unique link and copies it to clipboard
window.requestPrivateAccess = function(projectId, email) {
  if (!email || !projectId) {
    showFeedbackAlert('Request Failed', 'Please provide an email and select a project.');
    return;
  }

  const token = _generateAccessToken();
  const expires = Date.now() + (1000 * 60 * 60 * 24 * 7); // 7 days
  _saveTokenRecord(token, { projectId, email, expires });

  const link = `${window.location.origin}${window.location.pathname}#private/${projectId}?token=${token}`;

  // Copy generated link to clipboard and notify user (mocking email send)
  navigator.clipboard.writeText(link).then(() => {
    showFeedbackAlert('Access Link Ready', 'A private access link was copied to your clipboard (demo). Paste and open to view.');
  }).catch(() => {
    showFeedbackAlert('Access Link Ready', 'Private access link generated: ' + link);
  });

  console.info('Mock email sent to', email, 'with link:', link);
};

// Validate token/OTP for a given projectId (checks URL or localStorage)
function validatePrivateAccess(projectId) {
  const raw = window.location.hash.substring(1) || '';
  const [path, query] = raw.split('?');
  let token = null;
  if (query) {
    const params = new URLSearchParams(query);
    token = params.get('token') || params.get('otp');
  }

  const used = JSON.parse(localStorage.getItem('sienna_active_private') || '{}');
  if (used[projectId]) return true;

  if (!token) return false;

  const rec = _getOTPRecord(token) || _getTokenRecord(token);
  if (!rec || rec.projectId !== projectId) return false;
  if (rec.expires < Date.now()) return false;

  used[projectId] = token;
  localStorage.setItem('sienna_active_private', JSON.stringify(used));
  return true;
}

// Render a private project into a container with id 'private-view-container' or fallback
window.renderPrivateProject = function(projectId) {
  const container = document.getElementById('private-view-container') || document.getElementById('private-project-' + projectId) || document.body;

  const project = PRIVATE_PROJECTS.find(p => p.id === projectId);
  if (!project) {
    if (container) container.innerHTML = '<div class="p-8 text-center">Private project not found.</div>';
    return;
  }

  const hasAccess = validatePrivateAccess(projectId);
  if (hasAccess) {
    _renderPrivateGallery(projectId, project);
    return;
  }

  const otpRecord = _getOTPRecordByProject(projectId);
  if (otpRecord && otpRecord.expires > Date.now()) {
    _renderPrivateOtpVerificationScreen(projectId, otpRecord.email, otpRecord, 'Enter the one-time code sent to your approved email.');
    return;
  }

  _renderPrivateEmailRequestScreen(projectId);
};

// Admin dashboard skeleton (client-side prototype)
window.adminLogin = function(password) {
  // Demo-only password; for production move auth to server
  const ADMIN_PASS = 'sienna-admin-demo';
  if (password === ADMIN_PASS) {
    localStorage.setItem('sienna_admin_auth', '1');
    showFeedbackAlert('Admin Login', 'You are logged in as admin (demo).');
    renderAdminDashboard();
    return true;
  }
  showFeedbackAlert('Admin Login Failed', 'Incorrect password.');
  return false;
};

window.renderAdminDashboard = function() {
  const container = document.getElementById('admin-dashboard') || document.body;
  const isAuth = localStorage.getItem('sienna_admin_auth') === '1';
  if (!isAuth) {
    // show simple login
    container.innerHTML = `
      <div class="max-w-md mx-auto p-8 bg-siennaBg border border-siennaDark/5">
        <h2 class="font-serif text-2xl mb-3">Admin Dashboard (Demo)</h2>
        <input id="admin-pass" type="password" class="w-full p-3 border border-siennaDark/10 mb-3" placeholder="Admin password" />
        <button id="admin-login-btn" class="px-4 py-3 bg-siennaPrimary text-siennaBg font-semibold">Sign In</button>
      </div>
    `;
    const btn = document.getElementById('admin-login-btn');
    btn.addEventListener('click', () => {
      const pw = document.getElementById('admin-pass').value;
      adminLogin(pw);
    });
    return;
  }

  // Admin actions: view pending tokens, revoke tokens, manage private projects
  const key = 'sienna_private_tokens';
  const tokens = JSON.parse(localStorage.getItem(key) || '{}');
  let rows = '';
  Object.keys(tokens).forEach(t => {
    const r = tokens[t];
    rows += `<tr class="border-b"><td class="px-3 py-2">${t}</td><td class="px-3 py-2">${r.email}</td><td class="px-3 py-2">${r.projectId}</td><td class="px-3 py-2">${new Date(r.expires).toLocaleString()}</td><td class="px-3 py-2"><button data-token="${t}" class="revoke-token-btn px-2 py-1 bg-red-600 text-white">Revoke</button></td></tr>`;
  });

  container.innerHTML = `
    <div class="max-w-6xl mx-auto p-6">
      <h1 class="font-serif text-3xl mb-4">Admin Dashboard (Demo)</h1>
      <h2 class="text-lg mb-2">Pending Access Tokens</h2>
      <div class="overflow-auto bg-siennaBg border border-siennaDark/5 p-3">
        <table class="w-full text-left"><thead><tr class="border-b"><th class="px-3 py-2">Token</th><th class="px-3 py-2">Email</th><th class="px-3 py-2">Project</th><th class="px-3 py-2">Expires</th><th class="px-3 py-2">Actions</th></tr></thead><tbody>${rows}</tbody></table>
      </div>
    </div>
  `;

  // attach revoke handlers
  document.querySelectorAll('.revoke-token-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const t = e.currentTarget.getAttribute('data-token');
      const store = JSON.parse(localStorage.getItem(key) || '{}');
      delete store[t];
      localStorage.setItem(key, JSON.stringify(store));
      showFeedbackAlert('Token Revoked', 'Access token has been removed.');
      renderAdminDashboard();
    });
  });
};

// =========================================================================
// 13. SETTINGS TAB SWITCHING & LOGIN HELPERS
// =========================================================================

window.switchSettingsTab = function(tabName) {
  // Hide all tabs
  const tabs = document.querySelectorAll('.settings-tab');
  tabs.forEach(tab => tab.classList.add('hidden'));

  // Show selected tab
  const selectedTab = document.getElementById(tabName + '-tab');
  if (selectedTab) {
    selectedTab.classList.remove('hidden');
  }

  // Update button states
  const buttons = document.querySelectorAll('.tab-button');
  buttons.forEach(btn => {
    const tab = btn.getAttribute('data-tab');
    if (tab === tabName) {
      btn.classList.add('active');
      btn.classList.remove('text-siennaLight');
      btn.classList.add('text-siennaPrimary', 'border-siennaPrimary');
    } else {
      btn.classList.remove('active', 'text-siennaPrimary', 'border-siennaPrimary');
      btn.classList.add('text-siennaLight', 'border-transparent');
    }
  });
};

window.handleLoginSubmit = function() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  if (!email || !password) {
    showFeedbackAlert('Login Failed', 'Please enter both email and password.');
    return;
  }

  // Demo login: accept any email with password
  const DEMO_PASSWORD = 'demo';
  if (password === DEMO_PASSWORD || password === 'sienna-admin-demo') {
    localStorage.setItem('sienna_user_email', email);
    localStorage.setItem('sienna_logged_in', '1');
    showFeedbackAlert('Login Successful', 'Welcome to your private studio portal.');
    window.location.hash = '#client-portal';
    return;
  }

  showFeedbackAlert('Login Failed', 'Invalid credentials. Try "demo" as password.');
};

window.handleLogout = function() {
  localStorage.removeItem('sienna_logged_in');
  localStorage.removeItem('sienna_user_email');
  localStorage.removeItem('sienna_admin_auth');
  showFeedbackAlert('Logged Out', 'You have been signed out.');
  window.location.hash = '#home';
};
