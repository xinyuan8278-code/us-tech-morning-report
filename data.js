/**
 * ============================================================
 *  美股科技板块前一交易日行情日报 —— 数据文件（每日只需改这里）
 *  （2026-11-06 更新：对应美股交易日 2026-11-05）
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
    reportDate: "2026年11月06日",   // 报告发布日期（周五）
    tradeDate: "2026年11月05日",    // 对应美股交易日（前一交易日，周四）
    author: "华泰期货 · 研究",
    tag: "每日市场跟踪"
  },

  /* ============ 二、市场概览 ============ */
  overview: {
    /* 简短概括：指数变化 + 个股变化 + 重大事件 */
    text: "11月5日（周四）美股遭「AI交易大撤退」血洗，三大指数录2025年4月「解放日」以来最大单日跌幅：纳指-5.52%至24,315（较10月6日历史高点回落约11.9%、正式进入技术性调整区间）、标普500-4.36%至7,353.73、道指-3.44%至51,523.06，费城半导体指数暴跌12.25%（2020年3月来最大单日跌幅），纳指100跌约6.4%，标普500单日市值蒸发约3万亿美元。半导体与存储为重灾区：AMD-17.26%、闪迪-22.26%、美光-17.46%、英特尔-10.33%、英伟达-9.26%。核心触发为美国中期选举民主党横扫国会并夺得多州州长席位，德州候任州长Gina Hinojosa主张立即暂停数据中心建设，市场担忧AI基础设施扩张受阻；叠加高通Q4手机芯片收入-26%、指引偏弱，与苹果70亿美元发债、联储官员释放鹰派信号共振。10月非农（11/6）成下一关键变量。",
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
    { name: "SanDisk", code: "SNDK", change: "-0.00%", type: "超跌", reason: "11月5日单日暴跌约22.26%，领跌存储板块；费半暴跌、AI交易大撤退下，高Beta存储股遭最猛烈抛售，距近期高点显著回撤" },
    { name: "AMD", code: "AMD", change: "-0.00%", type: "超跌", reason: "11月5日单日暴跌约17.26%，回吐11月3日Q3财报超预期后的涨幅；数据中心建设政策不确定性重估AI算力芯片估值" },
    { name: "Micron", code: "MU", change: "-0.00%", type: "超跌", reason: "11月5日单日暴跌约17.46%，存储「超级周期」交易退潮；涨价边际效应递减+数据中心需求担忧叠加，估值与资金拥挤度双杀" }
  ],

  /* ============ 四、重点公司行情表 ============ */
  /* 超涨/超跌个股放最上方；无新闻的公司驱动因素简要说明即可 */
  stocks: [
    { name: "NVIDIA",    code: "NVDA",  change: "-0.00%", driver: "下跌约9.26%，抹平2026年以来全部累计涨幅转跌；AI交易大撤退下，作为AI算力核心标的遭机构集中减持，数据中心建设政策不确定性重估其增长预期" },
    { name: "Microsoft", code: "MSFT",  change: "-0.00%", driver: "下跌约3.58%，大型科技股普跌；外媒援引知情人士称微软接连撤销Nscale英国租约与得州扩容选项，市场担忧其AI资本开支节奏放缓" },
    { name: "Apple",     code: "AAPL",  change: "-0.00%", driver: "下跌约1.53%，七巨头中相对抗跌；同日宣布拟发行约70亿美元投资级债券用于回购与偿债（一年多来首次），资金面稳健、与AI基建发债潮性质不同" },
    { name: "Amazon",    code: "AMZN",  change: "-0.00%", driver: "下跌约2.19%，超大规模云厂商普跌；数据中心建设监管风险拖累AWS扩张叙事，但相对芯片股抗跌" },
    { name: "Alphabet",  code: "GOOGL", change: "-0.00%", driver: "下跌约2.20%；同日宣布投资170亿美元在怀俄明州建首个数据中心并自担全部电力成本，展现AI资本开支韧性，但整体仍随大盘走弱" },
    { name: "Meta",      code: "META",  change: "-0.00%", driver: "下跌约3.96%，大型科技股普跌；前期已发行150亿美元美元债用于AI基建，市场对其高额AI资本开支与回报质量存疑" },
    { name: "Broadcom",  code: "AVGO",  change: "-0.00%", driver: "下跌约10.43%，半导体普跌；AI定制芯片（ASIC）叙事受数据中心建设放缓预期压制，高Beta芯片股遭集中抛售" },
    { name: "AMD",       code: "AMD",   change: "-0.00%", driver: "下跌约17.26%，回吐11月3日Q3财报（营收+45%、数据中心+97%）超预期后的涨幅；市场担忧数据中心建设监管收紧将压制Instinct GPU出货前景" },
    { name: "Micron",    code: "MU",    change: "-0.00%", driver: "下跌约17.46%，存储板块重挫；存储涨价边际效应递减（集邦预计Q4 DRAM合约价涨幅收窄至10%-15%），叠加数据中心需求担忧，高估值存储股遭双杀" },
    { name: "SanDisk",   code: "SNDK",  change: "-0.00%", driver: "下跌约22.26%领跌存储，为11月5日美股跌幅最大个股之一；NAND「超级周期」交易退潮、资金拥挤度高，AI交易撤退下遭最猛烈抛售" }
  ],

  /* ============ 五、重要科技与政策新闻（一手来源） ============ */
  news: [
    {
      title: "美国中期选举民主党横扫国会并夺得多州州长，德州候任州长主张立即暂停数据中心建设，引发AI基础设施股抛售",
      originalTitle: "Nasdaq posts biggest daily drop in 19 months on fears of AI regulations after Democrats win Congress",
      source: "Reuters（经 The Straits Times 转载英文原文）",
      time: "2026年11月5日",
      type: "财经媒体",
      url: "https://www.straitstimes.com/business/companies-markets/nasdaq-posts-biggest-daily-drop-in-19-months-on-fears-of-ai-regulations",
      link: "https://www.straitstimes.com/business/companies-markets/nasdaq-posts-biggest-daily-drop-in-19-months-on-fears-of-ai-regulations",
      summary: "11月5日纳指暴跌5.52%，创19个月最大单日跌幅，并确认进入技术性调整区间（较10月6日历史高点回落逾10%）。核心触发为民主党在11月3日中期选举中横扫国会两院、并赢得德州、佐治亚、俄亥俄等多个数据中心重镇州长席位。德州候任州长Gina Hinojosa主张立即暂停数据中心建设并取消开发商税收优惠，市场担忧更严格的许可、电力与水资源监管将拖慢AI基础设施扩张节奏。费城半导体指数跌逾12%，英伟达跌逾9%，数据中心企业IREN、Applied Digital跌逾14%、CoreWeave跌近10%，标普500单日市值蒸发约3万亿美元。",
      impact: {
        direction: "利空（AI基础设施与半导体）",
        companies: "英伟达、AMD、美光、博通、台积电及数据中心/电力产业链",
        industry: "半导体、AI数据中心、云计算、电力与能源",
        logic: "民主党胜选改变AI产业政策预期，数据中心建设面临更严监管与更高成本，直接压制依赖「AI资本开支持续扩张」估值的芯片与基础设施股"
      }
    },
    {
      title: "美股科技股遭「AI交易大撤退」血洗，纳指跌5.52%，VIX恐慌指数飙升创18个月最大盘中升幅",
      originalTitle: "Wall Street fear gauge soars as retail traders bolt amid market rout",
      source: "Reuters（经 The Hindu Business Line 转载英文原文）",
      time: "2026年11月5日",
      type: "财经媒体",
      url: "https://www.thehindubusinessline.com/markets/wall-street-fear-gauge-soars-as-retail-traders-bolt-amid-market-rout/article71671752.ece",
      link: "https://www.thehindubusinessline.com/markets/wall-street-fear-gauge-soars-as-retail-traders-bolt-amid-market-rout/article71671752.ece",
      summary: "11月5日美股遭遇大规模抛售，芯片与数据中心相关股票领跌。Cboe波动率指数（VIX）盘中一度升11.75点至8个月高点28.36，创18个月最大盘中升幅；散户投资者当日净卖出超10亿美元，Vanda Research称其为「新冠疫情崩盘以来最大单日个股抛售」。野村预计杠杆ETF当日尾盘需卖出约470亿美元股票进行再平衡，其中大部分来自科技与AI基金。高盛主经纪商报告显示大型多策略对冲基金因重仓AI股而「大幅」亏损。分析师指出，抛售或是对前一交易日大涨的反向平仓与拥挤AI交易的整体去杠杆。",
      impact: {
        direction: "利空（市场情绪与流动性）",
        companies: "英伟达、AMD、美光及AI算力、数据中心产业链",
        industry: "半导体、AI基础设施、波动率/衍生品",
        logic: "散户撤离+杠杆ETF尾盘强平+对冲基金去杠杆三重卖压共振，加剧科技股抛售的自我强化，短期流动性风险上升"
      }
    },
    {
      title: "高通Q4手机芯片收入同比下滑26%、下季指引不及预期，盘后一度跌超7%，存储涨价侵蚀毛利率",
      originalTitle: "Qualcomm's smartphone chip sales fall short, guidance disappoints as memory costs rise",
      source: "CNBC / Reuters（英文财经媒体，经多源交叉核对）",
      time: "2026年11月4日",
      type: "财经媒体",
      url: "https://www.cnbc.com/quotes/QCOM",
      link: "https://www.cnbc.com/quotes/QCOM",
      summary: "高通11月4日盘后公布2026财年第四财季（截至9月）业绩：Non-GAAP营收104.42亿美元（同比-7%）、调整后EPS 2.17美元，略超预期；但核心的手机芯片收入51.37亿美元、同比骤降26%，低于市场预期。公司对2027财年第一财季的调整后EPS指引中值（约2.25美元）亦低于分析师预期。CFO帕尔希瓦拉表示存储芯片涨价推高智能手机物料成本、压制中低端机型出货，公司已于9月全线提价，但毛利率完整修复需待2027财年下半年。公司已与亚马逊及另一超大规模云厂商达成定制芯片协议，数据中心业务2027财年收入年化规模目标70亿美元。财报后高通股价盘后一度跌逾7%。",
      impact: {
        direction: "利空（手机芯片与半导体情绪）",
        companies: "高通、ARM及手机芯片产业链、存储厂商",
        industry: "智能手机芯片、数据中心定制芯片、存储器",
        logic: "手机芯片下滑印证存储涨价对终端需求的抑制，叠加指引偏弱，成为11月5日半导体板块重挫的直接催化之一；但数据中心定制芯片放量提供中期支撑"
      }
    },
    {
      title: "苹果拟发行约70亿美元投资级债券用于回购与偿债，一年多来首次重返美元债市场",
      originalTitle: "Apple plans about $7 billion bond sale for buybacks and debt repayment",
      source: "Bloomberg / Reuters（英文财经媒体，经彭博援引知情人士）",
      time: "2026年11月5日",
      type: "财经媒体",
      url: "https://www.bloomberg.com/news/articles/2026-11-05/apple-plans-about-7-billion-bond-sale",
      link: "https://www.bloomberg.com/news/articles/2026-11-05/apple-plans-about-7-billion-bond-sale",
      summary: "苹果11月5日启动约70亿美元的美元债发行，为一年多来首次重返投资级债券市场。本次发行分七档、期限2至10年，高盛、美银、德意志银行与摩根大通任联席簿记管理人。所募资金用于一般公司用途，包括股票回购与偿债。与Meta、微软、甲骨文等为AI基建大规模举债不同，分析师指出苹果此举属「机会主义融资」——公司持有约1370亿美元现金、每年经营现金流约1450亿美元，股东回报优先于超大规模AI基建支出。初步定价显示其固息债收益率仅较同期美债高出约0.45—0.8个百分点。",
      impact: {
        direction: "中性（苹果自身信用面稳健）",
        companies: "苹果",
        industry: "消费电子、科技公司信用债",
        logic: "苹果发债用于回购而非AI基建，凸显其与「AI烧钱」叙事的区隔；但科技巨头密集发债推升整体信用债供给，叠加利率环境，对成长股估值构成一定压制"
      }
    },
    {
      title: "联储官员哈马克、巴尔金释放鹰派信号，市场聚焦11月6日10月非农就业报告",
      originalTitle: "Fed officials hint at further rate hikes, focus shifts to October payrolls",
      source: "Reuters（英文财经媒体，经 The Straits Times 等转载）",
      time: "2026年11月5日",
      type: "财经媒体",
      url: "https://www.straitstimes.com/business/companies-markets/nasdaq-posts-biggest-daily-drop-in-19-months-on-fears-of-ai-regulations",
      link: "https://www.straitstimes.com/business/companies-markets/nasdaq-posts-biggest-daily-drop-in-19-months-on-fears-of-ai-regulations",
      summary: "克利夫兰联储主席哈马克（Beth Hammack）与里士满联储主席巴尔金（Thomas Barkin）11月5日先后暗示未来可能进一步加息。哈马克表示货币政策需转向限制性立场才能及时将通胀拉回2%目标，她上月曾对美联储维持利率不变投出反对票、主张加息；巴尔金则重申支持渐进加息。交易员已预期美联储在9月加息后、12月可能再度加息。市场焦点转向11月6日发布的美国10月非农就业报告，作为12月加息决策的关键依据。此前9月新增就业不及预期。",
      impact: {
        direction: "利空（利率敏感的高估值科技股）",
        companies: "高估值成长科技股整体",
        industry: "宏观经济、利率敏感板块",
        logic: "联储官员鹰派表态强化「更高更久」利率预期，抬升成长股贴现率，叠加中期选举政策不确定性，对科技股估值构成双重压制"
      }
    },
    {
      title: "谷歌宣布投资170亿美元在怀俄明州建设首个数据中心，并自担全部电力成本",
      originalTitle: "Google to build $17 billion data center in Wyoming, funding full power costs",
      source: "Reuters / CNBC（英文财经媒体，经华尔街见闻早餐转载交叉核对）",
      time: "2026年11月5日",
      type: "财经媒体",
      url: "https://www.reuters.com/technology/",
      link: "https://www.reuters.com/technology/",
      summary: "谷歌（Alphabet）11月5日宣布投资170亿美元在怀俄明州拉勒米县建设其首个数据中心，合作方包括Tallgrass Energy、Black Hills Energy、美国电力公司及Related Digital。谷歌承诺100%承担数据中心全部电力费用，并覆盖自身增长带来的基础设施建设成本，不转嫁至当地社区或公用事业用户。能源方案采用702兆瓦商业规模燃料电池装置并配套碳捕获与封存，为同类项目中规模最大。此举显示超大规模云厂商仍在推进AI基础设施扩张，与市场对数据中心建设放缓的担忧形成对照。",
      impact: {
        direction: "中性偏多（AI资本开支韧性）",
        companies: "Alphabet/谷歌、电力与能源设备产业链",
        industry: "AI数据中心、云计算、燃料电池与能源",
        logic: "谷歌以「自担电力成本」方式化解地方反对与监管阻力，彰显超大规模云厂商AI基建投入的延续性，部分对冲民主党胜选带来的数据中心放缓担忧"
      }
    }
  ],

  /* ============ 六、当日最值得关注的 3 个交易逻辑 ============ */
  logics: [
    { title: "中期选举重塑AI产业政策预期：从「宽松监管」到「数据中心建设受限」，AI交易的核心前提被挑战",
      text: "11月5日暴跌的本质，是市场对「AI资本开支持续加速」这一核心前提的重新定价。民主党横扫国会并夺得德州、佐治亚、俄亥俄等数据中心重镇州长席位，德州候任州长Gina Hinojosa主张立即暂停数据中心建设、取消开发商税收优惠。德州占美国规划数据中心装机容量近30%，一旦行政暂停落地，将直接冲击芯片、存储、电力与光通信的订单兑现节奏。市场交易的逻辑从「谁烧得起」切换到「建设会不会被叫停」，这是AI算力股估值体系面临的一次根本性重估。" },
    { title: "存储「超级周期」交易退潮：涨价边际效应递减+需求端买单能力承压，高估值与高拥挤度遭双杀",
      text: "闪迪-22.26%、美光-17.46%的暴跌，叠加高通手机芯片收入-26%（存储涨价推高手机成本、抑制中低端换机），暴露出存储「超级周期」的内在脆弱性。一方面，集邦咨询预计Q4 DRAM合约价涨幅收窄至10%-15%，涨价边际效应递减；另一方面，存储涨价已真实传导至终端成本端、抑制需求，苹果下调圣诞季毛利率指引即是例证。当「涨价驱动利润」遭遇「涨价反噬需求」，叠加数据中心需求担忧，此前估值与资金高度拥挤的存储股成为最脆弱的抛售标的。" },
    { title: "利率与流动性双收紧：联储官员鹰派+VIX飙升+杠杆ETF强平，短期市场自我强化下跌风险上升",
      text: "哈马克、巴尔金两位联储官员释放加息信号，强化「更高更久」利率预期，压制成长股估值；与此同时，VIX单日飙升逾11点至8个月高点、散户单日净卖出超10亿美元、野村预计杠杆ETF尾盘需卖出约470亿美元股票再平衡，形成「波动率上升→系统性策略降仓→进一步抛售」的负反馈。在高估值、高拥挤的AI科技股中，这一流动性风险被放大。短期需警惕波动率驱动的被动抛售延续，直到10月非农数据（11/6）为利率路径提供方向。" }
  ],

  /* ============ 七、未来 1—3 个交易日关注事项（具体事件） ============ */
  watchlist: [
    { date: "11月6日（周五）", event: "美国10月非农就业报告、失业率与薪资增速（北京时间21:30）", impact: "非农与薪资增速是美联储12月加息决策的关键数据，直接决定利率敏感科技股估值方向与抛售是否延续" },
    { date: "11月6日（周五）", event: "美联储主席及多位官员讲话（哈马克、巴尔金表态后市场关注度上升）", impact: "官员对12月加息的进一步表态将影响「更高更久」预期，扰动成长股贴现率" },
    { date: "未来1—3个交易日", event: "民主党当选州长（德州Gina Hinojosa等）上任初期行政命令动向", impact: "若德州正式颁布数据中心建设暂停令或取消税收优惠，将进一步压制AI基础设施与芯片、存储、电力产业链" },
    { date: "近期（11月中下旬）", event: "英伟达财报临近（AI算力景气度关键验证）", impact: "英伟达财报为AI算力需求与「数据中心建设放缓」担忧的关键检验，本周或提前定价" }
  ],

  /* ============ 八、页脚免责声明 ============ */
  disclaimer:
    "本报告基于公开市场信息整理，仅供华泰期货内部研究参考，不构成任何投资建议。股价数据以交易所官方为准；新闻以原始来源（SEC / 白宫 / BIS / Treasury / BEA / BLS / Federal Reserve / Reuters 等）为准。投资有风险，决策需谨慎。"
};
