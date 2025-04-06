-- Database schema for biblioteca2025 in PostgreSQL
CREATE DATABASE biblioteca2025;

\c biblioteca2025;

-- Autores table
CREATE TABLE IF NOT EXISTS autores (
  id SERIAL PRIMARY KEY,
  nombres VARCHAR(255) NOT NULL
);

-- Editorial table
CREATE TABLE IF NOT EXISTS editorial (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL
);

-- Libros table
CREATE TABLE IF NOT EXISTS libros (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  copias INTEGER NOT NULL DEFAULT 1,
  estante INTEGER NOT NULL DEFAULT 1
);

-- Junction table
CREATE TABLE IF NOT EXISTS autor_editorial_libro (
  id SERIAL PRIMARY KEY,
  autor_id INTEGER REFERENCES autores(id),
  editorial_id INTEGER REFERENCES editorial(id),
  libro_id INTEGER REFERENCES libros(id),
  fecha DATE -- Fecha de publicación
);

-- Insert initial data
INSERT INTO autores (nombres) VALUES
  ('William Shakespeare'),
  ('Ruben Dario');

INSERT INTO editorial (nombre) VALUES
  ('Pearson'),
  ('Panini');

INSERT INTO libros (nombre, copias, estante) VALUES
  ('Romeo y Julieta', 1, 1),
  ('Dragonball', 1, 1),
  ('Azul...', 1, 1);

INSERT INTO autor_editorial_libro (autor_id, editorial_id, libro_id, fecha) VALUES
  (2, 1, 2, NULL),
  (2, 1, 3, NULL),
  (2, 2, 1, NULL); 