/**
 * ============================================================
 *  美股科技板块前一交易日行情日报 —— 数据文件（每日只需改这里）
 *  （2026-10-25 更新：对应美股交易日 2026-10-23）
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
    reportDate: "2026年10月25日",   // 报告发布日期（周日）
    tradeDate: "2026年10月23日",    // 对应美股交易日（前一交易日，周五）
    author: "华泰期货 · 研究",
    tag: "每日市场跟踪"
  },

  /* ============ 二、市场概览 ============ */
  overview: {
    /* 简短概括：指数变化 + 个股变化 + 重大事件 */
    text: "10月23日美股科技板块在周四暴跌后企稳分化：纳指-0.21%（收于25,955点，前一交易日创6月来最大单日跌幅）、标普500-0.52%、道指-1.23%（受美国运通裁员拖累）；费城半导体指数逆势反弹约0.4%~0.6%、标普科技板块+0.35%。大型科技股多数微跌（微软+0.7%、苹果-0.14%、英伟达-0.6%、Meta-1%、谷歌-1.24%），半导体多数收涨（AMD+1.7%、美光+2.5%、高通+1.8%、英特尔+1.7%）。核心变量为油价飙升——胡塞袭击沙特油田叠加美方「或周末打击伊朗」言论，布伦特原油+3.14%至116.72美元（近6个月新高），重燃通胀担忧并推升美债收益率；SpaceX洽谈收购逾8万座蜂窝基站进军第四大无线运营商，AT&T、T-Mobile重挫约8%。",
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
    { name: "NVIDIA",    code: "NVDA",  change: "-0.00%", driver: "下跌约0.6%，在前一日-4.40%后跌幅收窄、企稳；AI资本开支回报疑虑持续压制，但黄仁勋「neocloud需求爆棚」表态缓解部分恐慌，下周与Alphabet/微软/亚马逊财报共同成为算力需求验证窗口" },
    { name: "Microsoft", code: "MSFT",  change: "-0.00%", driver: "逆势上涨约0.7%，为大型科技股中领涨；市场聚焦其下周二盘后财报（AI超大规模厂商资本开支指引核心标的），Azure增长与Copilot变现预期提供支撑" },
    { name: "Apple",     code: "AAPL",  change: "-0.00%", driver: "微跌约0.14%，在周四逆势创新高后高位整固；因基本未参与AI基建竞赛、且首款折叠屏iPhone Duo刚刚发售，仍被视为AI波动下的相对避险品种" },
    { name: "Amazon",    code: "AMZN",  change: "-0.00%", driver: "下跌约0.95%，随大型科技整体走弱；下周盘后财报临近，市场聚焦其AWS增速与AI资本开支指引，前期TorchNeuron开源带动涨势回吐" },
    { name: "Alphabet",  code: "GOOGL", change: "-0.00%", driver: "下跌约1.24%，大型科技股中跌幅居前；下周二盘后财报临近，谷歌云与Gemini AI资本开支回报成为关注焦点，AI开支疑虑压制估值" },
    { name: "Meta",      code: "META",  change: "-0.00%", driver: "下跌约1%，Q3自由现金流上市以来首次转负引发的抛售有所缓和但未止跌；市场仍消化其资本开支上调至1350亿、拟发C类股募资对AI投入现金吞噬效应的担忧" },
    { name: "Broadcom",  code: "AVGO",  change: "-0.00%", driver: "下跌约0.5%，随费半窄幅波动；周四-4.31%后企稳，定制ASIC与数据中心网络需求叙事等待下周英伟达/大型科技财报验证" },
    { name: "AMD",       code: "AMD",   change: "-0.00%", driver: "反弹约1.7%，在周四-8.10%后超卖修复；半导体板块周五整体企稳，代理式AI算力与数据中心CPU需求预期阶段性回稳" },
    { name: "Micron",    code: "MU",    change: "-0.00%", driver: "反弹约2.5%，存储板块分化中领涨；周四-6.23%后超卖修复，HBM与数据中心存储需求逻辑仍受AI资本开支疑虑牵制，但短期情绪回暖" },
    { name: "SanDisk",   code: "SNDK",  change: "-0.00%", driver: "下跌约2%，存储板块走势分化（SK海力士+4%、美光+2.5% vs 西数-3%）；NAND供需与定价前景仍在重新审视中，跟随板块窄幅波动" }
  ],

  /* ============ 五、重要科技与政策新闻（一手来源） ============ */
  news: [
    {
      title: "美股周五收跌终结动荡一周：道指跌1.23%、纳指微跌0.21%，科技股企稳但AI疑虑未消",
      originalTitle: "Wall Street closes lower to end rocky week",
      source: "Reuters（经 AOL / MarketScreener 转载）",
      time: "2026年10月23日",
      type: "财经媒体",
      url: "https://www.aol.com/articles/wall-street-futures-dip-ai-104322000.html",
      link: "https://www.aol.com/articles/wall-street-futures-dip-ai-104322000.html",
      summary: "美东时间10月23日，美股三大指数收跌但科技股企稳：道指跌652.82点（-1.23%）至52,215.16、标普500跌39.75点（-0.52%）至7,623.68、纳指跌53.52点（-0.21%）至25,955.34。前一交易日纳指录得6月来最大单日跌幅后，半导体指数反弹约0.4%、标普科技板块涨0.35%。市场仍担忧支撑AI大规模投资的融资成本：Man Group首席市场策略师Kristina Hooper称「对AI交易的质疑仍在发酵，明年AI数据中心建设投资可能低于此前预期」。全周标普500跌0.5%、纳指跌0.7%、道指涨0.4%（连续第三周上涨）。",
      impact: {
        direction: "中性（科技板块企稳，整体仍承压）",
        companies: "英伟达、微软、Meta、Alphabet、亚马逊",
        industry: "AI基础设施、半导体、科技",
        logic: "科技股在暴跌后企稳，显示AI抛售动能阶段性衰减，但「AI交易质疑」尚未消除，市场焦点转向下周Alphabet/微软/亚马逊三大超大规模厂商的资本开支指引"
      }
    },
    {
      title: "胡塞袭击沙特油田叠加美方「或周末打击伊朗」言论，布伦特原油飙升至近6个月新高",
      originalTitle: "Oil hits highest in nearly six months after Houthi attacks in Saudi Arabia",
      source: "Reuters（经 AOL / Interactive Investor 转载）",
      time: "2026年10月23日",
      type: "财经媒体",
      url: "https://www.aol.com/articles/wall-street-futures-dip-ai-104322000.html",
      link: "https://www.aol.com/articles/wall-street-futures-dip-ai-104322000.html",
      summary: "胡塞武装袭击沙特油田，叠加美国驻土耳其大使Tom Barrack称「美国可能最快本周末打击伊朗」的言论，重燃中东能源供应中断担忧。布伦特原油结算价上涨3.55美元（+3.14%）至116.72美元/桶，为4月29日以来最高；WTI涨3.80美元（+3.8%）至103.27美元。全周布伦特涨6%、WTI涨2.3%。油价飙升推升通胀预期，10年期美债收益率回升3.7bp至4.99%（此前周四录得近四年最大单日跌幅）。",
      impact: {
        direction: "利空（科技股估值，通胀/利率压制）",
        companies: "英伟达、微软、Meta等高估值科技股",
        industry: "能源、科技、利率敏感板块",
        logic: "油价逼近6个月新高强化「粘性通胀」预期，推升长端利率与贴现率门槛，对高估值、高资本开支科技股构成宏观压制，与AI开支疑虑形成共振"
      }
    },
    {
      title: "SpaceX洽谈收购逾8万座蜂窝基站进军第四大无线运营商，AT&T、T-Mobile重挫约8%",
      originalTitle: "Telecom shares drop as SpaceX eyes fourth US wireless carrier",
      source: "Reuters（经 MarketScreener 转载）",
      time: "2026年10月23日",
      type: "财经媒体",
      url: "https://www.marketscreener.com/news/s-p-500-closes-lower-to-end-rocky-week-ce785cdfdc8bf321",
      link: "https://www.marketscreener.com/news/s-p-500-closes-lower-to-end-rocky-week-ce785cdfdc8bf321",
      summary: "据Bloomberg报道，SpaceX正与蜂窝基础设施商洽谈，寻求收购至少80,000座美国蜂窝基站设施，以推进成为第四大无线运营商。TD Cowen分析显示，收购全国网络需逾800亿美元及数十亿后续投入。消息重创电信股：AT&T跌8%、T-Mobile跌7.7%、Verizon跌1.2%，通信服务板块承压；反之铁塔运营商大涨（Crown Castle +9%、American Tower +4%）。SpaceX股价涨1.9%。Bernstein分析师称竞争影响虽「或需数年」，但预期本身将持续压制板块情绪。",
      impact: {
        direction: "利空（电信，结构性冲击）",
        companies: "AT&T、T-Mobile、Verizon、Crown Castle、American Tower、SpaceX",
        industry: "电信、通信基础设施、卫星通信",
        logic: "SpaceX以频谱+基站资产切入无线运营商市场，若落地将重塑美国电信竞争格局，电信股估值承压、铁塔资产方因出售预期获益"
      }
    },
    {
      title: "美国运通宣布裁员5%、Q3业绩超预期，股价跌3.7%拖累道指",
      originalTitle: "American Express falls 3.7% after announcing 5% workforce cut",
      source: "Reuters（经 MarketScreener 转载）",
      time: "2026年10月23日",
      type: "财经媒体",
      url: "https://www.marketscreener.com/news/s-p-500-closes-lower-to-end-rocky-week-ce785cdfdc8bf321",
      link: "https://www.marketscreener.com/news/s-p-500-closes-lower-to-end-rocky-week-ce785cdfdc8bf321",
      summary: "美国运通（American Express）公布Q3业绩并上调全年利润指引，同时宣布将裁员约5%（打造「更敏捷高效」组织）。尽管业绩超预期，市场聚焦其成本与组织调整信号，股价当日下跌3.7%，成为拖累道指当日跌逾1.2%的重要因素。这一消息与当日金融板块走弱相呼应，折射出企业盈利虽强、但市场对经营效率与成本端的关注升温。",
      impact: {
        direction: "中性偏空（金融/道指权重）",
        companies: "美国运通",
        industry: "金融、支付",
        logic: "大型消费金融企业裁员信号，叠加消费情绪接近纪录低点，边际上削弱「消费韧性」叙事，压制道指与金融板块表现"
      }
    },
    {
      title: "美国10月制造业PMI升至53个月新高56.0、服务业PMI回落，粘性通胀成核心担忧",
      originalTitle: "US business activity growth slows slightly in October, manufacturing beats",
      source: "S&P Global（经 Interactive Investor/Alliance News 转载）",
      time: "2026年10月23日",
      type: "财经媒体",
      url: "https://www.ii.co.uk/news/new-york-market-close-shares-fall-ahead-of-rate-decision-next-week-al1792789188193905600",
      link: "https://www.ii.co.uk/news/new-york-market-close-shares-fall-ahead-of-rate-decision-next-week-al1792789188193905600",
      summary: "S&P Global公布的10月美国初步PMI显示：服务业PMI由58.8回落至57.9（符合预期），制造业PMI升至56.0（53个月新高、优于预期的55.6），制造业产出指数微降至55.8。首席商业经济学家Chris Williamson指出，油价飙升正在传导至各类商品与服务价格，供应链瓶颈加剧、订单积压上升，企业更易转嫁成本，结果是「逾四年最快的销售价格上涨」，暗示CPI通胀或在未来数月进一步高于美联储目标。",
      impact: {
        direction: "中性偏空（通胀/利率压制科技估值）",
        companies: "高估值科技股、利率敏感板块",
        industry: "宏观经济、科技、半导体",
        logic: "制造业强劲叠加油价驱动的成本压力上升，强化「粘性通胀」预期，抬升市场对美联储12月加息概率的定价，压制科技股估值贴现率"
      }
    },
    {
      title: "下周约三分之一标普500公司财报，Alphabet、微软、亚马逊三大AI超大规模厂商资本开支指引成焦点",
      originalTitle: "Investors eye Alphabet, Microsoft, Amazon earnings as AI capex signals",
      source: "Reuters（经 AOL 转载）",
      time: "2026年10月23日",
      type: "财经媒体",
      url: "https://www.aol.com/articles/wall-street-futures-dip-ai-104322000.html",
      link: "https://www.aol.com/articles/wall-street-futures-dip-ai-104322000.html",
      summary: "下周约三分之一标普500成分股将公布财报，包括Alphabet、微软、亚马逊三家AI超大规模厂商，其资本开支预测将受到华尔街密切关注。在当前市场对「AI烧钱能否兑现回报」的质疑升温背景下，这三家公司的AI资本开支指引被视为验证AI数据中心建设需求是否可持续的关键信号。标普500公司Q3利润预计同比增长逾32%（LSEG IBES数据），强劲盈利增长仍是支撑主要指数年内上涨的根基。",
      impact: {
        direction: "中性（关键观察窗口）",
        companies: "Alphabet、微软、亚马逊、英伟达、Meta",
        industry: "AI、云计算、半导体",
        logic: "三大超大规模厂商资本开支指引是下周核心变量，将直接决定「AI资本开支放缓」担忧是否坐实，进而主导芯片与云计算板块方向"
      }
    }
  ],

  /* ============ 六、当日最值得关注的 3 个交易逻辑 ============ */
  logics: [
    { title: "AI交易从「恐慌抛售」切换至「财报验证」：下周三大超大规模厂商资本开支指引定方向",
      text: "10月22日AI板块因「烧钱能否兑现回报」的质疑遭重挫（纳指-2.6%），10月23日科技股快速企稳、半导体指数反弹约0.4%，显示恐慌性抛售动能阶段性衰竭。但市场的根本分歧并未解决——Man Group等机构仍担忧「明年AI数据中心建设投资可能低于预期」。真正的裁决权交给下周财报：Alphabet、微软、亚马逊三大AI超大规模厂商的资本开支指引，将直接验证「AI资本开支放缓」是特斯拉/泛林的个案，还是行业性拐点。在指引落地前，AI板块大概率维持高波动、方向未明的震荡。" },
    { title: "油价飙升重燃「粘性通胀」担忧，利率成为压制科技股估值的第二条主线",
      text: "胡塞袭击沙特油田叠加美方「或周末打击伊朗」言论，推动布伦特原油涨3.14%至116.72美元（近6个月新高）。S&P Global数据显示制造业PMI升至53个月新高、销售价格以逾四年最快速度上涨，10年期美债收益率回升至4.99%。这意味着即便AI需求叙事未变，「油价→通胀→长端利率→贴现率」的传导链正系统性抬高高估值科技股的估值门槛。下周美联储利率决议（预计维持不变，但12月加息概率上升）与油价走势，构成与AI基本面并行的第二条定价主线。" },
    { title: "SpaceX进军无线运营商引发结构性重定价：科技巨头跨界扩张成为新扰动源",
      text: "SpaceX洽谈收购逾8万座蜂窝基站、加速成为第四大无线运营商，当日重创AT&T（-8%）、T-Mobile（-7.7%），却推动铁塔股Crown Castle（+9%）、American Tower（+4%）大涨。这一事件揭示当前市场除AI之外的第二条交易线：科技巨头利用资本与频谱资产跨界颠覆传统行业。SpaceX的每一次频谱/基础设施动作，都会通过「预期」而非「现实盈利」先行重定价相关板块，为通信、航天、甚至后续可能的其他传统行业注入持续的结构性不确定性。" }
  ],

  /* ============ 七、未来 1—3 个交易日关注事项（具体事件） ============ */
  watchlist: [
    { date: "10月26日（周一）", event: "Verizon（VZ）、Cadence Design Systems（CDNS）公布Q3财报", impact: "Cadence作为EDA/半导体设计工具龙头，其业绩与指引反映芯片设计需求景气度，是半导体板块的重要领先指标" },
    { date: "10月27日（周二）盘后", event: "Alphabet（GOOGL）、微软（MSFT）公布Q3财报", impact: "两大AI超大规模厂商的资本开支指引是下周核心变量，将直接验证AI数据中心建设需求是否可持续，主导芯片与云计算板块方向" },
    { date: "10月28日（周三）", event: "美联储FOMC利率决议（预计维持利率不变）", impact: "油价飙升与粘性通胀背景下，市场关注美联储对12月是否加息的表态，直接压制高估值科技股贴现率" },
    { date: "10月29日（周四）盘后", event: "亚马逊（AMZN）公布Q3财报", impact: "AWS增速与AI资本开支指引是三大超大规模厂商验证的最后一环，影响AI基础设施投资逻辑" },
    { date: "下周", event: "约三分之一标普500公司集中披露Q3财报（含英特尔、AMD等半导体）", impact: "半导体与存储公司的业绩与指引，验证HBM/NAND实际需求，判断AI资本开支放缓是行业性还是个案" },
    { date: "近期", event: "中东局势（沙特油田遇袭后续）+ 油价与美债收益率走势", impact: "地缘风险与油价波动通过通胀→利率传导链影响科技股估值，是AI基本面之外的宏观扰动主线" }
  ],

  /* ============ 八、页脚免责声明 ============ */
  disclaimer:
    "本报告基于公开市场信息整理，仅供华泰期货内部研究参考，不构成任何投资建议。股价数据以交易所官方为准；新闻以原始来源（SEC / 白宫 / BIS / Treasury / BEA / BLS / Federal Reserve / Reuters 等）为准。投资有风险，决策需谨慎。"
};
