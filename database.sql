PGDMP     0                    y           postgres    12.2    12.2 	                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    13318    postgres    DATABASE     �   CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'German_Germany.1252' LC_CTYPE = 'German_Germany.1252';
    DROP DATABASE postgres;
                postgres    false                       0    0    DATABASE postgres    COMMENT     N   COMMENT ON DATABASE postgres IS 'default administrative connection database';
                   postgres    false    2819                        3079    16384 	   adminpack 	   EXTENSION     A   CREATE EXTENSION IF NOT EXISTS adminpack WITH SCHEMA pg_catalog;
    DROP EXTENSION adminpack;
                   false                       0    0    EXTENSION adminpack    COMMENT     M   COMMENT ON EXTENSION adminpack IS 'administrative functions for PostgreSQL';
                        false    1            �            1259    57412    shape    TABLE     �   CREATE TABLE public.shape (
    shapeid integer,
    shapename character varying(255),
    color character varying(255),
    width integer,
    height integer,
    dpth integer
);
    DROP TABLE public.shape;
       public         heap    postgres    false            �
          0    57412    shape 
   TABLE DATA           O   COPY public.shape (shapeid, shapename, color, width, height, dpth) FROM stdin;
    public          postgres    false    203   �       �
   C   x�3�t��K�t/JM��4�4�4�2�,.,M,J�L���/�rqc�EM���[p��qqq �i�     