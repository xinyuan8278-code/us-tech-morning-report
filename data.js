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
    reportDate: "2026年09月02日",   // 报告发布日期
    tradeDate: "2026年09月01日",    // 对应美股交易日（前一交易日）
    author: "华泰期货 · 研究",
    tag: "每日市场跟踪"
  },

  /* ============ 二、市场概览 ============ */
  overview: {
    /* 简短概括：指数变化 + 个股变化 + 重大事件 */
    text: "9月1日美股科技股普跌：美伊冲突升级、美军新一轮空袭伊朗推升油价（WTI+5.2%、布油+4.6%），叠加美联储鹰派信号，10年期美债收益率创2025年1月以来新高、9月加息概率升至65%，压制高估值科技股。道指-0.79%、纳指-1.03%、标普-0.71%、费半-2.10%。存储/半导体领跌（美光-2.64%、AMD-2.36%）；苹果+2.61%（Ternus正式接任CEO）逆势领涨；戴尔盘后因AI服务器业绩创纪录大涨约8%。",
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
    { name: "NVIDIA",    code: "NVDA",  change: "-0.00%", driver: "美债收益率上行压制AI高估值，随半导体板块回调跌1.51%" },
    { name: "Microsoft", code: "MSFT",  change: "-0.00%", driver: "大型科技随利率上行承压，油价推升通胀与加息担忧，跌1.24%" },
    { name: "Apple",     code: "AAPL",  change: "-0.00%", driver: "John Ternus正式接任CEO（15年来首次换帅）、库克转任执行主席，9/9新品发布会临近，逆势涨2.61%" },
    { name: "Amazon",    code: "AMZN",  change: "-0.00%", driver: "油价上涨推升成本与通胀担忧，大型科技集体回调，跌1.87%" },
    { name: "Alphabet",  code: "GOOGL", change: "-0.00%", driver: "大型科技获利回吐，高估值受长端收益率压制，跌1.28%" },
    { name: "Meta",      code: "META",  change: "-0.00%", driver: "大型科技中相对抗跌，逆势小幅上涨1.08%" },
    { name: "Broadcom",  code: "AVGO",  change: "-0.00%", driver: "定制ASIC相对抗跌微跌0.18%，9/2盘后Q3财报临近市场观望" },
    { name: "AMD",       code: "AMD",   change: "-0.00%", driver: "半导体板块集体回调，二线AI算力股受美债收益率压制领跌2.36%" },
    { name: "Micron",    code: "MU",    change: "-0.00%", driver: "存储板块高位获利回吐、前期涨幅过大，领跌半导体跌2.64%" },
    { name: "Sandisk",   code: "SNDK",  change: "-0.00%", driver: "前日MSCI纳入被动买盘大涨5.5%后获利回吐，存储股集体回落跌1.90%" }
  ],

  /* ============ 五、重要科技与政策新闻（一手来源） ============ */
  news: [
    {
      title: "美伊冲突再度升级：美军新一轮空袭伊朗革命卫队，油价大涨、WTI创5周新高",
      originalTitle: "Oil prices settle up more than $4 a barrel on renewed US-Iran fighting",
      source: "路透社（Reuters，经 Euronext Live 转载）",
      time: "2026年09月01日",
      type: "财经媒体",
      url: "https://live.euronext.com/en/financial-news/oil-prices-settle-more-4-barrel-renewed-us-iran-fighting",
      link: "https://live.euronext.com/en/financial-news/oil-prices-settle-more-4-barrel-renewed-us-iran-fighting",
      summary: "美军中央司令部9月1日美东时间12时对伊朗境内伊斯兰革命卫队目标发动新一轮空袭，称此前革命卫队企图袭击霍尔木兹海峡商船及美军人员。特朗普称打击'正当'，若伊朗报复将'以更强、更高层级'回击。布伦特原油+4.6%收94.65美元、WTI+5.2%收90.22美元，均创约5周新高；霍尔木兹海峡可见商船降至每日5艘，柴油期货创52个月新高。",
      impact: {
        direction: "利空",
        companies: "全市场、高估值成长股",
        industry: "地缘政治、油价、通胀",
        logic: "油价上行重燃通胀担忧、推升长端美债收益率，压制高估值科技股贴现率，能源股逆势走强"
      }
    },
    {
      title: "全球债市遭'完美风暴'：10年期美债收益率创2025年1月以来新高，9月加息概率升至65%",
      originalTitle: "Bond Yields Surge as Oil Prices Fuel Inflation Worries — Update",
      source: "华尔街日报/道琼斯新闻（经 Morningstar 转载）",
      time: "2026年09月01日",
      type: "财经媒体",
      url: "https://www.morningstar.com/news/dow-jones/202609012083/bond-yields-surge-as-oil-prices-fuel-inflation-worries-update",
      link: "https://www.morningstar.com/news/dow-jones/202609012083/bond-yields-surge-as-oil-prices-fuel-inflation-worries-update",
      summary: "美伊冲突推升通胀预期，叠加美联储主席沃什上周杰克逊霍尔鹰派讲话，全球债市遭抛售：10年期美债收益率升至4.79%（2025年1月以来新高），日本10年国债破3%创30年新高，德国10年3.364%、英国30年国债创1998年来新高。货币市场定价美联储9月16日加息25bp概率升至65%（沃什讲话前仅约三分之一）。",
      impact: {
        direction: "利空",
        companies: "全市场、AI高估值股",
        industry: "利率、通胀、债券市场",
        logic: "长端收益率上行直接压制长久期高估值资产，AI板块从财报驱动转向验证驱动"
      }
    },
    {
      title: "美联储理事巴尔放鹰：若通胀降温不足将'果断加息'，9月加息押注升温",
      originalTitle: "US Fed's Michael Barr warns central bank may need to raise rates if inflation stays high",
      source: "路透社（Reuters，经 The Economic Times 转载）",
      time: "2026年09月01日",
      type: "财经媒体",
      url: "https://m.economictimes.com/markets/us-stocks/wall-street-guide/us-feds-michael-barr-warns-central-bank-may-need-to-raise-rates-if-inflation-stays-high/amp_articleshow/133688340.cms",
      link: "https://m.economictimes.com/markets/us-stocks/wall-street-guide/us-feds-michael-barr-warns-central-bank-may-need-to-raise-rates-if-inflation-stays-high/amp_articleshow/133688340.cms",
      summary: "美联储理事巴尔在Second Chance Lending论坛预讲稿中表示，'通胀已连续五年多过高'，若通胀未显示足够降温迹象，'应果断加息'；若数据趋势表明通胀正朝2%回落，则可多花时间评估。他指出AI投资支撑经济、就业稳定，但整体通胀3.7%、核心3.3%仍远超2%目标。巴尔为FOMC永久投票委员，其鹰派表态进一步推升市场对9月加息的押注。",
      impact: {
        direction: "利空",
        companies: "全市场、成长股",
        industry: "货币政策、利率",
        logic: "美联储内部鹰派声音增强，9月15-16日FOMC前通胀数据（9/11 CPI）成为是否加息的关键依据"
      }
    },
    {
      title: "戴尔Q2财报创纪录：AI服务器订单609亿美元、积压950亿，全年营收指引上调250亿至1920亿，盘后大涨",
      originalTitle: "Dell Technologies Delivers Second Quarter Fiscal 2027 Financial Results",
      source: "戴尔科技官方投资者关系（investors.delltechnologies.com）",
      time: "2026年09月01日",
      type: "官方",
      url: "https://investors.delltechnologies.com/news-releases/news-release-details/dell-technologies-delivers-second-quarter-fiscal-2027-financial",
      link: "https://investors.delltechnologies.com/news-releases/news-release-details/dell-technologies-delivers-second-quarter-fiscal-2027-financial",
      summary: "戴尔2027财年Q2（截至7/31）营收470亿美元、同比+58%创纪录，非GAAP每股收益7.04美元（预期约4.90美元）。AI优化服务器营收164亿美元、同比+100%，当季AI服务器订单609亿美元、季末积压950亿美元均创新高。公司将全年营收指引由1670亿上调250亿至1920亿美元（同比+69%），AI服务器全年指引由600亿上调至740亿美元。盘后股价一度大涨约8-11%。",
      impact: {
        direction: "利好",
        companies: "戴尔、英伟达、存储、服务器链",
        industry: "AI基础设施、数据中心",
        logic: "AI资本开支仍在加速兑现、验证AI硬件需求成色，与当日半导体股价回调形成背离，或为9/2芯片股提供支撑"
      }
    },
    {
      title: "苹果正式换帅：John Ternus接任CEO（15年来首次），库克转任执行主席，股价逆势涨2.6%",
      originalTitle: "Why Is Apple Stock Up Today?",
      source: "The Motley Fool",
      time: "2026年09月01日",
      type: "行业媒体",
      url: "https://www.fool.com/investing/2026/09/01/why-is-apple-stock-up-today",
      link: "https://www.fool.com/investing/2026/09/01/why-is-apple-stock-up-today",
      summary: "苹果9月1日完成15年来首次CEO更迭：硬件工程高级副总裁John Ternus正式接替蒂姆·库克出任第八任CEO，库克转任董事会执行主席并继续负责与全球政策制定者沟通（苹果4月20日已公布该接班计划）。Ternus上任首场大考为9月9日秋季发布会，预计推出iPhone 18及首款折叠屏iPhone。苹果当日逆势涨2.61%。",
      impact: {
        direction: "利好",
        companies: "苹果、消费电子",
        industry: "管理层变更、产品周期",
        logic: "换帅落地消除不确定性，市场聚焦9/9新品能否支撑其高估值（Rosenblatt目标价303美元仍低于现价）"
      }
    },
    {
      title: "半导体/存储普跌：美债收益率上行压制AI高估值，费半跌逾2%、美光/AMD领跌",
      originalTitle: "Stock Market Today, Sept. 1: Intel Falls on Chip Stock Pressure",
      source: "Nasdaq / The Motley Fool",
      time: "2026年09月01日",
      type: "财经媒体",
      url: "https://www.nasdaq.com/articles/stock-market-today-sept-1-intel-falls-chip-stock-pressure",
      link: "https://www.nasdaq.com/articles/stock-market-today-sept-1-intel-falls-chip-stock-pressure",
      summary: "美债收益率上行、通胀与9月加息预期升温，压制高估值半导体股：费城半导体指数跌2.14%，AMD-2.36%、高通-2.27%、阿斯麦-1.82%、闪迪-1.90%、英伟达-1.51%、英特尔-0.60%。存储股（美光-2.64%）高位获利回吐。英特尔近期200亿美元股权增发引发稀释担忧，但代工亏损已开始收窄。",
      impact: {
        direction: "利空",
        companies: "半导体、存储、英伟达、AMD、美光",
        industry: "利率、估值",
        logic: "高估值半导体对利率最敏感，宏观（利率+通胀）成为短期主导变量，需待9/11 CPI与9/15-16 FOMC明朗"
      }
    }
  ],

  /* ============ 六、当日最值得关注的 3 个交易逻辑 ============ */
  logics: [
    { title: "地缘与利率重回主导：美伊冲突→油价→通胀预期→美债收益率创新高→压制高估值科技股",
      text: "美伊时隔数日再度交火，美军新一轮空袭伊朗革命卫队，WTI+5.2%、布油+4.6%均创5周新高，重燃通胀担忧；叠加沃什鹰派讲话与巴尔'果断加息'表态，10年期美债收益率升至4.79%（2025年1月以来新高），9月加息概率升至65%。长端收益率与油价双升直接压制长久期高估值资产，资金从半导体/存储撤向能源，科技股整体承压。" },
    { title: "AI硬件需求验证与股价回调背离：戴尔AI服务器订单/积压创新高、上调全年指引",
      text: "戴尔盘后财报显示AI服务器订单609亿、积压950亿美元均创纪录，全年营收指引一次性上调250亿美元至1920亿、AI服务器指引上调至740亿，印证AI资本开支仍在加速兑现。这与当日半导体板块因利率担忧而集体回调形成鲜明背离，提示宏观（利率）短期主导股价，但产业基本面（AI需求）依然强劲，或为回调后的芯片股提供支撑。" },
    { title: "存储高位整固：超级周期基本面未变，但前期涨幅过大引发获利回吐",
      text: "美光-2.64%、闪迪-1.90%，存储成为当日半导体重灾区。闪迪前日因MSCI纳入被动买盘大涨5.5%、年内累计涨幅巨大，资金在高位集中止盈；美光同样面临前期涨幅过大后的技术性回吐。存储'量价齐升'超级周期（AI数据中心NAND/DRAM涨价、供给受限）基本面未变，短期回调更多是估值与筹码层面的整固，需观察9/30美光Q4财报验证。" }
  ],

  /* ============ 七、未来 1—3 个交易日关注事项（具体事件） ============ */
  watchlist: [
    { date: "09月02日", event: "博通（Broadcom）2026财年Q3财报（盘后），AI定制芯片约160亿美元营收指引为焦点", impact: "检验AI定制芯片与网络设备需求成色，以及联发科借英伟达NVLink Fusion挑战下定制芯片竞争格局" },
    { date: "09月04日", event: "美国劳工部8月非农就业报告（NFP）", impact: "美联储9月FOMC前最具决定性的就业数据，定调加息路径，直接影响科技成长股贴现率" },
    { date: "09月07日", event: "美国劳动节（Labor Day），美股休市", impact: "长假前资金趋于谨慎，短期波动或收敛" },
    { date: "09月09日", event: "苹果秋季发布会，预计发布iPhone 18及首款折叠屏iPhone", impact: "John Ternus接任CEO后首场产品大考，检验苹果AI与硬件创新能否支撑高估值" },
    { date: "09月11日", event: "美国8月CPI（消费者价格指数）数据", impact: "9月FOMC前最关键通胀数据，直接决定是否加息，市场押注9月加息概率约65%" },
    { date: "09月15-16日", event: "美联储FOMC议息会议", impact: "市场定价9月加息25bp概率约65%，影响高估值成长股估值锚" },
    { date: "09月30日", event: "美光科技（Micron）Q4财报", impact: "存储涨价周期与HBM供需的关键验证，影响存储板块（美光、闪迪）定价" }
  ],

  /* ============ 八、页脚免责声明 ============ */
  disclaimer:
    "本报告基于公开市场信息整理，仅供华泰期货内部研究参考，不构成任何投资建议。股价数据以交易所官方为准；新闻以原始来源（SEC / 白宫 / BIS / Treasury / BEA / Reuters / Bloomberg 等）为准。投资有风险，决策需谨慎。"
};
