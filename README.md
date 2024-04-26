## Books

A simple REST service to access books database.

### Setup

1. Install Node v18 or use [nvm](https://github.com/nvm-sh/nvm)
2. Select node version `nvm use 18`
3. Install dependencies `npm install`
4. Update environment variables `cp .env.example .env`
5. Install postgres
6. Setup database with `./setup_db.sh`
7. Run migrations

```
npm run db:migrate
```

8. Start Dev server

```
npm run start:dev
```

9. Run tests

```
npm run test
```

## Documentation

- Swagger docs available on `http://localhost:4000/documentation`
