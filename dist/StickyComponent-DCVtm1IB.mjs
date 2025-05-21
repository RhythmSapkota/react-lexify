import { aK as z, O as w, ag as _, az as P, H as r, aF as X, aG as B, aH as Y, aL as H, a7 as M, a8 as T, M as v, a9 as h, aM as C } from "./index-ErFAu9zp.mjs";
import { f as $ } from "./LexicalNestedComposer.prod-DpReWwC4.mjs";
import { useRef as R, useEffect as b, useLayoutEffect as O } from "react";
const W = {
  ...z,
  paragraph: "StickyEditorTheme__paragraph"
};
function y(g, l) {
  const u = g.style, d = l.rootElementRect, m = d !== null ? d.left : 0, c = d !== null ? d.top : 0;
  u.top = c + l.y + "px", u.left = m + l.x + "px";
}
function U({
  x: g,
  y: l,
  nodeKey: u,
  color: d,
  caption: m
}) {
  const [c] = w(), a = R(null), f = R({
    isDragging: !1,
    offsetX: 0,
    offsetY: 0,
    rootElementRect: null,
    x: 0,
    y: 0
  }), { isCollabActive: L } = _();
  b(() => {
    const t = f.current;
    t.x = g, t.y = l;
    const n = a.current;
    n !== null && y(n, t);
  }, [g, l]), O(() => {
    const t = f.current, n = new ResizeObserver((s) => {
      for (let i = 0; i < s.length; i++) {
        const p = s[i], { target: S } = p;
        t.rootElementRect = S.getBoundingClientRect();
        const x = a.current;
        x !== null && y(x, t);
      }
    }), e = c.registerRootListener(
      (s, i) => {
        i !== null && n.unobserve(i), s !== null && n.observe(s);
      }
    ), o = () => {
      const s = c.getRootElement(), i = a.current;
      s !== null && i !== null && (t.rootElementRect = s.getBoundingClientRect(), y(i, t));
    };
    return window.addEventListener("resize", o), () => {
      window.removeEventListener("resize", o), e();
    };
  }, [c]), b(() => {
    const t = a.current;
    t !== null && setTimeout(() => {
      t.style.setProperty(
        "transition",
        "top 0.3s ease 0s, left 0.3s ease 0s"
      );
    }, 500);
  }, []);
  const k = (t) => {
    const n = a.current, e = f.current, o = e.rootElementRect, s = v(n);
    n !== null && e.isDragging && o !== null && (e.x = t.pageX / s - e.offsetX - o.left, e.y = t.pageY / s - e.offsetY - o.top, y(n, e));
  }, E = (t) => {
    const n = a.current, e = f.current;
    n !== null && (e.isDragging = !1, n.classList.remove("dragging"), c.update(() => {
      const o = h(u);
      C(o) && o.setPosition(e.x, e.y);
    })), document.removeEventListener("pointermove", k), document.removeEventListener("pointerup", E);
  }, j = () => {
    c.update(() => {
      const t = h(u);
      C(t) && t.remove();
    });
  }, N = () => {
    c.update(() => {
      const t = h(u);
      C(t) && t.toggleColor();
    });
  }, { historyState: D } = P();
  return /* @__PURE__ */ r.jsx("div", { ref: a, className: "sticky-note-container", children: /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: `sticky-note ${d}`,
      onPointerDown: (t) => {
        const n = a.current;
        if (n == null || t.button === 2 || t.target !== n.firstChild)
          return;
        const e = n, o = f.current;
        if (e !== null) {
          const { top: s, left: i } = e.getBoundingClientRect(), p = v(e);
          o.offsetX = t.clientX / p - i, o.offsetY = t.clientY / p - s, o.isDragging = !0, e.classList.add("dragging"), document.addEventListener("pointermove", k), document.addEventListener("pointerup", E), t.preventDefault();
        }
      },
      children: [
        /* @__PURE__ */ r.jsx(
          "button",
          {
            onClick: j,
            className: "delete",
            "aria-label": "Delete sticky note",
            title: "Delete",
            children: "X"
          }
        ),
        /* @__PURE__ */ r.jsx(
          "button",
          {
            onClick: N,
            className: "color",
            "aria-label": "Change sticky note color",
            title: "Color",
            children: /* @__PURE__ */ r.jsx("i", { className: "bucket" })
          }
        ),
        /* @__PURE__ */ r.jsxs(
          $,
          {
            initialEditor: m,
            initialTheme: W,
            children: [
              L ? /* @__PURE__ */ r.jsx(
                X,
                {
                  id: m.getKey(),
                  providerFactory: B,
                  shouldBootstrap: !0
                }
              ) : /* @__PURE__ */ r.jsx(Y, { externalHistoryState: D }),
              /* @__PURE__ */ r.jsx(
                H,
                {
                  contentEditable: /* @__PURE__ */ r.jsx(
                    T,
                    {
                      placeholder: "What's up?",
                      placeholderClassName: "StickyNode__placeholder",
                      className: "StickyNode__contentEditable"
                    }
                  ),
                  ErrorBoundary: M
                }
              )
            ]
          }
        )
      ]
    }
  ) });
}
export {
  U as default
};
//# sourceMappingURL=StickyComponent-DCVtm1IB.mjs.map
