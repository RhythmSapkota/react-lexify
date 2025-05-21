import { O as P, K as g, Y as C, a2 as k, $ as O, U as b, H as e, ad as I, a9 as S, an as V, ao as $, V as E, ag as y, ap as f } from "./index-ErFAu9zp.mjs";
import { useMemo as D, useState as R, useRef as v, useEffect as A } from "react";
function T(o) {
  return o.reduce((n, l) => n + l.votes.length, 0);
}
function U({
  option: o,
  index: n,
  options: l,
  totalVotes: i,
  withPollNode: p
}) {
  const { clientID: r } = y(), h = v(null), x = o.votes, _ = x.indexOf(r) !== -1, a = x.length, N = o.text;
  return /* @__PURE__ */ e.jsxs("div", { className: "PollNode__optionContainer", children: [
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: f(
          "PollNode__optionCheckboxWrapper",
          _ && "PollNode__optionCheckboxChecked"
        ),
        children: /* @__PURE__ */ e.jsx(
          "input",
          {
            ref: h,
            className: "PollNode__optionCheckbox",
            type: "checkbox",
            onChange: (d) => {
              p((s) => {
                s.toggleVote(o, r);
              });
            },
            checked: _
          }
        )
      }
    ),
    /* @__PURE__ */ e.jsxs("div", { className: "PollNode__optionInputWrapper", children: [
      /* @__PURE__ */ e.jsx(
        "div",
        {
          className: "PollNode__optionInputVotes",
          style: { width: `${a === 0 ? 0 : a / i * 100}%` }
        }
      ),
      /* @__PURE__ */ e.jsx("span", { className: "PollNode__optionInputVotesCount", children: a > 0 && (a === 1 ? "1 vote" : `${a} votes`) }),
      /* @__PURE__ */ e.jsx(
        "input",
        {
          className: "PollNode__optionInput",
          type: "text",
          value: N,
          onChange: (d) => {
            const s = d.target, t = s.value, c = s.selectionStart, u = s.selectionEnd;
            p(
              (j) => {
                j.setOptionText(o, t);
              },
              () => {
                s.selectionStart = c, s.selectionEnd = u;
              }
            );
          },
          placeholder: `Option ${n + 1}`
        }
      )
    ] }),
    /* @__PURE__ */ e.jsx(
      "button",
      {
        disabled: l.length < 3,
        className: f(
          "PollNode__optionDelete",
          l.length < 3 && "PollNode__optionDeleteDisabled"
        ),
        "aria-label": "Remove",
        onClick: () => {
          p((d) => {
            d.deleteOption(o);
          });
        }
      }
    )
  ] });
}
function F({
  question: o,
  options: n,
  nodeKey: l
}) {
  const [i] = P(), p = D(() => T(n), [n]), [r, h, x] = g(l), [m, _] = R(null), a = v(null);
  A(() => C(
    i.registerUpdateListener(({ editorState: t }) => {
      _(t.read(() => b()));
    }),
    i.registerCommand(
      k,
      (t) => {
        const c = t;
        return c.target === a.current ? (c.shiftKey || x(), h(!r), !0) : !1;
      },
      O
    )
  ), [x, i, r, l, h]);
  const N = (t, c) => {
    i.update(
      () => {
        const u = S(l);
        V(u) && t(u);
      },
      { onUpdate: c }
    );
  }, d = () => {
    N((t) => {
      t.addOption($());
    });
  }, s = E(m) && r;
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: `PollNode__container ${s ? "focused" : ""}`,
      ref: a,
      children: /* @__PURE__ */ e.jsxs("div", { className: "PollNode__inner", children: [
        /* @__PURE__ */ e.jsx("h2", { className: "PollNode__heading", children: o }),
        n.map((t, c) => {
          const u = t.uid;
          return /* @__PURE__ */ e.jsx(
            U,
            {
              withPollNode: N,
              option: t,
              index: c,
              options: n,
              totalVotes: p
            },
            u
          );
        }),
        /* @__PURE__ */ e.jsx("div", { className: "PollNode__footer", children: /* @__PURE__ */ e.jsx(I, { onClick: d, small: !0, children: "Add Option" }) })
      ] })
    }
  );
}
export {
  F as default
};
//# sourceMappingURL=PollComponent-I4Ei9BWB.mjs.map
