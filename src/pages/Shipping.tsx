const Shipping = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 gradient-text">Shipping and Delivery Policy</h1>
          
          <div className="glass-card p-8 rounded-2xl space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-tertiary">1. Digital Service Delivery</h2>
              <p className="text-muted-foreground leading-relaxed">
                As an IT services company, GD Services primarily delivers digital products and services. Most of our deliverables are provided electronically through secure file transfer, email, or cloud-based platforms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-tertiary">2. Delivery Timeline</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Delivery timelines vary based on project scope:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li><strong>Website Development:</strong> 2-8 weeks depending on complexity</li>
                <li><strong>SEO Services:</strong> Ongoing monthly deliverables</li>
                <li><strong>Digital Marketing:</strong> Campaign materials within 1-2 weeks</li>
                <li><strong>Software Development:</strong> 4-16 weeks based on requirements</li>
                <li><strong>Security Audits:</strong> 1-3 weeks for completion</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-tertiary">3. Physical Hardware (if applicable)</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                In cases where physical hardware or materials are provided:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Standard shipping within local area: 2-5 business days</li>
                <li>Express delivery available upon request</li>
                <li>International shipping: 7-21 business days</li>
                <li>Shipping costs calculated based on location and urgency</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-tertiary">4. File Delivery Methods</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Secure cloud storage links (Google Drive, Dropbox)</li>
                <li>Direct email for smaller files</li>
                <li>FTP access for large projects</li>
                <li>Client portal access for ongoing projects</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-tertiary">5. Delivery Confirmation</h2>
              <p className="text-muted-foreground leading-relaxed">
                Clients will receive email confirmation upon delivery of digital assets. For ongoing services, monthly progress reports and deliverable summaries are provided.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-tertiary">6. Support After Delivery</h2>
              <p className="text-muted-foreground leading-relaxed">
                All delivered services include a 30-day support period for bug fixes and minor adjustments. Extended support packages are available upon request.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;