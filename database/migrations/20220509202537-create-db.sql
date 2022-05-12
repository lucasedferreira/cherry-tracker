
-- +migrate Up
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE public.users (
  id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
  name character varying(255) NOT NULL,
  email character varying(255),
  spotify_id character varying(255),
  created_at timestamp with time zone DEFAULT now() NOT NULL,
  complement jsonb
);

CREATE TABLE public.top_musics (
  id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
  rank int NOT NULL,
  date timestamp with time zone NOT NULL,
  user_id uuid NOT NULL,
  complement jsonb
);

ALTER TABLE ONLY public.users
  ADD CONSTRAINT users_pkey PRIMARY KEY (id);

ALTER TABLE ONLY public.top_musics
  ADD CONSTRAINT top_musics_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;

-- +migrate Down
DROP TABLE public.users;
DROP TABLE public.top_musics;
