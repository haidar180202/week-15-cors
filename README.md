# Welcome to Week 15
Simple Cors Implementation 



## Authors

👤 **Muhammad Haikal Shahab**

### Getting Started

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/). Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```sh
$ npm install cors
```

## Deployment Link 

- Client Link : https://65206641c240cb403c6362b6--loquacious-granita-9eb441.netlify.app/

## Usage 

```javascript
app.get('/', (req, res) => {
  res.json({ message: 'Transfer Request API DATA' });
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(
  OpenApiValidator.middleware({
    apiSpec: openApiPath,
    validateRequests: true,
  })
);
```
