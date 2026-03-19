from pathlib import Path
from datetime import datetime
import hashlib

ROOT = Path(r"C:\Users\Grilo\OneDrive\Área de Trabalho\dashboard-mentoria")
DOCS = ROOT / "docs"
SNAPSHOTS = DOCS / "snapshots"

IGNORE_DIRS = {
    ".git",
    "node_modules",
    "__pycache__",
    "venv",
    ".vercel",
    "dist",
    "build"
}

IMPORTANT_FILES = {
    "app.js",
    "index.html",
    "style.css",
    "firebase.json",
    "vercel.json"
}

def sha1_of_file(path: Path) -> str:
    h = hashlib.sha1()
    with path.open("rb") as f:
        while True:
            chunk = f.read(8192)
            if not chunk:
                break
            h.update(chunk)
    return h.hexdigest()[:12]

def should_ignore(path: Path) -> bool:
    return any(part in IGNORE_DIRS for part in path.parts)

def list_project_files(root: Path):
    files = []
    for p in root.rglob("*"):
        if p.is_file() and not should_ignore(p):
            files.append(p)
    return sorted(files)

def list_project_dirs(root: Path):
    dirs = []
    for p in root.rglob("*"):
        if p.is_dir() and not should_ignore(p):
            dirs.append(p)
    return sorted(dirs)

def rel(path: Path) -> str:
    return str(path.relative_to(ROOT))

def generate_index_md(files, dirs):
    now = datetime.now().strftime("%d/%m/%Y %H:%M:%S")

    important = [f for f in files if f.name in IMPORTANT_FILES]
    markdown_files = [f for f in files if f.suffix.lower() == ".md"]

    content = []
    content.append("# 00_INDEX_GERAL")
    content.append("")
    content.append(f"Gerado automaticamente em: **{now}**")
    content.append("")
    content.append("## Base oficial")
    content.append("")
    content.append(f"- Pasta oficial: `{ROOT}`")
    content.append(f"- Arquivo principal: `{ROOT / 'app.js'}`")
    content.append(f"- Pasta paralela: `{ROOT / 'atualização'}`")
    content.append("")
    content.append("## Arquivos principais")
    content.append("")

    for f in important:
        content.append(f"- `{rel(f)}`")

    content.append("")
    content.append("## Documentação existente")
    content.append("")

    for f in markdown_files:
        if "docs" in f.parts:
            content.append(f"- `{rel(f)}`")

    content.append("")
    content.append("## Diretórios encontrados")
    content.append("")

    for d in dirs:
        content.append(f"- `{rel(d)}`")

    return "\n".join(content)

def generate_mapa_pastas_md(files, dirs):
    now = datetime.now().strftime("%d/%m/%Y %H:%M:%S")

    content = []
    content.append("# 01_MAPA_DE_PASTAS")
    content.append("")
    content.append(f"Atualizado em: **{now}**")
    content.append("")
    content.append("## Diretórios do projeto")
    content.append("")

    for d in dirs:
        content.append(f"- `{rel(d)}`")

    content.append("")
    content.append("## Arquivos do projeto")
    content.append("")

    for f in files:
        content.append(f"- `{rel(f)}`")

    return "\n".join(content)

def generate_arquitetura_md(files):
    now = datetime.now().strftime("%d/%m/%Y %H:%M:%S")
    app_js = ROOT / "app.js"

    content = []
    content.append("# 02_ARQUITETURA")
    content.append("")
    content.append(f"Atualizado em: **{now}**")
    content.append("")
    content.append("## Fonte oficial")
    content.append("")
    content.append(f"- Projeto principal: `{ROOT}`")
    content.append(f"- Arquivo principal: `{app_js}`")
    content.append(f"- Pasta paralela: `{ROOT / 'atualização'}`")
    content.append("")
    content.append("## Observações")
    content.append("")
    content.append("- Este documento é um ponto de partida para auditorias futuras.")
    content.append("- Confirmar sempre se `app.js` da raiz continua sendo a base oficial.")
    content.append("- Toda manutenção deve registrar bugs, causa raiz e funções alteradas.")
    content.append("")
    content.append("## Assinaturas rápidas")
    content.append("")

    if app_js.exists():
        content.append(f"- `app.js` hash: `{sha1_of_file(app_js)}`")
    else:
        content.append("- `app.js` não encontrado.")

    return "\n".join(content)

def generate_bugs_md():
    now = datetime.now().strftime("%d/%m/%Y %H:%M:%S")

    content = []
    content.append("# 03_BUGS_CONHECIDOS")
    content.append("")
    content.append(f"Atualizado em: **{now}**")
    content.append("")
    content.append("## Modelo de registro")
    content.append("")
    content.append("### Bug")
    content.append("- Sintoma:")
    content.append("- Causa raiz:")
    content.append("- Arquivo afetado:")
    content.append("- Função afetada:")
    content.append("- Correção aplicada:")
    content.append("- Como validar:")
    content.append("")
    content.append("## Bugs já mapeados")
    content.append("")
    content.append("### 1. Persistência de checkbox / reload")
    content.append("- Sintoma: itens desmarcados voltavam após atualizar a página.")
    content.append("- Suspeita validada: conflito entre sincronização remota/local e regra de merge inadequada.")
    content.append("")
    content.append("### 2. Retorno automático para semana 1")
    content.append("- Sintoma: ao editar semanas abaixo da 3, a tela voltava para a semana da aluna.")
    content.append("- Suspeita validada: reposicionamento automático agressivo da interface.")
    content.append("")
    return "\n".join(content)

def generate_fluxo_md():
    now = datetime.now().strftime("%d/%m/%Y %H:%M:%S")

    content = []
    content.append("# 04_FLUXO_DE_PERSISTENCIA")
    content.append("")
    content.append(f"Atualizado em: **{now}**")
    content.append("")
    content.append("## Checklist de auditoria")
    content.append("")
    content.append("1. Identificar função que altera estado.")
    content.append("2. Identificar função que salva localmente.")
    content.append("3. Identificar função que sincroniza remotamente.")
    content.append("4. Identificar função que reidrata no reload.")
    content.append("5. Verificar se `false` consegue prevalecer sobre `true`.")
    content.append("6. Verificar se a UI reposiciona a semana ativa indevidamente.")
    content.append("")
    return "\n".join(content)

def generate_relatorio_ultima_correcao_md():
    now = datetime.now().strftime("%d/%m/%Y %H:%M:%S")

    content = []
    content.append("# 05_RELATORIO_ULTIMA_CORRECAO")
    content.append("")
    content.append(f"Criado em: **{now}**")
    content.append("")
    content.append("## Preencher após cada manutenção")
    content.append("")
    content.append("- Data:")
    content.append("- Bug corrigido:")
    content.append("- Arquivos alterados:")
    content.append("- Funções alteradas:")
    content.append("- Causa raiz:")
    content.append("- Testes realizados:")
    content.append("- Resultado:")
    content.append("")
    return "\n".join(content)

def main():
    DOCS.mkdir(exist_ok=True)
    SNAPSHOTS.mkdir(exist_ok=True)

    files = list_project_files(ROOT)
    dirs = list_project_dirs(ROOT)

    docs_to_write = {
        DOCS / "00_INDEX_GERAL.md": generate_index_md(files, dirs),
        DOCS / "01_MAPA_DE_PASTAS.md": generate_mapa_pastas_md(files, dirs),
        DOCS / "02_ARQUITETURA.md": generate_arquitetura_md(files),
        DOCS / "03_BUGS_CONHECIDOS.md": generate_bugs_md(),
        DOCS / "04_FLUXO_DE_PERSISTENCIA.md": generate_fluxo_md(),
        DOCS / "05_RELATORIO_ULTIMA_CORRECAO.md": generate_relatorio_ultima_correcao_md(),
    }

    for path, content in docs_to_write.items():
        path.write_text(content, encoding="utf-8")

    print("Documentação organizada com sucesso.")
    print(f"Pasta docs: {DOCS}")

if __name__ == "__main__":
    main()