/**
 * ============================================================
 *  美股科技板块前一交易日行情日报 —— 数据文件（每日只需改这里）
 *  （2026-11-01 更新：对应美股交易日 2026-10-30）
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
    reportDate: "2026年11月01日",   // 报告发布日期（周日）
    tradeDate: "2026年10月30日",    // 对应美股交易日（前一交易日，周五）
    author: "华泰期货 · 研究",
    tag: "每日市场跟踪"
  },

  /* ============ 二、市场概览 ============ */
  overview: {
    /* 简短概括：指数变化 + 个股变化 + 重大事件 */
    text: "10月30日美股三大指数集体重挫、纳指创6月来最大单日跌幅：道指-1.09%至51,770.31、标普500-1.82%至7,580.07、纳指-2.86%至25,437.00，费城半导体指数暴跌7.20%至10,688.80（6月来最大单日跌幅、5月来最低）。核心触发为亚马逊、字母表财报不及预期叠加AI资本开支烧钱担忧，英特尔Q4指引大幅滑坡暴跌28.58%拖累半导体全线，闪迪-13.47%、AMD-10.88%、高通-11.12%。能源板块逆势领涨（+1.91%），油价布伦特117.64/WTI 104.12创高。美联储官员Musalem、Barkin鹰派表态强化「更高更久」预期，10年期美债收益率回落至4.93%。",
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
      name: "Intel",
      code: "INTC",
      change: "-0.00%",
      type: "超跌",
      reason: "前一交易日暴跌约28.58%至65.76美元，创逾四十年最大单日跌幅，远超科技板块平均（纳指-2.86%、费半-7.20%）。核心触发为Q4营收指引仅150亿-160亿美元、非GAAP EPS 0.25美元，均大幅低于华尔街预期（170.7亿/0.43美元）；CEO陈立武与CFO Zinsner预警内存涨价致PC需求疲软、2026年PC出货量同比下滑约12%、低迷至少持续至2027上半年，叠加以色列工厂爆炸致两周停产、约6亿美元营收损失。"
    },
    {
      name: "SanDisk",
      code: "SNDK",
      change: "-0.00%",
      type: "超跌",
      reason: "前一交易日暴跌约13.47%至1,150.89美元，连续第二个交易日重挫（10/29已跌5.32%），换手率高达12.13%。尽管盘后Q1财报营收110.31亿美元同比+378%、数据中心业务+1682%、并宣布1拆8，强劲基本面仍未能抵挡存储板块随AI资本开支担忧的集体回调，市场对NAND高估值与价格持续性存疑，存储ETF（DRAM）单月累跌约20%。"
    },
    {
      name: "AMD",
      code: "AMD",
      change: "-0.00%",
      type: "超跌",
      reason: "前一交易日暴跌约10.88%至504.80美元，跌幅居大型半导体股前列。半导体板块随英特尔Q4指引滑坡与AI资本开支担忧遭遇抛售，费半单日-7.20%创6月来最大跌幅，AMD作为高Beta AI算力标的受情绪冲击最重，此前存储景气带动的反弹完全回吐。"
    }
  ],

  /* ============ 四、重点公司行情表 ============ */
  /* 超涨/超跌个股放最上方；无新闻的公司驱动因素简要说明即可 */
  stocks: [
    { name: "Intel",     code: "INTC",  change: "-0.00%", driver: "暴跌约28.58%至65.76美元（超跌提示，创逾四十年最大单日跌幅）；Q4营收指引150-160亿、EPS 0.25美元大幅低于预期，CEO陈立武/CFO预警内存涨价致PC需求疲软（2026年PC出货-12%、低迷至少持续至2027上半年），以色列工厂爆炸致约6亿美元营收损失" },
    { name: "SanDisk",   code: "SNDK",  change: "-0.00%", driver: "暴跌约13.47%至1,150.89美元（超跌提示）；盘后Q1财报营收110.31亿同比+378%、数据中心+1682%、宣布1拆8，但存储板块随AI资本开支担忧集体回调，NAND高估值与价格持续性受质疑" },
    { name: "AMD",       code: "AMD",   change: "-0.00%", driver: "暴跌约10.88%至504.80美元（超跌提示）；半导体板块随英特尔指引滑坡与AI资本开支担忧遭抛售，高Beta算力标的受情绪冲击最重" },
    { name: "NVIDIA",    code: "NVDA",  change: "-0.00%", driver: "下跌约4.22%至204.64美元，总市值跌破5万亿美元；作为S&P 500最大拖累之一，AI资本开支回报质疑压制GPU龙头情绪，费半暴跌7.20%创6月来最大单日跌幅" },
    { name: "Microsoft", code: "MSFT",  change: "-0.00%", driver: "下跌约1.55%至521.91美元；作为「AI投入仍能产生现金」的代表相对抗跌，但当日发行250亿美元债券加入科技巨头举债扩张行列，投资者对AI烧钱可持续性的担忧蔓延" },
    { name: "Apple",     code: "AAPL",  change: "-0.00%", driver: "下跌约1.23%至344.63美元；科技股全线承压，但苹果不直接参与AI基建资本开支竞赛，跌幅显著小于半导体与云计算标的，相对防御" },
    { name: "Amazon",    code: "AMZN",  change: "-0.00%", driver: "下跌约1.41%至240.35美元；Q3利润与营收不及预期，自由现金流-424亿美元、维持2026年约2200亿资本开支不变，盘后一度跌7%，AI基建巨额投入的回报与现金流引发担忧" },
    { name: "Alphabet",  code: "GOOGL", change: "-0.00%", driver: "下跌约1.40%至279.84美元，延续前一交易日12.6%的创纪录暴跌；Q3营收连续第二季低于预期、AI支出致自由现金流转负，市场担忧AI侵蚀传统搜索业务、AI烧钱难自洽" },
    { name: "Meta",      code: "META",  change: "-0.00%", driver: "下跌约1.53%至614.99美元；Q3自由现金流同样转负，随AI资本开支担忧整体回调，资金从超大规模云厂商撤出" },
    { name: "Micron",    code: "MU",    change: "-0.00%", driver: "下跌约5.30%，存储板块随AI资本开支担忧与NAND价格持续性存疑而集体回调；DRAM存储ETF单月累跌约20%，存储「超级周期」遭遇情绪冲击" }
  ],

  /* ============ 五、重要科技与政策新闻（一手来源） ============ */
  news: [
    {
      title: "亚马逊财报烧钱+英特尔预警PC需求疲软，AI繁荣成本冲击全市场，纳指暴跌2.86%",
      originalTitle: "Amazon burns cash, Intel flags weak PC demand as AI boom's costs ripple across markets",
      source: "Reuters（英文财经媒体，经The Hindu Business Line转载）",
      time: "2026年10月30日",
      type: "财经媒体",
      url: "https://thehindubusinessline.com/info-tech/amazon-burns-cash-intel-flags-weak-pc-demand-as-ai-booms-costs-ripple-across-markets/article71643385.ece",
      link: "https://thehindubusinessline.com/info-tech/amazon-burns-cash-intel-flags-weak-pc-demand-as-ai-booms-costs-ripple-across-markets/article71643385.ece",
      summary: "华尔街对AI繁荣成本的担忧在周四盘后集中爆发。亚马逊Q3业绩显示数据中心支出激增、现金大量消耗，预计假日季营收低于预期；英特尔Q4营收指引大幅低于预期，预警内存芯片短缺推高成本、PC需求放缓至少持续至2027上半年。Alphabet与Meta三季度现金流转负，微软虽为唯一例外却也通过发行250亿美元债券加入举债扩张。费城半导体指数盘后自6月高点累跌约21%。",
      impact: {
        direction: "利空（AI资本开支叙事与半导体）",
        companies: "亚马逊、英特尔、Alphabet、Meta、微软、英伟达",
        industry: "云计算、半导体、PC、AI基础设施",
        logic: "AI基建竞赛的现金消耗与回报差距成为市场核心担忧，资金从高估值科技股撤出转向债券避险，半导体指数承压"
      }
    },
    {
      title: "科技股抛售致美股市值单周蒸发近1万亿美元，AI投资回报遭重估",
      originalTitle: "Tech sell-off drives US markets down by nearly $1tn after subpar earnings reports",
      source: "The Guardian / Associated Press（英文财经媒体）",
      time: "2026年10月30日",
      type: "财经媒体",
      url: "https://www.theguardian.com/technology/2026/oct/30/tech-stocks-drop-earnings-report",
      link: "https://www.theguardian.com/technology/2026/oct/30/tech-stocks-drop-earnings-report",
      summary: "由大型科技公司财报不及预期引发的抛售，令纳斯达克交易所市值一周蒸发近1万亿美元、一个月蒸发约2万亿美元。标普500周五跌超1%，纳指跌超3%；英特尔暴跌近30%逼近1974年以来最差单日表现，英伟达（市值约5万亿美元）跌3.1%成为标普最大拖累。市场担忧AI数百亿美元投入能否足够快地转化为利润与生产率，叠加高利率或令数据中心建设放缓。",
      impact: {
        direction: "利空（科技板块整体）",
        companies: "英伟达、英特尔、Alphabet、亚马逊、Meta",
        industry: "AI基础设施、半导体、云计算",
        logic: "AI投资回报周期与高利率双重压力令「AI交易」遭遇系统性重估，纳指月度累跌约6.45%"
      }
    },
    {
      title: "英特尔Q4指引大幅滑坡暴跌28.6%，PC需求疲软+以色列工厂爆炸双重打击",
      originalTitle: "Stocks fall on AI cash burn worries while bonds rally with oil",
      source: "Reuters（英文财经媒体，经Lufkin Daily News转载）",
      time: "2026年10月30日",
      type: "财经媒体",
      url: "https://lufkindailynews.com/news_reuters/business/tech-giants-spending-spooks-investors-as-bonds-rally/article_9c2e1297-5646-52be-93b1-64481a26e8ff.html",
      link: "https://lufkindailynews.com/news_reuters/business/tech-giants-spending-spooks-investors-as-bonds-rally/article_9c2e1297-5646-52be-93b1-64481a26e8ff.html",
      summary: "英特尔股价暴跌28.6%，其Q4营收指引150-160亿美元、非GAAP EPS 0.25美元均低于LSEG预期，并预警PC需求放缓可能延续至明年；同时以色列工厂爆炸导致两周停产、两季度损失约6亿美元营收。抛售蔓延至整个芯片板块，费城半导体指数跌逾7%、触及5月以来最低，创6月底以来最大单日跌幅；标普科技板块跌4.2%。资金涌入美债避险，10年期收益率回落5.8bp至4.931%。",
      impact: {
        direction: "利空（英特尔及半导体/PC产业链）",
        companies: "英特尔、AMD、博通、台积电、高通",
        industry: "半导体制造、PC、存储器",
        logic: "英特尔指引滑坡叠加PC需求疲软，强化对半导体需求端放缓的担忧，费半单日-7.20%创6月来最大跌幅"
      }
    },
    {
      title: "美国Q3 GDP年化增长3.4%超预期，但美联储官员鹰派表态强化「更高更久」利率预期",
      originalTitle: "Nasdaq 100 Futures Fall More Than 2% as Tech Outlooks Weigh on Markets",
      source: "EconoTimes（英文财经媒体，援引AP/Reuters/FXStreet）",
      time: "2026年10月30日",
      type: "财经媒体",
      url: "https://econotimes.com/Nasdaq-100-Futures-Fall-More-Than-2-as-Tech-Outlooks-Weigh-on-Markets-1766654",
      link: "https://econotimes.com/Nasdaq-100-Futures-Fall-More-Than-2-as-Tech-Outlooks-Weigh-on-Markets-1766654",
      summary: "美国经济分析局（BEA）估算Q3实际GDP年化增长3.4%（Q2为2.2%），由投资、消费与政府支出驱动。同日，圣路易斯联储主席Musalem警告通胀仍过高且广泛，央行需尽快行动防止高物价固化；里士满联储主席Barkin暗示货币政策仍偏紧以遏制粘性通胀。FOMC于10/28以10:2维持利率3.75%-4.00%不变（库克、哈马克主张加息），市场隐含12月加息概率约75%。",
      impact: {
        direction: "中性偏空（增长强、通胀热并存）",
        companies: "高估值科技股整体",
        industry: "宏观经济、利率敏感板块",
        logic: "强劲增长缓解衰退担忧，但粘性通胀叠加美联储鹰派表态强化「更高更久」预期，高利率持续压制高估值科技股贴现率"
      }
    },
    {
      title: "纽约股市三大股指30日显著下跌，科技板块遭抛售领跌4.24%",
      originalTitle: "U.S. stocks tumble amid Big Tech earnings misses, AI spending fears",
      source: "Xinhua（新华网英文官方通讯社）",
      time: "2026年10月30日",
      type: "官方",
      url: "http://chinaview.cn/20261031/d223ef7bce5e4340a46de391d2fde24e/c.html",
      link: "http://chinaview.cn/20261031/d223ef7bce5e4340a46de391d2fde24e/c.html",
      summary: "美国股市周五大幅下跌，连续第二日重挫。道指跌572.25点（-1.09%）至51,770.31，标普500跌140.32点（-1.82%）至7,580.07，纳指跌747.73点（-2.86%）至25,437.00。11大板块六涨五跌，能源（+1.91%）与必需消费品（+1.38%）领涨，科技（-4.24%）领跌。英特尔暴跌28.58%、闪迪暴跌13.47%（尽管超预期财报与1拆8）。布伦特原油升至117.64美元/桶、WTI升至104.12美元，加剧通胀担忧。",
      impact: {
        direction: "利空（科技板块）",
        companies: "英特尔、闪迪、亚马逊、Alphabet、英伟达",
        industry: "半导体、存储、AI、云计算",
        logic: "大型科技财报接连不及预期重创AI繁荣信心，叠加油价飙升推升通胀、美联储鹰派表态，科技板块系统性回调"
      }
    },
    {
      title: "闪迪Q1财报营收同比+378%、数据中心业务+1682%，宣布1拆8仍难阻股价暴跌",
      originalTitle: "U.S. stocks tumble amid Big Tech earnings misses, AI spending fears",
      source: "Xinhua（新华网英文官方通讯社）",
      time: "2026年10月30日",
      type: "官方",
      url: "http://chinaview.cn/20261031/d223ef7bce5e4340a46de391d2fde24e/c.html",
      link: "http://chinaview.cn/20261031/d223ef7bce5e4340a46de391d2fde24e/c.html",
      summary: "闪迪公布Q1（截至10/2）财报：营收110.31亿美元同比+378%，数据中心业务营收48亿美元同比暴增1682%，受AI基础设施带动的企业级SSD需求推动；非GAAP EPS 49.51美元超预期。公司宣布1拆8股票拆分，新股11/19分配。尽管基本面强劲，投资者对NAND高估值与存储芯片价格持续性存疑，股价当日暴跌13.47%。",
      impact: {
        direction: "利好基本面（闪迪/存储），短期受情绪拖累",
        companies: "闪迪、美光、SK海力士、西部数据",
        industry: "存储芯片、NAND、数据中心SSD",
        logic: "数据中心SSD需求爆发验证AI存储景气，但存储板块与AI整体情绪高度联动，NAND超级周期短期遭遇估值回调"
      }
    }
  ],

  /* ============ 六、当日最值得关注的 3 个交易逻辑 ============ */
  logics: [
    { title: "AI「现金流裁决」进入最残酷阶段：从「谁投得多」彻底转向「谁烧得起还得起」，科技股遭遇系统性重估",
      text: "亚马逊财报烧钱、Alphabet自由现金流转负、Meta现金流转负、微软发行250亿美元债券加入举债——超大规模厂商的AI资本开支正以超预期速度吞噬现金，而商业回报尚未同步兑现。英特尔Q4指引大幅滑坡则从需求端印证：内存涨价与PC疲软正侵蚀半导体基本面。市场定价逻辑已彻底切换至「现金流可持续性」，纳指一周蒸发近1万亿美元、月度累跌6.45%，资金从高估值科技股撤出转向美债避险（10年期收益率回落至4.93%）。这一「现金流裁决」将成为未来数周科技股估值的核心标尺。" },
    { title: "存储「超级周期」遭遇情绪急刹车：闪迪基本面强劲却暴跌13%，基本面与股价阶段性背离",
      text: "闪迪Q1营收同比+378%、数据中心业务+1682%并宣布1拆8，美光、SK海力士基本面同样扎实（SK海力士产能售罄至2029），但存储板块当日集体暴跌（闪迪-13.47%、美光-5.30%、西数-7.41%、希捷-7.98%），DRAM存储ETF单月累跌约20%。这印证存储与「AI算力/云厂商现金流」情绪的高度联动：即便供需基本面未变，存储短期仍难脱离AI整体情绪定价。存储超级周期的中期逻辑未变，但短期需警惕AI情绪退潮带来的Beta回撤，基本面与股价的背离反而为中期布局提供观察窗口。" },
    { title: "宏观「增长强、通胀热、央行鹰」三重压制：Q3 GDP 3.4%超预期，油价与鹰派表态强化「更高更久」",
      text: "BEA估算Q3实际GDP年化增长3.4%超预期，显示经济动能强劲；但油价飙升（布伦特117.64/WTI 104.12，受乌克兰袭击俄炼厂与伊朗战争推动）叠加粘性通胀，令圣路易斯联储Musalem警告通胀仍过高、需尽快行动，里士满联储Barkin暗示货币政策仍偏紧。市场隐含12月加息概率约75%。「强增长+热通胀+鹰派央行」的组合意味着即便AI基本面叙事修复，高利率与粘性通胀仍将持续压制高估值科技股的贴现率，构成独立于产业基本面的宏观第二重压制。" }
  ],

  /* ============ 七、未来 1—3 个交易日关注事项（具体事件） ============ */
  watchlist: [
    { date: "11月2日（周一）", event: "美国10月ISM制造业PMI、标普全球制造业PMI终值", impact: "验证制造业与科技硬件需求动能，若PMI走弱将强化半导体需求放缓担忧" },
    { date: "11月3日（周二）", event: "美国中期选举日，民主党预计部分或全面控制国会", impact: "选举结果影响AI数据中心建设、科技监管与产业政策的政策方向，加大市场不确定性" },
    { date: "11月4日（周三）", event: "美国10月ISM服务业PMI、美联储官员密集讲话", impact: "服务业通胀与官员鹰鸽表态决定「更高更久」预期走向，影响高估值科技股" },
    { date: "11月5日（周四）", event: "苹果（AAPL）、高通（QCOM）等财报季持续；美国初请失业金人数", impact: "苹果财报验证消费电子与AI端侧需求；高通财报验证AI算力与半导体景气" },
    { date: "11月6日（周五）", event: "美国10月非农就业报告（若10/31未公布则顺延）", impact: "非农与薪资增速是美联储12月加息决策关键数据，直接影响利率敏感科技股估值" }
  ],

  /* ============ 八、页脚免责声明 ============ */
  disclaimer:
    "本报告基于公开市场信息整理，仅供华泰期货内部研究参考，不构成任何投资建议。股价数据以交易所官方为准；新闻以原始来源（SEC / 白宫 / BIS / Treasury / BEA / BLS / Federal Reserve / Reuters 等）为准。投资有风险，决策需谨慎。"
};
