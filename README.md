# 🏆 WarTracker - QG de Elite para Guerras de Clã

O **WarTracker** é o centro de comando definitivo para Líderes e Colíderes de clãs no **Clash Royale**. Projetado para maximizar o desempenho na Corrida Fluvial (Guerra de Clãs 2), o sistema oferece uma visão tática em tempo real e análise histórica profunda para garantir que seu clã sempre conquiste o primeiro lugar.

![Aesthetics Notice](https://img.shields.io/badge/Aesthetics-Premium-blueviolet?style=for-the-badge)
![Tech Stack](https://img.shields.io/badge/Stack-React%20%7C%20Node%20%7C%20PostgreSQL-blue?style=for-the-badge)

## ✨ Funcionalidades Principais

*   **📊 Monitoramento de Guerra em Tempo Real**: 
    *   Acompanhe o uso dos 4 decks diários de cada membro.
    *   Sincronização inteligente: Ataques pendentes exibidos apenas de **Quinta a Domingo** (ciclo oficial).
    *   Status automáticos: `Pendente`, `Em Batalha` ou `Concluído`.

*   **📈 Histórico de Guerras (Filtrado)**:
    *   Tabela de desempenho das últimas 10 semanas.
    *   **Filtro de Elite**: Exibe apenas os 50 membros que estão atualmente no clã, facilitando a tomada de decisão.
    *   Cálculo automático de rankings, medalhas totais e médias semanais.

*   **⚙️ Configurações do QG**:
    *   **Meta de Medalhas Dinâmica**: Ajuste o mínimo esperado (ex: 2400) e veja a tabela de histórico destacar em vermelho quem não atingiu o objetivo.
    *   **Agenda de Guerra**: Visualização clara do status atual (Treino vs. Guerra).

*   **📱 Responsividade & Mobilidade**:
    *   Interface totalmente otimizada para celulares com colunas fixas para navegação em tabelas grandes.
    *   **Gerar Relatório**: Gere um PDF limpo e formatado para impressão com um clique.
    *   **Enviar Top 5**: Compartilhe o ranking dos melhores guerreiros diretamente no WhatsApp com formatação automática.

## 🛠️ Tecnologia & Performance

*   **Frontend**: 
    *   [React](https://reactjs.org/) + [Vite](https://vitejs.dev/) para velocidade extrema.
    *   [Tailwind CSS](https://tailwindcss.com/) com design premium e animações suaves.
    *   [Lucide Icons](https://lucide.dev/) para uma interface intuitiva.
*   **Backend**: 
    *   [Node.js](https://nodejs.org/) & [Express](https://expressjs.com/).
    *   [PostgreSQL](https://www.postgresql.org/) para persistência de dados e histórico de longo prazo.
    *   Integração direta com a **Supercell API**.
*   **Segurança**: 
    *   Autenticação via **JWT** (JSON Web Tokens).
    *   Proteção de rotas e gestão de preferências de usuário.

## 📁 Estrutura do Repositório

*   `frontend/`: Interface visual e lógica do cliente.
*   `backend/`: API REST, controladores de clã, modelos de dados e utilitários da API Royale.

## 🚀 Como Iniciar

### Variáveis de Ambiente (`backend/.env`)
Crie um arquivo `.env` na pasta backend com:
```env
PORT=5000
DATABASE_URL=postgres://usuario:senha@localhost:5432/nome_do_banco
JWT_SECRET=seu_segredo_jwt
CLASH_ROYALE_API_KEY=sua_chave_da_supercell_aqui
CLASH_ROYALE_BASE_URL=https://api.clashroyale.com/v1
CLAN_TAG="#SUA_TAG_AQUI"
```

### Execução
1. Instale as dependências: `npm install` em ambas as pastas (`frontend` e `backend`).
2. Backend: `cd backend && npm run dev`
3. Frontend: `cd frontend && npm run dev`

---
**Aviso Legal**: Este projeto é uma ferramenta de fã e não é afiliado à Supercell. Os ativos do jogo pertencem aos seus respectivos donos.
