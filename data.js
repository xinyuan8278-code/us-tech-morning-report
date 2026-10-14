/**
 * ============================================================
 *  美股科技板块前一交易日行情日报 —— 数据文件（每日只需改这里）
 *  （2026-10-15 更新：对应美股交易日 2026-10-14）
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
    reportDate: "2026年10月15日",   // 报告发布日期（周四）
    tradeDate: "2026年10月14日",    // 对应美股交易日（前一交易日，周三）
    author: "华泰期货 · 研究",
    tag: "每日市场跟踪"
  },

  /* ============ 二、市场概览 ============ */
  overview: {
    /* 简短概括：指数变化 + 个股变化 + 重大事件 */
    text: "10月14日美股受9月CPI超预期（同比3.7%/核心2.6%）冲击集体大跌，纳指-1.88%至26692.87创三个月最大单日跌幅、标普-1.11%至7718.94终结53个交易日无1%下跌、道指-0.09%至51621.48。费城半导体指数-4.30%至11684.38、连续第六日下跌（近两年最长）。高负债AI企业遭重挫：CoreWeave-15.5%、Oracle-8.8%、Dell-11%、Nebius-9%；存储续跌（美光-4.1%、闪迪-5.3%、SK海力士-6.1%），AMD-5.7%、ARM-6%。苹果+0.5%逆势创收盘市值5万亿美元里程碑。美联储10月加息概率由22%飙升至约44%。",
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
    { name: "CoreWeave（AI云服务商）", code: "CRWV", change: "-0.00%", note: "超跌：单日暴跌约15.5%，其2032年到期债券收益率一度触及15%、2031年债券收益率约16%，信用违约互换定价未来五年违约概率超50%；投资者对高负债AI基建融资可持续性担忧集中爆发" },
    { name: "AMD（超威半导体）", code: "AMD", change: "-0.00%", note: "超跌：单日大跌约5.7%，为费城半导体指数六连跌（-4.3%）中跌幅居前成分股；AI高负债企业债务担忧向芯片上游传导，叠加9月CPI超预期推升加息预期压制高估值成长股" },
    { name: "Micron（美光）", code: "MU", change: "-0.00%", note: "超跌：单日下跌约4.1%，连续多个交易日下挫；长鑫存储(CXMT)4F2 DRAM架构技术进展加剧竞争担忧，存储涨价周期见顶预期升温引发获利了结" }
  ],

  /* ============ 四、重点公司行情表 ============ */
  /* 超涨/超跌个股放最上方；无新闻的公司驱动因素简要说明即可 */
  stocks: [
    { name: "NVIDIA",    code: "NVDA",  change: "-0.00%", driver: "大跌约3.2%；9月CPI超预期推升美联储加息预期、压制高估值AI股，叠加CoreWeave等客户高负债引发的AI基建融资担忧向芯片龙头传导；台积电10/15财报临近，市场对Vera Rubin放量节奏的验证趋于谨慎" },
    { name: "AMD",       code: "AMD",   change: "-0.00%", driver: "超跌领跌（约-5.7%）；费城半导体指数六连跌背景下跌幅居前，AI高负债企业债务担忧沿供应链传导，MI400等产品需求预期承压" },
    { name: "Micron",    code: "MU",    change: "-0.00%", driver: "超跌（约-4.1%）；长鑫存储(CXMT)4F2 DRAM架构技术进展加剧存储竞争担忧，叠加韩国存储股大跌（SK海力士-6.1%）、存储涨价周期见顶预期升温" },
    { name: "Apple",     code: "AAPL",  change: "-0.00%", driver: "逆势上涨（+0.5%）；收盘市值首次突破5万亿美元，成为继英伟达后全球第二家达成该里程碑的企业；发布HomeView智能家居设备、更新Apple TV 4K，防御属性获资金青睐" },
    { name: "Meta",      code: "META",  change: "-0.00%", driver: "下跌约3.3%；大型科技普跌，Muse智能体等AI应用层此前涨幅回吐；AI基建资本开支与高估值在利率上行环境下承压" },
    { name: "Microsoft", code: "MSFT",  change: "-0.00%", driver: "下跌约1.8%；受AI高负债企业（含其客户CoreWeave）债务担忧与加息预期压制，Azure AI叙事短期降温" },
    { name: "Amazon",    code: "AMZN",  change: "-0.00%", driver: "下跌约1.7%；大型科技普跌，AWS资本开支与自研芯片叙事在利率上行环境下承压" },
    { name: "Alphabet",  code: "GOOGL", change: "-0.00%", driver: "下跌约1.7%；谷歌云/TPU叙事随AI板块整体回调，利率上行压制成长股估值" },
    { name: "Broadcom",  code: "AVGO",  change: "-0.00%", driver: "下跌约3%；费城半导体指数六连跌背景下承压，OpenAI/Anthropic定制ASIC高负债融资叙事受AI债务担忧拖累" },
    { name: "SanDisk",   code: "SNDK",  change: "-0.00%", driver: "下跌约5.3%；连续第三日下跌，长鑫存储(CXMT)竞争担忧叠加存储板块整体走弱，韩国存储股重挫拖累情绪" }
  ],

  /* ============ 五、重要科技与政策新闻（一手来源） ============ */
  news: [
    {
      title: "美国9月CPI同比涨3.7%、核心2.6%均超预期，美联储10月加息概率飙升至约44%",
      originalTitle: "US inflation heats up in September; Fed rate hike this month back on table",
      source: "Reuters（经 SRN News 转载）",
      time: "2026年10月14日",
      type: "财经媒体",
      url: "https://srnnews.com/trading-day-tech-melt",
      link: "https://srnnews.com/trading-day-tech-melt",
      summary: "美国劳工统计局10月14日公布的数据显示，9月CPI同比上涨3.7%（预期3.6%、前值3.4%），为今年5月以来新高；环比涨0.6%符合预期。核心CPI同比涨2.6%（预期2.5%）、环比涨0.3%（预期0.2%）。能源价格是主要推手，9月汽油价格环比飙升9.1%、贡献整体CPI涨幅过半，同比涨34.2%。数据公布后美元指数升至18个月新高、美债收益率跳升，CME FedWatch显示美联储10月加息25bp概率由数据前约22%飙升至约44%，年底前再加息概率升至约96%。",
      impact: {
        direction: "利空（高估值科技股/高负债AI企业）",
        companies: "大型科技、半导体、AI基建企业（整体）",
        industry: "宏观、利率、AI基础设施、半导体",
        logic: "通胀超预期抬升加息预期与无风险利率，直接压制高估值成长股贴现价值，并放大对债务融资型AI基建企业偿债能力的担忧，是当日AI板块抛售的核心宏观导火索"
      }
    },
    {
      title: "高负债AI企业遭重挫：CoreWeave跌15.5%、Oracle跌8.8%、Dell跌11%，AI债券收益率飙升引发融资可持续性担忧",
      originalTitle: "AI infrastructure firms slump as US rate hike bets rise",
      source: "Reuters（经 The Star 转载）",
      time: "2026年10月14日",
      type: "财经媒体",
      url: "https://www.thestar.com.my/tech/tech-news/2026/10/15/ai-infrastructure-firms-slump-as-us-rate-hike-bets-rise",
      link: "https://www.thestar.com.my/tech/tech-news/2026/10/15/ai-infrastructure-firms-slump-as-us-rate-hike-bets-rise",
      summary: "受加息预期升温影响，债务负担沉重的AI企业周三集体暴跌：neocloud公司Nebius跌15.1%、CoreWeave跌9.5%（本月市值蒸发近四分之一），数据中心运营商Applied Digital跌8.8%、IREN跌9.9%，高负债超大规模厂商Oracle跌7.2%且大部分美元债下跌。巴克莱将戴尔、惠普企业(HPE)评级由'增持'下调至'中性'，称'估值已透支、商品成本助推了营收、尚未看到实质性的AI需求拐点'，戴尔当日跌10.3%、HPE跌6.4%。10年期美债收益率升3.6bp、2年期升7.2bp，Oracle、CoreWeave等AI企业信用违约保险成本飙升至历史高位。",
      impact: {
        direction: "利空（AI基建/neocloud/服务器制造）",
        companies: "CoreWeave、Nebius、Oracle、Dell、HPE、Applied Digital、IREN",
        industry: "AI基础设施、数据中心、云计算、AI服务器",
        logic: "市场从'AI资本开支无限增长'叙事转向'债务融资可持续性与ROI兑现'的检验，高杠杆AI基建股首当其冲，并沿供应链向芯片与服务器制造环节传导"
      }
    },
    {
      title: "CoreWeave债券收益率逼近15%，马斯克评论'Yikes'，信用违约互换定价违约概率超50%",
      originalTitle: "CoreWeave shares tumble as bond yields near 15% on concern about AI borrowing binge",
      source: "CNBC",
      time: "2026年10月14日",
      type: "财经媒体",
      url: "https://www.cnbc.com/2026/10/14/coreweave-stock-bond-yields-ai-debt.html",
      link: "https://www.cnbc.com/2026/10/14/coreweave-stock-bond-yields-ai-debt.html",
      summary: "投资者对部分科技公司为AI基建过度举债的担忧升温，CoreWeave股价周三暴跌16%，其2032年到期的9.625%债券收益率升至14.8%、2031年到期的9.75%债券收益率约14.9%。风险投资人Chamath Palihapitiya周二在X平台贴出该2032年债券收益率'触及15%'的图表，马斯克回复'Yikes'。信用违约互换市场定价CoreWeave未来五年违约概率超50%。富国银行投资研究所Luis Alvarado表示'前九个月的低成本融资时代正开始消散'。摩根大通数据显示，超大规模厂商今年预计资本开支达8000亿美元，2027年将突破1万亿美元/年。",
      impact: {
        direction: "利空（AI基建融资链/neocloud）",
        companies: "CoreWeave、Oracle、Nebius、微软、Meta、OpenAI（关联）",
        industry: "AI基础设施、数据中心、信用市场、云计算",
        logic: "CoreWeave债券与股价双杀揭示AI基建'循环融资'脆弱性——其订单大量来自微软/Meta/OpenAI，若信用风险蔓延将反噬上游芯片需求与云厂商开支预期"
      }
    },
    {
      title: "苹果收盘市值首次突破5万亿美元，成全球第二家、继英伟达之后",
      originalTitle: "Apple closes above $5 trillion market value for first time",
      source: "Reuters（经 IT之家/每日经济新闻 引用）",
      time: "2026年10月14日",
      type: "财经媒体",
      url: "https://news.qq.com/rain/a/20261015A02OXK00",
      link: "https://news.qq.com/rain/a/20261015A02OXK00",
      summary: "苹果公司10月14日首次以5万亿美元市值收盘，当日股价上涨0.5%至342.96美元、收盘市值5.01万亿美元，成为继英伟达之后全球第二家达成该里程碑的企业。此前苹果曾于今年7月28日盘中短暂触及5万亿美元后回落。自8月阶段低点以来，苹果股价累计涨幅超13%；自John Ternus于9月1日接任CEO以来累计上涨约5%。苹果还于当日发布299美元HomeView智能家居设备（7英寸触控屏、A18芯片），并更新Apple TV 4K与HomePod mini。苹果将于11月2日发布2026财年第四财季财报。",
      impact: {
        direction: "利好（苹果）/ 科技板块分化中的避险选项",
        companies: "苹果",
        industry: "消费电子、智能家居、AI终端",
        logic: "在AI高估值板块遭抛售时，苹果凭借稳定现金流与防御属性逆势创新高，反映资金在科技板块内部从高杠杆AI基建向现金流型蓝筹的避险轮动"
      }
    },
    {
      title: "费城半导体指数六连跌创近两年最长连跌，AMD跌5.7%、ARM跌6%、存储股续挫",
      originalTitle: "Nasdaq ends down as chipmakers fall and bank earnings roll in",
      source: "Reuters（经 7Globe/中新经纬 引用）",
      time: "2026年10月14日",
      type: "财经媒体",
      url: "https://www.7globe.in/nasdaq-indices-fall-2-as-ai-stocks-lead-wall-street-meltdown-key-factors-explained",
      link: "https://www.7globe.in/nasdaq-indices-fall-2-as-ai-stocks-lead-wall-street-meltdown-key-factors-explained",
      summary: "费城半导体指数周三暴跌4.3%，连续第六个交易日下跌，创2025年5月以来最长连跌。半导体集体重挫：ARM跌超6%、AMD跌超5%、英特尔跌超4%、博通/阿斯麦/应用材料跌超3%、高通跌超2%。光通信遭重创（应用光电跌近12%、Lumentum与Coherent跌超9%、康宁跌超5%）。存储概念股继续下跌（SK海力士跌超6%、闪迪跌超5%、西部数据/美光/希捷跌超4%）。长鑫存储(CXMT)4F2 DRAM架构技术进展加剧中国存储竞争担忧。巴克莱对戴尔/HPE/NetApp的降级进一步打击AI硬件。",
      impact: {
        direction: "利空（半导体/存储/光通信）",
        companies: "AMD、ARM、英特尔、博通、阿斯麦、应用材料、美光、闪迪、SK海力士、高通",
        industry: "半导体、存储、光通信、AI芯片",
        logic: "半导体六连跌是'加息预期+AI债务担忧+中国存储竞争'三重利空共振，AI硬件板块进入对融资成本与竞争壁垒的重新定价阶段"
      }
    },
    {
      title: "纽约联储主席威廉姆斯：今年或再加息一次，AI基建投资、关税与能源价格是三大通胀变量",
      originalTitle: "Fed Vice Chair Williams signals another rate hike this year possible",
      source: "TradingKey（援引路透/CNBC）",
      time: "2026年10月13日",
      type: "财经媒体",
      url: "https://www.tradingkey.com/analysis/stocks/us-stocks/262215153-us-nvda-mu-anthropic-ipo-tradingkey",
      link: "https://www.tradingkey.com/analysis/stocks/us-stocks/262215153-us-nvda-mu-anthropic-ipo-tradingkey",
      summary: "纽约联储主席威廉姆斯表示，他维持'今年再加息一次可能是合适的'这一观点不变，并指出因财政政策与更强劲的增长，中性利率已温和上升25至50个基点，长期水平约为1%或略高。他将AI基础设施投资、关税与能源价格列为三大通胀变量，并称短期芯片价格可能维持高位，而AI驱动的生产率提升长期或成去通胀力量。他还否认了与美联储主席Waller协调9月下旬言论的说法。美联储下一次政策会议定于10月27-28日召开。",
      impact: {
        direction: "中性偏空（利率敏感型科技股）",
        companies: "大型科技、半导体、AI基建企业",
        industry: "宏观、货币政策、AI基础设施",
        logic: "美联储官员明确点名AI基建投资为通胀推手，强化'AI高资本开支与高利率环境相互强化'的担忧，是AI板块估值承压的政策面因素"
      }
    },
    {
      title: "Anthropic拟于IPO前首次向机构投资者披露Q3财报，AI独角兽估值关注升温",
      originalTitle: "Anthropic plans first disclosure of third-quarter financial data ahead of IPO",
      source: "CNBC（经 Mitrade 转载）",
      time: "2026年10月14日",
      type: "财经媒体",
      url: "https://www.mitrade.eu/insights/news/live-news/article-8-2160667-20261014",
      link: "https://www.mitrade.eu/insights/news/live-news/article-8-2160667-20261014",
      summary: "据CNBC报道，Anthropic计划于10月14日首次向机构投资者披露第三季度财务数据，为其筹备中的潜在创纪录IPO做准备。这家旧金山AI公司在AI算力估值重估的背景下启动上市进程，其Q3数据将帮助投资者评估其增速、盈利能力与IPO估值。知情人士称Anthropic将向一批机构投资者展示数据；彭博此前报道其正筹备IPO前的投资者日。Anthropic不予置评。该事件与摩根大通Q3调整后营收不及预期、苹果发布HomeView设备等公司动态共同构成当日盘面背景。",
      impact: {
        direction: "中性（AI应用/估值情绪）",
        companies: "Anthropic、OpenAI、亚马逊（投资人）、谷歌（投资人）",
        industry: "AI大模型、AI应用、一级市场融资",
        logic: "AI独角兽IPO进展在AI高估值板块遭抛售时提供估值锚点检验，若融资遇冷将加剧市场对AI商业化回报的质疑；亚马逊/谷歌等战略投资人的账面估值亦受影响"
      }
    }
  ],

  /* ============ 六、当日最值得关注的 3 个交易逻辑 ============ */
  logics: [
    { title: "通胀与利率重新成为AI估值的主导变量，「加息预期+债务担忧」形成负反馈",
      text: "9月CPI同比3.7%、核心2.6%双双超预期，使美联储10月加息概率由约22%飙升至约44%，无风险利率上行直接压制高估值成长股贴现价值。与此同时，高利率放大债务融资型AI基建企业的偿债成本——CoreWeave债券收益率逼近15%、信用违约互换定价违约概率超50%。利率越高，AI基建融资越难、回报越受质疑，进一步反噬芯片需求预期，形成'通胀→加息→AI债务→芯片需求'的负反馈链条。这一逻辑取代单纯的需求叙事，成为当日市场交易的核心主线。" },
    { title: "AI基建「循环融资」脆弱性暴露，高负债neocloud成为抛售重灾区",
      text: "CoreWeave、Nebius、Oracle等以债务支撑数据中心扩张的企业成为当日最大受害者（CoreWeave跌15.5%、Oracle跌8.8%、Dell跌11%），其债券收益率飙升与股价双杀揭示AI基建'订单来自科技巨头、融资来自债券市场'的循环融资脆弱性。摩根大通预计超大规模厂商今年资本开支达8000亿美元、2027年突破1万亿美元，庞大的债务融资需求在利率上行环境下风险急剧放大。市场对'AI资本开支无限增长'叙事的信任正在被'ROI能否兑现'的质疑取代，信用风险的蔓延方向决定后续芯片股修复节奏。" },
    { title: "资金在科技板块内部从高杠杆AI基建向现金流型蓝筹避险，苹果市值破5万亿成标志",
      text: "在AI高估值板块遭抛售的同时，苹果逆势上涨0.5%、收盘市值首次突破5万亿美元，反映资金在科技板块内部的结构性避险——从债务高企的AI基建与芯片硬件，转向现金流稳定、盈利可见度高的消费科技蓝筹。大型科技七巨头内部亦现分化（苹果+0.5% vs Meta-3.3%、英伟达-3.2%）。这一轮动表明，市场并非全面看空科技，而是在利率上行环境下对'确定性'的重新定价，盈利质量与杠杆水平取代成长性成为新的定价锚。" }
  ],

  /* ============ 七、未来 1—3 个交易日关注事项（具体事件） ============ */
  watchlist: [
    { date: "10月15日", event: "台积电（TSM）公布Q3完整财报及4Q指引", impact: "验证2nm放量节奏、毛利率与资本开支，是AI芯片需求与先进封装供需的关键窗口，牵动英伟达及AI芯片链" },
    { date: "10月15日", event: "美国9月PPI数据", impact: "补充企业端价格压力，与CPI共同刻画通胀路径，影响美联储加息概率与成长股估值" },
    { date: "10月15日前后", event: "ASML公布Q3财报（本周内）", impact: "EUV/High-NA光刻机订单与指引反映晶圆代工资本开支强度，是半导体景气先行指标" },
    { date: "10月16日", event: "美国9月零售销售数据", impact: "刻画消费需求韧性，补充通胀与增长预期，影响利率路径判断" },
    { date: "10月27-28日", event: "美联储FOMC议息会议（9月已加息25bp至3.75%-4.00%）", impact: "决定是否连续第二次加息，是科技股估值的中期关键变量" }
  ],

  /* ============ 八、页脚免责声明 ============ */
  disclaimer:
    "本报告基于公开市场信息整理，仅供华泰期货内部研究参考，不构成任何投资建议。股价数据以交易所官方为准；新闻以原始来源（SEC / 白宫 / BIS / Treasury / BEA / BLS / Federal Reserve / Reuters 等）为准。投资有风险，决策需谨慎。"
};
