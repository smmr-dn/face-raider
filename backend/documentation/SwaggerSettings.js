//swagger
import swaggerJSDoc from "swagger-jsdoc";

//options for swagger API
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Face Raider API",
            version: "0.1.0",
            description:
                "A simple CRUD API application for express using Swagger",
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
        },
        servers: [
            {
                url: "http://localhost:5000",
            },
        ],
    },
    apis: ["./routes/*/*.js"],
};

export const specs = swaggerJSDoc(options);
export const swaggerOptions = {
    explorer: true,
    swaggerOptions: {
        docExpansion: "full",
        defaultModelsExpandDepth: 2,
    },
};
