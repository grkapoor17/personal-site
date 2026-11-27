import { ImageResponse } from "next/og";

// Link-preview card for X / LinkedIn / iMessage
export const alt = "I gave AI agents a semantic layer. Clean tables did most of the work.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const setups = [
  { label: "SQL tools only", value: "94.3%", color: "#2a78d6" },
  { label: "+ semantic layer", value: "95.7%", color: "#eb6834" },
  { label: "+ semantic layer + skill", value: "97.2%", color: "#1baf7a" },
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
          <div style={{ fontSize: 26, color: "#57534e" }}>semantic-warehouse-mcp · gautamkapoor.com</div>
          <div style={{ fontSize: 52, fontWeight: 700, lineHeight: 1.12, marginTop: 18 }}>
            I gave AI agents a semantic layer. Clean tables did most of the work.
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ display: "flex", gap: 28 }}>
            {setups.map((s) => (
              <div key={s.label} style={{ display: "flex", flexDirection: "column", flex: 1, borderTop: `8px solid ${s.color}`, paddingTop: 14 }}>
                <div style={{ fontSize: 64, fontWeight: 700 }}>{s.value}</div>
                <div style={{ fontSize: 26, color: "#57534e" }}>{s.label}</div>
              </div>
            ))}
          </div>
          <div style={{ fontSize: 22, color: "#57534e", marginTop: 10 }}>
            Questions answered correctly · 450 runs · Claude, GPT and Gemini
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
