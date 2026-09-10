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
    reportDate: "2026年09月10日",   // 报告发布日期（周四）
    tradeDate: "2026年09月09日",    // 对应美股交易日（前一交易日，周三）
    author: "华泰期货 · 研究",
    tag: "每日市场跟踪"
  },

  /* ============ 二、市场概览 ============ */
  overview: {
    /* 简短概括：指数变化 + 个股变化 + 重大事件 */
    text: "9月9日美股三大指数连续第三日收跌：道指-0.77%、标普500-0.48%、纳指-0.64%，费城半导体(SOXX)逆势+0.68%。财政部60亿美元长债回购不及预期、油价破百，10年期美债收益率升至4.84%创2023年11月来新高，压制风险偏好。但AI主线局部强势：Meta+6.55%（发布AI智能体Muse）、AMD+3.04%、美光+2.75%；谷歌-2.28%、亚马逊-1.78%领跌。苹果发布首款折叠屏iPhone Duo。",
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
      name: "Meta Platforms",
      code: "META",
      direction: "超涨",
      change: "-0.00%",
      fiveDay: "9/4收盘616.77 → 9/9收盘653.69，近5个交易日累计约+6.0%，逆势连续走高",
      newHighLow: "创阶段新高，收于653.69美元，为近5个交易日最高收盘",
      volume: "明显放大，9/9成交3590.1万股，约为前一交易日（1891.0万股）的1.9倍",
      reason: "9/8正式发布个人AI智能体Muse，可自主代表用户发送邮件、购物、预订行程，首席AI官Alexandr Wang称使用量已\u201c远超预期\u201d；瑞穗证券上调至\u201c跑赢大盘\u201d、目标价750美元，KeyBanc给予\u201c增持\u201d、目标价780美元",
      impact: "AI智能体商业化打开第二增长曲线，推动Meta重回年初以来高位；后续关注Muse订阅转化率与AI资本开支回报能否兑现"
    }
  ],

  /* ============ 四、重点公司行情表 ============ */
  /* 超涨/超跌个股放最上方；无新闻的公司驱动因素简要说明即可 */
  stocks: [
    { name: "NVIDIA",    code: "NVDA",  change: "-0.00%", driver: "9/10除息日前获利了结+大盘承压，跌0.91%；129.3亿美元收购Hugging Face强化AI软件栈" },
    { name: "Microsoft", code: "MSFT",  change: "-0.00%", driver: "大型软件股随利率上行走弱，微跌0.47%" },
    { name: "Apple",     code: "AAPL",  change: "-0.00%", driver: "秋季发布会发布首款折叠屏iPhone Duo，股价盘中\u201c过山车\u201d后微跌0.28%" },
    { name: "Amazon",    code: "AMZN",  change: "-0.00%", driver: "大型科技股领跌，跌1.78%；云厂商资本开支前景受利率上行压制" },
    { name: "Alphabet",  code: "GOOGL", change: "-0.00%", driver: "科技七巨头中跌幅居前（-2.28%），大盘与利率压力叠加" },
    { name: "Meta",      code: "META",  change: "-0.00%", driver: "发布个人AI智能体Muse、使用量远超预期，逆势+6.55%，标普500最大涨幅个股之一" },
    { name: "Broadcom",  code: "AVGO",  change: "-0.00%", driver: "半导体板块分化、定制ASIC主题短线降温，跌1.13%" },
    { name: "AMD",       code: "AMD",   change: "-0.00%", driver: "AI硬件主线韧性，连续第二日上涨+3.04%，收于521.10美元" },
    { name: "Micron",    code: "MU",    change: "-0.00%", driver: "HBM产能年底翻倍至约10万片/月，存储景气延续，涨2.75%至1027.77美元" },
    { name: "Sandisk",   code: "SNDK",  change: "-0.00%", driver: "存储板块整体走强，NAND超级周期延续，涨1.51%至1764.17美元" }
  ],

  /* ============ 五、重要科技与政策新闻（一手来源） ============ */
  news: [
    {
      title: "美国财政部60亿美元长债回购（三倍扩容）不及预期，10年期美债收益率升至4.84%创2023年11月来新高",
      originalTitle: "U.S. Treasury Plans $6 Billion 10- to 20-Year Bond Buyback — Update",
      source: "Dow Jones Newswires（道琼斯通讯社，经 Morningstar 转载原文）",
      time: "2026年09月09日",
      type: "财经媒体",
      url: "https://www.morningstar.com/news/dow-jones/202609096829/us-treasury-plans-6-billion-10-to-20-year-bond-buyback-update",
      link: "https://www.morningstar.com/news/dow-jones/202609096829/us-treasury-plans-6-billion-10-to-20-year-bond-buyback-update",
      summary: "美国财政部9/9宣布周四（9/10）回购至多60亿美元10-20年期国债，为常规规模的3倍（上月指引\u201c至少翻倍\u201d至40亿美元）。但市场反应负面：10年期收益率升至4.84%（2023年11月来最高）、30年期升至5.29%、2年期升至4.42%。财政部长贝森特称无法改变国债均衡价格、目标是\u201c放慢\u201d波动；RSM首席经济学家Brusuelas等指出干预规模过小，难以扭转投资者对通胀与财政可持续性的担忧。",
      impact: {
        direction: "利空",
        companies: "全市场、高估值长久期成长股",
        industry: "利率、财政政策、通胀",
        logic: "无风险收益率上行压低股票估值锚，财政部干预力度不及预期强化了长端利率高位预期"
      }
    },
    {
      title: "油价破百叠加中东局势升级：布伦特站上100美元，美股三大指数连续第三日收跌",
      originalTitle: "Oil, Treasury yields turn higher as stocks falter",
      source: "Reuters（路透社，经 Euronext Live 转载原文）",
      time: "2026年09月09日",
      type: "财经媒体",
      url: "https://live.euronext.com/en/financial-news/oil-treasury-yields-turn-higher-stocks-falter",
      link: "https://live.euronext.com/en/financial-news/oil-treasury-yields-turn-higher-stocks-falter",
      summary: "布伦特原油周三站上100美元（7月24日来首次），WTI收96.05美元(+3.25%)、布伦特收101.21美元(+3.36%)。导火索是中东局势升级——伊朗称向驻约旦美军基地发射弹道导弹、双方互袭船只，引发供给担忧。三大指数连续第三日收跌：道指-0.77%、标普-0.48%、纳指-0.64%。市场聚焦周五PPI/CPI与下周三FOMC（交易员对加息与按兵不动的定价接近五五开、加息概率约60-70%）。",
      impact: {
        direction: "利空",
        companies: "全市场、消费与运输板块",
        industry: "能源、通胀、地缘政治",
        logic: "油价经通胀渠道强化央行加息预期，压制风险资产与成长股估值；但纳指相对道指抗跌，AI主线仍有韧性"
      }
    },
    {
      title: "Meta正式推出个人AI智能体Muse，使用量远超预期，股价逆势大涨6.55%",
      originalTitle: "Introducing Muse: The World's First Personal AI Agent Built for Everyone",
      source: "Meta Newsroom（官方新闻稿）",
      time: "2026年09月09日",
      type: "官方",
      url: "https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/",
      link: "https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/",
      summary: "Meta于9/8正式推出个人AI智能体Muse，可自主代表用户发送邮件、购物、预订行程，运行于独立云端虚拟机（VM），用户可授权接入邮箱、日历、支付、健康等应用并随时撤销权限；免费提供多数功能，另有订阅套餐。首席AI官Alexandr Wang称使用量已\u201c远超预期\u201d。9/9股价逆势+6.55%至653.69美元，为标普500最大涨幅个股之一，瑞穗上调至\u201c跑赢大盘\u201d750美元、KeyBanc\u201c增持\u201d780美元。",
      impact: {
        direction: "利好",
        companies: "Meta、AI智能体产业链",
        industry: "AI智能体、消费互联网",
        logic: "AI从\u201c聊天工具\u201d走向\u201c可执行任务的个人智能体\u201d，订阅商业模式打开第二增长曲线，对冲市场对AI资本开支回报的担忧"
      }
    },
    {
      title: "苹果发布首款折叠屏iPhone Duo：A20 Pro芯片、1999美元起，10月23日发售",
      originalTitle: "Apple unveils iPhone Duo",
      source: "Apple 官方新闻稿（经 Business Wire）",
      time: "2026年09月09日",
      type: "官方",
      url: "https://www.businesswire.com/news/home/20260909447182/en/",
      link: "https://www.businesswire.com/news/home/20260909447182/en/",
      summary: "苹果9/9发布首款折叠屏iPhone Duo，内屏7.6英寸/外屏5.4英寸Super Retina XDR，搭载A20 Pro芯片（2nm、6核CPU较A19 Pro快20%、7核GPU快40%、双16核神经引擎），5级钛金属机身+逾100部件铰链、IP68防水，起售价1999美元，10/16预订、10/23发售（覆盖70余国家）。同场发布iPhone 18 Pro/Pro Max、AirPods 5、Apple Watch 12。这是新CEO John Ternus主持的首场发布会。",
      impact: {
        direction: "中性",
        companies: "苹果、果链供应链",
        industry: "消费电子、折叠屏、端侧AI",
        logic: "折叠屏新形态是iPhone近十年最大迭代，但初期供应受限（有报道称日产量仅数百部），对业绩的实质拉动需待2027财年兑现"
      }
    },
    {
      title: "美光HBM产能年底翻倍至约10万片/月，存储与光通信板块逆势走强",
      originalTitle: "Micron's HBM push points to a far larger production base",
      source: "Economic Times（ET CIO，行业媒体）",
      time: "2026年09月09日",
      type: "行业媒体",
      url: "https://ciosea.economictimes.indiatimes.com/news/strategy-and-management/microns-hbm-push-points-to-a-far-larger-production-base/133843205",
      link: "https://ciosea.economictimes.indiatimes.com/news/strategy-and-management/microns-hbm-push-points-to-a-far-larger-production-base/133843205",
      summary: "行业消息（Electronic Times）称美光计划到2026年底将HBM月产能提升至约10万片晶圆，较去年的4-5万片接近翻倍，台湾与新加坡为主要制造/封装基地；HBM4 12层（36GB）已量产、配套英伟达Vera Rubin平台。9/9存储与光通信逆势走强：SK海力士+7.05%创新高、美光+2.75%、闪迪+1.51%、西部数据+1.04%，迈威尔+4.26%带动光通信（Lumentum、康宁上涨）。",
      impact: {
        direction: "利好",
        companies: "美光、闪迪、SK海力士、迈威尔",
        industry: "存储芯片、HBM、光通信",
        logic: "HBM仍是AI供应链最紧缺环节，产能扩张+涨价周期共同支撑存储估值；但集中扩产集中在2026年底-2027年，需关注供需反转风险"
      }
    },
    {
      title: "英伟达9月10日除息，此前129.3亿美元收购Hugging Face强化AI软件栈",
      originalTitle: "Market Street Wealth Management Advisors LLC Increases Holdings in NVIDIA Corporation NVDA",
      source: "MarketBeat（行业媒体）",
      time: "2026年09月09日",
      type: "行业媒体",
      url: "https://www.marketbeat.com/instant-alerts/filing-market-street-wealth-management-advisors-llc-increases-holdings-in-nvidia-corporation-nvda-2026-09-08",
      link: "https://www.marketbeat.com/instant-alerts/filing-market-street-wealth-management-advisors-llc-increases-holdings-in-nvidia-corporation-nvda-2026-09-08",
      summary: "英伟达9/10为除息日（每股派息0.25美元、10/1发放），9/9收跌0.91%报223.67美元。公司此前宣布以约129.3亿美元收购AI开源平台Hugging Face，分析师视为将芯片+CUDA软件与开源模型生态整合、巩固AI护城河。黄仁勋此前表示OpenAI GPT-6 Astra训练动用超10万套Grace Blackwell系统、另有约40万GPU即将上线，AI算力需求持续强劲。",
      impact: {
        direction: "中性",
        companies: "英伟达",
        industry: "AI算力、AI软件生态",
        logic: "收购强化软件栈中长期竞争力；短期受除息日与大盘利率压力影响，情绪偏中性"
      }
    }
  ],

  /* ============ 六、当日最值得关注的 3 个交易逻辑 ============ */
  logics: [
    { title: "利率与油价双重压制 vs AI主线韧性：资金在\u201c利率敏感\u201d与\u201cAI景气\u201d间分化",
      text: "财政部60亿美元回购不及预期、油价破百，共同推升10年期美债收益率至4.84%（2023年11月来新高），压制长久期成长股，大型科技与软件股（谷歌-2.28%、亚马逊-1.78%）领跌。但纳指(-0.64%)抗跌于道指(-0.77%)、费半逆势+0.68%，Meta、存储、AI硬件局部强势，显示资金并未全面撤离科技，而是在利率敏感资产与AI景气资产之间做结构性切换。9/11 CPI是决定性变量。" },
    { title: "AI智能体商业化成为新的催化主线：Meta Muse与苹果Siri AI共振",
      text: "Meta发布个人AI智能体Muse、使用量\u201c远超预期\u201d，带动股价+6.55%重回年初高位；苹果同日以Siri AI+Apple Intelligence押注端侧智能体，两大巨头同步将AI从\u201c对话工具\u201d推向\u201c可执行任务的个人智能体\u201d，订阅模式打开第二增长曲线。这是继AI算力（英伟达）之后，市场对\u201cAI商业化兑现\u201d叙事的一次集中定价，可能成为大型科技股估值的新锚。" },
    { title: "存储超级周期+HBM供需紧张延续：产能扩张与涨价周期并行",
      text: "美光HBM产能年底翻倍至约10万片/月、HBM4 12层量产（配套Vera Rubin），SK海力士+7%创新高、美光+2.75%、闪迪+1.51%，存储/光通信逆势走强，独立于大盘。HBM仍是AI供应链最紧缺环节，涨价+扩产同步推进；但三家大厂产能集中释放时点均在2026年底-2027年，需以9/30美光财报与后续需求数据验证涨价周期持续性，警惕2027年供需反转风险。" }
  ],

  /* ============ 七、未来 1—3 个交易日关注事项（具体事件） ============ */
  watchlist: [
    { date: "09月10日", event: "美国8月PPI + Oracle、Adobe盘后财报 + 欧洲央行(ECB)议息（预计加息25bp）+ 英伟达除息日", impact: "PPI为9月通胀先行指标；Oracle检验AI/企业软件景气；ECB加息收紧全球流动性" },
    { date: "09月11日", event: "美国8月CPI数据（9月FOMC前最后通胀数据）", impact: "加息与否的决定性依据，当前交易员对加息与按兵不动的定价接近五五开" },
    { date: "09月12日", event: "iPhone 18 Pro / Pro Max 开启预订", impact: "新机预售数据检验高端需求与苹果供应链预期" },
    { date: "09月15-16日", event: "美联储FOMC议息会议", impact: "市场定价加息概率约60-70%，决定高估值成长股估值锚" },
    { date: "09月30日", event: "美光科技（Micron）Q4财报", impact: "存储涨价周期与HBM供需的关键验证，影响存储板块（美光、闪迪）定价" }
  ],

  /* ============ 八、页脚免责声明 ============ */
  disclaimer:
    "本报告基于公开市场信息整理，仅供华泰期货内部研究参考，不构成任何投资建议。股价数据以交易所官方为准；新闻以原始来源（SEC / 白宫 / BIS / Treasury / BEA / Reuters / Bloomberg 等）为准。投资有风险，决策需谨慎。"
};
