# Gaps

## Відсутні дані

- `basics.phone` і Telegram відсутні (основний контакт - email). Сайт у розробці, додати після запуску. Location: "Remote" (без міста/країни).
- Жодної метрики (користувачі, %, економія, розмір команди крім SoftServe) у всіх 9 ролях. Відкладено, власник подумає.
- Секція Skills з LinkedIn відсутня в експорті. Навички зібрані лише з tech stack і описів досвіду.
- Languages: підтверджено власником (English C1, Ukrainian native, обидві вільно).
- Projects як окрема секція відсутня. Додано 3 проєкти, витягнуті з описів SoftServe і EPAM, без url і дат.
- Education: немає `field` (спеціальності). Повна назва підтверджена власником. Спеціальність не пов'язана з CS, у резюме не вказується. Дати лише роками (2008, 2013).
- `employment_type` не вказано для Pipedrive і Brightgrove.
- Pipedrive: немає розділення обов'язків між двома позиціями.
- Brightgrove, Pipedrive, SoftServe, EPAM: немає `summary` про компанію/роль.
- G5 Entertainment: немає технологій (список `technologies` порожній).
- Certifications: немає url для перевірки сертифіката.
- awards_publications_volunteering, interests: порожні, у джерелі нічого немає.

## Слабкі місця

Level Access
- "significantly accelerating accessibility analysis and UI delivery" - наскільки швидше (%, години/дні на аудит)? Скільки клієнтів/сайтів/сторінок?
- "design robust web crawlers" - який масштаб (кількість сайтів/сторінок), яка технологія, що саме "multi-platform"?
- "Build accessible front-end interfaces" - які саме продукти/інтерфейси, на якому стеку (Angular?)?
- Які саме AI-агенти і workflows ви побудували, який результат?

Docler
- "high-impact UI features" - які саме фічі, який ефект (конверсія, retention, час завантаження)?
- "critical production issues" - які інциденти, скільки, який вплив і як виправили?
- "major refactoring and tech-debt reduction" - що рефакторили, який результат (розмір бандла, швидкість білду, кількість багів)?
- "ML-based tooling" - що саме за тулінг? Автоматичний аналіз PR: скільки PR/команд, скільки часу економить?
- "competitor analysis" - які висновки/рішення з нього випливли?
- Розмір команд, скільки команд "unblocked".

SoftServe
- Скільки було проєктів/клієнтів? Результат для двох проєктів (SEO: зростання трафіку, швидкість)?
- Який тип клієнтів і домен для issue-tracking SPA?

Microsoft
- "Reliable cross-platform solutions" - які платформи, який масштаб користувачів, яка метрика надійності?
- Яка була ваша конкретна частка в "core calling component"?

Pipedrive
- "Data migration module" - що мігрували, який обсяг?
- "Front-end optimization" - що оптимізували, на скільки?
- "Organization-level technical decisions" - які саме рішення?

Brightgrove
- Результат редизайну в SPA (швидкість, кількість багів, покриття тестами)?
- Покриття тестами, які інструменти?
- Що за застосунок на Angular 2 і Dart, скільки користувачів?

EPAM
- Які саме e-commerce проєкти (домен, масштаб)?
- Скільки людей найняли/оцінили? Які метрики перформансу?
- Indoor navigation: чи було у використанні, який результат?

G5 Entertainment
- "Faster testing iterations and shorter build validation cycle" - на скільки (%, години)?
- Які ігри/платформи, інструменти тестування?

## Сумніви

- **Перекриття дат:** Level Access (2025-01 - present) і Docler (2020-05 - 2025-09) перетинаються на 9 місяців. Підтверджено: це не помилка.
- **Summary:** "Currently driving organization-wide AI adoption" - підтверджено: і в Level Access, і в Docler. Також у тексті є опечатки: "I build integrate agentic workflows" (пропущено слово) - залишено без змін.
- **Summary:** Byborg = Docler (підтверджено). Summary залишено без змін.
- **Summary vs. дати:** "13+ years (since 2013)" узгоджується з G5 (2013-11), але перша роль - QA, а не розробка.
- **SoftServe:** з bullet прибрано "at two companies" за рішенням власника. У source (абзац) цей уривок лишається.
- **Pipedrive:** дві позиції в одному "Responsibilities" блоці. Усі highlights віднесені до Senior Full Stack (2018-03 - 2018-09), для Senior Front End порожні. Підтверджено.
- **Pipedrive:** "led the refactoring", "Driving organization-level technical decisions" збережено, але чи це було на рівні всієї компанії?
- **Brightgrove:** "AWD techniques" збережено як у джерелі. Це "RWD" (responsive web design) чи Adaptive Web Design?
- **Brightgrove:** Redux і Angular 2 додані до technologies з тексту описів, а не лише з заголовка стеку. Те саме для Ruby on Rails, MobX, SSR у SoftServe та iBeacons в EPAM.
- **Docler:** "Led end-to-end delivery" збережено як у джерелі.
- **Docler:** "Luxembourg · Remote" розділено на `location: Luxembourg` і `work_mode: Remote`.
- **Додаткові поля поза схемою:** `work_mode` у work, `credential_id` у certifications, секція `recommendations`. Залишені за рішенням власника.
- **Дата народження** (May 22) є в експорті, але не включена в master. Не потрібна для резюме.
- **Skills:** категорії складені мною; "Soft skills" і "Testing" виведені з описів досвіду. Перевірити, чи нічого зайвого.
- Education: чи "Master's Degree" 2008-2013 - повний термін, спеціальність невідома.
- AWS сертифікат залишено, статус "expired" не вказується (поле `expires` прибрано).

## Для перекладу

- Весь джерельний текст англійською, нічого перекладати не потрібно для міжнародного ринку.
- Якщо потрібна українська версія: усі секції (summary, highlights, recommendations).
- Назва університету "O.M.Beketov NUUE" варто розгорнути англійською повною назвою (потрібне підтвердження).

## Метрики: статус

- Docler: "thousands of users" (уточнити: користувачі чи одночасні глядачі), bundle size і page load speed покращено без цифр, ML-тулінг у 4 з 8 команд. Додано.
- Не додано: відповідь "3" на питання про команди/людей, яких розблоковано чи менторено (потрібне уточнення, що саме 3).
- Відсутні: Level Access (час аудиту, обсяг краулерів), Microsoft, Pipedrive.
- Ефект UI-фічі не названо, нічого не додано.
