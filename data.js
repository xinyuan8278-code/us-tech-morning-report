/**
 * ============================================================
 *  美股科技板块前一交易日行情日报 —— 数据文件（每日只需改这里）
 *  （2026-11-20 更新：对应美股交易日 2026-11-19）
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
    reportDate: "2026年11月20日",   // 报告发布日期（周五）
    tradeDate: "2026年11月19日",    // 对应美股交易日（前一交易日，周四）
    author: "华泰期货 · 研究",
    tag: "每日市场跟踪"
  },

  /* ============ 二、市场概览 ============ */
  overview: {
    /* 简短概括：指数变化 + 个股变化 + 重大事件 */
    text: "11月19日（周四）美股高开低走、三大指数收盘跌幅均超2%：道指-2.19%至49,097.06（失守5万点）、标普500-2.02%至7,175.83（连续第五个交易日下跌、创2025年4月以来最差单周）、纳指-2.25%至23,879.20，费城半导体指数从盘中大涨近5%回落至-2.41%（收9,419.72）。核心事件是史上最大IPO Anthropic（ANT）登陆纳斯达克：开盘价111.5美元（较83美元发行价+34%）、盘中市值一度突破2万亿美元，但冲高回落，收涨17.07%至97.17美元（市值约1.27万亿），其亮眼首秀非但未能提振AI情绪，反而触发资金从科技股撤离——英伟达-3.30%（连续第六日下跌、跌破150美元）、AMD遭做空机构Hunterbrook狙击暴跌7.72%、亚马逊-3.87%、谷歌-3.46%、Meta-3.27%、博通-2.09%，存储走弱（美光、闪迪跌逾2%）。逆势亮点是网络安全：Palo Alto Networks因超预期财报+上调FY2027指引跳涨。宏观层面，美联储12月加息概率升至约94%，市场避险情绪升温。",
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
    { name: "AMD", code: "AMD", direction: "超跌", change: "-0.00%", note: "重挫7.72%至约480美元区间（盘中一度暴跌11%至470.56美元，为纳指100成分股跌幅最大），做空机构Hunterbrook Capital披露空头头寸、关联媒体Hunterbrook Media发布调查报告，指控被列入实体清单的中国服务器厂商IEIT Systems（浪潮信息）在被制裁后仍持续获得新版AMD固件，并质疑AMD存在类似英伟达的「循环交易」；AMD否认并称严格遵守出口管制法规。此前AMD被市场视为英伟达风波中的「替代受益者」，如今自身也暴露「中国业务风险」，费半指数受其拖累从涨近5%跳水转跌。" }
  ],

  /* ============ 四、重点公司行情表 ============ */
  /* 超涨/超跌个股放最上方；无新闻的公司驱动因素简要说明即可 */
  stocks: [
    { name: "NVIDIA",    code: "NVDA",  change: "-0.00%", driver: "跌3.30%至约145.98美元、连续第六个交易日下跌，盘中跌破150美元重要支撑位；财报超预期（Q3营收1158亿+103%、Q4指引1300亿）未能扭转跌势，CEO继任真空、商务部东南亚出口新规及Anthropic上市引发的AI资金分流共同压制，市场关注其「中国销售」国会调查进展" },
    { name: "Microsoft", code: "MSFT",  change: "-0.00%", driver: "跌1.78%，跟随大盘回落；作为Anthropic基石投资者（同步私募配售260亿美元财团成员），Anthropic首日冲高回落未提供持续支撑，高估值资产在美联储12月加息概率升至94%背景下承压" },
    { name: "Apple",     code: "AAPL",  change: "-0.00%", driver: "跌0.92%、科技七巨头中跌幅最小；现金流稳健的防御属性在避险情绪升温、利率上行预期背景下相对抗跌" },
    { name: "Amazon",    code: "AMZN",  change: "-0.00%", driver: "跌3.87%、七巨头中跌幅居前；前期因Anthropic约15%持股价值重估而大涨，今日Anthropic首日冲高回落（收涨17%而非盘中39%高点），获利回吐叠加AI交易降温，前期涨幅部分回吐" },
    { name: "Alphabet",  code: "GOOGL", change: "-0.00%", driver: "跌3.46%；同为Anthropic重要股东（约14%持股），Anthropic首日表现低于市场「引爆AI行情」预期，叠加通信服务板块整体-2.92%领跌，跟随回落" },
    { name: "Meta",      code: "META",  change: "-0.00%", driver: "跌3.27%；「自研芯片+算力替代」叙事在AI交易降温、英伟达与AMD相继爆出「中国业务风险」后边际退潮，跟随大盘震荡下行" },
    { name: "Broadcom",  code: "AVGO",  change: "-0.00%", driver: "跌2.09%；英伟达财报虽超预期但未能带动算力链，AMD做空风波引发半导体板块整体获利了结，定制ASIC龙头同步承压" },
    { name: "AMD",       code: "AMD",   change: "-0.00%", driver: "重挫7.72%、盘中一度暴跌11%至470.56美元，为纳指100成分股当日跌幅最大；做空机构Hunterbrook披露空头头寸，报告指控其中国业务出口合规风险与「循环交易」，此前「英伟达替代受益」逻辑遭反噬，详见超跌提示" },
    { name: "Micron",    code: "MU",    change: "-0.00%", driver: "跌逾2%；存储板块整体走弱（闪迪、SK海力士同步跌逾2%），AI交易降温与费半跳水拖累，前期「存储超级周期」涨幅较大、部分资金获利了结" },
    { name: "SanDisk",   code: "SNDK",  change: "-0.00%", driver: "跌逾2%；NAND「超级周期」叙事在AI资本开支疑虑（Anthropic上市后市场重估AI烧钱可持续性）背景下暂歇，跟随费半与存储板块回落" }
  ],

  /* ============ 五、重要科技与政策新闻（一手来源） ============ */
  news: [
    {
      title: "Anthropic（ANT）登陆纳斯达克首日收涨17%至97.17美元，史上最大IPO募资813亿美元却未能提振AI情绪，盘中市值一度突破2万亿美元",
      originalTitle: "Wall Street ends sharply lower as Anthropic's debut fails to revive AI fervour",
      source: "Reuters（英文通讯社一手，经 The Straits Times 转载）",
      time: "2026年11月19日",
      type: "财经媒体",
      url: "https://www.straitstimes.com/business/companies-markets/wall-street-ends-sharply-lower-as-anthropics-debut-fails-to-revive-ai-fervour",
      link: "https://www.straitstimes.com/business/companies-markets/wall-street-ends-sharply-lower-as-anthropics-debut-fails-to-revive-ai-fervour",
      summary: "Anthropic（代码ANT）11月19日在纳斯达克上市，发行价83美元/股、募资813亿美元，为史上最大IPO（超越6月SpaceX）。首日开盘价111.50美元（较发行价+34%），盘中最高115.10美元、市值一度突破2万亿美元，但随后动能衰减，收盘报97.17美元、涨幅收窄至17.07%，市值约1.27万亿美元。其亮眼首秀非但未能重燃AI交易热情，反而引发市场对AI高估值的重新审视——部分投资者「卖科技买Anthropic」的资金腾挪，加剧科技大盘抛压。路透援引Argent Capital基金经理Jed Ellerbroek称，「钱是从别处来的」，其对数据中心资本开支增长预期在过去一两个月已有所下调，认为数据中心建设将更贵、更慢。",
      impact: {
        direction: "中性偏空（首日虽涨但未能带动板块，AI估值「试金石」结果平淡）",
        companies: "Anthropic及基石投资者（谷歌/英伟达/微软/亚马逊/AMD/博通/美光/台积电）、AI算力生态",
        industry: "AI大模型、云计算、AI基础设施、数据中心",
        logic: "史上最大IPO首日「冲高回落」显示一级市场的高估值并未获得二级市场同等认同，资金从其他科技股「腾挪」至Anthropic，反而加剧板块抛压；这是继英伟达财报后，市场对「AI烧钱换规模」可持续性的第二次集中拷问，短期AI板块估值承压"
      }
    },
    {
      title: "做空机构Hunterbrook狙击AMD：指控被列入实体清单的浪潮信息仍获新版AMD固件、存在「循环交易」，AMD盘中暴跌11%、收跌7.72%并否认指控",
      originalTitle: "AMD Firmware Found at Blacklisted Chinese Company: Short-Seller Investigation Sends Shares Down",
      source: "Hunterbrook Media（调查媒体一手，关联对冲基金Hunterbrook Capital已披露AMD空头头寸）",
      time: "2026年11月19日",
      type: "财经媒体",
      url: "https://joho-todai.com/en/amd-firmware-blacklisted-chinese-company-stock-drop",
      link: "https://joho-todai.com/en/amd-firmware-blacklisted-chinese-company-stock-drop",
      summary: "调查媒体Hunterbrook Media发布报告，其关联对冲基金Hunterbrook Capital同步披露AMD空头头寸（并做多一篮子可比标的）。核心指控：中国服务器厂商IEIT Systems（浪潮信息）2025年3月被列入美国实体清单后，仍至少六次将新版AMD固件（AGESA）集成进服务器BIOS，最近一次更新于2026年10月19日、包含AMD 7月10日才发布的TurinPI代码；另有Maginfra（中国）、Kaytus（新加坡）、Aivres（美国加州，原Inspur Systems）三家关联公司发布与IEIT 99.94%相同的BIOS文件。报告同时质疑AMD存在类似英伟达的「循环交易」（向采购自家芯片的客户提供融资/担保，虚增需求）。报告自身也承认「这些发现并不必然构成出口违规」。AMD发言人否认指控，称报告「歪曲了公司的业务实践与合作关系」、公司严格遵守美国出口管制法规。受此影响AMD盘中一度暴跌11%至470.56美元、收跌7.72%。",
      impact: {
        direction: "利空（AMD「替代受益」逻辑遭反噬，半导体板块出口合规风险溢价上升）",
        companies: "AMD及半导体产业链（英伟达、博通、台积电、美光等）",
        industry: "GPU/CPU、半导体出口管制、AI基础设施、数据中心",
        logic: "此前市场把AMD视为英伟达「中国业务风波」的替代受益者，Hunterbrook报告证明AMD同样存在中国业务合规风险，市场对「替代」逻辑的定价被逆转；叠加对新加坡等东南亚国家出口新规当日生效，半导体板块整体出口合规风险溢价抬升，费半指数从涨近5%跳水至-2.41%"
      }
    },
    {
      title: "美股三大指数收盘跌幅均超2%，标普500五连跌创2025年4月以来最差单周，费城半导体指数从涨近5%跳水至-2.41%",
      originalTitle: "US stocks slump as Anthropic's super-sized IPO fails to revitalise AI enthusiasm; S&P 500 logs fifth straight loss",
      source: "Reuters（英文通讯社一手，经 The Straits Times 转载）",
      time: "2026年11月19日",
      type: "财经媒体",
      url: "https://www.straitstimes.com/business/companies-markets/wall-street-ends-sharply-lower-as-anthropics-debut-fails-to-revive-ai-fervour",
      link: "https://www.straitstimes.com/business/companies-markets/wall-street-ends-sharply-lower-as-anthropics-debut-fails-to-revive-ai-fervour",
      summary: "11月19日美股三大指数全线重挫：道指跌2.19%至49,097.06点、跌破5万点整数关口；标普500跌2.02%至7,175.83点、连续第五个交易日下跌、创2025年4月以来最大单周跌幅；纳指跌2.25%至23,879.20点；费城半导体指数跌2.41%至9,419.72点（盘中一度涨近5%）。科技七巨头全线下挫，英伟达连续第六日下跌、跌破150美元至约145.98美元。市场避险情绪升温：美联储12月加息概率升至约94%（CME FedWatch），下周将公布PCE通胀数据（市场预期核心PCE同比3.2%）。新云公司CoreWeave、Nebius重挫。逆势上涨的仅有网络安全（Palo Alto Networks）与部分零售。",
      impact: {
        direction: "利空（AI交易退潮叠加鹰派利率预期，风险偏好显著收缩）",
        companies: "英伟达、AMD、亚马逊、谷歌等科技巨头及新云公司、整体科技板块",
        industry: "AI、半导体、云计算、数据中心、网络安全",
        logic: "Anthropic上市未能接力AI交易、AMD做空风波、英伟达「中国销售」调查三重利空共振，叠加美联储12月加息概率升至94%，高估值AI资产的贴现率压力与情绪面共振，标普五连跌反映「买预期卖事实」后市场对AI估值与利率的双重再定价"
      }
    },
    {
      title: "Palo Alto Networks财报超预期、上调FY2027营收指引至145.2—145.7亿美元，并宣布45亿美元收购AI初创Applied Compute，股价跳涨领涨网络安全板块",
      originalTitle: "Palo Alto Networks Stock Surges on Record Quarter, Raised Outlook and $4.5 Billion Applied Compute AI Deal",
      source: "International Business Times（英文财经媒体一手）",
      time: "2026年11月19日",
      type: "财经媒体",
      url: "https://www.ibtimes.com.au/palo-alto-networks-record-quarter-ai-acquisition-1878956",
      link: "https://www.ibtimes.com.au/palo-alto-networks-record-quarter-ai-acquisition-1878956",
      summary: "Palo Alto Networks（PANW）周四股价跳涨逾4.8%（盘前一度涨超9%），网络安全板块逆势走强。公司2027财年第一财季（截至10月31日）营收34.4亿美元、同比+39%，超预期的33.1亿；调整后EPS 1.05美元，超0.97美元一致预期；下一代安全年度经常性收入（NGS ARR）97.3亿美元、同比+66%。公司将FY2027全年指引上调至营收145.2—145.7亿美元（高于141.6亿预期）、调整后EPS 4.26—4.30美元。公司同时宣布以45亿美元全股票收购AI初创Applied Compute，扩大其在AI安全领域的布局。CEO Nikesh Arora称客户正转向其平台以应对「前所未有的威胁格局」。该涨势带动Rubrik等网络安全股同步上行。",
      impact: {
        direction: "利好（网络安全是AI时代少数逆势走强的确定性赛道）",
        companies: "Palo Alto Networks及网络安全板块（Rubrik、Zscaler、Okta、Cloudflare、SentinelOne）",
        industry: "网络安全、AI安全、云计算",
        logic: "在AI交易退潮的背景下，网络安全因「AI放大攻击面→防御支出刚性」的逻辑成为资金避险去处，Palo Alto超预期财报+上调指引+AI收购三重催化，验证网络安全是AI资本开支周期中少有的确定性受益方向，为科技板块提供结构性亮点"
      }
    },
    {
      title: "美联储12月加息概率升至约94%，市场聚焦下周PCE通胀数据（预期核心PCE同比3.2%），鹰派利率预期压制高估值AI资产",
      originalTitle: "Markets price ~94% chance of December Fed rate hike; PCE report looms with core inflation seen at 3.2%",
      source: "Reuters（英文通讯社一手，经 The Straits Times 转载）",
      time: "2026年11月19日",
      type: "财经媒体",
      url: "https://www.straitstimes.com/business/companies-markets/wall-street-ends-sharply-lower-as-anthropics-debut-fails-to-revive-ai-fervour",
      link: "https://www.straitstimes.com/business/companies-markets/wall-street-ends-sharply-lower-as-anthropics-debut-fails-to-revive-ai-fervour",
      summary: "继11月18日公布的10月FOMC纪要显示官员希望在通胀回落前继续加息后，市场正在重新校准对利率路径的预期。据CME FedWatch，金融市场目前定价美联储12月会议加息25个基点的概率约为94%，且「超大幅50个基点加息」的概率虽小但在上升。下周美国商务部将公布个人消费支出（PCE）报告，其中包含美联储最看重的通胀指标PCE物价指数，市场预期核心PCE同比为3.2%，远高于2%目标。利率「更高更久」的预期成为压制高估值成长股、尤其是AI资产贴现率的核心宏观约束。",
      impact: {
        direction: "利空（鹰派利率预期升温，压制高估值AI资产估值）",
        companies: "英伟达、微软、亚马逊等高估值AI资产及高杠杆新云、数据中心开发商",
        industry: "宏观利率、AI基础设施、数据中心、云计算",
        logic: "12月加息概率升至94%、核心PCE预期3.2%远超目标，意味着「利率更高更久」仍是AI高估值的天花板；AI基建的融资成本与债务可持续性承压，这是Anthropic上市、AMD风波之外，压制AI板块的中期宏观约束，下周PCE数据是验证通胀方向的关键变量"
      }
    }
  ],

  /* ============ 六、当日最值得关注的 3 个交易逻辑 ============ */
  logics: [
    { title: "Anthropic「冲高回落」：一级市场高估值未获二级市场同等认同，AI交易进入「拆解再定价」阶段",
      text: "史上最大IPO Anthropic首日开盘+34%、盘中市值一度突破2万亿美元，但收盘涨幅收窄至17%、并引发科技大盘「卖科技买Anthropic」的资金腾挪。这传递出关键信号：一级市场对头部AI资产趋之若鹜的估值，在二级市场落地时并未得到同等的热情承接——「AI烧钱换规模」能否最终转化为可持续盈利，开始成为二级市场定价的核心变量。市场从「AI需求无上限」的单边叙事，切换为「需求 vs 烧钱可持续性」的双向再定价，这对英伟达、微软乃至整个算力链的估值中枢构成压力。" },
    { title: "半导体「中国业务风险」从英伟达扩散到AMD：出口合规成为压制芯片股估值的新系统性变量",
      text: "继英伟达因「中国销售」遭国会调查、黄仁勋辞职风波后，做空机构Hunterbrook将矛头指向AMD，指控被列入实体清单的浪潮信息仍获新版AMD固件、并质疑其存在「循环交易」，AMD盘中暴跌11%。这意味着「中国业务合规风险」已从单一个股（英伟达）扩散为半导体板块的系统性变量——此前市场把AMD视为英伟达的「替代受益者」，如今该逻辑被证伪。叠加对新加坡、马来西亚等东南亚国家出口新规当日生效，半导体板块整体出口合规风险溢价上升，费半指数从涨近5%跳水至-2.41%，出口管制成为压制芯片股估值的新主线。" },
    { title: "鹰派利率与AI估值的天花板：12月加息概率94%，高估值AI资产面临「分母端」持续收紧",
      text: "美联储12月加息概率升至约94%、下周PCE核心通胀预期3.2%远超2%目标，利率「更高更久」成为AI高估值资产的刚性天花板。AI基建的融资成本上升、债务可持续性承压，与「AI需求叙事」形成对冲——这正是路透所引基金经理下调数据中心资本开支预期的深层原因。在Anthropic上市、AMD风波之外，鹰派利率预期是压制AI板块最持久、最底层的宏观变量，下周PCE数据将决定利率预期是缓和还是进一步走强，从而决定AI板块的短期方向。" }
  ],

  /* ============ 七、未来 1—3 个交易日关注事项（具体事件） ============ */
  watchlist: [
    { date: "11月20日（周五）", event: "美国11月标普全球PMI初值（制造业/服务业，美东9:45）", impact: "PMI初值揭示11月经济扩张动能与通胀压力方向，是12月8-9日FOMC会议前的重要前瞻数据，或强化/缓和12月加息（25bp vs 50bp）的预期，影响高估值AI资产" },
    { date: "11月20日（周五）", event: "费城联储行长哈克（Patrick Harker）讲话", impact: "哈克为2026年FOMC票委，其表态将进一步校准市场对12月加息幅度的定价，直接影响利率敏感型科技股" },
    { date: "11月25日（周三）", event: "美国10月PCE物价指数（含核心PCE，市场预期核心同比3.2%）", impact: "美联储最看重的通胀指标，若高于预期将强化12月加息乃至50bp加息预期、进一步压制AI高估值；若降温则提供喘息窗口" },
    { date: "持续关注", event: "英伟达CEO遴选与「中国销售」国会调查进展、AMD对Hunterbrook指控的正式回应、商务部对新加坡/马来西亚等东南亚国家出口新规实施细则", impact: "半导体板块出口合规风险溢价的关键变量，任一进展都将重塑英伟达、AMD及AI芯片供应链的估值预期" }
  ],

  /* ============ 八、页脚免责声明 ============ */
  disclaimer:
    "本报告基于公开市场信息整理，仅供华泰期货内部研究参考，不构成任何投资建议。股价数据以交易所官方为准；新闻以原始来源（SEC / 白宫 / BIS / Treasury / BEA / BLS / Federal Reserve / Reuters / 公司官网等）为准。投资有风险，决策需谨慎。"
};
