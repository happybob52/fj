// code.js
export default function handler(req, res) {
  // 🔐 Insert your own codes here.
  // (these stay server-side and are never sent to the browser except during the 10-second reveal)
  const codes = [
    "SCY9KK",
    "5XYHP7",
    "WYTJVN",
    "GBRG57",
    "VT719D"
  ];

  const blockMs = 15 * 60 * 1000;  // 15-minute blocks
  const revealSeconds = 10;        // show for 10 s

  const nowMs = Date.now();
  const blockIndex = Math.floor(nowMs / blockMs);
  const idx = blockIndex % codes.length;
  const blockStart = blockIndex * blockMs;
  const secSinceStart = (nowMs - blockStart) / 1000;

  let code = "";
  if (secSinceStart < revealSeconds) code = codes[idx];

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Cache-Control", "no-store");
  res.status(200).json({ code });
}
