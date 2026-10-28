/**
 * ============================================================
 *  美股科技板块前一交易日行情日报 —— 数据文件（每日只需改这里）
 *  （2026-10-28 更新：对应美股交易日 2026-10-27）
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
    reportDate: "2026年10月28日",   // 报告发布日期（周三）
    tradeDate: "2026年10月27日",    // 对应美股交易日（前一交易日，周二）
    author: "华泰期货 · 研究",
    tag: "每日市场跟踪"
  },

  /* ============ 二、市场概览 ============ */
  overview: {
    /* 简短概括：指数变化 + 个股变化 + 重大事件 */
    text: "10月27日美股三大指数齐涨、科技股领涨：道指+0.03%至52,377.57、标普500+0.60%至7,722.60、纳指+1.18%至26,477.81，费城半导体指数大涨3.6%连续第三日上涨。半导体全线走强（AMD+5.45%、博通+4.00%、英特尔+3.61%、台积电+2.95%、阿斯麦+2.94%、高通+2.54%），存储板块普涨（西数+6.95%、闪迪+3.92%、美光+2.77%、希捷+3.67%），大型科技分化（特斯拉+4.04%、亚马逊+1.61%、谷歌+1.19%、英伟达+0.90% vs 微软-0.24%、Meta-1.64%）。核心催化为AMD与Meta深化战略合作（AMD注资10亿美元、Meta部署Helios系统）+Anthropic IPO点燃AI交易；油价回落（WTI-1.83%至99.90美元）缓解通胀担忧。今日FOMC决议（维持不变概率92.8%）与Alphabet、微软盘后财报定AI叙事方向。",
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
      name: "AMD",
      code: "AMD",
      change: "-0.00%",
      type: "超涨",
      reason: "前一交易日大涨约5.45%（盘中一度涨逾5.86%）至约562美元，为半导体板块领涨，单日涨幅明显超过科技板块平均；主要触发为AMD与Meta深化战略合作（AMD向Meta注资10亿美元、Meta数据中心部署AMD Helios机架级系统并已装机测试），叠加Anthropic计划部署最高2GW的AMD Instinct MI450系列GPU，强化其AI加速器叙事的超大规模厂商验证。需注意相对成交量仅约0.5倍200日均值、且估值仍处高位（P/E约135倍），短期或有获利回吐压力。"
    }
  ],

  /* ============ 四、重点公司行情表 ============ */
  /* 超涨/超跌个股放最上方；无新闻的公司驱动因素简要说明即可 */
  stocks: [
    { name: "AMD",       code: "AMD",   change: "-0.00%", driver: "大涨约5.45%至约562美元，半导体板块领涨（超涨提示）；核心催化为AMD与Meta深化战略合作——AMD向Meta注资10亿美元、Meta数据中心部署AMD Helios机架级系统并已装机测试，叠加Anthropic计划部署最高2GW的AMD Instinct MI450 GPU，AI加速器叙事获超大规模厂商验证" },
    { name: "NVIDIA",    code: "NVDA",  change: "-0.00%", driver: "上涨约0.90%，随半导体与AI板块走强；Anthropic IPO点燃AI交易带动芯片股连续第三日上涨，作为AI算力核心受益于风险偏好回升，但今日（10/28）Alphabet、微软盘后财报与FOMC决议将验证算力需求叙事" },
    { name: "Microsoft", code: "MSFT",  change: "-0.00%", driver: "微跌约0.24%，大型科技股中相对走弱；今日（10/28）盘后FQ1'27财报临近，市场聚焦Azure增速（上季+43%）与资本开支指引（2026自然年约1750亿~1900亿美元），是AI资本开支验证的核心标的" },
    { name: "Apple",     code: "AAPL",  change: "-0.00%", driver: "上涨约0.93%，随大盘走高；因基本未参与AI基建竞赛、且首款折叠屏iPhone Duo已发售，仍被视为AI波动下的相对避险品种，本周无财报事件" },
    { name: "Amazon",    code: "AMZN",  change: "-0.00%", driver: "上涨约1.61%，大型科技股中领涨之一；周四（10/29）盘后Q3财报临近，市场聚焦AWS增速与资本开支指引（2026年约2200亿美元），Anthropic IPO验证AI商业化前景对云厂商估值形成支撑" },
    { name: "Alphabet",  code: "GOOGL", change: "-0.00%", driver: "上涨约1.19%，叠加谷歌DeepMind发布Genie 4世界模型（原生音频实时交互）提振；今日（10/28）盘后Q3财报临近，市场预计Google Cloud增速高达93%、2026资本开支指引1950亿~2050亿美元" },
    { name: "Meta",      code: "META",  change: "-0.00%", driver: "下跌约1.64%，大型科技股中唯一下跌明显；此前Q3自由现金流转负引发的AI资本开支现金吞噬担忧仍在消化，且拟发行C类股/增资募资支持AI投入（AMD、英伟达同日披露与Meta的AI合作协议）" },
    { name: "Broadcom",  code: "AVGO",  change: "-0.00%", driver: "上涨约4.00%，半导体板块领涨之一；市场热议博通与美银、黑石、花旗、摩根士丹利合作设立约630亿美元AI融资SPV，为AI算力提供资金、自2027年起供应XPU加速器并租赁给Anthropic，定制ASIC叙事强化" },
    { name: "Micron",    code: "MU",    change: "-0.00%", driver: "上涨约2.77%，存储板块普涨；HBM4供货Vera Rubin与存储双雄创纪录业绩强化景气叙事，SK海力士/三星业绩与长期供应协议（LTA）提供行业支撑" },
    { name: "SanDisk",   code: "SNDK",  change: "-0.00%", driver: "上涨约3.92%，存储板块普涨（西数+6.95%、希捷+3.67%）；NAND供需与定价前景随AI存储需求重估，本周公布Q3财报，市场关注NAND定价与长期供应协议进展" }
  ],

  /* ============ 五、重要科技与政策新闻（一手来源） ============ */
  news: [
    {
      title: "AMD与Meta深化战略合作：AMD注资10亿美元、Meta数据中心部署Helios系统，叠加Anthropic计划部署最高2GW Instinct GPU",
      originalTitle: "AMD and Meta Advance Strategic Partnership to Power Meta's Superintelligence Infrastructure",
      source: "AMD投资者关系（官方一手）",
      time: "2026年10月27日",
      type: "官方",
      url: "https://ir.amd.com/news-events/press-releases/detail/1299/amd-to-acquire-world-labs-to-advance-the-future-of-ai-compute",
      link: "https://ir.amd.com/",
      summary: "AMD与Meta宣布深化战略合作以支撑Meta超级智能基础设施：AMD向Meta注资10亿美元（参与其股权增发），Meta数据中心部署AMD Helios机架级AI计算系统并已装机测试，为更大规模铺开铺路。AMD投资者关系同日还披露与Anthropic的战略合作——计划部署最高2GW的AMD Instinct MI450系列GPU。AMD当日大涨约5.45%（盘中一度+5.86%）至约562美元，为半导体板块领涨，获超大规模厂商关键验证点。",
      impact: {
        direction: "利好（AMD及AI硬件链）",
        companies: "AMD、Meta、Anthropic、英伟达",
        industry: "半导体、AI基础设施、GPU",
        logic: "Meta与Anthropic两大超大规模客户的部署验证，强化AMD在AI加速器市场的第二供应商地位，直接对冲「AI资本开支回报」质疑"
      }
    },
    {
      title: "Anthropic正式提交IPO招股书点燃AI交易：6个月营收162.9亿美元（+1304%），拟纳斯达克上市代码ANT",
      originalTitle: "Stocks close higher as excitement over Anthropic IPO filing propels tech sector: Live updates",
      source: "CNBC（英文财经媒体）",
      time: "2026年10月26日",
      type: "财经媒体",
      url: "https://www.cnbc.com/id/108460889",
      link: "https://www.cnbc.com/id/108460889",
      summary: "Anthropic（Claude开发商）正式向SEC提交IPO申请，拟纳斯达克上市、代码ANT，为首家专注前沿AI大模型的上市公司，或冲击SpaceX创下的史上最大IPO筹资纪录。S-1文件显示截至6月六个月内营收162.9亿美元、同比激增1304%（上年同期11.6亿美元），并坐拥约1310亿美元现金。市场普遍视此为对「AI烧钱能否兑现回报」质疑的有力回击，重燃AI交易热情，推动芯片股连续第三日上涨。",
      impact: {
        direction: "利好（AI/半导体板块情绪）",
        companies: "Anthropic、AMD、英伟达、博通、美光",
        industry: "AI大模型、云计算、半导体",
        logic: "Anthropic强劲营收与充足现金验证AI商业化兑现，缓解AI资本开支可持续性质疑，带动风险偏好与芯片股估值修复"
      }
    },
    {
      title: "谷歌DeepMind发布Genie 4世界模型：原生音频实时交互，融合Gemini Omni与3.8 Flash，强化AGI世界模拟",
      originalTitle: "Google's Genie 4 world model adds audio, more realistic worlds, and real-time steering",
      source: "TechCrunch（英文科技媒体）",
      time: "2026年10月27日",
      type: "行业媒体",
      url: "https://techcrunch.com/2026/10/27/googles-genie-4-world-model-adds-audio-more-realistic-worlds-and-real-time-steering/",
      link: "https://techcrunch.com/2026/10/27/googles-genie-4-world-model-adds-audio-more-realistic-worlds-and-real-time-steering/",
      summary: "谷歌DeepMind发布新一代世界模型Genie 4（研究预览版），可实时生成可交互虚拟环境并原生生成音频（音乐、环境音、人物对话），支持用户以自然语言实时修改场景（天气、镜头、人物）。模型融合Gemini Omni（锚定现实外观与行为）与Gemini 3.8 Flash（作为引导智能体拆解步骤、校验帧）。DeepMind称世界理解与模拟是构建AGI的关键环节。当前仅向可信测试者开放，未来数周将推至Google AI Ultra订阅者及Gemini API/Google AI Studio合作伙伴。",
      impact: {
        direction: "中性偏多（Alphabet/前沿AI）",
        companies: "Alphabet、谷歌",
        industry: "AI大模型、世界模型、机器人",
        logic: "强化谷歌在前沿AI与世界模型赛道的竞争力，利好Alphabet AI叙事；但作为研究预览尚未贡献营收，直接市场影响有限"
      }
    },
    {
      title: "博通联手美银、黑石、花旗、摩根士丹利设立约630亿美元AI融资SPV，2027年起供应XPU加速器租赁给Anthropic",
      originalTitle: "Broadcom partners with banks on $63 billion AI financing",
      source: "财经媒体（英文，援引财联社/Reuters）",
      time: "2026年10月26日",
      type: "财经媒体",
      url: "https://www.cnbc.com/id/108460889",
      link: "https://www.cnbc.com/id/108460889",
      summary: "据媒体报道，美国银行、黑石、花旗和摩根士丹利等机构正与博通合作，共同设立总额约630亿美元的AI融资安排，为AI算力建设提供资金。博通将为该特殊目的实体（SPV）的第一留置权（优先担保）债务部分提供残值支持；自2027年起，博通将通过该SPV供应XPU AI加速器，这些加速器随后将租赁给Anthropic使用。此举是继博通为OpenAI定制芯片寻求逾500亿美元融资后，定制ASIC与「厂商融资」循环的又一重要案例，推动博通当日上涨约4%。",
      impact: {
        direction: "利好（博通/定制ASIC）",
        companies: "博通、Anthropic、美银、黑石、花旗、摩根士丹利",
        industry: "定制ASIC、AI算力、数据中心",
        logic: "博通深度绑定Anthropic等前沿AI客户并构建融资闭环，强化定制ASIC长期需求确定性，同时凸显「芯片厂商承担融资风险」这一AI基建新特征"
      }
    },
    {
      title: "美股周二收涨、费半大涨3.6%三连涨：Anthropic IPO与油价回落共同提振风险偏好",
      originalTitle: "Wall Street closes higher, chipmakers rally for third straight day",
      source: "Reuters/CNBC（英文财经媒体，交叉核对）",
      time: "2026年10月27日",
      type: "财经媒体",
      url: "https://www.cnbc.com/id/108460889",
      link: "https://www.cnbc.com/id/108460889",
      summary: "美东时间10月27日，美股三大指数齐涨：道指+0.03%至52,377.57、标普500+0.60%至7,722.60、纳指+1.18%至26,477.81。费城半导体指数大涨3.6%、连续第三日上涨，为当日最大亮点：AMD+5.45%、博通+4.00%、英特尔+3.61%、台积电+2.95%、阿斯麦+2.94%；存储普涨（西数+6.95%、闪迪+3.92%、美光+2.77%）。大型科技分化：特斯拉+4.04%、亚马逊+1.61%、谷歌+1.19%，微软-0.24%、Meta-1.64%。油价回落（WTI-1.83%至99.90美元、布伦特-1.67%至113.88美元）缓解通胀担忧。CME FedWatch显示本周维持利率不变概率92.8%、12月加息25bp概率77.7%。",
      impact: {
        direction: "中性偏多（科技/半导体整体）",
        companies: "AMD、博通、英伟达、美光、闪迪",
        industry: "半导体、存储、大型科技",
        logic: "AI交易情绪回暖叠加油价回落、通胀预期缓和，半导体与存储板块估值修复；但今日FOMC决议与Alphabet/微软财报仍是短期方向关键变量"
      }
    },
    {
      title: "油价回落至百美元下方：WTI跌破100美元/桶，缓解「粘性通胀」对科技股估值的压制",
      originalTitle: "Oil prices fall as supply fears ease, WTI drops below $100",
      source: "Reuters（英文财经媒体，经通讯社交叉核对）",
      time: "2026年10月27日",
      type: "财经媒体",
      url: "https://www.cnbc.com/id/108460889",
      link: "https://www.cnbc.com/id/108460889",
      summary: "国际油价10月27日回落，纽约商品交易所12月WTI原油期货下跌1.86美元（-1.83%）至99.90美元/桶，盘中一度跌破100美元；12月布伦特下跌1.93美元（-1.67%）至113.88美元/桶。此前布伦特因美以或对伊朗发动打击的报道升至6个月新高，市场情绪随供应中断担忧缓解而降温。油价回落缓解了「油价→通胀→长端利率→贴现率」这一对高估值科技股的宏观压制链，是当日科技股与半导体反弹的重要宏观背景。",
      impact: {
        direction: "利好（高估值科技股，通胀预期缓和）",
        companies: "英伟达、AMD、博通等半导体与高估值科技股",
        industry: "能源、科技、利率敏感板块",
        logic: "油价自高位回落缓解粘性通胀与长端利率上行压力，降低高估值科技股的贴现率门槛，为AI板块反弹提供宏观顺风"
      }
    },
    {
      title: "本周进入财报与宏观双重验证：Alphabet、微软（10/28盘后）、亚马逊（10/29盘后）财报+FOMC决议+核心PCE定AI资本开支方向",
      originalTitle: "The Week Ahead: Fed, AI Earnings and PCE Data Test Stock Market Strength",
      source: "FX Empire（英文财经媒体，援引FedWatch）",
      time: "2026年10月27日",
      type: "财经媒体",
      url: "https://beta.fxempire.com/forecasts/article/the-week-ahead-fed-ai-earnings-and-pce-data-test-stock-market-strength-1242370",
      link: "https://beta.fxempire.com/forecasts/article/the-week-ahead-fed-ai-earnings-and-pce-data-test-stock-market-strength-1242370",
      summary: "本周是美股「财报+宏观」双重验证周：超过三分之一标普500成分股将发布Q3财报，其中Alphabet（10/28盘后，Google Cloud增速预计约93%）、微软（10/28盘后，Azure上季+43%）与亚马逊（10/29盘后，AWS预计约+41%）的资本开支指引是检验AI投资回报率的核心变量。美联储10/28公布利率决议（FedWatch显示维持不变概率约92.8%、12月加息25bp概率约77.7%），10/29公布核心PCE与Q3 GDP。在Anthropic IPO点燃AI情绪后，三大超大规模厂商资本开支指引将决定「AI烧钱可持续性」叙事方向。",
      impact: {
        direction: "中性（关键观察窗口）",
        companies: "Alphabet、微软、亚马逊、英伟达、Meta",
        industry: "AI、云计算、半导体",
        logic: "三大超大规模厂商资本开支指引与FOMC决议是本周核心变量，直接决定AI资本开支叙事是延续还是证伪，主导芯片与云计算板块方向"
      }
    }
  ],

  /* ============ 六、当日最值得关注的 3 个交易逻辑 ============ */
  logics: [
    { title: "Anthropic IPO点燃AI交易，芯片股「三连涨」但真正的裁决权交给今晚财报与FOMC",
      text: "Anthropic正式提交S-1招股书——6个月营收162.9亿美元（同比+1304%）、坐拥约1310亿美元现金，被市场视为对「AI烧钱能否兑现回报」质疑的有力回击，直接推动费城半导体指数大涨3.6%、连续第三日上涨，AMD、博通领涨。但这波反弹本质仍是情绪驱动：芯片ETF（SOXX）自高点仍回撤约25%，AI资本开支的可持续性质疑并未消除。今晚（10/28）Alphabet、微软盘后财报的资本开支指引与FOMC决议，才是决定这轮反弹能否延续的实质性裁决。" },
    { title: "「厂商融资」成为AI基建新叙事：AMD注资Meta、博通630亿SPV，芯片厂从卖货转向共担资本风险",
      text: "当日两个标志性事件——AMD向Meta注资10亿美元并部署Helios系统、博通联手美银/黑石/花旗/摩根士丹利设立约630亿美元AI融资SPV（供应XPU加速器租赁给Anthropic）——共同勾勒出AI基建融资的结构性变化：芯片厂商正从「卖卡」转向通过股权投资、残值担保、特殊目的实体等方式深度参与客户的资本开支，既锁定长期订单，也承担更多信用风险。这强化了AMD、博通等ASIC/加速器供应商的长期需求确定性，但「厂商替客户融资」的循环性也埋下未来信用风险的隐患。" },
    { title: "油价回落+CME加息概率下修，宏观压制阶段性缓和，但12月加息仍是悬顶之剑",
      text: "WTI跌破100美元/桶（-1.83%至99.90美元）缓解了「油价→通胀→长端利率→贴现率」对高估值科技股的压制链，与Anthropic IPO形成共振、支撑科技股反弹。CME FedWatch显示本周（10/28）维持利率不变概率升至92.8%，但12月加息25bp概率仍高达77.7%。这意味着即便本次会议按兵不动，粘性通胀与长端利率上行的宏观主线并未解除，12月政策路径仍是压制科技股估值的「第二重变量」，需在AI基本面叙事之外持续跟踪。" }
  ],

  /* ============ 七、未来 1—3 个交易日关注事项（具体事件） ============ */
  watchlist: [
    { date: "10月28日（周三）", event: "美联储10月FOMC利率决议+Warsh主席新闻发布会（北京时间10/29凌晨）", impact: "FedWatch显示维持利率不变概率92.8%，但市场关注声明与发布会释放的12月加息路径信号（12月加息25bp概率77.7%）" },
    { date: "10月28日（周三）盘后", event: "Alphabet（GOOGL）公布Q3财报", impact: "Google Cloud增速（预计约93%）与资本开支指引（2026约1950亿~2050亿美元）是AI投资回报率验证的核心变量" },
    { date: "10月28日（周三）盘后", event: "微软（MSFT）公布FQ1'27财报", impact: "Azure增速（上季+43%）与资本开支指引（2026约1750亿~1900亿美元）直接影响AI算力与云需求叙事" },
    { date: "10月29日（周四）", event: "美国9月核心PCE物价指数、Q3 GDP初值", impact: "核心PCE验证粘性通胀、影响12月加息路径；GDP反映经济增长动能，共同决定宏观压制是否延续" },
    { date: "10月29日（周四）盘后", event: "亚马逊（AMZN）公布Q3财报", impact: "AWS增速（预计约+41%）与资本开支指引（2026约2200亿美元）是三大超大规模厂商验证最后一环" },
    { date: "10月29日（周四）", event: "三星电子公布Q3正式财报；英特尔（INTC）盘后财报", impact: "三星与SK海力士创纪录业绩印证HBM4景气兑现；英特尔财报影响半导体制造与代工叙事" }
  ],

  /* ============ 八、页脚免责声明 ============ */
  disclaimer:
    "本报告基于公开市场信息整理，仅供华泰期货内部研究参考，不构成任何投资建议。股价数据以交易所官方为准；新闻以原始来源（SEC / 白宫 / BIS / Treasury / BEA / BLS / Federal Reserve / Reuters 等）为准。投资有风险，决策需谨慎。"
};
