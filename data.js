/**
 * ============================================================
 *  美股科技板块前一交易日行情日报 —— 数据文件（每日只需改这里）
 *  （2026-10-11 更新：对应美股交易日 2026-10-09）
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
    reportDate: "2026年10月11日",   // 报告发布日期（周日）
    tradeDate: "2026年10月09日",    // 对应美股交易日（前一交易日，周五）
    author: "华泰期货 · 研究",
    tag: "每日市场跟踪"
  },

  /* ============ 二、市场概览 ============ */
  overview: {
    /* 简短概括：指数变化 + 个股变化 + 重大事件 */
    text: "10月9日美股自前日AI抛售中反弹收涨：道指+0.83%至51654.95、标普+0.59%至7811.54、纳指+0.64%至27366.17，三大指数周线齐涨。前一日OpenAI年化收入约500亿美元低于预期的消息引发芯片板块重挫后，市场情绪修复。大型科技分化：亚马逊+3.29%、微软+2.38%领涨，苹果-1.11%、英伟达-0.52%走弱；半导体多数回吐（AMD-2.03%、美光-0.66%、闪迪-1.72%）。台积电Q3营收创新高、三星锁定2027年约80%存储产出长期合同、SK海力士ADR登陆纳斯达克。",
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
    { name: "NVIDIA",    code: "NVDA",  change: "-0.00%", driver: "小幅走弱（约-0.5%）；OpenAI营收不及预期引发的AI估值重估尚未完全出清，但Vera Rubin平台Q3已开始出货、台积电9月营收同比+54.6%验证AI芯片需求仍强，多头叙事未破坏" },
    { name: "Microsoft", code: "MSFT",  change: "-0.00%", driver: "领涨大型科技（约+2.4%）；随大盘风险偏好修复反弹，Copilot生态与Surface AI PC商业化叙事延续，云与AI资本开支需求受OpenAI事件影响有限" },
    { name: "Apple",     code: "AAPL",  change: "-0.00%", driver: "走弱（约-1.1%）；市场担忧存储芯片涨价推升iPhone整机成本、抑制需求，此前已报道削减iPhone 18 Pro零部件订单，消费电子需求承压" },
    { name: "Amazon",    code: "AMZN",  change: "-0.00%", driver: "领涨大型科技（约+3.3%）；随大盘反弹幅度最大，AWS云计算与AI资本开支叙事延续，前日AI抛售的跌幅被明显收复" },
    { name: "Alphabet",  code: "GOOGL", change: "-0.00%", driver: "小幅上涨（约+1.0%）；谷歌云与Gemini AI叙事延续，随风险偏好修复，作为OpenAI主要竞争对手受益于AI应用层竞争格局" },
    { name: "Meta",      code: "META",  change: "-0.00%", driver: "基本持平（约-0.3%）；Muse个人AI代理上线后高位整理，此前花旗测算Muse至2030年或带来逾270亿美元年收入、但短期算力成本承压" },
    { name: "Broadcom",  code: "AVGO",  change: "-0.00%", driver: "小幅上涨（约+0.4%）；为OpenAI定制AI推理芯片、正寻求逾500亿美元融资的叙事延续，OpenAI营收担忧缓和后定制ASIC逻辑修复" },
    { name: "AMD",       code: "AMD",   change: "-0.00%", driver: "回调（约-2.0%）；前日AI硬件反弹后获利回吐，OpenAI营收不及预期令市场重新审视AI加速器需求曲线，与OpenAI的芯片供应与股权绑定受关注" },
    { name: "Micron",    code: "MU",    change: "-0.00%", driver: "小幅回落（约-0.7%）；存储板块整体回调，但AI内存需求仍强（已锁定来年大部分HBM供货协议且签约价上调），SK海力士赴美上市验证存储超级周期定价权" },
    { name: "SanDisk",   code: "SNDK",  change: "-0.00%", driver: "回落（约-1.7%）；NAND存储板块回调，前日-4.90%后未能完全修复，但企业级SSD与QLC Stargate平台需求叙事仍强，三星锁长约佐证NAND供需偏紧" }
  ],

  /* ============ 五、重要科技与政策新闻（一手来源） ============ */
  news: [
    {
      title: "OpenAI年化收入约500亿美元低于预期，重燃AI投资回报质疑，芯片板块单日蒸发数千亿美元",
      originalTitle: "OpenAI's annualized revenue $20 billion less than previously signaled, FT reports",
      source: "Reuters（援引 Financial Times）",
      time: "2026年10月08日",
      type: "财经媒体",
      url: "https://www.reuters.com/technology/artificial-intelligence/openais-annualized-revenue-20-billion-less-than-previously-signaled-ft-reports-2026-10-08/",
      link: "https://www.reuters.com/technology/artificial-intelligence/openais-annualized-revenue-20-billion-less-than-previously-signaled-ft-reports-2026-10-08/",
      summary: "据《金融时报》援引OpenAI向财务支持方提供的文件报道，OpenAI截至9月底年化收入约500亿美元，较此前市场流传的约700亿美元预期低约200亿美元。差异主要源于统计口径：为与竞争对手Anthropic（将云伙伴销售额全额计入收入）做同类比较，此前700亿为\"加总\"口径，500亿为OpenAI自身会计口径，两者均符合GAAP。消息在10月8日引发AI板块重挫：纳指一度跌1.25%、芯片板块跌3.4%，约5000亿美元科技市值蒸发，甲骨文、CoreWeave、英伟达、AMD、博通集体下跌。",
      impact: {
        direction: "利空（AI估值重估，已部分修复）",
        companies: "英伟达、AMD、博通、美光、甲骨文、CoreWeave、光通信链",
        industry: "AI基础设施、算力、云、半导体",
        logic: "AI资本开支可持续性受质疑，高估值AI硬件与云估值承压；但差距源于统计口径而非需求崩塌，10月9日市场情绪已部分修复"
      }
    },
    {
      title: "台积电Q3营收创纪录至约1.49万亿新台币，并与格罗方德签20亿美元CoWoS硅中介层五年协议",
      originalTitle: "TSMC posts record Q3 revenue, signs $2 billion CoWoS interposer deal with GlobalFoundries",
      source: "Yahoo Finance / Simply Wall St（援引公司公告）",
      time: "2026年10月09日",
      type: "财经媒体",
      url: "https://finance.yahoo.com/news/taiwan-semiconductor-manufacturing-tsm-posted-111720908.html",
      link: "https://finance.yahoo.com/news/taiwan-semiconductor-manufacturing-tsm-posted-111720908.html",
      summary: "台积电公布2026年Q3合并营收约1.49万亿新台币，同比+50.95%、环比+17.62%，再创单季新高；9月单月营收5118.57亿新台币，同比+54.65%。先进封装（CoWoS）仍是AI加速器出货的主要瓶颈。同日，格罗方德（GlobalFoundries）宣布与台积电达成20亿美元、为期五年的供应协议，将在美国纽约州马耳他厂为台积电CoWoS先进封装生产硅中介层，2028年起放量，以缓解先进封装产能瓶颈并满足美国本土含量要求。台积电将于10月15日公布完整Q3财报并给出4Q指引。",
      impact: {
        direction: "利好",
        companies: "台积电、格罗方德、英伟达、AMD、AI加速器链",
        industry: "先进制程、CoWoS封装、半导体设备",
        logic: "AI芯片需求持续确认，先进封装产能向美国本土扩张，缓解CoWoS瓶颈，支撑AI硬件链景气"
      }
    },
    {
      title: "三星锁定2027年约75-80%存储产出的长期合同，存储进入定价权与长约化阶段",
      originalTitle: "Samsung Electronics locks in 80% of next year's memory output through long-term deals",
      source: "KED Global（韩国经济日报英文版）",
      time: "2026年10月09日",
      type: "行业媒体",
      url: "https://www.kedglobal.com/korean-chipmakers/newsView/ked202610090002",
      link: "https://www.kedglobal.com/korean-chipmakers/newsView/ked202610090002",
      summary: "据KED Global报道，三星电子已通过长期供应协议（LTA）锁定明年约75%-80%的内存芯片（DRAM/NAND/HBM）产出，将大部分产能从现货市场转向与超大规模云厂商（hyperscalers）的多年期合同。英伟达、谷歌、微软等全球科技巨头争相签订五年期及更长供应合同。这标志着AI驱动的供应短缺下，存储行业从现货/季度定价转向以合同为基础的订单制，供应商定价权显著强化，但业内也提示若周期逆转，长约可能令厂商承压。",
      impact: {
        direction: "利好",
        companies: "三星、SK海力士、美光、闪迪、存储链",
        industry: "存储、HBM、NAND、DRAM",
        logic: "存储供需紧张与长期合同锁定验证超级周期定价权，AI资本开支受益主线从GPU向存储端传导"
      }
    },
    {
      title: "SK海力士ADR登陆纳斯达克，募资265亿美元创海外企业赴美上市纪录，超额认购7倍",
      originalTitle: "SK Hynix raises $26.5 billion in U.S. IPO, oversubscribed 7x",
      source: "Yahoo Finance / 承销公告（美银、花旗、高盛、摩根大通牵头）",
      time: "2026年10月09日",
      type: "财经媒体",
      url: "https://finance.yahoo.com/markets/stocks/articles/not-micron-not-sandisk-memory-160000498.html",
      link: "https://finance.yahoo.com/markets/stocks/articles/not-micron-not-sandisk-memory-160000498.html",
      summary: "全球HBM存储龙头SK海力士以美国存托凭证（ADS）形式登陆纳斯达克，发行价149美元（较韩股溢价约3.1%），募资约265亿美元，创海外企业赴美上市最大规模纪录，机构认购倍数超7倍，主权基金与全球多头基金积极参与。SK海力士掌握全球约56%的HBM市场份额、深度绑定英伟达供应链，赴美上市填补了美股AI存储龙头空白。募资将用于龙仁晶圆厂与美国封装基地建设。其上市验证了全球资本对存储超级周期的追捧，也强化了美光、闪迪等存储标的的估值锚。",
      impact: {
        direction: "利好",
        companies: "SK海力士、美光、闪迪、三星、英伟达、存储链",
        industry: "存储、HBM、AI基础设施",
        logic: "存储超级周期获全球资本确认，AI内存供给瓶颈定价权凸显，存储板块估值锚上移"
      }
    },
    {
      title: "美股周五反弹收涨，三大指数周线齐涨、纳指连续四周上涨",
      originalTitle: "Stocks rise as oil prices, Treasury yields stabilize; major indexes post weekly gains",
      source: "Investopedia（Dow Jones Newswires）",
      time: "2026年10月09日",
      type: "财经媒体",
      url: "https://www.investopedia.com/stock-market-today-dow-jones-s-and-p-500-10092026-12165767",
      link: "https://www.investopedia.com/stock-market-today-dow-jones-s-and-p-500-10092026-12165767",
      summary: "美股周五集体反弹，道指+0.83%至51654.95、标普+0.59%至7811.54、纳指+0.64%至27366.17；当周标普+1.15%、道指+0.93%、纳指+0.64%，纳指录得连续第四周上涨。科技股自周四AI抛售中回升，大型科技股多数上涨（亚马逊+3.29%、微软+2.38%），半导体股多数下跌（AMD-2.03%、英特尔-2.22%、ARM-3.27%）。油价回落、10年期美债收益率在24年高位震荡。市场分析认为中东局势阶段性缓和压低能源价格与避险情绪，叠加AI产业链上游需求释放，风险偏好回暖。",
      impact: {
        direction: "利好",
        companies: "大型科技、半导体、存储",
        industry: "宏观、利率、AI",
        logic: "风险偏好修复，AI抛售后的技术性反弹叠加油价回落，为高估值科技股提供喘息窗口"
      }
    },
    {
      title: "SpaceX收购全国低频段频谱牌照，电信股重挫、铁塔股大涨",
      originalTitle: "SpaceX agrees to acquire a nationwide low-band spectrum license portfolio for Starlink Mobile",
      source: "Investopedia（Dow Jones Newswires）",
      time: "2026年10月09日",
      type: "财经媒体",
      url: "https://www.investopedia.com/stock-market-today-dow-jones-s-and-p-500-10092026-12165767",
      link: "https://www.investopedia.com/stock-market-today-dow-jones-s-and-p-500-10092026-12165767",
      summary: "马斯克旗下SpaceX宣布达成协议，收购覆盖全美的低频段频谱牌照组合，称此举补齐了\"Starlink Mobile成为美国主流移动运营商的关键剩余技术缺口\"。消息令T-Mobile、AT&T、Verizon等电信股大跌8.5%-13%，成为标普500当日领跌股；铁塔运营商Crown Castle、SBA Communications、American Tower大涨7%-16%。市场担忧星链直连手机（D2D）将侵蚀传统运营商的地面网络与频谱壁垒，卫星互联网与通信板块估值面临重估。",
      impact: {
        direction: "中性偏空（电信）/ 结构性",
        companies: "SpaceX、T-Mobile、AT&T、Verizon、铁塔运营商",
        industry: "通信、卫星互联网、直连手机",
        logic: "卫星直连手机加速落地，重估传统电信运营商估值，铁塔资产作为潜在合作载体反而受益"
      }
    }
  ],

  /* ============ 六、当日最值得关注的 3 个交易逻辑 ============ */
  logics: [
    { title: "OpenAI营收口径之争引发AI估值重估，但属统计差异而非需求崩塌，情绪快速修复",
      text: "OpenAI年化收入约500亿美元、较市场预期700亿低约200亿，直接冲击此前按更快变现曲线定价的GPU云与AI芯片估值，10月8日引发芯片板块跌3.4%、约5000亿美元科技市值蒸发。但差距根源是云伙伴销售额的\"加总口径\"与\"净口径\"差异（两者均符合GAAP），并非实际需求下滑。10月9日市场情绪快速修复，大型科技领涨反弹。核心矛盾仍在：AI资本开支能否转化为可持续回报，这将在三季报季得到验证。" },
    { title: "存储超级周期定价权进一步强化，三星长约+SK海力士赴美上市双验证供需紧张",
      text: "三星锁定2027年约75-80%存储产出的长期合同、英伟达谷歌微软争签五年长约，SK海力士ADR登陆纳斯达克募资265亿美元、超额认购7倍，美光已锁定来年大部分HBM供货协议。多条证据共同验证存储进入\"定价权\"阶段，AI内存需求（HBM、企业级SSD）持续吸收DRAM/NAND产能。存储板块成为利率承压环境下最具alpha的结构性方向，但需警惕存储涨价向苹果等终端整机需求端的负反馈。" },
    { title: "利率与油价博弈仍是科技股估值的关键外生变量，长端美债高位震荡构成压制",
      text: "10年期美债收益率在24年高位震荡（约5.25%），中东局势阶段性缓和令油价回落、边际缓解通胀预期，为高估值科技股提供支撑。但下周9月CPI数据、银行股三季报将共同决定利率路径——若通胀超预期，美联储10月27-28日会议连续加息预期升温，将二次压制高久期成长股估值。科技股在\"AI需求验证\"与\"利率压制\"两股力量间拉锯，财报季盈利兑现是决定方向的关键。" }
  ],

  /* ============ 七、未来 1—3 个交易日关注事项（具体事件） ============ */
  watchlist: [
    { date: "10月12日", event: "美国哥伦布日（债券市场休市、美股照常开市）", impact: "交投或趋清淡，市场聚焦下周通胀与财报线索" },
    { date: "10月13日", event: "摩根大通、富国银行等大型银行公布Q3财报（三季报序幕）", impact: "检验高利率环境下信贷与消费需求，定调财报季风险偏好" },
    { date: "10月14日", event: "美国9月CPI数据（关键通胀指标）", impact: "决定美联储10月27-28日会议连续加息概率，影响高估值科技股估值" },
    { date: "10月15日", event: "台积电（TSM）公布Q3完整财报及4Q指引（营收已超指引）", impact: "验证Vera Rubin/Blackwell放量节奏与先进封装供需，牵动AI芯片链" },
    { date: "10月27-28日", event: "美联储FOMC议息会议（9月已加息25bp）", impact: "决定是否连续第二次加息，是科技股估值的中期关键变量" }
  ],

  /* ============ 八、页脚免责声明 ============ */
  disclaimer:
    "本报告基于公开市场信息整理，仅供华泰期货内部研究参考，不构成任何投资建议。股价数据以交易所官方为准；新闻以原始来源（SEC / 白宫 / BIS / Treasury / BEA / BLS / Federal Reserve / Reuters 等）为准。投资有风险，决策需谨慎。"
};
