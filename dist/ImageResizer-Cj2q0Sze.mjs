import { H as c, M as E } from "./index-ErFAu9zp.mjs";
import { useRef as z } from "react";
function x(m, g, p) {
  return Math.min(Math.max(m, g), p);
}
const r = {
  east: 1,
  north: 8,
  south: 2,
  west: 4
};
function B({
  onResizeStart: m,
  onResizeEnd: g,
  buttonRef: p,
  imageRef: w,
  maxWidth: P,
  editor: v,
  showCaption: b,
  setShowCaption: N,
  captionsEnabled: C
}) {
  const y = z(null), d = z({
    priority: "",
    value: "default"
  }), f = z({
    currentHeight: 0,
    currentWidth: 0,
    direction: 0,
    isResizing: !1,
    ratio: 0,
    startHeight: 0,
    startWidth: 0,
    startX: 0,
    startY: 0
  }), a = v.getRootElement(), W = P || (a !== null ? a.getBoundingClientRect().width - 20 : 100), M = a !== null ? a.getBoundingClientRect().height - 20 : 100, H = 100, X = 100, $ = (t) => {
    const s = t === r.east || t === r.west, e = t === r.north || t === r.south, u = t & r.north && t & r.west || t & r.south && t & r.east, o = s ? "ew" : e ? "ns" : u ? "nwse" : "nesw";
    a !== null && a.style.setProperty(
      "cursor",
      `${o}-resize`,
      "important"
    ), document.body !== null && (document.body.style.setProperty(
      "cursor",
      `${o}-resize`,
      "important"
    ), d.current.value = document.body.style.getPropertyValue(
      "-webkit-user-select"
    ), d.current.priority = document.body.style.getPropertyPriority(
      "-webkit-user-select"
    ), document.body.style.setProperty(
      "-webkit-user-select",
      "none",
      "important"
    ));
  }, L = () => {
    a !== null && a.style.setProperty("cursor", "text"), document.body !== null && (document.body.style.setProperty("cursor", "default"), document.body.style.setProperty(
      "-webkit-user-select",
      d.current.value,
      d.current.priority
    ));
  }, l = (t, s) => {
    if (!v.isEditable())
      return;
    const e = w.current, u = y.current;
    if (e !== null && u !== null) {
      t.preventDefault();
      const { width: o, height: h } = e.getBoundingClientRect(), n = E(e), i = f.current;
      i.startWidth = o, i.startHeight = h, i.ratio = o / h, i.currentWidth = o, i.currentHeight = h, i.startX = t.clientX / n, i.startY = t.clientY / n, i.isResizing = !0, i.direction = s, $(s), m(), u.classList.add("image-control-wrapper--resizing"), e.style.height = `${h}px`, e.style.width = `${o}px`, document.addEventListener("pointermove", R), document.addEventListener("pointerup", D);
    }
  }, R = (t) => {
    const s = w.current, e = f.current, u = e.direction & (r.east | r.west), o = e.direction & (r.south | r.north);
    if (s !== null && e.isResizing) {
      const h = E(s);
      if (u && o) {
        let n = Math.floor(e.startX - t.clientX / h);
        n = e.direction & r.east ? -n : n;
        const i = x(
          e.startWidth + n,
          H,
          W
        ), j = i / e.ratio;
        s.style.width = `${i}px`, s.style.height = `${j}px`, e.currentHeight = j, e.currentWidth = i;
      } else if (o) {
        let n = Math.floor(e.startY - t.clientY / h);
        n = e.direction & r.south ? -n : n;
        const i = x(
          e.startHeight + n,
          X,
          M
        );
        s.style.height = `${i}px`, e.currentHeight = i;
      } else {
        let n = Math.floor(e.startX - t.clientX / h);
        n = e.direction & r.east ? -n : n;
        const i = x(
          e.startWidth + n,
          H,
          W
        );
        s.style.width = `${i}px`, e.currentWidth = i;
      }
    }
  }, D = () => {
    const t = w.current, s = f.current, e = y.current;
    if (t !== null && e !== null && s.isResizing) {
      const u = s.currentWidth, o = s.currentHeight;
      s.startWidth = 0, s.startHeight = 0, s.ratio = 0, s.startX = 0, s.startY = 0, s.currentWidth = 0, s.currentHeight = 0, s.isResizing = !1, e.classList.remove("image-control-wrapper--resizing"), L(), g(u, o), document.removeEventListener("pointermove", R), document.removeEventListener("pointerup", D);
    }
  };
  return /* @__PURE__ */ c.jsxs("div", { ref: y, children: [
    !b && C && /* @__PURE__ */ c.jsx(
      "button",
      {
        className: "image-caption-button",
        ref: p,
        onClick: () => {
          N(!b);
        },
        children: "Add Caption"
      }
    ),
    /* @__PURE__ */ c.jsx(
      "div",
      {
        className: "image-resizer image-resizer-n",
        onPointerDown: (t) => {
          l(t, r.north);
        }
      }
    ),
    /* @__PURE__ */ c.jsx(
      "div",
      {
        className: "image-resizer image-resizer-ne",
        onPointerDown: (t) => {
          l(t, r.north | r.east);
        }
      }
    ),
    /* @__PURE__ */ c.jsx(
      "div",
      {
        className: "image-resizer image-resizer-e",
        onPointerDown: (t) => {
          l(t, r.east);
        }
      }
    ),
    /* @__PURE__ */ c.jsx(
      "div",
      {
        className: "image-resizer image-resizer-se",
        onPointerDown: (t) => {
          l(t, r.south | r.east);
        }
      }
    ),
    /* @__PURE__ */ c.jsx(
      "div",
      {
        className: "image-resizer image-resizer-s",
        onPointerDown: (t) => {
          l(t, r.south);
        }
      }
    ),
    /* @__PURE__ */ c.jsx(
      "div",
      {
        className: "image-resizer image-resizer-sw",
        onPointerDown: (t) => {
          l(t, r.south | r.west);
        }
      }
    ),
    /* @__PURE__ */ c.jsx(
      "div",
      {
        className: "image-resizer image-resizer-w",
        onPointerDown: (t) => {
          l(t, r.west);
        }
      }
    ),
    /* @__PURE__ */ c.jsx(
      "div",
      {
        className: "image-resizer image-resizer-nw",
        onPointerDown: (t) => {
          l(t, r.north | r.west);
        }
      }
    )
  ] });
}
export {
  B as I
};
//# sourceMappingURL=ImageResizer-Cj2q0Sze.mjs.map
