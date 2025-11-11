# Projeto de Testes Automatizados com Cypress e JavaScript

## Objetivo
Este projeto foi desenvolvido nos modulos iniciais de cypress para iniciantes para demonstrar aos alunos do bootcamp QAzando como automatizar testes utilizando Cypress e JavaScript. O foco está em apresentar boas práticas de organização do código, uso de Custom Commands e estruturação de cenários de teste automatizados.

## Componentes do Projeto
- **Cypress**: Framework principal para automação de testes end-to-end.
- **Custom Commands**: Comandos personalizados para facilitar e reutilizar ações comuns nos testes.
- **Estrutura de Pastas**:
  - `cypress/e2e/`: Contém os arquivos de teste automatizado (`*.cy.js`).
  - `cypress/support/`: Inclui os Custom Commands e arquivos de suporte.
  - `cypress/fixtures/`: Dados de teste em formato JSON.
  - `cypress/screenshots/` e `cypress/downloads/`: Armazenam evidências dos testes.

## Guia de Instalação e Execução

1. **Pré-requisitos**
   - Node.js instalado
   - npm instalado

2. **Instalação das dependências**
   ```bash
   npm install
   ```

3. **Execução dos testes**
   - Para abrir o Cypress em modo interativo:
     ```bash
     npx cypress open
     ```
   - Para rodar os testes em modo headless:
     ```bash
     npx cypress run
     ```

## Documentação dos Testes

Os testes estão organizados na pasta `cypress/e2e/`:
- `asserts..cy.js`: Testes de asserções básicas.
- `desafio.cy.js`: Cenários de desafio propostos no bootcamp.
- `get_elements.cy.js`: Testes de obtenção de elementos.
- `get_text.cy.js`: Testes de obtenção de texto.
- `interacoes.cy.js`: Testes de interações com elementos da página.

## Custom Commands

Os Custom Commands estão definidos em:
- `cypress/support/home_pages_commands.js`: Comandos personalizados para a página inicial.
- `cypress/support/register_page_commands.js`: Comandos personalizados para a página de registro.

Eles são utilizados nos testes para abstrair ações repetitivas, como preenchimento de formulários, navegação e validações específicas.

## Contribuição
Sinta-se à vontade para sugerir melhorias ou adicionar novos cenários de teste!

---
Bootcamp QAzando - Automação de Testes com Cypress