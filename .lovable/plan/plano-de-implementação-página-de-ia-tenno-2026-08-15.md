# Plano de Implementação: Página de IA (Tenno.)

Criar uma página completa para a solução de IA, com design futurista e institucional, incluindo uma interface de IA conversacional (humanóide) e uma seção de IA embarcada.

## Alterações Visuais e Design
- **Estilo Futurista**: Uso de gradientes escuros, efeitos de brilho (glow), tipografia moderna e elementos translúcidos (glassmorphism).
- **Branding**: Manter a fonte Questrial para o logo e a cor de destaque `#ff0a54`.
- **Componentes**: 
  - Hero com estética "dark mode" futurista.
  - Interface de chat simulada com avatar humanóide.
  - Seção detalhada sobre "IA Embarcada".

## Detalhes Técnicos
- **Atualização de Dados**: Modificar `src/lib/solutions.ts` para incluir conteúdos ricos para a página de IA.
- **Nova Página**: Criar `src/routes/solucoes.ia.tsx` (ou ajustar o componente dinâmico) para renderizar uma interface customizada para o slug "ia".
- **Componentes**:
  - `ConversationalAI`: Componente de chat interativo.
  - `EmbeddedAI`: Seção técnica com visual futurista.
- **Tailwind CSS**: Adicionar utilitários para animações futuristas e gradientes complexos em `src/styles.css`.

## Etapas de Trabalho
1. **Configuração de Estilos**: Adicionar variáveis e animações futuristas ao global CSS.
2. **Refatoração de Dados**: Atualizar o objeto `IA` em `src/lib/solutions.ts`.
3. **Desenvolvimento da UI**:
   - Criar o layout futurista para a rota `/solucoes/ia`.
   - Implementar a seção de IA Conversacional com o avatar humanoid.
   - Implementar a seção de IA Embarcada.
4. **Integração**: Garantir que a navegação e o cabeçalho funcionem perfeitamente com o novo design.
