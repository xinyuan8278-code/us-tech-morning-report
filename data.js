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
    reportDate: "2026年08月25日",   // 报告发布日期
    tradeDate: "2026年08月24日",    // 对应美股交易日（前一交易日）
    author: "华泰期货 · 研究",
    tag: "每日市场跟踪"
  },

  /* ============ 二、市场概览 ============ */
  overview: {
    /* 简短概括：指数变化 + 个股变化 + 重大事件 */
    text: "8月24日美股涨跌分化，道指+0.26%、标普-0.28%、纳指-0.76%录得七连阴。半导体与存储板块重挫：费半-2.67%、美光-5.83%、闪迪-6.45%，英伟达-2.91%创2022年以来最长七连跌；大型科技内部分化，Meta+1.66%、亚马逊+1.33%领涨。驱动因素：长江存储49亿美元IPO加剧存储供给担忧、得州州长抨击数据中心、财政部拟动用近万亿TGA回购国债。本周聚焦英伟达财报、7月PCE与沃什杰克逊霍尔讲话。",
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
      name: "闪迪 SanDisk",
      code: "SNDK",
      direction: "超跌",
      change: "-0.00%",
      fiveDay: "8月17日创阶段高点1786.85后连续大幅回落，8月24日收1493.12，近5个交易日累计下跌约16.4%",
      newHighLow: "8月24日收于近5个交易日新低，跌破1500美元关口",
      volume: "8月24日成交1403万股，较前一日758万股明显放大约85%",
      reason: "年内涨幅一度约500%、投机盘密集，长江存储49亿美元IPO引发NAND供给过剩与存储周期见顶担忧，遭集中抛售",
      impact: "高波动存储交易延续，短期下行风险尚未释放完毕，关注企业级SSD需求与NAND价格拐点信号"
    },
    {
      name: "美光科技 Micron",
      code: "MU",
      direction: "超跌",
      change: "-0.00%",
      fiveDay: "8月17日创阶段高点1011.75后连续回落，8月24日收910.43，近5个交易日累计下跌约10.0%",
      newHighLow: "8月24日收于近5个交易日新低，回吐8月中旬以来大部分涨幅",
      volume: "8月24日成交3001万股，较前一日2182万股明显放大约37%",
      reason: "长江存储母公司49亿美元IPO获受理、中国存储扩产加剧供给过剩担忧，叠加前期大涨后获利回吐",
      impact: "存储高价周期遭「供给响应」质疑，短期或延续调整，关注英伟达财报与DRAM合约价走势"
    }
  ],

  /* ============ 四、重点公司行情表 ============ */
  /* 超涨/超跌个股放最上方；无新闻的公司驱动因素简要说明即可 */
  stocks: [
    { name: "Meta",      code: "META",  change: "-0.00%", driver: "大型科技中领涨+1.66%，AI广告与资本开支叙事支撑，防御性轮动中相对抗跌" },
    { name: "Amazon",    code: "AMZN",  change: "-0.00%", driver: "AWS与消费韧性，大型科技中逆势走强+1.33%" },
    { name: "Alphabet",  code: "GOOGL", change: "-0.00%", driver: "自研TPU+AI云，广告韧性，资金从AI硬件轮动至平台股，涨+0.94%" },
    { name: "Microsoft", code: "MSFT",  change: "-0.00%", driver: "云计算与AI稳健，大型科技中抗跌，涨+0.84%" },
    { name: "Apple",     code: "AAPL",  change: "-0.00%", driver: "消费电子防御属性凸显，微涨+0.32%" },
    { name: "Broadcom",  code: "AVGO",  change: "-0.00%", driver: "AI ASIC链随半导体板块回调，市场担忧AI资本开支债务化，跌-2.63%" },
    { name: "NVIDIA",    code: "NVDA",  change: "-0.00%", driver: "8/26盘后财报前避险，连续第七日下跌创2022年来最长连跌，跌-2.91%" },
    { name: "AMD",       code: "AMD",   change: "-0.00%", driver: "AI算力链随半导体板块回调，费半拖累，跌-3.49%" },
    { name: "Micron",    code: "MU",    change: "-0.00%", driver: "长江存储IPO加剧存储供给担忧，前期大涨后获利回吐，跌-5.83%（超跌）" },
    { name: "Sandisk",   code: "SNDK",  change: "-0.00%", driver: "存储投机盘出清，长江存储IPO+供给周期见顶担忧，年内涨幅过大，跌-6.45%（超跌）" }
  ],

  /* ============ 五、重要科技与政策新闻（一手来源） ============ */
  news: [
    {
      title: "长江存储母公司49亿美元IPO获受理，中国存储扩产冲击全球NAND供给",
      originalTitle: "China Chipmaker YMTC Seeks to Raise $4.9 Billion in Shanghai IPO",
      source: "Bloomberg（经 Yahoo Finance）",
      time: "2026年08月21日",
      type: "财经媒体",
      url: "https://finance.yahoo.com/technology/articles/china-chipmaker-ymtc-seeks-raise-144427520.html",
      link: "https://finance.yahoo.com/technology/articles/china-chipmaker-ymtc-seeks-raise-144427520.html",
      summary: "长江存储母公司CCSH申请在上交所科创板上市，拟募资至少330亿元（约49亿美元），上市申请已获上交所受理。招股书显示，公司2026年前三个月营收482亿元、净利润367亿元，较2025全年翻倍以上，受AI存储涨价推动；全球NAND价格预计同比上涨超250%。继长鑫存储（CXMT）7月完成亚洲最大IPO后，中国存储「双雄」相继资本化扩产，市场担忧高价周期引来供给响应，直接冲击美光、闪迪等NAND龙头。",
      impact: {
        direction: "利空",
        companies: "美光、闪迪、三星、SK海力士",
        industry: "存储芯片（NAND）",
        logic: "中国存储资本化扩产加剧NAND供给过剩与周期见顶担忧，压制存储股估值"
      }
    },
    {
      title: "财政部考虑动用近1万亿美元TGA支持国债回购，30年期收益率仍高于5%",
      originalTitle: "Treasury may tap $1 trillion cash account for bond buybacks",
      source: "CNBC（经 Quartz）",
      time: "2026年08月24日",
      type: "财经媒体",
      url: "https://qz.com/treasury-general-account-bond-buybacks-082426",
      link: "https://qz.com/treasury-general-account-bond-buybacks-082426",
      summary: "据CNBC援引两名财政部高级官员，财政部正考虑动用约9500亿美元的财政部一般账户（TGA）为扩大后的国债回购计划提供资金。上周财政部已宣布将10—30年期国债回购规模至少翻倍至每次40亿美元，但30年期收益率在短暂回落后重返5.2%上方，因市场质疑回购规模不足以改变32万亿美元国债市场的供需。若TGA落地将缓解长端利率压力，但也引发对财政部债务管理「非正规化」的争议。",
      impact: {
        direction: "中性",
        companies: "全市场、高久期科技成长股",
        industry: "利率、流动性",
        logic: "TGA动用或缓解长端利率压力，利好成长股贴现率，但规模与可持续性存疑"
      }
    },
    {
      title: "得州州长Abbott称数据中心「自掘坟墓」，AI基建政治阻力升温",
      originalTitle: "S&P 500, Nasdaq end down on tech stocks, investors weigh Iran moves",
      source: "Reuters（转引 Axios）",
      time: "2026年08月24日",
      type: "财经媒体",
      url: "https://finance.yahoo.com/markets/stocks/articles/p-500-nasdaq-end-down-204939190.html",
      link: "https://finance.yahoo.com/markets/stocks/articles/p-500-nasdaq-end-down-204939190.html",
      summary: "据Axios报道，得州州长Greg Abbott周日发出共和党人对AI行业迄今最严厉警告，称数据中心公司「自掘坟墓」，因未赢得社区支持而遭抵制。Abbott本月已下令暂停新数据中心项目接入州电网的审批，理由是电力需求激增可能威胁电网可靠性。此前纽约、宾夕法尼亚等州也已跟进限建。AI数据中心政治阻力上升，叠加英伟达服务器涨价推高总拥有成本，令市场重新审视AI基建的「社会许可证」与投资回报。",
      impact: {
        direction: "利空",
        companies: "英伟达、云厂商（微软/谷歌/亚马逊）",
        industry: "AI数据中心、电力",
        logic: "AI基建政治阻力与电力瓶颈上升，或拖累数据中心资本开支节奏"
      }
    },
    {
      title: "英伟达连续第七日下跌创2022年来最长连跌，财报前资金避险",
      originalTitle: "Stock Market Today, Aug. 24: Nvidia Extends Losses as Tech Stocks Retreat",
      source: "The Motley Fool（经 Nasdaq）",
      time: "2026年08月24日",
      type: "财经媒体",
      url: "https://www.nasdaq.com/articles/stock-market-today-aug-24-nvidia-extends-losses-tech-stocks-retreat",
      link: "https://www.nasdaq.com/articles/stock-market-today-aug-24-nvidia-extends-losses-tech-stocks-retreat",
      summary: "英伟达8月24日收跌2.9%，连续第七个交易日下跌，创2022年以来最长连跌纪录；自8月14日近期高点以来市值蒸发约12%。资金在8月26日盘后财报前主动降低风险，叠加周末报道称部分客户明年AI服务器或涨价15%，市场担忧价格上调可能导致云厂商推迟交付。英伟达财报成为本周全球市场最关键变量，任何增长放缓迹象都可能重新点燃AI估值担忧。",
      impact: {
        direction: "中性",
        companies: "英伟达及AI硬件链",
        industry: "AI芯片、数据中心",
        logic: "财报定调AI资本开支可持续性，前期避险情绪压制AI硬件板块"
      }
    },
    {
      title: "英伟达AI服务器明年涨价超15%，DRAM成本飙升沿供应链传导",
      originalTitle: "Nvidia reportedly warns biggest customers of 15% price hikes on AI servers — memory costs continue to soar",
      source: "Tom's Hardware（转引 Bloomberg）",
      time: "2026年08月23日",
      type: "行业媒体",
      url: "https://www.tomshardware.com/pc-components/dram/nvidia-reportedly-warns-biggest-customers-of-15-percent-price-hikes-on-ai-servers",
      link: "https://www.tomshardware.com/pc-components/dram/nvidia-reportedly-warns-biggest-customers-of-15-percent-price-hikes-on-ai-servers",
      summary: "据彭博援引知情人士，因DRAM成本飙升，英伟达已通知微软、谷歌、甲骨文等大客户：搭载其AI芯片的服务器价格将上涨超15%，明年年初出货的Vera Rubin与Grace Blackwell系统率先生效。这印证存储三巨头（三星、SK海力士、美光）的议价权，也意味着即便毛利率约75%的英伟达也不愿再自行消化成本。涨价推高AI数据中心总拥有成本，加剧市场对AI基建投资回报的担忧，与长江存储IPO共同构成存储股8月24日重挫的背景。",
      impact: {
        direction: "中性",
        companies: "英伟达、存储三巨头、云厂商",
        industry: "AI芯片、存储、数据中心",
        logic: "存储成本沿供应链传导，利好存储链、施压AI基建成本与ROI"
      }
    },
    {
      title: "沃什8月28日杰克逊霍尔发表主席首秀演讲，聚焦金融创新与利率路径",
      originalTitle: "Jackson Hole Is a Forum For Warsh's Fed Vision",
      source: "Barron's（经 TradingView Dow Jones）",
      time: "2026年08月22日",
      type: "财经媒体",
      url: "https://www.tradingview.com/news/DJN_DN20260821008689:0",
      link: "https://www.tradingview.com/news/DJN_DN20260821008689:0",
      summary: "美联储主席沃什将于8月28日（美东上午10点）在杰克逊霍尔年会发表上任后首次主旨演讲，今年主题为金融创新对支付与政策的影响。在30年期美债收益率触及2007年以来新高、联邦债务突破40万亿美元的背景下，市场关注沃什是否给出可验证的抗通胀反应函数；若仍停留在空泛承诺，长端利率或继续上行冲击成长股。财政部回购「药效」遭质疑，令市场对沃什讲话的依赖度进一步上升。",
      impact: {
        direction: "中性",
        companies: "全市场、高久期科技股",
        industry: "货币政策、利率",
        logic: "决定长端利率与成长股估值方向，市场定价对措辞高度敏感"
      }
    }
  ],

  /* ============ 六、当日最值得关注的 3 个交易逻辑 ============ */
  logics: [
    { title: "存储高价周期遭遇「供给响应」，前期涨幅最大的标的领跌",
      text: "长江存储母公司49亿美元IPO获受理、长鑫存储7月完成亚洲最大IPO，中国存储「双雄」相继资本化扩产，市场开始定价NAND供给过剩与周期见顶风险。8月24日跌幅最大的闪迪、美光恰是HBM及企业级SSD敞口最高、年内涨幅最大的标的，说明抛压集中在存储投机盘，资金从存储撤出、向确定性更高的算力龙头集中，板块内部剧烈分化。" },
    { title: "AI资本开支面临「政治 + 成本」双重逆风",
      text: "得州州长Abbott叫停约1800个数据中心项目、纽约/宾夕法尼亚等州跟进限建，AI基建的「社会许可证」正在收紧；与此同时英伟达AI服务器涨价超15%推高数据中心总拥有成本。两股力量叠加，令市场重新审视超大规模云厂商的资本开支节奏与投资回报，AI基建「债务化 + 循环融资」的脆弱点再度成为焦点，是本轮科技股调整的核心逻辑之一。" },
    { title: "长端利率仍是成长股估值的「总开关」",
      text: "财政部拟动用近1万亿美元TGA支持国债回购，但30年期收益率仍高于5%、联邦债务突破40万亿美元，长端抛压未除。本周英伟达财报（8/26）、7月PCE（8/26）与美联储主席沃什杰克逊霍尔讲话（8/28）三大事件将决定利率与AI两条主线的走向，高久期科技成长股的贴现率压力能否缓解，取决于长端能否有效回落。" }
  ],

  /* ============ 七、未来 1—3 个交易日关注事项（具体事件） ============ */
  watchlist: [
    { date: "08月26日", event: "美国7月PCE物价指数 + Q2 GDP终值（修订）", impact: "美联储首选通胀指标，决定9月FOMC政策路径定价" },
    { date: "08月26日", event: "NVIDIA 2027财年Q2财报（盘后）", impact: "AI芯片需求与数据中心资本开支风向标，定调AI硬件板块" },
    { date: "08月27日", event: "Marvell 2027财年Q2财报（盘后）", impact: "定制ASIC与AI光互连需求信号，检验高估值能否兑现" },
    { date: "08月28日", event: "Jackson Hole 全球央行年会：美联储主席沃什主旨演讲（美东上午10点）", impact: "关注对通胀、长债利率与货币政策路径的表态" },
    { date: "09月02日", event: "Broadcom 财报（盘后，预计）", impact: "AI定制芯片(ASIC)与数据中心网络需求信号" }
  ],

  /* ============ 八、页脚免责声明 ============ */
  disclaimer:
    "本报告基于公开市场信息整理，仅供华泰期货内部研究参考，不构成任何投资建议。股价数据以交易所官方为准；新闻以原始来源（SEC / 白宫 / BIS / Treasury / Reuters / Bloomberg 等）为准。投资有风险，决策需谨慎。"
};
