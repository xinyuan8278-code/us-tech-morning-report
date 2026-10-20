/**
 * ============================================================
 *  美股科技板块前一交易日行情日报 —— 数据文件（每日只需改这里）
 *  （2026-10-21 更新：对应美股交易日 2026-10-20）
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
    reportDate: "2026年10月21日",   // 报告发布日期（周三）
    tradeDate: "2026年10月20日",    // 对应美股交易日（前一交易日，周一）
    author: "华泰期货 · 研究",
    tag: "每日市场跟踪"
  },

  /* ============ 二、市场概览 ============ */
  overview: {
    /* 简短概括：指数变化 + 个股变化 + 重大事件 */
    text: "10月20日美股科技板块超卖反弹，三大指数涨跌互现：道指微跌0.07%至51966.03、标普+0.41%至7690.73、纳指+1.11%至26430.89。费城半导体指数反弹1.61%，终结连续八个交易日下跌（2008年10月以来最长连跌）。存储领涨：闪迪+5.53%、西部数据+6.09%、美光+2.97%；亚马逊+4.98%领跑七巨头（发布开源工具TorchNeuron挑战英伟达CUDA+获摩根士丹利列首选股）。核心驱动为超卖修复——对冲基金上周削减科技股仓位幅度创2016年以来最大，情绪过度悲观后迎来技术性反弹，但AI基建融资可持续性疑虑未消（CoreWeave回吐涨势收跌0.4%）。",
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
    { name: "SanDisk（闪迪）", code: "SNDK", change: "-0.00%", note: "超涨：单日反弹约5.53%，为跟踪个股中涨幅最大；存储板块上周遭恐慌性抛售后超卖反弹（上周累跌约18%），费半终结八连跌背景下资金回流，带动闪迪、西部数据（+6.09%）、美光（+2.97%）集体修复，但属技术性反弹而非基本面反转" }
  ],

  /* ============ 四、重点公司行情表 ============ */
  /* 超涨/超跌个股放最上方；无新闻的公司驱动因素简要说明即可 */
  stocks: [
    { name: "NVIDIA",    code: "NVDA",  change: "-0.00%", driver: "反弹约1.38%至217.09美元，随费半终结八连跌；亚马逊TorchNeuron开源工具直指其CUDA软件壁垒，长期竞争叙事承压，但短期超卖修复带动反弹" },
    { name: "Microsoft", code: "MSFT",  change: "-0.00%", driver: "上涨约0.84%，随大型科技股修复；财报季临近（10月下旬），AI资本开支回报仍是核心关注点" },
    { name: "Apple",     code: "AAPL",  change: "-0.00%", driver: "微跌约0.15%至342.94美元，为七巨头中少数走弱个股；市场资金从防御型现金流股轮动至超跌进攻型AI/半导体标的" },
    { name: "Amazon",    code: "AMZN",  change: "-0.00%", driver: "大涨约4.98%至262.45美元领跑七巨头、创7月31日来最大单日涨幅；发布开源工具TorchNeuron（PyTorch代码无需重写即可跑Trainium芯片，挑战英伟达CUDA），同时获摩根士丹利列为首选股、目标价由335上调至350美元" },
    { name: "Alphabet",  code: "GOOGL", change: "-0.00%", driver: "上涨约0.96%，随大型科技修复；谷歌自研AI芯片同样在开发PyTorch工具以争夺英伟达生态，行业软件层竞争加剧" },
    { name: "Meta",      code: "META",  change: "-0.00%", driver: "微跌约0.55%至705.44美元；10月21日盘后公布Q3财报，AI资本开支（全年指引1300-1450亿美元）回报与广告增长成关键变量，财报前市场趋于谨慎" },
    { name: "Broadcom",  code: "AVGO",  change: "-0.00%", driver: "上涨约1.78%，随半导体板块超卖反弹；定制ASIC叙事仍受AI基建融资成本疑虑压制" },
    { name: "AMD",       code: "AMD",   change: "-0.00%", driver: "上涨约1.76%，随费半终结八连跌修复；此前距10月6日高点累跌近20%，超卖后技术性反弹" },
    { name: "Micron",    code: "MU",    change: "-0.00%", driver: "反弹约2.97%，存储板块领涨半导体（美光、英特尔均涨超2%，带动半导体板块单日市值回升近2500亿美元）；上周因供应过剩担忧跌约15%后超卖修复" },
    { name: "SanDisk",   code: "SNDK",  change: "-0.00%", driver: "大涨约5.53%，为跟踪个股中涨幅最大；存储板块超卖反弹（上周累跌约18%），与西部数据+6.09%、SK海力士+4.67%共振，但长鑫存储DRAM竞争与供应过剩疑虑未根本解除" }
  ],

  /* ============ 五、重要科技与政策新闻（一手来源） ============ */
  news: [
    {
      title: "亚马逊发布开源工具TorchNeuron，允许PyTorch代码直接在自研Trainium芯片运行，正面挑战英伟达CUDA生态",
      originalTitle: "Amazon Says Its AI Chips Will Work With Popular Coding Language, Challenging Nvidia",
      source: "Reuters（经 U.S. News & World Report 转载）",
      time: "2026年10月19日",
      type: "财经媒体",
      url: "https://money.usnews.com/investing/news/articles/2026-10-19/amazon-says-its-ai-chips-will-work-with-popular-coding-language-challenging-nvidia",
      link: "https://money.usnews.com/investing/news/articles/2026-10-19/amazon-says-its-ai-chips-will-work-with-popular-coding-language-challenging-nvidia",
      summary: "亚马逊宣布推出名为TorchNeuron的新工具，允许其自研Trainium AI芯片无需改写即可运行最流行AI编码语言PyTorch编写的代码，直指英伟达赖以主导AI算力市场的CUDA软件优势。亚马逊Annapurna Labs芯片部门称，开发者只需一次配置变更即可在Trainium芯片上运行PyTorch代码；软件将以免费开源形式发布，超过30家早期客户（涵盖机器人、世界模型、语音AI）已在试用。副总裁Colin Brace表示此举旨在减少开发者试用自研芯片的步骤、迁移可带来显著成本节省。谷歌等拥有自研芯片的云厂商也在开发更好用的PyTorch工具以争夺英伟达开发者生态。",
      impact: {
        direction: "利好（亚马逊）/ 中性偏空（英伟达长期竞争叙事）",
        companies: "亚马逊、英伟达、谷歌、Meta",
        industry: "AI芯片、云基础设施、AI软件生态",
        logic: "亚马逊通过消除PyTorch迁移壁垒削弱英伟达CUDA的软件护城河，叠加摩根士丹利首选股评级，构成10月20日亚马逊大涨近5%的直接驱动；同时也加剧AI算力市场'硬件+软件'双层竞争"
      }
    },
    {
      title: "美股周一反弹：纳指涨1.11%领涨，费城半导体指数终结八连跌，芯片与AI股超卖修复",
      originalTitle: "Nasdaq leads Wall Street gains as chip, AI stocks rebound",
      source: "Reuters（经 The Economic Times 转载）",
      time: "2026年10月20日",
      type: "财经媒体",
      url: "https://economictimes.indiatimes.com/markets/us-stocks/wall-street-guide/us-stocks-today-nasdaq-leads-wall-street-gains-as-chip-ai-stocks-rebound/articleshow/135056194.cms",
      link: "https://economictimes.indiatimes.com/markets/us-stocks/wall-street-guide/us-stocks-today-nasdaq-leads-wall-street-gains-as-chip-ai-stocks-rebound/articleshow/135056194.cms",
      summary: "美股周一涨跌互现，纳指涨1.11%至26430.89、标普500涨0.42%至7691.07、道指跌0.06%至51970.20。费城半导体指数终结连续八个交易日下跌（期间累跌约15.7%、为2008年10月以来最长连跌），投资者重返超跌芯片与AI股。西部数据涨6.09%、亚马逊涨4.98%、Palantir涨4.36%；CoreWeave因高盛上调评级至买入获关注，但上周仍暴跌逾25%。Rosenblatt Securities交易主管Michael James对路透表示，这波回升主要是'过度悲观后超卖到该反弹'的技术性修复，基本面并无变化，且市场'远未脱离困境'，因Meta、特斯拉等大型科技公司财报即将揭晓。",
      impact: {
        direction: "中性偏多（技术性反弹）",
        companies: "西部数据、亚马逊、Palantir、CoreWeave、英伟达、美光",
        industry: "半导体、存储、AI基础设施",
        logic: "对冲基金上周削减科技股仓位幅度创2016年以来最大，情绪过度悲观后触发超卖反弹；但反弹集中于大型权值股、广度不足，AI基建融资可持续性疑虑未消，反弹持续性取决于财报兑现"
      }
    },
    {
      title: "摩根大通上调英特尔评级至'中性'，英特尔涨约2.4%；高盛上调CoreWeave至'买入'",
      originalTitle: "Chip Stocks Catch A Break After Prolonged Slide. AI Names Among Leaders.",
      source: "Investor's Business Daily",
      time: "2026年10月20日",
      type: "行业媒体",
      url: "https://www.investors.com/news/technology/chip-stocks-rebound-ai-names-leaders-nvidia-amd",
      link: "https://www.investors.com/news/technology/chip-stocks-rebound-ai-names-leaders-nvidia-amd",
      summary: "芯片股在连续八个交易日下跌后反弹，摩根大通将英特尔评级从'减持'上调至'中性'，认为在第三季度财报（下周公布）前风险回报趋于均衡，英特尔股价上涨约2.4%。AI云服务商CoreWeave获高盛上调评级至'买入'（此前曾因500亿美元债务负担、上周暴跌逾25%成为市场焦点）。TD Cowen分析师Joshua Buchalter在周日报告中看好芯片股进入Q3财报季的整体配置，称'供应仍是制约因素而非需求'，并指出尽管超大规模云厂商AI数据中心支出持续上升，市场对AI标的的情绪已转向负面，'叙事驱动股价甚于数字'。",
      impact: {
        direction: "利好（半导体/存储）",
        companies: "英特尔、CoreWeave、AMD、美光、闪迪",
        industry: "半导体、存储、AI芯片",
        logic: "机构评级上调（摩根大通英特尔、高盛CoreWeave）叠加'供应制约、需求未弱'的财报季预期，为超跌半导体提供反弹催化，但CoreWeave盘初涨超4%后收跌0.4%，显示融资成本疑虑仍压制高杠杆AI基建股"
      }
    },
    {
      title: "美光、英特尔领涨半导体：板块单日市值回升近2500亿美元，存储超卖修复",
      originalTitle: "Micron And Intel Lead Semiconductor Recovery",
      source: "Pan Finance",
      time: "2026年10月19日",
      type: "行业媒体",
      url: "https://www.panfinance.net/news/micron-and-intel-lead-semiconductor-recovery",
      link: "https://www.panfinance.net/news/micron-and-intel-lead-semiconductor-recovery",
      summary: "美国半导体股10月19日单日市值回升近2500亿美元，美光与英特尔各涨逾2%、闪迪涨近5%，英伟达、AMD、西部数据同步走高，60只半导体相关个股中近90%上涨。此轮反弹紧随存储股艰难一周——美光上周累跌约15%、闪迪约18%，凸显与AI支出紧密挂钩的板块预期切换之快。摩根大通将英特尔从'减持'上调至'中性'，指向AI需求与半导体短缺带来的机会；而云基础设施商CoreWeave尽管获高盛上调至'买入'，仍回吐早盘涨幅，显示融资顾虑继续压制情绪。报道提示，指数上涨可能掩盖多数成分股走弱的集中度风险。",
      impact: {
        direction: "利好（存储/半导体，超卖修复）",
        companies: "美光、英特尔、闪迪、英伟达、AMD、西部数据",
        industry: "存储芯片、半导体、AI基础设施",
        logic: "存储股从'供应过剩担忧'主导的超卖状态中技术性修复，美光、闪迪领涨；但反弹集中于少数标的、CoreWeave回吐涨幅，说明'AI需求强劲但融资成本上升'的矛盾尚未化解"
      }
    },
    {
      title: "也门胡塞武装再袭沙特能源设施，油价高位震荡：WTI涨2.2%至103.66美元、布伦特109.55美元",
      originalTitle: "Brent edges lower to $109.55 even as Houthis claim fresh attacks on Saudi energy sites",
      source: "Reuters（经 Energy News Africa 转载）",
      time: "2026年10月20日",
      type: "财经媒体",
      url: "https://energynews.africa/2026/10/20/brent-edges-lower-to-109-55-even-as-houthis-claim-fresh-attacks-on-saudi-energy-sites",
      link: "https://energynews.africa/2026/10/20/brent-edges-lower-to-109-55-even-as-houthis-claim-fresh-attacks-on-saudi-energy-sites",
      summary: "也门伊朗支持的胡塞武装周一称对沙特能源、机场与军事目标发动多次袭击，包括延布Aramco设施、谢巴油田、利雅得与艾卜哈机场；沙特当局未立即证实，路透无法独立核实。布伦特原油期货结算跌0.3%至109.55美元（早前一度跌破109美元、距五个月高位回落），WTI涨2.2%至103.66美元、创9月15日以来最高结算价（受临近到期交易清淡影响）。此外，伊朗革命卫队称周日一艘油轮在霍尔木兹海峡南部触水雷爆炸；Kpler数据显示上周海湾原油流量日均约850万桶（此前逾2000万桶）。地缘风险溢价使油价维持在100美元上方。",
      impact: {
        direction: "利空（通胀/利率/成长股估值）",
        companies: "大型科技、半导体、AI基建（高估值成长股）",
        industry: "原油、地缘政治、通胀、利率",
        logic: "中东能源供应风险持续推升油价并维持100美元上方，强化'能源—通胀—利率预期'链条，压制高估值科技股估值倍数；但油价较上周五的高位有所回落，短期对反弹的拖累边际减弱"
      }
    },
    {
      title: "中国三季度GDP同比增长4.5%超预期，AI驱动的芯片与设备出口强劲支撑制造业升级",
      originalTitle: "China's Q3 GDP grows 4.5% year-on-year, beating expectations",
      source: "Reuters（援引华尔街日报/金融时报报道）",
      time: "2026年10月19日",
      type: "财经媒体",
      url: "https://www.reuters.com/",
      link: "https://www.reuters.com/",
      summary: "中国国家统计局10月19日公布三季度GDP同比增长4.5%，高于二季度的4.3%并超出市场预期，前三季度GDP同比增长4.6%。路透援引分析称，中国经济增长已企稳、全年增长目标'触手可及'；高技术制造业、芯片产量、新能源汽车及出口交付等数据反映产业升级竞争力增强。华尔街日报指出AI热潮是提振中国制造业的引擎，动力来自全球建设数据中心、扩展算力所需的芯片与技术设备需求；惠誉评级亚太主权评级董事称中国是全球AI基础设施建设的'重要受益者'。金融时报关注9月工业生产同比增长5.5%、社零同比增1.1%均超预期。",
      impact: {
        direction: "利好（全球半导体/电子供应链）",
        companies: "台积电、半导体设备、存储、AI算力供应链",
        industry: "半导体、芯片制造、AI基础设施、消费电子",
        logic: "中国超预期的经济与工业生产数据为全球AI算力与半导体供应链需求提供支撑，强化'需求端未弱'的叙事，是10月20日费半与台积电ADR同步走强的宏观背景之一"
      }
    },
    {
      title: "财报季进入关键周：SpaceX（10/20盘后）、特斯拉与Meta（10/21盘后）陆续公布Q3业绩，AI资本开支回报成焦点",
      originalTitle: "Magnificent 7 Earnings Preview: Meta & Tesla Take Center Stage This Week",
      source: "Finviz / Zacks Investment Research",
      time: "2026年10月20日",
      type: "财经媒体",
      url: "https://finviz.com/news/404152/magnificent-7-earnings-preview-meta-tesla-take-center-stage-this-week",
      link: "https://finviz.com/news/404152/magnificent-7-earnings-preview-meta-tesla-take-center-stage-this-week",
      summary: "第三季度财报季本周进入关键阶段，'科技七巨头'中Meta与特斯拉将于10月21日（周三）盘后公布Q3业绩，SpaceX于10月20日盘后公布上市以来第二份季报。Zacks一致预期显示，Meta Q3营收同比增长逾23%至632.4亿美元、但EPS预计同比下滑近10%至6.54美元，市场聚焦其AI广告变现与资本开支（全年指引1300-1450亿美元）回报；特斯拉Q3交付48.65万辆超预期但仍同比下滑2%，一致预期营收同比下降1%至277.8亿美元、EPS降至0.44美元。财报能否验证AI资本开支转化为营收与自由现金流，是决定本轮科技股反弹是'喘息'还是'重启'的关键。",
      impact: {
        direction: "中性（财报预期主导短期方向）",
        companies: "Meta、特斯拉、SpaceX、大型科技",
        industry: "AI应用、电动车、云计算、AI基础设施",
        logic: "财报周是检验AI资本开支回报的关键窗口，SpaceX/Meta/特斯拉业绩与AI相关指引将直接决定超卖反弹能否延续；'AI故事能否兑现为现金流'是市场当前定价的核心变量"
      }
    }
  ],

  /* ============ 六、当日最值得关注的 3 个交易逻辑 ============ */
  logics: [
    { title: "超卖修复主导反弹，但「AI基建融资可持续性」疑虑未消，反弹广度不足",
      text: "费城半导体指数终结八连跌（2008年来最长），纳指涨1.11%，但Rosenblatt交易主管点明这波回升是'情绪过度悲观后超卖到该反弹'的技术性修复，基本面并无变化。高盛主经纪商数据显示对冲基金上周削减科技股仓位幅度创2016年以来最大，抛压释放后资金回流超跌芯片股。然而CoreWeave盘初涨超4%后收跌0.4%，标普500多数类股收黑、反弹集中于少数权值股，说明AI基建'循环融资'脆弱性——芯片厂、云厂商与AI实验室之间的债务链条——并未被化解，反弹的持续性高度依赖本周财报兑现。" },
    { title: "AI算力软件生态之争升级：亚马逊TorchNeuron直指英伟达CUDA护城河",
      text: "亚马逊开源TorchNeuron、让PyTorch代码无需改写即可运行在自研Trainium芯片上，正面削弱英伟达十余年打造的CUDA软件壁垒。叠加摩根士丹利将亚马逊列首选股、目标价上调至350美元，推动亚马逊单日大涨近5%、市值增逾1300亿美元。谷歌亦在开发PyTorch工具争夺开发者生态。这意味着AI算力市场的竞争正从'芯片算力'延伸至'软件迁移成本'，长期看或稀释英伟达的定价权与生态粘性，是当日亚马逊领涨与英伟达相对落后的结构性逻辑。" },
    { title: "油价维持百美元上方+中国GDP超预期，构成'通胀压制估值'与'需求未弱'的宏观对冲",
      text: "也门胡塞武装再袭沙特能源设施、霍尔木兹海峡油轮触雷，WTI涨2.2%至103.66美元、布伦特维持109.55美元，地缘风险溢价使油价站稳100美元上方，强化'能源—通胀—利率预期'链条、压制高估值成长股。但另一方面，中国三季度GDP同比4.5%超预期、AI驱动的芯片与设备出口强劲，为全球半导体供应链需求提供支撑。两股力量形成对冲：宏观通胀压力压制估值倍数，而产业基本面'供应仍是制约而非需求'（TD Cowen）的叙事托底芯片股盈利，是当日科技股'指数涨、广度和缓'的深层结构。" }
  ],

  /* ============ 七、未来 1—3 个交易日关注事项（具体事件） ============ */
  watchlist: [
    { date: "10月21日盘后", event: "特斯拉（TSLA）Q3财报", impact: "验证交付超预期能否转化为盈利改善与AI/自动驾驶叙事，Zacks预期EPS降至0.44美元、营收同比降1%，是成长股情绪关键变量" },
    { date: "10月21日盘后", event: "Meta Platforms（META）Q3财报", impact: "验证AI资本开支（全年指引1300-1450亿美元）回报与广告增长，市场预期营收增逾23%至632.4亿美元但EPS下滑近10%，是AI应用层估值核心检验" },
    { date: "10月20日盘后（已公布）", event: "SpaceX Q3财报（上市以来第二份）", impact: "AI收入成为最大收入来源、验证'算力租赁'商业模式，盘后AI产业链个股集体走强，情绪影响延续至次日" },
    { date: "10月22日前后", event: "奈飞（NFLX）Q3财报（10/20盘后已公布，四季度指引低于预期）", impact: "广告收入与内容资本开支指引不及预期，反映消费科技需求与AI内容投入的权衡" },
    { date: "本周内", event: "德州仪器（TXN）、MaxLinear（MXL）、Lam Research（LRCX）等半导体设备/模拟芯片Q3财报", impact: "验证半导体'供应制约、需求未弱'的财报季叙事，是芯片股反弹能否延续的关键数据" },
    { date: "11月9日起", event: "Anthropic启动IPO路演（11月中旬上市，估值约1.5-2万亿美元）", impact: "公开市场对'债务驱动型AI基础设施'高估值的首次检验，是AI板块中期定价锚点" }
  ],

  /* ============ 八、页脚免责声明 ============ */
  disclaimer:
    "本报告基于公开市场信息整理，仅供华泰期货内部研究参考，不构成任何投资建议。股价数据以交易所官方为准；新闻以原始来源（SEC / 白宫 / BIS / Treasury / BEA / BLS / Federal Reserve / Reuters 等）为准。投资有风险，决策需谨慎。"
};
