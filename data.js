/**
 * ============================================================
 *  美股科技板块前一交易日行情日报 —— 数据文件（每日只需改这里）
 *  （2026-10-10 更新：对应美股交易日 2026-10-09）
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
    reportDate: "2026年10月10日",   // 报告发布日期（周六）
    tradeDate: "2026年10月09日",    // 对应美股交易日（前一交易日，周五）
    author: "华泰期货 · 研究",
    tag: "每日市场跟踪"
  },

  /* ============ 二、市场概览 ============ */
  overview: {
    /* 简短概括：指数变化 + 个股变化 + 重大事件 */
    text: "10月9日美股自前日AI抛售中反弹收涨：道指+0.83%至51657.30、标普+0.58%至7810.02、纳指+0.56%至27344.67，三大指数周线齐涨、纳指连续四周收涨。科技股回暖，英伟达、美光、闪迪、博通等AI芯片股回补，OpenAI营收不及预期的担忧部分消化。SpaceX收购低频段频谱令电信股重挫、铁塔股大涨；特朗普-普京柴油协议令油价回落，10年期美债收益率约5.25%。",
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
    { name: "NVIDIA",    code: "NVDA",  change: "-0.00%", driver: "自前日-2.94%抛售后反弹回补（盘前一度涨约1.7%）；OpenAI营收不及预期引发的AI估值担忧部分缓解，Vera Rubin平台Q3已开始出货但尚未放量，AI硬件需求叙事仍强" },
    { name: "Microsoft", code: "MSFT",  change: "-0.00%", driver: "随大盘科技股反弹收涨（约+2%，标普500领涨股之一），前日-1.35%后回补；Copilot生态与Surface AI PC商业化叙事延续" },
    { name: "Apple",     code: "AAPL",  change: "-0.00%", driver: "领跌大型科技，跌约1.6%；据报道已告知部分供应商削减iPhone 18 Pro/Pro Max零部件生产，10月订单较原计划至少下调15%，售价上调与存储芯片涨价成本压制需求" },
    { name: "Amazon",    code: "AMZN",  change: "-0.00%", driver: "领涨大型科技，+2.75%；随大盘风险偏好修复反弹，AWS与AI资本开支叙事延续，前日-2.25%的跌幅被收复" },
    { name: "Alphabet",  code: "GOOGL", change: "-0.00%", driver: "小幅波动；OpenAI营收不及预期令市场重新审视AI云资本开支回报，谷歌庞大的AI基础设施投资受关注，前日-0.72%后窄幅整理" },
    { name: "Meta",      code: "META",  change: "-0.00%", driver: "基本持平；Muse个人AI代理上线后的强势表现后高位整理，花旗此前测算Muse至2030年或带来逾270亿美元年收入、但短期算力成本承压" },
    { name: "Broadcom",  code: "AVGO",  change: "-0.00%", driver: "反弹约+1.9%（前日-4.35%后回补）；为OpenAI开发定制AI推理芯片、正寻求逾500亿美元融资，OpenAI营收担忧缓和后定制ASIC叙事修复" },
    { name: "AMD",       code: "AMD",   change: "-0.00%", driver: "随AI硬件反弹（前日-3.9%后回补）；与OpenAI有芯片供应与股权绑定（OpenAI拟以0.01美元/股购入至多1.6亿股AMD、年底部署Helios机架），AI加速器叙事延续" },
    { name: "Micron",    code: "MU",    change: "-0.00%", driver: "反弹（前日-4.79%后回补）；AI内存需求强劲，已完成来年大部分HBM供货协议且签约价明显上调，OpenAI事件澄清后存储股集体回暖" },
    { name: "SanDisk",   code: "SNDK",  change: "-0.00%", driver: "反弹（前日-4.90%后回补）；NAND供应紧张有望持续、企业级SSD与QLC Stargate平台放量，随存储板块回暖" }
  ],

  /* ============ 五、重要科技与政策新闻（一手来源） ============ */
  news: [
    {
      title: "OpenAI年化收入约500亿美元远低于预期，重燃AI投资回报质疑，半导体与云板块遭重挫",
      originalTitle: "OpenAI Revenue Miss Drags CoreWeave, Oracle, Broadcom Into Selloff",
      source: "Semi Doped（行业媒体，援引 Bloomberg / Financial Times）",
      time: "2026年10月09日",
      type: "行业媒体",
      url: "https://daily.semidoped.com/p/daily-update-october-9th-2026",
      link: "https://daily.semidoped.com/p/daily-update-october-9th-2026",
      summary: "据《金融时报》10月8日援引OpenAI向财务支持方提供的文件报道，OpenAI截至9月底年化收入约500亿美元，远低于此前市场流传的700亿至1000亿美元预期（统计口径不同导致差异）。彭博报道口径与此一致。消息重燃市场对AI投资回报的质疑：GPU云服务商CoreWeave跌约10%、甲骨文跌超5%、博通一度逼近350美元。差距关键在于GPU云估值此前已按更快的变现曲线定价，OpenAI收入若放缓将影响其算力采购，进而波及与其绑定较深的英伟达、AMD、博通等芯片股。",
      impact: {
        direction: "利空（AI估值重估）",
        companies: "英伟达、博通、AMD、CoreWeave、甲骨文、光通信链",
        industry: "AI基础设施、算力、云",
        logic: "AI资本开支可持续性受质疑，高估值AI硬件与云服务估值承压；但周五市场情绪已部分修复，属短期定价纠偏而非趋势逆转"
      }
    },
    {
      title: "美股周五反弹收涨，三大指数周线齐涨、纳指连续四周收涨",
      originalTitle: "Markets News, Oct. 9, 2026: Stocks Rise as Oil Prices, Treasury Yields Stabilize; Major Indexes Post Weekly Gains",
      source: "Investopedia（Dow Jones Newswires）",
      time: "2026年10月09日",
      type: "财经媒体",
      url: "https://www.investopedia.com/stock-market-today-dow-jones-s-and-p-500-10092026-12165767",
      link: "https://www.investopedia.com/stock-market-today-dow-jones-s-and-p-500-10092026-12165767",
      summary: "美股周五集体反弹，道指+0.8%（约+425点）、标普+0.6%、纳指+0.6%；当周标普+1.2%、道指+0.9%、纳指+0.6%，纳指录得连续第四周上涨。科技股自周四AI抛售中回升，Roundhill七巨头ETF（MAGS）涨约1%，收复前一日约1%的跌幅。油价回落（WTI-0.4%至91.20美元、布伦特-0.4%至104美元），10年期美债收益率报5.25%下方、较周四升1bp（周三曾触及24年新高近5.37%）。下周一债券市场因哥伦布日休市（股市照常开市），周二起银行股拉开三季报序幕。",
      impact: {
        direction: "利好",
        companies: "大型科技、半导体",
        industry: "宏观、利率、AI",
        logic: "风险偏好修复，AI抛售后的技术性反弹叠加油价回落，为高估值科技股提供喘息窗口"
      }
    },
    {
      title: "SpaceX收购全国低频段频谱牌照，电信股重挫8.5%-13%、铁塔股大涨7%-16%",
      originalTitle: "SpaceX agrees to acquire a nationwide low-band spectrum license portfolio for Starlink Mobile",
      source: "Investopedia（Dow Jones Newswires）",
      time: "2026年10月09日",
      type: "财经媒体",
      url: "https://www.investopedia.com/stock-market-today-dow-jones-s-and-p-500-10092026-12165767",
      link: "https://www.investopedia.com/stock-market-today-dow-jones-s-and-p-500-10092026-12165767",
      summary: "马斯克旗下SpaceX宣布已达成协议，收购全国低频段频谱牌照组合，称此举补齐了\"Starlink Mobile成为美国主流移动运营商的关键剩余技术缺口\"。消息令T-Mobile、AT&T、Verizon大跌8.5%-13%，成为标普500当日三大领跌股；SpaceX股价涨逾1%，铁塔运营商Crown Castle、SBA Communications、American Tower大涨7%-16%。市场担忧星链直连手机（D2D）将侵蚀传统运营商的地面网络与频谱壁垒。",
      impact: {
        direction: "中性偏空（电信）/ 结构性",
        companies: "SpaceX、T-Mobile、AT&T、Verizon、铁塔运营商",
        industry: "通信、卫星互联网、直连手机",
        logic: "卫星直连手机加速落地，重估传统电信运营商估值，铁塔资产作为潜在合作载体反而受益"
      }
    },
    {
      title: "博通为OpenAI定制AI芯片寻求逾500亿美元融资，厂商融资规模引发市场争论",
      originalTitle: "Broadcom arranging more than $50 billion in financing for custom AI chips developed with OpenAI",
      source: "nextfin.ai（援引 Bloomberg）",
      time: "2026年10月09日",
      type: "财经媒体",
      url: "https://www.nextfin.ai/en/news/us-stock-pre-market-report-october-9-2026-cef5ee52a0",
      link: "https://www.nextfin.ai/en/news/us-stock-pre-market-report-october-9-2026-cef5ee52a0",
      summary: "据报道，博通正为与OpenAI合作开发的定制AI芯片安排逾500亿美元融资。此前10月2-7日博通累计上涨9.57%，但受OpenAI营收不及预期拖累，周四跌4.35%至360美元附近，周五随大盘反弹约1.9%。此举加剧市场对AI基础设施\"厂商融资（vendor financing）\"规模与杠杆的争论：Anthropic 6月35亿美元、上周再60亿美元，叠加OpenAI逾500亿美元，仅围绕两大客户的相关融资即超1450亿美元，市场担忧AI算力融资的循环性与可持续性。",
      impact: {
        direction: "中性（需求验证/杠杆风险并存）",
        companies: "博通、OpenAI、AI算力链",
        industry: "AI芯片、定制ASIC、融资",
        logic: "定制ASIC需求得到确认，但天量杠杆化融资的循环性引发AI资本开支可持续性质疑"
      }
    },
    {
      title: "苹果削减iPhone 18 Pro零部件订单，需求疲软与存储涨价成本压力显现",
      originalTitle: "Apple — Reported iPhone 18 Pro component cuts weigh on shares",
      source: "nextfin.ai",
      time: "2026年10月09日",
      type: "财经媒体",
      url: "https://www.nextfin.ai/en/news/us-stock-pre-market-report-october-9-2026-cef5ee52a0",
      link: "https://www.nextfin.ai/en/news/us-stock-pre-market-report-october-9-2026-cef5ee52a0",
      summary: "据报道，苹果已告知部分供应商削减iPhone 18 Pro与iPhone 18 Pro Max的零部件生产，10月零部件订单较原计划至少下调15%，主因售价上调与存储芯片成本大涨压制需求。苹果周五盘前一度跌约1.8%、收盘跌约1.6%，为大型科技股中表现最弱标的之一。存储涨价正传导至终端整机成本，苹果对三星、SK海力士等存储供应商的采购成本承压，折射存储超级周期对下游需求的负反馈。",
      impact: {
        direction: "利空（苹果）/ 对存储链中性偏空",
        companies: "苹果、三星、SK海力士、美光、消费电子链",
        industry: "消费电子、存储、智能手机",
        logic: "存储涨价反噬终端需求，苹果砍单对上游芯片链构成需求隐忧，需警惕存储涨价向需求端的传导"
      }
    },
    {
      title: "特朗普与普京达成柴油供应协议，油价回落边际缓解通胀压力",
      originalTitle: "Oil prices ticked lower after Trump struck a deal with Putin for Russia to supply diesel",
      source: "Investopedia（Dow Jones Newswires）",
      time: "2026年10月09日",
      type: "财经媒体",
      url: "https://www.investopedia.com/stock-market-today-dow-jones-s-and-p-500-10092026-12165767",
      link: "https://www.investopedia.com/stock-market-today-dow-jones-s-and-p-500-10092026-12165767",
      summary: "特朗普宣布与普京达成协议，俄罗斯将向美国及全球市场供应柴油。WTI原油期货跌0.4%至91.20美元、布伦特跌0.4%至104美元，此前海湾地区石油运输受阻推动的油价急涨暂歇。柴油供应担忧缓解边际压制通胀预期，10年期美债收益率企稳于5.25%下方。但中东地缘（美伊军事冲突、霍尔木兹海峡油流）不确定性尚未解除，油价仍是下一阶段科技股风险偏好的关键外生变量。",
      impact: {
        direction: "利好（通胀缓解）",
        companies: "高估值成长股、半导体、消费科技",
        industry: "能源、利率、宏观",
        logic: "油价回落缓解通胀与长端利率压力，为高久期科技股提供支撑；但地缘风险未除，油价若再度冲高将二次压制估值"
      }
    },
    {
      title: "台积电Q3营收超指引，并与GlobalFoundries签署20亿美元CoWoS中介层五年协议",
      originalTitle: "TSMC Signs GlobalFoundries to Five-Year CoWoS Interposer Deal",
      source: "Semi Doped（行业媒体）",
      time: "2026年10月09日",
      type: "行业媒体",
      url: "https://daily.semidoped.com/p/daily-update-october-9th-2026",
      link: "https://daily.semidoped.com/p/daily-update-october-9th-2026",
      summary: "台积电公布Q3营收约1.494万亿新台币，环比+17.6%、同比+51%，较指引上限高出约2%，连续第二个月营收破5000亿新台币；NVIDIA的Vera Rubin平台Q3开始出货但尚未放量。另与GlobalFoundries签署五年、20亿美元供应协议，由GF纽约工厂生产CoWoS先进封装的硅中介层，以缓解CoWoS产能瓶颈并满足美国本土含量要求，GF股价涨约4%。台积电将于10月15日公布完整Q3财报并给出4Q指引。",
      impact: {
        direction: "利好",
        companies: "台积电、GlobalFoundries、英伟达、AI加速器链",
        industry: "先进制程、CoWoS封装、半导体设备",
        logic: "AI芯片需求确认，先进封装产能扩张，本土化供应缓解CoWoS瓶颈，支撑AI硬件链景气"
      }
    },
    {
      title: "三星锁定2027年约80%存储产出的长期合同，存储进入定价权阶段",
      originalTitle: "Samsung Locks Up 80% of 2027 Memory Output in Long-Term Deals",
      source: "Semi Doped（行业媒体）",
      time: "2026年10月09日",
      type: "行业媒体",
      url: "https://daily.semidoped.com/p/daily-update-october-9th-2026",
      link: "https://daily.semidoped.com/p/daily-update-october-9th-2026",
      summary: "三星电子已锁定约80%的2027年存储（DRAM/NAND）产出长期供货承诺，将大部分产能从现货市场转向与超大规模云厂商（hyperscalers）的多年期合同。此前美光已完成来年大部分HBM供货协议且签约价明显上调，SK海力士ADR赴美上市认购超额7倍。存储进入\"定价权\"阶段，AI内存需求（HBM、企业级SSD）持续吸收DRAM与NAND产能，TrendForce预计传统DRAM合同价仍将上行。",
      impact: {
        direction: "利好",
        companies: "三星、SK海力士、美光、闪迪、存储链",
        industry: "存储、HBM、NAND",
        logic: "存储供需紧张与长期合同锁定验证超级周期定价权，AI资本开支受益主线从GPU向存储端传导"
      }
    }
  ],

  /* ============ 六、当日最值得关注的 3 个交易逻辑 ============ */
  logics: [
    { title: "OpenAI营收不及预期引发AI估值重估，高估值AI硬件与云承压后修复",
      text: "OpenAI年化收入约500亿美元、远低于市场700亿至1000亿美元的预期，直接冲击此前按更快变现曲线定价的GPU云与AI芯片估值，周四引发半导体、存储、光通信集体抛售。周五情绪部分修复，但市场对AI资本开支回报的审视仍在发酵，叠加博通500亿美元、Anthropic百亿美元级融资的杠杆化循环，AI硬件链的估值中枢面临阶段性下调压力。" },
    { title: "存储超级周期定价权强化，三星/美光/海力士长期合同锁定验证供需紧张",
      text: "三星锁定2027年约80%存储产出的长期合同，美光完成来年大部分HBM供货协议且签约价上调，SK海力士ADR赴美上市认购超额7倍，三线证据共同验证存储进入定价权阶段。AI内存需求（HBM、企业级SSD）持续吸收DRAM/NAND产能，存储板块成为利率承压环境下最具alpha的结构性方向，但苹果iPhone砍单提示需警惕存储涨价向终端需求的负反馈。" },
    { title: "利率与油价博弈决定科技股风险偏好，10年期美债5.25%与油价回落是关键变量",
      text: "10年期美债收益率报5.25%下方（周三曾触及24年新高近5.37%），特朗普-普京柴油协议令油价回落、边际缓解通胀预期，为高估值科技股提供支撑。但中东地缘（美伊冲突、霍尔木兹油流）与下周9月CPI数据将共同决定利率路径——若通胀超预期，美联储10月议息会连续加息预期升温，将二次压制高久期成长股估值。" }
  ],

  /* ============ 七、未来 1—3 个交易日关注事项（具体事件） ============ */
  watchlist: [
    { date: "10月12日", event: "美国哥伦布日（债券市场休市、美股照常开市）", impact: "交投或趋清淡，市场聚焦下周通胀与财报线索" },
    { date: "10月13日", event: "摩根大通、富国银行等大型银行公布Q3财报（三季报序幕）", impact: "检验高利率环境下信贷与消费需求，定调财报季风险偏好" },
    { date: "10月14日", event: "美国9月CPI数据（关键通胀指标）", impact: "决定美联储10月27-28日会议连续加息概率，影响高估值科技股估值" },
    { date: "10月15日", event: "台积电（TSM）公布Q3财报及4Q指引（营收已超指引）", impact: "验证Vera Rubin/Blackwell放量节奏与先进封装供需，牵动AI芯片链" },
    { date: "10月27-28日", event: "美联储FOMC议息会议（9月已加息25bp）", impact: "决定是否连续第二次加息，是科技股估值的中期关键变量" }
  ],

  /* ============ 八、页脚免责声明 ============ */
  disclaimer:
    "本报告基于公开市场信息整理，仅供华泰期货内部研究参考，不构成任何投资建议。股价数据以交易所官方为准；新闻以原始来源（SEC / 白宫 / BIS / Treasury / BEA / BLS / Federal Reserve / Reuters 等）为准。投资有风险，决策需谨慎。"
};
