export default function App() {
  return (
    <>
      <div className="bg-grid" aria-hidden="true"></div>
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark">Q</span>
          <div>
            <p className="brand-name">Quilr</p>
            <p className="brand-sub">Docs + Demos</p>
          </div>
        </div>
        <nav className="topnav">
          <a href="#overview">Overview</a>
          <a href="#guides">Guides</a>
          <a href="#videos">Videos</a>
          <a href="#reference">Reference</a>
          <a href="#support">Support</a>
        </nav>
        <div className="top-actions">
          <button className="btn btn-ghost" type="button">
            Contact
          </button>
          <button className="btn btn-primary" type="button">
            Launch Console
          </button>
        </div>
      </header>

      <main>
        <section className="hero reveal" id="overview" style={{ '--delay': '0.05s' }}>
          <div className="hero-copy">
            <p className="eyebrow">Quilr Product Help</p>
            <h1>
              Build, ship, and scale with clarity.
              <span>Every workflow, documented.</span>
            </h1>
            <p className="lead">
              Explore deep product guides, step-by-step playbooks, and cinematic
              demos that show how Quilr teams design, automate, and deliver
              premium client experiences.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary" type="button">
                Start the Quickstart
              </button>
              <button className="btn btn-outline" type="button">
                Watch the Tour
              </button>
            </div>
            <div className="hero-meta">
              <div className="chip">Updated weekly</div>
              <div className="chip">API v3.4</div>
              <div className="chip">99.99% uptime</div>
            </div>
          </div>
          <div className="hero-panel">
            <div className="panel-card">
              <div className="panel-head">
                <h3>Quickstart</h3>
                <span className="panel-pill">12 min</span>
              </div>
              <ol className="panel-list">
                <li>Create your Quilr workspace.</li>
                <li>Connect billing + identity.</li>
                <li>Ship a client-ready flow.</li>
              </ol>
              <pre className="code-block">
                <code>{`npm install @quilr/sdk
quilr init --team "Studio"
quilr deploy --flow "Client Onboarding"`}</code>
              </pre>
              <button className="btn btn-ghost btn-wide" type="button">
                Continue setup
              </button>
            </div>
            <div className="panel-metrics">
              <div className="metric-card">
                <p className="metric-value">42k</p>
                <p className="metric-label">Teams onboarded</p>
              </div>
              <div className="metric-card accent">
                <p className="metric-value">6 hrs</p>
                <p className="metric-label">Avg. time saved / wk</p>
              </div>
              <div className="metric-card">
                <p className="metric-value">128</p>
                <p className="metric-label">Live templates</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section reveal" id="guides" style={{ '--delay': '0.15s' }}>
          <div className="section-head">
            <div>
              <p className="eyebrow">Guides</p>
              <h2>Playbooks built for real workflows</h2>
            </div>
            <p>
              From new client intake to quarterly renewals, every guide walks you
              through design, automation, and handoff without the guesswork.
            </p>
          </div>
          <div className="card-grid">
            <article className="doc-card">
              <div className="doc-tag">Onboarding</div>
              <h3>Client intake in 3 stages</h3>
              <p>
                Map the intake funnel, collect approvals, and trigger automated
                follow-ups with guardrails.
              </p>
              <div className="doc-meta">
                <span>7 steps</span>
                <span>Templates included</span>
              </div>
            </article>
            <article className="doc-card highlight">
              <div className="doc-tag">Automation</div>
              <h3>Reusable flows for fast delivery</h3>
              <p>
                Turn your best processes into modular flows with dynamic
                milestones, roles, and AI summaries.
              </p>
              <div className="doc-meta">
                <span>Flow builder</span>
                <span>Automation rules</span>
              </div>
            </article>
            <article className="doc-card">
              <div className="doc-tag">Finance</div>
              <h3>Billing + contracts in sync</h3>
              <p>
                Tie invoices to project milestones, collect signatures, and keep
                stakeholders aligned.
              </p>
              <div className="doc-meta">
                <span>Legal ready</span>
                <span>Audit trail</span>
              </div>
            </article>
            <article className="doc-card">
              <div className="doc-tag">Ops</div>
              <h3>Resource planning dashboard</h3>
              <p>
                Forecast workloads, balance capacity, and surface risks before
                delivery slips.
              </p>
              <div className="doc-meta">
                <span>Analytics</span>
                <span>Team insights</span>
              </div>
            </article>
            <article className="doc-card">
              <div className="doc-tag">Security</div>
              <h3>Enterprise governance toolkit</h3>
              <p>
                Configure access policies, approvals, and custom retention rules
                for sensitive clients.
              </p>
              <div className="doc-meta">
                <span>SSO</span>
                <span>Audit logs</span>
              </div>
            </article>
            <article className="doc-card">
              <div className="doc-tag">Insight</div>
              <h3>Weekly performance scorecards</h3>
              <p>
                Track key metrics, usage health, and delivery velocity with
                automated alerts.
              </p>
              <div className="doc-meta">
                <span>KPIs</span>
                <span>Export ready</span>
              </div>
            </article>
          </div>
        </section>

        <section className="section reveal" id="videos" style={{ '--delay': '0.25s' }}>
          <div className="section-head">
            <div>
              <p className="eyebrow">Demo Library</p>
              <h2>Every feature, demonstrated</h2>
            </div>
            <p>
              These walkthroughs show exactly how teams move from kickoff to
              completion with Quilr.
            </p>
          </div>
          <div className="video-grid">
            <article className="video-card">
              <div className="video-thumb" style={{ '--accent': '#38f5c4' }}>
                <span className="play">Play</span>
                <span className="duration">6:32</span>
                <span className="video-label">Launch tour</span>
              </div>
              <div className="video-body">
                <h3>Product tour: project command center</h3>
                <p>
                  Meet the new dashboards, real-time task routing, and
                  stakeholder visibility.
                </p>
                <div className="video-meta">
                  <span>Updated 2 days ago</span>
                  <span>HD</span>
                </div>
              </div>
            </article>
            <article className="video-card">
              <div className="video-thumb" style={{ '--accent': '#ffd166' }}>
                <span className="play">Play</span>
                <span className="duration">9:08</span>
                <span className="video-label">Automations</span>
              </div>
              <div className="video-body">
                <h3>Build a multi-stage approval flow</h3>
                <p>
                  Orchestrate tasks, role-based approvals, and AI summaries with
                  zero code.
                </p>
                <div className="video-meta">
                  <span>Template included</span>
                  <span>4 chapters</span>
                </div>
              </div>
            </article>
            <article className="video-card">
              <div className="video-thumb" style={{ '--accent': '#ff7a8a' }}>
                <span className="play">Play</span>
                <span className="duration">12:41</span>
                <span className="video-label">Client hub</span>
              </div>
              <div className="video-body">
                <h3>Client-facing portal setup</h3>
                <p>
                  Configure white-label portals, branded updates, and a unified
                  feedback loop.
                </p>
                <div className="video-meta">
                  <span>Advanced</span>
                  <span>Branding kit</span>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="section reveal" id="reference" style={{ '--delay': '0.35s' }}>
          <div className="section-head">
            <div>
              <p className="eyebrow">Reference</p>
              <h2>API and integration toolbox</h2>
            </div>
            <p>
              Plug Quilr into your stack with comprehensive endpoints, webhooks,
              and SDKs.
            </p>
          </div>
          <div className="reference-grid">
            <div className="reference-card">
              <h3>API Quicklinks</h3>
              <ul>
                <li>Authentication and SSO</li>
                <li>Flow templates</li>
                <li>Client status webhooks</li>
                <li>Metrics and reporting</li>
                <li>Custom fields</li>
              </ul>
              <button className="btn btn-outline btn-wide" type="button">
                Open API reference
              </button>
            </div>
            <div className="reference-card accent">
              <h3>Integration status</h3>
              <p className="status">
                All systems operational. Next maintenance: Feb 02, 02:00 UTC.
              </p>
              <div className="status-grid">
                <div>
                  <p className="status-label">SDKs</p>
                  <p className="status-value">Node / Python / Go</p>
                </div>
                <div>
                  <p className="status-label">Webhooks</p>
                  <p className="status-value">99.998% delivery</p>
                </div>
                <div>
                  <p className="status-label">Latency</p>
                  <p className="status-value">~120ms</p>
                </div>
              </div>
              <button className="btn btn-ghost btn-wide" type="button">
                Visit status page
              </button>
            </div>
          </div>
        </section>

        <section className="section reveal" id="support" style={{ '--delay': '0.45s' }}>
          <div className="section-head">
            <div>
              <p className="eyebrow">Support</p>
              <h2>We stay close to your team</h2>
            </div>
            <p>
              Need a hand? Reach Quilr specialists, browse the release log, or
              join the community workspace.
            </p>
          </div>
          <div className="support-grid">
            <article className="support-card">
              <h3>Guided onboarding</h3>
              <p>Book a 45-min launch session with a Quilr expert.</p>
              <button className="btn btn-outline" type="button">
                Schedule
              </button>
            </article>
            <article className="support-card highlight">
              <h3>Live help desk</h3>
              <p>Chat with us 24/7. Average response time: 4 minutes.</p>
              <button className="btn btn-primary" type="button">
                Open chat
              </button>
            </article>
            <article className="support-card">
              <h3>Release notes</h3>
              <p>See what shipped this week and what is in beta.</p>
              <button className="btn btn-ghost" type="button">
                View changelog
              </button>
            </article>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <p className="brand-name">Quilr</p>
          <p className="brand-sub">Precision workflows for creative teams.</p>
        </div>
        <div className="footer-links">
          <a href="#overview">Overview</a>
          <a href="#guides">Guides</a>
          <a href="#videos">Demo videos</a>
          <a href="#reference">API</a>
          <a href="#support">Support</a>
        </div>
        <p className="footer-note">&copy; 2025 Quilr Inc. All rights reserved.</p>
      </footer>
    </>
  )
}
