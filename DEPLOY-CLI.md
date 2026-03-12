# ⚡ MÉTODO SUPER RÁPIDO - DEPLOY SEM GITHUB (2 MINUTOS)

## 🎯 USANDO VERCEL CLI (Linha de Comando)

Este método é AINDA MAIS RÁPIDO - não precisa de GitHub!

---

### 1️⃣ INSTALAR VERCEL CLI

Abra o terminal/PowerShell/CMD e execute:

```bash
npm install -g vercel
```

*(Se não tiver Node.js instalado, baixe em: https://nodejs.org)*

---

### 2️⃣ FAZER LOGIN

No terminal, execute:

```bash
vercel login
```

Escolha seu método de login (email ou GitHub)

---

### 3️⃣ FAZER DEPLOY

1. Navegue até a pasta do dashboard no terminal:

```bash
cd "C:\Users\Grilo\.gemini\antigravity\scratch"
```

2. Execute:

```bash
vercel
```

3. Responda as perguntas:

```
? Set up and deploy? → Y (pressione Enter)
? Which scope? → Sua conta (pressione Enter)
? Link to existing project? → N (pressione Enter)
? What's your project's name? → dashboard-mentoria-medicina
? In which directory is your code located? → ./ (pressione Enter)
? Want to modify these settings? → N (pressione Enter)
```

4. **AGUARDE 30 SEGUNDOS** ⏳

5. **PRONTO!** O terminal mostrará o link final! 🎉

Exemplo de link: `https://dashboard-mentoria-medicina.vercel.app`

---

### 4️⃣ ATUALIZAR O SITE (Futuro)

Sempre que quiser atualizar:

1. Faça as mudanças nos arquivos
2. No terminal, execute:

```bash
vercel --prod
```

3. Aguarde 20 segundos
4. Site atualizado!

---

## 🎁 VANTAGENS DESTE MÉTODO

✅ Mais rápido (2 minutos total)  
✅ Não precisa criar repositório GitHub  
✅ Deploy direto da sua máquina  
✅ Totalmente grátis  
✅ Atualizações super fáceis  

---

## 🆚 QUAL MÉTODO ESCOLHER?

**Use VERCEL CLI se:**
- Quer rapidez máxima
- Não quer mexer com GitHub
- Prefere linha de comando

**Use GITHUB se:**
- Quer backup automático do código
- Quer histórico de versões
- Prefere interface gráfica
- Vai trabalhar em equipe

---

**RECOMENDAÇÃO:** Comece com Vercel CLI (mais rápido) e depois, se quiser, migre para GitHub!
