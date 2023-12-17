import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
import { createElement as _createElement } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
export default function Home() {
    var _this = this;
    var icon = [
        16,
        32,
        96,
        192
    ].map(function(s) {
        return {
            href: "/favicon.svg",
            sizes: "".concat(s, "x").concat(s)
        };
    });
    return /*#__PURE__*/ _jsxDEV("div", {
        className: styles.container,
        children: [
            /*#__PURE__*/ _jsxDEV(Head, {
                children: [
                    /*#__PURE__*/ _jsxDEV("title", {
                        children: "Create Next App"
                    }, void 0, false, {
                        fileName: "$DIR/tests/vercel/loader-only/next-33291/1-automatic/input/index.js",
                        lineNumber: 14,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ _jsxDEV("meta", {
                        name: "description",
                        content: "Generated by create next app"
                    }, void 0, false, {
                        fileName: "$DIR/tests/vercel/loader-only/next-33291/1-automatic/input/index.js",
                        lineNumber: 15,
                        columnNumber: 17
                    }, this),
                    icon.map(function(_param) {
                        var href = _param.href, linkProps = _object_without_properties(_param, [
                            "href"
                        ]);
                        return /*#__PURE__*/ _createElement("link", _object_spread_props(_object_spread({
                            href: href
                        }, linkProps), {
                            rel: "icon",
                            key: href,
                            __source: {
                                fileName: "$DIR/tests/vercel/loader-only/next-33291/1-automatic/input/index.js",
                                lineNumber: 20,
                                columnNumber: 21
                            },
                            __self: _this
                        }));
                    })
                ]
            }, void 0, true, {
                fileName: "$DIR/tests/vercel/loader-only/next-33291/1-automatic/input/index.js",
                lineNumber: 13,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ _jsxDEV("main", {
                className: styles.main,
                children: [
                    /*#__PURE__*/ _jsxDEV("h1", {
                        className: styles.title,
                        children: [
                            "Welcome to ",
                            /*#__PURE__*/ _jsxDEV("a", {
                                href: "https://nextjs.org",
                                children: "Next.js!"
                            }, void 0, false, {
                                fileName: "$DIR/tests/vercel/loader-only/next-33291/1-automatic/input/index.js",
                                lineNumber: 26,
                                columnNumber: 32
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "$DIR/tests/vercel/loader-only/next-33291/1-automatic/input/index.js",
                        lineNumber: 25,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ _jsxDEV("p", {
                        className: styles.description,
                        children: [
                            "Get started by editing",
                            " ",
                            /*#__PURE__*/ _jsxDEV("code", {
                                className: styles.code,
                                children: "pages/index.js"
                            }, void 0, false, {
                                fileName: "$DIR/tests/vercel/loader-only/next-33291/1-automatic/input/index.js",
                                lineNumber: 31,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "$DIR/tests/vercel/loader-only/next-33291/1-automatic/input/index.js",
                        lineNumber: 29,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: styles.grid,
                        children: [
                            /*#__PURE__*/ _jsxDEV("a", {
                                href: "https://nextjs.org/docs",
                                className: styles.card,
                                children: [
                                    /*#__PURE__*/ _jsxDEV("h2", {
                                        children: "Documentation →"
                                    }, void 0, false, {
                                        fileName: "$DIR/tests/vercel/loader-only/next-33291/1-automatic/input/index.js",
                                        lineNumber: 36,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("p", {
                                        children: "Find in-depth information about Next.js features and API."
                                    }, void 0, false, {
                                        fileName: "$DIR/tests/vercel/loader-only/next-33291/1-automatic/input/index.js",
                                        lineNumber: 37,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "$DIR/tests/vercel/loader-only/next-33291/1-automatic/input/index.js",
                                lineNumber: 35,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ _jsxDEV("a", {
                                href: "https://nextjs.org/learn",
                                className: styles.card,
                                children: [
                                    /*#__PURE__*/ _jsxDEV("h2", {
                                        children: "Learn →"
                                    }, void 0, false, {
                                        fileName: "$DIR/tests/vercel/loader-only/next-33291/1-automatic/input/index.js",
                                        lineNumber: 44,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("p", {
                                        children: "Learn about Next.js in an interactive course with quizzes!"
                                    }, void 0, false, {
                                        fileName: "$DIR/tests/vercel/loader-only/next-33291/1-automatic/input/index.js",
                                        lineNumber: 45,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "$DIR/tests/vercel/loader-only/next-33291/1-automatic/input/index.js",
                                lineNumber: 43,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ _jsxDEV("a", {
                                href: "https://github.com/vercel/next.js/tree/canary/examples",
                                className: styles.card,
                                children: [
                                    /*#__PURE__*/ _jsxDEV("h2", {
                                        children: "Examples →"
                                    }, void 0, false, {
                                        fileName: "$DIR/tests/vercel/loader-only/next-33291/1-automatic/input/index.js",
                                        lineNumber: 55,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("p", {
                                        children: "Discover and deploy boilerplate example Next.js projects."
                                    }, void 0, false, {
                                        fileName: "$DIR/tests/vercel/loader-only/next-33291/1-automatic/input/index.js",
                                        lineNumber: 56,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "$DIR/tests/vercel/loader-only/next-33291/1-automatic/input/index.js",
                                lineNumber: 51,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ _jsxDEV("a", {
                                href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
                                className: styles.card,
                                children: [
                                    /*#__PURE__*/ _jsxDEV("h2", {
                                        children: "Deploy →"
                                    }, void 0, false, {
                                        fileName: "$DIR/tests/vercel/loader-only/next-33291/1-automatic/input/index.js",
                                        lineNumber: 66,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("p", {
                                        children: "Instantly deploy your Next.js site to a public URL with Vercel."
                                    }, void 0, false, {
                                        fileName: "$DIR/tests/vercel/loader-only/next-33291/1-automatic/input/index.js",
                                        lineNumber: 67,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "$DIR/tests/vercel/loader-only/next-33291/1-automatic/input/index.js",
                                lineNumber: 62,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "$DIR/tests/vercel/loader-only/next-33291/1-automatic/input/index.js",
                        lineNumber: 34,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "$DIR/tests/vercel/loader-only/next-33291/1-automatic/input/index.js",
                lineNumber: 24,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ _jsxDEV("footer", {
                className: styles.footer,
                children: /*#__PURE__*/ _jsxDEV("a", {
                    href: "https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: [
                        "Powered by",
                        " ",
                        /*#__PURE__*/ _jsxDEV("span", {
                            className: styles.logo,
                            children: /*#__PURE__*/ _jsxDEV(Image, {
                                src: "/vercel.svg",
                                alt: "Vercel Logo",
                                width: 72,
                                height: 16
                            }, void 0, false, {
                                fileName: "$DIR/tests/vercel/loader-only/next-33291/1-automatic/input/index.js",
                                lineNumber: 83,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "$DIR/tests/vercel/loader-only/next-33291/1-automatic/input/index.js",
                            lineNumber: 82,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "$DIR/tests/vercel/loader-only/next-33291/1-automatic/input/index.js",
                    lineNumber: 76,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "$DIR/tests/vercel/loader-only/next-33291/1-automatic/input/index.js",
                lineNumber: 75,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "$DIR/tests/vercel/loader-only/next-33291/1-automatic/input/index.js",
        lineNumber: 12,
        columnNumber: 9
    }, this);
}
