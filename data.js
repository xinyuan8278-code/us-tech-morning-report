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
    reportDate: "2026年08月31日",   // 报告发布日期
    tradeDate: "2026年08月28日",    // 对应美股交易日（前一交易日）
    author: "华泰期货 · 研究",
    tag: "每日市场跟踪"
  },

  /* ============ 二、市场概览 ============ */
  overview: {
    /* 简短概括：指数变化 + 个股变化 + 重大事件 */
    text: "8月28日美股科技股明显分化：美联储主席沃什杰克逊霍尔讲话偏鹰，9月加息概率升至约56%，美债收益率与美元齐升，纳指-0.52%、标普-0.25%、费半跌逾3%。半导体遭获利回吐：英伟达财报后回吐-4.57%、Marvell暴跌逾10%、AMD-2.33%；非硬件大型科技逆势走强，亚马逊+3.97%、谷歌+1.74%、微软+1.68%、苹果+1.63%。资金从AI硬件切向云与软件。",
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
      name: "NVIDIA",
      code: "NVDA",
      direction: "超跌",
      change: "-0.00%",
      fiveDay: "财报后剧烈反转：8/27财报+8.74%后，8/28回吐-4.57%（8/24 -2.91%、8/25 +2.19%、8/26 -1.59%、8/27 +8.74%、8/28 -4.57%），单日振幅约5.4%（229.26高至216.81低）",
      newHighLow: "未创新低，收217.55仍高于财报前（8/26收209.66），距5月历史高点236.26约8.6%",
      volume: "成交约1.95亿股，较前一交易日2.99亿股缩量约35%，属缩量回调而非恐慌性抛售",
      reason: "美联储主席沃什杰克逊霍尔讲话偏鹰、9月加息概率升至约56%推升美债收益率，叠加财报后+8.74%的获利了结与'卖新闻'情绪；半导体板块整体承压（费半跌逾3%、Marvell跌逾10%、ARM跌逾6%）",
      impact: "短期进入财报后高位整固，AI资本开支叙事未变，但利率上行与存储成本传导（CFO预警存储'极端定价'）制约估值扩张空间"
    }
  ],

  /* ============ 四、重点公司行情表 ============ */
  /* 超涨/超跌个股放最上方；无新闻的公司驱动因素简要说明即可 */
  stocks: [
    { name: "NVIDIA",    code: "NVDA",  change: "-0.00%", driver: "财报后获利回吐-4.57%，沃什鹰派讲话推升美债收益率、压制高估值成长股，成交431亿美元仍居全市场第一，短期高位整固" },
    { name: "Microsoft", code: "MSFT",  change: "-0.00%", driver: "Azure云需求强劲，资金从AI硬件切向有稳定现金流的云巨头，逆势涨1.68%逼近年内高位" },
    { name: "Apple",     code: "AAPL",  change: "-0.00%", driver: "消费电子防御属性+Apple TV+提价利好服务业务，逆半导体下跌涨1.63%" },
    { name: "Amazon",    code: "AMZN",  change: "-0.00%", driver: "AWS与英伟达加码200万颗GPU扩容、Evercore上调目标价至355美元，Q2 AWS营收+37%创18季最快，涨3.97%领涨大型科技" },
    { name: "Alphabet",  code: "GOOGL", change: "-0.00%", driver: "自研TPU与谷歌云，受益于定制芯片叙事（谷歌与Marvell大单），涨1.74%" },
    { name: "Meta",      code: "META",  change: "-0.00%", driver: "广告与AI商业化稳健，非硬件巨头获资金避险买入，涨1.21%" },
    { name: "Broadcom",  code: "AVGO",  change: "-0.00%", driver: "定制ASIC与AI网络龙头随半导体板块承压-0.74%，Marvell暴跌引发的定制芯片估值疑虑波及，表现相对抗跌" },
    { name: "AMD",       code: "AMD",   change: "-0.00%", driver: "二线AI算力股遭获利了结-2.33%，沃什鹰派讲话+利率上行压制长久期资产，ARK减仓AMD转配博通" },
    { name: "Micron",    code: "MU",    change: "-0.00%", driver: "存储板块相对抗跌-0.27%，英伟达CFO'存储极端定价'与供应瓶颈言论支撑存储景气预期" },
    { name: "Sandisk",   code: "SNDK",  change: "-0.00%", driver: "NAND存储高位整固，收平于1484.98，存储供需与涨价周期预期下波动收敛" }
  ],

  /* ============ 五、重要科技与政策新闻（一手来源） ============ */
  news: [
    {
      title: "美联储主席沃什杰克逊霍尔演讲偏鹰：价格稳定仍是首要任务，AI被视作'新生产要素'",
      originalTitle: "In Our Time — Remarks by Chair Kevin Warsh at 'Financial Innovation: Implications for Payments and Policy'",
      source: "美联储官方（federalreserve.gov）",
      time: "2026年08月28日",
      type: "官方",
      url: "https://www.federalreserve.gov/newsevents/speech/files/warsh20260828a.pdf",
      link: "https://www.federalreserve.gov/newsevents/speech/files/warsh20260828a.pdf",
      summary: "沃什在杰克逊霍尔全球央行年会发表主旨演讲，表示若美联储无法确信潜在通胀正以'清晰且足够快的速度'回落至2%目标，则'还有很多工作要做'。他强调价格稳定是当前首要任务，通胀已连续65个月高于2%目标，并指出金融环境并不具明显限制性。沃什未给出传统前瞻指引，而是阐述'更安静、更有目的性沟通'的央行治理理念。他还专门谈及AI，称其发展速度超预期、有望成为'新的生产要素'，将影响生产率、资本投入与货币政策传导。",
      impact: {
        direction: "利空",
        companies: "全市场、半导体、AI硬件链",
        industry: "货币政策、利率",
        logic: "鹰派表态推升美债收益率与加息预期，压制长久期、高估值成长股贴现率"
      }
    },
    {
      title: "沃什讲话后美股收跌、美元与美债收益率齐升，9月加息概率跳升至55.7%",
      originalTitle: "Stocks fall while dollar, bond yields rise as Warsh prompts rate hike bets",
      source: "Reuters（经 Channel NewsAsia 转载）",
      time: "2026年08月28日",
      type: "财经媒体",
      url: "https://www.channelnewsasia.com/business/stocks-fall-while-dollar-bond-yields-rise-warsh-prompts-rate-hike-bets-6346686",
      link: "https://www.channelnewsasia.com/business/stocks-fall-while-dollar-bond-yields-rise-warsh-prompts-rate-hike-bets-6346686",
      summary: "沃什讲话后，CME FedWatch显示9月加息概率从前一日的35.4%跳升至55.7%。美股小幅收跌：道指-0.02%、标普-0.25%、纳指-0.52%，科技与公用事业领跌，罗素2000跌1.4%。债市反应更剧烈：2年期美债收益率升12.79bp至4.36%、10年期升5.6bp至4.728%，美元指数涨0.61%至99.71。避险资产亦承压：现货黄金跌3.19%至4454.52美元、比特币跌3.34%。市场将沃什'承认金融环境不具限制性+强调通胀仍是关切'解读为偏鹰，并视为其通过利率渠道应对通胀的信号。",
      impact: {
        direction: "利空",
        companies: "全市场、半导体、高估值成长股",
        industry: "利率、汇率、贵金属",
        logic: "利率与美元双升压缩成长股估值，资金转向有稳定现金流的大型云巨头"
      }
    },
    {
      title: "Marvell暴跌逾10%：谷歌定制芯片大单收入确认时点令市场失望",
      originalTitle: "Marvell raises annual forecasts, but shares fall as Google deal questions linger",
      source: "Reuters（经 ET Electronics 转载）",
      time: "2026年08月28日",
      type: "财经媒体",
      url: "http://electronics.economictimes.indiatimes.com/news/semiconductors/marvell-raises-annual-forecasts-but-shares-fall-as-google-deal-questions-linger/133581595",
      link: "http://electronics.economictimes.indiatimes.com/news/semiconductors/marvell-raises-annual-forecasts-but-shares-fall-as-google-deal-questions-linger/133581595",
      summary: "Marvell虽上调FY2027营收预测至约120亿美元（+45%，原约115亿）、FY2028至约180亿美元（原约165亿），但市场聚焦其与谷歌定制芯片大单（至FY2033最高1200亿美元、使谷歌成为其最大股东之一）的收入兑现节奏。CEO Matt Murphy称截至FY2028的定制收入目标已部分计入谷歌贡献、FY2029才会显著放量。摩根士丹利指出'预期本已因谷歌大单被抬高'。该股今年因AI定制芯片几乎翻倍，财报后暴跌逾10%，显示定制芯片高估值对收入兑现节奏极度敏感。",
      impact: {
        direction: "利空",
        companies: "Marvell、博通等定制芯片，AI硬件",
        industry: "定制ASIC、AI算力",
        logic: "谷歌大单利好已部分定价，定制芯片高估值需要更清晰的收入放量路径"
      }
    },
    {
      title: "亚马逊逆势大涨近4%：AWS与英伟达加码200万颗GPU扩容，AI云需求兑现",
      originalTitle: "Amazon Jumps 4% on Expanded AWS Chip Deal: Why Is NVIDIA Falling 4%?",
      source: "24/7 Wall St（行业媒体）",
      time: "2026年08月28日",
      type: "行业媒体",
      url: "https://247wallst.com/investing/2026/08/28/amazon-jumps-4-on-expanded-aws-chip-deal-why-is-nvidia-falling-4/",
      link: "https://247wallst.com/investing/2026/08/28/amazon-jumps-4-on-expanded-aws-chip-deal-why-is-nvidia-falling-4/",
      summary: "AWS与英伟达宣布2027-2028年额外部署200万颗GPU（Blackwell Ultra/Rubin系列）扩容AI基础设施，总承诺超300万颗。Q2 AWS营收+37%至422亿美元、创18季最快，CEO Andy Jassy称AI与芯片业务年化运行率均已超250亿美元。Evercore ISI将亚马逊目标价从315美元上调至355美元。当日亚马逊逆势涨近4%，而作为供应商的英伟达反跌4%，反映市场认为AI基建利润正从上游芯片向下游云平台转移。",
      impact: {
        direction: "利好",
        companies: "亚马逊、英伟达，云平台",
        industry: "云计算、AI基础设施",
        logic: "AI需求兑现为云收入，资金从AI硬件轮动至有客户承诺的云平台巨头"
      }
    },
    {
      title: "英伟达财报后'卖新闻'回吐4.57%，成交431亿美元仍居全市场第一",
      originalTitle: "Nvidia's $43.17B Trading Volume Claims Top Spot Despite 4.57% Pullback",
      source: "AInvest（行业媒体）",
      time: "2026年08月28日",
      type: "行业媒体",
      url: "https://www.ainvest.com/news/nvidia-43-17b-trading-volume-claims-top-spot-4-57-pullback-2608/",
      link: "https://www.ainvest.com/news/nvidia-43-17b-trading-volume-claims-top-spot-4-57-pullback-2608/",
      summary: "英伟达8/27财报后暴涨8.7%、市值增约4420亿美元，8/28出现经典'卖新闻'式获利回吐，收跌4.57%至217.55美元，成交431亿美元仍居全市场第一。数据中心营收890亿美元、超大规模客户销售+102%至487亿美元，AI Cloud/Enterprise/Industrial（ACIE）板块同比+138%至403亿美元。CEO黄仁勋称实际需求高于70%指引、受存储与电力供给瓶颈制约；CFO克雷斯此前暂停部分面向AI云公司的融资计划以管理资产负债表风险。分析师认为英伟达前瞻PE约28.8倍仍偏低。",
      impact: {
        direction: "中性",
        companies: "英伟达，半导体，AI硬件",
        industry: "AI芯片、数据中心",
        logic: "财报利好兑现后高位整固，利率上行与存储成本传导是短期压制因素"
      }
    }
  ],

  /* ============ 六、当日最值得关注的 3 个交易逻辑 ============ */
  logics: [
    { title: "利率重回舞台中央：沃什偏鹰讲话成为压制高估值成长股的'总开关'",
      text: "沃什杰克逊霍尔讲话明确价格稳定仍是首要任务，未给前瞻指引但被市场解读为偏鹰，9月加息概率从35%跳升至约56%，2年期美债收益率单日升近13bp至4.36%、10年期升至4.728%、美元指数涨0.6%。利率与贴现率上行直接压制长久期、高估值资产——半导体与AI硬件首当其冲（费半跌逾3%、英伟达-4.6%、Marvell-10%），而拥有稳定自由现金流的大型云巨头（亚马逊、微软、谷歌）相对抗跌甚至逆势上涨，体现了'估值敏感度'在科技板块内部的分化。" },
    { title: "AI交易从'硬件独占'转向'云与定制芯片'双线叙事，利润分配之争加剧",
      text: "当日亚马逊因AWS与英伟达200万颗GPU扩容、Q2 AWS营收+37%而逆势大涨近4%，而作为供应商的英伟达反跌4%、Marvell因谷歌定制芯片收入节奏失望暴跌10%。这揭示市场核心矛盾已从'AI需求是否持续'转向'AI算力利润如何在芯片商与云平台之间分配'：上游硬件高估值对收入兑现节奏极度敏感，下游云平台因锁定客户承诺而被重新定价。" },
    { title: "英伟达财报'卖新闻'与存储供应瓶颈，标志AI硬件从普涨进入分化",
      text: "英伟达财报后+8.74%次日回吐4.57%，成交431亿美元仍居首位，属典型利好兑现后的获利了结，基本面叙事未变。但管理层预警存储'极端定价'与电力供给瓶颈正在制约供给端，说明AI硬件链正从'量价齐升'转向'供应约束下的利润再分配'，这也是存储股（美光-0.27%、闪迪持平）当日相对抗跌而算力龙头承压的深层原因。" }
  ],

  /* ============ 七、未来 1—3 个交易日关注事项（具体事件） ============ */
  watchlist: [
    { date: "09月01日", event: "美国8月ISM制造业PMI、7月JOLTS职位空缺", impact: "检验高利率下实体制造业韧性，若价格分项走强或强化加息预期、压制成长股" },
    { date: "09月02日", event: "博通（Broadcom）2026财年Q3财报（盘后），AI营收约160亿美元指引为焦点", impact: "检验AI定制芯片与网络设备需求成色，以及与谷歌定制芯片合作地位是否稳固" },
    { date: "09月04日", event: "美国劳工部8月非农就业报告（NFP）", impact: "美联储9月FOMC前最具决定性的数据，定调加息路径，直接影响科技成长股贴现率" },
    { date: "09月07日", event: "美国劳动节（Labor Day），美股休市", impact: "长假前资金趋于谨慎，短期波动或收敛" },
    { date: "09月15-16日", event: "美联储FOMC议息会议", impact: "CME FedWatch显示9月加息概率约56%，政策定调影响高估值成长股估值" },
    { date: "09月30日", event: "美光科技（Micron）Q4财报", impact: "存储涨价周期与HBM供需的关键验证，影响存储板块（美光、闪迪）定价" },
    { date: "10月06日", event: "Marvell投资者日", impact: "管理层将披露谷歌定制芯片收入放量路径与2029财年目标细节，决定定制芯片叙事走向" }
  ],

  /* ============ 八、页脚免责声明 ============ */
  disclaimer:
    "本报告基于公开市场信息整理，仅供华泰期货内部研究参考，不构成任何投资建议。股价数据以交易所官方为准；新闻以原始来源（SEC / 白宫 / BIS / Treasury / BEA / Reuters / Bloomberg 等）为准。投资有风险，决策需谨慎。"
};
