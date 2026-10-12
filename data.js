/**
 * ============================================================
 *  美股科技板块前一交易日行情日报 —— 数据文件（每日只需改这里）
 *  （2026-10-12 更新：对应美股交易日 2026-10-09）
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
    reportDate: "2026年10月12日",   // 报告发布日期（周一，哥伦布日）
    tradeDate: "2026年10月09日",    // 对应美股交易日（前一交易日，周五）
    author: "华泰期货 · 研究",
    tag: "每日市场跟踪"
  },

  /* ============ 二、市场概览 ============ */
  overview: {
    /* 简短概括：指数变化 + 个股变化 + 重大事件 */
    text: "10月9日美股自前日AI抛售中反弹收涨：道指+0.83%至51654.95、标普+0.59%至7811.54、纳指+0.64%至27366.17，三大指数周线齐涨、纳指连续四周收涨。OpenAI年化收入口径之争引发的AI估值担忧缓和后，大型科技领涨（亚马逊+3.29%、微软+2.38%），半导体多数回吐（ARM-3.27%、英特尔-2.22%、AMD-2.03%），光通信走强（Ciena+5.58%、Lumentum+5.22%）。周末催化密集：英伟达联手六大机构筹5000亿美元AI算力融资平台、英特尔1971年来首次公开增发150亿美元、美光扩大回购至351.6亿美元。",
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
    { name: "NVIDIA",    code: "NVDA",  change: "-0.00%", driver: "小幅走弱（约-0.5%）；OpenAI营收口径之争引发的前一日AI抛售余波未尽，但周末英伟达联手阿波罗/黑石/贝莱德/高盛等六大机构筹5000亿美元AI算力融资平台、并拟投资AI推理芯片初创d-Matrix，AI基础设施融资逻辑强化" },
    { name: "Microsoft", code: "MSFT",  change: "-0.00%", driver: "领涨大型科技（约+2.4%）；推出面向快速决策的Microsoft-Decision-1模型，Copilot生态商业化延续；周末纳德拉发文呼吁为先进AI设置\"紧急刹车\"，AI安全治理叙事受关注" },
    { name: "Apple",     code: "AAPL",  change: "-0.00%", driver: "走弱（约-1.1%）；市场担忧存储芯片涨价推升iPhone整机成本，此前已报道削减iPhone 18 Pro零部件订单，消费电子需求端承压，领跌科技七巨头" },
    { name: "Amazon",    code: "AMZN",  change: "-0.00%", driver: "领涨科技七巨头（约+3.3%）；随大盘风险偏好修复反弹幅度最大，AWS云计算与AI资本开支叙事延续，前日AI抛售跌幅被明显收复" },
    { name: "Alphabet",  code: "GOOGL", change: "-0.00%", driver: "小幅上涨（约+1.0%）；谷歌云与Gemini AI叙事延续，作为OpenAI主要竞争对手受益于AI应用层竞争，Alphabet正通过股权融资计划募资至多850亿美元加码AI基建" },
    { name: "Meta",      code: "META",  change: "-0.00%", driver: "基本持平（约-0.3%）；Muse个人AI代理上线后高位整理，短期算力成本承压与长期商业化前景博弈，花旗此前测算Muse至2030年或带来逾270亿美元年收入" },
    { name: "Broadcom",  code: "AVGO",  change: "-0.00%", driver: "小幅上涨（约+0.4%）；为OpenAI定制AI推理芯片、寻求逾500亿美元融资的叙事延续，OpenAI营收担忧缓和后定制ASIC逻辑修复，光通信业务亦受益于Ciena等板块走强" },
    { name: "AMD",       code: "AMD",   change: "-0.00%", driver: "回调（约-2.0%）；前日AI硬件反弹后获利回吐，OpenAI营收不及预期令市场重新审视AI加速器需求曲线，与OpenAI的芯片供应与股权绑定受关注" },
    { name: "Micron",    code: "MU",    change: "-0.00%", driver: "小幅回落（约-0.7%）；存储板块整体回调，但董事会批准扩大回购至351.6亿美元（12月9日起）释放信心，AI内存需求仍强、已锁定来年大部分HBM供货协议且签约价上调" },
    { name: "SanDisk",   code: "SNDK",  change: "-0.00%", driver: "回落（约-1.7%）；NAND存储板块回调，但企业级SSD与QLC Stargate平台需求叙事仍强，三星锁长约佐证NAND供需偏紧，中长期存储定价权逻辑未变" }
  ],

  /* ============ 五、重要科技与政策新闻（一手来源） ============ */
  news: [
    {
      title: "英伟达联手阿波罗、黑石、贝莱德等六大机构，筹建逾5000亿美元AI算力融资平台",
      originalTitle: "Nvidia and Broadcom Mobilize Billions in Debt and Private Capital to Fund AI Chip Infrastructure",
      source: "The Startup Mac（综合 Bloomberg / Reuters / CNBC）",
      time: "2026年10月12日",
      type: "财经媒体",
      url: "https://www.thestartupmac.com/news/nvidia-and-broadcom-mobilize-billions-in-debt-and-private-capital-to-fund-ai-chip-infrastructure",
      link: "https://www.thestartupmac.com/news/nvidia-and-broadcom-mobilize-billions-in-debt-and-private-capital-to-fund-ai-chip-infrastructure",
      summary: "英伟达周一宣布与阿波罗全球管理、黑石、贝莱德、布鲁克菲尔德资产管理、高盛、KKR六家华尔街顶级机构签署合作，建立专门的算力融资平台，目标未来数年动员逾5000亿美元第三方资本，为AI基础设施（前沿AI实验室、企业、AI云）提供以债务为主的融资。英伟达将承保其中最多1250亿美元信用风险作为安全垫。黄仁勋称\"只向这六家发出邀请、无一拒绝\"，将此定位为\"AI工厂\"这一可投资新基础设施的构建。摩根士丹利认为该结构为英伟达开辟毛利率近乎100%的经常性收入来源，但也提示5000亿仅为名义潜在规模、无强制部署约束，且产业整体杠杆水位持续抬升。",
      impact: {
        direction: "利好（但存杠杆与循环融资争议）",
        companies: "英伟达、博通、阿波罗、黑石、贝莱德、高盛、KKR、超大规模云厂商",
        industry: "AI基础设施、算力融资、数据中心、GPU",
        logic: "AI基础设施融资从厂商资产负债表转向第三方私募信用市场，缓解云厂商资本开支约束，强化AI需求可持续性；但循环融资与杠杆集中引发对需求真实性的质疑"
      }
    },
    {
      title: "英特尔1971年上市以来首次公开增发，150亿美元募资扩至200亿、认购需求超千亿",
      originalTitle: "Intel plans to raise $15 billion through share sale, first since 1971",
      source: "Reuters / Bloomberg",
      time: "2026年10月12日",
      type: "财经媒体",
      url: "https://www.uniset.ca/microstates/tel_sp_gib_talks.htm?live-blog-21176687-2026-08-11-intel-said-on-monday-it-was-planning-to-raise-15-billion-through-a-share-sale-as",
      link: "https://www.uniset.ca/microstates/tel_sp_gib_talks.htm?live-blog-21176687-2026-08-11-intel-said-on-monday-it-was-planning-to-raise-15-billion-through-a-share-sale-as",
      summary: "英特尔周一宣布发行150亿美元普通股，为1971年上市以来首次公开增发，用于晶圆代工扩张、先进封装与一般经营用途。据彭博援引知情人士，因认购需求超1000亿美元，公司拟将规模扩大至约200亿美元，定价或在每股95美元或以上、较上周五收盘价折价约6.5%。摩根大通、高盛、摩根士丹利、花旗任联席账簿管理人。消息公布后英特尔盘前一度跌超4%，今年以来股价累涨约164%。此举与Alphabet拟募资850亿美元、甲骨文200亿美元增发同处本轮AI股权融资潮，印证AI资本开支正从债券持有人向股权投资者转移。",
      impact: {
        direction: "中性（短期稀释利空 / 长期扩产利好）",
        companies: "英特尔、台积电、格罗方德、AI服务器CPU链",
        industry: "晶圆代工、先进封装、半导体制造、AI基础设施",
        logic: "AI数据中心需求推升服务器CPU与代工需求，股权融资补足资本开支；短期股权稀释压制股价，但超额认购印证机构对代工转型前景的认可"
      }
    },
    {
      title: "美光董事会将股票回购上限上调至351.6亿美元，释放存储超级周期现金回报信号",
      originalTitle: "Micron expands stock buyback program to up to $35.16 billion",
      source: "SEC 10-K 文件 / 财联社综合",
      time: "2026年10月10日",
      type: "官方（SEC）/ 财经媒体",
      url: "https://www.163.com/dy/article/L8RRJIEH05198CJN.html",
      link: "https://www.163.com/dy/article/L8RRJIEH05198CJN.html",
      summary: "美光科技在10-K文件中披露，董事会批准将自2026年12月9日起可酌情回购的普通股最高金额上调至351.6亿美元，此前已批准的100亿美元回购计划中约22亿美元额度尚未使用。美光股价今年以来累计上涨约260%，9月30日公布的2026财年Q4营收同比增近380%、GAAP净利润同比激增超1077%，AI带动的云存储、核心数据中心、HBM需求全面爆发。大规模回购计划落地，标志着存储厂商在超级周期中将强劲现金流通过股东回报兑现。",
      impact: {
        direction: "利好",
        companies: "美光、SK海力士、闪迪、三星、存储链",
        industry: "存储、HBM、DRAM、NAND",
        logic: "存储超级周期下厂商现金流充裕，扩大回购强化股东回报预期，为板块估值提供支撑；也侧面验证AI内存需求的强劲与持续性"
      }
    },
    {
      title: "美股周五反弹收涨，三大指数周线齐涨、纳指连续四周上涨，静待通胀与银行财报",
      originalTitle: "Stocks rise as oil prices, Treasury yields stabilize; major indexes post weekly gains",
      source: "Investopedia / 中新经纬（Dow Jones Newswires）",
      time: "2026年10月09日",
      type: "财经媒体",
      url: "https://www.investopedia.com/stock-market-today-dow-jones-s-and-p-500-10092026-12165767",
      link: "https://www.investopedia.com/stock-market-today-dow-jones-s-and-p-500-10092026-12165767",
      summary: "美股周五集体反弹，道指+0.83%至51654.95、标普+0.59%至7811.54、纳指+0.64%至27366.17；当周标普+1.15%、道指+0.93%、纳指+0.64%，纳指录得连续第四周上涨。大型科技股多数上涨（亚马逊+3.29%、微软+2.38%、特斯拉+2.05%），半导体股多数下跌（ARM-3.27%、英特尔-2.22%、AMD-2.03%），光通信板块走强（Ciena+5.58%、Lumentum+5.22%）。中东局势阶段性缓和令油价回落，10年期美债收益率高位震荡，市场聚焦下周9月CPI与银行三季报。",
      impact: {
        direction: "利好",
        companies: "大型科技、半导体、光通信、存储",
        industry: "宏观、利率、AI",
        logic: "风险偏好修复叠加AI抛售后的技术性反弹，油价回落边际缓解通胀预期，为高估值科技股提供支撑窗口"
      }
    },
    {
      title: "伯恩斯坦力挺半导体：台积电提价、存储涨价与ASIC扩张构成财报季主线",
      originalTitle: "Bernstein stays bullish on semis: TSMC pricing, memory hikes, ASIC expansion lead Q3",
      source: "Bernstein Research / 智通财经",
      time: "2026年10月11日",
      type: "财经媒体",
      url: "https://www.toutiao.com/article/7695406330093355520/",
      link: "https://www.toutiao.com/article/7695406330093355520/",
      summary: "伯恩斯坦在《亚洲半导体与全球存储：2026年第三季度业绩前瞻》中维持对半导体尤其是存储板块的\"坚定做多\"评级。报告指出，台积电Q3初步营收约1.494万亿新台币、同比+51%，三星初步营业利润107.4万亿韩元、同比+782.5%，晶圆与存储需求正兑现为业绩。投资主线覆盖台积电代工定价权、存储板块盈利长期持续性、台积电产能向CPU倾斜与谷歌ASIC放量。伯恩斯坦认为10年期/30年期美债收益率激增导致的信用融资成本攀升是主要风险，但前期调整已反映大部分风险，AI大客户在成本上升后仍维持强劲需求。报告另提及OpenAI正洽谈约1.4万亿美元投前估值融资、Anthropic潜在IPO估值达1.8-2万亿美元。",
      impact: {
        direction: "利好",
        companies: "台积电、三星、SK海力士、美光、闪迪、谷歌、ASIC链",
        industry: "晶圆代工、存储、HBM、ASIC",
        logic: "头部投行财报季前瞻验证AI需求兑现为业绩，台积电定价权与存储涨价构成盈利上行主线，缓解市场对AI资本开支回报的担忧"
      }
    },
    {
      title: "微软纳德拉呼吁为先进AI设置\"紧急刹车\"，AI安全治理从行业自律转向主动内控",
      originalTitle: "Microsoft CEO Satya Nadella calls for 'emergency brakes' on advanced AI models",
      source: "微软（Nadella 社交媒体） / 东方财富综合",
      time: "2026年10月11日",
      type: "官方（公司）/ 财经媒体",
      url: "https://finance.eastmoney.com/a/202610123892173052.html",
      link: "https://finance.eastmoney.com/a/202610123892173052.html",
      summary: "微软CEO纳德拉周末在社交媒体发文，主张将先进AI模型视为潜在的内部安全风险，从部署之初就建立限制与控制机制。他表示授权人员应能在任务执行过程中暂停或关闭模型，企业不能仅依赖模型开发者的安全保证。这一表态与此前白宫推动的\"超级智能\"自愿安全协议、以及行业从AI安全转向自我监管的治理脉络一脉相承，也呼应了微软自身在Copilot生态商业化过程中对AI可靠性的现实关切。",
      impact: {
        direction: "中性（治理强化）",
        companies: "微软、OpenAI、谷歌、Meta、Anthropic",
        industry: "AI大模型、AI安全、企业级AI",
        logic: "AI安全治理从被动响应转向主动内控，短期或增加合规成本，中长期利好有治理能力的头部厂商建立信任壁垒"
      }
    },
    {
      title: "特朗普宣布俄乌\"能源停火\"，地缘风险边际缓和、油价回落，缓解通胀预期",
      originalTitle: "Trump announces Russia-Ukraine energy ceasefire",
      source: "东方财富 / 新华社综合",
      time: "2026年10月12日",
      type: "财经媒体",
      url: "https://finance.eastmoney.com/a/202610123892173052.html",
      link: "https://finance.eastmoney.com/a/202610123892173052.html",
      summary: "美国总统特朗普周末宣布俄乌\"能源停火\"，为市场情绪带来地缘风险边际缓和的积极信号。叠加此前中东局势阶段性缓和，WTI原油期货与布伦特原油价格回落，10年期美债收益率自24年高位震荡。能源价格回落有助于缓解通胀预期，为高估值科技股提供估值支撑。市场将焦点转向本周三公布的美国9月CPI数据，该数据将决定美联储10月27-28日会议是否连续第二次加息。",
      impact: {
        direction: "利好（宏观）",
        companies: "大型科技、半导体（整体）",
        industry: "宏观、利率、能源、通胀",
        logic: "地缘风险缓和压低能源价格、缓解通胀预期，长端利率高位震荡暂缓，为高久期成长股估值提供边际支撑"
      }
    }
  ],

  /* ============ 六、当日最值得关注的 3 个交易逻辑 ============ */
  logics: [
    { title: "AI资本开支从厂商资产负债表转向第三方私募信用，融资结构升级强化需求可持续性",
      text: "英伟达联手阿波罗、黑石、贝莱德、高盛、KKR等六大机构筹建逾5000亿美元算力融资平台，并以债务为主、英伟达承保最多1250亿信用风险，标志着AI基础设施融资从单一云厂商资产负债表转向第三方私募信用市场。英特尔1971年来首次公开增发150亿（扩至200亿）、Alphabet拟募资850亿、甲骨文200亿增发，共同印证AI资本开支的股权+债务双轮融资潮。这一结构在缓解云厂商资本约束、强化AI需求的同时，也引发\"循环融资\"与杠杆集中的质疑，成为AI牛市持续性的核心分歧点。" },
    { title: "存储超级周期兑现为股东回报，美光扩大回购、伯恩斯坦财报季前坚定看多",
      text: "美光董事会将回购上限上调至351.6亿美元（12月9日起），在Q4营收同比+380%、GAAP净利润+1077%的业绩基础上，将超级周期现金流通过回购直接兑现给股东。伯恩斯坦财报季前瞻指出台积电Q3营收+51%、三星营业利润+782.5%，晶圆定价权与存储涨价构成盈利上行主线。存储板块在利率承压环境下成为最具alpha的结构性方向，但需警惕存储涨价向苹果等终端整机需求端的负反馈，以及长约锁定后周期逆转的风险。" },
    { title: "利率与通胀仍是科技股估值的关键外生变量，本周CPI与银行财报决定方向",
      text: "10年期美债收益率在24年高位震荡，特朗普宣布俄乌\"能源停火\"叠加中东缓和令油价回落、边际缓解通胀预期，为高估值科技股提供支撑。但本周三9月CPI数据、周二起银行股三季报将共同决定利率路径——若通胀超预期，美联储10月27-28日会议连续加息预期升温，将二次压制高久期成长股估值。周一哥伦布日债券市场休市、美股照常开市，交投或趋清淡。科技股在\"AI需求验证\"与\"利率压制\"两股力量间拉锯，财报季盈利兑现是决定方向的关键。" }
  ],

  /* ============ 七、未来 1—3 个交易日关注事项（具体事件） ============ */
  watchlist: [
    { date: "10月12日", event: "美国哥伦布日（债券市场休市、美股照常开市）", impact: "交投或趋清淡，英伟达融资平台、英特尔增发等周末消息或主导盘面" },
    { date: "10月13日", event: "摩根大通、富国银行、花旗、高盛等大型银行公布Q3财报（三季报序幕）", impact: "检验高利率环境下信贷与消费需求，定调财报季风险偏好" },
    { date: "10月14日", event: "美国9月CPI数据（关键通胀指标）", impact: "决定美联储10月27-28日会议连续加息概率，影响高估值科技股估值" },
    { date: "10月15日", event: "台积电（TSM）公布Q3完整财报及4Q指引（Q3营收已超指引）", impact: "验证Vera Rubin/Blackwell放量节奏与先进封装供需，牵动AI芯片链" },
    { date: "10月27-28日", event: "美联储FOMC议息会议（9月已加息25bp至3.75%-4.00%）", impact: "决定是否连续第二次加息，是科技股估值的中期关键变量" }
  ],

  /* ============ 八、页脚免责声明 ============ */
  disclaimer:
    "本报告基于公开市场信息整理，仅供华泰期货内部研究参考，不构成任何投资建议。股价数据以交易所官方为准；新闻以原始来源（SEC / 白宫 / BIS / Treasury / BEA / BLS / Federal Reserve / Reuters 等）为准。投资有风险，决策需谨慎。"
};
