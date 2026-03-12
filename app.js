/* ============================================
   DASHBOARD MENTORIA — VESTIBULAR MEDICINA
   Application Logic  (v2 — Refinado)
   ============================================ */

// ==========================================
// DATA: 12 Weeks Schedule (exactly as defined)
// ==========================================
const ALL_SUBJECTS = [
  { id: 'bio', name: 'Biologia', color: 'var(--bio-color)', pillClass: 'pill-bio', priority: 'maxima', priorityLabel: 'Máxima', type: 'ancora', typeLabel: 'Âncora', sensitive: true },
  { id: 'quim', name: 'Química', color: 'var(--quim-color)', pillClass: 'pill-quim', priority: 'maxima', priorityLabel: 'Máxima', type: 'ancora', typeLabel: 'Âncora', sensitive: true },
  { id: 'fis', name: 'Física', color: 'var(--fis-color)', pillClass: 'pill-fis', priority: 'alta', priorityLabel: 'Alta', type: 'apoio', typeLabel: 'Apoio', sensitive: true },
  { id: 'mat', name: 'Matemática', color: 'var(--mat-color)', pillClass: 'pill-mat', priority: 'alta', priorityLabel: 'Alta', type: 'apoio', typeLabel: 'Apoio', sensitive: true },
  { id: 'hist', name: 'História', color: 'var(--hist-color)', pillClass: 'pill-hist', priority: 'media', priorityLabel: 'Média', type: 'rotativa', typeLabel: 'Rotativa', sensitive: false },
  { id: 'geo', name: 'Geografia', color: 'var(--geo-color)', pillClass: 'pill-geo', priority: 'media', priorityLabel: 'Média', type: 'rotativa', typeLabel: 'Rotativa', sensitive: false },
  { id: 'ling', name: 'Língua Estrangeira', color: 'var(--ling-color)', pillClass: 'pill-ling', priority: 'media', priorityLabel: 'Média', type: 'rotativa', typeLabel: 'Rotativa', sensitive: false },
];

const WEEKS_DATA = [
  {
    week: 1, out: 'ling', phase: 'Construção de Base',
    blocks: [
      { mirror: 'Seg / Qui', discursiva: 'Biologia', subjects: [{ id: 'bio', topic: 'Genética molecular I', role: 'ancora' }, { id: 'mat', topic: 'Funções I', role: 'apoio' }] },
      { mirror: 'Ter / Sex', discursiva: 'Química', subjects: [{ id: 'quim', topic: 'Estequiometria I', role: 'ancora' }, { id: 'hist', topic: 'Brasil Colônia I', role: 'apoio' }] },
      { mirror: 'Qua / Sáb', discursiva: 'Física', subjects: [{ id: 'fis', topic: 'Mecânica I', role: 'ancora' }, { id: 'geo', topic: 'Geografia física I', role: 'apoio' }] },
    ]
  },
  {
    week: 2, out: 'geo', phase: 'Construção de Base',
    blocks: [
      { mirror: 'Seg / Qui', discursiva: 'Biologia', subjects: [{ id: 'bio', topic: 'Genética molecular II', role: 'ancora' }, { id: 'mat', topic: 'Funções II', role: 'apoio' }] },
      { mirror: 'Ter / Sex', discursiva: 'Química', subjects: [{ id: 'quim', topic: 'Estequiometria II', role: 'ancora' }, { id: 'hist', topic: 'Brasil Império', role: 'apoio' }] },
      { mirror: 'Qua / Sáb', discursiva: 'Física', subjects: [{ id: 'fis', topic: 'Mecânica II', role: 'ancora' }, { id: 'ling', topic: 'Leitura I', role: 'apoio' }] },
    ]
  },
  {
    week: 3, out: 'hist', phase: 'Construção de Base',
    blocks: [
      { mirror: 'Seg / Qui', discursiva: 'Biologia', subjects: [{ id: 'bio', topic: 'Mendelismo', role: 'ancora' }, { id: 'mat', topic: 'Álgebra e equações', role: 'apoio' }] },
      { mirror: 'Ter / Sex', discursiva: 'Química', subjects: [{ id: 'quim', topic: 'Soluções', role: 'ancora' }, { id: 'geo', topic: 'Espaço brasileiro I', role: 'apoio' }] },
      { mirror: 'Qua / Sáb', discursiva: 'Física', subjects: [{ id: 'fis', topic: 'Termologia I', role: 'ancora' }, { id: 'ling', topic: 'Leitura II', role: 'apoio' }] },
    ]
  },
  {
    week: 4, out: 'ling', phase: 'Aprofundamento',
    blocks: [
      { mirror: 'Seg / Qui', discursiva: 'Biologia', subjects: [{ id: 'bio', topic: 'Célula I', role: 'ancora' }, { id: 'mat', topic: 'Probabilidade e combinatória', role: 'apoio' }] },
      { mirror: 'Ter / Sex', discursiva: 'Química', subjects: [{ id: 'quim', topic: 'Equilíbrio químico I', role: 'ancora' }, { id: 'hist', topic: 'República Velha e Era Vargas', role: 'apoio' }] },
      { mirror: 'Qua / Sáb', discursiva: 'Física', subjects: [{ id: 'fis', topic: 'Termologia II / Fluidos', role: 'ancora' }, { id: 'geo', topic: 'Geografia física II', role: 'apoio' }] },
    ]
  },
  {
    week: 5, out: 'geo', phase: 'Aprofundamento',
    blocks: [
      { mirror: 'Seg / Qui', discursiva: 'Biologia', subjects: [{ id: 'bio', topic: 'Célula II', role: 'ancora' }, { id: 'mat', topic: 'Sequências + revisão prática prob./comb.', role: 'apoio' }] },
      { mirror: 'Ter / Sex', discursiva: 'Química', subjects: [{ id: 'quim', topic: 'Equilíbrio químico II', role: 'ancora' }, { id: 'hist', topic: 'Mundo contemporâneo I', role: 'apoio' }] },
      { mirror: 'Qua / Sáb', discursiva: 'Física', subjects: [{ id: 'fis', topic: 'Ondulatória I', role: 'ancora' }, { id: 'ling', topic: 'Leitura III', role: 'apoio' }] },
    ]
  },
  {
    week: 6, out: 'hist', phase: 'Aprofundamento',
    blocks: [
      { mirror: 'Seg / Qui', discursiva: 'Biologia', subjects: [{ id: 'bio', topic: 'Funções vitais I (dig./resp./circ./excr.)', role: 'ancora' }, { id: 'mat', topic: 'Geom. plana / trig. I', role: 'apoio' }] },
      { mirror: 'Ter / Sex', discursiva: 'Química', subjects: [{ id: 'quim', topic: 'Química orgânica I', role: 'ancora' }, { id: 'geo', topic: 'Espaço brasileiro II', role: 'apoio' }] },
      { mirror: 'Qua / Sáb', discursiva: 'Física', subjects: [{ id: 'fis', topic: 'Óptica', role: 'ancora' }, { id: 'ling', topic: 'Leitura IV', role: 'apoio' }] },
    ]
  },
  {
    week: 7, out: 'ling', phase: 'Consolidação',
    blocks: [
      { mirror: 'Seg / Qui', discursiva: 'Biologia', subjects: [{ id: 'bio', topic: 'Funções vitais II (nerv./endócr./reprod.)', role: 'ancora' }, { id: 'mat', topic: 'Geometria espacial', role: 'apoio' }] },
      { mirror: 'Ter / Sex', discursiva: 'Química', subjects: [{ id: 'quim', topic: 'Química orgânica II', role: 'ancora' }, { id: 'hist', topic: 'Mundo contemporâneo II', role: 'apoio' }] },
      { mirror: 'Qua / Sáb', discursiva: 'Física', subjects: [{ id: 'fis', topic: 'Eletricidade I', role: 'ancora' }, { id: 'geo', topic: 'Geopolítica', role: 'apoio' }] },
    ]
  },
  {
    week: 8, out: 'geo', phase: 'Consolidação',
    blocks: [
      { mirror: 'Seg / Qui', discursiva: 'Biologia', subjects: [{ id: 'bio', topic: 'Ecologia', role: 'ancora' }, { id: 'mat', topic: 'Geometria analítica', role: 'apoio' }] },
      { mirror: 'Ter / Sex', discursiva: 'Química', subjects: [{ id: 'quim', topic: 'Termoquímica / cinética', role: 'ancora' }, { id: 'hist', topic: 'Revisão 80/20 História', role: 'apoio' }] },
      { mirror: 'Qua / Sáb', discursiva: 'Física', subjects: [{ id: 'fis', topic: 'Eletricidade II', role: 'ancora' }, { id: 'ling', topic: 'Revisão por questões', role: 'apoio' }] },
    ]
  },
  {
    week: 9, out: 'hist', phase: 'Revisão',
    blocks: [
      { mirror: 'Seg / Qui', discursiva: 'Biologia', subjects: [{ id: 'bio', topic: 'Evolução', role: 'ancora' }, { id: 'mat', topic: 'Revisão 80/20 Mat.', role: 'apoio' }] },
      { mirror: 'Ter / Sex', discursiva: 'Química', subjects: [{ id: 'quim', topic: 'Eletroquímica', role: 'ancora' }, { id: 'geo', topic: 'Revisão 80/20 Geo.', role: 'apoio' }] },
      { mirror: 'Qua / Sáb', discursiva: 'Física', subjects: [{ id: 'fis', topic: 'Magnetismo + revisão', role: 'ancora' }, { id: 'ling', topic: 'Revisão por questões', role: 'apoio' }] },
    ]
  },
  {
    week: 10, out: 'ling', phase: 'Revisão Forte',
    blocks: [
      { mirror: 'Seg / Qui', discursiva: 'Biologia', subjects: [{ id: 'bio', topic: 'Revisão forte', role: 'ancora' }, { id: 'mat', topic: 'Revisão forte', role: 'apoio' }] },
      { mirror: 'Ter / Sex', discursiva: 'Química', subjects: [{ id: 'quim', topic: 'Revisão forte', role: 'ancora' }, { id: 'hist', topic: 'Revisão por questões', role: 'apoio' }] },
      { mirror: 'Qua / Sáb', discursiva: 'Física', subjects: [{ id: 'fis', topic: 'Revisão forte', role: 'ancora' }, { id: 'geo', topic: 'Revisão por questões', role: 'apoio' }] },
    ]
  },
  {
    week: 11, out: 'geo', phase: 'Questões Intensivas',
    blocks: [
      { mirror: 'Seg / Qui', discursiva: 'Biologia', subjects: [{ id: 'bio', topic: 'Questões + disc. avançada', role: 'ancora' }, { id: 'mat', topic: 'Questões focadas', role: 'apoio' }] },
      { mirror: 'Ter / Sex', discursiva: 'Química', subjects: [{ id: 'quim', topic: 'Questões + disc. avançada', role: 'ancora' }, { id: 'hist', topic: 'Questões focadas', role: 'apoio' }] },
      { mirror: 'Qua / Sáb', discursiva: 'Física', subjects: [{ id: 'fis', topic: 'Questões + disc. avançada', role: 'ancora' }, { id: 'ling', topic: 'Leitura e questões', role: 'apoio' }] },
    ]
  },
  {
    week: 12, out: 'hist', phase: 'Revisão Final',
    blocks: [
      { mirror: 'Seg / Qui', discursiva: 'Biologia', subjects: [{ id: 'bio', topic: 'Revisão final', role: 'ancora' }, { id: 'mat', topic: 'Revisão final', role: 'apoio' }] },
      { mirror: 'Ter / Sex', discursiva: 'Química', subjects: [{ id: 'quim', topic: 'Revisão final', role: 'ancora' }, { id: 'geo', topic: 'Revisão final', role: 'apoio' }] },
      { mirror: 'Qua / Sáb', discursiva: 'Física', subjects: [{ id: 'fis', topic: 'Revisão final', role: 'ancora' }, { id: 'ling', topic: 'Revisão final', role: 'apoio' }] },
    ]
  },
];

// Map of days with their structure
const DAYS_OF_WEEK = [
  { name: 'Segunda', key: 'seg', mirror: 'Qui', blockIndex: 0, discursiva: 'Biologia', hasAcumulo: true },
  { name: 'Terça', key: 'ter', mirror: 'Sex', blockIndex: 1, discursiva: 'Química', hasAcumulo: false },
  { name: 'Quarta', key: 'qua', mirror: 'Sáb', blockIndex: 2, discursiva: 'Física', hasAcumulo: false },
  { name: 'Quinta', key: 'qui', mirror: 'Seg', blockIndex: 0, discursiva: 'Biologia', hasAcumulo: false },
  { name: 'Sexta', key: 'sex', mirror: 'Ter', blockIndex: 1, discursiva: 'Química', hasAcumulo: false },
  { name: 'Sábado', key: 'sab', mirror: 'Qua', blockIndex: 2, discursiva: 'Física', hasAcumulo: false },
  { name: 'Domingo', key: 'dom', mirror: null, blockIndex: -1, discursiva: null, hasAcumulo: false },
];

// ==========================================
// STATE MANAGEMENT
// ==========================================
const STORAGE_KEY = 'mentoria_dashboard_v1';

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) { /* ignore */ }
  return {};
}

function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) { /* ignore */ }
}

let appState = loadState();

if (!appState.checks) appState.checks = {};
if (!appState.weekObs) appState.weekObs = {};
if (!appState.rotation) appState.rotation = {};
if (!appState.exec) appState.exec = {};
if (!appState.mentoriaNota) appState.mentoriaNota = {};
if (!appState.mentoriaNota['w9']) {
  appState.mentoriaNota['w9'] = 'Saúde entra apenas por questões, revisão curta ou aprendizado reverso.';
  saveState(appState);
}

function toggleCheck(weekNum, dayKey, itemKey) {
  const key = `w${weekNum}_${dayKey}_${itemKey}`;
  appState.checks[key] = !appState.checks[key];
  saveState(appState);
  return appState.checks[key];
}

function isChecked(weekNum, dayKey, itemKey) {
  return !!appState.checks[`w${weekNum}_${dayKey}_${itemKey}`];
}

function toggleExec(weekNum, dayKey, type) {
  const key = `exec_w${weekNum}_${dayKey}_${type}`;
  appState.exec[key] = !appState.exec[key];
  saveState(appState);
  return appState.exec[key];
}

function isExecDone(weekNum, dayKey, type) {
  return !!appState.exec[`exec_w${weekNum}_${dayKey}_${type}`];
}

function getWeekObs(weekNum) {
  return appState.weekObs[`w${weekNum}`] || '';
}

function setWeekObs(weekNum, val) {
  appState.weekObs[`w${weekNum}`] = val;
  saveState(appState);
}

function getRotation(weekNum) {
  return appState.rotation[`w${weekNum}`] || null;
}

function setRotation(weekNum, subjectId) {
  appState.rotation[`w${weekNum}`] = subjectId;
  saveState(appState);
}

function getMentoriaNota(weekNum) {
  return (appState.mentoriaNota && appState.mentoriaNota[`w${weekNum}`]) || '';
}

function setMentoriaNota(weekNum, val) {
  if (!appState.mentoriaNota) appState.mentoriaNota = {};
  appState.mentoriaNota[`w${weekNum}`] = val;
  saveState(appState);
}

function getAlunaNota(weekNum) {
  return (appState.alunaNota && appState.alunaNota[`w${weekNum}`]) || '';
}

function setAlunaNota(weekNum, val) {
  if (!appState.alunaNota) appState.alunaNota = {};
  appState.alunaNota[`w${weekNum}`] = val;
  saveState(appState);
}

function getSubjectById(id) {
  return ALL_SUBJECTS.find(s => s.id === id);
}

function getWeekOutSubject(weekData) {
  const rotation = getRotation(weekData.week);
  return rotation || weekData.out;
}

// ==========================================
// PROGRESS CALCULATIONS
// ==========================================
function calcWeekProgress(weekNum) {
  const days = ['seg', 'ter', 'qua', 'qui', 'sex', 'sab'];
  const types = ['construcao1', 'construcao2', 'questoes', 'portugues', 'discursiva'];
  let total = 0, done = 0;
  days.forEach(d => {
    types.forEach(t => {
      total++;
      if (isChecked(weekNum, d, t)) done++;
    });
    if (d === 'seg') {
      total++;
      if (isChecked(weekNum, d, 'acumulo')) done++;
    }
  });
  return total > 0 ? Math.round((done / total) * 100) : 0;
}

function calcOverallProgress() {
  let sum = 0;
  WEEKS_DATA.forEach(w => { sum += calcWeekProgress(w.week); });
  return Math.round(sum / 12);
}

function calcSubjectProgress(subjectId) {
  let totalWeeks = 0, completedWeeks = 0;
  WEEKS_DATA.forEach(w => {
    const outSub = getWeekOutSubject(w);
    if (outSub === subjectId) return;
    let found = false;
    w.blocks.forEach(b => { b.subjects.forEach(s => { if (s.id === subjectId) found = true; }); });
    if (found) {
      totalWeeks++;
      if (calcWeekProgress(w.week) >= 80) completedWeeks++;
    }
  });
  return totalWeeks > 0 ? Math.round((completedWeeks / totalWeeks) * 100) : 0;
}

function getSubjectStatus(subjectId) {
  let hasAnyCheck = false, allComplete = true, totalWeeks = 0;
  WEEKS_DATA.forEach(w => {
    const outSub = getWeekOutSubject(w);
    if (outSub === subjectId) return;
    let found = false;
    w.blocks.forEach(b => { b.subjects.forEach(s => { if (s.id === subjectId) found = true; }); });
    if (found) {
      totalWeeks++;
      const wp = calcWeekProgress(w.week);
      if (wp > 0) hasAnyCheck = true;
      if (wp < 100) allComplete = false;
    }
  });
  if (totalWeeks === 0) return 'nao-iniciado';
  if (allComplete) return 'concluido';
  if (hasAnyCheck) return 'em-andamento';
  return 'nao-iniciado';
}

function getSubjectActiveWeeks(subjectId) {
  const active = [], off = [];
  WEEKS_DATA.forEach(w => {
    const outSub = getWeekOutSubject(w);
    if (outSub === subjectId) { off.push(w.week); return; }
    let found = false;
    w.blocks.forEach(b => { b.subjects.forEach(s => { if (s.id === subjectId) found = true; }); });
    if (found) active.push(w.week);
  });
  return { active, off };
}

function getWeekCheckedCounts(weekNum) {
  const days = ['seg', 'ter', 'qua', 'qui', 'sex', 'sab'];
  let questoes = 0, discursivas = 0, construcoes = 0, portugues = 0;
  days.forEach(d => {
    if (isChecked(weekNum, d, 'questoes')) questoes++;
    if (isChecked(weekNum, d, 'discursiva')) discursivas++;
    if (isChecked(weekNum, d, 'construcao1')) construcoes++;
    if (isChecked(weekNum, d, 'construcao2')) construcoes++;
    if (isChecked(weekNum, d, 'portugues')) portugues++;
  });
  return { questoes, discursivas, construcoes, portugues };
}

function getCurrentWeek() {
  // Simple: calculate based on current date vs a configurable start
  // For now, default to week 1. Override via appState.startDate if set.
  return 1;
}

// ==========================================
// RENDERING
// ==========================================
let currentSection = 'overview';

function navigateTo(section) {
  currentSection = section;
  document.querySelectorAll('.nav-item').forEach(el => {
    el.classList.toggle('active', el.dataset.section === section);
  });
  document.querySelectorAll('.section-view').forEach(el => {
    el.classList.toggle('active', el.id === `section-${section}`);
  });
  const titles = {
    'overview': 'Visão Geral',
    'weekly': 'Visão Semanal',
    'subjects': 'Progresso por Matéria',
    'weekprogress': 'Progresso por Semana',
    'rotation': 'Campo de Rotação',
    'execution': 'Status de Execução',
  };
  document.getElementById('header-title').textContent = titles[section] || 'Dashboard';

  // Render dynamic content
  if (section === 'overview') renderOverview();
  if (section === 'weekly') renderWeeklyView();
  if (section === 'subjects') renderSubjectsView();
  if (section === 'weekprogress') renderWeekProgressView();
  if (section === 'rotation') renderRotationView();
  if (section === 'execution') renderExecutionView();
}

// ---------- Overview ----------
function renderOverview() {
  const summaryEl = document.getElementById('exec-summary');
  if (!summaryEl) return;

  const currentW = getCurrentWeek();
  const overallProg = calcOverallProgress();
  const wData = WEEKS_DATA[currentW - 1];
  const outSub = getSubjectById(getWeekOutSubject(wData));

  summaryEl.innerHTML = `
    <div class="exec-summary-item">
      <div class="es-value es-accent">Sem. ${currentW}</div>
      <div class="es-label">Semana atual</div>
    </div>
    <div class="exec-summary-item">
      <div class="es-value">12</div>
      <div class="es-label">Total semanas</div>
    </div>
    <div class="exec-summary-item">
      <div class="es-value">${overallProg}%</div>
      <div class="es-label">Progresso geral</div>
    </div>
    <div class="exec-summary-item">
      <div class="es-value" style="font-size:0.95rem;">${outSub ? outSub.name : '—'}</div>
      <div class="es-label">Fora esta semana</div>
    </div>
    <div class="exec-summary-item">
      <div class="es-value" style="font-size:0.95rem;">${wData.phase}</div>
      <div class="es-label">Foco da semana</div>
    </div>
    <div class="exec-summary-item">
      <div class="es-value" style="font-size:0.95rem;">80/20</div>
      <div class="es-label">Estratégia</div>
    </div>`;
}

// ---------- Weekly View ----------
function renderWeeklyView() {
  const container = document.getElementById('weeks-container');
  container.innerHTML = '';

  WEEKS_DATA.forEach(w => {
    const outSubId = getWeekOutSubject(w);
    const outSub = getSubjectById(outSubId);
    const progress = calcWeekProgress(w.week);

    const card = document.createElement('div');
    card.className = 'week-card';
    card.id = `week-card-${w.week}`;

    let blocksHtml = '';
    w.blocks.forEach(b => {
      let subjectsHtml = '';
      b.subjects.forEach(s => {
        const sub = getSubjectById(s.id);
        const roleTag = s.role === 'ancora'
          ? '<span class="role-tag role-ancora">ÂNCORA</span>'
          : '<span class="role-tag role-apoio">APOIO</span>';
        const pillRole = s.role === 'ancora' ? 'pill-ancora' : 'pill-apoio';
        subjectsHtml += `
          <div class="subject-pill ${sub.pillClass} ${pillRole}">
            <span class="subject-dot"></span>
            <span class="subject-name">${sub.name}</span>
            ${roleTag}
            <span class="subject-topic">${s.topic}</span>
          </div>`;
      });

      const discColor = {
        'Biologia': 'background:rgba(16,185,129,0.10);color:var(--bio-color);border:1px solid rgba(16,185,129,0.2)',
        'Química': 'background:rgba(245,158,11,0.10);color:var(--quim-color);border:1px solid rgba(245,158,11,0.2)',
        'Física': 'background:rgba(59,130,246,0.10);color:var(--fis-color);border:1px solid rgba(59,130,246,0.2)',
      }[b.discursiva] || '';

      blocksHtml += `
        <div class="week-block">
          <div class="block-header">
            <span class="block-mirror">🔄 ${b.mirror}</span>
            <span class="block-disc-badge" style="${discColor}">✍️ ${b.discursiva}</span>
          </div>
          <div class="block-subjects">${subjectsHtml}</div>
        </div>`;
    });

    const phaseBadge8020 = '<span class="week-8020-badge">🎯 80/20</span>';

    const mentoriaNota = getMentoriaNota(w.week);
    const alunaNota = getAlunaNota(w.week);

    card.innerHTML = `
      <div class="week-card-top">
        <div class="week-number">
          <div class="week-num-badge">${w.week}</div>
          <div>
            <div class="week-label">Semana ${w.week} ${phaseBadge8020}</div>
            <div class="week-phase">${w.phase}</div>
          </div>
        </div>
        <div class="week-out-badge">✕ Fora: ${outSub ? outSub.name : '—'}</div>
      </div>
      <div class="week-card-body">
        ${blocksHtml}
        <div class="week-discursiva">
          ✍️ <strong>Discursiva diária:</strong>&nbsp; Seg/Qui → Bio &nbsp;·&nbsp; Ter/Sex → Quím &nbsp;·&nbsp; Qua/Sáb → Fís
        </div>
      </div>
      <div class="week-card-footer">
        <div class="week-progress-mini">
          <div class="week-progress-bar-mini">
            <div class="week-progress-bar-fill-mini" style="width:${progress}%"></div>
          </div>
          ${progress}%
        </div>
        <button class="week-expand-btn" onclick="toggleDailyView(${w.week})">
          Ver dias ▾
        </button>
      </div>
      <div class="daily-view" id="daily-view-${w.week}">
        ${renderDailyCards(w)}
      </div>
      <div class="week-notes">
        <div class="week-note-field">
          <div class="week-note-label wnl-mentoria">📋 Observação da Mentoria</div>
          <textarea class="week-note-input" placeholder="Ex: focar em questões de genética..."
            onchange="setMentoriaNota(${w.week}, this.value)">${mentoriaNota}</textarea>
        </div>
        <div class="week-note-field">
          <div class="week-note-label wnl-aluna">⚡ Ponto de Atenção da Aluna</div>
          <textarea class="week-note-input" placeholder="Ex: dificuldade em termologia..."
            onchange="setAlunaNota(${w.week}, this.value)">${alunaNota}</textarea>
        </div>
      </div>`;

    container.appendChild(card);
  });
}

function toggleDailyView(weekNum) {
  const el = document.getElementById(`daily-view-${weekNum}`);
  const btn = el.previousElementSibling.querySelector('.week-expand-btn');
  const isExpanded = el.classList.contains('expanded');
  el.classList.toggle('expanded');
  btn.innerHTML = isExpanded ? 'Ver dias ▾' : 'Fechar ▴';
  if (!isExpanded) {
    el.innerHTML = renderDailyCards(WEEKS_DATA[weekNum - 1]);
  }
}

function renderDailyCards(weekData) {
  let html = '<div class="daily-cards">';

  DAYS_OF_WEEK.forEach(day => {
    if (day.key === 'dom') {
      html += `
        <div class="day-card day-sunday">
          <span>😴</span>
          <div class="day-name" style="margin-top:8px;">Domingo</div>
          <div style="font-size:0.75rem;color:var(--text-muted);margin-top:4px;">Folga</div>
        </div>`;
      return;
    }

    const block = weekData.blocks[day.blockIndex];
    const mirrorTag = day.mirror ? `<span class="day-mirror-tag">↔ ${day.mirror}</span>` : '';
    const isMonday = day.key === 'seg';
    const isSaturday = day.key === 'sab';

    // — Build sections —
    let sections = '';

    // 1. Técnica do Acúmulo (Monday only)
    if (isMonday) {
      const acuChecked = isChecked(weekData.week, day.key, 'acumulo');
      sections += `
        <div class="day-section">
          <div class="day-section-label dsl-acumulo">📦 Técnica do Acúmulo</div>
          <ul class="checklist">
            <li class="${acuChecked ? 'checked' : ''}" onclick="handleCheckClick(${weekData.week},'${day.key}','acumulo',this)">
              <span class="check-box">${acuChecked ? '✓' : ''}</span>
              <span class="check-label">Revisão acumulativa de conteúdos anteriores</span>
              <span class="check-type type-acumulo">A</span>
            </li>
          </ul>
        </div>`;
    }

    // 2. Construção
    if (block) {
      let construcaoItems = '';
      block.subjects.forEach((s, i) => {
        const sub = getSubjectById(s.id);
        const itemKey = `construcao${i + 1}`;
        const checked = isChecked(weekData.week, day.key, itemKey);
        const roleLabel = s.role === 'ancora' ? '⚓' : '📘';
        construcaoItems += `
          <li class="${checked ? 'checked' : ''}" onclick="handleCheckClick(${weekData.week},'${day.key}','${itemKey}',this)">
            <span class="check-box">${checked ? '✓' : ''}</span>
            <span class="check-label">${roleLabel} ${sub.name} — ${s.topic}</span>
            <span class="check-type type-construcao">C</span>
          </li>`;
      });
      sections += `
        <div class="day-section">
          <div class="day-section-label dsl-construcao">🔨 Construção</div>
          <ul class="checklist">${construcaoItems}</ul>
        </div>`;
    }

    // 3. Questões
    const questChecked = isChecked(weekData.week, day.key, 'questoes');
    const questLabel = isSaturday ? 'Questões das matérias de hoje' : 'Questões das matérias do dia anterior';
    sections += `
      <div class="day-section">
        <div class="day-section-label dsl-questoes">❓ Questões</div>
        <ul class="checklist">
          <li class="${questChecked ? 'checked' : ''}" onclick="handleCheckClick(${weekData.week},'${day.key}','questoes',this)">
            <span class="check-box">${questChecked ? '✓' : ''}</span>
            <span class="check-label">${questLabel}</span>
            <span class="check-type type-questoes">Q</span>
          </li>
        </ul>
      </div>`;

    // 4. Português
    const portChecked = isChecked(weekData.week, day.key, 'portugues');
    sections += `
      <div class="day-section">
        <div class="day-section-label dsl-portugues">🇧🇷 Português</div>
        <ul class="checklist">
          <li class="${portChecked ? 'checked' : ''}" onclick="handleCheckClick(${weekData.week},'${day.key}','portugues',this)">
            <span class="check-box">${portChecked ? '✓' : ''}</span>
            <span class="check-label">Português por questões (inclui Literatura)</span>
            <span class="check-type type-portugues">P</span>
          </li>
        </ul>
      </div>`;

    // 5. Discursiva
    const discChecked = isChecked(weekData.week, day.key, 'discursiva');
    sections += `
      <div class="day-section">
        <div class="day-section-label dsl-discursiva">✍️ Discursiva</div>
        <ul class="checklist">
          <li class="${discChecked ? 'checked' : ''}" onclick="handleCheckClick(${weekData.week},'${day.key}','discursiva',this)">
            <span class="check-box">${discChecked ? '✓' : ''}</span>
            <span class="check-label">Discursiva de ${day.discursiva} (matéria âncora)</span>
            <span class="check-type type-discursiva">D</span>
          </li>
        </ul>
      </div>`;

    html += `
      <div class="day-card">
        <div class="day-card-header">
          <span class="day-name">${day.name}</span>
          ${mirrorTag}
        </div>
        ${sections}
      </div>`;
  });

  html += '</div>';
  return html;
}

function handleCheckClick(weekNum, dayKey, itemKey, el) {
  const checked = toggleCheck(weekNum, dayKey, itemKey);
  el.classList.toggle('checked', checked);
  el.querySelector('.check-box').textContent = checked ? '✓' : '';

  const progress = calcWeekProgress(weekNum);
  const card = document.getElementById(`week-card-${weekNum}`);
  if (card) {
    const bar = card.querySelector('.week-progress-bar-fill-mini');
    const label = card.querySelector('.week-progress-mini');
    if (bar) bar.style.width = progress + '%';
    if (label) label.lastChild.textContent = ' ' + progress + '%';
  }
}

// ---------- Subjects View ----------
function renderSubjectsView() {
  const container = document.getElementById('subjects-container');
  container.innerHTML = '';

  const allDisplay = [...ALL_SUBJECTS, {
    id: 'port', name: 'Português', color: 'var(--port-color)', pillClass: '', priority: 'paralelo', priorityLabel: 'Paralelo', type: 'paralelo', typeLabel: 'Paralelo Fixo', sensitive: false
  }];

  allDisplay.forEach(sub => {
    const card = document.createElement('div');
    card.className = 'subject-card';
    card.setAttribute('data-color', sub.id);

    // Weeks
    let weeksHtml = '';
    if (sub.id === 'port') {
      for (let i = 1; i <= 12; i++) weeksHtml += `<span class="subject-week-dot active-week">${i}</span>`;
    } else {
      const { active, off } = getSubjectActiveWeeks(sub.id);
      for (let i = 1; i <= 12; i++) {
        if (off.includes(i)) weeksHtml += `<span class="subject-week-dot off-week">${i}</span>`;
        else if (active.includes(i)) weeksHtml += `<span class="subject-week-dot active-week">${i}</span>`;
        else weeksHtml += `<span class="subject-week-dot">${i}</span>`;
      }
    }

    const progress = sub.id === 'port' ? 0 : calcSubjectProgress(sub.id);
    const status = sub.id === 'port' ? 'paralelo' : getSubjectStatus(sub.id);

    const statusLabels = {
      'nao-iniciado': '⬜ Não iniciado',
      'em-andamento': '🔵 Em andamento',
      'concluido': '✅ Concluído',
      'paralelo': '🟣 Diário por questões',
    };
    const statusClasses = {
      'nao-iniciado': 'status-nao-iniciado',
      'em-andamento': 'status-em-andamento',
      'concluido': 'status-concluido',
      'paralelo': 'status-em-andamento',
    };

    const stypeClasses = { ancora: 'stype-ancora', apoio: 'stype-apoio', rotativa: 'stype-rotativa', paralelo: 'stype-paralelo' };

    card.innerHTML = `
      <div class="subject-card-header">
        <span class="subject-color-dot" style="background:${sub.color}"></span>
        <h4>${sub.name}</h4>
        <span class="priority-tag priority-${sub.priority}">${sub.priorityLabel}</span>
      </div>
      <div class="subject-type-row">
        <span class="subject-type-tag ${stypeClasses[sub.type] || 'stype-apoio'}">${sub.typeLabel}</span>
        ${sub.sensitive ? '<span class="subject-type-tag stype-ancora">⚠ Não retirar</span>' : ''}
      </div>
      <div class="subject-weeks">${weeksHtml}</div>
      <div class="subject-progress">
        <div class="progress-header">
          <span class="progress-label">Progresso geral</span>
          <span class="progress-value">${progress}%</span>
        </div>
        <div class="progress-bar">
          <div class="progress-bar-fill" style="width:${progress}%;background:${sub.color}"></div>
        </div>
      </div>
      <span class="subject-status-badge ${statusClasses[status] || 'status-nao-iniciado'}">
        ${statusLabels[status] || status}
      </span>`;

    container.appendChild(card);
  });
}

// ---------- Week Progress View ----------
function renderWeekProgressView() {
  const container = document.getElementById('weekprogress-container');
  container.innerHTML = '';

  WEEKS_DATA.forEach(w => {
    const card = document.createElement('div');
    card.className = 'week-progress-card';

    const progress = calcWeekProgress(w.week);
    const counts = getWeekCheckedCounts(w.week);
    const obs = getWeekObs(w.week);

    const statusBadge = progress >= 100
      ? '<span class="subject-status-badge status-concluido">✅ Concluída</span>'
      : progress > 0
        ? '<span class="subject-status-badge status-em-andamento">🔵 Em andamento</span>'
        : '<span class="subject-status-badge status-nao-iniciado">⬜ Não iniciada</span>';

    let subjectNames = [];
    w.blocks.forEach(b => {
      b.subjects.forEach(s => {
        const sub = getSubjectById(s.id);
        if (sub && !subjectNames.includes(sub.name)) subjectNames.push(sub.name);
      });
    });

    card.innerHTML = `
      <div class="week-progress-header">
        <h4>Semana ${w.week} — ${w.phase}</h4>
        ${statusBadge}
      </div>
      <div class="subject-progress mb-8">
        <div class="progress-header">
          <span class="progress-label">Progresso</span>
          <span class="progress-value">${progress}%</span>
        </div>
        <div class="progress-bar">
          <div class="progress-bar-fill" style="width:${progress}%"></div>
        </div>
      </div>
      <div style="font-size:0.75rem;color:var(--text-secondary);margin-bottom:12px;">
        <strong>Matérias:</strong> ${subjectNames.join(', ')} + Português
      </div>
      <div class="week-stats">
        <div class="week-stat">
          <div class="stat-num">${counts.construcoes}/12</div>
          <div class="stat-label">Construções</div>
        </div>
        <div class="week-stat">
          <div class="stat-num">${counts.questoes}/6</div>
          <div class="stat-label">Questões</div>
        </div>
        <div class="week-stat">
          <div class="stat-num">${counts.discursivas}/6</div>
          <div class="stat-label">Discursivas</div>
        </div>
        <div class="week-stat">
          <div class="stat-num">${counts.portugues}/6</div>
          <div class="stat-label">Português</div>
        </div>
      </div>
      <textarea class="week-obs-input" placeholder="Observações da semana ${w.week}..."
        onchange="setWeekObs(${w.week}, this.value)">${obs}</textarea>`;

    container.appendChild(card);
  });
}

// ---------- Rotation View ----------
function renderRotationView() {
  const container = document.getElementById('rotation-container');

  let rowsHtml = '';
  WEEKS_DATA.forEach(w => {
    const currentOut = getWeekOutSubject(w);
    const defaultOut = w.out;
    const currentOutSub = getSubjectById(currentOut);
    const isSensitive = currentOutSub && currentOutSub.sensitive;

    let optionsHtml = '';
    ALL_SUBJECTS.forEach(s => {
      const selected = currentOut === s.id ? 'selected' : '';
      const isDefault = s.id === defaultOut ? ' (padrão)' : '';
      const warn = s.sensitive ? ' ⚠️' : '';
      optionsHtml += `<option value="${s.id}" ${selected}>${s.name}${isDefault}${warn}</option>`;
    });

    const rowStyle = isSensitive ? 'background:rgba(239,68,68,0.03);' : '';

    rowsHtml += `
      <tr style="${rowStyle}">
        <td><strong>Semana ${w.week}</strong></td>
        <td>${w.phase}</td>
        <td>
          <select class="rotation-select" onchange="handleRotationChange(${w.week}, this.value)">
            ${optionsHtml}
          </select>
        </td>
        <td style="color:var(--text-muted)">${getSubjectById(defaultOut).name}</td>
        <td>${isSensitive ? '<span style="color:#f87171;font-size:0.75rem;font-weight:600;">⚠ Sensível</span>' : '<span style="color:var(--success);font-size:0.75rem;font-weight:600;">✓ OK</span>'}</td>
      </tr>`;
  });

  container.innerHTML = `
    <div class="card">
      <div class="card-header">
        <div>
          <div class="card-title">Rotação de Matérias</div>
          <div class="card-subtitle">Escolha qual matéria fica de fora em cada semana</div>
        </div>
      </div>
      <div class="rotation-table-wrap">
        <table class="rotation-table">
          <thead>
            <tr>
              <th>Semana</th>
              <th>Fase</th>
              <th>Matéria Fora</th>
              <th>Padrão</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>${rowsHtml}</tbody>
        </table>
      </div>

      <div class="rotation-sensitivity">
        <h5>⚠️ Sensibilidade de Rotação</h5>
        <div class="sensitivity-grid">
          <div class="sensitivity-item critical">
            <span class="sensitivity-dot" style="background:var(--bio-color)"></span>
            Biologia — NÃO retirar
          </div>
          <div class="sensitivity-item critical">
            <span class="sensitivity-dot" style="background:var(--quim-color)"></span>
            Química — NÃO retirar
          </div>
          <div class="sensitivity-item critical">
            <span class="sensitivity-dot" style="background:var(--fis-color)"></span>
            Física — Evitar retirar
          </div>
          <div class="sensitivity-item critical">
            <span class="sensitivity-dot" style="background:var(--mat-color)"></span>
            Matemática — Evitar retirar
          </div>
          <div class="sensitivity-item safe">
            <span class="sensitivity-dot" style="background:var(--hist-color)"></span>
            História — Pode rotacionar
          </div>
          <div class="sensitivity-item safe">
            <span class="sensitivity-dot" style="background:var(--geo-color)"></span>
            Geografia — Pode rotacionar
          </div>
          <div class="sensitivity-item safe">
            <span class="sensitivity-dot" style="background:var(--ling-color)"></span>
            L. Estrangeira — Pode rotacionar
          </div>
        </div>
      </div>

      <div class="rotation-info">
        <span>ℹ️</span>
        <div>
          A rotação permite ajustar qual matéria fica de fora a cada semana. O cronograma original
          já rotaciona apenas as matérias de <strong>prioridade média</strong> (História, Geografia, L. Estrangeira).
          Retirar matérias de prioridade máxima ou alta pode comprometer o desempenho. A mudança é salva automaticamente.
        </div>
      </div>
    </div>`;
}

function handleRotationChange(weekNum, subjectId) {
  setRotation(weekNum, subjectId);
  // Re-render all views that depend on the rotation
  renderWeeklyView();
  renderRotationView();
  // Refresh subjects and execution if they are currently active
  if (currentSection === 'subjects') renderSubjectsView();
  if (currentSection === 'weekprogress') renderWeekProgressView();
  if (currentSection === 'execution') renderExecutionView();
  if (currentSection === 'overview') renderOverview();
}

// ---------- Execution View ----------
function renderExecutionView() {
  const container = document.getElementById('execution-container');
  container.innerHTML = '';

  const legendHtml = `
    <div class="exec-legend">
      <div class="exec-legend-item">
        <span class="exec-legend-icon" style="background:var(--accent-primary-soft);color:var(--accent-secondary);border-color:rgba(99,102,241,0.2);">C</span> Construção
      </div>
      <div class="exec-legend-item">
        <span class="exec-legend-icon" style="background:var(--success-soft);color:var(--success);border-color:rgba(16,185,129,0.2);">Q</span> Questões
      </div>
      <div class="exec-legend-item">
        <span class="exec-legend-icon" style="background:rgba(249,115,22,0.10);color:#fb923c;border-color:rgba(249,115,22,0.2);">P</span> Português
      </div>
      <div class="exec-legend-item">
        <span class="exec-legend-icon" style="background:var(--priority-parallel-soft);color:var(--priority-parallel);border-color:rgba(139,92,246,0.2);">D</span> Discursiva
      </div>
      <div class="exec-legend-item">
        <span class="exec-legend-icon" style="background:var(--warning-soft);color:var(--warning);border-color:rgba(245,158,11,0.2);">A</span> Acúmulo <span style="color:var(--text-muted);font-size:0.7rem;">(só Seg)</span>
      </div>
      <div class="exec-legend-item">
        <span class="exec-legend-icon" style="background:var(--success);border-color:var(--success);color:#fff;">✓</span> Concluído
      </div>
    </div>`;

  container.innerHTML = legendHtml;

  const gridDiv = document.createElement('div');
  gridDiv.className = 'exec-grid';

  WEEKS_DATA.forEach(w => {
    const card = document.createElement('div');
    card.className = 'execution-week-card';

    const progress = calcWeekProgress(w.week);

    let daysHtml = '';
    DAYS_OF_WEEK.forEach(day => {
      if (day.key === 'dom') {
        daysHtml += `
          <div class="exec-day-row" style="opacity:0.25">
            <span class="exec-day-name">Dom</span>
            <span style="font-size:0.72rem;color:var(--text-muted);">Folga</span>
          </div>`;
        return;
      }

      const types = ['construcao', 'questoes', 'portugues', 'discursiva'];
      if (day.key === 'seg') types.push('acumulo');

      const typeLabels = { construcao: 'C', questoes: 'Q', portugues: 'P', discursiva: 'D', acumulo: 'A' };
      const typeTitles = { construcao: 'Construção', questoes: 'Questões', portugues: 'Português', discursiva: 'Discursiva', acumulo: 'Acúmulo' };
      const typeStyles = {
        construcao: 'var(--accent-primary-soft)',
        questoes: 'var(--success-soft)',
        portugues: 'rgba(249,115,22,0.10)',
        discursiva: 'var(--priority-parallel-soft)',
        acumulo: 'var(--warning-soft)',
      };
      const typeColorsDone = {
        construcao: 'var(--accent-primary)',
        questoes: 'var(--success)',
        portugues: '#f97316',
        discursiva: 'var(--priority-parallel)',
        acumulo: 'var(--warning)',
      };

      let indicators = '';
      types.forEach(t => {
        const done = isExecDone(w.week, day.key, t);
        const bg = done ? typeColorsDone[t] : '';
        const borderC = done ? typeColorsDone[t] : '';
        const style = done ? `background:${bg};border-color:${borderC};color:#fff;box-shadow:0 0 8px ${bg}33;` : '';
        indicators += `
          <div class="exec-indicator ${done ? 'done' : ''}"
               title="${typeTitles[t]}"
               style="${style}"
               onclick="handleExecToggle(${w.week},'${day.key}','${t}',this)">
            ${done ? '✓' : typeLabels[t]}
          </div>`;
      });

      const dayAbbrevs = { seg: 'Seg', ter: 'Ter', qua: 'Qua', qui: 'Qui', sex: 'Sex', sab: 'Sáb' };

      daysHtml += `
        <div class="exec-day-row">
          <span class="exec-day-name">${dayAbbrevs[day.key]}</span>
          <div class="exec-indicators">${indicators}</div>
        </div>`;
    });

    card.innerHTML = `
      <div class="execution-week-header">
        <h4>Semana ${w.week}</h4>
        <div class="week-progress-mini">
          <div class="week-progress-bar-mini">
            <div class="week-progress-bar-fill-mini" style="width:${progress}%"></div>
          </div>
          ${progress}%
        </div>
      </div>
      <div class="execution-week-body">${daysHtml}</div>`;

    gridDiv.appendChild(card);
  });

  container.appendChild(gridDiv);
}

function handleExecToggle(weekNum, dayKey, type, el) {
  const done = toggleExec(weekNum, dayKey, type);
  // Re-render execution view for consistent styling
  renderExecutionView();
}

// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.nav-item[data-section]').forEach(el => {
    el.addEventListener('click', () => {
      navigateTo(el.dataset.section);
      document.querySelector('.sidebar')?.classList.remove('open');
      document.querySelector('.sidebar-overlay')?.classList.remove('open');
    });
  });

  document.querySelector('.mobile-toggle')?.addEventListener('click', () => {
    document.querySelector('.sidebar')?.classList.toggle('open');
    document.querySelector('.sidebar-overlay')?.classList.toggle('open');
  });

  document.querySelector('.sidebar-overlay')?.addEventListener('click', () => {
    document.querySelector('.sidebar')?.classList.remove('open');
    document.querySelector('.sidebar-overlay')?.classList.remove('open');
  });

  navigateTo('overview');
});
