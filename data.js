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
    reportDate: "2026年08月21日",   // 报告发布日期
    tradeDate: "2026年08月20日",    // 对应美股交易日（前一交易日）
    author: "华泰期货 · 研究",
    tag: "每日市场跟踪"
  },

  /* ============ 二、市场概览 ============ */
  overview: {
    /* 简短概括：指数变化 + 个股变化 + 重大事件 */
    text: "8月20日美股全线回落，纳指跌1.00%、标普500跌0.87%、道指跌1.32%，回吐前一日财政部扩大回购带来的涨幅。长债收益率反弹、油价大涨、沃尔玛美国同店销售创六年新低共同压制风险偏好。板块严重分化：大型科技普跌（亚马逊-2.16%、苹果-1.75%），存储芯片逆势大涨（美光+3.97%、闪迪+2.02%），受美光百亿研究实验室与韩系存储厂商股东回报提振。",
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
      name: "美光科技 Micron", code: "MU",
      direction: "超涨",
      change: "-0.00%",
      fiveDay: "近5个交易日累计上涨2.58%，扭转此前两日的下跌趋势",
      newHighLow: "自阶段高点回撤后强势反弹，逼近阶段高位",
      volume: "成交明显放大，换手率达2.23%",
      reason: "美光宣布未来十年投入100亿美元建设美光研究实验室，叠加SK海力士40万亿韩元回购与三星拟超100万亿韩元股东回报计划，存储板块逆势大涨，美光单日涨3.97%，显著跑赢纳指（-1.00%）",
      impact: "存储涨价周期逻辑重新获得资金认可，关注AI存储需求持续性与股东回报计划的落地节奏"
    }
  ],

  /* ============ 四、重点公司行情表 ============ */
  /* 超涨/超跌个股放最上方；无新闻的公司驱动因素简要说明即可 */
  stocks: [
    { name: "Micron",    code: "MU",    change: "-0.00%", driver: "100亿美元研究实验室+存储板块反弹，领涨+3.97%" },
    { name: "Sandisk",   code: "SNDK",  change: "-0.00%", driver: "存储板块反弹，韩系厂商回购带动（+2.02%）" },
    { name: "AMD",       code: "AMD",   change: "-0.00%", driver: "半导体企稳微涨（+0.65%），GPU/CPU双线止跌" },
    { name: "Broadcom",  code: "AVGO",  change: "-0.00%", driver: "半导体企稳微涨（+0.43%），AI定制芯片止跌" },
    { name: "NVIDIA",    code: "NVDA",  change: "-0.00%", driver: "芯片龙头相对抗跌，仅跌0.33%" },
    { name: "Meta",      code: "META",  change: "-0.00%", driver: "基本平收（-0.04%），前期跌幅较大后企稳" },
    { name: "Microsoft", code: "MSFT",  change: "-0.00%", driver: "大型科技普跌，小幅收跌0.47%" },
    { name: "Alphabet",  code: "GOOGL", change: "-0.00%", driver: "大型科技普跌，收跌1.17%" },
    { name: "Apple",     code: "AAPL",  change: "-0.00%", driver: "大型科技领跌（-1.75%），消费走弱拖累" },
    { name: "Amazon",    code: "AMZN",  change: "-0.00%", driver: "大型科技领跌（-2.16%），消费走弱拖累" }
  ],

  /* ============ 五、重要科技与政策新闻（一手来源） ============ */
  news: [
    {
      title: "美光宣布100亿美元建设「美光研究实验室」，押注AI时代存储技术",
      originalTitle: "Micron Unveils Micron Research Labs, a U.S.-Based Long-Horizon Innovation Hub to Shape the Future of Memory and AI",
      source: "美光科技（Micron）官方新闻稿",
      time: "2026年08月20日",
      type: "官方",
      url: "https://investors.micron.com/news/press-release/2026/Micron-Unveils-Micron-Research-Labs-a-U-S--Based-Long-Horizon-Innovation-Hub-to-Shape-the-Future-of-Memory-and-AI/default.aspx",
      link: "https://investors.micron.com/news/press-release/2026/Micron-Unveils-Micron-Research-Labs-a-U-S--Based-Long-Horizon-Innovation-Hub-to-Shape-the-Future-of-Memory-and-AI/default.aspx",
      summary: "美光宣布在爱达荷州博伊西设立美光研究实验室，计划未来十年投入100亿美元，联合高校、政府、初创企业与产业生态，聚焦核心存储技术、先进存算架构、封装与下一代半导体制造，是美国首个专注存储的研究机构。英伟达、苹果、应用材料等高管及美国商务部长、白宫科技政策办主任公开支持。此举叠加此前250亿美元本土制造投资，强化其美国唯一先进存储制造商的地位，直接提振存储板块。",
      impact: {
        direction: "利好",
        companies: "美光、闪迪、SK海力士",
        industry: "存储芯片",
        logic: "强化AI存储需求与技术领先叙事，支撑存储板块估值"
      }
    },
    {
      title: "SK海力士40万亿韩元回购落地，三星拟推超100万亿韩元股东回报",
      originalTitle: "Samsung plans $72 billion shareholder return programme amid AI chip boom",
      source: "Reuters",
      time: "2026年08月20日",
      type: "财经媒体",
      url: "https://finance.yahoo.com/markets/stocks/articles/samsung-plans-72-billion-shareholder-121126943.html",
      link: "https://finance.yahoo.com/markets/stocks/articles/samsung-plans-72-billion-shareholder-121126943.html",
      summary: "SK海力士周三宣布回购并注销40万亿韩元（约286亿美元）股份，并将2025—2027年累计自由现金流股东回报比例提升至50%以上；三星电子据报拟于8月底董事会批准超100万亿韩元（约718亿美元）股东回报计划，含特别股息。两大存储巨头在AI存储超级周期下产生创纪录现金流，股东回报计划点燃存储板块情绪，韩股SK海力士涨逾12%、三星涨逾9%，美股存储股随之大涨。",
      impact: {
        direction: "利好",
        companies: "美光、闪迪、SK海力士",
        industry: "存储芯片",
        logic: "巨额回购传递「存储涨价周期未终结」信号，缓解周期见顶担忧"
      }
    },
    {
      title: "美股三大指数收跌：长债收益率反弹、油价大涨叠加沃尔玛财报拖累",
      originalTitle: "Wall Street sinks as bond yields rise, Walmart results disappoint",
      source: "Reuters",
      time: "2026年08月20日",
      type: "财经媒体",
      url: "https://www.aol.com/articles/us-stock-futures-muted-bond-101757000.html",
      link: "https://www.aol.com/articles/us-stock-futures-muted-bond-101757000.html",
      summary: "8月20日美股三大指数全线收跌，道指跌1.32%、标普500跌0.87%、纳指跌1.00%。财政部扩大回购带来的债市涨势不到24小时便消退，10年期美债收益率升至4.71%、30年期升至5.25%；美国原油涨至87美元上方、布油突破93美元加剧通胀担忧；沃尔玛财报不及预期重挫9.2%，拖累消费板块。能源与房地产是唯二上涨板块，加密货币概念股逆势大涨。",
      impact: {
        direction: "利空",
        companies: "大型科技、半导体",
        industry: "全市场",
        logic: "利率、油价、消费三重逆风压制高估值成长股"
      }
    },
    {
      title: "美联储7月纪要偏鹰：数位官员主张加息，「许多」认为通胀不降需收紧",
      originalTitle: "Fed policymakers' inflation concerns increased at July meeting, minutes show",
      source: "Reuters",
      time: "2026年08月19日",
      type: "财经媒体",
      url: "https://www.aol.com/articles/fed-policymakers-inflation-concerns-increased-180421000.html",
      link: "https://www.aol.com/articles/fed-policymakers-inflation-concerns-increased-180421000.html",
      summary: "美联储7月28—29日会议纪要显示，通胀担忧加深：3位委员反对维持利率、主张加息25个基点，「数位」与会者支持加息，「许多」认为若通胀不降至2%目标需进一步收紧。会议以9:3维持利率于3.50%—3.75%。纪要还披露主席沃什提议将年度政策会议从8次减至6次（2026年内不变）。利率期货显示市场押注10月或12月重启加息，纪要并警示AI高估值与国债波动风险。",
      impact: {
        direction: "利空",
        companies: "高估值科技股、半导体",
        industry: "利率、AI",
        logic: "加息预期升温与「AI资产重估」警示压制风险偏好"
      }
    },
    {
      title: "美国财政部将长债回购规模至少翻倍，9月9日起执行",
      originalTitle: "Treasury Announces Increased Sizes of Nominal Long-End Liquidity Support Buybacks Beginning September 9",
      source: "美国财政部（U.S. Treasury）",
      time: "2026年08月19日",
      type: "官方",
      url: "https://home.treasury.gov/news/press-releases/sb0607",
      link: "https://home.treasury.gov/news/press-releases/sb0607",
      summary: "美国财政部宣布将10—20年期、20—30年期名义附息国债的流动性支持回购单次上限从20亿美元至少提高至40亿美元（至少翻倍），9月9日生效、持续至11月4日。此举旨在回应30年期美债收益率升至2007年以来新高的长债抛售，官方定位为流动性支持（使用TGA存量资金、不扩表，非QE）。8月19日推动长端收益率回落，但8月20日收益率即重新走高，显示结构性抛压仍在。",
      impact: {
        direction: "中性",
        companies: "高久期成长股（AI、半导体）",
        industry: "利率、国债市场",
        logic: "短期压制长债收益率、缓解贴现率压力，但药效短暂"
      }
    },
    {
      title: "美国联邦债务突破40万亿美元，贝森特称单次回购规模「或超40亿」",
      originalTitle: "Trading Day: Can't get no relief",
      source: "Reuters",
      time: "2026年08月20日",
      type: "财经媒体",
      url: "https://finance.yahoo.com/markets/articles/trading-day-cant-no-relief-210231072.html",
      link: "https://finance.yahoo.com/markets/articles/trading-day-cant-no-relief-210231072.html",
      summary: "美国联邦政府债务史上首次突破40万亿美元，十年间翻倍，本财年利息支出已达1.17万亿美元。财政部长贝森特表示单次长债回购规模「可能超过」已公布的40亿美元，但强调长债收益率未反映基本面；分析师指出回购类似「先回购再增发」，难从根本上改变供给压力。财政部干预被市场视为变种「特朗普看跌期权」，其对美联储控通胀的影响也引发争议。",
      impact: {
        direction: "利空",
        companies: "高估值科技股",
        industry: "利率、财政",
        logic: "财政可持续性担忧推高长端风险溢价，压制成长股估值"
      }
    }
  ],

  /* ============ 六、当日最值得关注的 3 个交易逻辑 ============ */
  logics: [
    { title: "长债收益率「一日游」：财政部回购药效短暂，成长股估值压力反复",
      text: "财政部扩大长债回购仅带来一天缓解，8月20日10年期收益率反弹至4.71%、30年期回升至5.25%，几乎收复前日全部跌幅。回购并非削减债务总量，而是期限结构调整，在40万亿美元债务与巨额利息支出背景下，市场对财政可持续性的担忧难以消除。高久期科技成长股的贴现率压力随之反复，是当日大型科技普跌的核心驱动。" },
    { title: "存储板块独立行情：巨额股东回报与美光研发投入逆转周期见顶担忧",
      text: "SK海力士40万亿韩元回购、三星拟超100万亿韩元股东回报，叠加美光100亿美元研究实验室，三重利好集中落地，直接反驳了此前两日的「存储涨价周期见顶」叙事。美光+3.97%、闪迪+2.02%领涨，显著跑赢纳指。巨额回购传递出产业龙头对内存定价韧性的信心，资金快速回补存储与光通信板块，形成与大盘的明显分化。" },
    { title: "美联储偏鹰纪要+AI资产重估警示，货币政策收紧预期升温",
      text: "美联储7月纪要显示通胀担忧加深，3位委员已主张加息，利率期货押注10月或12月重启加息。纪要罕见地就AI高估值与国债波动风险发出警示，若市场下调对AI企业盈利前景的评估，可能引发资产广泛重定价并收紧金融环境。在油价上行推升通胀、长债收益率高位震荡的背景下，高估值AI硬件的贴现率与盈利持续性双重承压。" }
  ],

  /* ============ 七、未来 1—3 个交易日关注事项（具体事件） ============ */
  watchlist: [
    { date: "08月24日", event: "美国财长贝森特新闻发布会，公布对伊朗「经济孤立」措施细节", impact: "地缘风险与油价，影响通胀预期与市场风险偏好" },
    { date: "08月25日", event: "Zoom Communications 财报（盘后）", impact: "AI SaaS 与企业软件需求信号" },
    { date: "08月26日", event: "NVIDIA 2027财年Q2财报（盘后）", impact: "AI 芯片需求与数据中心资本开支的风向标，将定调整个 AI 硬件板块" },
    { date: "08月26日", event: "Salesforce 财报（盘后，预计）", impact: "企业 AI 软件需求与云计算支出信号" },
    { date: "08月27—29日", event: "Jackson Hole 全球央行年会，美联储主席 Warsh 8月28日发表讲话", impact: "关注对通胀、长债利率与货币政策路径的表态" },
    { date: "08月底", event: "三星电子董事会会议，拟批准超100万亿韩元股东回报计划", impact: "存储板块股东回报与情绪延续" },
    { date: "09月02日", event: "Broadcom 财报（盘后，预计）", impact: "AI 定制芯片(ASIC)与数据中心网络需求信号" }
  ],

  /* ============ 八、页脚免责声明 ============ */
  disclaimer:
    "本报告基于公开市场信息整理，仅供华泰期货内部研究参考，不构成任何投资建议。股价数据以交易所官方为准；新闻以原始来源（SEC / 白宫 / BIS / Treasury / Reuters / Bloomberg 等）为准。投资有风险，决策需谨慎。"
};
