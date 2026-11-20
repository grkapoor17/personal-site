import { ImageResponse } from "next/og";

// Link-preview card for X / LinkedIn / iMessage
export const alt = "My girlfriend is vegetarian. Splitting by item saved her less than I expected.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Her share of each kind of bill; the dashed line marks an even 50/50 split.
const bars = [
  { name: "Meals where I ordered meat", value: 41 },
  { name: "Food, whole trip", value: 44.7 },
  { name: "All meals and drinks", value: 47 },
  { name: "Drinks, whole trip", value: 50.7 },
];

const MAX = 60; // percent at the right edge of the track

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
          <div style={{ fontSize: 26, color: "#57534e" }}>Mexico City, split by item · gautamkapoor.com</div>
          <div style={{ fontSize: 50, fontWeight: 700, lineHeight: 1.12, marginTop: 18 }}>
            My girlfriend is vegetarian. Splitting by item saved her less than I expected.
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {bars.map((bar) => (
            <div key={bar.name} style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 26 }}>
              <div style={{ width: 380, display: "flex" }}>{bar.name}</div>
              <div style={{ flex: 1, display: "flex", height: 26, position: "relative" }}>
                <div
                  style={{
                    width: `${(bar.value / MAX) * 100}%`,
                    background: bar.value < 50 ? "#0d9488" : "#ea580c",
                    borderTopRightRadius: 6,
                    borderBottomRightRadius: 6,
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    left: `${(50 / MAX) * 100}%`,
                    top: -6,
                    bottom: -6,
                    borderLeft: "2px dashed #78716c",
                  }}
                />
              </div>
              <div style={{ width: 100, display: "flex", justifyContent: "flex-end" }}>{bar.value}%</div>
            </div>
          ))}
          <div style={{ fontSize: 22, color: "#57534e", marginTop: 6 }}>
            Her share of the bill, itemized. Dashed line = splitting 50/50.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
