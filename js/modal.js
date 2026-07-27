/* ==========================================================================
   Ana Diwedi Portfolio - Rigorous Executive Case Study Modal Controller
   ========================================================================== */

const caseStudiesData = {
  'ai-agentic-commerce': {
    title: 'AI Agentic Commerce',
    badge: '⭐ FLAGSHIP CASE STUDY',
    category: 'AI & GenAI | Telecom B2B',
    company: 'Verizon',
    role: 'Product Manager',
    timeline: 'Nov 2024 – Dec 2025',

    context: 'Verizon B2B digital platform ecosystem serving enterprise telecom customers evaluating service plans, devices, and digital adoption workflows.',
    
    problem: 'B2B customers experienced friction navigating complex enterprise service options across digital portals, resulting in drop-offs and reliance on manual assistance.',

    myRole: '<strong>Product Manager (Ana Diwedi)</strong><br>' +
      '• <em>Product Discovery & Friction Analysis:</em> Analyzed Medallia qualitative feedback and Quantum Metric session data to identify friction points in B2B customer journeys.<br>' +
      '• <em>Requirements & Backlog Ownership:</em> Authored product requirements, defined user stories, and prioritized backlog items in Jira based on customer value and technical feasibility.<br>' +
      '• <em>Stakeholder & Agile Alignment:</em> Partnered with US stakeholders and cross-functional global engineering/UX teams in two-week agile sprints.<br>' +
      '• <em>UAT & Adoption Strategy:</em> Managed UAT readiness and executed customer adoption strategies nudging users from legacy web portals to the modern app experience.',

    insight: 'Qualitative inputs and Quantum Metric data revealed that enterprise buyers needed clear, contextual guidance when mapping business requirements to technical plan features.',

    hypothesis: '<strong>[HYPOTHESIS]:</strong> Introducing intent-driven AI guidance within customer journeys would reduce selection friction and accelerate self-service digital adoption.',

    strategy: '<strong>[PRODUCT DECISION]:</strong> Formulate an AI Product Roadmap introducing agentic commerce features to simplify intent discovery while enforcing strict, deterministic business rules for plan eligibility.',

    prioritization: '<strong>[PRODUCT DECISION]:</strong> Prioritized initial intent understanding and catalog matching over autonomous multi-turn pricing negotiations to maintain catalog accuracy and data compliance.',

    solution: '<strong>[ARCHITECTURE / CONCEPT]:</strong> An agentic commerce framework that assists B2B users in articulating requirements, matches intent against deterministic catalog rules, and presents clear plan recommendations.',

    execution: 'Partnered with global engineering and UX teams to define MVP scope, track sprint velocity in Jira, and validate product releases through structured UAT phases.',

    metricsLabel: 'Performance & Outcome Metrics',
    impact: [
      '<span style="color:#10b981; font-weight:700;">[VERIFIED OUTCOME]</span> Increased customer engagement by 20% through AI-driven digital adoption initiatives at Verizon.',
      '<span style="color:#10b981; font-weight:700;">[VERIFIED OUTCOME]</span> Successfully drove customer adoption strategy for the new Verizon app, nudging users from legacy web portal to app to increase engagement.',
      '<span style="color:#a855f7; font-weight:700;">[PROPOSED SUCCESS METRIC]</span> Self-service conversion completion rate, intent recognition accuracy, and portal-to-app migration speed.'
    ],

    learnings: 'The key product trade-off in AI commerce is balancing conversational LLM flexibility with deterministic business rules. While LLMs excel at intent parsing, transaction-critical decisions (pricing, eligibility, discounts) must remain strictly deterministic to ensure catalog trust, explainability, and compliance. Providing clear human-in-the-loop escalation paths prevents user frustration when queries exceed AI boundaries.',

    aiDetails: {
      userJourneyDiagram: 'Buyer Intent → Intent Understanding (LLM) → Context → Catalog & Business Rules (Deterministic) → Recommendation → User Decision → Checkout / Handoff',
      llmVsRules: '<strong>LLM Responsibilities:</strong> Natural language intent parsing, query ambiguity resolution, conversational dialog guidance.<br><strong>Deterministic Business Rules:</strong> Product eligibility, contract pricing, discounts, enterprise catalog validation, transaction compliance.',
      architecture: '<strong>[ARCHITECTURE / CONCEPT]:</strong> Intent-parsing NLP layer connected via microservices to deterministic B2B catalog engines.',
      guardrails: '<strong>[PRODUCT DECISION]:</strong> Strict safety guardrails preventing autonomous price modifications or unverified catalog claims.',
      humanInLoop: '<strong>[PRODUCT DECISION]:</strong> Immediate fallback option enabling users to request direct sales or support escalation.',
      aiMetrics: '<strong>[PROPOSED SUCCESS METRIC]:</strong> Intent parsing accuracy, recommendation relevance, query response time, and self-service completion.'
    }
  },

  'corporate-banking': {
    title: 'Corporate Digital Banking',
    badge: '⭐ FLAGSHIP CASE STUDY',
    category: 'Digital Banking',
    company: 'ICICI Bank',
    role: 'Product Manager',
    timeline: 'Jun 2021 – Apr 2024',

    context: 'ICICI Bank’s Corporate & Investment Banking (CIB) platform, providing desktop and mobile banking for commercial, corporate, and institutional clients.',
    problem: 'Corporate treasury managers faced usability bottlenecks, slow dashboard loading, and fragmented navigation across high-volume daily transactions.',
    myRole: '<strong>Product Manager (Ana Diwedi)</strong><br>• <em>Personal Ownership:</em> Led platform product management for CIB Mobile and Web Banking solutions, drove customer discovery, VOC requirements translation, and release readiness.<br>• <em>Broader Team Delivery:</em> Core banking engineering built backend microservices; UI/UX designers refreshed frontend components; QA executed automated test suites.',
    insight: 'Direct Voice of Customer (VOC) interviews revealed corporate users required instant access to pending authorization queues and consolidated cash balances.',
    hypothesis: '<strong>[HYPOTHESIS]:</strong> Re-architecting core navigation around frequent daily tasks and integrating Next Best Action (NBA) widgets would significantly reduce task completion times and boost NPS.',
    strategy: '<strong>[PRODUCT DECISION]:</strong> Unify Web and Mobile CIB experiences into a fast, task-focused digital banking portal with personalized dashboard views.',
    prioritization: '<strong>[PRODUCT DECISION]:</strong> Prioritized high-frequency corporate tasks (account overviews, batch payments, approvals) over non-critical secondary administrative settings.',
    solution: '<strong>[PRODUCT DECISION]:</strong> Redesigned core mobile and web banking dashboards, introduced personalized Next Best Action (NBA) recommendation widgets, and optimized financial reporting interfaces.',
    execution: 'Managed UAT and staging activities, aligned IT and business stakeholders, and led backlog grooming for zero-downtime production releases.',
    metricsLabel: 'Performance & Outcome Metrics',
    impact: [
      '<span style="color:#10b981; font-weight:700;">[VERIFIED OUTCOME]</span> Drove Net Promoter Score (NPS) improvement from 44 to 60 by solving core customer experience friction points.',
      '<span style="color:#10b981; font-weight:700;">[VERIFIED OUTCOME]</span> Led platform product management for Mobile and Web Banking solutions supporting Corporate & Investment Banking (CIB) customers.'
    ],
    learnings: 'Corporate banking users prioritize speed, reliability, and security over aesthetic complexity; streamlining core approval workflows yields massive NPS gains.'
  },

  'auth-approval': {
    title: 'Authentication & Approval Transformation',
    badge: '⭐ FLAGSHIP CASE STUDY',
    category: 'Digital Banking & Transformation',
    company: 'ICICI Bank',
    role: 'Product Manager',
    timeline: 'Jun 2021 – Apr 2024',

    context: 'Corporate & Investment Banking (CIB) authorization matrix at ICICI Bank, where corporate finance leads approve multi-level transactions and batch payments.',
    problem: 'Multi-step authentication protocols and cumbersome multi-screen approval matrices caused transaction delays and user frustration during high-volume processing windows.',
    myRole: '<strong>Product Manager (Ana Diwedi)</strong><br>• <em>Personal Ownership:</em> Owned end-to-end product requirements, authorization journey redesign, Next Best Action personalization, and UAT validation.<br>• <em>Broader Team Delivery:</em> Security engineers implemented encryption & token standards; frontend engineers built mobile approval UI; compliance validated audit trails.',
    insight: 'User session replays and customer feedback showed that approvers frequently experienced session timeouts while attempting to review multi-item batch details.',
    hypothesis: '<strong>[HYPOTHESIS]:</strong> Introducing personalized Next Best Action (NBA) approval prompts and consolidated batch review screens would eliminate authorization bottlenecks.',
    strategy: '<strong>[PRODUCT DECISION]:</strong> Transform security from a friction point into a seamless, intelligent authorization experience optimized for mobile and web.',
    prioritization: '<strong>[PRODUCT DECISION]:</strong> Prioritized bulk-approval and one-click authorization flows for verified users while maintaining strict regulatory banking compliance.',
    solution: '<strong>[PRODUCT DECISION]:</strong> Streamlined approval workflows into a single-view batch authorization dashboard with personalized Next Best Action (NBA) verification prompts.',
    execution: 'Partnered with risk, compliance, IT, and customer-facing teams; validated hypotheses through direct customer pilot testing and staging UAT.',
    metricsLabel: 'Performance & Outcome Metrics',
    impact: [
      '<span style="color:#10b981; font-weight:700;">[VERIFIED OUTCOME]</span> Drove NPS improvement from 44 to 60 on a second separate occasion by solving distinct CX challenges.',
      '<span style="color:#10b981; font-weight:700;">[VERIFIED OUTCOME]</span> Improved personalization via Next Best Action (NBA) strategies, boosting customer satisfaction by 15%.'
    ],
    learnings: 'Enterprise security enhancements succeed best when friction is reduced simultaneously through personalized Next Best Action workflows.'
  },

  'byod-commerce': {
    title: 'BYOD Commerce Experience',
    badge: '📱 Telecom Case Study',
    category: 'Telecom & CX Innovation',
    company: 'Verizon',
    role: 'Product Manager',
    timeline: 'Nov 2024 – Dec 2025',

    context: 'Verizon B2B digital commerce flow where enterprise clients bring their existing mobile devices (Bring Your Own Device) and select commercial service plans.',
    problem: 'Diagnosed a performance drop in flagship mobile service plan activations during BYOD onboarding due to friction in plan selection.',
    myRole: '<strong>Product Manager (Ana Diwedi)</strong><br>• <em>Personal Ownership:</em> Diagnosed performance drop via data analytics, led root cause analysis, defined product solution roadmap, and prioritized backlog items.<br>• <em>Broader Team Delivery:</em> Analytics team set up tracking tags; developers updated device compatibility APIs; QA validated cross-browser performance.',
    insight: 'Adobe Analytics and Quantum Metric funnel data showed users abandoned checkout at the step where plan options were paired with device inputs.',
    hypothesis: '<strong>[HYPOTHESIS]:</strong> Simplifying plan comparison and clarifying eligibility criteria upfront would reverse drop-off trends and lift mobile service take rates.',
    strategy: '<strong>[PRODUCT DECISION]:</strong> Streamline the BYOD onboarding funnel, eliminate technical jargon, and nudge web portal users toward mobile app onboarding.',
    prioritization: '<strong>[PRODUCT DECISION]:</strong> Prioritized fixing the top-funnel plan selection step over secondary UI cosmetic updates.',
    solution: '<strong>[PRODUCT DECISION]:</strong> Intuitive 3-step BYOD wizard with instant eligibility feedback and clear plan tier comparisons.',
    execution: 'Collaborated with US product managers and global engineering teams; defined KPIs in Adobe Analytics and Tableau to track sprint-by-sprint recovery.',
    metricsLabel: 'Performance & Outcome Metrics',
    impact: [
      '<span style="color:#10b981; font-weight:700;">[VERIFIED OUTCOME]</span> Achieved 10% increase in take rate for flagship mobile service plan through data-driven root cause analysis.',
      '<span style="color:#10b981; font-weight:700;">[VERIFIED OUTCOME]</span> Drove customer adoption strategy for the new Verizon app, nudging users from web portal to mobile app.'
    ],
    learnings: 'Data-driven root cause analysis is essential before redesigning any funnel; eliminating technical jargon directly drives conversion.'
  },

  'accessories-upsell': {
    title: 'Accessories Upsell & Compatibility Experience',
    badge: '🛍️ Commerce Case Study',
    category: 'Telecom & Commerce',
    company: 'Verizon',
    role: 'Product Manager',
    timeline: 'Nov 2024 – Dec 2025',

    context: 'Verizon B2B digital procurement platform where enterprise accounts purchase mobile devices and compatible accessories (cases, chargers, adapters) for corporate fleets.',
    problem: 'Ordering friction and uncertainty during bulk checkout regarding accessory compatibility with selected device models.',
    myRole: '<strong>Product Manager (Ana Diwedi)</strong><br>• <em>Personal Ownership:</em> Conceptualized the Next Best Action (NBA) accessory recommendation framework, defined catalog compatibility rules, and led product backlog prioritization.<br>• <em>Broader Team Delivery:</em> Engineering built cart compatibility engine; catalog ops maintained SKU mapping; UX designed contextual recommendation widgets.',
    insight: 'Qualitative inputs and Medallia feedback showed that procurement managers felt uncertain about SKU compatibility when ordering accessories for mixed device fleets.',
    hypothesis: '<strong>[HYPOTHESIS]:</strong> Embedding automated Next Best Action (NBA) compatibility recommendations directly into cart & checkout flows would increase purchase confidence and attach rates.',
    strategy: '<strong>[PRODUCT DECISION]:</strong> Integrate intelligent, context-aware accessory recommendations directly into the purchase flow without disrupting primary device checkout.',
    prioritization: '<strong>[PRODUCT DECISION]:</strong> Prioritized top 20 high-volume accessory categories and essential device models for initial compatibility mapping.',
    solution: '<strong>[PRODUCT DECISION]:</strong> Embedded Next Best Action (NBA) contextual accessory recommendations directly into the device configuration and checkout stages.',
    execution: 'Worked with IT, catalog management, and engineering teams to establish automated SKU compatibility rules and validate checkout flows.',
    metricsLabel: 'Performance & Outcome Metrics',
    impact: [
      '<span style="color:#10b981; font-weight:700;">[VERIFIED OUTCOME]</span> Improved personalization via Next Best Action (NBA) strategies, enhancing overall customer satisfaction.',
      '<span style="color:#a855f7; font-weight:700;">[PROPOSED SUCCESS METRIC]</span> Cart attach rate, reduction in bulk ordering compatibility errors, and digital procurement completion.'
    ],
    learnings: 'Contextual, compatibility-guaranteed recommendations at checkout enhance customer trust and streamline B2B procurement.'
  },

  'vertex-ai-assistant': {
    title: 'Vertex AI Assistant',
    badge: '🤖 AI Strategy Case Study',
    category: 'AI & GenAI Strategy',
    company: 'Verizon',
    role: 'Product Manager',
    timeline: 'Nov 2024 – Dec 2025',

    context: 'Strategic GenAI initiative at Verizon evaluating Google Cloud Vertex AI to streamline B2B platform operations and information retrieval.',
    problem: 'Complex workflows and manual information retrieval required significant operational effort across B2B platform management.',
    myRole: '<strong>Product Manager (Ana Diwedi)</strong><br>• <em>Personal Ownership:</em> Defined the AI Product Roadmap for Gen AI initiatives, identified high-ROI use cases, formulated product requirements, and established feasibility frameworks.<br>• <em>Broader Team Delivery:</em> AI engineers configured Vertex AI search models; architecture team reviewed enterprise data pipelines; scrum teams executed sprint stories.',
    insight: 'Stakeholder feedback indicated high opportunity for GenAI assistance to reduce team story points and streamline development delivery.',
    hypothesis: '<strong>[HYPOTHESIS]:</strong> Providing a GenAI-powered conversational search assistant built on Vertex AI would reduce internal research time and developer story points.',
    strategy: '<strong>[PRODUCT DECISION]:</strong> Build an enterprise AI Product Roadmap prioritizing high-impact internal productivity tools with clear business value and low technical risk.',
    prioritization: '<strong>[PRODUCT DECISION]:</strong> Prioritized technical documentation search over complex automated code generation in the initial phase to ensure high accuracy.',
    solution: '<strong>[PRODUCT DECISION]:</strong> Outlined product requirements for Vertex AI-backed features, establishing clear KPIs, delivery feasibility, and user adoption goals.',
    execution: 'Partnered with global development teams and US stakeholders, managing backlogs in Jira and establishing KPI tracking for development velocity.',
    metricsLabel: 'Performance & Outcome Metrics',
    impact: [
      '<span style="color:#10b981; font-weight:700;">[VERIFIED OUTCOME]</span> Delivered measurable business impact across cost reduction, productivity gains, and reduced story points.',
      '<span style="color:#10b981; font-weight:700;">[VERIFIED OUTCOME]</span> Defined AI Product Roadmap for Gen AI initiatives, aligning cross-functional global teams on strategic priorities.'
    ],
    learnings: 'A structured AI product roadmap ensures GenAI initiatives focus on high-impact business outcomes rather than technology for its own sake.',

    aiDetails: {
      userJourneyDiagram: 'Internal Query → Vertex AI Search Engine → Vector Document Retrieval → Grounded Response Synthesis → User Verification',
      llmVsRules: '<strong>LLM Responsibilities:</strong> Natural language query parsing, semantic document retrieval, text synthesis.<br><strong>Deterministic Business Rules:</strong> Access permission RBAC, grounded source citation verification, official policy document boundaries.',
      architecture: '<strong>[ARCHITECTURE / CONCEPT]:</strong> Grounded RAG architecture utilizing Vertex AI Search connected to enterprise documentation repositories.',
      guardrails: '<strong>[PRODUCT DECISION]:</strong> Grounded response constraints requiring explicit document citations; zero external internet data leakage.',
      humanInLoop: '<strong>[PRODUCT DECISION]:</strong> Feedback thumbs up/down mechanism for continuous prompt and retrieval tuning by platform domain experts.',
      aiMetrics: '<strong>[PROPOSED SUCCESS METRIC]:</strong> Answer relevance, hallucination rate, retrieval accuracy, developer time saved per query.'
    }
  }
};

function openCaseStudyModal(studyId) {
  const data = caseStudiesData[studyId];
  if (!data) return;

  const modalOverlay = document.getElementById('caseStudyModal');
  const modalContent = document.getElementById('modalContentArea');

  let aiSectionHTML = '';
  if (data.aiDetails) {
    aiSectionHTML = `
      <h3 class="modal-section-title" style="color: var(--accent-primary);">🤖 AI & GenAI User Journey & Architecture</h3>
      
      <!-- Visual Journey Diagram Pipeline -->
      <div style="background: var(--bg-card); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-color-hover); margin-bottom: 1.5rem;">
        <div style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--accent-primary); text-transform: uppercase; margin-bottom: 0.5rem; letter-spacing: 0.05em; font-weight: 700;">Visual User Journey Flow</div>
        <div style="font-weight: 700; font-size: 0.92rem; color: var(--text-main); line-height: 1.7; background: var(--bg-surface-elevated); padding: 1rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
          ${data.aiDetails.userJourneyDiagram.split(' → ').map(step => `<span style="display:inline-block; padding: 0.2rem 0.6rem; background: rgba(99,102,241,0.15); border-radius: 4px; margin: 0.2rem;">${step}</span>`).join(' ➔ ')}
        </div>
      </div>

      <div style="background: var(--bg-card); padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); margin-bottom: 1.5rem;">
        <p style="margin-bottom:0.8rem;">${data.aiDetails.llmVsRules}</p>
        <p style="margin-bottom:0.8rem;">${data.aiDetails.architecture}</p>
        <p style="margin-bottom:0.8rem;">${data.aiDetails.guardrails}</p>
        <p style="margin-bottom:0.8rem;">${data.aiDetails.humanInLoop}</p>
        <p style="margin-bottom:0;">${data.aiDetails.aiMetrics}</p>
      </div>
    `;
  }

  modalContent.innerHTML = `
    <div class="modal-header">
      <div class="section-tag">${data.badge} | ${data.category}</div>
      <h2 class="modal-title">${data.title}</h2>
      <p class="modal-subtitle">${data.role} | ${data.company} (${data.timeline})</p>
    </div>

    <div class="modal-body">
      <h3 class="modal-section-title">1. Context</h3>
      <p>${data.context}</p>

      <h3 class="modal-section-title">2. Problem Statement</h3>
      <p>${data.problem}</p>

      <h3 class="modal-section-title">3. My Role & Product Ownership</h3>
      <p>${data.myRole}</p>

      <h3 class="modal-section-title">4. Customer / User Insight</h3>
      <p>${data.insight}</p>

      <h3 class="modal-section-title">5. Product Hypothesis</h3>
      <p>${data.hypothesis}</p>

      <h3 class="modal-section-title">6. Product Strategy</h3>
      <p>${data.strategy}</p>

      <h3 class="modal-section-title">7. Prioritization & Trade-offs</h3>
      <p>${data.prioritization}</p>

      <h3 class="modal-section-title">8. Solution / User Journey</h3>
      <p>${data.solution}</p>

      ${aiSectionHTML}

      <h3 class="modal-section-title">9. Cross-functional Execution</h3>
      <p>${data.execution}</p>

      <h3 class="modal-section-title">10. ${data.metricsLabel}</h3>
      <ul class="timeline-bullets">
        ${data.impact.map(item => `<li>${item}</li>`).join('')}
      </ul>

      <h3 class="modal-section-title">11. Business & Customer Impact</h3>
      <p>Delivered verified business outcomes aligning customer experience improvements with corporate product strategy goals.</p>

      <h3 class="modal-section-title">12. What I Learned & Genuine Product Trade-offs</h3>
      <p>${data.learnings}</p>
    </div>
  `;

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCaseStudyModal() {
  const modalOverlay = document.getElementById('caseStudyModal');
  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

// Event Listeners for Modal Close
document.addEventListener('DOMContentLoaded', () => {
  const modalOverlay = document.getElementById('caseStudyModal');
  const closeBtn = document.getElementById('closeModalBtn');

  if (closeBtn) {
    closeBtn.addEventListener('click', closeCaseStudyModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeCaseStudyModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCaseStudyModal();
    }
  });
});
