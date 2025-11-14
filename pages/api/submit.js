// pages/api/submit.js
export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const r = await fetch(`${process.env.BACKEND_URL}/api/submit`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });

    const text = await r.text(); // бэкенд может отдавать текст
    res.status(r.status).send(text);
  } catch (e) {
    console.error(e);
    res.status(502).json({ error: "Bad Gateway" });
  }
}
