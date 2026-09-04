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
    reportDate: "2026年09月04日",   // 报告发布日期
    tradeDate: "2026年09月03日",    // 对应美股交易日（前一交易日）
    author: "华泰期货 · 研究",
    tag: "每日市场跟踪"
  },

  /* ============ 二、市场概览 ============ */
  overview: {
    /* 简短概括：指数变化 + 个股变化 + 重大事件 */
    text: "9月3日美股全线上涨：道指+1.18%、纳指+1.40%、标普+1.06%、费半+0.11%。美联储理事沃勒释放偏鸽信号，9月加息概率由约63%回落至50%，美债收益率下行，黄金、比特币齐涨。大型科技领涨：Meta+3.01%、微软+2.68%、英伟达+1.80%；博通因Q4指引略低于预期跌2.75%。英伟达宣布129亿美元收购Hugging Face。",
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
    { name: "NVIDIA",    code: "NVDA",  change: "-0.00%", driver: "宣布129.3亿美元收购Hugging Face，叠加沃勒偏鸽、利率预期回落，涨1.80%" },
    { name: "Microsoft", code: "MSFT",  change: "-0.00%", driver: "利率预期降温、风险偏好修复，大型科技普涨，涨2.68%" },
    { name: "Apple",     code: "AAPL",  change: "-0.00%", driver: "大型科技集体上涨，9/9秋季发布会临近，涨1.00%" },
    { name: "Amazon",    code: "AMZN",  change: "-0.00%", driver: "宏观偏鸽、美债收益率回落，涨1.54%" },
    { name: "Alphabet",  code: "GOOGL", change: "-0.00%", driver: "大型科技领涨，涨1.59%" },
    { name: "Meta",      code: "META",  change: "-0.00%", driver: "当日大型科技最强，涨3.01%，AI/广告主线获资金回流" },
    { name: "Broadcom",  code: "AVGO",  change: "-0.00%", driver: "Q3财报后Q4营收指引348亿略低于预期，且Q4毛利率指引73%低于去年同期，跌2.75%" },
    { name: "AMD",       code: "AMD",   change: "-0.00%", driver: "半导体板块表现分化、整体弱于大盘，微跌0.20%" },
    { name: "Micron",    code: "MU",    change: "-0.00%", driver: "存储板块盘整、涨跌互现，微涨0.22%" },
    { name: "Sandisk",   code: "SNDK",  change: "-0.00%", driver: "存储板块高位整固，微涨0.10%" }
  ],

  /* ============ 五、重要科技与政策新闻（一手来源） ============ */
  news: [
    {
      title: "美联储理事沃勒释放偏鸽信号：若通胀继续降温将支持9月维持利率不变，加息押注回落",
      originalTitle: "The Economic Outlook and Some Comments on My Policy Communication",
      source: "美国联邦储备委员会（federalreserve.gov 官方讲话稿）",
      time: "2026年09月03日",
      type: "官方",
      url: "https://www.federalreserve.gov/newsevents/speech/files/waller20260903a.pdf",
      link: "https://www.federalreserve.gov/newsevents/speech/files/waller20260903a.pdf",
      summary: "美联储理事沃勒9月3日在路透NEXT活动上表示，尽管通胀仍明显高于2%目标，但近期数据\"终于出现降温迹象\"；若未来两周数据延续这一趋势，他\"倾向于支持将联邦基金利率维持在当前水平\"；但若8月通胀数据显示改善只是短暂现象，9月15—16日议息会议加息\"可能是合适的\"。他特别指出三个月核心通胀率已从2月的4.76%降至7月的3.05%。讲话后CME FedWatch显示9月加息概率从约63%回落至约50%。",
      impact: {
        direction: "利好",
        companies: "全市场、高估值科技成长股",
        industry: "货币政策、利率",
        logic: "沃勒给出明确的条件式政策路径（通胀降温=按兵不动），加息预期降温压低贴现率，直接利好高久期成长股估值；9/4非农与9/11 CPI为关键验证"
      }
    },
    {
      title: "英伟达宣布129.3亿美元收购全球最大开源AI平台Hugging Face",
      originalTitle: "NVIDIA to Acquire Hugging Face",
      source: "英伟达官方博客（blogs.nvidia.com）",
      time: "2026年09月03日",
      type: "官方",
      url: "https://blogs.nvidia.com/blog/nvidia-to-acquire-hugging-face/",
      link: "https://blogs.nvidia.com/blog/nvidia-to-acquire-hugging-face/",
      summary: "黄仁勋宣布英伟达已同意以129.303亿美元收购Hugging Face（约119亿现金支付股东+最高10亿股权留任计划），9月2日签署最终协议，预计2027年上半年完成交割、需监管批准。Hugging Face拥有超1800万开发者、300万模型、50万数据集、100万应用、超20万企业用户，是\"AI界的GitHub\"。英伟达承诺平台保持开放、不强制使用英伟达算力、继续支持多云多加速器。交易推动英伟达从算力供应商向覆盖\"芯片—框架—模型—分发\"的全栈生态延伸，对冲大客户自研芯片风险。",
      impact: {
        direction: "利好",
        companies: "英伟达、开源AI生态",
        industry: "AI基础设施、开源模型生态",
        logic: "卡位全球AI开发者入口与模型分发层，强化生态护城河；开源权重策略对冲OpenAI/Anthropic等闭源阵营，英伟达当日涨1.80%"
      }
    },
    {
      title: "博通Q4指引略低于预期、股价跌2.75%：Q3营收295.9亿、AI半导体收入+221%，中长期AI收入指引翻倍",
      originalTitle: "Broadcom Inc. Announces Third Quarter Fiscal Year 2026 Financial Results and Quarterly Dividend",
      source: "美国证券交易委员会 SEC（Broadcom 8-K 财报）",
      time: "2026年09月02日",
      type: "官方",
      url: "https://www.sec.gov/Archives/edgar/data/1730168/000173016826000076/avgo-08022026x8kxex99.htm",
      link: "https://www.sec.gov/Archives/edgar/data/1730168/000173016826000076/avgo-08022026x8kxex99.htm",
      summary: "博通2026财年Q3（截至8/2）营收295.91亿美元、同比+86%，AI半导体收入167亿、同比+221%（占总营收约56%），Non-GAAP每股收益3.32美元；但Q4营收指引348亿美元略低于市场预期约350亿，且Q4毛利率指引73%低于去年同期78%。9月3日股价收跌2.75%。CEO陈福阳将2026财年AI收入指引上调至580亿，预计2027财年1150亿、2028财年2300亿。",
      impact: {
        direction: "中性",
        companies: "博通、定制ASIC产业链",
        industry: "AI基础设施、定制芯片",
        logic: "AI需求强劲但Q4指引略低、毛利率承压，叠加Marvell/联发科/OpenAI Jalapeño等定制芯片竞争加剧，\"高估值+高门槛\"令短期股价承压；中长期AI收入翻倍指引仍是算力链强支撑"
      }
    },
    {
      title: "Snowflake大涨16.6%带动软件板块：AI商业化加速验证，全年产品营收指引上调至60.7亿美元",
      originalTitle: "Snowflake results boost software stocks as AI demand drives growth",
      source: "路透社（Reuters，经 AOL 转载）",
      time: "2026年09月03日",
      type: "财经媒体",
      url: "https://www.aol.com/articles/much-snowflake-stock-expected-move-211218000.html",
      link: "https://www.aol.com/articles/much-snowflake-stock-expected-move-211218000.html",
      summary: "Snowflake 9月3日股价大涨16.6%（盘中最高+26%），因Q2产品营收14.9亿美元、同比+37%、连续三季加速，全年产品营收指引由58.4亿上调至60.7亿（+36%），CEO称AI贡献约占增长加速的一半。带动ServiceNow、Salesforce、Adobe等软件股上涨2.1%—6.5%，软件ETF涨3%。印证AI需求正从算力硬件向数据平台与应用层延伸、加速商业化。",
      impact: {
        direction: "利好",
        companies: "Snowflake、软件/AI应用层",
        industry: "AI商业化、企业数据云",
        logic: "企业级AI应用商业化的\"利润与增长并进\"为高估值软件股提供支撑，推动市场资金从硬件算力向软件/应用层扩散"
      }
    },
    {
      title: "美股三大指数收涨超1%：沃勒讲话缓和加息担忧，初请失业金低位、服务业加速但输入价格创新高",
      originalTitle: "Wall Street ends sharply higher as Waller remarks ease rate hike fears",
      source: "路透社（Reuters，经 MarketScreener 转载）",
      time: "2026年09月03日",
      type: "财经媒体",
      url: "https://uk.marketscreener.com/news/wall-street-ends-sharply-higher-as-waller-remarks-ease-rate-hike-fears-ce785bdadb8df225",
      link: "https://uk.marketscreener.com/news/wall-street-ends-sharply-higher-as-waller-remarks-ease-rate-hike-fears-ce785bdadb8df225",
      summary: "三大指数收涨超1%（道指+1.18%至53686、标普+1.06%至7747、纳指+1.40%至26584），纳指受\"七巨头\"AI巨头提振，三大指数均有望周线上涨。当日经济数据总体向好：初请失业金处于低位、服务业加速扩张，但服务业投入价格创2022年10月来新高、国际贸易逆差扩大24.4%。周五将公布8月非农（预期+5.6万人、失业率4.1%）。",
      impact: {
        direction: "中性",
        companies: "全市场、大型科技",
        industry: "就业、服务业、宏观数据",
        logic: "利率预期降温叠加经济\"软着陆\"数据，风险偏好修复；但服务业输入价格走高提示通胀黏性，9/4非农与9/11 CPI仍将决定9月加息路径"
      }
    },
    {
      title: "美债收益率回落、黄金站上4470美元、比特币破8万：加息预期降温驱动跨资产risk-on",
      originalTitle: "Bond yields fall, stocks rally as Fed's Waller comments curb rate hike bets",
      source: "路透社（Reuters，经 MarketScreener 转载）",
      time: "2026年09月03日",
      type: "财经媒体",
      url: "https://uk.marketscreener.com/news/bond-yields-fall-stocks-rally-as-fed-s-waller-comments-curb-rate-hike-bets-ce785bdada81f320",
      link: "https://uk.marketscreener.com/news/bond-yields-fall-stocks-rally-as-fed-s-waller-comments-curb-rate-hike-bets-ce785bdada81f320",
      summary: "沃勒讲话后全球风险资产普涨：10年期美债收益率跌3.8bp至4.756%（周三曾触及4.818%、2023年11月来新高），2年期跌至4.32%附近；现货黄金涨1.99%至4473.40美元/盎司，比特币站上8万美元，美元指数跌0.69%至98.91。油价涨跌互现（WTI+0.32%至91.30美元、布油-0.12%至95.52美元）。日元因日本央行加息预期大涨2%。",
      impact: {
        direction: "利好",
        companies: "全市场、成长股、加密概念",
        industry: "利率、美元、大宗商品",
        logic: "无风险利率下行+美元走弱共振，抬升成长股与风险资产估值中枢，流动性环境边际转松是当日普涨的底层驱动"
      }
    }
  ],

  /* ============ 六、当日最值得关注的 3 个交易逻辑 ============ */
  logics: [
    { title: "加息预期降温（沃勒偏鸽）是当日普涨的底层驱动，利率与流动性成为核心变量",
      text: "沃勒给出明确条件式路径——若通胀延续降温则支持9月按兵不动，推动9月加息概率从约63%回落至50%，10年期美债收益率自2023年11月来高位回落至4.76%，黄金+2%、比特币破8万、美元走弱，跨资产risk-on共振。无风险利率下行+美元走弱双重利好高久期成长股，Meta、微软领涨。这一逻辑的持续性取决于9/4非农与9/11 CPI能否确认通胀降温。" },
    { title: "英伟达从\"算力供应商\"走向\"AI生态帝国\"：129亿美元收购Hugging Face卡位开发者入口",
      text: "英伟达以129.3亿美元收购全球最大开源AI平台Hugging Face，掌握1800万开发者、300万模型的模型分发入口，并承诺平台保持开放、不强制使用英伟达算力。此举在芯片需求见顶担忧与客户自研芯片（Meta/OpenAI/微软）压力下，向\"芯片—框架—模型—分发\"全栈生态延伸，以开源权重策略对冲闭源阵营，构成AI产业格局重塑的重要一步。" },
    { title: "AI业绩\"分化\"：博通指引不及预期 vs Snowflake超预期，资金从硬件算力向软件商业化轮动",
      text: "博通Q3营收与AI半导体收入强劲，但Q4指引略低于预期、毛利率承压，股价跌2.75%，反映\"AI硬件高估值+高门槛\"；同期Snowflake大涨16.6%并带动软件板块，AI商业化加速。两者对照显示，市场正在从\"算力硬件capex\"逻辑向\"AI应用/软件商业化\"逻辑扩散，软件层AI货币化成为继半导体之后的新叙事支点。" }
  ],

  /* ============ 七、未来 1—3 个交易日关注事项（具体事件） ============ */
  watchlist: [
    { date: "09月04日", event: "美国劳工部8月非农就业报告（NFP）", impact: "沃勒明确将9月决策绑定就业与通胀数据，非农直接定调加息路径，影响成长股贴现率" },
    { date: "09月07日", event: "美国劳动节（Labor Day），美股休市", impact: "长假前资金趋于谨慎，短期波动或收敛" },
    { date: "09月09日", event: "苹果秋季发布会，预计发布iPhone 18及首款折叠屏iPhone", impact: "John Ternus接任CEO后首场产品大考，检验苹果AI与硬件创新能否支撑高估值" },
    { date: "09月11日", event: "美国8月CPI（消费者价格指数）数据", impact: "沃勒指出的\"未来两周通胀数据\"关键，直接决定9月是否加息，当前加息押注约50%" },
    { date: "09月15-16日", event: "美联储FOMC议息会议", impact: "市场定价9月加息25bp概率约50%，影响高估值成长股估值锚" },
    { date: "09月30日", event: "美光科技（Micron）Q4财报", impact: "存储涨价周期与HBM/DRAM供需的关键验证，影响存储板块（美光、闪迪）定价" }
  ],

  /* ============ 八、页脚免责声明 ============ */
  disclaimer:
    "本报告基于公开市场信息整理，仅供华泰期货内部研究参考，不构成任何投资建议。股价数据以交易所官方为准；新闻以原始来源（SEC / 白宫 / BIS / Treasury / BEA / Reuters / Bloomberg 等）为准。投资有风险，决策需谨慎。"
};
