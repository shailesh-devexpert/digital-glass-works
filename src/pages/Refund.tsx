const Refund = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 gradient-text">Refund and Cancellation Policy</h1>
          
          <div className="glass-card p-8 rounded-2xl space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-secondary">1. Refund Eligibility</h2>
              <p className="text-muted-foreground leading-relaxed">
                Refunds may be considered under the following circumstances:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mt-4">
                <li>Project has not commenced development phase</li>
                <li>Failure to deliver agreed services within specified timeline</li>
                <li>Services do not meet the agreed specifications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-secondary">2. Cancellation Policy</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Projects can be cancelled under the following conditions:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li><strong>Before Project Start:</strong> Full refund minus 10% processing fee</li>
                <li><strong>25% Project Completion:</strong> 75% refund of total project cost</li>
                <li><strong>50% Project Completion:</strong> 50% refund of total project cost</li>
                <li><strong>75% or More:</strong> No refund available</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-secondary">3. Refund Process</h2>
              <p className="text-muted-foreground leading-relaxed">
                Refund requests must be submitted in writing through our contact form or email. Processing time is 7-14 business days after approval. Refunds will be processed through the original payment method.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-secondary">4. Non-Refundable Services</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Domain registration fees</li>
                <li>Third-party licenses and subscriptions</li>
                <li>Completed consultation sessions</li>
                <li>Custom design work that has been approved</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-secondary">5. Dispute Resolution</h2>
              <p className="text-muted-foreground leading-relaxed">
                Any disputes regarding refunds will be handled through direct communication first. If unresolved, disputes may be escalated to mediation services.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Refund;