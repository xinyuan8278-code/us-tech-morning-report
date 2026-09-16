/**
 * ============================================================
 *  美股科技板块前一交易日行情日报 —— 数据文件（每日只需改这里）
 *  （2026-09-16 更新：对应美股交易日 2026-09-15）
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
    reportDate: "2026年09月16日",   // 报告发布日期（周三）
    tradeDate: "2026年09月15日",    // 对应美股交易日（前一交易日，周二）
    author: "华泰期货 · 研究",
    tag: "每日市场跟踪"
  },

  /* ============ 二、市场概览 ============ */
  overview: {
    /* 简短概括：指数变化 + 个股变化 + 重大事件 */
    text: "9月15日美股三大指数延续跌势：纳指-0.78%、标普-0.45%、道指-0.63%，标普创8月以来新低。FOMC议息会议召开、定价加息25bp概率超90%；10年期美债收益率破5%创2007年新高，油价飙升（WTI+4.4%至$105.83）。半导体企稳反弹（AMD+2.19%），大型科技普跌（亚马逊-2.02%、微软-1.64%）。",
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
      direction: "超跌",
      change: "-0.00%",
      fiveDay: "9/11收1633.35 → 9/14收1551.99（-4.98%）→ 9/15收1530.90（-1.36%），近5个交易日累计-11.92%",
      newHighLow: "距52周高点2354.39已回落约35%，近20日-14.32%、近60日-29.93%，处于深度回调通道下沿",
      volume: "9/15成交687万股、量比0.71，未明显放量，抛压边际减弱",
      reason: "NAND存储高位获利了结延续；Anthropic CEO Amodei呼吁放缓AI、美债收益率破5%与加息预期升温，高估值品种持续去杠杆；费半整体已企稳（+0.4%），存储（SNDK/MU）明显弱于AI算力（AMD+2.19%、高通+4.25%）",
      impact: "存储超级周期长期逻辑未变，但高位品种对利率与获利了结更敏感；需以9/30美光财报验证涨价周期持续性"
    }
  ],

  /* ============ 四、重点公司行情表 ============ */
  /* 超涨/超跌个股放最上方；无新闻的公司驱动因素简要说明即可 */
  stocks: [
    { name: "Sandisk",   code: "SNDK",  change: "-0.00%", driver: "NAND存储高位回调延续，跌1.36%至1530.90美元，自9/9高点累跌约15%（超跌提示）" },
    { name: "NVIDIA",    code: "NVDA",  change: "-0.00%", driver: "AI算力股随半导体企稳，涨0.57%至212.17美元；但受AI放缓警告与利率上行压制，5日仍累跌5.9%" },
    { name: "Microsoft", code: "MSFT",  change: "-0.00%", driver: "大型科技普跌，跌1.64%至497.12美元；同日宣布季度股息上调8%至0.98美元" },
    { name: "Apple",     code: "AAPL",  change: "-0.00%", driver: "随利率上行走低，跌0.52%至331.34美元" },
    { name: "Amazon",    code: "AMZN",  change: "-0.00%", driver: "科技权重中领跌，跌2.02%至248.42美元；非必需消费板块受加息预期压制领跌（-1.76%）" },
    { name: "Alphabet",  code: "GOOGL", change: "-0.00%", driver: "通信服务与科技权重走低，跌1.26%至344.98美元" },
    { name: "Meta",      code: "META",  change: "-0.00%", driver: "科技七巨头中逆势走强，涨0.70%至670.24美元，近10日+17.1%表现最强" },
    { name: "Broadcom",  code: "AVGO",  change: "-0.00%", driver: "定制ASIC随大盘走低，跌1.58%至339.27美元，5日累跌7.95%" },
    { name: "AMD",       code: "AMD",   change: "-0.00%", driver: "AI算力股反弹领涨半导体，涨2.19%至504.20美元；费半企稳（+0.4%）" },
    { name: "Micron",    code: "MU",    change: "-0.00%", driver: "DRAM存储企稳，微涨0.39%至927.60美元；5日仍-7.26%，弱于AI算力" }
  ],

  /* ============ 五、重要科技与政策新闻（一手来源） ============ */
  news: [
    {
      title: "美股三大指数收跌、标普创8月以来新低，市场聚焦周三FOMC加息决议",
      originalTitle: "Wall Street ends lower as oil spikes and the benchmark Treasury yield breaches 5%",
      source: "Reuters（路透社）",
      time: "2026年09月15日",
      type: "财经媒体",
      url: "https://www.thenewstribune.com/news/nation-world/national/article317247747.html",
      link: "https://www.thenewstribune.com/news/nation-world/national/article317247747.html",
      summary: "9月15日道指-0.63%至52090、标普-0.45%至7585（创8月以来新低）、纳指-0.77%至25983。美债收益率升破5%（2007年来新高）、油价飙升、以及AI发展放缓担忧共同压制风险偏好；FOMC已召开，市场定价周三加息25bp概率超95%（一个月前仅33.1%），为三年多来首次加息。",
      impact: {
        direction: "中性偏利空",
        companies: "全市场、高估值成长股",
        industry: "利率、货币政策、能源通胀",
        logic: "加息预期升温+美债收益率破5%压缩成长股估值，能源板块逆势领涨、科技与非必需消费领跌"
      }
    },
    {
      title: "10年期美债收益率升破5%创2007年以来新高，30年期亦创2007年高点",
      originalTitle: "10-year Treasury yield hits highest level since 2007",
      source: "CNBC",
      time: "2026年09月15日",
      type: "财经媒体",
      url: "https://www.cnbc.com/2026/09/15/10-year-treasury-yield-rises-to-highest-since-2007.html",
      link: "https://www.cnbc.com/2026/09/15/10-year-treasury-yield-rises-to-highest-since-2007.html",
      summary: "10年期美债收益率升至5.041%（2007年7月来最高）、30年期5.401%（2007年6月来最高）、2年期4.688%（2024年7月来最高）。伊朗冲突推升油价、FOMC加息预期升温（市场定价超94%概率加息25bp）共同推升收益率；WTI与10年期收益率一个月滚动相关性升至0.96。",
      impact: {
        direction: "利空",
        companies: "全市场、高估值成长股、利率敏感资产",
        industry: "利率、债市、估值",
        logic: "无风险收益率上行抬升贴现率，压制科技成长股估值，并传导至抵押贷款与企业融资成本"
      }
    },
    {
      title: "油价大涨：WTI+4.4%破$105、布伦特+2.9%至$108.75，沙特输油管遭袭、Yanbu装载暂停",
      originalTitle: "Oil settles $3 higher on Yanbu disruption, Saudi cargo cancellations",
      source: "Reuters（路透社）",
      time: "2026年09月15日",
      type: "财经媒体",
      url: "https://www.channelnewsasia.com/business/oil-prices-rise-saudi-pipeline-outage-fresh-attacks-raise-supply-concerns-6384666",
      link: "https://www.channelnewsasia.com/business/oil-prices-rise-saudi-pipeline-outage-fresh-attacks-raise-supply-concerns-6384666",
      summary: "布伦特收涨2.9%至108.75美元、WTI涨4.4%至105.83美元，双双创5月19日来最高。沙特东-西输油管遭胡塞武装袭击后，红海Yanbu港装载暂停、部分欧洲9月货取消；霍尔木兹海峡过境船舶降至4艘。高盛警告布伦特或升破120美元，能源通胀正向更广泛物价传导。",
      impact: {
        direction: "利空（对科技/成长股）",
        companies: "全市场、高估值成长股",
        industry: "能源、通胀、地缘政治",
        logic: "油价上行推升通胀预期、强化加息压力，利好能源板块但压制成长股估值"
      }
    },
    {
      title: "Anthropic CEO Amodei呼吁放缓AI模型能力迭代，Altman与Musk响应，重估AI资本开支",
      originalTitle: "Anthropic boss Dario Amodei calls for AI slowdown, Altman and Musk agree",
      source: "ABC News（美联社 AP）",
      time: "2026年09月12日",
      type: "财经媒体",
      url: "https://www.abc.net.au/news/2026-09-13/anthropic-ceo-calls-for-slower-ai-development/107147650",
      link: "https://www.abc.net.au/news/2026-09-13/anthropic-ceo-calls-for-slower-ai-development/107147650",
      summary: "Anthropic CEO Dario Amodei 9/12发文《We Must Pace the Frontier》呼吁放缓AI模型能力提升节奏，担忧6-12个月内AI智能体可能'接管整个互联网'；OpenAI的Altman、xAI的Musk均表态支持。该呼吁叠加AI资本开支可持续性质疑，是周一费半重挫近6%、周二半导体情绪波动的核心诱因。",
      impact: {
        direction: "利空（短期情绪）",
        companies: "NVIDIA、AMD、Broadcom 等AI算力链",
        industry: "AI、半导体、数据中心",
        logic: "若AI放缓预期发酵将抑制AI芯片需求与资本开支预期，压缩AI硬件估值；但市场对'放缓能否兑现'仍存分歧"
      }
    },
    {
      title: "微软上调季度股息8%至每股0.98美元，延续年度派息增长",
      originalTitle: "Microsoft announces quarterly dividend increase",
      source: "Microsoft 官方新闻（Microsoft Source）",
      time: "2026年09月15日",
      type: "官方",
      url: "https://news.microsoft.com/source/2026/09/15/microsoft-announces-quarterly-dividend-increase-7/",
      link: "https://news.microsoft.com/source/2026/09/15/microsoft-announces-quarterly-dividend-increase-7/",
      summary: "微软董事会宣布季度股息每股0.98美元，较上季0.91美元上调7美分（+8%），12月10日派发、11月19日为除息日；同时宣布2026年度股东大会于12月8日举行。在AI资本开支高企背景下，同步提高派息显示云与软件核心业务的现金流韧性。",
      impact: {
        direction: "中性偏利好",
        companies: "Microsoft",
        industry: "云计算、软件、股东回报",
        logic: "高AI资本开支周期中同步提高派息，验证核心现金流韧性，对大型科技整体情绪提供支撑"
      }
    }
  ],

  /* ============ 六、当日最值得关注的 3 个交易逻辑 ============ */
  logics: [
    { title: "FOMC加息前夕：美债收益率破5%、油价破$105，市场在通胀粘性与风险偏好间承压",
      text: "9/15 FOMC议息会议首日，市场定价9/16加息25bp概率超90%（一个月前仅33%）。10年期美债收益率升破5%创2007年新高，油价因沙特输油管遭袭、霍尔木兹受阻飙升至$105上方，能源通胀正'渗入其他板块'。标普创8月以来新低、高估值成长股领跌，资金在决议前高度防御，利率路径与点阵图是核心变量。" },
    { title: "AI放缓警告冲击半导体情绪，算力与存储走势分化",
      text: "Anthropic CEO Amodei 9/12发文呼吁放缓AI模型能力迭代，Altman、Musk响应，叠加AI资本开支可持续性担忧，周一费半重挫近6%；9/15费半企稳反弹0.4%（高通+4.25%、AMD+2.19%），但存储（SNDK-1.36%、MU+0.39%）仍明显弱于AI算力，显示资金在AI链内部再平衡，而非全面撤离。" },
    { title: "能源通胀传导链条：油价→美债收益率→贴现率→高估值科技股",
      text: "沙特东-西输油管遭袭、Yanbu装载暂停，布伦特升至$108.75，高盛警告或升破$120；油价与10年期美债收益率相关性升至0.96，推升无风险利率并压缩成长股估值。9/15能源板块+2.26%领涨、科技与非必需消费领跌，防御性交易主导盘面，决议后利率路径与中东局势是决定科技股估值锚的关键。" }
  ],

  /* ============ 七、未来 1—3 个交易日关注事项（具体事件） ============ */
  watchlist: [
    { date: "09月16日", event: "美联储FOMC利率决议 + 主席Kevin Warsh新闻发布会（美东时间9/16 14:00，北京时间9/17凌晨）", impact: "市场定价加息25bp概率超90%，若落地为三年多来首次加息，点阵图与声明措辞直接锚定高估值成长股" },
    { date: "09月16日", event: "美国8月零售销售数据（与FOMC决议同日公布）", impact: "检验家庭消费动能，与加息决议叠加，影响年内后续加息路径定价" },
    { date: "09月30日", event: "美光科技（Micron）Q4财报", impact: "存储涨价周期与HBM供需的关键验证，影响DRAM/NAND板块定价" },
    { date: "09月底", event: "美国8月核心PCE通胀数据（BEA）", impact: "美联储2%目标最关注指标，能源传导下核心PCE走向是加息路径关键" },
    { date: "近期", event: "中东霍尔木兹海峡通航与沙特东-西输油管修复进展", impact: "决定油价与通胀预期走向，间接影响加息路径与风险偏好" }
  ],

  /* ============ 八、页脚免责声明 ============ */
  disclaimer:
    "本报告基于公开市场信息整理，仅供华泰期货内部研究参考，不构成任何投资建议。股价数据以交易所官方为准；新闻以原始来源（SEC / 白宫 / BIS / Treasury / BEA / BLS / Reuters 等）为准。投资有风险，决策需谨慎。"
};
