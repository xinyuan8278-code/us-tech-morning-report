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
    reportDate: "2026年09月14日",   // 报告发布日期（周一）
    tradeDate: "2026年09月11日",    // 对应美股交易日（前一交易日，周五）
    author: "华泰期货 · 研究",
    tag: "每日市场跟踪"
  },

  /* ============ 二、市场概览 ============ */
  overview: {
    /* 简短概括：指数变化 + 个股变化 + 重大事件 */
    text: "9月11日美股三大指数终结四连跌：纳指+0.96%、标普+0.86%、道指+0.98%，费半+1.8%。8月CPI整体符合预期、核心同比降至64个月新低2.4%，油价回落（WTI破100美元）推动风险偏好修复，9月加息概率升至约87%。AI硬件领涨（戴尔+12%、AMD+2.5%），存储分化（闪迪-3.5%）。",
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
      direction: "超跌",
      change: "-0.00%",
      fiveDay: "9/9盘中创阶段新高1807.22 → 9/10收1692.59（-4.06%）→ 9/11收1633.35（-3.50%），自高点两日回落约9.6%",
      newHighLow: "9/9盘中触及1807.22阶段新高后连续两日回落，9/11收1633.35为近一周低点",
      volume: "明显放大，9/11成交937.1万股，较前一交易日（873.7万股）放大约7.3%，放量下跌",
      reason: "NAND存储高位获利了结延续，闪迪（-3.50%）、希捷（-3%）、西部数据（-3%）与AI硬件普涨（戴尔+12%、AMD+2.5%）走势背离；戴尔财报指出DRAM/NAND仍是最大供应瓶颈，短期涨价预期已部分兑现",
      impact: "存储超级周期长期逻辑未变，但NAND高位品种对利率与获利了结更敏感；需以9/30美光财报验证涨价周期持续性"
    }
  ],

  /* ============ 四、重点公司行情表 ============ */
  /* 超涨/超跌个股放最上方；无新闻的公司驱动因素简要说明即可 */
  stocks: [
    { name: "Sandisk",   code: "SNDK",  change: "-0.00%", driver: "NAND存储获利回吐延续，跌3.50%至1633.35美元，与AI硬件普涨走势背离（超跌提示）" },
    { name: "NVIDIA",    code: "NVDA",  change: "-0.00%", driver: "科技七巨头中表现最弱，微跌0.03%至218.29美元；戴尔称已率先出货基于NVIDIA Vera Rubin平台的机架系统" },
    { name: "Microsoft", code: "MSFT",  change: "-0.00%", driver: "大型软件股随大盘反弹，涨0.65%至495.63美元" },
    { name: "Apple",     code: "AAPL",  change: "-0.00%", driver: "折叠屏iPhone Duo热度延续，涨1.74%至332.27美元；iPhone 18 Pro于9/12开启预订" },
    { name: "Amazon",    code: "AMZN",  change: "-0.00%", driver: "可选消费板块领涨，涨1.94%至256.78美元" },
    { name: "Alphabet",  code: "GOOGL", change: "-0.00%", driver: "通信服务板块领涨，涨1.77%至338.50美元" },
    { name: "Meta",      code: "META",  change: "-0.00%", driver: "大型科技普涨，涨0.57%至648.03美元，AI商业化叙事获支撑" },
    { name: "Broadcom",  code: "AVGO",  change: "-0.00%", driver: "定制ASIC随半导体反弹，涨0.32%至361.99美元" },
    { name: "AMD",       code: "AMD",   change: "-0.00%", driver: "AI算力股反弹领涨半导体，涨2.49%至516.13美元；Oracle/戴尔财报验证AI资本开支" },
    { name: "Micron",    code: "MU",    change: "-0.00%", driver: "DRAM存储企稳，微跌0.22%至975.26美元；戴尔称DRAM/NAND仍是供应瓶颈支撑涨价逻辑" }
  ],

  /* ============ 五、重要科技与政策新闻（一手来源） ============ */
  news: [
    {
      title: "美国8月CPI环比+0.4%符合预期，核心同比降至64个月新低2.4%，9月加息概率升至约87%",
      originalTitle: "CPI for all items increases 0.4% in August; gasoline rises",
      source: "美国劳工统计局 BLS（官方）",
      time: "2026年09月11日",
      type: "官方",
      url: "https://www.bls.gov/cpi/news.htm",
      link: "https://www.bls.gov/cpi/news.htm",
      summary: "美国劳工统计局9/11公布，8月CPI环比+0.4%（7月+0.1%）、同比+3.4%与7月持平，均符合预期；汽油环比+3.9%贡献逾三分之一涨幅；核心CPI环比+0.3%（高于预期0.2%）、同比+2.4%（前值2.5%，创64个月新低）。数据为9月FOMC前最后一份主要通胀指标，CME FedWatch显示9月15-16日加息25bp概率升至约87-90%。",
      impact: {
        direction: "中性偏利空",
        companies: "全市场、高估值长久期成长股",
        industry: "利率、通胀、货币政策",
        logic: "核心环比略热强化9月加息预期、推升无风险收益率，但核心同比回落叠加油价缓和缓解通胀恐慌"
      }
    },
    {
      title: "油价周五回落：WTI跌破100美元、布伦特回落至104美元，中东外长寻求霍尔木兹临时安排",
      originalTitle: "Oil prices poised to end week above $100 for first time since May",
      source: "Reuters（路透社，经 Offshore Technology 转载原文）",
      time: "2026年09月11日",
      type: "财经媒体",
      url: "https://finance.yahoo.com/energy/articles/oil-prices-poised-end-week-105344992.html",
      link: "https://finance.yahoo.com/energy/articles/oil-prices-poised-end-week-105344992.html",
      summary: "周五WTI收跌约1.8%至100.60美元、布伦特跌约2.5%至104.32美元，本周仍累涨逾10%。《金融时报》报道中东外长正寻求与伊朗就霍尔木兹海峡航运达成临时安排，缓解供应中断担忧；此前胡塞武装控制也门莫卡港、霍尔木兹单日过境船舶降至7艘。油价回落缓解能源通胀与加息恐慌，成为美股反弹关键触发。",
      impact: {
        direction: "利好",
        companies: "全市场、高估值成长股",
        industry: "能源、通胀、地缘政治",
        logic: "油价回落缓解能源通胀与加息恐慌，推动风险偏好修复、科技股超跌反弹"
      }
    },
    {
      title: "美股科技板块反弹终结四连跌：纳指+0.96%、费半+1.8%，AI硬件领涨、存储分化",
      originalTitle: "Markets News, Sept. 11, 2026: Stocks Finish Week Lower; Indexes Jump Friday as Oil Prices Pull Back; CPI Inflation Matches Expectations",
      source: "Investopedia（英文财经媒体）",
      time: "2026年09月11日",
      type: "财经媒体",
      url: "https://www.investopedia.com/stock-market-today-dow-jones-s-and-p-500-09112026-12115543",
      link: "https://www.investopedia.com/stock-market-today-dow-jones-s-and-p-500-09112026-12115543",
      summary: "周五道指+0.98%、标普500+0.86%、纳指+0.96%，终结四连跌；通信服务、可选消费、信息技术领涨，HPE+12.4%、戴尔+12%。费半+1.8%，Intel、AMD涨约2.5%；存储分化，DRAM ETF+1%，闪迪-3.5%、希捷-3%、西部数据-3%。本周道指-1.6%、标普-0.8%、纳指-0.7%；10年期美债收益率盘中触及4.98%（2023年10月以来最高）。",
      impact: {
        direction: "中性偏利好",
        companies: "戴尔、HPE、AMD、Intel 等AI硬件",
        industry: "半导体、AI基础设施、存储",
        logic: "AI资本开支兑现主线领涨、终结四连跌，但周线仍收跌、存储分化显示高位品种获利了结压力"
      }
    },
    {
      title: "戴尔科技AI服务器积压达950亿美元、上调全年指引至1920亿美元，周五股价大涨近12%创历史新高",
      originalTitle: "Dell Technologies Delivers Second Quarter Fiscal 2027 Financial Results",
      source: "Dell Technologies 官方新闻稿（Business Wire）",
      time: "2026年09月11日",
      type: "官方",
      url: "https://investors.delltechnologies.com/news-releases/news-release-details/dell-technologies-delivers-second-quarter-fiscal-2027-financial",
      link: "https://investors.delltechnologies.com/news-releases/news-release-details/dell-technologies-delivers-second-quarter-fiscal-2027-financial",
      summary: "戴尔2027财年Q2营收470亿美元（+58%）、non-GAAP EPS 7.04美元（+203%）；AI优化服务器营收164亿（+100%）、单季订单609亿、季末积压950亿均创纪录；全年营收指引由1670亿上调至1920亿（+69%）、AI服务器指引由600亿上调至740亿。COO Jeff Clarke称DRAM/NAND仍是最大供应瓶颈。业绩叠加Oracle财报带动AI硬件，戴尔周五涨近12%至567.75美元创历史新高。",
      impact: {
        direction: "利好",
        companies: "戴尔、NVIDIA、AI服务器供应链",
        industry: "AI服务器、数据中心、存储",
        logic: "AI服务器订单与积压创新高、上调指引验证AI资本开支→营收兑现，驱动AI硬件估值修复"
      }
    },
    {
      title: "Oracle Q1财报：云基础设施收入+121%、RPO达6640亿美元，盘后大涨后周五回落近2%",
      originalTitle: "Oracle Announces Q1 Results Driven by Triple Digit Growth in Cloud Infrastructure Revenues",
      source: "Oracle 官方新闻稿 / SEC 8-K",
      time: "2026年09月10日",
      type: "官方",
      url: "https://investor.oracle.com/investor-news/news-details/2026/Oracle-Announces-Q1-Results-Driven-by-Triple-Digit-Growth-in-Cloud-Infrastructure-Revenues/default.aspx",
      link: "https://investor.oracle.com/investor-news/news-details/2026/Oracle-Announces-Q1-Results-Driven-by-Triple-Digit-Growth-in-Cloud-Infrastructure-Revenues/default.aspx",
      summary: "Oracle 2027财年Q1营收193亿美元（+30%），云基础设施收入+121%至74亿，本季新增AI云合同超300亿，剩余履约义务(RPO)升至6640亿（同比+2090亿）。Q1资本开支285亿致自由现金流转负（-54亿），并完成200亿美元股权增发。财报9/10盘后公布后大涨约7%，9/11盘中回落近2%，但持续提振AI基础设施情绪。",
      impact: {
        direction: "利好",
        companies: "Oracle、AI云与数据中心产业链",
        industry: "云计算、AI基础设施",
        logic: "云基础设施+121%、RPO 6640亿验证企业AI云需求强劲，但资本开支激增致自由现金流转负是潜在隐忧"
      }
    },
    {
      title: "密歇根大学9月消费者信心骤降至47.8历史次低，通胀预期升温，10年期美债收益率触及4.98%",
      originalTitle: "Stocks Post Relief Rally as Core CPI Plunges to 64-Month Low: Sept. 11, 2026",
      source: "Interactive Brokers（Traders Insight，英文财经媒体）",
      time: "2026年09月11日",
      type: "财经媒体",
      url: "https://www.interactivebrokers.com/campus/traders-insight/ibkr-economic-landscape/stocks-post-relief-rally-as-core-cpi-plunges-to-64-month-low/",
      link: "https://www.interactivebrokers.com/campus/traders-insight/ibkr-economic-landscape/stocks-post-relief-rally-as-core-cpi-plunges-to-64-month-low/",
      summary: "密歇根大学9月消费者信心初值降至47.8，远低于预期的51、也低于8月的51.7，创有记录以来第二低；1年期通胀预期由4.0%升至4.6%、5年期由3.3%升至3.4%，反映高油价与加息预期压制家庭信心。与此同时10年期美债收益率盘中触及4.98%（2023年10月以来最高），显示债市仍在定价通胀粘性与潜在加息。",
      impact: {
        direction: "利空",
        companies: "全市场、消费板块",
        industry: "通胀预期、消费者信心",
        logic: "消费者信心骤降叠加通胀预期升温强化滞胀担忧，与油价回落形成对冲，提示加息路径不确定性"
      }
    }
  ],

  /* ============ 六、当日最值得关注的 3 个交易逻辑 ============ */
  logics: [
    { title: "通胀数据“表面符合、核心回落”，市场在加息预期与风险偏好修复间摆动",
      text: "8月CPI整体同比+3.4%符合预期、核心同比降至64个月新低2.4%，但核心环比+0.3%略超预期；叠加油价周五回落（WTI跌破100美元），市场一面将9月加息概率上调至约87-90%，一面risk-on修复前期超跌，纳指终结四连跌。核心通胀回落+能源缓和暗示“通胀见顶”，是下跌市中的关键转折信号，9/16 FOMC是决定性变量。" },
    { title: "AI资本开支→营收兑现：Oracle与戴尔财报验证AI基础设施景气，驱动AI硬件领涨",
      text: "Oracle云基础设施收入+121%、RPO达6640亿美元，戴尔AI服务器积压950亿美元、全年指引上调至1920亿，共同验证AI资本开支正加速转化为营收，且预付款+订单结构缓解现金消耗担忧。这驱动戴尔(+12%)、HPE(+12%)、AMD(+2.5%)、Intel(+2.5%)领涨，成为高利率环境下科技股的新估值锚。" },
    { title: "存储板块内部分化：DRAM企稳、NAND回吐，供应瓶颈支撑长期涨价逻辑",
      text: "闪迪(-3.5%)、希捷(-3%)、西部数据(-3%)继续回吐，而美光(-0.22%)、SK海力士(+1%)企稳，DRAM与NAND走势分化。戴尔财报明确指出DRAM/NAND仍是最大供应瓶颈，支撑涨价逻辑；但高位品种对利率与获利了结更敏感，短期估值承压，需以9/30美光财报验证涨价周期持续性。" }
  ],

  /* ============ 七、未来 1—3 个交易日关注事项（具体事件） ============ */
  watchlist: [
    { date: "09月15-16日", event: "美联储FOMC议息会议（9月16日公布利率决议与经济预测）", impact: "市场定价9月加息25bp概率约87-90%，若落地为2023年来首次加息，直接锚定高估值成长股" },
    { date: "09月16日", event: "FOMC利率决议 + 主席沃什(Kevin Warsh)新闻发布会", impact: "点阵图与声明措辞决定年内是否再加息（市场定价年底前两次加息）" },
    { date: "09月30日", event: "美光科技（Micron）Q4财报", impact: "存储涨价周期与HBM供需的关键验证，影响DRAM/NAND板块定价" },
    { date: "09月底", event: "美国8月核心PCE通胀数据（BEA）", impact: "美联储2%目标最关注指标，核心PCE预计升至3.2%-3.3%" },
    { date: "近期", event: "中东霍尔木兹海峡航运临时安排谈判进展", impact: "决定油价与通胀预期走向，间接影响加息路径与风险偏好" }
  ],

  /* ============ 八、页脚免责声明 ============ */
  disclaimer:
    "本报告基于公开市场信息整理，仅供华泰期货内部研究参考，不构成任何投资建议。股价数据以交易所官方为准；新闻以原始来源（SEC / 白宫 / BIS / Treasury / BEA / BLS / Reuters 等）为准。投资有风险，决策需谨慎。"
};
