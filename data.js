/**
 * ============================================================
 *  美股科技板块前一交易日行情日报 —— 数据文件（每日只需改这里）
 *  （2026-09-20 更新：对应美股交易日 2026-09-18）
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
    reportDate: "2026年09月20日",   // 报告发布日期（周日）
    tradeDate: "2026年09月18日",    // 对应美股交易日（前一交易日，周五）
    author: "华泰期货 · 研究",
    tag: "每日市场跟踪"
  },

  /* ============ 二、市场概览 ============ */
  overview: {
    /* 简短概括：指数变化 + 个股变化 + 重大事件 */
    text: "9月18日美股三大指数涨跌不一：纳指+0.39%至26522点、标普+0.17%至7650点、道指-0.18%至51683点；10年期美债收益率重回5.00%（2023年以来首次），压制整体市场。存储芯片逆势领涨（费半+2.78%）：闪迪+10.99%、美光+3.92%、AMD+2.70%、博通+2.97%；大型科技分化（英伟达+1.34%、Meta-2.43%）。",
    /* 指数卡片（可增删） */
    indices: [
      { name: "Nasdaq Composite", code: "IXIC", change: "-0.00%" },
      { name: "Nasdaq-100",       code: "NDX",  change: "-0.00%" },
      { name: "标普500",           code: "SPX",  change: "-0.00%" },
      { name: "费城半导体指数",     code: "SOX",  change: "-0.00%" }
    ]
  },

  /* ============ 三、超涨 / 超跌个股提示 ============ */
  alerts: [
    {
      name: "SanDisk / 闪迪",
      code: "SNDK",
      direction: "超涨",
      change: "-0.00%",
      fiveDay: "9/11收1633.35 → 9/14收1551.99 → 9/15收1530.90 → 9/16收1519.97（阶段低点）→ 9/17收1614.39（+6.21%）→ 9/18收1791.82（+10.99%），自9/16低点两日累计+17.9%",
      newHighLow: "收1791.82美元，收复9/9以来全部回调并逼近阶段新高，处于历史高位区间",
      volume: "尾盘放量拉升，单日市值增加约151亿美元（具体成交股数暂无可靠数据）",
      reason: "存储超级周期同日集中兑现：美光高管称有意义的新增内存供应要到2028年才爬坡；苹果接受三星2027Q1存储涨价30-40%；铠侠-闪迪314亿美元日本扩产；SK海力士Solidigm考虑在美建NAND厂。NAND涨价+供应紧缺叙事共振，闪迪作为NAND纯标的弹性最大",
      impact: "存储涨价周期进一步确认，但两日+17.9%急涨后短线波动加大，需以9/30美光财报验证涨价持续性；高位品种对利率（10年期美债重回5%）与获利了结仍较敏感"
    }
  ],

  /* ============ 四、重点公司行情表 ============ */
  /* 超涨/超跌个股放最上方；无新闻的公司驱动因素简要说明即可 */
  stocks: [
    { name: "SanDisk",   code: "SNDK",  change: "-0.00%", driver: "NAND存储领涨，+10.99%至1791.82美元（超涨）；美光称新增供应2028年才爬坡+苹果接受三星涨价，存储涨价周期集中兑现" },
    { name: "Micron",    code: "MU",    change: "-0.00%", driver: "DRAM/NAND存储强势，+3.92%至约1016美元；美光高管称有意义新增内存供应2028年才爬坡，供需长期紧缺" },
    { name: "AMD",       code: "AMD",   change: "-0.00%", driver: "半导体普涨，+2.70%至约560美元；费半+2.78%，AI算力与存储需求共振" },
    { name: "Broadcom",  code: "AVGO",  change: "-0.00%", driver: "定制ASIC随半导体走强，+2.97%至约358美元" },
    { name: "NVIDIA",    code: "NVDA",  change: "-0.00%", driver: "AI龙头走强，+1.34%至约222美元；黄仁勋称明年芯片销量将翻倍" },
    { name: "Microsoft", code: "MSFT",  change: "-0.00%", driver: "大型科技分化，-0.80%至约494美元；10年期美债重回5%压制估值" },
    { name: "Apple",     code: "AAPL",  change: "-0.00%", driver: "随大盘窄幅波动，-0.26%至约336美元" },
    { name: "Amazon",    code: "AMZN",  change: "-0.00%", driver: "科技权重相对抗跌，+1.00%至约254美元" },
    { name: "Alphabet",  code: "GOOGL", change: "-0.00%", driver: "随大盘小幅上涨，+0.64%至约350美元" },
    { name: "Meta",      code: "META",  change: "-0.00%", driver: "科技七巨头中表现最弱，-2.43%至约666美元；利率上行压力" }
  ],

  /* ============ 五、重要科技与政策新闻（一手来源） ============ */
  news: [
    {
      title: "美光高管：有意义的新增内存供应要到2028年才爬坡，供需平衡时间不明",
      originalTitle: "Micron Executive Says Meaningful New Memory Supply May Not Arrive Until 2028",
      source: "Guru3D（英文科技媒体，报道 Six Five Summit 2026）",
      time: "2026年09月18日",
      type: "行业媒体",
      url: "https://www.guru3d.com/story/micron-executive-says-meaningful-new-memory-supply-may-not-arrive-until-2028/",
      link: "https://www.guru3d.com/story/micron-executive-says-meaningful-new-memory-supply-may-not-arrive-until-2028/",
      summary: "美光前执行副总裁兼首席商务官、现任CEO高级顾问Sumit Sadana在Six Five Summit 2026表示，当前内存短缺已覆盖所有市场领域，客户需求预测仍在持续上修；即使供应商全力扩产，真正有意义的新增供应要到2028年才会开始爬坡，供需何时恢复平衡'看不到明确时间'。他指AI系统性能越来越取决于内存容量、性能与带宽，存储正从标准化周期品变为决定系统性能的核心部件。",
      impact: {
        direction: "利好",
        companies: "美光（MU）、闪迪（SNDK）、存储链",
        industry: "存储、半导体、AI",
        logic: "供应紧缺周期被权威产业高管确认，强化存储涨价与长期景气叙事，是当日存储板块爆发的最直接催化"
      }
    },
    {
      title: "黄仁勋：英伟达明年芯片销量将翻倍，AI需求跨行业扩散",
      originalTitle: "Jensen Huang forecasts Nvidia chip sales to double in 2027",
      source: "Bloomberg / Quartz（经 Yahoo Finance）",
      time: "2026年09月17日",
      type: "财经媒体",
      url: "https://finance.yahoo.com/technology/ai/articles/jensen-huang-forecasts-nvidia-chip-114738472.html",
      link: "https://finance.yahoo.com/technology/ai/articles/jensen-huang-forecasts-nvidia-chip-114738472.html",
      summary: "英伟达CEO黄仁勋在苏格兰查尔斯三世国王召集的AI峰会上表示，随着AI渗透医疗、制造、金融服务等行业，公司明年芯片销量将达到今年的两倍，当前瓶颈是产能而非需求。此前英伟达预计截至2028年1月财年营收增长约70%（约6730亿美元），若供应充足营收甚至可能翻倍。黄仁勋同时强调企业应确保AI产品在发布前经过严格测试、不安全应暂缓。",
      impact: {
        direction: "利好",
        companies: "英伟达（NVDA）、半导体链",
        industry: "AI、半导体、数据中心",
        logic: "AI需求指引上修，对冲'AI放缓'担忧，提振AI硬件与存储链情绪，支撑芯片股普涨"
      }
    },
    {
      title: "SK海力士Solidigm考虑在美建NAND厂，纽约州领先候选",
      originalTitle: "SK Hynix's Solidigm Eyes New York Site for US NAND Factory",
      source: "Reuters（经 Financial News）",
      time: "2026年09月18日",
      type: "财经媒体",
      url: "https://www.financial-news.co.uk/sk-hynixs-solidigm-eyes-new-york-site-for-us-nand-factory",
      link: "https://www.financial-news.co.uk/sk-hynixs-solidigm-eyes-new-york-site-for-us-nand-factory",
      summary: "路透援引三名知情人士称，SK海力士美国子公司Solidigm正考虑在美国建设NAND闪存工厂，纽约州北部为领先候选地。若落地将是Solidigm首个美国生产基地，可降低对大连唯一NAND厂的依赖，并规避美国对华关税与设备出口管制；美国商务部长卢特尼克曾威胁对韩台企业加征最高100%关税。SK海力士回应称'正在评估，尚无具体计划'，SK海力士周五收涨约6.4%。",
      impact: {
        direction: "利好",
        companies: "SK海力士、存储链（MU/SNDK）、半导体设备",
        industry: "半导体制造、存储、产业政策",
        logic: "存储产能本土化+供给约束强化存储超级周期与美国本土制造叙事，提振存储与设备链情绪"
      }
    },
    {
      title: "中国长鑫存储（CXMT）拟进军NAND闪存，北京建研发产线",
      originalTitle: "China's CXMT eyes NAND flash expansion as AI drives memory shortage",
      source: "Reuters（经 TechNode Global）",
      time: "2026年09月18日",
      type: "财经媒体",
      url: "https://technode.global/2026/09/18/china-cxmt-nand-flash-expansion-ai-memory-shortage/",
      link: "https://technode.global/2026/09/18/china-cxmt-nand-flash-expansion-ai-memory-shortage/",
      summary: "路透援引知情人士称，中国DRAM龙头长鑫存储（CXMT）计划在北京新厂建设NAND闪存研发产线，进军由三星、SK海力士、美光主导的闪存市场，并已与包括一家AI存储初创在内的潜在客户接洽。行业高管预计AI服务器内存短缺至少持续到2027年；TrendForce预计NAND紧张要到明年下半年才缓解。CXMT此前于7月IPO募资约86亿美元。",
      impact: {
        direction: "中性偏利好存储",
        companies: "CXMT、三星、SK海力士、美光",
        industry: "存储、半导体、供应链",
        logic: "新进入者印证全球NAND供给紧张、涨价周期延续，短期强化存储景气；中长期增加供给端竞争"
      }
    },
    {
      title: "苹果接受三星2027年一季度存储涨价，DRAM/NAND价格上调30-40%",
      originalTitle: "iPhone prices may rise again in 2027; Samsung's latest memory deal could be the reason",
      source: "DigiTimes（经 Business Today）",
      time: "2026年09月18日",
      type: "财经媒体",
      url: "https://www.businesstoday.in/technology/news/story/iphone-prices-may-rise-again-in-2027-samsungs-latest-memory-deal-could-be-the-reason-556351-2026-09-18",
      link: "https://www.businesstoday.in/technology/news/story/iphone-prices-may-rise-again-in-2027-samsungs-latest-memory-deal-could-be-the-reason-556351-2026-09-18",
      summary: "据DigiTimes报道，苹果已接受三星2027年一季度的存储涨价方案，DRAM约2美元/Gb、NAND约0.33美元/Gb，较2026年三季度上涨约30-40%。三星、SK海力士、美光正将产能优先转向HBM与AI服务器内存，挤压手机用DRAM/NAND供给。苹果近年持续涨价（iPhone 18 Pro已较上代贵100美元），存储成本或进一步传导至终端售价。",
      impact: {
        direction: "利好存储供应商",
        companies: "三星、SK海力士、美光（MU）",
        industry: "存储、消费电子、供应链",
        logic: "存储涨价从服务器向消费电子全品类传导，印证供给全面紧缺，强化存储提价周期与定价权转移"
      }
    },
    {
      title: "美股周五涨跌不一：半导体领涨纳指、标普，10年期美债收益率重回5%",
      originalTitle: "How major US stock indexes fared Friday 9/18/2026",
      source: "AP / Reuters（经 AOL）",
      time: "2026年09月18日",
      type: "财经媒体",
      url: "https://www.aol.com/articles/major-us-stock-indexes-fared-201659199.html",
      link: "https://www.aol.com/articles/major-us-stock-indexes-fared-201659199.html",
      summary: "美股周五收盘涨跌不一：标普+0.17%至7650.50、道指-0.18%至51682.64、纳指+0.39%至26522.55，罗素2000跌0.5%。半导体反弹推动纳指与标普走高，但多数个股下跌、道指收低（单周-1.7%创3月以来最大）。10年期美债收益率升至5.00%（本周一度创2023年以来首次），布伦特原油跌破102后回升至103美元上方。",
      impact: {
        direction: "中性偏空",
        companies: "全市场、利率敏感成长股",
        industry: "利率、债市、估值",
        logic: "无风险利率重回5%压制整体估值，但存储/半导体结构性强势，市场呈'指数平稳、板块极端分化'格局"
      }
    },
    {
      title: "铠侠与闪迪计划在日本投资逾310亿美元扩产NAND，强化存储领导地位",
      originalTitle: "Kioxia and Sandisk to Invest Over $31 Billion in Japan, Extending Leadership in Memory Industry",
      source: "StorageNewsletter（存储行业媒体）",
      time: "2026年09月15日",
      type: "行业媒体",
      url: "https://www.storagenewsletter.com/2026/09/15/kioxia-and-sandisk-to-invest-over-31-billion-in-japan-extending-leadership-in-memory-industry",
      link: "https://www.storagenewsletter.com/2026/09/15/kioxia-and-sandisk-to-invest-over-31-billion-in-japan-extending-leadership-in-memory-industry",
      summary: "铠侠（Kioxia）与闪迪（Sandisk）宣布将在日本四日市与北上工厂合计投资逾310亿美元（约5万亿日元，以政府支持为前提），至2032年持续扩产3D NAND闪存，其中北上新厂投资约113亿美元。双方表示此举为满足AI与数据驱动时代的闪存需求，延续25年合资伙伴关系，并契合日本高市政府的半导体振兴政策。",
      impact: {
        direction: "利好存储",
        companies: "闪迪（SNDK）、铠侠、存储设备链",
        industry: "存储、半导体制造",
        logic: "NAND龙头扩产印证AI存储长期需求，闪迪作为合资方直接受益，强化存储长期资本开支与景气叙事"
      }
    }
  ],

  /* ============ 六、当日最值得关注的 3 个交易逻辑 ============ */
  logics: [
    { title: "存储超级周期逻辑集中兑现：供应紧缺+涨价周期同日共振",
      text: "美光高管Sadana明确'有意义的新增供应2028年才爬坡'，苹果接受三星2027Q1涨价30-40%，铠侠-闪迪314亿美元扩产、SK海力士Solidigm考虑赴美建厂、CXMT进军NAND——供给紧缺与涨价周期在同日集中兑现，闪迪+10.99%、美光+3.92%领涨，费半+2.78%逆势走强。存储正从'标准化周期品'转向'决定AI系统性能的核心部件'，是当前市场最强势的交易主线。" },
    { title: "AI需求指引上修对冲'AI放缓'担忧，资金回流硬件与存储主线",
      text: "黄仁勋'明年芯片销量翻倍'的表态，叠加此前Nebius提价、SK海力士-英特尔洽谈在美建厂，持续证伪'AI放缓→硬件需求骤降'的极端交易。AI算力与存储需求指引同步上修，资金回流AI硬件与存储主线；但10年期美债收益率重回5%（2023年以来首次）仍对高估值成长股形成估值约束，构成'产业强、利率紧'的拉锯。" },
    { title: "利率重回5% vs 油价回落：宏观变量对科技股的双向拉扯",
      text: "当日10年期美债收益率升至5.00%，创2023年以来首次，压制整体市场（道指-0.18%、单周-1.7%创3月以来最大跌幅）；但布伦特原油跌破102后回落、WTI跌破96美元，通胀担忧边际缓和。利率上行与油价回落形成对冲，市场呈现'指数平稳、板块极端分化'——资金在有限流动性下从软件与大盘权重轮动至存储/半导体强势板块。" }
  ],

  /* ============ 七、未来 1—3 个交易日关注事项（具体事件） ============ */
  watchlist: [
    { date: "09月22日", event: "美国总统特朗普与海湾国家领导人在纽约会晤（伊朗局势/油价走向）", impact: "中东局势走向决定油价与通胀预期，直接关联美联储后续加息路径与风险偏好" },
    { date: "09月30日", event: "美光科技（Micron）FY2025 Q4 财报", impact: "DRAM/HBM/NAND存储涨价周期与供需的关键验证，影响存储板块（MU/SNDK/WDC/STX）定价" },
    { date: "10月01日", event: "云服务商Nebius上调GPU/AI算力价格正式生效", impact: "AI算力需求与提价逻辑的验证，影响AI硬件（NVDA/AMD）与云计算叙事" },
    { date: "10月底", event: "美联储下次FOMC议息会议（市场定价10月再加息概率约53%）", impact: "利率路径与点阵图演变直接锚定高估值成长股估值中枢" }
  ],

  /* ============ 八、页脚免责声明 ============ */
  disclaimer:
    "本报告基于公开市场信息整理，仅供华泰期货内部研究参考，不构成任何投资建议。股价数据以交易所官方为准；新闻以原始来源（SEC / 白宫 / BIS / Treasury / BEA / BLS / Federal Reserve / Reuters 等）为准。投资有风险，决策需谨慎。"
};
