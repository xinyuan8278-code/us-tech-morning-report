/**
 * ============================================================
 *  美股科技板块前一交易日行情日报 —— 数据文件（每日只需改这里）
 *  （2026-09-30 更新：对应美股交易日 2026-09-29）
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
    reportDate: "2026年09月30日",   // 报告发布日期（周三）
    tradeDate: "2026年09月29日",    // 对应美股交易日（前一交易日，周二）
    author: "华泰期货 · 研究",
    tag: "每日市场跟踪"
  },

  /* ============ 二、市场概览 ============ */
  overview: {
    /* 简短概括：指数变化 + 个股变化 + 重大事件 */
    text: "9月29日美股小幅收跌：纳指-0.09%、标普-0.17%、道指-0.26%，30年期美债收益率升至5.62%创2002年来新高压制估值，费半逆势+1.32%。Meta推小企业版Muse涨3.24%领涨，苹果因新CEO重组改革跌2.66%；特朗普与OpenAI、谷歌、Meta、英伟达等签署\"超级智能\"自愿安全协议；美释放4000万桶战略储油，油价跌破90美元。",
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
    { name: "NVIDIA",    code: "NVDA",  change: "-0.00%", driver: "随大盘小幅回落，-0.72%至227.21美元；黄仁勋出席白宫AI峰会签署\"超级智能\"协议，AI政策面偏友好，但高企长端利率压制估值，资金轮动至半导体设备与存储链" },
    { name: "Microsoft", code: "MSFT",  change: "-0.00%", driver: "基本持平，-0.05%至508.96美元；纳德拉出席白宫AI峰会，市场聚焦\"行业自我监管\"框架，对微软等AI巨头约束有限" },
    { name: "Apple",     code: "AAPL",  change: "-0.00%", driver: "领跌大型科技，-2.66%至329.40美元；彭博报道新CEO特努斯酝酿工程导向重组（精简中层、突破春秋发布周期），叠加美银警告AI购物代理或侵蚀苹果生态" },
    { name: "Amazon",    code: "AMZN",  change: "-0.00%", driver: "微涨，+0.21%至246.67美元；AWS与AI资本开支仍是核心叙事，特朗普重申支持数据中心扩张利好云计算" },
    { name: "Alphabet",  code: "GOOGL", change: "-0.00%", driver: "小幅回落，-0.53%至340.92美元；皮查伊出席白宫AI峰会签署\"超级智能\"协议，AI Agent竞争（Muse）令市场重估谷歌AI应用布局" },
    { name: "Meta",      code: "META",  change: "-0.00%", driver: "大型科技领涨，+3.24%至738.79美元；推出面向小企业的Muse AI代理（接入Shopify/QuickBooks/Stripe/Canva等），AI商业化变现叙事强化，缓解算力瓶颈担忧" },
    { name: "Broadcom",  code: "AVGO",  change: "-0.00%", driver: "定制ASIC随半导体走强，+1.58%至355.10美元；费半+1.32%，AI算力与存储需求支撑" },
    { name: "AMD",       code: "AMD",   change: "-0.00%", driver: "基本持平，-0.05%至607.57美元；苏姿丰出席白宫AI峰会，AI算力需求与Agent扩容预期支撑，但高估值与美债收益率压力并存" },
    { name: "Micron",    code: "MU",    change: "-0.00%", driver: "存储走强，+1.05%至1065.08美元；9/30盘后发布FY2026 Q4财报（一致预期营收约510亿、调整后EPS约31.5），DRAM/NAND涨价与HBM4放量为核心看点" },
    { name: "SanDisk",   code: "SNDK",  change: "-0.00%", driver: "存储企稳，+0.98%至1729.76美元；NAND涨价周期与美光财报临近支撑，AI企业级存储需求延续" }
  ],

  /* ============ 五、重要科技与政策新闻（一手来源） ============ */
  news: [
    {
      title: "特朗普与OpenAI、谷歌、Meta、英伟达等签署白宫\"超级智能\"协议，AI治理转向行业自我监管",
      originalTitle: "Trump, top tech firms sign accord to 'self-police' AI development",
      source: "AP/Reuters（经 Al Jazeera）",
      time: "2026年09月29日",
      type: "财经媒体",
      url: "https://www.aljazeera.com/news/2026/9/29/trump-top-tech-firms-sign-accord-to-self-police-ai-development",
      link: "https://www.aljazeera.com/news/2026/9/29/trump-top-tech-firms-sign-accord-to-self-police-ai-development",
      summary: "特朗普9/29在白宫与OpenAI总裁布罗克曼、Anthropic CEO阿莫代伊、Meta扎克伯格、谷歌皮查伊、英伟达黄仁勋等会晤，签署单页《白宫超级智能协议：前沿责任联合承诺》。协议要求前沿AI公司建立四层内控与审计（内部监控、内部验证团队、独立外部审计、董事会委员会），承诺防范AI工具\"非预期入侵或未授权访问系统\"。特朗普称协议\"几乎像一部宪法\"\"道义上有约束力\"，并指示联邦机构以\"超级智能\"替代\"人工智能\"表述；同时重申支持数据中心扩张，并称考虑设立10人AI安全委员会。",
      impact: {
        direction: "利好",
        companies: "OpenAI、谷歌、Meta、英伟达、Anthropic、微软等",
        industry: "AI、云计算、数据中心",
        logic: "以行业自愿承诺替代强制性政府监管，短期降低AI监管收紧风险，利好AI资本开支与算力叙事；但\"自我监管\"落地效果存疑，长期或仍面临监管补位"
      }
    },
    {
      title: "苹果新CEO特努斯酝酿工程导向重组：精简中层、突破春秋发布周期，股价领跌2.66%",
      originalTitle: "Apple plans engineering-focused overhaul under Ternus, Bloomberg News reports",
      source: "Reuters（经 Channel News Asia）",
      time: "2026年09月29日",
      type: "财经媒体",
      url: "https://www.channelnewsasia.com/business/apple-plans-engineering-focused-overhaul-under-ternus-bloomberg-news-reports-6419156",
      link: "https://www.channelnewsasia.com/business/apple-plans-engineering-focused-overhaul-under-ternus-bloomberg-news-reports-6419156",
      summary: "彭博援引知情人士报道，苹果新任CEO约翰·特努斯（9/1接替库克）正酝酿工程导向重组：减少对传统春秋两季发布会周期的依赖、裁撤部分中层管理岗位以缩短工程师与高管决策链路、并推进降本与寻找新收入来源。报道称硬件工程部门已裁减约6名主管，Siri与Vision Pro团队亦有优化。美银分析师警告Meta的Muse等AI购物代理可能将购买行为移出苹果生态。苹果当日收跌2.66%至329.40美元。",
      impact: {
        direction: "利空",
        companies: "苹果（AAPL）",
        industry: "消费电子、AI",
        logic: "管理层重组与AI代理竞争担忧压制情绪；但精简架构若提升产品迭代速度，中期或利好，市场短期聚焦AI时代苹果的竞争力缺口"
      }
    },
    {
      title: "美国30年期国债收益率升至5.62%创2002年来新高，长端抛售加剧压制成长股估值",
      originalTitle: "US 30-year treasury yield rises to highest level since 2002",
      source: "The Straits Times（Reuters）",
      time: "2026年09月29日",
      type: "财经媒体",
      url: "https://www.straitstimes.com/business/us-30-year-treasury-yield-rises-to-highest-level-since-2002",
      link: "https://www.straitstimes.com/business/us-30-year-treasury-yield-rises-to-highest-level-since-2002",
      summary: "美国30年期国债收益率9/29连续第六个交易日上行、升破5.61%至2002年以来最高，10年期升至5.25%附近（2007年以来高位）。驱动因素包括中东冲突推升油价带来的通胀焦虑、企业债天量供应（派拉蒙-天舞约320亿美元投资级发债）以及美国国债突破40万亿美元的财政可持续性担忧。纽约联储主席威廉姆斯称\"今年晚些时候再一次上调可能是合适的\"，10月加息预期有所回落。今年美债已累计下跌2.6%。",
      impact: {
        direction: "利空（利率）",
        companies: "高估值成长股、半导体、大型科技",
        industry: "利率、宏观",
        logic: "长端利率飙升直接压制高久期成长股估值中枢，是当日纳指、标普回落的主因；威廉姆斯鸽派信号部分缓和10月加息预期，缓解下跌幅度"
      }
    },
    {
      title: "美国9月消费者信心指数暴跌至81.9创2014年来新低，8月职位空缺降至707.9万",
      originalTitle: "US consumer confidence near 12-1/2-year low amid labor market fears",
      source: "Reuters",
      time: "2026年09月29日",
      type: "财经媒体",
      url: "https://reuters.com/business/us-consumer-confidence-dives-more-than-12-year-low-september-2026-09-29",
      link: "https://reuters.com/business/us-consumer-confidence-dives-more-than-12-year-low-september-2026-09-29",
      summary: "美国谘商会9月消费者信心指数大幅下滑6.7点至81.9，为2014年4月以来最低，远低于市场预期的89.2；消费者对未来12个月通胀预期中值升至5.1%，68.4%的消费者预期利率将进一步走高。劳工部数据显示8月职位空缺减少25.6万至707.9万（预期722.5万），职位空缺/失业人数比降至1.01。数据反映中东冲突与高利率下就业市场持续降温。",
      impact: {
        direction: "利空（经济）",
        companies: "消费、零售、大型科技广告业务",
        industry: "宏观、消费",
        logic: "信心与职位空缺双弱强化经济放缓预期，理论上缓和加息压力，但就业降温对广告/消费相关科技收入构成隐忧"
      }
    },
    {
      title: "AT&T与康宁签署超30亿美元光纤多年期协议，AI数据需求驱动光通信板块走强",
      originalTitle: "AT&T and Corning Team Up to Engineer the Connected World with Fiber",
      source: "AT&T 官方新闻稿",
      time: "2026年09月29日",
      type: "官方",
      url: "https://about.att.com/story/2026/att-corning-engineer-connected-world.html",
      link: "https://about.att.com/story/2026/att-corning-engineer-connected-world.html",
      summary: "AT&T与康宁9/29宣布达成价值逾30亿美元的多年期光纤/光缆供应协议，康宁将为AT&T网络扩张供应光纤，支撑其在2030年前向6000万美国人提供高速宽带。AT&T表示，AI、流媒体与云计算推动数据需求激增，平均每户家庭月流量已超1TB（2016年的5倍）。康宁当日收涨4.70%，带动Lumentum、Coherent等光通信股普涨。",
      impact: {
        direction: "利好",
        companies: "康宁（GLW）、AT&T、Lumentum、Coherent、光通信链",
        industry: "光通信、AI基础设施、宽带",
        logic: "AI驱动数据流量增长向光纤/光通信基础设施传导，验证AI资本开支从算力向网络互联环节扩散"
      }
    },
    {
      title: "Meta推出面向小企业的Muse AI代理，接入Shopify、QuickBooks等工具，股价涨3.24%",
      originalTitle: "Meta expands Muse AI agent for small businesses",
      source: "Reuters（经 The Star）",
      time: "2026年09月29日",
      type: "财经媒体",
      url: "https://www.thestar.com.my/tech/tech-news/2026/09/29/meta-expands-muse-ai-agent-for-small-businesses",
      link: "https://www.thestar.com.my/tech/tech-news/2026/09/29/meta-expands-muse-ai-agent-for-small-businesses",
      summary: "Meta宣布将AI代理Muse扩展至小企业市场，可连接Shopify、QuickBooks、Stripe、Canva、Asana、Slack、Zoom等数十款企业工具，协助商家经营、获客与数据分析。Muse在用户批准前不会发布内容、发送消息或完成购买，大部分用途免费。Muse上线两周下载量约280万次，Meta旨在借此多元化广告以外收入。当日Meta收涨3.24%至738.79美元，领涨大型科技。",
      impact: {
        direction: "利好",
        companies: "Meta（META）、Shopify、AI应用链",
        industry: "AI Agent、SaaS、电商",
        logic: "Meta将AI代理从消费级扩展至商业变现，强化AI商业化叙事；但算力瓶颈与对手（亚马逊屏蔽Muse）竞争仍存不确定性"
      }
    },
    {
      title: "美国宣布以\"互换\"方式释放最多4000万桶战略储油，油价跌破90美元、通胀压力边际缓和",
      originalTitle: "Oil Falls as SPR Release Boosts Supply",
      source: "Trading Economics",
      time: "2026年09月29日",
      type: "行业媒体",
      url: "https://tradingeconomics.com/commodity/crude-oil/news/587818",
      link: "https://tradingeconomics.com/commodity/crude-oil/news/587818",
      summary: "美国能源部9/29宣布以\"互换\"方式向市场释放最多4000万桶战略石油储备（SPR），投标截止10/6，该计划未来一年将向储备归还约2亿桶；能源部长赖特暗示进一步投放可能性不大。同时沙特在无人机袭击后恢复东西向管道约一半输送能力。WTI原油收跌3.48%至89.38美元（跌破90）、布伦特跌2.56%至102.59美元。",
      impact: {
        direction: "中性偏多（通胀缓解）",
        companies: "能源、航运；利好高估值成长股",
        industry: "能源、利率、通胀",
        logic: "油价回落边际缓解通胀与长端利率压力，对高估值科技股构成支撑；但地缘不确定性（霍尔木兹、美伊谈判）尚未解除"
      }
    },
    {
      title: "美光9/30盘后发布FY2026 Q4财报：一致预期营收约510亿、EPS约31.5美元，成存储周期关键验证",
      originalTitle: "Micron (MU) Highlights Tech Earnings to Watch This Week",
      source: "Zacks（经 Nasdaq）",
      time: "2026年09月29日",
      type: "财经媒体",
      url: "https://www.nasdaq.com/articles/micron-mu-highlights-tech-earnings-watch-week",
      link: "https://www.nasdaq.com/articles/micron-mu-highlights-tech-earnings-watch-week",
      summary: "美光将于9/30盘后发布2026财年Q4财报。Zacks一致预期营收约508.6亿美元（同比+约350%）、调整后EPS约31.45美元（同比+约938%），HBM需求为核心叙事。摩根大通维持超配、目标价1540美元，称HBM3E/HBM4产能已排至2027年底；市场关注DRAM/NAND定价、HBM4放量及11月季度指引（多头需营收指引达550亿美元以上）。",
      impact: {
        direction: "利好（关键验证事件）",
        companies: "美光（MU）、闪迪（SNDK）、SK海力士、存储链",
        industry: "存储、半导体、AI",
        logic: "美光财报验证存储涨价周期与HBM需求持续性，决定存储板块下一步定价；同时9/30核心PCE与10/2非农锚定10月加息路径"
      }
    }
  ],

  /* ============ 六、当日最值得关注的 3 个交易逻辑 ============ */
  logics: [
    { title: "长端利率飙升压制估值，AI与半导体结构性行情对冲",
      text: "30年期美债收益率连续六日上行、升至5.62%创2002年来新高，10年期5.25%逼近2007年高位，直接压制高久期成长股估值，纳指、标普因此小幅回落。但费半逆势+1.32%，存储（美光/闪迪）、半导体设备（应用材料/科磊/泛林）与光通信（康宁/Lumentum）普涨，显示资金在\"利率承压\"与\"AI产业趋势\"之间分化，结构性做多半导体与AI基础设施。" },
    { title: "AI治理转向\"行业自我监管\"，政策风险短期出清、利好算力与资本开支",
      text: "特朗普与OpenAI、谷歌、Meta、英伟达等六大AI巨头签署自愿性\"超级智能\"协议，以四层内控+独立外部审计+董事会委员会替代强制性政府监管，并重申支持数据中心扩张。这短期消除了AI监管收紧风险，利好AI资本开支与算力叙事，是半导体与光通信逆势走强的政策面催化；但\"自我监管\"能否真正落地、后续是否监管补位仍存长期不确定性。" },
    { title: "存储超级周期临近关键验证：美光财报 + 油价回落缓解通胀",
      text: "美光9/30盘后财报将验证DRAM/NAND涨价与HBM4放量，是存储板块下一步定价的锚；同时美国释放4000万桶战略储油使WTI跌破90美元、沙特恢复管道输送，油价回落边际缓解通胀与长端利率压力，为高估值科技股与存储板块提供双重支撑。若美光指引超预期，存储超级周期逻辑将进一步强化。" }
  ],

  /* ============ 七、未来 1—3 个交易日关注事项（具体事件） ============ */
  watchlist: [
    { date: "09月30日", event: "美国8月核心PCE、个人收支、ADP就业；盘后美光科技（MU）FY2026 Q4财报（一致预期营收约510亿美元、调整后EPS约31.5美元）", impact: "PCE定调通胀路径；美光财报验证存储超级周期，决定存储板块下一步定价" },
    { date: "10月01日", event: "美国9月ISM制造业PMI、8月营建支出；盘前埃森哲（ACN）FY2026 Q4财报、Jabil（JBL）财报", impact: "制造业景气与企业IT开支信号，衡量AI咨询与数据中心硬件需求" },
    { date: "10月02日", event: "美国9月非农就业报告（就业人数/失业率/时薪）", impact: "美联储10月利率路径的关键数据，影响高估值成长股估值" },
    { date: "10月06日", event: "美国战略石油储备\"互换\"投标截止（最多4000万桶）", impact: "油价与通胀预期走向，间接影响长端利率与科技股风险偏好" }
  ],

  /* ============ 八、页脚免责声明 ============ */
  disclaimer:
    "本报告基于公开市场信息整理，仅供华泰期货内部研究参考，不构成任何投资建议。股价数据以交易所官方为准；新闻以原始来源（SEC / 白宫 / BIS / Treasury / BEA / BLS / Federal Reserve / Reuters 等）为准。投资有风险，决策需谨慎。"
};
