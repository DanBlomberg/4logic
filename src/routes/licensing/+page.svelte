<script>
  let keyPoints = [
    { 
      title: "Definition and Scope", 
      content: "This Software Licensing Agreement governs the use of the Visa/MasterCard payment host simulator software. The licensor grants the licensee a non-transferable, non-exclusive right to use the simulator for testing and development purposes, enabling the simulation of Visa and MasterCard payment processing environments." 
    },
    { 
      title: "Types of Licenses", 
      content: "The agreement offers a non-exclusive license to use the simulator for testing and development. The license does not grant the licensee the right to use the software in a production environment, and the software is restricted to internal testing of payment gateway integrations for Visa and MasterCard transactions." 
    },
    { 
      title: "Payment Terms", 
      content: "The licensee agrees to pay an annual licensing fee based on the number of simulated transactions and users. Additional fees may apply for support, maintenance, and any customization or feature requests related to the simulator." 
    },
    { 
      title: "Intellectual Property Rights", 
      content: "The licensor retains full ownership of the Visa/MasterCard simulator software, including all proprietary code, documentation, and related intellectual property. The licensee has no rights to modify, reverse engineer, or distribute the software." 
    },
    { 
      title: "Restrictions on Use", 
      content: "The simulator may only be used for testing and development purposes related to Visa/MasterCard payment gateway simulations. The licensee is prohibited from using the simulator in a live, production environment, and from disclosing the software to third parties without the licensor's written consent." 
    },
    { 
      title: "Confidentiality", 
      content: "Both parties agree to maintain confidentiality regarding the proprietary nature of the Visa/MasterCard simulator, and any information exchanged as part of the licensing agreement. This includes technical details, payment system specifications, and testing data." 
    },
    { 
      title: "Warranties and Disclaimers", 
      content: "The licensor provides the simulator on an 'as-is' basis, with no warranties regarding its performance in specific environments or its accuracy in simulating real-world Visa or MasterCard payment transactions. The licensor disclaims any liability for errors or inaccuracies in the simulation." 
    },
    { 
      title: "Indemnification", 
      content: "The licensee agrees to indemnify and hold harmless the licensor from any claims, damages, or liabilities arising from the misuse of the simulator, including any unauthorized use or distribution." 
    },
    { 
      title: "Termination", 
      content: "This license may be terminated if the licensee violates the terms of the agreement, including using the software for production purposes. Upon termination, the licensee must cease using the simulator and destroy any copies of the software in their possession." 
    },
    { 
      title: "Governing Law and Dispute Resolution", 
      content: "This agreement is governed by the laws of Minnesota. In the event of a dispute, the parties agree to attempt resolution through mediation or arbitration before pursuing litigation." 
    },
    { 
      title: "Compliance with Laws", 
      content: "The licensee agrees to comply with all applicable laws and regulations, including payment processing regulations set by Visa and MasterCard, as well as data protection laws such as PCI-DSS." 
    },
    { 
      title: "Miscellaneous Provisions", 
      content: "This agreement includes standard clauses such as force majeure, assignment rights, and modification procedures. Any changes to the agreement must be made in writing and signed by both parties." 
    },
    { 
      title: "Legal Assistance", 
      content: "Licensees are encouraged to consult with legal professionals who specialize in payment processing and technology law to ensure compliance with this agreement and any Visa/MasterCard-specific regulations." 
    }
  ];
</script>

<style>
  .container {
    max-width: 800px;
    margin: auto;
    padding: 1em;
  }
  .section {
    margin-bottom: 1.5em;
  }
  .title {
    font-size: 1.5em;
    margin-bottom: 0.5em;
  }
  .content {
    font-size: 1em;
    line-height: 1.5;
  }
</style>

<div class="container">
  {#each keyPoints as keyPoint}
    <div class="section">
      <div class="title">{keyPoint.title}</div>
      <div class="content">{keyPoint.content}</div>
    </div>
  {/each}
</div>

