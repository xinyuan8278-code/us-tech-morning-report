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
    reportDate: "2026年09月08日",   // 报告发布日期（周二，劳动节后首个交易日盘前）
    tradeDate: "2026年09月04日",    // 对应美股交易日（前一交易日，劳动节周末前最后交易日）
    author: "华泰期货 · 研究",
    tag: "每日市场跟踪"
  },

  /* ============ 二、市场概览 ============ */
  overview: {
    /* 简短概括：指数变化 + 个股变化 + 重大事件 */
    text: "9月8日劳动节后首个交易日盘前，道指期货跌超300点、纳指期货相对抗跌，中东油轮袭击升级推升油价（布油逼近98美元创六周新高）。前一交易日（9/4）科技明显分化：纳指综指-0.29%、费半+3.52%，存储与AI硬件逆势大涨（闪迪+11.90%、美光+6.10%、AMD+4.69%），软件与消费科技承压（苹果-2.51%、微软-2.04%）。本周聚焦9/10 PPI、9/11 CPI与9/15-16 FOMC，加息概率约60%，9/9苹果发布会。",
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
    { name: "NVIDIA",    code: "NVDA",  change: "-0.00%", driver: "AI算力主线获资金回流，逆势涨0.84%、股价逼近历史高位" },
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
      title: "劳动节后首个交易日盘前：道指期货跌超300点，中东油轮袭击升级、布油逼近100美元，高盛警告油价或回120美元",
      originalTitle: "Dow futures fall over 300 points after extended weekend as oil prices rise on more attacks",
      source: "CNBC TV18（英文财经媒体）",
      time: "2026年09月08日",
      type: "财经媒体",
      url: "https://www.cnbctv18.com/market/dow-futures-snp-500-nasdaq-fall-crude-prices-rise-gold-china-inflation-fed-trump-iran-aramco-19986065.htm",
      link: "https://www.cnbctv18.com/market/dow-futures-snp-500-nasdaq-fall-crude-prices-rise-gold-china-inflation-fed-trump-iran-aramco-19986065.htm",
      summary: "美股在劳动节长周末后恢复交易，盘前期指走弱：道指期货跌超300点、标普与纳指期货各跌约20点。驱动是周末中东局势升级——美伊互相对油轮发动袭击（规模为冲突爆发以来最大），金融时报与彭博报道沙特阿美吉赞（Jazan）设施再遭袭（暂无独立确认）。布伦特原油逼近100美元（年内第三次）、WTI同步走高。高盛周一警告，若霍尔木兹海峡航运袭击扩大，油价或回120美元。10年期美债收益率维持约4.8%。周四PPI、周五CPI是Fed议息前最后两项通胀数据。",
      impact: {
        direction: "利空",
        companies: "全市场、高估值成长股",
        industry: "能源、通胀、利率",
        logic: "油价上涨经通胀渠道推升加息预期、并挤压企业利润与消费，压制风险资产；但纳指期货相对抗跌，科技/AI主线仍具韧性"
      }
    },
    {
      title: "本周聚焦8月CPI/PPI：美联储9月加息与否\"一锤定音\"，FOMC 9/15-16议息，10年期美债收益率逼近5%警戒线",
      originalTitle: "Wall St Week Ahead-Investors to pore over inflation data for signals on rate trajectory",
      source: "Reuters（路透社，经 Fidelity 转载原文）",
      time: "2026年09月06日",
      type: "财经媒体",
      url: "https://www.fidelity.com/news/article/us-markets/202609060900RTRSNEWSCOMBINED_L6N44W188_1",
      link: "https://www.fidelity.com/news/article/us-markets/202609060900RTRSNEWSCOMBINED_L6N44W188_1",
      summary: "投资者本周将聚焦通胀数据，因其可能决定美联储是否在9月15-16日加息。周五（9/11）CPI最受关注，周四（9/10）PPI先行；路透调查经济学家预计8月CPI环比+0.4%、核心+0.2%。截至上周五，联邦基金期货暗示9月加息概率约57%——周四沃勒鸽派讲话后一度下降，周五强劲非农后回升。10年期美债收益率升至4.78%、逼近5%这一对股市不利的水平。财政部下周开始扩大长债回购；Oracle（9/10盘后）财报将检验AI交易景气。",
      impact: {
        direction: "中性",
        companies: "全市场、高估值成长股",
        industry: "货币政策、利率",
        logic: "CPI是9月加息与否的决定性变量；若超预期，短端利率上行将进一步压制长久期成长股估值，反之则缓解"
      }
    },
    {
      title: "美国财政部本周启动扩大版长债回购：单次规模翻倍至约40亿，9/9拍卖10年期国债390亿，供给洪峰下收益率承压",
      originalTitle: "Take Five: Good evening, Mr Bond",
      source: "Reuters（路透社，经 Yahoo Finance 转载原文）",
      time: "2026年09月07日",
      type: "财经媒体",
      url: "https://finance.yahoo.com/markets/articles/five-good-evening-mr-bond-075656146.html",
      link: "https://finance.yahoo.com/markets/articles/five-good-evening-mr-bond-075656146.html",
      summary: "全球债券抛售将各国借贷成本推至多年高位：美国10年期收益率逼近重要关口、多数30年期收益率处于十余年高位，交易员担忧多年大规模主权发债愈发难以融资。为压低收益率，美国财政部上月宣布将长债回购规模\"至少翻倍\"，首次操作定于周三（9/9）执行。韩媒补充：财政部9/9拍卖10年期国债390亿美元、9/10拍卖30年期220亿，长债回购单次规模由20亿提高至40亿。此外9月投资级公司债发行或创纪录（BofA预计1900亿、Bloomberg调查2150亿），超大规模云厂商抢发债为AI投资融资，供给压力或反向推高收益率。",
      impact: {
        direction: "中性",
        companies: "全市场、大型云厂商（hyperscalers）",
        industry: "财政政策、利率、流动性",
        logic: "长债回购利多长端、缓和收益率上行；但公司债发行洪峰与国债拍卖供给叠加，收益率走向成为科技股估值的另一条关键线索"
      }
    },
    {
      title: "美国8月非农就业新增16.2万远超预期，失业率维持4.1%，6/7月数据同步上修",
      originalTitle: "The Employment Situation — August 2026",
      source: "美国劳工统计局 BLS（bls.gov 官方发布）",
      time: "2026年09月04日",
      type: "官方",
      url: "https://www.bls.gov/news.release/empsit.nr0.htm",
      link: "https://www.bls.gov/news.release/empsit.nr0.htm",
      summary: "8月非农新增16.2万个岗位，远超市场预期的约5.3万，为3月以来最高；失业率持平于4.1%。6月、7月数据合计上修5.5万（7月由-2.3万修正为+2.1万）。就业增长以餐饮（+5.9万）与地方政府教育（+4.2万）为主，信息业减少2.3万。平均时薪同比+3.1%、环比+0.3%，为2021年6月来最低，仍低于整体通胀。数据印证劳动力市场韧性，为美联储9月加息提供支撑，市场加息押注升至约60%。",
      impact: {
        direction: "中性",
        companies: "全市场、高估值成长股",
        industry: "就业、货币政策",
        logic: "就业超预期强化9月加息预期，短端利率上行，压制长久期成长股估值；但就业韧性同时支撑\"软着陆\"叙事"
      }
    },
    {
      title: "苹果定档9月9日\"Surprise and Shine\"发布会：iPhone 18 Pro/Pro Max与首款折叠iPhone（iPhone Ultra）同台亮相",
      originalTitle: "Apple 'Surprise and shine' event: How to watch the iPhone 18 Pro launch and what to expect",
      source: "PhoneArena（行业媒体，引苹果官方）",
      time: "2026年09月05日",
      type: "行业媒体",
      url: "https://www.phonearena.com/news/apple-surprise-and-shine-how-to-watch-the-iphone-18-pro-launch-what-to-expect_id183088",
      link: "https://www.phonearena.com/news/apple-surprise-and-shine-how-to-watch-the-iphone-18-pro-launch-what-to-expect_id183088",
      summary: "苹果确认于9月9日（北京时间9月10日凌晨1点）举行\"Surprise and Shine\"秋季发布会，由新任CEO约翰·特努斯首次主持。市场普遍预期发布iPhone 18 Pro与Pro Max（A20 Pro 2nm芯片、可变光圈主摄、C2自研基带），以及苹果首款折叠屏手机（市场暂称iPhone Ultra，5.5英寸外屏+7.8英寸内屏、液态金属铰链、A20芯片、12GB内存、侧边Touch ID），并同步更新Apple Watch Series 12、AirPods 5。折叠机美版定价传闻约1999-2299美元。据供应链消息，折叠iPhone初期日产量仅数百台、品控严苛拖慢量产，首发备货或极度紧张。苹果9/4跌2.51%，发布会检验新品创新能否对冲高利率下的估值压力。",
      impact: {
        direction: "中性",
        companies: "苹果、三星显示、折叠屏供应链",
        industry: "消费电子、折叠屏、AI终端",
        logic: "折叠屏iPhone是苹果多年最大硬件创新，发布会或成消费电子板块关键催化剂；但首发供应紧张与高价或限制短期兑现"
      }
    },
    {
      title: "存储芯片集体大涨：戴尔\"DRAM、DRAM、DRAM\"印证AI存储短缺，Susquehanna预计DRAM合约价季涨超50%",
      originalTitle: "Why Are Memory Chip Stocks Micron, SanDisk, and SK Hynix Rising Today? Here's What's Driving the Rebound",
      source: "TipRanks（财经博客）",
      time: "2026年09月04日",
      type: "行业媒体",
      url: "https://blog.tipranks.com/why-are-memory-chip-stocks-micron-sandisk-and-sk-hynix-rising-today-heres-whats-driving-the-rebound",
      link: "https://blog.tipranks.com/why-are-memory-chip-stocks-micron-sandisk-and-sk-hynix-rising-today-heres-whats-driving-the-rebound",
      summary: "存储板块9/4普涨：美光、SK海力士、闪迪等集体上扬。戴尔最新财报显示AI服务器积压订单达950亿美元，COO Jeffrey Clarke称最大瓶颈仍是\"DRAM、DRAM、DRAM，其次NAND、NAND、NAND\"。Susquehanna预计本季度DRAM合约价环比涨超50%、NAND涨约60%；Q2 DRAM营收+57%、NAND营收+70%。",
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
      title: "英伟达将Rubin Ultra HBM从12-Hi降至8-Hi（384→192GB）：存储供给紧张下的架构取舍",
      originalTitle: "NVIDIA Rubin Ultra HBM reduced to 8-Hi as bandwidth cost becomes key constraint",
      source: "SemiAnalysis（行业研究机构，经 KuCoin 转载，引华尔街日报）",
      time: "2026年09月06日",
      type: "行业媒体",
      url: "https://www.kucoin.com/news/flash/nvidia-rubin-ultra-hbm-cut-to-8-hi-as-bandwidth-cost-becomes-key-constraint",
      link: "https://www.kucoin.com/news/flash/nvidia-rubin-ultra-hbm-cut-to-8-hi-as-bandwidth-cost-becomes-key-constraint",
      summary: "SemiAnalysis指出，英伟达将Rubin Ultra的HBM堆叠高度从12-Hi降至8-Hi，显存由384GB降至192GB。核心动因并非降低容量，而是AI推理的瓶颈在于\"单位带宽成本\"而非\"单位容量成本\"。降配使DRAM晶圆用量减少约1/3、缓解紧张且昂贵的HBM供给，同时维持甚至提升总带宽。内存占机架总资本成本的比例由约40%降至28%，节省部分被转向纵向扩展网络（4%→12%）。SemiAnalysis强调这是\"供给短缺的症状，而非需求减弱的信号\"。",
      impact: {
        direction: "中性",
        companies: "英伟达、美光、SK海力士、三星、存储产业链",
        industry: "HBM、AI存储、光互连",
        logic: "英伟达主动降配HBM反映存储供给紧张与成本高企，短期或压制HBM容量需求预期；但本质是供给短缺而非需求转弱，资本转向光互连，光模块/CPO产业链受益"
      }
    }
  ],

  /* ============ 六、当日最值得关注的 3 个交易逻辑 ============ */
  logics: [
    { title: "利率与通胀重新主导：CPI一锤定音，10年期美债收益率逼近5%警戒线",
      text: "劳动节后市场重回\"数据主导\"：9月加息概率约60%，10年期美债收益率4.78%逼近5%这一对股市不利的水平，8月非农16.2万远超预期推高短端利率。9/10 PPI、9/11 CPI是9/15-16 FOMC前最后两项通胀数据，CPI超预期将强化加息、进一步压制高估值成长股（苹果、微软等长久期资产），反之则缓解。叠加中东油价上涨经通胀渠道放大加息预期，利率成为本周压倒一切的核心变量。" },
    { title: "财政与流动性是第二战场：长债回购扩容 vs 公司债发行洪峰",
      text: "财政部本周启动扩大版长债回购（单次翻倍至约40亿、9/9拍卖10年期390亿），意在压低长端收益率、缓解30年期收益率升至十余年高位的压力；但9月投资级公司债发行或创纪录（BofA预计1900亿、Bloomberg调查2150亿），超大规模云厂商抢发债为AI资本开支融资，供给洪峰可能反向推高收益率。财政（回购）与货币（加息）两股力量博弈，收益率曲线走向直接决定科技股估值锚。" },
    { title: "AI硬件与存储超级周期延续，但需警惕油价→通胀→加息的反噬",
      text: "前一交易日存储与AI硬件逆势大涨（闪迪+11.90%、美光+6.10%、AMD+4.69%、费半+3.52%），纳指期货节后盘前相对抗跌，资金仍聚焦\"AI基础设施\"这条相对独立于利率的产业主线。英伟达降HBM规格印证存储供给紧张、资本转向光互连，美光HBM产能年底翻倍。但需警惕：若油价持续上涨推升通胀、迫使美联储更鹰，高估值硬件与存储股同样面临估值挤压，产业景气的确定性需与利率成本的上行相权衡。" }
  ],

  /* ============ 七、未来 1—3 个交易日关注事项（具体事件） ============ */
  watchlist: [
    { date: "09月09日", event: "苹果'Surprise and Shine'秋季发布会（iPhone 18 Pro/Pro Max + 首款折叠iPhone Ultra）+ 财政部扩大版长债回购首次操作（10年期国债拍卖390亿）", impact: "苹果折叠屏与AI创新能否对冲估值压力；长债回购落地影响收益率曲线" },
    { date: "09月10日", event: "美国8月PPI + Oracle、Adobe 盘后财报 + 欧洲央行（ECB）议息", impact: "PPI为9月通胀先行指标；Oracle（6380亿美元积压订单）检验AI/企业软件景气；ECB预计加息25bp" },
    { date: "09月11日", event: "美国8月CPI数据（9月FOMC前最后通胀数据）", impact: "静默期内加息与否的决定性依据，当前加息押注约60%" },
    { date: "09月15-16日", event: "美联储FOMC议息会议", impact: "市场定价9/16加息25bp概率约60%，影响高估值成长股估值锚" },
    { date: "09月30日", event: "美光科技（Micron）Q4财报", impact: "存储涨价周期与HBM供需的关键验证，影响存储板块（美光、闪迪）定价" }
  ],

  /* ============ 八、页脚免责声明 ============ */
  disclaimer:
    "本报告基于公开市场信息整理，仅供华泰期货内部研究参考，不构成任何投资建议。股价数据以交易所官方为准；新闻以原始来源（SEC / 白宫 / BIS / Treasury / BEA / Reuters / Bloomberg 等）为准。投资有风险，决策需谨慎。"
};
