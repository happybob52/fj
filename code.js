// code.js  (server-side only)
export default function handler(req, res) {
  // 🔐 Put your real codes here, server-side only.
  // Example:
  const codes = [
    "SCY9KK", "5XYHP7", "WYTJVN", "GBRG57", "VT719D"
    // ...add as many as you need
  ];

  const blockMs = 15 * 60 * 1000;   // 15-minute blocks
  const revealSeconds = 10;         // visible for 10 s

  const now = new Date();
  const nowMs = now.getTime();

  const blockIndex = Math.floor(nowMs / blockMs);
  const idx = blockIndex % codes.length;
  const blockStart = blockIndex * blockMs;
  const secSinceStart = (nowMs - blockStart) / 1000;

  let code = "";
  if (secSinceStart < revealSeconds) {
    code = codes[idx];
  }

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Cache-Control", "no-store");
  res.status(200).json({ code });
}
