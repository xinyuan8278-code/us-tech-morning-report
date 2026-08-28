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
    reportDate: "2026年08月28日",   // 报告发布日期
    tradeDate: "2026年08月27日",    // 对应美股交易日（前一交易日）
    author: "华泰期货 · 研究",
    tag: "每日市场跟踪"
  },

  /* ============ 二、市场概览 ============ */
  overview: {
    /* 简短概括：指数变化 + 个股变化 + 重大事件 */
    text: "8月27日美股科技股全线大涨：纳指+1.57%、纳指100+1.43%、标普+0.72%、费半+1.95%。英伟达Q2营收962亿超预期、罕见给出FY2028营收+70%指引，单日暴涨8.74%、市值增约4420亿美元，创史上第二大单日市值增幅；博通+4.49%、微软+1.75%跟涨。软件股集体爆发：赛富时+22.6%、CrowdStrike+20.5%、Okta+27%。存储股（美光-0.32%、闪迪-0.96%）获利回吐。焦点转向周五沃什杰克逊霍尔讲话。",
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
      name: "NVIDIA",
      code: "NVDA",
      direction: "超涨",
      change: "-0.00%",
      fiveDay: "此前七连跌、财报前避险后，单日跳涨8.74%（8/24 -2.91%、8/25 +2.19%、8/26 -1.59%、8/27 +8.74%），收复失地并逼近5月历史高点",
      newHighLow: "未创历史新高，但单日市值增约4420亿美元，创2025年4月以来最大单日涨幅、史上第二大单日市值增幅",
      volume: "明显放大，成交约2.99亿股（前一日约1.80亿股，放量约66%）",
      reason: "Q2营收962亿同比+106%超预期、罕见给出FY2028营收+70%指引（远超45%预期）、Q3指引1080亿首破千亿；至少16家投行上调目标价",
      impact: "缓解AI投资周期见顶担忧、芯片股估值获得支撑，但毛利率指引下修（74% vs 75%）与存储成本传导需持续关注"
    }
  ],

  /* ============ 四、重点公司行情表 ============ */
  /* 超涨/超跌个股放最上方；无新闻的公司驱动因素简要说明即可 */
  stocks: [
    { name: "NVIDIA",    code: "NVDA",  change: "-0.00%", driver: "Q2营收962亿+106%超预期，罕见给出FY2028营收+70%指引，单日暴涨8.74%、市值+4420亿美元，16家投行上调目标价" },
    { name: "Broadcom",  code: "AVGO",  change: "-0.00%", driver: "AI定制ASIC与网络芯片龙头，随英伟达财报映射的AI算力需求大涨+4.49%，定制芯片叙事强化" },
    { name: "Microsoft", code: "MSFT",  change: "-0.00%", driver: "Azure与AI云需求强劲，英伟达财报印证AI资本开支景气，大型科技中领涨+1.75%" },
    { name: "Apple",     code: "AAPL",  change: "-0.00%", driver: "消费电子防御属性，当日资金聚焦AI硬件链，表现平淡微涨+0.36%" },
    { name: "Micron",    code: "MU",    change: "-0.00%", driver: "存储高价周期前期涨幅较大，英伟达财报后获利回吐-0.32%，SK海力士美国HBM扩产支撑行业景气" },
    { name: "Alphabet",  code: "GOOGL", change: "-0.00%", driver: "自研TPU与AI云，但资金从平台股轮动至AI硬件链，小幅回落-0.39%" },
    { name: "Meta",      code: "META",  change: "-0.00%", driver: "此前180亿美元青少年保护和解利好兑现后获利回吐，通信服务板块走弱，跌-0.87%" },
    { name: "AMD",       code: "AMD",   change: "-0.00%", driver: "英伟达财报后资金聚焦龙头，二线AI算力股获利了结，跌-0.89%" },
    { name: "Sandisk",   code: "SNDK",  change: "-0.00%", driver: "NAND存储前期急涨后技术性整固-0.96%，波动仍高，市场消化存储供需预期" },
    { name: "Amazon",    code: "AMZN",  change: "-0.00%", driver: "AWS与消费，英伟达财报后未获明显提振，大型科技中表现最弱-1.54%" }
  ],

  /* ============ 五、重要科技与政策新闻（一手来源） ============ */
  news: [
    {
      title: "英伟达罕见给出FY2028营收+70%指引，单日暴涨8.7%、市值增约4420亿美元",
      originalTitle: "Nvidia ignites chip stock rally as forecast shows AI boom is intact",
      source: "Reuters（经 Euronext Live 转载）",
      time: "2026年08月27日",
      type: "财经媒体",
      url: "https://live.euronext.com/en/financial-news/nvidia-rises-after-signaling-longer-ai-spending-runway",
      link: "https://live.euronext.com/en/financial-news/nvidia-rises-after-signaling-longer-ai-spending-runway",
      summary: "英伟达周三盘后公布Q2营收962亿、同比+106%超预期，并罕见给出下一财年（FY2028）营收增长约70%的长期指引，远超分析师约45%的预期，一举缓解市场对AI投资周期见顶的担忧。周四股价单日暴涨8.7%、市值增加约4420亿美元，创史上第二大单日市值增幅，逼近5月历史高点。至少16家投行上调目标价，LSEG数据显示英伟达前瞻PE仅17.9倍，显著低于AMD（37.2倍）与英特尔（46.2倍）。受其带动，英特尔、美光、博通、SK海力士ADR等AI关联芯片股齐涨，AI云服务商CoreWeave、Nebius亦涨2%-4.5%。",
      impact: {
        direction: "利好",
        companies: "英伟达及AI硬件链、AI云厂商",
        industry: "AI芯片、数据中心",
        logic: "长期指引印证AI资本开支景气延续，芯片股估值获得支撑"
      }
    },
    {
      title: "Salesforce与Anthropic推出Claudeforce，AI应用落地提速，软件股集体大涨",
      originalTitle: "Salesforce and Anthropic Announce Claudeforce: The #1 AI Meets the #1 AI CRM",
      source: "Salesforce 官方投资者关系（investor.salesforce.com）",
      time: "2026年08月26日",
      type: "官方",
      url: "https://investor.salesforce.com/news/news-details/2026/Salesforce-and-Anthropic-Announce-Claudeforce-The-1-AI-Meets-the-1-AI-CRM/default.aspx",
      link: "https://investor.salesforce.com/news/news-details/2026/Salesforce-and-Anthropic-Announce-Claudeforce-The-1-AI-Meets-the-1-AI-CRM/default.aspx",
      summary: "Salesforce宣布与Anthropic深化战略合作，推出Claudeforce，将Claude的推理能力与Salesforce的数据、工作流、业务逻辑和治理体系深度融合，首个插件\"Salesforce in Claude\"内置37项销售技能。同日公布Q2营收113.5亿、同比+11%，调整后EPS 5.90美元远超预期，Agentforce与Data 360合计年化经常性收入近39亿、同比+210%，并上调全年指引。消息缓解了市场对\"SaaSpocalypse\"（AI颠覆软件SaaS）的担忧，Salesforce周四暴涨22.6%，带动CrowdStrike +20.5%、Okta +27%，道琼斯美国软件指数涨4.5%创9个月新高。",
      impact: {
        direction: "利好",
        companies: "Salesforce、Anthropic及软件板块",
        industry: "企业软件、AI应用",
        logic: "AI商业化从硬件向应用层扩散，软件SaaS板块估值修复"
      }
    },
    {
      title: "英伟达+8.7%领涨科技股，纳指收涨1.6%，软件与芯片双轮驱动",
      originalTitle: "Tech Stocks Rally On Upbeat Results From Nvidia, Salesforce",
      source: "Nasdaq / RTTNews",
      time: "2026年08月27日",
      type: "财经媒体",
      url: "https://www.nasdaq.com/articles/tech-stocks-rally-upbeat-results-nvidia-salesforce",
      link: "https://www.nasdaq.com/articles/tech-stocks-rally-upbeat-results-nvidia-salesforce",
      summary: "周四美股三大指数集体收涨：纳指涨411点或1.6%至26541.35，标普涨55点或0.7%至7730.99，道指涨106点或0.2%至53569.44。英伟达+8.7%领涨，带动费城半导体指数涨2.3%；软件板块因Salesforce +22.6%、CrowdStrike业绩超预期而集体走强。午后涨幅收窄，因白宫确认未与伊朗谈判推升油价，且投资者在美联储主席沃什周五杰克逊霍尔讲话前趋于谨慎。当日公布的初请失业金降至20.3万、低于预期，显示劳动力市场依然稳健。",
      impact: {
        direction: "中性偏多",
        companies: "全市场、大型科技",
        industry: "美股大盘",
        logic: "AI财报季验证基本面，但油价与利率前景压制尾盘风险偏好"
      }
    },
    {
      title: "CrowdStrike上调全年指引、股价+20.5%，AI安全需求驱动软件股集体爆发",
      originalTitle: "Software and Chip Stocks Surge in AI-Fueled Earnings Blowout — WSJ",
      source: "Dow Jones Newswires / WSJ（经 TradingView）",
      time: "2026年08月27日",
      type: "财经媒体",
      url: "https://www.tradingview.com/news/DJN_DN20260827007613:0",
      link: "https://www.tradingview.com/news/DJN_DN20260827007613:0",
      summary: "在赛富时、CrowdStrike与英伟达财报共同推动下，软件与半导体股周四大涨。CrowdStrike Q2营收14.7亿、同比+26%超预期，并因AI安全风险升温带来的需求上调全年营收指引至59.9亿-60.1亿美元，股价暴涨20.5%。Okta涨约27%、Adobe涨约6%，iShares软件ETF涨6.5%。数月来市场担忧AI将颠覆SaaS商业模式，如今资金回流软件板块，标普软件与服务业ETF已收复年内全部跌幅、转正。半导体板块亦随英伟达走强，博通、英特尔涨超3.5%。",
      impact: {
        direction: "利好",
        companies: "CrowdStrike、Okta及软件板块",
        industry: "网络安全、企业软件",
        logic: "AI安全与Agent需求成为软件板块新增长引擎，\"SaaSpocalypse\"担忧缓和"
      }
    },
    {
      title: "美国初请失业金意外回落至20.3万，劳动力市场维持稳健",
      originalTitle: "U.S. Jobless Claims Unexpectedly Dip To 203,000",
      source: "Nasdaq / RTTNews（据美国劳工部）",
      time: "2026年08月27日",
      type: "财经媒体",
      url: "https://www.nasdaq.com/articles/us-jobless-claims-unexpectedly-dip-203000",
      link: "https://www.nasdaq.com/articles/us-jobless-claims-unexpectedly-dip-203000",
      summary: "美国劳工部周四公布，截至8月22日当周初请失业金人数降至20.3万，环比减少4000人，低于市场预期的20.8万；四周移动均值微升至20.55万。续请失业金人数降至177.8万，仍处历史低位。数据表明裁员维持在低位、劳动力市场整体平衡，为企业盈利与消费需求提供支撑，但也强化了\"经济稳健→通胀粘性→美联储难降息\"的逻辑，为周五沃什讲话及9月议息会议定调增添变数。",
      impact: {
        direction: "中性",
        companies: "全市场",
        industry: "利率、劳动力",
        logic: "就业韧性支撑软着陆，但降低快速降息预期、抑制成长股估值"
      }
    },
    {
      title: "SK海力士超40亿美元美国印第安纳州HBM先进封装基地奠基，2029年量产\"美国制造\"HBM",
      originalTitle: "SK hynix Holds Groundbreaking Ceremony for HBM Production Base in Indiana",
      source: "SK海力士官方（PR Newswire）",
      time: "2026年08月27日",
      type: "官方",
      url: "https://www.prnewswire.com/news-releases/sk-hynix-holds-groundbreaking-ceremony-for-hbm-production-base-in-indiana-beginning-a-new-future-for-us-korea-ai-302862032.html",
      link: "https://www.prnewswire.com/news-releases/sk-hynix-holds-groundbreaking-ceremony-for-hbm-production-base-in-indiana-beginning-a-new-future-for-us-korea-ai-302862032.html",
      summary: "SK海力士于当地时间8月27日在美国印第安纳州西拉斐特举行AI存储器先进封装生产基地奠基仪式，总投资超40亿美元，为美国首个HBM生产基地。无尘室预计2028年10月建成、2029年下半年启动新一代HBM量产。韩国产先进晶圆将运至印第安纳完成封装测试后以\"美国制造\"产品供应美国客户。项目预计创造约7000个直接及间接就业岗位，并与普渡大学签署研发合作MOU。此举深化美国存储供应链本地化，呼应CHIPS法案下的半导体制造回流。",
      impact: {
        direction: "利好",
        companies: "SK海力士、美光及存储供应链",
        industry: "存储芯片、半导体制造",
        logic: "美国本土HBM产能落地，缓解AI存储供应瓶颈、巩固美韩AI供应链"
      }
    }
  ],

  /* ============ 六、当日最值得关注的 3 个交易逻辑 ============ */
  logics: [
    { title: "英伟达罕见长期指引重新点燃AI资本开支叙事，市场焦点从「需求是否持续」转向「利润如何分配」",
      text: "英伟达Q2营收962亿、同比+106%超预期，更罕见给出FY2028营收+70%的长期指引，远超分析师45%预期，单日暴涨8.74%、市值增约4420亿美元，直接证伪了此前「AI投资周期见顶」的担忧。但财报同时显示Q3毛利率指引从75%下修至74%，管理层预警存储涨价将持续传导至自身成本，说明市场对英伟达的定价正从「能否超预期」转向「增长质量与成本传导」，AI硬件链的利润分配正在重构，这也是存储股与算力龙头当日分化的深层原因。" },
    { title: "AI交易从「硬件独占」转向「硬件+软件」双轮驱动，资金开始向应用层扩散",
      text: "当日真正超预期的并非只有英伟达：Salesforce +22.6%（与Anthropic推出Claudeforce、Agentforce年化收入+210%）、CrowdStrike +20.5%（AI安全需求上调指引）、Okta +27%，道琼斯软件指数涨4.5%创9个月新高，标普软件ETF收复年内全部跌幅。这显示AI商业化正在应用层兑现业绩，「SaaSpocalypse」担忧阶段性缓和，前期拥挤在算力龙头的资金开始向软件与Agent层再配置，AI叙事的广度在扩大。" },
    { title: "利率仍是科技成长股估值的「总开关」，初请失业金与沃什讲话定调未来路径",
      text: "初请失业金意外降至20.3万，印证劳动力市场依然稳健，但也强化了「经济稳健→通胀粘性→美联储难降息」的逻辑。7月PCE同比3.7%连续65个月高于2%目标，货币市场已定价美联储最早9月加息、年底前加息概率极高。周五美联储主席沃什杰克逊霍尔主旨演讲是决定长端利率与高估值科技股贴现率方向的关键变量，其是否重申2%通胀目标、如何回应财政部购债托市，将直接决定成长股未来1-2周的风险偏好。" }
  ],

  /* ============ 七、未来 1—3 个交易日关注事项（具体事件） ============ */
  watchlist: [
    { date: "08月28日", event: "Jackson Hole 全球央行年会：美联储主席沃什主旨演讲（美东上午10点/北京时间22时）", impact: "沃什就任以来首次杰克逊霍尔演讲，决定长端利率与成长股估值方向，市场高度关注其对2%通胀目标与财政部购债的态度" },
    { date: "08月29日", event: "Jackson Hole 全球央行年会闭幕（8月27-29日）", impact: "全球央行行长就货币政策与金融创新表态，影响跨境资金流向与风险偏好" },
    { date: "09月04日", event: "美国劳工部8月非农就业报告", impact: "就业数据定调9月FOMC议息，若就业走弱或缓解加息预期、支撑成长股" },
    { date: "09月15-16日", event: "美联储FOMC议息会议", impact: "货币市场定价9月加息概率高企，政策路径定调，影响科技成长股贴现率" }
  ],

  /* ============ 八、页脚免责声明 ============ */
  disclaimer:
    "本报告基于公开市场信息整理，仅供华泰期货内部研究参考，不构成任何投资建议。股价数据以交易所官方为准；新闻以原始来源（SEC / 白宫 / BIS / Treasury / BEA / Reuters / Bloomberg 等）为准。投资有风险，决策需谨慎。"
};
