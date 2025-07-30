import {
  Link,
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-WP7OK6OR.js";

// app/routes/index.tsx
var import_react = __toESM(require_react());

// public/img/ja5.png
var ja5_default = "/build/_assets/ja5-SVJC7DAI.png";

// public/img/promoted-ads.png
var promoted_ads_default = "/build/_assets/promoted-ads-D5BGC74D.png";

// public/img/takeover-ads.png
var takeover_ads_default = "/build/_assets/takeover-ads-XZR7ZOND.png";

// public/img/text-ads.png
var text_ads_default = "/build/_assets/text-ads-3LZ3C6FV.png";

// public/img/in.png
var in_default = "/build/_assets/in-XDOSVCXC.png";

// public/img/x.png
var x_default = "/build/_assets/x-QIZPIJFO.png";

// public/img/email.png
var email_default = "/build/_assets/email-PZRV7BBX.png";

// app/routes/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var rotatingWords = ["Jeffamzn.", "The Poast."];
var ads = [
  {
    image: promoted_ads_default,
    title: "Promoted Ads",
    description: "Promoted ads allow you to showcase your product or service with a single image or gif."
  },
  {
    image: takeover_ads_default,
    title: "Takeover Ads",
    description: "Our most premium mass-reach placements that drive more engagement and results."
  },
  {
    image: text_ads_default,
    title: "Text Ads",
    description: "The easiest way to promote a press release or quick thought to our most loyal readers."
  }
];
function Index() {
  const [index, setIndex] = (0, import_react.useState)(0);
  const [fadeOut, setFadeOut] = (0, import_react.useState)(false);
  const [adIndex, setAdIndex] = (0, import_react.useState)(0);
  const next = () => {
    setAdIndex((prev2) => (prev2 + 1) % ads.length);
  };
  const prev = () => {
    setAdIndex((prev2) => (prev2 - 1 + ads.length) % ads.length);
  };
  (0, import_react.useEffect)(() => {
    const interval = setInterval(() => {
      setFadeOut(true);
      setTimeout(() => {
        setIndex((prev2) => (prev2 + 1) % rotatingWords.length);
        setFadeOut(false);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, []);
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: ja5_default }, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 75,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 74,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inner-content", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { children: "SHILLL" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 80,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: [
          "Makers of ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `${fadeOut ? "fade-out" : "fade-in"}`, children: rotatingWords[index] }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 82,
            columnNumber: 23
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/index.tsx",
          lineNumber: 81,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Sign up to stay informed." }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 84,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 79,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "form",
        {
          method: "post",
          action: "https://app.jeffamzn.com/subscription/form",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "input-wrapper", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "input",
                {
                  className: "email",
                  type: "email",
                  name: "email",
                  required: true,
                  placeholder: "Email Address *"
                },
                void 0,
                false,
                {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 91,
                  columnNumber: 9
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "submit", type: "submit", children: "Subscribe" }, void 0, false, {
                fileName: "app/routes/index.tsx",
                lineNumber: 98,
                columnNumber: 9
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/index.tsx",
              lineNumber: 90,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "input",
              {
                id: "6d48f",
                type: "hidden",
                name: "l",
                value: "6d48fffe-7d37-4c14-b317-3e4cda33a647"
              },
              void 0,
              false,
              {
                fileName: "app/routes/index.tsx",
                lineNumber: 103,
                columnNumber: 7
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "nonce" }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 109,
              columnNumber: 7
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "app/routes/index.tsx",
          lineNumber: 86,
          columnNumber: 5
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/index.tsx",
      lineNumber: 78,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 77,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "footer", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "footer-top", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "footer-logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: ja5_default, alt: "Logo" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 117,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 116,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "footer-links", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "column", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { children: "Company" }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 121,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", children: "About" }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 122,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "mailto:press@shilll.com", children: "Press" }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 123,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "mailto:job@shilll.com", children: "Careers" }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 124,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/index.tsx",
            lineNumber: 120,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "column", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { children: "Ads" }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 127,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "mailto:plan@shilll.com", children: "Request Plan" }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 128,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://app.jeffamzn.com/campaign/9f60dcc3-107c-4075-94a8-cb5c96a36423/6716369b-5785-4c74-be76-73af2558eebb", rel: "noopener noreferrer", children: "Media Kit" }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 129,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://app.jeffamzn.com/campaign/b80e7e1c-c9b6-4eee-9809-602e24a0a2f8/6716369b-5785-4c74-be76-73af2558eebb", rel: "noopener noreferrer", children: "Rate Card" }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 130,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/index.tsx",
            lineNumber: 126,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "column", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { children: "Support" }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 133,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", children: "Getting Started" }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 134,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", children: "Archive" }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 135,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "mailto:hey@shilll.com", children: "Contact" }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 136,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/index.tsx",
            lineNumber: 132,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "column", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { children: "Shilll" }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 139,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "mailto:buy@shilll.com", children: "Jeffamzn" }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 140,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", children: "The Poast" }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 141,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/index.tsx",
            lineNumber: 138,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/index.tsx",
          lineNumber: 119,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 115,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "footer-bottom", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "footer-meta", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://policies.google.com/privacy?hl=en-US", target: "_blank", rel: "noopener noreferrer", children: "Privacy Policy" }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 148,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://policies.google.com/terms?hl=en-US", target: "_blank", rel: "noopener noreferrer", children: "Terms of Service" }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 151,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/index.tsx",
          lineNumber: 147,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "footer-social", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://x.com/shilll", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: x_default, alt: "X (formerly Twitter)" }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 157,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 156,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://linkedin.com/company/shilll", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: in_default, alt: "LinkedIn" }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 160,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 159,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "mailto:hey@shilll.com", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: email_default, alt: "Email us" }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 163,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 162,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/index.tsx",
          lineNumber: 155,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 146,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/index.tsx",
      lineNumber: 114,
      columnNumber: 5
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/index.tsx",
    lineNumber: 73,
    columnNumber: 5
  }, this);
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-VLTS2SSQ.js.map
