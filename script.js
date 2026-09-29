/**
 * GenZ-Blog Blog -- Main Application Logic
 * Editorial/Magazine aesthetic -- fully vanilla JS
 */

// â"€â"€â"€ Post Data â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€
const initialPosts = [
  {
    id: 'post-1',
    title: 'The Typographic Grid: Structure in Editorial Design',
    excerpt: 'An exploration of how classic grid systems inform modern digital typography and create harmony in web layouts that feel alive.',
    content: `
      <p>Typography is the voice of your design. When we structure that voice using a grid, we give it rhythm, pacing, and clarity. The typographic grid is not just a tool for alignment; it is a fundamental framework for thought.</p>
      <h2>The Roots of the Grid</h2>
      <p>Historically, grids were born from the necessity of printing presses. The rigid structure of metal type required a systematic approach to layout. Today, in our flexible digital spaces, that rigidity might seem archaic -- but it's exactly what provides a sense of order amid the chaos of the web.</p>
      <blockquote>A grid is like a bassline. It sets the tempo, and everything else dances to it.</blockquote>
      <p>When designing for the web, we must consider fluid grids that adapt to screen sizes. However, the core principles -- baselines, column widths, and gutters -- remain unchanged. They guide the user's eye and create a predictable, comfortable reading experience.</p>
      <p>By establishing a modular scale for our typography and aligning it to a consistent vertical rhythm, we elevate our designs from mere visual presentation to structured communication. The best editorial sites feel effortless precisely because so much effort went into the system beneath.</p>
    `,
    category: 'Design',
    tags: ['Typography', 'Layout', 'History'],
    author: 'Elena Rostova',
    authorBio: 'Senior Design Editor at GenZ-Blog. Passionate about the intersection of print and digital.',
    authorAvatar: 'https://i.pravatar.cc/150?img=47',
    date: '2026-10-01T10:00:00Z',
    image: 'assets/images/typography_grid.jpg',
    featured: true
  },
  {
    id: 'post-2',
    title: 'Functional Minimalism in UI Design',
    excerpt: "Minimalism isn't about removing elements -- it's about removing friction. A look at highly functional, stark interfaces that perform.",
    content: `
      <p>Minimalism is often misunderstood as an aesthetic choice -- white space for the sake of white space. True functional minimalism is about intent. It's the deliberate removal of the non-essential to elevate the core task.</p>
      <h2>Clarity Over Cleverness</h2>
      <p>When users interact with an interface, they are trying to achieve a goal. Clever animations and decorative elements, while visually pleasing, can often introduce cognitive load. Functional minimalism strips these away, focusing entirely on clarity.</p>
      <p>Consider the humble button. A functional minimalist approach asks: Does it look like a button? Is its action clear? Does its placement make sense? It does not ask: Can we make it bounce? Can we add a particle effect?</p>
      <blockquote>Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away. -- Antoine de Saint-ExupÃ(c)ry</blockquote>
      <p>The most successful products of our era -- from Linear to Notion to Stripe's dashboard -- succeed not because of visual complexity, but because every pixel earns its place on screen.</p>
    `,
    category: 'Design',
    tags: ['UI', 'UX', 'Minimalism'],
    author: 'Marcus Chen',
    authorBio: 'Product designer and UX strategist. Has shipped products used by millions.',
    authorAvatar: 'https://i.pravatar.cc/150?img=12',
    date: '2026-09-28T14:30:00Z',
    image: 'assets/images/minimal_ui.jpg',
    featured: false
  },
  {
    id: 'post-3',
    title: 'The Renaissance of Vanilla JavaScript',
    excerpt: 'As browsers become more powerful and native APIs richer, the case for framework-free JavaScript has never been stronger.',
    content: `
      <p>For years, the default answer to "How should we build this?" was to reach for a framework. React, Vue, Angular -- they solved real problems at a time when browsers were inconsistent and native APIs were limited. But the landscape has fundamentally shifted.</p>
      <h2>The Platform Catches Up</h2>
      <p>Modern browsers now offer incredible APIs out of the box. From Web Components to the Intersection Observer, from CSS custom properties to the View Transitions API -- features that once required massive libraries are now native and performant.</p>
      <blockquote>Vanilla JS is no longer a constraint; it is a deliberate choice for performance, longevity, and simplicity.</blockquote>
      <p>This very blog is built entirely without frameworks. It relies on standard DOM APIs, CSS variables, localStorage, and native browser features. The result? A blazing-fast, zero-dependency experience that loads in under 100ms and will outlast any trend cycle.</p>
      <p>The next time you reach for npm install, ask yourself: does the browser already do this? More often than not, the answer is yes.</p>
    `,
    category: 'Tech',
    tags: ['JavaScript', 'WebDev', 'Performance'],
    author: 'Sarah Jenkins',
    authorBio: 'Frontend engineer and open-source contributor. Advocates for the open web platform.',
    authorAvatar: 'https://i.pravatar.cc/150?img=32',
    date: '2026-09-25T09:15:00Z',
    image: 'assets/images/javascript_dev.jpg',
    featured: false
  },
  {
    id: 'post-4',
    title: 'Embracing the Asymmetric Web',
    excerpt: 'Breaking free from the tyranny of the 12-column grid. How asymmetric layouts create tension, dynamism, and genuine visual interest.',
    content: `
      <p>We've become too comfortable with symmetry. A centered hero image, three columns of features, a centered footer. It's safe. It's predictable. And increasingly, it's boring.</p>
      <p>Asymmetry introduces tension. It forces the eye to move dynamically across the page rather than passively drifting down the center. By intentionally off-centering elements, we create a sense of movement and modernity that symmetric layouts simply cannot achieve.</p>
      <h2>Learning from Print</h2>
      <p>Editorial magazines have known this for decades. Spread a magazine open -- rarely do you find perfect bilateral symmetry. Text wraps around images at unexpected angles. Pull quotes interrupt the flow. White space pools dramatically in unexpected places.</p>
      <p>Bringing this sensibility to web design requires us to think beyond grids and start thinking in terms of visual weight, negative space, and reading rhythm. It's harder. It's also far more rewarding.</p>
    `,
    category: 'Design',
    tags: ['Layout', 'Creativity', 'Editorial'],
    author: 'Elena Rostova',
    authorBio: 'Senior Design Editor at GenZ-Blog. Passionate about the intersection of print and digital.',
    authorAvatar: 'https://i.pravatar.cc/150?img=47',
    date: '2026-09-20T11:00:00Z',
    image: 'assets/images/modern_web_design.jpg',
    featured: false
  },
  {
    id: 'post-5',
    title: 'Deep Work in a Hyperconnected World',
    excerpt: 'Strategies for maintaining focus and producing high-quality output when everything -- and everyone -- is demanding your attention.',
    content: `
      <p>The modern workplace, whether remote or in-office, is a battlefield for our attention. Notifications, emails, Slack messages, and calendar invites constantly fragment our thinking into shallow pools rather than deep wells.</p>
      <p>Cal Newport defines deep work as "professional activities performed in a state of distraction-free concentration that push your cognitive capabilities to their limit." This kind of work creates real value. Shallow work -- answering emails, attending unnecessary meetings -- does not.</p>
      <h2>Defending Your Focus</h2>
      <p>To achieve deep work, we must actively defend our time. This means scheduled blocks of uninterrupted focus, ruthless notification management, and setting clear boundaries with colleagues about your availability. It also means making peace with temporarily being unreachable.</p>
      <blockquote>The ability to perform deep work is becoming increasingly rare at the same time it is becoming increasingly valuable. -- Cal Newport</blockquote>
      <p>Start small. Block one 90-minute focus session tomorrow morning. Close every tab, silence every notification. You'll be astonished at what you can accomplish.</p>
    `,
    category: 'Productivity',
    tags: ['Focus', 'Career', 'Mental Health'],
    author: 'Marcus Chen',
    authorBio: 'Product designer and UX strategist. Has shipped products used by millions.',
    authorAvatar: 'https://i.pravatar.cc/150?img=12',
    date: '2026-09-18T08:00:00Z',
    image: 'assets/images/remote_work_setup.jpg',
    featured: false
  },
  {
    id: 'post-6',
    title: 'CSS Architecture at Scale',
    excerpt: 'Moving beyond messy, unmaintainable stylesheets. Core principles for organizing CSS that grows gracefully with your project.',
    content: `
      <p>Writing CSS is deceptively easy. Maintaining CSS in a large, evolving project is genuinely difficult. Without a clear architecture, stylesheets rapidly become a tangle of overrides, !important declarations, and specificity wars.</p>
      <p>The root problem is that CSS has no inherent organizational structure. Unlike a programming language with modules, namespaces, and strict scoping, CSS is a flat cascade where every rule potentially affects every other rule.</p>
      <h2>Building a System, Not a File</h2>
      <p>The solution is to stop thinking about CSS as a file and start thinking about it as a system. Define your design tokens as CSS custom properties. Establish a clear naming convention (BEM, CUBE CSS, or your own). Create a component library with predictable, encapsulated styles.</p>
      <p>Document your decisions. The CSS you write today will be read by a future version of yourself or a teammate in six months. Clarity in your comments and naming is an act of professional respect.</p>
    `,
    category: 'Tech',
    tags: ['CSS', 'Architecture', 'WebDev'],
    author: 'Sarah Jenkins',
    authorBio: 'Frontend engineer and open-source contributor. Advocates for the open web platform.',
    authorAvatar: 'https://i.pravatar.cc/150?img=32',
    date: '2026-09-15T16:45:00Z',
    image: 'assets/images/artificial_intelligence.jpg',
    featured: false
  }
];

// â"€â"€â"€ App State â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€
const App = {
  posts: [],
  theme: 'light',

  init() {
    this.loadData();
    this.initTheme();
    this.initNav();
    this.initReveal();
    this.initPageTransitions();

    if (document.getElementById('home-posts-container')) this.renderHomePosts();
    if (document.getElementById('blog-posts-container')) this.initBlogPage();
    if (document.getElementById('single-post-container')) this.initSinglePost();
    if (document.getElementById('contact-form')) this.initContactForm();
    if (document.getElementById('admin-form')) this.initAdminForm();
    if (document.getElementById('jitter-stage')) this.initJitterStage();
  },

  loadData() {
    try {
      const stored = localStorage.getItem('GenZ-Blog_posts');
      this.posts = stored ? JSON.parse(stored) : initialPosts;
    } catch (e) {
      this.posts = initialPosts;
    }
    if (!localStorage.getItem('GenZ-Blog_posts')) this.saveData();
  },

  saveData() {
    localStorage.setItem('GenZ-Blog_posts', JSON.stringify(this.posts));
  },

  // â"€â"€ Theme â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€
  initTheme() {
    const saved = localStorage.getItem('GenZ-Blog_theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.theme = saved || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', this.theme);

    document.querySelectorAll('.theme-toggle').forEach(btn => {
      btn.addEventListener('click', () => {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', this.theme);
        localStorage.setItem('GenZ-Blog_theme', this.theme);
      });
    });
  },

  // â"€â"€ Navigation â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€
  initNav() {
    const header = document.querySelector('.site-header');
    if (header) {
      window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
      }, { passive: true });
    }

    const toggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (toggle && navLinks) {
      toggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('mobile-active');
        toggle.setAttribute('aria-expanded', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
      });
      // Close on link click
      navLinks.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
          navLinks.classList.remove('mobile-active');
          toggle.setAttribute('aria-expanded', 'false');
          document.body.style.overflow = '';
        });
      });
    }
  },

  // â"€â"€ Scroll Reveal â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€
  initReveal() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -40px 0px', threshold: 0.05 });

    const observe = () => {
      document.querySelectorAll('.reveal:not(.active)').forEach(el => observer.observe(el));
    };

    // Trigger immediately visible elements after a tiny delay
    setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.classList.add('active');
        } else {
          observer.observe(el);
        }
      });
    }, 50);

    // Expose for dynamic content
    this._observe = observe;
  },

  observeNew() {
    if (this._observe) {
      setTimeout(this._observe, 100);
    }
  },

  // â"€â"€ Helpers â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€
  formatDate(str) {
    return new Date(str).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  },

  readTime(content) {
    const words = content.replace(/<[^>]+>/g, '').trim().split(/\s+/).length;
    return Math.max(1, Math.ceil(words / 200));
  },

  // Generate a colorful SVG placeholder for missing images
  placeholderSVG(title, category) {
    const colors = {
      Design: ['#c2410c', '#f97316'],
      Tech: ['#1d4ed8', '#3b82f6'],
      Productivity: ['#065f46', '#10b981'],
      default: ['#6d28d9', '#a78bfa']
    };
    const [c1, c2] = colors[category] || colors.default;
    const initials = title.split(' ').slice(0, 2).map(w => w[0]).join('');
    return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='500'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' stop-color='${encodeURIComponent(c1)}'/%3E%3Cstop offset='1' stop-color='${encodeURIComponent(c2)}'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='500' fill='url(%23g)'/%3E%3Ctext x='400' y='280' font-family='Georgia,serif' font-size='120' font-weight='bold' fill='rgba(255,255,255,0.15)' text-anchor='middle'%3E${initials}%3C/text%3E%3Ctext x='400' y='230' font-family='Georgia,serif' font-size='18' fill='rgba(255,255,255,0.8)' text-anchor='middle'%3E${encodeURIComponent(category)}%3C/text%3E%3C/svg%3E`;
  },

  imgSrc(post) {
    // If it starts with http, use directly; otherwise treat as local path
    return post.image || this.placeholderSVG(post.title, post.category);
  },

  // â"€â"€ Post Card Template â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€
  createPostCard(post, isFeatured = false, isWide = false) {
    const cls = `post-card reveal ${isFeatured ? 'featured' : isWide ? 'wide' : 'regular'}`;
    const rt = this.readTime(post.content);
    const img = this.imgSrc(post);
    const placeholder = this.placeholderSVG(post.title, post.category);

    return `
      <article class="${cls}">
        <div class="post-image-wrapper">
          <span class="post-category">${post.category}</span>
          <img src="${img}" alt="${post.title}" class="post-image" loading="lazy"
               onerror="this.src='${placeholder}'">
        </div>
        <div class="post-content">
          <div class="post-meta">
            <span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              ${this.formatDate(post.date)}
            </span>
            <span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              ${rt} min read
            </span>
          </div>
          <h3 class="post-title"><a href="post.html?id=${post.id}">${post.title}</a></h3>
          <p class="post-excerpt">${post.excerpt}</p>
        </div>
        <div class="card-author-strip">
          <img src="${post.authorAvatar}" alt="${post.author}" class="card-author-avatar"
               onerror="this.style.display='none'">
          <span class="card-author-name">${post.author}</span>
          <div class="card-read-arrow">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </div>
      </article>`;
  },

  // â"€â"€ Home Page â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€
  renderHomePosts() {
    const container = document.getElementById('home-posts-container');
    const sorted = [...this.posts].sort((a, b) => new Date(b.date) - new Date(a.date));
    const featured = sorted.find(p => p.featured) || sorted[0];
    const rest = sorted.filter(p => p.id !== featured.id).slice(0, 4);

    let html = this.createPostCard(featured, true);
    rest.forEach(post => { html += this.createPostCard(post); });

    setTimeout(() => {
      container.innerHTML = html;
      this.observeNew();
    }, 350);
  },

  // â"€â"€ Blog Listing Page â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€
  initBlogPage() {
    const container = document.getElementById('blog-posts-container');
    const searchInput = document.getElementById('search-input');
    const categoryBtns = document.querySelectorAll('.category-btn');
    let currentCategory = 'All';
    let currentSearch = '';

    const render = () => {
      let posts = [...this.posts].sort((a, b) => new Date(b.date) - new Date(a.date));
      if (currentCategory !== 'All') posts = posts.filter(p => p.category === currentCategory);
      if (currentSearch) {
        const s = currentSearch.toLowerCase();
        posts = posts.filter(p => p.title.toLowerCase().includes(s) || p.excerpt.toLowerCase().includes(s));
      }
      if (posts.length === 0) {
        container.innerHTML = '<p class="no-results reveal">No posts found matching your criteria.</p>';
        this.observeNew();
        return;
      }
      container.innerHTML = posts.map(p => this.createPostCard(p)).join('');
      this.observeNew();
    };

    setTimeout(render, 400);

    if (searchInput) {
      searchInput.addEventListener('input', e => { currentSearch = e.target.value; render(); });
    }

    categoryBtns.forEach(btn => {
      btn.addEventListener('click', e => {
        categoryBtns.forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');
        currentCategory = e.currentTarget.dataset.cat;
        render();
      });
    });
  },

  // â"€â"€ Single Post â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€
  initSinglePost() {
    const container = document.getElementById('single-post-container');
    const id = new URLSearchParams(window.location.search).get('id') || 'post-1';
    const post = this.posts.find(p => p.id === id);

    if (!post) {
      container.innerHTML = '<div class="not-found"><h2>Post Not Found</h2><p>This article may have been moved or deleted.</p><a href="blog.html" class="btn btn-primary">Browse Articles</a></div>';
      return;
    }

    document.title = `${post.title} | GenZ-Blog`;
    const rt = this.readTime(post.content);
    const img = this.imgSrc(post);

    container.innerHTML = `
      <header class="post-header reveal">
        <div class="post-meta-header">
          <a href="blog.html" class="post-category-link">${post.category}</a>
          <span class="separator">·</span>
          <span>${this.formatDate(post.date)}</span>
          <span class="separator">·</span>
          <span>${rt} min read</span>
        </div>
        <h1 class="post-hero-title">${post.title}</h1>
        <p class="post-hero-excerpt">${post.excerpt}</p>
        <div class="post-byline">
          <img src="${post.authorAvatar}" alt="${post.author}" class="byline-avatar"
               onerror="this.style.display='none'">
          <span>By <strong>${post.author}</strong></span>
        </div>
      </header>

      <div class="post-hero-image-wrapper reveal stagger-1">
        <img src="${img}" alt="${post.title}" class="post-hero-image"
             onerror="this.src='${this.placeholderSVG(post.title, post.category)}'">
      </div>

      <div class="post-content-body reveal stagger-2" id="post-body">
        ${post.content}
      </div>

      <footer class="post-footer reveal stagger-3">
        <div class="post-tags">
          ${post.tags.map(t => `<span class="tag">#${t}</span>`).join('')}
        </div>
        <div class="author-box">
          <img src="${post.authorAvatar}" alt="${post.author}" class="author-avatar"
               onerror="this.style.display='none'">
          <div class="author-info">
            <h4>${post.author}</h4>
            <p>${post.authorBio || 'Writer at GenZ-Blog.'}</p>
          </div>
        </div>
      </footer>`;

    // Add drop cap to first paragraph
    const firstP = container.querySelector('.post-content-body p');
    if (firstP) firstP.classList.add('drop-cap');

    this.initReadingProgress();
    this.initToC();
    this.initComments(id);
    this.observeNew();
  },

  // â"€â"€ Table of Contents â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€
  initToC() {
    const tocList  = document.getElementById('toc-list');
    const tocBar   = document.getElementById('toc-bar');
    const tocPct   = document.getElementById('toc-pct');
    if (!tocList) return;

    const headings = document.querySelectorAll('.post-content-body h2');
    if (!headings.length) {
      tocList.innerHTML = '<span style="color:var(--text-3);font-size:var(--t-xs);font-style:italic;">No sections</span>';
      return;
    }

    // Give each heading an ID
    headings.forEach((h, i) => {
      if (!h.id) h.id = `section-${i}`;
    });

    // Build ToC links
    tocList.innerHTML = Array.from(headings).map(h =>
      `<a class="toc-link" href="#${h.id}">${h.textContent}</a>`
    ).join('');

    // Highlight active section + track reading progress via IntersectionObserver
    const links = tocList.querySelectorAll('.toc-link');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          links.forEach(l => l.classList.remove('toc-active'));
          const active = tocList.querySelector(`a[href="#${entry.target.id}"]`);
          if (active) active.classList.add('toc-active');
        }
      });
    }, { rootMargin: '-20% 0px -60% 0px' });
    headings.forEach(h => io.observe(h));

    // Progress bar tied to reading-progress bar
    if (tocBar && tocPct) {
      window.addEventListener('scroll', () => {
        const pct = Math.round(
          document.documentElement.scrollTop /
          (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100
        );
        tocBar.style.width = pct + '%';
        tocPct.textContent = pct + '%';
      }, { passive: true });
    }
  },

  // â"€â"€ Reading Progress â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€
  initReadingProgress() {
    const bar = document.getElementById('reading-progress');
    if (!bar) return;
    window.addEventListener('scroll', () => {
      const scrolled = document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
      bar.style.width = (scrolled * 100) + '%';
    }, { passive: true });
  },

  // â"€â"€ Comments â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€
  initComments(postId) {
    const list = document.getElementById('comments-list');
    const form = document.getElementById('comment-form');
    if (!list || !form) return;
    const key = `GenZ-Blog_comments_${postId}`;

    const render = () => {
      const comments = JSON.parse(localStorage.getItem(key) || '[]');
      if (!comments.length) {
        list.innerHTML = '<p class="no-comments">No comments yet -- be the first to share your thoughts!</p>';
        return;
      }
      list.innerHTML = comments.map(c => `
        <div class="comment">
          <div class="comment-header">
            <span class="comment-author">${c.name}</span>
            <span class="comment-date">${this.formatDate(c.date)}</span>
          </div>
          <p class="comment-body">${c.text}</p>
        </div>`).join('');
    };

    render();

    form.addEventListener('submit', e => {
      e.preventDefault();
      const name = document.getElementById('comment-name').value.trim();
      const text = document.getElementById('comment-text').value.trim();
      if (!name || !text) return;

      const comments = JSON.parse(localStorage.getItem(key) || '[]');
      comments.unshift({ name, text, date: new Date().toISOString() });
      localStorage.setItem(key, JSON.stringify(comments));
      form.reset();
      render();
    });
  },

  // â"€â"€ Contact Form â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€
  initContactForm() {
    const form = document.getElementById('contact-form');
    const success = document.getElementById('form-success');

    const isEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validate = (groupId, condition) => {
      const group = document.getElementById(groupId);
      group.classList.toggle('invalid', !condition);
      return condition;
    };

    form.addEventListener('submit', e => {
      e.preventDefault();
      success.style.display = 'none';

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const msg = document.getElementById('message').value.trim();

      const ok = [
        validate('group-name', name.length >= 2),
        validate('group-email', isEmail(email)),
        validate('group-message', msg.length >= 10)
      ].every(Boolean);

      if (ok) {
        const btn = form.querySelector('button[type="submit"]');
        btn.textContent = 'Sending...';
        btn.disabled = true;
        setTimeout(() => {
          btn.textContent = 'Send Message';
          btn.disabled = false;
          form.reset();
          success.style.display = 'block';
          success.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 1400);
      }
    });
  },

  // â"€â"€ Admin Form â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€
  initAdminForm() {
    const form = document.getElementById('admin-form');
    form.addEventListener('submit', e => {
      e.preventDefault();
      const title = document.getElementById('title').value.trim();
      const excerpt = document.getElementById('excerpt').value.trim();
      const content = document.getElementById('content').value.trim();
      const category = document.getElementById('category').value;
      const image = document.getElementById('image').value.trim() || '';

      if (!title || !excerpt || !content) {
        alert('Please fill in all required fields.');
        return;
      }

      const newPost = {
        id: `post-${Date.now()}`,
        title,
        excerpt,
        content: `<p>${content.replace(/\n\n+/g, '</p><p>').replace(/\n/g, '<br>')}</p>`,
        category,
        tags: [category],
        author: 'Admin',
        authorBio: 'GenZ-Blog contributor.',
        authorAvatar: 'https://i.pravatar.cc/150?img=60',
        date: new Date().toISOString(),
        image,
        featured: false
      };

      this.posts.unshift(newPost);
      this.saveData();

      const btn = form.querySelector('button[type="submit"]');
      btn.textContent = '✓ Post Published!';
      btn.style.background = 'var(--success-color)';
      setTimeout(() => {
        btn.textContent = 'Publish Post';
        btn.style.background = '';
        form.reset();
      }, 2500);
    });
  },

  // â"€â"€ Page Transitions â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€
  initPageTransitions() {
    const overlay = document.createElement('div');
    overlay.className = 'page-transition-overlay';
    document.body.appendChild(overlay);

    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href]');
      if (!link) return;
      const href = link.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('http') ||
          href.startsWith('mailto') || link.target === '_blank') return;

      e.preventDefault();
      overlay.classList.add('fade-in');
      setTimeout(() => { window.location.href = href; }, 320);
    });

    // Fade in on page load
    overlay.classList.add('fade-in');
    requestAnimationFrame(() => {
      requestAnimationFrame(() => overlay.classList.remove('fade-in'));
    });
  },

  // â"€â"€ Jitter Motion Showcase â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€
  initJitterStage() {
    const stage = document.getElementById('jitter-stage');
    const card = document.getElementById('jitter-animated-card');
    const playBtn = document.getElementById('stage-play-toggle');
    const playIcon = document.getElementById('stage-play-icon');
    const track = document.getElementById('stage-track');
    const progress = document.getElementById('stage-progress');
    const playhead = document.getElementById('stage-playhead');
    const timecode = document.getElementById('stage-timecode');
    const presetBtns = document.querySelectorAll('.preset-btn');
    const clapBtn = document.getElementById('jitter-clap-btn');
    const clapCount = document.getElementById('jitter-clap-count');

    if (!stage || !card) return;

    let isPlaying = true;
    let currentPreset = 'spring';
    let animProgress = 0;
    let lastTimestamp = null;
    const totalDuration = 2400; // ms for one loop
    let claps = 1420;

    // Apply animation preset to card
    const applyAnimation = (preset) => {
      card.classList.remove('anim-spring', 'anim-pop', 'anim-bounce', 'anim-slide');
      void card.offsetWidth; // trigger reflow
      card.classList.add(`anim-${preset}`);
    };

    // Preset buttons
    presetBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        presetBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentPreset = btn.dataset.preset;
        applyAnimation(currentPreset);
      });
    });

    // Play / Pause toggle
    const togglePlay = () => {
      isPlaying = !isPlaying;
      if (isPlaying) {
        if (playIcon) playIcon.innerHTML = '<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>';
        lastTimestamp = performance.now();
        requestAnimationFrame(tick);
      } else {
        if (playIcon) playIcon.innerHTML = '<polygon points="5 3 19 12 5 21 5 3"/>';
      }
    };
    if (playBtn) playBtn.addEventListener('click', togglePlay);

    // Initial icon: playing pause symbol
    if (playIcon) {
      playIcon.innerHTML = '<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>';
    }

    // Timeline tick loop
    const tick = (now) => {
      if (!isPlaying) return;
      if (!lastTimestamp) lastTimestamp = now;
      const delta = now - lastTimestamp;
      lastTimestamp = now;

      animProgress += (delta / totalDuration) * 100;
      if (animProgress >= 100) {
        animProgress = 0;
        applyAnimation(currentPreset);
      }

      if (progress) progress.style.width = `${animProgress}%`;
      if (playhead) playhead.style.left = `${animProgress}%`;

      if (timecode) {
        const currentSec = (animProgress / 100) * (totalDuration / 1000);
        timecode.textContent = `00:0${currentSec.toFixed(2)}`;
      }

      requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);

    // Click on timeline scrubber to seek
    if (track) {
      track.addEventListener('click', (e) => {
        const rect = track.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const percent = Math.max(0, Math.min(100, (clickX / rect.width) * 100));
        animProgress = percent;
        if (progress) progress.style.width = `${animProgress}%`;
        if (playhead) playhead.style.left = `${animProgress}%`;
        applyAnimation(currentPreset);
      });
    }

    // Interactive Clap Button with particle burst
    if (clapBtn && clapCount) {
      clapBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        claps++;
        clapCount.textContent = claps.toLocaleString();

        // Bounce heart
        const heart = document.getElementById('jitter-heart-icon');
        if (heart) {
          heart.style.transform = 'scale(1.4)';
          setTimeout(() => { heart.style.transform = 'scale(1)'; }, 200);
        }

        // Particle +1
        const particle = document.createElement('span');
        particle.className = 'jitter-particle';
        particle.textContent = '+1 â¤ï¸';
        const rect = clapBtn.getBoundingClientRect();
        const stageRect = stage.getBoundingClientRect();
        particle.style.left = `${rect.left - stageRect.left + 15}px`;
        particle.style.top = `${rect.top - stageRect.top - 10}px`;
        stage.appendChild(particle);
        setTimeout(() => particle.remove(), 900);
      });
    }

    // Interactive 3D tilt on card hover
    const canvas = stage.querySelector('.stage-canvas');
    if (canvas) {
      canvas.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(800px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
      });
      canvas.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    }
  }

};

// â"€â"€â"€ Boot â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€
document.addEventListener('DOMContentLoaded', () => App.init());


