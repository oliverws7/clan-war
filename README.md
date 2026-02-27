

# WarTracker - Gestão de Guerras de Clã

O WarTracker é uma solução completa e definitiva criada especificamente para Líderes e Colíderes de clãs no Clash Royale. O seu objetivo é facilitar a pesada administração das Guerras de Clãs (Corrida Fluvial), permitindo monitorar a atividade diária dos membros, cobrar participações pendentes e otimizar o desempenho geral do clã para alcançar as primeiras posições.

## 🚀 Funcionalidades

* **📊 Monitorização de Ataques**: Acompanhe em tempo real quem já utilizou os seus 4 baralhos diários na Guerra e saiba exatamente quem ainda tem batalhas pendentes antes do fim do dia.
* **👥 Gestão de Membros**: Identifique facilmente membros inativos ou que não contribuem o suficiente para a Guerra. Acompanhe a consistência de cada jogador para tomar decisões justas sobre promoções ou expulsões.
* **📈 Dados Históricos**: Analise o histórico de ganho de medalhas e tendências de participação ao longo das semanas para entender a evolução do seu clã.
* **🤖 Integração com Discord**: Facilite a comunicação da liderança enviando alertas e notificações diretamente no seu servidor do Discord para lembrar os membros de realizarem os seus ataques pendentes.

## 🛠️ Tecnologias Utilizadas

O projeto é dividido em duas partes principais, utilizando tecnologias modernas e eficientes:

* **Frontend (Interface do Utilizador)**:
* **React & Vite**: Para uma interface de utilizador extremamente rápida, responsiva e de carregamento instantâneo.
* **Tailwind CSS**: Framework de estilização para um design limpo, moderno e fácil de manter.
* **Lucide React**: Biblioteca de ícones elegantes.


* **Backend (Servidor e Regras de Negócio)**:
* **Node.js & Express**: Responsáveis por processar as requisições, comunicar-se com a API oficial do Clash Royale e gerir os dados do sistema.
* **PostgreSQL (via pgAdmin)**: Banco de dados relacional robusto utilizado para armazenar os utilizadores, configurações e o histórico de longo prazo dos clãs (gerido através da interface do pgAdmin).


* **Autenticação**:
* **JWT (JSON Web Tokens)**: Sistema de login seguro para garantir que apenas pessoas autorizadas gerem os dados do clã.



## 📁 Estrutura do Projeto

O repositório está organizado de forma clara, separando a interface gráfica da lógica do servidor:

* `frontend/`: Contém todo o código visual da aplicação React.
* `backend/`: Contém a API em Node.js, rotas, controladores, a ligação ao PostgreSQL e a lógica de autenticação.

## 🚦 Como Correr o Projeto Localmente

Siga os passos abaixo para descarregar e executar o WarTracker no seu próprio computador.

### Pré-requisitos

Certifique-se de ter os seguintes programas instalados na sua máquina:

* **Node.js** (versão 18 ou superior)
* **npm** (gestor de pacotes, geralmente já vem com o Node.js)
* **PostgreSQL** e **pgAdmin** a correr localmente.

### Instalação

1. Clone (descarregue) este repositório para o seu computador.
2. **Instale as dependências do Frontend**:
Navegue até à pasta do frontend e instale os pacotes necessários:
```bash
cd frontend
npm install

```


3. **Instale as dependências do Backend**:
Abra um novo terminal, navegue até à pasta do backend e instale os pacotes:
```bash
cd backend
npm install

```


4. **Configuração de Variáveis de Ambiente**:
Crie um ficheiro `.env` na pasta `backend/` com as suas credenciais (ex: chave da API oficial do Clash Royale, segredo do JWT, credenciais de ligação ao banco de dados PostgreSQL e porta do servidor).

### Iniciando o Sistema

Para ver o projeto a funcionar, precisará de correr o Frontend e o Backend simultaneamente em terminais separados.

* **Para iniciar o Frontend**:
Dentro da pasta `frontend/`, execute:
```bash
npm run dev

```


* **Para iniciar o Backend**:
Dentro da pasta `backend/`, execute:
```bash
npm run dev

```



Após iniciar ambos, o terminal mostrará os links locais (geralmente `http://localhost:5173` para o frontend) para aceder ao sistema pelo navegador.

## 📄 Aviso Legal / Licença

Este projeto é uma ferramenta independente e não possui afiliação, patrocínio ou aprovação da Supercell. Os dados do jogo são utilizados sob os termos da API pública da Supercell. © 2026 WarTracker.
