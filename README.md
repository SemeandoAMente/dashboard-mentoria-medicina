<!-- markdownlint-configure-file {
  "MD013": {
    "code_blocks": false,
    "tables": false
  },
  "MD033": false,
  "MD041": false
} -->

<table>
<tbody>
<tr>
<td>
<div align="center" id="top">

# 🩺 Dashboard Mentoria Medicina

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](#) [![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](#) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](#) [![Vercel](https://img.shields.io/badge/Vercel-Deploy-000000?logo=vercel&logoColor=white)](#)

Dashboard visual premium para acompanhamento de um cronograma estruturado de estudos de 12 semanas, focado em alta performance para vestibulares de Medicina. Oferece visualização clara da grade semanal, técnicas avançadas de acúmulo e espelho, com persistência local do progresso do aluno. 🎉

<b>

[Características](#1) • [Matérias](#2) • [Grade](#3) • [Como Usar](#4) • [Tecnologias](#5)

</b>
</div>
</td>
</tr>
</tbody>
</table>
<br>

<div id="1">
<h2>
🎯 1. Características Principais
</h2>
</div>

[(Voltar para o topo)](#top)

O dashboard encapsula metodologias comprovadas de aprovação:

- **12 Semanas de Cronograma:** Estruturado e dividido logicamente para absorção máxima de conteúdo.
- **Técnica Espelho:** Estudo interligado entre dias (Segunda ↔ Quinta, Terça ↔ Sexta, Quarta ↔ Sábado).
- **Técnica do Acúmulo:** Carga de revisão acumulativa sempre às segundas-feiras.
- **Constância:** Resolução diária de questões de Português (paralelo fixo) e 1 discursiva por dia vinculada à matéria âncora.
- **Princípio 80/20:** Foco cirúrgico exclusivo nos assuntos de maior incidência no vestibular.

---

<div id="2">
<h2>
📚 2. Estrutura das Matérias
</h2>
</div>

[(Voltar para o topo)](#top)

O projeto prioriza as disciplinas estratégicas para Medicina (Método de Pesos):

### 🔴 Âncoras (Prioridade Máxima)
- Biologia
- Química
- Física

### 🟡 Apoio Forte (Prioridade Alta)
- Matemática

### 🔵 Rotativas (Prioridade Média)
- História
- Geografia
- Língua Estrangeira

---

<div id="3">
<h2>
🗓️ 3. Grade Semanal
</h2>
</div>

[(Voltar para o topo)](#top)

| Dia da Semana | Matérias Principais | Foco Discursivo |
|---|---|---|
| **Segunda e Quinta** | Biologia + Matemática | Biologia |
| **Terça e Sexta** | Química + História/Geografia | Química |
| **Quarta e Sábado** | Física + Rotativa | Física |
| **Domingo** | 💤 Folga / Recuperação | — |

---

<div id="4">
<h2>
🚀 4. Como Usar
</h2>
</div>

[(Voltar para o topo)](#top)

O projeto é uma aplicação Single Page (SPA) estática que roda diretamente no navegador, salvando todo o seu histórico e marcações de progresso automaticamente. Funciona de forma totalmente responsiva (Desktop, Tablet e Celular).

### 🌐 Acesso Online

1. O dashboard está configurado para deploy imediato. Para acessar a versão de nuvem, entre na URL fornecida pela Vercel.
2. Navegue pelos dias e semanas no menu lateral.
3. Clique nas tarefas para marcá-las como concluídas. Tudo é salvo localmente no seu dispositivo.

### 💻 Rodando Localmente

```bash
# 1. Clone o repositório em seu projeto
git clone https://github.com/SemeandoAMente/dashboard-mentoria-medicina.git

# 2. Acesse a pasta criada
cd dashboard-mentoria-medicina

# 3. Abra e utilize localmente
# Basta clicar duas vezes no arquivo index.html, ou abri-lo pelo VS Code usando a extensão "Live Server".
```

---

<div id="5">
<h2>
🛠️ 5. Stack Tecnológica
</h2>
</div>

[(Voltar para o topo)](#top)

Para manter a perfomance super rápida e sem necessidade de banco de dados externo, o projeto utiliza as seguintes tecnologias:

| Categoria | Tecnologia |
|---|---|
| **Estrutura** | HTML5 Semântico |
| **Estilos** | CSS3 (Moderno, Tema Escuro, Flexbox/Grid) |
| **Interatividade** | JavaScript Vanilla |
| **Armazenamento** | `localStorage` API |
| **Hospedagem** | Vercel / GitHub Pages |

---

<div align="center"><sub>✤ Dashboard projetado meticulosamente com ❤️ por <a href="https://github.com/SemeandoAMente">@SemeandoAMente</a> — <b>Mentoria Medicina Premium 🔄</b></sub></div>
