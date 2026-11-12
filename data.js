/**
 * ============================================================
 *  美股科技板块前一交易日行情日报 —— 数据文件（每日只需改这里）
 *  （2026-11-12 更新：对应美股交易日 2026-11-11）
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
    reportDate: "2026年11月12日",   // 报告发布日期（周四）
    tradeDate: "2026年11月11日",    // 对应美股交易日（前一交易日，周三）
    author: "华泰期货 · 研究",
    tag: "每日市场跟踪"
  },

  /* ============ 二、市场概览 ============ */
  overview: {
    /* 简短概括：指数变化 + 个股变化 + 重大事件 */
    text: "11月11日（周三）美股结束前两日回调、AI交易强势重燃：纳指+1.60%至25,466.19、标普500+1.31%至7,619.38、道指+0.49%至52,486.49，费城半导体指数大涨5.66%。核心催化是CoreWeave盘后Q3财报超预期（营收36.6亿美元、同比+168%，上调全年指引至130—133亿美元，积压订单1325亿美元，并宣布不再发行无担保债），一举缓解市场对AI基建「举债扩张难以为继」的核心担忧。芯片股全面反弹：英伟达+2.87%至173.73美元（扭转两日累跌超9%）、AMD+7.32%、博通+3.99%、ARM+12.05%，存储股暴涨（闪迪+13.69%、美光+11%、SK海力士+9.71%）。另一主线是Anthropic IPO路演需求旺盛，投行考虑上调估值至1.5万亿美元上方。仅微软-2.26%、亚马逊-1.74%、Meta-1.97%逆势收跌。",
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
    { name: "SanDisk", code: "SNDK", change: "-0.00%", type: "超涨", reason: "11月11日暴涨13.69%至977.69美元，单日成交额超160亿美元、换手率高达11.52%；AI交易重燃带动存储板块整体暴涨（美光+11%、SK海力士+9.71%、西部数据+8%），NAND「超级周期」叙事在CoreWeave财报验证AI算力需求后重获资金追捧" },
    { name: "AMD", code: "AMD", change: "-0.00%", type: "超涨", reason: "11月11日大涨7.32%至552.90美元，半导体板块领涨之一；承接英伟达治理风波下的供应链分散预期，且作为Anthropic IPO基石投资者（私募配售认购25亿美元）强化其AI算力生态站位" }
  ],

  /* ============ 四、重点公司行情表 ============ */
  /* 超涨/超跌个股放最上方；无新闻的公司驱动因素简要说明即可 */
  stocks: [
    { name: "SanDisk",   code: "SNDK",  change: "-0.00%", driver: "暴涨13.69%至977.69美元，存储板块领涨；AI算力需求经CoreWeave财报验证后，NAND「超级周期」叙事重获资金追捧，成交额超160亿美元、换手率逾11%，波动率显著放大" },
    { name: "AMD",       code: "AMD",   change: "-0.00%", driver: "大涨7.32%至552.90美元；作为英伟达之外的第二GPU供应商，受益于治理风波引发的供应链分散预期，同时以25亿美元参与Anthropic IPO基石私募配售，强化AI算力生态站位" },
    { name: "NVIDIA",    code: "NVDA",  change: "-0.00%", driver: "上涨2.87%至173.73美元，扭转此前两日累跌超9%的颓势；CoreWeave财报与Anthropic IPO需求旺盛缓解了AI需求担忧，黄仁勋丑闻引发的个股治理风险暂时被板块性反弹所对冲" },
    { name: "Microsoft", code: "MSFT",  change: "-0.00%", driver: "逆势下跌约2.26%，七巨头中表现最弱；Anthropic Claude办公套件持续渗透其Office腹地，且作为基石投资者参与Anthropic私募配售反而凸显AI应用层的竞争压力" },
    { name: "Apple",     code: "AAPL",  change: "-0.00%", driver: "上涨约2.04%，大型科技中相对强势；AI板块反弹带动风险偏好回升，苹果自身现金流稳健、受AI基建融资风险波及较小" },
    { name: "Amazon",    code: "AMZN",  change: "-0.00%", driver: "逆势下跌约1.74%，七巨头中偏弱；Anthropic IPO路演虽强化AI生态热度，但市场对亚马逊高企的资本开支与AWS增速可持续性仍存观望" },
    { name: "Alphabet",  code: "GOOGL", change: "-0.00%", driver: "上涨约2.11%，随AI板块反弹；作为Anthropic最大基石投资者（私募配售认购100亿美元），其AI投资敞口在IPO估值上调预期下获正面重估" },
    { name: "Meta",      code: "META",  change: "-0.00%", driver: "逆势下跌约1.97%，七巨头中偏弱；AI反弹日资金更多流向半导体与算力基础设施，Meta作为AI应用层标的相对承压" },
    { name: "Broadcom",  code: "AVGO",  change: "-0.00%", driver: "上涨3.99%至345.22美元，延续前一交易日强势；ASIC定制芯片叙事叠加作为Anthropic IPO基石投资者（认购10亿美元），在AI算力供应链分散逻辑下持续受益" },
    { name: "Micron",    code: "MU",    change: "-0.00%", driver: "暴涨约11%，存储板块领涨之一；AI交易重燃下HBM/DRAM景气逻辑获资金追捧，CoreWeave超预期财报印证AI算力对高带宽存储的持续需求" }
  ],

  /* ============ 五、重要科技与政策新闻（一手来源） ============ */
  news: [
    {
      title: "CoreWeave Q3财报超预期并上调全年指引，点燃AI云板块反弹，缓解AI「泡沫」担忧",
      originalTitle: "CoreWeave sparks AI cloud stock rally, lifts Nvidia as results ease bubble fears",
      source: "Reuters（经 The Star Malaysia 英文转载）",
      time: "2026年11月11日",
      type: "财经媒体",
      url: "https://www.thestar.com.my/tech/tech-news/2026/11/11/coreweave-sparks-ai-cloud-stock-rally-lifts-nvidia-as-results-ease-bubble-fears",
      link: "https://www.thestar.com.my/tech/tech-news/2026/11/11/coreweave-sparks-ai-cloud-stock-rally-lifts-nvidia-as-results-ease-bubble-fears",
      summary: "AI算力云龙头CoreWeave周三暴涨，点燃了此前受挫的AI云板块整体反弹。公司Q3营收36.6亿美元、同比+168%，高于预期约35.4亿美元；将2026全年营收指引上调至130亿—133亿美元，调整后营业利润指引上调至12.75亿—13.75亿美元，预计年末年化营收运行率20亿—21亿美元；9月末积压订单达1325亿美元（6月末为1042亿）。CEO Michael Intrator表示监管审查可能放缓行业数据中心建设，但不显著改变公司扩张计划。公司同时宣布不再以当前利率发行无担保债，称现有合同现金流足以覆盖当前及未来债务偿还。Bernstein分析师称这是「能期望的最好季度」，但警告当AI算力紧缺缓解时CoreWeave将「最先且最重」受冲击。",
      impact: {
        direction: "利好（AI算力需求验证，缓解举债扩张担忧）",
        companies: "CoreWeave及neocloud（Nebius/Iren/Oracle）、英伟达、存储与光通信产业链",
        industry: "AI云计算、GPU算力租赁、数据中心",
        logic: "CoreWeave超预期营收与上调指引，印证AI算力实际需求仍强，直接对冲「AI资本开支空转」与「举债扩张难以为继」的核心担忧，是当日AI板块全面反弹的导火索；但其709美元净亏损与846亿美元净利息支出仍提示高杠杆风险未消"
      }
    },
    {
      title: "Anthropic IPO路演需求旺盛，投行考虑上调估值至1.5万亿美元上方；谷歌、英伟达等基石投资者私募配售260亿美元",
      originalTitle: "Anthropic opens its IPO roadshow at $70 to $78 a share",
      source: "Reuters / CNBC（经 Esscher 等英文转载）",
      time: "2026年11月11日",
      type: "财经媒体",
      url: "https://esscher.com/stories/2026-11-11-daily-anthropic-opens-its-ipo-roadshow-at-70-to-78-a-share",
      link: "https://esscher.com/stories/2026-11-11-daily-anthropic-opens-its-ipo-roadshow-at-70-to-78-a-share",
      summary: "AI实验室Anthropic正式启动IPO路演，拟以每股70—78美元发行8.25亿股A类普通股，申请在纳斯达克全球精选市场以代码ANT上市。按完全摊薄口径CNBC报道估值最高可达1.405万亿美元，Reuters口径（按发行后13.09亿股）则约9160亿—1.02万亿美元。基石投资者阵容披露：谷歌、英伟达各认购约100亿美元，AMD约25亿，博通、美光、微软各约10亿，台积电约5亿，合计260亿美元N类普通股私募配售。金融时报报道称，高盛、摩根士丹利等承销行在路演初期收到大量认购意向后，考虑将发行价上调至区间上限之上，估值或推至1.5万亿美元上方。高盛分析师预计Anthropic到2030年底营收将达6850亿美元、算力基础设施支出增长十倍以上至近4000亿美元。",
      impact: {
        direction: "利好（AI资产情绪与算力生态重估）",
        companies: "Anthropic及谷歌、英伟达、AMD、博通、美光、微软、台积电等基石投资者",
        industry: "AI大模型、云计算、算力产业链",
        logic: "IPO需求旺盛与估值上调预期显著修复AI资产情绪，成为当日AI交易重燃的另一核心催化；谷歌/英伟达各100亿美元的重注显示算力巨头对AI应用层的战略卡位，直接带动相关芯片与云厂商估值修复"
      }
    },
    {
      title: "美股周三全线收涨：纳指+1.6%、费半暴涨5.66%，存储与光通信领涨，AI信心重燃",
      originalTitle: "Stocks Rebound as CoreWeave Raises Its Forecast",
      source: "Reuters / CNBC（经 The Factum 等英文转载）",
      time: "2026年11月11日",
      type: "财经媒体",
      url: "https://thefactum.ai/articles/008a18ee-cfd7-49cd-a488-abebc8e205f9",
      link: "https://thefactum.ai/articles/008a18ee-cfd7-49cd-a488-abebc8e205f9",
      summary: "11月11日美股在CoreWeave上调指引并承诺不再发新无担保债的消息带动下强势反弹，纳指涨1.6%、标普500涨1.31%、道指涨0.49%，费城半导体指数暴涨5.66%。存储芯片集体拉升（闪迪+13.69%、美光+11%、SK海力士+9.71%、西部数据+8%），光通信暴力反弹（应用光电+15.6%、Lumentum+10.67%、Coherent+9.27%），AI云服务商狂飙（CoreWeave+24.71%、Nebius+15%）。七巨头分化：英伟达+2.87%、苹果+2.04%、谷歌+2.11%、特斯拉+2.91%上涨，微软-2.26%、亚马逊-1.74%、Meta-1.97%下跌。当日为美国退伍军人节，美债市场休市；前一日10年期美债收益率已升至5%上方，利率压力仍存但被AI需求验证所暂时掩盖。",
      impact: {
        direction: "利好（AI板块全面修复）",
        companies: "半导体、存储、光通信、neocloud产业链整体",
        industry: "半导体、存储芯片、AI基础设施",
        logic: "AI交易从「举债扩张担忧」转向「需求验证」，资金回流此前跌深的算力、存储与光通信板块；但12月加息预期仍高（CME显示概率约90%），利率对高估值成长股的中期压制未解除"
      }
    },
    {
      title: "软银因数据中心发电设备预付款减值37亿美元，Q2净亏71亿美元，凸显AI基建投资「错时」风险",
      originalTitle: "SoftBank shares fluctuate after US$7 bil loss on writedown",
      source: "Reuters（经 The Edge Malaysia 英文转载）",
      time: "2026年11月11日",
      type: "财经媒体",
      url: "https://theedgemalaysia.com/node/825250",
      link: "https://theedgemalaysia.com/node/825250",
      summary: "软银集团周二公布2026财年Q2财报，录得1.12万亿日元（约71亿美元）净亏损，为近两年来首次季度亏损，远超市场预期的盈利1290亿日元。亏损主因是对美国数据中心发电设备不可退还预付款计提5972亿日元（约37亿美元）减值：旗下Silver Bands 7（SB7）此前为锁定燃气轮机等发电设备产能累计预付约95亿美元，因项目方案在敲定前即行采购，部分设备被移出修订后的计划。CFO后藤芳光承认「抢在长期规划敲定前就急于锁定设备」，正对采购策略做「全面重估」。软银股价周三东京早盘一度跌逾11%，已自6月历史高点回撤逾50%。该案例成为AI基建「先付钱锁产能」模式下沉没成本风险的典型注脚。",
      impact: {
        direction: "利空（AI数据中心投资可持续性警示，局部）",
        companies: "软银及GE Vernova、Bloom Energy等发电设备供应商",
        industry: "AI数据中心、电力设备、能源基础设施",
        logic: "软银37亿美元预付款减值揭示了AI基建「抢跑式采购」的沉没成本风险，与CoreWeave「需求强劲」形成对照，提示数据中心投资节奏放缓与资本纪律化的深层信号；若扩散，将压制电力设备与数据中心产业链估值"
      }
    },
    {
      title: "英伟达董事会聘请前联邦检察官Joon H. Kim开展独立调查，治理风波进入程序化阶段",
      originalTitle: "Nvidia board hires former prosecutor for independent investigation into Jensen Huang allegations",
      source: "CNBC（英文财经媒体一手）",
      time: "2026年11月10日",
      type: "财经媒体",
      url: "https://www.cnbc.com/2026/11/10/nvidia-board-hires-former-prosecutor-joon-h-kim.html",
      link: "https://www.cnbc.com/2026/11/10/nvidia-board-hires-former-prosecutor-joon-h-kim.html",
      summary: "据CNBC报道，英伟达董事会已聘请前纽约南区联邦检察官Joon H. Kim及其律所Wachtell, Lipton, Rosen & Katz，就CEO黄仁勋相关指控开展「全面且独立」的调查。调查背景是The Information此前报道黄仁勋与中国籍女性的关系或涉至少75亿美元芯片流向中国企业（含对华禁售芯片），且黄仁勋须在11月11日前答复三个众议院委员会的简报要求。尽管11月11日英伟达随AI板块反弹收涨2.87%，但治理与国家安全层面的不确定性仍是悬于该股之上的独立风险因子。",
      impact: {
        direction: "中性偏空（治理风险程序化，但未出结论）",
        companies: "英伟达及AI算力供应链",
        industry: "半导体、GPU、AI算力",
        logic: "独立调查启动意味着丑闻进入正式程序，短期虽被板块反弹掩盖，但若调查坐实对华违规销售或机密泄露，英伟达可能面临出口管制合规与监管的持久约束，构成比财报更持久的下行风险"
      }
    }
  ],

  /* ============ 六、当日最值得关注的 3 个交易逻辑 ============ */
  logics: [
    { title: "AI需求验证压倒泡沫担忧：CoreWeave财报成为「AI交易重燃」的扳机",
      text: "11月11日市场的核心逻辑切换，是CoreWeave超预期财报（营收+168%、上调全年指引、积压订单1325亿美元）与「不再发无担保债」的声明，一举化解了近期压制AI板块的核心担忧——「举债扩张的AI基建难以为继」。英伟达扭转两日累跌9%、费半暴涨5.66%、存储与光通信全面反弹，均源于同一逻辑：AI算力需求是真实的，资本开支有合同支撑。但需警惕，这一逻辑与软银37亿美元预付款减值形成对照——AI基建既有「需求强劲」的一面，也有「抢跑式投入」的沉没成本风险，二者将在未来财报季持续拉锯。" },
    { title: "Anthropic IPO成为AI资产定价的新锚：估值从「腰斩」到「上调」的剧烈摆动",
      text: "Anthropic IPO路演需求旺盛，投行考虑将估值上调至1.5万亿美元上方，与数日前「估值或降至1万亿、IPO延后」的悲观预期形成鲜明反转。谷歌、英伟达各100亿美元、合计260亿美元的基石私募配售，既为发行提供了需求锚点，也凸显了算力巨头对AI应用层的战略卡位。高盛预计其2030年营收达6850亿美元、算力支出近4000亿美元。Anthropic从「烧钱叙事」到「增长定价」的切换，是衡量AI赛道情绪温度的关键指标——其11月19日定价结果将成为市场检验AI资产真实估值容忍度的试金石。" },
    { title: "利率压力仍在高位：12月加息概率约90%，AI反弹的持续性受制于「更高更久」的利率环境",
      text: "尽管11月11日AI板块强势反弹，但宏观背景并未改善：10月CPI环比+0.4%超预期，CME FedWatch显示12月加息25bp概率已升至约90%，前一日10年期美债收益率升至5%上方（周三退伍军人节债市休市）。这意味着AI反弹是在「需求验证」与「利率压制」两种力量并存下的修复，而非趋势反转。对高估值成长科技股而言，贴现率抬升仍是中期估值的天花板；CoreWeave等neocloud的高杠杆与高利息支出，在「更高更久」的利率环境下仍是悬而未决的风险。" }
  ],

  /* ============ 七、未来 1—3 个交易日关注事项（具体事件） ============ */
  watchlist: [
    { date: "11月12日（周四）", event: "美国10月PPI、初请失业金人数（BLS发布）", impact: "CPI超预期后，PPI是判断12月加息幅度（25bp vs 50bp）的又一关键变量，直接决定利率敏感科技股的估值方向" },
    { date: "11月12日（周四）", event: "Nebius 盘前发布财报（neocloud板块）", impact: "继CoreWeave之后，Nebius财报将验证AI算力需求的广度，若同样超预期或进一步推升AI云板块情绪" },
    { date: "11月17日（周二）", event: "英伟达财报（2026财年Q3，叠加黄仁勋丑闻后的治理担忧）", impact: "数据中心营收、利润率与指引是检验英伟达基本面能否经受丑闻冲击的核心；财报强劲或缓解治理担忧、带动芯片板块修复" },
    { date: "11月19日（周四）", event: "Anthropic IPO 定价（代码ANT，高盛主承销）", impact: "史上规模最大IPO的最终定价是AI资产估值容忍度的试金石；若上调至1.5万亿美元上方或提振AI情绪，折价则反向冲击" },
    { date: "持续关注", event: "英伟达董事会独立调查进展（前检察官Joon H. Kim主导，涉华芯片流向指控）", impact: "调查若坐实对华违规销售或机密泄露，可能触发出口管制合规与监管的持久约束，重塑AI算力供应链格局" }
  ],

  /* ============ 八、页脚免责声明 ============ */
  disclaimer:
    "本报告基于公开市场信息整理，仅供华泰期货内部研究参考，不构成任何投资建议。股价数据以交易所官方为准；新闻以原始来源（SEC / 白宫 / BIS / Treasury / BEA / BLS / Federal Reserve / Reuters 等）为准。投资有风险，决策需谨慎。"
};
