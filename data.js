/**
 * ============================================================
 *  美股科技板块前一交易日行情日报 —— 数据文件（每日只需改这里）
 *  （2026-10-19 更新：对应美股交易日 2026-10-16）
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
    reportDate: "2026年10月19日",   // 报告发布日期（周一）
    tradeDate: "2026年10月16日",    // 对应美股交易日（前一交易日，周五）
    author: "华泰期货 · 研究",
    tag: "每日市场跟踪"
  },

  /* ============ 二、市场概览 ============ */
  overview: {
    /* 简短概括：指数变化 + 个股变化 + 重大事件 */
    text: "10月16日美股科技板块遭重挫，三大指数集体收跌：道指-0.34%至52002.41、标普-1.09%至7659.44、纳指-2.15%至26140.03（周跌4.5%、6月以来最大单周跌幅）。费城半导体指数-3.83%至11137.29，连续第八日下跌，创2008年以来最长连跌纪录，科技股单日市值蒸发超1万亿美元。个股普跌：闪迪-6.85%、AMD-5.95%、美光-5.63%、博通-4.52%、Meta-3.72%，英伟达-1.43%相对抗跌，苹果+0.43%为七巨头中唯一收涨。核心利空为AI基建债务担忧（CoreWeave债券收益率升破15%、隐含5年违约概率约63%）叠加油价飙升（WTI+3.4%至101.35、布伦特+3.5%至109.55）。",
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
    { name: "SanDisk（闪迪）", code: "SNDK", change: "-0.00%", note: "超跌：单日大跌约6.85%至1299.30美元，为跟踪个股中跌幅最大；存储板块遭重挫，费半八连跌背景下，长鑫存储（CXMT）DRAM产能扩张引发的供应过剩担忧与AI基建债务危机共振压制存储股估值，DRAM主题ETF当日跌约5.5%" },
    { name: "AMD（超威半导体）", code: "AMD", change: "-0.00%", note: "超跌：单日下跌约5.95%至528.75美元，自10月6日高点658.52美元累跌近20%；费城半导体指数30只成分股全线收跌，AMD跌幅居前，市场质疑AI处理器需求是否恶化，抑或是对高估值科技股在借贷成本与财务风险审视下的重新定价" },
    { name: "Micron（美光）", code: "MU", change: "-0.00%", note: "超跌：单日下跌约5.63%至878.84美元，成交额26.82亿美元居全市场之首；存储芯片供应过剩担忧（中国CXMT DRAM进展）+AI基建债务融资恐慌双重压制，马斯克称'中国2028年将开始大规模DRAM生产'加剧竞争忧虑" }
  ],

  /* ============ 四、重点公司行情表 ============ */
  /* 超涨/超跌个股放最上方；无新闻的公司驱动因素简要说明即可 */
  stocks: [
    { name: "NVIDIA",    code: "NVDA",  change: "-0.00%", driver: "下跌约1.43%至214.13美元，在费半30只成分股全线收跌中相对抗跌（指数-3.83%），年初至今仍涨约15%；黄仁勋在柏林受访安抚市场称AI变革'才刚刚开始'，但CoreWeave债务危机仍压制AI算力供应链情绪" },
    { name: "AMD",       code: "AMD",   change: "-0.00%", driver: "下跌约5.95%至528.75美元，费半八连跌背景下跌幅居前；距10月6日高点累跌近20%，市场质疑AI处理器需求前景，Q3指引（营收约130亿美元、同比约41%）下的高估值承压" },
    { name: "Micron",    code: "MU",    change: "-0.00%", driver: "下跌约5.63%至878.84美元、成交额居全市场之首；存储供应过剩担忧（CXMT DRAM进展）与AI基建债务融资恐慌共振，DRAM主题ETF当日跌约5.5%" },
    { name: "Microsoft", code: "MSFT",  change: "-0.00%", driver: "下跌约1.93%至529.05美元；AI软件/云板块随科技股整体走弱，Palantir-7.22%、Oracle-4.64%拖累，网络安全股Palo Alto-6.40%、CrowdStrike-6.93%亦重挫" },
    { name: "Alphabet",  code: "GOOGL", change: "-0.00%", driver: "下跌约2.47%至340.59美元；作为Anthropic战略投资人，Anthropic IPO估值下调至1.5万亿美元（较此前约2万亿缩水）拖累其账面估值叙事" },
    { name: "Amazon",    code: "AMZN",  change: "-0.00%", driver: "下跌约1.87%至250.00美元；同为Anthropic战略投资人，AI估值预期下修+大盘避险情绪压制成长股" },
    { name: "Apple",     code: "AAPL",  change: "-0.00%", driver: "逆势上涨约0.43%至343.46美元，为'科技七巨头'中唯一收涨；现金流型蓝筹避险属性凸显，资金从高杠杆AI基建向防御性消费科技迁移" },
    { name: "Meta",      code: "META",  change: "-0.00%", driver: "大跌约3.72%至709.33美元，为七巨头中跌幅最大；Muse智能体等AI应用层估值回吐，10月22日前后Q3财报临近、AI资本开支回报担忧升温" },
    { name: "Broadcom",  code: "AVGO",  change: "-0.00%", driver: "下跌约4.52%至328.75美元；OpenAI/Anthropic定制ASIC高负债融资叙事受AI债务担忧拖累，费半八连跌中跌幅居前" },
    { name: "SanDisk",   code: "SNDK",  change: "-0.00%", driver: "大跌约6.85%至1299.30美元，为跟踪个股中跌幅最大；存储供应过剩担忧与AI基建债务危机双重压制，长鑫存储DRAM竞争忧虑升温" }
  ],

  /* ============ 五、重要科技与政策新闻（一手来源） ============ */
  news: [
    {
      title: "美股周五重挫：AI债务担忧与油价飙升双重压制，纳指周跌4.5%创6月来最大单周跌幅",
      originalTitle: "Wall Street tumbles as worries about AI trade and high oil prices weigh",
      source: "Reuters（经 StreetInsider 转载）",
      time: "2026年10月16日",
      type: "财经媒体",
      url: "https://www.streetinsider.com/Market+Check/Wall+St+set+for+muted+open+as+tech+wobble+persists%3B+Tesla+gains/27195576.html",
      link: "https://www.streetinsider.com/Market+Check/Wall+St+set+for+muted+open+as+tech+wobble+persists%3B+Tesla+gains/27195576.html",
      summary: "华尔街周五重挫，CoreWeave、博通等AI相关科技股再度承压，油价飙升令交易员在周末前趋于谨慎。纳指本周跌逾4%，受高负债AI基建公司可能无法及时盈利偿债（尤其借贷成本料上行）的担忧打压。英伟达支持的CoreWeave暴跌12%、五个交易日累跌约25%，其债券本周遭大幅抛售、收益率升破15%；博通跌3.6%，费城半导体指数八连跌。油价因中东供应忧虑跳涨逾3%。美股银行财富管理策略师Rob Haworth表示'高油价尤其倾向于压制股票市盈率'。路透援引知情人士称，部分Anthropic现有及潜在投资者正权衡下调其IPO估值。标普500周跌约2%、录得1月以来最大单周跌幅，纳指录得6月以来最差单周表现。",
      impact: {
        direction: "利空（AI/半导体）",
        companies: "CoreWeave、英伟达、博通、AMD、美光、Anthropic",
        industry: "AI基础设施、半导体、原油、利率",
        logic: "AI债务融资可持续性担忧从个股（CoreWeave）向整个AI/半导体板块传染，叠加高油价推升通胀与利率预期，形成'估值+融资成本'双重压制，是周五科技股普跌的直接驱动"
      }
    },
    {
      title: "CoreWeave债务成市场焦点：债券收益率升破15%、隐含5年违约概率约63%，费半八连跌创2008年来最长",
      originalTitle: "Chip Stocks' Eight-Day Losing Streak: Longest Since 2008",
      source: "24/7 Wall St. / S3 Partners / Bloomberg（经 Metir AI 汇总）",
      time: "2026年10月16日",
      type: "行业媒体",
      url: "https://www.metirai.com/blog/sox-eight-day-losing-streak-longest-since-2008-ai-capex-doubts-2026",
      link: "https://www.metirai.com/blog/sox-eight-day-losing-streak-longest-since-2008-ai-capex-doubts-2026",
      summary: "费城半导体指数10月16日收跌3.83%至11137.29点，连续第八个交易日下跌，为2008年10月以来最长连跌纪录。据24/7 Wall St.统计，科技股当日市值蒸发超1万亿美元；S3 Partners数据（经彭博）显示，过去七个交易日做空半导体的空头浮盈约320亿美元。CoreWeave周五跌近12%、周累跌约25%，总债务超500亿美元、2032年到期债券收益率逼近15%。AMD跌5.95%、英特尔跌5.79%、美光跌5.63%、Marvell跌5.56%、KLA跌5.00%、Lam跌4.87%、应用材料跌4.82%、博通跌4.52%，英伟达跌1.43%相对抗跌。美银分析师Sebastian Raedler指出超大规模云厂商资本开支预测已从2025年初3300亿美元翻三倍至1万亿美元，而'历史上多数重大资本周期都以失望告终'。",
      impact: {
        direction: "利空（半导体/存储）",
        companies: "AMD、英特尔、美光、博通、英伟达、Marvell、KLA、Lam、应用材料、CoreWeave",
        industry: "半导体、存储、AI芯片、AI基础设施",
        logic: "CoreWeave高收益债融资模式遭信用市场定价为困境，'芯片厂-云厂商-OpenAI/Meta'循环融资链条脆弱性被重新审视，叠加存储竞争与加息预期，引发半导体八连跌、空头大幅获利"
      }
    },
    {
      title: "油价飙升：WTI涨3.4%至101.35美元，特朗普涉伊'镐头山'言论推升地缘风险，Eurasia将冲突升级概率上调至65%",
      originalTitle: "Market News Roundup — Oct 16: Nasdaq Selloff, CoreWeave Rout, Oil Surge",
      source: "Bullounge（援引 Reuters/Newsmax/CNN/CBS）",
      time: "2026年10月16日",
      type: "财经媒体",
      url: "https://bullounge.com/?p=2501",
      link: "https://bullounge.com/?p=2501",
      summary: "周五国际油价大涨逾3%：WTI原油涨3.4%至101.35美元、布伦特涨3.5%至109.55美元，此前特朗普在Newsmax采访中将伊朗冲突重新置于市场中心，称美国'可能不得不前往'伊朗核计划相关设防地点'镐头山'（Pickaxe Mountain）。他排除了核武器与地面部队，但未排除使用GBU-43/B'炸弹之母'（可能在11月3日中期选举后）。CNN与CBS分别证实五角大楼已制定针对伊朗能源基础设施与核设施的打击计划。Eurasia Group将冲突升级概率由35%上调至65%。IEA成员国同意释放3月紧急计划剩余1亿桶原油储备，含约2000万桶柴油。",
      impact: {
        direction: "利空（通胀/利率/成长股估值）",
        companies: "大型科技、半导体、AI基建（高估值成长股）",
        industry: "原油、地缘政治、通胀、利率",
        logic: "油价重回100美元上方强化通胀压力与'加息预期+高油价压制市盈率'逻辑，与PPI超预期形成共振，直接压制高估值科技股的估值倍数，是周五避险情绪的重要宏观推手"
      }
    },
    {
      title: "Anthropic IPO估值下调至约1.5万亿美元，Q3营收增速自147%骤降至45%，AI商业化回报遭重新审视",
      originalTitle: "Anthropic IPO: The $2 Trillion Test Gets Harder",
      source: "Reuters（经 Bullounge 汇总）",
      time: "2026年10月16日",
      type: "财经媒体",
      url: "https://bullounge.com/?p=2501",
      link: "https://bullounge.com/?p=2501",
      summary: "路透报道，投资者正权衡将Anthropic的IPO估值定为约1.5万亿美元，低于此前预期的约2万亿美元。这一下调源于周三旧金山投资者日披露的数据：Q3营收168亿美元、环比增45%，但较Q2的147%增速大幅放缓。该公司计划11月9日当周启动路演、11月中旬上市，募资规模或高达1000亿美元。看多方（如Gavin Baker）指出其调整后自由现金流已转正、10月增速回升。Anthropic上市将成为公开市场是否愿以数万亿美元价格投资'债务驱动型AI基础设施'的首次检验，而CoreWeave暴跌则是其反面论据。",
      impact: {
        direction: "中性偏空（AI应用/估值情绪）",
        companies: "Anthropic、亚马逊、谷歌（战略投资人）",
        industry: "AI大模型、AI应用、一级市场融资",
        logic: "AI独角兽增速放缓叠加估值下修，印证市场对AI'高增长能否兑现高估值'的疑虑加深，与AI基建债务担忧形成呼应，拖累AI应用层及战略投资人账面估值"
      }
    },
    {
      title: "美国9月PPI同比6.3%创2022年12月来新高、零售销售超预期，通胀压力向能源之外扩散",
      originalTitle: "Wall Street tumbles as worries about AI trade and high oil prices weigh",
      source: "Reuters（经 StreetInsider 转载）",
      time: "2026年10月16日",
      type: "财经媒体",
      url: "https://www.streetinsider.com/Market+Check/Wall+St+set+for+muted+open+as+tech+wobble+persists%3B+Tesla+gains/27195576.html",
      link: "https://www.streetinsider.com/Market+Check/Wall+St+set+for+muted+open+as+tech+wobble+persists%3B+Tesla+gains/27195576.html",
      summary: "本周公布的美国9月PPI与CPI均超预期，显示通胀压力正从能源商品向更广泛领域扩散。路透报道称'高于预期的消费者与生产者通胀报告显示价格压力已延伸至能源大宗商品之外'。10年期美债收益率收于约5.097%、30年期约5.436%，但本周因避险买盘录得逾一年最大单周跌幅。美联储主席Kevin Warsh（沃勒）周五对经济强劲表达乐观，并惊讶于全球各经济体在能源冲击与紧缩货币政策下'仍能如此坚挺'。市场愈发预期美联储本月维持利率不变，巴克莱预计12月与1月各加息25个基点。",
      impact: {
        direction: "中性（利率路径）",
        companies: "大型科技、半导体、AI基建（高杠杆企业）",
        industry: "宏观、货币政策、通胀、美债",
        logic: "通胀超预期强化'高利率更持久'预期，直接推升AI基建融资成本、压制高估值成长股；但避险买盘带动长端收益率周度回落，构成短期矛盾的宏观背景"
      }
    },
    {
      title: "存储芯片遭重挫：DRAM主题ETF单日跌约5.5%，长鑫存储竞争与供应过剩担忧升温",
      originalTitle: "Chip Stocks' Eight-Day Losing Streak: Longest Since 2008",
      source: "Briefs / BigGo / 24/7 Wall St.（经 Metir AI 汇总）",
      time: "2026年10月16日",
      type: "行业媒体",
      url: "https://www.metirai.com/blog/sox-eight-day-losing-streak-longest-since-2008-ai-capex-doubts-2026",
      link: "https://www.metirai.com/blog/sox-eight-day-losing-streak-longest-since-2008-ai-capex-doubts-2026",
      summary: "存储芯片板块周五领跌半导体，Roundhill Memory ETF（DRAM）跌约6%，周初至周四已跌14%。美光跌5.63%、闪迪跌6.85%、SK海力士ADR跌6.58%、希捷跌7.50%。供应端方面，长鑫存储（CXMT）在DRAM技术上的进展引发市场对未来供给与定价的担忧；马斯克在X平台称'中国2028年将开始大规模DRAM生产'，进一步加剧存储竞争忧虑。存储股此前受益于AI驱动的HBM需求高景气，如今在'供应过剩+AI债务担忧'双重逻辑下遭到集中抛售。",
      impact: {
        direction: "利空（存储）",
        companies: "美光、闪迪、SK海力士、希捷、西部数据",
        industry: "存储芯片、DRAM、HBM",
        logic: "存储周期逻辑从'AI需求驱动的供不应求'转向'中国产能扩张引发的供应过剩担忧'，叠加AI基建债务恐慌，成为周五存储板块重挫的直接驱动"
      }
    },
    {
      title: "黄仁勋安抚市场称AI变革'才刚刚开始'，但信用市场仍定价AI基建债务违约风险",
      originalTitle: "US STOCKS-Wall Street ends down sharply; worries about AI trade and high oil prices weigh",
      source: "Reuters（经 Capital.com 转载）",
      time: "2026年10月16日",
      type: "财经媒体",
      url: "https://capital.com/en-eu/news/us-stocks-wall-street-ends-down-sharply-worries-about-ai-trade",
      link: "https://capital.com/en-eu/news/us-stocks-wall-street-ends-down-sharply-worries-about-ai-trade",
      summary: "面对AI板块再度重挫，英伟达CEO黄仁勋在柏林受访安抚市场：'这一切都会过去，原因其实很简单，这（AI）将会带来变革，对每一个行业、每一个国家都会产生积极影响，毫无疑问这一趋势还会持续下去，而我们现在才刚刚开始。'然而信用市场仍高度紧张：CoreWeave 2032年到期债券收益率逼近15%，CDS隐含5年违约概率升至约63%（一年前约30%）。Cantor Fitzgerald则称当前恐慌为'散布恐惧'，重申'增持'评级与176美元目标价，并指出CoreWeave 2027年上线的算力产能已几乎售罄。",
      impact: {
        direction: "中性偏空（AI基建融资链）",
        companies: "英伟达、CoreWeave、Meta、OpenAI",
        industry: "AI基础设施、数据中心、信用市场",
        logic: "黄仁勋背书缓解极端情绪，但信用市场定价的违约风险高企揭示AI基建'循环融资'脆弱性未解；'需求强劲但融资成本上升'的矛盾是当前AI板块承压的根本逻辑"
      }
    }
  ],

  /* ============ 六、当日最值得关注的 3 个交易逻辑 ============ */
  logics: [
    { title: "「AI基建债务融资可持续性」取代「算力需求」成为主导变量，信用市场定价循环融资的脆弱性",
      text: "CoreWeave债券收益率升破15%、CDS隐含5年违约概率约63%，科技股单日市值蒸发超1万亿美元，费城半导体指数八连跌创2008年来最长。市场的定价核心已从'AI算力需求有多强'转向'靠高收益债融资的AI基建能否撑到盈利兑现'。路透点出要害：芯片厂（英伟达）与客户（Meta、OpenAI）之间通过同一批投资组合形成'循环'融资安排，一旦信用条件收紧，链条上的每一环——从GPU供应商到云厂商再到AI应用——都可能被波及。这是当前AI板块持续承压的根本逻辑，而非需求端恶化。" },
    { title: "高油价+超预期通胀重塑利率与估值预期，压制高估值成长股",
      text: "国际油价因中东地缘风险重回100美元上方（WTI 101.35、布伦特109.55），叠加9月PPI同比6.3%创2022年12月来新高，通胀压力向能源之外扩散。虽然避险买盘推动长端美债收益率周度回落（10年期约5.097%），但市场对'高利率更持久'的预期升温，巴克莱预计12月与1月各加息25bp。'高油价压制市盈率'（US Bank策略师Rob Haworth）与AI基建融资成本上升形成共振，成为高估值科技股估值收缩的宏观放大器。" },
    { title: "存储板块从'AI供不应求'转向'供应过剩担忧'，周期逻辑切换",
      text: "存储股周五领跌（美光-5.63%、闪迪-6.85%、SK海力士-6.58%），DRAM主题ETF单日跌约5.5%。此前支撑存储股大涨的'HBM需求景气'逻辑，正被长鑫存储（CXMT）DRAM技术进展与中国2028年大规模量产预期所挑战。马斯克'中国2028年将开始大规模DRAM生产'的表态加剧竞争忧虑。存储周期的定价从需求侧单边转向供需两侧博弈，叠加AI债务恐慌，形成双重压制。这一逻辑切换决定存储股后续的修复节奏与空间。" }
  ],

  /* ============ 七、未来 1—3 个交易日关注事项（具体事件） ============ */
  watchlist: [
    { date: "10月20日前后", event: "奈飞（NFLX）Q3财报", impact: "科技股财报季窗口，验证流媒体用户增长与内容资本开支；奈飞周四任命前迪士尼高管Peter Rice为首席内容官，需关注内容战略变化" },
    { date: "10月21日前后", event: "特斯拉（TSLA）Q3财报", impact: "验证电动车需求与AI/自动驾驶叙事，周五已因新版Roadster发布跌2.5%，财报是成长股情绪关键变量" },
    { date: "10月22日前后", event: "Meta Platforms（META）Q3财报", impact: "验证AI资本开支（Muse智能体）回报与广告业务韧性，是AI应用层估值核心检验" },
    { date: "10月22日前后", event: "宝洁（PG）等消费股财报", impact: "与科技股财报并行，反映消费需求与通胀挤压，影响整体风险偏好" },
    { date: "11月9日起", event: "Anthropic启动IPO路演（11月中旬上市，估值约1.5万亿美元）", impact: "公开市场对'债务驱动型AI基础设施'高估值的首次检验，是AI板块中期定价锚点" },
    { date: "10月27-28日", event: "美联储FOMC议息会议", impact: "市场预期维持利率不变（9月已加息25bp至3.75%-4.00%），巴克莱预计12月、1月各加息25bp，是科技股估值中期关键变量" }
  ],

  /* ============ 八、页脚免责声明 ============ */
  disclaimer:
    "本报告基于公开市场信息整理，仅供华泰期货内部研究参考，不构成任何投资建议。股价数据以交易所官方为准；新闻以原始来源（SEC / 白宫 / BIS / Treasury / BEA / BLS / Federal Reserve / Reuters 等）为准。投资有风险，决策需谨慎。"
};
