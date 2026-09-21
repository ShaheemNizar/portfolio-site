/*
 * Shaheem Nizar — Portfolio Script
 * Sections: Supabase setup -> project data -> gallery modal -> filters
 *           -> scroll reveal -> skills chart -> counters -> nav scroll spy
 *           -> mobile menu -> custom cursor -> contact form -> chat widget
 */
      const SUPABASE_URL = "https://wuzaafvpwobcrhxdccgd.supabase.co";
      const SUPABASE_KEY = "sb_publishable_YQ0p9bTHSdpmwRBpm1SyfA_RFO3DXTD";
      const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

      // ========== PROJECTS WITH LOCAL IMAGES ==========
      // Replace the image paths below with your actual screenshot file names.
      // Place your images inside the "assets" folder (e.g., assets/shoe-hub-1.jpg, assets/shoe-hub-2.jpg, etc.)
      const projects = [
        {
          id: 2,
          category: "web",
          images: [
            "assets/img/Gym-1.png",
            "assets/img/Gym-2.png",
            "assets/img/gym-3.png",
          ],
          title: "IronForge Gym Management System",
          tags: ["HTML", "CSS", "JavaScript", "Supabase"],
          desc: "A modern gym website with contact management functionality.",
          fullDesc:
            "I  an gym developed website that allows users schedule easily. The website is designed with modern UI/UX principles and optimized for performance across all devices.",
          tech: ["HTML", "CSS", "JavaScript", "Supabase"],
          demo: "https://gym-718fa2.tiiny.site/",
          code: "https://github.com/ShaheemNizar/gym-s-services",
        },
        {
          id: 5,
          category: "fullstack",
          images: ["assets/img/chat1.PNG", "assets/img/chat2.PNG", "assets/img/chat3.PNG"],
          title: "NexChat Real-Time Chat App",
          tags: ["HTML", "CSS", "JavaScript", "Node.js", "React", "Supabase"],
          desc: "Real-time messaging app with user auth, private channels, and online status.",
          fullDesc:
            "NexChat is a modern real-time chat web application that allows users to communicate instantly over the internet. Users can create accounts, log in securely, and send messages without refreshing the page. It supports features like private messaging, online/offline status, and real-time message delivery. With a user-friendly interface, NexChat provides a smooth experience for both personal and business communication.",
          tech: ["HTML", "CSS", "JavaScript", "React", "Node.JS", "Supabase"],
          demo: "https://nex-chat-website.vercel.app/",
          code: "https://github.com/Fayadfai/NexChat-Website",
        },
        {
          id: 6,
          category: "web",
          images: [
            "assets/img/study1.png",
            "assets/img/study2.png",
            "assets/img/study3.png",
            "assets/img/study4.png",
            "assets/img/study5.png",
            "assets/img/study6.png",
            "assets/img/study7.png",
            "assets/img/study8.png",
            "assets/img/study9.png",
            "assets/img/study10.png",
            
          ],
          title: "Study Sphere Smart Study Tracking",
          tags: ["HTML", "CSS", "JavaScript", "Node.JS", "Supabase"],
          desc: "Study dashboard with task manager, Pomodoro timer, and progress analytics.",
          fullDesc:
            "StudySphere is a smart study tracking website that helps students manage their learning in an easy and organized way. It allows users to track daily study time, add subjects, set goals, and monitor their progress. With a simple and clean design, StudySphere helps students stay focused, build good study habits, and improve their productivity.",
          tech: ["HTML", "CSS", "JavaScript", "node.JS", "Supabase"],
          demo: "https://progresspro2.netlify.app/",
          code: "https://github.com/ShaheemNizar/ProgressPro",
        },
        {
          id: 7,
          category: "web",
          images: [
            "assets/img/forg1.PNG",
            "assets/img/forg2.PNG",
            "assets/img/forg3.PNG",
            "assets/img/forge4.PNG",
            "assets/img/forg5.PNG",
            "assets/img/forg6.PNG",
            "assets/img/forg7.PNG",
          ],
          title: "Forge Fitness Tracking",
          tags: ["HTML", "CSS", "JavaScript", "Node.JS", "Supabase"],
          desc: "The Forge Fitness tracking website is a web application designed to help users monitor and manage their fitness routines.",
          fullDesc:
            " The Forge Fitness tracking website is a web application designed to help users monitor and manage their fitness routines. It allows users to track workouts, log progress, and set fitness goals with a clean, interactive dashboard. Built with HTML, CSS, JavaScript, and Supabase, it provides real‑time data storage and a responsive experience across devices.",
          tech: ["HTML", "CSS", "JavaScript", "node.JS", "Supabase"],
          demo: "https://forge-website-rust.vercel.app/",
          code: "https://github.com/Fayadfai/Forge-Website",
        },
        {
          id: 8,
          category: "design",
          images: [
            "assets/img/tasty1.PNG",
            "assets/img/tast2.PNG",
            "assets/img/tasty3.PNG",
            "assets/img/tasty4.PNG",
            "assets/img/tasty5.PNG",
            "assets/img/tasty6.PNG",
          ],
          title: "Tasty Bites Resturant Figma UI",
          tags: ["Figma"],
          desc: "Designed a modern and responsive restaurant website UI using Figma to provide users with an intuitive food ordering experience.",
          fullDesc:
            "Designed a modern and responsive restaurant website UI using Figma to provide users with an intuitive food ordering experience. The design includes essential pages such as Home, Menu, Food Details, Cart, Checkout, Login, and Signup, allowing users to easily browse dishes, create accounts, and place orders online. The interface focuses on clean layout, user-friendly navigation, and responsive design to ensure a smooth experience across desktop and mobile devices. This project demonstrates skills in UI/UX design, wireframing, component-based design, and responsive interface planning.",
          tech: ["Figma", "Prototyping"],
          demo: "https://early-start-98690930.figma.site/",
          code: "",
        },
        {
          id: 9,
          category: "web",
          images: [
            "assets/img/grand-1.PNG",
            "assets/img/grand2.PNG",
            "assets/img/grand3.PNG",
            "assets/img/grand4.PNG",
            "assets/img/grand5.PNG",
            "assets/img/grand7.PNG",
          ],
          title: "Grand Maison Resturant Website",
          tags: ["React.js", "TypeScript", "node.js", "Tailwind CSS", "Vite"],
          desc: "A modern restaurant website developed to provide customers with an easy way to view menus, explore food items, place orders, and manage their profiles. The website includes a responsive design, user-friendly interface, cart system, and admin features for managing restaurant operations.",
          fullDesc: `Grand Maison is a modern and responsive restaurant website developed to create a smooth online dining experience for customers. The platform allows users to explore the restaurant, view available food items, place online orders, and manage their accounts easily. The website focuses on providing a clean user interface, fast navigation, and a convenient ordering process.

The system includes customer-side features and an admin management system. Customers can browse the menu, select their favorite dishes, add items to the cart, complete orders, and track their order details. The admin panel helps restaurant staff manage food items, customer information, and order records efficiently.`,
          tech: ["React.js", "TypeScript", "node.js", "Tailwind CSS", "Vite"],
          demo: "https://grand-maison-hotel-resturant-websit.vercel.app/",
          code: "https://github.com/Fayadfai/Grand-Maison-Hotel-Resturant-Websites.git",
        },
      ];

      // Gallery state
      let currentProject = null;
      let currentImageIndex = 0;

      function renderProjects(filter = "all") {
        const grid = document.getElementById("projects-grid");
        const filtered =
          filter === "all"
            ? projects
            : projects.filter((p) => p.category === filter);
        grid.innerHTML = filtered
          .map(
            (p) => `
    <div class="project-card reveal" data-id="${p.id}">
      <div class="project-img">
        <img src="${p.images[0]}" alt="${p.title} screenshot">
        <div class="project-overlay">
          <div class="overlay-btn" onclick="openModal(${
            p.id
          })" title="Quick View" role="button" aria-label="Quick view ${
            p.title
          }"><i class="fas fa-eye"></i></div>
          <a href="${
            p.demo
          }" class="overlay-btn" title="Live Demo" target="_blank" rel="noopener" aria-label="Live demo of ${
            p.title
          }"><i class="fas fa-external-link-alt"></i></a>
          <a href="${
            p.code
          }" class="overlay-btn" title="Source Code" target="_blank" rel="noopener" aria-label="Source code for ${
            p.title
          }"><i class="fab fa-github"></i></a>
        </div>
      </div>
      <div class="project-body">
        <div class="project-tags">${p.tags
          .map((t) => `<span class="project-tag">${t}</span>`)
          .join("")}</div>
        <div class="project-title">${p.title}</div>
        <div class="project-desc">${p.desc}</div>
      </div>
      <div class="project-footer">
        <div class="project-links">
          <a href="${
            p.demo
          }" class="plink" target="_blank" rel="noopener"><i class="fas fa-globe"></i> Live Demo</a>
          <a href="${
            p.code
          }" class="plink" target="_blank" rel="noopener"><i class="fab fa-github"></i> Code</a>
        </div>
        <div class="plink" onclick="openModal(${
          p.id
        })" style="cursor:pointer" role="button" aria-label="Expand ${
          p.title
        } details"><i class="fas fa-expand"></i></div>
      </div>
    </div>
  `,
          )
          .join("");
        observeReveal();
      }

      function openModal(id) {
        const p = projects.find((x) => x.id === id);
        if (!p) return;
        currentProject = p;
        currentImageIndex = 0;
        document.getElementById("modal-title").textContent = p.title;
        updateGalleryImage();
        document.getElementById("modal-desc").textContent = p.fullDesc;
        document.getElementById("modal-tech").innerHTML = p.tech
          .map((t) => `<span>${t}</span>`)
          .join("");
        document.getElementById("modal-demo").href = p.demo;
        document.getElementById("modal-code").href = p.code;
        document.getElementById("modal-overlay").classList.add("open");
        document.body.style.overflow = "hidden";
      }

      function updateGalleryImage() {
        if (!currentProject) return;
        const img = document.getElementById("gallery-img");
        img.src = currentProject.images[currentImageIndex];
        img.alt = `${currentProject.title} screenshot ${currentImageIndex + 1}`;
        const counter = document.getElementById("img-counter");
        counter.textContent = `${currentImageIndex + 1} / ${
          currentProject.images.length
        }`;
      }

      function nextImage() {
        if (!currentProject) return;
        currentImageIndex =
          (currentImageIndex + 1) % currentProject.images.length;
        updateGalleryImage();
      }

      function prevImage() {
        if (!currentProject) return;
        currentImageIndex =
          (currentImageIndex - 1 + currentProject.images.length) %
          currentProject.images.length;
        updateGalleryImage();
      }

      function closeModal() {
        document.getElementById("modal-overlay").classList.remove("open");
        document.body.style.overflow = "";
        currentProject = null;
      }

      // Bind gallery buttons
      document.getElementById("prev-img").addEventListener("click", prevImage);
      document.getElementById("next-img").addEventListener("click", nextImage);
      document.getElementById("modal-close").onclick = closeModal;
      document
        .getElementById("modal-overlay")
        .addEventListener("click", (e) => {
          if (e.target === document.getElementById("modal-overlay"))
            closeModal();
        });
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeModal();
        if (e.key === "ArrowLeft" && currentProject) prevImage();
        if (e.key === "ArrowRight" && currentProject) nextImage();
      });

      document.querySelectorAll(".filter-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          document
            .querySelectorAll(".filter-btn")
            .forEach((b) => b.classList.remove("active"));
          btn.classList.add("active");
          renderProjects(btn.dataset.filter);
        });
      });

      function observeReveal() {
        const obs = new IntersectionObserver(
          (entries) => {
            entries.forEach((el) => {
              if (el.isIntersecting) {
                el.target.classList.add("visible");
                obs.unobserve(el.target);
              }
            });
          },
          { threshold: 0.1 },
        );
        document
          .querySelectorAll(".reveal:not(.visible)")
          .forEach((el) => obs.observe(el));
      }
      observeReveal();

      const barObs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target
                .querySelectorAll(".skill-bar-fill")
                .forEach((bar) => {
                  bar.style.width = bar.dataset.width + "%";
                });
              barObs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.3 },
      );
      document
        .querySelectorAll(".skill-bars")
        .forEach((el) => barObs.observe(el));

      new Chart(document.getElementById("skillChart"), {
        type: "doughnut",
        data: {
          labels: [
            "HTML/CSS/JS",
            "Node.js",
            "Flutter",
            "Design",
            "Frontend",
            "Other",
          ],
          datasets: [
            {
              data: [35, 22, 28, 29, 30, 6],
              backgroundColor: [
                "#ff3b3b",
                "#ffffff",
                "#ff7a7a",
                "#c40000",
                "#ffb3b3",
                "#3a1414",
              ],
              borderWidth: 0,
              hoverOffset: 10,
            },
          ],
        },
        options: {
          cutout: "72%",
          responsive: true,
          plugins: {
            legend: {
              position: "bottom",
              labels: { color: "#8888aa", font: { size: 11 } },
              boxWidth: 10,
            },
            tooltip: {
              callbacks: { label: (ctx) => ` ${ctx.label}: ${ctx.parsed}%` },
            },
          },
        },
      });

      function animateCounter(el, target, duration = 1800) {
        let start = null;
        const step = (ts) => {
          if (!start) start = ts;
          const progress = Math.min((ts - start) / duration, 1);
          el.textContent = Math.floor(progress * target);
          if (progress < 1) requestAnimationFrame(step);
          else el.textContent = target;
        };
        requestAnimationFrame(step);
      }
      const counterObs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target
                .querySelectorAll(".counter")
                .forEach((el) =>
                  animateCounter(el, parseInt(el.dataset.target)),
                );
              entry.target
                .querySelectorAll(".stat-num")
                .forEach((el) =>
                  animateCounter(el, parseInt(el.dataset.count)),
                );
              counterObs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 },
      );
      document
        .querySelectorAll(".counters-grid, .hero-stats")
        .forEach((el) => counterObs.observe(el));

      const navbar = document.getElementById("navbar");
      const sections = document.querySelectorAll("section[id]");
      const navLinks = document.querySelectorAll(".nav-links a");
      window.addEventListener("scroll", () => {
        const sy = window.scrollY;
        navbar.classList.toggle("scrolled", sy > 60);
        const total =
          document.documentElement.scrollHeight - window.innerHeight;
        document.getElementById("progress-bar").style.width =
          (sy / total) * 100 + "%";
        document
          .getElementById("back-top")
          .classList.toggle("visible", sy > 400);
        let current = "";
        sections.forEach((s) => {
          if (sy >= s.offsetTop - 120) current = s.id;
        });
        navLinks.forEach((a) => {
          a.classList.toggle(
            "active",
            a.getAttribute("href") === "#" + current,
          );
        });
      });

      document.getElementById("hamburger").onclick = () =>
        document.getElementById("mobile-menu").classList.add("open");
      document.getElementById("mobile-close").onclick = () =>
        document.getElementById("mobile-menu").classList.remove("open");
      function closeMobile() {
        document.getElementById("mobile-menu").classList.remove("open");
      }

      const cursor = document.getElementById("cursor"),
        ring = document.getElementById("cursor-ring");
      let mx = 0,
        my = 0,
        rx = 0,
        ry = 0;
      document.addEventListener("mousemove", (e) => {
        mx = e.clientX;
        my = e.clientY;
        cursor.style.left = mx + "px";
        cursor.style.top = my + "px";
      });
      function animRing() {
        rx += (mx - rx) * 0.12;
        ry += (my - ry) * 0.12;
        ring.style.left = rx + "px";
        ring.style.top = ry + "px";
        requestAnimationFrame(animRing);
      }
      animRing();
      document
        .querySelectorAll(
          "a, button, .project-card, .service-card, .filter-btn, .overlay-btn",
        )
        .forEach((el) => {
          el.addEventListener("mouseenter", () => {
            cursor.style.width = "16px";
            cursor.style.height = "16px";
            cursor.style.background = "var(--accent2)";
            ring.style.width = "52px";
            ring.style.height = "52px";
          });
          el.addEventListener("mouseleave", () => {
            cursor.style.width = "10px";
            cursor.style.height = "10px";
            cursor.style.background = "var(--accent)";
            ring.style.width = "36px";
            ring.style.height = "36px";
          });
        });

      document
        .getElementById("contact-form")
        .addEventListener("submit", async function (e) {
          e.preventDefault();
          // Honeypot check: if this hidden field is filled, it's almost certainly a bot.
          if (document.getElementById("f-company").value.trim() !== "") {
            return;
          }
          const name = document.getElementById("f-name").value.trim();
          const email = document.getElementById("f-email").value.trim();
          const subject = document.getElementById("f-subject").value.trim();
          const message = document.getElementById("f-message").value.trim();
          let valid = true;
          const clearErrors = () =>
            ["name", "email", "subject", "message"].forEach((f) => {
              document.getElementById("f-" + f).classList.remove("error");
              document.getElementById("err-" + f).textContent = "";
            });
          clearErrors();
          if (!name) {
            valid = false;
            document.getElementById("err-name").textContent = "Name required.";
            document.getElementById("f-name").classList.add("error");
          }
          if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            valid = false;
            document.getElementById("err-email").textContent =
              "Valid email required.";
            document.getElementById("f-email").classList.add("error");
          }
          if (!subject) {
            valid = false;
            document.getElementById("err-subject").textContent =
              "Subject required.";
            document.getElementById("f-subject").classList.add("error");
          }
          if (!message || message.length < 10) {
            valid = false;
            document.getElementById("err-message").textContent =
              "Message must be at least 10 characters.";
            document.getElementById("f-message").classList.add("error");
          }
          if (!valid) return;
          const btn = document.getElementById("btn-submit");
          btn.disabled = true;
          btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending…';
          const { error } = await supabaseClient
            .from("messages")
            .insert([{ name, email, subject, message }]);
          if (error) {
            console.error(error);
            alert("Error sending message. Try again later.");
            btn.disabled = false;
            btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
            return;
          }
          document.getElementById("form-success").classList.add("show");
          document.getElementById("contact-form").reset();
          btn.disabled = false;
          btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
          setTimeout(
            () =>
              document.getElementById("form-success").classList.remove("show"),
            6000,
          );
        });

      const chatResponses = {
        default: "I'm not sure, but feel free to email shaheemnizar@gmail.com",
        skills:
          "shaheem is proficient in HTML, CSS, React, Node.js, Flutter, C#, MySQL, Supabase with 6+ months experience!",
        price:
          "Project pricing varies. Contact shaheem with your requirements for a custom quote!",
        experience: "shaheem has 6+ months of professional experience.",
        contact:
          "Reach shaheem at shaheemnizar@gmail.com or via the contact form.",
        hello: "Hello! 👋 I'm shaheem's AI assistant. How can I help?",
        thanks: "You're welcome! 😊",
      };
      function getBotResponse(input) {
        const msg = input.toLowerCase();
        if (/hello|hi|hey/.test(msg)) return chatResponses.hello;
        if (/skill|tech|stack/.test(msg)) return chatResponses.skills;
        if (/project|work/.test(msg)) return chatResponses.projects;
        if (/hire|job|freelance/.test(msg)) return chatResponses.hire;
        if (/price|cost/.test(msg)) return chatResponses.price;
        if (/experience/.test(msg)) return chatResponses.experience;
        if (/contact|email/.test(msg)) return chatResponses.contact;
        if (/thank/.test(msg)) return chatResponses.thanks;
        return chatResponses.default;
      }
      function appendMsg(text, who) {
        const box = document.getElementById("chat-messages");
        const div = document.createElement("div");
        div.className = "chat-msg " + who;
        div.textContent = text;
        box.appendChild(div);
        box.scrollTop = box.scrollHeight;
      }
      function showTyping() {
        const box = document.getElementById("chat-messages");
        const div = document.createElement("div");
        div.className = "chat-msg bot typing-indicator";
        div.innerHTML =
          '<div class="typing"><span></span><span></span><span></span></div>';
        box.appendChild(div);
        box.scrollTop = box.scrollHeight;
        return div;
      }
      function sendChat() {
        const input = document.getElementById("chat-input");
        const val = input.value.trim();
        if (!val) return;
        appendMsg(val, "user");
        input.value = "";
        const typing = showTyping();
        setTimeout(() => {
          typing.remove();
          appendMsg(getBotResponse(val), "bot");
        }, 900);
      }
      document.getElementById("chat-send").onclick = sendChat;
      document.getElementById("chat-input").addEventListener("keydown", (e) => {
        if (e.key === "Enter") sendChat();
      });
      document.getElementById("chat-toggle").onclick = () =>
        document.getElementById("chat-bubble").classList.toggle("open");
      document.getElementById("chat-close").onclick = () =>
        document.getElementById("chat-bubble").classList.remove("open");
      renderProjects();
