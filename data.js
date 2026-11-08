/**
 * ============================================================
 *  美股科技板块前一交易日行情日报 —— 数据文件（每日只需改这里）
 *  （2026-11-08 更新：对应美股交易日 2026-11-06）
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
    reportDate: "2026年11月08日",   // 报告发布日期（周日）
    tradeDate: "2026年11月06日",    // 对应美股交易日（前一交易日，周五）
    author: "华泰期货 · 研究",
    tag: "每日市场跟踪"
  },

  /* ============ 二、市场概览 ============ */
  overview: {
    /* 简短概括：指数变化 + 个股变化 + 重大事件 */
    text: "11月6日（周五）美股在周四「AI交易大撤退」血洗后迎来技术性反弹，科技股与半导体领涨：纳指+1.09%至24,579.43、标普500+0.31%至7,376.86，道指逆势-0.46%至51,285.73；费城半导体指数大涨4.2%（周四曾创2025年4月来最大单日跌幅）。英伟达+2.8%（周三曾创2025年1月DeepSeek冲击以来最大单日跌幅）、AMD+11%、英特尔/美光/闪迪普涨5%~11%、特斯拉+4.2%、SpaceX+8.6%。但纳指周线仍四连跌（本周-3.37%）、标普500创逾一年最差单周，指数较一个月前高点仍处约10%的技术性修正区间。反弹核心驱动：①10月非农就业+16.5万远超预期、失业率降至4.1%，但12月加息概率升至约78%压制估值；②超跌反弹与逢低买入（Truist称「AI仍是本轮牛市主导主题」）；③微软缩减neocloud合作（不续约甲骨文、优先自建数据中心）引发AI资本开支结构重估。",
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
    { name: "AMD", code: "AMD", change: "-0.00%", type: "超涨", reason: "11月6日单日大涨约11%，为前一日17.26%暴跌后的强势反弹，回补11月3日Q3财报（营收+45%、数据中心+97%）超预期后的涨幅；AI交易超跌反弹下高Beta芯片股领涨" },
    { name: "Micron", code: "MU", change: "-0.00%", type: "超涨", reason: "11月6日大涨约5%~10%（多源报道5%至11%区间），存储股自前一日暴跌后强劲反弹；费半+4.2%、AI硬件全线上涨带动超跌修复" },
    { name: "SanDisk", code: "SNDK", change: "-0.00%", type: "超涨", reason: "11月6日反弹近4%（前一日暴跌约22.26%），存储板块超跌反弹；但周线仍大幅回撤，波动率与资金拥挤度仍高" }
  ],

  /* ============ 四、重点公司行情表 ============ */
  /* 超涨/超跌个股放最上方；无新闻的公司驱动因素简要说明即可 */
  stocks: [
    { name: "NVIDIA",    code: "NVDA",  change: "-0.00%", driver: "上涨约2.8%至186.64，自周三（DeepSeek冲击以来最大单日跌幅）后反弹；作为AI算力核心标的获逢低买入，Truist称「AI仍是本轮牛市主导主题」" },
    { name: "Microsoft", code: "MSFT",  change: "-0.00%", driver: "下跌约0.98%，大型科技股中偏弱；CNBC报道微软缩减neocloud合作伙伴、不续约甲骨文AI算力租约、优先自建数据中心，市场担忧其AI资本开支与第三方合作模式转变" },
    { name: "Apple",     code: "AAPL",  change: "-0.00%", driver: "下跌约0.51%，七巨头中相对抗跌；资金面稳健，投资者视其为AI基建烧钱叙事的避风港" },
    { name: "Amazon",    code: "AMZN",  change: "-0.00%", driver: "下跌约0.33%，超大规模云厂商表现分化；AWS资本开支与数据中心监管不确定性仍是市场关注焦点" },
    { name: "Alphabet",  code: "GOOGL", change: "-0.00%", driver: "上涨约0.75%，谷歌AI基础设施投入（如怀俄明170亿美元数据中心）展现韧性，通信服务板块领涨0.51%" },
    { name: "Meta",      code: "META",  change: "-0.00%", driver: "上涨约0.84%，前期重挫后企稳；同日宣布暂停更新出版商爬取条款（原定11/20生效），回应监管与版权争议" },
    { name: "Broadcom",  code: "AVGO",  change: "-0.00%", driver: "上涨约4.5%，AI定制芯片（ASIC）叙事随半导体板块反弹修复，前一日超跌后资金回补" },
    { name: "AMD",       code: "AMD",   change: "-0.00%", driver: "大涨约11%至449.04，为11月6日最强个股之一；前一日17.26%暴跌后强势反弹，回补11月3日Q3财报（数据中心+97%）超预期涨幅" },
    { name: "Micron",    code: "MU",    change: "-0.00%", driver: "大涨约5%~10%（多源报道5%至11%区间），存储股自前一日暴跌后强劲反弹；HBM/DRAM景气逻辑未变，超跌资金回补" },
    { name: "SanDisk",   code: "SNDK",  change: "-0.00%", driver: "反弹近4%至835.06，前一日暴跌约22.26%后技术性修复；但周线仍大幅回撤，NAND「超级周期」交易情绪仍偏谨慎" }
  ],

  /* ============ 五、重要科技与政策新闻（一手来源） ============ */
  news: [
    {
      title: "美股科技股超跌反弹，纳指涨1.09%、费半大涨4.2%，但周线四连跌、标普创逾一年最差单周",
      originalTitle: "Nasdaq rebounds but posts fourth straight weekly decline",
      source: "Reuters（经 Yahoo Finance 转载英文原文）",
      time: "2026年11月6日",
      type: "财经媒体",
      url: "https://finance.yahoo.com/technology/ai/articles/nasdaq-futures-rise-steep-ai-094400237.html",
      link: "https://finance.yahoo.com/technology/ai/articles/nasdaq-futures-rise-steep-ai-094400237.html",
      summary: "11月6日美股科技股在经历逾一年最惨重单日抛售后强势反弹。纳指收涨1.09%至24,579.43点（盘中一度涨2%），标普500涨0.32%至7,376.86点，道指跌0.46%至51,285.73点；费城半导体指数涨4.2%（前一日创2025年4月来最大单日跌幅）。英伟达涨2.8%（周三曾创2025年1月DeepSeek冲击以来最大跌幅），AMD涨11%、闪迪反弹近4%。Truist首席投资官Keith Lerner称「AI仍是本轮牛市主导主题，我们仍给予科技股疑虑下的信任」。但纳指本周仍跌3.4%、标普跌2.7%，指数较一个月前高点回落约10%进入修正区间，LPL的Adam Turnquist称本周为「膝跳反应」。",
      impact: {
        direction: "中性偏多（短期超跌反弹，中期调整未结束）",
        companies: "英伟达、AMD、闪迪、美光及AI算力、半导体产业链",
        industry: "半导体、AI基础设施、云计算",
        logic: "超跌反弹与逢低买入驱动科技股修复，但中期选举政策不确定性（数据中心监管）与利率预期仍压制估值，反弹持续性待观察"
      }
    },
    {
      title: "美国10月非农就业+16.5万远超预期、失业率降至4.1%，12月加息概率升至约78%",
      originalTitle: "Employment Situation Summary - October 2026",
      source: "美国劳工统计局 BLS（官方一手）",
      time: "2026年11月6日",
      type: "官方",
      url: "https://www.bls.gov/news.release/empsit.nr0.htm",
      link: "https://www.bls.gov/news.release/empsit.nr0.htm",
      summary: "美国劳工统计局11月6日公布，10月非农就业增加16.5万人，远超市场预期（约6.5万），显著高于过去12个月4.8万的月均增幅；失业率降至4.1%（前值4.2%），劳动参与率升至61.9%（3月来最高）。8月数据由13.3万上修至18.6万、9月由2.9万上修至6.0万，两月合计上修8.4万。私营部门平均时薪环比+0.4%、同比+3.1%。就业强劲增强美联储加息空间，CME FedWatch显示市场对12月加息的概率升至约78%（较前一日70%上升）。",
      impact: {
        direction: "利空（利率敏感的成长科技股）",
        companies: "高估值成长科技股整体",
        industry: "宏观经济、利率敏感板块",
        logic: "就业强劲+薪资增速维持，强化「更高更久」利率预期，抬升成长股贴现率，对反弹中的科技股构成估值压制"
      }
    },
    {
      title: "微软缩减neocloud合作伙伴、不续约甲骨文AI算力租约，优先自建数据中心，引发AI资本开支结构重估",
      originalTitle: "Microsoft plans to use fewer neoclouds as AI buildout shows signs of strain",
      source: "CNBC（英文财经媒体一手）",
      time: "2026年11月6日",
      type: "财经媒体",
      url: "https://www.cnbc.com/2026/11/06/microsoft-moves-to-consolidate-its-relationships-with-neoclouds-in-ai.html",
      link: "https://www.cnbc.com/2026/11/06/microsoft-moves-to-consolidate-its-relationships-with-neoclouds-in-ai.html",
      summary: "CNBC援引知情人士报道，微软正缩减其「neocloud」（专用AI算力云）合作伙伴名单，聚焦少数关键供应商并优先建设自有数据中心。微软近年与CoreWeave、Nebius、Chronoscale、IREN、Lambda、Nscale及甲骨文等签订算力合同，但两名消息人士称微软已决定不续约甲骨文的一项协议（此前微软已退出Nscale英国项目）。CFO Amy Hood在10月财报电话会表示部分GPU云合同延迟至2027年上半年、拖累Azure增长。微软最新季度资本开支及融资租赁达452亿美元。分析认为，借贷成本上升、neocloud债务高企及AI建设放缓担忧正压缩该细分市场，CoreWeave、Nebius、IREN股价过去一个月已跌约一半。",
      impact: {
        direction: "中性偏空（neocloud/第三方算力，利多微软自建链）",
        companies: "微软、甲骨文、CoreWeave、Nebius、IREN及neocloud产业链",
        industry: "AI云计算、数据中心、GPU算力租赁",
        logic: "微软「算力回流自建」释放AI资本开支从「量」向「质/自持」切换的信号，利好微软自身与自建设备链，利空高度依赖单一客户的neocloud高负债企业"
      }
    },
    {
      title: "OpenAI完成110亿美元首批融资、估值降至1.25万亿美元；Anthropic IPO估值预期下调至1.2万亿—1.3万亿美元",
      originalTitle: "OpenAI closes $11 billion funding at $1.25 trillion valuation; Anthropic IPO in turmoil",
      source: "Reuters（经 AOL 转载英文原文）",
      time: "2026年11月6日",
      type: "财经媒体",
      url: "https://www.aol.com/articles/openai-secures-11-billion-funding-211219000.html",
      link: "https://www.aol.com/articles/openai-secures-11-billion-funding-211219000.html",
      summary: "路透11月6日援引知情人士报道，OpenAI已完成110亿美元首批融资，对应估值1.25万亿美元，软银与MGX参投。此轮原目标最高300亿美元、估值1.5万亿美元，已明显下调；剩余部分预计未来数周内完成，总规模或约200亿美元。与此同时，受AI抛售潮冲击，Anthropic计划下周启动IPO路演，但部分潜在投资者对其估值预期已从最高约2万亿美元降至1.2万亿—1.3万亿美元，三位主要投资者认为1.5万亿美元目标难以实现。分析指，前沿AI实验室的私人估值正被公开市场的恐慌情绪重新定价，AI融资纪律出现标志性收紧。",
      impact: {
        direction: "利空（AI估值/融资情绪）",
        companies: "OpenAI、Anthropic及AI创业生态、英伟达等AI算力需求方",
        industry: "AI大模型、AI基础设施、风险投资",
        logic: "前沿AI公司估值与融资规模同步下修，反映市场对AI资本回报质量的质疑加深，短期压制AI资产风险偏好"
      }
    },
    {
      title: "德州候任州长Hinojosa重申暂停数据中心建设，中期选举后AI基础设施监管担忧持续发酵",
      originalTitle: "Texas Governor-elect to pause data center buildout pending protections",
      source: "Reuters / CNBC（英文财经媒体，经多源交叉核对）",
      time: "2026年11月6日",
      type: "财经媒体",
      url: "https://finance.yahoo.com/markets/world-indices/articles/asia-stocks-drop-ai-rout-235808955.html",
      link: "https://finance.yahoo.com/markets/world-indices/articles/asia-stocks-drop-ai-rout-235808955.html",
      summary: "德州候任州长（民主党）Gina Hinojosa 11月5日晚表示，该州将立法保护居民、在保护措施到位前停止数据中心建设。德州已占据美国数据中心容量较大份额，此举延续了中期选举后民主党在联邦及州层面带来的政策不确定性。Sparrow Capital Management总裁Gerry Sparrow指出，「AI建设的大部分中断未必发生，但共和党主导转向民主党主导（联邦及州、地方层面）的不确定性正在扰动投资者预期」。分析认为，虽Hinojosa等要到明年1月才上任，但投资者担忧可能持续，数据中心许可、电力与水资源监管风险仍是压制AI基础设施股的关键变量。",
      impact: {
        direction: "利空（AI数据中心与半导体）",
        companies: "英伟达、AMD、美光、博通及数据中心/电力产业链",
        industry: "AI数据中心、半导体、电力与能源",
        logic: "数据中心建设暂停担忧构成AI资本开支兑现节奏的最大不确定性，是本周科技股暴跌与反弹受限的核心政策变量"
      }
    },
    {
      title: "马斯克称SpaceX第四季度营收环比增长约70%、12月有望实现1000亿美元年化营收，SpaceX大涨8.6%",
      originalTitle: "SpaceX rallies as Musk touts fourth-quarter revenue growth",
      source: "Reuters / Bloomberg（英文财经媒体，经多源交叉核对）",
      time: "2026年11月6日",
      type: "财经媒体",
      url: "https://finance.yahoo.com/markets/world-indices/articles/asia-stocks-drop-ai-rout-235808955.html",
      link: "https://finance.yahoo.com/markets/world-indices/articles/asia-stocks-drop-ai-rout-235808955.html",
      summary: "SpaceX 11月6日收涨8.62%至134.27美元，创8月12日来最大单日涨幅，此前两个交易日累跌约9%。马斯克在巴伦年度投资大会表示，SpaceX第四季度营收将较第三季度增长约70%，重申12月有望实现1000亿美元年化营收、2027年底突破5000亿美元；来自美国政府机构的收入本季度将降至总营收10%以下（上季为16.6%）。此外Anthropic目前是SpaceX单一最大客户，贡献逾三分之一季度营收。特斯拉同日亦涨4.2%。",
      impact: {
        direction: "利好（SpaceX及AI算力需求验证）",
        companies: "SpaceX、特斯拉、Anthropic",
        industry: "AI算力、商业航天、云计算",
        logic: "SpaceX强劲营收指引为AI算力实际需求提供正向验证，缓解「AI资本开支空转」担忧，带动相关高Beta科技股反弹"
      }
    }
  ],

  /* ============ 六、当日最值得关注的 3 个交易逻辑 ============ */
  logics: [
    { title: "超跌反弹 vs 中期调整：科技股「膝跳式」修复不改中期选举政策不确定性这一核心压制",
      text: "周五的反弹本质是周四「AI交易大撤退」后的超跌修复与逢低买入，LPL的Adam Turnquist直言这是「膝跳反应」、Truist仍坚定看好AI主线。但纳指周线四连跌、标普创逾一年最差单周、指数较一个月前高点仍处约10%修正区间，说明反弹尚未扭转中期调整。核心矛盾在于：民主党横扫国会并夺得多州州长席位，德州候任州长主张暂停数据中心建设，AI资本开支兑现节奏面临政策重估——这是「AI交易」成立的根本前提被挑战，而非单纯估值消化。" },
    { title: "AI资本开支从「量」转向「质」：微软缩减neocloud、OpenAI/Anthropic估值下修，融资纪律收紧",
      text: "微软不续约甲骨文算力租约、缩减neocloud名单并优先自建数据中心，叠加OpenAI融资目标从300亿砍至约200亿、估值降至1.25万亿，以及Anthropic IPO估值预期从2万亿降至1.2-1.3万亿，共同指向一个转折：市场对AI的定价正从「烧钱规模」转向「资本纪律与回报质量」。高负债的neocloud（CoreWeave、Nebius、IREN等）股价一个月跌约一半，成为最脆弱环节；而自持算力、现金流稳健的超大规模云厂商相对受益。" },
    { title: "利率路径是反弹的天花板：10月非农超预期强化「更高更久」，12月加息概率升至约78%",
      text: "10月非农+16.5万远超预期、失业率降至4.1%、薪资同比+3.1%，叠加8/9月合计上修8.4万，就业韧性强化了美联储12月加息的依据，CME FedWatch显示12月加息概率升至约78%。在AI政策不确定性之外，「更高更久」的利率预期构成成长股估值的第二重压制。科技股反弹的高度将取决于利率预期与后续通胀数据（下周CPI）的走向，若加息预期进一步升温，反弹空间受限。" }
  ],

  /* ============ 七、未来 1—3 个交易日关注事项（具体事件） ============ */
  watchlist: [
    { date: "11月9日（周一）当周", event: "Anthropic IPO 路演（原定11月9日当周启动，估值预期已下调至1.2万亿—1.3万亿美元）", impact: "若路演延迟或定价大幅折价，将进一步冲击AI资产情绪；S-1中留空的10月营收数据是关键观察点" },
    { date: "11月9日—13日", event: "CoreWeave、Nebius 季度财报（微软缩减neocloud合作后市场高度关注）", impact: "neocloud财报与指引将检验「微软算力回流」对第三方算力企业的实际冲击，影响AI数据中心产业链" },
    { date: "下周", event: "美国10月CPI通胀数据", impact: "在非农超预期后，CPI是12月是否加息的另一关键变量，直接决定利率敏感科技股的估值方向" },
    { date: "11月中下旬", event: "英伟达财报（AI算力景气度与「数据中心建设放缓」担忧的关键验证）", impact: "英伟达指引是判断AI资本开支真实需求的核心，本周反弹后市场或提前定价" },
    { date: "持续关注", event: "德州候任州长Gina Hinojosa等民主党州长上任（明年1月）前数据中心政策动向", impact: "任何暂停数据中心建设或取消税收优惠的落地信号，都将压制AI基础设施、芯片、存储与电力产业链" }
  ],

  /* ============ 八、页脚免责声明 ============ */
  disclaimer:
    "本报告基于公开市场信息整理，仅供华泰期货内部研究参考，不构成任何投资建议。股价数据以交易所官方为准；新闻以原始来源（SEC / 白宫 / BIS / Treasury / BEA / BLS / Federal Reserve / Reuters 等）为准。投资有风险，决策需谨慎。"
};
