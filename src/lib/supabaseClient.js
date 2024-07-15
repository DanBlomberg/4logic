import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
	'https://lgqyhlewtsjlotfariep.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxncXlobGV3dHNqbG90ZmFyaWVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA3MDIwMDEsImV4cCI6MjAzNjI3ODAwMX0.-nzIC0461YwTSkdf0KarPGqe7_dF4OZ6gqeLmVhrRAU'
);
