/**
 * ============================================================
 *  美股科技板块前一交易日行情日报 —— 数据文件（每日只需改这里）
 *  （2026-09-28 更新：对应美股交易日 2026-09-25）
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
    reportDate: "2026年09月28日",   // 报告发布日期（周一）
    tradeDate: "2026年09月25日",    // 对应美股交易日（前一交易日，周五）
    author: "华泰期货 · 研究",
    tag: "每日市场跟踪"
  },

  /* ============ 二、市场概览 ============ */
  overview: {
    /* 简短概括：指数变化 + 个股变化 + 重大事件 */
    text: "9月25日美股全线收涨：纳指+0.48%、标普+0.51%、道指+0.93%，费半+1.41%周线四连涨。微软升级Copilot涨3.66%领涨，苹果创收盘新高逼近5万亿美元；Meta因Muse算力瓶颈跌3.33%。周末中美峰会达成8项共识（300亿美元关税互降、11月AI对话），芯片出口管制被剔除谈判桌；特朗普拒绝伊朗霍尔木兹方案、油价反弹。",
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
    { name: "SanDisk",   code: "SNDK",  change: "-0.00%", driver: "NAND存储回暖，+1.38%至1777.80美元；连续回调后企稳，AI企业级存储需求与美光9/30财报临近支撑，2026年累涨仍约649%" },
    { name: "NVIDIA",    code: "NVDA",  change: "-0.00%", driver: "AI龙头小幅走强，+0.22%至225.07美元；周末The Information报中国或允许阿里/字节采购RTX PRO 5500工作站卡，叠加峰会芯片管制未升级" },
    { name: "Microsoft", code: "MSFT",  change: "-0.00%", driver: "大型科技领涨，+3.66%至516.17美元创去年11月以来收盘新高；官方发布新版Copilot（Home/Code/Autopilot），AI Agent产品升级" },
    { name: "Apple",     code: "AAPL",  change: "-0.00%", driver: "创收盘历史新高，+1.53%至341.07美元，总市值逼近5万亿美元；新品发布周期临近叠加风险偏好回暖" },
    { name: "Amazon",    code: "AMZN",  change: "-0.00%", driver: "随大盘窄幅波动，+0.12%；AWS与AI资本开支仍是核心关注" },
    { name: "Alphabet",  code: "GOOGL", change: "-0.00%", driver: "随AI板块走强，+0.46%至343.92美元；AI Agent竞争与Gemini生态受关注" },
    { name: "Meta",      code: "META",  change: "-0.00%", driver: "大型科技唯一下跌，-3.34%；Muse日活11天增10倍至约70万但现算力瓶颈、服务降级，本周仍累涨约13%" },
    { name: "Broadcom",  code: "AVGO",  change: "-0.00%", driver: "定制ASIC随半导体走强，+0.70%至352.81美元；AI定制芯片需求支撑" },
    { name: "AMD",       code: "AMD",   change: "-0.00%", driver: "窄幅波动，+0.22%至630.63美元；AI算力与CPU需求受Agent扩容（如Muse）预期支撑" },
    { name: "Micron",    code: "MU",    change: "-0.00%", driver: "存储企稳，+0.16%至1082.28美元；9/30发布FY2026 Q4财报，DRAM/NAND涨价与HBM4放量为核心看点" }
  ],

  /* ============ 五、重要科技与政策新闻（一手来源） ============ */
  news: [
    {
      title: "中美峰会达成8项共识：300亿美元关税互降、11月启动AI风险对话，统一采用\"超级智能\"表述",
      originalTitle: "China, US agree to $30 billion tariff cut, AI dialogue during Xi visit",
      source: "Reuters（经 Union Leader）",
      time: "2026年09月26日",
      type: "财经媒体",
      url: "https://www.unionleader.com/news/world/china-us-agree-to-30-billion-tariff-cut-ai-dialog-during-xi-visit-china-foreign/article_15ce22f3-7eeb-5194-8237-f83692af7012.amp.html",
      link: "https://www.unionleader.com/news/world/china-us-agree-to-30-billion-tariff-cut-ai-dialog-during-xi-visit-china-foreign/article_15ce22f3-7eeb-5194-8237-f83692af7012.amp.html",
      summary: "特朗普-习近平三天峰会结束后，中国外交部9/26公布8项共识：双方就各约300亿美元非敏感商品互降关税（美方出口农产品、木材、化妆品，中方进口小家电、玩具、装饰品）；同意建立AI风险与收益对话机制、下一轮11月举行，并设立AI相关事件沟通渠道；双方领导人同意以\"超级智能\"替代\"人工智能\"表述，并同意设立贸易理事会。此前财长贝森特称关税休战（原11/10到期）延长两个月。白宫声明称峰会展现\"个人外交而非重大公开突破\"。",
      impact: {
        direction: "利好",
        companies: "大型科技、半导体、跨境供应链",
        industry: "AI、贸易、半导体",
        logic: "关税缓和与AI对话机制落地，缓解科技股政策风险；但芯片出口管制维持现状，未现实质性放松"
      }
    },
    {
      title: "美国贸易代表Greer：芯片出口管制被\"剔除谈判桌\"，称先进芯片是\"美国科技的皇冠明珠\"",
      originalTitle: "Greer: US Didn't Talk Chip Export Controls With China",
      source: "CNBC（经 Export Compliance Daily）",
      time: "2026年09月25日",
      type: "财经媒体",
      url: "https://exportcompliancedaily.com/article/2026/09/28/greer-us-didnt-talk-chip-export-controls-with-china-2609250034",
      link: "https://exportcompliancedaily.com/article/2026/09/28/greer-us-didnt-talk-chip-export-controls-with-china-2609250034",
      summary: "美国贸易代表Greer 9/25对CNBC表示，中美在习近平访美期间未讨论技术出口管制（含先进芯片），贸易谈判聚焦\"纯贸易议题\"（农产品准入、稀土供给）。他称\"所有涉及国家安全的出口管制均被剔除谈判桌\"，先进芯片是\"美国科技的皇冠明珠\"、是美国在\"超级智能/AGI竞赛\"中保持领先的方式；并称绝大多数芯片无需许可即可对华出口，仅极少数高价值品类受控。美方9/28将公布更多贸易谈判成果细节。",
      impact: {
        direction: "中性",
        companies: "英伟达（NVDA）、AMD、国产替代链",
        industry: "半导体、出口管制、AI",
        logic: "先进芯片出口管制维持现状、未升级，短期消除管制升级风险；但对华销售限制仍压制英伟达/AMD中国收入，且"超级智能"叙事强化管制长期化预期"
      }
    },
    {
      title: "特朗普拒绝伊朗霍尔木兹7日重开方案，油价周一反弹、布伦特升破105美元",
      originalTitle: "Oil heads higher as US-Iran peace talks in stalemate",
      source: "Reuters（经 Deccan Herald）",
      time: "2026年09月28日",
      type: "财经媒体",
      url: "https://www.deccanherald.com/world/rest-of-world/oil-heads-higher-as-us-iran-peace-talks-in-stalemate-4162043",
      link: "https://www.deccanherald.com/world/rest-of-world/oil-heads-higher-as-us-iran-peace-talks-in-stalemate-4162043",
      summary: "特朗普周六拒绝伊朗在联大提出的\"7天停火+重开霍尔木兹\"方案，周日对Axios称伊朗\"高估了筹码\"、\"这不是我要达成的协议\"、但预计谈判本周恢复。美常驻联合国代表华尔兹称该方案\"相当愤世嫉俗\"——以解除制裁/封锁+解冻资产\"仅为了换得谈判\"。受此影响油价周一反弹：布伦特升1.27%至105.64美元、WTI升0.76%至93.11美元；ANZ称胡塞与伊朗对沙特的持续袭击令地区供应风险仍高。",
      impact: {
        direction: "利空（能源/通胀）",
        companies: "能源、航运、高估值成长股",
        industry: "能源、利率、地缘",
        logic: "霍尔木兹重开预期落空、油价反弹加剧通胀压力，压制风险偏好与高估值成长股估值中枢；美债收益率与加息预期或重新升温"
      }
    },
    {
      title: "The Information：中国或允许阿里、字节采购英伟达RTX PRO 5500工作站显卡",
      originalTitle: "China May Reopen Nvidia's AI Market. How Will NVDA Stock React Monday?",
      source: "The Information（经 BeInCrypto）",
      time: "2026年09月27日",
      type: "行业媒体",
      url: "https://beincrypto.com/china-nvidia-chips-nvda-stock-monday/",
      link: "https://beincrypto.com/china-nvidia-chips-nvda-stock-monday/",
      summary: "The Information周日援引知情人士报道，中国工信部正向阿里、字节询问其对英伟达RTX PRO 5500专业显卡的需求量与用途，或允许两家公司采购。该卡为工作站级（84GB显存、最高600W功耗），不属美出口管制针对的数据中心芯片；英伟达当前财季约1080亿美元营收指引假设对华数据中心芯片销售为零。黄仁勋此前称\"只有在中国允许时才能服务中国市场\"。英伟达周五收225.07美元，31位分析师全部\"买入\"、目标均价324.32美元。",
      impact: {
        direction: "中性偏多",
        companies: "英伟达（NVDA）、阿里、字节、AI算力链",
        industry: "AI算力、半导体",
        logic: "中国部分放宽专业级显卡采购，边际利好英伟达对华收入，但数据中心级芯片仍未放开、象征意义大于实质；英伟达仍以美出口管制与国产替代（华为/寒武纪约80%国产份额）为关键变量"
      }
    },
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
      title: "本周前瞻：8月核心PCE与9月非农登场，美光9/30财报成存储周期关键验证",
      originalTitle: "The Week Ahead: US August PCE and September Nonfarm Payrolls Take Center Stage, Micron Earnings in Focus",
      source: "TradingKey（行业媒体）",
      time: "2026年09月28日",
      type: "行业媒体",
      url: "https://www.tradingkey.com/analysis/stocks/us-stocks/262188313-weekly-preview-us-august-pce-september-nonfarm-payrolls-micron-earnings-tradingkey",
      link: "https://www.tradingkey.com/analysis/stocks/us-stocks/262188313-weekly-preview-us-august-pce-september-nonfarm-payrolls-micron-earnings-tradingkey",
      summary: "本周美盘关注：周三（9/30）8月核心PCE、个人收支、Q2 GDP三读与ADP就业同步出炉，盘后美光发布FY2026 Q4财报（指引营收约500亿美元±10亿、调整后EPS约31美元±1、毛利率约86%）；周五（10/2）9月非农与失业率。美光已出货HBM4超10亿美元、12层HBM4爬坡速度约为HBM3E两倍，HBM/DRAM/NAND价格与FY2027指引为焦点；若涨价与供给紧张延续将验证存储超级周期，否则或引发周期见顶担忧。",
      impact: {
        direction: "利好（关键验证事件）",
        companies: "美光（MU）、闪迪（SNDK）、SK海力士、存储链",
        industry: "存储、半导体、AI",
        logic: "美光财报验证存储涨价周期与HBM需求持续性，决定存储板块（MU/SNDK/WDC/STX）下一步定价；PCE与非农数据同时锚定10月加息路径，影响高估值成长股估值"
      }
    }
  ],

  /* ============ 六、当日最值得关注的 3 个交易逻辑 ============ */
  logics: [
    { title: "AI Agent 从\"训练\"转向\"推理+代执行\"，算力瓶颈反向验证 CPU/存储需求刚性",
      text: "Meta旗下Muse日活11天增长10倍至约70万即现算力瓶颈（服务降级、Agent任务失败），微软升级Copilot（Home/Code/Autopilot）、Akamai 116亿美元CPU云大单，共同指向Agent化对CPU、内存与存储的爆发式需求；AMD、ARM、存储链持续受益，而Meta自身因扩容成本与定价压力回调。Agent的商业化既是增量需求，也是算力与成本的现实约束。" },
    { title: "存储超级周期未改，美光9/30财报成关键验证",
      text: "费半+1.41%周线四连涨，DRAM/NAND涨价延续（Q3 DRAM均价环比+20-30%），高盛预计2026年全球DRAM/NAND/HBM供需缺口创2011年以来最高。美光9/30财报（指引营收约500亿美元、调整后EPS约31美元、毛利率约86%）将验证HBM4放量与长期协议定价，是存储板块（MU/SNDK/WDC/STX）下一步定价的锚。" },
    { title: "中美\"有限缓和\"与能源扰动并存：关税/AI对话落地，但芯片\"皇冠明珠\"不退让、油价反弹",
      text: "峰会达成300亿美元关税互降、11月AI对话等8项共识，缓解科技股政策风险；但Greer明确将先进芯片出口管制剔除谈判桌、称其为\"美国科技的皇冠明珠\"，对华先进芯片限制维持现状。同时特朗普拒绝伊朗霍尔木兹方案、油价周一反弹，通胀与10月加息预期或重新升温，构成对高估值成长股的双重约束。" }
  ],

  /* ============ 七、未来 1—3 个交易日关注事项（具体事件） ============ */
  watchlist: [
    { date: "09月28日", event: "美国9月达拉斯联储制造业指数；美伊间接谈判可能今日恢复（特朗普周日对Axios称预计本周复谈）", impact: "地缘与油价走向，影响风险偏好与通胀预期" },
    { date: "09月29日", event: "美国8月JOLTS职位空缺 + 9月谘商会消费者信心指数", impact: "就业市场松紧的先行信号，影响10月加息路径" },
    { date: "09月30日", event: "美国8月核心PCE、个人收支、Q2 GDP三读、ADP就业；盘后美光科技（MU）FY2026 Q4财报（指引营收约500亿美元、调整后EPS约31美元）", impact: "PCE定调通胀路径；美光财报验证存储超级周期，决定存储板块下一步定价" },
    { date: "10月02日", event: "美国9月非农就业报告（就业人数/失业率/时薪）", impact: "美联储10月利率路径（当前加息至少25bp概率约66%）的关键数据，影响高估值成长股估值" },
    { date: "11月", event: "中美下一轮AI风险对话（峰会共识，11月举行）；关税休战延期后新贸易协议谈判", impact: "AI治理与关税走向，影响半导体政策预期与跨境科技股风险偏好" }
  ],

  /* ============ 八、页脚免责声明 ============ */
  disclaimer:
    "本报告基于公开市场信息整理，仅供华泰期货内部研究参考，不构成任何投资建议。股价数据以交易所官方为准；新闻以原始来源（SEC / 白宫 / BIS / Treasury / BEA / BLS / Federal Reserve / Reuters 等）为准。投资有风险，决策需谨慎。"
};
