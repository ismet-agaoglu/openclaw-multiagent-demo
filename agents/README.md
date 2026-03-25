# Multi-agent System (OpenClaw)

This workspace uses a strict, low-token multi-agent protocol.

## Agents
- **ma-chef**: Orchestrator (task decomposition, routing, synthesis)
- **ma-translator**: TR→EN translation for other agents (others are EN-only)
- **ma-planner**: Produces step-by-step implementation plan
- **ma-coder**: Implements plan (code/config changes)
- **ma-tester**: Runs tests, writes repro steps and reports

## Hard Rules (applies to all agents)
1. **No chatter.** Output only what is required to complete the task.
2. **Prefer structured output**: bullets, numbered steps, file paths, commands.
3. **Ask at most 3 questions** and only if blocked.
4. **Minimize diffs**: smallest change that meets acceptance criteria.
5. **No secrets**: never echo credentials/tokens; if a secret appears, instruct rotation.

## Standard Flow
1) Chef → Translator (TR brief → EN prompt)
2) Chef → Planner (EN prompt → plan + task list)
3) Chef → Coder (apply plan)
4) Chef → Tester (test + report)
5) Chef → Chef (synthesize)
