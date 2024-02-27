
<p align="center">
<img src="https://seeklogo.com/images/N/next-js-icon-logo-EE302D5DBD-seeklogo.com.png" alt="SVG Image">
</p>
<h1 align="center">
Next.js
</h1>
<p align="center">
  <a href="https://nextjs.org/"><img width="100" src="https://upload.wikimedia.org/wikipedia/commons/4/45/IOS_14_Logo.png"></a>
<p>
<p align="center">
<a href="https://mail.google.com/mail/u/0/#inbox?compose=jrjtXGkPHSlpPnlLppqsCkGstdMMFjFTrhbtcLDGfpDqNvDDPkbzZPQrptxTXZbKJZKbHflf"><b>Есть вопросы? Напиши!</b></a>
</p>

# Шаблон Next.js с локализацией, Redux Toolkit и Mantine UI  от [izatIT](https://github.com/IzatIT)

Это шаблонный проект, построенный на Next.js версии 14, который поддерживает локализацию на русском (ru) и кыргызском (kg) языках, управление состоянием с использованием React Redux с Redux Toolkit, а также Mantine UI для создания красивого и отзывчивого пользовательского интерфейса. Структура папок проекта организована следующим образом:

```bash
├── messages
│     ├── ru.json
│     └── kg.json
├── public
├── src
│    ├── app
│    │    ├── [locale]
│    │    │     ├── modules
│    │    │     ├── layout.tsx
│    │    │     ├── provider.tsx
│    │    │     ├── page.tsx
│    │    │     └── newpage
│    │    │     │      ├── modules
│    │    │     │      │     ├──  section
│    │    │     │      │     └── index.ts
│    │    │     │      └── page.tsx
|    |    ├── lib
│    │    │    ├── loginScheme
│    │    │    └── index.ts
│    │    ├── hooks
│    │    ├── store
│    │    ├── utils
│    │    ├── constants
│    │    ├── components
│    │    ├── types
│    │    ├── theme.tsx
│    │    ├── i18n.ts
          └── middleware.ts

```

## Особенности

- **Локализация**: Проект поддерживает локализацию на русском (ru) и кыргызском (kg) языках. Файлы локализации расположены в папке `message` и используются в директории [`app/locale`](src/app/locale).
- **Валидация**: В проекте использован yup с mantine/form для более точной и эффективной валидации. Файлы расположены в папке `lib` и используются в директории [`app/locale/login/modules`](src/app/locale/login/modules).
При необходимости можно создать новые схемы и использовать также. Документация [yup](https://github.com/jquense/yup) и [mantine](https://mantine.dev/form/schema-validation/#yup)
- **Управление состоянием**: Используется [React Redux](https://react-redux.js.org/) с [Redux Toolkit](https://redux-toolkit.js.org/) для эффективного управления состоянием.
- **Mantine UI**: Интегрирован [Mantine UI](https://mantine.dev/) для создания красивого и отзывчивого пользовательского интерфейса.
- **Модульная структура**: Проект имеет организованную структуру с отдельными модулями для различных страниц (`homepage` и `newpage`) и повторно используемыми компонентами (`components`) для лучшей поддерживаемости кода.
- **Промежуточное ПО для перенаправления языка**: Настроено промежуточное программное обеспечение ([`middleware.ts`](src/middleware.ts)) для перенаправления путей на `/ru` или `/kg` в зависимости от предпочтений языка пользователя.
- **Метатеги**: Так как Next.js используем часто для улучшение SEO-оптимизации веб сайта, есть некоторые настройки для meta-тегов. Вы будете добавлять функцию из корневого page.tsx [generateMetadata](https://nextjs.org/docs/app/api-reference/functions/generate-metadata) и использовать в любом серверном компоненте.

## Начало работы

1. **Клонировать репозиторий**:

   ```bash
   git clone <repository_url>
   cd nextjs
   npm install
   npm run dev
    ```

Открыть в браузере:
Откройте http://localhost:3000 в вашем браузере, чтобы просмотреть проект.

## Структура проекта
1. **src/app/locale**: Содержит файлы локализации и компоненты для макета, провайдера и отображения страницы.
2. **src/app/modules**: Содержит модули для различных страниц (homepage или другие) с соответствующими страницами.
3. **src/hooks**: Пользовательские хуки для обмена логикой между компонентами.
4. **src/store**: Настройка хранилища Redux и срезы с использованием Redux Toolkit.
5. **src/utils**: Вспомогательные функции и утилиты.
6. **src/constants**: Константы, используемые в приложении.
7. **src/components**: Повторно используемые компоненты, используемые в различных частях приложения.
8. **src/types**: Определения типов TypeScript для обеспечения типовой безопасности.
9. **src/theme.tsx**: Настройка MantineProvider для конфигурации темы.
10. **src/i18n.ts**: Конфигурация библиотеки локализации i18next.
11. **src/middleware.ts**: Промежуточное программное обеспечение для перенаправления настройки языка в зависимости от предпочтений пользователя.
12. **message/ru.json и message/kg.json**: Файлы локализации для русского и кыргызского языков соответственно.


Содействие
Приветствуются вклады! Если у вас есть предложения, улучшения или запросы на добавление функциональности, не стесняйтесь открыть вопрос или отправить запрос на внесение изменений.

Лицензия
Этот проект лицензирован в соответствии с MIT License.
