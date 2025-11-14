import React, { useMemo, useState } from "react";

/**
 * Buy Way RU/KZ unified landing — mobile-first, без переполнений и авто-переносов
 */

export default function Buyway() {
  const [theme, setTheme] = useState("ru");

  const t = useMemo(() => (theme === "ru" ? ruText : kzText), [theme]);
  const palette = useMemo(() => (theme === "ru" ? ruPalette : kzPalette), [theme]);

  return (
    <div className="min-h-screen w-full bg-gray-50 text-gray-900">
      {/* Top bar */}
      <header className="sticky top-0 z-30 w-full border-b border-gray-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-3">
    {/* Логотип + название */}
    <div className="flex flex-col xs:flex-row items-start xs:items-center gap-1 xs:gap-2 min-w-0 overflow-hidden">
      {/* Только логотип */}
      <Logo compact color={palette.primary} accent={palette.accent} />

      {/* Название компании и теглайн — всегда под логотипом на мобиле */}
      <div className="flex flex-col leading-tight min-w-0 overflow-hidden mt-1 xs:mt-0">
        <div className="font-semibold text-[13px] sm:text-sm truncate">
          {t.brandNameShort}
        </div>
        <div className="text-[10px] sm:text-[11px] text-gray-500 truncate">
          {t.tagline}
        </div>
      </div>
    </div>

    {/* Переключатель и кнопка */}
    <div className="flex items-center gap-2">
      <RegionSwitch theme={theme} onChange={setTheme} />
      <a
        href="#lead"
        className="hidden sm:inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium text-white whitespace-nowrap transition-colors"
        style={{ backgroundColor: palette.primary }}
      >
        {t.ctaPrimary}
      </a>
    </div>
  </div>
</header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 10%, ${palette.primary} 0, transparent 50%), radial-gradient(circle at 80% 30%, ${palette.accent} 0, transparent 50%)`,
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h1
                className="font-extrabold tracking-tight mb-4 text-[28px] leading-8 sm:text-5xl sm:leading-tight"
                style={{
                  WebkitHyphens: "none",
                  msHyphens: "none",
                  hyphens: "manual",
                  wordBreak: "keep-all",
                }}
              >
                {t.heroTitle}
              </h1>
              <p className="text-base sm:text-lg text-gray-600 mb-6">{t.heroSubtitle}</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#process"
                  className="rounded-xl px-5 py-3 text-sm font-semibold text-white"
                  style={{ backgroundColor: palette.primary }}
                >
                  {t.ctaSecondary}
                </a>
                <a
                  href="#faq"
                  className="rounded-xl px-5 py-3 text-sm font-semibold border"
                  style={{ borderColor: palette.primary, color: palette.primary }}
                >
                  {t.ctaTertiary}
                </a>
              </div>
              <div className="mt-6 text-sm text-gray-500">{t.disclaimer}</div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold mb-4">{t.quoteTitle}</h3>
              <LeadForm palette={palette} t={t} />
              <p className="text-xs text-gray-500 mt-3">{t.privacyNote}</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="process" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">{t.processTitle}</h2>
          <ol className="grid md:grid-cols-3 gap-6">
            {t.process.map((step, i) => (
              <li key={i} className="relative bg-gray-50 rounded-2xl p-5 border border-gray-200">
                <div
                  className="absolute -top-3 -left-3 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold"
                  style={{ backgroundColor: palette.accent }}
                >
                  {i + 1}
                </div>
                <p className="font-medium mb-1">{step.title}</p>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </li>
            ))}
          </ol>
          <div className="mt-6 text-sm text-gray-500">{t.processFootnote}</div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">{t.pricingTitle}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {t.pricing.map((card, idx) => (
              <div key={idx} className="rounded-2xl border border-gray-200 bg-white p-6">
                <div className="text-sm text-gray-500 mb-1">{card.kicker}</div>
                <div className="text-xl font-bold mb-3">{card.title}</div>
                <ul className="space-y-2 text-sm text-gray-700">
                  {card.points.map((pt, i) => (
                    <li key={i} className="flex gap-2">
                      <span
                        className="mt-1 inline-block w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: palette.primary }}
                      />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-6 text-sm text-gray-500">{t.pricingNote}</div>
        </div>
      </section>

      {/* Guarantees */}
      <section id="guarantees" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">{t.guaranteeTitle}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {t.guarantees.map((g, i) => (
              <div key={i} className="rounded-2xl border border-gray-200 p-6">
                <div className="text-lg font-semibold mb-2" style={{ color: palette.primary }}>
                  {g.title}
                </div>
                <p className="text-sm text-gray-600">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">{t.faqTitle}</h2>
          <div className="space-y-4">
            {t.faq.map((item, i) => (
              <details key={i} className="group rounded-xl border border-gray-200 bg-white p-5">
                <summary className="cursor-pointer list-none font-medium flex items-center justify-between">
                  {item.q}
                  <span className="ml-4 text-gray-400 group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <p className="mt-3 text-sm text-gray-600">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-6 text-sm">
          <div>
            <Logo color={palette.primary} accent={palette.accent} small />
            <p className="mt-2 text-gray-600">{t.footerAbout}</p>
          </div>
          <div>
            <div className="font-semibold mb-2">{t.footerLinks}</div>
            <ul className="space-y-1 text-gray-600">
              <li>
                <a href="#process" className="hover:underline">
                  {t.processTitle}
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:underline">
                  {t.pricingTitle}
                </a>
              </li>
              <li>
                <a href="#guarantees" className="hover:underline">
                  {t.guaranteeTitle}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:underline">
                  {t.faqTitle}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">Контакты</div>
            <ul className="space-y-1 text-gray-600">
              <li>
                Telegram:{" "}
                <a
                  href="https://t.me/buyway_su"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  @buyway_su
                </a>
              </li>
              <li>
                Email:{" "}
                <a href="mailto:service@buyway.su" className="underline">
                  service@buyway.su
                </a>
              </li>
              <li>{t.legalName}</li>
            </ul>
          </div>
        </div>
        <div className="text-xs text-center text-gray-400 py-4">
          © {new Date().getFullYear()} {t.brandNameShort}. {t.footerRights}
        </div>
      </footer>
    </div>
  );
}

/* ─────────────────────────  UI helpers  ───────────────────────── */

function RegionSwitch({ theme, onChange }) {
  return (
    <div className="flex items-center gap-1 rounded-xl border border-gray-200 p-1 bg-white">
      <button
        onClick={() => onChange("ru")}
        className={`px-3 py-1 text-xs sm:text-sm rounded-lg whitespace-nowrap ${
          theme === "ru" ? "bg-gray-900 text-white" : "text-gray-700"
        }`}
      >
        Россия
      </button>
      <button
        onClick={() => onChange("kz")}
        className={`px-3 py-1 text-xs sm:text-sm rounded-lg whitespace-nowrap ${
          theme === "kz" ? "bg-gray-900 text-white" : "text-gray-700"
        }`}
      >
        Казахстан
      </button>
    </div>
  );
}

function LeadForm({ palette, t }) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [link, setLink] = useState("");
  const [comment, setComment] = useState("");
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    if (!name.trim() || !contact.trim()) {
      setStatus("❗ Укажите имя и контакт.");
      return;
    }

    setSending(true);
    try {
      const res = await fetch("https://buyway-mail-backend.onrender.com/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, contact, link, comment }),
      });

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        setStatus(`⚠️ Ошибка при отправке: ${text || res.status}`);
        return;
      }

      setStatus("✅ Заявка успешно отправлена!");
      setName("");
      setContact("");
      setLink("");
      setComment("");
    } catch {
      setStatus("⚠️ Не удалось подключиться к серверу. Попробуйте позже.");
    } finally {
      setSending(false);
    }
  };

  return (
    <form id="lead" className="grid gap-3" onSubmit={handleSubmit}>
      <div className="grid sm:grid-cols-2 gap-3">
        <input
          className="rounded-xl border border-gray-300 px-3 py-2"
          placeholder={t.formName}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="rounded-xl border border-gray-300 px-3 py-2"
          placeholder={t.formPhone}
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          required
        />
      </div>
      <input
        className="rounded-xl border border-gray-300 px-3 py-2"
        placeholder={t.formLink}
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />
      <textarea
        className="rounded-xl border border-gray-300 px-3 py-2"
        placeholder={t.formDesc}
        rows={3}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button
        type="submit"
        disabled={sending}
        className={`rounded-xl px-5 py-3 text-sm font-semibold text-white ${
          sending ? "opacity-70 cursor-not-allowed" : ""
        }`}
        style={{ backgroundColor: palette.primary }}
      >
        {sending ? "Отправка..." : t.formSubmit}
      </button>
      {status && <div className="text-sm mt-2">{status}</div>}
    </form>
  );
}

/**
 * Логотип: всегда одной строкой, без переносов, с авто-уменьшением на мобиле.
 */
function Logo({ color, accent, small = false, compact = false }) {
  // компактный режим для хедера + адаптивный размер
  const size = compact ? 28 : small ? 28 : 38;

  return (
    <div className="flex items-center gap-1 sm:gap-2 shrink-0">
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <rect x="6" y="10" width="36" height="28" rx="6" stroke={color} strokeWidth="2" />
        <path
          d="M10 30 L22 22 L30 28 L40 18"
          stroke={accent}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* всегда в одну строку + авто-ужатие шрифта на мобильных */}
      <span
        className={`
          font-bold leading-none whitespace-nowrap select-none
          ${compact ? "text-[clamp(12px,3.8vw,18px)]" : small ? "text-base" : "text-xl"}
        `}
        style={{
          WebkitHyphens: "none",
          msHyphens: "none",
          hyphens: "none",
          wordBreak: "keep-all",
        }}
      >
        Buy Way
      </span>
    </div>
  );
}

/* ─────────────────────────  Text & palette  ───────────────────────── */

const ruPalette = { primary: "#0A5BE0", accent: "#D61E2B" };
const kzPalette = { primary: "#00A3E0", accent: "#F2C300" };

const ruText = {
  brandNameShort: "Buy Way Russia",
  tagline: "Способ покупки с заботой и надёжностью",
  heroTitle: "Безопасный выкуп товаров из Европы под ключ",
  heroSubtitle:
    "Мы проверим, выкупим и аккуратно доставим товар из Германии: фото/видео-отчёт, бережная упаковка и прозрачная оплата по этапам.",
  ctaPrimary: "Оставить заявку",
  ctaSecondary: "Как мы работаем",
  ctaTertiary: "Ответы на вопросы",
  disclaimer: "Сроки доставки 8–27 дней ориентировочные и зависят от работы перевозчиков.",
  quoteTitle: "Получить точный расчёт",
  privacyNote:
    "Нажимая на кнопку, вы соглашаетесь с офертой и политикой конфиденциальности.",
  processTitle: "Пошаговый процесс",
  processFootnote:
    "Предоплата 0–50% на ваш выбор. Остаток — после проверки товара на нашем складе в Германии.",
  process: [
    { title: "Заявка и подбор", desc: "Находим продавца/магазин в Европе по вашему запросу и фиксируем цену." },
    { title: "Предоплата и выкуп", desc: "Вносите предоплату. Партнёр в Германии выкупает товар." },
    {
      title: "Приёмка и проверка",
      desc: "Через 2–5 раб. дней товар на складе в Германии: делаем фото/видео, при необходимости видеосвязь.",
    },
    { title: "Оставшаяся оплата", desc: "Оплачиваете остаток, подтверждаете отправку и адрес получателя." },
    { title: "Упаковка и отправка", desc: "Тщательно упаковываем и оформляем отслеживаемую посылку." },
    { title: "Доставка в РФ", desc: "Средний срок 8–27 дней. Получение в отделении или у курьера." },
  ],
  pricingTitle: "Тарифы и услуги",
  pricingNote:
    "Цены ориентировочные и зависят от категории товара, габаритов и направления. Точный расчёт — по заявке.",
  pricing: [
    {
      kicker: "Базовая комиссия",
      title: "Агентское сопровождение от 6%",
      points: [
        "Поиск и проверка продавца",
        "Выкуп через партнёра в Германии",
        "Фото/видео фиксация, акт осмотра",
        "Трекинг и информирование",
      ],
    },
    {
      kicker: "Дополнительно",
      title: "Проверка, упаковка, консолидация",
      points: [
        "Расширенная проверка (видео по списку)",
        "Усиленная упаковка, хрупкие грузы",
        "Страхование отправления по заявке",
        "Консолидация нескольких посылок",
      ],
    },
    {
      kicker: "Логистика",
      title: "Международная доставка",
      points: [
        "Отправка отслеживаемой почтой/курьером",
        "Ориентировочно 8–27 дней",
        "Пошлины/ограничения — по правилам перевозчика",
        "Поддержка по спорным ситуациям",
      ],
    },
  ],
  guaranteeTitle: "Гарантии и ответственность",
  guarantees: [
    {
      title: "Целостность посылки",
      desc: "Тщательная упаковка, фиксация состояния и компенсация ущерба при подтверждённом повреждении в пути.",
    },
    { title: "Прозрачная оплата", desc: "Оплата по этапам, отчёт агента и документы для физ. и юр. лиц РФ." },
    {
      title: "Возвраты по правилам",
      desc: "Отмена до выкупа без удержаний. Возврат после отправки — после фактического возврата на склад СПб.",
    },
  ],
  faqTitle: "Частые вопросы",
  faq: [
    {
      q: "Какая предоплата?",
      a: "От 0 до 50% — решаете вы. Остаток — после проверки товара на складе в Германии.",
    },
    {
      q: "Какие сроки?",
      a: "Приёмка 2–5 рабочих дней, доставка в РФ обычно 8–27 дней в зависимости от перевозчика.",
    },
    {
      q: "Если товар повредился?",
      a: "Мы компенсируем ущерб при подтверждении повреждения при транспортировке. Всегда делаем фото/видео-фиксацию и усиливаем упаковку.",
    },
    { q: "Можно ли работать с юрлицами?", a: "Да, предоставим договор, счёт, акт и отчёт агента." },
  ],
  footerAbout:
    "Российская компания, агентские услуги по выкупу товаров из Европы с проверкой и доставкой.",
  footerLinks: "Разделы",
  footerRights: "Все права защищены.",
  formName: "Ваше имя",
  formPhone: "Телефон или Telegram",
  formLink: "Ссылка на товар / описание",
  formDesc: "Комментарии к заказу",
  formSubmit: "Отправить заявку",
  legalName: "ИП «Куликов Сергей Анатольевич»",
};

const kzText = {
  brandNameShort: "Buy Way Kazakhstan",
  tagline: "Способ покупки с заботой и надёжностью",
  heroTitle: "Посредническая покупка товаров в России и Европе",
  heroSubtitle:
    "Для граждан Казахстана: найдём и выкупим ваш товар в магазинах и на площадках РФ (Avito, Ozon, WB, Drom и др.) и в Европе.",
  ctaPrimary: "Оставить заявку",
  ctaSecondary: "Как это работает",
  ctaTertiary: "FAQ",
  disclaimer:
    "Сроки зависят от маршрута и перевозчиков. Для РФ→КЗ часто 5–12 дней при стандартной доставке.",
  quoteTitle: "Запросить расчёт и сроки",
  privacyNote:
    "Нажимая на кнопку, вы принимаете условия оферты и политику конфиденциальности.",
  processTitle: "Как мы работаем",
  processFootnote:
    "Предоплата 10–50% для резервирования выкупа. Остаток — после проверки на складе (СПб/Мск) или у партнёра.",
  process: [
    {
      title: "Заявка и проверка продавца",
      desc: "Проверим продавца, отзывы и документы. При необходимости — выездная проверка.",
    },
    {
      title: "Предоплата и выкуп",
      desc: "Вносим предоплату и оперативно выкупаем товар на маркетплейсе/в магазине РФ.",
    },
    {
      title: "Приёмка и осмотр",
      desc: "Доставка на наш склад в РФ или к партнёру: фото/видео-отчёт, согласование.",
    },
    {
      title: "Остаток и упаковка",
      desc: "Оплачиваете остаток, усиливаем упаковку и подбираем перевозчика (CDEK, Boxberry, и др.).",
    },
    {
      title: "Доставка в Казахстан",
      desc: "Средний срок 5–12 дней для стандартных посылок. Таможенные правила — по ЕАЭС и перевозчику.",
    },
    {
      title: "Выдача и поддержка",
      desc: "Получение в отделении/у курьера. Помогаем по спорным вопросам.",
    },
  ],
  pricingTitle: "Тарифы и услуги",
  pricingNote:
    "Окончательная стоимость зависит от категории товара, веса/объёма и маршрута. Сформируем индивидуальное предложение.",
  pricing: [
    {
      kicker: "Комиссия",
      title: "Агентская услуга от 7%",
      points: [
        "Поиск и проверка продавца в РФ",
        "Выкуп и контроль оплаты",
        "Фото/видео отчёт",
        "Подбор оптимальной доставки в КЗ",
      ],
    },
    {
      kicker: "Проверка и упаковка",
      title: "Осмотр, усиленная защита",
      points: [
        "Проверка по чек-листу",
        "Тестирование работоспособности (если применимо)",
        "Усиленная упаковка/жёсткая тара",
        "Консолидация нескольких покупок",
      ],
    },
    {
      kicker: "Логистика",
      title: "Доставка РФ→КЗ",
      points: [
        "Решения от эконом до экспресс",
        "Ориентировочно 5–12 дней",
        "Ограничения по категориям — по правилам перевозчиков",
        "Поддержка на всём пути",
      ],
    },
  ],
  guaranteeTitle: "Наши гарантии",
  guarantees: [
    {
      title: "Надёжность",
      desc: "Работаем по агентскому договору, предоставляем документы. Всё взаимодействие прозрачно.",
    },
    {
      title: "Безопасная упаковка",
      desc: "Используем прочные коробки и специальные материалы. 99% посылок приходят в идеальном состоянии.",
    },
    {
      title: "Разумные возвраты",
      desc: "Отмена до выкупа без удержаний. После отправки — возврат после фактического возврата на склад и проверки.",
    },
  ],
  faqTitle: "FAQ",
  faq: [
    {
      q: "С какими площадками работаете?",
      a: "Avito, Ozon, Wildberries, Drom и др. Также выкупаем в магазинах и у организаций.",
    },
    {
      q: "Как оплачивать из Казахстана?",
      a: "Принимаем KZT и RUB. Возможны переводы на Kaspi/Halyk, банковский счёт и др.",
    },
    {
      q: "Что с таможней?",
      a: "Перемещение в рамках ЕАЭС; действуют правила перевозчиков и ограничения по категориям.",
    },
    {
      q: "Можно ли вернуть?",
      a: "Да: отмена до выкупа без удержаний. После отправки — возврат после фактического возврата и проверки.",
    },
  ],
  footerAbout:
    "Сопровождаем покупки в РФ и Европе для граждан Казахстана: поиск, проверка, выкуп и доставка.",
  footerLinks: "Разделы",
  footerRights: "Все права защищены.",
  formName: "Ваше имя",
  formPhone: "Телефон (KZ) или Telegram",
  formLink: "Ссылка на товар / описание",
  formDesc: "Комментарии к заказу",
  formSubmit: "Отправить заявку",
  legalName: "ТОО/ИП партнёра (по договору)",
};
