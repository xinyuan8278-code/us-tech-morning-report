/**
 * ============================================================
 *  美股科技板块前一交易日行情日报 —— 数据文件（每日只需改这里）
 *  （2026-11-10 更新：对应美股交易日 2026-11-09）
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
    reportDate: "2026年11月10日",   // 报告发布日期（周二）
    tradeDate: "2026年11月09日",    // 对应美股交易日（前一交易日，周一）
    author: "华泰期货 · 研究",
    tag: "每日市场跟踪"
  },

  /* ============ 二、市场概览 ============ */
  overview: {
    /* 简短概括：指数变化 + 个股变化 + 重大事件 */
    text: "11月9日（周一）美股在经历上周「AI交易大撤退」血洗后强劲反弹，三大指数全线大涨：纳指+2.7%至25,253.14、标普500+2.4%至7,549.94、道指+2.2%（+1104点）至52,389.75，VIX恐慌指数大跌22.3%至19.92。芯片股领涨：AMD+13.26%、Coherent+16.8%、Monolithic Power+16.6%、Teradyne+12.7%；但英伟达逆势下跌4.27%，因CEO黄仁勋承认婚外情丑闻、被指涉中国情报活动，英伟达董事会启动独立调查。油价大跌（WTI-4%、布伦特-5%）提振风险偏好。反弹核心驱动：①上周超跌后的逢低买入与技术性修复；②油价回落缓解通胀压力；③资金在周二10月CPI数据公布前回补仓位。但美联储官员Goolsbee警告「AI数据中心建设正演变为老式需求过热」，12月加息概率仍高于80%，构成反弹空间制约。",
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
    { name: "AMD", code: "AMD", change: "-0.00%", type: "超涨", reason: "11月9日单日大涨13.26%，领涨大型芯片股；上周17.26%暴跌后连续第二日强劲反弹，回补11月3日Q3财报（营收+45%、数据中心+97%）超预期涨幅，AI交易超跌反弹下高Beta芯片股领涨" },
    { name: "NVIDIA", code: "NVDA", change: "-0.00%", type: "超跌", reason: "11月9日逆势下跌4.27%，在大盘与芯片股全线反弹中显著跑输；CEO黄仁勋承认婚外情丑闻、被指涉中国情报活动，英伟达董事会11月8日启动独立内部调查，治理与国家安全风险压制股价" }
  ],

  /* ============ 四、重点公司行情表 ============ */
  /* 超涨/超跌个股放最上方；无新闻的公司驱动因素简要说明即可 */
  stocks: [
    { name: "NVIDIA",    code: "NVDA",  change: "-0.00%", driver: "逆势下跌4.27%，在大盘与芯片股全线反弹中显著跑输；CEO黄仁勋承认婚外情丑闻、被指涉中国国安部情报活动，董事会11月8日启动独立调查，治理与国家安全风险压制股价" },
    { name: "Microsoft", code: "MSFT",  change: "-0.00%", driver: "随大盘反弹，大型科技股全线回升；此前微软缩减neocloud合作、优先自建数据中心的AI资本开支结构重估仍是关注焦点" },
    { name: "Apple",     code: "AAPL",  change: "-0.00%", driver: "随大盘反弹，七巨头中相对稳健；资金面改善，投资者在超跌后回补核心权重仓位" },
    { name: "Amazon",    code: "AMZN",  change: "-0.00%", driver: "随大盘反弹，超大规模云厂商情绪修复；AWS资本开支与数据中心监管不确定性仍是中期关注焦点" },
    { name: "Alphabet",  code: "GOOGL", change: "-0.00%", driver: "随大盘反弹，谷歌AI基础设施投入（如怀俄明170亿美元数据中心）展现韧性，通信服务板块领涨" },
    { name: "Meta",      code: "META",  change: "-0.00%", driver: "随大盘反弹，前期重挫后企稳；同日宣布暂停更新出版商爬取条款（原定11/20生效），回应监管与版权争议" },
    { name: "Broadcom",  code: "AVGO",  change: "-0.00%", driver: "随半导体板块反弹，AI定制芯片（ASIC）叙事修复；超跌后资金回补，但英伟达治理风波或引发AI算力供应链风险重估" },
    { name: "AMD",       code: "AMD",   change: "-0.00%", driver: "大涨13.26%，领涨大型芯片股；上周暴跌后连续第二日反弹，回补11月3日Q3财报（数据中心+97%）超预期涨幅，并承接部分从英伟达流出的资金" },
    { name: "Micron",    code: "MU",    change: "-0.00%", driver: "随存储与AI硬件板块反弹；HBM/DRAM景气逻辑未变，SIA数据印证存储需求韧性，超跌资金回补" },
    { name: "SanDisk",   code: "SNDK",  change: "-0.00%", driver: "随存储板块超跌反弹；但NAND「超级周期」交易情绪仍偏谨慎，周线波动率与资金拥挤度仍高" }
  ],

  /* ============ 五、重要科技与政策新闻（一手来源） ============ */
  news: [
    {
      title: "英伟达CEO黄仁勋承认婚外情丑闻、被指涉中国情报活动，董事会启动独立内部调查，股价逆势大跌4%",
      originalTitle: "Statement from NVIDIA Board of Directors",
      source: "NVIDIA投资者关系（官方一手）",
      time: "2026年11月8日",
      type: "官方",
      url: "https://investor.nvidia.com/news/press-release-details/2026/Statement-from-NVIDIA-Board-of-Directors/",
      link: "https://investor.nvidia.com/news/press-release-details/2026/Statement-from-NVIDIA-Board-of-Directors/",
      summary: "据《纽约时报》11月8日报道，英伟达创始人兼CEO黄仁勋周日承认与一名女子有婚外情，美国情报官员指认该女子为中国国家安全部间谍。英伟达董事会随即于11月8日发布声明，宣布启动由独立董事委员会（在外部独立律师协助下）主导的独立调查，理由是「近期报道显示黄仁勋已成为外国情报活动的目标」。董事会强调「美国国家与经济安全至关重要」，但表示「无理由相信国家安全或英伟达机密已遭泄露」，并称黄仁勋「全力支持并承诺配合审查」。受此影响，英伟达股价11月9日逆势下跌4.27%，在大盘与芯片股全线反弹中显著跑输。",
      impact: {
        direction: "利空（公司治理与国家安全风险，短期压制英伟达）",
        companies: "英伟达、AMD、博通及AI算力供应链",
        industry: "半导体、AI算力、GPU",
        logic: "英伟达CEO个人丑闻叠加「中国情报活动」指控，构成治理与国家安全双重风险，短期压制英伟达股价并可能引发AI算力供应链风险重估；部分资金或转向AMD等竞争对手"
      }
    },
    {
      title: "美股周一强劲反弹：纳指+2.7%、标普+2.4%、道指+2.2%，芯片股领涨、VIX大跌22%",
      originalTitle: "Stock market today: Live updates",
      source: "CNBC（英文财经媒体一手）",
      time: "2026年11月9日",
      type: "财经媒体",
      url: "https://www.cnbc.com/2026/11/09/stock-market-today-live-updates.html",
      link: "https://www.cnbc.com/2026/11/09/stock-market-today-live-updates.html",
      summary: "11月9日美股在上周「AI交易大撤退」的阴霾后强劲反弹。纳指收涨2.7%至25,253.14点，标普500涨2.4%至7,549.94点，道指涨2.2%（+1104点）至52,389.75点，VIX恐慌指数大跌22.3%至19.92。反弹主因：①上周超跌后的逢低买入与技术性修复；②油价大跌（WTI结算跌逾4%、布伦特跌逾5%）缓解通胀压力；③投资者在周二10月CPI数据公布前回补仓位。芯片股领涨：Coherent涨16.8%、Monolithic Power涨16.6%、AMD涨13.3%、Teradyne涨12.7%；但英伟达因黄仁勋丑闻逆势下跌4%。",
      impact: {
        direction: "利好（超跌反弹，风险偏好修复）",
        companies: "AMD、Coherent、Monolithic Power及半导体产业链",
        industry: "半导体、AI硬件、科技成长股",
        logic: "油价回落与超跌修复共同驱动反弹，芯片股领涨显示AI硬件仍是反弹主线；但英伟达缺席反弹、12月加息概率仍高，反弹持续性取决于周二CPI数据"
      }
    },
    {
      title: "10月CPI周二公布、预期headline+0.3%/core+0.2%；美联储Goolsbee警告「AI数据中心建设正演变为老式需求过热」",
      originalTitle: "A key report for where inflation stood in October comes out Tuesday",
      source: "CNBC（英文财经媒体一手）",
      time: "2026年11月9日",
      type: "财经媒体",
      url: "https://www.cnbc.com/2026/11/09/october-cpi-report-2026-inflation.html",
      link: "https://www.cnbc.com/2026/11/09/october-cpi-report-2026-inflation.html",
      summary: "美国劳工统计局将于11月10日公布10月CPI，道琼斯调查预期整体CPI环比+0.3%、核心CPI环比+0.2%，较9月（整体+0.6%、核心+0.3%）明显放缓，主因汽油价格回落（EIA称10月油价跌逾4%）与住房价格回吐。因2025年政府停摆导致数据缺失，本次无同比口径。芝加哥联储主席Goolsbee周一表示「我们必须正视成本端与通胀端的失败」，并特别指出「AI数据中心建设在我看来正越来越像老式需求过热」，其带来的建筑、电力与设备需求可能加剧通胀。市场对12月加息概率仍高于80%（CME FedWatch）。",
      impact: {
        direction: "中性偏空（利率预期仍是反弹制约）",
        companies: "高估值成长科技股、AI数据中心/电力产业链",
        industry: "宏观经济、利率敏感板块、AI基础设施",
        logic: "CPI虽预期放缓，但Goolsbee将AI数据中心建设与「需求过热」挂钩，意味着AI资本开支高企正成为通胀的新源头，强化「更高更久」利率预期，制约科技股反弹空间"
      }
    },
    {
      title: "油价周一大跌（WTI-4%、布伦特-5%），缓解通胀压力并提振风险资产",
      originalTitle: "Oil prices fall on Monday, lending market support",
      source: "CNBC（英文财经媒体一手）",
      time: "2026年11月9日",
      type: "财经媒体",
      url: "https://www.cnbc.com/2026/11/09/stock-market-today-live-updates.html",
      link: "https://www.cnbc.com/2026/11/09/stock-market-today-live-updates.html",
      summary: "国际油价11月9日大幅回落，美国西得克萨斯中质原油（WTI）期货结算跌逾4%，布伦特原油期货跌逾5%。油价下跌降低了市场对能源成本推升通胀的担忧，为美股反弹提供了重要支撑。这与美联储官员近期对「关税与伊朗战争推升的通胀」的持续担忧形成对冲——能源价格回落有望部分缓解10月及后续CPI的压力，是周一市场风险偏好修复的关键宏观变量。",
      impact: {
        direction: "利好（通胀压力缓解，利多成长股）",
        companies: "整体科技成长股、能源成本敏感企业",
        industry: "宏观经济、能源、科技成长股",
        logic: "油价回落直接缓解通胀预期，与CPI放缓预期共振，短期改善成长股贴现率环境，支撑科技股反弹"
      }
    },
    {
      title: "微软缩减neocloud合作、优先自建数据中心，AI资本开支结构重估持续发酵",
      originalTitle: "Microsoft plans to use fewer neoclouds as AI buildout shows signs of strain",
      source: "CNBC（英文财经媒体一手）",
      time: "2026年11月6日",
      type: "财经媒体",
      url: "https://www.cnbc.com/2026/11/06/microsoft-moves-to-consolidate-its-relationships-with-neoclouds-in-ai.html",
      link: "https://www.cnbc.com/2026/11/06/microsoft-moves-to-consolidate-its-relationships-with-neoclouds-in-ai.html",
      summary: "CNBC援引知情人士报道，微软正缩减其「neocloud」（专用AI算力云）合作伙伴名单，聚焦少数关键供应商并优先建设自有数据中心，已决定不续约甲骨文的一项算力协议。CFO Amy Hood在10月财报电话会表示部分GPU云合同延迟至2027年上半年、拖累Azure增长。微软最新季度资本开支及融资租赁达452亿美元。分析认为，借贷成本上升、neocloud债务高企及AI建设放缓担忧正压缩该细分市场，CoreWeave、Nebius、IREN股价过去一个月已跌约一半。",
      impact: {
        direction: "中性偏空（neocloud/第三方算力，利多微软自建链）",
        companies: "微软、甲骨文、CoreWeave、Nebius、IREN及neocloud产业链",
        industry: "AI云计算、数据中心、GPU算力租赁",
        logic: "微软「算力回流自建」释放AI资本开支从「量」向「质/自持」切换的信号，利好微软自身与自建设备链，利空高度依赖单一客户的neocloud高负债企业"
      }
    }
  ],

  /* ============ 六、当日最值得关注的 3 个交易逻辑 ============ */
  logics: [
    { title: "超跌反弹 vs 结构性风险：大盘普涨、芯片领涨，但英伟达缺席暴露AI主线的新裂痕",
      text: "周一纳指+2.7%、标普+2.4%、道指+2.2%的普涨是上周「AI交易大撤退」后的超跌修复，油价大跌缓解通胀是核心宏观催化。但反弹内部出现分化：AMD+13.26%、Coherent+16.8%、Monolithic Power+16.6%等芯片股领涨，而英伟达因黄仁勋婚外情丑闻+「中国情报活动」指控逆势下跌4.27%。英伟达作为AI算力的「旗手」缺席反弹，说明市场正重新评估AI交易的定价锚——治理风险与供应链集中度风险首次成为显性变量，部分资金转向AMD等竞争对手与二线芯片股。" },
    { title: "AI资本开支从「增长叙事」转向「通胀叙事」：Goolsbee称数据中心建设「正演变为需求过热」",
      text: "芝加哥联储主席Goolsbee周一将AI数据中心建设与「老式需求过热」挂钩，指出其带来的建筑、电力与设备需求正成为通胀的新源头。这一表态标志着政策层对AI的叙事从「生产率红利」转向「通胀风险」，叠加微软缩减neocloud、OpenAI/Anthropic估值下修，AI资本开支的「量」与「质」同时承压。若10月CPI（周二公布）印证服务价格粘性、叠加AI基建需求过热，12月加息概率（现>80%）将进一步升温，直接压制高估值成长股与AI基建链。" },
    { title: "利率与通胀是反弹的天花板：周二CPI是决定短期方向的关键变量",
      text: "油价回落与CPI预期放缓（headline+0.3%/core+0.2%）是周一反弹的宏观基础，但12月加息概率仍高于80%，「更高更久」的利率预期未改变。BofA经济学家称，若核心CPI未出现「明确偏软」的0.1%环比读数，10月CPI将是12月8-9日FOMC会议前最后一份通胀数据，大概率「锁定」另一次25bp加息。因此，周二CPI既是验证油价回落能否传导至通胀的关键，也是决定本轮超跌反弹能否延续的分水岭——数据偏软则反弹延续，数据偏强则反弹夭折。" }
  ],

  /* ============ 七、未来 1—3 个交易日关注事项（具体事件） ============ */
  watchlist: [
    { date: "11月10日（周二）", event: "美国10月CPI数据（BLS发布，预期整体+0.3%/核心+0.2%，无同比口径）", impact: "12月加息决策前的最后一份通胀数据，直接决定本轮超跌反弹能否延续；数据偏软则反弹延续、偏强则承压" },
    { date: "11月10日（周二）当周", event: "Anthropic IPO 路演（原定11月9日当周启动，估值预期已下调至1.2万亿—1.3万亿美元）", impact: "若路演延迟或定价大幅折价，将进一步冲击AI资产情绪；S-1中留空的10月营收数据是关键观察点" },
    { date: "11月10日—13日", event: "CoreWeave、Nebius 季度财报（微软缩减neocloud合作后市场高度关注）", impact: "neocloud财报与指引将检验「微软算力回流」对第三方算力企业的实际冲击，影响AI数据中心产业链" },
    { date: "持续关注", event: "英伟达独立调查进展（黄仁勋「中国情报活动」指控）", impact: "调查若涉及国家安全或机密泄露的进一步披露，将持续压制英伟达并波及AI算力供应链风险偏好" },
    { date: "11月中下旬", event: "英伟达财报（叠加治理风波，市场关注度更高）", impact: "英伟达指引是判断AI资本开支真实需求的核心，叠加黄仁勋丑闻后的治理担忧，财报前的定价波动或加剧" }
  ],

  /* ============ 八、页脚免责声明 ============ */
  disclaimer:
    "本报告基于公开市场信息整理，仅供华泰期货内部研究参考，不构成任何投资建议。股价数据以交易所官方为准；新闻以原始来源（SEC / 白宫 / BIS / Treasury / BEA / BLS / Federal Reserve / Reuters 等）为准。投资有风险，决策需谨慎。"
};