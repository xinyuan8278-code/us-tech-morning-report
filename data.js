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
    reportDate: "2026年09月03日",   // 报告发布日期
    tradeDate: "2026年09月02日",    // 对应美股交易日（前一交易日）
    author: "华泰期货 · 研究",
    tag: "每日市场跟踪"
  },

  /* ============ 二、市场概览 ============ */
  overview: {
    /* 简短概括：指数变化 + 个股变化 + 重大事件 */
    text: "9月2日美股结束三连跌：道指+0.56%、纳指+0.45%、标普+0.46%、费半+0.45%。10年期美债收益率回落至4.78%，8月ADP私营就业仅增3.8万低于预期，9月加息押注降温。AI硬件需求验证主导反弹：戴尔+15.8%、英伟达+3.21%、美光+2.43%；博通盘后财报AI半导体收入+221%，Q4指引略低于预期一度跌超6%。",
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
    { name: "NVIDIA",    code: "NVDA",  change: "-0.00%", driver: "戴尔财报验证AI算力需求向企业市场扩散，美债收益率回落，涨3.21%" },
    { name: "Microsoft", code: "MSFT",  change: "-0.00%", driver: "大型科技反弹中相对滞涨，随利率回落跌幅有限，跌0.84%" },
    { name: "Apple",     code: "AAPL",  change: "-0.00%", driver: "9/9秋季发布会临近，市场观望，小幅整理跌0.05%" },
    { name: "Amazon",    code: "AMZN",  change: "-0.00%", driver: "大型科技整体回暖但表现平淡，微涨0.02%" },
    { name: "Alphabet",  code: "GOOGL", change: "-0.00%", driver: "广告业务免遭强制拆分利好，涨0.63%" },
    { name: "Meta",      code: "META",  change: "-0.00%", driver: "大型科技反弹，AI/广告主线获资金回流，涨2.47%" },
    { name: "Broadcom",  code: "AVGO",  change: "-0.00%", driver: "盘后财报前市场观望微跌0.66%；盘后Q3财报AI半导体收入+221%，Q4指引略低于预期一度跌超6%后转涨" },
    { name: "AMD",       code: "AMD",   change: "-0.00%", driver: "半导体整体回暖但AI二线相对滞后，跌0.55%" },
    { name: "Micron",    code: "MU",    change: "-0.00%", driver: "戴尔'DRAM短缺'表述+机构预计DRAM合约价QoQ涨超50%，存储涨价预期强化，涨2.43%" },
    { name: "Sandisk",   code: "SNDK",  change: "-0.00%", driver: "存储板块回暖、NAND涨价预期升温，涨1.08%" }
  ],

  /* ============ 五、重要科技与政策新闻（一手来源） ============ */
  news: [
    {
      title: "博通Q3财报：AI半导体收入167亿美元同比+221%，Q4指引略低于预期，盘后一度跌超6%",
      originalTitle: "Broadcom Inc. Announces Third Quarter Fiscal Year 2026 Financial Results and Quarterly Dividend",
      source: "美国证券交易委员会 SEC（Broadcom 8-K 财报）",
      time: "2026年09月02日",
      type: "官方",
      url: "https://www.sec.gov/Archives/edgar/data/1730168/000173016826000076/avgo-08022026x8kxex99.htm",
      link: "https://www.sec.gov/Archives/edgar/data/1730168/000173016826000076/avgo-08022026x8kxex99.htm",
      summary: "博通2026财年Q3（截至8/2）营收295.91亿美元、同比+86%创纪录，GAAP净利润130.88亿（+216%），Non-GAAP每股收益3.32美元；AI半导体收入167亿美元、同比+221%、环比+54%，占营收过半。公司预计Q4营收348亿美元（同比+93%）但略低于市场预期约350亿，盘后一度跌超6%后在财报电话会转涨；Q4 AI收入指引217亿美元（+236%），并预计2027财年AI收入翻倍至约1150亿、2028财年再翻倍至2300亿。",
      impact: {
        direction: "中性",
        companies: "博通、英伟达、定制ASIC产业链",
        industry: "AI基础设施、定制芯片",
        logic: "AI需求验证强劲但Q4指引略低于预期，叠加Marvell/联发科等定制芯片竞争加剧引发担忧；中长期AI收入翻倍指引仍是算力产业链强支撑"
      }
    },
    {
      title: "戴尔Q2财报：AI服务器订单609亿、积压950亿美元创新高，全年指引上调250亿至1920亿，股价大涨15.8%",
      originalTitle: "Dell Technologies Delivers Second Quarter Fiscal 2027 Financial Results",
      source: "戴尔科技官方投资者关系（investors.delltechnologies.com）",
      time: "2026年09月01日",
      type: "官方",
      url: "https://investors.delltechnologies.com/news-releases/news-release-details/dell-technologies-delivers-second-quarter-fiscal-2027-financial",
      link: "https://investors.delltechnologies.com/news-releases/news-release-details/dell-technologies-delivers-second-quarter-fiscal-2027-financial",
      summary: "戴尔2027财年Q2（截至7/31）营收470亿美元、同比+58%，AI优化服务器营收164亿美元、同比翻倍；当季AI服务器订单609亿美元、季末积压950亿美元均创新高，全年营收指引由1670亿上调250亿至1920亿美元（同比+69%），AI服务器全年指引由600亿上调至740亿。COO Clarke称AI服务器产能最大瓶颈仍是'DRAM、DRAM、DRAM，其次是NAND、NAND、NAND'。9月2日戴尔股价大涨15.8%，验证AI需求正从超大规模云厂商向企业市场扩散。",
      impact: {
        direction: "利好",
        companies: "戴尔、英伟达、存储（美光、闪迪）、服务器链",
        industry: "AI基础设施、数据中心",
        logic: "AI资本开支加速兑现、需求向企业市场'出圈'；'存储短缺'表述进一步强化DRAM/NAND涨价周期预期"
      }
    },
    {
      title: "Snowflake Q2财报超预期：产品营收14.9亿美元+37%，上调全年指引，盘后大涨超22%",
      originalTitle: "Snowflake Reports Financial Results for the Second Quarter of Fiscal 2027",
      source: "美国证券交易委员会 SEC（Snowflake 8-K 财报）",
      time: "2026年09月02日",
      type: "官方",
      url: "https://www.sec.gov/Archives/edgar/data/1640147/000164014726000033/fy2027q2earnings.htm",
      link: "https://www.sec.gov/Archives/edgar/data/1640147/000164014726000033/fy2027q2earnings.htm",
      summary: "Snowflake 2027财年Q2（截至7/31）总营收15.5亿美元、同比+35%，产品营收14.9亿美元、+37%；净收入留存率126%，剩余履约义务90亿美元、+30%。公司将全年产品营收指引由58.4亿上调至60.7亿美元（+36%），并上调Non-GAAP营业利润率指引至14.5%。财报全面超预期，盘后股价大涨超22%，印证企业AI数据云需求加速。",
      impact: {
        direction: "利好",
        companies: "Snowflake、软件/AI应用层",
        industry: "AI商业化、企业数据云",
        logic: "企业级AI应用（数据云）商业化加速、利润与增长并进，为高估值软件股提供估值支撑"
      }
    },
    {
      title: "谷歌广告业务免遭强制分拆：法官驳回司法部出售AdX诉求，改采行为性救济",
      originalTitle: "Google defeats US bid to force ad tech sale",
      source: "路透社（Reuters，经 Yahoo Finance 转载）",
      time: "2026年09月02日",
      type: "财经媒体",
      url: "https://finance.yahoo.com/media-advertising/articles/google-defeats-us-bid-force-143055450.html",
      link: "https://finance.yahoo.com/media-advertising/articles/google-defeats-us-bid-force-143055450.html",
      summary: "美国弗吉尼亚州东区联邦法院法官Brinkema 9月2日驳回司法部要求谷歌出售广告交易平台AdX的诉求，未采纳结构性拆分方案，转而接受大部分行为性救济，要求谷歌广告工具与竞争对手实现互操作、停止压低出版商广告价格。这是继搜索案（拒绝出售Chrome）后谷歌又一次免于资产剥离，谷歌广告业务（约占总营收4.1%）估值风险缓解，当日谷歌涨0.63%。",
      impact: {
        direction: "利好",
        companies: "Alphabet/谷歌",
        industry: "反垄断、数字广告",
        logic: "反垄断结构性拆分风险进一步消退，缓解大型科技平台估值折价，谷歌广告业务的不确定性降低"
      }
    },
    {
      title: "8月ADP私营就业仅增3.8万人、低于预期，劳动力降温，9月加息押注回落",
      originalTitle: "US private payrolls growth slows in August, ADP says",
      source: "路透社（Reuters，经 MarketScreener 转载）/ ADP National Employment Report",
      time: "2026年09月02日",
      type: "财经媒体",
      url: "https://uk.marketscreener.com/news/us-private-payrolls-growth-slows-in-august-adp-says-ce7858d2d08bf02c",
      link: "https://uk.marketscreener.com/news/us-private-payrolls-growth-slows-in-august-adp-says-ce7858d2d08bf02c",
      summary: "ADP数据显示美国8月私营部门新增就业3.8万人，低于市场预期4.8万，为1月以来最小增幅；制造业、专业服务、信息业岗位减少，教育与医疗、建筑、休闲酒店保持招聘。薪资方面留任员工同比+3.0%、跳槽员工+4.7%。数据公布后，市场对9月加息概率从约68%回落至62%，美债收益率短线下行，缓解高估值科技股贴现压力。",
      impact: {
        direction: "中性",
        companies: "全市场、高估值成长股",
        industry: "就业、货币政策",
        logic: "劳动力降温约束美联储加息空间，利率预期回落利好成长股估值；9/4官方非农为关键验证，若同步走弱则9月加息预期进一步降温"
      }
    },
    {
      title: "英伟达+3.21%：戴尔财报验证AI需求向企业市场扩散，黄仁勋称今年在美投资近万亿美元",
      originalTitle: "Nvidia's stock is climbing as investors get more confidence in an expanding base of AI customers",
      source: "MarketWatch（道琼斯旗下）",
      time: "2026年09月02日",
      type: "财经媒体",
      url: "https://www.marketwatch.com/story/nvidias-stock-is-climbing-as-investors-get-more-confidence-in-an-expanding-base-of-ai-customers-a6e297f1",
      link: "https://www.marketwatch.com/story/nvidias-stock-is-climbing-as-investors-get-more-confidence-in-an-expanding-base-of-ai-customers-a6e297f1",
      summary: "戴尔财报显示AI硬件需求正从超大规模云厂商向企业市场扩散，D.A. Davidson、Wedbush等分析师认为这验证了英伟达对'非超大规模增长'的乐观判断。此外黄仁勋在北卡州G20科技活动上呼吁各国加速AI基建，称AI如同'水电'、是'great equalizer'，并称英伟达今年将在美国基础设施投资'接近1万亿美元'。英伟达收涨3.21%，市值单日增逾1680亿美元。",
      impact: {
        direction: "利好",
        companies: "英伟达、AI算力链",
        industry: "AI基础设施、GPU",
        logic: "企业级AI需求接力超大规模云厂商，缓解'AI资本开支集中于少数云巨头'的担忧，强化英伟达长期增长逻辑"
      }
    },
    {
      title: "存储涨价预期强化：戴尔称DRAM/NAND仍是AI服务器最大瓶颈，机构预计DRAM合约价QoQ涨超50%",
      originalTitle: "Micron Stock Can't Catch a Break. It Does Have This One Big Catalyst.",
      source: "Barron's（道琼斯旗下，经 Dow Jones Newswire 转载）",
      time: "2026年09月02日",
      type: "财经媒体",
      url: "https://www.tradingview.com/news/DJN_DN20260902001798:0",
      link: "https://www.tradingview.com/news/DJN_DN20260902001798:0",
      summary: "戴尔COO Jeffrey Clarke在财报电话会上强调，AI服务器生产最大制约仍是'DRAM、DRAM、DRAM，其次是NAND、NAND、NAND'。Susquehanna预计本季度DRAM合约价环比上涨超50%、NAND闪存价格上涨约60%。美光约四分之三营收来自DRAM，前期虽因长期供货协议部分锁定价格，但已锁定订单仍无法完全对冲涨价，9月30日美光Q4财报成为存储周期关键验证。",
      impact: {
        direction: "利好",
        companies: "美光、闪迪、SK海力士、西部数据",
        industry: "存储芯片、DRAM/NAND",
        logic: "存储'量价齐升'超级周期延续，戴尔的短缺表述强化涨价预期，支撑存储板块反弹（美光+2.43%、闪迪+1.08%）"
      }
    }
  ],

  /* ============ 六、当日最值得关注的 3 个交易逻辑 ============ */
  logics: [
    { title: "利率预期回落 + AI硬件需求验证双轮驱动，科技股结束三连跌反弹",
      text: "8月ADP私营就业仅增3.8万人、低于预期，劳动力降温令市场对9月加息押注从约68%回落至62%，10年期美债收益率自高位回落至4.78%，缓解高估值科技股贴现压力；叠加戴尔财报验证AI硬件需求强劲，风险偏好修复，半导体、存储板块领涨。宏观（利率）与产业（AI需求）双重利好共振，是本日反弹的核心逻辑，后续仍需9/4非农与9/11 CPI验证。" },
    { title: "AI需求'出圈'：戴尔验证企业市场接力超大规模云厂商，英伟达及算力链获支撑",
      text: "戴尔AI服务器订单609亿、积压950亿美元创新高，全年指引大幅上调，分析师普遍认为这证明AI算力需求正从少数超大规模云厂商向更广泛的企业市场扩散，直接缓解'AI资本开支过度集中'的担忧。英伟达+3.21%、戴尔+15.8%领涨，企业级AI采购浪潮成为AI交易新的叙事支点，算力链（GPU、定制ASIC、服务器、网络）景气度获进一步验证。" },
    { title: "存储超级周期延续：DRAM/NAND短缺与涨价预期强化，美光财报成关键验证点",
      text: "戴尔COO 'DRAM、DRAM、DRAM，其次是NAND、NAND、NAND'的表述，叠加Susquehanna预计DRAM合约价环比涨超50%、NAND涨约60%，强化存储'量价齐升'超级周期预期，美光+2.43%、闪迪+1.08%领涨存储板块。存储是AI数据中心供给最紧环节之一，涨价周期与供给受限共振，9月30日美光Q4财报将是检验涨价兑现与超级周期持续性的关键催化。" }
  ],

  /* ============ 七、未来 1—3 个交易日关注事项（具体事件） ============ */
  watchlist: [
    { date: "09月04日", event: "美国劳工部8月非农就业报告（NFP）", impact: "美联储9月FOMC前最具决定性的就业数据，定调加息路径，直接影响科技成长股贴现率" },
    { date: "09月07日", event: "美国劳动节（Labor Day），美股休市", impact: "长假前资金趋于谨慎，短期波动或收敛" },
    { date: "09月09日", event: "苹果秋季发布会，预计发布iPhone 18及首款折叠屏iPhone", impact: "John Ternus接任CEO后首场产品大考，检验苹果AI与硬件创新能否支撑高估值" },
    { date: "09月11日", event: "美国8月CPI（消费者价格指数）数据", impact: "9月FOMC前最关键通胀数据，直接决定是否加息，当前9月加息押注约62%" },
    { date: "09月15-16日", event: "美联储FOMC议息会议", impact: "市场定价9月加息25bp概率约62%，影响高估值成长股估值锚" },
    { date: "09月30日", event: "美光科技（Micron）Q4财报", impact: "存储涨价周期与HBM/DRAM供需的关键验证，影响存储板块（美光、闪迪）定价" }
  ],

  /* ============ 八、页脚免责声明 ============ */
  disclaimer:
    "本报告基于公开市场信息整理，仅供华泰期货内部研究参考，不构成任何投资建议。股价数据以交易所官方为准；新闻以原始来源（SEC / 白宫 / BIS / Treasury / BEA / Reuters / Bloomberg 等）为准。投资有风险，决策需谨慎。"
};
