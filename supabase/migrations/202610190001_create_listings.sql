CREATE TABLE IF NOT EXISTS public.listings (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    title text NOT NULL,
    category text NOT NULL
        CHECK (category IN ('real_estate', 'car')),
    description text,
    price numeric(18, 2)
        CHECK (price IS NULL OR price >= 0),
    currency text NOT NULL DEFAULT 'IRR',
    city text,
    location text,
    image_urls text[] NOT NULL DEFAULT '{}',
    status text NOT NULL DEFAULT 'draft'
        CHECK (status IN ('draft', 'published', 'sold', 'archived')),
    created_at timestamptz NOT NULL DEFAULT now(),
    updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.listings ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public can view published listings"
ON public.listings;

CREATE POLICY "Public can view published listings"
ON public.listings
FOR SELECT
TO anon, authenticated
USING (status = 'published');

REVOKE INSERT, UPDATE, DELETE
ON public.listings FROM anon, authenticated;

GRANT SELECT
ON public.listings TO anon, authenticated;
