import { ImageResponse } from "next/og";

// Link-preview card for X / LinkedIn / iMessage
export const alt = "I cut my best keyword's bid to save money. Apple just stopped showing my ad.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// US campaign cost per install in each period.
const bars = [
  { name: "Jul 12 – Oct 3 · bid $2.25", value: 4.57, bad: false },
  { name: "Oct 12 – 19 · bid cut to $1.50", value: 5.93, bad: true },
  { name: "Nov 1 – 11 · bid $2.25", value: 3.29, bad: false },
];

const MAX = 6.5; // dollars at the right edge of the track

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
          <div style={{ fontSize: 26, color: "#57534e" }}>Apple Search Ads, SplitNShare · gautamkapoor.com</div>
          <div style={{ fontSize: 50, fontWeight: 700, lineHeight: 1.12, marginTop: 18 }}>
            I cut my best keyword&apos;s bid to save money. Apple just stopped showing my ad.
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {bars.map((bar) => (
            <div key={bar.name} style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 26 }}>
              <div style={{ width: 430, display: "flex" }}>{bar.name}</div>
              <div style={{ flex: 1, display: "flex", height: 26 }}>
                <div
                  style={{
                    width: `${(bar.value / MAX) * 100}%`,
                    background: bar.bad ? "#ea580c" : "#0d9488",
                    borderTopRightRadius: 6,
                    borderBottomRightRadius: 6,
                  }}
                />
              </div>
              <div style={{ width: 100, display: "flex", justifyContent: "flex-end" }}>${bar.value.toFixed(2)}</div>
            </div>
          ))}
          <div style={{ fontSize: 22, color: "#57534e", marginTop: 6 }}>Cost per install, US search campaign.</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
