/**
 * ============================================================
 *  美股科技板块前一交易日行情日报 —— 数据文件（每日只需改这里）
 *  （2026-10-30 更新：对应美股交易日 2026-10-29）
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
    reportDate: "2026年10月30日",   // 报告发布日期（周五）
    tradeDate: "2026年10月29日",    // 对应美股交易日（前一交易日，周四）
    author: "华泰期货 · 研究",
    tag: "每日市场跟踪"
  },

  /* ============ 二、市场概览 ============ */
  overview: {
    /* 简短概括：指数变化 + 个股变化 + 重大事件 */
    text: "10月29日美股三大指数集体收跌、终结三连涨：道指-0.25%至52,342.56、标普500-0.30%至7,720.39、纳指-1.38%至26,184.72，费城半导体指数-1.4%终结四连涨，罗素2000逆势+1.0%。核心触发为Alphabet Q3营收不及预期+AI现金消耗加剧，股价暴跌12.6%重燃AI资本开支担忧，通信服务板块-6.60%领跌。盘后财报继续分化：亚马逊Q3营收/AWS+39.3%五年最快但Q4指引偏弱、资本开支772.6亿美元超预期，盘后一度跌超10%；英特尔Q4指引大幅滑坡盘后暴跌逾20%；闪迪Q3营收+378%并宣布1拆8。Q3 GDP初值3.4%超预期、9月核心PCE同比3.6%通胀仍热。",
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
      name: "Alphabet",
      code: "GOOGL",
      change: "-0.00%",
      type: "超跌",
      reason: "前一交易日暴跌约12.64%至283.82美元，单日跌幅远超科技板块平均（纳指仅-1.38%），创近一年罕见单日重挫。核心触发为Q3财报营收不及预期（核心搜索广告增速放缓至12%），叠加AI相关资本开支与现金消耗加速、自由现金流大幅转负，市场担忧「AI正侵蚀传统搜索业务」且「AI烧钱难自洽」。拖累通信服务板块单日-6.60%，为11大板块最大跌幅。"
    },
    {
      name: "SanDisk",
      code: "SNDK",
      change: "-0.00%",
      type: "超跌",
      reason: "前一交易日下跌约5.32%至1,330.05美元，达超跌阈值，与前一交易日+7.66%大涨形成剧烈反转。虽盘后公布Q3财报（营收110.31亿美元同比+378%、数据中心业务+1682%、非GAAP EPS 49.51美元超预期）并宣布1拆8，但因存储板块整体随AI资本开支担忧回调（SK海力士、美光盘后均跌逾3-4%），闪迪盘后续跌约2%。"
    }
  ],

  /* ============ 四、重点公司行情表 ============ */
  /* 超涨/超跌个股放最上方；无新闻的公司驱动因素简要说明即可 */
  stocks: [
    { name: "Alphabet",  code: "GOOGL", change: "-0.00%", driver: "暴跌约12.64%至283.82美元（超跌提示）；Q3财报营收不及预期、核心搜索广告增速放缓至12%被视作AI侵蚀传统搜索的信号，叠加AI资本开支与现金消耗加速、自由现金流转负，重燃市场对「AI烧钱能否自洽」的担忧，拖累通信服务板块单日-6.60%" },
    { name: "SanDisk",   code: "SNDK",  change: "-0.00%", driver: "下跌约5.32%至1,330.05美元（超跌提示）；盘后Q3财报营收110.31亿美元同比+378%、数据中心业务+1682%、非GAAP EPS 49.51美元超预期，并宣布1拆8（新股11/19分配），但存储板块随AI资本开支担忧整体回调" },
    { name: "NVIDIA",    code: "NVDA",  change: "-0.00%", driver: "下跌约0.80%至213.66美元；Alphabet财报引发的AI资本开支担忧压制GPU龙头情绪，费半终结四连涨，盘后亚马逊/英特尔指引偏弱进一步拖累AI算力需求预期" },
    { name: "Microsoft", code: "MSFT",  change: "-0.00%", driver: "微跌约0.16%至530.14美元；前一日盘后FQ1财报超预期（Azure+48%、自由现金流186亿）后今日获利回吐，作为「AI投入仍能产生现金」的代表相对抗跌" },
    { name: "Apple",     code: "AAPL",  change: "-0.00%", driver: "上涨约1.48%至348.91美元，大型科技股中逆势领涨；基本未参与AI基建资本开支竞赛、不直接受「AI烧钱」质疑影响，资金在风险偏好回落时寻求防御性龙头避险" },
    { name: "Amazon",    code: "AMZN",  change: "-0.00%", driver: "下跌约4.25%，盘后Q3财报：净销售额2019.44亿美元（+12%）略不及预期、AWS营收459.84亿美元+39.3%创近五年最快、营业利润率13.9%历史最高，但资本开支772.6亿美元超预期、自由现金流-423.6亿美元连续第二季为负、Q4指引2400-2470亿美元偏弱，盘后一度跌超10%" },
    { name: "Meta",      code: "META",  change: "-0.00%", driver: "上涨约1.96%至624.52美元，大型科技股中领涨；此前自由现金流转负的担忧在Alphabet暴跌对比下有所缓和，市场对Meta「AI变现+广告现金流稳健」重新定价" },
    { name: "Broadcom",  code: "AVGO",  change: "-0.00%", driver: "下跌约1.94%至345.00美元；定制ASIC与AI网络叙事随Alphabet资本开支担忧回调，费半终结四连涨，但作为XPU供应商深度绑定前沿AI客户、基本面支撑仍在" },
    { name: "AMD",       code: "AMD",   change: "-0.00%", driver: "下跌约2.08%至566.42美元；半导体板块随AI资本开支担忧回调，此前存储景气带动的反弹告一段落，费半终结四连涨" },
    { name: "Micron",    code: "MU",    change: "-0.00%", driver: "下跌约3.4%，存储板块回调；前一交易日受SK海力士Q3创纪录财报提振大涨5.86%后，今日随Alphabet资本开支担忧与存储板块获利了结回吐，盘后SK海力士、美光、西数、希捷集体下挫逾3%" }
  ],

  /* ============ 五、重要科技与政策新闻（一手来源） ============ */
  news: [
    {
      title: "Alphabet Q3营收不及预期、AI现金消耗加剧，股价暴跌12.6%重燃AI资本开支担忧",
      originalTitle: "Wall Street ends lower as Alphabet revenue miss revives AI capex jitters",
      source: "Reuters（英文财经媒体，经The Straits Times/Yahoo Finance转载）",
      time: "2026年10月29日",
      type: "财经媒体",
      url: "https://www.straitstimes.com/business/companies-markets/wall-street-ends-lower-as-alphabet-revenue-miss-revives-ai-capex-jitters",
      link: "https://www.straitstimes.com/business/companies-markets/wall-street-ends-lower-as-alphabet-revenue-miss-revives-ai-capex-jitters",
      summary: "Alphabet Q3财报营收不及预期，核心搜索广告收入同比增速放缓至12%，被市场视作人工智能开始侵蚀传统搜索业务的信号；叠加AI相关资本开支与现金消耗加速，自由现金流大幅转负。其股价10月29日暴跌12.6%，拖累标普500通信服务板块单日下挫6.60%，为11大板块最大跌幅。分析师指出，投资者正重新区分「能自筹AI巨额投资的现金牛企业」与「靠烧钱举债维持扩张的企业」，Alphabet被归入后者。同日美国Q3 GDP初值3.4%超预期、9月核心PCE同比3.6%仍热。",
      impact: {
        direction: "利空（Alphabet及AI资本开支叙事）",
        companies: "Alphabet、谷歌、英伟达、亚马逊、Meta",
        industry: "AI大模型、云计算、搜索广告、数据中心",
        logic: "Alphabet营收不及预期+自由现金流转负，直接冲击「AI烧钱可自洽」的市场共识，成为AI交易情绪逆转的导火索，拖累整体科技板块"
      }
    },
    {
      title: "亚马逊Q3财报：AWS+39.3%创近五年最快、营业利润率13.9%历史最高，但资本开支772.6亿美元超预期、Q4指引偏弱，盘后跌超10%",
      originalTitle: "Stocks making the biggest moves after hours: Amazon, Intel, Twilio, Reddit, Roblox & more",
      source: "CNBC（英文财经媒体）",
      time: "2026年10月29日",
      type: "财经媒体",
      url: "https://www.cnbc.com/2026/10/29/stocks-making-the-biggest-moves-after-hours-amzn-intc-twlo-rddt.html",
      link: "https://www.cnbc.com/2026/10/29/stocks-making-the-biggest-moves-after-hours-amzn-intc-twlo-rddt.html",
      summary: "亚马逊10月29日盘后公布Q3财报：净销售额2019.44亿美元（同比+12%）略不及预期，稀释后EPS 1.89美元低于预期的1.96美元；AWS营收459.84亿美元、同比+39.3%，创近五年最快增速；营业利润率升至13.9%为历史最高。但当期物业及设备资本支出高达772.6亿美元、远超市场预期的574.7亿美元，自由现金流连续第二季为负（-423.6亿美元），公司维持全年约2200亿美元资本开支指引不变，未释放AI投入放缓信号。Q4净销售额指引2400亿-2470亿美元偏弱，股价盘后一度跌超10%、随后跌幅收窄至约6%。",
      impact: {
        direction: "利空（亚马逊，短空长多分歧）",
        companies: "亚马逊",
        industry: "云计算、AI基础设施、电商",
        logic: "AWS高速增长验证AI云需求，但资本开支超预期+自由现金流转负+Q4指引偏弱，凸显「AI投入回报周期拉长」，加剧市场对超大规模厂商现金流的担忧"
      }
    },
    {
      title: "英特尔Q3营收165亿美元超预期，但Q4指引大幅滑坡（150-160亿美元 vs 预期170亿），盘后暴跌逾20%",
      originalTitle: "Stocks making the biggest moves after hours: Amazon, Intel, Twilio, Reddit, Roblox & more",
      source: "CNBC（英文财经媒体）",
      time: "2026年10月29日",
      type: "财经媒体",
      url: "https://www.cnbc.com/2026/10/29/stocks-making-the-biggest-moves-after-hours-amzn-intc-twlo-rddt.html",
      link: "https://www.cnbc.com/2026/10/29/stocks-making-the-biggest-moves-after-hours-amzn-intc-twlo-rddt.html",
      summary: "英特尔公布Q3财报，营收165.13亿美元（同比+21%）、数据中心与AI业务营收73.18亿美元（同比+78%，创15年最强增速），非GAAP EPS 0.52美元超预期的0.41美元。但Q4营收指引仅150亿-160亿美元，远低于分析师平均预期的170.5亿美元；非GAAP EPS指引0.25美元，大幅低于预期的0.43美元。CFO Zinsner称PC市场放缓至少持续至2027年上半年，预计2026年全球PC市场规模下滑约12%、2027年再降约10%。股价盘后暴跌逾20%-23%。",
      impact: {
        direction: "利空（英特尔及PC/半导体需求）",
        companies: "英特尔、AMD、英伟达",
        industry: "半导体制造、PC、数据中心",
        logic: "Q4指引大幅下滑反映PC市场持续疲软，拖累半导体整体情绪；但数据中心与AI业务+78%显示AI算力需求仍强劲，形成结构分化"
      }
    },
    {
      title: "闪迪Q3财报营收同比+378%、数据中心业务+1682%，宣布1拆8股票拆分",
      originalTitle: "Stocks making the biggest moves after hours: Amazon, Intel, Twilio, Reddit, Roblox & more",
      source: "CNBC（英文财经媒体）",
      time: "2026年10月29日",
      type: "财经媒体",
      url: "https://www.cnbc.com/2026/10/29/stocks-making-the-biggest-moves-after-hours-amzn-intc-twlo-rddt.html",
      link: "https://www.cnbc.com/2026/10/29/stocks-making-the-biggest-moves-after-hours-amzn-intc-twlo-rddt.html",
      summary: "闪迪公布2027财年Q1财报（截至10月2日）：营收110.31亿美元，同比+378%、环比+23%；非GAAP摊薄EPS 49.51美元，超预期的46.22美元；非GAAP毛利率85.1%。数据中心业务营收48亿美元、同比暴增1682%，受AI基础设施带动的企业级SSD需求推动。公司预计2027年数据中心将占NAND行业比特需求55%以上。董事会批准1拆8股票拆分，新股于11月19日分配。尽管财报超预期，存储板块当日随AI资本开支担忧回调，闪迪盘中收跌5.32%、盘后续跌约2%。",
      impact: {
        direction: "利好（闪迪基本面）",
        companies: "闪迪、美光、SK海力士",
        industry: "存储芯片、NAND、数据中心SSD",
        logic: "数据中心SSD需求爆发验证AI存储景气，NAND「超级周期」进一步确认；但短期受板块情绪拖累，基本面与股价出现阶段性背离"
      }
    },
    {
      title: "美国Q3 GDP初值3.4%超预期、9月核心PCE同比3.6%通胀仍热，长端利率回落至4.98%",
      originalTitle: "US Market Wrap 29 October: Alphabet Drags the Nasdaq Lower as the Russell Climbs Again",
      source: "The Edge（英文财经研究机构）",
      time: "2026年10月29日",
      type: "财经媒体",
      url: "https://edgeconsultancykw.com/us-market-wrap-29-october-2026",
      link: "https://edgeconsultancykw.com/us-market-wrap-29-october-2026",
      summary: "美国商务部公布Q3 GDP初值，实际GDP环比折年率增长3.4%，超市场预期，显示经济动能依然强劲；但9月核心PCE物价指数同比3.6%、整体PCE同比仍高企，通胀粘性未解，叠加战争相关的石油供应冲击推升系统性通胀。数据公布后，美债收益率曲线全线走低，10年期美债收益率回落7个基点至4.98%、重新跌破5%，30年期回落5个基点至5.32%。强劲增长+高通胀的组合令市场对美联储「更高更久」的利率路径保持警惕。",
      impact: {
        direction: "中性（增长强、通胀热并存）",
        companies: "高估值科技股整体",
        industry: "宏观经济、利率敏感板块",
        logic: "Q3 GDP超预期缓解衰退担忧，但核心PCE仍高、通胀粘性强化「更高更久」预期，长端利率虽短期回落但仍处高位，持续压制高估值科技股"
      }
    },
    {
      title: "Marvell据称正就收购数据中心光学器件商Lumentum进行深入谈判，AI供应链并购升温，Marvell盘后跌9.3%、Lumentum涨13%",
      originalTitle: "Marvell Shares Fall on Report of Talks to Acquire Lumentum",
      source: "Dow Jones Newswires / Bloomberg（英文财经媒体，经Morningstar转载）",
      time: "2026年10月28日",
      type: "财经媒体",
      url: "https://www.morningstar.com/news/dow-jones/2026102817108/marvell-shares-fall-on-report-of-talks-to-acquire-lumentum",
      link: "https://www.morningstar.com/news/dow-jones/2026102817108/marvell-shares-fall-on-report-of-talks-to-acquire-lumentum",
      summary: "据彭博援引知情人士报道，芯片制造商Marvell Technology正就收购数据中心光学器件制造商Lumentum Holdings进行深入谈判，交易最快可能于下周宣布。Lumentum市值约830亿美元、Marvell市值约2210亿美元，若达成将成为AI硬件供应链的一笔大型并购。Marvell向Lumentum采购激光器，收购有助于简化其供应链。消息传出后，Marvell盘后下跌约9.3%、Lumentum飙升约13%。此前英伟达今年早些时候已向Lumentum投资20亿美元。",
      impact: {
        direction: "中性偏多（AI供应链整合）",
        companies: "Marvell、Lumentum、英伟达",
        industry: "半导体、光通信、AI数据中心",
        logic: "AI热潮推动供应链并购整合，反映AI硬件「纵向一体化」趋势，利好光模块/光器件产业链，但市场对Marvell高溢价收购的现金消耗存疑虑"
      }
    }
  ],

  /* ============ 六、当日最值得关注的 3 个交易逻辑 ============ */
  logics: [
    { title: "AI「现金流裁决」进入残酷兑现期：Alphabet领跌、亚马逊英特尔接力，市场从「谁投得多」转向「谁烧得起且还得起」",
      text: "Alphabet营收不及预期+自由现金流转负引发12.6%暴跌，成为AI交易情绪逆转的导火索；盘后亚马逊（资本开支772.6亿超预期、自由现金流-423.6亿）与英特尔（Q4指引大幅滑坡）接力跳水，进一步坐实市场的核心担忧：超大规模厂商的AI资本开支正以超预期速度吞噬现金，而商业回报尚未同步兑现。市场定价逻辑已从「AI叙事空间」切换到「现金流可持续性」，资金从小盘/防御板块回流、罗素2000逆势+1%，正是「AI交易内部裂痕≠全市场风险」的信号。这将成为未来数周科技股估值的核心裁决标尺。" },
    { title: "存储「超级周期」遭遇短期情绪回调：闪迪财报超预期却收跌，基本面与股价阶段性背离",
      text: "闪迪Q3营收同比+378%、数据中心业务+1682%、并宣布1拆8，基本面强劲；但存储板块当日随AI资本开支担忧集体回调（闪迪-5.32%、美光约-3.4%，盘后SK海力士/西数/希捷均跌逾3-4%）。这印证了存储板块与「AI算力/云厂商现金流」情绪的高度联动：即便存储供需基本面（SK海力士产能售罄至2029、供不应求至2030）依然扎实，短期仍难脱离AI整体情绪定价。存储「超级周期」的中期逻辑未变，但短期需警惕AI情绪退潮带来的Beta回撤。" },
    { title: "宏观「增长强、通胀热」组合延续：Q3 GDP 3.4%超预期，但核心PCE 3.6%令12月加息悬而未决",
      text: "10月29日公布的Q3 GDP初值3.4%超预期，显示美国经济动能强劲；但9月核心PCE同比3.6%、整体通胀仍处高位，叠加战争相关石油供应冲击，通胀粘性未解。美联储前一日（10/28）刚以10:2维持利率不变，但库克与哈马克两位官员主张加息，CME FedWatch显示12月加息概率已升至约85%。「强增长+热通胀」的组合意味着即便AI基本面叙事修复，高利率与粘性通胀仍将持续压制高估值科技股的贴现率，构成独立于产业基本面的宏观第二重压制。" }
  ],

  /* ============ 七、未来 1—3 个交易日关注事项（具体事件） ============ */
  watchlist: [
    { date: "10月30日（周五）", event: "美国9月个人收入与支出、9月核心PCE物价指数终值、10月密歇根消费者信心终值", impact: "核心PCE终值验证通胀粘性，直接影响12月加息预期与长端利率走势，压制高估值科技股" },
    { date: "10月30日（周五）盘前/盘中", event: "雪佛龙（CVX）、埃克森美孚（XOM）等能源巨头财报；苹果产业链动态", impact: "油价高位下能源股财报受关注，间接影响通胀与利率预期；苹果iPhone Duo/Mac触屏版销量动态受市场关注" },
    { date: "10月31日（周六）", event: "美国10月非农就业报告（若顺延则11月初公布）", impact: "非农与薪资增速是美联储12月加息决策的关键数据，直接影响利率敏感科技股估值" },
    { date: "11月初", event: "美国10月ISM制造业PMI、美联储官员密集讲话", impact: "经济动能与官员鹰鸽表态决定「更高更久」预期是否强化，影响AI估值修复空间" },
    { date: "11月第1周", event: "苹果（AAPL）、AMD、高通（QCOM）、博通（AVGO）等财报季持续（具体日期以公司公告为准）", impact: "苹果财报验证消费电子与AI端侧需求；AMD/高通/博通财报验证AI算力与ASIC景气" }
  ],

  /* ============ 八、页脚免责声明 ============ */
  disclaimer:
    "本报告基于公开市场信息整理，仅供华泰期货内部研究参考，不构成任何投资建议。股价数据以交易所官方为准；新闻以原始来源（SEC / 白宫 / BIS / Treasury / BEA / BLS / Federal Reserve / Reuters 等）为准。投资有风险，决策需谨慎。"
};
