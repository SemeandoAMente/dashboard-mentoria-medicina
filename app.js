/* ============================================
   DASHBOARD MENTORIA — VESTIBULAR MEDICINA
   Application Logic  (v2 — Refinado)
   ============================================ */

// ==========================================
// DATA: 13 Weeks Schedule (expanded with 80/20 adjustments)
// ==========================================
const ALL_SUBJECTS = [
  { id: 'bio', name: 'Biologia', color: 'var(--bio-color)', pillClass: 'pill-bio', priority: 'maxima', priorityLabel: 'Máxima', type: 'ancora', typeLabel: 'Âncora', sensitive: true },
  { id: 'quim', name: 'Química', color: 'var(--quim-color)', pillClass: 'pill-quim', priority: 'maxima', priorityLabel: 'Máxima', type: 'ancora', typeLabel: 'Âncora', sensitive: true },
  { id: 'fis', name: 'Física', color: 'var(--fis-color)', pillClass: 'pill-fis', priority: 'maxima', priorityLabel: 'Máxima', type: 'ancora', typeLabel: 'Âncora', sensitive: true },
  { id: 'mat', name: 'Matemática', color: 'var(--mat-color)', pillClass: 'pill-mat', priority: 'alta', priorityLabel: 'Alta', type: 'apoio', typeLabel: 'Apoio', sensitive: true },
  { id: 'hist', name: 'História', color: 'var(--hist-color)', pillClass: 'pill-hist', priority: 'media', priorityLabel: 'Média', type: 'rotativa', typeLabel: 'Rotativa', sensitive: false },
  { id: 'geo', name: 'Geografia', color: 'var(--geo-color)', pillClass: 'pill-geo', priority: 'media', priorityLabel: 'Média', type: 'rotativa', typeLabel: 'Rotativa', sensitive: false },
  { id: 'ling', name: 'Língua Estrangeira', color: 'var(--ling-color)', pillClass: 'pill-ling', priority: 'media', priorityLabel: 'Média', type: 'rotativa', typeLabel: 'Rotativa', sensitive: false },
];

const WEEKS_DATA = [
  // ── FASE 1: CONSTRUÇÃO DE BASE (Sem. 1–4) ──────────────────────────────
  {
    week: 1, out: 'ling', phase: 'Construção de Base',
    blocks: [
      { mirror: 'Seg / Qui', discursiva: 'Biologia', subjects: [{ id: 'bio', topic: 'Genética molecular I', role: 'ancora' }, { id: 'mat', topic: 'Funções I', role: 'apoio' }] },
      { mirror: 'Ter / Sex', discursiva: 'Química', subjects: [{ id: 'quim', topic: 'Estrutura Atômica I', role: 'ancora' }, { id: 'hist', topic: 'Brasil Colônia I', role: 'apoio' }] },
      { mirror: 'Qua / Sáb', discursiva: 'Física', subjects: [{ id: 'fis', topic: 'Mecânica I', role: 'ancora' }, { id: 'geo', topic: 'Geografia física I', role: 'apoio' }] },
    ]
  },
  {
    week: 2, out: 'geo', phase: 'Construção de Base',
    blocks: [
      { mirror: 'Seg / Qui', discursiva: 'Biologia', subjects: [{ id: 'bio', topic: 'Genética molecular II', role: 'ancora' }, { id: 'mat', topic: 'Funções II', role: 'apoio' }] },
      { mirror: 'Ter / Sex', discursiva: 'Química', subjects: [{ id: 'quim', topic: 'Estrutura Atômica II (Ligações Químicas)', role: 'ancora' }, { id: 'hist', topic: 'Brasil Império', role: 'apoio' }] },
      { mirror: 'Qua / Sáb', discursiva: 'Física', subjects: [{ id: 'fis', topic: 'Mecânica II', role: 'ancora' }, { id: 'ling', topic: 'Leitura I', role: 'apoio' }] },
    ]
  },
  {
    week: 3, out: 'hist', phase: 'Construção de Base',
    blocks: [
      { mirror: 'Seg / Qui', discursiva: 'Biologia', subjects: [{ id: 'bio', topic: 'Mendelismo', role: 'ancora' }, { id: 'mat', topic: 'Álgebra I (equações + sistemas)', role: 'apoio' }] },
      { mirror: 'Ter / Sex', discursiva: 'Química', subjects: [{ id: 'quim', topic: 'Funções Inorgânicas', role: 'ancora' }, { id: 'geo', topic: 'Espaço brasileiro I', role: 'apoio' }] },
      { mirror: 'Qua / Sáb', discursiva: 'Física', subjects: [{ id: 'fis', topic: 'Termologia I', role: 'ancora' }, { id: 'ling', topic: 'Leitura II', role: 'apoio' }] },
    ]
  },
  {
    week: 4, out: 'ling', phase: 'Construção de Base',
    blocks: [
      { mirror: 'Seg / Qui', discursiva: 'Biologia', subjects: [{ id: 'bio', topic: 'Célula I', role: 'ancora' }, { id: 'mat', topic: 'Álgebra II (logaritmo + exponencial)', role: 'apoio' }] },
      { mirror: 'Ter / Sex', discursiva: 'Química', subjects: [{ id: 'quim', topic: 'Estequiometria', role: 'ancora' }, { id: 'hist', topic: 'República Velha e Era Vargas', role: 'apoio' }] },
      { mirror: 'Qua / Sáb', discursiva: 'Física', subjects: [{ id: 'fis', topic: 'Termologia II / Fluidos', role: 'ancora' }, { id: 'geo', topic: 'Geografia física II + Cartografia', role: 'apoio' }] },
    ]
  },
  // ── FASE 2: APROFUNDAMENTO (Sem. 5–8) ──────────────────────────────────
  {
    week: 5, out: 'geo', phase: 'Aprofundamento',
    blocks: [
      { mirror: 'Seg / Qui', discursiva: 'Biologia', subjects: [{ id: 'bio', topic: 'Célula II', role: 'ancora' }, { id: 'mat', topic: 'Estatística + Interpretação de Dados', role: 'apoio' }] },
      { mirror: 'Ter / Sex', discursiva: 'Química', subjects: [{ id: 'quim', topic: 'Soluções + Equilíbrio Químico I', role: 'ancora' }, { id: 'hist', topic: 'Revoluções Modernas', role: 'apoio' }] },
      { mirror: 'Qua / Sáb', discursiva: 'Física', subjects: [{ id: 'fis', topic: 'Ondulatória I', role: 'ancora' }, { id: 'ling', topic: 'Leitura III', role: 'apoio' }] },
    ]
  },
  {
    week: 6, out: 'hist', phase: 'Aprofundamento',
    blocks: [
      { mirror: 'Seg / Qui', discursiva: 'Biologia', subjects: [{ id: 'bio', topic: 'Funções vitais I (dig./resp./circ./excr.)', role: 'ancora' }, { id: 'mat', topic: 'Probabilidade + Combinatória + PA/PG + Juros', role: 'apoio' }] },
      { mirror: 'Ter / Sex', discursiva: 'Química', subjects: [{ id: 'quim', topic: 'Equilíbrio Químico II + Termoquímica', role: 'ancora' }, { id: 'geo', topic: 'Meio Ambiente + Sustentabilidade', role: 'apoio' }] },
      { mirror: 'Qua / Sáb', discursiva: 'Física', subjects: [{ id: 'fis', topic: 'Óptica', role: 'ancora' }, { id: 'ling', topic: 'Gramática Inglesa + Vocabulário', role: 'apoio' }] },
    ]
  },
  {
    week: 7, out: 'ling', phase: 'Aprofundamento',
    blocks: [
      { mirror: 'Seg / Qui', discursiva: 'Biologia', subjects: [{ id: 'bio', topic: 'Funções vitais II (nerv./endócr./reprod.)', role: 'ancora' }, { id: 'mat', topic: 'Geom. plana / trig. I', role: 'apoio' }] },
      { mirror: 'Ter / Sex', discursiva: 'Química', subjects: [{ id: 'quim', topic: 'Química orgânica I', role: 'ancora' }, { id: 'hist', topic: 'Mundo Contemporâneo I (1ª Guerra + contexto)', role: 'apoio' }] },
      { mirror: 'Qua / Sáb', discursiva: 'Física', subjects: [{ id: 'fis', topic: 'Eletricidade I', role: 'ancora' }, { id: 'geo', topic: 'Espaço brasileiro II + Geopolítica', role: 'apoio' }] },
    ]
  },
  {
    week: 8, out: 'geo', phase: 'Aprofundamento',
    blocks: [
      { mirror: 'Seg / Qui', discursiva: 'Biologia', subjects: [{ id: 'bio', topic: 'Vírus / Imunidade / Parasitoses', role: 'ancora' }, { id: 'mat', topic: 'Geometria espacial', role: 'apoio' }] },
      { mirror: 'Ter / Sex', discursiva: 'Química', subjects: [{ id: 'quim', topic: 'Química orgânica II', role: 'ancora' }, { id: 'hist', topic: 'Mundo Contemporâneo II (2ª Guerra + Guerra Fria)', role: 'apoio' }] },
      { mirror: 'Qua / Sáb', discursiva: 'Física', subjects: [{ id: 'fis', topic: 'Eletricidade II + Eletromagnetismo', role: 'ancora' }, { id: 'ling', topic: 'Revisão por questões', role: 'apoio' }] },
    ]
  },
  // ── FASE 3: CONSOLIDAÇÃO (Sem. 9–10) ───────────────────────────────────
  {
    week: 9, out: 'hist', phase: 'Consolidação',
    blocks: [
      { mirror: 'Seg / Qui', discursiva: 'Biologia', subjects: [{ id: 'bio', topic: 'Botânica/Zoologia + Ecologia', role: 'ancora' }, { id: 'mat', topic: 'Geometria analítica', role: 'apoio' }] },
      { mirror: 'Ter / Sex', discursiva: 'Química', subjects: [{ id: 'quim', topic: 'Eletroquímica', role: 'ancora' }, { id: 'geo', topic: 'Revisão 80/20 Geo.', role: 'apoio' }] },
      { mirror: 'Qua / Sáb', discursiva: 'Física', subjects: [{ id: 'fis', topic: 'Física Moderna', role: 'ancora' }, { id: 'ling', topic: 'Leitura e questões', role: 'apoio' }] },
    ]
  },
  {
    week: 10, out: 'ling', phase: 'Consolidação',
    blocks: [
      { mirror: 'Seg / Qui', discursiva: 'Biologia', subjects: [{ id: 'bio', topic: 'Evolução', role: 'ancora' }, { id: 'mat', topic: 'Revisão 80/20 Mat.', role: 'apoio' }] },
      { mirror: 'Ter / Sex', discursiva: 'Química', subjects: [{ id: 'quim', topic: 'Revisão 80/20 Quím.', role: 'ancora' }, { id: 'hist', topic: 'Antiguidade + Revisão 80/20 Hist.', role: 'apoio' }] },
      { mirror: 'Qua / Sáb', discursiva: 'Física', subjects: [{ id: 'fis', topic: 'Revisão integrada Física', role: 'ancora' }, { id: 'geo', topic: 'Revisão por questões', role: 'apoio' }] },
    ]
  },
  // ── FASE 4: REVISÃO (Sem. 11–13) ───────────────────────────────────────
  {
    week: 11, out: 'geo', phase: 'Revisão Forte',
    blocks: [
      { mirror: 'Seg / Qui', discursiva: 'Biologia', subjects: [{ id: 'bio', topic: 'Revisão forte', role: 'ancora' }, { id: 'mat', topic: 'Questões focadas', role: 'apoio' }] },
      { mirror: 'Ter / Sex', discursiva: 'Química', subjects: [{ id: 'quim', topic: 'Revisão forte', role: 'ancora' }, { id: 'hist', topic: 'Revisão por questões', role: 'apoio' }] },
      { mirror: 'Qua / Sáb', discursiva: 'Física', subjects: [{ id: 'fis', topic: 'Revisão forte', role: 'ancora' }, { id: 'ling', topic: 'Revisão por questões', role: 'apoio' }] },
    ]
  },
  {
    week: 12, out: 'hist', phase: 'Questões Intensivas',
    blocks: [
      { mirror: 'Seg / Qui', discursiva: 'Biologia', subjects: [{ id: 'bio', topic: 'Questões + disc. avançada', role: 'ancora' }, { id: 'mat', topic: 'Questões focadas', role: 'apoio' }] },
      { mirror: 'Ter / Sex', discursiva: 'Química', subjects: [{ id: 'quim', topic: 'Questões + disc. avançada', role: 'ancora' }, { id: 'geo', topic: 'Revisão por questões', role: 'apoio' }] },
      { mirror: 'Qua / Sáb', discursiva: 'Física', subjects: [{ id: 'fis', topic: 'Questões + disc. avançada', role: 'ancora' }, { id: 'ling', topic: 'Questões de inglês', role: 'apoio' }] },
    ]
  },
  {
    week: 13, out: 'ling', phase: 'Revisão Final',
    blocks: [
      { mirror: 'Seg / Qui', discursiva: 'Biologia', subjects: [{ id: 'bio', topic: 'Revisão final', role: 'ancora' }, { id: 'mat', topic: 'Revisão final', role: 'apoio' }] },
      { mirror: 'Ter / Sex', discursiva: 'Química', subjects: [{ id: 'quim', topic: 'Revisão final', role: 'ancora' }, { id: 'hist', topic: 'Revisão final', role: 'apoio' }] },
      { mirror: 'Qua / Sáb', discursiva: 'Física', subjects: [{ id: 'fis', topic: 'Revisão final', role: 'ancora' }, { id: 'geo', topic: 'Revisão final', role: 'apoio' }] },
    ]
  },
];

// ==========================================
// TÓPICOS POR MATÉRIA (baseado na HIERARQUIA.md)
// Chave = valor de "topic" em WEEKS_DATA
// ==========================================
const TOPICOS_POR_MATERIA = {
  // === BIOLOGIA ===
  'Genética molecular I': ['DNA', 'RNA', 'gene', 'alelo', 'genótipo x fenótipo', 'replicação', 'transcrição', 'tradução'],
  'Genética molecular II': ['código genético', 'biotecnologia', 'mutação', 'recombinação gênica', 'genética molecular avançada'],
  'Mendelismo': ['conceitos básicos', 'mendelismo', 'neomendelismo', 'cruzamentos', 'probabilidade', 'genes e cromossomos', 'crossing over'],
  'Célula I': ['procarionte e eucarionte', 'célula animal e vegetal', 'organelas', 'funções celulares'],
  'Célula II': ['componentes químicos', 'núcleo', 'mitose', 'meiose'],
  'Funções vitais I (dig./resp./circ./excr.)': ['digestão', 'respiração', 'circulação', 'excreção'],
  'Funções vitais II (nerv./endócr./reprod.)': ['sistema nervoso', 'sistema endócrino', 'reprodução humana', 'gametogênese', 'fecundação', 'embriologia básica'],
  'Vírus / Imunidade / Parasitoses': ['vírus: estrutura e ciclo viral', 'bactérias patogênicas', 'sistema imune inato e adaptativo', 'vacinas e anticorpos', 'protozoários e helmintos', 'microbiologia aplicada'],
  'Botânica/Zoologia + Ecologia': ['botânica (raiz, caule, folha, flor, fruto)', 'fisiologia vegetal e fotossíntese', 'zoologia: vertebrados e invertebrados', 'cadeias alimentares', 'ciclos biogeoquímicos', 'relações ecológicas', 'biomas brasileiros'],
  'Botânica/Zoologia + Ecologia + Evolução': ['botânica (raiz, caule, folha, flor, fruto)', 'fisiologia vegetal e fotossíntese', 'zoologia: vertebrados e invertebrados', 'cadeias alimentares', 'ciclos biogeoquímicos', 'relações ecológicas', 'biomas brasileiros', 'teorias evolutivas', 'seleção natural', 'especiação'],
  'Ecologia': ['cadeias alimentares', 'ciclos biogeoquímicos', 'relações ecológicas', 'biomas', 'impacto ambiental', 'sucessão ecológica'],
  'Evolução': ['teorias evolutivas', 'seleção natural', 'especiação', 'evidências da evolução', 'adaptação'],

  // === QUÍMICA ===
  'Estrutura Atômica I': ['modelos atômicos', 'prótons, nêutrons e elétrons', 'número atômico e de massa', 'tabela periódica', 'configuração eletrônica', 'distribuição eletrônica'],
  'Estrutura Atômica II (Ligações Químicas)': ['ligação iônica', 'ligação covalente', 'ligação metálica', 'polaridade de ligações', 'geometria molecular', 'VSEPR', 'forças intermoleculares'],
  'Funções Inorgânicas': ['ácidos', 'bases', 'sais', 'óxidos', 'nomenclatura', 'propriedades', 'reações de neutralização'],
  'Estequiometria I': ['reação química', 'equação química', 'balanceamento', 'mol', 'massa molar'],
  'Estequiometria II': ['leis ponderais', 'leis volumétricas', 'cálculo estequiométrico', 'reagente limitante'],
  'Estequiometria': ['reação e equação química', 'balanceamento', 'mol e massa molar', 'leis ponderais', 'cálculo estequiométrico', 'reagente limitante'],
  'Soluções': ['soluto', 'solvente', 'concentração', 'diluição', 'mistura de soluções'],
  'Soluções + Equilíbrio Químico I': ['soluto e solvente', 'concentração e diluição', 'constante de equilíbrio Kc', 'Le Chatelier', 'equilíbrio iônico'],
  'Equilíbrio químico I': ['constante de equilíbrio', 'Le Chatelier', 'equilíbrio iônico'],
  'Equilíbrio Químico II + Termoquímica': ['pH', 'pOH', 'solução tampão', 'produto de solubilidade', 'entalpia', 'lei de Hess', 'energia de ativação', 'fatores cinéticos'],
  'Equilíbrio químico II': ['pH', 'pOH', 'solução tampão', 'produto de solubilidade'],
  'Química orgânica I': ['carbono', 'cadeias carbônicas', 'funções orgânicas', 'nomenclatura'],
  'Química orgânica II': ['isomeria', 'reações orgânicas', 'produtos naturais', 'petróleo'],
  'Termoquímica / cinética': ['entalpia', 'lei de Hess', 'energia de ativação', 'fatores cinéticos', 'velocidade de reação'],
  'Eletroquímica': ['pilhas', 'eletrólise', 'potencial de redução', 'equação de Nernst'],
  'Revisão 80/20 Quím.': ['temas de maior incidência', 'questões recorrentes', 'revisão dirigida'],

  // === FÍSICA ===
  'Mecânica I': ['cinemática', 'vetores', 'força', 'leis de Newton'],
  'Mecânica II': ['trabalho', 'energia', 'potência', 'gravitação', 'quantidade de movimento'],
  'Termologia I': ['temperatura', 'escalas termométricas', 'dilatação', 'calorimetria'],
  'Termologia II / Fluidos': ['mudanças de estado', 'calor latente', 'densidade', 'pressão', 'Stevin', 'Pascal', 'Arquimedes'],
  'Ondulatória I': ['ondas', 'frequência', 'comprimento de onda', 'reflexão', 'refração', 'superposição', 'difração'],
  'Óptica': ['espelhos', 'lentes', 'instrumentos ópticos', 'reflexão da luz', 'refração da luz'],
  'Eletricidade I': ['carga elétrica', 'campo elétrico', 'potencial elétrico', 'corrente elétrica', 'resistência'],
  'Eletricidade II': ['circuitos elétricos', 'potência elétrica', 'associação de resistores', 'capacitores'],
  'Eletricidade II + Eletromagnetismo': ['circuitos elétricos', 'potência elétrica', 'associação de resistores', 'capacitores', 'campo magnético', 'força magnética', 'indução eletromagnética', 'lei de Faraday'],
  'Física Moderna': ['radioatividade', 'fissão e fusão nuclear', 'meia-vida', 'efeito fotoelétrico', 'dualidade onda-partícula', 'modelo atômico de Bohr'],
  'Magnetismo + revisão': ['campo magnético', 'força magnética', 'indução eletromagnética', 'revisão integrada'],
  'Eletricidade II + Eletromagnetismo + Física Moderna': ['circuitos elétricos', 'potência elétrica', 'associação de resistores', 'capacitores', 'campo magnético', 'força magnética', 'indução eletromagnética', 'radioatividade', 'fissão e fusão nuclear', 'meia-vida', 'efeito fotoelétrico'],
  'Revisão integrada Física': ['revisão mecânica', 'revisão termologia e fluidos', 'revisão eletricidade', 'eletromagnetismo e física moderna', 'questões integradas'],

  // === MATEMÁTICA ===
  'Funções I': ['conjuntos', 'conjuntos numéricos', 'função do 1º grau', 'função do 2º grau'],
  'Funções II': ['função modular', 'função exponencial', 'função logarítmica', 'gráficos'],
  'Álgebra e equações': ['equações', 'inequações', 'sistemas', 'álgebra fundamental'],
  'Álgebra I (equações + sistemas)': ['equações do 1º e 2º grau', 'inequações', 'sistemas lineares', 'substituição e adição'],
  'Álgebra II (logaritmo + exponencial)': ['logaritmos: propriedades e cálculo', 'equações logarítmicas', 'equações exponenciais', 'aplicações práticas'],
  'Estatística + Interpretação de Dados': ['média, moda e mediana', 'desvio padrão', 'gráficos e tabelas', 'interpretação de dados estatísticos'],
  'Probabilidade e combinatória': ['análise combinatória', 'probabilidade', 'arranjo', 'permutação', 'combinação'],
  'Sequências + revisão prática prob./comb.': ['PA', 'PG', 'juros simples', 'juros compostos', 'revisão de probabilidade'],
  'Probabilidade + Combinatória + PA/PG + Juros': ['análise combinatória', 'probabilidade', 'arranjo', 'permutação', 'combinação', 'PA e PG', 'juros simples', 'juros compostos', 'porcentagem e descontos'],
  'Geom. plana / trig. I': ['geometria plana', 'trigonometria no triângulo retângulo', 'círculo trigonométrico'],
  'Geometria espacial': ['prismas', 'pirâmides', 'cilindro', 'cone', 'esfera', 'volume e área'],
  'Geometria analítica': ['ponto', 'reta', 'circunferência', 'distância entre pontos', 'equação da reta'],

  // === HISTÓRIA ===
  'Brasil Colônia I': ['economia colonial', 'escravidão', 'administração colonial', 'sociedade colonial'],
  'Brasil Império': ['independência', 'primeiro reinado', 'regências', 'segundo reinado', 'abolição'],
  'República Velha e Era Vargas': ['República Velha', 'coronelismo', 'Era Vargas', 'Estado Novo', 'industrialização'],
  'Revoluções Modernas': ['Revolução Francesa', 'Revolução Industrial', 'imperialismo', 'colonialismo', 'iluminismo'],
  'Mundo Contemporâneo I (1ª Guerra + contexto)': ['1ª Guerra Mundial: causas e consequências', 'Revolução Russa', 'crise de 1929', 'ascensão do nazifascismo', 'entreguerras'],
  'Mundo Contemporâneo II (2ª Guerra + Guerra Fria)': ['2ª Guerra Mundial', 'Holocausto', 'Guerra Fria', 'ONU e ordem bipolar', 'descolonização africana e asiática'],
  'Antiguidade + Revisão 80/20 Hist.': ['Antiguidade Clássica: Grécia e Roma', 'Medievalidade e feudalismo', 'Cruzadas', 'Renascimento e Reforma Protestante', 'revisão 80/20 dos temas de maior incidência'],
  'Mundo contemporâneo I': ['Revolução Francesa', 'Revolução Industrial', 'imperialismo', '1ª Guerra Mundial'],
  'Mundo contemporâneo I + Antiguidade': ['Revolução Francesa', 'Revolução Industrial', 'imperialismo', '1ª Guerra Mundial', 'Antiguidade Clássica (Grécia e Roma)', 'Medievalidade e feudalismo', 'Cruzadas', 'Renascimento e Reforma Protestante'],
  'Mundo contemporâneo II': ['2ª Guerra Mundial', 'Guerra Fria', 'descolonização', 'globalização'],
  'Revisão 80/20 História': ['temas de maior incidência', 'questões recorrentes', 'revisão dirigida'],

  // === GEOGRAFIA ===
  'Geografia física I': ['relevo', 'clima', 'vegetação', 'hidrografia'],
  'Geografia física II': ['solo', 'recursos naturais', 'meio ambiente', 'impactos ambientais'],
  'Geografia física II + Cartografia': ['solo', 'recursos naturais', 'meio ambiente', 'impactos ambientais', 'cartografia: escalas e projeções', 'leitura de mapas e gráficos'],
  'Espaço brasileiro I': ['população', 'urbanização', 'migração', 'regiões brasileiras'],
  'Espaço brasileiro II': ['economia brasileira', 'industrialização', 'agropecuária', 'infraestrutura'],
  'Espaço brasileiro II + Geopolítica': ['economia brasileira', 'industrialização', 'agropecuária', 'infraestrutura', 'ordem mundial', 'blocos econômicos', 'conflitos regionais', 'organizações internacionais'],
  'Meio Ambiente + Sustentabilidade': ['aquecimento global', 'desmatamento', 'biodiversidade', 'desenvolvimento sustentável', 'impactos ambientais', 'COP e acordos internacionais'],
  'Geopolítica': ['ordem mundial', 'blocos econômicos', 'conflitos', 'organizações internacionais'],
  'Revisão 80/20 Geo.': ['temas de maior incidência', 'questões recorrentes', 'revisão dirigida'],

  // === LÍNGUA ESTRANGEIRA ===
  'Leitura I': ['ideia central', 'cognatos', 'inferência', 'vocabulário contextual'],
  'Leitura II': ['intenção comunicativa', 'gêneros textuais', 'elementos coesivos'],
  'Leitura III': ['interpretação avançada', 'argumentação', 'ponto de vista do autor'],
  'Leitura IV': ['aspectos gramaticais voltados para leitura', 'tempos verbais em contexto', 'conectivos'],
  'Gramática Inglesa + Vocabulário': ['tempos verbais (present, past, future)', 'conditional e modal verbs', 'passive voice', 'relative clauses', 'phrasal verbs', 'vocabulário contextual', 'sinônimos e antônimos', 'expressões idiomáticas'],
  'Questões de inglês': ['interpretação de texto em inglês', 'questões de vestibular', 'vocabulário e gramática em contexto', 'simulado de inglês'],
  'Revisão por questões': ['questões por tópico', 'simulados parciais', 'análise de erros'],

  // === SEMANAS DE REVISÃO (11-13) ===
  'Revisão forte': ['revisão dos conteúdos de maior incidência', 'resolução intensiva de questões', 'correção de erros recorrentes'],
  'Questões + disc. avançada': ['questões de nível avançado', 'discursivas complexas', 'treino de tempo'],
  'Questões focadas': ['questões dos temas mais cobrados', 'revisão ativa', 'resolução comentada'],
  'Leitura e questões': ['leitura e interpretação', 'questões de vestibular', 'prática contextual'],
  'Revisão 80/20 Mat.': ['temas de maior incidência', 'questões recorrentes', 'revisão dirigida'],
  'Revisão final': ['revisão geral dos conteúdos principais', 'simulado', 'prova anterior', 'correção de erros'],
};

// ==========================================
// EXPAND/COLLAPSE PARA TÓPICOS
// ==========================================
let expandedTopics = new Set();

function toggleTopicExpand(key) {
  if (expandedTopics.has(key)) {
    expandedTopics.delete(key);
  } else {
    expandedTopics.add(key);
  }
}

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
// STATE MANAGEMENT — Firebase + localStorage fallback
// ==========================================
const STORAGE_KEY = 'mentoria_dashboard_v1';
const FIREBASE_URL = 'https://mentoria-medicina-default-rtdb.firebaseio.com/state.json';

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
  // Persist to Firebase in background (fire-and-forget)
  fetch(FIREBASE_URL, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(state)
  }).catch(() => { /* ignore network errors */ });
}

// Migrates legacy dayActivity (w1_seg_c) and exec (exec_w1_seg_construcao) fields
// into the current appState.checks format. Returns true if any migration was done.
function migrateLegacyData(cloudData) {
  let migrated = false;
  const ACT = { c: 'construcao', q: 'questoes', p: 'portugues', d: 'discursiva' };

  // dayActivity: keys like "w1_seg_c" → value true
  if (cloudData.dayActivity) {
    Object.entries(cloudData.dayActivity).forEach(([key, val]) => {
      if (!val) return;
      // key format: w{n}_{day}_{type}
      const m = key.match(/^(w\d+)_([a-z]+)_([cqpd])$/);
      if (!m) return;
      const [, wk, day, act] = m;
      const execType = ACT[act];
      if (!execType) return;
      const checkKeys = EXEC_TO_CHECK_KEYS[execType] || [execType];
      checkKeys.forEach(ck => {
        const checkKey = `${wk}_${day}_${ck}`;
        if (!appState.checks[checkKey]) {
          appState.checks[checkKey] = true;
          migrated = true;
        }
      });
    });
  }

  // exec: keys like "exec_w1_seg_construcao" → value true
  if (cloudData.exec) {
    Object.entries(cloudData.exec).forEach(([key, val]) => {
      if (!val) return;
      // key format: exec_{wk}_{day}_{type}
      const m = key.match(/^exec_(w\d+)_([a-z]+)_([a-z]+)$/);
      if (!m) return;
      const [, wk, day, execType] = m;
      const checkKeys = EXEC_TO_CHECK_KEYS[execType] || [execType];
      checkKeys.forEach(ck => {
        const checkKey = `${wk}_${day}_${ck}`;
        if (!appState.checks[checkKey]) {
          appState.checks[checkKey] = true;
          migrated = true;
        }
      });
    });
  }

  return migrated;
}

async function syncFromFirebase() {
  try {
    const res = await fetch(FIREBASE_URL);
    if (!res.ok) return;
    const cloudData = await res.json();
    if (cloudData === null) {
      // Firebase explicitamente vazio — novo usuário começa zerado
      appState.checks = {};
      localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
      if (typeof currentSection !== 'undefined') navigateTo(currentSection);
      return;
    }

    // Migrate legacy data formats before merging
    const didMigrate = migrateLegacyData(cloudData);

    // Merge checks: true always wins (checked on any device stays checked)
    if (cloudData.checks) {
      Object.keys(cloudData.checks).forEach(key => {
        appState.checks[key] = cloudData.checks[key] || appState.checks[key];
      });
    }

    // Merge other fields (weekObs, rotation, mentoriaNota, alunaNota, startDate)
    // Exclude legacy fields dayActivity and exec from being spread into appState
    const { checks: _c, dayActivity: _da, exec: _ex, ...rest } = cloudData;
    Object.assign(appState, rest);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));

    // If migration happened, push cleaned state back to Firebase
    if (didMigrate) {
      fetch(FIREBASE_URL, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(appState),
      }).catch(() => {});
    }

    showCloudSyncBadge();

    // Re-render current section with synced data
    if (typeof currentSection !== 'undefined') navigateTo(currentSection);
  } catch (e) { /* offline or error — stay with localStorage */ }
}

function showCloudSyncBadge() {
  let badge = document.getElementById('cloud-sync-badge');
  if (!badge) {
    badge = document.createElement('div');
    badge.id = 'cloud-sync-badge';
    badge.style.cssText = [
      'position:fixed', 'bottom:24px', 'left:24px', 'z-index:9999',
      'background:#3b82f6', 'color:#fff', 'font-size:12px', 'font-weight:500',
      'padding:7px 14px', 'border-radius:8px', 'box-shadow:0 4px 16px rgba(0,0,0,0.18)',
      'display:flex', 'align-items:center', 'gap:6px',
      'opacity:0', 'transition:opacity 0.3s', 'pointer-events:none'
    ].join(';');
    badge.innerHTML = `${ICO.cloud} Progresso sincronizado da nuvem`;
    document.body.appendChild(badge);
  }
  badge.style.opacity = '1';
  clearTimeout(badge._timeout);
  badge._timeout = setTimeout(() => { badge.style.opacity = '0'; }, 2500);
}

let appState = loadState();

if (!appState.checks) appState.checks = {};
if (!appState.weekObs) appState.weekObs = {};
if (!appState.rotation) appState.rotation = {};
if (!appState.mentoriaNota) appState.mentoriaNota = {};
if (!appState.startDate) appState.startDate = '2026-03-16';

function toggleCheck(weekNum, dayKey, itemKey) {
  const key = `w${weekNum}_${dayKey}_${itemKey}`;
  appState.checks[key] = !appState.checks[key];
  saveState(appState);
  return appState.checks[key];
}

function isChecked(weekNum, dayKey, itemKey) {
  return !!appState.checks[`w${weekNum}_${dayKey}_${itemKey}`];
}

// Mapeamento exec → chaves de checks (construcao cobre construcao1 + construcao2)
const EXEC_TO_CHECK_KEYS = {
  construcao: ['construcao1', 'construcao2'],
  questoes:   ['questoes'],
  portugues:  ['portugues'],
  discursiva: ['discursiva'],
  acumulo:    ['acumulo'],
};

// Ícones SVG inline reutilizáveis nos templates HTML
const ICO = {
  anchor:    '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-1px;flex-shrink:0"><circle cx="12" cy="5" r="3"/><line x1="12" y1="8" x2="12" y2="22"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/></svg>',
  bookmark:  '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-1px;flex-shrink:0"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>',
  refresh:   '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-1px;flex-shrink:0"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',
  pencil:    '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-1px;flex-shrink:0"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>',
  box:       '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-1px;flex-shrink:0"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>',
  layers:    '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-1px;flex-shrink:0"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',
  help:      '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-1px;flex-shrink:0"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
  book:      '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-1px;flex-shrink:0"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
  target:    '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-1px;flex-shrink:0"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
  clipboard: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-1px;flex-shrink:0"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>',
  warn:      '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-1px;flex-shrink:0"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
  cloud:     '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-1px;flex-shrink:0"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>',
  lightning: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-1px;flex-shrink:0"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
  barChart:  '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-1px;flex-shrink:0"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg>',
  moon:      '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
};

function toggleExec(weekNum, dayKey, type) {
  const keys = EXEC_TO_CHECK_KEYS[type] || [type];
  const allDone = keys.every(k => isChecked(weekNum, dayKey, k));
  const newState = !allDone;
  keys.forEach(k => {
    appState.checks[`w${weekNum}_${dayKey}_${k}`] = newState;
  });
  saveState(appState);
  return newState;
}

function isExecDone(weekNum, dayKey, type) {
  const keys = EXEC_TO_CHECK_KEYS[type] || [type];
  return keys.every(k => isChecked(weekNum, dayKey, k));
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
  return Math.round(sum / WEEKS_DATA.length);
}

// Block index → days of week (mirrors)
const BLOCK_DAYS = [['seg', 'qui'], ['ter', 'sex'], ['qua', 'sab']];

function calcSubjectProgress(subjectId) {
  let totalSlots = 0, doneSlots = 0;
  WEEKS_DATA.forEach(w => {
    if (getWeekOutSubject(w) === subjectId) return;
    w.blocks.forEach((b, bIdx) => {
      if (!b.subjects.some(s => s.id === subjectId)) return;
      BLOCK_DAYS[bIdx].forEach(dayKey => {
        totalSlots++;
        if (isExecDone(w.week, dayKey, 'construcao')) doneSlots++;
      });
    });
  });
  return totalSlots > 0 ? Math.round((doneSlots / totalSlots) * 100) : 0;
}

function getSubjectStatus(subjectId) {
  let totalSlots = 0, doneSlots = 0;
  WEEKS_DATA.forEach(w => {
    if (getWeekOutSubject(w) === subjectId) return;
    w.blocks.forEach((b, bIdx) => {
      if (!b.subjects.some(s => s.id === subjectId)) return;
      BLOCK_DAYS[bIdx].forEach(dayKey => {
        totalSlots++;
        if (isExecDone(w.week, dayKey, 'construcao')) doneSlots++;
      });
    });
  });
  if (totalSlots === 0) return 'nao-iniciado';
  if (doneSlots === totalSlots) return 'concluido';
  if (doneSlots > 0) return 'em-andamento';
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
  if (!appState.startDate) return 1;
  const start = new Date(appState.startDate);
  const now = new Date();
  const diffDays = Math.floor((now - start) / (1000 * 60 * 60 * 24));
  const week = Math.floor(diffDays / 7) + 1;
  return Math.max(1, Math.min(13, week));
}

// ==========================================
// RENDERING
// ==========================================
let currentSection = 'overview';
let _mentoraInterval = null;

function navigateTo(section) {
  // Limpa auto-refresh ao sair da visão da mentora
  if (section !== 'mentora' && _mentoraInterval) {
    clearInterval(_mentoraInterval);
    _mentoraInterval = null;
  }

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
    'estrategia': 'Estratégia 80/20',
    'rotation': 'Campo de Rotação',
    'mentora': 'Visão do Mentor',
  };
  document.getElementById('header-title').textContent = titles[section] || 'Dashboard';

  // Render dynamic content
  if (section === 'overview') renderOverview();
  if (section === 'weekly') renderWeeklyView();
  if (section === 'subjects') renderSubjectsView();
  if (section === 'weekprogress') renderWeekProgressView();
  if (section === 'estrategia') renderEstrategiaView();
  if (section === 'rotation') renderRotationView();
  if (section === 'mentora') {
    refreshMentoraView();
    // Auto-refresh a cada 30s enquanto a mentora estiver na página
    if (!_mentoraInterval) {
      _mentoraInterval = setInterval(refreshMentoraView, 30000);
    }
  }
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
      <div class="es-value">13</div>
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
        const topicKey = `weekly_w${w.week}_${b.mirror}_${s.id}`;
        const topicos = TOPICOS_POR_MATERIA[s.topic] || [];
        const isExpanded = expandedTopics.has(topicKey);
        const hasTopics = topicos.length > 0;
        const toggleIcon = hasTopics ? (isExpanded ? '▼' : '▶') : '';
        const topicListHtml = (hasTopics && isExpanded)
          ? `<div class="topic-list">${topicos.map(t => `<div class="topic-item">• ${t}</div>`).join('')}</div>`
          : '';
        subjectsHtml += `
          <div class="subject-pill ${sub.pillClass} ${pillRole} ${hasTopics ? 'has-topics' : ''}" ${hasTopics ? `onclick="toggleTopicExpand('${topicKey}'); renderWeeklyView();"` : ''}>
            <span class="subject-dot"></span>
            <span class="subject-name">${sub.name}</span>
            ${roleTag}
            <span class="subject-topic">${s.topic}</span>
            ${hasTopics ? `<span class="topic-toggle">${toggleIcon}</span>` : ''}
          </div>
          ${topicListHtml}`;
      });

      const discColor = {
        'Biologia': 'background:rgba(16,185,129,0.10);color:var(--bio-color);border:1px solid rgba(16,185,129,0.2)',
        'Química': 'background:rgba(245,158,11,0.10);color:var(--quim-color);border:1px solid rgba(245,158,11,0.2)',
        'Física': 'background:rgba(59,130,246,0.10);color:var(--fis-color);border:1px solid rgba(59,130,246,0.2)',
      }[b.discursiva] || '';

      blocksHtml += `
        <div class="week-block">
          <div class="block-header">
            <span class="block-mirror">${ICO.refresh} ${b.mirror}</span>
            <span class="block-disc-badge" style="${discColor}">${ICO.pencil} ${b.discursiva}</span>
          </div>
          <div class="block-subjects">${subjectsHtml}</div>
        </div>`;
    });

    const phaseBadge8020 = `<span class="week-8020-badge">${ICO.target} 80/20</span>`;

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
          ${ICO.pencil} <strong>Discursiva diária:</strong>&nbsp; Seg/Qui → Bio &nbsp;·&nbsp; Ter/Sex → Quím &nbsp;·&nbsp; Qua/Sáb → Fís
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
          <div class="week-note-label wnl-mentoria">${ICO.clipboard} Observação da Mentoria</div>
          <textarea class="week-note-input" placeholder="Ex: focar em questões de genética..."
            onchange="setMentoriaNota(${w.week}, this.value)">${mentoriaNota}</textarea>
        </div>
        <div class="week-note-field">
          <div class="week-note-label wnl-aluna">${ICO.lightning} Ponto de Atenção da Aluna</div>
          <textarea class="week-note-input" placeholder="Ex: dificuldade em termologia..."
            onchange="setAlunaNota(${w.week}, this.value)">${alunaNota}</textarea>
        </div>
      </div>`;

    container.appendChild(card);
  });

  // Auto-expand the current week
  const currentW = getCurrentWeek();
  const currentDailyView = document.getElementById(`daily-view-${currentW}`);
  const currentCard = document.getElementById(`week-card-${currentW}`);
  if (currentDailyView && currentCard) {
    currentDailyView.classList.add('expanded');
    currentDailyView.innerHTML = renderDailyCards(WEEKS_DATA[currentW - 1]);
    const btn = currentCard.querySelector('.week-expand-btn');
    if (btn) btn.innerHTML = 'Fechar ▴';
    // Scroll to current week
    setTimeout(() => currentCard.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
  }
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
          <span style="color:var(--text-muted)">${ICO.moon}</span>
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
          <div class="day-section-label dsl-acumulo">${ICO.box} Técnica do Acúmulo</div>
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
        const roleLabel = s.role === 'ancora' ? ICO.anchor : ICO.bookmark;
        const topicKey = `daily_w${weekData.week}_${day.key}_${s.id}`;
        const topicos = TOPICOS_POR_MATERIA[s.topic] || [];
        const isExpanded = expandedTopics.has(topicKey);
        const hasTopics = topicos.length > 0;
        const toggleIcon = hasTopics ? (isExpanded ? '▼' : '▶') : '';
        const topicListHtml = (hasTopics && isExpanded)
          ? `<div class="topic-list topic-list-daily">${topicos.map(t => `<div class="topic-item">• ${t}</div>`).join('')}</div>`
          : '';
        construcaoItems += `
          <li class="${checked ? 'checked' : ''}">
            <span class="check-box" onclick="handleCheckClick(${weekData.week},'${day.key}','${itemKey}',this.parentElement)">${checked ? '✓' : ''}</span>
            <span class="check-label" ${hasTopics ? `onclick="toggleTopicExpand('${topicKey}'); document.getElementById('daily-view-${weekData.week}').innerHTML = renderDailyCards(WEEKS_DATA[${weekData.week - 1}]);" style="cursor:pointer;"` : ''}>
              ${roleLabel} ${sub.name} — ${s.topic} ${hasTopics ? `<span class="topic-toggle-inline">${toggleIcon}</span>` : ''}
            </span>
            <span class="check-type type-construcao">C</span>
          </li>
          ${topicListHtml}`;
      });
      sections += `
        <div class="day-section">
          <div class="day-section-label dsl-construcao">${ICO.layers} Construção</div>
          <ul class="checklist">${construcaoItems}</ul>
        </div>`;
    }

    // 3. Questões
    const questChecked = isChecked(weekData.week, day.key, 'questoes');
    const questLabel = isSaturday ? 'Questões das matérias de hoje' : 'Questões das matérias do dia anterior';
    sections += `
      <div class="day-section">
        <div class="day-section-label dsl-questoes">${ICO.help} Questões</div>
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
        <div class="day-section-label dsl-portugues">${ICO.book} Português</div>
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
        <div class="day-section-label dsl-discursiva">${ICO.pencil} Discursiva</div>
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

  showSavedToast();
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
      for (let i = 1; i <= 13; i++) weeksHtml += `<span class="subject-week-dot active-week">${i}</span>`;
    } else {
      const { active, off } = getSubjectActiveWeeks(sub.id);
      for (let i = 1; i <= 13; i++) {
        if (off.includes(i)) weeksHtml += `<span class="subject-week-dot off-week">${i}</span>`;
        else if (active.includes(i)) weeksHtml += `<span class="subject-week-dot active-week">${i}</span>`;
        else weeksHtml += `<span class="subject-week-dot">${i}</span>`;
      }
    }

    const progress = sub.id === 'port' ? 0 : calcSubjectProgress(sub.id);
    const status = sub.id === 'port' ? 'paralelo' : getSubjectStatus(sub.id);

    const statusLabels = {
      'nao-iniciado': '○ Não iniciado',
      'em-andamento': '◉ Em andamento',
      'concluido': '✓ Concluído',
      'paralelo': '● Diário por questões',
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
        ${sub.sensitive ? '<span class="subject-type-tag stype-ancora">! Não retirar</span>' : ''}
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
// Mapeamento dos botões C/Q/P/D → tipos do exec (mesma chave de appState.checks)
const ACTIVITY_TO_EXEC = { c: 'construcao', q: 'questoes', p: 'portugues', d: 'discursiva' };

function getDayActivity(week, dayKey, type) {
  return isExecDone(week, dayKey, ACTIVITY_TO_EXEC[type] || type);
}

function toggleDayActivity(week, dayKey, type) {
  toggleExec(week, dayKey, ACTIVITY_TO_EXEC[type] || type);
  renderWeekProgressView();
  showSavedToast();
}

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
      ? '<span class="subject-status-badge status-concluido">✓ Concluída</span>'
      : progress > 0
        ? '<span class="subject-status-badge status-em-andamento">◉ Em andamento</span>'
        : '<span class="subject-status-badge status-nao-iniciado">○ Não iniciada</span>';

    let subjectNames = [];
    w.blocks.forEach(b => {
      b.subjects.forEach(s => {
        const sub = getSubjectById(s.id);
        if (sub && !subjectNames.includes(sub.name)) subjectNames.push(sub.name);
      });
    });

    const ACTIVITY_DAYS = [
      { key: 'seg', label: 'Seg' }, { key: 'ter', label: 'Ter' }, { key: 'qua', label: 'Qua' },
      { key: 'qui', label: 'Qui' }, { key: 'sex', label: 'Sex' }, { key: 'sab', label: 'Sáb' }
    ];
    const ACTIVITIES = [
      { type: 'c', label: 'C', title: 'Construção' },
      { type: 'q', label: 'Q', title: 'Questões' },
      { type: 'p', label: 'P', title: 'Português' },
      { type: 'd', label: 'D', title: 'Discursiva' }
    ];

    const activityRowsHtml = ACTIVITY_DAYS.map(day => {
      const btns = ACTIVITIES.map(act => {
        const active = getDayActivity(w.week, day.key, act.type);
        return `<button class="day-act-btn${active ? ' day-act-active' : ''}"
          title="${act.title}"
          onclick="toggleDayActivity(${w.week},'${day.key}','${act.type}')">${act.label}</button>`;
      }).join('');
      return `<div class="day-act-row"><span class="day-act-label">${day.label}</span>${btns}</div>`;
    }).join('');

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
      <div style="font-size:0.75rem;color:var(--text-secondary);margin-bottom:10px;">
        <strong>Matérias:</strong> ${subjectNames.join(', ')} + Português
      </div>
      <div class="day-act-counter">
        <span>C: <strong>${counts.construcoes}/12</strong></span>
        <span>Q: <strong>${counts.questoes}/6</strong></span>
        <span>P: <strong>${counts.portugues}/6</strong></span>
        <span>D: <strong>${counts.discursivas}/6</strong></span>
      </div>
      <div class="day-act-grid">
        <div class="day-act-legend">
          <span></span>
          <span title="Construção">C</span>
          <span title="Questões">Q</span>
          <span title="Português">P</span>
          <span title="Discursiva">D</span>
        </div>
        ${activityRowsHtml}
      </div>
      <textarea class="week-obs-input" placeholder="Observações da semana ${w.week}..."
        onchange="setWeekObs(${w.week}, this.value)">${obs}</textarea>`;

    container.appendChild(card);
  });
}

// ---------- Estratégia 80/20 View ----------
function renderEstrategiaView() {
  const container = document.getElementById('estrategia-container');
  if (!container) return;

  const EDITAL = [
    { id: 'bio',  name: 'Biologia',           color: 'var(--bio-color)',  obj: 8,  disc: 3 },
    { id: 'port', name: 'Português',           color: 'var(--port-color)', obj: 8,  disc: 0 },
    { id: 'quim', name: 'Química',             color: 'var(--quim-color)', obj: 6,  disc: 1 },
    { id: 'fis',  name: 'Física',              color: 'var(--fis-color)',  obj: 4,  disc: 1 },
    { id: 'mat',  name: 'Matemática',          color: 'var(--mat-color)',  obj: 4,  disc: 0 },
    { id: 'ling', name: 'Língua Estrangeira',  color: 'var(--ling-color)', obj: 4,  disc: 0 },
    { id: 'hist', name: 'História',            color: 'var(--hist-color)', obj: 3,  disc: 0 },
    { id: 'geo',  name: 'Geografia',           color: 'var(--geo-color)',  obj: 3,  disc: 0 },
  ];

  const STRIX = [
    { id: 'bio',  name: 'Biologia',          color: 'var(--bio-color)',  total: 256, pct: 26.1,
      topics: [['Biologia Molecular/Biotecnologia', 59], ['Fisiologia Humana', 57], ['Célula/Citologia', 28], ['Genética/Hereditariedade', 22], ['Botânica/Zoologia', 19], ['Ecologia', 16], ['Microbiologia', 15], ['Evolução', 10]] },
    { id: 'quim', name: 'Química',           color: 'var(--quim-color)', total: 212, pct: 21.6,
      topics: [['Estrutura Atômica/Ligações', 84], ['Funções Inorgânicas', 70], ['Química Orgânica', 54], ['Soluções/Equilíbrio', 26], ['Estequiometria', 23], ['Eletroquímica', 21], ['Termoquímica/Cinética', 11]] },
    { id: 'fis',  name: 'Física',            color: 'var(--fis-color)',  total: 104, pct: 10.6,
      topics: [['Mecânica', 60], ['Ondas/Óptica', 33], ['Termologia', 21], ['Fluidos/Pressão', 21], ['Eletricidade', 15], ['Eletromagnetismo', 4], ['Física Moderna', 0]] },
    { id: 'geo',  name: 'Geografia',         color: 'var(--geo-color)',  total: 82,  pct: 8.4,
      topics: [['Clima/Vegetação/Relevo', 71], ['Urbanização/População', 46], ['Meio Ambiente', 46], ['Brasil: Espaço e Economia', 37], ['Geopolítica/Globalização', 27], ['Cartografia', 20], ['Geologia/Geomorfologia', 15]] },
    { id: 'ling', name: 'Língua Estrangeira', color: 'var(--ling-color)', total: 70, pct: 7.1,
      topics: [['Interpretação (Inglês)', 100], ['Gramática Inglesa', 46], ['Vocabulário', 37], ['Espanhol', 3]] },
    { id: 'hist', name: 'História',          color: 'var(--hist-color)', total: 54,  pct: 5.5,
      topics: [['Brasil Republicano/Vargas', 56], ['Brasil Colonial/Imperial', 44], ['2ª Guerra/Guerra Fria', 37], ['Revoluções Modernas', 33], ['Mundo Contemporâneo', 15], ['Antiguidade/Medievalidade', 15], ['1ª Guerra Mundial', 7]] },
    { id: 'port', name: 'Português',         color: 'var(--port-color)', total: 42,  pct: 4.3,
      topics: [['Gramática', 86], ['Interpretação/Leitura', 67], ['Literatura', 33], ['Figuras de Linguagem', 19], ['Sociolinguística', 10]] },
    { id: 'mat',  name: 'Matemática',        color: 'var(--mat-color)',  total: 34,  pct: 3.5,
      topics: [['Geometria', 35], ['Álgebra/Equações', 35], ['Funções', 29], ['Probabilidade/Estatística', 18], ['Análise Combinatória', 6], ['Geometria Analítica', 6]] },
  ];

  const objTotal = EDITAL.reduce((s, e) => s + e.obj, 0);
  const discTotal = EDITAL.reduce((s, e) => s + e.disc, 0);

  // ── Edital table ──
  let editalRows = EDITAL.map(e => {
    const discCell = e.disc > 0
      ? `<td style="text-align:center;font-weight:700;color:var(--priority-parallel);">${e.disc}</td>`
      : `<td style="text-align:center;color:var(--text-muted);">—</td>`;
    return `
      <tr>
        <td>
          <span style="display:inline-flex;align-items:center;gap:8px;">
            <span style="width:10px;height:10px;border-radius:50%;background:${e.color};display:inline-block;flex-shrink:0;"></span>
            <strong>${e.name}</strong>
          </span>
        </td>
        <td style="text-align:center;">
          <span style="font-weight:700;font-size:1rem;color:${e.color};">${e.obj}</span>
          <span style="font-size:0.7rem;color:var(--text-muted);margin-left:2px;">q</span>
        </td>
        ${discCell}
      </tr>`;
  }).join('');

  // ── STRIX cards ──
  let strixCards = STRIX.map(s => {
    const topicsHtml = s.topics.map(([name, pct]) => {
      const barW = Math.round(pct);
      const opacity = pct === 0 ? '0.35' : '1';
      return `
        <div style="margin-bottom:7px;opacity:${opacity};">
          <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:3px;">
            <span style="font-size:0.75rem;color:var(--text-secondary);">${name}</span>
            <span style="font-size:0.72rem;font-weight:700;color:${s.color};">${pct}%</span>
          </div>
          <div style="height:5px;background:var(--bg-tertiary);border-radius:3px;overflow:hidden;">
            <div style="height:100%;width:${barW}%;background:${s.color};border-radius:3px;transition:width 0.4s;"></div>
          </div>
        </div>`;
    }).join('');

    return `
      <div class="estrat-subject-card">
        <div class="estrat-card-header">
          <span style="width:12px;height:12px;border-radius:50%;background:${s.color};display:inline-block;flex-shrink:0;"></span>
          <span style="font-weight:800;font-size:0.9rem;color:var(--text-heading);">${s.name}</span>
          <span style="margin-left:auto;font-size:0.72rem;font-weight:700;color:var(--text-muted);">${s.total} q · ${s.pct}%</span>
        </div>
        <div style="margin-top:10px;">${topicsHtml}</div>
      </div>`;
  }).join('');

  container.innerHTML = `
    <!-- Intro explicativo -->
    <div class="estrat-intro">
      <div style="margin-bottom:12px;color:var(--warning);"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg></div>
      <h3 style="font-size:1rem;font-weight:800;color:var(--text-heading);margin-bottom:8px;">Cronograma baseado em dados reais</h3>
      <p style="font-size:0.83rem;color:var(--text-secondary);line-height:1.6;">
        O cronograma de 13 semanas foi construído a partir da análise de <strong>980 questões reais da UNIT</strong> aplicadas em vestibulares anteriores. Cada semana respeita a <strong>Técnica Espelho</strong> (Seg↔Qui, Ter↔Sex, Qua↔Sáb), o tempo humano de construção de conhecimento e a <strong>Hierarquia 80/20</strong>: Bio, Quím e Fís recebem mais semanas e mais revisão porque são as matérias que mais aparecem na prova — e as que têm discursiva. Os tópicos de maior incidência entram primeiro no cronograma; os de baixa incidência são abordados de forma mais leve ou apenas nas semanas de revisão.
      </p>
    </div>

    <!-- Edital Oficial -->
    <div class="card mt-24">
      <div class="card-header">
        <div class="card-title">${ICO.clipboard} Edital UNIT — Distribuição de Questões</div>
      </div>
      <div style="overflow-x:auto;">
        <table class="estrat-table">
          <thead>
            <tr>
              <th>Matéria</th>
              <th style="text-align:center;">Objetiva</th>
              <th style="text-align:center;">Discursiva</th>
            </tr>
          </thead>
          <tbody>
            ${editalRows}
            <tr class="estrat-table-total">
              <td><strong>Total</strong></td>
              <td style="text-align:center;"><strong>${objTotal}</strong></td>
              <td style="text-align:center;"><strong>${discTotal}</strong></td>
            </tr>
          </tbody>
        </table>
      </div>
      <p style="font-size:0.72rem;color:var(--text-muted);margin-top:10px;padding:0 4px;">* Português inclui Literatura. Discursivas somente para matérias âncora (Bio, Quím, Fís).</p>
    </div>

    <!-- STRIX Analysis -->
    <div class="card mt-24">
      <div class="card-header">
        <div class="card-title">${ICO.barChart} O que mais cai — Análise de 980 questões STRIX</div>
        <div class="card-subtitle">Frequência de tópicos por matéria nas provas anteriores</div>
      </div>
      <div class="estrat-subjects-grid">
        ${strixCards}
      </div>
    </div>`;
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
      const warn = s.sensitive ? ' !' : '';
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
        <td>${isSensitive ? '<span style="color:#f87171;font-size:0.75rem;font-weight:600;">! Sensível</span>' : '<span style="color:var(--success);font-size:0.75rem;font-weight:600;">✓ OK</span>'}</td>
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
        <h5>${ICO.warn} Sensibilidade de Rotação</h5>
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
            Física — NÃO retirar
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
        <span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px;flex-shrink:0"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg></span>
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
  // Refresh views that depend on the rotation
  if (currentSection === 'subjects') renderSubjectsView();
  if (currentSection === 'weekprogress') renderWeekProgressView();
  if (currentSection === 'overview') renderOverview();
}


// ==========================================
// VISÃO DA MENTORA
// ==========================================
function renderMentoraView() {
  const container = document.getElementById('mentora-container');
  if (!container) return;

  const now = new Date().toLocaleTimeString('pt-BR');
  const days = ['seg', 'ter', 'qua', 'qui', 'sex', 'sab'];
  const dayLabels = { seg: 'Seg', ter: 'Ter', qua: 'Qua', qui: 'Qui', sex: 'Sex', sab: 'Sáb' };
  const execTypes = ['construcao', 'questoes', 'portugues', 'discursiva'];
  const typeLabel = { construcao: 'C', questoes: 'Q', portugues: 'P', discursiva: 'D', acumulo: 'A' };
  const typeColor = {
    construcao: 'var(--accent-primary)',
    questoes: 'var(--success)',
    portugues: '#f97316',
    discursiva: 'var(--priority-parallel)',
    acumulo: 'var(--warning)',
  };

  let html = `
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;flex-wrap:wrap;gap:12px;">
      <div style="font-size:0.78rem;color:var(--text-secondary);">Atualizado às ${now} · auto-refresh a cada 30s</div>
      <button onclick="refreshMentoraView()" style="background:var(--accent-primary);color:#fff;border:none;border-radius:8px;padding:8px 18px;font-size:13px;font-weight:600;cursor:pointer;display:inline-flex;align-items:center;gap:6px;">${ICO.cloud} Atualizar agora</button>
    </div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px;font-size:0.72rem;">
      <span style="display:inline-flex;align-items:center;gap:4px;"><span style="background:var(--accent-primary);color:#fff;padding:2px 7px;border-radius:4px;font-weight:700;">C</span> Construção</span>
      <span style="display:inline-flex;align-items:center;gap:4px;"><span style="background:var(--success);color:#fff;padding:2px 7px;border-radius:4px;font-weight:700;">Q</span> Questões</span>
      <span style="display:inline-flex;align-items:center;gap:4px;"><span style="background:#f97316;color:#fff;padding:2px 7px;border-radius:4px;font-weight:700;">P</span> Português</span>
      <span style="display:inline-flex;align-items:center;gap:4px;"><span style="background:var(--priority-parallel);color:#fff;padding:2px 7px;border-radius:4px;font-weight:700;">D</span> Discursiva</span>
      <span style="display:inline-flex;align-items:center;gap:4px;"><span style="background:var(--warning);color:#fff;padding:2px 7px;border-radius:4px;font-weight:700;">A</span> Acúmulo (Seg)</span>
    </div>
    <div class="mentora-grid">`;

  WEEKS_DATA.forEach(w => {
    const progress = calcWeekProgress(w.week);
    const pColor = progress >= 80 ? 'var(--success)' : progress >= 40 ? 'var(--warning)' : 'var(--text-muted)';

    let rowsHtml = '';
    days.forEach(dayKey => {
      const dayTypes = [...execTypes];
      if (dayKey === 'seg') dayTypes.push('acumulo');

      let indicators = '';
      dayTypes.forEach(t => {
        const done = isExecDone(w.week, dayKey, t);
        indicators += `<span style="
          display:inline-flex;align-items:center;justify-content:center;
          width:24px;height:24px;border-radius:5px;font-size:10px;font-weight:700;
          background:${done ? typeColor[t] : 'var(--bg-tertiary)'};
          color:${done ? '#fff' : 'var(--text-muted)'};
          border:1px solid ${done ? typeColor[t] : 'var(--border-color)'};
        ">${done ? '✓' : typeLabel[t]}</span>`;
      });

      rowsHtml += `
        <div style="display:flex;align-items:center;gap:8px;padding:5px 0;border-bottom:1px solid var(--border-color);">
          <span style="font-size:0.72rem;font-weight:700;color:var(--text-secondary);width:28px;flex-shrink:0;">${dayLabels[dayKey]}</span>
          <div style="display:flex;gap:4px;">${indicators}</div>
        </div>`;
    });

    html += `
      <div style="background:var(--bg-card);border:1px solid var(--border-color);border-radius:12px;padding:16px;">
        <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:10px;">
          <div>
            <div style="font-weight:700;font-size:0.9rem;">Semana ${w.week}</div>
            <div style="font-size:0.7rem;color:var(--text-secondary);">${w.phase}</div>
          </div>
          <div style="font-size:1.5rem;font-weight:800;color:${pColor};">${progress}%</div>
        </div>
        <div style="height:4px;background:var(--bg-tertiary);border-radius:2px;margin-bottom:12px;">
          <div style="height:4px;background:${pColor};border-radius:2px;width:${progress}%;"></div>
        </div>
        ${rowsHtml}
      </div>`;
  });

  html += '</div>';
  container.innerHTML = html;
}

async function refreshMentoraView() {
  try {
    const res = await fetch(FIREBASE_URL);
    if (res.ok) {
      const cloudData = await res.json();
      if (cloudData && cloudData.checks) {
        Object.keys(cloudData.checks).forEach(key => {
          appState.checks[key] = cloudData.checks[key] || appState.checks[key];
        });
        const { checks: _c, ...rest } = cloudData;
        Object.assign(appState, rest);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
      }
    }
  } catch (e) { /* offline */ }
  renderMentoraView();
}

// ==========================================
// TOAST FEEDBACK DE SALVAMENTO
// ==========================================
function showSavedToast() {
  let toast = document.getElementById('saved-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'saved-toast';
    toast.style.cssText = [
      'position:fixed', 'bottom:24px', 'right:24px', 'z-index:9999',
      'background:#10b981', 'color:#fff', 'font-size:13px', 'font-weight:500',
      'padding:8px 16px', 'border-radius:8px', 'box-shadow:0 4px 16px rgba(0,0,0,0.18)',
      'display:flex', 'align-items:center', 'gap:6px',
      'opacity:0', 'transition:opacity 0.2s', 'pointer-events:none'
    ].join(';');
    toast.textContent = '✓ Progresso salvo';
    document.body.appendChild(toast);
  }
  toast.style.opacity = '1';
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => { toast.style.opacity = '0'; }, 1500);
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

  // Sync from Firebase on load
  syncFromFirebase();
});

