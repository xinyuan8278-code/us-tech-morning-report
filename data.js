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
    reportDate: "2026年09月09日",   // 报告发布日期（周三）
    tradeDate: "2026年09月08日",    // 对应美股交易日（前一交易日，劳动节后首个完整交易日）
    author: "华泰期货 · 研究",
    tag: "每日市场跟踪"
  },

  /* ============ 二、市场概览 ============ */
  overview: {
    /* 简短概括：指数变化 + 个股变化 + 重大事件 */
    text: "9月8日美股三大指数集体收跌：道指-1.18%、标普500-0.58%、纳指-0.32%，费城半导体（SOXX）逆势+1.6%。中东油轮袭击升级推升油价逼近百元、加剧通胀与加息担忧（9月加息概率约58%），大型科技与软件股承压；但AI硬件与半导体逆势走强——AMD+5.90%（Citi会议AI展望）、博通+2.98%、英特尔+9.05%，存储股高位回吐（美光-1.61%、闪迪-0.12%）。高通与亚马逊达成AI芯片合作，最高600亿美元采购。",
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
      name: "AMD",
      code: "AMD",
      direction: "超涨",
      change: "-0.00%",
      fiveDay: "9/1收盘459.61 → 9/8收盘505.74，近5个交易日累计约+10.0%，连续走高",
      newHighLow: "创阶段新高，收于505.74美元，逼近历史高位",
      volume: "明显放大，9/8成交2816.7万股，约为前一交易日（1967.9万股）的1.43倍",
      reason: "在Citi 2026全球TMT会议上给出乐观AI展望：2030年AI市场可达2万亿美元、数据中心业务2027年翻倍至约700亿美元，MI450三季度出货、Q4爬坡，并宣布Meta、OpenAI、Anthropic为重要AI客户；Citi分析师Atif Malik重申买入、目标价575美元",
      impact: "AI算力与服务器CPU双主线共振，股价创阶段新高；但估值已高（P/E约122倍），后续走势取决于数据中心收入兑现与毛利率表现"
    }
  ],

  /* ============ 四、重点公司行情表 ============ */
  /* 超涨/超跌个股放最上方；无新闻的公司驱动因素简要说明即可 */
  stocks: [
    { name: "NVIDIA",    code: "NVDA",  change: "-0.00%", driver: "大盘承压+获利回吐，跌2.01%，为科技巨头中跌幅居前；收购Hugging Face（约129亿美元）利好未抵宏观压力" },
    { name: "Microsoft", code: "MSFT",  change: "-0.00%", driver: "油价上涨、加息预期升温压制大型软件股，跌1.15%" },
    { name: "Apple",     code: "AAPL",  change: "-0.00%", driver: "大型科技股随大盘回落，跌1.17%；9/9发布会前市场观望" },
    { name: "Amazon",    code: "AMZN",  change: "-0.00%", driver: "消费科技承压，微跌0.60%；与高通达成AI芯片合作、利好AWS自研芯片" },
    { name: "Alphabet",  code: "GOOGL", change: "-0.00%", driver: "基本持平（-0.03%），大型平台股相对抗跌" },
    { name: "Meta",      code: "META",  change: "-0.00%", driver: "大盘走弱拖累，跌0.53%" },
    { name: "Broadcom",  code: "AVGO",  change: "-0.00%", driver: "定制ASIC主题升温（高通-亚马逊合作印证）+半导体板块走强，涨2.98%" },
    { name: "AMD",       code: "AMD",   change: "-0.00%", driver: "Citi会议乐观AI展望（2万亿AI TAM、数据中心2027翻倍至700亿），涨5.90%领涨芯片股" },
    { name: "Micron",    code: "MU",    change: "-0.00%", driver: "存储股冲高后获利回吐，跌1.61%；Goldman称存储正突破夏季下行趋势（尚处初期）" },
    { name: "Sandisk",   code: "SNDK",  change: "-0.00%", driver: "高位整固，微跌0.12%；NAND超级周期延续但短线获利了结" }
  ],

  /* ============ 五、重要科技与政策新闻（一手来源） ============ */
  news: [
    {
      title: "中东油轮袭击升级、油价逼近百元：美股三大指数集体收跌，美联储9月加息概率约58%",
      originalTitle: "Wall Street down, oil up as inflation, Middle East worries persist",
      source: "Reuters（路透社，经 Euronext Live 转载原文）",
      time: "2026年09月08日",
      type: "财经媒体",
      url: "https://live.euronext.com/en/financial-news/wall-street-down-oil-inflation-middle-east-worries-persist",
      link: "https://live.euronext.com/en/financial-news/wall-street-down-oil-inflation-middle-east-worries-persist",
      summary: "9月8日美股三大指数集体收跌：道指-1.18%、标普-0.58%、纳指-0.32%，MSCI全球指数-0.55%。核心驱动是中东局势升级——也门胡塞武装袭击沙特能源设施，美军随后摧毁5艘伊朗原油运输船，布伦特原油涨2.13%至99.07美元、WTI涨2.82%至94.05美元，油价逼近百元推升通胀担忧。10年期美债收益率报4.8%（逼近2023年11月来高位），货币市场定价美联储9月16日加息概率约58%；欧洲央行周四（9/10）几乎确定加息25bp，日本央行下周加息预期升温、日元创两年最大单周涨幅（近4%），套息交易平仓放大全球风险资产波动。周五（9/11）CPI是议息前决定性变量。",
      impact: {
        direction: "利空",
        companies: "全市场、高估值成长股",
        industry: "能源、通胀、利率",
        logic: "油价经通胀渠道强化加息预期、压制长久期成长股估值；但纳指跌幅(-0.32%)远小于道指(-1.18%)，AI/半导体主线相对抗跌"
      }
    },
    {
      title: "AMD在Citi会议给出乐观AI展望：2030年AI市场2万亿美元、数据中心业务2027年翻倍至700亿美元",
      originalTitle: "AMD Stock Jumps Over 5% Today on Bullish AI Outlook",
      source: "TipRanks（行业媒体）",
      time: "2026年09月08日",
      type: "行业媒体",
      url: "https://www.tipranks.com/news/amd-stock-amd-jumps-over-6-today-on-bullish-ai-outlook",
      link: "https://www.tipranks.com/news/amd-stock-amd-jumps-over-6-today-on-bullish-ai-outlook",
      summary: "AMD股价周二涨超5%（收涨5.90%），驱动是公司在Citi 2026全球TMT会议上给出更乐观的AI展望：预计到2030年AI相关市场机会可达2万亿美元；数据中心业务2027年将翻倍至约700亿美元营收，其中AI GPU预计贡献低400亿美元区间，其余由服务器CPU贡献。MI450已从三季度开始出货、Q4爬坡、2027年一季度再上台阶；AMD宣布Meta、OpenAI、Anthropic为重要AI客户。公司同时上调服务器CPU市场空间预期（2030年达2200亿美元），并提示先进制程晶圆、HBM与先进封装供给紧张，已锁定290-300亿美元采购承诺。Citi分析师Atif Malik重申买入、目标价575美元。",
      impact: {
        direction: "利好",
        companies: "AMD、英伟达产业链",
        industry: "AI算力、服务器CPU、半导体",
        logic: "数据中心+AI双主线驱动AMD创阶段新高，印证AI资本开支景气延续"
      }
    },
    {
      title: "高通与亚马逊达成AI芯片合作：最高600亿美元采购+40亿认股权证，定制ASIC与1.6T光互联",
      originalTitle: "Qualcomm strikes AI chip deal with Amazon, offers right to buy about $4 billion in stock",
      source: "Reuters（路透社，经 The Economic Times 转载原文）",
      time: "2026年09月08日",
      type: "财经媒体",
      url: "https://economictimes.indiatimes.com/tech/artificial-intelligence/qualcomm-strikes-ai-chip-deal-with-amazon-offers-right-to-buy-about-4-billion-in-stock/articleshow/133932526.cms",
      link: "https://economictimes.indiatimes.com/tech/artificial-intelligence/qualcomm-strikes-ai-chip-deal-with-amazon-offers-right-to-buy-about-4-billion-in-stock/articleshow/133932526.cms",
      summary: "高通周二宣布与亚马逊建立多代际AI数据中心芯片合作，聚焦AWS数据中心内的AI推理工作负载，长期采购规模最高可达600亿美元。作为协议一部分，高通向亚马逊发行认股权证，允许其以每股161.26美元固定价格购买最多2500万股（价值约40亿美元），权证随采购里程碑分批归属。双方还将联合开发最高1.6Tbps的光互连解决方案。这是高通继Meta、微软之后获得的又一超大规模客户，目标2029年数据中心芯片收入达150亿美元。此前Marvell与谷歌签署类似定制AI芯片协议（最高122亿美元认股权证），\"采购换股权\"模式在AI供应链扩散。高通收涨约3-4%。",
      impact: {
        direction: "利好",
        companies: "高通、亚马逊、博通（定制ASIC对标）、光互连产业链",
        industry: "AI芯片、定制ASIC、光通信",
        logic: "印证超大规模云厂商加码自研定制芯片、寻求英伟达之外的选择，定制ASIC与光互连主题升温"
      }
    },
    {
      title: "芯片股逆势上涨：Goldman称存储股突破夏季下行趋势，英特尔High-NA EUV里程碑，英伟达收购Hugging Face",
      originalTitle: "Why Are Micron, AMD, Nvidia and Intel Stocks Rising Today? Here's What's Driving the Chip Rally, September 8",
      source: "TipRanks（行业媒体）",
      time: "2026年09月08日",
      type: "行业媒体",
      url: "https://www.tipranks.com/news/why-are-micron-amd-nvidia-and-intel-stocks-rising-today-heres-whats-driving-the-chip-rally",
      link: "https://www.tipranks.com/news/why-are-micron-amd-nvidia-and-intel-stocks-rising-today-heres-whats-driving-the-chip-rally",
      summary: "在美股期货走低、油价逼近百元的背景下，芯片板块仍逆势走强。Goldman Sachs指出美光、闪迪等存储股正突破整个夏季的下跌趋势、且尚处初期，叠加美光9月30日财报催化，SK海力士(+4.83%)、三星同步走强。英特尔大涨9.05%——英特尔代工与ASML宣布High-NA EUV技术已累计加工超100万片晶圆，用于18A制程Panther Lake，先进制程进展获认可。英伟达则以约129.3亿美元收购Hugging Face、强化AI软件栈，CEO黄仁勋强调AI算力需求强劲（OpenAI GPT-6 Astra训练动用超10万Grace Blackwell系统、另有40万GPU即将上线）。存储板块内部分化：希捷+6.49%、SK海力士+4.83%、西部数据+2.14%，美光-1.61%、闪迪-0.12%。",
      impact: {
        direction: "利好",
        companies: "英特尔、AMD、英伟达、美光、闪迪、ASML",
        industry: "半导体、存储、AI算力",
        logic: "AI需求+存储涨价周期+先进制程共同驱动费半逆势+1.3%，凸显\"AI硬件强于软件\"的结构分化"
      }
    },
    {
      title: "Citi顶级分析师重申AMD买入、目标价575美元：数据中心业务明年翻倍、Helios 2027量超预期",
      originalTitle: "AMD Stock Forecast: Top Citi Analyst Remains Bullish on New Growth Targets",
      source: "TipRanks（行业媒体 / 财经博客）",
      time: "2026年09月08日",
      type: "行业媒体",
      url: "https://blog.tipranks.com/amd-stock-forecast-top-citi-analyst-remains-bullish-on-new-growth-targets",
      link: "https://blog.tipranks.com/amd-stock-forecast-top-citi-analyst-remains-bullish-on-new-growth-targets",
      summary: "Citi分析师Atif Malik在与AMD CFO Jean Hu、IR负责人Matt Ramsay会面后重申买入评级、目标价575美元。Malik指出AMD上调长期展望：AI与加速计算驱动下，2030年总可服务市场达2万亿美元；数据中心业务明年翻倍以上（MI450本季出货、Q4及2027年爬坡）；Helios机架级系统进展顺利，2027年出货量已高于管理层早期预估；AMD披露Meta及两家AI实验室三大锚定客户，订单均高于初始协议。服务器CPU方面，AMD将2030年TAM由250亿大幅上调至2200亿美元，企业服务器业务Q2同比+70%，目标拿下50%份额（对应1000亿美元）。AMD全年CPU收入下半年预计同比+80%以上。",
      impact: {
        direction: "利好",
        companies: "AMD",
        industry: "AI算力、服务器CPU",
        logic: "分析师上调评级与目标价强化AMD AI/服务器双主线逻辑，支撑股价创阶段新高"
      }
    }
  ],

  /* ============ 六、当日最值得关注的 3 个交易逻辑 ============ */
  logics: [
    { title: "利率与油价双重压制：CPI前风险偏好承压，但AI主线相对抗跌",
      text: "油价逼近百元（中东油轮袭击升级）+10年期美债收益率4.8%+9月加息概率约58%，共同压制风险资产，大型科技与软件股（英伟达-2.01%、苹果-1.17%、微软-1.15%）领跌；但纳指跌幅(-0.32%)远小于道指(-1.18%)、费半逆势+1.3%，显示AI/半导体主线与宏观利率脱敏。9/11 CPI是决定性变量，若超预期将进一步压制长久期成长股估值。" },
    { title: "定制ASIC与\"采购换股权\"模式扩散：云厂商寻求英伟达之外的第二条路",
      text: "高通-亚马逊600亿合作（40亿认股权证）延续Marvell-谷歌(122亿)、AMD-OpenAI(最高10%股权)模式，定制ASIC主题升温——博通+2.98%、高通+3%，1.6T光互连受益。云厂商通过定制芯片强化议价与自研能力，AI芯片竞争格局生变，博通等ASIC龙头与光互连产业链成为受益方。" },
    { title: "AI硬件与半导体逆势：AMD领涨、存储高位分化，产业景气独立于利率",
      text: "AMD+5.90%（Citi会议2万亿AI TAM、数据中心2027翻倍至700亿）、英特尔+9.05%、费半+1.3%，AI资本开支叙事独立于利率上行；但存储股高位获利回吐（美光-1.61%、闪迪-0.12%），Goldman称突破下行趋势尚处初期，需9/30美光财报验证涨价周期与HBM放量。" }
  ],

  /* ============ 七、未来 1—3 个交易日关注事项（具体事件） ============ */
  watchlist: [
    { date: "09月09日", event: "苹果'Surprise and Shine'秋季发布会（iPhone 18 Pro/Pro Max + 首款折叠iPhone Ultra）+ 财政部扩大版长债回购首次操作（10年期国债拍卖390亿）", impact: "苹果折叠屏与AI创新能否对冲估值压力；长债回购落地影响收益率曲线" },
    { date: "09月10日", event: "美国8月PPI + Oracle、Adobe 盘后财报 + 欧洲央行（ECB）议息（预计加息25bp）", impact: "PPI为9月通胀先行指标；Oracle（6380亿美元积压订单）检验AI/企业软件景气；ECB加息收紧全球流动性" },
    { date: "09月11日", event: "美国8月CPI数据（9月FOMC前最后通胀数据）", impact: "静默期内加息与否的决定性依据，当前加息押注约58%" },
    { date: "09月15-16日", event: "美联储FOMC议息会议", impact: "市场定价9/16加息25bp概率约58%，影响高估值成长股估值锚" },
    { date: "09月30日", event: "美光科技（Micron）Q4财报", impact: "存储涨价周期与HBM供需的关键验证，影响存储板块（美光、闪迪）定价" }
  ],

  /* ============ 八、页脚免责声明 ============ */
  disclaimer:
    "本报告基于公开市场信息整理，仅供华泰期货内部研究参考，不构成任何投资建议。股价数据以交易所官方为准；新闻以原始来源（SEC / 白宫 / BIS / Treasury / BEA / Reuters / Bloomberg 等）为准。投资有风险，决策需谨慎。"
};
