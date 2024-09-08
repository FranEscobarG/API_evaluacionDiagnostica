<h1 align="center">API de Vivero para Evaluación Diagnotica - SOA</h1>

<p align="center">
  Francisco de Jesus Escobar Gutierrez
</p>

<p align="center">
    <a href="https://github.com/FranEscobarG/"></a>
</p>

# Indicaciones
<p>
    Las tecnologías utilizadas en esta API fueron Node.js (express) y esta desarrollada en una platilla para TypeScript, además la base de datos utilizada fue MySQL.<br><br>
    Para el correcto funcionamiento de esta API se requiere de instalar todas las librerías proporcionadas en la secciones de <b>Instalación</b>. Además de el correcto uso de la base da datos MySQL proporcionada en la sección <b>BD</b>, y su configuración mediante las variables de entorno proporcionadas en el archivo <b>.env.example</b>
</p>

```bash
MYSQL_HOST=
MYSQL_PORT=
MYSQL_USER=
MYSQL_PASSWORD=
MYSQL_DATABASE=
```

## Table of Contents
- [Instalación](#instalación)
- [BD](#BD)
- [Ejecución](#ejecución)
- [Testing](#testing)


## Instalación
#### Instalación de librerias necesarias.

```bash
npm install express
npm install body-parser dotenv fs mongoose multer mysql2
```

## BD
#### Scrip de la base de datos MyQSL.

```bash
CREATE DATABASE floreria_BD;
USE floreria_BD;

CREATE TABLE Flores (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(255) NOT NULL,
    price int NOT NULL,
    image VARCHAR(255) NOT NULL
);

CREATE TABLE pedidos (
    id INT AUTO_INCREMENT PRIMARY KEY,            
    client_name VARCHAR(255) NOT NULL,  
    producto_id INT,
    cantidad INT NOT NULL,                  
    total DECIMAL(10, 2) NOT NULL,
    date_order TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  
    FOREIGN KEY (producto_id) REFERENCES Flores(id)
);
```

## Ejecución
```bash
npm run start:dev
```

## Testing
```bash
npm run test
```

