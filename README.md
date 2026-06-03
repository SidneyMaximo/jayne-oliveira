# Site Nutri Jayne Oliveira

Este repositório contém a versão web do site da Nutri Jayne Oliveira, construído em React com Vite e Tailwind CSS.

---

## O que foi feito

- Criada a pasta `assets/images` para armazenar imagens locais do site.
- Atualizado o componente `src/components/About.tsx` para usar a imagem local `assets/images/jayne-2.png` na seção **Sobre**.
- Atualizado o componente `src/components/Philosophy.tsx` para usar a imagem local `assets/images/jayne-3.png` na seção **Visão Integral**.
- Adicionado um atalho de execução em `package.json`: `npm start` agora dispara `npm run dev`.
- Criada a tarefa VS Code em `.vscode/tasks.json` para iniciar o servidor Vite com um clique.

---

## Estrutura do projeto

- `index.html` – página HTML principal.
- `vite.config.ts` – configuração do Vite, alias `@` para a raiz do projeto e plugin Tailwind.
- `package.json` – scripts de execução e dependências.
- `src/` – código-fonte React.
  - `src/App.tsx` – layout principal e importação dos componentes.
  - `src/components/About.tsx` – seção Sobre com imagem local.
  - `src/components/Philosophy.tsx` – seção Visão Integral com imagem local.
  - `src/components/` – outros componentes da página.
- `assets/images/` – pasta de imagens locais usadas pelo site.

---

## Como usar

### Instalar dependências

```bash
npm install
```

### Rodar localmente

```bash
npm start
```

ou

```bash
npm run dev
```

### Acessar no navegador

```text
http://localhost:4000
```

---

## Notas importantes

- A seção `Sobre` agora carrega a imagem local `assets/images/jayne-2.png`.
- A seção `Visão Integral` agora carrega a imagem local `assets/images/jayne-3.png`.
- Caso deseje trocar as imagens, basta substituir os arquivos `jayne-2.png` e `jayne-3.png` dentro de `assets/images`.

---

## Dependências principais

- `react` / `react-dom`
- `vite`
- `@vitejs/plugin-react`
- `tailwindcss`
- `motion`
- `lucide-react`

---

## Observações

- Não é necessário configurar `GEMINI_API_KEY` para este site, pois não há uso de API de IA no código atual.
- Se o `npm install` já foi executado antes, só é preciso rodar `npm start` para visualizar o site localmente.
