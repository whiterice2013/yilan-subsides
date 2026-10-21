'use strict';

const countyOverviewUrl = 'https://sntroot.e-land.gov.tw/News_Content.aspx?n=11276&s=133324';
const policyUrl = 'https://www.ey.gov.tw/Page/5A8A0CB5B41DA11E/1edab400-96b1-479d-919d-8ee14340fd26';

const benefits = [
  {
    id: 'birth-labor', stage: ['birth'], region: 'national', tag: '中央｜勞保生育給付',
    title: '勞保生育給付加計勞工生育補助', amount: '合計至 100,000', unit: '元／符合資格者',
    desc: '115 年（2026）1 月 1 日起分娩或早產，符合規定者由政府加計補助，與勞保生育給付合併發給。',
    detail: '不是在原本生育給付之外一律再領 10 萬元；符合本方案者，生育給付與補助合計發給 10 萬元。適用身分、加保狀態與其他社會保險給付條件均有限制，雙生以上依規定增給。官方申辦頁有完整資格。',
    url: 'https://www.gov.tw/News_Content_2_381509'
  },
  {
    id: 'birth-uninsured', stage: ['birth'], region: 'national', tag: '中央｜未參加社會保險',
    title: '未參加相關社會保險之生母生育補助', amount: '100,000', unit: '元／每胎基準',
    desc: '115 年（2026）1 月 1 日起分娩或早產，且符合未參加相關社會保險等條件者，可申請。',
    detail: '限符合官方定義的我國籍新生兒生母；生母未參加勞保、農保、公教保、軍保及國民年金，且新生兒在國內辦理出生或初設戶籍登記。這是與勞保生育給付加計補助不同的方案，不可把兩案當成可重複領取。多胞胎依規定增給。',
    url: 'https://www.gov.tw/News_Content_2_861375'
  },
  {
    id: 'yilan', stage: ['birth'], region: 'county', tag: '宜蘭縣｜縣級生育支持',
    title: '宜蘭縣生育津貼＋產檢交通費', amount: '20,000＋3,000', unit: '元／每名新生兒＋每胎次',
    desc: '115 年（2026）出生新生兒：生育津貼每名 2 萬元；產檢交通費每胎次 3,000 元。',
    detail: '本人或配偶一方須自新生兒出生日起回算連續設籍宜蘭縣滿 1 年，且新生兒在宜蘭縣辦理出生登記；須於出生日起 6 個月內申請。生育津貼按新生兒人數計，產檢交通費按每人每胎次計，兩者計算單位不同。',
    url: countyOverviewUrl
  },
  {
    id: 'city', stage: ['birth'], region: 'city', tag: '宜蘭市｜市級補助',
    title: '宜蘭市生育補助', amount: '12,000', unit: '元／每名新生兒',
    desc: '符合宜蘭市設籍及出生登記條件者，可申請市級生育補助。',
    detail: '產婦或配偶須在宜蘭市連續設籍滿 1 年，並在宜蘭市辦理新生兒出生登記；出生後 6 個月內申請。這是宜蘭市方案，其他鄉鎮市請查各自公所規定。',
    url: 'https://yilan.e-land.gov.tw/News_Content.aspx?n=18705&s=372393&sms=16134'
  },
  {
    id: 'allowance', stage: ['baby'], region: 'national', tag: '中央｜自行照顧',
    title: '未滿 2 歲育兒津貼', amount: '5,000–7,000', unit: '元／月',
    desc: '第 1 名子女每月 5,000 元、第 2 名 6,000 元、第 3 名（含）以上 7,000 元。',
    detail: '幼兒須完成出生或初設戶籍登記，且未同時領取托育補助或公費安置。子女排序依官方規定認定；同一幼兒同一期間不可同時領育兒津貼與托育補助。',
    url: 'https://www.gov.tw/News_Content_2_375315'
  },
  {
    id: 'publiccare', stage: ['baby'], region: 'national', tag: '中央｜公共化托育',
    title: '公共化托育補助', amount: '7,000–13,000', unit: '元／月起',
    desc: '送托公共托嬰中心或公共托育家園，基本額度依子女排序提高。',
    detail: '一般基本額度為第 1 名子女每月 7,000 元、第 2 名 10,000 元、第 3 名（含）以上 13,000 元；仍須符合年齡、送托型態與申請條件，並依實際核定辦理。不可與同一幼兒的育兒津貼重複領取。',
    url: 'https://www.mohw.gov.tw/cp-5130-58003-1.html'
  },
  {
    id: 'quasicare', stage: ['baby'], region: 'national', tag: '中央｜準公共托育',
    title: '準公共托育補助', amount: '13,000–19,000', unit: '元／月起',
    desc: '送托簽約準公共保母或托嬰中心，基本額度依子女排序提高。',
    detail: '一般基本額度為第 1 名子女每月 13,000 元、第 2 名 16,000 元、第 3 名（含）以上 19,000 元；須使用符合規定的準公共服務，實際核定依資格與服務費用等規定辦理。不可與同一幼兒的育兒津貼重複領取。',
    url: 'https://www.mohw.gov.tw/cp-5130-58003-1.html'
  },
  {
    id: 'older', stage: ['kid'], region: 'national', tag: '中央｜2 至未滿 5 歲',
    title: '2 歲以上至未滿 5 歲育兒津貼／就學支持', amount: '依照顧與就學型態', unit: '不同方案分別適用',
    desc: '未就讀公共化或準公共幼兒園者，可查育兒津貼；就讀幼兒園者則依園所類型適用學費優惠。',
    detail: '育兒津貼與公立、非營利、準公共幼兒園的就學優惠是不同方案，資格和費用計算方式不同，不可將不同方案金額直接相加。年齡、就讀型態及補助條件請由官方入口確認。',
    url: policyUrl
  },
  {
    id: 'school', stage: ['kid'], region: 'national', tag: '中央｜幼兒園就學優惠',
    title: '公立、非營利與準公共幼兒園就學支持', amount: '依園所類型', unit: '家長月繳費基準',
    desc: '這是幼兒園家長繳費優惠，不是固定金額的現金津貼。',
    detail: '不同園所類型有不同的家長繳費規定；是否適用、延長照顧及其他費用請向園所和主管機關確認，勿與育兒津貼直接相加。',
    url: policyUrl
  },
  {
    id: 'leave', stage: ['baby', 'kid'], region: 'national', tag: '就業保險｜育嬰留停',
    title: '育嬰留職停薪津貼及薪資補助', amount: '合計約 80%', unit: '平均月投保薪資基準',
    desc: '符合條件者，津貼與政府加給合計約為平均月投保薪資的 80%。',
    detail: '須符合就業保險年資、育嬰留職停薪及子女年齡等規定。實際給付、請領期間與彈性申請方式依勞保局最新規定辦理。',
    url: 'https://www.bli.gov.tw/0109378.html'
  },
  {
    id: 'checkup', stage: ['preg'], region: 'national', tag: '中央｜孕期健康',
    title: '公費產前檢查', amount: '14 次產檢', unit: '另含規定超音波等檢查',
    desc: '依孕期與公費服務規範安排產前檢查。',
    detail: '檢查項目與次數依國健署公告及孕週安排；自費項目或部分費用不一定包含在公費範圍內，請向特約醫療院所確認。',
    url: 'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4705&pid=17657'
  },
  {
    id: 'ivf', stage: ['preg'], region: 'national', tag: '中央｜備孕支持',
    title: '不孕症試管嬰兒補助', amount: '依年齡與療程', unit: '核定補助',
    desc: '依年齡、療程項目、申請次數及資格核定。',
    detail: '補助額度並非每次療程固定相同。請由特約機構確認最新方案、資格、可補助療程與申請程序。',
    url: 'https://www.mohw.gov.tw/'
  }
];

const STORAGE_KEY = 'yilan-gift-saved';
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

let activeStage = 'all';
let savedOnly = false;
let saved = readSaved();

function readSaved() {
  try {
    const value = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    return Array.isArray(value) ? value.filter(id => benefits.some(item => item.id === id)) : [];
  } catch {
    return [];
  }
}

function persistSaved() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
    return true;
  } catch {
    return false;
  }
}

function matchesBenefit(item) {
  const region = $('#region').value;
  const query = $('#query').value.trim().toLocaleLowerCase('zh-TW');
  const regionMatches =
    region === 'city' ? item.region === 'city' || item.region === 'county' || item.region === 'national' :
    region === 'county' ? item.region === 'county' || item.region === 'national' :
    item.region === 'national';
  const searchable = [item.title, item.desc, item.detail, item.tag].join(' ').toLocaleLowerCase('zh-TW');

  return (activeStage === 'all' || item.stage.includes(activeStage)) &&
    regionMatches &&
    (!savedOnly || saved.includes(item.id)) &&
    (!query || searchable.includes(query));
}

function createTextElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  element.textContent = text;
  return element;
}

function makeBenefitCard(item) {
  const card = document.createElement('article');
  card.className = 'benefit-card';

  const top = document.createElement('div');
  top.className = 'card-topline';
  top.append(createTextElement('span', 'benefit-tag', item.tag));

  const bookmark = document.createElement('button');
  const isSaved = saved.includes(item.id);
  bookmark.type = 'button';
  bookmark.className = 'bookmark';
  bookmark.dataset.save = item.id;
  bookmark.setAttribute('aria-pressed', String(isSaved));
  bookmark.setAttribute('aria-label', `${isSaved ? '取消收藏' : '加入收藏'}：${item.title}`);
  bookmark.textContent = isSaved ? '♥' : '♡';
  top.append(bookmark);

  const title = createTextElement('h3', 'benefit-title', item.title);
  const amount = document.createElement('div');
  amount.className = 'benefit-amount';
  amount.append(document.createTextNode(item.amount + ' '));
  amount.append(createTextElement('span', 'benefit-unit', item.unit));

  const desc = createTextElement('p', 'benefit-description', item.desc);
  const details = document.createElement('details');
  details.className = 'benefit-details';
  details.append(createTextElement('summary', '', '資格與申請提醒'));
  details.append(createTextElement('p', '', item.detail));

  const link = document.createElement('a');
  link.className = 'official-link';
  link.href = item.url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.textContent = '官方資訊與申辦方式 ↗';

  card.append(top, title, amount, desc, details, link);
  return card;
}

function render() {
  const list = benefits.filter(matchesBenefit);
  const cards = $('#cards');
  cards.replaceChildren();

  $('#savedCount').textContent = String(saved.length);
  $('#savedBtn').setAttribute('aria-pressed', String(savedOnly));
  $('#savedBtn').classList.toggle('is-active', savedOnly);
  $('#resultCount').textContent = `${savedOnly ? '我的收藏 · ' : ''}共 ${list.length} 項福利`;

  if (list.length) {
    const fragment = document.createDocumentFragment();
    list.forEach(item => fragment.append(makeBenefitCard(item)));
    cards.append(fragment);
  } else {
    const empty = createTextElement('div', 'empty-state', '');
    empty.append(createTextElement('strong', '', '目前沒有符合的福利'));
    empty.append(createTextElement('p', '', '試著調整階段、戶籍地或搜尋關鍵字。'));
    const reset = createTextElement('button', 'secondary-button', '清除篩選');
    reset.type = 'button';
    reset.addEventListener('click', resetFilters);
    empty.append(reset);
    cards.append(empty);
  }
}

function setStage(stage) {
  activeStage = stage;
  $$('.stage-tab').forEach(button => {
    const active = button.dataset.stage === stage;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  render();
}

function resetFilters() {
  activeStage = 'all';
  savedOnly = false;
  $('#query').value = '';
  $('#region').value = 'city';
  setStage('all');
  render();
}

$$('[data-stage]').forEach(button => {
  button.addEventListener('click', () => setStage(button.dataset.stage));
});

$('#query').addEventListener('input', render);
$('#region').addEventListener('change', render);
$('#reset').addEventListener('click', resetFilters);

$('#cards').addEventListener('click', event => {
  const button = event.target.closest('[data-save]');
  if (!button) return;

  const id = button.dataset.save;
  saved = saved.includes(id) ? saved.filter(value => value !== id) : [...saved, id];
  const persisted = persistSaved();
  render();

  if (!persisted) {
    $('#resultCount').textContent += '（此瀏覽器無法保存收藏，關閉頁面後可能遺失）';
  }
});

$('#savedBtn').addEventListener('click', () => {
  savedOnly = !savedOnly;
  render();
  $('#benefits').scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
});

function calculateAllowance() {
  const order = Number($('#order').value);
  const care = $('#care').selectedOptions[0].dataset.care;
  const rates = {
    home: [5000, 6000, 7000],
    public: [7000, 10000, 13000],
    quasi: [13000, 16000, 19000]
  };
  const total = rates[care][order];

  $('#amount').replaceChildren(
    document.createTextNode(total.toLocaleString('zh-TW') + ' '),
    createTextElement('small', '', '元／月')
  );

  const notes = {
    home: '育兒津貼：第 1／2／3 名以上子女分別為 5,000／6,000／7,000 元。',
    public: '公共化托育補助：第 1／2／3 名以上子女分別為 7,000／10,000／13,000 元。',
    quasi: '準公共托育補助：第 1／2／3 名以上子女分別為 13,000／16,000／19,000 元。'
  };
  $('#calcNote').textContent = notes[care] + ' 需符合方案資格；育兒津貼與托育補助不可就同一幼兒、同一期間重複領取。此為基本額度參考，不代表核定資格或最終金額。';
}

$('#care').addEventListener('change', calculateAllowance);
$('#order').addEventListener('change', calculateAllowance);

const menuToggle = $('#menuToggle');
const siteNav = $('#siteNav');
menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  siteNav.classList.toggle('is-open', !expanded);
});

$$('#siteNav a').forEach(link => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

render();
calculateAllowance();
