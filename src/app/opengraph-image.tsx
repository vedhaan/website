import { ImageResponse } from "next/og";

export const alt = "Vedhaan Technology | Turning Ideas into Digital Success";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#fff6ee",
          border: "14px solid #0f0f1a",
          padding: "56px 64px",
          fontFamily: "sans-serif",
          color: "#0f0f1a",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 30,
            fontWeight: 800,
            letterSpacing: 6,
          }}
        >
          VEDHAAN TECHNOLOGY
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 92, fontWeight: 800 }}>
            Turning ideas into
          </div>
          <div style={{ display: "flex", marginTop: 14 }}>
            <div
              style={{
                display: "flex",
                fontSize: 92,
                fontWeight: 800,
                background: "#f77b24",
                border: "6px solid #0f0f1a",
                borderRadius: 28,
                padding: "0 32px",
                transform: "rotate(-2deg)",
              }}
            >
              digital success
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 30,
            fontWeight: 700,
          }}
        >
          <div style={{ display: "flex" }}>
            Websites · AI · Branding · Marketing
          </div>
          <div style={{ display: "flex" }}>Bhavnagar, Gujarat</div>
        </div>
      </div>
    ),
    { ...size },
  );
}