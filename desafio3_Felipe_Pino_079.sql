--
-- PostgreSQL database dump
--

-- Dumped from database version 14.7
-- Dumped by pg_dump version 14.7

-- Started on 2023-05-15 18:37:48

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE "desafio3_Felipe_Pino_079";
--
-- TOC entry 3327 (class 1262 OID 16417)
-- Name: desafio3_Felipe_Pino_079; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE "desafio3_Felipe_Pino_079" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Spanish_Latin America.1252';


ALTER DATABASE "desafio3_Felipe_Pino_079" OWNER TO postgres;

\connect "desafio3_Felipe_Pino_079"

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 214 (class 1259 OID 16434)
-- Name: comentarios; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.comentarios (
    id integer NOT NULL,
    contenido character varying,
    fecha_creacion date,
    usuario_id bigint,
    post_id bigint
);


ALTER TABLE public.comentarios OWNER TO postgres;

--
-- TOC entry 213 (class 1259 OID 16433)
-- Name: comentarios_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.comentarios_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.comentarios_id_seq OWNER TO postgres;

--
-- TOC entry 3328 (class 0 OID 0)
-- Dependencies: 213
-- Name: comentarios_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.comentarios_id_seq OWNED BY public.comentarios.id;


--
-- TOC entry 212 (class 1259 OID 16427)
-- Name: posts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.posts (
    id integer NOT NULL,
    titulo character varying,
    contenido text,
    fecha_creacion date,
    fecha_actualizacion date,
    destacado boolean,
    usuario_id bigint
);


ALTER TABLE public.posts OWNER TO postgres;

--
-- TOC entry 211 (class 1259 OID 16426)
-- Name: posts_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.posts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.posts_id_seq OWNER TO postgres;

--
-- TOC entry 3329 (class 0 OID 0)
-- Dependencies: 211
-- Name: posts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.posts_id_seq OWNED BY public.posts.id;


--
-- TOC entry 210 (class 1259 OID 16419)
-- Name: usuarios; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.usuarios (
    id integer NOT NULL,
    email character varying,
    nombre character varying,
    apellido character varying,
    rol character varying
);


ALTER TABLE public.usuarios OWNER TO postgres;

--
-- TOC entry 209 (class 1259 OID 16418)
-- Name: usuarios_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.usuarios_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.usuarios_id_seq OWNER TO postgres;

--
-- TOC entry 3330 (class 0 OID 0)
-- Dependencies: 209
-- Name: usuarios_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.usuarios_id_seq OWNED BY public.usuarios.id;


--
-- TOC entry 3176 (class 2604 OID 16437)
-- Name: comentarios id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comentarios ALTER COLUMN id SET DEFAULT nextval('public.comentarios_id_seq'::regclass);


--
-- TOC entry 3175 (class 2604 OID 16430)
-- Name: posts id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.posts ALTER COLUMN id SET DEFAULT nextval('public.posts_id_seq'::regclass);


--
-- TOC entry 3174 (class 2604 OID 16422)
-- Name: usuarios id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios ALTER COLUMN id SET DEFAULT nextval('public.usuarios_id_seq'::regclass);


--
-- TOC entry 3321 (class 0 OID 16434)
-- Dependencies: 214
-- Data for Name: comentarios; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.comentarios (id, contenido, fecha_creacion, usuario_id, post_id) VALUES (1, 'comentario 1', '2023-05-04', 1, 1);
INSERT INTO public.comentarios (id, contenido, fecha_creacion, usuario_id, post_id) VALUES (2, 'comentario 2', '2023-05-06', 2, 1);
INSERT INTO public.comentarios (id, contenido, fecha_creacion, usuario_id, post_id) VALUES (3, 'comentario 3', '2023-05-08', 3, 1);
INSERT INTO public.comentarios (id, contenido, fecha_creacion, usuario_id, post_id) VALUES (4, 'comentario 4', '2023-05-11', 1, 2);
INSERT INTO public.comentarios (id, contenido, fecha_creacion, usuario_id, post_id) VALUES (5, 'comentario 5', '2023-05-13', 2, 2);


--
-- TOC entry 3319 (class 0 OID 16427)
-- Dependencies: 212
-- Data for Name: posts; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.posts (id, titulo, contenido, fecha_creacion, fecha_actualizacion, destacado, usuario_id) VALUES (1, 'prueba admin 1', 'contenido de prueba 1', '2023-05-11', '2023-05-12', true, 1);
INSERT INTO public.posts (id, titulo, contenido, fecha_creacion, fecha_actualizacion, destacado, usuario_id) VALUES (2, 'prueba admin 2', 'contenido de prueba 2', '2023-05-13', '2023-05-14', true, 1);
INSERT INTO public.posts (id, titulo, contenido, fecha_creacion, fecha_actualizacion, destacado, usuario_id) VALUES (3, 'guia 1', 'primera guia', '2023-05-03', '2023-05-04', true, 2);
INSERT INTO public.posts (id, titulo, contenido, fecha_creacion, fecha_actualizacion, destacado, usuario_id) VALUES (4, 'guia 2', 'segunda guia', '2023-05-05', '2023-05-06', false, 3);
INSERT INTO public.posts (id, titulo, contenido, fecha_creacion, fecha_actualizacion, destacado, usuario_id) VALUES (5, 'test', 'testeo de pruebas', '2023-05-07', '2023-05-08', true, NULL);


--
-- TOC entry 3317 (class 0 OID 16419)
-- Dependencies: 210
-- Data for Name: usuarios; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.usuarios (id, email, nombre, apellido, rol) VALUES (1, 'felipe@gmail.com', 'felipe', 'pino', 'administrador');
INSERT INTO public.usuarios (id, email, nombre, apellido, rol) VALUES (2, 'camila@gmail.com', 'camila', 'alvarez', 'usuario');
INSERT INTO public.usuarios (id, email, nombre, apellido, rol) VALUES (3, 'luis@gmail.com', 'luis', 'gonzalez', 'usuario');
INSERT INTO public.usuarios (id, email, nombre, apellido, rol) VALUES (4, 'sergio@gmail.com', 'sergio', 'perez', 'usuario');
INSERT INTO public.usuarios (id, email, nombre, apellido, rol) VALUES (5, 'ana@gmail.com', 'ana', 'gomez', 'usuario');


--
-- TOC entry 3331 (class 0 OID 0)
-- Dependencies: 213
-- Name: comentarios_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.comentarios_id_seq', 5, true);


--
-- TOC entry 3332 (class 0 OID 0)
-- Dependencies: 211
-- Name: posts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.posts_id_seq', 5, true);


--
-- TOC entry 3333 (class 0 OID 0)
-- Dependencies: 209
-- Name: usuarios_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.usuarios_id_seq', 5, true);


-- Completed on 2023-05-15 18:37:49

--
-- PostgreSQL database dump complete
--





--CONSULTAS DESAFIO 3



CREATE TABLE usuarios (id SERIAL, email VARCHAR, nombre VARCHAR, apellido VARCHAR, rol VARCHAR);

select * from usuarios;

INSERT INTO usuarios (id, email, nombre, apellido, rol) VALUES (DEFAULT, 'felipe@gmail.com','felipe','pino','administrador');
INSERT INTO usuarios (id, email, nombre, apellido, rol) VALUES (DEFAULT, 'camila@gmail.com','camila','alvarez','usuario');
INSERT INTO usuarios (id, email, nombre, apellido, rol) VALUES (DEFAULT, 'luis@gmail.com','luis','gonzalez','usuario');
INSERT INTO usuarios (id, email, nombre, apellido, rol) VALUES (DEFAULT, 'sergio@gmail.com','sergio','perez','usuario');
INSERT INTO usuarios (id, email, nombre, apellido, rol) VALUES (DEFAULT, 'ana@gmail.com','ana','gomez','usuario');

CREATE TABLE posts (id SERIAL, titulo VARCHAR, contenido TEXT, fecha_creacion DATE, fecha_actualizacion DATE, destacado BOOLEAN, usuario_id BIGINT);

select * from posts;

INSERT INTO posts (id, titulo, contenido, fecha_creacion, fecha_actualizacion, destacado, usuario_id)
VALUES (DEFAULT, 'prueba admin 1','contenido de prueba 1','11/05/2023','12/05/2023',true,1);
INSERT INTO posts (id, titulo, contenido, fecha_creacion, fecha_actualizacion, destacado, usuario_id)
VALUES (DEFAULT, 'prueba admin 2','contenido de prueba 2','13/05/2023','14/05/2023',true,1);
INSERT INTO posts (id, titulo, contenido, fecha_creacion, fecha_actualizacion, destacado, usuario_id)
VALUES (DEFAULT, 'guia 1','primera guia','03/05/2023','04/05/2023',true,2);
INSERT INTO posts (id, titulo, contenido, fecha_creacion, fecha_actualizacion, destacado, usuario_id)
VALUES (DEFAULT, 'guia 2','segunda guia','05/05/2023','06/05/2023',false,3);
INSERT INTO posts (id, titulo, contenido, fecha_creacion, fecha_actualizacion, destacado, usuario_id)
VALUES (DEFAULT, 'test','testeo de pruebas','07/05/2023','08/05/2023',true,null);


CREATE TABLE comentarios (id SERIAL, contenido VARCHAR, fecha_creacion DATE, usuario_id BIGINT, post_id BIGINT);

select * from comentarios;

INSERT INTO comentarios (id, contenido, fecha_creacion, usuario_id, post_id) VALUES (DEFAULT, 'comentario 1', '04/05/2023',1,1);
INSERT INTO comentarios (id, contenido, fecha_creacion, usuario_id, post_id) VALUES (DEFAULT, 'comentario 2', '06/05/2023',2,1);
INSERT INTO comentarios (id, contenido, fecha_creacion, usuario_id, post_id) VALUES (DEFAULT, 'comentario 3', '08/05/2023',3,1);
INSERT INTO comentarios (id, contenido, fecha_creacion, usuario_id, post_id) VALUES (DEFAULT, 'comentario 4', '11/05/2023',1,2);
INSERT INTO comentarios (id, contenido, fecha_creacion, usuario_id, post_id) VALUES (DEFAULT, 'comentario 5', '13/05/2023',2,2);

/* Cruza los datos de la tabla usuarios y posts mostrando las siguientes columnas.
Nombre e email del usuario junto al título y contenido del post */

select nombre, email, titulo, contenido from usuarios u
JOIN posts p
ON u.id = p.usuario_id;

/* Muestra el id, título y contenido de los posts de los administradores.
El administrador puede ser cualquier id y debe ser seleccionado dinámicamente. */

select p.id, titulo, contenido from usuarios u
JOIN posts p
ON u.id = p.usuario_id
where rol = 'administrador';

/* Cuenta la cantidad de posts de cada usuario. La tabla resultante debe mostrar el id
e email del usuario junto con la cantidad de posts de cada usuario.  */

select u.id, email, count(p.id) as cantidad from usuarios u
LEFT JOIN posts p
ON u.id = p.usuario_id
group by u.id, u.email
order by cantidad desc;

/* Muestra el email del usuario que ha creado más posts. Aquí la tabla resultante tiene
un único registro y muestra solo el email. */

select email from usuarios u
JOIN posts p
ON u.id = p.usuario_id
group by u.id, u.email
order by count(p.id);

/* Muestra la fecha del último post de cada usuario. */

select nombre, max(fecha_creacion) from (select p.id, p.contenido, p.fecha_creacion, u.nombre from usuarios u
JOIN posts p
ON u.id = p.usuario_id) as t
group by t.nombre;

/* Muestra el título y contenido del post (artículo) con más comentarios */

select titulo, contenido from posts p
JOIN (select post_id, count(post_id) as cantidad
from comentarios group by post_id order by cantidad desc limit 1) as t
ON t.post_id = p.id;

/* Muestra en una tabla el título de cada post, el contenido de cada post y el contenido
de cada comentario asociado a los posts mostrados, junto con el email del usuario
que lo escribió */

select p.titulo as titulo_post, p.contenido as contenido_post, c.contenido as contenido_comentario, u.email from posts p
JOIN comentarios c
ON p.id = c.post_id
JOIN usuarios u
ON c.usuario_id = u.id;

/* Muestra el contenido del último comentario de cada usuario. */

select fecha_creacion, contenido, usuario_id from comentarios c
JOIN usuarios u
ON c.usuario_id = u.id where fecha_creacion = (select max(fecha_creacion) from comentarios where usuario_id = u.id);

/* Muestra los emails de los usuarios que no han escrito ningún comentario. */

select u.email from usuarios u
LEFT JOIN comentarios c
ON u.id = c.usuario_id
group by u.email HAVING count(c.id) = 0;