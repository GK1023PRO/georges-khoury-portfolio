import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt =
  "Georges Khoury — DevOps, Cloud and Infrastructure Engineer";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#0a0d12",
          color: "#e9edf3",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* Decorative border */}
        <div
          style={{
            position: "absolute",
            inset: "32px",
            display: "flex",
            border: "1px solid #232a35",
            borderRadius: "24px",
          }}
        />

        {/* Green decoration */}
        <div
          style={{
            position: "absolute",
            width: "420px",
            height: "420px",
            top: "-180px",
            right: "-120px",
            display: "flex",
            borderRadius: "9999px",
            backgroundColor: "#123d32",
            opacity: 0.7,
          }}
        />

        {/* Amber decoration */}
        <div
          style={{
            position: "absolute",
            width: "220px",
            height: "220px",
            bottom: "-120px",
            left: "-70px",
            display: "flex",
            borderRadius: "9999px",
            backgroundColor: "#3a2d12",
            opacity: 0.55,
          }}
        />

        <div
          style={{
            position: "relative",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "80px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: "26px",
              fontWeight: 700,
              marginBottom: "52px",
            }}
          >
            <span style={{ color: "#22e0a4" }}>&lt;</span>
            <span>Georges</span>
            <span style={{ color: "#22e0a4" }}> /&gt;</span>
          </div>

          <div
            style={{
              display: "flex",
              color: "#22e0a4",
              fontSize: "21px",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              marginBottom: "24px",
            }}
          >
            DevOps · Cloud · Infrastructure
          </div>

          <div
            style={{
              display: "flex",
              maxWidth: "970px",
              fontSize: "70px",
              lineHeight: 1.05,
              fontWeight: 800,
              letterSpacing: "-0.04em",
            }}
          >
            Building automated, secure, and observable systems.
          </div>

          <div
            style={{
              display: "flex",
              marginTop: "34px",
              color: "#8b95a5",
              fontSize: "27px",
            }}
          >
            Georges Khoury — Engineering Portfolio
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "42px",
              gap: "18px",
              fontSize: "20px",
              color: "#8b95a5",
            }}
          >
            <span>Docker</span>
            <span style={{ color: "#22e0a4" }}>•</span>
            <span>Kubernetes</span>
            <span style={{ color: "#22e0a4" }}>•</span>
            <span>AWS</span>
            <span style={{ color: "#22e0a4" }}>•</span>
            <span>Cybersecurity</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}