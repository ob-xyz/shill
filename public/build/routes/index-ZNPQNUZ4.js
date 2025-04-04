import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-SBNNL67F.js";

// app/routes/index.tsx
var import_react = __toESM(require_react());

// public/img/ja.png
var ja_default = "/build/_assets/ja-OEIR53M5.png";

// app/routes/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Index() {
  (0, import_react.useEffect)(() => {
    const script = document.createElement("script");
    script.src = "https://js.hcaptcha.com/1/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: ja_default }, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 22,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inner-content", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "line" }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 25,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "We're a creative band of storytellers, tinkerers, and hobbyist engineers making free and open source software." }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 27,
        columnNumber: 7
      }, this) }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 26,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "line" }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 29,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { method: "post", action: "https://app.jeffamzn.com/subscription/form", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { className: "email", type: "email", name: "email", required: true, placeholder: "Email" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 31,
          columnNumber: 16
        }, this) }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 31,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { className: "submit", type: "submit", value: "Get in touch" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 32,
          columnNumber: 16
        }, this) }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 32,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-captcha", "data-sitekey": "db0e76a6-3d84-4378-abe6-88526faac9d2" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 33,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "90054", type: "hidden", name: "l", checked: true, value: "900546ea-120f-412d-8fd1-b64b07c8c26c" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 34,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "nonce" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 35,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/index.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/index.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-ZNPQNUZ4.js.map
