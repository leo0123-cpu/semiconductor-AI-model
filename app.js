const ELEMENT_CSV = `symbol,Z,period,group,en,radius,mass,valence,mendeleev,IE,EA,type
B,5,2,13,2.04,87,10.81,3,86,8.298,0.277,metalloid
C,6,2,14,2.55,67,12.01,4,77,11.260,1.262,nonmetal
N,7,2,15,3.04,56,14.01,5,82,14.530,-0.070,nonmetal
O,8,2,16,3.44,48,16.00,6,87,13.610,1.461,nonmetal
Na,11,3,1,0.93,190,22.99,1,11,5.139,0.548,metal
Mg,12,3,2,1.31,145,24.31,2,68,7.646,-0.400,metal
Al,13,3,13,1.61,118,26.98,3,73,5.986,0.432,metal
Si,14,3,14,1.90,111,28.09,4,78,8.151,1.389,metalloid
P,15,3,15,2.19,98,30.97,5,83,10.480,0.746,nonmetal
S,16,3,16,2.58,88,32.06,6,88,10.360,2.077,nonmetal
K,19,4,1,0.82,243,39.10,1,9,4.340,0.501,metal
Ca,20,4,2,1.00,194,40.08,2,10,6.113,0.024,metal
Sc,21,4,3,1.36,184,44.96,3,12,6.561,0.188,metal
Ti,22,4,4,1.54,176,47.87,4,43,6.828,0.079,metal
V,23,4,5,1.63,171,50.94,5,46,6.746,0.525,metal
Cr,24,4,6,1.66,166,52.00,6,51,6.766,0.675,metal
Mn,25,4,7,1.55,161,54.94,7,54,7.434,0.000,metal
Fe,26,4,8,1.83,156,55.85,8,57,7.902,0.151,metal
Co,27,4,9,1.88,152,58.93,9,60,7.881,0.662,metal
Ni,28,4,10,1.91,149,58.69,10,63,7.639,1.157,metal
Cu,29,4,11,1.90,145,63.55,11,65,7.726,1.235,metal
Zn,30,4,12,1.65,142,65.38,12,69,9.394,-0.600,metal
Ga,31,4,13,1.81,136,69.72,3,74,5.999,0.300,metal
Ge,32,4,14,2.01,125,72.63,4,79,7.899,1.233,metalloid
As,33,4,15,2.18,114,74.92,5,84,9.815,0.810,metalloid
Se,34,4,16,2.55,103,78.97,6,89,9.752,2.021,nonmetal
Sr,38,5,2,0.95,219,87.62,2,8,5.694,0.052,metal
Y,39,5,3,1.22,212,88.91,3,13,6.217,0.307,metal
Zr,40,5,4,1.33,206,91.22,4,44,6.633,0.426,metal
Nb,41,5,5,1.60,198,92.91,5,47,6.758,0.893,metal
Mo,42,5,6,2.16,190,95.95,6,52,7.092,0.747,metal
Ag,47,5,11,1.93,165,107.87,11,66,7.576,1.304,metal
Cd,48,5,12,1.69,161,112.41,12,70,8.993,-0.700,metal
In,49,5,13,1.78,156,114.82,3,75,5.786,0.300,metal
Sn,50,5,14,1.96,145,118.71,4,80,7.343,1.112,metal
Te,52,5,16,2.10,123,127.60,6,90,9.009,1.971,metalloid
Ba,56,6,2,0.89,253,137.33,2,7,5.211,0.144,metal
La,57,6,3,1.10,195,138.91,3,14,5.576,0.470,metal
Hf,72,6,4,1.30,208,178.49,4,45,6.825,0.000,metal
Ta,73,6,5,1.50,200,180.95,5,48,7.549,0.322,metal
W,74,6,6,2.36,193,183.84,6,53,7.864,0.816,metal
Pb,82,6,14,2.33,154,207.20,4,81,7.416,0.364,metal
Bi,83,6,15,2.02,143,208.98,5,85,7.285,0.942,metal`;

const DATA_CSV = `formula,band_gap
Si,1.12
Ge,0.66
C,5.50
BN,6.00
SiC,3.20
Si3N4,5.00
AlN,6.20
GaN,3.40
InN,0.70
GaP,2.26
AlP,2.45
InP,1.34
GaAs,1.42
AlAs,2.16
InAs,0.36
ZnO,3.30
ZnS,3.60
ZnSe,2.70
ZnTe,2.26
CdS,2.42
CdSe,1.74
CdTe,1.50
PbS,0.41
PbSe,0.27
PbTe,0.31
SnS,1.30
SnSe,0.90
MoS2,1.80
MoSe2,1.55
WS2,2.00
WSe2,1.65
Bi2Te3,0.15
Cu2O,2.10
CuO,1.40
Ag2S,1.00
FeS2,0.95
TiO2,3.20
SnO2,3.60
In2O3,2.90
Ga2O3,4.80
Al2O3,8.80
HfO2,5.70
ZrO2,5.00
MgO,7.80
CaO,7.10
SrO,5.90
BaO,4.00
La2O3,5.50
Y2O3,5.60
Sc2O3,5.70
Ta2O5,4.00
Nb2O5,3.40
WO3,2.70
MoO3,3.00
Fe2O3,2.20
Fe3O4,0.10
NiO,3.70
CoO,2.40
MnO,3.60
Cr2O3,3.40
V2O5,2.30
BaTiO3,3.20
SrTiO3,3.25
CaTiO3,3.50
PbTiO3,3.40
BiFeO3,2.70
LaFeO3,2.10
KTaO3,3.60
NaTaO3,4.00
Mg2Si,0.77
Ca2Si,1.90
Sr2Si,1.50
GaSe,2.00
GaTe,1.65
InSe,1.25
InTe,1.00
GeS,1.60
GeSe,1.10
SnO,2.70
Zn3N2,1.20
Ga2S3,2.85
In2S3,2.20
TiS2,0.20
ZrS2,1.70
HfS2,1.80
CuS,1.20
Cu2S,1.21
CdO,2.20
Y3Al5O12,6.50
BaZrO3,5.30
SrZrO3,5.60`;

const PROPERTY_KEYS = ["Z", "period", "group", "en", "radius", "mass", "valence", "mendeleev", "IE", "EA"];
const DEFAULT_INPUT = "GaN SiC Ga2O3 AlN ZnO";
const VIRTUAL_CANDIDATES = [
  "GaN", "AlN", "InN", "BN", "SiC", "ZnO", "Ga2O3", "Al2O3", "In2O3",
  "HfO2", "ZrO2", "TiO2", "SnO2", "MgO", "CaO", "SrO", "BaO",
  "Ta2O5", "Nb2O5", "WO3", "MoO3", "BaTiO3", "SrTiO3", "CaTiO3",
  "BaZrO3", "SrZrO3", "KTaO3", "NaTaO3", "Y2O3", "Sc2O3", "La2O3",
  "GaP", "AlP", "InP", "GaAs", "AlAs", "ZnS", "ZnSe", "ZnTe",
  "GaSe", "GaTe", "InSe", "InTe", "GeS", "GeSe", "MoS2", "WS2",
  "HfS2", "ZrS2", "TiS2"
];

function parseCsv(csv) {
  const [headerLine, ...rows] = csv.trim().split(/\r?\n/);
  const headers = headerLine.split(",");
  return rows.map((line) => {
    const values = line.split(",");
    return Object.fromEntries(headers.map((header, index) => [header, values[index]]));
  });
}

const ELEMENT_ROWS = parseCsv(ELEMENT_CSV).map((row) => {
  const next = { ...row };
  for (const key of PROPERTY_KEYS) next[key] = Number(next[key]);
  return next;
});

const ELEMENTS = Object.fromEntries(ELEMENT_ROWS.map((row) => [row.symbol, row]));
const MATERIALS = parseCsv(DATA_CSV).map((row) => ({
  formula: row.formula,
  bandGap: Number(row.band_gap)
}));

const SUBSCRIPT_MAP = new Map([
  ["₀", "0"], ["₁", "1"], ["₂", "2"], ["₃", "3"], ["₄", "4"],
  ["₅", "5"], ["₆", "6"], ["₇", "7"], ["₈", "8"], ["₉", "9"]
]);

function normalizeFormula(text) {
  return String(text || "")
    .replace(/[₀₁₂₃₄₅₆₇₈₉]/g, (digit) => SUBSCRIPT_MAP.get(digit))
    .trim();
}

function parseFormula(formula) {
  const normalized = normalizeFormula(formula);
  if (!normalized) throw new Error("화학식이 비어 있습니다.");
  if (/[()]/.test(normalized)) {
    throw new Error("괄호 화학식은 지원하지 않습니다. 예: CaTiO3처럼 풀어서 입력하세요.");
  }

  const matches = [...normalized.matchAll(/([A-Z][a-z]?)([0-9]*[.]?[0-9]*)/g)];
  const parsedText = matches.map((match) => `${match[1]}${match[2]}`).join("");
  if (!matches.length || parsedText !== normalized) {
    throw new Error(`화학식 형식이 올바르지 않습니다: ${normalized}`);
  }

  const counts = {};
  for (const match of matches) {
    const symbol = match[1];
    const amount = match[2] ? Number(match[2]) : 1;
    if (!ELEMENTS[symbol]) throw new Error(`DB에 없는 원소입니다: ${symbol}`);
    if (!Number.isFinite(amount) || amount <= 0) throw new Error(`원소 개수가 올바르지 않습니다: ${symbol}${match[2]}`);
    counts[symbol] = (counts[symbol] || 0) + amount;
  }
  return { normalized, counts };
}

function weightedMean(values, weights) {
  return values.reduce((sum, value, index) => sum + value * weights[index], 0);
}

function weightedStd(values, weights) {
  const avg = weightedMean(values, weights);
  const variance = values.reduce((sum, value, index) => sum + weights[index] * (value - avg) ** 2, 0);
  return Math.sqrt(variance);
}

function pairwiseWeightedDifference(values, weights) {
  if (values.length < 2) return 0;
  let total = 0;
  let weightSum = 0;
  for (let i = 0; i < values.length; i += 1) {
    for (let j = i + 1; j < values.length; j += 1) {
      const weight = weights[i] * weights[j];
      total += weight * Math.abs(values[i] - values[j]);
      weightSum += weight;
    }
  }
  return weightSum ? total / weightSum : 0;
}

function formulaToFeatures(formula) {
  const { normalized, counts } = parseFormula(formula);
  const elements = Object.keys(counts);
  const totalAtoms = Object.values(counts).reduce((sum, value) => sum + value, 0);
  const fractions = Object.fromEntries(elements.map((symbol) => [symbol, counts[symbol] / totalAtoms]));
  const weights = elements.map((symbol) => fractions[symbol]);

  const features = {
    num_elements: elements.length,
    total_atoms: totalAtoms,
    composition_entropy: -weights.reduce((sum, weight) => sum + weight * Math.log(weight), 0)
  };

  for (const key of PROPERTY_KEYS) {
    const values = elements.map((symbol) => ELEMENTS[symbol][key]);
    const min = Math.min(...values);
    const max = Math.max(...values);
    features[`${key}_mean`] = weightedMean(values, weights);
    features[`${key}_std`] = weightedStd(values, weights);
    features[`${key}_min`] = min;
    features[`${key}_max`] = max;
    features[`${key}_range`] = max - min;
  }

  const enValues = elements.map((symbol) => ELEMENTS[symbol].en);
  const radiusValues = elements.map((symbol) => ELEMENTS[symbol].radius);
  const pairEnDiff = pairwiseWeightedDifference(enValues, weights);
  const pairRadiusDiff = pairwiseWeightedDifference(radiusValues, weights);

  features.pauling_ionicity_max = 1 - Math.exp(-0.25 * features.en_range ** 2);
  features.pauling_ionicity_pairwise = 1 - Math.exp(-0.25 * pairEnDiff ** 2);
  features.hannay_ionic_character = 0.16 * features.en_range + 0.035 * features.en_range ** 2;
  features.pairwise_en_difference = pairEnDiff;
  features.bond_polarity_index = features.en_range / (features.en_mean + 1e-9);
  features.radius_mismatch_index = pairRadiusDiff / (features.radius_mean + 1e-9);
  features.VEC_mean = features.valence_mean;
  features.VEC_total = elements.reduce((sum, symbol) => sum + ELEMENTS[symbol].valence * counts[symbol], 0);
  features.Z_over_radius = features.Z_mean / (features.radius_mean + 1e-9);
  features.en_over_radius = features.en_mean / (features.radius_mean + 1e-9);
  features.IE_minus_EA_mean = features.IE_mean - features.EA_mean;
  features.charge_transfer_proxy = features.en_range * features.IE_minus_EA_mean;
  features.oxide_flag = Number(elements.includes("O"));
  features.nitride_flag = Number(elements.includes("N"));
  features.carbide_flag = Number(elements.includes("C"));
  features.chalcogenide_flag = Number(elements.some((symbol) => ["S", "Se", "Te"].includes(symbol)));
  features.III_V_flag = Number(
    elements.some((symbol) => ["B", "Al", "Ga", "In"].includes(symbol)) &&
    elements.some((symbol) => ["N", "P", "As"].includes(symbol))
  );

  for (const symbol of Object.keys(ELEMENTS)) {
    features[`fraction_${symbol}`] = fractions[symbol] || 0;
  }

  return { normalized, elements, counts, fractions, features };
}

const TRAINING_ROWS = MATERIALS.map((material) => ({
  ...material,
  parsed: formulaToFeatures(material.formula)
}));

const FEATURE_NAMES = Object.keys(TRAINING_ROWS[0].parsed.features);
const FEATURE_STATS = Object.fromEntries(FEATURE_NAMES.map((name) => {
  const values = TRAINING_ROWS.map((row) => row.parsed.features[name] || 0);
  const mean = values.reduce((sum, value) => sum + value, 0) / values.length;
  const variance = values.reduce((sum, value) => sum + (value - mean) ** 2, 0) / values.length;
  return [name, { mean, std: Math.sqrt(variance) || 1 }];
}));

const DISTANCE_FEATURES = [
  "Z_mean", "period_mean", "group_mean", "en_mean", "radius_mean", "mass_mean",
  "valence_mean", "IE_mean", "EA_mean", "en_range", "radius_range",
  "composition_entropy", "pauling_ionicity_max", "bond_polarity_index",
  "radius_mismatch_index", "oxide_flag", "nitride_flag", "carbide_flag",
  "chalcogenide_flag", "III_V_flag"
];

function scaledValue(features, name) {
  const stat = FEATURE_STATS[name];
  return ((features[name] || 0) - stat.mean) / stat.std;
}

function featureDistance(a, b) {
  const total = DISTANCE_FEATURES.reduce((sum, name) => {
    const diff = scaledValue(a, name) - scaledValue(b, name);
    return sum + diff ** 2;
  }, 0);
  return Math.sqrt(total / DISTANCE_FEATURES.length);
}

function confidenceLevel(distance) {
  if (distance < 0.85) return "높음";
  if (distance < 1.55) return "보통";
  return "낮음";
}

function powerSemiconductorScore(bandGap, totalUncertainty) {
  let baseScore;
  let label;
  if (bandGap < 0.1) {
    baseScore = 5;
    label = "금속에 가까움";
  } else if (bandGap < 1.0) {
    baseScore = 25;
    label = "밴드갭이 작아 전력 반도체 후보로는 약함";
  } else if (bandGap < 2.5) {
    baseScore = 45 + ((bandGap - 1.0) / 1.5) * 25;
    label = "일반 반도체 후보";
  } else if (bandGap <= 5.5) {
    baseScore = Math.max(75, Math.min(100, 100 - Math.abs(bandGap - 3.6) * 8));
    label = "전력 반도체용 와이드 밴드갭 후보";
  } else if (bandGap <= 6.8) {
    baseScore = Math.max(50, 70 - (bandGap - 5.5) * 10);
    label = "초광대역 후보, 절연체 성격 검토 필요";
  } else {
    baseScore = 30;
    label = "절연체에 가까울 가능성 큼";
  }

  const uncertaintyPenalty = Math.min(25, totalUncertainty * 8);
  return {
    score: Math.round(Math.max(0, baseScore - uncertaintyPenalty) * 10) / 10,
    label
  };
}

function predictFormula(formula) {
  const parsed = formulaToFeatures(formula);
  const neighbors = TRAINING_ROWS
    .map((row) => ({
      formula: row.formula,
      bandGap: row.bandGap,
      distance: featureDistance(parsed.features, row.parsed.features)
    }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, 5);

  const exact = neighbors.find((neighbor) => neighbor.distance < 1e-9);
  let predictedBandGap;
  let localSpread;

  if (exact) {
    predictedBandGap = exact.bandGap;
    localSpread = 0.12;
  } else {
    const weighted = neighbors.map((neighbor) => ({
      ...neighbor,
      weight: 1 / (neighbor.distance ** 2 + 0.08)
    }));
    const weightSum = weighted.reduce((sum, neighbor) => sum + neighbor.weight, 0);
    predictedBandGap = weighted.reduce((sum, neighbor) => sum + neighbor.bandGap * neighbor.weight, 0) / weightSum;
    const mean = predictedBandGap;
    localSpread = Math.sqrt(
      weighted.reduce((sum, neighbor) => sum + neighbor.weight * (neighbor.bandGap - mean) ** 2, 0) / weightSum
    );
  }

  const distance = neighbors[0].distance;
  const totalUncertainty = Math.sqrt(localSpread ** 2 + (distance * 0.35) ** 2 + 0.18 ** 2);
  const scoreInfo = powerSemiconductorScore(predictedBandGap, totalUncertainty);

  return {
    formula: parsed.normalized,
    htmlFormula: formulaToHtml(parsed.normalized),
    elements: parsed.elements,
    bandGap: Math.max(0, predictedBandGap),
    uncertainty: totalUncertainty,
    distance,
    confidence: confidenceLevel(distance),
    score: scoreInfo.score,
    judgement: scoreInfo.label,
    nearest: neighbors
  };
}

function splitInput(text) {
  const normalized = normalizeFormula(text);
  const source = normalized || DEFAULT_INPUT;
  return source
    .split(/[,\s]+/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function formulaToHtml(formula) {
  return escapeHtml(formula).replace(/([0-9.]+)/g, "<sub>$1</sub>");
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function familyLabel(formula) {
  const { elements } = formulaToFeatures(formula);
  if (elements.includes("O")) return "산화물";
  if (elements.includes("N")) return "질화물";
  if (elements.includes("C")) return "탄화물";
  if (elements.some((symbol) => ["S", "Se", "Te"].includes(symbol))) return "칼코게나이드";
  if (
    elements.some((symbol) => ["B", "Al", "Ga", "In"].includes(symbol)) &&
    elements.some((symbol) => ["N", "P", "As"].includes(symbol))
  ) return "III-V";
  return "기타";
}

function confidenceClass(confidence) {
  if (confidence === "높음") return "high";
  if (confidence === "보통") return "medium";
  return "low";
}

function resultCard(result) {
  const nearestText = result.nearest
    .map((neighbor) => `${neighbor.formula}(${neighbor.bandGap.toFixed(2)}eV)`)
    .join(", ");
  return `
    <article class="result-card">
      <div class="result-top">
        <div>
          <h3 class="formula">${result.htmlFormula}</h3>
          <p class="bandgap">${result.bandGap.toFixed(2)} eV 예측</p>
        </div>
        <div class="score-ring" style="--score: ${Math.round(result.score)}"><span>${result.score.toFixed(1)}</span></div>
      </div>
      <div class="badges">
        <span class="badge ${confidenceClass(result.confidence)}">신뢰도 ${result.confidence}</span>
        <span class="badge">${familyLabel(result.formula)}</span>
      </div>
      <dl>
        <div>
          <dt>총 불확실성</dt>
          <dd>${result.uncertainty.toFixed(2)} eV</dd>
        </div>
        <div>
          <dt>데이터 거리</dt>
          <dd>${result.distance.toFixed(2)}</dd>
        </div>
        <div>
          <dt>구성 원소</dt>
          <dd>${result.elements.join(", ")}</dd>
        </div>
        <div>
          <dt>판정</dt>
          <dd>${escapeHtml(result.judgement)}</dd>
        </div>
      </dl>
      <p class="nearest">가까운 기존 물질: ${escapeHtml(nearestText)}</p>
    </article>
  `;
}

function renderPredictions(text) {
  const grid = document.querySelector("#results-grid");
  const errorBox = document.querySelector("#error-box");
  const formulas = splitInput(text);
  const results = [];
  const errors = [];

  for (const formula of formulas) {
    try {
      results.push(predictFormula(formula));
    } catch (error) {
      errors.push(`${formula}: ${error.message}`);
    }
  }

  grid.innerHTML = results.map(resultCard).join("");
  errorBox.hidden = errors.length === 0;
  errorBox.textContent = errors.join(" / ");
}

function renderCandidateTable() {
  const tbody = document.querySelector("#candidate-table");
  const rows = [...new Set(VIRTUAL_CANDIDATES)]
    .map((formula) => predictFormula(formula))
    .sort((a, b) => b.score - a.score || a.uncertainty - b.uncertainty)
    .slice(0, 15);

  tbody.innerHTML = rows.map((row, index) => `
    <tr>
      <td>${index + 1}</td>
      <td><strong>${row.htmlFormula}</strong></td>
      <td>${row.bandGap.toFixed(2)} eV</td>
      <td><span class="badge ${row.score >= 75 ? "high" : "medium"}">${row.score.toFixed(1)}</span></td>
      <td><span class="badge ${confidenceClass(row.confidence)}">${row.confidence}</span></td>
      <td>${escapeHtml(row.judgement)}</td>
    </tr>
  `).join("");
}

function renderDatasetTable(filter = "") {
  const query = normalizeFormula(filter).toLowerCase();
  const tbody = document.querySelector("#dataset-table");
  const count = document.querySelector("#dataset-count");
  const rows = MATERIALS.filter((row) => row.formula.toLowerCase().includes(query));

  tbody.innerHTML = rows.map((row) => `
    <tr>
      <td><strong>${formulaToHtml(row.formula)}</strong></td>
      <td>${row.bandGap.toFixed(2)}</td>
      <td>${familyLabel(row.formula)}</td>
    </tr>
  `).join("");
  count.textContent = `${rows.length}개 표시`;
}

function drawBandgapChart() {
  const canvas = document.querySelector("#bandgap-chart");
  const context = canvas.getContext("2d");
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = Math.max(720, Math.round(rect.width * dpr));
  canvas.height = Math.round(420 * dpr);
  context.scale(dpr, dpr);

  const width = canvas.width / dpr;
  const height = canvas.height / dpr;
  const margin = { left: 58, right: 28, top: 28, bottom: 52 };
  const plotWidth = width - margin.left - margin.right;
  const plotHeight = height - margin.top - margin.bottom;
  const chartRows = TRAINING_ROWS.map((row) => ({
    formula: row.formula,
    x: row.parsed.features.Z_mean,
    y: row.parsed.features.en_mean,
    gap: row.bandGap
  }));

  const xMin = Math.min(...chartRows.map((row) => row.x)) - 3;
  const xMax = Math.max(...chartRows.map((row) => row.x)) + 3;
  const yMin = Math.min(...chartRows.map((row) => row.y)) - 0.15;
  const yMax = Math.max(...chartRows.map((row) => row.y)) + 0.15;
  const gapMax = Math.max(...chartRows.map((row) => row.gap));

  const xScale = (value) => margin.left + ((value - xMin) / (xMax - xMin)) * plotWidth;
  const yScale = (value) => margin.top + plotHeight - ((value - yMin) / (yMax - yMin)) * plotHeight;

  context.clearRect(0, 0, width, height);
  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, width, height);

  context.strokeStyle = "#d9e2ea";
  context.lineWidth = 1;
  context.fillStyle = "#627084";
  context.font = "12px Segoe UI, sans-serif";

  for (let i = 0; i <= 5; i += 1) {
    const x = margin.left + (plotWidth / 5) * i;
    const y = margin.top + (plotHeight / 5) * i;
    context.beginPath();
    context.moveTo(x, margin.top);
    context.lineTo(x, margin.top + plotHeight);
    context.moveTo(margin.left, y);
    context.lineTo(margin.left + plotWidth, y);
    context.stroke();
  }

  for (const row of chartRows) {
    const hue = 205 - (row.gap / gapMax) * 150;
    context.beginPath();
    context.arc(xScale(row.x), yScale(row.y), 5.4, 0, Math.PI * 2);
    context.fillStyle = `hsl(${hue}, 70%, 46%)`;
    context.fill();
    context.strokeStyle = "rgba(19, 34, 56, 0.35)";
    context.stroke();
  }

  context.fillStyle = "#132238";
  context.font = "700 13px Segoe UI, sans-serif";
  context.fillText("평균 원자번호", margin.left + plotWidth / 2 - 40, height - 16);

  context.save();
  context.translate(18, margin.top + plotHeight / 2 + 46);
  context.rotate(-Math.PI / 2);
  context.fillText("평균 전기음성도", 0, 0);
  context.restore();

  context.fillStyle = "#627084";
  context.font = "12px Segoe UI, sans-serif";
  context.fillText(xMin.toFixed(0), margin.left - 8, height - 34);
  context.fillText(xMax.toFixed(0), margin.left + plotWidth - 12, height - 34);
  context.fillText(yMin.toFixed(1), 20, margin.top + plotHeight + 4);
  context.fillText(yMax.toFixed(1), 20, margin.top + 4);
}

function bindEvents() {
  const form = document.querySelector("#predict-form");
  const input = document.querySelector("#formula-input");
  const datasetSearch = document.querySelector("#dataset-search");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    renderPredictions(input.value);
  });

  document.querySelectorAll("[data-example]").forEach((button) => {
    button.addEventListener("click", () => {
      input.value = button.dataset.example;
      renderPredictions(input.value);
    });
  });

  datasetSearch.addEventListener("input", () => renderDatasetTable(datasetSearch.value));
  window.addEventListener("resize", drawBandgapChart);
}

function init() {
  document.querySelector("#material-count").textContent = MATERIALS.length;
  document.querySelector("#element-count").textContent = ELEMENT_ROWS.length;
  document.querySelector("#formula-input").value = "";
  bindEvents();
  renderPredictions(DEFAULT_INPUT);
  renderCandidateTable();
  renderDatasetTable();
  drawBandgapChart();
}

document.addEventListener("DOMContentLoaded", init);
