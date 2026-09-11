/**
 * ============================================================
 *  美股科技板块前一交易日行情日报 —— 数据文件（每日只需改这里）
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
    reportDate: "2026年09月11日",   // 报告发布日期（周五）
    tradeDate: "2026年09月10日",    // 对应美股交易日（前一交易日，周四）
    author: "华泰期货 · 研究",
    tag: "每日市场跟踪"
  },

  /* ============ 二、市场概览 ============ */
  overview: {
    /* 简短概括：指数变化 + 个股变化 + 重大事件 */
    text: "9月10日美股三大指数连续第四日收跌，费半跌约2.7%。8月PPI超预期（同比5.4%）叠加油价破百，10年期美债收益率升至4.89%创2023年11月来新高，9月加息概率升至约74%，压制高估值成长股。芯片、存储、光通信集体回吐（美光-4.90%、闪迪-4.06%）；苹果逆势+3.56%（折叠屏获高盛看好）；Oracle盘后财报超预期涨约7%。",
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
      name: "Apple",
      code: "AAPL",
      direction: "超涨",
      change: "-0.00%",
      fiveDay: "9/3收盘328.21 → 连续三日回落至9/9的315.34 → 9/10单日+3.56%收复至326.57，为秋季发布会后首个完整交易日",
      newHighLow: "自9/4阶段低点约315快速反弹至326.57，创近一周新高，逼近9/3前高328.21",
      volume: "明显放大，9/10成交7001.2万股，较前一交易日（6564.0万股）放大约6.7%",
      reason: "9/9秋季发布会发布首款折叠屏iPhone Duo（1999美元起、低于三星Z Fold 8 Ultra的2099.99美元）获高盛等分析师看好，定价被视为\u201c实惠\u201d，高盛维持2026年基准1400万台（乐观3500万台）出货预测；iPhone 18 Pro提价100美元以对冲DRAM存储成本上涨",
      impact: "折叠屏+端侧AI开启新一轮硬件换机周期，但初期供应受限，对业绩的实质拉动需待9/12预订与后续出货数据验证"
    },
    {
      name: "Micron Technology",
      code: "MU",
      direction: "超跌",
      change: "-0.00%",
      fiveDay: "9/4收盘1016.59 → 9/9盘中创历史新高1042.40 → 9/10收977.41，单日-4.90%，回吐近三日涨幅",
      newHighLow: "9/9刚创阶段新高（收盘1027.77、盘中1042.40），9/10即高位大幅回落，属放量下挫",
      volume: "成交2623.0万股，高于近期均值，高位放量回调",
      reason: "8月PPI超预期+油价破百推升加息预期、10年期美债收益率升至4.89%，触发前期涨幅过大的存储板块（美光-4.90%、闪迪-4.06%、SK海力士-5.2%、西部数据-4.43%）集体获利回吐",
      impact: "存储超级周期与HBM供需长期逻辑未变，但高位品种对利率更敏感；需以9/11 CPI与9/30美光财报验证涨价周期持续性"
    }
  ],

  /* ============ 四、重点公司行情表 ============ */
  /* 超涨/超跌个股放最上方；无新闻的公司驱动因素简要说明即可 */
  stocks: [
    { name: "Apple",     code: "AAPL",  change: "-0.00%", driver: "折叠屏iPhone Duo发布后获高盛看好，逆势大涨3.56%至326.57美元，为当日科技股最大亮点" },
    { name: "Micron",    code: "MU",    change: "-0.00%", driver: "存储板块获利回吐领跌，-4.90%至977.41美元，回吐前一日历史新高" },
    { name: "NVIDIA",    code: "NVDA",  change: "-0.00%", driver: "9/10除息日+PPI超预期推升利率，跌2.37%至218.36美元；司法部调查其与Groq交易" },
    { name: "Microsoft", code: "MSFT",  change: "-0.00%", driver: "大型软件股相对抗跌，微涨0.16%至492.44美元" },
    { name: "Amazon",    code: "AMZN",  change: "-0.00%", driver: "云厂商资本开支受利率上行压制，微跌0.20%至251.89美元" },
    { name: "Alphabet",  code: "GOOGL", change: "-0.00%", driver: "大型科技中相对抗跌，逆势微涨0.59%至332.60美元" },
    { name: "Meta",      code: "META",  change: "-0.00%", driver: "AI智能体Muse发布后高位回落，跌1.42%至644.38美元" },
    { name: "Broadcom",  code: "AVGO",  change: "-0.00%", driver: "定制ASIC主题随半导体板块降温，跌0.97%至360.83美元" },
    { name: "AMD",       code: "AMD",   change: "-0.00%", driver: "AI算力股获利回吐，跌3.36%至503.60美元；Piper Sandler仍予600美元目标价" },
    { name: "Sandisk",   code: "SNDK",  change: "-0.00%", driver: "NAND存储高位回吐，跌4.06%至1692.59美元，9月累计涨幅仍约+8.5%" }
  ],

  /* ============ 五、重要科技与政策新闻（一手来源） ============ */
  news: [
    {
      title: "美国8月PPI超预期：同比5.4%创年内新高、能源价格主导，9月加息概率升至约74%",
      originalTitle: "U.S. wholesale inflation hits 5.4% annually in August 2026",
      source: "Yahoo Finance（Quartz，基于美国劳工统计局 BLS 数据）",
      time: "2026年09月10日",
      type: "财经媒体",
      url: "https://finance.yahoo.com/economy/articles/u-wholesale-inflation-hits-5-124104461.html",
      link: "https://finance.yahoo.com/economy/articles/u-wholesale-inflation-hits-5-124104461.html",
      summary: "美国劳工统计局9/10公布，8月最终需求PPI环比+0.4%（符合预期）、同比+5.4%（高于预期的5.3%、前值4.7%），创2026年最高12个月读数；能源价格环比+4.2%、柴油单月+24.1%（贡献商品涨幅逾三分之一）为主要驱动；核心PPI同比+4.6%（前值4.2%）。数据出炉后10年期美债收益率升至约4.89%，CME工具显示交易员将9月加息概率预期升至约74%（前一日约61%）。",
      impact: {
        direction: "利空",
        companies: "全市场、高估值长久期成长股",
        industry: "利率、通胀、货币政策",
        logic: "生产端通胀超预期强化加息预期、推升无风险收益率，直接压缩高估值科技股估值锚"
      }
    },
    {
      title: "油价破百叠加中东冲突升级：布伦特站上105美元、WTI自5月来首破100美元",
      originalTitle: "Brent holds above $100 as tanker attacks dampen hopes for Hormuz traffic recovery",
      source: "Reuters（路透社，经 Euronext Live 转载原文）",
      time: "2026年09月10日",
      type: "财经媒体",
      url: "https://live.euronext.com/en/financial-news/brent-holds-above-100-tanker-attacks-dampen-hopes-hormuz-traffic-recovery",
      link: "https://live.euronext.com/en/financial-news/brent-holds-above-100-tanker-attacks-dampen-hopes-hormuz-traffic-recovery",
      summary: "美伊爆发六个月冲突以来最大规模航运袭击——伊朗称攻击10艘船只、美国击沉5艘伊朗油轮，胡塞武装控制也门莫卡港并逼近曼德海峡，叠加沙特向OPEC报告产量跌至1990年来新低，油价大涨：布伦特站上105美元、WTI自5月来首次突破100美元，布伦特自8月初低点累计涨逾30%。特朗普警告或打击伊朗Pickaxe Mountain。分析师指出冲突持续时间超预期、供给缺口难平。",
      impact: {
        direction: "利空",
        companies: "全市场、消费与运输板块",
        industry: "能源、通胀、地缘政治",
        logic: "油价经通胀渠道强化央行加息预期，压制风险资产与成长股估值；能源股相对抗跌"
      }
    },
    {
      title: "Oracle Q1财报超预期：云基础设施收入+121%、AI订单超300亿美元，盘后涨约7%",
      originalTitle: "Oracle Announces Q1 Results Driven by Triple Digit Growth in Cloud Infrastructure Revenues",
      source: "Oracle 官方新闻稿（SEC 8-K）",
      time: "2026年09月10日",
      type: "官方",
      url: "https://www.sec.gov/Archives/edgar/data/1341439/000119312526387905/orcl-ex99_1.htm",
      link: "https://www.sec.gov/Archives/edgar/data/1341439/000119312526387905/orcl-ex99_1.htm",
      summary: "Oracle公布2027财年Q1：总营收+30%至193亿美元（超预期191.4亿），云基础设施(IaaS)收入+121%至74亿美元，non-GAAP EPS 1.92美元（超预期1.74）；本季新增AI云合同超300亿美元，剩余履约义务(RPO)升至6640亿美元（同比+2090亿、超预期6398.9亿）。CFO称多数新订单为预付款/自带硬件模式、不需增量资本开支，缓解现金消耗担忧。盘中收跌5.38%、盘后涨约7%。",
      impact: {
        direction: "利好",
        companies: "Oracle、AI云与数据中心产业链",
        industry: "云计算、AI基础设施、AI资本开支",
        logic: "验证企业AI云需求强劲且资本开支可控，AI商业化回报叙事获得支撑，对冲利率上行压力"
      }
    },
    {
      title: "苹果首款折叠屏iPhone Duo发布后逆势大涨3.56%，获高盛等分析师看好",
      originalTitle: "Apple Inc Stock (AAPL) Moved Up by 3.29% on Sep 10: Key Drivers Unveiled",
      source: "TradingKey（行业媒体）",
      time: "2026年09月10日",
      type: "行业媒体",
      url: "https://www.tradingkey.com/news/market-movers/262161705-market-movers-aapl-20260910",
      link: "https://www.tradingkey.com/news/market-movers/262161705-market-movers-aapl-20260910",
      summary: "苹果9/9发布首款折叠屏iPhone Duo（1999美元起、A20 Pro芯片）后，9/10逆势大涨3.56%至326.57美元。高盛将定价描述为\u201c实惠\u201d（低于三星Z Fold 8 Ultra的2099.99美元），维持2026年基准1400万台（乐观3500万台）出货预测；iPhone 18 Pro起售价上调100美元以对冲DRAM存储成本上涨。分析师认为折叠屏+端侧Siri AI有望推动新一轮硬件换机周期。",
      impact: {
        direction: "利好",
        companies: "苹果、果链供应链",
        industry: "消费电子、折叠屏、端侧AI",
        logic: "折叠屏新形态+端侧AI开启硬件换机周期，定价权对冲存储成本通胀，为AI商业化叙事提供支撑"
      }
    },
    {
      title: "芯片、存储、光通信集体获利回吐：费半跌2.66%，美光、闪迪、SK海力士领跌",
      originalTitle: "Why are big chip stocks under pressure? SK Hynix, AMD, Intel, Nvidia fall up to 6.5%",
      source: "Reuters/Livemint（英文财经媒体）",
      time: "2026年09月10日",
      type: "财经媒体",
      url: "https://www.livemint.com/market/stock-market-news/why-are-big-chip-stocks-under-pressure-sk-hynix-amd-intel-nvidia-fall-up-to-6-5-is-the-ai-rally-losing-steam-11789050327575.html",
      link: "https://www.livemint.com/market/stock-market-news/why-are-big-chip-stocks-under-pressure-sk-hynix-amd-intel-nvidia-fall-up-to-6-5-is-the-ai-rally-losing-steam-11789050327575.html",
      summary: "费城半导体指数跌2.66%，SK海力士-5.2%、美光-4.9%、闪迪-4.06%、西部数据-4.43%、英特尔-5.57%、AMD-3.36%领跌；光通信同步回落（Lumentum-5.39%、Astera Labs-5.33%、迈威尔-3.43%）。触发并非基本面恶化，而是8月PPI超预期+油价破百推升加息预期、10年期美债收益率升至4.89%，叠加前期涨幅过大，投资者获利了结。欧洲央行同日加息25bp至2.5%亦收紧全球流动性。",
      impact: {
        direction: "利空",
        companies: "美光、闪迪、SK海力士、AMD、英特尔等",
        industry: "半导体、存储、光通信",
        logic: "利率上行叠加高位获利了结，AI硬件/存储板块短期估值承压，但产业长期供需逻辑未变"
      }
    },
    {
      title: "美国司法部调查英伟达170亿美元Groq交易，聚焦是否规避反垄断审查",
      originalTitle: "US Justice Department Examines Nvidia's $17 Billion Groq Deal",
      source: "PYMNTS（经 Reuters/纽约时报）",
      time: "2026年09月10日",
      type: "财经媒体",
      url: "https://www.pymnts.com/cpi-posts/us-justice-department-examines-nvidias-17-billion-groq-deal",
      link: "https://www.pymnts.com/cpi-posts/us-justice-department-examines-nvidias-17-billion-groq-deal",
      summary: "美国司法部正调查英伟达去年与AI芯片初创Groq达成的约170亿美元许可交易，核查其\u201c非排他许可+聘用高管\u201d的结构是否规避反垄断审查。交易中英伟达获得Groq芯片技术非排他授权并吸纳创始人Jonathan Ross等高管。司法部在交易去年12月公布后即启动调查、已发出正式信息调取要求；若认定违规可能处以罚款、但大概率不会撤销交易。英伟达发言人称该交易是\u201c美国体系运作的典范\u201d。",
      impact: {
        direction: "中性偏利空",
        companies: "英伟达、AI芯片初创生态",
        industry: "AI芯片、反垄断监管",
        logic: "反映监管对AI行业\u201c授权+挖角\u201d式变相并购的审查趋严，短期压制英伟达情绪，但实质影响有限"
      }
    }
  ],

  /* ============ 六、当日最值得关注的 3 个交易逻辑 ============ */
  logics: [
    { title: "利率与油价双重压制 vs AI景气韧性：资金在利率敏感资产与AI景气资产间分化",
      text: "8月PPI超预期（同比5.4%）叠加油价破百（布伦特105美元），10年期美债收益率升至4.89%（2023年11月来新高），9月加息概率升至约74%，欧洲央行亦加息25bp，全球流动性收紧压制长久期成长股，芯片、存储、光通信集体回吐。但苹果（+3.56%）、Oracle（盘后+7%）显示AI景气与硬件换机主线仍有韧性，资金在利率敏感资产与AI景气资产之间做结构性切换。9/11 CPI是决定性变量。" },
    { title: "存储超级周期遭遇获利回吐：短期估值受利率压制，长期HBM供需逻辑未变",
      text: "美光、闪迪、SK海力士9月初连续创历史新高后，9/10集体回吐（美光-4.90%、闪迪-4.06%、SK海力士-5.2%）。触发并非基本面恶化，而是PPI超预期+加息预期升温下的估值挤压与高位获利了结。存储涨价周期（NAND/HBM）与AI资本开支逻辑未变，但高位品种对利率更敏感，需以9/30美光财报与后续CPI/需求数据验证涨价周期持续性，警惕2027年供需反转风险。" },
    { title: "AI商业化兑现 vs AI资本开支：Oracle订单与苹果换机对冲利率压制",
      text: "Oracle Q1财报证明企业AI云需求强劲（RPO 6640亿美元、云基础设施+121%），且多数新订单无需增量资本开支、缓解现金消耗担忧；苹果折叠屏+端侧Siri AI开启硬件换机周期、高盛维持1400万台出货预测。二者共同验证\u201cAI从资本开支走向商业化兑现\u201d的叙事，对冲利率上行对科技估值的压制，是下跌市中苹果、Oracle逆势走强的核心逻辑，可能成为大型科技股估值的新锚。" }
  ],

  /* ============ 七、未来 1—3 个交易日关注事项（具体事件） ============ */
  watchlist: [
    { date: "09月11日", event: "美国8月CPI数据（9月FOMC前最后通胀数据）", impact: "加息与否的决定性依据，当前交易员对9月加息的定价概率约74%" },
    { date: "09月12日", event: "iPhone 18 Pro / Pro Max 开启预订", impact: "新机预售数据检验高端需求与苹果供应链预期" },
    { date: "09月15-16日", event: "美联储FOMC议息会议", impact: "市场定价加息概率约74%，决定高估值成长股估值锚" },
    { date: "09月30日", event: "美光科技（Micron）Q4财报", impact: "存储涨价周期与HBM供需的关键验证，影响存储板块定价" },
    { date: "近期", event: "英伟达与Groq交易反垄断调查后续进展", impact: "监管对AI行业变相并购的审查风向，影响AI芯片板块情绪" }
  ],

  /* ============ 八、页脚免责声明 ============ */
  disclaimer:
    "本报告基于公开市场信息整理，仅供华泰期货内部研究参考，不构成任何投资建议。股价数据以交易所官方为准；新闻以原始来源（SEC / 白宫 / BIS / Treasury / BEA / Reuters / Bloomberg 等）为准。投资有风险，决策需谨慎。"
};
