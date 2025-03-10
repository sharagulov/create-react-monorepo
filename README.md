# ⚪ create-react-monorepo

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/sharagulov/create-react-monorepo/npm-publish.yml?style=for-the-badge)
![npm](https://img.shields.io/npm/v/@sharagulov/create-react-monorepo?color=blue&style=for-the-badge)
![GitHub License](https://img.shields.io/github/license/sharagulov/create-react-monorepo?style=for-the-badge)

A professional **React + Express monorepo generator** for frontend-developers that helps to start projects in seconds.  
Perfect for users who need **a fast, structured, and scalable** setup.


## 🚀 Features

✅ **Automatic project structure**: `client/` for React, `server/` for Node.js  
✅ **Supports PostgreSQL** (optional)  
✅ **Uses EJS templates** for dynamic configurations  
✅ **Customizable ports and database settings**  
✅ **Zero manual setup** – just run a single command!  


## 📦 Installation

You can install it globally:

```sh
npm install -g @sharagulov/create-react-monorepo
```

Or use it instantly with `npx`:

```sh
npx @sharagulov/create-react-monorepo my-project
```
 
## 🛠️ Usage

Once installed, CRM generates a new monorepo.

The script will ask for:
- Whether to include a **PostgreSQL backend**
- Database **username, password, port**
- Proxy and PostgreSQL **ports**
- Automatically scaffolds a **monorepo structure**.


## 📂 Project Structure

```bash
my-project
├── client/      # React frontend
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── craco.config.js
├── server/      # Express backend (optional)
│   ├── controllers/
│   ├── routes/
│   ├── prisma/
│   ├── package.json
│   ├── .env     # Auto-generated from user input
│   └── server.js
└── README.md
```


## 🔧 Commands

Inside your project, run:

```sh
cd my-project/client && npm install
cd ../server && npm install  # Only if backend is enabled
```

To start the frontend:

```sh
cd client
npm start
```

To start the backend:

```sh
cd server
npm run dev
```

## 📜 Environment Variables (`.env`)

If you enabled the backend, a `.env` file will be generated:

```env
DATABASE_URL=postgresql://USERNAME:PASSWORD@localhost:PORT/NAME
SERVER_PORT=3001
```

You can manually edit these values later.


## 📄 License

This project is licensed under the **MIT License** – you're free to use, modify, and distribute it.


## 📞 Contact

**Author:** Pavel Sharagulov  
📧 Email: [pavel.sharagulov@yandex.ru](mailto:pavel.sharagulov@yandex.ru)  
🔗 GitHub: [sharagulov](https://github.com/sharagulov)  
📦 npm: [@sharagulov](https://www.npmjs.com/~sharagulov)

---

> **Made with ❤️**  
