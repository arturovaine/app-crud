const swaggerConfig = {
  definitions: {
    openapi: "3.0.1",
    info: {
      title: "Express API com Swagger",
      description: "",
      version: "1.0"
    },
    server: [{
      url: "http://localhost:3001",
      description: "servidor local"
    }]
  },
  apis: ["../app/router/index.js"]
}

export default swaggerConfig;
