/**
 * ============================================================
 *  live.js —— 美股科技日报 · 腾讯自选股实时行情接入
 * ============================================================
 *  说明：
 *  1. 本脚本读取 data.js 中的 indices（指数）与 stocks（美股个股），
 *     按代码自动匹配腾讯自选股行情代码，拉取「实时涨跌幅」，
 *     覆盖页面上的涨跌显示。
 *  2. 数据源：腾讯自选股行情接口（qt.gtimg.cn），GBK 编码、支持跨域。
 *  3. 拉取失败、或某代码在腾讯无行情时，保留 data.js 中手工填写的数值作为兜底。
 *  4. 费城半导体指数(SOX)在腾讯自选股无独立行情，暂用 SOXX ETF 实时行情代理。
 * ============================================================
 */
(function () {
  'use strict';

  var D = window.REPORT_DATA;
  if (!D) return;

  // 指数代码 -> 腾讯自选股行情代码
  var INDEX_TENCENT = {
    'IXIC': 'usIXIC',   // 纳斯达克综合指数
    'NDX':  'usNDX',    // 纳斯达克100
    'SPX':  'usINX',    // 标普500
    'SOX':  'usSOXX'    // 费城半导体指数（腾讯无独立行情，SOXX ETF 代理）
  };

  // 转腾讯行情代码：指数走映射表；美股个股 = 'us' + 大写代码（如 NVDA -> usNVDA）
  function tencentCode(code) {
    if (!code) return null;
    var c = String(code).trim().toUpperCase();
    if (INDEX_TENCENT[c]) return INDEX_TENCENT[c];
    if (/^[A-Z][A-Z0-9.\-]{0,9}$/.test(c)) return 'us' + c;
    return null;
  }

  // 涨跌幅格式化：+0.40% / -0.30%
  function fmtPct(v) {
    var n = parseFloat(v);
    if (isNaN(n)) return null;
    var s = n.toFixed(2);
    return (n >= 0 ? '+' : '') + s + '%';
  }

  // 按涨跌色（红涨绿跌）切换元素 class
  function applyClass(el, pct) {
    el.classList.remove('up', 'down', 'flat');
    if (pct === null) { el.classList.add('flat'); return; }
    if (pct > 0) el.classList.add('up');
    else if (pct < 0) el.classList.add('down');
    else el.classList.add('flat');
  }

  // 汇总需要拉取的腾讯行情代码（去重）
  function buildCodeList() {
    var list = [], seen = {};
    (D.overview && D.overview.indices || []).forEach(function (i) {
      var tc = tencentCode(i.code);
      if (tc && !seen[tc]) { seen[tc] = true; list.push(tc); }
    });
    (D.stocks || []).forEach(function (s) {
      var tc = tencentCode(s.code);
      if (tc && !seen[tc]) { seen[tc] = true; list.push(tc); }
    });
    return list;
  }

  // 解析接口返回的 v_usXXX="..." 文本
  function parse(raw) {
    var map = {};
    var re = /v_([A-Za-z0-9_.]+)="([^"]*)"/g, m;
    while ((m = re.exec(raw))) {
      var f = m[2].split('~');
      if (f.length < 33) continue;
      map[m[1]] = {
        name:      f[1],
        code:      f[2],
        price:     f[3],
        prevClose: f[4],
        time:      f[30],
        changeAmt: f[31],
        changePct: parseFloat(f[32])
      };
    }
    return map;
  }

  // 把实时涨跌幅写回页面
  function apply(map) {
    // 指数卡片
    document.querySelectorAll('.index-card[data-code]').forEach(function (card) {
      var tc = tencentCode(card.getAttribute('data-code'));
      var q = tc && map[tc];
      var chg = card.querySelector('.chg');
      if (q && chg && !isNaN(q.changePct)) {
        chg.textContent = fmtPct(q.changePct);
        applyClass(chg, q.changePct);
      }
    });
    // 个股行情表
    document.querySelectorAll('#stocks tr[data-code]').forEach(function (row) {
      var tc = tencentCode(row.getAttribute('data-code'));
      var q = tc && map[tc];
      var td = row.querySelector('td.num');
      if (q && td && !isNaN(q.changePct)) {
        td.textContent = fmtPct(q.changePct);
        applyClass(td, q.changePct);
      }
    });
    // 超涨/超跌提示里的涨跌幅
    document.querySelectorAll('.alert-box li b.chg[data-code]').forEach(function (b) {
      var tc = tencentCode(b.getAttribute('data-code'));
      var q = tc && map[tc];
      if (q && !isNaN(q.changePct)) {
        b.textContent = fmtPct(q.changePct);
        applyClass(b, q.changePct);
      }
    });
  }

  // 在指数网格后插入数据来源提示
  function showSource(map) {
    var t = '';
    for (var k in map) { if (map[k].time) { t = map[k].time; break; } }
    var note = document.createElement('div');
    note.className = 'muted-note';
    note.style.marginTop = '8px';
    note.innerHTML =
      '行情数据来源：<b>腾讯自选股</b> · 实时涨跌幅' +
      (t ? ' · 更新于 ' + t : '') +
      '　<span style="color:var(--muted)">注：费城半导体指数(SOX)腾讯无独立行情，暂以 SOXX ETF 代理。</span>';
    var grid = document.querySelector('.index-grid');
    if (grid && grid.parentNode) grid.parentNode.insertBefore(note, grid.nextSibling);
  }

  function run() {
    var codes = buildCodeList();
    if (!codes.length) return;
    fetch('https://qt.gtimg.cn/q=' + codes.join(','))
      .then(function (r) { return r.arrayBuffer(); })
      .then(function (buf) {
        var text;
        try { text = new TextDecoder('gbk').decode(buf); }
        catch (e) { text = new TextDecoder('utf-8').decode(buf); }
        return parse(text);
      })
      .then(function (map) {
        apply(map);
        showSource(map);
      })
      .catch(function () {
        /* 拉取失败：保留 data.js 手工填写的数值 */
      });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
})();
