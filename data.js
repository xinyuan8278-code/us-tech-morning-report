/**
 * ============================================================
 *  美股科技板块前一交易日行情日报 —— 数据文件（每日只需改这里）
 *  （2026-09-21 更新：对应美股交易日 2026-09-18）
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
    reportDate: "2026年09月21日",   // 报告发布日期（周一）
    tradeDate: "2026年09月18日",    // 对应美股交易日（前一交易日，周五）
    author: "华泰期货 · 研究",
    tag: "每日市场跟踪"
  },

  /* ============ 二、市场概览 ============ */
  overview: {
    /* 简短概括：指数变化 + 个股变化 + 重大事件 */
    text: "9月18日美股三大指数涨跌不一：纳指+0.39%至26522.55、标普+0.17%至7650.50、道指-0.18%至51682.64，费半+2.78%。存储芯片领涨（闪迪+10.99%至1791.82、美光+3.92%、希捷+6.93%、西数+4.13%），大型科技分化（英伟达+1.34%、Meta-2.43%）。10年期美债重回5%压制估值；周一闪迪纳入S&P 100、中美9/24峰会临近构成新催化。",
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
      name: "SanDisk / 闪迪",
      code: "SNDK",
      direction: "超涨",
      change: "-0.00%",
      fiveDay: "9/11收1633.35 → 9/14收1551.99 → 9/15收1530.90 → 9/16收1519.97（阶段低点）→ 9/17收1614.39（+6.21%）→ 9/18收1791.82（+10.99%），自9/16低点两日累计+17.9%",
      newHighLow: "收1791.82美元，收复9/9以来全部回调并逼近阶段新高，仍较6月高点2354.39美元低约24%",
      volume: "尾盘直线拉升（收盘前三分钟从约+7%拉至+10.99%），单日成交额约301—307亿美元，主要来自追踪标普100基金在9/18收盘前的强制买入",
      reason: "双重催化同日共振：①9/4标普道琼斯指数公司公告闪迪9/21开盘前正式纳入S&P 100（同时戴尔、Palo Alto、Arista调入，耐克、高露洁等调出），追踪基金须在生效日前收盘完成买入；②存储超级周期集中兑现——美光称新增供应2028年才爬坡、苹果接受三星2027Q1涨价30-40%、铠侠-闪迪314亿美元扩产、SK海力士Solidigm拟在美建厂",
      impact: "指数纳入带来的被动买盘已部分兑现，9/21生效后短期利多或边际减弱；中长期仍看NAND涨价周期与9/30美光财报验证。两日+17.9%急涨后波动加大，高位品种对利率（10年期美债重回5%）与获利了结仍较敏感"
    }
  ],

  /* ============ 四、重点公司行情表 ============ */
  /* 超涨/超跌个股放最上方；无新闻的公司驱动因素简要说明即可 */
  stocks: [
    { name: "SanDisk",   code: "SNDK",  change: "-0.00%", driver: "NAND存储领涨，+10.99%至1791.82美元（超涨）；9/21纳入S&P 100被动买盘+存储涨价周期双重催化，2026年累涨超600%居标普500之最" },
    { name: "Micron",    code: "MU",    change: "-0.00%", driver: "DRAM/NAND存储强势，+3.92%至约1016美元；美光高管称有意义新增内存供应2028年才爬坡，供需长期紧缺" },
    { name: "AMD",       code: "AMD",   change: "-0.00%", driver: "半导体普涨，+2.70%至约560美元；费半+2.78%，AI算力与存储需求共振" },
    { name: "Broadcom",  code: "AVGO",  change: "-0.00%", driver: "定制ASIC随半导体走强，+2.97%至约358美元" },
    { name: "NVIDIA",    code: "NVDA",  change: "-0.00%", driver: "AI龙头走强，+1.34%至约222美元；黄仁勋称明年芯片销量将翻倍，且将出席9/24中美峰会国宴" },
    { name: "Microsoft", code: "MSFT",  change: "-0.00%", driver: "大型科技分化，-0.80%至约494美元；10年期美债重回5%压制估值" },
    { name: "Apple",     code: "AAPL",  change: "-0.00%", driver: "随大盘窄幅波动，-0.26%至约336美元；接受三星2027Q1存储涨价（成本端传导）" },
    { name: "Amazon",    code: "AMZN",  change: "-0.00%", driver: "科技权重相对抗跌，+1.00%至约254美元" },
    { name: "Alphabet",  code: "GOOGL", change: "-0.00%", driver: "随大盘小幅上涨，+0.64%至约350美元" },
    { name: "Meta",      code: "META",  change: "-0.00%", driver: "科技七巨头中表现最弱，-2.43%至约666美元；利率上行压力" }
  ],

  /* ============ 五、重要科技与政策新闻（一手来源） ============ */
  news: [
    {
      title: "闪迪今日正式纳入标普100指数，戴尔、Palo Alto、Arista同步调入",
      originalTitle: "Sandisk Joins the S&P 100 on Monday -- the Same Day Nike Leaves It",
      source: "The Motley Fool（经 Nasdaq）",
      time: "2026年09月19日",
      type: "财经媒体",
      url: "https://www.nasdaq.com/articles/sandisk-joins-sp-100-monday-same-day-nike-leaves-it",
      link: "https://www.nasdaq.com/articles/sandisk-joins-sp-100-monday-same-day-nike-leaves-it",
      summary: "标普道琼斯指数公司9/4公告，闪迪（SNDK）于9/21开盘前正式纳入标普100，同日戴尔、Palo Alto Networks、Arista Networks调入，耐克、高露洁、西蒙地产、霍尼韦尔航空调出。追踪标普100的基金须在9/18周五收盘前完成强制买入，是当日闪迪尾盘直线拉升+10.99%的直接催化。闪迪2026年累涨超600%（标普500成分股之最），市值约2600亿美元；FY2026营收202.5亿美元（+175%）、数据中心收入+437%、净利114亿美元。",
      impact: {
        direction: "利好",
        companies: "闪迪（SNDK）、戴尔、Palo Alto、Arista",
        industry: "存储、半导体、指数成分调整",
        logic: "指数纳入带来被动资金强制买入与机构关注度提升，短期支撑股价；但纳入生效后被动买盘边际减弱，长期仍看NAND涨价周期"
      }
    },
    {
      title: "贝森特与何立峰纽约会谈：聚焦AI护栏、关税休战与稀土，为9/24峰会铺路",
      originalTitle: "US Treasury's Bessent, China's He to launch talks on AI, trade, critical minerals",
      source: "Reuters（经 AOL）",
      time: "2026年09月20日",
      type: "财经媒体",
      url: "https://www.aol.com/articles/us-treasurys-bessent-chinas-launch-050623000.html",
      link: "https://www.aol.com/articles/us-treasurys-bessent-chinas-launch-050623000.html",
      summary: "美国财长贝森特与国务院副总理何立峰、美贸易代表格里尔9/20在纽约摩根大通总部举行全天会谈，为9/24特朗普-习近平华盛顿峰会铺路。议题包括11/10到期的中美关税休战、稀土磁体与关键矿产流动，以及AI护栏（开闭源模型）。会后贝森特称会谈\"非常成功\"、提议建立\"美中AI对话\"机制并同意再会；美方指中方稀土履约\"未达标\"，将是峰会讨论重点。",
      impact: {
        direction: "中性偏多",
        companies: "半导体链、稀土链、中概资产",
        industry: "AI治理、贸易、关键矿产",
        logic: "若峰会取得关税休战延续或AI治理共识，将缓解芯片出口管制与供应链不确定性，直接提振半导体与中概风险偏好"
      }
    },
    {
      title: "特朗普与习近平9/24华盛顿峰会：AI、芯片、稀土为焦点，科技巨头CEO出席国宴",
      originalTitle: "Trump-Xi state dinner: Why America's biggest tech bosses will be at the table",
      source: "Livemint（综合 Politico）",
      time: "2026年09月20日",
      type: "财经媒体",
      url: "https://www.livemint.com/news/us-news/trumpxi-state-dinner-why-america-s-biggest-tech-bosses-will-be-at-the-table-11789848887821.html",
      link: "https://www.livemint.com/news/us-news/trumpxi-state-dinner-why-america-s-biggest-tech-bosses-will-be-at-the-table-11789848887821.html",
      summary: "习近平9/23抵美、9/24与特朗普在白宫举行峰会，为其十年来首次对美国事访问。议题聚焦贸易关税、AI、半导体、稀土矿产、台湾及伊朗战争。英伟达黄仁勋、OpenAI奥特曼、谷歌皮查伊、苹果库克、特斯拉马斯克、戴尔、亚马逊贝索斯等科技巨头高管受邀出席国宴，凸显AI与芯片在两国竞争中的核心地位。市场普遍预期峰会不会有重大突破，最可能结果仍是延续关税休战。",
      impact: {
        direction: "中性（关键事件）",
        companies: "英伟达（NVDA）、半导体链、稀土、中概",
        industry: "AI、芯片出口管制、贸易、稀土",
        logic: "峰会结果直接决定芯片出口管制、关税休战（11/10到期）与AI治理走向，是本周全球科技股最大的宏观变量"
      }
    },
    {
      title: "美国指控六家中国AI企业工业规模\"蒸馏\"美国前沿模型，AI治理成峰会焦点",
      originalTitle: "US Accuses Six Chinese AI Firms of Copying Models, Bypassing Chip Controls",
      source: "Tech Times",
      time: "2026年09月19日",
      type: "行业媒体",
      url: "https://techtimes.com/articles/327742/20260919/us-accuses-six-chinese-ai-firms-copying-models-bypassing-chip-controls.htm",
      link: "https://techtimes.com/articles/327742/20260919/us-accuses-six-chinese-ai-firms-copying-models-bypassing-chip-controls.htm",
      summary: "美国国家安全局（NSA）、联邦调查局（FBI）与网络安全和基础设施安全局（CISA）9/8联合发布网络安全公告（AA26-251A），指控DeepSeek、月之暗面、阿里、MiniMax、StepFun、Z.AI六家中国AI企业自2024年底以来以\"工业规模、恶意且具针对性\"方式蒸馏美国前沿模型（数十亿token），用于训练自有模型。公告称活动\"可能在中国政府知情下\"进行、强化中国军事与网络攻击能力。中国商务部驳斥指控\"毫无根据\"。",
      impact: {
        direction: "中性偏空",
        companies: "中国AI企业、前沿模型厂商",
        industry: "AI治理、芯片出口管制",
        logic: "蒸馏争议暴露芯片管制\"硬件管得住、API管不住\"的结构性漏洞，推升对AI能力输出实施新一轮管制的预期，为峰会AI治理议题埋下张力"
      }
    },
    {
      title: "美光高管：有意义的新增内存供应要到2028年才爬坡，供需平衡时间不明",
      originalTitle: "Micron Executive Says Meaningful New Memory Supply May Not Arrive Until 2028",
      source: "Guru3D（报道 Six Five Summit 2026）",
      time: "2026年09月18日",
      type: "行业媒体",
      url: "https://www.guru3d.com/story/micron-executive-says-meaningful-new-memory-supply-may-not-arrive-until-2028/",
      link: "https://www.guru3d.com/story/micron-executive-says-meaningful-new-memory-supply-may-not-arrive-until-2028/",
      summary: "美光前执行副总裁兼首席商务官、现任CEO高级顾问Sumit Sadana在Six Five Summit 2026表示，当前内存短缺已覆盖所有市场领域，客户需求预测持续上修；即使供应商全力扩产，真正有意义的新增供应要到2028年才会开始爬坡，供需何时恢复平衡\"看不到明确时间\"。他指AI系统性能越来越取决于内存容量、性能与带宽，存储正从标准化周期品变为决定系统性能的核心部件。",
      impact: {
        direction: "利好",
        companies: "美光（MU）、闪迪（SNDK）、存储链",
        industry: "存储、半导体、AI",
        logic: "供应紧缺周期被权威产业高管确认，强化存储涨价与长期景气叙事，是当日存储板块爆发的最直接催化之一"
      }
    },
    {
      title: "黄仁勋：英伟达明年芯片销量将翻倍，瓶颈在产能而非需求",
      originalTitle: "Jensen Huang forecasts Nvidia chip sales to double in 2027",
      source: "Bloomberg（经 Yahoo Finance）",
      time: "2026年09月17日",
      type: "财经媒体",
      url: "https://finance.yahoo.com/technology/ai/articles/jensen-huang-forecasts-nvidia-chip-114738472.html",
      link: "https://finance.yahoo.com/technology/ai/articles/jensen-huang-forecasts-nvidia-chip-114738472.html",
      summary: "英伟达CEO黄仁勋在苏格兰查尔斯三世国王召集的AI峰会上表示，随着AI渗透医疗、制造、金融服务等行业，公司明年芯片销量将达到今年的两倍，当前瓶颈是产能而非需求。此前英伟达预计截至2028年1月财年营收增长约70%（约6730亿美元），若供应充足营收甚至可能翻倍。黄仁勋同时强调企业应确保AI产品在发布前经过严格测试、不安全应暂缓。",
      impact: {
        direction: "利好",
        companies: "英伟达（NVDA）、半导体链",
        industry: "AI、半导体、数据中心",
        logic: "AI需求指引上修，对冲\"AI放缓\"担忧，提振AI硬件与存储链情绪，支撑芯片股普涨"
      }
    },
    {
      title: "苹果接受三星2027年一季度存储涨价，DRAM/NAND价格上调30-40%",
      originalTitle: "iPhone prices may rise again in 2027; Samsung's latest memory deal could be the reason",
      source: "DigiTimes（经 Business Today）",
      time: "2026年09月18日",
      type: "财经媒体",
      url: "https://www.businesstoday.in/technology/news/story/iphone-prices-may-rise-again-in-2027-samsungs-latest-memory-deal-could-be-the-reason-556351-2026-09-18",
      link: "https://www.businesstoday.in/technology/news/story/iphone-prices-may-rise-again-in-2027-samsungs-latest-memory-deal-could-be-the-reason-556351-2026-09-18",
      summary: "据DigiTimes报道，苹果已接受三星2027年一季度的存储涨价方案，DRAM约2美元/Gb、NAND约0.33美元/Gb，较2026年三季度上涨约30-40%。三星、SK海力士、美光正将产能优先转向HBM与AI服务器内存，挤压手机用DRAM/NAND供给。苹果近年持续涨价（iPhone 18 Pro已较上代贵100美元），存储成本或进一步传导至终端售价。",
      impact: {
        direction: "利好存储供应商",
        companies: "三星、SK海力士、美光（MU）",
        industry: "存储、消费电子、供应链",
        logic: "存储涨价从服务器向消费电子全品类传导，印证供给全面紧缺，强化存储提价周期与定价权转移"
      }
    }
  ],

  /* ============ 六、当日最值得关注的 3 个交易逻辑 ============ */
  logics: [
    { title: "存储超级周期叠加指数纳入：闪迪领涨、板块集中兑现",
      text: "美光Sadana\"新增供应2028年才爬坡\"、苹果接受三星2027Q1涨价30-40%、铠侠-闪迪314亿美元扩产，叠加9/21闪迪纳入S&P 100（9/4公告、基金须在9/18收盘前强制买入），供给紧缺+涨价周期+指数纳入三重催化同日共振，闪迪+10.99%、美光+3.92%领涨，费半+2.78%逆势走强。存储正从\"周期品\"转向\"决定AI性能的核心部件\"，是当前市场最强势的交易主线。" },
    { title: "中美AI/芯片博弈升温，9/24峰会成为本周最大宏观变量",
      text: "贝森特-何立峰9/20纽约会谈（AI护栏、关税休战、稀土），叠加美方指控六家中国AI企业\"工业规模蒸馏\"，为9/24特朗普-习近平华盛顿峰会铺路。芯片出口管制、关税休战（11/10到期）、AI治理三大议题直接锚定英伟达、半导体链与稀土/中概资产。峰会结果或决定下周科技板块的风险偏好与估值方向。" },
    { title: "利率重回5% vs 存储/半导体结构性强势：资金在有限流动性下极端分化",
      text: "10年期美债收益率升至5.00%（2023年以来首次）压制高估值成长股（Meta-2.43%、微软-0.80%），道指单周-1.7%创3月以来最大跌幅；但存储/半导体结构性强势（费半+2.78%）独立于大盘。资金从软件与大盘权重轮动至存储/半导体，市场呈\"指数平稳、板块极端分化\"格局。" }
  ],

  /* ============ 七、未来 1—3 个交易日关注事项（具体事件） ============ */
  watchlist: [
    { date: "09月21日", event: "闪迪（SNDK）正式纳入S&P 100，戴尔/Palo Alto/Arista同步调入、耐克调出（盘前生效）", impact: "被动指数基金调仓完成，闪迪纳入利多边际兑现，关注存储板块短线波动" },
    { date: "09月23日", event: "中国国家主席习近平抵达美国（十年来首次对美国事访问）", impact: "中美关系与科技/芯片/稀土议题预期升温，影响半导体与中概风险偏好" },
    { date: "09月24日", event: "特朗普-习近平华盛顿峰会（AI治理、芯片出口管制、关税休战、稀土）", impact: "本周最大宏观变量，结果直接决定芯片出口管制与关税休战走向，锚定科技股估值" },
    { date: "09月30日", event: "美光科技（Micron）FY2025 Q4 财报", impact: "DRAM/HBM/NAND存储涨价周期与供需的关键验证，影响存储板块（MU/SNDK/WDC/STX）定价" },
    { date: "10月底", event: "美联储下次FOMC议息会议（点阵图暗示年内或再加息一次）", impact: "利率路径与点阵图演变直接锚定高估值成长股估值中枢" }
  ],

  /* ============ 八、页脚免责声明 ============ */
  disclaimer:
    "本报告基于公开市场信息整理，仅供华泰期货内部研究参考，不构成任何投资建议。股价数据以交易所官方为准；新闻以原始来源（SEC / 白宫 / BIS / Treasury / BEA / BLS / Federal Reserve / Reuters 等）为准。投资有风险，决策需谨慎。"
};
