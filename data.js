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
    reportDate: "2026年08月23日",   // 报告发布日期
    tradeDate: "2026年08月21日",    // 对应美股交易日（前一交易日）
    author: "华泰期货 · 研究",
    tag: "每日市场跟踪"
  },

  /* ============ 二、市场概览 ============ */
  overview: {
    /* 简短概括：指数变化 + 个股变化 + 重大事件 */
    text: "8月21日美股反弹，道指涨0.98%、纳指与标普均涨0.43%，纳指100终结五连跌；但周线仍跌（标普-1.43%、纳指-2.05%）。长债收益率高位（30年期触及2007年以来新高）压制成长股，资金转向金融、贵金属与加密，黄金重返4600美元。七巨头分化：谷歌+1.22%、博通+1.21%、AMD+0.81%领涨，英伟达-0.98%领跌。下周聚焦英伟达财报、杰克逊霍尔与7月PCE。",
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
    { name: "Alphabet",  code: "GOOGL", change: "-0.00%", driver: "AI/云业务领涨，自研TPU与广告韧性支撑，反弹+1.22%" },
    { name: "Broadcom",  code: "AVGO",  change: "-0.00%", driver: "超600亿美元AI债务融资预期提振，定制AI芯片(ASIC)需求，涨+1.21%" },
    { name: "AMD",       code: "AMD",   change: "-0.00%", driver: "服务器CPU与AI加速器需求，止跌反弹+0.81%" },
    { name: "Meta",      code: "META",  change: "-0.00%", driver: "前期大跌后企稳，反弹+0.75%" },
    { name: "Microsoft", code: "MSFT",  change: "-0.00%", driver: "云计算与AI稳健，随大盘反弹+0.43%" },
    { name: "Sandisk",   code: "SNDK",  change: "-0.00%", driver: "存储高位整固，AI闪存需求支撑，微跌-0.28%" },
    { name: "Amazon",    code: "AMZN",  change: "-0.00%", driver: "消费与AWS承压，收跌-0.57%" },
    { name: "Apple",     code: "AAPL",  change: "-0.00%", driver: "消费走弱拖累，收跌-0.63%" },
    { name: "Micron",    code: "MU",    change: "-0.00%", driver: "前日大涨后高位整固，微跌-0.77%" },
    { name: "NVIDIA",    code: "NVDA",  change: "-0.00%", driver: "下周财报前获利回吐，领跌-0.98%" }
  ],

  /* ============ 五、重要科技与政策新闻（一手来源） ============ */
  news: [
    {
      title: "美股周五全面反弹：道指涨0.98%，纳指、标普涨0.43%，黄金重返4600美元",
      originalTitle: "Wall St rises in broad rebound; yields push markets towards weekly declines",
      source: "Reuters",
      time: "2026年08月21日",
      type: "财经媒体",
      url: "https://www.kitco.com/news/off-the-wire/2026-08-21/wall-st-rises-broad-rebound-yields-push-markets-towards-weekly",
      link: "https://www.kitco.com/news/off-the-wire/2026-08-21/wall-st-rises-broad-rebound-yields-push-markets-towards-weekly",
      summary: "8月21日美股三大指数反弹，道指涨0.98%报53277.01点，标普500与纳指均涨0.43%；但周线仍收跌——标普跌1.43%、纳指跌2.05%，终结三周连涨。资金从高久期成长股转向金融、医疗、贵金属与加密板块：现货黄金周涨逾5%重返4600美元，比特币周涨逾20%、连续五日上涨。30年期美债收益率周内触及2007年以来新高，是压制科技成长股估值、导致本周大盘震荡的核心驱动。",
      impact: {
        direction: "中性",
        companies: "大型科技、半导体",
        industry: "全市场",
        logic: "长端利率与风险偏好博弈，单日反弹但周线仍跌"
      }
    },
    {
      title: "博通洽谈超600亿美元AI芯片债务融资，总额或达千亿美元",
      originalTitle: "Broadcom Seeks More Than $60 Billion in Latest AI Debt Deal",
      source: "Bloomberg",
      time: "2026年08月20日",
      type: "财经媒体",
      url: "https://www.bloomberg.com/news/articles/2026-08-20/broadcom-seeks-more-than-60-billion-in-latest-ai-debt-deal",
      link: "https://www.bloomberg.com/news/articles/2026-08-20/broadcom-seeks-more-than-60-billion-in-latest-ai-debt-deal",
      summary: "博通正与黑石、阿波罗等机构洽谈逾600亿美元债务融资，为Anthropic等公司采购AI芯片与算力提供资金；含约300亿美元次级债后总额或达千亿美元，将成为迄今规模最大的SPV融资。博通为600—700亿美元优先担保债提供部分担保，延续6月350亿美元AI XPV平台模式。这标志着AI基建资本开支正从科技公司资产负债表大规模转向债务市场，但也引发市场对'卖方担保敞口'与CDS走阔的担忧。",
      impact: {
        direction: "利好",
        companies: "博通、Anthropic、英伟达",
        industry: "AI芯片、数据中心",
        logic: "AI基建债务化融资扩围，强化定制ASIC需求与资本开支叙事"
      }
    },
    {
      title: "财政部扩大长债回购被指'小号扭曲操作'：不改赤字路径，长端利率高位压制成长股",
      originalTitle: "Bonds Twist Again, Despite a Vow of Treasury Buybacks",
      source: "Barron's",
      time: "2026年08月20日",
      type: "财经媒体",
      url: "https://www.tradingview.com/news/DJN_DN20260820006922:0",
      link: "https://www.tradingview.com/news/DJN_DN20260820006922:0",
      summary: "财政部宣布自9月9日起将10—30年期国债单次回购规模翻倍至至少40亿美元（持续至11月4日），30年期收益率一度触及2007年以来新高5.34%后回落约10个基点至5.18%—5.19%。但回购须以新发债融资，'既不削减债务也不改变赤字路径'，国债总额已破40万亿美元，Evercore等机构指其'最多是极小幅的扭曲操作'，长端抛压难根本缓解。这是本周压制高久期成长股估值的核心宏观变量。",
      impact: {
        direction: "利空",
        companies: "高估值科技股、半导体",
        industry: "利率、国债市场",
        logic: "财政可持续性担忧推高期限溢价，压制成长股估值"
      }
    },
    {
      title: "英伟达8月26日财报前瞻：华尔街押注营收最高达950亿美元，AI开支迎'压力测试'",
      originalTitle: "Nvidia Stock Has One Week to Prove the AI Spending Boom Is Still Alive",
      source: "24/7 Wall St.",
      time: "2026年08月21日",
      type: "财经媒体",
      url: "https://247wallst.com/investing/2026/08/21/nvidia-stock-has-one-week-to-prove-the-ai-spending-boom-is-still-alive",
      link: "https://247wallst.com/investing/2026/08/21/nvidia-stock-has-one-week-to-prove-the-ai-spending-boom-is-still-alive",
      summary: "英伟达将于8月26日盘后公布2027财年Q2财报，管理层指引营收910亿美元±2%、非GAAP毛利率约75%，花旗预计930亿美元、瑞银预计940—950亿美元，Jefferies更预计950亿美元并看Q3指引1080亿美元。市场关注点已从'能否超预期'转向Blackwell/Rubin爬坡进度、毛利率与'循环融资'风险。财报将是AI基础设施资本开支可持续性的关键检验，也是下周全球市场最大单一事件。",
      impact: {
        direction: "中性",
        companies: "英伟达及AI硬件链",
        industry: "AI芯片、数据中心",
        logic: "财报定调AI资本开支可持续性，高预期下波动风险上升"
      }
    },
    {
      title: "美联储主席沃什8月28日杰克逊霍尔首秀，抗通胀公信力面临检验",
      originalTitle: "Jackson Hole Is a Forum For Warsh's Fed Vision",
      source: "Barron's",
      time: "2026年08月22日",
      type: "财经媒体",
      url: "https://www.tradingview.com/news/DJN_DN20260821008689:0",
      link: "https://www.tradingview.com/news/DJN_DN20260821008689:0",
      summary: "新任美联储主席沃什将于8月28日（美东时间上午10点）在杰克逊霍尔年会发表上任后首次主旨演讲。在通胀连续五年高于2%目标、联邦基金利率维持3.50%—3.75%的背景下，沃什此前削减前瞻指引、拒绝给出利率路径的'沉默'已引发市场对美联储公信力的质疑。前费城联储主席哈克、Evercore的卡西拉吉等警告，若演讲仍停留在空泛承诺而不给出可验证的抗通胀反应函数，长期限美债收益率可能继续上行，冲击成长股。",
      impact: {
        direction: "中性",
        companies: "全市场、高久期科技股",
        industry: "货币政策、利率",
        logic: "决定长端利率与成长股估值方向，市场定价对措辞高度敏感"
      }
    },
    {
      title: "三星董事会周五讨论逾720亿美元股东回报，存储超级周期现金兑现",
      originalTitle: "Samsung board set to discuss huge shareholder return package on Friday",
      source: "Reuters",
      time: "2026年08月21日",
      type: "财经媒体",
      url: "https://in.marketscreener.com/news/samsung-elec-to-convene-board-meeting-friday-afternoon-to-discuss-shareholder-return-plan-says-sour-ce7859d3d18afe2c",
      link: "https://in.marketscreener.com/news/samsung-elec-to-convene-board-meeting-friday-afternoon-to-discuss-shareholder-return-plan-says-sour-ce7859d3d18afe2c",
      summary: "三星电子周五下午召开董事会讨论新股东回报方案，媒体预计规模超100万亿韩元（约720亿美元），含特别股息、回购与注销；SK海力士本周已宣布40万亿韩元（约286亿美元）回购注销。AI存储超级周期下，两大存储巨头年底净现金合计将达2630亿美元，远超英伟达的约1020亿美元。周五三星涨3.5%、SK海力士涨4.4%，存储板块现金流兑现为股东回报，缓解周期见顶担忧。",
      impact: {
        direction: "利好",
        companies: "三星、SK海力士、美光、闪迪",
        industry: "存储芯片",
        logic: "存储超级周期现金流兑现为股东回报，强化板块景气"
      }
    },
    {
      title: "三星先进制程代工价格最高上调15%，TSMC满载外溢订单",
      originalTitle: "Samsung raises advanced foundry prices by up to 15% as AI demand fills its 4nm lines",
      source: "Reuters",
      time: "2026年08月21日",
      type: "财经媒体",
      url: "https://finance.yahoo.com/technology/ai/articles/samsung-raises-advanced-foundry-prices-161553482.html",
      link: "https://finance.yahoo.com/technology/ai/articles/samsung-raises-advanced-foundry-prices-161553482.html",
      summary: "三星自7月起将4nm、5nm代工新订单价格上调10%—15%，8nm上调近10%，中国客户涨幅最高。TSMC先进制程产能已满载——3nm预订至2027年、2nm已被苹果、英伟达、AMD锁定，三星成为唯一可承接溢出的代工厂。代工涨价叠加存储涨价，验证AI芯片供应链'量价齐升'，半导体景气延续。",
      impact: {
        direction: "利好",
        companies: "三星、台积电、英伟达、AMD、苹果",
        industry: "半导体代工",
        logic: "先进制程供不应求，代工涨价强化半导体景气"
      }
    }
  ],

  /* ============ 六、当日最值得关注的 3 个交易逻辑 ============ */
  logics: [
    { title: "AI 资本开支的「债务化融资」成为新主线",
      text: "博通洽谈超600亿美元（总额或达千亿）AI芯片债务融资，联合黑石、阿波罗以SPV结构为Anthropic等提供算力；叠加英伟达本周5000亿美元基建融资平台，AI基建正从科技公司资产负债表大规模转向债务市场，成为独立资产类别。这既强化了定制ASIC与GPU的长期需求，也引发对'卖方担保敞口'的担忧——博通CDS已创历史新高。" },
    { title: "存储/代工「量价齐升」，龙头现金流兑现为股东回报",
      text: "三星周五董事会讨论逾720亿美元股东回报，SK海力士40万亿韩元回购落地，三星代工价同步上调15%，TSMC先进制程满载外溢。存储超级周期带来的创纪录现金流正在通过回购、特别股息兑现，同时代工涨价验证半导体供应链供不应求，共同支撑美光、闪迪等高估值存储股高位运行。" },
    { title: "长端利率仍是成长股估值「总开关」",
      text: "财政部扩大回购不改赤字路径，30年期美债收益率周内触及2007年以来新高，长端抛压未除。下周英伟达财报、7月PCE、美联储主席沃什杰克逊霍尔讲话三大事件将决定利率与AI两条主线的走向，高久期科技成长股的贴现率压力能否缓解，取决于长端能否有效回落。" }
  ],

  /* ============ 七、未来 1—3 个交易日关注事项（具体事件） ============ */
  watchlist: [
    { date: "08月24日", event: "美国财长贝森特新闻发布会，披露对伊朗「经济战」制裁细节", impact: "地缘风险与油价，影响通胀预期与市场风险偏好" },
    { date: "08月26日", event: "NVIDIA 2027财年Q2财报（盘后）", impact: "AI 芯片需求与数据中心资本开支的风向标，将定调整个 AI 硬件板块" },
    { date: "08月27—29日", event: "Jackson Hole 全球央行年会（美联储主席沃什 8月28日上午10点发表主旨演讲）", impact: "关注对通胀、长债利率与货币政策路径的表态" },
    { date: "08月28日", event: "美国7月PCE物价指数（美联储首选通胀指标，预计）", impact: "决定市场对美联储加息/降息路径的定价" },
    { date: "08月底", event: "三星电子董事会批准股东回报计划细节", impact: "存储板块股东回报与情绪延续" },
    { date: "09月02日", event: "Broadcom 财报（盘后，预计）", impact: "AI 定制芯片(ASIC)与数据中心网络需求信号" }
  ],

  /* ============ 八、页脚免责声明 ============ */
  disclaimer:
    "本报告基于公开市场信息整理，仅供华泰期货内部研究参考，不构成任何投资建议。股价数据以交易所官方为准；新闻以原始来源（SEC / 白宫 / BIS / Treasury / Reuters / Bloomberg 等）为准。投资有风险，决策需谨慎。"
};
