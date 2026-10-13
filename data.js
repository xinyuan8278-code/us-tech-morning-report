/**
 * ============================================================
 *  美股科技板块前一交易日行情日报 —— 数据文件（每日只需改这里）
 *  （2026-10-13 更新：对应美股交易日 2026-10-12）
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
    reportDate: "2026年10月13日",   // 报告发布日期（周二）
    tradeDate: "2026年10月12日",    // 对应美股交易日（前一交易日，周一，哥伦布日）
    author: "华泰期货 · 研究",
    tag: "每日市场跟踪"
  },

  /* ============ 二、市场概览 ============ */
  overview: {
    /* 简短概括：指数变化 + 个股变化 + 重大事件 */
    text: "10月12日（哥伦布日，债市休市、股市照常）美股涨跌互现：道指+0.38%至51850.55、标普-0.06%至7807.24、纳指-0.44%至27245.90。博通CEO陈福阳与英特尔CEO陈立武在新加坡同台警告「资本而非芯片/存储/电力」成AI最大瓶颈、并将部分AI投资者比作赌场赌徒，重挫半导体与存储（费半-2.67%四连跌、闪迪-6%、美光-3.88%跌破1000美元、SK海力士-4%）；大型科技分化（Meta+3%领涨、微软/苹果+1%，英伟达/亚马逊-1%），光通信大跌（Lumentum-9.78%）。中东局势推升油价（WTI+2.06%至93.74美元）。",
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
    { name: "SanDisk（闪迪）", code: "SNDK", change: "-0.00%", note: "超跌：前一交易日大跌约6%，为存储板块领跌标的；触发原因为市场担忧高性能DRAM供应量今年底攀升、存储涨价周期见顶预期升温，叠加博通/英特尔CEO「AI资本瓶颈」论令半导体整体承压" },
    { name: "Micron（美光）", code: "MU", change: "-0.00%", note: "超跌：前一交易日收跌约3.88%、跌破每股1000美元关口；存储板块集体抛售，SK海力士同步大跌超4%，供应回升预期与估值高位共振引发获利了结" }
  ],

  /* ============ 四、重点公司行情表 ============ */
  /* 超涨/超跌个股放最上方；无新闻的公司驱动因素简要说明即可 */
  stocks: [
    { name: "SanDisk",   code: "SNDK",  change: "-0.00%", driver: "超跌领跌（约-6%）；市场担忧高性能DRAM供应量今年底开始攀升、存储超级周期见顶预期升温，叠加博通/英特尔CEO「资本取代芯片成为AI最大瓶颈」的警告，存储板块遭集中抛售，闪迪为板块领跌标的" },
    { name: "Micron",    code: "MU",    change: "-0.00%", driver: "超跌（约-3.88%）；跌破每股1000美元心理关口，SK海力士同步跌超4%；供应回升预期叠加前期涨幅巨大（年内累涨约260%）引发获利了结，存储定价权逻辑遭遇短期挑战" },
    { name: "NVIDIA",    code: "NVDA",  change: "-0.00%", driver: "小幅走弱（约-1%）；博通/英特尔CEO警告「资本瓶颈」波及整个AI硬件链，英伟达承压；但基本面需求仍旺，CEO黄仁勋此前定位「AI工厂」可投资新基建，本周关注台积电Q3财报对Vera Rubin/Blackwell节奏的指引" },
    { name: "Microsoft", code: "MSFT",  change: "-0.00%", driver: "小幅上涨（约+1%）；大型科技中偏防御，Copilot生态与Azure云叙事延续；媒体披露微软计划明年大规模部署自研Maia 300芯片、目标推理效率提升40%，自研ASIC降低对英伟达依赖逻辑受关注" },
    { name: "Apple",     code: "AAPL",  change: "-0.00%", driver: "小幅上涨（约+1%）；随大盘科技防御属性获得支撑，消费电子需求端与存储涨价推升整机成本的担忧此前已部分消化，相对半导体硬件股表现稳健" },
    { name: "Amazon",    code: "AMZN",  change: "-0.00%", driver: "小幅走弱（约-1%）；媒体披露亚马逊正洽谈以约70亿美元收购芯片架构无关的AI中间件初创Decart，意图在GPU/Trainium/Inferentia间实现硬件解耦、降低对英伟达依赖，AWS资本开支逻辑延续" },
    { name: "Alphabet",  code: "GOOGL", change: "-0.00%", driver: "小幅上涨（约+0.5%）；谷歌云与Gemini叙事延续，作为OpenAI主要对手受益于AI应用层竞争；Alphabet此前拟募资至多850亿美元加码AI基建，资本开支力度行业居前" },
    { name: "Meta",      code: "META",  change: "-0.00%", driver: "领涨大型科技（约+3%至4%，市值一度突破1.9万亿美元）；Muse个人AI代理下载与商业化势头强劲，市场对其AI应用层变现能力重估，短期算力成本压力被盈利前景预期所抵消" },
    { name: "Broadcom",  code: "AVGO",  change: "-0.00%", driver: "下跌（约-1%至-2%）；CEO陈福阳新加坡警告「资本是AI最大瓶颈」并称部分投资者如赌场赌徒，反噬自身股价；但其为OpenAI/Anthropic定制ASIC、数百亿美元融资循环的结构性叙事仍在，光通信业务亦受板块大跌拖累" },
    { name: "AMD",       code: "AMD",   change: "-0.00%", driver: "下跌（约-2%至-3%）；AI硬件链整体承压，博通/英特尔CEO「资本瓶颈」论引发市场对AI加速器需求曲线与融资可持续性的重新审视，AMD与OpenAI的芯片供应及股权绑定受关注" }
  ],

  /* ============ 五、重要科技与政策新闻（一手来源） ============ */
  news: [
    {
      title: "博通、英特尔CEO同台警告：资本正取代芯片、存储与电力，成为AI扩张的最大瓶颈",
      originalTitle: "Chip Stocks Fall As Broadcom, Intel CEOs Warn About AI Funding",
      source: "Investor's Business Daily（援引 CNBC / Bloomberg）",
      time: "2026年10月12日",
      type: "财经媒体",
      url: "https://www.investors.com/news/technology/chip-stocks-fall-as-broadcom-intel-ceos-warn-about-ai-funding",
      link: "https://www.investors.com/news/technology/chip-stocks-fall-as-broadcom-intel-ceos-warn-about-ai-funding",
      summary: "博通CEO陈福阳与英特尔CEO陈立武周一在新加坡DBS Asia Future Forward大会同台表态：随着基础设施支出持续扩张，资本（而非芯片、存储或电力供应）将成为AI行业最大的制约因素。陈福阳称「最大的约束是资本」，并将许多AI投资者比作赌场赌徒——「很多人根本不知道自己在投什么，设定了极端预期，最后发现几乎就像在赌场」。陈立武则指出融资成本上升与投资回报（ROI）不确定性是核心挑战。两人对近期需求仍持乐观，陈福阳预计算力供需失衡或延续至2029甚至2030年。此番表态重挫半导体板块，费城半导体指数当日收跌约2.6%、录得四连跌。",
      impact: {
        direction: "利空（短期情绪）/ 结构性提示",
        companies: "博通、英特尔、英伟达、AMD、美光、SK海力士、存储链",
        industry: "AI基础设施、半导体、存储、算力融资",
        logic: "AI叙事焦点从「抢算力」转向「验证回报」，融资能力与ROI兑现成为新估值变量；短期压制芯片股情绪，中长期利好有现金流与商业化能力验证的头部厂商"
      }
    },
    {
      title: "存储芯片股集体重挫：美光跌破1000美元、闪迪跌近6%，供应回升预期引发抛售",
      originalTitle: "U.S. stocks end mixed as tech shares slide",
      source: "新华社英文版（Xinhua）",
      time: "2026年10月12日",
      type: "官方（通讯社）",
      url: "http://chinaview.cn/20261013/5d710191bc474624a85c44aaffc618d1/c.html",
      link: "http://chinaview.cn/20261013/5d710191bc474624a85c44aaffc618d1/c.html",
      summary: "受博通、英特尔CEO「AI资本瓶颈」言论及市场对高性能DRAM供应量今年底开始攀升的担忧影响，存储与芯片股周一遭集中抛售。费城半导体指数收跌约2.6%、录得连续第四个交易日下跌并盘中触及三周新低；闪迪跌近6%，SK海力士美股跌超4%，美光收跌3.88%并跌破每股1000美元关口。光通信同步重挫，Lumentum暴跌9.78%为纳指最差，Coherent、康宁跌逾6%。与此形成反差的是，大型科技中Meta反弹超3%，Salesforce因美银上调评级至买入涨超2%。",
      impact: {
        direction: "利空（存储/半导体）",
        companies: "美光、闪迪、SK海力士、希捷、西部数据、Lumentum、康宁",
        industry: "存储、DRAM、NAND、光通信、半导体",
        logic: "存储超级周期「供应回升+估值高位」共振引发获利了结，DRAM涨价预期见顶担忧升温；但AI内存需求与长约锁价的中期支撑仍在，短期属高位情绪释放"
      }
    },
    {
      title: "美联储哈马克称仍需进一步收紧货币政策，10月加息概率升至约20.5%",
      originalTitle: "Fed's Hammack: further tightening still needed as inflation pressures broaden beyond AI",
      source: "CME FedWatch / 路透社综合（英文）",
      time: "2026年10月12日",
      type: "财经媒体",
      url: "https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html",
      link: "https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html",
      summary: "克利夫兰联储主席哈马克周一表示，仍需进一步收紧货币政策，但对加息步伐保持开放态度；她指出通胀压力正从人工智能领域扩散开来，其他企业表现同样强劲、并已准备好开展投资。受油价反弹推升的通胀预期影响，CME FedWatch显示交易员对美联储10月加息概率的定价升至约20.5%（高于上周五的17.7%）。本周即将公布的9月CPI与PPI数据将成为关键验证，市场焦点亦落在10月27-28日FOMC会议是否连续第二次加息。",
      impact: {
        direction: "利空（利率）",
        companies: "大型科技、半导体、高久期成长股（整体）",
        industry: "宏观、利率、通胀",
        logic: "油价反弹叠加官员鹰派表态推升加息预期，压制高估值科技股；若本周CPI超预期，长端利率二次上行将进一步冲击成长股估值"
      }
    },
    {
      title: "中东局势再起波澜推升油价，WTI涨2.06%至93.74美元、布伦特涨1.84%",
      originalTitle: "Oil prices rise as supply worries persist despite Russia-Ukraine energy ceasefire",
      source: "新华社英文版（Xinhua）",
      time: "2026年10月12日",
      type: "官方（通讯社）",
      url: "http://chinaview.cn/20261013/5d710191bc474624a85c44aaffc618d1/c.html",
      link: "http://chinaview.cn/20261013/5d710191bc474624a85c44aaffc618d1/c.html",
      summary: "尽管特朗普上周末宣布俄乌「能源停火」，但沙特利雅得哈立德国王国际机场近期接连遭也门胡塞武装袭击，中东供应担忧挥之不去，国际油价周一上涨。WTI原油11月合约涨1.89美元（+2.06%）收于93.74美元/桶，布伦特原油12月合约涨1.93美元（+1.84%）收于106.65美元/桶。美元指数同步上行，贵金属承压回落。能源价格回升边际抬升通胀预期，对依赖低利率环境的高估值科技股构成估值压力。",
      impact: {
        direction: "利空（宏观）",
        companies: "大型科技、半导体（整体）",
        industry: "宏观、能源、通胀、利率",
        logic: "油价上涨推升通胀预期、强化美联储收紧动机，长端利率居高不下，压制高久期成长股估值；能源板块成为资金避风港"
      }
    },
    {
      title: "微软拟明年大规模部署自研Maia 300芯片，目标推理效率提升40%",
      originalTitle: "Microsoft plans large-scale deployment of Maia 300 chip next year, targeting 40% inference efficiency gain",
      source: "每日经济新闻（援引英文行业报道）",
      time: "2026年10月12日",
      type: "财经媒体",
      url: "https://new.qq.com/rain/a/20261013A02W8A00",
      link: "https://new.qq.com/rain/a/20261013A02W8A00",
      summary: "据媒体报道，微软计划明年大规模部署自研AI芯片Maia 300，目标将推理效率提升40%。此举是微软在OpenAI合作之外推进自研AI算力、降低对英伟达GPU依赖的重要一步，也与行业自研ASIC趋势（谷歌TPU、亚马逊Trainium、博通定制芯片）一脉相承。在博通、英特尔CEO同日警告「资本瓶颈」的背景下，超大规模云厂商通过自研芯片摊薄单位算力成本、改善AI投资回报，成为对冲融资约束的关键路径。",
      impact: {
        direction: "利好（微软）/ 中性（英伟达）",
        companies: "微软、英伟达、台积电、博通、ASIC链",
        industry: "AI芯片、自研ASIC、云计算、数据中心",
        logic: "云厂商自研芯片加速，短期缓解AI资本开支回报压力、利好微软成本结构；中长期或逐步分流英伟达数据中心份额，强化ASIC产业链景气"
      }
    },
    {
      title: "亚马逊洽谈约70亿美元收购AI中间件初创Decart，推动芯片架构无关化以降低对英伟达依赖",
      originalTitle: "Amazon in $7 billion talks for chip-agnostic AI middleware startup Decart",
      source: "The Gist（AI Brief，援引 Bloomberg 等）",
      time: "2026年10月12日",
      type: "行业媒体",
      url: "https://aigist.co/briefs/2026-10-12/ai-s-hard-limits-power-safety-and-capital-discipline-converge",
      link: "https://aigist.co/briefs/2026-10-12/ai-s-hard-limits-power-safety-and-capital-discipline-converge",
      summary: "据报道，亚马逊正洽谈以约70亿美元收购AI中间件初创公司Decart，其核心产品允许AI工作负载在无需重新设计的情况下跨不同芯片架构迁移。这一布局的战略意图在于防御性：AWS希望在自有的GPU、Trainium与Inferentia部署之间实现硬件无关性，从而降低对英伟达的依赖。在AI算力成本高企与融资约束升温的环境下，云厂商通过软件抽象层实现算力资源的灵活调度，是控制单位算力成本、改善投资回报的关键手段。",
      impact: {
        direction: "利好（亚马逊）/ 中性（英伟达）",
        companies: "亚马逊、英伟达、AWS生态",
        industry: "AI芯片、云计算、AI中间件、数据中心",
        logic: "硬件解耦降低单一供应商锁定，利好AWS成本与议价能力；反映AI算力采购方对英伟达依赖度的系统性反思，中长期或分流GPU份额"
      }
    },
    {
      title: "Meta大涨超3%、市值一度突破1.9万亿美元，Muse个人AI代理商业化获重估",
      originalTitle: "Meta shares jump more than 3% as Muse AI agent momentum drives re-rating",
      source: "新华社英文版（Xinhua）/ 中新经纬（综合）",
      time: "2026年10月12日",
      type: "财经媒体",
      url: "http://chinaview.cn/20261013/5d710191bc474624a85c44aaffc618d1/c.html",
      link: "http://chinaview.cn/20261013/5d710191bc474624a85c44aaffc618d1/c.html",
      summary: "Meta周一逆势上涨超3%，盘中一度涨超4%、市值突破1.9万亿美元。驱动因素是其个人AI代理产品Muse上线后下载量与用户粘性持续走强，市场对Meta在AI应用层的变现能力进行重估。在半导体硬件股因「资本瓶颈」担忧集体回调的背景下，资金从硬件向AI应用层切换，Meta作为拥有庞大用户流量与广告变现闭环的超级应用方，成为本轮AI叙事从「卖铲子」向「验证回报」迁移的最大受益者之一。",
      impact: {
        direction: "利好",
        companies: "Meta、OpenAI、谷歌、AI应用层公司",
        industry: "AI应用、AI代理、广告、社交",
        logic: "AI投资焦点从算力硬件向应用层变现迁移，具备用户流量与商业化闭环的平台型公司获重新定价，与半导体硬件股的相对强弱出现明显分化"
      }
    }
  ],

  /* ============ 六、当日最值得关注的 3 个交易逻辑 ============ */
  logics: [
    { title: "AI叙事焦点从「抢算力」转向「验证回报」，资本与ROI成为新的估值分水岭",
      text: "博通CEO陈福阳与英特尔CEO陈立武同日同台警告「资本是AI最大瓶颈」，并将部分AI投资者比作赌场赌徒，标志着市场对AI投资的核心关切从硬件短缺转向融资可持续性与投资回报。此前AI相关债务发行9月已骤降至230亿美元（不足8月一半），SpaceX、博通、OpenAI等巨额融资计划的信用风险开始被债市定价。这一转变短期重挫半导体与存储股，中长期则利好能证明现金流与商业化能力的头部厂商，资金从「卖铲子」的硬件链向AI应用层（Meta等）切换。" },
    { title: "存储超级周期遭遇「供应回升」担忧，高位获利了结引发板块性回调",
      text: "市场担忧高性能DRAM供应量今年底开始攀升，叠加存储股年内巨大涨幅（美光累涨约260%、闪迪大幅上涨）积累的获利盘，引发存储板块周一集体抛售：闪迪跌近6%、SK海力士跌超4%、美光跌3.88%并跌破1000美元。博通CEO「资本瓶颈」论进一步放大情绪冲击。但AI内存需求与长约锁价的中期支撑未变，伯恩斯坦等机构仍坚定看多存储盈利持续性；本轮更可能是高位的技术性情绪释放，需观察台积电Q3财报与美光后续指引对存储供需的确认。" },
    { title: "利率与通胀仍是科技股估值的外生锚，本周CPI/PPI与银行财报定调方向",
      text: "哥伦布日债券现货市场休市，美股缺乏收益率指引、交投清淡，但油价因中东局势反弹（WTI+2.06%至93.74美元）推升通胀预期，克利夫兰联储哈马克表态需进一步收紧，CME对10月加息概率定价升至约20.5%。本周三、周四将公布9月CPI与PPI，周二起大型银行财报拉开三季报序幕，LSEG数据显示标普500 Q3盈利预计同比增超30%。通胀与盈利两条主线共同决定美联储10月27-28日会议是否连续第二次加息，进而影响高久期科技股的估值中枢。" }
  ],

  /* ============ 七、未来 1—3 个交易日关注事项（具体事件） ============ */
  watchlist: [
    { date: "10月13日", event: "摩根大通、花旗、富国银行、高盛等大型银行公布Q3财报（三季报序幕）", impact: "检验高利率环境下信贷与交易收入，定调财报季风险偏好与利率路径预期" },
    { date: "10月14日", event: "美国9月CPI数据（关键通胀指标）", impact: "验证油价反弹是否推升通胀，决定美联储10月27-28日会议连续加息概率，影响高估值科技股" },
    { date: "10月15日", event: "美国9月PPI数据", impact: "补充企业端价格压力，与CPI共同刻画通胀路径，影响利率与成长股估值" },
    { date: "10月15日", event: "台积电（TSM）公布Q3完整财报及4Q指引", impact: "验证Vera Rubin/Blackwell放量节奏与先进封装供需，牵动英伟达及AI芯片链" },
    { date: "10月15日前后", event: "ASML公布Q3财报（本周内）", impact: "EUV/High-NA光刻机订单与指引反映晶圆代工资本开支强度，是半导体景气先行指标" },
    { date: "10月27-28日", event: "美联储FOMC议息会议（9月已加息25bp至3.75%-4.00%）", impact: "决定是否连续第二次加息，是科技股估值的中期关键变量" }
  ],

  /* ============ 八、页脚免责声明 ============ */
  disclaimer:
    "本报告基于公开市场信息整理，仅供华泰期货内部研究参考，不构成任何投资建议。股价数据以交易所官方为准；新闻以原始来源（SEC / 白宫 / BIS / Treasury / BEA / BLS / Federal Reserve / Reuters 等）为准。投资有风险，决策需谨慎。"
};
