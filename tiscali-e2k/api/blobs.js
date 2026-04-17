// api/blobs.js — Vercel Serverless Function
// Proxy server-side per Vercel Blob (evita CORS dal browser)

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  const token = process.env.BLOB_READ_WRITE_TOKEN;
  if (!token) {
    return res.status(500).json({ error: 'BLOB_READ_WRITE_TOKEN non configurato' });
  }

  try {
    const response = await fetch('https://blob.vercel-storage.com', {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: 'Errore Blob API' });
    }

    const data = await response.json();

    // Escludi index.json dal risultato
    const blobs = (data.blobs || []).filter(b => !b.pathname.startsWith('index'));

    res.status(200).json({ blobs });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
