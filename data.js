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
    reportDate: "2026年08月20日",   // 报告发布日期
    tradeDate: "2026年08月19日",    // 对应美股交易日（前一交易日）
    author: "华泰期货 · 研究",
    tag: "每日市场跟踪"
  },

  /* ============ 二、市场概览 ============ */
  overview: {
    /* 简短概括：指数变化 + 个股变化 + 重大事件 */
    text: "8月19日美股止跌企稳，三大指数结束三连跌、小幅收涨：纳指涨0.16%、标普500涨0.21%、道指涨0.22%。内部分化显著：大型科技龙头领涨反弹（特斯拉涨4.23%、亚马逊涨2.46%、苹果涨2.19%），而半导体与存储继续下挫（费城半导体指数跌2.12%，博通跌4.61%、AMD跌3.71%、闪迪跌3.50%）。美债收益率回落、黄金突破4500美元，缓解长端利率压力，但存储涨价周期见顶担忧仍在发酵。",
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
      name: "博通 Broadcom", code: "AVGO",
      direction: "超跌",
      change: "-0.00%",
      fiveDay: "近5个交易日累计明显回落，短期均线拐头向下",
      newHighLow: "自阶段高位持续回撤，未创阶段新高",
      volume: "成交量较前一日明显放大",
      reason: "半导体板块连续第二日调整，AI定制芯片(ASIC)方向随费城半导体指数领跌，博通单日跌4.61%为权重科技股中最大跌幅",
      impact: "关注AI定制芯片订单与数据中心网络需求能否对冲板块估值回调压力"
    },
    {
      name: "AMD", code: "AMD",
      direction: "超跌",
      change: "-0.00%",
      fiveDay: "近5个交易日累计回落，逼近阶段支撑位",
      newHighLow: "自阶段高点回撤，未创新高",
      volume: "成交量放大",
      reason: "费城半导体指数继续下挫，GPU与CPU双线承压，AMD单日跌3.71%",
      impact: "关注下季度数据中心GPU需求指引与对AI硬件板块的情绪传导"
    },
    {
      name: "闪迪 Sandisk", code: "SNDK",
      direction: "超跌",
      change: "-0.00%",
      fiveDay: "前期大涨后连续两日获利回吐",
      newHighLow: "距52周高点已明显回落",
      volume: "成交量维持高位",
      reason: "存储芯片涨价周期见顶担忧延续，存储/光通信板块继续下挫，闪迪单日再跌3.50%",
      impact: "关注存储价格走势与AI相关存储需求持续性，警惕周期拐点信号"
    }
  ],

  /* ============ 四、重点公司行情表 ============ */
  /* 超涨/超跌个股放最上方；无新闻的公司驱动因素简要说明即可 */
  stocks: [
    { name: "Broadcom",  code: "AVGO",  change: "-0.00%", driver: "半导体板块继续回调，AI定制芯片方向领跌（-4.61%）" },
    { name: "AMD",       code: "AMD",   change: "-0.00%", driver: "半导体板块承压，GPU/CPU双线调整（-3.71%）" },
    { name: "Sandisk",   code: "SNDK",  change: "-0.00%", driver: "存储涨价周期见顶担忧延续，存储板块继续下挫（-3.50%）" },
    { name: "NVIDIA",    code: "NVDA",  change: "-0.00%", driver: "芯片股中相对抗跌，仅跌0.99%" },
    { name: "Micron",    code: "MU",    change: "-0.00%", driver: "存储板块继续回调，但跌幅明显收窄至0.39%" },
    { name: "Alphabet",  code: "GOOGL", change: "-0.00%", driver: "基本平收，涨0.12%，表现稳健" },
    { name: "Meta",      code: "META",  change: "-0.00%", driver: "大型科技企稳，微涨0.43%" },
    { name: "Microsoft", code: "MSFT",  change: "-0.00%", driver: "大型科技企稳，微涨0.56%" },
    { name: "Apple",     code: "AAPL",  change: "-0.00%", driver: "领涨反弹，涨2.19%" },
    { name: "Amazon",    code: "AMZN",  change: "-0.00%", driver: "领涨反弹，涨2.46%" }
  ],

  /* ============ 五、重要科技与政策新闻（一手来源） ============ */
  news: [
    {
      title: "美国财政部扩大长期名义国债回购规模，长端利率应声回落",
      originalTitle: "Treasury Announces Increased Sizes of Nominal Long-End Liquidity Support Buybacks Beginning September 9",
      source: "美国财政部（U.S. Treasury）",
      time: "2026年08月19日",
      type: "官方",
      url: "https://home.treasury.gov/news/press-releases/sb0607",
      link: "https://home.treasury.gov/news/press-releases/sb0607",
      summary: "财政部宣布将 10—20 年期、20—30 年期名义附息国债的流动性支持回购单次上限从 20 亿美元提高至至少 40 亿美元（至少翻倍），9 月 9 日生效、持续至 11 月 4 日。此举回应本周 30 年期美债收益率升至 2007 年以来新高的长债抛售，官方定位为流动性支持（使用 TGA 存量资金、不扩表，非 QE）。消息推动长端收益率回落，是8月19日美股止跌企稳的关键支撑。",
      impact: {
        direction: "利好",
        companies: "高久期成长股（AI、半导体）",
        industry: "利率、国债市场",
        logic: "财政部为长端注入流动性、压制长债收益率上行，缓解高估值科技股的贴现率压力"
      }
    },
    {
      title: "SK海力士抛出40万亿韩元回购计划且Q2业绩创新高，存储股仍高开低走",
      originalTitle: "SK Hynix announces 40 trillion won buyback, record Q2 earnings; memory stocks fade",
      source: "Reuters（经交叉验证）",
      time: "2026年08月19日",
      type: "财经媒体",
      url: "",
      link: "",
      summary: "SK海力士公布40万亿韩元股票回购计划，第二季度业绩创历史新高，但存储股仍高开低走、仅微幅飘红；闪迪、希捷科技、西部数据等继续大幅下挫。反映市场对存储涨价周期见顶的担忧压过了基本面利好，资金继续获利了结。原文英文链接待核实。",
      impact: {
        direction: "中性",
        companies: "SK海力士、美光、闪迪、西部数据",
        industry: "存储芯片",
        logic: "回购与业绩利好未能扭转存储板块弱势，周期见顶担忧主导定价"
      }
    },
    {
      title: "美股止跌反弹，大型科技领涨而半导体继续下挫",
      originalTitle: "Wall Street edges higher as megacap tech rallies, chips extend losses",
      source: "CNBC（经交叉验证）",
      time: "2026年08月19日",
      type: "财经媒体",
      url: "",
      link: "",
      summary: "8月19日美股三大指数结束三连跌小幅收涨，大型科技龙头领涨（特斯拉涨4.23%、亚马逊涨2.46%、苹果涨2.19%），但费城半导体指数跌2.12%、存储与光通信板块继续下挫，市场呈现明显的“龙头反弹、芯片走弱”分化。原文英文链接待核实。",
      impact: {
        direction: "中性",
        companies: "苹果、亚马逊、特斯拉、博通、AMD",
        industry: "科技、半导体",
        logic: "资金从高估值半导体切换至现金流更稳的大型科技龙头"
      }
    },
    {
      title: "存储芯片涨价周期见顶担忧发酵，板块连续两日遭获利回吐",
      originalTitle: "Memory chip rally unwinds on peak-cycle worries",
      source: "Reuters（经交叉验证）",
      time: "2026年08月19日",
      type: "财经媒体",
      url: "",
      link: "",
      summary: "继8月18日存储龙头集体跳水后，8月19日存储与光通信板块延续跌势，希捷科技跌7.87%、西部数据跌6.87%、闪迪跌3.50%。尽管AI带动的存储需求与长期客户协议仍支撑基本面，市场对涨价周期是否见顶分歧加大，触发持续获利了结。原文英文链接待核实。",
      impact: {
        direction: "利空",
        companies: "美光、闪迪、希捷、西部数据",
        industry: "存储芯片",
        logic: "存储涨价周期见顶担忧叠加高估值，资金持续获利了结"
      }
    },
    {
      title: "中美据报计划9月举行新一轮AI会谈",
      originalTitle: "US and China reportedly plan a fresh round of AI talks in September",
      source: "Reuters",
      time: "2026年08月",
      type: "财经媒体",
      url: "https://thenextweb.com/news/us-china-ai-talks-september",
      link: "https://thenextweb.com/news/us-china-ai-talks-september",
      summary: "据路透社援引知情人士，中美计划 9 月举行新一轮 AI 会谈，美方由财政部长 Bessent 领导，预计在习近平 9 月 24 日访美前举行。议程或涉及 AI 安全与治理、前沿模型监管，芯片出口管制虽未必列入正式议程，但势将笼罩会谈。",
      impact: {
        direction: "中性",
        companies: "英伟达、AMD等半导体及AI公司",
        industry: "AI、半导体",
        logic: "若出口管制出现缓和信号，或缓解半导体供应链与AI硬件估值压力"
      }
    }
  ],

  /* ============ 六、当日最值得关注的 3 个交易逻辑 ============ */
  logics: [
    { title: "长债利率回落，成长股估值压力边际缓解但结构分化",
      text: "财政部扩大长债回购推动30年期美债收益率自19年高位回落，黄金突破4500美元，前期压制高估值成长股的贴现率压力边际缓解。但反弹集中在现金流稳健的大型科技龙头（苹果、亚马逊、特斯拉），而非前期涨幅最大的半导体，说明资金仍在避险而非全面risk-on。" },
    { title: "半导体与大型科技的“跷跷板”分化加剧",
      text: "8月19日费城半导体指数跌2.12%，博通跌4.61%、AMD跌3.71%，而苹果涨2.19%、亚马逊涨2.46%、特斯拉涨4.23%。资金从估值高企的AI硬件/存储切换至盈利确定性更强的大型科技平台，板块内部轮动明显，是判断短期风格的关键信号。" },
    { title: "存储涨价周期见顶担忧主导，回购利好难扭转",
      text: "SK海力士抛出40万亿韩元回购且Q2业绩创新高，仍未能扭转存储股弱势，闪迪、希捷、西部数据继续下挫。市场开始为“存储涨价周期接近尾声”定价，前期涨幅最大的存储成为获利了结重点，需紧盯存储价格与AI需求持续性的拐点信号。" }
  ],

  /* ============ 七、未来 1—3 个交易日关注事项（具体事件） ============ */
  watchlist: [
    { date: "08月25日", event: "Zoom Communications 财报（盘后）", impact: "AI SaaS 与企业软件需求信号" },
    { date: "08月26日", event: "NVIDIA 2027财年Q2财报（盘后）", impact: "AI 芯片需求与数据中心资本开支的风向标，将定调整个 AI 硬件板块" },
    { date: "08月26日", event: "Salesforce 财报（盘后，预计）", impact: "企业 AI 软件需求与云计算支出信号" },
    { date: "08月27—29日", event: "Jackson Hole 全球央行年会，美联储主席 Warsh 8月28日发表讲话", impact: "关注对通胀、长债利率与货币政策路径的表态" },
    { date: "09月初", event: "中美 AI 会谈（美方由财政部长 Bessent 领导，预计在习近平9月24日访美前举行）", impact: "或涉及芯片出口管制、AI 安全与前沿模型监管，影响半导体供应链预期" },
    { date: "09月02日", event: "Broadcom 财报（盘后，预计）", impact: "AI 定制芯片(ASIC)与数据中心网络需求信号" }
  ],

  /* ============ 八、页脚免责声明 ============ */
  disclaimer:
    "本报告基于公开市场信息整理，仅供华泰期货内部研究参考，不构成任何投资建议。股价数据以交易所官方为准；新闻以原始来源（SEC / 白宫 / BIS / Reuters / Bloomberg 等）为准。投资有风险，决策需谨慎。"
};
