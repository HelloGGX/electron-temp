import { app as o, BrowserWindow as i } from "electron";
import { createRequire as l } from "node:module";
import { fileURLToPath as p } from "node:url";
import n from "node:path";
l(import.meta.url);
const s = n.dirname(p(import.meta.url));
process.env.APP_ROOT = n.join(s, "..");
const t = process.env.VITE_DEV_SERVER_URL, E = n.join(process.env.APP_ROOT, "dist-electron"), d = n.join(process.env.APP_ROOT, "ui"), m = o.commandLine.getSwitchValue("url");
o.on("session-created", (r) => {
  r.setCertificateVerifyProc((R, c) => {
    c(0);
  });
});
process.env.VITE_PUBLIC = t ? n.join(process.env.APP_ROOT, "public") : d;
let e;
function a() {
  if (e = new i({
    webPreferences: {
      preload: n.join(s, "preload.mjs")
    }
  }), e.webContents.on("did-finish-load", () => {
    e == null || e.webContents.send("main-process-message", (/* @__PURE__ */ new Date()).toLocaleString());
  }), t)
    e.loadURL(`${t}#/login`);
  else {
    const r = `${m}#/login`;
    e.loadURL(r);
  }
}
o.on("window-all-closed", () => {
  process.platform !== "darwin" && (o.quit(), e = null);
});
o.on("activate", () => {
  i.getAllWindows().length === 0 && a();
});
o.whenReady().then(a);
export {
  E as MAIN_DIST,
  d as RENDERER_DIST,
  t as VITE_DEV_SERVER_URL
};
