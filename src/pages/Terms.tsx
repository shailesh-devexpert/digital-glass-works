const Terms = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 gradient-text">Terms and Conditions</h1>
          
          <div className="glass-card p-8 rounded-2xl space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Welcome to GD Services. These terms and conditions outline the rules and regulations for the use of GD Services' website and services. By accessing this website and using our services, you accept these terms and conditions in full.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">2. Services Provided</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                GD Services provides the following IT services:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Web Development</li>
                <li>SEO (Search Engine Optimization)</li>
                <li>Digital Marketing</li>
                <li>WordPress Development</li>
                <li>Shopify Development</li>
                <li>Software Development</li>
                <li>Cyber Security</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">3. Payment Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                Payment terms will be agreed upon before project commencement. Generally, we require 50% upfront payment and 50% upon project completion. All payments must be made in the agreed currency and timeline.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">4. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                Upon full payment, clients receive ownership of the final deliverables. However, GD Services retains the right to showcase completed work in our portfolio unless otherwise agreed upon.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">5. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                GD Services shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">6. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms and Conditions, please contact us through our contact page.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;