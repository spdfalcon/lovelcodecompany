"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import styles from "./academy.module.css";

type Level = "مقدماتی" | "متوسط" | "پیشرفته";
type Course = {
  id: string;
  title: string;
  summary: string;
  category: string;
  level: Level;
  instructorId: string;
  duration: number;
  lessons: number;
  price: number;
  rating: number;
  students: number;
  art: string;
  symbol: string;
  featured?: boolean;
};

const instructors = [
  { id: "arash", name: "آرش محمدی", role: "توسعه‌دهنده ارشد فرانت‌اند", initials: "آم", bio: "متخصص طراحی رابط کاربری و توسعه اپلیکیشن‌های وب.", socials: [{label:"گیت‌هاب",url:"https://github.com"},{label:"لینکدین",url:"https://linkedin.com"}] },
  { id: "sara", name: "سارا احمدی", role: "مهندس بک‌اند و زیرساخت", initials: "سا", bio: "علاقه‌مند به معماری نرم‌افزار و آموزش پروژه‌محور.", socials: [{label:"گیت‌هاب",url:"https://github.com"},{label:"لینکدین",url:"https://linkedin.com"}] },
  { id: "navid", name: "نوید رضایی", role: "متخصص DevOps و لینوکس", initials: "نر", bio: "فعال در حوزه اتوماسیون، استقرار و زیرساخت ابری.", socials: [{label:"گیت‌هاب",url:"https://github.com"},{label:"لینکدین",url:"https://linkedin.com"}] },
];

const courses: Course[] = [
  {id:"react",title:"آموزش جامع React و ساخت اپلیکیشن",summary:"از کامپوننت‌ها تا ساخت یک محصول واقعی با معماری تمیز.",category:"فرانت‌اند",level:"متوسط",instructorId:"arash",duration:32,lessons:48,price:2490000,rating:4.9,students:1260,art:"react",symbol:"R",featured:true},
  {id:"linux",title:"لینوکس برای توسعه‌دهندگان",summary:"کار با ترمینال، مدیریت سرویس‌ها و مبانی سرور.",category:"DevOps",level:"مقدماتی",instructorId:"navid",duration:12,lessons:22,price:0,rating:4.8,students:3240,art:"linux",symbol:"$_"},
  {id:"nextjs",title:"ساخت وب‌سایت حرفه‌ای با Next.js",summary:"رندرینگ، مسیریابی، بهینه‌سازی و توسعه پروژه‌محور.",category:"فرانت‌اند",level:"پیشرفته",instructorId:"arash",duration:28,lessons:41,price:1890000,rating:4.9,students:870,art:"next",symbol:"N"},
  {id:"node",title:"توسعه API با Node.js",summary:"طراحی API، اعتبارسنجی، امنیت و ساختار پروژه.",category:"بک‌اند",level:"متوسط",instructorId:"sara",duration:24,lessons:35,price:1590000,rating:4.7,students:960,art:"node",symbol:"{ }"},
  {id:"git",title:"گیت و گیت‌هاب در پروژه‌های واقعی",summary:"از اولین کامیت تا همکاری تیمی و مدیریت برنچ‌ها.",category:"ابزار توسعه",level:"مقدماتی",instructorId:"sara",duration:8,lessons:16,price:0,rating:4.8,students:4120,art:"git",symbol:"⌘"},
  {id:"docker",title:"داکر و استقرار سرویس‌ها",summary:"کانتینرسازی، Compose و آماده‌سازی برای انتشار.",category:"DevOps",level:"متوسط",instructorId:"navid",duration:18,lessons:29,price:1290000,rating:4.8,students:740,art:"docker",symbol:"▣"},
];

const categories = ["همه دوره‌ها", "فرانت‌اند", "بک‌اند", "DevOps", "ابزار توسعه"];
const formatNumber = (n: number) => new Intl.NumberFormat("fa-IR").format(n);
const priceText = (price: number) => price === 0 ? "رایگان" : `${formatNumber(price)} تومان`;

function CourseCard({course}: {course: Course}) {
  const instructor = instructors.find(x=>x.id===course.instructorId)!;
  return <article className={styles.courseCard}>
    <div className={`${styles.art} ${styles[course.art]}`} aria-hidden="true">
      <span className={styles.artGrid}/><span className={styles.artHalo}/>
      <span className={styles.artSymbol}>{course.symbol}</span>
      <span className={styles.artLabel}>LOVELCODE / ACADEMY</span>
    </div>
    <div className={styles.cardBody}>
      <div className={styles.cardTop}><span className={styles.categoryTag}>{course.category}</span><span className={styles.levelTag}>{course.level}</span></div>
      <h3>{course.title}</h3>
      <p className={styles.courseSummary}>{course.summary}</p>
      <div className={styles.cardStats}><span>◷ {formatNumber(course.duration)} ساعت</span><span>▤ {formatNumber(course.lessons)} جلسه</span><span>★ {course.rating}</span></div>
      <div className={styles.cardFooter}><div className={styles.teacherMini}><span className={styles.avatarMini}>{instructor.initials}</span><span>{instructor.name}</span></div><strong className={course.price===0?styles.freePrice:styles.price}>{priceText(course.price)}</strong></div>
    </div>
  </article>;
}

export default function AcademyCatalog() {
  const [search,setSearch]=useState("");
  const [category,setCategory]=useState("همه دوره‌ها");
  const [price,setPrice]=useState("all");
  const [level,setLevel]=useState("all");
  const [sort,setSort]=useState("popular");
  const [teacher,setTeacher]=useState("all");
  const [mobileFilters,setMobileFilters]=useState(false);
  const [selectedTeacher,setSelectedTeacher]=useState<string|null>(null);
  const visible=useMemo(()=>{
    const q=search.trim().toLocaleLowerCase("fa-IR");
    return courses.filter(c=>{
      const instructor=instructors.find(i=>i.id===c.instructorId)!;
      return (!q || [c.title,c.summary,c.category,instructor.name].some(s=>s.toLocaleLowerCase("fa-IR").includes(q))) &&
        (category==="همه دوره‌ها"||c.category===category) &&
        (price==="all"||(price==="free"?c.price===0:c.price>0)) &&
        (level==="all"||c.level===level) &&
        (teacher==="all"||c.instructorId===teacher);
    }).sort((a,b)=>sort==="newest"?courses.indexOf(b)-courses.indexOf(a):sort==="price-low"?a.price-b.price:sort==="price-high"?b.price-a.price:b.students-a.students);
  },[search,category,price,level,sort,teacher]);
  const currentTeacher=instructors.find(i=>i.id===selectedTeacher);
  const reset=()=>{setSearch("");setCategory("همه دوره‌ها");setPrice("all");setLevel("all");setTeacher("all");setSort("popular")};
  return <main dir="rtl" className={styles.academy}>
    <div className={styles.heroWrap}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.eyebrow}><span className={styles.liveDot}/> آکادمی لاول‌کد <span className={styles.eyebrowLine}/><span>یادگیری برای ساختن</span></div>
          <h1>مهارت یاد بگیر.<br/><span>آینده‌ات رو بساز.</span></h1>
          <p>از اولین خط کد تا ساخت پروژه‌های واقعی. مسیر یادگیریت رو با آموزش‌های کاربردی، مدرس‌های متخصص و دوره‌های پروژه‌محور شروع کن.</p>
          <div className={styles.heroActions}><a href="#course-catalog" className={styles.primaryButton}>مشاهده دوره‌ها <span>←</span></a><a href="#instructors" className={styles.secondaryButton}>آشنایی با مدرس‌ها</a></div>
          <div className={styles.heroStats}><div><strong>{formatNumber(courses.length)}+</strong><span>دوره آموزشی</span></div><div><strong>{formatNumber(instructors.length)}+</strong><span>مدرس متخصص</span></div><div><strong>رایگان + پولی</strong><span>برای هر مسیر یادگیری</span></div></div>
        </div>
        <div className={styles.heroVisual} aria-hidden="true"><div className={styles.visualGlow}/><div className={styles.codeWindow}><div className={styles.windowBar}><i/><i/><i/><span>lovelcode / academy</span></div><div className={styles.codeLines}><div><em>01</em><span className={styles.purple}>const</span> developer = {'{'}</div><div><em>02</em>&nbsp;&nbsp;skills: <span className={styles.yellow}>［&quot;Learn&quot;, &quot;Build&quot;］</span>,</div><div><em>03</em>&nbsp;&nbsp;mindset: <span className={styles.green}>&quot;keep growing&quot;</span>,</div><div><em>04</em>&nbsp;&nbsp;future: <span className={styles.yellow}>&quot;unlimited&quot;</span></div><div><em>05</em>{'}'};</div><div><em>06</em>&nbsp;</div><div><em>07</em><span className={styles.purple}>export default</span> developer;</div></div></div><div className={styles.floatingCard}><span>◈</span><div><b>پروژه‌محور یاد بگیر</b><small>از تئوری تا اجرا</small></div></div><div className={styles.visualMark}>LC<span>.</span></div></div>
      </div>
    </div>
    <section className={styles.catalog} id="course-catalog"><div className={styles.sectionIntro}><div><span className={styles.sectionKicker}>مسیر یادگیری از اینجا شروع می‌شه</span><h2>دوره‌های آموزشی <span>لاول‌کد</span></h2><p>دوره مناسب خودت رو پیدا کن و با سرعت خودت پیش برو.</p></div><div className={styles.searchBox}><span aria-hidden="true">⌕</span><input aria-label="جستجوی دوره" placeholder="اسم دوره، موضوع یا مدرس رو جستجو کن..." value={search} onChange={e=>setSearch(e.target.value)}/>{search&&<button aria-label="پاک کردن جستجو" onClick={()=>setSearch("")}>×</button>}</div></div>
      <div className={styles.categoryRow} role="group" aria-label="دسته‌بندی دوره‌ها">{categories.map(c=><button key={c} className={category===c?styles.categoryActive:styles.categoryButton} onClick={()=>setCategory(c)}>{c}</button>)}</div>
      <div className={styles.catalogLayout}><aside className={`${styles.sidebar} ${mobileFilters?styles.sidebarOpen:""}`}><div className={styles.filterHeader}><strong>فیلتر دوره‌ها</strong><button onClick={reset}>حذف فیلترها</button></div><div className={styles.filterGroup}><label htmlFor="academy-price">نوع دوره</label><select id="academy-price" value={price} onChange={e=>setPrice(e.target.value)}><option value="all">همه دوره‌ها</option><option value="free">فقط رایگان</option><option value="paid">فقط پولی</option></select></div><div className={styles.filterGroup}><label htmlFor="academy-level">سطح دوره</label><select id="academy-level" value={level} onChange={e=>setLevel(e.target.value)}><option value="all">همه سطوح</option><option value="مقدماتی">مقدماتی</option><option value="متوسط">متوسط</option><option value="پیشرفته">پیشرفته</option></select></div><div className={styles.filterGroup}><label htmlFor="academy-teacher">مدرس</label><select id="academy-teacher" value={teacher} onChange={e=>setTeacher(e.target.value)}><option value="all">همه مدرس‌ها</option>{instructors.map(i=><option value={i.id} key={i.id}>{i.name}</option>)}</select></div><div className={styles.filterNote}>برای شروع یادگیری، مسیر مناسب سطح و هدف خودت رو انتخاب کن.</div><button className={styles.mobileApply} onClick={()=>setMobileFilters(false)}>نمایش {formatNumber(visible.length)} دوره</button></aside><div className={styles.results}><div className={styles.resultHeader}><div><strong>{formatNumber(visible.length)} دوره</strong><span> برای یادگیری پیدا شد</span></div><div className={styles.resultActions}><button className={styles.mobileFilterButton} onClick={()=>setMobileFilters(v=>!v)} aria-expanded={mobileFilters}>☷ فیلترها</button><label htmlFor="academy-sort">مرتب‌سازی:</label><select id="academy-sort" value={sort} onChange={e=>setSort(e.target.value)}><option value="popular">محبوب‌ترین</option><option value="newest">جدیدترین</option><option value="price-low">ارزان‌ترین</option><option value="price-high">گران‌ترین</option></select></div></div>{visible.length?<div className={styles.courseGrid}>{visible.map(c=><CourseCard key={c.id} course={c}/>)}</div>:<div className={styles.empty}><strong>دوره‌ای با این مشخصات پیدا نشد.</strong><p>فیلترها رو تغییر بده یا دوباره جستجو کن.</p><button onClick={reset}>نمایش همه دوره‌ها</button></div>}</div></div>
    </section>
    <section className={styles.teacherSection} id="instructors"><div className={styles.teacherInner}><div className={styles.sectionIntro}><div><span className={styles.sectionKicker}>از تجربه متخصص‌ها یاد بگیر</span><h2>مدرس‌های <span>لاول‌کد</span></h2><p>با مدرس‌ها آشنا شو و دوره‌های هر کدوم رو ببین.</p></div></div><div className={styles.teacherGrid}>{instructors.map(i=><article key={i.id} className={styles.teacherCard}><div className={styles.teacherAvatar}>{i.initials}</div><div><h3>{i.name}</h3><p>{i.role}</p><span className={styles.teacherCourseCount}>{formatNumber(courses.filter(c=>c.instructorId===i.id).length)} دوره آموزشی</span></div><button onClick={()=>setSelectedTeacher(i.id)}>مشاهده پروفایل و دوره‌ها ←</button></article>)}</div></div></section>
    <section className={styles.bottomCta}><div><span>شروع مسیر حرفه‌ای تو</span><h2>برای ساختن، از یاد گرفتن شروع کن.</h2><p>اولین قدم رو بردار؛ دوره‌های رایگان و تخصصی منتظر تو هستن.</p></div><a href="#course-catalog" className={styles.primaryButton}>کشف دوره‌ها ←</a></section>
    {currentTeacher&&<div className={styles.modalBackdrop} onMouseDown={e=>{if(e.target===e.currentTarget)setSelectedTeacher(null)}}><section className={styles.modal} role="dialog" aria-modal="true" aria-label={`پروفایل ${currentTeacher.name}`}><button className={styles.modalClose} onClick={()=>setSelectedTeacher(null)} aria-label="بستن">×</button><div className={styles.modalProfile}><div className={styles.teacherAvatar}>{currentTeacher.initials}</div><div><h2>{currentTeacher.name}</h2><p>{currentTeacher.role}</p></div></div><p className={styles.modalBio}>{currentTeacher.bio}</p><div className={styles.socials}>{currentTeacher.socials.map(s=><a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer">{s.label} ↗</a>)}</div><h3>دوره‌های مدرس</h3><div className={styles.modalCourses}>{courses.filter(c=>c.instructorId===currentTeacher.id).map(c=><div key={c.id}><span>{c.title}</span><strong>{priceText(c.price)}</strong></div>)}</div><p className={styles.demoNotice}>اطلاعات مدرس‌ها و لینک شبکه‌های اجتماعی فعلاً نمونه هستند.</p></section></div>}
    <div className={styles.demoFooter}>نسخه نمایشی آکادمی — دوره‌ها، مدرس‌ها، قیمت‌ها و آمار فعلاً نمونه‌اند و به دیتابیس متصل نیستند.</div>
  </main>;
}
