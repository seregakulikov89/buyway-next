// pages/api/submit.js
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method Not Allowed" });
  }

  // Простая защита от спама (honeypot)
  if (req.body && typeof req.body === "object" && req.body._hp) {
    return res.status(200).json({ ok: true });
  }

  const { name, contact, link, comment } = req.body || {};
  if (!name || !contact) {
    return res
      .status(400)
      .json({ ok: false, error: "Имя и контакт обязательны" });
  }

  try {
    const backendUrl = process.env.BACKEND_URL;
    if (!backendUrl) {
      return res
        .status(500)
        .json({ ok: false, error: "BACKEND_URL is not set" });
    }

    const r = await fetch(`${backendUrl}/api/submit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // "X-API-KEY": process.env.BACKEND_TOKEN || "",
      },
      body: JSON.stringify({ name, contact, link, comment }),
    });

    const text = await r.text().catch(() => "");
    if (!r.ok) {
      return res.status(r.status).send(text || "Backend error");
    }

    try {
      return res.status(200).json(JSON.parse(text));
    } catch {
      return res.status(200).send(text);
    }
  } catch (e) {
    console.error(e);
    return res
      .status(502)
      .json({ ok: false, error: "Не удалось связаться с backend" });
  }
}
