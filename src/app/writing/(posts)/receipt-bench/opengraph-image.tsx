import { ImageResponse } from "next/og";

// Link-preview card for X / LinkedIn / iMessage
export const alt = "I benchmarked 10 ways to read a receipt. My production pipeline came 9th.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const bars = [
  { name: "Gemini 3.8 Flash", value: 96.6, color: "#0d9488" },
  { name: "Claude Opus 5.5", value: 95.9, color: "#0d9488" },
  { name: "GPT-6.2 Sol", value: 95.9, color: "#0d9488" },
  { name: "My production pipeline", value: 81.1, color: "#ea580c" },
];

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#fafaf9",
          color: "#1c1917",
          padding: "64px 72px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 26, color: "#57534e" }}>receipt-bench · gautamkapoor.com</div>
          <div style={{ fontSize: 50, fontWeight: 700, lineHeight: 1.12, marginTop: 18 }}>
            I benchmarked 10 ways to read a receipt. My production pipeline came 9th.
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {bars.map((bar) => (
            <div key={bar.name} style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 26 }}>
              <div style={{ width: 330, display: "flex" }}>{bar.name}</div>
              <div style={{ flex: 1, display: "flex", height: 26 }}>
                <div
                  style={{
                    width: `${bar.value}%`,
                    background: bar.color,
                    borderTopRightRadius: 6,
                    borderBottomRightRadius: 6,
                  }}
                />
              </div>
              <div style={{ width: 100, display: "flex", justifyContent: "flex-end" }}>{bar.value}%</div>
            </div>
          ))}
          <div style={{ fontSize: 22, color: "#57534e", marginTop: 6 }}>
            Split-correct receipts (every share right), 148 labeled receipts
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
