/**
 * ============================================================
 *  美股科技板块前一交易日行情日报 —— 数据文件（每日只需改这里）
 *  （2026-09-18 更新：对应美股交易日 2026-09-17）
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
    reportDate: "2026年09月18日",   // 报告发布日期（周五）
    tradeDate: "2026年09月17日",    // 对应美股交易日（前一交易日，周四）
    author: "华泰期货 · 研究",
    tag: "每日市场跟踪"
  },

  /* ============ 二、市场概览 ============ */
  overview: {
    /* 简短概括：指数变化 + 个股变化 + 重大事件 */
    text: "9月17日美股三大指数集体反弹：纳指+1.69%至26418点、标普+1.14%至7638点、道指+0.61%，终结三连跌。美联储9/16加息25bp落地后，10年期美债收益率跌破5%（4.94%）、布伦特原油回落至104.82美元，风险偏好回暖。半导体领涨（费半+3.1%）：AMD+6.36%、闪迪+6.21%、美光+5.50%，大型科技普涨（英伟达+2.54%、亚马逊+2.13%）。",
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
      name: "AMD / 超威半导体",
      code: "AMD",
      direction: "超涨",
      change: "-0.00%",
      fiveDay: "9/11收516.13 → 9/14收493.41（AI放缓担忧重挫）→ 9/15收504.20 → 9/16收512.50 → 9/17收545.09（+6.36%），近5个交易日累计+5.61%",
      newHighLow: "收545.09美元，逼近52周高点584.73美元（距离约-6.8%），创近期阶段新高",
      volume: "9/17成交2846万股，高于20日均量约2510万股，较前日（2232万股）放大约27%",
      reason: "Nebius宣布10/1起上调GPU云算力价格（AMD EPYC Genoa CPU费率+25%、Genoa内存+41%），印证AI算力需求强劲；叠加美联储加息落地、油价与美债收益率回落，AI算力股领涨半导体",
      impact: "AI算力需求与提价逻辑强化AMD数据中心叙事（Q2数据中心营收同比+107%）；但估值处高位，需关注后续财报兑现与AI资本开支持续性"
    },
    {
      name: "SanDisk / 闪迪",
      code: "SNDK",
      direction: "超涨",
      change: "-0.00%",
      fiveDay: "9/11收1633.35 → 9/14收1551.99 → 9/15收1530.90 → 9/16收1519.97（阶段低点）→ 9/17收1614.39（+6.21%），近5个交易日累计-1.16%（超跌后强反弹）",
      newHighLow: "9/16触及近期阶段低点1519.97后V型反弹，仍处历史高位回调区间下沿",
      volume: "9/17成交848万股，较前日（742万股）放大约14%",
      reason: "周一AI放缓担忧引发的NAND存储抛售告一段落，存储涨价周期预期（花旗预计存储短缺延续至2031）叠加SK海力士-英特尔美国建厂谈判，存储板块集体反弹",
      impact: "NAND存储超级周期叙事回暖，但需以9/30美光财报验证涨价持续性；高位品种对利率与获利了结仍较敏感"
    },
    {
      name: "Micron / 美光",
      code: "MU",
      direction: "超涨",
      change: "-0.00%",
      fiveDay: "9/11收975.26 → 9/14收924.03 → 9/15收927.60 → 9/16收926.55（阶段低点）→ 9/17收977.50（+5.50%），近5个交易日累计+0.23%",
      newHighLow: "9/16触及阶段低点926.55后强劲反弹，收复前期AI放缓抛售大部分失地",
      volume: "9/17成交2209万股，较前日（2021万股）放大约9%",
      reason: "DRAM/HBM存储涨价与AI算力需求共振，花旗预计DRAM供给缺口2027-2028年扩大（需求+30%以上、供给仅+19%-22%），存储板块领涨",
      impact: "DRAM/HBM供需紧张支撑涨价周期，9/30财报为关键验证；台湾厂员工利润分成谈判存扰动风险"
    }
  ],

  /* ============ 四、重点公司行情表 ============ */
  /* 超涨/超跌个股放最上方；无新闻的公司驱动因素简要说明即可 */
  stocks: [
    { name: "AMD",       code: "AMD",   change: "-0.00%", driver: "AI算力领涨，+6.36%至545.09美元（超涨）；Nebius上调GPU云价格（AMD CPU费率+25%）印证AI需求，逼近52周高点584.73美元" },
    { name: "Micron",    code: "MU",    change: "-0.00%", driver: "DRAM/HBM存储强反弹，+5.50%至977.50美元（超涨）；存储涨价周期+SK海力士-英特尔美国建厂谈判提振" },
    { name: "Sandisk",   code: "SNDK",  change: "-0.00%", driver: "NAND存储超跌反弹，+6.21%至1614.39美元（超涨）；花旗预计存储短缺延续至2031" },
    { name: "NVIDIA",    code: "NVDA",  change: "-0.00%", driver: "AI算力龙头随板块走强，+2.54%至219.34美元；Nebius上调英伟达GPU云价格（B300+21%）" },
    { name: "Microsoft", code: "MSFT",  change: "-0.00%", driver: "大型科技普涨，+1.52%至497.75美元；云与软件现金流韧性支撑" },
    { name: "Apple",     code: "AAPL",  change: "-0.00%", driver: "随大盘反弹，+1.38%至337.00美元" },
    { name: "Amazon",    code: "AMZN",  change: "-0.00%", driver: "科技权重走强，+2.13%至251.19美元；非必需消费板块领涨（+1.43%）" },
    { name: "Alphabet",  code: "GOOGL", change: "-0.00%", driver: "随科技板块反弹，+1.30%至347.33美元" },
    { name: "Meta",      code: "META",  change: "-0.00%", driver: "科技七巨头齐涨，+1.34%至682.31美元，近10日相对仍强" },
    { name: "Broadcom",  code: "AVGO",  change: "-0.00%", driver: "定制ASIC随半导体反弹，+2.29%至347.30美元" }
  ],

  /* ============ 五、重要科技与政策新闻（一手来源） ============ */
  news: [
    {
      title: "美联储加息25个基点至3.75%-4.00%，为2023年7月以来首次加息",
      originalTitle: "Federal Reserve issues FOMC statement",
      source: "Federal Reserve（美联储官网）",
      time: "2026年09月16日",
      type: "官方",
      url: "https://www.federalreserve.gov/newsevents/pressreleases/monetary20260916a.htm",
      link: "https://www.federalreserve.gov/newsevents/pressreleases/monetary20260916a.htm",
      summary: "FOMC以12-0一致投票将联邦基金利率目标区间上调25bp至3.75%-4.00%，为2023年7月以来首次加息。声明称经济活动稳健扩张、通胀仍处高位，本次行动将支持通胀'更快地'回落至2%目标；点阵图显示18名官员中16人预计年内还将再加息一次。",
      impact: {
        direction: "中性偏利好",
        companies: "全市场、利率敏感成长股",
        industry: "货币政策、利率、估值",
        logic: "加息'靴子落地'消除不确定性、重树美联储抗通胀信誉，长端收益率回落缓解成长股估值压力，但偏鹰点阵图仍约束上行空间"
      }
    },
    {
      title: "美股三大指数集体反弹收涨，纳指+1.7%领涨，终结三连跌",
      originalTitle: "World stocks rebound, Treasury yields retreat after Fed, BoE decisions",
      source: "Reuters（路透社）",
      time: "2026年09月17日",
      type: "财经媒体",
      url: "https://www.macon.com/news/business/article317275424.html",
      link: "https://www.macon.com/news/business/article317275424.html",
      summary: "纳指+1.7%至26418点、标普+1.1%至7638点、道指+0.61%至51778点，终结三连跌。科技、非必需消费、公用事业领涨，必需消费与金融拖累。10年期美债收益率回落6.55bp至4.939%、布伦特原油跌近1%至104.82美元，初请失业金降至19.6万（近1969年低位），市场对加息落地及抗通胀信誉回归感到宽慰。",
      impact: {
        direction: "利好",
        companies: "全市场、科技股、半导体",
        industry: "利率、能源、风险偏好",
        logic: "油价与长端收益率同步回落释放成长股估值压力，AI/半导体领涨，风险偏好全面修复（VIX降至15.44）"
      }
    },
    {
      title: "10年期美债收益率回落至4.946%，重新跌破5%关键位",
      originalTitle: "10-Year Treasury Yield Falls to 4.946% — Data Talk",
      source: "Dow Jones Newswires（道琼斯通讯社）",
      time: "2026年09月17日",
      type: "财经媒体",
      url: "https://www.morningstar.com/news/dow-jones/202609176772/10-year-treasury-yield-falls-to-4946-data-talk",
      link: "https://www.morningstar.com/news/dow-jones/202609176772/10-year-treasury-yield-falls-to-4946-data-talk",
      summary: "10年期美债收益率当日下跌5.7bp至4.946%，脱离9/16创下的52周高点5.003%，结束连涨，为8月25日以来最大单日跌幅。5%是重要心理与估值分界线，收益率回落至5%下方直接缓解高估值成长股的贴现率压力，是当日科技股强反弹的核心驱动。",
      impact: {
        direction: "利好",
        companies: "全市场、高估值成长股",
        industry: "利率、债市、估值",
        logic: "无风险收益率下行抬升成长股估值倍数，为科技板块反弹提供估值锚；但收益率仍在历史高位，反弹持续性待观察"
      }
    },
    {
      title: "Nebius上调GPU云算力价格，AI算力需求强劲，AMD/英伟达领涨",
      originalTitle: "Why AMD Stock Jumped Today",
      source: "The Motley Fool（美国财经媒体）",
      time: "2026年09月17日",
      type: "财经媒体",
      url: "https://www.fool.com/investing/2026/09/17/why-amd-stock-jumped-63-today",
      link: "https://www.fool.com/investing/2026/09/17/why-amd-stock-jumped-63-today",
      summary: "云计算服务商Nebius通知客户自10/1起上调按需算力价格：英伟达GPU涨17%-21%（B300+21%）、AMD EPYC Genoa CPU费率+25%、内存+41%。提价以真金白银印证AI算力需求持续旺盛，AMD当日+6.36%、英伟达+2.54%；AMD Q2数据中心营收同比+107%至67亿美元。",
      impact: {
        direction: "利好",
        companies: "AMD、NVIDIA、AI算力链",
        industry: "AI、半导体、云计算",
        logic: "云计算厂商提价表明AI算力供不应求，对冲'AI放缓'担忧，强化AI硬件资本开支与提价叙事"
      }
    },
    {
      title: "SK海力士与英特尔洽谈在美生产存储芯片，英特尔大涨",
      originalTitle: "Intel Shares Rise Premarket on Report of SK Hynix U.S. Manufacturing Talks",
      source: "Dow Jones Newswires（道琼斯通讯社）",
      time: "2026年09月16日",
      type: "财经媒体",
      url: "https://www.morningstar.com/news/dow-jones/202609162127/intel-shares-rise-premarket-on-report-of-sk-hynix-us-manufacturing-talks",
      link: "https://www.morningstar.com/news/dow-jones/202609162127/intel-shares-rise-premarket-on-report-of-sk-hynix-us-manufacturing-talks",
      summary: "路透援引三名知情人士称，SK海力士正与英特尔洽谈在美生产存储芯片，方案包括租用英特尔俄亥俄州晶圆厂部分产能，或与大型云厂商成立合资公司。若达成将是SK海力士首次在美生产存储芯片，助力特朗普政府芯片本土化；英特尔9/17大涨7.67%，费半+3.1%。",
      impact: {
        direction: "利好",
        companies: "Intel、SK海力士、存储链（MU/SNDK）",
        industry: "半导体制造、存储、产业政策",
        logic: "存储短缺背景下产能本土化提速，强化存储超级周期与半导体设备/制造投资逻辑，提振费半情绪"
      }
    }
  ],

  /* ============ 六、当日最值得关注的 3 个交易逻辑 ============ */
  logics: [
    { title: "美联储加息'靴子落地'，美债收益率跌破5%，成长股估值压力缓解",
      text: "美联储9/16一致加息25bp为三年多来首次，市场真正担忧的是偏鹰点阵图（16/18预计年内再加息一次）。但9/17长端收益率回落——10年期跌破5%至4.94%、30年期5.29%——叠加油价自高位回落，成长股贴现率压力边际缓解，科技领涨、纳指+1.7%终结三连跌。利率路径仍是核心变量，市场定价10月再加息概率约53%。" },
    { title: "AI算力需求强劲叙事回归：Nebius提价+存储涨价周期，证伪'AI放缓'极端交易",
      text: "Nebius上调GPU云价格（英伟达GPU+17%-21%、AMD CPU+25%），以提价印证AI算力需求未因'放缓呼声'消退；存储端花旗预计短缺延续至2031、SK海力士-英特尔洽谈美国建厂。AMD+6.36%、美光+5.50%、闪迪+6.21%领涨，周一'AI放缓→硬件需求骤降'的极端交易被证伪，资金重回AI算力与存储主线。" },
    { title: "油价→美债→贴现率的传导链反向运行，风险偏好修复",
      text: "前期'油价上行→通胀预期升温→加息压力→10Y破5%→科技估值压缩'的传导链在9/17反向运行：沙特经阿曼转运原油、东-西输油管预计数日内恢复，布伦特回落至104.82美元，油价与长端收益率同步回落，VIX降至15.44。这是当日科技强反弹的宏观主因，但油价仍在100美元上方、中东局势未解，修复能否延续取决于利率与能源变量。" }
  ],

  /* ============ 七、未来 1—3 个交易日关注事项（具体事件） ============ */
  watchlist: [
    { date: "09月18日", event: "日本央行（BOJ）利率决议（市场普遍预期加息至1.25%，创31年新高）", impact: "全球央行收紧共振，若日央行加息或推升全球债券收益率，间接影响美股科技股估值与套息交易" },
    { date: "09月22日", event: "美国总统特朗普与海湾国家领导人在联合国大会期间会晤（伊朗局势/油价）", impact: "中东局势走向决定油价与通胀预期，直接关联美联储后续加息路径与风险偏好" },
    { date: "09月30日", event: "美光科技（Micron）Q4财报", impact: "DRAM/HBM存储涨价周期与供需的关键验证，影响存储板块（MU/SNDK）定价" },
    { date: "10月底", event: "美联储下次FOMC议息会议（市场定价加息25bp概率约53%）", impact: "利率路径与点阵图演变直接锚定高估值成长股估值中枢" }
  ],

  /* ============ 八、页脚免责声明 ============ */
  disclaimer:
    "本报告基于公开市场信息整理，仅供华泰期货内部研究参考，不构成任何投资建议。股价数据以交易所官方为准；新闻以原始来源（SEC / 白宫 / BIS / Treasury / BEA / BLS / Federal Reserve / Reuters 等）为准。投资有风险，决策需谨慎。"
};
