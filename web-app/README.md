# Design Trends (DITR)

**Design Trends** é uma aplicação web moderna que cura e destaca as principais tendências de design da semana, extraídas e analisadas automaticamente de comunidades do Reddit.

## 🚀 Funcionalidades

- **Curadoria Automatizada**: Coleta semanal de discussões em alta no Reddit.
- **Resumos com IA**: Utiliza inteligência artificial (Gemini) para resumir tendências e explicar "Por que isso importa".
- **Categorias Focadas**:
  - 🎨 **UI/UX**: Padrões de interface e comportamento do usuário.
  - 🖌️ **Design Gráfico**: Estética, tipografia e cor.
  - 🛠️ **Figma**: Workflows e domínio técnico.
  - ⚙️ **Design Industrial**: Modelagem 3D, prototipagem e manufatura.
- **Home Inteligente**:
  - **Destaques**: Exibe automaticamente o Top 1 de cada categoria.
  - **Últimas Curadorias**: Lista cronológica dos demais artigos relevantes (limite de 8).
- **Interface Premium**:
  - **Modo Escuro**: Suporte nativo e automático.
  - **Design Responsivo**: Otimizado para desktop, tablets e mobile.
  - **Animações Fluidas**: Micro-interações e transições suaves.
- **Arquitetura Robusta**:
  - **Supabase**: Backend-as-a-Service para dados em tempo real.
  - **Tratamento de Erros**: Feedback visual amigável para problemas de conexão.
  - **Deploy Estático**: Compatível com Vercel, Netlify e GitHub Pages (`HashRouter`).

## 🛠️ Tech Stack

- **Frontend**: [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Estilização**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Ícones**: [Lucide React](https://lucide.dev/) + SVG Personalizados (Clarity)
- **Backend / Dados**: [Supabase](https://supabase.com/)
- **Roteamento**: [React Router](https://reactrouter.com/) (HashRouter)

## 📦 Instalação e Execução Local

### Pré-requisitos
- Node.js (v18+)
- Gerenciador de pacotes (npm, yarn, pnpm)
- Conta no Supabase (para as variáveis de ambiente)

### Passos

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/LuDittri/design-trends.git
   cd design-trends/web-app
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**
   Crie um arquivo `.env` na raiz do diretório `web-app` e adicione suas credenciais do Supabase:
   ```env
   VITE_SUPABASE_URL=sua_url_do_supabase
   VITE_SUPABASE_ANON_KEY=sua_chave_anonima_do_supabase
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   Acesse a aplicação em `http://localhost:5173`.

## 🚀 Deploy

O projeto está configurado para fácil deploy em plataformas de hospedagem estática.

### Vercel / Netlify

1. Importe o repositório.
2. Defina o **Root Directory** como `web-app`.
3. Adicione as **Variáveis de Ambiente** (`VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`) no painel de configurações do projeto.
4. O comando de build padrão é `npm run build`.
5. O diretório de saída é `dist`.

> **Nota:** O projeto utiliza `HashRouter` e `base: './'` no `vite.config.ts` para garantir compatibilidade total com subdiretórios e roteamento no lado do cliente em hospedagens estáticas.

## 📂 Estrutura do Projeto

```
web-app/
├── public/              # Assets estáticos
├── src/
│   ├── components/      # Componentes reutilizáveis (Header, TrendCard, Icons...)
│   ├── context/         # Gerenciamento de estado (Theme, Data, ReadingMode)
│   ├── lib/             # Utilitários e configurações (supabase.ts, data.ts)
│   ├── pages/           # Componentes de página (Home, Category)
│   ├── App.tsx          # Componente raiz e roteamento
│   └── main.tsx         # Ponto de entrada
├── .env                 # Variáveis de ambiente (não commitado)
├── index.html           # Template HTML principal
├── package.json         # Dependências e scripts
├── tailwind.config.js   # Configuração do Tailwind (v4 via CSS)
└── vite.config.ts       # Configuração do Vite
```

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## 📄 Licença

Este projeto está sob a licença [MIT](LICENSE).
