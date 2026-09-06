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
    reportDate: "2026年09月06日",   // 报告发布日期
    tradeDate: "2026年09月04日",    // 对应美股交易日（前一交易日，上周五）
    author: "华泰期货 · 研究",
    tag: "每日市场跟踪"
  },

  /* ============ 二、市场概览 ============ */
  overview: {
    /* 简短概括：指数变化 + 个股变化 + 重大事件 */
    text: "9月4日美股三大指数小幅收跌（纳指-0.29%、标普-0.38%、道指-0.51%），费城半导体指数逆势大涨3.37%。8月非农新增16.2万远超预期，9月加息概率升至约58%，大型科技股普跌（苹果-2.51%、微软-2.04%）；存储与光通信爆发，闪迪+11.90%、美光+6.10%、AMD+4.69%。下周聚焦9/9苹果发布会、9/10-11 CPI与9/15-16 FOMC。",
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
      name: "SanDisk",
      code: "SNDK",
      direction: "超涨",
      change: "-0.00%",
      fiveDay: "8/28收盘1484.98 → 9/4收盘1740.00，近5个交易日累计约+17.2%，持续刷新历史新高",
      newHighLow: "创历史新高，收在全天最高价1740美元",
      volume: "明显放大，9/4成交1655.7万股，约为前一交易日（868.9万股）的1.9倍",
      reason: "NAND超级周期延续：AI数据中心存储需求爆发 + NAND供给紧张，Susquehanna预计本季DRAM合约价QoQ+50%、NAND+60%；无单一新增公告，属存储涨价周期与盈利重估共振",
      impact: "市值盘中突破2500亿美元，估值已计入极高盈利预期（毛利率超80%）；若NAND价格见顶回落，短期波动将显著加剧"
    },
    {
      name: "Micron",
      code: "MU",
      direction: "超涨",
      change: "-0.00%",
      fiveDay: "8/28收盘932.86 → 9/4收盘1016.59，近5个交易日累计约+9.0%，历史首次收盘站上1000美元",
      newHighLow: "创阶段新高，历史首次收盘突破1000美元整数关口",
      volume: "明显放大，9/4成交3525万股，约为前一交易日（2418万股）的1.46倍",
      reason: "计划年底HBM月产能翻倍至约10万片晶圆、12层HBM4适配英伟达Vera Rubin占比提升至50%，叠加存储涨价周期与AI服务器存储需求",
      impact: "HBM产能扩张与AI存储需求共振，总市值突破1.15万亿美元后估值已高，需关注9/30财报对涨价周期与HBM放量的验证"
    }
  ],

  /* ============ 四、重点公司行情表 ============ */
  /* 超涨/超跌个股放最上方；无新闻的公司驱动因素简要说明即可 */
  stocks: [
    { name: "NVIDIA",    code: "NVDA",  change: "-0.00%", driver: "AI算力主线获资金回流，逆势涨0.84%、股价逼近历史高位；周涨5.9%" },
    { name: "Microsoft", code: "MSFT",  change: "-0.00%", driver: "强非农推高加息预期、美债收益率上行，大型软件股承压，跌2.04%" },
    { name: "Apple",     code: "AAPL",  change: "-0.00%", driver: "大型科技股集体回调+折叠iPhone量产爬坡慢传闻，跌2.51%，为当日跌幅居前权重股" },
    { name: "Amazon",    code: "AMZN",  change: "-0.00%", driver: "大盘走弱、消费科技股承压，微跌0.15%" },
    { name: "Alphabet",  code: "GOOGL", change: "-0.00%", driver: "软件/平台股随大盘回落，跌1.11%" },
    { name: "Meta",      code: "META",  change: "-0.00%", driver: "AI/广告主线相对抗跌，逆势涨1.00%" },
    { name: "Broadcom",  code: "AVGO",  change: "-0.00%", driver: "半导体板块整体走强，Q4指引略低于预期的利空被消化，微涨0.21%" },
    { name: "AMD",       code: "AMD",   change: "-0.00%", driver: "AI算力硬件领涨、半导体设备与材料普涨带动，涨4.69%" },
    { name: "Micron",    code: "MU",    change: "-0.00%", driver: "HBM月产能年底翻倍至10万片晶圆+存储涨价周期，历史首破1000美元，涨6.10%" },
    { name: "Sandisk",   code: "SNDK",  change: "-0.00%", driver: "NAND超级周期延续、AI数据中心存储需求+供给紧张，收在全天最高价，涨11.90%" }
  ],

  /* ============ 五、重要科技与政策新闻（一手来源） ============ */
  news: [
    {
      title: "美国8月非农就业新增16.2万远超预期，失业率维持4.1%，6/7月数据同步上修",
      originalTitle: "The Employment Situation — August 2026",
      source: "美国劳工统计局 BLS（bls.gov 官方发布）",
      time: "2026年09月04日",
      type: "官方",
      url: "https://www.bls.gov/news.release/empsit.nr0.htm",
      link: "https://www.bls.gov/news.release/empsit.nr0.htm",
      summary: "8月非农新增16.2万个岗位，远超市场预期的约5.3万，为3月以来最高；失业率持平于4.1%。6月、7月数据合计上修5.5万（7月由-2.3万修正为+2.1万）。就业增长以餐饮（+5.9万）与地方政府教育（+4.2万）为主，信息业减少2.3万。平均时薪同比+3.1%、环比+0.3%，为2021年6月来最低，仍低于整体通胀。数据印证劳动力市场韧性，为美联储9月加息提供支撑。",
      impact: {
        direction: "中性",
        companies: "全市场、高估值成长股",
        industry: "就业、货币政策",
        logic: "就业超预期强化9月加息预期（概率升至约58%），短端利率上行，压制长久期成长股估值；但就业韧性同时支撑'软着陆'叙事"
      }
    },
    {
      title: "强非农推升美债收益率与9月加息押注至约58%，2年期收益率创2025年1月来新高",
      originalTitle: "Strong August jobs report sends yields higher",
      source: "路透社（Reuters，经 MarketScreener 转载）",
      time: "2026年09月04日",
      type: "财经媒体",
      url: "https://uk.marketscreener.com/news/instant-view-strong-august-jobs-report-sends-yields-higher-ce785bdad181f122",
      link: "https://uk.marketscreener.com/news/instant-view-strong-august-jobs-report-sends-yields-higher-ce785bdad181f122",
      summary: "8月非农公布后，短期利率期货隐含9月加息概率由约49.4%升至约58%。2年期美债收益率升5bp、创2025年1月来新高，10年期升1bp至4.78%附近；美元指数升至99.12，黄金跌1.2%至4418美元，WTI原油周涨近10%至91.48美元。策略师普遍认为非农并未改变基本面，最终仍取决于下周CPI；工资同比3.1%为2021年6月来最低，为鸽派留有余地。",
      impact: {
        direction: "利空",
        companies: "全市场、大型科技",
        industry: "利率、美元、债券",
        logic: "强就业推高加息定价、短端利率上行，直接压制高久期成长股；市场焦点转向下周CPI，通胀成为9月决策关键变量"
      }
    },
    {
      title: "存储芯片集体大涨：戴尔'DRAM、DRAM、DRAM'印证AI存储短缺，Susquehanna预计DRAM合约价季涨超50%",
      originalTitle: "Why Are Memory Chip Stocks Micron, SanDisk, and SK Hynix Rising Today? Here's What's Driving the Rebound",
      source: "TipRanks（财经博客）",
      time: "2026年09月04日",
      type: "行业媒体",
      url: "https://blog.tipranks.com/why-are-memory-chip-stocks-micron-sandisk-and-sk-hynix-rising-today-heres-whats-driving-the-rebound",
      link: "https://blog.tipranks.com/why-are-memory-chip-stocks-micron-sandisk-and-sk-hynix-rising-today-heres-whats-driving-the-rebound",
      summary: "存储板块周五普涨：美光、SK海力士、闪迪等集体上扬。戴尔最新财报显示AI服务器积压订单达950亿美元，COO Jeffrey Clarke称最大瓶颈仍是'DRAM、DRAM、DRAM，其次NAND、NAND、NAND'。Susquehanna预计本季度DRAM合约价环比涨超50%、NAND涨约60%；Q2 DRAM营收+57%、NAND营收+70%。",
      impact: {
        direction: "利好",
        companies: "美光、闪迪、SK海力士、西部数据",
        industry: "存储芯片、AI服务器",
        logic: "AI服务器对DRAM/NAND的需求爆发叠加供给紧张，存储涨价超级周期延续，直接驱动美光、闪迪等股价逆势大涨"
      }
    },
    {
      title: "美光计划年底HBM月产能翻倍至约10万片晶圆，12层HBM4适配英伟达Vera Rubin占比将升至50%",
      originalTitle: "Micron Plans to Double Monthly HBM Capacity to 100,000 Wafers to Catch Up With Samsung and SK Hynix",
      source: "TradingKey（转引韩联社 Yonhap）",
      time: "2026年09月04日",
      type: "行业媒体",
      url: "https://www.tradingkey.com/analysis/stocks/us-stocks/262151809-micron-mu-hbm-capacity-doubling-samsung-sk-hynix-hbm4-ai-memory-vera-rubin-tradingkey",
      link: "https://www.tradingkey.com/analysis/stocks/us-stocks/262151809-micron-mu-hbm-capacity-doubling-samsung-sk-hynix-hbm4-ai-memory-vera-rubin-tradingkey",
      summary: "据韩联社引述业内消息，美光计划到2026年底将HBM月产能提升至约10万片晶圆，较去年（约4-5万片）接近翻倍，缩小与三星、SK海力士（各约15-20万片）的差距。同时加速12层HBM4量产爬坡，适配英伟达下一代Vera Rubin平台，年底HBM4占比将由年初的20-30%提升至50%。HBM4量产爬坡速度约为HBM3E的两倍，累计出货收入已超10亿美元。",
      impact: {
        direction: "利好",
        companies: "美光、英伟达、存储产业链",
        industry: "HBM、AI存储",
        logic: "HBM产能扩张+产品结构向HBM4升级，强化美光在AI存储超级周期的受益逻辑，当日美光涨6.10%、历史首破1000美元"
      }
    },
    {
      title: "闪迪暴涨11.90%收于全天最高价：NAND供给紧张叠加AI数据中心存储需求，毛利率突破80%",
      originalTitle: "Sandisk Stock Soars Again as AI Storage Demand and Tight NAND Supply Fuel the Rally",
      source: "StockMinded（行业博客）",
      time: "2026年09月04日",
      type: "行业媒体",
      url: "https://stockminded.com/2026/09/04/sandisk-stock-ai-memory-investing",
      link: "https://stockminded.com/2026/09/04/sandisk-stock-ai-memory-investing",
      summary: "闪迪周五涨逾11%收于全天最高价1740美元，成为标普500与纳指100最强个股之一，市值盘中突破2500亿美元。驱动并非单一公告，而是NAND供给紧张+AI数据中心存储需求+市场对NAND涨价周期将持续更久的信心。上季营收约89.7亿美元环比+51%（约2/3来自涨价）、毛利率超80%、数据中心营收同比+437%；全年营收202.5亿美元、同比+175%。",
      impact: {
        direction: "利好",
        companies: "闪迪、存储产业链",
        industry: "NAND闪存、AI存储",
        logic: "NAND超级周期结构性重估存储股估值，闪迪以80%+毛利率展现类软件盈利弹性；但股价已抛物线式上涨，对NAND价格见顶高度敏感"
      }
    },
    {
      title: "苹果定档9月9日'Surprise and Shine'发布会：iPhone 18 Pro/Pro Max与首款折叠iPhone（iPhone Ultra）同台亮相",
      originalTitle: "Apple 'Surprise and shine' event: How to watch the iPhone 18 Pro launch and what to expect",
      source: "PhoneArena（行业媒体，引苹果官方）",
      time: "2026年09月05日",
      type: "行业媒体",
      url: "https://www.phonearena.com/news/apple-surprise-and-shine-how-to-watch-the-iphone-18-pro-launch-what-to-expect_id183088",
      link: "https://www.phonearena.com/news/apple-surprise-and-shine-how-to-watch-the-iphone-18-pro-launch-what-to-expect_id183088",
      summary: "苹果已确认将于9月9日（北京时间9月10日凌晨1点）举行'Surprise and Shine'秋季发布会，由新任CEO约翰·特努斯首次主持。市场普遍预期发布iPhone 18 Pro与Pro Max，以及苹果首款折叠屏手机（市场暂称iPhone Ultra，5.5英寸外屏+7.8英寸内屏、液态金属铰链、A20芯片、12GB内存），并同步更新Apple Watch Series 12、AirPods 5。基础款iPhone 18预计推迟至2027年春季。苹果周五跌2.51%，市场等待发布会检验新品创新能否对冲高利率环境下的估值压力。",
      impact: {
        direction: "中性",
        companies: "苹果、三星显示、折叠屏供应链",
        industry: "消费电子、折叠屏、AI终端",
        logic: "折叠屏iPhone是苹果多年最大硬件创新，发布会或成下周消费电子板块关键催化剂；但首发供应紧张与高价或限制短期兑现，苹果周五已提前回调"
      }
    },
    {
      title: "苹果折叠iPhone初期日产量仅数百台：严苛品控拖慢量产爬坡，首发或一机难求",
      originalTitle: "Apple is building its foldable a few hundred a day",
      source: "iDevice（转引日经亚洲 Nikkei Asia 供应链报道）",
      time: "2026年09月05日",
      type: "行业媒体",
      url: "https://idevice.com/apple-is-building-its-foldable-a-few-hundred-a-day",
      link: "https://idevice.com/apple-is-building-its-foldable-a-few-hundred-a-day",
      summary: "据日经亚洲援引供应链消息，苹果首款折叠屏iPhone目前初期日产量仅'数百台'，远低于正常iPhone量产所需的每日数万台。瓶颈并非零部件短缺，而是苹果对折叠屏平整度与液态金属铰链耐久性执行了极为严苛的品控标准，8月额外增加一轮全流程试产，导致正式量产推迟数周。彭博记者Mark Gurman则认为不存在大规模延迟，预计与iPhone 18 Pro同期或相近时间发售。首发备货或极度紧张。",
      impact: {
        direction: "利空（短期）",
        companies: "苹果、三星显示、折叠屏供应链",
        industry: "折叠屏、消费电子",
        logic: "折叠屏量产爬坡慢意味着苹果新品短期出货承压、或拖累9月销量预期；但严苛品控也体现苹果对品质把控，中长期折叠屏渗透逻辑未变"
      }
    }
  ],

  /* ============ 六、当日最值得关注的 3 个交易逻辑 ============ */
  logics: [
    { title: "强就业推升加息预期，利率与流动性重新成为核心压制变量",
      text: "8月非农新增16.2万远超预期、6/7月数据上修，9月加息概率由约49%升至58%，2年期美债收益率创2025年1月来新高、10年期升至4.78%附近，美元走强、油价周涨近10%。大型软件与消费科技股承压，苹果-2.51%、微软-2.04%。这一逻辑的持续性取决于9月10-11日CPI能否确认通胀降温，以及9月15-16日FOMC的最终决议。" },
    { title: "AI硬件与存储成为'加息环境避风港'：资金从软件向算力/存储硬件轮动",
      text: "三大指数集体收跌之际，费城半导体指数逆势大涨3.37%，闪迪+11.90%、美光+6.10%、AMD+4.69%、迈威尔涨超7%。市场当日同时交易两笔逻辑——大盘交易'加息'、AI硬件交易'产业周期'（数据中心资本开支延续+存储涨价+光通信景气）。软件ETF周跌4.5%，硬件强、软件弱的分化显著，资金持续向算力与存储基础设施集中。" },
    { title: "存储超级周期进入'供给响应'阶段：NAND/DRAM涨价驱动盈利与估值双重重估",
      text: "戴尔'DRAM、DRAM、DRAM'印证AI服务器存储短缺，Susquehanna预计本季DRAM合约价QoQ+50%、NAND+60%；美光HBM月产能年底翻倍至10万片、闪迪毛利率突破80%。存储股正从'强周期股'向'AI基础设施核心资产'重估，美光首破1000美元、闪迪市值破2500亿美元。需警惕涨价见顶、供给释放与估值透支的三重风险。" }
  ],

  /* ============ 七、未来 1—3 个交易日关注事项（具体事件） ============ */
  watchlist: [
    { date: "09月07日", event: "美国劳动节（Labor Day），美股休市", impact: "长假前资金趋于谨慎，短期波动或收敛" },
    { date: "09月09日", event: "苹果'Surprise and Shine'秋季发布会，预计发布iPhone 18 Pro/Pro Max及首款折叠iPhone", impact: "检验苹果AI与折叠屏创新能否对冲9/4股价-2.51%的回调压力" },
    { date: "09月10-11日", event: "美国8月CPI与PPI通胀数据", impact: "9月FOMC决策的核心依据，通胀走向直接决定加息与否，当前加息押注约58%" },
    { date: "09月15-16日", event: "美联储FOMC议息会议", impact: "市场定价9月加息25bp概率约58%，影响高估值成长股估值锚" },
    { date: "09月30日", event: "美光科技（Micron）Q4财报", impact: "存储涨价周期与HBM供需的关键验证，影响存储板块（美光、闪迪）定价" }
  ],

  /* ============ 八、页脚免责声明 ============ */
  disclaimer:
    "本报告基于公开市场信息整理，仅供华泰期货内部研究参考，不构成任何投资建议。股价数据以交易所官方为准；新闻以原始来源（SEC / 白宫 / BIS / Treasury / BEA / Reuters / Bloomberg 等）为准。投资有风险，决策需谨慎。"
};
