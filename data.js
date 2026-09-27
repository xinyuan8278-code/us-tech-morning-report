/**
 * ============================================================
 *  美股科技板块前一交易日行情日报 —— 数据文件（每日只需改这里）
 *  （2026-09-27 更新：对应美股交易日 2026-09-25）
 * ============================================================
 *  使用说明：
 *  1. 打开本文件，替换下方各字段的值即可生成当日日报。
 *  2. 改完保存，将整个文件夹重新部署到 Vercel 即生效。
 *  3. 涨跌幅用百分比字符串，如 "+1.25%" / "-0.80%"；涨用红色、跌用绿色（已内置）。
 *  4. 数组项可增删（新闻 news 建议 5—10 条，交易逻辑 logics 建议 3 条）。
 *  5. 无法填写的字段留空字符串 ""，页面会自动显示占位符，请勿编造数据。
 *
 *  【行情自动接入说明】
 *  - 指数(indices)、超涨超跌提示(alerts)、重点公司(stocks) 的涨跌幅，
 *    页面会通过 live.js 自动从「腾讯自选股」拉取实时行情并覆盖显示，
 *    因此 change 字段统一保持占位符 "-0.00%"，无需手工填写。
 *  - 费城半导体指数(SOX)在腾讯自选股无独立行情，live.js 已用 SOXX ETF 代理。
 * ============================================================
 */

window.REPORT_DATA = {

  /* ============ 一、报告头部信息 ============ */
  meta: {
    title: "美股科技板块前一交易日行情日报",
    subtitle: "盘前版 · 大型科技 + 半导体存储跟踪",
    reportDate: "2026年09月27日",   // 报告发布日期（周日）
    tradeDate: "2026年09月25日",    // 对应美股交易日（前一交易日，周五）
    author: "华泰期货 · 研究",
    tag: "每日市场跟踪"
  },

  /* ============ 二、市场概览 ============ */
  overview: {
    /* 简短概括：指数变化 + 个股变化 + 重大事件 */
    text: "9月25日美股全线收涨：纳指+0.48%、标普+0.51%、道指+0.93%，费半+1.41%周线四连涨。微软升级Copilot涨3.66%领涨，苹果创收盘新高逼近5万亿美元；Meta因Muse算力瓶颈跌3.33%。美伊探讨重开霍尔木兹、油价回落，但10年期美债创19年新高、10月加息概率升至66%。",
    /* 指数卡片（可增删） */
    indices: [
      { name: "Nasdaq Composite", code: "IXIC", change: "-0.00%" },
      { name: "Nasdaq-100",       code: "NDX",  change: "-0.00%" },
      { name: "标普500",           code: "SPX",  change: "-0.00%" },
      { name: "费城半导体指数",     code: "SOX",  change: "-0.00%" }
    ]
  },

  /* ============ 三、超涨 / 超跌个股提示 ============ */
  alerts: [],

  /* ============ 四、重点公司行情表 ============ */
  /* 超涨/超跌个股放最上方；无新闻的公司驱动因素简要说明即可 */
  stocks: [
    { name: "SanDisk",   code: "SNDK",  change: "-0.00%", driver: "NAND存储回暖，+1.38%至1777.80美元；此前连续回调后企稳，AI企业级存储需求与美光9/30财报临近支撑，2026年累涨仍约649%" },
    { name: "NVIDIA",    code: "NVDA",  change: "-0.00%", driver: "AI龙头小幅走强，+0.22%至225.07美元；中美峰会结束、特朗普称会晤\"富有成效\"，芯片出口管制走向仍为关键变量" },
    { name: "Microsoft", code: "MSFT",  change: "-0.00%", driver: "大型科技领涨，+3.66%至516.17美元创去年11月以来收盘新高；官方发布新版Copilot（Home/Code/Autopilot），AI Agent产品升级" },
    { name: "Apple",     code: "AAPL",  change: "-0.00%", driver: "创收盘历史新高，+1.53%至341.07美元，总市值逼近5万亿美元；新品发布周期临近叠加风险偏好回暖" },
    { name: "Amazon",    code: "AMZN",  change: "-0.00%", driver: "随大盘窄幅波动，+0.12%；AWS与AI资本开支仍是核心关注" },
    { name: "Alphabet",  code: "GOOGL", change: "-0.00%", driver: "随AI板块走强，+0.46%至343.92美元；AI Agent竞争与Gemini生态受关注" },
    { name: "Meta",      code: "META",  change: "-0.00%", driver: "大型科技唯一下跌，-3.33%；Muse日活11天增10倍至约70万但现算力瓶颈、服务降级，本周仍累涨约13%" },
    { name: "Broadcom",  code: "AVGO",  change: "-0.00%", driver: "定制ASIC随半导体走强，+0.70%至352.81美元；AI定制芯片需求支撑" },
    { name: "AMD",       code: "AMD",   change: "-0.00%", driver: "窄幅波动，+0.22%至630.63美元；AI算力与CPU需求受Agent扩容（如Muse）预期支撑" },
    { name: "Micron",    code: "MU",    change: "-0.00%", driver: "存储企稳，+0.16%至1082.28美元；9/30发布FY2026 Q4财报，DRAM/NAND涨价与HBM4放量为核心看点" }
  ],

  /* ============ 五、重要科技与政策新闻（一手来源） ============ */
  news: [
    {
      title: "微软发布全新 Copilot：新增 Home、Code、Autopilot 三大功能，AI 智能体再升级",
      originalTitle: "Introducing the new Copilot with Home, Code and Autopilot",
      source: "Microsoft 官方博客",
      time: "2026年09月25日",
      type: "官方",
      url: "https://blogs.microsoft.com/blog/2026/09/25/introducing-the-new-copilot-with-home-code-and-autopilot",
      link: "https://blogs.microsoft.com/blog/2026/09/25/introducing-the-new-copilot-with-home-code-and-autopilot",
      summary: "微软9月25日发布新版Copilot，新增Home（整合Chat与Cowork的新入口，将Word/Excel/PowerPoint融入Copilot）、Code（自然语言构建应用，底层技术同GitHub Copilot）、Autopilot（可长期自主执行任务的智能体，前身为Scout）。Home与Code未来几周经Frontier计划推出，Autopilot于月底扩大私有预览。CEO纳德拉称将Copilot打造为\"工作的新操作系统\"。当日微软收涨3.66%至516.17美元，创去年11月以来收盘新高。",
      impact: {
        direction: "利好",
        companies: "微软（MSFT）、AI应用与基础设施链",
        industry: "AI、SaaS、智能体",
        logic: "微软将AI从对话助手升级为可执行任务的智能体平台，强化Agent化叙事，带动AI应用与算力需求重估"
      }
    },
    {
      title: "美股周五收涨：AI股领涨、微软涨3.7%，10年期美债创19年新高、10月加息概率升至66%",
      originalTitle: "Wall Street ends higher as investors buy AI stocks; Microsoft rallies",
      source: "Reuters（经 Yahoo Finance）",
      time: "2026年09月25日",
      type: "财经媒体",
      url: "https://www.yahoo.com/finance/markets/stocks/articles/wall-st-futures-gain-ai-095035646.html",
      link: "https://www.yahoo.com/finance/markets/stocks/articles/wall-st-futures-gain-ai-095035646.html",
      summary: "标普500涨0.51%至7743.41点、纳指涨0.48%至27068.72点、道指涨0.93%至51828.62点，信息技术板块(+0.91%)领涨。微软因Copilot升级涨3.7%，高通+4%、戴尔+5%、Akamai+3.2%（获Anthropic 116亿美元云合同），Meta因Muse回调跌3.3%（本周仍涨约13%）。标普500周涨1.2%、纳指周涨2%。10年期美债收益率升至5.196%创19年新高，CME FedWatch显示10月加息至少25bp概率66%（周初约50%）。美伊谈判代表探讨分阶段结束冲突（重开霍尔木兹+解除封锁），8月AI资本开支带动耐用品订单超预期。",
      impact: {
        direction: "中性偏多",
        companies: "大型科技、半导体、存储",
        industry: "AI、利率、地缘",
        logic: "AI主线延续推升科技股，但美债19年新高与10月加息预期构成估值约束；标普500预期市盈率不足19倍、创2023年来最低，估值与盈利预期分化"
      }
    },
    {
      title: "Akamai 与 Anthropic 签署116亿美元七年云基础设施合同，AI资本开支再添大单",
      originalTitle: "Akamai signs USD 11.6 bn cloud infrastructure deal with Anthropic",
      source: "Voice&Data（行业媒体）",
      time: "2026年09月25日",
      type: "行业媒体",
      url: "https://www.voicendata.com/cloud/akamai-signs-usd-116-bn-cloud-infrastructure-deal-with-anthropic-12574879",
      link: "https://www.voicendata.com/cloud/akamai-signs-usd-116-bn-cloud-infrastructure-deal-with-anthropic-12574879",
      summary: "Akamai与Anthropic达成七年116亿美元云合同承诺（可再扩90亿至约200亿），依托Akamai Cloud分布式基础设施支撑Anthropic增长的CPU工作负载。Anthropic获认股权证（最高对应Akamai约5%普通股，行权价111.33美元）。Akamai预计相关资本开支约55亿美元，2026年增加约17亿用于提前锁定含内存在内的供应链组件。该交易不改变2026年营收指引，收入2027年起逐步确认、2028年底达稳态年化约17亿美元。",
      impact: {
        direction: "利好",
        companies: "Akamai（AKAM）、内存/存储、服务器供应链",
        industry: "AI基础设施、云计算",
        logic: "AI公司持续以多年期合同锁定算力，需求从GPU训练延伸至CPU推理，直接传导至服务器、内存与存储采购，强化AI资本开支持续性"
      }
    },
    {
      title: "伊朗提出7日内重开霍尔木兹海峡计划，美伊探讨分阶段结束冲突",
      originalTitle: "Strait of Hormuz could reopen in 7 days under Iran plan as talks explore phased deal",
      source: "Reuters（经 Türkiye Today）",
      time: "2026年09月25日",
      type: "财经媒体",
      url: "https://www.turkiyetoday.com/region/strait-of-hormuz-could-reopen-in-7-days-under-iran-plan-as-talks-explore-phased-deal-3228896",
      link: "https://www.turkiyetoday.com/region/strait-of-hormuz-could-reopen-in-7-days-under-iran-plan-as-talks-explore-phased-deal-3228896",
      summary: "伊朗外长阿拉格齐称，已通过斡旋方向美方递交方案：若条件满足，霍尔木兹海峡可在7日内重新开放。路透援引消息人士称，美伊谈判代表正探讨分阶段安排——伊朗重开海峡、美国解除经济封锁、伊朗或获解冻资产。双方主要障碍是都不愿先放弃筹码；白宫官员称美国\"占据优势、不急于达成\"。消息推动油价回落（WTI跌2.3%至92.44美元、布伦特仍超100美元），缓解通胀与风险偏好。",
      impact: {
        direction: "中性偏多",
        companies: "能源、航运、高估值成长股",
        industry: "能源、利率、地缘",
        logic: "霍尔木兹重开预期压低油价、缓解通胀压力利好风险偏好；但谈判仍存分歧、未达协议，能源供应风险尚未消除"
      }
    },
    {
      title: "美光9/30财报临近：HBM4放量与长期协议成焦点，存储超级周期迎关键验证",
      originalTitle: "Micron Earnings Preview: Can the Margin Boom Last? HBM4 Ramp and Long-term Contracts in Focus",
      source: "TrendForce（行业媒体）",
      time: "2026年09月22日",
      type: "行业媒体",
      url: "https://www.trendforce.com/news/2026/09/22/news-micron-earnings-preview-can-the-margin-boom-last-hbm4-ramp-and-long-term-contracts-in-focus/",
      link: "https://www.trendforce.com/news/2026/09/22/news-micron-earnings-preview-can-the-margin-boom-last-hbm4-ramp-and-long-term-contracts-in-focus/",
      summary: "美光将于9月30日发布FY2026 Q4财报。FY Q3营收414.6亿美元（环比+74%）、非GAAP毛利率84.9%创纪录。TipRanks预计Q4调整后EPS约31.14美元（同比增超10倍）、营收约504亿美元（同比+345%）；高盛预计毛利率升至87.3%。看点包括：HBM4爬坡（美光已出货HBM4超10亿美元）、DRAM/NAND涨价持续性、与超大规模云厂商的长期协议。三星/SK海力士同步扩产HBM，竞争加剧但供给仍紧。",
      impact: {
        direction: "利好（关键验证事件）",
        companies: "美光（MU）、闪迪（SNDK）、SK海力士、存储链",
        industry: "存储、半导体、AI",
        logic: "财报验证存储涨价周期与HBM需求持续性，决定存储板块下一步定价；供给紧缺+AI需求共振下机构普遍看多，但估值与后续供给增长(含中国CXMT)构成分歧"
      }
    }
  ],

  /* ============ 六、当日最值得关注的 3 个交易逻辑 ============ */
  logics: [
    { title: "AI Agent 从\"训练\"转向\"推理+代执行\"，算力瓶颈反向验证 CPU/存储需求刚性",
      text: "Meta旗下Muse日活11天增长10倍至约70万即现算力瓶颈（服务降级、Agent任务失败），微软升级Copilot（Home/Code/Autopilot）、Akamai 116亿美元CPU云大单，共同指向Agent化对CPU、内存与存储的爆发式需求；AMD、ARM、存储链持续受益，而Meta自身因扩容成本与定价压力回调。Agent的商业化既是增量需求，也是算力与成本的现实约束。" },
    { title: "存储超级周期未改，美光9/30财报成关键验证",
      text: "费半+1.41%周线四连涨，DRAM/NAND涨价延续（Q3 DRAM均价环比+20-30%），高盛预计2026年全球DRAM/NAND/HBM供需缺口创2011年以来最高。美光9/30财报（预期营收约500亿美元、调整后EPS约31美元、毛利率约87%）将验证HBM4放量与长期协议定价，是存储板块（MU/SNDK/WDC/STX）下一步定价的锚。" },
    { title: "利率与地缘双约束：10年期美债19年新高 vs 美伊霍尔木兹缓和",
      text: "10年期美债收益率升至5.196%创19年新高、10月加息概率升至66%，压制高估值成长股估值中枢；美伊探讨分阶段重开霍尔木兹、油价回落，缓解通胀与风险偏好。中美峰会结束、特朗普称会晤\"富有成效\"，但芯片出口管制走向仍未落地，半导体供应链政策不确定性延续。" }
  ],

  /* ============ 七、未来 1—3 个交易日关注事项（具体事件） ============ */
  watchlist: [
    { date: "09月30日", event: "美光科技（Micron, MU）FY2026 Q4 财报（盘后，预期营收约500亿美元、调整后EPS约31美元）", impact: "存储涨价周期与HBM4放量的关键验证，决定存储板块（MU/SNDK/WDC/STX）下一步定价" },
    { date: "10月02日", event: "美国9月非农就业报告（就业人数/失业率/薪资）", impact: "美联储10月利率路径（当前加息至少25bp概率约66%）的关键数据，影响高估值成长股估值" },
    { date: "10月", event: "美联储下次FOMC议息会议（CME FedWatch显示10月加息至少25bp概率约66%，具体日期以美联储官方为准）", impact: "利率路径与点阵图演变直接锚定高估值成长股估值中枢" },
    { date: "近期", event: "美伊霍尔木兹海峡分阶段重开谈判后续（伊朗提出7日重开计划、美方尚未回应）", impact: "油价与通胀预期联动，影响风险偏好与能源/成长股相对表现" }
  ],

  /* ============ 八、页脚免责声明 ============ */
  disclaimer:
    "本报告基于公开市场信息整理，仅供华泰期货内部研究参考，不构成任何投资建议。股价数据以交易所官方为准；新闻以原始来源（SEC / 白宫 / BIS / Treasury / BEA / BLS / Federal Reserve / Reuters 等）为准。投资有风险，决策需谨慎。"
};
