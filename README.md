# MasterHelp — legal & support pages

Статические страницы для App Store review приложения «MasterHelp — коды ошибок бытовой техники».

| Файл | Назначение | Куда указывать |
| --- | --- | --- |
| `index.html` | Витрина со ссылками | Marketing URL в App Store Connect |
| `privacy.html` | Политика конфиденциальности (RU/EN) | Privacy Policy URL + ссылка в пейволле |
| `support.html` | Обратная связь, FAQ по подписке | Support URL в App Store Connect |
| `assets/base.css`, `assets/lang.js` | Оформление и переключатель RU/EN | — |

Условия использования отдельной страницей не делались: приложение распространяется по стандартному
[Apple EULA](https://www.apple.com/legal/internet-services/itunes/dev/stdeula/), ссылка на него стоит в пейволле и в футере страниц.

## Публикация на GitHub Pages

1. Создать репозиторий и залить содержимое этой папки в корень ветки `main`.
2. Settings → Pages → Source: `Deploy from a branch`, ветка `main`, папка `/ (root)`.
3. Итоговые адреса: `https://<аккаунт>.github.io/<репозиторий>/privacy.html` и `.../support.html`.
4. Подставить адрес privacy в `MasterHelp/LegalLinks.swift` (константа `privacyPolicyURLString`) и в App Store Connect.

Локальная проверка: `python3 -m http.server 8000` в этой папке, открыть `http://localhost:8000`.

Почта для связи во всех файлах: `sweatyawe@gmail.com`.

## Форма обратной связи

`support.html` отправляет данные через FormSubmit (AJAX), получатель — `sweatyawe@gmail.com`.
Адрес собирается в JS из частей, чтобы не светиться в исходнике для спам-краулеров.

Активация — один раз: отправить с опубликованной страницы любое тестовое сообщение,
на почту придёт письмо от FormSubmit со ссылкой подтверждения. До перехода по ссылке
письма не доставляются. После активации в письме выдаётся алиас — его можно подставить
в `FORM_ENDPOINT` вместо адреса: `https://formsubmit.co/ajax/<алиас>`.

Передача данных в FormSubmit описана в разделе 05 политики конфиденциальности.
