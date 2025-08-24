import { c as createComponent, b as createAstro, m as maybeRenderHead, d as renderSlot, a as renderTemplate, n as createVNode, au as Fragment, av as __astro_tag_component__ } from './astro/server_BAthJS93.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                                               */

const $$Astro = createAstro();
const $$InfoBox = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$InfoBox;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="info-box" data-astro-cid-5nfkzq7w> <div class="title-bar" data-astro-cid-5nfkzq7w>💡 ${title}</div> <div class="content" data-astro-cid-5nfkzq7w> ${renderSlot($$result, $$slots["default"])} </div> </div> `;
}, "/Users/suradetpratomsak/Desktop/my-web-blogger/src/components/InfoBox.astro", void 0);

const frontmatter = {
  "title": "Frontend Developer Roadmap (Part 1): React.js",
  "description": "เจาะลึก React.js อย่างละเอียด: ตั้งแต่พื้นฐาน จนถึง Hooks, Ecosystem, และการใช้งานจริง",
  "pubDate": "2025-08-23",
  "heroImage": "/blog-placeholder-1.png"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "frontend-developer-roadmap-part-1-reactjs",
    "text": "Frontend Developer Roadmap (Part 1): React.js"
  }, {
    "depth": 2,
    "slug": "reactjs-คืออะไร",
    "text": "React.js คืออะไร?"
  }, {
    "depth": 3,
    "slug": "-ทำไม-react-ยังครองตลาด",
    "text": "🔥 ทำไม React ยังครองตลาด?"
  }, {
    "depth": 2,
    "slug": "แนวคิดหลักของ-react",
    "text": "แนวคิดหลักของ React"
  }, {
    "depth": 3,
    "slug": "1-component-based-architecture",
    "text": "1. Component-Based Architecture"
  }, {
    "depth": 3,
    "slug": "2-declarative-ui",
    "text": "2. Declarative UI"
  }, {
    "depth": 3,
    "slug": "3-virtual-dom-และ-reconciliation",
    "text": "3. Virtual DOM และ Reconciliation"
  }, {
    "depth": 4,
    "slug": "-virtual-dom-คืออะไร",
    "text": "📌 Virtual DOM คืออะไร?"
  }, {
    "depth": 2,
    "slug": "jsx-การรวม-html-กับ-javascript",
    "text": "JSX: การรวม HTML กับ JavaScript"
  }, {
    "depth": 3,
    "slug": "กฎสำคัญของ-jsx",
    "text": "กฎสำคัญของ JSX"
  }, {
    "depth": 2,
    "slug": "react-hooks-หัวใจของ-functional-components",
    "text": "React Hooks: หัวใจของ Functional Components"
  }, {
    "depth": 3,
    "slug": "-ทำไม-hooks-ถึงดีกว่า",
    "text": "✅ ทำไม Hooks ถึงดีกว่า?"
  }, {
    "depth": 3,
    "slug": "hooks-พื้นฐานที่ต้องรู้",
    "text": "Hooks พื้นฐานที่ต้องรู้"
  }, {
    "depth": 4,
    "slug": "1-usestate--จัดการ-state",
    "text": "1. useState – จัดการ State"
  }, {
    "depth": 4,
    "slug": "2-useeffect--จัดการ-side-effects",
    "text": "2. useEffect – จัดการ Side Effects"
  }, {
    "depth": 4,
    "slug": "3-usecontext--ส่งข้อมูลข้าม-component",
    "text": "3. useContext – ส่งข้อมูลข้าม Component"
  }, {
    "depth": 4,
    "slug": "4-useref--เข้าถึง-dom-หรือเก็บค่าที่ไม่-re-render",
    "text": "4. useRef – เข้าถึง DOM หรือเก็บค่าที่ไม่ re-render"
  }, {
    "depth": 4,
    "slug": "5-usememo-และ-usecallback--optimization",
    "text": "5. useMemo และ useCallback – Optimization"
  }, {
    "depth": 2,
    "slug": "ecosystem-ของ-react-เครื่องมือที่จำเป็น",
    "text": "Ecosystem ของ React: เครื่องมือที่จำเป็น"
  }, {
    "depth": 3,
    "slug": "-state-management",
    "text": "🔧 State Management"
  }, {
    "depth": 4,
    "slug": "zustand",
    "text": "Zustand"
  }, {
    "depth": 4,
    "slug": "redux-toolkit-rtk",
    "text": "Redux Toolkit (RTK)"
  }, {
    "depth": 3,
    "slug": "-routing-react-router-v6",
    "text": "🚦 Routing: React Router v6"
  }, {
    "depth": 3,
    "slug": "️-meta-frameworks-nextjs",
    "text": "🏗️ Meta-Frameworks: Next.js"
  }, {
    "depth": 3,
    "slug": "-ui-libraries",
    "text": "🎨 UI Libraries"
  }, {
    "depth": 2,
    "slug": "แนวทางการเรียนรู้-react-สำหรับมือใหม่",
    "text": "แนวทางการเรียนรู้ React (สำหรับมือใหม่)"
  }, {
    "depth": 2,
    "slug": "สรุป",
    "text": "สรุป"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    br: "br",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "frontend-developer-roadmap-part-1-reactjs",
      children: "Frontend Developer Roadmap (Part 1): React.js"
    }), "\n", createVNode(_components.p, {
      children: ["ยินดีต้อนรับสู่ซีรีส์บทความ ", createVNode(_components.strong, {
        children: "“Frontend Developer Roadmap”"
      }), " ที่จะพาคุณก้าวสู่การเป็น Frontend Developer มืออาชีพอย่างมั่นใจ"]
    }), "\n", createVNode(_components.p, {
      children: ["ใน ", createVNode(_components.strong, {
        children: "ตอนที่ 1 นี้ เราจะเจาะลึกเฉพาะ React.js"
      }), " — ไลบรารีที่เปลี่ยนโฉมหน้าการพัฒนาเว็บในยุคสมัยใหม่ และยังคงเป็น ", createVNode(_components.strong, {
        children: "เครื่องมือหลักอันดับ 1"
      }), " ของนักพัฒนาทั่วโลก"]
    }), "\n", createVNode(_components.p, {
      children: "บทความนี้ออกแบบมาเพื่อให้คุณ:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "เข้าใจ React อย่างลึกซึ้ง ไม่ใช่แค่ “ใช้ได้”"
      }), "\n", createVNode(_components.li, {
        children: "รู้ว่า React ทำงานอย่างไรเบื้องหลัง"
      }), "\n", createVNode(_components.li, {
        children: "เข้าใจแนวคิดหลัก เช่น Virtual DOM, Reconciliation, และ Hooks"
      }), "\n", createVNode(_components.li, {
        children: "รู้จัก Ecosystem ที่จำเป็นสำหรับการสร้างแอปจริง"
      }), "\n", createVNode(_components.li, {
        children: "เตรียมความพร้อมสำหรับการใช้ React ร่วมกับ Frameworks อย่าง Next.js (ในบทความต่อไป)"
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "reactjs-คืออะไร",
      children: "React.js คืออะไร?"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "React.js"
      }), " (หรือเรียกสั้น ๆ ว่า ", createVNode(_components.strong, {
        children: "React"
      }), ") คือ JavaScript ", createVNode(_components.strong, {
        children: "ไลบรารี"
      }), " สำหรับสร้าง ", createVNode(_components.strong, {
        children: "User Interface (UI)"
      }), " ที่พัฒนาโดยทีม ", createVNode(_components.strong, {
        children: "Meta (Facebook)"
      }), " และเปิดให้ใช้งานแบบโอเพ่นซอร์ส"]
    }), "\n", createVNode(_components.p, {
      children: ["React ไม่ใช่เฟรมเวิร์กเต็มรูปแบบ แต่เป็นเครื่องมือที่เน้นการสร้าง UI แบบ ", createVNode(_components.strong, {
        children: "Component-Based"
      }), " — กล่าวคือ แบ่งหน้าเว็บออกเป็นชิ้นส่วนเล็ก ๆ ที่สามารถนำกลับมาใช้ใหม่ได้ (Reusable Components)"]
    }), "\n", createVNode(_components.h3, {
      id: "-ทำไม-react-ยังครองตลาด",
      children: "🔥 ทำไม React ยังครองตลาด?"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Community ใหญ่ที่สุด"
        }), " มีผู้ใช้งานกว่า 18 ล้านคนทั่วโลก (State of JS 2023), มี package บน npm มากกว่า 2 ล้านตัวที่เกี่ยวข้องกับ React"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "บริษัทใหญ่ใช้ทั่วโลก"
        }), " Facebook, Instagram, Netflix, Airbnb, Uber, Discord, และอีกมากมาย"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "การสนับสนุนอย่างต่อเนื่อง"
        }), " ทีม React Core ประกาศแผนงานล่วงหน้าหลายปี รวมถึงการสนับสนุน ", createVNode(_components.strong, {
          children: "React Server Components"
        }), " และ ", createVNode(_components.strong, {
          children: "Concurrent Rendering"
        })]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "เข้ากับเครื่องมือสมัยใหม่ได้ดี"
        }), " รองรับ TypeScript, Vite, ESLint, Prettier, และ Jest ได้แบบไม่ต้องตั้งค่าเยอะ"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "เหมาะกับ Meta-Frameworks"
        }), " เป็นรากฐานของ Next.js, Remix, Gatsby — เฟรมเวิร์กที่กำลังมาแรง"]
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "แนวคิดหลักของ-react",
      children: "แนวคิดหลักของ React"
    }), "\n", createVNode(_components.p, {
      children: "React เปลี่ยนวิธีคิดการเขียนเว็บจาก “จัดการ DOM โดยตรง” มาเป็น “กำหนด UI ตาม state” ด้วยแนวคิดสำคัญ 3 ประการ:"
    }), "\n", createVNode(_components.h3, {
      id: "1-component-based-architecture",
      children: "1. Component-Based Architecture"
    }), "\n", createVNode(_components.p, {
      children: ["ทุกอย่างใน React คือ ", createVNode(_components.strong, {
        children: "Component"
      }), " — หน่วยย่อยของ UI ที่สามารถนำกลับมาใช้ใหม่ได้"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto",
        whiteSpace: "pre-wrap",
        wordWrap: "break-word"
      },
      tabindex: "0",
      "data-language": "jsx",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// ตัวอย่าง: Component ชื่อ Button"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "function"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Button"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "({ "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "children"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "onClick"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "variant"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " \"primary\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " }) {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  return"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ("
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "button"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "      className"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "`btn btn-${"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "variant"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "}`"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "} "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "      onClick"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "{onClick}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    >"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      {children}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    </"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "button"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  );"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// ใช้งาน"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "Button"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " variant"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"success\""
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " onClick"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "{() "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " alert"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'Clicked!'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")}>"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  ยืนยัน"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "</"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "Button"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        })]
      })
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["✅ ", createVNode(_components.strong, {
          children: "ข้อดี"
        }), ": โค้ดเป็นระเบียบ, แก้ไขง่าย, ส่งต่อทีมได้ดี, ทดสอบได้แยกส่วน"]
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h3, {
      id: "2-declarative-ui",
      children: "2. Declarative UI"
    }), "\n", createVNode(_components.p, {
      children: ["React ใช้แนวทาง ", createVNode(_components.strong, {
        children: "Declarative"
      }), " หมายถึง คุณบอกว่า “UI ควรเป็นอย่างไร” แทนที่จะบอก “ต้องทำอะไรเพื่อให้ UI เปลี่ยน”"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto",
        whiteSpace: "pre-wrap",
        wordWrap: "break-word"
      },
      tabindex: "0",
      "data-language": "jsx",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Declarative (React)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "{ isLoggedIn "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "?"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " <"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "Dashboard"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " /> "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " <"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "Login"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " /> }"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Imperative (Vanilla JS - ต้องเขียนทุกขั้นตอน)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "if"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " (isLoggedIn) {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  document."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "getElementById"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'app'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ").innerHTML "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " '<div>Dashboard</div>'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "} "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "else"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  document."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "getElementById"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'app'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ").innerHTML "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " '<div>Login</div>'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        })]
      })
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "💡 ยิ่งแอปซับซ้อนมากเท่าไหร่ Declarative ก็ยิ่งช่วยให้จัดการง่ายขึ้น"
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h3, {
      id: "3-virtual-dom-และ-reconciliation",
      children: "3. Virtual DOM และ Reconciliation"
    }), "\n", createVNode(_components.p, {
      children: "นี่คือหัวใจของประสิทธิภาพ React"
    }), "\n", createVNode(_components.h4, {
      id: "-virtual-dom-คืออะไร",
      children: "📌 Virtual DOM คืออะไร?"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "เป็น “สำเนา” ของ DOM จริงที่อยู่ในหน่วยความจำ (JavaScript object)"
      }), "\n", createVNode(_components.li, {
        children: "เมื่อ state เปลี่ยน React จะสร้าง Virtual DOM ใหม่"
      }), "\n", createVNode(_components.li, {
        children: "จากนั้นเปรียบเทียบกับเวอร์ชันก่อนหน้า (Diffing Algorithm)"
      }), "\n", createVNode(_components.li, {
        children: "แล้วอัปเดตเฉพาะส่วนที่เปลี่ยนแปลงบน DOM จริง"
      }), "\n"]
    }), "\n", createVNode($$InfoBox, {
      title: "ตัวอย่างการทำงานของ Virtual DOM",
      children: createVNode(_components.p, {
        children: ["สมมติคุณมีรายการสินค้า 100 ชิ้น แล้วเปลี่ยนแค่ชื่อสินค้าชิ้นที่ 5", createVNode(_components.br, {}), "\nแทนที่จะรีเฟรชทั้งหน้า (re-render 100 ชิ้น)", createVNode(_components.br, {}), "\nReact จะเปลี่ยนแค่ DOM ของชิ้นที่ 5 เท่านั้น → เร็วและประหยัดทรัพยากร"]
      })
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "jsx-การรวม-html-กับ-javascript",
      children: "JSX: การรวม HTML กับ JavaScript"
    }), "\n", createVNode(_components.p, {
      children: "JSX (JavaScript XML) คือ syntax extension ที่ให้คุณเขียนโค้ดหน้าตาคล้าย HTML ภายใน JavaScript ได้"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto",
        whiteSpace: "pre-wrap",
        wordWrap: "break-word"
      },
      tabindex: "0",
      "data-language": "jsx",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " element"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "h1"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " className"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"title\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">สวัสดี, {name}!</"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "h1"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">;"
          })]
        })
      })
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["⚠️ JSX ไม่ใช่ HTML และไม่ใช่ string — มันจะถูกแปลงเป็น ", createVNode(_components.code, {
          children: "React.createElement()"
        }), " โดยเครื่องมือเช่น Babel หรือ SWC"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "กฎสำคัญของ-jsx",
      children: "กฎสำคัญของ JSX"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["ต้องมี ", createVNode(_components.strong, {
          children: "root element เดียว"
        }), " ต่อ return"]
      }), "\n", createVNode(_components.li, {
        children: ["ใช้ ", createVNode(_components.code, {
          children: "className"
        }), " แทน ", createVNode(_components.code, {
          children: "class"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["ใช้ ", createVNode(_components.code, {
          children: "{}"
        }), " สำหรับแทรก JavaScript"]
      }), "\n", createVNode(_components.li, {
        children: ["ปิด tag ทุกตัว เช่น ", createVNode(_components.code, {
          children: "<img />"
        }), ", ", createVNode(_components.code, {
          children: "<br />"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto",
        whiteSpace: "pre-wrap",
        wordWrap: "break-word"
      },
      tabindex: "0",
      "data-language": "jsx",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "function"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " UserProfile"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "({ "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "user"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " }) {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  return"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ("
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "div"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " className"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"profile-card\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "img"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " src"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "{user.avatar} "
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "alt"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "{user.name} />"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "h2"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">{user.name}</"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "h2"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "p"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">ออนไลน์ {user.lastSeen "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "?"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'เมื่อสักครู่'"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " :"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'ไม่ทราบ'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}</"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "p"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    </"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "div"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  );"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        })]
      })
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "react-hooks-หัวใจของ-functional-components",
      children: "React Hooks: หัวใจของ Functional Components"
    }), "\n", createVNode(_components.p, {
      children: ["ก่อนปี 2019 React ต้องใช้ ", createVNode(_components.strong, {
        children: "Class Components"
      }), " เพื่อจัดการ state และ lifecycle แต่ตั้งแต่ React 16.8 ได้แนะนำ ", createVNode(_components.strong, {
        children: "Hooks"
      }), " ทำให้ Functional Components กลายเป็นมาตรฐานใหม่"]
    }), "\n", createVNode($$InfoBox, {
      title: "Pro Tip!",
      children: createVNode(_components.p, {
        children: ["Hooks ทำให้เราหลีกเลี่ยงปัญหาเรื่อง ", createVNode("code", {
          children: "this"
        }), " ใน JavaScript และเขียนโค้ดที่เข้าใจง่ายกว่า Class Components มาก"]
      })
    }), "\n", createVNode(_components.h3, {
      id: "-ทำไม-hooks-ถึงดีกว่า",
      children: "✅ ทำไม Hooks ถึงดีกว่า?"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "โค้ดสั้นและอ่านง่ายกว่า"
      }), "\n", createVNode(_components.li, {
        children: ["ไม่ต้องเข้าใจ ", createVNode(_components.code, {
          children: "this"
        }), " ใน JavaScript"]
      }), "\n", createVNode(_components.li, {
        children: "สามารถแยก logic ออกมาเป็น Custom Hooks ได้"
      }), "\n", createVNode(_components.li, {
        children: "ลด boilerplate code"
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h3, {
      id: "hooks-พื้นฐานที่ต้องรู้",
      children: "Hooks พื้นฐานที่ต้องรู้"
    }), "\n", createVNode(_components.h4, {
      id: "1-usestate--จัดการ-state",
      children: ["1. ", createVNode(_components.code, {
        children: "useState"
      }), " – จัดการ State"]
    }), "\n", createVNode(_components.p, {
      children: "ใช้สำหรับเก็บและอัปเดตข้อมูลภายใน Component"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto",
        whiteSpace: "pre-wrap",
        wordWrap: "break-word"
      },
      tabindex: "0",
      "data-language": "jsx",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " { useState } "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'react'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "function"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Counter"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "() {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  const"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ["
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "count"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "setCount"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "] "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " useState"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  return"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ("
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "div"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "p"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">นับ: {count}</"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "p"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "button"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " onClick"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "{() "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " setCount"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(count "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 1"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")}>เพิ่ม</"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "button"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "button"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " onClick"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "{() "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " setCount"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "prev"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " =>"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " prev "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 1"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")}>ลด</"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "button"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    </"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "div"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  );"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        })]
      })
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["💡 ใช้ functional update (", createVNode(_components.code, {
          children: "prev => prev + 1"
        }), ") เมื่อค่าใหม่ขึ้นกับค่าเดิม เพื่อป้องกันปัญหา stale state"]
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h4, {
      id: "2-useeffect--จัดการ-side-effects",
      children: ["2. ", createVNode(_components.code, {
        children: "useEffect"
      }), " – จัดการ Side Effects"]
    }), "\n", createVNode(_components.p, {
      children: "ใช้สำหรับงานที่ไม่ใช่การเรนเดอร์ UI เช่น:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "ดึงข้อมูลจาก API"
      }), "\n", createVNode(_components.li, {
        children: "ตั้งค่า event listener"
      }), "\n", createVNode(_components.li, {
        children: "เรียก setTimeout / setInterval"
      }), "\n"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto",
        whiteSpace: "pre-wrap",
        wordWrap: "break-word"
      },
      tabindex: "0",
      "data-language": "jsx",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " { useState, useEffect } "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'react'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "function"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " UserProfile"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "({ "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "userId"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " }) {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  const"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ["
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "user"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "setUser"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "] "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " useState"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "null"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "  useEffect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(() "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "    fetch"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "`/api/users/${"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "userId"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "}`"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "then"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "res"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " =>"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " res."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "json"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "())"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "then"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "data"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " =>"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " setUser"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(data));"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  }, [userId]); "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// รันใหม่เมื่อ userId เปลี่ยน"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  return"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "div"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">{user "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "?"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " user.name "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'กำลังโหลด...'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}</"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "div"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        })]
      })
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["⚠️ อย่าลืมใส่ dependency array (", createVNode(_components.code, {
          children: "[userId]"
        }), ") เพื่อป้องกันการเรียกซ้ำไม่จำเป็น"]
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h4, {
      id: "3-usecontext--ส่งข้อมูลข้าม-component",
      children: ["3. ", createVNode(_components.code, {
        children: "useContext"
      }), " – ส่งข้อมูลข้าม Component"]
    }), "\n", createVNode(_components.p, {
      children: ["ช่วยหลีกเลี่ยง ", createVNode(_components.strong, {
        children: "prop drilling"
      }), " (ส่ง props ผ่านหลายชั้น)"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto",
        whiteSpace: "pre-wrap",
        wordWrap: "break-word"
      },
      tabindex: "0",
      "data-language": "jsx",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " { createContext, useContext } "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'react'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " ThemeContext"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " createContext"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "();"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "function"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " App"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "() {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  return"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ("
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    <"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "ThemeContext.Provider"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " value"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"dark\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      <"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "Header"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " />"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    </"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "ThemeContext.Provider"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  );"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "function"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Header"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "() {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " theme"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " useContext"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(ThemeContext);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  return"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "header"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " className"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "{theme}>หัวข้อ</"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "header"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        })]
      })
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h4, {
      id: "4-useref--เข้าถึง-dom-หรือเก็บค่าที่ไม่-re-render",
      children: ["4. ", createVNode(_components.code, {
        children: "useRef"
      }), " – เข้าถึง DOM หรือเก็บค่าที่ไม่ re-render"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto",
        whiteSpace: "pre-wrap",
        wordWrap: "break-word"
      },
      tabindex: "0",
      "data-language": "jsx",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " { useRef } "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'react'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "function"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " TextInput"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "() {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " inputRef"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " useRef"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "();"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  const"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " focusInput"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " () "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    inputRef.current."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "focus"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "();"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  };"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  return"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ("
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    <>"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "input"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " ref"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "{inputRef} "
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "type"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"text\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " />"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "button"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " onClick"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "{focusInput}>โฟกัส</"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "button"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    </>"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  );"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        })]
      })
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["🔍 ", createVNode(_components.code, {
          children: "useRef"
        }), " ไม่ทำให้ Component re-render เมื่อค่าเปลี่ยน"]
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h4, {
      id: "5-usememo-และ-usecallback--optimization",
      children: ["5. ", createVNode(_components.code, {
        children: "useMemo"
      }), " และ ", createVNode(_components.code, {
        children: "useCallback"
      }), " – Optimization"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "useMemo"
        }), ": คำนวณค่าใหม่เฉพาะเมื่อ dependency เปลี่ยน"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "useCallback"
        }), ": สร้างฟังก์ชันใหม่เฉพาะเมื่อ dependency เปลี่ยน"]
      }), "\n"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto",
        whiteSpace: "pre-wrap",
        wordWrap: "break-word"
      },
      tabindex: "0",
      "data-language": "jsx",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " expensiveValue"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " useMemo"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(() "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " computeExpensiveValue"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(a, b), [a, b]);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " handleClick"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " useCallback"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(() "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "  doSomething"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(a, b);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}, [a, b]);"
          })
        })]
      })
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "✅ ใช้เมื่อจำเป็นเท่านั้น — อย่า optimize ล่วงหน้า"
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "ecosystem-ของ-react-เครื่องมือที่จำเป็น",
      children: "Ecosystem ของ React: เครื่องมือที่จำเป็น"
    }), "\n", createVNode(_components.p, {
      children: "React อาจไม่ครอบคลุมทุกอย่าง แต่ระบบนิเวศรอบตัวมันคือสิ่งที่ทำให้เราสร้างแอปจริงได้"
    }), "\n", createVNode(_components.h3, {
      id: "-state-management",
      children: "🔧 State Management"
    }), "\n", createVNode(_components.h4, {
      id: "zustand",
      children: "Zustand"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "ง่าย ไม่ต้อง middleware หรือ action types"
      }), "\n", createVNode(_components.li, {
        children: "ไม่ต้อง wrap provider ทั้งแอป (เว้นแต่จำเป็น)"
      }), "\n"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto",
        whiteSpace: "pre-wrap",
        wordWrap: "break-word"
      },
      tabindex: "0",
      "data-language": "js",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " { create } "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'zustand'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " useStore"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " create"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "set"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ({"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  count: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "  increment"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": () "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " set"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "state"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ({ count: state.count "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 1"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " })),"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "  reset"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": () "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " set"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "({ count: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " }),"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}));"
          })
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "redux-toolkit-rtk",
      children: "Redux Toolkit (RTK)"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "เหมาะกับแอปขนาดใหญ่ที่ต้องการ single source of truth"
      }), "\n", createVNode(_components.li, {
        children: ["ลด boilerplate ด้วย ", createVNode(_components.code, {
          children: "createSlice"
        }), ", ", createVNode(_components.code, {
          children: "createAsyncThunk"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto",
        whiteSpace: "pre-wrap",
        wordWrap: "break-word"
      },
      tabindex: "0",
      "data-language": "js",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " counterSlice"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " createSlice"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "({"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  name: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'counter'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  initialState: { value: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " },"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  reducers: {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "    incremented"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": ("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "state"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " { state.value "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 1"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " },"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  },"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "});"
          })
        })]
      })
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["✅ คำแนะนำ: เริ่มจาก ", createVNode(_components.code, {
          children: "useState"
        }), " → ", createVNode(_components.code, {
          children: "useContext"
        }), " → ", createVNode(_components.code, {
          children: "Zustand"
        }), " → ", createVNode(_components.code, {
          children: "RTK"
        }), " (ถ้าจำเป็น)"]
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h3, {
      id: "-routing-react-router-v6",
      children: "🚦 Routing: React Router v6"
    }), "\n", createVNode(_components.p, {
      children: "ตัวเลือกมาตรฐานสำหรับการจัดการเส้นทางใน React SPA"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto",
        whiteSpace: "pre-wrap",
        wordWrap: "break-word"
      },
      tabindex: "0",
      "data-language": "jsx",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " { BrowserRouter, Routes, Route } "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'react-router-dom'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "function"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " App"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "() {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  return"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ("
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    <"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "BrowserRouter"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      <"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "Routes"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        <"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "Route"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " path"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"/\""
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " element"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "{<"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "Home"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " />} />"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        <"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "Route"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " path"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"/about\""
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " element"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "{<"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "About"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " />} />"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        <"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "Route"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " path"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"/users/:id\""
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " element"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "{<"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "UserProfile"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " />} />"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      </"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "Routes"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    </"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "BrowserRouter"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  );"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        })]
      })
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "🔗 รองรับ nested routes, layout, และ dynamic parameters"
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h3, {
      id: "️-meta-frameworks-nextjs",
      children: "🏗️ Meta-Frameworks: Next.js"
    }), "\n", createVNode(_components.p, {
      children: "แม้ Next.js จะเป็นเฟรมเวิร์ก แต่ควรรู้ว่ามันสร้างบน React และเป็นทางออกสำหรับข้อจำกัดของ React เช่น:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Server-Side Rendering (SSR)"
        }), " → ดีต่อ SEO"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Static Site Generation (SSG)"
        }), " → เร็วมาก"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "API Routes"
        }), " → เขียน backend ภายในโปรเจกต์เดียว"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "React Server Components"
        }), " → โหลด component จาก server โดยไม่ต้องส่ง JavaScript ทั้งหมด"]
      }), "\n"]
    }), "\n", createVNode($$InfoBox, {
      title: "Coming Soon in Part 2",
      children: createVNode(_components.p, {
        children: ["เราจะเจาะลึก ", createVNode("strong", {
          children: "Next.js"
        }), " อย่างละเอียดในบทความต่อไป: ตั้งแต่ App Router, Data Fetching, ไปจนถึง Deployment"]
      })
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h3, {
      id: "-ui-libraries",
      children: "🎨 UI Libraries"
    }), "\n", createVNode(_components.p, {
      children: "แทนที่จะเขียน CSS ทุกอย่างเอง คุณสามารถใช้ UI Library ที่มี component สำเร็จรูป"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Chakra UI"
        }), " เขียนง่าย, responsive, ใช้ props แบบ shorthand"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Material UI (MUI)"
        }), " ครบครัน, รองรับ theming, ใช้ในองค์กร"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Headless UI"
        }), " ไม่มีสไตล์มาให้ แต่ให้ behavior → ใช้กับ Tailwind CSS ได้ดี"]
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "แนวทางการเรียนรู้-react-สำหรับมือใหม่",
      children: "แนวทางการเรียนรู้ React (สำหรับมือใหม่)"
    }), "\n", createVNode(_components.p, {
      children: ["หากคุณเพิ่งเริ่มต้น นี่คือลำดับขั้นตอนที่แนะนำ พร้อม ", createVNode(_components.strong, {
        children: "ลิงก์ไปยังแหล่งเรียนรู้ฟรีและคุณภาพสูง"
      }), " เพื่อช่วยให้คุณก้าวหน้าอย่างมั่นคง:"]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "ฝึก JavaScript พื้นฐานให้แน่น"
          }), createVNode(_components.br, {}), "\nก่อนจะเรียน React ควรเข้าใจ JavaScript อย่างมั่นคง โดยเฉพาะหัวข้อ:"]
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["ตัวแปร (", createVNode(_components.code, {
              children: "let"
            }), ", ", createVNode(_components.code, {
              children: "const"
            }), ")"]
          }), "\n", createVNode(_components.li, {
            children: "ฟังก์ชัน (Arrow Functions, Callbacks)"
          }), "\n", createVNode(_components.li, {
            children: ["Array Methods (", createVNode(_components.code, {
              children: "map"
            }), ", ", createVNode(_components.code, {
              children: "filter"
            }), ", ", createVNode(_components.code, {
              children: "reduce"
            }), ")"]
          }), "\n", createVNode(_components.li, {
            children: "Destructuring และ Spread Operator"
          }), "\n", createVNode(_components.li, {
            children: "การทำงานกับ Promise และ async/await"
          }), "\n"]
        }), "\n", createVNode(_components.p, {
          children: ["🔗 ", createVNode(_components.a, {
            href: "https://developer.mozilla.org/th/docs/Web/JavaScript",
            children: "MDN Web Docs: JavaScript"
          }), createVNode(_components.br, {}), "\n🎥 ", createVNode(_components.a, {
            href: "https://www.youtube.com/playlist?list=PL4cUxeGkcC9jx2TTZk3IGWKSbtugYdrlu",
            children: "ช่อง YouTube: The Net Ninja - Modern JavaScript"
          }), createVNode(_components.br, {}), "\n💻 ", createVNode(_components.a, {
            href: "https://github.com/javascript-tutorial/en.javascript.info",
            children: "GitHub: javascript-tutorial (en)"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.ol, {
      start: "2",
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "เรียนรู้ JSX และ Functional Components"
          }), createVNode(_components.br, {}), "\nเข้าใจว่า JSX คืออะไร และวิธีเขียน Component แบบฟังก์ชัน"]
        }), "\n", createVNode(_components.p, {
          children: ["🔗 ", createVNode(_components.a, {
            href: "https://react.dev/learn/writing-markup-with-jsx",
            children: "React Official Docs: Introducing JSX"
          }), createVNode(_components.br, {}), "\n🎥 ", createVNode(_components.a, {
            href: "https://www.youtube.com/playlist?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3",
            children: "ช่อง YouTube: Codevolution - React JS Tutorial"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.ol, {
      start: "3",
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: ["ใช้ ", createVNode(_components.code, {
              children: "useState"
            }), ", ", createVNode(_components.code, {
              children: "useEffect"
            }), ", ", createVNode(_components.code, {
              children: "useContext"
            })]
          }), createVNode(_components.br, {}), "\nเรียนรู้การจัดการ state และ side effects — หัวใจของ React"]
        }), "\n", createVNode(_components.p, {
          children: ["🔗 ", createVNode(_components.a, {
            href: "https://react.dev/reference/react/useState",
            children: "React Official Docs: State Hook"
          }), createVNode(_components.br, {}), "\n🎥 ", createVNode(_components.a, {
            href: "https://www.youtube.com/watch?v=O6P86uwfdR0",
            children: "ช่อง YouTube: Web Dev Simplified - React Hooks Explained"
          }), createVNode(_components.br, {}), "\n💻 ", createVNode(_components.a, {
            href: "https://codesandbox.io/s/react-hooks-demo-8x0jyq",
            children: "CodeSandbox: React Hooks Playground"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.ol, {
      start: "4",
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "สร้างโปรเจกต์เล็กๆ เช่น To-Do List, Weather App"
          }), createVNode(_components.br, {}), "\nฝึกใช้ความรู้จริงผ่านโปรเจกต์ที่เห็นผล"]
        }), "\n", createVNode(_components.p, {
          children: "🎯 ไอเดียโปรเจกต์:"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["To-Do List (ใช้ ", createVNode(_components.code, {
              children: "useState"
            }), " จัดการรายการ)"]
          }), "\n", createVNode(_components.li, {
            children: ["Weather App (ใช้ ", createVNode(_components.code, {
              children: "useEffect"
            }), " + API)"]
          }), "\n", createVNode(_components.li, {
            children: ["Quiz App (ใช้ ", createVNode(_components.code, {
              children: "map"
            }), ", ", createVNode(_components.code, {
              children: "filter"
            }), ", และ state)"]
          }), "\n"]
        }), "\n", createVNode(_components.p, {
          children: ["🔗 ", createVNode(_components.a, {
            href: "https://www.frontendmentor.io/challenges",
            children: "Frontend Mentor: React Challenges"
          }), createVNode(_components.br, {}), "\n🎥 ", createVNode(_components.a, {
            href: "https://www.youtube.com/@JavaScriptMastery",
            children: "ช่อง YouTube: JavaScript Mastery - React Projects"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.ol, {
      start: "5",
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "เพิ่ม React Router เพื่อจัดการหลายหน้า"
          }), createVNode(_components.br, {}), "\nเรียนรู้การสลับหน้าใน Single Page Application (SPA)"]
        }), "\n", createVNode(_components.p, {
          children: ["🔗 ", createVNode(_components.a, {
            href: "https://reactrouter.com/en/main/start/overview",
            children: "React Router Docs (v6)"
          }), createVNode(_components.br, {}), "\n🎥 ", createVNode(_components.a, {
            href: "https://www.youtube.com/watch?v=Law7wfdg_ls",
            children: "ช่อง YouTube: Dave Gray - React Router Tutorial"
          }), createVNode(_components.br, {}), "\n💻 ", createVNode(_components.a, {
            href: "https://codesandbox.io/s/react-router-v6-demo-o8r5z",
            children: "CodeSandbox: React Router Demo"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.ol, {
      start: "6",
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "ลองใช้ Zustand หรือ Redux Toolkit สำหรับ state ที่ซับซ้อน"
          }), createVNode(_components.br, {}), "\nเมื่อแอปโตขึ้น จำเป็นต้องมีเครื่องมือจัดการ state ระดับ global"]
        }), "\n", createVNode(_components.p, {
          children: ["🔗 ", createVNode(_components.a, {
            href: "https://github.com/pmndrs/zustand",
            children: "Zustand Docs"
          }), createVNode(_components.br, {}), "\n🔗 ", createVNode(_components.a, {
            href: "https://redux-toolkit.js.org/",
            children: "Redux Toolkit Docs"
          }), createVNode(_components.br, {}), "\n💻 ", createVNode(_components.a, {
            href: "https://github.com/reduxjs/redux-toolkit/tree/master/examples",
            children: "GitHub: reduxjs/redux-toolkit - Examples"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.ol, {
      start: "7",
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "ย้ายไป Next.js เพื่อสร้างแอปที่สมบูรณ์"
          }), createVNode(_components.br, {}), "\nเรียนรู้การสร้างเว็บที่ดีต่อ SEO, โหลดเร็ว, และ deploy ง่าย"]
        }), "\n", createVNode(_components.p, {
          children: ["🔗 ", createVNode(_components.a, {
            href: "https://nextjs.org/docs",
            children: "Next.js Official Docs"
          }), createVNode(_components.br, {}), "\n🎥 ", createVNode(_components.a, {
            href: "https://www.youtube.com/playlist?list=PL4cUxeGkcC9jx2TTZk3IGWKSbtugYdrlu",
            children: "ช่อง YouTube: The Net Ninja - Next.js Crash Course"
          }), createVNode(_components.br, {}), "\n💻 ", createVNode(_components.a, {
            href: "https://github.com/vercel/next.js/tree/canary/examples",
            children: "GitHub: vercel/next.js - Examples"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["💡 ", createVNode(_components.strong, {
          children: "เคล็ดลับ"
        }), ": อย่าเรียนทุกอย่างก่อนเริ่มเขียน ให้ “เรียน → ทำ → แก้ไข → กลับมาเรียนใหม่” เป็นวงจร จะเรียนรู้ได้เร็วและลึกกว่า"]
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "สรุป",
      children: "สรุป"
    }), "\n", createVNode(_components.p, {
      children: ["React.js ไม่ใช่แค่ “เทรนด์” แต่เป็น ", createVNode(_components.strong, {
        children: "พื้นฐานสำคัญของ Frontend Development"
      }), " ในยุคปัจจุบัน"]
    }), "\n", createVNode(_components.p, {
      children: "การเข้าใจ React อย่างลึกซึ้ง — ตั้งแต่ JSX, Hooks, Virtual DOM, ไปจนถึง Ecosystem — จะช่วยให้คุณ:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "เขียนโค้ดที่มีคุณภาพสูง"
      }), "\n", createVNode(_components.li, {
        children: "แก้ปัญหาได้เร็วขึ้น"
      }), "\n", createVNode(_components.li, {
        children: "เตรียมพร้อมสำหรับ Next.js และเครื่องมือระดับ Production"
      }), "\n"]
    }), "\n", createVNode($$InfoBox, {
      title: "Pro Tip!",
      children: createVNode(_components.p, {
        children: ["อย่าพยายามจำทุกอย่างในครั้งเดียว ให้ ", createVNode("strong", {
          children: "ฝึกด้วยโปรเจกต์จริง"
        }), " — คุณจะเข้าใจลึกกว่าการอ่านบทความ 10 บทความ"]
      })
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["🚀 ", createVNode(_components.strong, {
          children: "คำแนะนำสุดท้าย"
        }), ": อย่าพยายามจำทุกอย่าง ให้เริ่มจาก “ใช้ให้เป็น” แล้วค่อย “เข้าใจให้ลึก” ฝึกด้วยโปรเจกต์จริง คุณจะเก่งขึ้นเร็วกว่าที่คิด"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["หากคุณชอบบทความนี้ อย่าลืมแชร์และติดตามซีรีส์ ", createVNode(_components.strong, {
        children: "“Frontend Developer Roadmap”"
      }), " เพื่อไม่พลาดเนื้อหาใหม่ ๆ ที่จะช่วยให้คุณก้าวสู่การเป็นนักพัฒนาเว็บมืออาชีพอย่างมั่นใจ"]
    }), "\n", createVNode(_components.hr, {})]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/blog/frontend-developer-roadmap-part-1.mdx";
const file = "/Users/suradetpratomsak/Desktop/my-web-blogger/src/content/blog/frontend-developer-roadmap-part-1.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/suradetpratomsak/Desktop/my-web-blogger/src/content/blog/frontend-developer-roadmap-part-1.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
