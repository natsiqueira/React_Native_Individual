🎧 Spotify Clone (React Native)

Este projeto é uma implementação em React Native de uma interface simplificada do aplicativo Spotify, focado na prática de conceitos essenciais de desenvolvimento móvel, como navegação por abas (Tab Navigator), navegação empilhada (Stack Navigator), gerenciamento de componentes reutilizáveis e estilização nativa.

✨ Funcionalidades Implementadas

Autenticação Simples: Tela de login para transição para a tela principal (simulação).

Navegação por Abas: Implementação de um BottomTabNavigator com as rotas:

Início (Home)

Buscar (Search)

Sua Biblioteca (Library)

Componente Reutilizável: Criação e uso do componente Card para exibir playlists e álbuns na tela Home.

Estilização Nativa: Uso de StyleSheet para garantir performance e organização dos estilos.

Gestão de Assets: Inserção de imagens locais (require) para as capas dos álbuns e playlists.

Estrutura Modular: Organização do código em pastas (src/pages, src/components, src/routers, src/assets).

🛠️ Tecnologias Utilizadas

React Native

TypeScript (Para tipagem e segurança de código)

Expo (Para desenvolvimento rápido e build)

@react-navigation/native

@react-navigation/native-stack

@react-navigation/bottom-tabs

@expo/vector-icons (Para os ícones do menu inferior e cabeçalho)

🚀 Como Executar o Projeto

Siga os passos abaixo para configurar e rodar o projeto em seu ambiente de desenvolvimento.

Pré-requisitos

Você precisa ter o Node.js e o Expo CLI instalados globalmente.

# Instalar ou verificar a instalação do Expo CLI
npm install -g expo-cli


1. Clonar o Repositório

No seu terminal, clone o repositório:

git clone [https://github.com/natsiqueira/React_Native_Individual.git](https://github.com/natsiqueira/React_Native_Individual.git)
cd React_Native_Individual


2. Instalar as Dependências

Instale todas as bibliotecas necessárias listadas no package.json:

npm install
# ou, se preferir usar Yarn
yarn install


3. Iniciar o Servidor de Desenvolvimento

Para iniciar o Metro Bundler e rodar o projeto, use o comando:

npx expo start --clear


O Expo irá gerar um QR Code no seu terminal. Você pode escanear este código com o aplicativo Expo Go em seu celular (Android ou iOS) para ver o projeto em tempo real.

4. Estrutura de Pastas

A estrutura do projeto está organizada para separar responsabilidades:

.
├── src/
│   ├── assets/           # Imagens, fontes e outros recursos
│   │   ├── images/       # Onde ficam as capas dos álbuns (.jpg, .png)
│   ├── components/       # Componentes reutilizáveis (ex: Card)
│   ├── pages/            # Telas do aplicativo (Login, Home, Search, Library)
│   ├── routers/          # Arquivos de navegação (TabRoutes e StackRoutes)
├── .gitignore
├── App.tsx               # Ponto de entrada (apenas carrega o Router principal)
└── package.json


📄 Licença

Este projeto é de código aberto e está sob a licença [MIT / Sua Licença Escolhida].
