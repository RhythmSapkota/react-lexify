import { ax as ee, K as te, ag as se, O as ae, Q as ne, U as y, V as C, W as P, ay as re, Y as oe, Z as ie, $ as w, a0 as le, a1 as ce, a2 as ue, a3 as de, az as ge, aA as he, H as e, a4 as me, aB as fe, a5 as ve, aC as xe, aD as pe, aE as Ee, aF as je, aG as we, aH as Ce, a6 as Ie, a7 as Se, a8 as be, aI as He, a9 as T, aJ as F } from "./index-ErFAu9zp.mjs";
import { f as Ne } from "./LexicalNestedComposer.prod-DpReWwC4.mjs";
import { useRef as L, useState as N, useCallback as H, useEffect as z, Suspense as Re } from "react";
import { I as Me } from "./ImageResizer-Cj2q0Sze.mjs";
const Ve = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M22%203H2v18h20v-2h-2v-2h2v-2h-2v-2h2v-2h-2V9h2V7h-2V5h2V3zm-2%204v2h-2v2h2v2h-2v2h2v2h-2v2H4V5h14v2h2zm-6%202h-2v2h-2v2H8v2H6v2h2v-2h2v-2h2v-2h2v2h2v-2h-2V9zM6%207h2v2H6V7z'%20fill='%23000000'/%3e%3c/svg%3e", _ = /* @__PURE__ */ new Map(), O = ee("RIGHT_CLICK_IMAGE_COMMAND");
function ye(c) {
  let l = _.get(c);
  if (typeof l == "boolean")
    return l;
  throw l || (l = new Promise((a) => {
    const u = new Image();
    u.src = c, u.onload = () => a(!1), u.onerror = () => a(!0);
  }).then((a) => (_.set(c, a), a)), _.set(c, l), l);
}
function Le(c) {
  return c.toLowerCase().endsWith(".svg");
}
function _e({
  altText: c,
  className: l,
  imageRef: a,
  src: u,
  width: R,
  height: I,
  maxWidth: p,
  onError: m
}) {
  const [r, S] = N(null), d = Le(u);
  z(() => {
    if (a.current && d) {
      const { naturalWidth: g, naturalHeight: i } = a.current;
      S({
        height: i,
        width: g
      });
    }
  }, [a, d]);
  const E = ye(u);
  if (z(() => {
    E && m();
  }, [E, m]), E)
    return /* @__PURE__ */ e.jsx(K, {});
  const v = (() => {
    if (!d)
      return {
        height: I,
        maxWidth: p,
        width: R
      };
    const g = (r == null ? void 0 : r.width) || 200, i = (r == null ? void 0 : r.height) || 200;
    let h = g, x = i;
    if (h > p) {
      const j = p / h;
      h = p, x = Math.round(x * j);
    }
    const t = 500;
    if (x > t) {
      const j = t / x;
      x = t, h = Math.round(h * j);
    }
    return {
      height: x,
      maxWidth: p,
      width: h
    };
  })();
  return /* @__PURE__ */ e.jsx(
    "img",
    {
      className: l || void 0,
      src: u,
      alt: c,
      ref: a,
      style: v,
      onError: m,
      draggable: "false",
      onLoad: (g) => {
        if (d) {
          const i = g.currentTarget;
          S({
            height: i.naturalHeight,
            width: i.naturalWidth
          });
        }
      }
    }
  );
}
function K() {
  return /* @__PURE__ */ e.jsx(
    "img",
    {
      src: Ve,
      style: {
        height: 200,
        opacity: 0.2,
        width: 200
      },
      draggable: "false",
      alt: "Broken image"
    }
  );
}
function $e({
  src: c,
  altText: l,
  nodeKey: a,
  width: u,
  height: R,
  maxWidth: I,
  resizable: p,
  showCaption: m,
  caption: r,
  captionsEnabled: S
}) {
  const d = L(null), E = L(null), [f, v, g] = te(a), [i, h] = N(!1), { isCollabActive: x } = se(), [t] = ae(), [j, G] = N(null), k = L(null), [D, U] = N(!1), W = ne(), $ = H(
    (s) => {
      const n = y(), o = E.current;
      if (f && C(n) && n.getNodes().length === 1) {
        if (m)
          return P(null), s.preventDefault(), r.focus(), !0;
        if (o !== null && o !== document.activeElement)
          return s.preventDefault(), o.focus(), !0;
      }
      return !1;
    },
    [r, f, m]
  ), A = H(
    (s) => k.current === r || E.current === s.target ? (P(null), t.update(() => {
      v(!0);
      const n = t.getRootElement();
      n !== null && n.focus();
    }), !0) : !1,
    [r, t, v]
  ), M = H(
    (s) => {
      const n = s;
      return i ? !0 : n.target === d.current ? (n.shiftKey ? v(!f) : (g(), v(!0)), !0) : !1;
    },
    [i, f, v, g]
  ), V = H(
    (s) => {
      t.getEditorState().read(() => {
        const n = y();
        s.target.tagName === "IMG" && re(n) && n.getNodes().length === 1 && t.dispatchCommand(
          O,
          s
        );
      });
    },
    [t]
  );
  z(() => {
    const s = t.getRootElement(), n = oe(
      t.registerUpdateListener(({ editorState: o }) => {
        const b = o.read(() => y());
        C(b) ? G(b) : G(null);
      }),
      t.registerCommand(
        de,
        (o, b) => (k.current = b, !1),
        w
      ),
      t.registerCommand(
        ue,
        M,
        w
      ),
      t.registerCommand(
        O,
        M,
        w
      ),
      t.registerCommand(
        ce,
        (o) => o.target === d.current ? (o.preventDefault(), !0) : !1,
        w
      ),
      t.registerCommand(le, $, w),
      t.registerCommand(
        ie,
        A,
        w
      )
    );
    return s == null || s.addEventListener("contextmenu", V), () => {
      n(), s == null || s.removeEventListener("contextmenu", V);
    };
  }, [
    g,
    t,
    i,
    f,
    a,
    $,
    A,
    M,
    V,
    v
  ]);
  const J = () => {
    t.update(() => {
      const s = T(a);
      F(s) && s.setShowCaption(!0);
    });
  }, Q = (s, n) => {
    setTimeout(() => {
      h(!1);
    }, 200), t.update(() => {
      const o = T(a);
      F(o) && o.setWidthAndHeight(s, n);
    });
  }, Y = () => {
    h(!0);
  }, { historyState: Z } = ge(), {
    settings: { showNestedEditorTreeView: q }
  } = he(), X = f && C(j) && !i, B = (f || i) && W;
  return /* @__PURE__ */ e.jsx(Re, { fallback: null, children: /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx("div", { draggable: X, children: D ? /* @__PURE__ */ e.jsx(K, {}) : /* @__PURE__ */ e.jsx(
      _e,
      {
        className: B ? `focused ${C(j) ? "draggable" : ""}` : null,
        src: c,
        altText: l,
        imageRef: d,
        width: u,
        height: R,
        maxWidth: I,
        onError: () => U(!0)
      }
    ) }),
    m && /* @__PURE__ */ e.jsx("div", { className: "image-caption-container", children: /* @__PURE__ */ e.jsxs(Ne, { initialEditor: r, children: [
      /* @__PURE__ */ e.jsx(me, {}),
      /* @__PURE__ */ e.jsx(fe, {}),
      /* @__PURE__ */ e.jsx(ve, {}),
      /* @__PURE__ */ e.jsx(xe, {}),
      /* @__PURE__ */ e.jsx(pe, {}),
      /* @__PURE__ */ e.jsx(Ee, {}),
      x ? /* @__PURE__ */ e.jsx(
        je,
        {
          id: r.getKey(),
          providerFactory: we,
          shouldBootstrap: !0
        }
      ) : /* @__PURE__ */ e.jsx(Ce, { externalHistoryState: Z }),
      /* @__PURE__ */ e.jsx(
        Ie,
        {
          contentEditable: /* @__PURE__ */ e.jsx(
            be,
            {
              placeholder: "Enter a caption...",
              placeholderClassName: "ImageNode__placeholder",
              className: "ImageNode__contentEditable"
            }
          ),
          ErrorBoundary: Se
        }
      ),
      q === !0 ? /* @__PURE__ */ e.jsx(He, {}) : null
    ] }) }),
    p && C(j) && B && /* @__PURE__ */ e.jsx(
      Me,
      {
        showCaption: m,
        setShowCaption: J,
        editor: t,
        buttonRef: E,
        imageRef: d,
        maxWidth: I,
        onResizeStart: Y,
        onResizeEnd: Q,
        captionsEnabled: !D && S
      }
    )
  ] }) });
}
export {
  O as RIGHT_CLICK_IMAGE_COMMAND,
  $e as default
};
//# sourceMappingURL=ImageComponent-22uW0ftV.mjs.map
