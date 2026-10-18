# Metrics draft

Шаблони bullets з плейсхолдерами. Підставляти лише реальні, перевірені числа. Якщо числа немає, лишити поточний bullet без метрики.

## Docler (Staff Frontend Engineer)

Поточний -> Шаблон

- "Architected and delivered complex, business-critical front-end solutions for high-scale web and streaming platforms."
  -> "Architected and delivered front-end solutions for streaming platforms serving [X] users / [X] concurrent viewers."
- "Led end-to-end delivery of high-impact UI features..."
  -> "Led end-to-end delivery of [N] UI features across [N] teams, [improving metric: conversion / retention / time-to-play] by [X%]."
- "Conducted deep debugging and root-cause analysis to fix critical production issues; led major refactoring and tech-debt reduction initiatives."
  -> "Resolved [N] critical production issues, [reducing MTTR / repeat incidents] by [X%]; led refactoring that [reduced bundle size by X% / build time by X min / removed N legacy modules]."
- "Developed ML-based tooling and integrated AI-assisted workflows..."
  -> "Built ML-based PR analysis tooling used by [N] engineers / [N] teams, covering [N] PRs and saving about [X] hours of review per [week/sprint]."
- "Conducted in-depth competitor analysis..."
  -> "Delivered [N] competitor analyses that led to [decision / feature adopted]."

## Level Access (Senior Full Stack Developer)

- "Design robust web crawlers..."
  -> "Designed web crawlers auditing [N] sites / [N] pages per [day/run] across [N] platforms."
- "Replace manual audit processes with intelligent event-driven pipelines, significantly accelerating..."
  -> "Replaced manual audit processes with event-driven AI pipelines, reducing analysis time from [X] to [Y] and automating [X%] of audits for [N] clients."
- "Integrate automated AI workflows..."
  -> "Integrated AI workflows (AWS Bedrock, OpenAI) that [auto-detect / classify] [X%] of [issue type]."

## Other roles (one metric each, if known)

- SoftServe: [N] projects delivered, SEO traffic [+X%] / page speed [X -> Y].
- Microsoft: component used by [N] products / [N] users.
- Pipedrive: data migration of [N] records; [N] engineers mentored.
- EPAM: [N] engineers hired/evaluated; [N] SKUs / [N] users on e-commerce projects.

## Where to look

- Datadog / Sentry: incidents, MTTR, error rates.
- Bundle analyzer, CI logs, Lighthouse: bundle size, build time, Core Web Vitals.
- GitHub / Jira: PR count, features shipped, team size.
- Internal dashboards: crawler volume, audit time, event throughput.
