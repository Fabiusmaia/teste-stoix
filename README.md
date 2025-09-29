# Full Stack Task Manager

Aplicação SPA de gerenciamento de tarefas com **Laravel (Backend)** e **React + Tailwind (Frontend)**.
Autenticação via **Laravel Sanctum** usando cookies e CSRF.

---

## 🛠 Requisitos

* Node.js LTS
* PHP >= 8.2
* Composer
* SQLite

---

## 🔧 Backend

### 1. Entrar na pasta do backend

```bash
cd backend
```

### 2. Copiar `.env`

```bash
cp .env.example .env
```

### 3. Instalar dependências

```bash
composer install
```

### 4. Configurar banco

No arquivo `.env`, configure:

```env
DB_CONNECTION=sqlite
DB_DATABASE=/database/database.sqlite

SESSION_DRIVER=cookie
SESSION_LIFETIME=120
SANCTUM_STATEFUL_DOMAINS=localhost:5173,127.0.0.1:5173
SESSION_DOMAIN=localhost,127.0.0.1
```

> **Importante:** crie o arquivo SQLite vazio:

```bash
touch database/database.sqlite
```

### 5. Criar tabelas

```bash
php artisan migrate
```

* Cria as tabelas `users` e `tasks`.
* Certifique-se de ter a migration de `tasks` criada.

### 6. Rodar servidor

```bash
php artisan serve
```

* Backend disponível em: `http://127.0.0.1:8000`

---

## ⚛️ Frontend

### 1. Entrar na pasta do frontend

```bash
cd frontend
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Rodar frontend

```bash
npm run dev
```

* Frontend disponível em: `http://localhost:5173` (ou porta indicada pelo Vite)

---
