/**
 * ============================================================
 *  美股科技板块前一交易日行情日报 —— 数据文件（每日只需改这里）
 *  （2026-09-23 更新：对应美股交易日 2026-09-22）
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
    reportDate: "2026年09月23日",   // 报告发布日期（周三）
    tradeDate: "2026年09月22日",    // 对应美股交易日（前一交易日，周二）
    author: "华泰期货 · 研究",
    tag: "每日市场跟踪"
  },

  /* ============ 二、市场概览 ============ */
  overview: {
    /* 简短概括：指数变化 + 个股变化 + 重大事件 */
    text: "9月22日美股涨跌互现：纳指+0.45%至27243点再创收盘新高，标普-0.01%基本持平，道指-0.36%；费半+2.06%六连涨。存储领涨（闪迪+6.82%、美光+5.00%），大型科技分化（英伟达+0.66%、亚马逊-1.34%）。Meta AI智能体Muse爆红、Rosenblatt首予闪迪\"买入\"看2400美元，叠加美伊会谈油价回落，支撑半导体走强；银行股下挫拖累道指。",
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
      name: "SanDisk / 闪迪",
      code: "SNDK",
      direction: "超涨",
      change: "-0.00%",
      fiveDay: "9/16收1519.97（阶段低点）→ 9/17收1614.39（+6.21%）→ 9/18收1791.82（+10.99%）→ 9/21收1766.64（-1.41%）→ 9/22收约1888.56（+6.82%），自9/16低点四日累计约+24%",
      newHighLow: "收约1888美元，创7月初以来（约2个月）新高；2026年累涨超640%居标普500成分股之最",
      volume: "盘中一度涨超8%、突破1900美元，总市值约2773亿美元，放量拉升（存储五巨头集体飙涨、费半六连涨）",
      reason: "双重催化：①Rosenblatt证券首次覆盖闪迪予\"买入\"评级、目标价2400美元（隐含约36%上行），指AI将NAND从大宗商品重塑为系统关键组件、模型规模扩大与推理需求推升密度/性能/耐久与供应确定性；②Meta旗下AI智能体Muse爆红带动推理与存储需求重估，叠加美光9/30财报临近、NAND供给紧缺周期延续",
      impact: "华尔街高目标价背书\"AI存储重估\"叙事，强化NAND涨价周期逻辑；但2026年累涨超640%后估值高企，短线对利率（10年期美债约4.95%）与获利了结仍敏感，长期仍看AI企业级存储需求"
    }
  ],

  /* ============ 四、重点公司行情表 ============ */
  /* 超涨/超跌个股放最上方；无新闻的公司驱动因素简要说明即可 */
  stocks: [
    { name: "SanDisk",   code: "SNDK",  change: "-0.00%", driver: "NAND存储领涨，+6.82%至约1888美元（超涨）；Rosenblatt首予\"买入\"、目标价2400美元，AI将NAND重塑为关键基础设施，2026年累涨超640%" },
    { name: "NVIDIA",    code: "NVDA",  change: "-0.00%", driver: "AI龙头走强，+0.66%至约229美元；9/24中美峰会临近、黄仁勋受邀出席国宴，芯片出口管制走向为关键变量" },
    { name: "Microsoft", code: "MSFT",  change: "-0.00%", driver: "大型科技分化，-0.72%；CEO纳德拉据报将出席9/24国宴，AI资本开支与Azure云需求受关注" },
    { name: "Apple",     code: "AAPL",  change: "-0.00%", driver: "随大盘窄幅波动，+0.23%；库克受邀出席9/24中美峰会国宴" },
    { name: "Amazon",    code: "AMZN",  change: "-0.00%", driver: "科技权重走弱，-1.34%；亚马逊屏蔽Meta旗下AI智能体Muse在其平台购物" },
    { name: "Alphabet",  code: "GOOGL", change: "-0.00%", driver: "随大盘下跌，-1.07%；皮查伊受邀出席9/24国宴，AI智能体竞争加剧" },
    { name: "Meta",      code: "META",  change: "-0.00%", driver: "大型科技分化，-0.63%至约737美元；旗下AI智能体Muse上线两周登顶美iOS免费榜、下载超250万，周一(9/21)+11.43%后小幅回吐" },
    { name: "Broadcom",  code: "AVGO",  change: "-0.00%", driver: "定制ASIC随半导体走强，+0.52%" },
    { name: "AMD",       code: "AMD",   change: "-0.00%", driver: "半导体普涨，+1.34%；前一日(9/21)市值首次突破1万亿美元，AI算力需求支撑" },
    { name: "Micron",    code: "MU",    change: "-0.00%", driver: "DRAM/NAND存储强势，+5.00%至约1057美元；9/30发布FY2026 Q4财报，AI内存供不应求、HBM需求旺盛" }
  ],

  /* ============ 五、重要科技与政策新闻（一手来源） ============ */
  news: [
    {
      title: "纳指再创收盘新高，AI与存储芯片股领涨，银行股拖累道指",
      originalTitle: "Nasdaq reaches record high close, AI stocks rally",
      source: "Reuters（经 Livemint）",
      time: "2026年09月22日",
      type: "财经媒体",
      url: "https://www.livemint.com/market/nasdaq-reaches-record-high-close-ai-stocks-rally-11790107377665.html",
      link: "https://www.livemint.com/market/nasdaq-reaches-record-high-close-ai-stocks-rally-11790107377665.html",
      summary: "周二纳指收涨0.45%至27243.24点，连续第二个交易日创收盘新高，受美光等AI相关股提振；标普500基本持平（-0.01%至7764.27点）、道指跌0.36%至51863.89点。Meta旗下AI助理Muse走红带动芯片股上涨，但也引发对零售商、在线券商等的竞争担忧——亚马逊周一已屏蔽Muse在其平台购物，Uber、Lyft、Expedia、嘉信理财走低。内存股美光、闪迪齐涨；油价在100美元附近震荡。投资者聚焦9/24中美峰会，猜测关税休战或延长、或涉及AI监管。",
      impact: {
        direction: "中性偏多",
        companies: "半导体、存储、AI硬件",
        industry: "半导体、存储、AI",
        logic: "AI主线延续推升芯片股，纳指创新高反映风险偏好改善，但银行与消费软件走弱显示板块高度分化"
      }
    },
    {
      title: "Meta AI智能体Muse上线两周登顶美iOS免费榜，AI Agent需求重估",
      originalTitle: "Meta's AI agent, Muse, is chasing ChatGPT's App Store rise — and hit No. 1 with fewer downloads",
      source: "Yahoo News（引 CNBC / Sensor Tower）",
      time: "2026年09月21日",
      type: "财经媒体",
      url: "https://www.yahoo.com/news/us/article/metas-ai-agent-muse-is-chasing-chatgpts-app-store-rise--and-hit-no-1-with-fewer-downloads-152809095.html",
      link: "https://www.yahoo.com/news/us/article/metas-ai-agent-muse-is-chasing-chatgpts-app-store-rise--and-hit-no-1-with-fewer-downloads-152809095.html",
      summary: "Meta 9月8日推出的个人AI智能体Muse于9月18日（上线第10天）登顶美国苹果App Store免费榜，Sensor Tower数据显示累计下载超250万次，超越ChatGPT、Gemini、Claude。Muse可代用户发邮件、订票、购物，驱动市场对AI推理与算力需求的重新评估。JPMorgan将Meta评级从中性上调至超配、目标价640→820美元；亚马逊因隐私与条款问题屏蔽Muse在其平台购物。",
      impact: {
        direction: "利好",
        companies: "Meta（META）、AMD、英特尔、存储链",
        industry: "AI、半导体、存储、CPU",
        logic: "Agent类应用从\"训练\"需求转向\"推理+代执行\"，直接推升CPU、内存、存储与网络需求，是当日半导体上涨的核心催化"
      }
    },
    {
      title: "Rosenblatt首予闪迪\"买入\"目标价2400美元：AI将NAND重塑为关键基础设施",
      originalTitle: "Sandisk has gained more than 600% in 2026. It still has room to run, Rosenblatt says",
      source: "CNBC",
      time: "2026年09月22日",
      type: "财经媒体",
      url: "https://www.cnbc.com/2026/09/22/sndk-is-up-600percent-in-2026-and-has-more-room-to-run-rosenblatt-says.html",
      link: "https://www.cnbc.com/2026/09/22/sndk-is-up-600percent-in-2026-and-has-more-room-to-run-rosenblatt-says.html",
      summary: "Rosenblatt证券首次覆盖闪迪，给予\"买入\"评级与2400美元目标价（隐含较周一收盘约36%上行）。分析师Kevin Cassidy指出，新AI计算平台正将NAND闪存从大宗商品存储介质重塑为AI基础设施的系统关键组件——模型规模扩大与数据密集推理日益优先密度、性能、耐久与供应确定性。闪迪凭借BiCS8/BiCS10 3D NAND平台获得成本与性能优势。该股2026年累涨644%（标普500成分股之最），28名覆盖分析师中24人给予买入/强买。",
      impact: {
        direction: "利好",
        companies: "闪迪（SNDK）、存储链",
        industry: "存储、半导体、AI",
        logic: "华尔街高目标价背书\"AI存储重估\"叙事，强化NAND涨价周期与存储板块中长期逻辑"
      }
    },
    {
      title: "美伊会谈推动油价回落至两周低位，美联储官员讲话强化10月加息预期",
      originalTitle: "Nasdaq Hits Record High As Oil Prices Dip on Improved Crude Flows",
      source: "Reuters（经 Global Banking & Finance）",
      time: "2026年09月22日",
      type: "财经媒体",
      url: "https://www.globalbankingandfinance.com/tech-rally-boosts-asian-stocks-dollar-firms-rate-hike-wagers/",
      link: "https://www.globalbankingandfinance.com/tech-rally-boosts-asian-stocks-dollar-firms-rate-hike-wagers/",
      summary: "伊朗外长与美特使在联大期间于纽约会晤，伊朗官员称若美国放松军事压力、解除港口封锁，可在7日内重开霍尔木兹海峡；沙特东-西输油管道重启、霍尔木兹过境改善，推动油价回落至两周低位（WTI约94.59美元、布伦特跌2.03%至98.30美元）。10年期美债收益率跌1bp至4.953%。波士顿联储柯林斯支持上周加息、纽约联储威廉姆斯称短期利率框架有效；CME FedWatch显示10月加息至少25bp概率约53%。",
      impact: {
        direction: "中性",
        companies: "银行、能源、高估值成长股",
        industry: "利率、能源、流动性",
        logic: "油价回落缓解通胀压力利好风险偏好，但加息预期仍在（10月概率约53%）压制高估值成长股；收益率曲线趋平（2s10s利差收窄至约18bp）拖累银行股"
      }
    },
    {
      title: "习近平9/23抵美、9/24白宫峰会：关税休战、芯片管制与AI为焦点，科技CEO出席国宴",
      originalTitle: "Xi Reaches the White House on 24 September as Huang and Altman...",
      source: "Reuters（经 Online Investing Daily）",
      time: "2026年09月22日",
      type: "财经媒体",
      url: "https://onlineinvestingdaily.com/xi-reaches-the-white-house-on-24-september-as-huang-and",
      link: "https://onlineinvestingdaily.com/xi-reaches-the-white-house-on-24-september-as-huang-and",
      summary: "习近平9月23日抵美、9月24日在白宫与特朗普会晤，为2015年以来首次对华盛顿国事访问。议题聚焦关税休战（11月10日到期）、芯片出口管制、稀土矿产、AI治理、台湾与伊朗。英伟达黄仁勋、OpenAI奥特曼、谷歌皮查伊、苹果库克、特斯拉马斯克、亚马逊贝索斯、戴尔迈克尔·戴尔等科技巨头高管受邀出席国宴。市场普遍预期难有突破，最可能结果是延续关税休战、或就AI监管建立对话机制。",
      impact: {
        direction: "中性（关键事件）",
        companies: "英伟达（NVDA）、半导体链、稀土、中概资产",
        industry: "AI、芯片出口管制、贸易、稀土",
        logic: "峰会结果直接决定芯片出口管制与关税休战走向，是本周全球科技股最大宏观变量，市场期待\"至少启动AI全球框架对话\""
      }
    },
    {
      title: "美光9/30财报临近：预期EPS同比增约940%，仍为大型科技股中最便宜标的",
      originalTitle: "Micron Earnings Are Set for a 10x Jump: The Stock Is Still the Cheapest in Tech",
      source: "Benzinga",
      time: "2026年09月22日",
      type: "财经媒体",
      url: "https://www.benzinga.com/markets/tech/26/09/61930540/micron-third-quarter-earnings-10x-jump-cheapest-tech-stock",
      link: "https://www.benzinga.com/markets/tech/26/09/61930540/micron-third-quarter-earnings-10x-jump-cheapest-tech-stock",
      summary: "美光将于9月30日盘后发布FY2026 Q4财报。华尔街预期调整后EPS约31美元（去年同期3.03美元，同比增约940%）、营收约500亿美元（同比+345%）；Q4指引营收500亿±10亿美元、毛利率约86%。因AI服务器对DRAM/HBM/NAND需求强劲，全球仅美光、SK海力士、三星三家能量产HBM，供给紧缺推动涨价。美光当前预期市盈率约7.3倍，为XLK科技股中最低，但历史上市盈率低企反映市场对存储周期见顶的担忧。",
      impact: {
        direction: "利好（关键验证事件）",
        companies: "美光（MU）、闪迪（SNDK）、SK海力士、存储链",
        industry: "存储、半导体、AI",
        logic: "财报是存储涨价周期与HBM需求的关键验证，将决定存储板块（MU/SNDK/WDC/STX）下一步定价"
      }
    }
  ],

  /* ============ 六、当日最值得关注的 3 个交易逻辑 ============ */
  logics: [
    { title: "AI智能体（Agent）成为新交易主线，Muse爆红带动推理与存储需求重估",
      text: "Meta旗下AI智能体Muse上线两周登顶美iOS免费榜（下载超250万），将AI需求叙事从\"训练\"延伸至\"推理+代执行\"，直接推升CPU、内存、存储与网络需求，AMD、英特尔、ARM、美光、闪迪集体走强。亚马逊屏蔽Muse、JPMorgan上调Meta评级，凸显Agent商业化既是增量需求、也是存量平台的分流变量，成为继AI算力之后新的资金交易主线。" },
    { title: "存储超级周期持续，NAND从\"大宗商品\"重估为\"AI关键基础设施\"",
      text: "Rosenblatt首予闪迪\"买入\"、目标价2400美元，明确NAND正从大宗商品存储介质升级为AI基础设施的系统关键组件；叠加美光9/30财报临近（预期EPS同比增约940%、营收同比+345%）、HBM供给被三家垄断、新增供应2028年才爬坡，供给紧缺+涨价周期+AI需求三重共振。存储板块（闪迪+6.82%、美光+5.00%、希捷+4.85%）连续领涨，是本轮最强势的产业主线。" },
    { title: "政策与地缘双主线：9/24中美峰会 + 美伊会谈油价回落，利率仍是估值天花板",
      text: "特朗普-习近平9/24白宫峰会临近（关税休战11/10到期、芯片管制、AI治理），科技CEO集体出席国宴，结果直接决定芯片出口管制走向；美伊会谈缓解霍尔木兹风险、油价回落至两周低位利好风险偏好。但波士顿联储柯林斯支持加息、10月加息概率约53%、10年期美债约4.95%，利率高位仍压制高估值成长股，银行股亦因收益率曲线趋平承压。" }
  ],

  /* ============ 七、未来 1—3 个交易日关注事项（具体事件） ============ */
  watchlist: [
    { date: "09月23日", event: "中国国家主席习近平抵达华盛顿（十年来首次对美国事访问），特朗普在安德鲁联合基地接机", impact: "中美科技/芯片/稀土议题预期升温，影响半导体与中概风险偏好" },
    { date: "09月24日", event: "特朗普-习近平白宫峰会（关税休战11/10到期、AI治理、芯片出口管制、稀土；黄仁勋/奥特曼/皮查伊/库克/马斯克等出席国宴）", impact: "本周最大宏观变量，结果直接决定芯片出口管制与关税休战走向，锚定科技股估值" },
    { date: "09月30日", event: "美光科技（Micron）FY2026 Q4 财报（盘后，预期调整后EPS约31美元、营收约500亿美元）", impact: "存储涨价周期与HBM需求的关键验证，影响存储板块（MU/SNDK/WDC/STX）定价" },
    { date: "10月", event: "美联储下次FOMC议息会议（CME FedWatch显示10月加息至少25bp概率约53%）", impact: "利率路径与点阵图演变直接锚定高估值成长股估值中枢" }
  ],

  /* ============ 八、页脚免责声明 ============ */
  disclaimer:
    "本报告基于公开市场信息整理，仅供华泰期货内部研究参考，不构成任何投资建议。股价数据以交易所官方为准；新闻以原始来源（SEC / 白宫 / BIS / Treasury / BEA / BLS / Federal Reserve / Reuters 等）为准。投资有风险，决策需谨慎。"
};
