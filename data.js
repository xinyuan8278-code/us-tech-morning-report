/**
 * ============================================================
 *  美股科技板块前一交易日行情日报 —— 数据文件（每日只需改这里）
 *  （2026-10-14 更新：对应美股交易日 2026-10-13）
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
    reportDate: "2026年10月14日",   // 报告发布日期（周三）
    tradeDate: "2026年10月13日",    // 对应美股交易日（前一交易日，周二）
    author: "华泰期货 · 研究",
    tag: "每日市场跟踪"
  },

  /* ============ 二、市场概览 ============ */
  overview: {
    /* 简短概括：指数变化 + 个股变化 + 重大事件 */
    text: "10月13日美股三大指数集体收跌、标普与纳指连续第二日走低：道指-0.35%至51670.10、标普-0.02%至7805.45、纳指-0.15%至27204.38。半导体连续第五日下跌（费半-0.23%、5日累跌逾8%），存储续弱（美光-3.62%、SK海力士-3.19%、应用材料跌近7%），长鑫存储DRAM技术进展加剧竞争担忧；大型科技分化，Meta+2.63%领涨、微软+0.43%创新高、苹果盘中创历史新高，英伟达+0.97%。Q3财报季开启，美债收益率随油价回落而走低。",
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
    { name: "Applied Materials（应用材料）", code: "AMAT", change: "-0.00%", note: "超跌：单日大跌约6.5%，为标普500当日表现最差成分股之一；存储景气预期回落叠加费城半导体指数五连跌，半导体设备板块遭抛售，长鑫存储(CXMT)DRAM技术进展加剧竞争担忧" },
    { name: "Micron（美光）", code: "MU", change: "-0.00%", note: "超跌：连续多个交易日下跌（周一-3.88%、周二-3.62%），费城半导体指数五连跌（5日累跌逾8%）；长鑫存储(CXMT)DDR5技术进展与SK海力士同步跌3.19%共振，存储涨价周期见顶预期升温引发获利了结" }
  ],

  /* ============ 四、重点公司行情表 ============ */
  /* 超涨/超跌个股放最上方；无新闻的公司驱动因素简要说明即可 */
  stocks: [
    { name: "Micron",    code: "MU",    change: "-0.00%", driver: "超跌领跌（-3.62%）；连续多个交易日下跌，长鑫存储(CXMT)DDR5 RDIMM年底量产的技术进展引发存储竞争加剧担忧，叠加费城半导体指数五连跌、SK海力士同步跌3.19%，存储涨价周期见顶预期升温引发获利了结" },
    { name: "Meta",      code: "META",  change: "-0.00%", driver: "领涨大型科技（+2.63%）；发布Muse Wonder系列前沿AI模型（Muse Wonder/Muse Wonder Full），面向个人与专业智能体任务，AI应用层变现叙事强化；扎克伯格称Meta将进一步增加AI基础设施支出" },
    { name: "NVIDIA",    code: "NVDA",  change: "-0.00%", driver: "小幅反弹（+0.97%）；OCP全球峰会开放Vera Rubin机柜/计算托盘设计、联合思科发布400G USFP光模块、Meta采用Spectrum-6，开放生态策略加固；但IDC数据显示其中国AI芯片份额降至34%，出口管制构成结构性压制" },
    { name: "Microsoft", code: "MSFT",  change: "-0.00%", driver: "上涨并创历史新高（+0.43%）；自研Maia 300多吉瓦级部署计划延续利好，Copilot/Azure AI商业化叙事强化，在资金从半导体硬件向软件与AI应用轮动中受益" },
    { name: "Apple",     code: "AAPL",  change: "-0.00%", driver: "微涨（+0.09%）；盘中一度涨超2%创历史新高348.15美元，收盘341.27美元、市值约4.98万亿美元；防御属性在半导体回调中获资金青睐" },
    { name: "Broadcom",  code: "AVGO",  change: "-0.00%", driver: "反弹（+0.7%）；周一CEO陈福阳「AI资本瓶颈/赌场赌徒」言论引发的抛售暂歇，其OpenAI/Anthropic定制ASIC结构性叙事仍在，为OpenAI定制芯片寻求数百亿美元融资" },
    { name: "AMD",       code: "AMD",   change: "-0.00%", driver: "反弹（+超1%）；半导体股部分回补，此前博通/英特尔CEO「资本瓶颈」论引发的超跌修复；与OpenAI的芯片供应合作及推理芯片竞争地位受关注" },
    { name: "Alphabet",  code: "GOOGL", change: "-0.00%", driver: "小幅上涨（+0.30%）；谷歌云/Gemini叙事延续，与英伟达合作支持Falcon Transport协议强化以太网AI网络布局" },
    { name: "Amazon",    code: "AMZN",  change: "-0.00%", driver: "小幅走弱（-0.37%）；大型科技中偏弱，AWS资本开支与自研Trainium/Inferentia降低对英伟达依赖的逻辑延续，但短期缺乏明确催化" },
    { name: "SanDisk",   code: "SNDK",  change: "-0.00%", driver: "企稳（-0.34%）；周一大跌约6%后情绪修复，存储板块整体仍弱但抛压减轻；SK海力士跌3.19%、美光跌3.62%的领跌压力部分传导" }
  ],

  /* ============ 五、重要科技与政策新闻（一手来源） ============ */
  news: [
    {
      title: "半导体五连跌、存储续挫：美光跌3.6%、应用材料跌近7%，长鑫存储技术进展与「AI资本瓶颈」论共振",
      originalTitle: "Nasdaq ends down as chipmakers fall and bank earnings roll in",
      source: "Reuters（经 Kitco 转载）",
      time: "2026年10月13日",
      type: "财经媒体",
      url: "https://www.kitco.com/news/off-the-wire/2026-10-13/nasdaq-ends-down-chipmakers-fall-and-bank-earnings-roll",
      link: "https://www.kitco.com/news/off-the-wire/2026-10-13/nasdaq-ends-down-chipmakers-fall-and-bank-earnings-roll",
      summary: "费城半导体指数连续第五个交易日下跌（收跌0.23%，5日累跌逾8%），受博通CEO陈福阳周一将部分AI投资比作「赌场赌徒」的言论持续发酵，叠加中国长鑫存储(CXMT)DRAM技术进展引发竞争加剧担忧。美光跌3.6%、应用材料跌近7%（标普500最差成分股之一），博通则反弹0.7%。苹果盘中创历史新高348.15美元、收涨0.1%至341.27美元（市值4.98万亿美元）。银行财报方面，花旗跌5.6%、高盛跌0.2%（均超盈利预期），富国银行跌3.1%（净利息收入不及预期）、摩根大通跌0.9%（罕见盈利不及预期）。LSEG数据显示分析师预计标普500 Q3盈利同比增逾30%，主要由AI相关科技公司驱动。",
      impact: {
        direction: "利空（半导体/存储短期）/ 财报季支撑大盘",
        companies: "美光、应用材料、博通、SK海力士、苹果、花旗、高盛、摩根大通",
        industry: "半导体、存储、半导体设备、银行、AI基础设施",
        logic: "「资本瓶颈」言论+中国存储竞争双重压制芯片股，资金在科技内部从硬件向软件/应用层轮动；财报季+30%盈利预期为大盘提供支撑"
      }
    },
    {
      title: "IDC：英伟达中国AI芯片份额降至34%，华为升至28%",
      originalTitle: "Nvidia's China AI-chip share falls as Huawei closes gap, report finds",
      source: "Reuters（经 Finwire 转载）",
      time: "2026年10月13日",
      type: "财经媒体",
      url: "https://finwire.io/news/stock-markets-news/nvidias-china-ai-chip-share-falls-as-huawei-closes-gap-report-finds",
      link: "https://finwire.io/news/stock-markets-news/nvidias-china-ai-chip-share-falls-as-huawei-closes-gap-report-finds",
      summary: "IDC报告显示，受美国出口管制限制，英伟达2026年上半年在中国数据中心AI加速器市场的份额降至34%；上半年在华出货67.8万颗AI加速器，同比下滑44%。华为同期出货57.2万颗（上年同期逾30万颗），份额升至28%；阿里平头哥占7%、寒武纪5%、百度昆仑芯4%、海光3%。IDC预计中国AI加速器总出货今年仍将增长19%。黄仁勋多次批评华盛顿出口管制，称此举迫使美企将中国500亿美元AI芯片市场拱手让与华为。",
      impact: {
        direction: "利空（英伟达）/ 利好华为及国产链",
        companies: "英伟达、华为、阿里平头哥、寒武纪、海光",
        industry: "AI芯片、数据中心、出口管制、半导体",
        logic: "出口管制下英伟达中国份额持续流失、国产替代加速，构成英伟达收入与估值的结构性压制；但中国区营收占比已下降，实际冲击边际趋缓"
      }
    },
    {
      title: "英伟达开放Vera Rubin机柜设计，联合思科发布400G USFP光模块",
      originalTitle: "NVIDIA Opens AI Factory Designs, Teams Up With Cisco on High-Speed Networking",
      source: "Analytics India Magazine（行业媒体）",
      time: "2026年10月12日",
      type: "行业媒体",
      url: "https://analyticsindiamag.com/ai-news/nvidia-opens-ai-factory-designs-teams-up-with-cisco-on-high-speed-networking",
      link: "https://analyticsindiamag.com/ai-news/nvidia-opens-ai-factory-designs-teams-up-with-cisco-on-high-speed-networking",
      summary: "英伟达在OCP全球峰会宣布通过MGX 1.2架构开放Vera Rubin机柜与计算托盘设计（含机架级盲插液冷、液冷5000A母线、最高250kW机架），并联合思科发布超密集小型可插拔光模块USFP（单通道400Gb/s，带宽密度4倍、能效约1.3倍，总容量达12.8Tb/s）。Meta采用英伟达Spectrum-6 102.4Tb/s以太网交换机，谷歌Falcon Transport协议将在未来ConnectX-10 SuperNIC与BlueField DPU上支持；TE Connectivity与安费诺共建光模块生态。",
      impact: {
        direction: "利好（英伟达/光模块与网络链）",
        companies: "英伟达、思科、Meta、谷歌、TE Connectivity、安费诺",
        industry: "AI芯片、光模块、以太网、数据中心、AI基础设施",
        logic: "英伟达将竞争从单芯片扩展到机柜、互连与软件的系统级开放生态，以「开放」换供应链锁定；400G光模块与网络升级利好光通信产业链"
      }
    },
    {
      title: "Meta发布Muse Wonder前沿AI模型，瞄准智能体任务",
      originalTitle: "Meta Launches Muse Wonder Series of Frontier AI Models for Agentic Tasks",
      source: "Meta AI（官方）",
      time: "2026年10月13日",
      type: "官方",
      url: "https://research.meta.ai/blog/muse-wonder",
      link: "https://research.meta.ai/blog/muse-wonder",
      summary: "Meta发布Muse Wonder系列前沿AI模型（Muse Wonder与Muse Wonder Full），定位为迄今最强模型，面向个人与专业智能体任务。Muse Wonder即日起通过Meta Model API与Muse Code可用，Muse Wonder Full面向Muse Code订阅用户；后续将驱动Meta个人AI代理Muse。该发布延续Muse个人AI代理上线以来的商业化势头，推动Meta当日领涨大型科技（+2.63%）。",
      impact: {
        direction: "利好（Meta/AI应用层）",
        companies: "Meta、OpenAI、谷歌、AI应用层公司",
        industry: "AI应用、AI代理、大模型、广告与社交",
        logic: "AI投资焦点从算力硬件向应用层变现迁移，具备用户流量与商业化闭环的平台型公司获重新定价，与半导体硬件股的相对强弱持续分化"
      }
    },
    {
      title: "Q3财报季开启：银行盈利超预期但涨跌互现，美债收益率随油价回落走低",
      originalTitle: "How major US stock indexes fared Tuesday 10/13/2026",
      source: "Associated Press（经 Yahoo Finance 转载）",
      time: "2026年10月13日",
      type: "通讯社",
      url: "https://finance.yahoo.com/markets/world-indices/articles/major-us-stock-indexes-fared-202026407.html",
      link: "https://finance.yahoo.com/markets/world-indices/articles/major-us-stock-indexes-fared-202026407.html",
      summary: "美股首批财报出炉、多数超预期，但相互抵消使指数在历史高位附近小幅波动。标普500收跌0.02%至7805.45、距上周历史高点仅一步之遥；道指跌0.35%、纳指跌0.15%。高盛等银行股在财报后涨跌反复。油价回落带动美债收益率小幅走低，10年期美债收益率降至约5.19%。市场焦点转向财报季（LSEG预计标普500 Q3盈利同比增逾30%）与本周CPI/PPI数据，盈利兑现成为当前支撑成长股估值的核心变量。",
      impact: {
        direction: "中性偏多（大盘）/ 利率变量缓和",
        companies: "高盛、花旗、摩根大通、富国银行、大型科技（整体）",
        industry: "宏观、利率、财报、银行",
        logic: "油价回落缓解通胀与加息预期、长端利率下行利好成长股；但财报季对盈利质量与前瞻指引的要求抬升，高估值科技股需以业绩兑现支撑"
      }
    }
  ],

  /* ============ 六、当日最值得关注的 3 个交易逻辑 ============ */
  logics: [
    { title: "半导体五连跌揭示AI估值逻辑从「抢算力」转向「验证回报与竞争壁垒」",
      text: "博通CEO陈福阳「部分AI投资如赌场赌徒」言论持续发酵，叠加长鑫存储(CXMT)DRAM技术进展，触发费城半导体指数连续第五个交易日下跌、5日累跌逾8%。市场对AI投资的定价正从单一的需求叙事，转向融资可持续性、ROI兑现与竞争壁垒的多重检验。存储板块首当其冲（美光跌3.6%、应用材料跌近7%），而具备现金流与商业化能力的软件/应用层（Meta、微软）逆势走强，资金在科技内部明显轮动。" },
    { title: "存储超级周期遭遇「中国竞争」新变量，涨价持续性面临重估",
      text: "长鑫存储(CXMT)在第四届集成芯片大会上透露DDR5 RDIMM新一代产品年底量产，直接挑战美光、SK海力士、闪迪的定价权逻辑，成为周二存储股续跌的核心催化（美光-3.62%、SK海力士-3.19%）。此前存储股年内巨大涨幅积累的获利盘，叠加供应回升与竞争加剧的双重担忧，令「存储涨价周期见顶」预期升温。中期看AI内存需求与长约锁价仍构成支撑，但需台积电Q3财报及美光后续指引确认供需格局。" },
    { title: "自研ASIC与开放生态双线角力，推理算力成为AI芯片新战场",
      text: "微软Maia 300多吉瓦级部署计划、谷歌TPU、亚马逊Trainium等自研ASIC持续分流英伟达数据中心份额；IDC数据进一步显示英伟达中国AI芯片份额已降至34%。英伟达则以开放生态应对——OCP峰会开放Vera Rubin机柜设计、联合思科推400G USFP光模块、Meta采用Spectrum-6，将竞争从单芯片扩展到机柜、互连与软件的系统级层面。推理环节因利润最高、需求最确定，成为各方争夺焦点，芯片议价能力的分化将决定未来估值中枢。" }
  ],

  /* ============ 七、未来 1—3 个交易日关注事项（具体事件） ============ */
  watchlist: [
    { date: "10月14日", event: "美国9月CPI数据（关键通胀指标）", impact: "验证油价与供应冲击是否推升通胀，决定美联储10月27-28日会议连续加息概率，影响高估值科技股" },
    { date: "10月15日", event: "美国9月PPI数据", impact: "补充企业端价格压力，与CPI共同刻画通胀路径，影响利率与成长股估值" },
    { date: "10月15日", event: "台积电（TSM）公布Q3完整财报及4Q指引", impact: "验证Vera Rubin/Blackwell放量节奏与先进封装供需，牵动英伟达及AI芯片链" },
    { date: "10月15日前后", event: "ASML公布Q3财报（本周内）", impact: "EUV/High-NA光刻机订单与指引反映晶圆代工资本开支强度，是半导体景气先行指标" },
    { date: "10月16日", event: "美国9月零售销售数据", impact: "刻画消费需求韧性，补充通胀与增长预期，影响利率路径判断" },
    { date: "10月27-28日", event: "美联储FOMC议息会议（9月已加息25bp至3.75%-4.00%）", impact: "决定是否连续第二次加息，是科技股估值的中期关键变量" }
  ],

  /* ============ 八、页脚免责声明 ============ */
  disclaimer:
    "本报告基于公开市场信息整理，仅供华泰期货内部研究参考，不构成任何投资建议。股价数据以交易所官方为准；新闻以原始来源（SEC / 白宫 / BIS / Treasury / BEA / BLS / Federal Reserve / Reuters 等）为准。投资有风险，决策需谨慎。"
};
