# Spec Architect

**The Visual Control Plane for Spec-Driven Development (SDD)**

> *"A inteligência artificial não vai substituir os programadores; ela vai substituir quem só sabe digitar código. Na era do Vibe Coding, o verdadeiro superpoder humano não é debugar linhas que você nem escreveu, é dominar o Desenvolvimento Orientado a Especificações para ditar as regras do jogo."* 🧠👑

---

## ⚡ O que o Spec-Driven Development RESOLVE de verdade?

Se alguém te perguntar por que essa metodologia importa, o argumento mata-mata é o que ela resolve na prática:

1. **Resolve o "Loop do Prompt Infinito":**  
   Sabe quando você pede algo para a IA, ela conserta uma coisa, quebra outra e você passa horas colando código sem entender nada? O Desenvolvimento Orientado a Especificações quebra isso. Você cria um arquivo de especificação (`spec`) estruturado antes de qualquer linha de código. A IA lê o plano completo e implementa com precisão cirúrgica.

2. **Resolve a "Amnésia" e Alucinação da IA:**  
   Modelos de linguagem perdem o contexto facilmente em chats longos. A especificação funciona como uma "âncora de realidade" e fonte única da verdade no Git. Se a IA tentar inventar uma lógica maluca, ela é barrada pelo contrato técnico definido na especificação.

3. **Resolve o abismo entre Ideia e Engenharia:**  
   Escrever o código virou a parte barata da tecnologia. O Desenvolvimento Orientado a Especificações força a sua cognição a pensar nos casos de borda, regras de negócio e integrações antes de gastar token. O humano arquiteta com visão estratégica; a máquina executa o trabalho braçal.

---

## 🏗️ Como Funciona o Spec Architect

O Spec Architect é uma aplicação desktop nativa construída com **Tauri v2 + Rust Core** para orquestrar o ciclo de vida completo de SDD:

- **01. Propor & Explorar:** Documente o impacto e design arquitetural em `proposal.md` e `design.md`.
- **02. Especificação Viva:** Mantenha requisitos e invariantes versionadas no Git em `specs/`.
- **03. Handoff de Agentes:** Dispare tarefas atômicas para **Claude Code, Cursor, Codex, Gemini CLI, Kiro e Antigravity**.
- **04. Auditoria:** Verifique testes de invariantes e validação de conformidade antes do commit.

### 🛡️ Engenharia & Zero Dependências

- **Runtime Embutido em Sandbox:** Não requer Node, npm ou ferramentas externas instaladas na máquina do usuário.
- **Ultra-leve:** Consome menos de 90MB de RAM.
- **100% Local-First:** Seus dados e especificações residem no seu repositório local.

---

## 📥 Download

- **Linux:** [.deb](https://github.com/MarceloFullStack/spec-architect-app/releases/download/v0.1.0/spec-architect_0.1.0_amd64.deb), [.AppImage](https://github.com/MarceloFullStack/spec-architect-app/releases/download/v0.1.0/spec-architect_0.1.0_amd64.AppImage)
- **Windows:** Em breve via pipeline CI/CD

🌐 **Site Oficial:** [https://marcelofullstack.github.io/spec-architect-app/](https://marcelofullstack.github.io/spec-architect-app/)

---

**Autor & Criador:** Marcelo Guimarães  
*Projeto de código aberto sob licença comunitária.*
