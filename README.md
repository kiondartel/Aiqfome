## Teste técnico
This is my app \o/ 

## Descrição 

 O teste foi desenvolvido em React Native com Expo, que permite listar produtos, marcar/desmarcar favoritos, visualizar somente favoritos e armazenar dados localmente. Foi implementada também uma notificação diária de resumo dos itens favoritados utilizando Expo Notifications.

## Tech Stack
* Framework: Expo SDK 52

* Linguagem: TypeScript

* Navegação: react-navigation

* Armazenamento: async-storage

* Animações: Lottie (lottie-react-native)

* Notificações: expo-notifications

* UI: React Native core components (+ StyleSheet)

## Como rodar
* Clone o repositório
* Instale as dependências: `npm install`
* Inicie o app com:  `expo start`
* Execute no dispositivo/emulador: `iOS: i` / `Android: a`


## Estrutura de pastas
* assets -> Arquivos estáticos como imagens e icones
* components -> Componentes reutilizáveis e customizados
* contexts -> Contextos da aplicação, utilizado nesse projeto para gerenciar o Produtos
* routes -> configuração de navegação (stack, tabs)
* hooks -> hooks customizados
* screen -> principais telas visuais do app
* services -> comunicação externa / regras de negócio
* theme ->  paleta de cores, estilos globais
* types ->  definições TypeScript compartilhadas
* utils ->  funções utilitárias independentes

 ## FAQ

### Por que usar **Expo** neste projeto?
- **Rapidez de setup**: Expo elimina grande parte da configuração nativa, permitindo focar na lógica e UI em um prazo curto—ideal para um teste técnico.  
- **Hot Reload & Expo Go**: Ciclo de desenvolvimento ágil, com atualização instantânea no dispositivo real ou emulador.  
- **SDK unificado**: Geolocalização, câmera, notificações e outros módulos já vêm integrados, facilitando mostrar domínio de APIs mobile sem “reinventar a roda”.

### Por que **expo-notifications** em vez de FCM nativo?
- **Integração pronta**: O Expo–Notifications abstrai detalhes de plataforma (Android/iOS) e oferece um agendamento simples via JavaScript.  
- **Sem configuração extra**: Para um desafio, evita mexer em código nativo ou lidar com chaves do Firebase, reduzindo barreiras de entrega.  

### Por que **TypeScript + Context API**?
- **Type Safety**: Em apps de médio porte, o TypeScript ajuda a capturar erros de tipo em tempo de desenvolvimento, garantindo qualidade de código e menos bugs.  
- **Legibilidade e manutenção**: Interfaces claras (`Product`, `ContextType`, etc.) tornam fácil para outro dev entender contratos e tsconfig.  
- **Context API**:  
  - Adequado para o escopo do app (estado de produtos/favoritos).  
  - Mais leve que soluções de grande porte (Redux/MobX) quando não há necessidade de middlewares ou fluxos complexos.  
  - Mantém o código simples e direto, refletindo boas práticas de hooks e componentização.

### Como os dados dos produtos são carregados?
Os dados estão **mockados localmente** em um arquivo JSON. O serviço responsável (`services/products.ts`) importa esse mock e retorna os produtos diretamente, garantindo independência de conexão e previsibilidade nos testes.

### Como é feita a persistência dos favoritos?
Foi usado **AsyncStorage** com a chave `@myapp:favorites`. Ao marcar/desmarcar, atualizamos o storage e o Context se encarrega de manter tudo sincronizado.


### Como funcionam as notificações push?
1. **Permissão**: `useNotifications` solicita e registra o token.  
2. **Agendamento**: `scheduleDailySummary` agenda um resumo diário via trigger de calendário.  

### Por que usar apenas **StyleSheet** em vez de uma biblioteca de UI?
- **Desafio técnico**: Demonstra habilidades de estilização manual e entendimento dos fundamentos do React Native.  
- **Performance**: Em muitos casos, o StyleSheet nativo gera melhores otimizações do que bibliotecas que abstraem estilos dinamicamente.


## Autor

Gabriel Lucas Severino

 
 
