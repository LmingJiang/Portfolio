# Floema.com 网站完整拆解

> 目标：从布局、动效、衔接、模块、导航等各方面达到 90% 结构相似度
> 风格和内容不需要考虑——本拆解只关注「骨架」和「交互」

---

## 一、技术栈识别

| 层级 | 技术 | 用途 |
|------|------|------|
| 框架 | Nuxt 3 (Vue) | 我们用 React 替代即可 |
| CMS | Sanity.io | 不需要，数据写死 |
| 图片优化 | Nuxt IPX → WebP | 用 Vite 插件或手动压缩 |
| 样式 | Tailwind CSS / 自定义 SCSS | 保留 Tailwind |
| 平滑滚动 | **Lenis** (@studio-freight/lenis) | 惯性滚动核心 |
| 动画引擎 | **GSAP + ScrollTrigger** | 滚动触发动画/视差/拖拽 |
| 页面转场 | **Barba.js** 或 Nuxt 原生 transition | React 用 Framer Motion 替代 |
| 自定义光标 | 纯 JS + CSS | `mousemove` 追踪 + `mix-blend-mode: difference` |

**我们需要安装的依赖**：
```bash
npm install @studio-freight/lenis gsap @gsap/react
```

---

## 二、页面整体结构（从上到下）

```
┌──────────────────────────────────────────┐
│  Header（固定浮动，透明背景）              │
│  Logo 左 · 汉堡菜单 右                    │
├──────────────────────────────────────────┤
│  Hero（全屏 100vh）                       │
│  大标题 衬线体 居左下                      │
│  "Made to Last" 副标题                    │
│  Scroll to Explore ↓ 浮动箭头             │
├──────────────────────────────────────────┤
│  Section 01（编号产品块）                  │
│  全幅大图 + 左侧编号/标题/描述/CTA         │
├──────────────────────────────────────────┤
│  Section 02                               │
│  同上结构，图片与文字可左右交替             │
├──────────────────────────────────────────┤
│  Section 03                               │
├──────────────────────────────────────────┤
│  Section 04                               │
├──────────────────────────────────────────┤
│  Section 05                               │
├──────────────────────────────────────────┤
│  About / Ethos 块                         │
│  引言 + 竖图 + 文字描述                    │
├──────────────────────────────────────────┤
│  Recent News 块                           │
│  "Recent News ↓" 标签 + 2-3 卡片          │
├──────────────────────────────────────────┤
│  Recent Addings 块                        │
│  "Recent Addings ↓" 标签 + 产品卡片        │
├──────────────────────────────────────────┤
│  Collections 概览                         │
│  5 类 × 6 图网格 + 类别名 + 数量           │
├──────────────────────────────────────────┤
│  Sustainability / 引言块                   │
│  大号引言 + 三列流程（Design/Build/Impl）   │
├──────────────────────────────────────────┤
│  Newsletter 块                            │
│  "Join our community" + 邮箱输入            │
├──────────────────────────────────────────┤
│  Footer                                   │
│  三列地址 · 导航 · 社交 · 认证徽章         │
└──────────────────────────────────────────┘
```

---

## 三、Header 导航系统

### 3.1 结构

```
┌────────────────────────────────────────────────────┐
│  [Logo]                              [Menu ☰]      │
│                                                     │
│  固定定位 fixed, 透明背景, z-50                      │
│  滚动后背景变为实色 + 轻微模糊                        │
└────────────────────────────────────────────────────┘
```

### 3.2 全屏覆盖菜单

点击汉堡按钮 → 全屏覆盖层展开：

```
┌────────────────────────────────────────────────────┐
│  [Logo]                              [Close ✕]     │
│                                                     │
│                                                     │
│  01  About                                          │
│  02  Works                                          │
│  03  Process                                        │
│  04  Journal                                        │
│  05  Contact                                        │
│                                                     │
│                                                     │
│  底部：社交链接 / 版权信息                            │
└────────────────────────────────────────────────────┘
```

### 3.3 菜单动效规格

| 属性 | 规格 |
|------|------|
| 覆盖层背景 | 深色 `rgba(10,10,10,0.95)` + `backdrop-blur(20px)` |
| 覆盖层入场 | `clip-path: inset(0 0 100% 0)` → `inset(0)` ，时长 0.6s，`ease: power3.inOut` |
| 菜单项字号 | 48-64px 衬线体 |
| 菜单项入场 | 从 `translateY(40px) opacity:0` → `translateY(0) opacity:1` |
| 菜单项 stagger | 每项间隔 0.08s |
| 编号样式 | 小号 14px 无衬线，与菜单项同行左侧，`opacity: 0.4` |
| 汉堡→关闭 | SVG 路径变形（三线变叉），0.4s |

### 3.4 提示词：全屏覆盖导航

```
创建一个全屏覆盖导航组件 Navigation.jsx：

结构：
- 顶部固定栏：左侧 Logo 文字，右侧汉堡按钮
- 固定定位 fixed top-0，z-50
- 初始状态背景透明，滚动超过 100px 后添加背景色 + backdrop-blur

汉堡按钮：
- 两条横线 + 中间一条横线（共3条）
- 点击后 SVG 路径变形为 X 关闭按钮
- 使用 Framer Motion animate 控制

全屏覆盖层：
- 打开时 clip-path 从 inset(0 0 100% 0) 动画到 inset(0)，0.6s
- 背景色 rgba(10,10,10,0.95) + backdrop-blur(20px)
- 菜单项垂直居中排列，每项：左侧小号编号(01-05, 14px, opacity 0.4) + 右侧大号文字(48-64px 衬线体)
- 菜单项入场动画：translateY(40px) opacity:0 → translateY(0) opacity:1，stagger 0.08s
- 点击菜单项后平滑滚动到对应 section + 自动关闭覆盖层
- 底部显示社交链接和版权信息

过渡：
- 使用 Framer Motion AnimatePresence 控制进出动画
- 关闭时反向动画，clip-path 收回
```

---

## 四、Hero 区域

### 4.1 结构

```
┌────────────────────────────────────────────────────┐
│                                                     │
│                                                     │
│                                                     │
│                                                     │
│  Spaces for people,                                 │
│  made for life.                                     │
│                                                     │
│  Made to Last                                       │
│  Scroll to Explore ↓                                │
│                                                     │
└────────────────────────────────────────────────────┘
```

### 4.2 布局规格

| 属性 | 规格 |
|------|------|
| 容器 | `min-h-screen w-full relative overflow-hidden` |
| 背景图 | 全幅大图 `object-cover absolute inset-0` |
| 标题位置 | 左下象限，`absolute bottom-[15%] left-[80px]` |
| 标题字号 | 64-80px 衬线体，`line-height: 1.1` |
| 副标题 | h4 28px，标题下方 |
| 滚动提示 | `position: absolute bottom-[5%] left-[80px]`，小号文字 + ↓ 箭头 |
| 箭头动画 | `translateY(0) → translateY(8px) → translateY(0)`，2s 循环 |
| 内容区 padding | 桌面 `0 80px`，移动端 `0 24px` |

### 4.3 Hero 入场序列

```
0.0s - 页面加载
0.3s - 背景图从 scale(1.15) 缓动到 scale(1.0)，1.2s，ease: power3.out
0.5s - 主标题从 clip-path: inset(0 0 100% 0) 揭示，0.8s
0.7s - 副标题淡入，0.6s
1.2s - 滚动提示淡入 + 开始浮动循环
```

### 4.4 提示词：沉浸式 Hero

```
创建沉浸式全屏 Hero 组件 Hero.jsx：

布局：
- 容器 min-h-screen w-full relative overflow-hidden
- 背景图 absolute inset-0，object-cover
- 内容区 absolute bottom-[12%] left-0 right-0，使用容器 padding（px-20 md:px-[80px]）

内容层级（从上到下）：
1. 主标题 h1：64-80px 衬线体，line-height: 1.1，最多两行
2. 副标题 h4：28px，与主标题间距 20px
3. 滚动提示：absolute bottom-[5%]，小号文字 + ↓ 箭头字符

入场动画序列（Framer Motion）：
- 背景图：initial scale(1.15) → animate scale(1)，1.2s，ease easeOut
- 主标题：initial clipPath "inset(0 0 100% 0)" → animate "inset(0)"，0.8s，delay 0.5s
- 副标题：initial opacity 0 y:20 → animate opacity 1 y:0，0.6s，delay 0.7s
- 滚动提示：initial opacity 0 → animate opacity 1，delay 1.2s
- 箭头持续动画：y: [0, 8, 0]，2s 循环，ease: easeInOut

响应式：
- 移动端标题 36-42px，padding 24px
- 桌面端标题 64-80px，padding 80px
```

---

## 五、编号产品块 Section（01-05）

这是 Floema 的核心重复模块，整站出现 5 次。

### 5.1 结构

```
┌────────────────────────────────────────────────────┐
│                                                     │
│            ┌─────────────────────────┐              │
│            │                         │              │
│            │    全幅大图              │              │
│            │    3400×2120            │              │
│            │                         │              │
│            └─────────────────────────┘              │
│                                                     │
│  01                                                 │
│  Urban                                              │
│  Signage, furniture, and equipment                  │
│  for welcoming urban spaces                         │
│                                                     │
│  See Urban Products →                               │
│  ┌────────┐                                         │
│  │Catalog │  Download PDF                           │
│  └────────┘                                         │
│                                                     │
└────────────────────────────────────────────────────┘
```

**另一种布局（交替）**：

```
┌────────────────────────────────────────────────────┐
│                                                     │
│  02         ┌─────────────────────────┐             │
│  Nature     │                         │             │
│             │    全幅大图              │             │
│  desc...    │                         │             │
│             │                         │             │
│  CTA →     └─────────────────────────┘             │
│                                                     │
└────────────────────────────────────────────────────┘
```

### 5.2 规格表

| 属性 | 规格 |
|------|------|
| Section 间距 | `py-[160px]` 到 `py-[200px]` |
| 编号 | 48-64px，`opacity: 0.15-0.3`，衬线或等宽 |
| 类别名 | 14px 大写，`letter-spacing: 0.15em`，无衬线 |
| 描述标题 | 28-36px 衬线体 |
| CTA 链接 | 16px，下划线从左到右滑入 hover 效果 |
| 图片 | 全幅 `w-full`，`aspect-ratio: 16/10`，`overflow-hidden` |
| 图片 hover | `scale(1.03)`，0.8s transition |
| 交替布局 | 奇数：图上文下；偶数：图右文左（桌面端两列） |
| 内容宽度 | 受容器限制，max-w-[50%]（桌面端文字列） |
| 目录下载 | 缩略图(小) + "Download PDF" 链接，inline 排列 |

### 5.3 滚动触发动画

```
进入视口时：
- 图片：clipPath 从 "inset(0 0 0 0)" 无动画（或从 inset(2% 2% 2% 2%) → inset(0)，微缩放揭示）
- 编号 + 标题 + 描述：translateY(30px) opacity:0 → translateY(0) opacity:1
- stagger: 编号 0s → 类别名 0.1s → 描述 0.2s → CTA 0.3s
- 触发条件：viewport once: true, amount: 0.3
```

### 5.4 提示词：编号产品块

```
创建编号产品块组件 NumberedSection.jsx：

Props: { number, category, title, description, ctaText, ctaLink, image, catalogPdf, reverse }

布局：
- 桌面端（md+）：两列网格 grid grid-cols-2 gap-[80px]
  - reverse=false: 左列=文字，右列=图片
  - reverse=true: 左列=图片，右列=文字
- 移动端：单列堆叠，图片在上

文字列内容（垂直堆叠）：
1. 编号：text-5xl font-serif opacity-20
2. 类别名：text-sm uppercase tracking-[0.15em] font-sans
3. 描述标题：text-3xl font-serif
4. CTA链接：text-base，hover 时下划线从左到右展开（::after 伪元素 width 0→100%）

图片列：
- 容器 overflow-hidden rounded-none（无圆角）
- 图片 w-full aspect-[16/10] object-cover
- hover: scale(1.03) transition-transform duration-700

滚动触发动画（Framer Motion whileInView）：
- 整个文字列：initial opacity:0 y:30 → animate opacity:1 y:0，stagger 子元素 0.1s
- 图片：initial scale(1.08) → animate scale(1)，duration 1.2s，ease easeOut
- viewport once: true, amount: 0.3

Section 间距：py-[160px] md:py-[200px]
```

---

## 六、About / Ethos 块

### 6.1 结构

```
┌────────────────────────────────────────────────────┐
│                                                     │
│  "Going beyond the expected                         │
│   is our calling."                                  │
│                                                     │
│  ┌──────┐                                           │
│  │      │  The nature of what endures...            │
│  │ 竖图 │  描述段落...                               │
│  │      │                                           │
│  │      │                                           │
│  └──────┘                                           │
│                                                     │
└────────────────────────────────────────────────────┘
```

### 6.2 规格表

| 属性 | 规格 |
|------|------|
| 引言 | 大号衬线体 36-48px，斜体，居中或偏左 |
| 图文布局 | 两列：左竖图（4列宽）+ 右文字（8列宽） |
| 竖图 | aspect-ratio 约 3:4，无圆角 |
| 文字 | 16-18px 正文，行高 1.6-1.8 |
| 间距 | py-[160px] |

### 6.3 提示词

```
创建 About 叙事块组件 AboutNarrative.jsx：

布局：
- 引言行：全宽，大号衬线体 36-48px italic，居中，py-[80px]
- 图文区：grid grid-cols-12 gap-[80px]
  - 左列 col-span-4：竖图，aspect-[3/4]，object-cover
  - 右列 col-span-8：文字段落，text-lg，leading-relaxed

滚动动画：
- 引言：whileInView 从 translateY(30px) opacity:0 进入
- 竖图：whileInView 从 scale(1.1) 进入，1.2s
- 文字：stagger fadeInUp
```

---

## 七、Recent News / Recent Addings 块

### 7.1 结构

```
┌────────────────────────────────────────────────────┐
│  Recent News ↓                                      │
│                                                     │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐         │
│  │  图片     │  │  图片     │  │  图片     │         │
│  │          │  │          │  │          │         │
│  │  标题    │  │  标题    │  │  标题    │         │
│  │  日期    │  │  日期    │  │  日期    │         │
│  └──────────┘  └──────────┘  └──────────┘         │
│                                                     │
└────────────────────────────────────────────────────┘
```

### 7.2 规格表

| 属性 | 规格 |
|------|------|
| 标签标题 | 小号大写 + ↓ 箭头，12-14px |
| 卡片网格 | 2-3 列，gap-[40px] |
| 卡片图片 | aspect-[4/3]，hover 时 scale(1.03) |
| 卡片标题 | 20-24px 衬线体 |
| 日期 | 14px，muted 色 |
| 入场动画 | stagger fadeInUp，每张卡片间隔 0.1s |

### 7.3 提示词

```
创建新闻/产品卡片列表组件 CardGrid.jsx：

Props: { label, items: [{image, title, date, category}] }

结构：
- 顶部标签行：小号大写文字 + ↓ 箭头字符，mb-[60px]
- 网格：grid grid-cols-1 md:grid-cols-3 gap-[40px]

每张卡片：
- 图片容器 overflow-hidden，aspect-[4/3]
- 图片 object-cover，hover: scale(1.03) transition duration-700
- 标题 text-xl font-serif mt-4
- 日期/分类 text-sm text-muted mt-2

滚动动画：
- 标签行：fadeInUp
- 卡片：stagger fadeInUp，每张 delay +0.1s
```

---

## 八、Collections 概览块

### 8.1 结构

```
┌────────────────────────────────────────────────────┐
│  The Collections                                    │
│                                                     │
│  ┌─────────────────┐  ┌─────────────────┐          │
│  │ ┌──┐┌──┐┌──┐   │  │ ┌──┐┌──┐┌──┐   │          │
│  │ └──┘└──┘└──┘   │  │ └──┘└──┘└──┘   │          │
│  │ ┌──┐┌──┐┌──┐   │  │ ┌──┐┌──┐┌──┐   │          │
│  │ └──┘└──┘└──┘   │  │ └──┘└──┘└──┘   │          │
│  │                  │  │                  │          │
│  │ Urban (50)  →   │  │ Nature (38) →   │          │
│  └─────────────────┘  └─────────────────┘          │
│                                                     │
│  ┌─────────────────┐  ┌─────────────────┐          │
│  │  ...             │  │  ...             │          │
│  │ Golf (62)   →   │  │ Details (00) →  │          │
│  └─────────────────┘  └─────────────────┘          │
│                                                     │
└────────────────────────────────────────────────────┘
```

### 8.2 规格表

| 属性 | 规格 |
|------|------|
| 网格 | 2-3 列，gap-[24px] |
| 每卡内图片 | 3×2 网格（6张缩略图），gap-[4px] |
| 类别名 | 衬线体 20-24px |
| 数量 | 无衬线小号，与类名同行 |
| 卡片 hover | 整体轻微上移 + 阴影加深 |
| 入场动画 | stagger，0.1s 间隔 |

---

## 九、三列流程块（Design / Build / Implement）

### 9.1 结构

```
┌────────────────────────────────────────────────────┐
│                                                     │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐         │
│  │  icon    │  │  icon    │  │  icon    │         │
│  │ We       │  │ We       │  │ We       │         │
│  │ Design   │  │ Build    │  │ Implement│         │
│  │          │  │          │  │          │         │
│  │ desc...  │  │ desc...  │  │ desc...  │         │
│  └──────────┘  └──────────┘  └──────────┘         │
│                                                     │
└────────────────────────────────────────────────────┘
```

### 9.2 规格表

| 属性 | 规格 |
|------|------|
| 布局 | grid grid-cols-3 gap-[60px] |
| 图标 | 40-80px SVG，描边风格 |
| 标题 | 24-28px 衬线体 |
| 描述 | 16px 正文 |
| 入场 | stagger，每列 0.15s 延迟 |

---

## 十、Footer

### 10.1 结构

```
┌────────────────────────────────────────────────────┐
│  "We think outdoor furniture should look            │
│   and feel good while doing good..."                │
│                                                     │
│  ─────────────────────────────────────────          │
│                                                     │
│  Newsletter     │ HQ 地址    │ Production │ Spain   │
│  [email input]  │ 电话       │ 地址       │ 地址    │
│  [subscribe]    │ 邮箱       │            │ 邮箱    │
│                                                     │
│  ─────────────────────────────────────────          │
│                                                     │
│  Nav Links     │ Social Icons │ Credits             │
│  Products      │ LinkedIn     │ Made by Büro        │
│  About         │ Facebook     │                     │
│  ...           │ Instagram    │                     │
│                                                     │
│  ─────────────────────────────────────────          │
│  [Badge1] [Badge2] [Badge3]                         │
└────────────────────────────────────────────────────┘
```

### 10.2 规格表

| 属性 | 规格 |
|------|------|
| 顶部引言 | 大号衬线斜体，居中 |
| 分隔线 | 1px solid，极淡色 |
| 列布局 | grid grid-cols-12 |
| Newsletter 列 | col-span-4 |
| 地址列 | col-span-8 内均分3列 |
| 字号 | 地址 14px，链接 14px，版权 12px |

---

## 十一、丝滑交互层（核心差异化）

### 11.1 平滑滚动（Lenis）

```javascript
// 在 App.jsx 或 main.jsx 中初始化
import Lenis from '@studio-freight/lenis';

const lenis = new Lenis({
  duration: 1.2,          // 滚动持续时间
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),  // 指数缓动
  orientation: 'vertical',
  gestureOrientation: 'vertical',
  smoothWheel: true,
  wheelMultiplier: 1,
  touchMultiplier: 2,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
```

### 11.2 自定义光标

```
结构：
- 两个 div：外圈(.cursor-outer, 40px) + 内点(.cursor-inner, 8px)
- 默认状态：cursor: none 在 body 上
- 外圈：border 1px solid，mix-blend-mode: difference，背景白
- 内点：圆形实色，mix-blend-mode: difference

跟随逻辑：
- 使用 lerp 插值，不要直接赋值鼠标坐标
- 外圈速度 0.15，内点速度 0.25
- requestAnimationFrame 驱动

状态变化：
- hover 链接/按钮：外圈 scale(2.5)，border-color 变化
- hover 图片：外圈 scale(3)，内显示 "View" 文字
- hover 可拖拽元素：外圈 scale(2)，显示拖拽图标
- 点击：外圈 scale(0.8) 后回弹 scale(1)

隐藏条件：
- 移动端（window.innerWidth < 768）不显示
- 鼠标离开窗口时隐藏
```

### 11.3 磁性按钮

```
原理：
- 鼠标进入按钮范围时，按钮向鼠标方向偏移
- 偏移量 = (鼠标位置 - 按钮中心) * 磁性系数(0.3-0.5)
- 鼠标离开时，按钮弹回原位

实现：
- 使用 useRef 获取按钮 DOM
- onMouseMove 计算 offset，通过 transform: translate(x, y) 应用
- onMouseLeave 重置为 translate(0, 0)
- 使用 spring 动画或 CSS transition: 0.3s ease-out
```

### 11.4 CTA 链接 hover 效果

```
下划线滑入效果：
- 链接默认 position: relative
- ::after 伪元素：content: '', position: absolute, bottom: -2px, left: 0
- 默认：width: 0, height: 1px, background: currentColor
- hover：width: 100%, transition: width 0.4s ease
```

### 11.5 图片揭示动画

```
两种模式：

模式A - 缩放揭示（推荐，简单）：
- 容器 overflow: hidden
- 图片 initial: scale(1.15) → animate: scale(1.0)
- 同时容器可选 opacity: 0 → 1
- duration: 1.2s, ease: [0.25, 0.1, 0.25, 1]

模式B - clip-path 揭示（更高级）：
- 容器 initial: clipPath: "inset(0 0 100% 0)"
- animate: clipPath: "inset(0)" 
- duration: 1s, ease: [0.77, 0, 0.175, 1]
- 同时图片从 scale(1.2) → scale(1.0)
```

### 11.6 提示词：自定义光标

```
创建自定义光标组件 CustomCursor.jsx：

结构：
- 两个 absolute 定位 div：cursor-outer (40×40px 圆) + cursor-inner (8×8px 圆)
- body 设置 cursor: none

样式：
- cursor-outer: border 1px solid rgba(255,255,255,0.8), border-radius: 50%, mix-blend-mode: difference, background: transparent
- cursor-inner: background: #fff, border-radius: 50%, mix-blend-mode: difference
- pointer-events: none, z-index: 9999, position: fixed, top: 0, left: 0
- transform: translate(-50%, -50%) 确保中心对齐

跟随逻辑（useEffect + requestAnimationFrame）：
- 监听 mousemove 获取 clientX/clientY
- 使用 lerp 插值：currentX += (targetX - currentX) * speed
- outer speed: 0.15, inner speed: 0.25
- 每帧更新 transform: translate(${x}px, ${y}px)

状态检测：
- 监听 mouseover 事件，检查 e.target.closest('a, button, [data-cursor]')
- hover 链接/按钮：outer scale(2.5)，transition 0.3s
- hover [data-cursor="view"]：outer scale(3)，内部显示 "View" 文字
- hover [data-cursor="drag"]：outer scale(2)，显示拖拽图标
- mousedown：outer scale(0.8)；mouseup：outer scale(1)

隐藏条件：
- 移动端不渲染
- 鼠标离开窗口时 opacity: 0
```

---

## 十二、滚动触发动画系统

### 12.1 通用入场动画

所有 Section 内容使用统一的入场动画模式：

```javascript
// 基础 fadeInUp
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
};

// stagger 容器
const staggerContainer = {
  initial: {},
  whileInView: {
    transition: { staggerChildren: 0.1 }
  }
};

// stagger 子项
const staggerItem = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
};
```

### 12.2 视差效果

```javascript
// 图片视差（使用 GSAP ScrollTrigger）
useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);
  
  const image = imageRef.current;
  gsap.to(image, {
    yPercent: -15,           // 图片向上偏移 15%
    ease: "none",
    scrollTrigger: {
      trigger: image.parentElement,
      start: "top bottom",
      end: "bottom top",
      scrub: true            // 跟随滚动实时更新
    }
  });
  
  return () => ScrollTrigger.getAll().forEach(t => t.kill());
}, []);
```

### 12.3 文字逐行揭示

```javascript
// 将文字拆分为行，每行有独立的 clip-path 遮罩
// 使用 Framer Motion 的 stagger 实现逐行入场

const textRevealLine = {
  initial: { 
    y: "100%",
    transition: { duration: 0.8, ease: [0.77, 0, 0.175, 1] }
  },
  whileInView: { 
    y: "0%",
    transition: { duration: 0.8, ease: [0.77, 0, 0.175, 1] }
  }
};

// 每行文字包裹在 overflow:hidden 的容器中
// 内部 span 使用 y: 100% → 0% 的滑入效果
```

---

## 十三、页面转场

### 13.1 路由切换动画

```
使用 Framer Motion 的 AnimatePresence：

退出动画：
- 当前页面 opacity: 1 → 0，y: 0 → -30
- duration: 0.4s

进入动画：
- 新页面 opacity: 0 → 1，y: 30 → 0
- duration: 0.6s，delay: 0.2s（等退出完成再进入）

模式：
- mode="wait"（等待退出完成再进入）
- 滚动位置重置到顶部
```

---

## 十四、响应式断点

| 断点 | 宽度 | 变化 |
|------|------|------|
| 移动端 | < 768px | 单列，padding 24px，标题 36px，隐藏自定义光标 |
| 平板 | 768-1024px | 两列，padding 40px，标题 48px |
| 桌面 | 1024-1440px | 完整布局，padding 80px，标题 64-80px |
| 大屏 | > 1440px | 内容 max-w-[1440px] 居中 |

---

## 十五、全局设计规范汇总

### 15.1 间距系统

| 用途 | 值 |
|------|------|
| Section 垂直间距 | 160-200px（桌面）/ 80-120px（移动） |
| 容器水平 padding | 80px（桌面）/ 24px（移动） |
| 元素间距（同组） | 16-24px |
| 元素间距（跨组） | 48-60px |
| 网格 gap | 24-40px |

### 15.2 字体层级

| 元素 | 字号 | 字重 | 字体 |
|------|------|------|------|
| Hero 主标题 | 64-80px | 500 | 衬线体 |
| Section 编号 | 48-64px | 400 | 衬线/等宽 |
| Section 标题 | 28-36px | 500 | 衬线体 |
| 引言 | 36-48px | 400 italic | 衬线体 |
| 正文 | 16-18px | 400 | 无衬线 |
| 标签/编号 | 12-14px | 500 | 无衬线大写 |
| 小字 | 12px | 400 | 无衬线 |

### 15.3 色彩占位（可替换为你自己的配色）

| 角色 | Floema 用色 | 说明 |
|------|------------|------|
| 背景 | #F5F2EE 米白 | 温暖中性底 |
| 文字 | #1A1A1A 深炭黑 | 主文字 |
| 辅助文字 | #666 灰 | 日期、标签 |
| 分割线 | rgba(0,0,0,0.08) | 极淡 |
| 菜单覆盖 | rgba(10,10,10,0.95) | 深色全屏菜单 |

---

## 十六、完整组件清单（你需要创建的文件）

```
src/
├── components/
│   ├── Navigation.jsx        ← 全屏覆盖导航 + 固定顶栏
│   ├── Hero.jsx              ← 全屏沉浸 Hero（重写）
│   ├── NumberedSection.jsx   ← 编号产品块（核心重复模块）
│   ├── AboutNarrative.jsx    ← 图文叙事块
│   ├── CardGrid.jsx          ← 新闻/产品卡片列表
│   ├── CollectionsGrid.jsx   ← 多图网格概览
│   ├── Triptych.jsx          ← 三列流程块
│   ├── Newsletter.jsx        ← 邮箱订阅
│   ├── Footer.jsx            ← 页脚
│   ├── CustomCursor.jsx      ← 自定义光标
│   ├── MagneticButton.jsx    ← 磁性按钮
│   ├── ScrollProgress.jsx    ← 滚动进度条
│   └── common.jsx            ← 共享动画变体
├── hooks/
│   ├── useLenis.js           ← Lenis 平滑滚动 hook
│   └── useParallax.js        ← GSAP 视差 hook
├── App.jsx                   ← 主布局（重写）
├── main.jsx
└── styles.css                ← 全局样式（重写）
```

---

## 十七、关键实现优先级

| 优先级 | 内容 | 影响度 | 工作量 |
|--------|------|--------|--------|
| P0 | 色彩+字体体系替换 | ★★★★★ | 30min |
| P0 | 全屏覆盖导航 | ★★★★★ | 1.5h |
| P0 | 沉浸式 Hero | ★★★★★ | 1h |
| P1 | 编号产品块 | ★★★★ | 2h |
| P1 | Lenis 平滑滚动 | ★★★★ | 30min |
| P1 | 自定义光标 | ★★★★ | 1.5h |
| P2 | 滚动触发动画系统 | ★★★ | 1h |
| P2 | 图文叙事块 | ★★★ | 1h |
| P2 | 卡片列表组件 | ★★★ | 45min |
| P3 | 磁性按钮 | ★★ | 45min |
| P3 | 滚动进度条 | ★★ | 20min |
| P3 | 页面转场 | ★★ | 1h |
