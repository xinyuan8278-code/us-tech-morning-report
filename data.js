/**
 * ============================================================
 *  美股科技板块前一交易日行情日报 —— 数据文件（每日只需改这里）
 *  （2026-10-16 更新：对应美股交易日 2026-10-15）
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
    reportDate: "2026年10月16日",   // 报告发布日期（周五）
    tradeDate: "2026年10月15日",    // 对应美股交易日（前一交易日，周四）
    author: "华泰期货 · 研究",
    tag: "每日市场跟踪"
  },

  /* ============ 二、市场概览 ============ */
  overview: {
    /* 简短概括：指数变化 + 个股变化 + 重大事件 */
    text: "10月15日美股深V反弹，三大指数全线收涨：道指+1.08%至52177.69、标普+0.33%至7744.06、纳指+0.08%至26713.03（盘中一度跌逾1.4%后收复失地）。科技股分化，微软+1.08%、美光+1.87%率先转涨，CoreWeave在黄仁勋力挺下大涨5.94%，高通+3.35%、ARM+2.85%；英伟达-1.84%、英特尔-2.80%、戴尔-6.80%（遭巴克莱下调评级）。费城半导体指数-0.88%连续第七日下跌、自6月高点累跌超20%进入技术性熊市。10年期美债收益率跌至5.086%创8月以来最大单日跌幅。台积电Q3净利同比+68.7%六连季创新高。",
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
    { name: "Dell Technologies（戴尔科技）", code: "DELL", change: "-0.00%", note: "超跌：单日大跌约6.8%，连续第二日重挫；巴克莱将其评级由'增持'下调至'中性'、目标价由603美元下调至574美元，理由是企业AI支出尚未出现实质性拐点、内存成本高企拖累利润率" },
    { name: "Micron（美光）", code: "MU", change: "-0.00%", note: "超涨（相对板块逆势）：单日上涨约1.87%率先转涨、成交额352.55亿美元居全市场之首；存储板块多空博弈激烈，盘初一度跌超6%后强势收复，超跌反弹叠加台积电Q3强劲财报确认AI存储需求韧性" }
  ],

  /* ============ 四、重点公司行情表 ============ */
  /* 超涨/超跌个股放最上方；无新闻的公司驱动因素简要说明即可 */
  stocks: [
    { name: "NVIDIA",    code: "NVDA",  change: "-0.00%", driver: "下跌约1.84%；费城半导体指数七连跌背景下承压，AI高负债企业债务担忧持续压制芯片龙头估值；CEO黄仁勋力挺CoreWeave（英伟达第二大股东、持股约10%）称无需兜底，但信用市场对AI基建融资可持续性的疑虑仍在" },
    { name: "AMD",       code: "AMD",   change: "-0.00%", driver: "下跌约1.50%；费城半导体指数连续第七日下跌、自6月高点累跌超20%进入技术性熊市，AI硬件板块整体承压，台积电财报强劲未扭转芯片股情绪" },
    { name: "Micron",    code: "MU",    change: "-0.00%", driver: "逆势上涨约1.87%、成交额居全市场之首；盘初一度跌超6%后率先转涨，存储板块超跌反弹；台积电Q3财报确认AI存储（HBM）需求韧性，但长鑫存储产能扩张引发的供应过剩担忧仍是压制因素" },
    { name: "Microsoft", code: "MSFT",  change: "-0.00%", driver: "上涨约1.08%领涨大型科技；资金从高杠杆AI基建向现金流型蓝筹避险，10年期美债收益率回落至5.086%缓解估值压力" },
    { name: "Alphabet",  code: "GOOGL", change: "-0.00%", driver: "上涨约0.45%；美债收益率回落、市场避险情绪转向现金流型科技蓝筹，谷歌云与TPU叙事在AI板块内相对稳健" },
    { name: "Amazon",    code: "AMZN",  change: "-0.00%", driver: "上涨约0.27%；作为Anthropic战略投资人，其Q3营收168亿美元（环比+45%）利好AWS AI叙事；资金避险轮动至现金流型蓝筹" },
    { name: "Apple",     code: "AAPL",  change: "-0.00%", driver: "微跌约0.28%；前一交易日刚突破5万亿美元市值里程碑后小幅回吐，防御属性延续，沃尔玛市值一度超越AMD反映资金从芯片向消费蓝筹迁移" },
    { name: "Meta",      code: "META",  change: "-0.00%", driver: "微跌约0.11%；Muse智能体等AI应用层此前涨幅回吐，AI基建高资本开支在利率环境下承压，但避险情绪支撑大盘蓝筹" },
    { name: "Broadcom",  code: "AVGO",  change: "-0.00%", driver: "下跌约0.55%；费城半导体指数七连跌背景下承压，OpenAI/Anthropic定制ASIC高负债融资叙事受AI债务担忧拖累" },
    { name: "SanDisk",   code: "SNDK",  change: "-0.00%", driver: "下跌约0.61%、跌幅较盘初（一度跌超8%）明显收窄；存储板块超跌后企稳，美光转涨带动存储情绪修复，但长鑫存储竞争担忧仍在" }
  ],

  /* ============ 五、重要科技与政策新闻（一手来源） ============ */
  news: [
    {
      title: "台积电Q3净利润同比大增68.7%至7631亿新台币，连续第六季创纪录，2nm营收占比升至8%",
      originalTitle: "TSMC Q3 profit jumps 69% to record, beating expectations",
      source: "Reuters（经 MarketScreener 转载）",
      time: "2026年10月15日",
      type: "财经媒体",
      url: "https://au.marketscreener.com/news/tsmc-q3-profit-jumps-69-to-record-beating-expectations-ce785dd3d888f124",
      link: "https://au.marketscreener.com/news/tsmc-q3-profit-jumps-69-to-record-beating-expectations-ce785dd3d888f124",
      summary: "全球最大晶圆代工厂台积电10月15日公布Q3财报，净利润同比大增68.7%至新台币7631亿元（约235.9亿美元），超出LSEG SmartEstimate预估的7463亿新台币，连续第六个季度创纪录。Q3营收同比增50.9%至新台币1.49万亿元，毛利率66.4%。先进制程中2nm营收占比由上季3%升至8%、3nm占33%、5nm占28%。CEO魏哲家称先进芯片需求'极其强劲'，2nm放量提速，公司正'竭尽全力'扩产以满足需求，但鉴于零部件涨价与经济不确定性，对2027年规划保持审慎；并称正评估亚利桑那州以外的美国扩产选址（已派团队赴得州）。",
      impact: {
        direction: "利好（AI芯片/半导体基本面）",
        companies: "台积电、英伟达、苹果、AMD、博通（客户）",
        industry: "半导体制造、先进制程、AI芯片",
        logic: "台积电连续六季创纪录利润与强劲的2nm放量，确认AI芯片需求的结构性韧性，是当日芯片股情绪的底部支撑；但股价收跌1.73%显示'创纪录已成新常态'、市场以完美标准苛求指引"
      }
    },
    {
      title: "黄仁勋力挺CoreWeave称无需英伟达兜底，但信用市场仍定价其5年违约概率超60%",
      originalTitle: "CoreWeave's slump spotlights growing burden of debt behind AI boom",
      source: "Reuters（经 Livemint 转载）",
      time: "2026年10月15日",
      type: "财经媒体",
      url: "https://www.livemint.com/companies/coreweaves-slump-spotlights-growing-burden-of-debt-behind-ai-boom-11792094289087.html",
      link: "https://www.livemint.com/companies/coreweaves-slump-spotlights-growing-burden-of-debt-behind-ai-boom-11792094289087.html",
      summary: "英伟达持股的AI云服务商CoreWeave周四企稳反弹（收涨约5.9%，早盘一度再跌8.3%至2025年5月以来新低）。该公司亏损却背负约500亿美元债务，成为'AI数据中心热潮由信贷驱动'担忧的焦点。英伟达CEO黄仁勋在斯德哥尔摩受访时淡化担忧：'CoreWeave的财务实力每天都在改善，我认为英伟达无需为其兜底，我很乐观，其资本成本实际上在下降。'但信用市场仍紧张：CoreWeave债券收益率约15%（马斯克回应'yikes'），违约互换（CDS）成本升至约1000基点、隐含5年违约概率近63%（一年前约30%）。IG集团分析师指出'AI需求与盈利商业模式是两码事'。",
      impact: {
        direction: "中性偏空（AI基建融资链/neocloud）",
        companies: "CoreWeave、英伟达、微软、OpenAI、Meta、Alphabet",
        industry: "AI基础设施、数据中心、信用市场",
        logic: "黄仁勋背书缓解了CoreWeave个股的极端抛售，但信用市场定价的违约风险持续高企，揭示AI基建'循环融资'脆弱性未解；融资成本若继续上行，高杠杆玩家即使需求强劲也难获保障"
      }
    },
    {
      title: "美国9月PPI环比涨1.3%创四年半最大升幅，零售销售超预期，但美联储官员淡化10月加息前景",
      originalTitle: "Dollar retreats from 18-month high despite strong inflation data",
      source: "Reuters（经 Kitco 转载）",
      time: "2026年10月15日",
      type: "财经媒体",
      url: "https://www.kitco.com/news/off-the-wire/2026-10-15/dollar-retreats-18-month-high-despite-strong-inflation-data",
      link: "https://www.kitco.com/news/off-the-wire/2026-10-15/dollar-retreats-18-month-high-despite-strong-inflation-data",
      summary: "美国9月生产者物价指数（PPI）环比上涨1.3%、创四年半最大升幅，进一步显示通胀压力正向能源之外扩散；9月零售销售因汽油涨价超预期增长，当周初请失业金人数微增至19.9万（连续第五周低于20万），指向消费需求韧性与劳动力市场稳定。但美债周四反弹、美元自18个月高位回落，因美联储官员表态令市场对10月加息预期降温：美联储负责监管的副主席鲍曼与旧金山联储主席戴利均称可在10月27-28日会议前等待更多数据。CME FedWatch显示交易员目前预计10月维持利率不变的概率升至72%（一个月前53%）。",
      impact: {
        direction: "中性（利率路径）",
        companies: "大型科技、半导体、AI基建企业",
        industry: "宏观、货币政策、通胀",
        logic: "PPI超预期本应强化加息担忧，但官员'等更多数据'的表态压制了短期加息预期、推动美债收益率回落至5.086%，缓解了高估值科技股的估值压力，是当日市场深V反弹的宏观关键"
      }
    },
    {
      title: "美股深V反弹三大指数收涨，道指涨1.08%，资金从芯片转向医疗/消费避险",
      originalTitle: "New York Stock Market Rises on Falling Treasury Yields",
      source: "ChosunBiz（韩联社英文，援引Reuters/Tradeweb）",
      time: "2026年10月15日",
      type: "财经媒体",
      url: "https://www.chosun.com/english/world-en/2026/10/16/W5TJFHU4VNFXHL34OBYBVHYFJU/",
      link: "https://www.chosun.com/english/world-en/2026/10/16/W5TJFHU4VNFXHL34OBYBVHYFJU/",
      summary: "10月15日美股三大指数集体收涨，道指+1.08%至52177.69、标普+0.33%至7744.06、纳指+0.08%至26713.03。科技股早盘延续抛压、纳指一度跌逾1.4%，但午后情绪企稳收复全部失地。尽管Anthropic Q3营收168亿美元（环比+45%）、台积电创纪录净利等AI公司财报强劲，投资者情绪仍未充分修复；CoreWeave早盘跌近10%后收涨5.9%，黄仁勋在斯德哥尔摩称'CoreWeave竞争力日益增强'被视为情绪转折点。10年期美债收益率跌至5.086%、创8月1日以来最大单日跌幅，避险资金回流推动医疗（+1.84%）、材料（+1.71%）领涨，能源（-1.55%）、科技（-0.54%）领跌。",
      impact: {
        direction: "中性偏多（大盘）/ 分化",
        companies: "道指成分股、医疗、消费、大型科技",
        industry: "美股大盘、板块轮动、利率",
        logic: "美债收益率回落是反弹核心驱动，但资金从AI芯片向医疗/消费/材料避险，显示市场对AI估值仍存疑虑；'道指领涨、纳指微涨'的格局反映风险偏好结构性修复而非全面回暖"
      }
    },
    {
      title: "费城半导体指数七连跌、自6月高点累跌超20%进入技术性熊市，六日市值蒸发1.6万亿美元",
      originalTitle: "Semiconductor Index Slides for Second Day; Nvidia Down 1.8%, Micron Rebounds",
      source: "BigGo Finance（援引CNBC/英文行情）",
      time: "2026年10月15日",
      type: "行业媒体",
      url: "https://finance.biggo.com/news/b3fe1606-0ae6-4515-9f2d-708af5cacd5b",
      link: "https://finance.biggo.com/news/b3fe1606-0ae6-4515-9f2d-708af5cacd5b",
      summary: "费城半导体指数10月15日收跌0.88%至11581.21点，为连续第七个交易日下跌，过去七个交易日累计市值蒸发超2万亿美元，较6月高点累跌超20%进入技术性熊市。英伟达跌1.84%至217.23美元、AMD跌1.50%、英特尔跌2.80%（大型半导体股中跌幅最大），博通跌0.55%；美光逆势涨1.87%至931.24美元（超跌反弹，受中国存储产能扩张引发的供应过剩担忧与CoreWeave财务健康疑虑双重压制后企稳）。马斯克在X平台称'中国2028年将开始大规模DRAM生产'，加剧存储竞争担忧。台积电Q3净利同比增68.7%、连续六季创纪录并给出强劲4Q指引，确认先进半导体需求韧性。",
      impact: {
        direction: "利空（半导体/存储）",
        companies: "英伟达、AMD、英特尔、博通、美光、SK海力士、台积电",
        industry: "半导体、存储、AI芯片、光通信",
        logic: "半导体七连跌进入技术性熊市，反映'AI债务担忧+中国存储竞争+加息预期'三重利空的持续压制；但台积电强劲财报与美光逆势反弹显示基本面与情绪出现背离，板块进入重新定价阶段"
      }
    },
    {
      title: "巴克莱下调戴尔、惠普企业评级至'中性'，称企业AI支出尚未见实质性拐点，戴尔续跌6.8%",
      originalTitle: "Dell, HPE downgraded by Barclays on AI spending concerns",
      source: "Reuters（经英文财经媒体转载）",
      time: "2026年10月15日",
      type: "财经媒体",
      url: "https://au.marketscreener.com/news/us-weekly-jobless-claims-rise-marginally-amid-low-layoffs-ce785dd3dc8dfe20",
      link: "https://au.marketscreener.com/news/us-weekly-jobless-claims-rise-marginally-amid-low-layoffs-ce785dd3dc8dfe20",
      summary: "巴克莱将戴尔科技与惠普企业（HPE）评级由'增持'下调至'中性'，戴尔目标价由603美元下调至574美元，理由是企业AI支出尚未出现实质性拐点、内存成本高企拖累利润率。戴尔当日续跌6.80%至473.39美元（连续第二日大跌），为美股成交额榜中跌幅居前个股。分析师观点认为'估值已透支、商品成本助推了营收、尚未看到实质性的AI需求拐点'。该降级进一步打击AI服务器与硬件板块情绪，反映市场对AI硬件从'资本开支无限增长'叙事转向'ROI兑现'检验。",
      impact: {
        direction: "利空（AI服务器/硬件）",
        companies: "戴尔、惠普企业、超微、联想（关联）",
        industry: "AI服务器、计算机硬件、数据中心",
        logic: "投行降级直指AI硬件'需求拐点未至'的核心疑虑，与CoreWeave债务担忧形成共振，印证市场正从AI芯片上游向服务器/整机环节重新评估盈利兑现能力"
      }
    },
    {
      title: "Anthropic Q3营收达168亿美元、环比增45%并实现调整后盈利，IPO估值锚点受关注",
      originalTitle: "Anthropic tells investors third-quarter revenue rose 45% to $16.8 billion",
      source: "Reuters（经 Capital Brief/Bloomberg 转载）",
      time: "2026年10月15日",
      type: "财经媒体",
      url: "https://www.capitalbrief.com/newsletter/nvidia-boss-says-coreweave-wont-need-bailout-cded29fb-b7ef-4529-91ce-c66a9cd16920",
      link: "https://www.capitalbrief.com/newsletter/nvidia-boss-says-coreweave-wont-need-bailout-cded29fb-b7ef-4529-91ce-c66a9cd16920",
      summary: "据彭博/路透报道，AI公司Anthropic向机构投资者披露Q3营收168亿美元，环比增长45%（上一季度曾翻倍），并已按调整后口径实现盈利、录得正现金流。这一数据在其筹备的创纪录IPO前首次披露，为市场评估AI大模型商业化的估值锚点提供参考。不过其增速较此前放缓，叠加此前OpenAI营收不及预期的担忧，市场对AI应用层'高增长能否兑现高估值'仍存分歧。亚马逊、谷歌作为Anthropic战略投资人的账面估值亦受关注。",
      impact: {
        direction: "中性（AI应用/估值情绪）",
        companies: "Anthropic、亚马逊、谷歌、OpenAI（关联）",
        industry: "AI大模型、AI应用、一级市场融资",
        logic: "Anthropic披露Q3营收与盈利，为AI独角兽IPO估值提供关键锚点，但增速放缓（45% vs 上季翻倍）加剧市场对AI商业化回报可持续性的审慎，与AI基建债务担忧形成呼应"
      }
    }
  ],

  /* ============ 六、当日最值得关注的 3 个交易逻辑 ============ */
  logics: [
    { title: "「AI债务担忧」取代「需求叙事」成为主导，信用市场定价AI基建的脆弱性",
      text: "CoreWeave债券收益率约15%、CDS隐含5年违约概率近63%，戴尔/惠普遭巴克莱下调评级，费城半导体指数七连跌进入技术性熊市——市场的定价核心已从'AI算力需求有多强'转向'AI基建靠债务融资能否持续'。黄仁勋虽力挺CoreWeave称无需兜底，但信用利差仍在高位，揭示'订单来自科技巨头、融资来自债券市场'的循环融资脆弱性未解。IG集团指出'AI需求与盈利商业模式是两码事'，融资成本若持续上行，高杠杆玩家即使需求强劲也难获保障，这一逻辑是当前AI板块持续承压的根本。" },
    { title: "美联储加息预期反复，10年期美债收益率回落成为当日反弹的核心宏观驱动",
      text: "9月PPI环比涨1.3%（四年半最大）、零售销售超预期，通胀压力本应强化加息担忧，但鲍曼、戴利等美联储官员表态'可在10月会议前等更多数据'，令10月加息概率由CPI后高点回落至约27%（维持利率不变概率升至72%）。10年期美债收益率回落至5.086%、创8月以来最大单日跌幅，避险资金回流推动道指涨1.08%、纳指盘中深V反弹。这说明当前科技股估值对利率路径极度敏感，'加息预期+无风险利率'与'AI债务成本'形成共振，是短期波动的放大器。" },
    { title: "台积电创纪录财报确认基本面韧性，与半导体板块情绪形成背离，板块进入重新定价",
      text: "台积电Q3净利同比增68.7%、连续六季创纪录，2nm营收占比升至8%、给出强劲4Q指引，确认AI芯片需求的结构性强度；美光也在超跌后逆势反弹1.87%、成交额居全市场之首。但费城半导体指数仍七连跌、较6月高点累跌超20%，英特尔/AMD/英伟达继续走弱。这种'基本面强劲、股价下跌'的背离表明，压制板块的不是需求本身，而是估值与融资成本的重新定价——市场不再为'创纪录'付费，而是苛求盈利质量、杠杆水平与回报兑现，这一逻辑决定后续芯片股的修复节奏。" }
  ],

  /* ============ 七、未来 1—3 个交易日关注事项（具体事件） ============ */
  watchlist: [
    { date: "10月16日", event: "美联储主席沃勒（Chair Kevin Warsh）在曼谷IMF-世界银行年会讲话", impact: "就10月27-28日FOMC是否加息释放信号，是科技股估值的中期关键变量" },
    { date: "10月16日", event: "美国10月密歇根大学消费者信心指数初值", impact: "刻画通胀预期与消费前景，影响利率路径判断与风险偏好" },
    { date: "10月20日前后", event: "奈飞（NFLX）Q3财报（本周内）", impact: "科技股财报季重要窗口，验证AI内容/流媒体资本开支与用户增长" },
    { date: "10月21日前后", event: "特斯拉（TSLA）Q3财报（本周内）", impact: "验证电动车需求与AI/自动驾驶叙事，对成长股情绪有外溢影响" },
    { date: "10月27-28日", event: "美联储FOMC议息会议（9月已加息25bp至3.75%-4.00%）", impact: "决定是否连续第二次加息，CME目前定价维持不变概率约72%，是科技股估值中期关键变量" }
  ],

  /* ============ 八、页脚免责声明 ============ */
  disclaimer:
    "本报告基于公开市场信息整理，仅供华泰期货内部研究参考，不构成任何投资建议。股价数据以交易所官方为准；新闻以原始来源（SEC / 白宫 / BIS / Treasury / BEA / BLS / Federal Reserve / Reuters 等）为准。投资有风险，决策需谨慎。"
};
