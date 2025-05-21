import { H as t, as as g, O as j, Q as h, a9 as N, at as v, Y as _, Z as S, au as p, a3 as $, U as k, V as C, av as b, aw as B } from "./index-ErFAu9zp.mjs";
import { forwardRef as R, useState as x, useRef as V, useCallback as w, useEffect as q } from "react";
function F({ equation: s, setEquation: c, inline: i }, e) {
  const r = (a) => {
    c(a.target.value);
  };
  return i && g(e) ? /* @__PURE__ */ t.jsxs("span", { className: "EquationEditor_inputBackground", children: [
    /* @__PURE__ */ t.jsx("span", { className: "EquationEditor_dollarSign", children: "$" }),
    /* @__PURE__ */ t.jsx(
      "input",
      {
        className: "EquationEditor_inlineEditor",
        value: s,
        onChange: r,
        autoFocus: !0,
        ref: e
      }
    ),
    /* @__PURE__ */ t.jsx("span", { className: "EquationEditor_dollarSign", children: "$" })
  ] }) : /* @__PURE__ */ t.jsxs("div", { className: "EquationEditor_inputBackground", children: [
    /* @__PURE__ */ t.jsx("span", { className: "EquationEditor_dollarSign", children: `$$
` }),
    /* @__PURE__ */ t.jsx(
      "textarea",
      {
        className: "EquationEditor_blockEditor",
        value: s,
        onChange: r,
        ref: e
      }
    ),
    /* @__PURE__ */ t.jsx("span", { className: "EquationEditor_dollarSign", children: `
$$` })
  ] });
}
const H = R(F);
function D({
  equation: s,
  inline: c,
  nodeKey: i
}) {
  const [e] = j(), r = h(), [a, f] = x(s), [u, E] = x(!1), d = V(null), m = w(
    (o) => {
      E(!1), e.update(() => {
        const n = N(i);
        v(n) && (n.setEquation(a), o && n.selectNext(0, 0));
      });
    },
    [e, a, i]
  );
  return q(() => {
    !u && a !== s && f(s);
  }, [u, s, a]), q(() => {
    if (r)
      return u ? _(
        e.registerCommand(
          $,
          (o) => {
            const n = document.activeElement;
            return d.current !== n && m(), !1;
          },
          p
        ),
        e.registerCommand(
          S,
          (o) => {
            const n = document.activeElement;
            return d.current === n ? (m(!0), !0) : !1;
          },
          p
        )
      ) : e.registerUpdateListener(({ editorState: o }) => {
        o.read(() => {
          const l = k();
          return C(l) && l.has(i) && l.getNodes().length === 1;
        }) && E(!0);
      });
  }, [e, i, m, u, r]), /* @__PURE__ */ t.jsx(t.Fragment, { children: u && r ? /* @__PURE__ */ t.jsx(
    H,
    {
      equation: a,
      setEquation: f,
      inline: c,
      ref: d
    }
  ) : /* @__PURE__ */ t.jsx(b, { onError: (o) => e._onError(o), fallback: null, children: /* @__PURE__ */ t.jsx(
    B,
    {
      equation: a,
      inline: c,
      onDoubleClick: () => {
        r && E(!0);
      }
    }
  ) }) });
}
export {
  D as default
};
//# sourceMappingURL=EquationComponent-D8TmeLje.mjs.map
