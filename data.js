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
    reportDate: "2026年08月27日",   // 报告发布日期
    tradeDate: "2026年08月26日",    // 对应美股交易日（前一交易日）
    author: "华泰期货 · 研究",
    tag: "每日市场跟踪"
  },

  /* ============ 二、市场概览 ============ */
  overview: {
    /* 简短概括：指数变化 + 个股变化 + 重大事件 */
    text: "8月26日美股三大指数小幅收跌，道指-0.21%、标普-0.02%、纳指-0.08%，7月PCE同比3.7%略超预期压制风险偏好。大型科技分化：苹果+1.15%、Meta+1.07%领涨，英伟达财报前避险-1.59%。盘后英伟达Q2营收962亿美元超预期、Q3指引首破千亿，盘后涨超4%。存储芯片小幅反弹，费半+0.20%。本周聚焦沃什杰克逊霍尔讲话。",
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
    { name: "Sandisk",   code: "SNDK",  change: "-0.00%", driver: "存储股超跌反弹+1.26%，NAND高价周期遭供给质疑后技术性修复，成交量仍高企" },
    { name: "Apple",     code: "AAPL",  change: "-0.00%", driver: "消费电子防御属性凸显，资金从AI硬件轮动至平台股，领涨+1.15%" },
    { name: "Meta",      code: "META",  change: "-0.00%", driver: "与全美48州达成最高180亿美元青少年保护和解，利空出尽领涨大型科技+1.07%" },
    { name: "Microsoft", code: "MSFT",  change: "-0.00%", driver: "云计算与AI稳健，Azure需求强劲，大型科技中抗跌，涨+0.95%" },
    { name: "Micron",    code: "MU",    change: "-0.00%", driver: "存储股企稳反弹+0.58%，等待英伟达财报验证HBM与AI存储需求" },
    { name: "AMD",       code: "AMD",   change: "-0.00%", driver: "AI算力链随费半企稳，GPU与数据中心需求支撑，涨+0.37%" },
    { name: "Amazon",    code: "AMZN",  change: "-0.00%", driver: "AWS与消费韧性，盘后宣布追加部署200万块英伟达GPU，微跌-0.30%" },
    { name: "Broadcom",  code: "AVGO",  change: "-0.00%", driver: "OpenAI自研芯片Jalapeño合作方，AI定制ASIC叙事，财报前小幅回落-0.32%" },
    { name: "Alphabet",  code: "GOOGL", change: "-0.00%", driver: "自研TPU+AI云，通信服务板块当日领跌拖累，跌-1.43%" },
    { name: "NVIDIA",    code: "NVDA",  change: "-0.00%", driver: "Q2财报前避险-1.59%，盘后营收962亿超预期、Q3指引首破千亿，盘后涨超4%" }
  ],

  /* ============ 五、重要科技与政策新闻（一手来源） ============ */
  news: [
    {
      title: "英伟达Q2营收962亿美元同比翻倍，Q3指引首破千亿，FY2028预计再增70%",
      originalTitle: "NVIDIA Announces Financial Results for Second Quarter Fiscal 2027",
      source: "NVIDIA 官方新闻室（nvidianews.nvidia.com）",
      time: "2026年08月26日",
      type: "官方",
      url: "https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-second-quarter-fiscal-2027",
      link: "https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-second-quarter-fiscal-2027",
      summary: "英伟达公布2027财年Q2（截至7月26日）业绩：营收962.2亿美元，同比+106%、环比+18%，超市场预期；数据中心收入890亿美元，同比+117%，占总营收92.5%；调整后EPS 2.22美元。Q3指引营收1080亿美元（±2%），首次单季破千亿，毛利率指引74%略低于预期。管理层预计FY2028营收增长约70%（远超分析师45%预期），并称供应仍是增长瓶颈。亚马逊AWS承诺追加部署200万块GPU，Vera Rubin平台全面量产；公司与Apollo、贝莱德、高盛等合作调动超5000亿美元第三方资本建设AI基建，循环融资争议再起。盘后先跌4%后涨超4%。",
      impact: {
        direction: "利好",
        companies: "英伟达及AI硬件链、云厂商",
        industry: "AI芯片、数据中心",
        logic: "AI算力需求再获验证，但毛利率指引偏软、供应瓶颈与存储成本传导压制利润率"
      }
    },
    {
      title: "美国7月PCE同比3.7%略超预期，实际消费停滞，9月加息概率升至38%",
      originalTitle: "Personal Income and Outlays, July 2026",
      source: "美国商务部经济分析局（BEA）",
      time: "2026年08月26日",
      type: "官方",
      url: "https://www.bea.gov/news/2026/personal-income-and-outlays-july-2026",
      link: "https://www.bea.gov/news/2026/personal-income-and-outlays-july-2026",
      summary: "BEA数据显示，7月PCE物价指数同比+3.7%（略高于预期3.6%）、环比+0.2%；核心PCE同比+3.3%、环比+0.2%，符合预期，但已连续第65个月高于美联储2%目标。个人收入环比+0.4%，但实际PCE环比近乎零增长，显示高物价侵蚀购买力、居民消费承压。同日Q2 GDP第二次预估维持年化1.5%不变。数据公布后美债收益率走高、美元走强，CME FedWatch显示9月加息概率升至38.1%。通胀粘性强化了市场对周五沃什杰克逊霍尔讲话的依赖。",
      impact: {
        direction: "利空",
        companies: "全市场、高久期科技成长股",
        industry: "利率、流动性",
        logic: "通胀粘性压制降息预期、抬高成长股贴现率，长端利率成核心约束"
      }
    },
    {
      title: "美股三大指数小幅收跌，PCE超预期叠加英伟达财报前观望压制风险偏好",
      originalTitle: "Wall Street stocks end tad lower after hot inflation data ahead of Nvidia earnings",
      source: "Reuters（经 AOL）",
      time: "2026年08月26日",
      type: "财经媒体",
      url: "https://www.aol.com/articles/nvidia-earnings-jackson-hole-test-100333000.html",
      link: "https://www.aol.com/articles/nvidia-earnings-jackson-hole-test-100333000.html",
      summary: "周三美股三大指数小幅收跌：道指-0.21%至53463.88、标普-0.02%至7675.70、纳指-0.08%至26130.20。7月PCE略高于预期令通胀前景再生变数，多数投资者在英伟达盘后财报前保持观望。Meta因与各州和解领涨大型科技，苹果涨1.1%；Moderna跌5.8%拖累医疗板块。市场焦点转向周五美联储主席沃什杰克逊霍尔讲话，以及9月议息会议的加息预期升温。",
      impact: {
        direction: "中性",
        companies: "全市场、大型科技",
        industry: "美股大盘",
        logic: "通胀与财报双重变量压制风险偏好，成交清淡、观望情绪浓厚"
      }
    },
    {
      title: "Meta同意最高支付180亿美元和解全美各州青少年社交媒体成瘾诉讼",
      originalTitle: "Meta settles landmark child harm case for $18 billion and promises changes to its platforms",
      source: "CNN（经 Yahoo Finance）",
      time: "2026年08月26日",
      type: "财经媒体",
      url: "https://finance.yahoo.com/media-advertising/articles/meta-settles-landmark-child-harm-141832258.html",
      link: "https://finance.yahoo.com/media-advertising/articles/meta-settles-landmark-child-harm-141832258.html",
      summary: "Meta同意支付最高180亿美元，并对其Facebook、Instagram平台作出重大产品调整，以和解美国29个州检方指控其设计成瘾性功能危害青少年心理健康的诉讼。协议覆盖48个州及华盛顿特区，款项未来10年支付，其中约53亿美元（30%）需YouTube、TikTok等竞品同步实施类似青少年保护措施才触发。Meta还须默认将18岁以下用户日使用时长限制在2小时、关闭上学时段推送通知等。这是史上最大科技公司和解案，Meta不承认不当行为，股价当日+1.07%领涨大型科技，利空出尽。",
      impact: {
        direction: "利好",
        companies: "Meta及社交媒体板块",
        industry: "互联网平台、监管",
        logic: "监管诉讼不确定性消除、利空出尽，但长期或约束青少年用户时长与广告变现"
      }
    },
    {
      title: "OpenAI公布首款自研推理芯片Jalapeño跑分，每瓦吞吐达英伟达GB300的1.5-1.9倍",
      originalTitle: "OpenAI Says Its Jalapeño Chip Beats Nvidia's GB300 on Efficiency",
      source: "Times of AI（转引 OpenAI 公开基准）",
      time: "2026年08月25日",
      type: "行业媒体",
      url: "https://www.timesofai.com/news/openai-benchmarks-its-own-chip-against-the-nvidia-it-still-buys",
      link: "https://www.timesofai.com/news/openai-benchmarks-its-own-chip-against-the-nvidia-it-still-buys",
      summary: "在Hot Chips大会上，OpenAI公布与博通合作开发的首款自研推理芯片Jalapeño首批公开跑分：在GPT-OSS 120B、DeepSeek R1 670B、Kimi K2.5 1T三款开源模型上，其每瓦吞吐量为英伟达GB200/GB300系统的1.5-1.9倍，端到端延迟低1.7-3.6倍。该芯片专为大模型推理设计，计划2026年底小规模部署、2027年上量，OpenAI称将继续大规模采购英伟达芯片。作为英伟达最大客户之一，OpenAI自研芯片印证头部云厂商「自研+外购」并行的趋势，对英伟达长期定价权构成边际压力。",
      impact: {
        direction: "中性偏空",
        companies: "英伟达、博通、OpenAI",
        industry: "AI推理芯片、定制ASIC",
        logic: "头部客户自研替代边际升温，长期稀释英伟达推理市场份额与议价能力"
      }
    },
    {
      title: "Salesforce季报超预期、Anthropic投资贡献26亿美元收益，盘后大涨12%",
      originalTitle: "Salesforce 2Q Profit, Revenue Rise on Demand for AI, Data Products",
      source: "Dow Jones Newswires（经 TradingView）",
      time: "2026年08月26日",
      type: "财经媒体",
      url: "https://www.tradingview.com/news/DJN_DN20260826008452:0",
      link: "https://www.tradingview.com/news/DJN_DN20260826008452:0",
      summary: "Salesforce公布2027财年Q2业绩：营收113.5亿美元、同比+11%，超预期；调整后EPS 5.90美元，远超预期的3.27美元，其中Anthropic投资带来26亿美元未实现收益是利润暴增主因。AI产品Agentforce年化收入超15亿美元、同比+240%，与Data 360合计年化经常性收入近39亿美元。公司上调全年营收指引至461亿-464亿美元，并宣布与Anthropic深化合作推出Claudeforce。盘后股价涨超12%，显示AI需求正从算力硬件层向软件应用层扩散，是英伟达财报之外的AI商业化重要信号。",
      impact: {
        direction: "利好",
        companies: "Salesforce、Anthropic、AI应用层",
        industry: "企业软件、AI应用",
        logic: "AI商业化在应用层兑现业绩，验证AI需求向软件与Agent层扩散"
      }
    }
  ],

  /* ============ 六、当日最值得关注的 3 个交易逻辑 ============ */
  logics: [
    { title: "英伟达财报验证AI算力需求，但市场焦点从「能否超预期」转向「增长质量与成本传导」",
      text: "英伟达Q2营收962亿超预期、Q3指引1080亿首破千亿、FY2028再增70%，需求端依然强劲；但毛利率指引从75%降至74%，并预警内存成本飙升将把毛利率在Q4压至71%-72%区间，令盘后股价一度跌4%。这说明市场对英伟达的定价已从「是否超预期」转向「利润率与供应瓶颈」，存储涨价开始反噬算力龙头自身利润，AI硬件链的利润分配正在重构，也解释了此前存储股与算力股的分化。" },
    { title: "通胀粘性压制降息空间，长端利率仍是科技成长股估值的「总开关」",
      text: "7月PCE同比3.7%略超预期、连续65个月高于2%目标，实际消费近乎停滞但通胀未退，9月加息概率升至38.1%。美债收益率走高、美元走强，高久期科技成长股的贴现率压力未除。周五美联储主席沃什杰克逊霍尔讲话成为决定利率路径与风险偏好的关键变量，市场对任何「抗通胀反应函数」的表态高度敏感，若表态偏鹰则成长股估值或再度承压。" },
    { title: "AI叙事从「算力硬件」向「应用层」与「自研芯片」扩散，英伟达面临双重边际压力",
      text: "Salesforce盘后大涨12%、Agentforce年化收入同比+240%，验证AI商业化正在应用层兑现；而OpenAI自研芯片Jalapeño跑分超越英伟达GB300，印证头部云厂商「自研+外购」并行。AI需求蛋糕仍在扩大，但竞争格局与利润分配正在变化：算力龙头需同时应对存储成本上升与客户自研替代，应用层则迎来业绩兑现期，资金或在硬件与应用之间重新配置。" }
  ],

  /* ============ 七、未来 1—3 个交易日关注事项（具体事件） ============ */
  watchlist: [
    { date: "08月27日", event: "Marvell 2027财年Q2财报（盘后）", impact: "定制ASIC与AI光互连需求信号，检验AI硬件链高估值能否兑现" },
    { date: "08月27日", event: "英伟达财报次日交易（美股盘前/开盘）", impact: "检验盘后+4%能否转化为正收益，定调AI硬件链短期情绪" },
    { date: "08月28日", event: "Jackson Hole 全球央行年会：美联储主席沃什主旨演讲（美东上午10点）", impact: "决定长端利率与成长股估值方向，市场对政策反应函数高度敏感" },
    { date: "09月15-16日", event: "美联储FOMC议息会议", impact: "9月加息概率约38%，政策路径定调，影响成长股贴现率" }
  ],

  /* ============ 八、页脚免责声明 ============ */
  disclaimer:
    "本报告基于公开市场信息整理，仅供华泰期货内部研究参考，不构成任何投资建议。股价数据以交易所官方为准；新闻以原始来源（SEC / 白宫 / BIS / Treasury / BEA / Reuters / Bloomberg 等）为准。投资有风险，决策需谨慎。"
};
