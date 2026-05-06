# EasyTags Brand Resource Center

Central estática de recursos de marca da EasyTags, em português, pronta para publicação no GitHub Pages.

## Estrutura

- `index.html`
- `css/styles.css`
- `js/main.js`
- `assets/logo/`
- `assets/mockups/`
- `assets/social/`
- `assets/motion/`
- `tokens/colors.css`
- `tokens/colors.json`
- `docs/manual.md`
- `AGENTS.md`

## Rodando localmente

Opção 1 (Python 3):

```bash
python3 -m http.server 8080
```

Acesse: [http://localhost:8080](http://localhost:8080)

Opção 2 (Node, se tiver `serve`):

```bash
npx serve .
```

## Deploy no GitHub Pages

1. Suba o projeto para um repositório no GitHub.
2. Vá em `Settings` > `Pages`.
3. Em **Build and deployment**, selecione:
- Source: `Deploy from a branch`
- Branch: `main` (ou `master`), pasta `/root`
4. Salve e aguarde a URL pública ser gerada.

## Notas

- O site é 100% estático (HTML + CSS + JS vanilla).
- Para exibir mockups e criativos do Instagram, adicione arquivos de imagem nas pastas:
- `assets/mockups/`
- `assets/social/`
