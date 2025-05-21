import { ae as _, af as C, ag as D, H as K } from "./index-ErFAu9zp.mjs";
import { useRef as L, useContext as O, useMemo as R, useEffect as v } from "react";
function x(e) {
  const l = e.transform();
  return new Set(l ? [l] : []);
}
function $({ initialEditor: e, children: l, initialNodes: u, initialTheme: E, skipCollabChecks: w, skipEditableListener: m }) {
  const h = L(!1), p = O(_);
  p == null && function(n, ...a) {
    const r = new URL("https://lexical.dev/docs/error"), i = new URLSearchParams();
    i.append("code", n);
    for (const t of a) i.append("v", t);
    throw r.search = i.toString(), Error(`Minified Lexical error #${n}; visit ${r.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
  }(9);
  const [s, { getTheme: k }] = p, M = R(() => {
    const n = E || k() || void 0, a = C(p, n);
    n !== void 0 && (e._config.theme = n), e._parentEditor = e._parentEditor || s;
    const r = e._createEditorArgs, i = r && r.namespace;
    if (u) {
      i || (e._config.namespace = s._config.namespace);
      for (let t of u) {
        let c = null, o = null;
        if (typeof t != "function") {
          const f = t;
          t = f.replace, c = f.with, o = f.withKlass || null;
        }
        const g = e._nodes.get(t.getType());
        e._nodes.set(t.getType(), { exportDOM: g ? g.exportDOM : void 0, klass: t, replace: c, replaceWithKlass: o, transforms: x(t) });
      }
    } else if (r && r.nodes) i || (e._config.namespace = s._config.namespace);
    else {
      const t = e._nodes = new Map(s._nodes);
      i || (e._config.namespace = s._config.namespace);
      for (const [c, o] of t) e._nodes.set(c, { exportDOM: o.exportDOM, klass: o.klass, replace: o.replace, replaceWithKlass: o.replaceWithKlass, transforms: x(o.klass) });
    }
    return [e, a];
  }, []), { isCollabActive: b, yjsDocMap: y } = D(), d = w || h.current || y.has(e.getKey());
  return v(() => {
    d && (h.current = !0);
  }, [d]), v(() => {
    if (!m) {
      const n = (a) => e.setEditable(a);
      return n(s.isEditable()), s.registerEditableListener(n);
    }
  }, [e, s, m]), K.jsx(_.Provider, { value: M, children: !b || d ? l : null });
}
export {
  $ as f
};
//# sourceMappingURL=LexicalNestedComposer.prod-DpReWwC4.mjs.map
