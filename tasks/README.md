# Demo Project _tasks_

## Notes

Although Vue CLI installs Yorkie as solution to hook into Git,
`Yorkie` is limited to a repository structure where `.git` and the
`package.json` share the same directory. `Husky` on the other hand
is able to use a nested structure.

Therefore `Husky` is installed as well. Since the resolution of the
transitive dependency to `Yorkie` cannot be supressed, it's accepted
to waste some space and bandwidth.

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Serves the production build

```
npm run serve:prod
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### Run your unit tests

```
npm run test:unit
```
