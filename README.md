# Feedback API

Это RESTful API для управления обратной связью пользователей, включая функциональность для пользователей, отзывов (feedback posts), комментариев и голосований (upvotes).

## Описание

API предоставляет следующие возможности:

-   Управление пользователями (создание, чтение, обновление, удаление).
-   Управление отзывами (создание, чтение, обновление, удаление).
-   Управление комментариями (создание, чтение, обновление, удаление).
-   Голосование за отзывы (upvotes).

## Технологии

-   **Node.js:**  Среда выполнения JavaScript на сервере.
-   **Express.js:**  Веб-фреймворк для Node.js.
-   **Prisma:**  ORM (Object-Relational Mapper) для работы с базой данных PostgreSQL.
-   **PostgreSQL:** База данных, которую использует этот API.
-   **Zod:**  Библиотека для валидации схем.
-   **Swagger:** Для автоматической генерации документации API.

## Предварительные требования

-   **Node.js:** (версия 16 или выше). Убедитесь, что Node.js и npm установлены.
-   **Docker:** Желательно, для запуска базы данных PostgreSQL.
-   **PostgreSQL:** Для хранения данных. Можно установить локально или использовать Docker.
-   **Git:** для управления версиями проекта

## Установка

1.  **Клонируйте репозиторий:**
    ```bash
    git clone <ваш_репозиторий>
    cd <название_репозитория>
    ```
2.  **Установите зависимости:**
    ```bash
    npm install
    ```
3.  **Настройте переменные окружения:**
    *   Создайте файл `.env` в корне вашего проекта.
    *   Добавьте следующие переменные:
        ```env
        DATABASE_URL="postgresql://user:password@localhost:5432/mydb?schema=public"
        PORT=8000
        ```
        Замените `user`, `password`, `localhost`, `5432` и `mydb` на ваши значения.
4.  **Запустите базу данных PostgreSQL (если не запущена):**
      * Если вы используете docker запустите PostgreSQL с помощью команды:
     ```bash
        docker run --name my-postgres -p 5432:5432 -e POSTGRES_USER=user -e POSTGRES_PASSWORD=password -e POSTGRES_DB=mydb -d postgres
     ```
     * Если вы используете docker compose запустите docker compose с командой:
    ```bash
        docker compose up -d
    ```
5.  **Примените миграции Prisma:**
    ```bash
    npx prisma migrate dev --name init
    ```
6.  **Запустите сервер:**
    ```bash
    npm run dev
    ```

## API документация

API-документация автоматически генерируется с использованием Swagger.

-   **Перейдите в браузере по адресу:** `http://localhost:8000/api-docs` (или на ваш `PORT`).

## Примеры запросов (Postman)

### Создание пользователя

-   **Method:** `POST`
-   **URL:** `http://localhost:8000/api/users`
-   **Headers:**
    -   `Content-Type: application/json`
-   **Body:**

    ```json
    {
        "email": "test@example.com",
        "name": "Test User",
        "avatar": "https://example.com/avatar.jpg"
    }
    ```

### Получение пользователя по ID

-   **Method:** `GET`
-   **URL:** `http://localhost:8000/api/users/1`

### Обновление пользователя

-   **Method:** `PUT`
-   **URL:** `http://localhost:8000/api/users/1`
-   **Headers:**
    -   `Content-Type: application/json`
-   **Body:**

    ```json
    {
        "email": "updated@example.com",
        "name": "Updated User Name",
        "avatar": "https://example.com/updated-avatar.jpg"
    }
    ```

### Удаление пользователя

-   **Method:** `DELETE`
-   **URL:** `http://localhost:8000/api/users/1`

## Другие эндпоинты
  * `http://localhost:8000/api/feedback` - для управления отзывами
  * `http://localhost:8000/api/comments` - для управления комментариями
  * `http://localhost:8000/api/upvotes` - для управления голосованиями
  * `http://localhost:8000/api/categories` - для управления категориями
  * `http://localhost:8000/api/statuses` - для управления статусами

## Лицензия

Этот проект лицензирован в соответствии с [укажите вашу лицензию, например, MIT].

## Автор

[Malika ametova]