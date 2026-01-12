"use client";
import { CheckCircle, Target, Lightbulb } from "lucide-react";

const caseStudies = [
  {
    title: "Provincial Government Digital Transformation",
    client: "Government Department",
    tags: ["Data Engineering", "Analytics", "Automation"],
    problem: "A provincial government department struggled with fragmented data systems across multiple divisions, leading to delayed reporting, inconsistent data quality, and an inability to make timely policy decisions. Manual data consolidation consumed significant staff hours monthly.",
    solution: "We designed and implemented a centralized data warehouse with automated ETL pipelines that consolidate data from 12 legacy systems. We built real-time dashboards for executive leadership and automated monthly compliance reporting. The solution included data quality validation rules and role-based access controls.",
    outcome: "Reduced monthly reporting time from 3 weeks to 2 hours. Improved data accuracy from 72% to 99.5%. Enabled real-time monitoring of key performance indicators. The department now makes data-driven decisions with confidence, improving service delivery to citizens.",
    metrics: [
      { label: "Time Saved", value: "95%" },
      { label: "Data Accuracy", value: "99.5%" },
      { label: "Systems Integrated", value: "12" },
    ],
  },
  {
    title: "Enterprise Resource Management Platform",
    client: "Private Sector Corporation",
    tags: ["Software Development", "System Integration"],
    problem: "A mid-sized enterprise operated with disconnected systems for HR, finance, inventory, and customer management. Staff duplicated data entry across platforms, errors were common, and management lacked a unified view of business operations for strategic planning.",
    solution: "We developed a custom integrated management platform that unified all business functions into a single system. The solution featured automated workflows for approvals, real-time inventory tracking, financial reconciliation, and comprehensive analytics. We implemented a phased migration strategy to minimize business disruption.",
    outcome: "Eliminated data duplication and reduced administrative overhead by 40%. Management gained real-time visibility into all operations. The platform supported a 30% increase in business volume without additional administrative staff. Annual operational savings exceeded R2 million.",
    metrics: [
      { label: "Cost Reduction", value: "40%" },
      { label: "Efficiency Gain", value: "30%" },
      { label: "Annual Savings", value: "R2M+" },
    ],
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-padding bg-section-alt">
      <div className="section-container">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">Our Work</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
            PORTFOLIO
          </h2>
          <p className="text-muted-foreground text-lg">
            Delivering measurable results through strategic technology solutions. 
            Explore how we've helped organizations transform their operations.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <div
              key={study.title}
              className="bg-card border border-border rounded-2xl overflow-hidden card-hover"
            >
              <div className="p-8 md:p-10">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                      {study.title}
                    </h3>
                    <p className="text-muted-foreground mt-2">{study.client}</p>
                  </div>
                </div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Problem */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Target className="w-5 h-5 text-destructive" />
                      <h4 className="font-bold text-foreground">The Challenge</h4>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {study.problem}
                    </p>
                  </div>

                  {/* Solution */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Lightbulb className="w-5 h-5 text-accent" />
                      <h4 className="font-bold text-foreground">Our Solution</h4>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {study.solution}
                    </p>
                  </div>

                  {/* Outcome */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <h4 className="font-bold text-foreground">The Outcome</h4>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {study.outcome}
                    </p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-border">
                  {study.metrics.map((metric) => (
                    <div key={metric.label} className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-accent">
                        {metric.value}
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
