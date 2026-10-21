/**
 * ============================================================
 *  美股科技板块前一交易日行情日报 —— 数据文件（每日只需改这里）
 *  （2026-10-22 更新：对应美股交易日 2026-10-21）
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
    reportDate: "2026年10月22日",   // 报告发布日期（周四）
    tradeDate: "2026年10月21日",    // 对应美股交易日（前一交易日，周三）
    author: "华泰期货 · 研究",
    tag: "每日市场跟踪"
  },

  /* ============ 二、市场概览 ============ */
  overview: {
    /* 简短概括：指数变化 + 个股变化 + 重大事件 */
    text: "10月21日美股科技板块延续反弹，三大指数全线收涨：道指+0.69%、标普500+0.58%、纳指+1.05%。费城半导体指数涨1.97%，半导体股全线收涨（AMD+3.36%、ASML+2.81%、ARM+2.50%），存储板块续弹（SK海力士+2.48%、美光+1.96%、闪迪+0.94%）。核心催化为两份超预期财报重燃AI交易热情：SpaceX上市后首次季度盈利（AI/SI收入同比暴增830%、占营收52%首成第一大来源，马斯克再提SpaceX与特斯拉合并）；超微电脑FQ1初步营收指引185—195亿美元、超预期约27%。英伟达+2.54%领涨大型科技，谷歌-1.62%逆势走弱。",
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
    { name: "NVIDIA",    code: "NVDA",  change: "-0.00%", driver: "上涨约2.54%，为大型科技股中涨幅最大；SpaceX与超微电脑超预期财报重燃AI资本开支交易，叠加GTC柏林大会开幕（德国政府近100亿美元欧洲算力计划背书），英伟达作为AI加速器核心受益标的领涨" },
    { name: "Microsoft", code: "MSFT",  change: "-0.00%", driver: "微涨约0.20%，随大型科技温和修复；市场聚焦微软与大型云厂商持续加码AI基础设施资本开支对盈利的长期稀释效应" },
    { name: "Apple",     code: "AAPL",  change: "-0.00%", driver: "上涨约1.32%，随大盘走强；无重大个股催化，资金在超跌半导体反弹背景下回流权值股" },
    { name: "Amazon",    code: "AMZN",  change: "-0.00%", driver: "微跌约0.10%，为七巨头中少数走弱个股；前一日TorchNeuron开源工具大涨后动能减弱，市场等待其AI资本开支回报的进一步验证" },
    { name: "Alphabet",  code: "GOOGL", change: "-0.00%", driver: "下跌约1.62%，为七巨头中表现最弱；消息面平淡，或受资金从前期涨幅较大的云计算标的轮动至超跌半导体所致" },
    { name: "Meta",      code: "META",  change: "-0.00%", driver: "微涨约0.47%，盘后公布Q3财报：营收646亿美元同比+26%超预期、Q4指引730—760亿美元亦超预期，但受98.9亿美元青少年诉讼和解开支拖累经营利润同比-37%；上调全年资本开支指引下限至1350亿美元，并宣布拟发行无投票权C类股，盘后一度涨超4%" },
    { name: "Broadcom",  code: "AVGO",  change: "-0.00%", driver: "上涨约1.03%，随半导体板块全线上涨；定制ASIC需求叙事受AI资本开支回暖提振，光通信业务亦受益于数据中心扩张" },
    { name: "AMD",       code: "AMD",   change: "-0.00%", driver: "上涨约3.36%，领涨半导体；Wedbush分析师维持跑赢评级、目标价600美元，称代理式AI算力需求持续供不应求，Helios加速器放量为额外催化" },
    { name: "Micron",    code: "MU",    change: "-0.00%", driver: "上涨约1.96%，存储板块续弹；跟随SK海力士+2.48%、闪迪+0.94%共振，上周供应过剩恐慌抛售后持续超卖修复，HBM与数据中心存储需求仍强" },
    { name: "SanDisk",   code: "SNDK",  change: "-0.00%", driver: "上涨约0.94%，存储板块温和修复；前一日大涨5.53%后动能减弱，NAND供需与长鑫存储DRAM竞争格局仍是中期关键变量" }
  ],

  /* ============ 五、重要科技与政策新闻（一手来源） ============ */
  news: [
    {
      title: "SpaceX上市后首次实现季度盈利：AI「超级智能」业务收入同比暴增830%、首成最大收入来源，马斯克再提与特斯拉合并",
      originalTitle: "Nasdaq futures lead gains as SpaceX, Super Micro results lift AI trade",
      source: "Reuters（经 Kitco 转载）",
      time: "2026年10月21日",
      type: "财经媒体",
      url: "https://www.kitco.com/news/off-the-wire/2026-10-21/nasdaq-futures-lead-gains-spacex-super-micro-results-lift-ai-trade",
      link: "https://www.kitco.com/news/off-the-wire/2026-10-21/nasdaq-futures-lead-gains-spacex-super-micro-results-lift-ai-trade",
      summary: "SpaceX（SPCX.O）公布上市以来第二份季报，第三季度营收约145.8亿美元、同比激增161%，实现净利润44亿美元（去年同期净亏11亿美元），为公司自6月上市以来首次季度盈利。被更名为「超级智能（SI）」的AI业务营收达75.6亿美元、同比暴增830%，占公司总营收约52%，首次超过星链成为第一大收入来源，增长主要来自向Anthropic、谷歌、Reflection等出租数据中心算力、Grok扩张及8月收购Cursor并表。马斯克在电话会上表示，SpaceX与特斯拉已成立特别委员会研究潜在合并，称「合并有很多好处」，但强调需获特斯拉全体股东50%批准；并预计到2027年底公司年度经常性收入可达5000亿至1万亿美元。",
      impact: {
        direction: "利好（AI基础设施/算力租赁/半导体）",
        companies: "SpaceX、特斯拉、英伟达、超微电脑、CoreWeave",
        industry: "AI基础设施、云计算、算力租赁、半导体",
        logic: "SpaceX「算力租赁+AI模型」商业模式首次盈利验证，AI收入超越星链成为第一大来源，直接回击了上周AI基建「烧钱不赚钱」的抛售叙事，是10月21日AI与半导体板块集体反弹的核心催化"
      }
    },
    {
      title: "超微电脑FQ1初步营收指引185—195亿美元、超预期约27%，毛利率同步上调，重燃AI服务器需求信心",
      originalTitle: "Nasdaq futures lead gains as SpaceX, Super Micro results lift AI trade",
      source: "Reuters（经 Kitco 转载）",
      time: "2026年10月21日",
      type: "财经媒体",
      url: "https://www.kitco.com/news/off-the-wire/2026-10-21/nasdaq-futures-lead-gains-spacex-super-micro-results-lift-ai-trade",
      link: "https://www.kitco.com/news/off-the-wire/2026-10-21/nasdaq-futures-lead-gains-spacex-super-micro-results-lift-ai-trade",
      summary: "AI服务器制造商超微电脑（SMCI.O）公布2027财年第一财季（截至9月底）初步业绩，预计营收185亿—195亿美元，远高于分析师平均预期的约152亿美元，以中值190亿美元计较预期高出约27%；预计毛利率12%—12.5%，同样高于此前10.4%—10.8%的指引。公司将此归因于AI平台需求强劲及客户/产品组合改善。花旗研报指出，更新后的指引隐含营收同比增约280%、营业利润较预期高约50%。该业绩向市场传递AI数据中心基础设施资本开支仍在高增的信号，带动戴尔（+5.5%）、慧与HPE（+4.5%）等同行盘前同步走高。正式财报将于11月3日电话会披露，当前数据为未经审计初步估算。",
      impact: {
        direction: "利好（AI服务器/半导体/存储）",
        companies: "超微电脑、戴尔、慧与、英伟达、美光",
        industry: "AI服务器、数据中心、半导体、存储",
        logic: "超微电脑营收与毛利率双超预期，直接验证「AI基建资本开支未减速」，与SpaceX财报形成共振，扭转了上周AI-linked股票遭抛售的悲观情绪，是10月21日芯片股全线上涨的关键基本面驱动"
      }
    },
    {
      title: "美股周三收涨：纳指+1.05%领涨，费城半导体指数+1.97%，半导体与存储股集体反弹",
      originalTitle: "US stocks rise as SpaceX, Super Micro results revive AI optimism",
      source: "Reuters（经 Kitco 转载）",
      time: "2026年10月21日",
      type: "财经媒体",
      url: "https://www.kitco.com/news/off-the-wire/2026-10-21/nasdaq-futures-lead-gains-spacex-super-micro-results-lift-ai-trade",
      link: "https://www.kitco.com/news/off-the-wire/2026-10-21/nasdaq-futures-lead-gains-spacex-super-micro-results-lift-ai-trade",
      summary: "美东时间10月21日，美股三大指数高开高走、震荡上行，截至收盘道指涨0.69%、标普500涨0.58%、纳指涨1.05%。大型科技股多数上涨，SpaceX涨超7%、特斯拉涨3.41%、英伟达涨2.54%、苹果涨1.32%；谷歌跌1.62%逆势走弱。费城半导体指数涨1.97%，半导体股全线收涨（AMD+3.36%、ASML+2.81%、ARM+2.50%、台积电+1.57%、英特尔+1.39%）；存储概念续弹（SK海力士+2.48%、美光+1.96%、闪迪+0.94%）。瑞讯分析师Ozkardeskaya指出，AI基建资本密集，若AI压力上升，SpaceX相对中小厂商拥有更强承接能力。布伦特原油维持在近110美元高位，市场仍定价美联储下周或再度加息。",
      impact: {
        direction: "中性偏多（技术性+基本面双驱动反弹）",
        companies: "英伟达、AMD、超微电脑、SpaceX、美光、闪迪",
        industry: "半导体、存储、AI基础设施",
        logic: "SpaceX与超微电脑财报重燃AI交易热情，叠加费半此前连续八个交易日下跌后的超卖修复，构成「基本面+技术面」双驱动反弹；但油价高企与美联储下周议息仍是压制估值的中期变量"
      }
    },
    {
      title: "Meta被新墨西哥州法院判罚250亿美元（剑桥分析隐私案），股价几乎未受影响，市场聚焦其盘后Q3财报",
      originalTitle: "A New Mexico Judge Ordered Meta to Pay $25 Billion For a Case. Its Stock is Still Climbing.",
      source: "International Business Times",
      time: "2026年10月21日",
      type: "财经媒体",
      url: "https://www.ibtimes.com/new-mexico-judge-ordered-meta-pay-25-billion-case-its-stock-still-climbing-3808856",
      link: "https://www.ibtimes.com/new-mexico-judge-ordered-meta-pay-25-billion-case-its-stock-still-climbing-3808856",
      summary: "新墨西哥州圣达菲第一司法区法官Francis Mathew裁定Meta支付250亿美元民事罚款，案件源于2018年剑桥分析数据丑闻。陪审团9月已认定Meta在用户数据隐私控制等方面作出误导性陈述、违反该州《不公平行为法》超过4300万次，按每次最高5000美元计算原本可判逾2195亿美元，法官最终下调至250亿美元并计息。新州原要求350亿—400亿美元，Meta主张不超过34亿美元并称有信心在上诉中胜诉。市场对此几乎无反应——Meta股价当日盘中一度上涨约1.77%，罚款金额虽大但预计将通过上诉长期化、且不直接冲击现金流，投资者更关注其同日盘后Q3财报及AI资本开支。",
      impact: {
        direction: "中性偏空（监管/诉讼风险，短期影响有限）",
        companies: "Meta",
        industry: "社交媒体、AI、科技监管",
        logic: "250亿美元罚单创单州对Meta最大判决，反映Big Tech数据隐私监管趋严的长期风险，但市场判断其将通过上诉摊薄、短期现金流影响有限，股价未受实质拖累，监管溢价未在当前估值中显著体现"
      }
    },
    {
      title: "英伟达、AMD、英特尔盘前齐涨：SpaceX与超微电脑财报验证AI基建支出仍强劲，Wedbush维持AMD跑赢评级",
      originalTitle: "Why Nvidia, AMD and Intel stocks are surging up to 2% in premarket today",
      source: "Invezz（经 TradingView 转载）",
      time: "2026年10月21日",
      type: "行业媒体",
      url: "https://www.tradingview.com/news/invezz:acd8eaf11094b:0",
      link: "https://www.tradingview.com/news/invezz:acd8eaf11094b:0",
      summary: "受超微电脑与SpaceX超预期财报提振，英伟达、AMD、英特尔周三盘前集体上涨（英伟达一度涨超1.5%、英特尔涨超3%），验证AI基础设施支出仍保持强劲。Niles投资管理创始人Dan Niles认为这两份财报或开启新一轮AI股上涨，「即便板块已见顶，历史上短期内反弹概率仍高」。Wedbush分析师Matt Bryson维持AMD「跑赢」评级、目标价600美元，预计Q3营收约130亿美元，指出代理式AI相关算力需求持续供不应求，Helios加速器放量为额外催化。市场最大不确定性并非客户是否还需要算力，而是微软、Alphabet、亚马逊、Meta今年合计逾7000亿美元的资本开支能否转化为股东回报。",
      impact: {
        direction: "利好（AI芯片/半导体）",
        companies: "英伟达、AMD、英特尔、超微电脑",
        industry: "AI加速器、服务器处理器、半导体",
        logic: "「需求未弱、供应仍紧」的财报验证叠加分析师看多，为超跌芯片股提供上涨动能；但AI资本开支能否转化为盈利与现金流，仍是决定反弹持续性的核心约束"
      }
    },
    {
      title: "Netflix下调Q4盈利指引、盘后跌超6%，特斯拉Q3财报紧随其后，AI应用层「指引即定价」特征凸显",
      originalTitle: "The Dow gained 500 points and the two AI names that matter fell after hours — Netflix's guide is the tell",
      source: "Mitrade",
      time: "2026年10月21日",
      type: "行业媒体",
      url: "https://www.mitrade.com/insights/shares-analysis/us-stocks/netflix-q3-guide-spacex-first-profit-20261021J1356",
      link: "https://www.mitrade.com/insights/shares-analysis/us-stocks/netflix-q3-guide-spacex-first-profit-20261021J1356",
      summary: "道指单日一度涨超500点，但盘后两个关键AI标的走弱：Netflix公布Q3财报后因四季度盈利指引低于预期而跌超6%（此前刚裁员6%），市场不再为「AI收入」买单、而是为「未来四个季度指引」定价。报道指出，市场对AI标的的定价门槛已明显提高——即便本季超预期，只要前瞻指引不达预期即遭抛售。10年期美债收益率报5.117%，意味着每一美元AI资本开支仍需穿越更高的贴现率门槛。特斯拉、Meta于同日盘后公布财报，其资本开支展望与AI货币化证据将决定本轮反弹能否延续。",
      impact: {
        direction: "中性（财报指引主导短期方向）",
        companies: "Netflix、Meta、特斯拉、英伟达",
        industry: "AI应用、云计算、AI基础设施",
        logic: "Netflix「本季超预期但指引不及」即遭抛售，揭示当前市场对AI标的的定价逻辑已从「收入故事」切换至「前瞻指引+现金流」，Meta/特斯拉财报与10年期美债5.1%的高贴现环境共同构成反弹能否持续的关键变量"
      }
    }
  ],

  /* ============ 六、当日最值得关注的 3 个交易逻辑 ============ */
  logics: [
    { title: "SpaceX首次盈利+超微电脑双超预期，重写AI基建「烧钱不赚钱」的抛售叙事",
      text: "上周AI-linked股票因CoreWeave债务融资危机、对AI基建盈利能力的质疑而遭集中抛售，费半连跌八个交易日。10月21日SpaceX（AI收入暴增830%、首成第一大来源、上市后首次盈利）与超微电脑（营收指引超预期约27%、毛利率同步上调）两份财报，从「算力租赁商业模式盈利」与「AI服务器需求高增」两个维度同时验证AI资本开支仍在加速、且部分环节已能兑现利润，直接扭转市场悲观情绪。这是当日纳指+1.05%、费半+1.97%、半导体股全线收涨的根本驱动。" },
    { title: "「需求未弱、供应仍紧」vs「高利率+高油价」的持续拉锯，决定反弹是修复还是反转",
      text: "超微电脑、SpaceX财报验证AI服务器与算力需求强劲，Wedbush维持AMD跑赢、指出代理式AI算力供不应求，支撑芯片股盈利基本面。但另一方面，布伦特原油维持在近110美元高位，上周数据显示美国通胀压力已由能源外溢至更广领域，强化美联储下周或再度加息的预期，10年期美债收益率5.1%的高贴现环境持续压制高估值成长股。基本面「需求未弱」与宏观「通胀压制估值」两股力量对冲，是当日科技股「指数上涨但广度分化」（谷歌-1.62%、亚马逊-0.10%）的结构性根源。" },
    { title: "财报周进入「指引定价」模式：Netflix指引不及即跌6%，Meta资本开支与AI货币化成试金石",
      text: "Netflix Q3超预期但因Q4盈利指引不及预期盘后跌超6%，显示市场对AI相关标的的定价已从「收入故事」切换到「前瞻指引+现金流」的更高门槛。同日盘后Meta公布Q3营收646亿美元超预期、但经营利润因98.9亿美元诉讼和解开支同比-37%，并上调全年资本开支指引下限至1350亿美元、宣布发行无投票权C类股融资；特斯拉财报亦紧随其后。市场正以「AI资本开支能否转化为盈利与自由现金流」为标尺重新校准每一家科技巨头的估值，财报指引质量成为短期方向的决定性变量。" }
  ],

  /* ============ 七、未来 1—3 个交易日关注事项（具体事件） ============ */
  watchlist: [
    { date: "10月21日盘后（已公布）", event: "Meta Platforms（META）Q3财报", impact: "营收646亿美元同比+26%超预期、Q4指引730—760亿美元亦超预期，但经营利润受98.9亿美元诉讼和解开支拖累同比-37%；上调全年资本开支指引下限至1350亿美元、拟发行无投票权C类股，盘后一度涨超4%，情绪影响延续至次日" },
    { date: "10月22日", event: "特斯拉（TSLA）Q3财报（10/21盘后公布）", impact: "验证Robotaxi车队扩张、FSD付费订阅进展与Optimus量产计划，以及马斯克「SpaceX与特斯拉合并」构想的后续发酵" },
    { date: "10月22日", event: "英伟达GTC柏林大会（10/21开幕）", impact: "德国政府近100亿美元欧洲算力计划背书、英伟达与供应商扩大AI工厂产能，欧洲订单承诺或成AI需求增量信号" },
    { date: "10月29日", event: "英特尔（INTC）Q3财报", impact: "验证IDM代工战略与服务器处理器复苏进展，是半导体需求与盈利的关键数据点" },
    { date: "11月3日盘后", event: "超微电脑（SMCI）FQ1财报电话会 + AMD（AMD）Q3财报", impact: "超微电脑初步指引超预期27%后的正式财报披露；AMD验证代理式AI算力需求与Helios加速器放量" },
    { date: "下周（约10月28—29日）", event: "美联储FOMC议息会议", impact: "通胀由能源外溢至更广领域、油价高位背景下，市场定价美联储或再度加息25bp，是压制科技股估值的核心宏观变量" }
  ],

  /* ============ 八、页脚免责声明 ============ */
  disclaimer:
    "本报告基于公开市场信息整理，仅供华泰期货内部研究参考，不构成任何投资建议。股价数据以交易所官方为准；新闻以原始来源（SEC / 白宫 / BIS / Treasury / BEA / BLS / Federal Reserve / Reuters 等）为准。投资有风险，决策需谨慎。"
};
