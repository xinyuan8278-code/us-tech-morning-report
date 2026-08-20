# 美股科技日报 · 自动更新部署配置

> 这份文件用于在**新电脑**上重新搭建「每天 09:30 自动抓取 → 更新 → git push → Netlify 部署」的完整链路。
> 把它和整个项目文件夹一起带到新电脑即可。

---

## 一、自动化任务配置（带到新电脑后重建）

在新电脑的 WorkBuddy 里，把下面的配置发给 AI，让它创建自动化任务即可。

- **任务名称**：美股科技日报每日自动更新
- **执行时间**：每天 09:30（北京时间），rrule = `FREQ=DAILY;BYHOUR=9;BYMINUTE=30`
- **工作目录**：本项目文件夹（data.js 所在目录，按新电脑实际解压路径填写）
- **需激活的数据源**：腾讯自选股（connector id：`westock-mcp`）
- **有效期**：长期有效（validFrom 当天起、validUntil 2099-12-31）

**任务完整指令（prompt，原样复制给新电脑的 AI）：**

```
【每日自动任务】生成并更新《美股科技板块前一交易日行情日报》网页版数据文件 data.js，并自动 git push 到远程仓库触发 Netlify 部署。

工作目录即项目根目录，包含：index.html、data.js、live.js、report-prompt.md。本目录是已配置好远程仓库(remote)的 git 仓库。

一、总体原则
1. 本任务只负责更新 data.js 中「除涨跌幅以外的所有内容」。涨跌幅（overview.indices、stocks、alerts 里的 change 字段）一律保持 "-0.00%" 不变——网页前端由 live.js 实时接入腾讯自选股行情，禁止在 data.js 里填写任何涨跌幅数值。
2. 内容生成规范严格遵守本目录下 report-prompt.md 的全部要求。

二、执行步骤
1. 先读取 report-prompt.md，并严格遵守其所有规则。
2. 确定日期（用系统命令获取北京时间今天）：
   - meta.reportDate = 今天日期（格式 XXXX年XX月XX日）
   - meta.tradeDate = 前一个美股实际交易日（跳过周末与美国节假日；若周一运行则取上周五）。
3. 用腾讯自选股数据接口（westock）拉取跟踪指数与重点个股「前一交易日」的收盘点位与涨跌幅，仅用于：①判断超涨/超跌个股；②撰写市场概览。这些数值不写入 data.js 的 change 字段。
4. 抓取新闻（强制一手数据源 + 聚焦交易驱动变量）：
   - 重点抓取「驱动市场的底层变量」，而非"某股涨跌"的行情表象：①财政/货币政策（财政部发债计划、国债回购、美联储利率决议与会议纪要、财政部长/美联储主席讲话）；②利率与流动性（国债收益率、回购操作、美元指数、油价、信用利差）；③产业基本面（AI资本开支、芯片订单、存储价格周期、供应链、HBM/GPU供需）；④公司重大事件（财报、并购、融资、监管、诉讼）。
   - 每条新闻必须交代清楚"背后的政策/利率/流动性/基本面驱动"，不能只罗列涨跌数据。
   - 仅使用境外英文一手来源：官方一手（whitehouse.gov / bis.gov / sec.gov / commerce.gov / treasury.gov / ustr.gov 等政府官网原文）或权威英文媒体原文（reuters.com / bloomberg.com / wsj.com / cnbc.com / ft.com / bbc.com）。
   - 严禁使用中文媒体、二手转载或聚合平台（如网易、新浪、腾讯、21财经、证券时报、财联社、华尔街见闻、雪球等）。若某新闻只有中文二手来源，宁可舍弃，或用官方原文/英文权威原文替代。
   - 每条新闻的 url 与 link 必须是一手源的真实原文链接（指向 treasury.gov、reuters.com 等原始站点，而非转载页）。
5. 更新 data.js（务必保持 window.REPORT_DATA 整体结构与字段名不变，只替换字段值）：
   - meta.reportDate、meta.tradeDate
   - overview.text：简短概括（指数变化 + 个股变化 + 重大事件，150 字以内）
   - overview.indices：保留 4 个指数对象（IXIC/NDX/SPX/SOX），change 保持 "-0.00%"
   - alerts：超涨/超跌提示（若存在则按 report-prompt.md 格式填写，change 保持 "-0.00%"；若无则置空数组 []）
   - stocks：保留 10 只股票对象（NVDA/MSFT/AAPL/AMZN/GOOGL/META/AVGO/AMD/MU/SNDK），change 保持 "-0.00%"，driver 填真实驱动因素
   - news：5—10 条真实新闻，每条含 title/originalTitle/source/time/type/url/link/summary/impact，全部为一手源、聚焦驱动变量
   - logics：3 条交易逻辑
   - watchlist：未来 1—3 个交易日（及近期）的具体事件，必须写清具体公司名/会议名/数据名 + 具体日期（如「9月X日 中美AI会谈」「X月X日 NVIDIA 财报」「X月X日 美国CPI数据」），禁止抽象描述
6. 硬性要求：不得编造新闻、数据或 URL；每条新闻必须有真实可点击链接与完整爬取 URL；无法确认来源的信息写「暂无可靠信息」；涨跌幅一律不填。
7. 提交并推送（触发 Netlify 自动构建部署）：
   - git add data.js
   - git commit -m "chore: 更新美股科技日报 $(date +%Y-%m-%d)"
   - git push
   - 若 git push 失败，不要静默忽略，用一句话说明失败原因。

三、完成后用一句话说明本次更新了哪些内容以及 git push 是否成功，不输出检索过程。
```

---

## 二、换电脑部署步骤（按顺序执行）

1. 新电脑安装 **WorkBuddy** 并登录。
2. 在 WorkBuddy 里连接「**腾讯自选股**」数据源（connector）。
3. 把本项目文件夹解压到任意目录（记下路径）。
4. 在 WorkBuddy 里按上面「一」的配置，让 AI 重建自动化任务（工作目录填你的解压路径）。
5. 配置 git 三样（见下「三」）。
6. 在 **Netlify** 后台把该 GitHub 仓库关联上（connect），实现 push 即部署。

---

## 三、git 三样配置（必须在新电脑上配置）

1. **仓库地址**：GitHub/GitLab 的 `.git` URL（HTTPS 或 SSH）。
2. **认证**：
   - SSH 方式（推荐）：新电脑生成 SSH 密钥对，把公钥添加到 GitHub 账号的 Settings → SSH keys。
   - HTTPS Token 方式：在 GitHub 账号里生成 Personal Access Token，用 token 做密码。
3. **身份**：commit 显示的名字 + 邮箱（例如 GitHub 用户名 + 邮箱）。

> ⚠️ 这三样必须配在「执行 push 的新电脑」上，SSH 私钥是绑定机器的，不会随文件迁移。

---

## 四、运行前提

- 每天 09:30 新电脑**开机**、WorkBuddy 保持运行。
- 新电脑能**翻墙**（访问 reuters.com / treasury.gov / bloomberg.com 等境外英文源）。
