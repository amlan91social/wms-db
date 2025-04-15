# Database Migration Repo for WMS

## Settings the env properties

#### To generate the migration file for a ticket

```
npm run migration:create --name <JIRA Ticket>
npx sequelize migration:create --name <JIRA Ticket>
```

#### Run the following command to migrate the schema

```
npm run migrate:up
```

#### Run the following command to undo migrate

```
npm run migrate:undo
npm run migrate:undo --name <Migration Js file>
npm run migrate:undo --name PIC1039-XXXX.js
```