
-- +migrate Up
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE public.users (
  id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
  name character varying(255) NOT NULL,
  email character varying(255),
  spotify_id character varying(255),
  spotify_access_token character varying(255),
  spotify_refresh_token character varying(255),
  created_at timestamp with time zone DEFAULT now() NOT NULL,
  complement jsonb
);

CREATE TABLE public.long_top_musics (
  id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
  rank int NOT NULL,
  name character varying(510),
  artist character varying(510),
  date timestamp with time zone NOT NULL,
  spotify_id character varying(255),
  user_id uuid NOT NULL,
  complement jsonb
);

CREATE TABLE public.medium_top_musics (
  id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
  rank int NOT NULL,
  name character varying(510),
  artist character varying(510),
  date timestamp with time zone NOT NULL,
  spotify_id character varying(255),
  user_id uuid NOT NULL,
  complement jsonb
);

CREATE TABLE public.short_top_musics (
  id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
  rank int NOT NULL,
  name character varying(510),
  artist character varying(510),
  date timestamp with time zone NOT NULL,
  spotify_id character varying(255),
  user_id uuid NOT NULL,
  complement jsonb
);

CREATE TABLE public.saved_top_history (
  id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
  date timestamp with time zone NOT NULL
)

ALTER TABLE ONLY public.users
  ADD CONSTRAINT users_pkey PRIMARY KEY (id);

ALTER TABLE ONLY public.long_top_musics
  ADD CONSTRAINT long_top_musics_pkey PRIMARY KEY (id),
  ADD CONSTRAINT long_top_musics_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE ONLY public.medium_top_musics
  ADD CONSTRAINT medium_top_musics_pkey PRIMARY KEY (id),
  ADD CONSTRAINT medium_top_musics_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE ONLY public.short_top_musics
  ADD CONSTRAINT short_top_musics_pkey PRIMARY KEY (id),
  ADD CONSTRAINT short_top_musics_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE ONLY public.saved_top_history
  ADD CONSTRAINT saved_top_history_pkey PRIMARY KEY (id);

-- +migrate Down
DROP TABLE public.users;
DROP TABLE public.top_musics;
