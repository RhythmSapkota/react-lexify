import { H as c, aj as T, O as $, Q as B, K as F, Y as _, a2 as J, ak as L, $ as Q, a9 as b, al as W, am as O } from "./index-ErFAu9zp.mjs";
import { useState as j, useEffect as I, useRef as E, useCallback as C, useMemo as Y } from "react";
import { I as q } from "./ImageResizer-Cj2q0Sze.mjs";
const G = (e) => {
  var f;
  const a = (f = e == null ? void 0 : e.firstElementChild) == null ? void 0 : f.firstElementChild, u = e.getAttribute("viewBox");
  if (u != null) {
    const s = u.split(" ");
    e.setAttribute("width", s[2]), e.setAttribute("height", s[3]);
  }
  a && a.tagName === "style" && a.remove();
};
function P({
  elements: e,
  files: a,
  imageContainerRef: u,
  appState: f,
  rootClassName: s = null,
  width: l = "inherit",
  height: m = "inherit"
}) {
  const [o, x] = j(null);
  I(() => {
    (async () => {
      const n = await T({
        appState: f,
        elements: e,
        files: a
      });
      G(n), n.setAttribute("width", "100%"), n.setAttribute("height", "100%"), n.setAttribute("display", "block"), x(n);
    })();
  }, [e, a, f]);
  const d = {};
  return l !== "inherit" && (d.width = `${l}px`), m !== "inherit" && (d.height = `${m}px`), /* @__PURE__ */ c.jsx(
    "div",
    {
      ref: (p) => {
        p && u && (u.current = p);
      },
      className: s ?? "",
      style: d,
      dangerouslySetInnerHTML: { __html: (o == null ? void 0 : o.outerHTML) ?? "" }
    }
  );
}
function Z({
  nodeKey: e,
  data: a,
  width: u,
  height: f
}) {
  const [s] = $(), l = B(), [m, o] = j(
    a === "[]" && s.isEditable()
  ), x = E(null), d = E(null), p = E(null), [n, R, g] = F(e), [S, M] = j(!1);
  I(() => {
    if (!l) {
      n && g();
      return;
    }
    return _(
      s.registerCommand(
        J,
        (t) => {
          const r = d.current, i = t.target;
          return S ? !0 : r !== null && L(i) && r.contains(i) ? (t.shiftKey || g(), R(!n), t.detail > 1 && o(!0), !0) : !1;
        },
        Q
      )
    );
  }, [g, s, n, S, R, l]);
  const k = C(() => (o(!1), s.update(() => {
    const t = b(e);
    t && t.remove();
  })), [s, e]), v = (t, r, i) => s.update(() => {
    const w = b(e);
    O(w) && (t && t.length > 0 || Object.keys(i).length > 0 ? w.setData(
      JSON.stringify({
        appState: r,
        elements: t,
        files: i
      })
    ) : w.remove());
  }), D = () => {
    M(!0);
  }, y = (t, r) => {
    setTimeout(() => {
      M(!1);
    }, 200), s.update(() => {
      const i = b(e);
      O(i) && (i.setWidth(t), i.setHeight(r));
    });
  }, z = C(() => {
    o(!0);
  }, []), {
    elements: h = [],
    files: N = {},
    appState: A = {}
  } = Y(() => JSON.parse(a), [a]), H = C(() => {
    o(!1), h.length === 0 && s.update(() => {
      const t = b(e);
      t && t.remove();
    });
  }, [s, e, h.length]);
  return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    l && m && /* @__PURE__ */ c.jsx(
      W,
      {
        initialElements: h,
        initialFiles: N,
        initialAppState: A,
        isShown: m,
        onDelete: k,
        onClose: H,
        onSave: (t, r, i) => {
          v(t, r, i), o(!1);
        },
        closeOnClickOutside: !1
      }
    ),
    h.length > 0 && /* @__PURE__ */ c.jsxs(
      "button",
      {
        ref: d,
        className: `excalidraw-button ${n ? "selected" : ""}`,
        children: [
          /* @__PURE__ */ c.jsx(
            P,
            {
              imageContainerRef: x,
              className: "image",
              elements: h,
              files: N,
              appState: A,
              width: u,
              height: f
            }
          ),
          n && l && /* @__PURE__ */ c.jsx(
            "div",
            {
              className: "image-edit-button",
              role: "button",
              tabIndex: 0,
              onMouseDown: (t) => t.preventDefault(),
              onClick: z
            }
          ),
          (n || S) && l && /* @__PURE__ */ c.jsx(
            q,
            {
              buttonRef: p,
              showCaption: !0,
              setShowCaption: () => null,
              imageRef: x,
              editor: s,
              onResizeStart: D,
              onResizeEnd: y,
              captionsEnabled: !0
            }
          )
        ]
      }
    )
  ] });
}
export {
  Z as default
};
//# sourceMappingURL=ExcalidrawComponent-BXyXQeSC.mjs.map
