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
    reportDate: "2026年08月19日",   // 报告发布日期
    tradeDate: "2026年08月18日",    // 对应美股交易日（前一交易日）
    author: "华泰期货 · 研究",
    tag: "每日市场跟踪"
  },

  /* ============ 二、市场概览 ============ */
  overview: {
    /* 简短概括：指数变化 + 个股变化 + 重大事件 */
    text: "8月18日美股三大指数连续第三日收跌：纳指跌1.33%、标普500跌0.69%，费城半导体指数重挫近5%。个股方面，存储芯片领跌，闪迪、美光跌幅居前，Meta、英伟达走弱，苹果、微软逆势微涨。主要利空：30年期美债收益率升至19年新高、AI债务融资担忧升温、美伊僵局推升油价。",
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
      name: "闪迪 Sandisk", code: "SNDK",
      direction: "超跌",           // 超涨 / 超跌（留空则不显示本条）
      change: "-0.00%",
      fiveDay: "近5个交易日累计上涨约27.9%，前期涨幅过大后遭获利回吐",
      newHighLow: "距52周高点已回落约31%，未创阶段新高",
      volume: "换手率约12.7%，成交量明显放大",
      reason: "存储芯片价格周期见顶担忧升温，叠加AI硬件板块整体抛售，前期涨幅最大的存储股成为资金获利了结重点对象",
      impact: "短期或延续调整，需观察存储价格走势与AI需求持续性"
    },
    {
      name: "美光科技 Micron", code: "MU",
      direction: "超跌",
      change: "-0.00%",
      fiveDay: "近5个交易日累计上涨约8.3%，此前连续走强后单日大跌",
      newHighLow: "距52周高点回落约25%",
      volume: "换手率约3.3%，成交量明显放大",
      reason: "长债利率飙升打压高估值成长股，市场对存储芯片涨价周期能否延续产生分歧",
      impact: "关注存储价格周期拐点信号与AI相关存储需求指引"
    },
    {
      name: "Meta Platforms", code: "META",
      direction: "超跌",
      change: "-0.00%",
      fiveDay: "近5个交易日累计下跌约9.3%",
      newHighLow: "距52周高点回落约31%",
      volume: "量比约2.04，成交量明显放大",
      reason: "AI资本开支债务融资担忧升温，叠加加州法院社交媒体儿童伤害案开庭陈词，大型科技股普遍承压",
      impact: "关注后续AI资本开支指引与反垄断诉讼进展"
    }
  ],

  /* ============ 四、重点公司行情表 ============ */
  /* 超涨/超跌个股放最上方；无新闻的公司驱动因素简要说明即可 */
  stocks: [
    { name: "Sandisk",   code: "SNDK",  change: "-0.00%", driver: "存储芯片价格周期见顶担忧，前期大涨后获利回吐" },
    { name: "Micron",    code: "MU",    change: "-0.00%", driver: "长债利率飙升 + 存储需求见顶担忧，高估值遭抛售" },
    { name: "Meta",      code: "META",  change: "-0.00%", driver: "AI资本开支债务风险定价，叠加反垄断诉讼开庭" },
    { name: "AMD",       code: "AMD",   change: "-0.00%", driver: "费城半导体指数30只成分股全数下跌" },
    { name: "NVIDIA",    code: "NVDA",  change: "-0.00%", driver: "AI硬件股遭抛售，但相对板块抗跌" },
    { name: "Microsoft", code: "MSFT",  change: "-0.00%", driver: "云计算韧性，大型科技中逆势微涨" },
    { name: "Apple",     code: "AAPL",  change: "-0.00%", driver: "避险资金流入，大型科技中逆势收红" },
    { name: "Amazon",    code: "AMZN",  change: "-0.00%", driver: "大盘拖累小幅收跌" },
    { name: "Alphabet",  code: "GOOGL", change: "-0.00%", driver: "基本平收，表现相对稳健" },
    { name: "Broadcom",  code: "AVGO",  change: "-0.00%", driver: "费城半导体指数下跌，AI芯片板块回调" }
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
      summary: "财政部宣布将 10—20 年期、20—30 年期名义附息国债的流动性支持回购单次上限从 20 亿美元提高至至少 40 亿美元（至少翻倍），9 月 9 日生效、持续至 11 月 4 日。此举直接回应本周 30 年期美债收益率升至 2007 年以来新高（5.33%）的长债抛售，官方定位为流动性支持（使用 TGA 存量资金、不扩表，非 QE）。11 月 4 日季度再融资会议将披露后续回购规模。",
      impact: {
        direction: "利好",
        companies: "高久期成长股（AI、半导体）",
        industry: "利率、国债市场",
        logic: "财政部为长端注入流动性、压制长债收益率上行，缓解高估值科技股的贴现率压力，被市场视为“财政版收益率曲线控制”信号"
      }
    },
    {
      title: "30年期美债收益率创19年新高，全球长端利率重定价",
      originalTitle: "Tech selloff weighs down Wall Street as bond yields climb",
      source: "Reuters",
      time: "2026年08月18日",
      type: "财经媒体",
      url: "https://www.detroitnews.com/story/business/2026/08/18/tech-stocks-weigh-on-wall-street-as-iran-stalemate-lifts-oil-yields/91351153007/",
      link: "https://www.detroitnews.com/story/business/2026/08/18/tech-stocks-weigh-on-wall-street-as-iran-stalemate-lifts-oil-yields/91351153007/",
      summary: "30 年期美债收益率升至 2007 年以来最高（盘中 5.33%）、10 年期触及 2025 年 1 月以来最高，日本、德国、法国长债收益率同步升至多年高位。美伊谈判停滞推升油价至 91 美元附近，加剧通胀与融资成本担忧，成为高估值科技股估值承压的核心驱动。",
      impact: {
        direction: "利空",
        companies: "英伟达、美光、闪迪等高久期芯片股",
        industry: "利率、半导体",
        logic: "长端利率上行抬高成长股折现率，AI 硬件作为“久期最长”板块对贴现率最敏感"
      }
    },
    {
      title: "AI债务融资担忧升温，今年AI相关债券供给已达4890亿美元",
      originalTitle: "U.S. Tech Stocks Slip as Bond Yields Hit Decade Highs; Iran Truce Expires",
      source: "WSJ / Dow Jones Newswires",
      time: "2026年08月18日",
      type: "财经媒体",
      url: "https://www.tradingview.com/news/DJN_DN20260818006761:0",
      link: "https://www.tradingview.com/news/DJN_DN20260818006761:0",
      summary: "巴克莱指出，今年市场变化在于 AI 相关企业借贷的规模与期限。科技巨头大量发行长债融资建设数据中心、采购芯片，与政府发债争夺资金。高盛数据显示今年迄今 AI 相关债券供给已达 4890 亿美元，远超 2025 全年的 3220 亿美元，AI 资本开支的债务可持续性成为新的定价变量。",
      impact: {
        direction: "利空",
        companies: "大型科技公司（Meta、微软、亚马逊等）",
        industry: "AI基础设施、数据中心",
        logic: "AI 债务供给激增推升长期利率，挤压成长股估值并引发债务风险定价"
      }
    },
    {
      title: "存储芯片涨价周期见顶担忧，龙头遭获利回吐",
      originalTitle: "Sinking AI stocks pull Wall Street further from its record",
      source: "AP（美联社）",
      time: "2026年08月18日",
      type: "财经媒体",
      url: "https://www.barchart.com/story/news/3896930/sinking-ai-stocks-pull-wall-street-further-from-its-record",
      link: "https://www.barchart.com/story/news/3896930/sinking-ai-stocks-pull-wall-street-further-from-its-record",
      summary: "美光、闪迪、SK 海力士等存储龙头前期大涨后集体跳水。市场担忧 AI 带动的存储需求与涨价周期接近尾声，叠加高估值压力触发获利了结；但长期客户协议与数据中心需求仍支撑行业基本面，机构对存储价格周期是否见顶存在分歧。",
      impact: {
        direction: "利空",
        companies: "美光、闪迪、SK海力士、西部数据",
        industry: "存储芯片",
        logic: "存储涨价周期见顶担忧叠加高估值，触发资金获利了结"
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
    { title: "长债利率飙升至19年新高，成长股估值遭重定价",
      text: "30年期美债收益率盘中触及5.337%，为2007年6月以来最高，10年期升至4.75%。AI硬件股是美股市场“久期最长”的板块，盈利兑现被定价在数年之后，对贴现率上升最为敏感。利率每上一个台阶，高估值成长股的估值折现压力就越大，这是本次科技股领跌的根本原因。" },
    { title: "AI债务融资风险成为市场新的定价变量",
      text: "高盛数据显示，今年迄今AI相关债券供给已达4890亿美元，远超2025全年的3220亿美元。科技巨头大规模发行长债融资建设数据中心，与主权债券争夺资金，推升长期利率并挤占实体经济融资。市场开始为AI资本开支的债务可持续性定价，这是与前期“AI无限想象”叙事的关键转变。" },
    { title: "存储芯片涨价周期见顶担忧，前期涨幅遭获利回吐",
      text: "闪迪、美光、SK海力士等存储龙头前期大幅上涨后集体跳水，闪迪单日跌9.01%、美光跌7.02%。尽管AI带动的存储需求与长期客户协议仍支撑基本面，但市场对存储价格周期见顶的担忧升温，叠加高估值压力，触发资金获利了结。" }
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
