const ITEMS = [
  {
    "store": "dm",
    "category": "Skincare / body",
    "status": "Buy",
    "english": "Body oil",
    "german": "Körperöl / Pflegeöl Olive",
    "indonesian": "",
    "brand": "Balea 5in1 Beauty-Öl or Balea Body Oil Olive",
    "quantity": "1",
    "notes": "For dry/itchy skin"
  },
  {
    "store": "dm",
    "category": "Skincare / body",
    "status": "Buy",
    "english": "Urea body lotion",
    "german": "Bodylotion mit Urea 5–10%",
    "indonesian": "",
    "brand": "Balea Urea Bodylotion, Sebamed Urea Akut 5%, or Eucerin UreaRepair 5%",
    "quantity": "1",
    "notes": "For dry skin"
  },
  {
    "store": "dm",
    "category": "Face care",
    "status": "Buy",
    "english": "Face wash for oily/acne skin",
    "german": "Waschgel gegen Pickel / unreine Haut",
    "indonesian": "",
    "brand": "Balea Anti-Pickel Waschgel",
    "quantity": "1",
    "notes": ""
  },
  {
    "store": "dm",
    "category": "Face care",
    "status": "Buy",
    "english": "Vitamin C serum",
    "german": "Vitamin-C-Serum",
    "indonesian": "",
    "brand": "Balea Vitamin C Serum",
    "quantity": "1",
    "notes": ""
  },
  {
    "store": "dm",
    "category": "Face care",
    "status": "Buy",
    "english": "Moisturizer / face cream",
    "german": "Feuchtigkeitscreme / Gesichtscreme",
    "indonesian": "",
    "brand": "Balea MED Ultra Sensitive or Balea Anti-Pickel 24h Pflege",
    "quantity": "1",
    "notes": ""
  },
  {
    "store": "dm",
    "category": "Face care",
    "status": "Buy",
    "english": "Sunscreen",
    "german": "Sonnencreme fürs Gesicht",
    "indonesian": "",
    "brand": "NIVEA SUN UV Gesicht LSF 50 or NIVEA SUN UV Face Sensitive LSF 50",
    "quantity": "1",
    "notes": "Use every morning"
  },
  {
    "store": "dm",
    "category": "Lip care",
    "status": "Buy",
    "english": "Lip repair balm",
    "german": "Lippenpflege / Repair Lippenbalsam",
    "indonesian": "",
    "brand": "Labello Med Repair",
    "quantity": "1",
    "notes": ""
  },
  {
    "store": "dm",
    "category": "Lip care",
    "status": "Buy",
    "english": "Pink lip care",
    "german": "Lippenpflege Rose / getönt",
    "indonesian": "",
    "brand": "NIVEA Lip Care Soft Rose",
    "quantity": "1",
    "notes": ""
  },
  {
    "store": "dm",
    "category": "Lip care",
    "status": "Optional",
    "english": "Lip oil",
    "german": "Lippenöl",
    "indonesian": "",
    "brand": "essence Juicy Bomb Lip Oil or essence Hydra Kiss Lip Oil",
    "quantity": "1",
    "notes": "Optional glossy lip care"
  },
  {
    "store": "dm",
    "category": "Lip care",
    "status": "Optional",
    "english": "Lip scrub",
    "german": "Lippenpeeling",
    "indonesian": "",
    "brand": "Balea Lip Scrub / Balea Sugar Scrub",
    "quantity": "1",
    "notes": "Use 2–3x per week only"
  },
  {
    "store": "dm",
    "category": "Makeup",
    "status": "Buy",
    "english": "Loose powder",
    "german": "Loser Puder / Fixing Powder",
    "indonesian": "",
    "brand": "essence All About Matt! Fixing Loose Powder",
    "quantity": "1",
    "notes": ""
  },
  {
    "store": "dm",
    "category": "Makeup",
    "status": "Optional",
    "english": "Better powder alternative",
    "german": "Mattierender Puder",
    "indonesian": "",
    "brand": "Catrice All Matt Plus, Manhattan Clearface Powder, or Maybelline Fit Me Powder",
    "quantity": "1",
    "notes": "Optional if you want better/premium alternative"
  },
  {
    "store": "dm",
    "category": "Hair / shower",
    "status": "Buy",
    "english": "Shampoo",
    "german": "Shampoo",
    "indonesian": "",
    "brand": "Balea Professional, Garnier Fructis, or L’Oréal Elvital",
    "quantity": "1",
    "notes": ""
  },
  {
    "store": "dm",
    "category": "Hair / shower",
    "status": "Buy",
    "english": "Body cleanser",
    "german": "Duschgel / Körperwaschgel",
    "indonesian": "",
    "brand": "Balea Duschgel or Balea MED Ultra Sensitive Duschgel",
    "quantity": "1",
    "notes": ""
  },
  {
    "store": "dm",
    "category": "Hair / shower",
    "status": "Buy",
    "english": "Conditioner",
    "german": "Spülung / Conditioner",
    "indonesian": "",
    "brand": "Same brand line as shampoo",
    "quantity": "1",
    "notes": ""
  },
  {
    "store": "dm",
    "category": "Hair / shower",
    "status": "Buy",
    "english": "Hair mask",
    "german": "Haarmaske / Haarkur",
    "indonesian": "",
    "brand": "Garnier Fructis Hair Food, Balea Haarmaske, or L’Oréal Elvital Kur",
    "quantity": "1",
    "notes": ""
  },
  {
    "store": "dm",
    "category": "Hair / shower",
    "status": "Buy",
    "english": "Hair oil",
    "german": "Haaröl",
    "indonesian": "",
    "brand": "Balea Professional Oil Repair Haaröl or L’Oréal Elvital Öl Magique",
    "quantity": "1",
    "notes": ""
  },
  {
    "store": "dm",
    "category": "Optional medical/repair",
    "status": "Optional",
    "english": "Itch gel",
    "german": "Gel gegen Juckreiz",
    "indonesian": "",
    "brand": "Fenistil Gel",
    "quantity": "1 small tube",
    "notes": "For insect bites/light allergy"
  },
  {
    "store": "dm",
    "category": "Optional medical/repair",
    "status": "Optional",
    "english": "Hydrocortisone cream",
    "german": "Hydrocortison Creme 0,5% / 1%",
    "indonesian": "",
    "brand": "Hydrocortison-ratiopharm, Soventol Hydrocort, or pharmacy brand",
    "quantity": "1 small tube",
    "notes": "Optional"
  },
  {
    "store": "dm",
    "category": "Optional medical/repair",
    "status": "Optional",
    "english": "Sensitive repair cream",
    "german": "Creme für gereizte/trockene Haut",
    "indonesian": "",
    "brand": "Bepanthen Sensiderm",
    "quantity": "1 tube",
    "notes": "Optional"
  },
  {
    "store": "Asia Markt",
    "category": "Sauces / seasoning",
    "status": "Buy",
    "english": "Sweet soy sauce",
    "german": "Süße Sojasauce",
    "indonesian": "Kecap manis",
    "brand": "ABC, Bango, or similar",
    "quantity": "1 large bottle or 2 small",
    "notes": "Non-perishable"
  },
  {
    "store": "Asia Markt",
    "category": "Noodles / dry food",
    "status": "Buy",
    "english": "Thin rice noodles",
    "german": "Dünne Reisnudeln",
    "indonesian": "Bihun",
    "brand": "Any Asian brand",
    "quantity": "4–6 packs",
    "notes": "For about 3 weeks"
  },
  {
    "store": "Asia Markt",
    "category": "Sauces / seasoning",
    "status": "Buy",
    "english": "Chicken seasoning",
    "german": "Hähnchen-Gewürzmischung",
    "indonesian": "Lobo Bumbu Ayam",
    "brand": "Lobo",
    "quantity": "4–6 packs",
    "notes": ""
  },
  {
    "store": "Asia Markt",
    "category": "Fresh/frozen herbs",
    "status": "Buy",
    "english": "Galangal",
    "german": "Galgant",
    "indonesian": "Lengkuas",
    "brand": "Fresh/frozen",
    "quantity": "1 pack",
    "notes": ""
  },
  {
    "store": "Asia Markt",
    "category": "Canned/carton food",
    "status": "Buy",
    "english": "Coconut milk",
    "german": "Kokosmilch",
    "indonesian": "Santan cair",
    "brand": "Aroy-D, Chaokoh, or similar",
    "quantity": "4–6 cans/cartons",
    "notes": "Non-perishable"
  },
  {
    "store": "Asia Markt",
    "category": "Snacks",
    "status": "Buy",
    "english": "Hello Panda snacks",
    "german": "Hello Panda",
    "indonesian": "Hello Panda",
    "brand": "Meiji Hello Panda",
    "quantity": "2–4 packs",
    "notes": ""
  },
  {
    "store": "Asia Markt",
    "category": "Snacks",
    "status": "Buy",
    "english": "Glico snacks",
    "german": "Glico",
    "indonesian": "Glico",
    "brand": "Glico",
    "quantity": "2–4 packs",
    "notes": ""
  },
  {
    "store": "Asia Markt",
    "category": "Noodles / dry food",
    "status": "Buy",
    "english": "Fried noodles",
    "german": "Gebratene Instantnudeln",
    "indonesian": "Indomie Goreng",
    "brand": "Indomie",
    "quantity": "10–15 packs",
    "notes": "For about 3 weeks"
  },
  {
    "store": "Asia Markt",
    "category": "Noodles / dry food",
    "status": "Buy",
    "english": "Spicy noodles",
    "german": "Scharfe Instantnudeln",
    "indonesian": "Samyang",
    "brand": "Samyang",
    "quantity": "4–6 packs",
    "notes": ""
  },
  {
    "store": "Asia Markt",
    "category": "Fresh vegetables",
    "status": "Buy",
    "english": "Chayote",
    "german": "Chayote",
    "indonesian": "Labu siam",
    "brand": "Fresh",
    "quantity": "2 pcs",
    "notes": "Fresh vegetable; buy only what will be used soon"
  },
  {
    "store": "Asia Markt",
    "category": "Sauces / seasoning",
    "status": "Buy",
    "english": "Oyster sauce",
    "german": "Austernsauce",
    "indonesian": "Saus tiram",
    "brand": "Lee Kum Kee",
    "quantity": "1 bottle",
    "notes": ""
  },
  {
    "store": "Asia Markt",
    "category": "Sauces / seasoning",
    "status": "Buy",
    "english": "Teriyaki sauce",
    "german": "Teriyaki-Sauce",
    "indonesian": "Saus Teriyaki",
    "brand": "Kikkoman",
    "quantity": "1 bottle",
    "notes": ""
  },
  {
    "store": "Asia Markt",
    "category": "Frozen food",
    "status": "Buy",
    "english": "Tempura shrimp",
    "german": "Tempura-Garnelen",
    "indonesian": "Udang Tempura",
    "brand": "Frozen",
    "quantity": "1 pack",
    "notes": ""
  },
  {
    "store": "Asia Markt",
    "category": "Frozen food",
    "status": "Buy",
    "english": "Chicken dumplings",
    "german": "Hähnchen-Dumplings",
    "indonesian": "Dumpling chicken",
    "brand": "Frozen",
    "quantity": "1 pack",
    "notes": ""
  },
  {
    "store": "Asia Markt",
    "category": "Spices",
    "status": "Buy",
    "english": "Coriander powder",
    "german": "Korianderpulver / gemahlener Koriander",
    "indonesian": "Ketumbar bubuk",
    "brand": "Any Asian brand",
    "quantity": "1 pack",
    "notes": ""
  },
  {
    "store": "Asia Markt",
    "category": "Fresh/frozen herbs",
    "status": "Buy",
    "english": "Lemongrass",
    "german": "Zitronengras",
    "indonesian": "Serai",
    "brand": "Fresh/frozen",
    "quantity": "1 pack",
    "notes": ""
  },
  {
    "store": "Asia Markt",
    "category": "Spices",
    "status": "Buy",
    "english": "Candlenut powder",
    "german": "Kemiri-Pulver / Kerzennuss gemahlen",
    "indonesian": "Kemiri bubuk",
    "brand": "Any Asian brand",
    "quantity": "1 pack",
    "notes": ""
  },
  {
    "store": "Kaufland",
    "category": "Fresh vegetables — 4–5 days only",
    "status": "Buy",
    "english": "Shallots",
    "german": "Schalotten",
    "indonesian": "Bawang merah",
    "brand": "",
    "quantity": "1 net",
    "notes": "Fresh"
  },
  {
    "store": "Kaufland",
    "category": "Fresh vegetables — 4–5 days only",
    "status": "Buy",
    "english": "Garlic",
    "german": "Knoblauch",
    "indonesian": "Bawang putih",
    "brand": "",
    "quantity": "1–2 bulbs",
    "notes": "Fresh"
  },
  {
    "store": "Kaufland",
    "category": "Fresh vegetables — 4–5 days only",
    "status": "Buy",
    "english": "Chili peppers",
    "german": "Peperoni / Chili",
    "indonesian": "Cabai",
    "brand": "",
    "quantity": "1 pack",
    "notes": "Fresh"
  },
  {
    "store": "Kaufland",
    "category": "Fresh vegetables — 4–5 days only",
    "status": "Buy",
    "english": "Bell peppers",
    "german": "Paprika",
    "indonesian": "Paprika",
    "brand": "",
    "quantity": "4–6 pcs",
    "notes": "Fresh"
  },
  {
    "store": "Kaufland",
    "category": "Fresh vegetables — 4–5 days only",
    "status": "Buy",
    "english": "Carrots",
    "german": "Karotten",
    "indonesian": "Wortel",
    "brand": "",
    "quantity": "1 kg",
    "notes": "Fresh"
  },
  {
    "store": "Kaufland",
    "category": "Fresh vegetables — 4–5 days only",
    "status": "Buy",
    "english": "Green beans",
    "german": "Grüne Bohnen",
    "indonesian": "Buncis",
    "brand": "",
    "quantity": "500 g–1 kg",
    "notes": "Fresh"
  },
  {
    "store": "Kaufland",
    "category": "Meat — for about 2 weeks, freeze portions",
    "status": "Buy",
    "english": "Boneless chicken thigh fillet",
    "german": "Hähnchenschenkel ohne Knochen / Hähnchenoberkeulenfilet",
    "indonesian": "Ayam paha fillet",
    "brand": "",
    "quantity": "about 2 kg",
    "notes": "Freeze in portions"
  },
  {
    "store": "Kaufland",
    "category": "Meat — for about 2 weeks, freeze portions",
    "status": "Buy",
    "english": "Chicken breast fillet",
    "german": "Hähnchenbrustfilet",
    "indonesian": "Dada fillet",
    "brand": "",
    "quantity": "about 2 kg",
    "notes": "Freeze in portions"
  },
  {
    "store": "Kaufland",
    "category": "Meat — for about 2 weeks, freeze portions",
    "status": "Buy",
    "english": "Chicken wings",
    "german": "Hähnchenflügel / Chicken Wings",
    "indonesian": "Chicken wings",
    "brand": "",
    "quantity": "about 2 kg",
    "notes": "Freeze in portions"
  },
  {
    "store": "Kaufland",
    "category": "Household / dairy / pantry",
    "status": "Buy",
    "english": "Milk",
    "german": "Milch",
    "indonesian": "Susu",
    "brand": "",
    "quantity": "6–12 liters",
    "notes": ""
  },
  {
    "store": "Kaufland",
    "category": "Household / dairy / pantry",
    "status": "Buy",
    "english": "Long tissue rolls / kitchen roll",
    "german": "Küchenrolle / lange Rollen",
    "indonesian": "Tissu lange Rollen",
    "brand": "",
    "quantity": "1 multipack",
    "notes": ""
  },
  {
    "store": "Kaufland",
    "category": "Household / dairy / pantry",
    "status": "Buy",
    "english": "Mashed potato",
    "german": "Kartoffelpüree / Kartoffelpüree-Pulver",
    "indonesian": "Mashed Potato",
    "brand": "",
    "quantity": "3–6 packs",
    "notes": "Non-perishable"
  },
  {
    "store": "Kaufland",
    "category": "Household / dairy / pantry",
    "status": "Optional",
    "english": "Extra coriander powder if not bought at Asia Markt",
    "german": "Korianderpulver / gemahlener Koriander",
    "indonesian": "Ketumbar bubuk",
    "brand": "",
    "quantity": "1 pack",
    "notes": "Only if missing from Asia Markt"
  }
];

const STORAGE_KEY = "localShoppingChecklist_v1";
const TEMP_KEY = "localShoppingChecklist_tempTicks_v1";

let bought = new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"));
let tempTicks = new Set(JSON.parse(localStorage.getItem(TEMP_KEY) || "[]"));

const storeSections = document.getElementById("storeSections");
const searchInput = document.getElementById("searchInput");
const storeFilter = document.getElementById("storeFilter");
const statusFilter = document.getElementById("statusFilter");
const viewFilter = document.getElementById("viewFilter");
const confirmBtn = document.getElementById("confirmBtn");
const resetBtn = document.getElementById("resetBtn");
const exportBtn = document.getElementById("exportBtn");
const exportDialog = document.getElementById("exportDialog");
const exportText = document.getElementById("exportText");
const copyExportBtn = document.getElementById("copyExportBtn");

function itemId(item, index) {
  return `${item.store}|${item.category}|${item.english}|${index}`;
}

const data = ITEMS.map((item, index) => ({ ...item, id: itemId(item, index) }));

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...bought]));
  localStorage.setItem(TEMP_KEY, JSON.stringify([...tempTicks]));
}

function matchesFilters(item) {
  const q = searchInput.value.trim().toLowerCase();
  const text = [
    item.store, item.category, item.status, item.english, item.german,
    item.indonesian, item.brand, item.quantity, item.notes
  ].join(" ").toLowerCase();

  const storeOk = storeFilter.value === "all" || item.store === storeFilter.value;
  const statusOk = statusFilter.value === "all" || item.status === statusFilter.value;
  const viewOk =
    viewFilter.value === "all" ||
    (viewFilter.value === "bought" && bought.has(item.id)) ||
    (viewFilter.value === "remaining" && !bought.has(item.id));

  return storeOk && statusOk && viewOk && (!q || text.includes(q));
}

function groupBy(list, key) {
  return list.reduce((acc, item) => {
    const value = item[key] || "Other";
    if (!acc[value]) acc[value] = [];
    acc[value].push(item);
    return acc;
  }, {});
}

function render() {
  updateSummary();

  const filtered = data.filter(matchesFilters);
  if (!filtered.length) {
    storeSections.innerHTML = `<div class="empty">No products match your filters.</div>`;
    return;
  }

  const byStore = groupBy(filtered, "store");

  storeSections.innerHTML = Object.entries(byStore).map(([store, storeItems]) => {
    const boughtInStore = storeItems.filter(i => bought.has(i.id)).length;
    const categories = groupBy(storeItems, "category");

    return `
      <section class="store">
        <div class="store-header">
          <h2>${escapeHtml(store)}</h2>
          <small>${boughtInStore} / ${storeItems.length} shown bought</small>
        </div>
        ${Object.entries(categories).map(([category, categoryItems]) => `
          <div class="category">
            <h3>${escapeHtml(category)}</h3>
            <div class="item-grid">
              ${categoryItems.map(itemCard).join("")}
            </div>
          </div>
        `).join("")}
      </section>
    `;
  }).join("");

  document.querySelectorAll(".item-check").forEach(input => {
    input.addEventListener("change", (event) => {
      const id = event.target.dataset.id;
      if (event.target.checked) tempTicks.add(id);
      else tempTicks.delete(id);
      save();
    });
  });

  document.querySelectorAll("[data-unmark]").forEach(button => {
    button.addEventListener("click", () => {
      bought.delete(button.dataset.unmark);
      tempTicks.delete(button.dataset.unmark);
      save();
      render();
    });
  });
}

function itemCard(item) {
  const isBought = bought.has(item.id);
  const isTicked = tempTicks.has(item.id) || isBought;
  const statusClass = item.status.toLowerCase();

  return `
    <article class="item-card ${isBought ? "bought" : ""} ${statusClass}">
      <input class="item-check" type="checkbox" data-id="${escapeHtml(item.id)}"
        ${isTicked ? "checked" : ""} ${isBought ? "disabled" : ""}
        aria-label="Mark ${escapeHtml(item.english)} as selected" />
      <div>
        <div class="item-title">
          <strong>${escapeHtml(item.english)}</strong>
          <span class="badge ${statusClass}">${escapeHtml(item.status)}</span>
        </div>

        <div class="meta">
          <div><b>German:</b> ${escapeHtml(item.german || "-")}</div>
          ${item.indonesian ? `<div><b>Indonesian:</b> ${escapeHtml(item.indonesian)}</div>` : ""}
          ${item.brand ? `<div><b>Brand/mark:</b> ${escapeHtml(item.brand)}</div>` : ""}
          ${item.notes ? `<div><b>Note:</b> ${escapeHtml(item.notes)}</div>` : ""}
        </div>

        <span class="quantity">Qty: ${escapeHtml(item.quantity)}</span>

        ${isBought ? `
          <div class="card-actions">
            <button class="secondary" data-unmark="${escapeHtml(item.id)}">Undo bought</button>
          </div>
        ` : ""}
      </div>
    </article>
  `;
}

function updateSummary() {
  const total = data.length;
  const boughtCount = data.filter(i => bought.has(i.id)).length;
  const optionalCount = data.filter(i => i.status === "Optional").length;

  document.getElementById("totalCount").textContent = total;
  document.getElementById("boughtCount").textContent = boughtCount;
  document.getElementById("remainingCount").textContent = total - boughtCount;
  document.getElementById("optionalCount").textContent = optionalCount;
}

function confirmSelected() {
  const selected = [...tempTicks].filter(id => !bought.has(id));
  if (!selected.length) {
    alert("No new products selected. Tick products first, then confirm.");
    return;
  }

  selected.forEach(id => bought.add(id));
  tempTicks.clear();
  save();
  render();
}

function resetAll() {
  const ok = confirm("Reset all bought/checked products? This clears local saved progress.");
  if (!ok) return;
  bought.clear();
  tempTicks.clear();
  save();
  render();
}

function exportBoughtList() {
  const boughtItems = data.filter(i => bought.has(i.id));
  const lines = [];

  lines.push("BOUGHT SHOPPING LIST");
  lines.push("====================");
  lines.push("");

  if (!boughtItems.length) {
    lines.push("Nothing bought yet.");
  } else {
    const byStore = groupBy(boughtItems, "store");
    Object.entries(byStore).forEach(([store, storeItems]) => {
      lines.push(store.toUpperCase());
      lines.push("-".repeat(store.length));
      storeItems.forEach(item => {
        lines.push(`✓ ${item.english} | ${item.german}${item.indonesian ? " | " + item.indonesian : ""} | Qty: ${item.quantity}${item.brand ? " | Brand: " + item.brand : ""}`);
      });
      lines.push("");
    });
  }

  exportText.value = lines.join("\n");
  exportDialog.showModal();
}

async function copyExport() {
  try {
    await navigator.clipboard.writeText(exportText.value);
    copyExportBtn.textContent = "Copied!";
    setTimeout(() => copyExportBtn.textContent = "Copy", 1200);
  } catch {
    exportText.select();
    document.execCommand("copy");
  }
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

[searchInput, storeFilter, statusFilter, viewFilter].forEach(el => el.addEventListener("input", render));
confirmBtn.addEventListener("click", confirmSelected);
resetBtn.addEventListener("click", resetAll);
exportBtn.addEventListener("click", exportBoughtList);
copyExportBtn.addEventListener("click", copyExport);

render();
