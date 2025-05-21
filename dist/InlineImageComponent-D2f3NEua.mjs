import { J as T, K as A, O as U, Q as M, U as _, V as I, W as D, Y as O, Z as W, $ as x, a0 as z, a1 as H, a2 as J, a3 as Q, H as e, a4 as V, a5 as Y, a6 as Z, a7 as q, a8 as G, a9 as K, aa as X, ab as ee, ac as te, ad as ae } from "./index-ErFAu9zp.mjs";
import { f as ne } from "./LexicalNestedComposer.prod-DpReWwC4.mjs";
import { useRef as v, useState as E, useCallback as P, useEffect as se, Suspense as le } from "react";
const $ = /* @__PURE__ */ new Set();
function oe(n) {
  if (!$.has(n))
    throw new Promise((d) => {
      const s = new Image();
      s.src = n, s.onload = () => {
        $.add(n), d(null);
      };
    });
}
function ie({
  altText: n,
  className: d,
  imageRef: s,
  src: f,
  width: l,
  height: r,
  position: o
}) {
  return oe(f), /* @__PURE__ */ e.jsx(
    "img",
    {
      className: d || void 0,
      src: f,
      alt: n,
      ref: s,
      "data-position": o,
      style: {
        display: "block",
        height: r,
        width: l
      },
      draggable: "false"
    }
  );
}
function re({
  activeEditor: n,
  nodeKey: d,
  onClose: s
}) {
  const l = n.getEditorState().read(
    () => K(d)
  ), [r, o] = E(l.getAltText()), [j, S] = E(l.getShowCaption()), [C, p] = E(l.getPosition()), h = (u) => {
    S(u.target.checked);
  }, c = (u) => {
    p(u.target.value);
  }, m = () => {
    const u = { altText: r, position: C, showCaption: j };
    l && n.update(() => {
      l.update(u);
    }), s();
  };
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx("div", { style: { marginBottom: "1em" }, children: /* @__PURE__ */ e.jsx(
      X,
      {
        label: "Alt Text",
        placeholder: "Descriptive alternative text",
        onChange: o,
        value: r,
        "data-test-id": "image-modal-alt-text-input"
      }
    ) }),
    /* @__PURE__ */ e.jsxs(
      ee,
      {
        style: { marginBottom: "1em", width: "208px" },
        value: C,
        label: "Position",
        name: "position",
        id: "position-select",
        onChange: c,
        children: [
          /* @__PURE__ */ e.jsx("option", { value: "left", children: "Left" }),
          /* @__PURE__ */ e.jsx("option", { value: "right", children: "Right" }),
          /* @__PURE__ */ e.jsx("option", { value: "full", children: "Full Width" })
        ]
      }
    ),
    /* @__PURE__ */ e.jsxs("div", { className: "Input__wrapper", children: [
      /* @__PURE__ */ e.jsx(
        "input",
        {
          id: "caption",
          type: "checkbox",
          checked: j,
          onChange: h
        }
      ),
      /* @__PURE__ */ e.jsx("label", { htmlFor: "caption", children: "Show Caption" })
    ] }),
    /* @__PURE__ */ e.jsx(te, { children: /* @__PURE__ */ e.jsx(
      ae,
      {
        "data-test-id": "image-modal-file-upload-btn",
        onClick: () => m(),
        children: "Confirm"
      }
    ) })
  ] });
}
function me({
  src: n,
  altText: d,
  nodeKey: s,
  width: f,
  height: l,
  showCaption: r,
  caption: o,
  position: j
}) {
  const [S, C] = T(), p = v(null), h = v(null), [c, m, u] = A(s), [t] = U(), [N, B] = E(null), w = v(null), k = M(), y = P(
    (i) => {
      const g = _(), a = h.current;
      if (c && I(g) && g.getNodes().length === 1) {
        if (r)
          return D(null), i.preventDefault(), o.focus(), !0;
        if (a !== null && a !== document.activeElement)
          return i.preventDefault(), a.focus(), !0;
      }
      return !1;
    },
    [o, c, r]
  ), R = P(
    (i) => w.current === o || h.current === i.target ? (D(null), t.update(() => {
      m(!0);
      const g = t.getRootElement();
      g !== null && g.focus();
    }), !0) : !1,
    [o, t, m]
  );
  se(() => {
    let i = !0;
    const g = O(
      t.registerUpdateListener(({ editorState: a }) => {
        i && B(a.read(() => _()));
      }),
      t.registerCommand(
        Q,
        (a, b) => (w.current = b, !1),
        x
      ),
      t.registerCommand(
        J,
        (a) => {
          const b = a;
          return b.target === p.current ? (b.shiftKey ? m(!c) : (u(), m(!0)), !0) : !1;
        },
        x
      ),
      t.registerCommand(
        H,
        (a) => a.target === p.current ? (a.preventDefault(), !0) : !1,
        x
      ),
      t.registerCommand(z, y, x),
      t.registerCommand(
        W,
        R,
        x
      )
    );
    return () => {
      i = !1, g();
    };
  }, [
    u,
    t,
    c,
    s,
    y,
    R,
    m
  ]);
  const F = c && I(N), L = c && k;
  return /* @__PURE__ */ e.jsxs(le, { fallback: null, children: [
    /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsxs("span", { draggable: F, children: [
        k && /* @__PURE__ */ e.jsx(
          "button",
          {
            className: "image-edit-button",
            ref: h,
            onClick: () => {
              C("Update Inline Image", (i) => /* @__PURE__ */ e.jsx(
                re,
                {
                  activeEditor: t,
                  nodeKey: s,
                  onClose: i
                }
              ));
            },
            children: "Edit"
          }
        ),
        /* @__PURE__ */ e.jsx(
          ie,
          {
            className: L ? `focused ${I(N) ? "draggable" : ""}` : null,
            src: n,
            altText: d,
            imageRef: p,
            width: f,
            height: l,
            position: j
          }
        )
      ] }),
      r && /* @__PURE__ */ e.jsx("span", { className: "image-caption-container", children: /* @__PURE__ */ e.jsxs(ne, { initialEditor: o, children: [
        /* @__PURE__ */ e.jsx(V, {}),
        /* @__PURE__ */ e.jsx(Y, {}),
        /* @__PURE__ */ e.jsx(
          Z,
          {
            contentEditable: /* @__PURE__ */ e.jsx(
              G,
              {
                placeholder: "Enter a caption...",
                placeholderClassName: "InlineImageNode__placeholder",
                className: "InlineImageNode__contentEditable"
              }
            ),
            ErrorBoundary: q
          }
        )
      ] }) })
    ] }),
    S
  ] });
}
export {
  re as UpdateInlineImageDialog,
  me as default
};
//# sourceMappingURL=InlineImageComponent-D2f3NEua.mjs.map
