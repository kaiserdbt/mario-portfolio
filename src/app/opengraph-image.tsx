import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { profile } from "@/data/profile";

export const alt = `${profile.name} · ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const photo = await readFile(join(process.cwd(), "src/app/icon.png"));
  const photoSrc = `data:image/png;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b0b12",
          color: "#ececf2",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: 26,
            color: "#9a9ab0",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 9999,
              background: "#7c6bff",
            }}
          />
          {profile.portfolioUrl.replace("https://", "")}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "56px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photoSrc}
            width={260}
            height={260}
            alt=""
            style={{ borderRadius: 28 }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              maxWidth: 720,
            }}
          >
            <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: "-2px" }}>
              {profile.name}
            </div>
            <div style={{ fontSize: 36, color: "#7c6bff" }}>{profile.role}</div>
            <div style={{ fontSize: 26, color: "#9a9ab0", lineHeight: 1.4 }}>
              {profile.headline}
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
