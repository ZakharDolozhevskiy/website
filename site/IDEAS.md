# Ідеї для сайту

Усі ідеї мають зберігати доступність (WCAG AA) і поважати `prefers-reduced-motion`.

## 1. Тема за часом доби (пріоритет)

Акцент і діагональний градієнт фону змінюються за локальним часом відвідувача, як у динамічних шпалерах Solar Gradients.

- Фази: світанок, день, захід, ніч. Між фазами плавна інтерполяція кольору.
- JS обчислює відтінок за `new Date().getHours()` і пише в `--accent` та змінні градієнта.
- Акцент має лишатися світлим (контраст щонайменше 4.5:1 з `--bg`), змінюються відтінок і градієнт фону.
- Тема оновлюється раз на хвилину. Додати ручний режим, щоб вимкнути авто-тему.

## 2. Перемикач акцентного кольору

Кілька кружечків-свотчів у лівій колонці. Вибір зберігається в `localStorage` і перебиває авто-тему.

## 3. Світла й темна тема

`prefers-color-scheme` за замовчуванням і ручний перемикач. Потрібен окремий набір `--bg`, `--text`, `--text-muted` з перевіреним контрастом.

## 4. Поява карток при скролі

`IntersectionObserver` додає клас з легким зсувом і fade. Вимикається при `prefers-reduced-motion`.

## 5. Анімований лічильник у About

Лічильник «13+ years» і компактний timeline кар'єри (2013 - сьогодні).

## 6. Command palette (Cmd+K)

Навігація по секціях, копіювання email, відкриття соцмереж. Має керуватись клавіатурою і мати правильні ARIA-ролі (`dialog`, `combobox`).

## 7. Кнопка Download CV

PDF із наявних `theme-1` / `theme-2` файлів. Додати PDF у `site/` і посилання з атрибутом `download`.

## 8. Перемикач мови EN/UA

Окремі `index.html` та `uk/index.html` з атрибутом `lang`, плюс `hreflang` у `<head>`.

---

# Деплой на GitHub Pages

Папка `cv` зараз не є git-репозиторієм. Сайт лежить у `site/`, статичний, збірка не потрібна.

## Варіант A: GitHub Actions (рекомендований)

Публікує лише папку `site/`, решта репозиторію (`data/`, `theme-*`, `photo.jpg` на 5.6 МБ) не потрапляє на сайт.

1. Створіть репозиторій на GitHub, наприклад `cv`. Для адреси `https://<username>.github.io/` назвіть його `<username>.github.io`.
2. У корені проєкту:

   ```bash
   cd /Users/zakhar.dolozhevskyi/Documents/personal/cv
   git init -b main
   printf ".DS_Store\nphoto.jpg\n" > .gitignore
   git add .
   git commit -m "Add CV site"
   git remote add origin git@github.com:<username>/<repo>.git
   git push -u origin main
   ```

3. Створіть файл `.github/workflows/pages.yml`:

   ```yaml
   name: Deploy site to GitHub Pages

   on:
     push:
       branches: [main]
     workflow_dispatch:

   permissions:
     contents: read
     pages: write
     id-token: write

   concurrency:
     group: pages
     cancel-in-progress: true

   jobs:
     deploy:
       runs-on: ubuntu-latest
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       steps:
         - uses: actions/checkout@v4
         - uses: actions/configure-pages@v5
         - uses: actions/upload-pages-artifact@v3
           with:
             path: site
         - id: deployment
           uses: actions/deploy-pages@v4
   ```

4. На GitHub: Settings, Pages, Source: **GitHub Actions**.
5. Закомітьте і запуште workflow. Після завершення джоби сайт буде на `https://<username>.github.io/<repo>/`.

## Варіант B: без Actions

Settings, Pages, Source: Deploy from a branch. Pages дозволяє лише корінь `/` або `/docs`, тому папку `site/` треба перейменувати на `docs/` (або винести її вміст у корінь).

## Кастомний домен

1. Settings, Pages, Custom domain, вкажіть домен.
2. У DNS: `CNAME` на `<username>.github.io` (для піддомену) або `A`-записи GitHub для apex-домену.
3. Увімкніть Enforce HTTPS.

## Перевірка перед публікацією

- Усі шляхи в `index.html` відносні (`style.css`, `script.js`), тому працюють і в підпапці `/<repo>/`.
- Шрифт Inter підвантажується з Google Fonts, налаштувань не потрібно.
- Для превью в соцмережах додайте `og:title`, `og:description`, `og:image` у `<head>`.
