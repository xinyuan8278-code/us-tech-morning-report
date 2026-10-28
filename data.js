/**
 * ============================================================
 *  美股科技板块前一交易日行情日报 —— 数据文件（每日只需改这里）
 *  （2026-10-29 更新：对应美股交易日 2026-10-28）
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
    reportDate: "2026年10月29日",   // 报告发布日期（周四）
    tradeDate: "2026年10月28日",    // 对应美股交易日（前一交易日，周三）
    author: "华泰期货 · 研究",
    tag: "每日市场跟踪"
  },

  /* ============ 二、市场概览 ============ */
  overview: {
    /* 简短概括：指数变化 + 个股变化 + 重大事件 */
    text: "10月28日美股三大指数三连涨、美联储按兵不动：道指+0.19%至52,475.10、标普500+0.28%至7,743.98、纳指+0.27%至26,549.85，费城半导体指数连续第四日上涨。FOMC以10:2维持利率3.75%-4.00%不变（库克、哈马克反对要求加息），Warsh强调抗通胀。存储板块集体飙涨领跑（SK海力士+13.30%、闪迪+7.66%、美光+5.86%、西数+4.08%、希捷+4.51%），核心催化为SK海力士Q3创纪录财报（营收首破100万亿韩元、DRAM/HBM产能售罄至2029年）；大型科技多数回调（英伟达-1.17%、Meta-1.24%、苹果-0.94%，谷歌+1.34%领涨）。盘后财报分化剧烈：微软Azure+48%超预期、盘后+3%，Alphabet自由现金流转负-90.7亿、盘后-9%。",
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
      change: "-0.00%",
      type: "超涨",
      reason: "前一交易日大涨约7.66%至约1,404.77美元，为存储板块领涨之一，单日涨幅明显超过科技板块平均（纳指仅+0.27%）。核心触发为SK海力士Q3创纪录财报（营收首破100万亿韩元、营业利润同比+632%、DRAM/HBM产能售罄至2029年）点燃存储景气重估，叠加希捷确认AI与数据中心存储需求强劲、客户存储承诺锁定至2028-2030年。闪迪本周四（10/29）公布Q3财报，市场聚焦NAND定价与长期供应协议进展。"
    },
    {
      name: "Micron",
      code: "MU",
      change: "-0.00%",
      type: "超涨",
      reason: "前一交易日上涨约5.86%，存储板块集体飙涨中的领涨个股之一。SK海力士Q3营业利润同比+632%创历史新高、并预期存储供不应求将持续至2030年，HBM4供货Vera Rubin与AI推理需求向端侧扩散（机器人、自动驾驶）强化美光的存储景气叙事。HBM价格上涨、内存产量增加及长期供应协议（LTA）锁定产能提供行业支撑。"
    }
  ],

  /* ============ 四、重点公司行情表 ============ */
  /* 超涨/超跌个股放最上方；无新闻的公司驱动因素简要说明即可 */
  stocks: [
    { name: "SanDisk",   code: "SNDK",  change: "-0.00%", driver: "大涨约7.66%至约1,404.77美元，存储板块领涨（超涨提示）；SK海力士Q3创纪录财报（DRAM/HBM产能售罄至2029年）点燃存储景气重估，希捷确认AI与数据中心存储需求强劲、客户存储承诺锁定至2028-2030年，本周四（10/29）公布Q3财报聚焦NAND定价与长期供应协议" },
    { name: "Micron",    code: "MU",    change: "-0.00%", driver: "上涨约5.86%，存储板块领涨（超涨提示）；SK海力士Q3营业利润同比+632%创历史新高、预期存储供不应求持续至2030年，HBM4供货Vera Rubin与AI推理需求向端侧扩散强化美光存储景气叙事" },
    { name: "NVIDIA",    code: "NVDA",  change: "-0.00%", driver: "下跌约1.17%，大型科技股中走弱；盘前一度受OpenAI拟采购谷歌TPU消息提振涨近1%后回吐，作为AI算力核心龙头在FOMC按兵不动、财报验证窗口前获利回吐，市场聚焦亚马逊/英特尔盘后财报与PCE数据对算力需求的验证" },
    { name: "Microsoft", code: "MSFT",  change: "-0.00%", driver: "微跌约0.06%，盘后FQ1'27财报超预期——营收923亿美元（+19%）、Azure同比+48%超预期、自由现金流186亿美元（预期翻倍），盘后大涨约3%；AI云需求兑现能力获市场认可" },
    { name: "Apple",     code: "AAPL",  change: "-0.00%", driver: "下跌约0.94%，大型科技股中回调；因基本未参与AI基建竞赛、首款折叠屏iPhone Duo已发售，在AI资本开支验证周情绪谨慎下跟随大盘微调，无重大事件" },
    { name: "Amazon",    code: "AMZN",  change: "-0.00%", driver: "上涨约0.59%，大型科技股中相对抗跌；周四（10/29）盘后Q3财报临近，市场聚焦AWS增速与资本开支指引，Alphabet盘后自由现金流转负使市场更关注云厂商的AI投入变现能力" },
    { name: "Alphabet",  code: "GOOGL", change: "-0.00%", driver: "上涨约1.34%，大型科技股中领涨；盘前受OpenAI拟采购谷歌TPU消息提振，但盘后Q3财报营收1276亿美元（+25%）不及预期、自由现金流-90.7亿美元（市场预期仅-3600万），盘后大跌约9%，AI资本开支现金吞噬担忧发酵" },
    { name: "Meta",      code: "META",  change: "-0.00%", driver: "下跌约1.24%，大型科技股中领跌；此前Q3自由现金流转负+上调未来支出承诺1250亿至8250亿美元的现金吞噬担忧持续发酵，在Alphabet盘后自由现金流转负的背景下，市场对「AI烧钱能否自洽」的疑虑加深" },
    { name: "Broadcom",  code: "AVGO",  change: "-0.00%", driver: "上涨约2.77%至351.81美元，标普500成分股中涨幅居首；定制ASIC与AI网络需求叙事持续，受益于存储与半导体板块普涨情绪，作为XPU加速器供应商深度绑定Anthropic等前沿AI客户" },
    { name: "AMD",       code: "AMD",   change: "-0.00%", driver: "上涨约3.24%，半导体板块普涨；受益于SK海力士存储景气与AI推理需求向端侧扩散的板块情绪，作为AI加速器第二供应商随半导体板块估值修复，本周无独立重大事件" }
  ],

  /* ============ 五、重要科技与政策新闻（一手来源） ============ */
  news: [
    {
      title: "美联储10月决议维持利率3.75%-4.00%不变：10票赞成、库克与哈马克反对要求加息，Warsh强调抗通胀",
      originalTitle: "Federal Reserve holds interest rates steady even as inflation remains high",
      source: "CBS News（英文财经媒体）",
      time: "2026年10月28日",
      type: "财经媒体",
      url: "https://www.cbsnews.com/losangeles/news/federal-reserve-holds-interest-rates-steady-inflation/",
      link: "https://www.cbsnews.com/losangeles/news/federal-reserve-holds-interest-rates-steady-inflation/",
      summary: "美东时间10月28日，美联储联邦公开市场委员会（FOMC）以10票赞成、2票反对，决定将联邦基金利率目标区间维持在3.75%-4.00%不变，符合市场预期。美联储理事库克（Lisa Cook）与克利夫兰联储行长哈马克（Beth Hammack）投下反对票、主张再加息25个基点。声明称经济活动正以「强劲步伐」扩张，但通胀仍处高位，委员会将「积累更多信息」以决定合适政策立场。主席Warsh在记者会上重申恢复物价稳定、将通胀拉回2%目标的承诺，市场预期12月会议或再度加息。",
      impact: {
        direction: "中性偏多（政策耐心、但保留紧缩倾向）",
        companies: "英伟达、苹果、Meta等高估值科技股",
        industry: "宏观经济、利率敏感板块",
        logic: "美联储按兵不动符合预期、释放「耐心而非转向」信号，短期缓和政策冲击；但两位官员主张加息+12月加息预期犹存，长端利率上行压力未解除，仍压制高估值科技股"
      }
    },
    {
      title: "SK海力士Q3创纪录财报：营收首破100万亿韩元（+328%）、DRAM/HBM产能售罄至2029年，点燃存储板块飙涨",
      originalTitle: "Chip stocks rise for third straight session as SK Hynix profit surges",
      source: "Ava / Reuters（英文财经媒体）",
      time: "2026年10月28日",
      type: "财经媒体",
      url: "https://ava.fund/news/chip-stocks-rise-for-third-straight-session-as-sk-hynix-profit-surges-28102026",
      link: "https://ava.fund/news/chip-stocks-rise-for-third-straight-session-as-sk-hynix-profit-surges-28102026",
      summary: "SK海力士公布2026年Q3财报，营收104.62万亿韩元（同比+328%、环比+31.9%），单季营收首次突破100万亿韩元；营业利润83.33万亿韩元（同比+632%、环比+37.6%），营收与利润均创单季历史新高。公司称受AI存储需求推动，DRAM与高带宽内存（HBM）产能至2029年已实质性售罄，客户采购需求超当前供应能力两倍以上；已与14家核心云服务客户签署长期供应协议（LTA），锁定2027、2028年各约50%产能。公司预期存储供不应求将持续至2030年。存储板块应声飙涨：SK海力士+13.30%、闪迪+7.66%、美光+5.86%、西数+4.08%、希捷+4.51%。",
      impact: {
        direction: "利好（存储/半导体板块）",
        companies: "SK海力士、美光、闪迪、西数、希捷、三星",
        industry: "存储芯片、HBM、AI基础设施",
        logic: "存储「超强景气+供不应求至2030年」的产业周期确认，HBM4随Vera Rubin放量，直接强化美光、闪迪等存储股的估值与业绩预期"
      }
    },
    {
      title: "微软FQ1财报超预期：营收923亿美元（+19%）、Azure同比+48%、自由现金流186亿美元超预期近两倍，盘后涨约3%",
      originalTitle: "Microsoft, Alphabet Divide Over Cash Flow Amid Cloud Growth",
      source: "The Chosun Daily（英文财经媒体，援引Reuters）",
      time: "2026年10月29日",
      type: "财经媒体",
      url: "https://www.chosun.com/english/market-money-en/2026/10/29/AEOIPMGTNJHG7P6W3CVCQFB2GU",
      link: "https://www.chosun.com/english/market-money-en/2026/10/29/AEOIPMGTNJHG7P6W3CVCQFB2GU",
      summary: "微软公布2027财年Q1财报（对应2026年7-9月），营收923亿美元、同比+19%，超市场预期；Azure云业务营收331.7亿美元、同比+48%，超出市场预期的328.4亿美元。尽管当季资本开支高达452亿美元，自由现金流仍达186亿美元，为市场预期（85.4亿美元）的两倍以上。市场对微软「AI投入仍能持续产生现金」的能力给予认可，盘后股价上涨约3%。同日财报中，微软与Alphabet在「AI巨额投资下的现金生成能力」上形成鲜明分化。",
      impact: {
        direction: "利好（微软及AI云变现逻辑）",
        companies: "微软",
        industry: "云计算、AI基础设施",
        logic: "Azure加速增长+自由现金流大幅超预期，证明AI投入可持续产生现金回报，缓解「AI烧钱不可持续」的核心担忧"
      }
    },
    {
      title: "Alphabet Q3营收不及预期、自由现金流转负-90.7亿美元，盘后大跌约9%：AI资本开支现金吞噬担忧发酵",
      originalTitle: "Nasdaq-100 futures dip as Alphabet shares sell off after earnings report: Live updates",
      source: "CNBC（英文财经媒体）",
      time: "2026年10月28日",
      type: "财经媒体",
      url: "https://www.cnbc.com/2026/10/28/stock-market-today-live-updates.html",
      link: "https://www.cnbc.com/2026/10/28/stock-market-today-live-updates.html",
      summary: "Alphabet公布Q3财报，营收1276亿美元、同比+25%，但经调整每股收益与整体营收均不及市场预期；更关键的是自由现金流为-90.7亿美元，远逊于市场预期的-3600万美元（谷歌云营收达307.1亿美元、同比翻倍，但基础设施扩张消耗现金远超预期）。公司维持2026全年资本开支1950亿-2050亿美元的指引不变。消息公布后Alphabet盘后股价大跌约9%，纳指期货随之走低，市场对「AI资本开支能否转化为持续现金流」的担忧显著发酵，与微软自由现金流强劲形成鲜明对比。",
      impact: {
        direction: "利空（Alphabet及AI资本开支叙事）",
        companies: "Alphabet、谷歌",
        industry: "AI大模型、云计算、数据中心",
        logic: "Alphabet自由现金流深度转负叠加营收不及预期，直接冲击「AI烧钱可自洽」的市场共识，或拖累后续超大规模厂商（亚马逊等）财报情绪"
      }
    },
    {
      title: "美股周三收涨三连涨、芯片股连续第四日上涨：存储领涨、大型科技回调，盘后微软/谷歌财报分化",
      originalTitle: "Stock Market Today, Oct. 28: Markets Edge Higher as Fed Holds Rates Steady",
      source: "The Motley Fool（英文财经媒体）",
      time: "2026年10月28日",
      type: "财经媒体",
      url: "https://www.fool.com/coverage/stock-market-today/2026/10/28/stock-market-today-oct-28-markets-edge-higher-as-fed-holds-rates-steady",
      link: "https://www.fool.com/coverage/stock-market-today/2026/10/28/stock-market-today-oct-28-markets-edge-higher-as-fed-holds-rates-steady",
      summary: "美东时间10月28日，美股三大指数连续第三日上涨：道指+0.19%至52,475.10、标普500+0.28%至7,743.98、纳指+0.27%至26,549.85。芯片股连续第四日上涨，存储板块领涨（美光+5.86%、博通+2.77%），但大型科技股多数回调（英伟达-1.17%、Meta-1.24%、苹果-0.94%、特斯拉-0.80%，谷歌+1.34%）。当日涨幅居前的Vertiv大涨近17%（AI基础设施需求强劲）、Oracle涨11%（投资者日上调财务目标）、F5暴跌超20%（指引不及预期+遭降级）。盘后Alphabet与微软财报分化，为次日科技股波动埋下伏笔。",
      impact: {
        direction: "中性（整体三连涨、盘后分化）",
        companies: "美光、博通、英伟达、Alphabet、微软、Oracle",
        industry: "半导体、存储、云计算、AI基础设施",
        logic: "芯片股受益于SK海力士景气与美联储按兵不动延续反弹，但盘后Alphabet自由现金流转负、微软强劲，云厂商「AI变现」分化成为次日核心交易线索"
      }
    },
    {
      title: "OpenAI拟采购谷歌TPU芯片：英伟达重要客户寻求更多AI算力供应来源，谷歌盘前涨逾1%",
      originalTitle: "OpenAI in talks to buy Google's TPU chips, diversifying AI compute supply",
      source: "Reuters（英文财经媒体，经每日经济新闻/外媒交叉核对）",
      time: "2026年10月27日",
      type: "财经媒体",
      url: "https://www.reuters.com/technology/",
      link: "https://www.reuters.com/technology/",
      summary: "据路透社援引知情人士报道，OpenAI正计划采购谷歌的张量处理器（TPU）芯片，交易金额与规模尚未披露；OpenAI此前已开始租用谷歌TPU，此次采购或进一步扩大双方在AI算力领域的合作。若交易落地，将为谷歌TPU业务带来新进展，同时也意味着英伟达的重要客户正积极寻求多元化AI芯片供应来源，削弱市场对英伟达GPU「近乎垄断」的单一依赖预期。消息公布后谷歌盘前涨逾1.25%、英伟达一度涨0.63%后回吐。",
      impact: {
        direction: "中性偏多（谷歌/ASIC）、对英伟达略偏空",
        companies: "OpenAI、谷歌、英伟达",
        industry: "AI芯片、TPU/ASIC、云算力",
        logic: "OpenAI采购谷歌TPU强化定制ASIC路线叙事、利好谷歌云算力；同时凸显前沿AI客户对英伟达GPU的替代选项增多，长期或边际削弱英伟达议价力"
      }
    },
    {
      title: "GE Vernova上调全年指引：AI数据中心扩张驱动电力基础设施需求，当季订单积压逼近2000亿美元",
      originalTitle: "GE Vernova raises outlook as AI data center power demand grows",
      source: "The Chosun Daily（英文财经媒体）",
      time: "2026年10月29日",
      type: "财经媒体",
      url: "https://www.chosun.com/english/market-money-en/2026/10/29/AEOIPMGTNJHG7P6W3CVCQFB2GU",
      link: "https://www.chosun.com/english/market-money-en/2026/10/29/AEOIPMGTNJHG7P6W3CVCQFB2GU",
      summary: "GE Vernova（通用电气分拆的电力设备公司，主营燃气轮机、风机与电网设备）Q3营收126亿美元、同比+27%，当季新增订单290亿美元、订单积压增至1970亿美元，较上季增加约200亿美元，公司预期年底订单积压将突破2000亿美元。公司将全年自由现金流指引由115亿-125亿美元上调至160亿-170亿美元，并宣布以90亿美元收购高压电网设备制造商Trench Group。CEO Scott Strazik表示，强劲业绩源于全球电力基础设施需求增长，其中AI数据中心扩张是核心驱动。",
      impact: {
        direction: "利好（电力/数据中心基建产业链）",
        companies: "GE Vernova、英伟达、微软、Alphabet",
        industry: "电力设备、电网、数据中心",
        logic: "AI数据中心耗电激增驱动发电与电网投资，验证「AI基建→电力」的衍生需求逻辑，是AI资本开支向实体经济外溢的重要佐证"
      }
    }
  ],

  /* ============ 六、当日最值得关注的 3 个交易逻辑 ============ */
  logics: [
    { title: "AI投资从「烧钱叙事」转向「现金流验证」：微软与Alphabet财报分化，成市场新裁决标尺",
      text: "同日盘后财报中，微软与Alphabet走向截然相反——微软Azure同比+48%超预期、自由现金流186亿美元（超预期近两倍）盘后涨3%；Alphabet营收不及预期、自由现金流-90.7亿美元（预期仅-3600万）盘后暴跌9%。这标志着市场定价逻辑已从「谁投得多」切换为「投了之后能否产生现金」。此前Meta因上调支出承诺+自由现金流转负单日跌7%已预演了这一转向。这一「现金流标尺」将直接决定亚马逊（10/29盘后）及后续超大规模厂商的估值走向，也是检验「AI烧钱可持续性」叙事的核心变量。" },
    { title: "存储板块走出独立行情：SK海力士「供不应求至2030年」确认产业超级周期，HBM4与端侧AI双轮驱动",
      text: "SK海力士Q3营收首破100万亿韩元、营业利润同比+632%创历史新高，并明确DRAM/HBM产能售罄至2029年、存储供不应求将延续至2030年，直接点燃存储板块（SK海力士+13.30%、闪迪+7.66%、美光+5.86%）。与GPU/云厂商受「资本开支回报」质疑压制不同，存储芯片拥有更明确的供需定价逻辑：AI推理需求正从云侧向端侧（机器人、自动驾驶等物理AI）扩散，HBM4随Vera Rubin放量，长期供应协议（LTA）锁定产能。存储成为AI板块中基本面兑现最扎实、与「现金流焦虑」脱钩的细分赛道。" },
    { title: "美联储「耐心但未转向」+油价上涨：宏观压制未除，12月加息仍是悬顶之剑",
      text: "FOMC以10:2维持利率不变，符合预期，但库克与哈马克两位官员主张加息，主席Warsh重申抗通胀，10年期美债收益率升破5%至5.05%。同时油价再度上行（WTI+2.88%至102.78美元、布伦特+1.26%至115.32美元），叠加美伊冲突推升能源成本，「油价→通胀→长端利率→贴现率」的压制链重新强化。市场预期12月会议仍有加息可能。这意味着即便AI基本面叙事修复，宏观层面的高利率与粘性通胀仍将持续压制高估值科技股，构成独立于产业基本面的第二重变量。" }
  ],

  /* ============ 七、未来 1—3 个交易日关注事项（具体事件） ============ */
  watchlist: [
    { date: "10月29日（周四）", event: "美国9月核心PCE物价指数、Q3 GDP初值、初请失业金人数（北京时间20:30）", impact: "核心PCE是美联储首选通胀指标、验证粘性通胀与12月加息路径；Q3 GDP反映增长动能，共同决定宏观压制是否延续" },
    { date: "10月29日（周四）盘后", event: "亚马逊（AMZN）公布Q3财报", impact: "AWS增速与资本开支指引是超大规模厂商「AI变现」验证的最后一环，Alphabet盘后大跌后市场对亚马逊自由现金流格外敏感" },
    { date: "10月29日（周四）盘后", event: "英特尔（INTC）公布Q3财报", impact: "英特尔财报影响半导体制造与代工叙事，其资本开支与先进制程进展受市场关注" },
    { date: "10月29日（周四）", event: "闪迪（SNDK）公布Q3财报；三星电子公布Q3正式财报", impact: "闪迪财报验证NAND定价与长期供应协议；三星与SK海力士创纪录业绩印证HBM4景气兑现" },
    { date: "10月30日（周五）", event: "埃克森美孚、雪佛龙等能源巨头财报 + 苹果产业链动态", impact: "油价高位下能源股财报受关注，间接影响通胀与利率预期" }
  ],

  /* ============ 八、页脚免责声明 ============ */
  disclaimer:
    "本报告基于公开市场信息整理，仅供华泰期货内部研究参考，不构成任何投资建议。股价数据以交易所官方为准；新闻以原始来源（SEC / 白宫 / BIS / Treasury / BEA / BLS / Federal Reserve / Reuters 等）为准。投资有风险，决策需谨慎。"
};
