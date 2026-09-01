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
    reportDate: "2026年09月01日",   // 报告发布日期
    tradeDate: "2026年08月31日",    // 对应美股交易日（前一交易日）
    author: "华泰期货 · 研究",
    tag: "每日市场跟踪"
  },

  /* ============ 二、市场概览 ============ */
  overview: {
    /* 简短概括：指数变化 + 个股变化 + 重大事件 */
    text: "8月31日美股科技股分化：美伊再度交火推升油价（布油站上90美元）与长端美债收益率，三大指数小跌——道指-0.70%、纳指-0.12%、标普-0.33%，费半逆势+0.48%。资金从云巨头轮动至存储/半导体：闪迪+5.5%（MSCI纳入生效被动买盘）、美光+2.77%、英伟达+1.48%（35亿美元入股联发科）；亚马逊-2.5%（FTC联合22州起诉）领跌大型科技。",
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
      name: "Sandisk",
      code: "SNDK",
      direction: "超涨",
      change: "-0.00%",
      fiveDay: "尾盘急拉创近月单日最大涨幅：8/24 1493.12 → 8/25 -0.83%（1480.77）→ 8/26 +1.26%（1499.37）→ 8/27 -0.96%（1484.95）→ 8/28 持平（1484.98）→ 8/31 +5.50%（1566.70），日内由微跌状态在尾盘45分钟直线拉升收涨5.5%",
      newHighLow: "未创阶段新高，收1566.70美元仍较6月22日历史高点2354.39美元低约33%，属前期超跌后的强势反弹而非创新高",
      volume: "成交2338万股，约为前一交易日（814万股）的2.9倍，换手率15.97%，尾盘45分钟放量急拉、资金面特征明显",
      reason: "MSCI世界指数8月季度审议将闪迪列为最大新纳入成分股、8/31收盘生效，被动指数资金尾盘集中扫货，叠加AI存储超级周期下NAND/企业级SSD涨价预期延续、企业级AI闪存高毛利转型与HBF新标准等多重利好共振",
      impact: "尾盘指数调仓属交易性买盘，短期或部分回吐；中期方向取决于AI存储涨价周期与长协锁利逻辑能否兑现"
    }
  ],

  /* ============ 四、重点公司行情表 ============ */
  /* 超涨/超跌个股放最上方；无新闻的公司驱动因素简要说明即可 */
  stocks: [
    { name: "Sandisk",   code: "SNDK",  change: "-0.00%", driver: "MSCI世界指数纳入生效被动买盘+AI存储超级周期NAND涨价，尾盘45分钟直线拉升，放量收涨5.5%领涨全市场" },
    { name: "NVIDIA",    code: "NVDA",  change: "-0.00%", driver: "投资联发科35亿美元深化NVLink Fusion合作、绑定定制XPU生态，AI算力主线回暖，涨1.48%" },
    { name: "Microsoft", code: "MSFT",  change: "-0.00%", driver: "大型科技股获利回吐、油价与长端美债收益率上行压制估值，跌1.22%" },
    { name: "Apple",     code: "AAPL",  change: "-0.00%", driver: "消费电子随大盘与通胀担忧走弱，跌0.89%" },
    { name: "Amazon",    code: "AMZN",  change: "-0.00%", driver: "FTC联合22州起诉亚马逊操纵广告竞价、涉数百亿美元，跌2.5%创一个多月最大跌幅、领跌大型科技" },
    { name: "Alphabet",  code: "GOOGL", change: "-0.00%", driver: "资金从云巨头轮动至存储/能源板块，跌2.09%" },
    { name: "Meta",      code: "META",  change: "-0.00%", driver: "大型科技股获利了结，跌0.98%" },
    { name: "Broadcom",  code: "AVGO",  change: "-0.00%", driver: "定制ASIC随半导体温和反弹涨0.42%，但联发科借助英伟达NVLink Fusion挑战其定制芯片地位构成潜在竞争压力" },
    { name: "AMD",       code: "AMD",   change: "-0.00%", driver: "二线AI算力股随半导体回暖涨1.10%，存储与算力轮动中相对抗跌" },
    { name: "Micron",    code: "MU",    change: "-0.00%", driver: "存储超级周期NAND/DRAM涨价延续，HBM/DRAM龙头涨2.77%" }
  ],

  /* ============ 五、重要科技与政策新闻（一手来源） ============ */
  news: [
    {
      title: "FTC联合22州起诉亚马逊：指控其7年暗中操纵广告竞价、多收数百亿美元",
      originalTitle: "FTC, States Sue Amazon Over Secret Ad Surcharge Scheme",
      source: "美国联邦贸易委员会（ftc.gov）",
      time: "2026年08月31日",
      type: "官方",
      url: "https://www.ftc.gov/news-events/news/press-releases/2026/08/ftc-states-sue-amazon-over-secret-ad-surcharge-scheme",
      link: "https://www.ftc.gov/news-events/news/press-releases/2026/08/ftc-states-sue-amazon-over-secret-ad-surcharge-scheme",
      summary: "FTC与22个州总检察长联合起诉亚马逊，指控其7年多来在站内搜索广告竞价中暗中加价：对外宣称运行“二价拍卖”（仅支付第二名出价+1美分），实际通过内部“软底价/代理二价”机制，约80%情况下按广告主自身出价收费，实为变相一价拍卖。涉及超100万品牌与卖家（含超50万中小企业），累计多收或达数百亿美元。FTC主席Ferguson称“不能让这种欺骗继续”，这是特朗普政府下对大型科技平台广告黑箱的最新一次执法。",
      impact: {
        direction: "利空",
        companies: "亚马逊、大型科技",
        industry: "反垄断、数字广告",
        logic: "亚马逊当日跌2.5%、创一个多月最大跌幅，广告业务（AWS之外第二大利润引擎）面临合规与诉讼风险"
      }
    },
    {
      title: "英伟达35亿美元入股联发科：深化NVLink Fusion合作，共建边缘到云端AI计算平台",
      originalTitle: "NVIDIA and MediaTek Deepen Long-Standing Partnership to Build AI Edge to Cloud Computing Platforms",
      source: "NVIDIA官方新闻室（nvidianews.nvidia.com）",
      time: "2026年08月31日",
      type: "官方",
      url: "https://nvidianews.nvidia.com/news/nvidia-and-mediatek-deepen-long-standing-partnership-to-build-ai-edge-to-cloud-computing-platforms",
      link: "https://nvidianews.nvidia.com/news/nvidia-and-mediatek-deepen-long-standing-partnership-to-build-ai-edge-to-cloud-computing-platforms",
      summary: "NVIDIA宣布投资35亿美元认购联发科可转债，深化双方在AI基础设施、边缘AI与车用三大领域合作。联发科将采用NVLink Fusion平台，帮助hyperscaler、云服务商与前沿模型开发商开发定制XPU并接入NVIDIA NVLink机架级AI工厂；双方继续开发多代RTX Spark/DGX Spark PC芯片。联发科借此挑战博通、迈威尔在定制ASIC领域的地位。英伟达当日涨1.48%。",
      impact: {
        direction: "利好",
        companies: "英伟达、联发科、半导体",
        industry: "AI基础设施、定制芯片",
        logic: "英伟达通过开放NVLink生态绑定定制芯片客户，对冲大客户自研芯片分流，巩固其AI硬件平台标准地位"
      }
    },
    {
      title: "MSCI 8月指数审议：闪迪成MSCI世界指数最大新纳入成分股，8月31日收盘生效",
      originalTitle: "MSCI Equity Indexes August 2026 Index Review",
      source: "MSCI官方（ir.msci.com）",
      time: "2026年08月12日（2026年08月31日收盘生效）",
      type: "官方",
      url: "https://ir.msci.com/node/22896",
      link: "https://ir.msci.com/node/22896",
      summary: "MSCI公布8月季度指数审议结果：MSCI ACWI新增55只、剔除92只证券，其中按总市值计，闪迪（SanDisk）、Carpenter Technology、ATI为MSCI世界指数新增前三大成分股，所有调整于8月31日收盘后生效。闪迪作为全球NAND前五，被纳入后吸引大量被动指数资金在尾盘集中买入，当日尾盘45分钟从约1460美元直线拉升至1566.70美元，收涨5.5%、成交放量近3倍。",
      impact: {
        direction: "利好",
        companies: "闪迪、存储",
        industry: "指数、被动资金",
        logic: "纳入MSCI世界指数带来被动资金流入，但属交易性买盘，短期或部分回吐；中期看存储景气与基本面"
      }
    },
    {
      title: "美伊时隔一月再度交火：美军打击拉腊克岛、伊朗报复袭击约旦美军基地，布油站上90美元",
      originalTitle: "Oil jumps over 2% after US attack on Iran's Larak Island",
      source: "Reuters（经 SAMAA TV 转载）",
      time: "2026年08月31日",
      type: "财经媒体",
      url: "https://www.samaa.tv/2087356039-oil-jumps-over-2-after-us-attack-on-iran-s-larak-island",
      link: "https://www.samaa.tv/2087356039-oil-jumps-over-2-after-us-attack-on-iran-s-larak-island",
      summary: "美军周日打击霍尔木兹海峡内伊朗拉腊克岛两处火箭发射装置（称其为布雷做准备，为7月底以来首次对伊打击），伊朗随即报复袭击约旦两处美军空军基地。冲突进入第六个月，霍尔木兹海峡周末可见商船降至每日5艘。布伦特原油+2.51%至90.31美元、WTI+2.19%至85.23美元。财长贝森特称美国或每周对伊发布新次级制裁。DBS能源研究主管认为“更可能是受控对抗而非持续升级”，油价或在85-95美元区间震荡。",
      impact: {
        direction: "利空",
        companies: "全市场、高估值成长股",
        industry: "地缘政治、油价、通胀",
        logic: "油价上行重燃通胀担忧、推升长端美债收益率，压制高估值成长股贴现率；能源股逆势走强"
      }
    },
    {
      title: "WSJ：美股三大指数收跌、长端美债收益率续升，AI高估值股进入“证明给我看”阶段",
      originalTitle: "U.S. Stocks Fall as Iran War Inflation Heats Up — Update",
      source: "华尔街日报/道琼斯新闻（经 TradingView 转载，作者 Rob Curran）",
      time: "2026年08月31日",
      type: "财经媒体",
      url: "https://www.tradingview.com/news/DJN_DN20260831007569:0",
      link: "https://www.tradingview.com/news/DJN_DN20260831007569:0",
      summary: "道指-374.09点（-0.70%）至53185.90、标普-0.33%至7686.14、纳指-0.12%至26370.89。油价+2.8%至85.76美元，10年期美债收益率+3.6bp至4.757%、30年期+4.1bp至5.248%（近期长端收益率跟随油价上行）。高盛CEO所罗门称长端利率飙升“值得关注但尚非紧急”。策略师J.D. Joyce称AI芯片与大型科技在财报季后进入“show-me market”。加州公用事业因山火责任条款调整暴跌（PG&E -20%、爱迪生国际-23%）。",
      impact: {
        direction: "利空",
        companies: "全市场、AI高估值股",
        industry: "利率、通胀、市场情绪",
        logic: "长端收益率与油价双升压制高估值成长股，AI板块从“财报驱动”转向“验证驱动”"
      }
    },
    {
      title: "存储超级周期延续：NAND/DRAM涨价致美光、闪迪业绩暴增，供需紧张短期难解",
      originalTitle: "A Once-in-a-Decade Buying Opportunity: Sandisk and Micron Shares Are Dirt Cheap and Look Primed to Skyrocket",
      source: "The Motley Fool（财经/行业媒体）",
      time: "2026年08月28日",
      type: "行业媒体",
      url: "https://www.fool.com/investing/2026/08/28/a-once-in-a-decade-buying-opportunity-sandisk-and/",
      link: "https://www.fool.com/investing/2026/08/28/a-once-in-a-decade-buying-opportunity-sandisk-and/",
      summary: "AI数据中心对DRAM与NAND需求近乎无限而产能受限，存储芯片价格飙升。闪迪为2026年标普500表现最强个股（年内涨近600%）、美光第四（近250%）。TrendForce数据显示全球前五大NAND厂商Q2营收环比+77%至688.7亿美元。新增产能预计2027年底至2028年才逐步释放，存储供需紧张短期难解。当日美光+2.77%、闪迪+5.5%，存储链整体领涨半导体。",
      impact: {
        direction: "利好",
        companies: "美光、闪迪、存储链",
        industry: "存储、半导体",
        logic: "存储进入“量价齐升”超级周期，供给受限下厂商获得定价权，是当日存储板块逆势走强的核心驱动"
      }
    }
  ],

  /* ============ 六、当日最值得关注的 3 个交易逻辑 ============ */
  logics: [
    { title: "地缘与利率重回台前：美伊交火→油价→通胀预期→长端收益率，压制高估值科技股",
      text: "美伊时隔一个月再度交火，布油站上90美元、WTI涨2.8%，重燃通胀担忧，10年期美债收益率续升3.6bp至4.757%、30年期至5.248%。长端收益率与油价双升直接压制长久期、高估值资产，资金从云巨头（亚马逊、谷歌跌超2%）撤向能源与存储，AI高估值股进入策略师所称“show-me market”——财报利好兑现后需以数据证明估值合理性。" },
    { title: "存储成为AI链新瓶颈：NAND/DRAM涨价超级周期，存储链逆势领涨",
      text: "闪迪+5.5%（MSCI纳入生效点火）、美光+2.77%领涨半导体，存储从GPU的“配套设施”升级为“AI战略硬通货”。英伟达CFO此前预警存储供应瓶颈将延续至2028财年底，TrendForce预计存储占云厂商资本开支比重将由47%升至2027年的68%。供给受限下存储厂商重获定价权，成为当日科技股分化中资金确定性最高的方向。" },
    { title: "定制芯片竞争白热化：英伟达35亿美元入股联发科对冲自研芯片分流，博通/迈威尔承压",
      text: "英伟达投资联发科35亿美元并开放NVLink Fusion生态，本质是把潜在的定制XPU“对手”转化为自己平台的“伙伴”，以对冲大客户（亚马逊、谷歌、微软）自研芯片的分流。联发科借此直接挑战博通、迈威尔在定制ASIC领域的地位。AI算力利润分配的博弈从“硬件vs云”进一步深入到“定制芯片”细分赛道，博通当日仅微涨0.42%、相对滞涨。" }
  ],

  /* ============ 七、未来 1—3 个交易日关注事项（具体事件） ============ */
  watchlist: [
    { date: "09月01日", event: "美国8月ISM制造业PMI、7月JOLTS职位空缺", impact: "检验高利率与油价上行下实体制造业韧性，若价格分项走强或强化加息预期、压制成长股" },
    { date: "09月02日", event: "博通（Broadcom）2026财年Q3财报（盘后），AI营收约160亿美元指引为焦点", impact: "检验AI定制芯片与网络设备需求成色，以及联发科挑战下定制芯片竞争格局" },
    { date: "09月04日", event: "美国劳工部8月非农就业报告（NFP）", impact: "美联储9月FOMC前最具决定性的数据，定调加息路径，直接影响科技成长股贴现率" },
    { date: "09月07日", event: "美国劳动节（Labor Day），美股休市", impact: "长假前资金趋于谨慎，短期波动或收敛" },
    { date: "09月15-16日", event: "美联储FOMC议息会议", impact: "市场对9月加息路径的定价，影响高估值成长股估值锚" },
    { date: "09月30日", event: "美光科技（Micron）Q4财报", impact: "存储涨价周期与HBM供需的关键验证，影响存储板块（美光、闪迪）定价" }
  ],

  /* ============ 八、页脚免责声明 ============ */
  disclaimer:
    "本报告基于公开市场信息整理，仅供华泰期货内部研究参考，不构成任何投资建议。股价数据以交易所官方为准；新闻以原始来源（SEC / 白宫 / BIS / Treasury / BEA / Reuters / Bloomberg 等）为准。投资有风险，决策需谨慎。"
};
