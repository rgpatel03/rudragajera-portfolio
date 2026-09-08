import type { PGlite } from '@electric-sql/pglite';

let dbPromise: Promise<PGlite> | null = null;

async function loadPGlite(): Promise<typeof import('@electric-sql/pglite').PGlite> {
  const mod = await import('@electric-sql/pglite');
  return mod.PGlite;
}

export function getDb(): Promise<PGlite> {
  if (!dbPromise) {
    dbPromise = (async () => {
      const PGlite = await loadPGlite();
      const db = new PGlite('idb://rudra-portfolio');
      await db.exec(`
        CREATE TABLE IF NOT EXISTS feedback_submissions (
          id SERIAL PRIMARY KEY,
          name TEXT NOT NULL,
          email TEXT NOT NULL,
          phone TEXT,
          message TEXT NOT NULL,
          created_at TIMESTAMPTZ DEFAULT now()
        );
      `);
      return db;
    })();
  }
  return dbPromise;
}

export type FeedbackRow = {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  message: string;
  created_at: string;
};

export async function submitFeedback(input: {
  name: string;
  email: string;
  phone?: string;
  message: string;
}): Promise<FeedbackRow> {
  const db = await getDb();
  const result = await db.query<FeedbackRow>(
    `INSERT INTO feedback_submissions (name, email, phone, message)
     VALUES ($1, $2, $3, $4)
     RETURNING id, name, email, phone, message, created_at;`,
    [input.name, input.email, input.phone ?? null, input.message],
  );
  return result.rows[0];
}
