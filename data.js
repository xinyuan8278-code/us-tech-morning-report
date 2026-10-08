/**
 * ============================================================
 *  美股科技板块前一交易日行情日报 —— 数据文件（每日只需改这里）
 *  （2026-10-08 更新：对应美股交易日 2026-10-07）
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
    reportDate: "2026年10月08日",   // 报告发布日期（周四）
    tradeDate: "2026年10月07日",    // 对应美股交易日（前一交易日，周三）
    author: "华泰期货 · 研究",
    tag: "每日市场跟踪"
  },

  /* ============ 二、市场概览 ============ */
  overview: {
    /* 简短概括：指数变化 + 个股变化 + 重大事件 */
    text: "10月7日美股自历史高位小幅回落：纳指-0.22%终结五连涨、标普-0.22%、道指-0.66%，30年期美债收益率触及24年新高、10年期盘中升破5.36%压制估值；费半-1.15%。美光受HBM需求强劲与供货价上调提振逆势涨4.06%领跑，闪迪获花旗重申买入涨1.92%，Meta跌2.38%领跌大型科技。美联储9月会议纪要显示全体一致加息25bp、多数官员倾向年内再加息一次，并明确提及AI基建推升通胀；IEA同意加快释放1亿桶原油储备，油价回落至88美元附近。",
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
    { name: "NVIDIA",    code: "NVDA",  change: "-0.00%", driver: "小幅回落，-0.74%至237.47美元；市值逼近6万亿美元后获利了结，但AI需求叙事仍强，SpaceX拟筹400亿美元采购英伟达芯片的报道再度验证GPU需求外溢" },
    { name: "Microsoft", code: "MSFT",  change: "-0.00%", driver: "基本持平，+0.09%至529.76美元；纳德拉与黄仁勋联合发布搭载英伟达RTX Spark芯片的Surface Laptop Ultra（2599美元起），Windows与Copilot与英伟达生态绑定，本周累涨约3.3%" },
    { name: "Apple",     code: "AAPL",  change: "-0.00%", driver: "小幅走强，+0.91%至336.67美元；市场关注10月中旬智能家居产品发布预期，前期新CEO特努斯重组担忧有所消化" },
    { name: "Amazon",    code: "AMZN",  change: "-0.00%", driver: "大型科技领涨，+1.42%至259.92美元；FCC频谱投票路径或利好卫星直连手机（D2D）业务，AWS云与AI资本开支叙事延续" },
    { name: "Alphabet",  code: "GOOGL", change: "-0.00%", driver: "小幅走强，+0.81%至350.50美元；与Constellation Energy达成3.59GW长期核电协议支撑AI数据中心能源需求，股价本周稳中有升" },
    { name: "Meta",      code: "META",  change: "-0.00%", driver: "领跌大型科技，-2.38%至721.31美元；Muse AI代理推出一个月后强势上涨后获利回吐，花旗测算Muse至2030年或带来逾270亿美元年收入但短期算力成本承压" },
    { name: "Broadcom",  code: "AVGO",  change: "-0.00%", driver: "定制ASIC微涨，+0.19%至376.51美元；费半-1.15%环境下逆势收红，AI算力与网络芯片需求支撑" },
    { name: "AMD",       code: "AMD",   change: "-0.00%", driver: "小幅回落，-0.55%至645.86美元；前一日创新高后回吐，苏姿丰本周访亚洽谈三星/海力士HBM供应，AI加速器扩产预期支撑估值" },
    { name: "Micron",    code: "MU",    change: "-0.00%", driver: "成交额居首、放量大涨，+4.06%至1088.00美元；财报后HBM需求强劲、已完成来年大部分HBM供货协议且签约价明显上调，CEO称2027/2028存储供需更紧，花旗看好NAND供应紧张延续" },
    { name: "SanDisk",   code: "SNDK",  change: "-0.00%", driver: "存储走强，+1.92%至1692.42美元；花旗重申买入、目标价2100美元，认为NAND供应紧张有望持续至2028年，企业级存储与QLC Stargate平台放量" }
  ],

  /* ============ 五、重要科技与政策新闻（一手来源） ============ */
  news: [
    {
      title: "美联储9月会议纪要：全体一致加息25bp，多数官员预计年内再加息一次，并明确AI基建推升通胀",
      originalTitle: "Minutes of the Federal Open Market Committee, September 15–16, 2026",
      source: "Federal Reserve（美联储官网）",
      time: "2026年10月07日",
      type: "官方",
      url: "https://www.federalreserve.gov/monetarypolicy/fomcminutes20260916.htm",
      link: "https://www.federalreserve.gov/monetarypolicy/fomcminutes20260916.htm",
      summary: "美联储10月7日公布9月15-16日FOMC会议纪要。纪要显示全体成员一致同意将联邦基金利率目标区间上调25bp至3.75%-4.00%（2023年7月以来首次加息），多数与会者认为\"年底前进一步提高利率目标区间可能是合适的\"。纪要明确将通胀归因于关税、地缘政治推升的能源/投入成本，以及\"AI建设（AI buildout）带动的科技消费品价格上涨\"；部分官员指出AI基建可能使中期总需求超过总供给、给通胀带来上行压力。下次会议定于10月27-28日。",
      impact: {
        direction: "利空（利率）",
        companies: "高估值成长股、半导体、大型科技",
        industry: "利率、宏观、AI",
        logic: "纪要确认鹰派基调并首次官方点名AI资本开支推升通胀，强化长端利率上行预期，压制高久期科技股估值；但市场对10月连续加息定价已降至约19%，部分缓解冲击"
      }
    },
    {
      title: "长端美债收益率续创多年新高，30年期触及24年高位，10年期盘中升破5.36%",
      originalTitle: "Wall Street ends lower, off record highs, as Treasury yields climb",
      source: "Reuters（经 Livemint）",
      time: "2026年10月07日",
      type: "财经媒体",
      url: "https://www.livemint.com/market/wall-street-ends-lower-off-record-highs-as-treasury-yields-climb-11791403312250.html",
      link: "https://www.livemint.com/market/wall-street-ends-lower-off-record-highs-as-treasury-yields-climb-11791403312250.html",
      summary: "据路透社10月7日报道，长期美债收益率恢复上行，30年期国债收益率触及24年新高、10年期盘中一度升至2002年以来高位，令美股自周二历史收盘高位回落。伊朗战争相关供应担忧推高油价，重燃通胀担忧并延长央行加息周期预期，叠加企业与主权债务攀升，引发全球债市抛售。CME FedWatch显示10月会议连续第二次加息的概率已从一周前的37.6%降至不足20%。美国30年期固定房贷利率升至近三年高位，住宅与房屋建筑板块分别下跌2.3%和2.9%。",
      impact: {
        direction: "利空（利率）",
        companies: "高估值成长股、住宅建筑链、半导体",
        industry: "利率、宏观",
        logic: "长端利率飙升直接压制高久期成长股与芯片股估值，是当日三大指数回落的主因；房贷利率上行同步压制地产链"
      }
    },
    {
      title: "美光HBM需求强劲、供货价上调，CEO称2027/2028存储供需更紧，股价逆势涨4.06%",
      originalTitle: "Micron Sees Tighter Memory Supply Through FY28",
      source: "Reuters（经多家行业媒体）",
      time: "2026年10月07日",
      type: "财经媒体",
      url: "https://www.htelec.com/blog/Memory-Chip-Supply-Tightness-May-Worsen-as-AI-Demand-Absorbs-DRAM-and-NAND-Capacity",
      link: "https://www.htelec.com/blog/Memory-Chip-Supply-Tightness-May-Worsen-as-AI-Demand-Absorbs-DRAM-and-NAND-Capacity",
      summary: "美光10月7日放量大涨4.06%至1088.00美元，成交额321.7亿美元居全市场首位。据路透社援引美光9月30日财报电话会，CEO桑杰·梅赫罗特拉表示2027、2028年存储供需将比2026年\"紧张得多\"，公司已完成来年大部分HBM供货协议且签约价明显上调，2027年超75%产量已预订、洽谈重心转向锁定2028年供应。美光已进入HBM4量产出货阶段，数据中心业务收入环比增56%、毛利率达90%；TrendForce预计Q4传统DRAM合同价环比再涨10%-15%。",
      impact: {
        direction: "利好",
        companies: "美光（MU）、闪迪（SNDK）、SK海力士、三星、存储链",
        industry: "存储、半导体、AI",
        logic: "HBM定价权与供给紧张确认，强化存储超级周期叙事，资金从GPU外溢至存储端，是费半回落环境下美光逆势领涨的核心驱动"
      }
    },
    {
      title: "花旗重申闪迪买入评级、目标价2100美元，认为NAND供应紧张有望持续至2028年",
      originalTitle: "SanDisk Stock Has Rocketed 580% in 2026 on the AI Memory Shortage",
      source: "Reuters / Investing.com（评级汇总）",
      time: "2026年10月07日",
      type: "财经媒体",
      url: "https://www.investing.com/equities/sandisk-corp-consensus-estimates",
      link: "https://www.investing.com/equities/sandisk-corp-consensus-estimates",
      summary: "闪迪10月7日收涨1.92%至1692.42美元。花旗维持\"买入\"评级、目标价2100美元（10月1日确认），认为NAND供应紧张有望持续至2028年；Rosenblatt 9月22日首予买入、目标价2400美元，Bernstein SocGen目标价高达3000美元。闪迪数据中心营收同比暴增645%、毛利率升至78.4%，已与8家大型数据中心客户签订多年期NAND供货协议、锁定额外约110亿美元收入，并推进QLC Stargate平台放量与BiCS8/BiCS10制程。公司2026年累计涨幅超580%。",
      impact: {
        direction: "利好",
        companies: "闪迪（SNDK）、美光（MU）、存储链",
        industry: "存储、NAND、AI",
        logic: "机构持续上调目标价验证NAND结构性短缺与定价权，企业级SSD需求受AI推理与检索驱动高速增长，支撑存储板块整体走强"
      }
    },
    {
      title: "IEA成员国同意加快释放约1亿桶石油储备并优先投放柴油，油价回落",
      originalTitle: "IEA members support accelerating release of about 100 mln barrels of oil stocks",
      source: "Xinhua（新华社英文）",
      time: "2026年10月07日",
      type: "财经媒体",
      url: "https://english.news.cn/20261007/6cb97e800a1f462386424ecb38fc7d09/c.html",
      link: "https://english.news.cn/20261007/6cb97e800a1f462386424ecb38fc7d09/c.html",
      summary: "国际能源署（IEA）10月7日发表声明，成员国政府同意\"尽快\"完成3月承诺的石油储备释放，若全部投放市场预计再释放约1亿桶石油；并鉴于柴油市场紧张，同意\"尽可能\"优先投放柴油储备。截至目前，成员国已按3月集体行动释放约3.25亿桶，仍持有约11亿桶公共应急储备（含超2亿桶柴油）。当日WTI原油收跌1.3%至88.28美元、布伦特跌0.38%至100.20美元，油价回落缓解通胀与长端利率压力。",
      impact: {
        direction: "中性偏多（通胀缓解）",
        companies: "高估值成长股、半导体、消费科技",
        industry: "能源、通胀、利率",
        logic: "油价与柴油供应担忧缓和，边际缓解通胀与长端利率压力，为高估值科技股提供支撑；但地缘（伊朗/霍尔木兹）不确定性尚未解除"
      }
    },
    {
      title: "微软与英伟达联合发布搭载RTX Spark芯片的Surface Laptop Ultra，AI PC商业化再进一步",
      originalTitle: "Microsoft Puts Nvidia Inside a $2,599 Laptop",
      source: "Money Morning（行业媒体）",
      time: "2026年10月08日",
      type: "行业媒体",
      url: "https://moneymorning.com/2026/10/08/magnificent-7-weekly-report-october-8-2026",
      link: "https://moneymorning.com/2026/10/08/magnificent-7-weekly-report-october-8-2026",
      summary: "微软与英伟达本周联合发布Surface Laptop Ultra，基础款2599美元起、搭载英伟达RTX Spark芯片，高配版统一内存最高128GB、价格近5900美元。黄仁勋与纳德拉在旧金山同台，微软将Windows、Copilot与Surface硬件绑定英伟达芯片。预售10月8日开启、10月16日发货。市场反响积极，微软本周累涨约3.3%、英伟达累涨约4%。此举标志着AI交易叙事从数据中心机架延伸至终端设备，英伟达获得服务器之外的新分发渠道。",
      impact: {
        direction: "利好",
        companies: "微软（MSFT）、英伟达（NVDA）、AI PC链",
        industry: "AI PC、消费电子、半导体",
        logic: "AI能力下沉至终端设备，拓宽英伟达分销渠道与微软Copilot生态，强化AI商业化从云端向端侧扩散的叙事"
      }
    },
    {
      title: "SpaceX拟筹资400亿美元采购英伟达芯片，AI算力融资的\"循环式\"债务引发关注",
      originalTitle: "SpaceX falls after reports of $40 billion financing push",
      source: "Reuters",
      time: "2026年10月07日",
      type: "财经媒体",
      url: "https://local.newsbreak.com/reuters-555486/4931663627355-trading-day-stocks-bonds-in-delicate-dance",
      link: "https://local.newsbreak.com/reuters-555486/4931663627355-trading-day-stocks-bonds-in-delicate-dance",
      summary: "据路透社10月7日报道，马斯克旗下SpaceX正与银行及资产管理公司洽谈约400亿美元融资（含约100亿银行贷款与300亿投资级债券，阿波罗全球管理或牵头），用于采购英伟达AI芯片，融资可能到2027年才完成。消息令SpaceX股价当日收跌约2.6%-2.8%。摩根士丹利此前测算AI数据中心相关表外债务已超3万亿美元，Jim Chanos、Steve Eisman、Michael Burry等资深投资者对AI融资的循环性与不透明性发出警告。",
      impact: {
        direction: "中性（需求验证/风险并存）",
        companies: "SpaceX、英伟达（NVDA）、AI算力链",
        industry: "AI基础设施、融资、数据中心",
        logic: "印证AI算力需求从云厂商外溢至新买家、强化英伟达订单叙事，但天量杠杆化融资的循环性也引发AI资本开支可持续性的市场疑虑"
      }
    }
  ],

  /* ============ 六、当日最值得关注的 3 个交易逻辑 ============ */
  logics: [
    { title: "长端利率飙升与AI通胀担忧交织，压制高估值成长股估值中枢",
      text: "30年期美债收益率触及24年新高、10年期盘中升破5.36%，叠加美联储纪要首次官方点名\"AI建设推升通胀\"，强化了利率与AI资本开支之间的负反馈担忧。高久期成长股与芯片股首当其冲，纳指终结五连涨、费半跌1.15%。但市场对10月连续加息定价已降至约19%，显示资金并未全面离场，而是在利率与AI产业趋势之间反复博弈。" },
    { title: "存储超级周期定价权持续强化，资金从GPU外溢至存储链",
      text: "美光财报后确认2027/2028存储供需更紧、HBM供货价明显上调，花旗重申闪迪买入并指向NAND紧张延续至2028年。费半整体回落背景下美光逆势放量大涨4.06%、成交额居全市场首位，闪迪涨1.92%。AI资本开支的受益主线正从GPU向DRAM/HBM/NAND存储端传导，存储板块成为利率承压环境下最具alpha的结构性方向。" },
    { title: "油价回落与地缘不确定性博弈，通胀预期走向决定科技股风险偏好",
      text: "IEA同意加快释放1亿桶原油储备并优先投放柴油，WTI回落至88美元附近，边际缓解通胀与长端利率压力、为高估值科技股提供支撑。但伊朗战争相关供应风险与霍尔木兹海峡油流受阻仍未解除，若油价再度冲高，将通过通胀-利率链条二次压制科技股估值。油价走势成为下一阶段科技股风险偏好的关键外生变量。" }
  ],

  /* ============ 七、未来 1—3 个交易日关注事项（具体事件） ============ */
  watchlist: [
    { date: "10月09日", event: "美国9月CPI数据（通胀核心指标，检验AI基建/能源推升通胀的程度）", impact: "决定美联储10月27-28日会议连续加息概率，影响高估值科技股估值" },
    { date: "10月13日", event: "苹果智能家居产品发布预期（与LG合作，聚焦AI家居生态）", impact: "苹果AI终端商业化进展，影响消费电子与AAPL情绪" },
    { date: "10月16日", event: "微软Surface Laptop Ultra开始发货（搭载英伟达RTX Spark芯片）", impact: "AI PC商业化落地验证，影响微软/英伟达端侧AI叙事" },
    { date: "10月21日", event: "特斯拉（TSLA）盘后发布Q3财报（交付48.65万辆已超预期，关注AI/机器人出租车进展）", impact: "检验AI/自动驾驶叙事兑现，影响大型科技情绪" },
    { date: "10月27-28日", event: "美联储FOMC议息会议（下次利率决议）", impact: "决定是否连续第二次加息，是科技股估值的中期关键变量" }
  ],

  /* ============ 八、页脚免责声明 ============ */
  disclaimer:
    "本报告基于公开市场信息整理，仅供华泰期货内部研究参考，不构成任何投资建议。股价数据以交易所官方为准；新闻以原始来源（SEC / 白宫 / BIS / Treasury / BEA / BLS / Federal Reserve / Reuters 等）为准。投资有风险，决策需谨慎。"
};
