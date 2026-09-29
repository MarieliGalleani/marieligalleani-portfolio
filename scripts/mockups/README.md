# Mockups — capas, telas e vídeos

Ferramentas usadas para gerar os mockups reais dos cases (`src/assets/work/` e `public/media/`).

Instale as dependências só quando for usar (não fazem parte do build do site):

```bash
npm i -D playwright sharp ffmpeg-static
```

1. **Screenshots** — rode o app do projeto e capture as telas com Playwright
   (desktop 1440×900 em `deviceScaleFactor: 2`; celular 390×844 em 3x).
2. **Composições estáticas** — descreva janelas/celulares em um JSON
   (veja `compositions.example.json`) e rode:
   ```bash
   node scripts/mockups/render.mjs scripts/mockups/compositions.json
   ```
   Saída em `scripts/mockups/out/*.jpg` (2x). Copie para `src/assets/work/<case>/`.
3. **Vídeos** — grave a interação com `rec.mjs` (`startRec`, `glide`, `smoothScroll`, `addCursor`)
   e coloque dentro da moldura:
   ```bash
   node scripts/mockups/frame.mjs meu-case out/rec/meu-case.mp4 \
     '{"theme":{"bg":"#0f0f14","chrome":"light"},"items":[{"type":"win","x":120,"y":85,"w":1360,"src":"HOLE","url":"Meu produto"}]}'
   ```
   Copie `out/meu-case.mp4`, `.webm` e `-poster.jpg` para `public/media/` e referencie no
   frontmatter do case (`video: { mp4, webm, poster, label }`).

Use sempre dados fictícios nas telas (nomes, e-mails, telefones).
