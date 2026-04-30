-- Supabase SQL Editor에서 1회 실행
create extension if not exists "pgcrypto";

create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  role text not null check (role in ('host', 'joiner', 'both')),
  handle text,
  survey boolean not null default false,
  created_at timestamptz not null default now()
);

create index if not exists waitlist_created_at_idx on public.waitlist(created_at desc);

-- RLS: service_role만 접근. anon/authenticated는 차단 (서버 사이드 API에서만 사용)
alter table public.waitlist enable row level security;
