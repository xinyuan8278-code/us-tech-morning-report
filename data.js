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
    reportDate: "2026年08月24日",   // 报告发布日期
    tradeDate: "2026年08月21日",    // 对应美股交易日（前一交易日）
    author: "华泰期货 · 研究",
    tag: "每日市场跟踪"
  },

  /* ============ 二、市场概览 ============ */
  overview: {
    /* 简短概括：指数变化 + 个股变化 + 重大事件 */
    text: "8月21日美股反弹，纳指、标普均涨0.43%、纳指100涨0.33%，但周线仍跌（标普-1.43%、纳指-2.05%）。长债收益率高位压制成长股，资金转向金融与贵金属。七巨头分化：谷歌+1.22%、博通+1.21%、AMD+0.81%领涨，英伟达-0.98%领跌。周末消息面聚焦英伟达AI服务器涨价超15%、与SK海力士/美光签存储长约。本周聚焦英伟达财报、7月PCE与杰克逊霍尔沃什讲话。",
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
    { name: "Alphabet",  code: "GOOGL", change: "-0.00%", driver: "AI/云与自研TPU支撑，广告韧性，领涨反弹+1.22%" },
    { name: "Broadcom",  code: "AVGO",  change: "-0.00%", driver: "超600亿美元AI债务融资预期提振，定制AI芯片(ASIC)需求，涨+1.21%" },
    { name: "AMD",       code: "AMD",   change: "-0.00%", driver: "服务器CPU与MI系列加速器需求，止跌反弹+0.81%" },
    { name: "Meta",      code: "META",  change: "-0.00%", driver: "前期大跌后企稳，反弹+0.75%" },
    { name: "Microsoft", code: "MSFT",  change: "-0.00%", driver: "云计算与AI稳健，随大盘反弹+0.43%" },
    { name: "Sandisk",   code: "SNDK",  change: "-0.00%", driver: "存储高位整固，AI闪存需求支撑，微跌-0.28%" },
    { name: "Amazon",    code: "AMZN",  change: "-0.00%", driver: "消费与AWS承压，收跌-0.57%" },
    { name: "Apple",     code: "AAPL",  change: "-0.00%", driver: "消费走弱叠加Vision Pro/Siri裁员消息，收跌-0.63%" },
    { name: "Micron",    code: "MU",    change: "-0.00%", driver: "前日大涨后高位整固，微跌-0.77%" },
    { name: "NVIDIA",    code: "NVDA",  change: "-0.00%", driver: "财报前获利回吐，AI服务器涨价与循环融资担忧，领跌-0.98%" }
  ],

  /* ============ 五、重要科技与政策新闻（一手来源） ============ */
  news: [
    {
      title: "英伟达AI服务器明年起涨价超15%：内存成本飙升，成本压力沿供应链传导",
      originalTitle: "Nvidia reportedly warns biggest customers of 15% price hikes on AI servers — memory costs continue to soar",
      source: "Tom's Hardware（转引 Bloomberg）",
      time: "2026年08月23日",
      type: "行业媒体",
      url: "https://www.tomshardware.com/pc-components/dram/nvidia-reportedly-warns-biggest-customers-of-15-percent-price-hikes-on-ai-servers",
      link: "https://www.tomshardware.com/pc-components/dram/nvidia-reportedly-warns-biggest-customers-of-15-percent-price-hikes-on-ai-servers",
      summary: "据彭博援引知情人士，因DRAM成本飙升，英伟达已通知微软、谷歌、甲骨文等大客户：搭载其AI芯片的服务器价格将上涨超15%，明年年初出货的Vera Rubin与Grace Blackwell系统率先生效，涨幅取决于芯片代际与内存配置。这印证存储三巨头（三星、SK海力士、美光）空前议价权，也意味着即便毛利率75%的英伟达也不愿再自行消化成本。涨价推高AI数据中心总拥有成本，加剧市场对AI基建投资回报的担忧。",
      impact: {
        direction: "中性",
        companies: "英伟达、存储三巨头、云厂商",
        industry: "AI芯片、存储、数据中心",
        logic: "存储成本沿供应链传导，利好存储链、施压AI基建成本与ROI"
      }
    },
    {
      title: "英伟达与SK海力士、美光签多年DRAM/HBM供应长约，锁定Vera Rubin存储供给",
      originalTitle: "Nvidia Reportedly Secures DRAM and HBM Memory Supply From SK Hynix and Micron Until 2028",
      source: "eTeknix（转引 Edgewater Research）",
      time: "2026年08月21日",
      type: "行业媒体",
      url: "https://www.eteknix.com/nvidia-reportedly-secures-dram-and-hbm-memory-supply-from-sk-hynix-and-micron-until-2028/",
      link: "https://www.eteknix.com/nvidia-reportedly-secures-dram-and-hbm-memory-supply-from-sk-hynix-and-micron-until-2028/",
      summary: "半导体供应链研究机构Edgewater Research报告显示，英伟达已与SK海力士、美光签署多年期HBM及DRAM供应协议，为Vera Rubin平台锁定存储供给，行业合约正从一年期转向3—5年长约。即便英伟达已下调Rubin的DRAM配置预期，仍选择长约锁货，凸显其对2027—2028年DRAM持续供不应求的判断。存储价格高位运行获得需求端确认，利好美光、闪迪等存储龙头。",
      impact: {
        direction: "利好",
        companies: "美光、闪迪、SK海力士、三星",
        industry: "存储芯片",
        logic: "长约锁定印证存储超级周期延续，强化龙头景气与议价权"
      }
    },
    {
      title: "苹果Vision Pro与Siri团队裁员约200人，战略重心转向AI眼镜",
      originalTitle: "Apple Cuts Jobs in Siri, Vision Pro Immersive Video and Gaming Teams",
      source: "Bloomberg",
      time: "2026年08月21日",
      type: "财经媒体",
      url: "https://www.bloomberg.com/news/articles/2026-08-21/apple-cuts-jobs-in-siri-vision-pro-immersive-video-and-gaming-teams",
      link: "https://www.bloomberg.com/news/articles/2026-08-21/apple-cuts-jobs-in-siri-vision-pro-immersive-video-and-gaming-teams",
      summary: "据彭博Mark Gurman报道，苹果在Siri与Vision Pro团队合计裁员约200人：Vision Pro游戏团队基本解散、沉浸式视频团队缩减（每集制作成本数百万美元但装机量有限），Siri团队则因向基于大模型的Siri AI（iOS 27）迁移而重构。苹果称此举为按产品组合变化重组团队，并新增AI相关岗位。战略重心正从高价头显转向2027年AI智能眼镜，Vision Pro 2最早或于2028年推出。",
      impact: {
        direction: "中性",
        companies: "苹果",
        industry: "消费电子、AI终端",
        logic: "苹果收缩头显、加码AI眼镜与Siri AI，长期影响硬件产品结构"
      }
    },
    {
      title: "英伟达财报前瞻：Jefferies押注营收950亿美元、Q3指引1080亿，「循环融资」成焦点",
      originalTitle: "Jefferies Drops Hot Take on Nvidia Before Earnings",
      source: "Jefferies（经 GuruFocus/TradingView）",
      time: "2026年08月22日",
      type: "财经媒体",
      url: "https://www.tradingview.com/news/gurufocus:eb8996b36094b:0-jefferies-drops-hot-take-on-nvidia-before-earnings",
      link: "https://www.tradingview.com/news/gurufocus:eb8996b36094b:0-jefferies-drops-hot-take-on-nvidia-before-earnings",
      summary: "Jefferies分析师Blayne Curtis预计英伟达8月26日盘后公布的Q2营收达950亿美元（高于920.7亿一致预期），Q3指引1080亿美元（高于共识约43亿），并预计Vera Rubin四季度开始放量、年底前出货超1.3万机架。但他同时警告，英伟达对OpenAI相关融资可能重燃循环融资担忧——即英伟达支持的融资最终回流购买其GPU。高预期下，财报仅超预期或已不足以支撑估值。",
      impact: {
        direction: "中性",
        companies: "英伟达及AI硬件链",
        industry: "AI芯片、数据中心",
        logic: "财报定调AI资本开支可持续性，循环融资担忧升温"
      }
    },
    {
      title: "博通洽谈超600亿美元AI芯片债务融资，总额或达千亿美元",
      originalTitle: "Broadcom Seeks More Than $60 Billion in Latest AI Debt Deal",
      source: "Bloomberg",
      time: "2026年08月20日",
      type: "财经媒体",
      url: "https://www.bloomberg.com/news/articles/2026-08-20/broadcom-seeks-more-than-60-billion-in-latest-ai-debt-deal",
      link: "https://www.bloomberg.com/news/articles/2026-08-20/broadcom-seeks-more-than-60-billion-in-latest-ai-debt-deal",
      summary: "博通正与黑石、阿波罗等机构洽谈逾600亿美元债务融资，为Anthropic等公司采购AI芯片与算力提供资金；含约300亿美元次级债后总额或达千亿美元，将成为迄今规模最大的SPV融资。博通为600—700亿美元优先担保债提供部分担保，延续6月350亿美元AI XPV平台模式。这标志AI基建资本开支正从科技公司资产负债表大规模转向债务市场，但也引发市场对卖方担保敞口与CDS走阔的担忧。",
      impact: {
        direction: "利好",
        companies: "博通、Anthropic、英伟达",
        industry: "AI芯片、数据中心",
        logic: "AI基建债务化融资扩围，强化定制ASIC需求与资本开支叙事"
      }
    },
    {
      title: "三星董事会审议逾720亿美元股东回报，存储超级周期现金兑现",
      originalTitle: "Samsung board set to discuss huge shareholder return package on Friday",
      source: "Reuters（经 MarketScreener）",
      time: "2026年08月21日",
      type: "财经媒体",
      url: "https://in.marketscreener.com/news/samsung-elec-to-convene-board-meeting-friday-afternoon-to-discuss-shareholder-return-plan-says-sour-ce7859d3d18afe2c",
      link: "https://in.marketscreener.com/news/samsung-elec-to-convene-board-meeting-friday-afternoon-to-discuss-shareholder-return-plan-says-sour-ce7859d3d18afe2c",
      summary: "三星周五董事会审议新股东回报方案，媒体预计超100万亿韩元（约720亿美元），含特别股息、回购与注销；SK海力士本周已宣布40万亿韩元回购注销。AI存储超级周期下，两大存储巨头年底净现金合计约2630亿美元，现金流正兑现为股东回报，缓解存储周期见顶担忧。叠加三星代工价上调10—15%、英伟达AI服务器涨价，存储与代工量价齐升格局进一步强化。",
      impact: {
        direction: "利好",
        companies: "三星、SK海力士、美光、闪迪",
        industry: "存储芯片、半导体代工",
        logic: "存储超级周期现金流兑现为股东回报，强化板块景气"
      }
    },
    {
      title: "杰克逊霍尔前瞻：沃什8月28日发表主席首秀演讲，主题「金融创新」",
      originalTitle: "Jackson Hole Is a Forum For Warsh's Fed Vision",
      source: "Barron's（经 TradingView Dow Jones）",
      time: "2026年08月22日",
      type: "财经媒体",
      url: "https://www.tradingview.com/news/DJN_DN20260821008689:0",
      link: "https://www.tradingview.com/news/DJN_DN20260821008689:0",
      summary: "美联储主席沃什将于8月28日（美东上午10点）在杰克逊霍尔年会发表上任后首次主旨演讲，今年主题为金融创新对支付与政策的影响。在通胀连续五年高于2%、30年期美债收益率触及2007年以来新高背景下，市场关注沃什是否给出可验证的抗通胀反应函数；若仍停留在空泛承诺，长端利率或继续上行冲击成长股。此前7月议息会议他削减前瞻指引，已引发市场对美联储公信力的质疑。",
      impact: {
        direction: "中性",
        companies: "全市场、高久期科技股",
        industry: "货币政策、利率",
        logic: "决定长端利率与成长股估值方向，市场定价对措辞高度敏感"
      }
    }
  ],

  /* ============ 六、当日最值得关注的 3 个交易逻辑 ============ */
  logics: [
    { title: "内存「量价齐升 + 供给锁定」成为存储板块新主线",
      text: "英伟达AI服务器因DRAM成本飙升涨价超15%，并与SK海力士、美光签多年长约锁定存储供给，叠加三星逾720亿美元股东回报与代工涨价，存储超级周期从需求端到成本端全面验证。DRAM合约价Q2环比涨58%—63%，供给紧张或延续至2027—2028年，美光、闪迪等龙头现金流与议价权同步扩张。" },
    { title: "AI资本开支「债务化 + 循环融资」风险成为关键变量",
      text: "博通超600亿美元AI债务融资、英伟达5000亿美元基建融资平台，令AI基建加速转向债务市场；同时英伟达对OpenAI融资担保引发循环融资担忧——支持的资金最终回流购买其GPU。Jefferies已明确提示该风险，财报季若AI公司收入不及预期，债务化融资的卖方担保敞口与CDS走阔可能成为新的脆弱点。" },
    { title: "长端利率仍是成长股估值「总开关」",
      text: "30年期美债收益率周内触及2007年以来新高，财政部回购不改赤字路径，长端抛压未除。本周英伟达财报、7月PCE（8/26）、美联储主席沃什杰克逊霍尔讲话（8/28）三大事件将决定利率与AI两条主线的走向，高久期科技成长股的贴现率压力能否缓解，取决于长端能否有效回落。" }
  ],

  /* ============ 七、未来 1—3 个交易日关注事项（具体事件） ============ */
  watchlist: [
    { date: "08月25日", event: "美国8月谘商会消费者信心指数、6月房价指数", impact: "消费与住房数据，影响对经济韧性的定价" },
    { date: "08月26日", event: "美国7月PCE物价指数 + Q2 GDP终值（修订）", impact: "美联储首选通胀指标，决定9月FOMC加息/降息路径定价" },
    { date: "08月26日", event: "NVIDIA 2027财年Q2财报（盘后）", impact: "AI芯片需求与数据中心资本开支的风向标，定调AI硬件板块" },
    { date: "08月27日", event: "Marvell 2027财年Q2财报（盘后）", impact: "定制ASIC与AI光互连需求信号，检验高估值能否兑现" },
    { date: "08月27—29日", event: "Jackson Hole 全球央行年会（沃什 8月28日上午10点主旨演讲）", impact: "关注对通胀、长债利率与货币政策路径的表态" },
    { date: "08月底", event: "三星电子董事会批准股东回报计划细节", impact: "存储板块股东回报与情绪延续" },
    { date: "09月02日", event: "Broadcom 财报（盘后，预计）", impact: "AI定制芯片(ASIC)与数据中心网络需求信号" }
  ],

  /* ============ 八、页脚免责声明 ============ */
  disclaimer:
    "本报告基于公开市场信息整理，仅供华泰期货内部研究参考，不构成任何投资建议。股价数据以交易所官方为准；新闻以原始来源（SEC / 白宫 / BIS / Treasury / Reuters / Bloomberg 等）为准。投资有风险，决策需谨慎。"
};
