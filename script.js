/* ============================================================
   DR. HAKAM SINGH — Orthopaedic Surgeon & Sports Injury Specialist
   Main Application JavaScript (FIXED)
   
   SPA Router, WhatsApp Integration, Premium Booking Form,
   Blog Engine, Animations, Interactions
   ============================================================ */

// ===================== CONFIGURATION =====================
const CONFIG = {
  whatsappNumber: "918847494362",
  whatsappDisplay: "8847494362",
  doctorName: "Dr. Hakam Singh",
  doctorTitle: "Consultant Orthopaedic Surgeon & Sports Injury Specialist",
  clinicName: "[Clinic Name]",
  clinicAddress: "[Full Address]",
  clinicCity: "City, State, PIN",
  clinicPhone: "+91 8847494362",
  clinicEmail: "hakamsingh9@gmail.com",
  instagram: "https://www.instagram.com/drhakamsingh/?hl=en",
  youtube: "https://www.youtube.com/@drhakamsinghortho",
  website: "https://drhakamsingh.com/",
  opdMorning: "10 AM – 2 PM",
  opdEvening: "5 PM – 7 PM",
  opdSunday: "By Appointment Only",
  opdDays: "Monday – Saturday",
};

// ===================== BLOG DATA =====================
const blogs = [
  {
    id: 1,
    title:
      "Arthroscopic Surgery: A Complete Patient Guide to Keyhole Procedures",
    cat: "Arthroscopy",
    date: "March 15, 2025",
    read: "9 min read",
    img: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&h=400&fit=crop",
    body: `<p class="mb-4 text-slate-600 leading-relaxed">Arthroscopic surgery has revolutionized orthopedic treatment over the past few decades. As a surgeon who has dedicated my superspecialisation to arthroscopy and sports medicine at Ortho One Hospital, Coimbatore, I want to share a comprehensive guide to help patients understand what this remarkable technology offers and what to expect if you need an arthroscopic procedure.</p>

<h2 class="text-xl font-bold text-slate-900 mb-3 mt-8">What Exactly Is Arthroscopy?</h2>
<p class="mb-4 text-slate-600 leading-relaxed">Arthroscopy (derived from Greek: arthro = joint, skopein = to look) is a minimally invasive surgical technique where the surgeon operates through tiny keyhole incisions using a specialized camera called an arthroscope. The arthroscope is a thin fiber-optic tube, typically 4-5mm in diameter, equipped with a high-definition camera and light source that projects magnified images of the joint interior onto a monitor.</p>
<p class="mb-4 text-slate-600 leading-relaxed">Through additional small portals (usually 1-2 more incisions), specialized instruments are introduced to perform the surgical procedure — trimming, repairing, or reconstructing tissues within the joint. The entire surgery is watched on a high-definition screen, providing the surgeon with a view that is often better than what is possible with open surgery.</p>

<h2 class="text-xl font-bold text-slate-900 mb-3 mt-8">Which Joints Can Be Treated Arthroscopically?</h2>
<p class="mb-4 text-slate-600 leading-relaxed">While arthroscopy is most commonly performed on the knee and shoulder, it can be used for virtually any joint in the body. The most frequent arthroscopic procedures I perform include: <strong>Knee arthroscopy</strong> for ACL reconstruction, meniscus repair, cartilage restoration, and removal of loose bodies; <strong>Shoulder arthroscopy</strong> for rotator cuff repair, labral repair, subacromial decompression, and frozen shoulder release; <strong>Ankle arthroscopy</strong> for impingement, ligament injuries, and cartilage damage; <strong>Elbow and wrist arthroscopy</strong> for specific conditions in these joints; and <strong>Hip arthroscopy</strong> for labral tears and femoroacetabular impingement.</p>

<h2 class="text-xl font-bold text-slate-900 mb-3 mt-8">Advantages Over Open Surgery</h2>
<p class="mb-4 text-slate-600 leading-relaxed">The benefits of arthroscopy over traditional open surgery are substantial: <strong>Smaller incisions</strong> — typically 2-3 punctures of 5-10mm each instead of a large surgical incision; <strong>Less pain</strong> — smaller wounds mean less post-operative pain and reduced need for pain medications; <strong>Faster recovery</strong> — most arthroscopic procedures are day-care or require only one night's stay; <strong>Minimal scarring</strong> — the tiny incisions heal with barely visible marks; <strong>Lower infection risk</strong> — smaller wounds mean significantly lower risk of surgical site infection; <strong>Better visualization</strong> — the camera provides a magnified, detailed view of the joint interior; and <strong>Less tissue damage</strong> — there's no need to cut through muscles or open the joint capsule widely.</p>

<h2 class="text-xl font-bold text-slate-900 mb-3 mt-8">What Happens on the Day of Surgery?</h2>
<p class="mb-4 text-slate-600 leading-relaxed">Before surgery, you'll be evaluated by the anesthesia team. Most arthroscopic procedures are performed under regional anesthesia (spinal or nerve block) with or without sedation, though general anesthesia is also an option. The limb is cleaned and draped, and a tourniquet may be applied to the thigh for knee arthroscopy to minimize bleeding and improve visualization.</p>
<p class="mb-4 text-slate-600 leading-relaxed">The surgical team fills the joint with sterile saline fluid to create space and improve visualization. The arthroscope is inserted through the first portal, and the surgeon systematically examines all parts of the joint before proceeding with the planned procedure. After completing the repair or reconstruction, the fluid is drained, portals are closed with stitches or steri-strips, and a sterile dressing is applied.</p>

<h2 class="text-xl font-bold text-slate-900 mb-3 mt-8">Recovery After Arthroscopy</h2>
<p class="mb-4 text-slate-600 leading-relaxed">Recovery varies depending on the specific procedure. For simple diagnostic arthroscopy or meniscus trimming, you may return to light activities within a few days and full activities in 2-4 weeks. For ACL reconstruction, the full recovery and return to sport takes 6-9 months. For rotator cuff repair, full recovery takes 6-12 months depending on tear size. Regardless of the procedure, physiotherapy is a critical component of recovery.</p>

<h2 class="text-xl font-bold text-slate-900 mb-3 mt-8">Is Arthroscopy Safe?</h2>
<p class="mb-4 text-slate-600 leading-relaxed">Arthroscopy is one of the safest orthopedic procedures. Serious complications are rare (less than 1-2%) and include infection, blood clots (DVT), nerve or blood vessel injury, and stiffness. The risk of these complications is significantly lower than with open surgery. As with any surgical procedure, I thoroughly discuss the risks, benefits, and alternatives during the pre-operative consultation.</p>`,
  },
  {
    id: 2,
    title:
      "ACL Tear: Complete Guide from Injury to Return to Sport by Dr. Hakam Singh",
    cat: "Sports Injury",
    date: "February 28, 2025",
    read: "11 min read",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
    body: `<p class="mb-4 text-slate-600 leading-relaxed">The Anterior Cruciate Ligament (ACL) is the most commonly injured ligament in the knee, and as a sports injury specialist trained at Ortho One Hospital, Coimbatore — one of India's premier sports medicine centers — ACL reconstruction is one of the procedures I perform most frequently.</p>

<h2 class="text-xl font-bold text-slate-900 mb-3 mt-8">Understanding the ACL</h2>
<p class="mb-4 text-slate-600 leading-relaxed">The ACL is a band of dense connective tissue that runs diagonally through the middle of the knee, connecting the femur to the tibia. Its primary function is to prevent the tibia from sliding too far forward and to provide rotational stability during pivoting movements — critical for football, cricket, badminton, kabaddi, and basketball.</p>

<h2 class="text-xl font-bold text-slate-900 mb-3 mt-8">How Do ACL Injuries Occur?</h2>
<p class="mb-4 text-slate-600 leading-relaxed">About 70% of ACL injuries are non-contact. The typical mechanism involves planting the foot, then pivoting while the knee is in a valgus position. The classic story: "I was running, I changed direction, I heard a loud pop, my knee gave way, and it swelled up within hours."</p>

<h2 class="text-xl font-bold text-slate-900 mb-3 mt-8">Diagnosis: Clinical Examination Is Key</h2>
<p class="mb-4 text-slate-600 leading-relaxed">Three specific tests form the cornerstone: Lachman test (most sensitive), Anterior Drawer test, and Pivot Shift test (most specific). MRI confirms the diagnosis and identifies associated injuries — about 50% of ACL tears have associated meniscus tears.</p>

<h2 class="text-xl font-bold text-slate-900 mb-3 mt-8">The Arthroscopic ACL Reconstruction</h2>
<p class="mb-4 text-slate-600 leading-relaxed">I use the patient's own hamstring tendons (autograft) and follow an anatomic reconstruction technique — placing the graft at the exact footprint of the native ACL for optimal stability. The surgery is performed entirely arthroscopically through small incisions.</p>

<h2 class="text-xl font-bold text-slate-900 mb-3 mt-8">Rehabilitation: The Most Important Part</h2>
<p class="mb-4 text-slate-600 leading-relaxed">ACL rehab spans 9-12 months through phased progression: Phase 1 (0-2 weeks) protected motion, Phase 2 (2-6 weeks) progressive strengthening, Phase 3 (6-12 weeks) full range and jogging, Phase 4 (3-5 months) agility drills, Phase 5 (5-9 months) return to sport. I use objective criteria — not just time — to determine readiness.</p>

<h2 class="text-xl font-bold text-slate-900 mb-3 mt-8">Can We Prevent ACL Injuries?</h2>
<p class="mb-4 text-slate-600 leading-relaxed">Yes! Structured neuromuscular warm-up programs (FIFA 11+, PEP Program) reduce ACL injury rates by 50-70%. These must be performed at every training session consistently to be effective.</p>`,
  },
  {
    id: 3,
    title: "Knee Pain in Young Adults: Causes, Diagnosis, and Modern Treatment",
    cat: "Knee",
    date: "February 10, 2025",
    read: "8 min read",
    img: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&h=400&fit=crop",
    body: `<p class="mb-4 text-slate-600 leading-relaxed">Knee pain is no longer just a problem of the elderly. I see increasing numbers of young adults in their 20s, 30s, and 40s with knee pain significantly affecting their quality of life.</p>

<h2 class="text-xl font-bold text-slate-900 mb-3 mt-8">Common Causes in Young Adults</h2>
<p class="mb-4 text-slate-600 leading-relaxed"><strong>Patellofemoral Pain Syndrome (PFPS):</strong> The most common cause — "runner's knee" causing front-of-knee pain aggravated by stairs and sitting. Usually managed with physiotherapy. <strong>Meniscus Tears:</strong> Can occur from sports or degenerative changes. Repairable tears are fixed arthroscopically; others need partial meniscectomy. <strong>Early Osteoarthritis:</strong> Yes, it can affect young adults too — especially after previous injuries. Joint preservation procedures are the mainstay. <strong>Cartilage Injuries:</strong> Damage to articular cartilage treated with microfracture, MACI, or OATS depending on defect size.</p>

<h2 class="text-xl font-bold text-slate-900 mb-3 mt-8">Treatment Philosophy</h2>
<p class="mb-4 text-slate-600 leading-relaxed">My guiding principle: <em>preserve the native joint for as long as possible</em>. Joint replacement in young patients is a last resort. I exhaust all conservative and joint preservation options first, and educate patients about lifestyle modifications for decades of knee health.</p>`,
  },
  {
    id: 4,
    title:
      "Rotator Cuff Tears: Diagnosis, Treatment Options, and Recovery Guide",
    cat: "Shoulder",
    date: "January 25, 2025",
    read: "9 min read",
    img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop",
    body: `<p class="mb-4 text-slate-600 leading-relaxed">Shoulder pain is the third most common musculoskeletal complaint in my clinic, and rotator cuff pathology is the most frequent cause.</p>

<h2 class="text-xl font-bold text-slate-900 mb-3 mt-8">The Rotator Cuff Explained</h2>
<p class="mb-4 text-slate-600 leading-relaxed">Four muscles — supraspinatus, infraspinatus, teres minor, and subscapularis — form a "cuff" providing dynamic stability and enabling virtually all shoulder movements. The supraspinatus is most commonly torn (about 90% of cases).</p>

<h2 class="text-xl font-bold text-slate-900 mb-3 mt-8">When Is Surgery Needed?</h2>
<p class="mb-4 text-slate-600 leading-relaxed">Not all tears need surgery. I recommend repair for: acute traumatic tears in active patients, symptomatic tears unimproved after 3-6 months of physiotherapy, significant weakness affecting daily function, and patients needing overhead arm use for work or sport.</p>

<h2 class="text-xl font-bold text-slate-900 mb-3 mt-8">Arthroscopic Repair Recovery</h2>
<p class="mb-4 text-slate-600 leading-relaxed">Sling for 4-6 weeks, passive motion only initially, progressive strengthening from 8 weeks, return to overhead activities at 6-9 months. The most common cause of failure: not following post-operative restrictions in the first 6 weeks.</p>`,
  },
  {
    id: 5,
    title:
      "Sports Injury Prevention: Evidence-Based Strategies by a Specialist",
    cat: "Sports Injury",
    date: "January 10, 2025",
    read: "8 min read",
    img: "https://images.unsplash.com/photo-1461896836934-bd45ba29a0c9?w=600&h=400&fit=crop",
    body: `<p class="mb-4 text-slate-600 leading-relaxed">As a sports injury specialist, the most satisfying aspect of my work isn't performing surgery — it's keeping athletes on the field and preventing injuries in the first place.</p>

<h2 class="text-xl font-bold text-slate-900 mb-3 mt-8">Neuromuscular Warm-Up Programs</h2>
<p class="mb-4 text-slate-600 leading-relaxed">The single most evidence-based intervention. FIFA 11+ and PEP Programs reduce ACL injuries by 50-70%, ankle sprains by 40%, and overall lower limb injuries by 30-50%. They take 15-20 minutes and replace the traditional warm-up. The key: <strong>consistency at every session</strong>.</p>

<h2 class="text-xl font-bold text-slate-900 mb-3 mt-8">Strength Training: Your Body's Armor</h2>
<p class="mb-4 text-slate-600 leading-relaxed">Minimum 2-3 sessions per week focusing on quadriceps/hamstrings ratio, core stability, rotator cuff, ankle stabilizers, and gluteal muscles. Even endurance athletes benefit enormously from strength training.</p>

<h2 class="text-xl font-bold text-slate-900 mb-3 mt-8">Load Management</h2>
<p class="mb-4 text-slate-600 leading-relaxed">The 10% rule (increase volume by no more than 10% per week), adequate sleep (7-9 hours for athletes), proper nutrition, rest days, and periodization. Training hard without recovering adequately is the fastest path to my clinic.</p>`,
  },
  {
    id: 6,
    title: "Meniscus Tears: When Can It Be Repaired vs Removed?",
    cat: "Arthroscopy",
    date: "December 20, 2024",
    read: "7 min read",
    img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop",
    body: `<p class="mb-4 text-slate-600 leading-relaxed">The meniscus serves as shock absorber, load distributor, and stabilizer. One of the most important decisions I make is whether a tear can be repaired (preserving the meniscus) or needs partial removal.</p>

<h2 class="text-xl font-bold text-slate-900 mb-3 mt-8">The Blood Supply Factor</h2>
<p class="mb-4 text-slate-600 leading-relaxed">The outer third (red zone) has good blood supply — tears here heal well with repair. The middle third has variable healing. The inner two-thirds (white zone) is avascular — tears here cannot heal even if repaired.</p>

<h2 class="text-xl font-bold text-slate-900 mb-3 mt-8">My Guiding Principle</h2>
<p class="mb-4 text-slate-600 leading-relaxed">Always attempt repair when reasonable, even if recovery is longer. A repaired meniscus provides decades of function; a removed meniscus is gone forever, accelerating arthritis. Partial meniscectomy: 2-4 weeks recovery. Meniscus repair: 3-4 months recovery. The longer recovery is a worthwhile investment.</p>`,
  },
];

// ===================== TESTIMONIAL DATA =====================
const testimonials = [
  {
    name: "Gurpreet Singh",
    initials: "GS",
    color: "med",
    procedure: "ACL Reconstruction",
    age: "Age 24",
    text: "I tore my ACL during a kabaddi match and was devastated. Dr. Hakam Singh performed my ACL reconstruction arthroscopically. 9 months later, I'm back on the court. His expertise in sports medicine is outstanding. He explained everything clearly and the entire team was supportive throughout my recovery.",
  },
  {
    name: "Harpreet Kaur",
    initials: "HK",
    color: "green",
    procedure: "Rotator Cuff Repair",
    age: "Age 42",
    text: "Shoulder pain was ruining my daily life — couldn't sleep, couldn't lift my arm. Dr. Hakam Singh diagnosed a rotator cuff tear and did arthroscopic repair. The surgery was smooth and his team guided my physiotherapy perfectly. After 6 months, my shoulder feels better than it has in years. Highly recommend!",
  },
  {
    name: "Rajesh Kumar",
    initials: "RK",
    color: "purple",
    procedure: "Meniscus Repair",
    age: "Age 31",
    text: "I had a bucket-handle meniscus tear from playing cricket. Dr. Hakam Singh repaired it arthroscopically instead of removing it, which I later learned was the much better option for my long-term knee health. His training at Ortho One really shows in his surgical skills. Excellent outcome.",
  },
  {
    name: "Manpreet Brar",
    initials: "MB",
    color: "amber",
    procedure: "Knee Arthroscopy",
    age: "Age 28",
    text: "After years of knee pain and multiple failed treatments, Dr. Hakam Singh correctly diagnosed my issue through arthroscopy and treated it in the same procedure. His approach is very thorough — he didn't rush into surgery and tried conservative treatment first. When surgery was needed, it changed my life.",
  },
  {
    name: "Simran Dhillon",
    initials: "SD",
    color: "teal",
    procedure: "Sports Injury Rehabilitation",
    age: "Age 22",
    text: "As a state-level badminton player, an ankle injury threatened my career. Dr. Hakam Singh not only treated the injury but also designed a comprehensive prevention program to reduce future risk. His sports medicine knowledge is exceptional. I'm now competing at a higher level than before.",
  },
  {
    name: "Amarjit Singh",
    initials: "AS",
    color: "rose",
    procedure: "Fracture Fixation",
    age: "Age 55",
    text: "I had a complex fracture from a road accident. Dr. Hakam Singh handled the surgery with remarkable confidence and skill. The fixation was perfect, and my bone healed beautifully. He is not just an excellent surgeon but also a very compassionate doctor who genuinely cares about his patients.",
  },
];

// ===================== SPA NAVIGATION =====================
function nav(page) {
  document.querySelectorAll(".page-section").forEach(function (p) {
    p.classList.remove("active");
  });
  var target = document.getElementById("page-" + page);
  if (target) {
    target.classList.add("active");
  } else {
    document.getElementById("page-home").classList.add("active");
  }
  window.location.hash = page;
  window.scrollTo({ top: 0, behavior: "instant" });

  setTimeout(function () {
    // RENDER CONTENT FIRST, THEN init reveals
    renderBlogCards("homeBlogGrid", 3);
    renderBlogCards("blogFullGrid", 0);
    renderTestimonials();
    // Now observe the newly created .reveal elements
    initReveals();
    initCounters();
  }, 100);

  setTimeout(function () {
    if (typeof lucide !== "undefined") lucide.createIcons();
  }, 150);
}

// Handle hash changes
window.addEventListener("hashchange", function () {
  var h = window.location.hash.replace("#", "") || "home";
  document.querySelectorAll(".page-section").forEach(function (p) {
    p.classList.remove("active");
  });
  var t = document.getElementById("page-" + h);
  if (t) t.classList.add("active");
  else document.getElementById("page-home").classList.add("active");
  window.scrollTo({ top: 0, behavior: "instant" });

  setTimeout(function () {
    renderBlogCards("homeBlogGrid", 3);
    renderBlogCards("blogFullGrid", 0);
    renderTestimonials();
    initReveals();
    initCounters();
  }, 100);

  setTimeout(function () {
    if (typeof lucide !== "undefined") lucide.createIcons();
  }, 150);
});

// ===================== NAVIGATION SCROLL EFFECT =====================
function initNav() {
  var nav = document.getElementById("mainNav");
  var backToTop = document.getElementById("backToTop");
  if (!nav) return;

  window.addEventListener("scroll", function () {
    var sy = window.scrollY;
    if (sy > 50) {
      nav.classList.add("nav-scrolled");
    } else {
      nav.classList.remove("nav-scrolled");
    }

    if (backToTop) {
      if (sy > 600) {
        backToTop.classList.add("visible");
      } else {
        backToTop.classList.remove("visible");
      }
    }
  });
  window.dispatchEvent(new Event("scroll"));
}

// ===================== SCROLL REVEAL =====================
function initReveals() {
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.08,
      rootMargin: "0px 0px -30px 0px",
    },
  );

  document.querySelectorAll(".reveal:not(.visible)").forEach(function (el) {
    observer.observe(el);
  });
}

// ===================== COUNTER ANIMATION =====================
function initCounters() {
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          if (el.dataset.done) return;
          el.dataset.done = "1";
          var target = parseInt(el.dataset.target);
          var current = 0;
          var increment = target / 50;
          var suffix = el.dataset.suffix || "";

          var timer = setInterval(function () {
            current += increment;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            el.textContent = Math.floor(current).toLocaleString() + suffix;
          }, 30);
        }
      });
    },
    { threshold: 0.5 },
  );

  document.querySelectorAll(".stat-num").forEach(function (c) {
    observer.observe(c);
  });
}

// ===================== MOBILE MENU =====================
function toggleMobile() {
  var menu = document.getElementById("mobileMenu");
  var overlay = document.getElementById("mobileOverlay");
  if (!menu || !overlay) return;
  menu.classList.toggle("open");
  overlay.classList.toggle("open");
  document.body.classList.toggle("overflow-hidden");
}

// ===================== CLOSE DROPDOWN ON OUTSIDE CLICK =====================
document.addEventListener("click", function (e) {
  if (!e.target.closest(".dropdown")) {
    document.querySelectorAll(".dd-menu").forEach(function (m) {
      m.style.opacity = "0";
      m.style.visibility = "hidden";
      m.style.transform = "translateY(8px)";
    });
  }
});

// ===================== FAQ ACCORDION =====================
function toggleFaq(btn) {
  var answer = btn.nextElementSibling;
  var icon = btn.querySelector(".faq-icon");
  var isOpen = answer.classList.contains("open");

  document.querySelectorAll(".faq-answer").forEach(function (a) {
    a.classList.remove("open");
    a.style.paddingBottom = "0";
  });
  document.querySelectorAll(".faq-icon").forEach(function (i) {
    i.style.transform = "rotate(0deg)";
  });

  if (!isOpen) {
    answer.classList.add("open");
    answer.style.paddingBottom = "0";
    icon.style.transform = "rotate(45deg)";
  }
}

// ===================== BLOG RENDERING =====================
function renderBlogCards(containerId, count) {
  var container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = "";

  var items = count > 0 ? blogs.slice(0, count) : blogs;

  for (var i = 0; i < items.length; i++) {
    var blog = items[i];
    var delayClass = "reveal-d" + ((i % 3) + 1);
    var plainText = blog.body.replace(/<[^>]*>/g, "");
    var excerpt = plainText.substring(0, 120) + "...";

    var cardHTML =
      '<div class="blog-card cursor-pointer reveal ' +
      delayClass +
      '" onclick="openBlog(' +
      blog.id +
      ')">';
    cardHTML +=
      '<div class="blog-img" style="background-image:url(\'' +
      blog.img +
      "')\"></div>";
    cardHTML += '<div class="p-6">';
    cardHTML += '<div class="flex items-center gap-2 mb-3">';
    cardHTML +=
      '<span style="font-size:10px;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;padding:4px 10px;border-radius:9999px;color:var(--primary-700);background:var(--primary-50)">' +
      blog.cat +
      "</span>";
    cardHTML +=
      '<span style="font-size:12px;color:var(--slate-400)">' +
      blog.read +
      "</span>";
    cardHTML += "</div>";
    cardHTML +=
      '<h3 style="font-weight:700;line-height:1.375;margin-bottom:8px;color:var(--slate-900)">' +
      blog.title +
      "</h3>";
    cardHTML +=
      '<p style="font-size:14px;color:var(--slate-500);margin-bottom:12px" class="line-clamp-2">' +
      excerpt +
      "</p>";
    cardHTML +=
      '<p style="font-size:12px;color:var(--slate-400)">' + blog.date + "</p>";
    cardHTML += "</div></div>";

    container.innerHTML += cardHTML;
  }
}

function openBlog(id) {
  var blog = null;
  for (var i = 0; i < blogs.length; i++) {
    if (blogs[i].id === id) {
      blog = blogs[i];
      break;
    }
  }
  if (!blog) return;

  document.getElementById("blogDetailCat").innerHTML =
    '<span class="w-2 h-2 rounded-full" style="background:var(--primary-500)"></span> ' +
    blog.cat;
  document.getElementById("blogDetailTitle").textContent = blog.title;
  document.getElementById("blogDetailMeta").textContent =
    "By " + CONFIG.doctorName + " \u2022 " + blog.date + " \u2022 " + blog.read;
  document.getElementById("blogDetailBody").innerHTML = blog.body;

  var related = blogs
    .filter(function (x) {
      return x.id !== id;
    })
    .slice(0, 2);
  var rc = document.getElementById("blogRelated");
  rc.innerHTML = "";

  for (var j = 0; j < related.length; j++) {
    var r = related[j];
    rc.innerHTML +=
      '<div class="blog-card cursor-pointer" onclick="openBlog(' + r.id + ')">';
    rc.innerHTML +=
      '<div class="blog-img" style="background-image:url(\'' +
      r.img +
      "');height:120px\"></div>";
    rc.innerHTML += '<div class="p-4">';
    rc.innerHTML +=
      '<h4 style="font-weight:600;font-size:14px;line-height:1.375;margin-bottom:4px;color:var(--slate-900)">' +
      r.title +
      "</h4>";
    rc.innerHTML +=
      '<p style="font-size:12px;color:var(--slate-400)">' +
      r.date +
      " \u2022 " +
      r.read +
      "</p>";
    rc.innerHTML += "</div></div>";
  }

  nav("blogdetail");
}

// ===================== TESTIMONIALS RENDERING =====================
function renderTestimonials() {
  var container = document.getElementById("testimonialsGrid");
  if (!container) return;
  container.innerHTML = "";

  var colorMap = {
    med: { bg: "var(--primary-100)", text: "var(--primary-700)" },
    green: { bg: "var(--success-100)", text: "var(--success-700)" },
    purple: { bg: "#f3e8ff", text: "#7c3aed" },
    amber: { bg: "var(--warning-100)", text: "var(--warning-600)" },
    teal: { bg: "var(--accent-100)", text: "var(--accent-700)" },
    rose: { bg: "var(--error-100)", text: "var(--error-600)" },
  };

  for (var i = 0; i < testimonials.length; i++) {
    var t = testimonials[i];
    var delayClass = "reveal-d" + ((i % 3) + 1);
    var colors = colorMap[t.color] || colorMap.med;

    var starsHTML = "";
    for (var s = 0; s < 5; s++) {
      starsHTML +=
        '<svg class="w-4 h-4" style="color:#f59e0b;fill:#f59e0b" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
    }

    var html = '<div class="med-card p-7 reveal ' + delayClass + '">';
    html += '<div class="flex gap-1 mb-4">' + starsHTML + "</div>";
    html +=
      '<p style="font-size:14px;color:var(--slate-600);line-height:1.625;margin-bottom:24px">"' +
      t.text +
      '"</p>';
    html += '<div class="flex items-center gap-3">';
    html +=
      '<div class="w-10 h-10 rounded-full flex items-center justify-center" style="background:' +
      colors.bg +
      '">';
    html +=
      '<span style="color:' +
      colors.text +
      ';font-size:14px;font-weight:700">' +
      t.initials +
      "</span>";
    html += "</div>";
    html += "<div>";
    html +=
      '<p style="font-size:14px;font-weight:600;color:var(--slate-900)">' +
      t.name +
      "</p>";
    html +=
      '<p style="font-size:12px;color:var(--slate-400)">' +
      t.procedure +
      " \u2022 " +
      t.age +
      "</p>";
    html += "</div></div></div>";

    container.innerHTML += html;
  }
}

// ===================== PREMIUM BOOKING MODAL =====================
function openBookingModal() {
  var modal = document.getElementById("bookingModal");
  if (!modal) return;
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
  setTimeout(function () {
    if (typeof lucide !== "undefined") lucide.createIcons();
    initRealTimeValidation();
  }, 50);
}

function closeBookingModal() {
  var modal = document.getElementById("bookingModal");
  if (!modal) return;
  modal.classList.remove("open");
  document.body.style.overflow = "";
}

document.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("modal-overlay") &&
    e.target.classList.contains("open")
  ) {
    closeBookingModal();
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeBookingModal();
  }
});

// ===================== FILE UPLOAD HANDLER =====================
// function handleFileUpload(input) {
//   var zone = input.closest(".upload-zone");
//   var filenameEl = zone.querySelector(".upload-zone-filename");
//   if (input.files && input.files.length > 0) {
//     zone.classList.add("has-file");
//     filenameEl.textContent = "\uD83D\uDCC4 " + input.files[0].name;
//   } else {
//     zone.classList.remove("has-file");
//   }
// }

// ===================== PREMIUM FORM VALIDATION & WHATSAPP SUBMIT =====================
function validatePremiumForm() {
  var isValid = true;

  var requiredFields = [
    { id: "pFullName", name: "Full Name" },
    { id: "pPhone", name: "Phone Number" },
    { id: "pAge", name: "Age" },
    { id: "pDate", name: "Preferred Date" },
    { id: "pTime", name: "Preferred Time" },
    { id: "pConcern", name: "Concern / Condition" },
    { id: "pDescription", name: "Problem Description" },
  ];

  document.querySelectorAll(".premium-form-error-msg").forEach(function (msg) {
    msg.classList.remove("visible");
    msg.textContent = "";
  });
  document
    .querySelectorAll(
      ".premium-form-input, .premium-form-select, .premium-form-textarea",
    )
    .forEach(function (el) {
      el.classList.remove("error");
    });

  for (var i = 0; i < requiredFields.length; i++) {
    var field = requiredFields[i];
    var el = document.getElementById(field.id);
    if (!el) continue;
    var errorEl = el.closest(".premium-form-group")
      ? el
          .closest(".premium-form-group")
          .querySelector(".premium-form-error-msg")
      : null;
    var value = el.value ? el.value.trim() : "";

    if (!value) {
      isValid = false;
      el.classList.add("error");
      if (errorEl) {
        errorEl.textContent = field.name + " is required";
        errorEl.classList.add("visible");
      }
    }
  }

  var genderChecked = document.querySelector('input[name="pGender"]:checked');
  if (!genderChecked) {
    isValid = false;
    var genderGroup = document.getElementById("pGenderM");
    if (genderGroup) {
      var genderError = genderGroup
        .closest(".premium-form-group")
        .querySelector(".premium-form-error-msg");
      if (genderError) {
        genderError.textContent = "Please select gender";
        genderError.classList.add("visible");
      }
    }
  }

  var consultChecked = document.querySelector(
    'input[name="pConsultType"]:checked',
  );
  if (!consultChecked) {
    isValid = false;
    var consultGroup = document.getElementById("pConsultOPD");
    if (consultGroup) {
      var consultError = consultGroup
        .closest(".premium-form-group")
        .querySelector(".premium-form-error-msg");
      if (consultError) {
        consultError.textContent = "Please select consultation type";
        consultError.classList.add("visible");
      }
    }
  }

  var phoneEl = document.getElementById("pPhone");
  if (phoneEl && phoneEl.value.trim()) {
    var phoneRegex = /^[\+]?[0-9\s\-]{10,15}$/;
    if (!phoneRegex.test(phoneEl.value.trim())) {
      isValid = false;
      phoneEl.classList.add("error");
      var phoneErr = phoneEl
        .closest(".premium-form-group")
        .querySelector(".premium-form-error-msg");
      if (phoneErr) {
        phoneErr.textContent = "Enter a valid phone number (10 digits)";
        phoneErr.classList.add("visible");
      }
    }
  }

  var emailEl = document.getElementById("pEmail");
  if (emailEl && emailEl.value.trim()) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailEl.value.trim())) {
      isValid = false;
      emailEl.classList.add("error");
      var emailErr = emailEl
        .closest(".premium-form-group")
        .querySelector(".premium-form-error-msg");
      if (emailErr) {
        emailErr.textContent = "Enter a valid email address";
        emailErr.classList.add("visible");
      }
    }
  }

  var ageEl = document.getElementById("pAge");
  if (ageEl && ageEl.value.trim()) {
    var age = parseInt(ageEl.value);
    if (isNaN(age) || age < 0 || age > 120) {
      isValid = false;
      ageEl.classList.add("error");
      var ageErr = ageEl
        .closest(".premium-form-group")
        .querySelector(".premium-form-error-msg");
      if (ageErr) {
        ageErr.textContent = "Please enter a valid age (0-120)";
        ageErr.classList.add("visible");
      }
    }
  }

  var termsEl = document.getElementById("pTerms");
  if (termsEl && !termsEl.checked) {
    isValid = false;
    var termsGroup = termsEl.closest(".premium-group");
    if (termsGroup) {
      var termsErr = termsGroup.querySelector(".premium-form-error-msg");
      if (termsErr) {
        termsErr.textContent = "Please accept the terms";
        termsErr.classList.add("visible");
      }
    }
  }

  return isValid;
}

function initRealTimeValidation() {
  var phoneEl = document.getElementById("pPhone");
  if (phoneEl) {
    phoneEl.addEventListener("blur", function () {
      var val = this.value.trim();
      var errorEl = this.closest(".premium-form-group").querySelector(
        ".premium-form-error-msg",
      );
      this.classList.remove("error");
      if (errorEl) {
        errorEl.classList.remove("visible");
        errorEl.textContent = "";
      }
      if (val === "") return;
      var phoneRegex = /^[\+]?[0-9\s\-]{10,15}$/;
      if (!phoneRegex.test(val)) {
        this.classList.add("error");
        if (errorEl) {
          errorEl.textContent = "Enter a valid phone number (10-15 digits)";
          errorEl.classList.add("visible");
        }
      }
    });
    phoneEl.addEventListener("input", function () {
      if (this.classList.contains("error")) {
        var val = this.value.trim();
        var phoneRegex = /^[\+]?[0-9\s\-]{10,15}$/;
        var errorEl = this.closest(".premium-form-group").querySelector(
          ".premium-form-error-msg",
        );
        if (phoneRegex.test(val)) {
          this.classList.remove("error");
          if (errorEl) {
            errorEl.classList.remove("visible");
            errorEl.textContent = "";
          }
        }
      }
    });
  }

  var emailEl = document.getElementById("pEmail");
  if (emailEl) {
    emailEl.addEventListener("blur", function () {
      var val = this.value.trim();
      var errorEl = this.closest(".premium-form-group").querySelector(
        ".premium-form-error-msg",
      );
      this.classList.remove("error");
      if (errorEl) {
        errorEl.classList.remove("visible");
        errorEl.textContent = "";
      }
      if (val === "") return;
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(val)) {
        this.classList.add("error");
        if (errorEl) {
          errorEl.textContent = "Enter a valid email address";
          errorEl.classList.add("visible");
        }
      }
    });
    emailEl.addEventListener("input", function () {
      if (this.classList.contains("error")) {
        var val = this.value.trim();
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var errorEl = this.closest(".premium-form-group").querySelector(
          ".premium-form-error-msg",
        );
        if (emailRegex.test(val)) {
          this.classList.remove("error");
          if (errorEl) {
            errorEl.classList.remove("visible");
            errorEl.textContent = "";
          }
        }
      }
    });
  }
}

function submitPremiumForm() {
  if (!validatePremiumForm()) {
    showToast("Please fill in all required fields correctly.", "error");
    return;
  }

  var btn = document.getElementById("premiumSubmitBtn");
  var originalHTML = btn.innerHTML;

  btn.disabled = true;
  btn.innerHTML = '<span class="btn-spinner"></span> Preparing your request...';

  setTimeout(function () {
    var fullName = document.getElementById("pFullName").value.trim();
    var phone = document.getElementById("pPhone").value.trim();
    var email = document.getElementById("pEmail")
      ? document.getElementById("pEmail").value.trim()
      : "Not provided";
    var age = document.getElementById("pAge").value.trim();
    var genderEl = document.querySelector('input[name="pGender"]:checked');
    var gender = genderEl ? genderEl.value : "Not specified";
    var date = document.getElementById("pDate").value;
    var time = document.getElementById("pTime").value;
    var consultEl = document.querySelector(
      'input[name="pConsultType"]:checked',
    );
    var consultType = consultEl ? consultEl.value : "Not specified";
    var concern = document.getElementById("pConcern").value;
    var description = document.getElementById("pDescription").value.trim();
    var prevSurgEl = document.querySelector(
      'input[name="pPrevSurgery"]:checked',
    );
    var prevSurgery = prevSurgEl ? prevSurgEl.value : "Not specified";
    var medsEl = document.querySelector('input[name="pMedicines"]:checked');
    var medicines = medsEl ? medsEl.value : "Not specified";
    var medDetails = document.getElementById("pMedicineDetails")
      ? document.getElementById("pMedicineDetails").value.trim()
      : "N/A";

    // for file upload
    // var fileInput = document.getElementById("pFileUpload");
    // var fileUploaded =
    //   fileInput && fileInput.files.length > 0
    //     ? "Yes (" + fileInput.files[0].name + ")"
    //     : "No";
    var fileUploaded = "N/A";

    var message = "\uD83C\uDFE5 *APPOINTMENT REQUEST*\n";
    message +=
      "\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n\n";
    message += "\uD83D\uDC64 *PATIENT INFORMATION*\n";
    message +=
      "\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n";
    message += "\u2022 Name: " + fullName + "\n";
    message += "\u2022 Phone: " + phone + "\n";
    message += "\u2022 Email: " + email + "\n";
    message += "\u2022 Age: " + age + " years\n";
    message += "\u2022 Gender: " + gender + "\n\n";
    message += "\uD83D\uDCC5 *APPOINTMENT DETAILS*\n";
    message +=
      "\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n";
    message += "\u2022 Date: " + date + "\n";
    message += "\u2022 Time: " + time + "\n";
    message += "\u2022 Type: " + consultType + "\n";
    message += "\u2022 Concern: " + concern + "\n\n";
    message += "\uD83D\uDCDD *PROBLEM DESCRIPTION*\n";
    message +=
      "\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n";
    message += description + "\n\n";
    message += "\u2695\uFE0F *MEDICAL HISTORY*\n";
    message +=
      "\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n";
    message += "\u2022 Previous Surgery: " + prevSurgery + "\n";
    message += "\u2022 Current Medicines: " + medicines + "\n";
    if (medicines === "Yes") {
      message += "\u2022 Medicine Details: " + medDetails + "\n";
    }
    // message += "\u2022 Reports Uploaded: " + fileUploaded + "\n\n";
    message += "\u2022 Reports: Share separately after connecting\n\n";
    message +=
      "\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n";
    message += "_Sent via " + CONFIG.doctorName + " Booking Portal_\n";
    message += "_Website: " + CONFIG.website + "_";

    var encodedMessage = encodeURIComponent(message);
    var whatsappURL =
      "https://wa.me/" + CONFIG.whatsappNumber + "?text=" + encodedMessage;

    window.open(whatsappURL, "_blank");

    document.getElementById("premiumForm").reset();
    // var uploadZone = document.querySelector(".upload-zone");
    // if (uploadZone) uploadZone.classList.remove("has-file");
    var medGroup = document.getElementById("medicineDetailsGroup");
    if (medGroup) medGroup.style.display = "none";

    btn.disabled = false;
    btn.innerHTML = originalHTML;

    setTimeout(function () {
      closeBookingModal();
      showToast(
        "Your appointment request has been sent via WhatsApp! Please complete the message in WhatsApp to confirm.",
        "ok",
      );
    }, 500);
  }, 1200);
}

// ===================== TOAST NOTIFICATIONS =====================
function showToast(message, type) {
  var toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.className = "toast";
  if (type === "ok") {
    toast.classList.add("toast-ok");
  } else if (type === "error") {
    toast.classList.add("toast-error");
  }
  toast.classList.add("show");
  setTimeout(function () {
    toast.classList.remove("show");
  }, 5000);
}

// ===================== CONTACT PAGE FORM =====================
function handleContactForm(e) {
  e.preventDefault();
  var form = e.target;
  var btn = form.querySelector('button[type="submit"]');
  var originalHTML = btn.innerHTML;

  btn.innerHTML =
    '<svg class="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" class="opacity-25"></circle><path d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" fill="currentColor" class="opacity-75"></path></svg> Submitting...';
  btn.disabled = true;

  setTimeout(function () {
    var name = form.querySelector('input[type="text"]').value.trim();
    var phone = form.querySelector('input[type="tel"]').value.trim();
    var email =
      form.querySelector('input[type="email"]').value.trim() || "Not provided";
    var date =
      form.querySelector('input[type="date"]').value || "Not specified";
    var concern = form.querySelector("select").value;
    var description = form.querySelector("textarea").value.trim();

    var message = "\uD83C\uDFE5 *APPOINTMENT REQUEST*\n";
    message +=
      "\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n";
    message += "\uD83D\uDC64 " + name + "\n";
    message += "\uD83D\uDCDE " + phone + "\n";
    message += "\uD83D\uDCE7 " + email + "\n";
    message += "\uD83D\uDCC5 " + date + "\n";
    message += "\uD83C\uDFAF " + concern + "\n";
    message +=
      "\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n";
    message += "\uD83D\uDCDD " + description + "\n";
    message +=
      "\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n";
    message += "_Sent via " + CONFIG.doctorName + " Website_";

    var encodedMessage = encodeURIComponent(message);
    window.open(
      "https://wa.me/" + CONFIG.whatsappNumber + "?text=" + encodedMessage,
      "_blank",
    );

    btn.innerHTML = originalHTML;
    btn.disabled = false;
    form.reset();
    showToast("Your request has been sent via WhatsApp!", "ok");
  }, 1500);
}

// ===================== WHATSAPP DIRECT CHAT =====================
function openWhatsApp() {
  var message = encodeURIComponent(
    "Hello " +
      CONFIG.doctorName +
      ", I would like to inquire about your consultation. Thank you.",
  );
  window.open(
    "https://wa.me/" + CONFIG.whatsappNumber + "?text=" + message,
    "_blank",
  );
}

// ===================== CONDITIONAL FIELD TOGGLE =====================
function toggleMedicineDetails(radio) {
  var detailsField = document.getElementById("medicineDetailsGroup");
  if (!detailsField) return;
  if (radio.value === "Yes") {
    detailsField.style.display = "block";
    detailsField.style.animation = "fadeIn 0.3s ease forwards";
  } else {
    detailsField.style.display = "none";
  }
}

// ===================== VIDEO SCROLLER =====================
function scrollVideos(section, direction) {
  var scrollerId =
    section === "testimonials"
      ? "testimonialsVideoScroller"
      : "homeVideoScroller";
  var scroller = document.getElementById(scrollerId);
  if (!scroller) return;
  var card = scroller.querySelector(".video-card");
  if (!card) return;
  var cardWidth = card.offsetWidth + 20;
  scroller.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
}

function playVideo(wrapper) {
  var video = wrapper.querySelector("video");
  if (!video) return;

  if (video.paused) {
    // Pause all other videos first
    document.querySelectorAll(".video-wrapper").forEach(function (w) {
      var v = w.querySelector("video");
      if (v && v !== video) {
        v.pause();
        w.classList.remove("playing");
      }
    });
    video.play();
    wrapper.classList.add("playing");
  } else {
    video.pause();
    wrapper.classList.remove("playing");
  }

  video.addEventListener(
    "ended",
    function () {
      wrapper.classList.remove("playing");
    },
    { once: true },
  );
}

// ===================== INITIALIZATION =====================
window.addEventListener("DOMContentLoaded", function () {
  // Load correct page from hash
  var hash = window.location.hash.replace("#", "") || "home";
  document.querySelectorAll(".page-section").forEach(function (p) {
    p.classList.remove("active");
  });
  var target = document.getElementById("page-" + hash);
  if (target) target.classList.add("active");
  else document.getElementById("page-home").classList.add("active");

  // Initialize Lucide icons FIRST
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }

  // RENDER CONTENT FIRST, then init reveals
  renderBlogCards("homeBlogGrid", 3);
  renderBlogCards("blogFullGrid", 0);
  renderTestimonials();

  // NOW init interactions (observes the dynamically created .reveal elements)
  initReveals();
  initCounters();
  initNav();
  initRealTimeValidation();

  // Set footer year
  var footYear = document.getElementById("footYear");
  if (footYear) footYear.textContent = new Date().getFullYear();

  // Set min date for date inputs
  var today = new Date().toISOString().split("T")[0];
  document.querySelectorAll('input[type="date"]').forEach(function (input) {
    input.setAttribute("min", today);
  });
});
