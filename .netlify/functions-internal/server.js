var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 12,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    headers: responseHeaders,
    status: responseStatusCode
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// app/style/global/global.css
var global_default = "/build/_assets/global-DGDJHFBL.css";

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [
  {
    rel: "icon",
    href: "/favicon.ico",
    type: "image/png"
  },
  {
    rel: "stylesheet",
    href: global_default
  }
], meta = () => ({
  charset: "utf-8",
  title: "Shilll",
  description: "Shilll is an artificial intelligence company.",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
var import_react3 = require("react"), import_react4 = require("@remix-run/react");

// public/img/ja4.png
var ja4_default = "/build/_assets/ja4-V36SPHOU.png";

// public/img/ja.png
var ja_default = "/build/_assets/ja-SUKB4TH5.png";

// public/img/ja5.png
var ja5_default = "/build/_assets/ja5-SVJC7DAI.png";

// public/img/stock/stock-1.jpeg
var stock_1_default = "/build/_assets/stock-1-57J2DW3G.jpeg";

// public/img/stock/stock-5.webp
var stock_5_default = "/build/_assets/stock-5-7KTPZK4S.webp";

// public/img/stock/stock-6.jpg
var stock_6_default = "/build/_assets/stock-6-QERAGMBT.jpg";

// public/img/stock/stock-7.jpg
var stock_7_default = "/build/_assets/stock-7-66ZVWWYL.jpg";

// public/img/stock/stock-8.jpg
var stock_8_default = "/build/_assets/stock-8-2MPXKOSZ.jpg";

// public/img/stock/stock-11.jpg
var stock_11_default = "/build/_assets/stock-11-ZKKXUXE4.jpg";

// public/img/stock/stock-13.jpg
var stock_13_default = "/build/_assets/stock-13-6NV7UNHE.jpg";

// public/img/stock/stock-14.jpg
var stock_14_default = "/build/_assets/stock-14-2HM3JEEZ.jpg";

// public/img/stock/stock-15.jpeg
var stock_15_default = "/build/_assets/stock-15-FXPYNDZB.jpeg";

// public/img/stock/stock-17.webp
var stock_17_default = "/build/_assets/stock-17-ZLWLF3VX.webp";

// public/img/stock/stock-18.jpg
var stock_18_default = "/build/_assets/stock-18-PVEAYKWV.jpg";

// public/img/stock/stock.jpg
var stock_default = "/build/_assets/stock-7UVGKROJ.jpg";

// public/img/stock/1.jpg
var __default = "/build/_assets/1-GTHDMJJ4.jpg";

// public/img/stock/2.jpg
var __default2 = "/build/_assets/2-YI42V37S.jpg";

// public/img/stock/4.jpg
var __default3 = "/build/_assets/4-RUYMZIBB.jpg";

// app/routes/index.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), rotatingWords = ["Make me a catering schedule for my event", "When does my puppy need his first shots?", "Make me a landing page for my newsletter", "What question should I ask her on my podcast?", "What's the best app to track my food calories?", "What's the cheapest VPN service?"];
function Index() {
  let [index, setIndex] = (0, import_react3.useState)(0), [fadeOut, setFadeOut] = (0, import_react3.useState)(!1);
  return (0, import_react3.useEffect)(() => {
    let interval = setInterval(() => {
      setFadeOut(!0), setTimeout(() => {
        setIndex((prev) => (prev + 1) % rotatingWords.length), setFadeOut(!1);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, []), (0, import_react3.useEffect)(() => {
    let script = document.createElement("script");
    return script.src = "https://js.hcaptcha.com/1/api.js", script.async = !0, script.defer = !0, document.body.appendChild(script), () => {
      document.body.removeChild(script);
    };
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "inner-content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "chatbox", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "chatbox-in", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: ja_default, alt: "logo" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 60,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: fadeOut ? "fade-out" : "fade-in", children: rotatingWords[index] }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 61,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 59,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 58,
      columnNumber: 3
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 57,
      columnNumber: 1
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "inner-content2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { children: [
        "The ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "personalized AI assistant" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 68,
          columnNumber: 17
        }, this),
        " behind all your ideas"
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Search and ask questions. Get hyper accurate results. Local and global. Across desktop and mobile." }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 69,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 67,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "inner-content3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: stock_7_default }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 73,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 72,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: stock_18_default }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 76,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 75,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: stock_17_default }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 79,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 78,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 71,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "inner-content4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { children: "For everyone from people to enterprise." }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 83,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Use Shilll to get answers, organize things, complete tasks, or make something new." }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 84,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 82,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "inner-content5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: stock_5_default }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 88,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "Shilll" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 89,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Shilll is your personal and customizable AI that helps you explore your ideas." }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 90,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 87,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: stock_15_default }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 93,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "MCP" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 94,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Make your application runtimes run smarter, faster, and more efficient with complete control over every detail." }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 95,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 92,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: stock_6_default }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 98,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "API" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 99,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Instantly make your applications smarter with enchanced speed, percision, and multilanguage support that helps you connect across the world." }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 100,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 97,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 86,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "inner-content6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Link, { to: "/pricing", className: "pricebtn", children: "Create your Shilll" }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 104,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 103,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "inner-content7", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h4", { children: "CUSTOMIZABLE AI" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 110,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { children: "Your ideas. Your Shilll. Customized Your Way." }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 111,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 109,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Take Shilll everywhere you go. Ask questions. Stay informed. Be in the know." }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 113,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 108,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "inner-content8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: stock_13_default }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 116,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 115,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "inner-content9", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: __default }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 120,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "Create clickable posts" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 121,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Create clickable posts with different types of content to engage different types of people." }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 122,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 119,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: __default3 }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 125,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "Share clickable posts" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 126,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Share your clickable posts across Instagram, TikTok, and other social media profiles." }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 127,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 124,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: stock_1_default }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 130,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "Build your magnet" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 131,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Turn your link in bio into a lead magnet machine that boosts engagement, drives clicks, and converts traffic from Instagram, TikTok, and other social media apps." }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 132,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 129,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 118,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "inner-content10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "header", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h4", { children: "OWN YOUR AUDIENCE" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 137,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { children: "Grow your audience with a lead magnet machine that collects contacts for you." }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 138,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 136,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "grid", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: stock_11_default }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 142,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "Collect contacts of all kinds" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 143,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Shilll is a powerful tool to collect contacts through clickable posts of content that act as a lead magnet machine. Add contact forms, capture email, SMS, or WhatsApp signups, and stay connected with your followers beyond Instagram, TikTok, and other social media profiles." }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 144,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 141,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: stock_default }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 147,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "Grow your link in bio with clickable posts" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 148,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Make your link in bio convert with clickable posts of new, or previously posted content. Create a thread of clickable posts to boost engagement, drive clicks, and collect contacts." }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 149,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 146,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 140,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 135,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "inner-content11", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "header", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h4", { children: "GET PAID FROM YOUR LINK IN BIO" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 155,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { children: "Monetize your link in bio, your way." }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 156,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 154,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "grid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: stock_14_default }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 160,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "Grow your clickable posts" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 161,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Grow clickable posts into threads that become a massive lead magnet machine within your link in bio." }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 162,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 159,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 158,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 153,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "inner-content12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "header", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h4", { children: "LINK IN BIO FEATURES" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 168,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { children: "Get more growth with Shilll." }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 169,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 167,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "grid", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: __default2 }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 173,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "Get more growth" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 174,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Manage all your links, convert social media traffic and grow your brand with Shilll's link in bio. Collect leads, sell products, and engage your audience directly with one powerful, customizable link." }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 175,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 172,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: stock_8_default }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 178,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "Customize your feed" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 179,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Create a thread of clickable posts that showcase content, product, and ideas you vibe with. Collect contacts, advertise (almost) anything, and own your audience with Shilll's link in bio tool." }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 180,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 177,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 171,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 166,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("footer", { className: "footer", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "footer-top", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "footer-logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: ja4_default, alt: "Logo" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 187,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 186,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "footer-links", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "column", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h4", { children: "Company" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 191,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Link, { to: "#", children: "About" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 192,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Link, { to: "#", children: "What's New" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 193,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Link, { to: "#", children: "Affiliates" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 194,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Link, { to: "#", children: "Press" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 195,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Link, { to: "#", children: "Careers" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 196,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Link, { to: "#", children: "Link in bio" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 197,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/index.tsx",
            lineNumber: 190,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "column", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h4", { children: "Community" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 200,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Link, { to: "#", children: "Shilll for Enterprise" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 201,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Link, { to: "#", children: "Enterprise Case Studies" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 202,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Link, { to: "#", children: "Trending" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 203,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Link, { to: "#", children: "Creator Directory" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 204,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Link, { to: "#", children: "Explore Templates" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 205,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/index.tsx",
            lineNumber: 199,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "column", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h4", { children: "Support" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 208,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Link, { to: "#", children: "Help Topics" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 209,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Link, { to: "#", children: "Getting Started" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 210,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Link, { to: "#", children: "Features & How-Tos" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 211,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Link, { to: "#", children: "FAQs" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 212,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Link, { to: "#", children: "Report a Violation" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 213,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/index.tsx",
            lineNumber: 207,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "column", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h4", { children: "Shilll" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 216,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Link, { to: "#", children: "Get started for free" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 217,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Link, { to: "#", children: "Log in" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 218,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Link, { to: "#", children: "Case Studies" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 219,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Link, { to: "#", children: "Service Status" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 220,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Link, { to: "#", children: "Contact" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 221,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/index.tsx",
            lineNumber: 215,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 189,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 185,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "footer-bottom", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "footer-meta", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Link, { to: "#", children: "Terms of Service" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 229,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Link, { to: "#", children: "Privacy Policy" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 230,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 227,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "footer-social", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "#", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: ja5_default, alt: "X" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 233,
            columnNumber: 23
          }, this) }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 233,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "#", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: ja5_default, alt: "YouTube" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 234,
            columnNumber: 23
          }, this) }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 234,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "#", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: ja5_default, alt: "LinkedIn" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 235,
            columnNumber: 23
          }, this) }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 235,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "#", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: ja5_default, alt: "Email" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 236,
            columnNumber: 23
          }, this) }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 236,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 232,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 226,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 184,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 56,
    columnNumber: 1
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-SWXXE3EK.js", imports: ["/build/_shared/chunk-WP7OK6OR.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-NXOEZ2SH.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-URVOJJH2.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "66ad4376", hmr: void 0, url: "/build/manifest-66AD4376.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !1, v2_headers: !1, v2_meta: !1, v2_normalizeFormMethod: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=server.js.map
