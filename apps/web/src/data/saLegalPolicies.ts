import type { CmsLegalDocument } from '@newera365/ui';
import type { SlateNode } from '@newera365/ui';

// Helper constructors for Slate AST rich-text nodes
function p(text: string): SlateNode {
  return { children: [{ text }] };
}

function pBold(label: string, text: string): SlateNode {
  return {
    children: [{ text: label, bold: true }, { text: ` ${text}` }],
  };
}

function h2(text: string): SlateNode {
  return { type: 'h2', children: [{ text }] };
}

function h3(text: string): SlateNode {
  return { type: 'h3', children: [{ text }] };
}

function h4(text: string): SlateNode {
  return { type: 'h4', children: [{ text }] };
}

function ul(items: (string | { label: string; text: string })[]): SlateNode {
  return {
    type: 'ul',
    children: items.map((it) => ({
      type: 'li',
      children:
        typeof it === 'string'
          ? [{ text: it }]
          : [{ text: it.label, bold: true }, { text: ` ${it.text}` }],
    })),
  };
}

function ol(items: string[]): SlateNode {
  return {
    type: 'ol',
    children: items.map((it) => ({
      type: 'li',
      children: [{ text: it }],
    })),
  };
}

function table(
  headers: string[],
  rows: (string | { text: string; bold?: boolean })[][],
): SlateNode {
  return {
    type: 'table',
    children: [
      {
        type: 'thead',
        children: [
          {
            type: 'tr',
            children: headers.map((h) => ({
              type: 'th',
              children: [{ text: h, bold: true }],
            })),
          },
        ],
      },
      {
        type: 'tbody',
        children: rows.map((r) => ({
          type: 'tr',
          children: r.map((cell) => ({
            type: 'td',
            children:
              typeof cell === 'string' ? [{ text: cell }] : [{ text: cell.text, bold: cell.bold }],
          })),
        })),
      },
    ],
  };
}

export const SA_LEGAL_DOCUMENTS: CmsLegalDocument[] = [
  // =========================================================================
  // 1. COMPLAINTS MANAGEMENT FRAMEWORK
  // =========================================================================
  {
    id: 1,
    pageType: 'complaints-management-framework',
    title: 'Complaints Management Framework',
    effectiveDate: '2024-01-15',
    version: 'v1.0',
    body: [
      // table(['Document Information', 'Details'], [
      //   ['Policy Title', 'Complaints Management Framework'],
      //   ['Document Number', 'NCM-CMF-2024-V1'],
      //   ['Version', '1.0'],
      //   ['Policy Owner', 'Key Individual'],
      //   ['Approved By', 'Board of Directors'],
      //   ['Approval Date', '15 January 2024'],
      //   ['Effective Date', '15 January 2024'],
      //   ['Review Date', 'Annual'],
      // ]),

      h3('POLICY BACKGROUND'),
      p(
        'NEWERA CAPITAL MARKETS (Pty) Ltd ("the Company") Registration number : 2024/447619/07, FSP 54447 is committed to providing financial services honestly, fairly, with due skill, care and diligence, and in the best interests of its clients. The Company recognizes that an effective complaints management framework is essential to maintaining client confidence, improving service quality and meeting its regulatory obligations as an authorized Financial Services Provider.',
      ),
      p(
        'The Company views complaints as an opportunity to identify service shortcomings, strengthen internal controls and improve customer outcomes. Complaints are managed fairly, consistently, transparently and without unreasonable delay, ensuring that complainants are treated with respect throughout the complaints process.',
      ),
      p(
        "This Complaints Management Framework forms part of the Company's Governance Framework and should be read together with the Business Plan, Code of Ethics and Conduct, Risk Management Policy, Compliance Management Framework, Conflict of Interest Management Policy and other governance documents.",
      ),

      h2('1. PURPOSE'),
      p(
        'The purpose of this Complaints Management Framework is to establish a fair, transparent and effective process for the receipt, investigation, resolution, monitoring and reporting of complaints received by the Company.',
      ),
      p(
        'The Framework aims to ensure that complaints are managed consistently, objectively and within reasonable timeframes while protecting the rights and interests of clients and supporting compliance with applicable legislative and regulatory requirements.',
      ),

      h2('2. OBJECTIVES'),
      p('The objectives of this Framework are to:'),
      ul([
        'establish an accessible and effective complaints management process;',
        'ensure that complaints are handled fairly, objectively and consistently;',
        'promote the fair treatment of clients throughout the complaints process;',
        'identify and address the root causes of complaints;',
        "support continuous improvement in the Company's products, services and business processes;",
        'comply with applicable legislative and regulatory requirements;',
        'maintain appropriate complaints records; and',
        'provide meaningful complaints reporting to management and the Board.',
      ]),

      h2('3. SCOPE'),
      p('This Framework applies to:'),
      ul([
        'all directors;',
        'the Key Individual;',
        'Representatives;',
        'employees;',
        'outsourced service providers involved in complaint handling; and',
        'all complaints relating to financial services rendered by the Company.',
      ]),
      p(
        'This Framework applies to complaints received through any communication channel, including written correspondence, email, telephone, electronic platforms and verbal complaints that are subsequently recorded by the Company.',
      ),

      h2('4. LEGISLATIVE AND REGULATORY FRAMEWORK'),
      p(
        'This Framework has been developed with due consideration to the legislative and regulatory requirements applicable to Financial Services Providers.',
      ),
      p('The primary legislative and regulatory framework includes:'),
      table(
        ['Legislation / Regulatory Instrument', 'Relevance'],
        [
          [
            'Financial Advisory and Intermediary Services Act 37 of 2002',
            'Requires financial services to be rendered honestly, fairly, with due skill, care and diligence.',
          ],
          [
            'General Code of Conduct for Authorized Financial Services Providers and Representatives',
            'Requires FSPs to maintain appropriate internal complaint resolution systems and procedures.',
          ],
          [
            'Financial Sector Regulation Act 9 of 2017',
            'Promotes fair customer outcomes and appropriate conduct within the financial sector.',
          ],
          [
            'Protection of Personal Information Act 4 of 2013',
            'Requires personal information obtained during complaint handling to be protected.',
          ],
        ],
      ),
      p(
        'The Company shall review this Framework whenever legislative or regulatory developments require amendments.',
      ),

      h2('5. DEFINITIONS'),
      table(
        ['Term', 'Definition'],
        [
          ['Board', 'The Board of Directors of NEWERA CAPITAL MARKETS (Pty) Ltd.'],
          [
            'Complainant',
            'A person who submits a complaint to the Company regarding a financial service or related matter.',
          ],
          [
            'Complaint',
            'An expression of dissatisfaction relating to a financial service or related conduct that alleges financial loss, material inconvenience or actual or potential prejudice and seeks remedial action.',
          ],
          [
            'Complaint Register',
            "The Company's official register for recording and monitoring complaints.",
          ],
          [
            'Key Individual',
            "The individual approved by the Financial Sector Conduct Authority to oversee the Company's financial services activities.",
          ],
          [
            'Representative',
            'A person authorized to render financial services on behalf of the Company in accordance with the FAIS Act.',
          ],
        ],
      ),

      h2('6. COMPLAINTS MANAGEMENT FRAMEWORK'),
      h3('6.1 General'),
      p(
        'The Company shall maintain an effective, transparent and accessible complaints management framework that enables complaints to be received, investigated, resolved and monitored in a fair, objective and timely manner.',
      ),
      p(
        "The Framework shall support the Company's commitment to treating customers fairly, improving service delivery and complying with applicable legislative and regulatory requirements.",
      ),
      p(
        "Complaints shall be managed in a manner that is proportionate to the nature, size and complexity of the Company's business.",
      ),

      h3('6.2 Complaints Management Principles'),
      p(
        'The Company shall ensure that complaints are managed in accordance with the following principles:',
      ),
      ul([
        'fairness and impartiality;',
        'accessibility and transparency;',
        'timely acknowledgement and resolution;',
        'consistency in complaint handling;',
        'confidentiality of complainant information;',
        'objective investigation of complaints;',
        'appropriate record keeping; and',
        'continuous improvement through complaint analysis.',
      ]),

      h3('6.3 Accessibility'),
      p(
        'Clients may submit complaints through any of the communication channels approved by the Company, including:',
      ),
      ul([
        { label: 'Email –', text: 'compliance.sa@newera365.com' },
        { label: 'Telephone –', text: '084 281 4524' },
        { label: "the Company's website –", text: 'https://newera365.com/legal/' },
        'any other communication channel designated by the Company.',
      ]),
      p(
        'The Company shall make information regarding its complaints process readily available to clients.',
      ),

      h3('6.4 Complaints Register'),
      p(
        'All complaints received by the Company shall be recorded in the official Complaints Register.',
      ),
      p('The Register shall include, where applicable:'),
      ul([
        'the complaint reference number;',
        'complainant details;',
        'date received;',
        'summary of the complaint;',
        'responsible person;',
        'investigation status;',
        'outcome of the complaint;',
        'date resolved; and',
        'any corrective actions implemented.',
      ]),

      h2('7. COMPLAINT HANDLING PROCESS'),
      h3('7.1 Receipt of Complaints'),
      p(
        'The Company shall acknowledge receipt of a complaint as soon as reasonably practicable after it has been received.',
      ),
      p(
        'Each complaint shall be assigned a unique reference number to facilitate monitoring and communication with the complainant.',
      ),

      h3('7.2 Initial Assessment'),
      p('Upon receipt, the Company shall conduct an initial assessment to determine:'),
      ul([
        'whether the matter constitutes a complaint;',
        'the nature and complexity of the complaint;',
        'whether additional information is required;',
        'the person responsible for handling the complaint; and',
        'the expected timeframe for resolution.',
      ]),

      h3('7.3 Investigation'),
      p('Each complaint shall be investigated objectively, fairly and without unreasonable delay.'),
      p('The investigation may include:'),
      ul([
        'reviewing relevant documentation;',
        'obtaining information from employees or Representatives;',
        'communicating with the complainant where clarification is required;',
        'considering applicable legislation, regulatory requirements and Company policies; and',
        'determining the appropriate outcome.',
      ]),

      h3('7.4 Resolution'),
      p(
        'Following completion of the investigation, the Company shall communicate its decision to the complainant in clear and understandable language.',
      ),
      p(
        'Where a complaint is upheld, the Company shall implement appropriate remedial action without unreasonable delay.',
      ),
      p(
        'Where a complaint is not upheld, the Company shall provide the complainant with the reasons for the decision and advise the complainant of any available escalation or external dispute resolution options.',
      ),

      h3('7.5 Timeframes'),
      p('The Company shall endeavor to resolve complaints as soon as reasonably practicable.'),
      p(
        'Where additional time is required due to the complexity of the complaint, the complainant shall be informed of:',
      ),
      ul([
        'the reason for the delay;',
        'the expected timeframe for completion; and',
        'any further information required to finalize the investigation.',
      ]),

      h2('8. COMPLAINTS CLASSIFICATION AND INVESTIGATION'),
      h3('8.1 Complaints Classification'),
      p('For monitoring and reporting purposes, complaints may be classified according to:'),
      ul([
        'advice-related complaints;',
        'service-related complaints;',
        'administrative complaints;',
        'disclosure-related complaints;',
        'complaints relating to Representatives;',
        'complaints relating to conflicts of interest;',
        'complaints relating to fees or charges; and',
        'any other category determined by the Company.',
      ]),

      h3('8.2 Root Cause Analysis'),
      p(
        'Where appropriate, the Company shall conduct a root cause analysis to determine whether a complaint indicates:',
      ),
      ul([
        'deficiencies in internal controls;',
        'weaknesses in business processes;',
        'inadequate training;',
        'compliance failures;',
        'conduct risk;',
        'operational risk; or',
        'opportunities for service improvement.',
      ]),
      p(
        'Lessons identified through complaint investigations shall be considered during risk management, compliance monitoring and business improvement activities.',
      ),

      h2('9. ROLES AND RESPONSIBILITIES'),
      h3('9.1 Board of Directors'),
      p(
        "The Board of Directors shall retain ultimate responsibility for the oversight of the Company's complaints management framework.",
      ),
      p('The Board shall:'),
      ul([
        'approve this Complaints Management Framework and any material amendments;',
        'ensure that adequate resources are available to support effective complaints management;',
        'oversee complaints trends and significant complaints;',
        "monitor the effectiveness of the Company's complaints handling arrangements;",
        "ensure that complaints are considered as part of the Company's governance and risk management processes; and",
        'promote a culture that supports the fair treatment of clients.',
      ]),

      h3('9.2 Key Individual'),
      p(
        'Mr Mongiwethu Kumalo shall be responsible for the implementation and administration of this Framework and shall:',
      ),
      ul([
        "oversee the Company's complaints management process;",
        'ensure that complaints are investigated objectively and fairly;',
        'monitor compliance with this Framework;',
        'review complaints trends and root causes;',
        'recommend corrective actions where appropriate; and',
        'report significant complaints and complaints trends to the Board.',
      ]),

      h3('9.3 Representatives and Employees'),
      p('All Representatives and employees shall:'),
      ul([
        'promptly report complaints received from clients;',
        'cooperate with complaint investigations;',
        'provide accurate and complete information during investigations;',
        'maintain confidentiality throughout the complaints process; and',
        'implement corrective actions where required.',
      ]),

      h3('9.4 Outsourced Service Providers'),
      p(
        'Where complaint handling activities involve outsourced service providers, such providers shall cooperate with the Company and comply with applicable contractual obligations and regulatory requirements.',
      ),

      h2('10. RECORD KEEPING AND REPORTING'),
      h3('10.1 Complaints Record'),
      p(
        'The Company shall maintain complete, accurate and up-to-date records of all complaints received.',
      ),
      p('Complaint records shall include:'),
      ul([
        'complaint reference number;',
        'complainant details;',
        'date received;',
        'nature of the complaint;',
        'investigation undertaken;',
        'outcome of the complaint;',
        'corrective action implemented;',
        'date finalized; and',
        'any escalation or external referral.',
      ]),
      p(
        "Complaint records shall be retained in accordance with applicable legislative requirements and the Company's Record Management Policy.",
      ),

      h3('10.2 Complaints Reporting'),
      p('The Company shall prepare periodic complaints reports for management and the Board.'),
      p('Reports may include:'),
      ul([
        'the number of complaints received;',
        'complaint categories;',
        'average resolution times;',
        'upheld and rejected complaints;',
        'recurring complaint themes;',
        'root cause analysis findings;',
        'corrective actions implemented; and',
        'recommendations for process improvements.',
      ]),
      p(
        "Complaint reporting shall support the Company's Risk Management Framework, Compliance Management Framework and Treating Customers Fairly (TCF) objectives.",
      ),

      h2('11. MONITORING AND REVIEW'),
      h3('11.1 Monitoring'),
      p(
        'The Company shall continuously monitor the effectiveness of this Framework to ensure that complaints are managed fairly, consistently and in accordance with applicable legislative and regulatory requirements.',
      ),
      p('Monitoring activities may include:'),
      ul([
        'review of complaint files;',
        'trend analysis;',
        'root cause analysis;',
        'monitoring complaint resolution timeframes;',
        'review of corrective actions; and',
        'assessment of customer outcomes.',
      ]),

      h3('11.2 Continuous Improvement'),
      p('Information obtained through complaints shall be used to strengthen:'),
      ul([
        'internal controls;',
        'business processes;',
        'employee training;',
        'compliance monitoring;',
        'risk management; and',
        'customer service.',
      ]),

      h3('11.3 Policy Review'),
      p('This Framework shall be reviewed at least annually and whenever:'),
      ul([
        'legislative or regulatory requirements change;',
        'significant complaint trends emerge;',
        'material deficiencies are identified;',
        "changes occur in the Company's operations; or",
        'the Board determines that amendments are necessary.',
      ]),
      p(
        'Recommendations arising from reviews shall be documented and approved before implementation.',
      ),

      // h2('12. POLICY GOVERNANCE'),
      // h3('12.1 Policy Ownership'),
      // p(
      //   'The Board of Directors is responsible for approving this Complaints Management Framework and exercising oversight of its implementation.',
      // ),
      // p(
      //   'Mr Mongiwethu Kumalo is responsible for the day-to-day administration, monitoring and periodic review of this Framework.',
      // ),

      // h3('12.2 Compliance'),
      // p(
      //   'All directors, the Key Individual, Representatives, employees and relevant outsourced service providers shall comply with this Framework.',
      // ),
      // p(
      //   "Failure to comply with this Framework may result in corrective action in accordance with the Company's governance framework, employment policies and applicable legislation.",
      // ),

      // h3('12.3 Continuous Improvement'),
      // p('The Company is committed to continually improving its complaints management practices.'),
      // p(
      //   'Lessons learned through complaints, internal reviews, regulatory developments and customer feedback shall be incorporated into future reviews of this Framework.',
      // ),

      // h2('ANNEXURE A'),
      // h3('Complaints Register'),
      // table(
      //   ['Reference No.', 'Date Received', 'Complainant', 'Complaint Category', 'Responsible Person', 'Status', 'Date Closed'],
      //   [
      //     ['[Ref No]', '[DD/MM/YYYY]', '[Complainant Name]', '[Advice/Service/Admin]', '[Assigned Investigator]', '[Open / In Progress / Resolved]', '[DD/MM/YYYY]'],
      //   ],
      // ),

      // h2('ANNEXURE B'),
      // h3('Complaint Investigation Report'),
      // table(['Item', 'Details'], [
      //   ['Complaint Reference Number', '[Assigned Reference ID]'],
      //   ['Date Received', '[Date of Receipt]'],
      //   ['Investigator', '[Assigned Responsible Person]'],
      //   ['Summary of Complaint', '[Detailed Summary of Client Allegation]'],
      //   ['Investigation Conducted', '[Interviews, Documentation, Logs Reviewed]'],
      //   ['Findings', '[Factual Findings of the Investigation]'],
      //   ['Decision', '[Upheld / Partially Upheld / Dismissed]'],
      //   ['Corrective Action', '[Remedial Action, Process Improvements, Redress]'],
      //   ['Date Closed', '[Date Completed & Communicated]'],
      // ]),

      // h2('ANNEXURE C'),
      // h3('Root Cause Analysis Template'),
      // table(
      //   ['Complaint', 'Root Cause', 'Corrective Action', 'Responsible Person', 'Completion Date'],
      //   [
      //     ['[Reference]', '[Identified Root Cause / Defect]', '[Remedial Action Plan]', '[Owner]', '[Target Date]'],
      //   ],
      // ),

      // h2('ANNEXURE D'),
      // h3('Complaints Trend Report'),
      // table(
      //   ['Reporting Period', 'Number of Complaints', 'Main Complaint Categories', 'Average Resolution Time', 'Key Trends', 'Corrective Actions'],
      //   [
      //     ['[Quarter / Year]', '[Total Received]', '[Primary Categories]', '[Days to Resolution]', '[Systemic Observations]', '[Implemented Controls]'],
      //   ],
      // ),
    ],
  },

  // =========================================================================
  // 2. DISASTER RECOVERY PLAN
  // =========================================================================
  {
    id: 2,
    pageType: 'disaster-recovery-plan',
    title: 'Disaster Recovery Plan',
    effectiveDate: '2024-01-15',
    version: 'v1.0',
    body: [
      // table(['Document Information', 'Details'], [
      //   ['Policy Title', 'Disaster Recovery Plan'],
      //   ['Document Number', 'NCM-DRP-2024-V1'],
      //   ['Version', '1.0'],
      //   ['Policy Owner', 'Key Individual'],
      //   ['Approved By', 'Board of Directors'],
      //   ['Approval Date', '15 January 2024'],
      //   ['Effective Date', '15 January 2024'],
      //   ['Review Date', 'Annual'],
      // ]),

      h3('POLICY BACKGROUND'),
      p(
        'NewEra Capital Markets (Pty) Ltd ("the Company") FSP 54447 recognizes that information systems, electronic records and technology infrastructure are critical to the effective delivery of financial services. A disruption affecting these resources may significantly impact the Company\'s operations, regulatory obligations and ability to serve its clients.',
      ),
      p(
        'This Disaster Recovery Plan ("Plan") establishes the governance framework and procedures for restoring critical systems, applications, electronic information and technology services following a disaster or significant disruption. The Plan is designed to minimise operational downtime, protect Company information and support the timely resumption of normal business activities.',
      ),
      p(
        "This Plan forms part of the Company's Governance Framework and complements the Business Continuity Policy, Risk Management Policy, Information Security arrangements and Financial Recovery Plan.",
      ),

      h2('1. PURPOSE'),
      p(
        'The purpose of this Disaster Recovery Plan is to establish a structured framework for responding to technology-related disruptions and restoring critical information systems, data and supporting infrastructure within an acceptable timeframe.',
      ),

      h2('2. OBJECTIVES'),
      p('The objectives of this Plan are to:'),
      ul([
        'minimize operational disruption arising from technology failures or disasters.',
        'protect the integrity, confidentiality and availability of Company information.',
        'restore critical business systems and services as quickly as reasonably practicable.',
        'support compliance with applicable legislative and regulatory requirements.',
        'minimize data loss through appropriate backup and recovery arrangements.',
        'protect the interests of clients and other stakeholders; and',
        'support the continued provision of financial services following a disruptive event.',
      ]),

      h2('3. SCOPE'),
      p(
        "This Plan applies to all directors, the Key Individual, Representatives, employees and service providers responsible for the Company's information systems, electronic records and technology resources.",
      ),
      p(
        "The Plan applies to all technology assets supporting the Company's operations, including:",
      ),
      ul([
        'computer hardware;',
        'software applications;',
        'cloud-based services;',
        'electronic records;',
        'communication systems;',
        'internet connectivity;',
        'backup systems; and',
        'other information technology resources used in the delivery of financial services.',
      ]),

      h2('4. LEGISLATIVE AND REGULATORY FRAMEWORK'),
      p(
        'This Plan has been developed with due consideration to applicable legislation and regulatory requirements governing financial services, information governance and business resilience.',
      ),
      p('The primary legislative and regulatory framework includes:'),
      table(
        ['Legislation / Regulatory Instrument', 'Relevance'],
        [
          [
            'Financial Advisory and Intermediary Services Act 37 of 2002',
            "Supports the Company's ability to continue rendering financial services responsibly.",
          ],
          [
            'Financial Sector Regulation Act 9 of 2017',
            'Promotes sound governance and operational resilience.',
          ],
          [
            'Protection of Personal Information Act 4 of 2013 (POPIA)',
            'Requires the protection of personal information and appropriate security safeguards.',
          ],
          [
            'Companies Act 71 of 2008',
            'Requires directors to exercise appropriate oversight of Company resources and governance arrangements.',
          ],
        ],
      ),
      p(
        'The Company shall review this Plan whenever legislative or regulatory developments require amendments.',
      ),

      h2('5. DEFINITIONS'),
      table(
        ['Term', 'Definition'],
        [
          ['Backup', 'A secure copy of electronic data maintained for recovery purposes.'],
          [
            'Disaster',
            "Any event that significantly disrupts the availability of the Company's technology infrastructure, systems or information.",
          ],
          [
            'Disaster Recovery',
            'The process of restoring systems, applications, data and technology services following a disruption.',
          ],
          [
            'Key Individual',
            "Mongiwethu Kumalo approved by the Financial Sector Conduct Authority to oversee the Company's financial services activities.",
          ],
          [
            'Recovery Time Objective (RTO)',
            'The target timeframe within which critical systems should be restored following a disruption.',
          ],
          [
            'Recovery Point Objective (RPO)',
            'The maximum acceptable amount of data loss measured in time before a disruption occurs.',
          ],
        ],
      ),

      h2('6. DISASTER RECOVERY FRAMEWORK'),
      h3('6.1 General'),
      p(
        'The Company shall maintain a Disaster Recovery Framework to support the timely restoration of critical information systems, electronic records and technology infrastructure following a disaster or significant disruption.',
      ),
      p(
        'The Framework is intended to minimize operational downtime, protect Company information and support the continued delivery of financial services.',
      ),
      p(
        "Disaster recovery activities shall be implemented in a manner that is proportionate to the nature, size and complexity of the Company's operations.",
      ),

      h3('6.2 Recovery Objectives'),
      p('The Disaster Recovery Framework seeks to:'),
      ul([
        'restore critical business systems within acceptable timeframes;',
        'minimize the loss of electronic information;',
        'maintain the confidentiality, integrity and availability of Company information;',
        'support regulatory compliance and business continuity;',
        'minimize operational disruption to clients and stakeholders; and',
        'facilitate the orderly recovery of technology services following a disaster.',
      ]),

      h3('6.3 Recovery Priorities'),
      p(
        'Following a disaster, recovery efforts shall be prioritized according to the criticality of business operations.',
      ),
      p('The general order of recovery shall be:'),
      ol([
        'Restoration of communication channels.',
        'Recovery of critical business applications.',
        'Restoration of electronic client records and business information.',
        'Recovery of network connectivity and internet services.',
        'Restoration of supporting business applications.',
        'Recovery of non-critical systems.',
      ]),
      p(
        'Recovery priorities may be adjusted depending on the nature of the incident and operational requirements.',
      ),

      h3('6.4 Backup Management'),
      p('The Company shall maintain appropriate backup arrangements to support disaster recovery.'),
      p('Where applicable:'),
      ul([
        'electronic information shall be backed up regularly;',
        'backup copies shall be protected against unauthorized access;',
        'backups shall be stored securely;',
        'backup restoration procedures shall be tested periodically; and',
        "backup retention shall be managed in accordance with the Company's record management requirements.",
      ]),

      h2('7. DISASTER RECOVERY PROCEDURES'),
      h3('7.1 Incident Identification'),
      p(
        'Any employee who becomes aware of a disaster or significant technology disruption shall immediately notify Mr Kumalo or the designated responsible person.',
      ),
      p('The incident shall be assessed to determine:'),
      ul([
        'the nature of the disruption;',
        'systems affected;',
        'operational impact;',
        'potential information security implications; and',
        'whether the Disaster Recovery Plan should be activated.',
      ]),

      h3('7.2 Plan Activation'),
      p(
        'Mr Mongi Kumalo in consultation with the Board where appropriate, shall determine whether the Disaster Recovery Plan should be activated.',
      ),
      p('Activation may occur where there is:'),
      ul([
        'failure of critical technology systems;',
        'prolonged loss of internet or network services;',
        'corruption or loss of business data;',
        'cyber incidents affecting critical operations;',
        'failure of cloud-based services;',
        'damage to technology infrastructure; or',
        "any event that materially affects the Company's ability to provide financial services.",
      ]),

      h3('7.3 Recovery Process'),
      p('Once the Plan has been activated, the Company shall:'),
      ul([
        'assess the extent of the disruption;',
        'establish recovery priorities;',
        'restore critical systems and services;',
        'recover electronic information from available backups where necessary;',
        'verify the integrity and completeness of recovered information;',
        'monitor the effectiveness of recovery activities; and',
        'resume normal operations once systems have been confirmed to be stable.',
      ]),

      h3('7.4 Data Integrity'),
      p(
        'Following recovery, the Company shall verify that recovered information is complete, accurate and free from unauthorized alteration before normal business processing resumes.',
      ),
      p(
        'Any discrepancies identified during recovery shall be investigated and resolved as soon as reasonably practicable.',
      ),

      h3('7.5 Post-Incident Review'),
      p(
        'Following the restoration of normal operations, the Company shall conduct a post-incident review to:',
      ),
      ul([
        'identify the root cause of the incident;',
        'evaluate the effectiveness of recovery activities;',
        'identify opportunities for improvement;',
        'update recovery procedures where necessary; and',
        "strengthen the Company's operational resilience.",
      ]),

      h2('8. RECOVERY TIME OBJECTIVES'),
      p(
        'The Company shall establish reasonable recovery objectives for critical technology resources.',
      ),
      table(
        ['Business Resource', 'Recovery Priority', 'Target Recovery Time'],
        [
          ['Email and communication systems', 'High', 'Within 24 hours'],
          ['Client records and electronic documents', 'High', 'Within 24 hours'],
          ['Cloud-based business applications', 'High', 'Within 24 hours'],
          ['Internet connectivity', 'High', 'As soon as reasonably practicable'],
          ['Standard office applications', 'Medium', 'Within 48 hours'],
          ['Non-critical systems', 'Low', 'As resources permit'],
        ],
      ),
      p(
        "The recovery objectives contained in this Plan are intended as operational targets and may be adjusted where circumstances beyond the Company's control make strict adherence impracticable.",
      ),
      p(
        'The Company shall periodically review these recovery objectives to ensure they remain appropriate for its operational requirements.',
      ),

      h2('9. ROLES AND RESPONSIBILITIES'),
      h3('9.1 Board of Directors'),
      p(
        "The Board of Directors has overall responsibility for the governance and oversight of the Company's disaster recovery capability.",
      ),
      p('The Board shall:'),
      ul([
        'approve this Disaster Recovery Plan and any material amendments;',
        'ensure that adequate resources are available to support disaster recovery;',
        'oversee disaster recovery preparedness and resilience;',
        'consider reports relating to disaster recovery testing and significant incidents; and',
        'monitor the implementation of corrective actions arising from disaster recovery events.',
      ]),

      h3('9.2 Key Individual'),
      p(
        'Mr Mongi Kumalo shall be responsible for the implementation and administration of this Plan and shall:',
      ),
      ul([
        "monitor the Company's disaster recovery readiness;",
        'determine whether the Disaster Recovery Plan should be activated;',
        'coordinate disaster recovery activities;',
        'communicate with the Board during significant incidents;',
        'oversee the restoration of critical systems and business information; and',
        'ensure that post-incident reviews are completed.',
      ]),

      h3('9.3 Employees and Representatives'),
      p('All employees and Representatives shall:'),
      ul([
        'immediately report technology incidents or disasters;',
        'comply with disaster recovery procedures;',
        'protect Company information during recovery activities;',
        'cooperate with management throughout the recovery process; and',
        'participate in disaster recovery testing where required.',
      ]),

      h3('9.4 Information Technology Service Providers'),
      p('Where technology services are outsourced, service providers shall:'),
      ul([
        'support the recovery of outsourced systems in accordance with contractual obligations;',
        'cooperate with the Company during disaster recovery activities;',
        'notify the Company of significant service disruptions without undue delay; and',
        'assist with recovery testing where applicable.',
      ]),

      h2('10. COMMUNICATION AND ESCALATIONS'),
      h3('10.1 Internal Communications'),
      p(
        'Mr Kumalo shall ensure that directors, employees and other relevant persons are informed of significant technology disruptions and the activation of this Plan where appropriate.',
      ),
      p(
        'Communications shall be clear, accurate and limited to information necessary for the effective management of the incident.',
      ),

      h3('10.2 External Communications'),
      p(
        'Where appropriate, the Company may communicate with clients, outsourced service providers, regulators or other stakeholders regarding significant technology disruptions.',
      ),
      p('External communications shall:'),
      ul([
        'be accurate and timely;',
        'protect confidential and personal information;',
        'be approved by the Board or Mr Kumalo, as appropriate; and',
        'comply with applicable legislative and regulatory requirements.',
      ]),

      h3('10.3 Incident Reporting'),
      p('All significant disaster recovery incidents shall be documented.'),
      p('Incident reports should include:'),
      ul([
        'the nature of the incident;',
        'systems affected;',
        'recovery actions implemented;',
        'recovery timelines;',
        'lessons learned; and',
        'recommendations for future improvement.',
      ]),

      h2('11. TESTING AND MAINTENANCE'),
      h3('11.1 Disaster Recovery Testing'),
      p(
        'The Company shall periodically test this Disaster Recovery Plan to assess its effectiveness and ensure that recovery procedures remain appropriate.',
      ),
      p('Testing may include:'),
      ul([
        'desktop exercises;',
        'backup restoration testing;',
        'system recovery testing;',
        'communication testing; and',
        'review of outsourced recovery arrangements.',
      ]),

      h3('11.2 Maintenance'),
      p('This Plan shall be reviewed at least annually and whenever:'),
      ul([
        'significant technology changes occur;',
        'new systems are implemented;',
        'material weaknesses are identified;',
        'a disaster recovery event occurs; or',
        'legislative or regulatory changes require amendments.',
      ]),
      p(
        'Recommendations arising from testing or actual incidents shall be incorporated into future versions of this Plan.',
      ),

      // h2('12. POLICY GOVERNANCE'),
      // h3('12.1 Policy Ownership'),
      // p(
      //   "The Board of Directors is responsible for approving this Disaster Recovery Plan and overseeing the Company's disaster recovery capability.",
      // ),
      // p(
      //   'Mr Kumalo is responsible for the implementation, monitoring and periodic review of this Plan.',
      // ),

      // h3('12.2 Compliance'),
      // p(
      //   'All directors, Representatives, employees and relevant service providers shall comply with this Plan where applicable.',
      // ),
      // p(
      //   "Failure to comply with this Plan may result in corrective action in accordance with the Company's governance framework and applicable contractual or employment obligations.",
      // ),

      // h3('12.3 Continuous Improvement'),
      // p('The Company is committed to continuously improving its disaster recovery capability.'),
      // p(
      //   'Lessons learned through testing, actual incidents, technology developments and internal reviews shall be incorporated into future updates of this Plan.',
      // ),

      // h2('ANNEXURE A'),
      // h3('Disaster Recovery Checklist'),
      // table(
      //   ['Recovery Activity', 'Responsible Person', 'Target Date', 'Status'],
      //   [
      //     ['Assess Incident', 'Key Individual / Incident Lead', 'Immediate', 'Pending / In Progress / Completed'],
      //     ['Activate Disaster Recovery Plan', 'Key Individual', 'T+1 Hour', 'Pending / In Progress / Completed'],
      //     ['Notify key personnel', 'Communications Lead', 'T+2 Hours', 'Pending / In Progress / Completed'],
      //     ['Restore critical systems', 'IT Service Provider', 'Within RTO', 'Pending / In Progress / Completed'],
      //     ['Verify data integrity', 'IT Lead / Compliance', 'Post-Restore', 'Pending / In Progress / Completed'],
      //     ['Resume normal operations', 'Key Individual / Management', 'Stable State', 'Pending / In Progress / Completed'],
      //     ['Complete post-incident review', 'Key Individual / Board', 'Within 7 Days', 'Pending / In Progress / Completed'],
      //   ],
      // ),

      // h2('ANNEXURE B'),
      // h3('Critical Systems Register'),
      // table(
      //   ['System / Application', 'Business Function', 'Recovery Priority', 'Responsible Person'],
      //   [
      //     ['Trading Platform / Bridge', 'Order Execution & Market Access', 'Critical / High', 'Head of Trading / Tech Provider'],
      //     ['CRM & Client Portal', 'Client Onboarding, KYC & Accounts', 'High', 'Operations Lead'],
      //     ['Email & Communications', 'Client & Regulatory Correspondence', 'High', 'IT Operations'],
      //     ['Banking & Payment Rails', 'Deposit & Withdrawal Processing', 'High', 'Finance / Treasury'],
      //     ['Document Storage (Cloud)', 'Client Records & Compliance Archives', 'High', 'Compliance Officer'],
      //     ['Internal Analytics / Back Office', 'Reporting & Account Reconciliation', 'Medium', 'Operations Team'],
      //   ],
      // ),

      // h2('ANNEXURE C'),
      // h3('Backup Register'),
      // table(
      //   ['Backup Description', 'Frequency', 'Storage Location', 'Last Tested', 'Responsible Person'],
      //   [
      //     ['Client Databases & KYC Vault', 'Real-Time / Daily Incremental', 'Encrypted Geo-Redundant Cloud', 'Monthly', 'IT Security Lead'],
      //     ['Trading Transaction Logs', 'Continuous Real-Time Replication', 'Secondary Data Centre Vault', 'Weekly', 'Systems Administrator'],
      //     ['Accounting & Ledger Records', 'Daily Automated Snapshot', 'Cold Secure Storage', 'Monthly', 'Finance Manager'],
      //     ['Compliance & Communications Archives', 'Daily Archive Backup', 'Encrypted Compliance S3 Vault', 'Quarterly', 'Compliance Officer'],
      //   ],
      // ),

      // h2('ANNEXURE D'),
      // h3('Disaster Recovery Test Record'),
      // table(
      //   ['Test Date', 'Test Conducted', 'Outcome', 'Improvements Identified', 'Approved By'],
      //   [
      //     ['[DD/MM/YYYY]', '[Desktop Simulation / Failover Test]', '[Successful / Issues Identified]', '[Identified Action Items]', '[Key Individual / Board]'],
      //   ],
      // ),
    ],
  },

  // =========================================================================
  // 3. ANTI-MONEY LAUNDERING & SANCTIONS POLICY
  // =========================================================================
  {
    id: 3,
    pageType: 'aml-policy',
    title:
      'Anti-Money Laundering, Counter Terrorist Financing and Targeted Financial Sanctions Policy',
    effectiveDate: '2024-01-15',
    version: 'v1.0',
    body: [
      // table(['Document Information', 'Details'], [
      //   ['Policy Title', 'Anti-Money Laundering, Counter Terrorist Financing and Targeted Financial Sanctions Policy'],
      //   ['Document Number', 'NCM-AML-2024-V1'],
      //   ['Version', '1.0'],
      //   ['Policy Owner', 'Key Individual / AML Compliance Officer'],
      //   ['Approved By', 'Board of Directors'],
      //   ['Approval Date', '15 January 2024'],
      //   ['Effective Date', '15 January 2024'],
      //   ['Review Date', 'Annual'],
      // ]),

      h3('POLICY BACKGROUND'),
      p(
        'NewEra Capital Markets (Pty) Ltd ("the Company") is committed to maintaining the highest standards of integrity, ethical conduct and regulatory compliance in all its business activities. The Company recognizes that money laundering, terrorist financing and the financing of proliferation pose significant risks to the financial system, its clients and its reputation.',
      ),
      p(
        'As an authorized Financial Services Provider ("FSP") FSP 54447, the Company is committed to implementing appropriate governance measures, internal controls and risk management practices to minimize the risk of its products and services being used to facilitate financial crime.',
      ),
      p(
        "This Policy establishes the Company's governance principles for the prevention, detection and reporting of money laundering, terrorist financing and targeted financial sanctions activities. It provides a high-level framework for managing financial crime risks and supports the Company's commitment to conducting business honestly, fairly and in accordance with applicable legislative and regulatory requirements.",
      ),
      p(
        'The Company adopts a risk-based approach to Anti-Money Laundering ("AML"), Counter-Terrorist Financing ("CFT") and Targeted Financial Sanctions ("TFS"), recognizing that the level of risk presented by clients, products and business relationships may differ. Appropriate controls shall therefore be applied in proportion to the identified risks.',
      ),
      p(
        "This Policy forms part of the Company's governance framework and should be read together with the Company's Compliance Management Framework, Risk Management Policy, Conduct Risk Management Framework, Conflict of Interest Management Policy, Complaints Management Framework, Business Continuity Policy and other applicable governance documents.",
      ),

      h2('1. PURPOSE'),
      p(
        'The purpose of this Policy is to establish the governance principles and minimum standards for preventing, detecting and managing the risks associated with money laundering, terrorist financing and targeted financial sanctions.',
      ),
      p('This Policy aims to ensure that the Company:'),
      ul([
        'conducts business with integrity and transparency;',
        'complies with applicable AML/CFT legislative and regulatory requirements;',
        'adopts a risk-based approach to managing financial crime risks;',
        'implements appropriate customer due diligence measures;',
        'reports suspicious and unusual activities where required by law;',
        'maintains appropriate records to support regulatory compliance; and',
        'promotes a culture of compliance, accountability and ethical conduct throughout the organisation.',
      ]),

      h2('2. OBJECTIVES'),
      p('The objectives of this Policy are to:'),
      ul([
        'establish an effective governance framework for managing AML/CFT/TFS risks;',
        'protect the Company from being used to facilitate financial crime;',
        'support compliance with applicable legislation and regulatory requirements;',
        'promote the identification, assessment and management of financial crime risks;',
        'establish clear governance responsibilities for AML/CFT/TFS compliance;',
        'encourage the timely reporting of suspicious and unusual activities;',
        'promote staff awareness through ongoing training and communication; and',
        "support continuous monitoring and improvement of the Company's AML/CFT/TFS controls.",
      ]),

      h2('3. SCOPE'),
      p('This Policy applies to:'),
      ul([
        'the Board of Directors;',
        'the Key Individual;',
        'all Representatives;',
        'employees;',
        'contractors and outsourced service providers performing regulated activities on behalf of the Company; and',
        'all financial services, business activities and client relationships undertaken by or on behalf of the Company.',
      ]),
      p(
        "Every person to whom this Policy applies is responsible for complying with its requirements and for contributing to the Company's efforts to prevent financial crime.",
      ),

      h2('4. LEGISLATIVE AND REGULATORY FRAMEWORK'),
      p(
        'This Policy has been developed with reference to the legislative and regulatory framework applicable to the Company, including:',
      ),
      table(
        ['Legislation / Regulatory Instrument', 'Purpose'],
        [
          [
            'Financial Intelligence Centre Act 38 of 2001, as amended',
            'Establishes measures to combat money laundering, terrorist financing and proliferation financing and places obligations on accountable institutions.',
          ],
          [
            'Financial Advisory and Intermediary Services Act 37 of 2002',
            'Regulates the rendering of financial services and requires financial services to be provided honestly, fairly, with due skill, care and diligence.',
          ],
          [
            'Financial Sector Regulation Act 9 of 2017',
            'Promotes the integrity of the financial sector and the fair treatment of financial customers.',
          ],
          [
            'Protection of Personal Information Act 4 of 2013',
            'Regulates the lawful collection, processing, storage and protection of personal information.',
          ],
          [
            'Companies Act 71 of 2008',
            'Establishes corporate governance and accountability obligations for companies and directors.',
          ],
          [
            'Applicable guidance, directives and notices issued by the Financial Intelligence Centre and the Financial Sector Conduct Authority',
            'Provides regulatory guidance regarding AML/CFT obligations and financial sector conduct.',
          ],
        ],
      ),
      p(
        'The Company shall monitor legislative developments and review this Policy where necessary to ensure ongoing compliance.',
      ),

      h2('5. DEFINITIONS'),
      p('For the purposes of this Policy:'),
      table(
        ['Term', 'Definition'],
        [
          [
            'Accountable Institution (AI)',
            'An institution listed in Schedule 1 to the Financial Intelligence Centre Act, 2001 (Act 38 of 2001), that is required to comply with the obligations imposed by the Act.',
          ],
          [
            'Beneficial Owner',
            'The natural person who ultimately owns or exercises effective control over a client, legal person, partnership, trust or similar legal arrangement.',
          ],
          [
            'Business Relationship',
            'An arrangement between the Company and a client that is expected, at the time the relationship is established, to have an element of duration.',
          ],
          [
            'Counter-Terrorist Financing (CTF)',
            'Measures implemented to prevent, detect and report the financing of terrorist activities or terrorist organisations.',
          ],
          [
            'Customer Due Diligence (CDD)',
            'The process of identifying, verifying and understanding a client and the nature of the business relationship to appropriately manage financial crime risks.',
          ],
          [
            'Enhanced Due Diligence (EDD)',
            'Additional due diligence measures applied where a client or transaction presents a higher money laundering or terrorist financing risk.',
          ],
          [
            'Financial Intelligence Centre (FIC)',
            'The Financial Intelligence Centre established in terms of the Financial Intelligence Centre Act, 2001 (Act 38 of 2001), responsible for assisting in the identification and combating of money laundering, terrorist financing and related financial crimes.',
          ],
          [
            'Financial Intelligence Centre Act (FICA)',
            'The Financial Intelligence Centre Act, 2001 (Act 38 of 2001), as amended.',
          ],
          [
            'Money Laundering',
            'Any activity that has, or is likely to have, the effect of concealing or disguising the nature, source, location, disposition or movement of the proceeds of unlawful activities, or any interest that a person has in such proceeds.',
          ],
          [
            'Politically Exposed Person (PEP)',
            'An individual who holds or has held a prominent public position or function and who, because of that position, may present a higher risk of money laundering, corruption or terrorist financing.',
          ],
          [
            'Prevention of Organised Crime Act (POCA)',
            'The Prevention of Organised Crime Act, 1998 (Act 121 of 1998), which provides for offences relating to money laundering and the forfeiture of the proceeds of crime.',
          ],
          [
            'Proceeds of Crime',
            'Any financial or other benefit derived directly or indirectly from criminal activity.',
          ],
          [
            'Proceeds of Unlawful Activities',
            'Any property, service, advantage, benefit or reward acquired, received or retained, directly or indirectly, as a result of unlawful activities.',
          ],
          [
            'Single Transaction',
            'A transaction concluded outside the course of an ongoing business relationship where the value of the transaction meets or exceeds the threshold prescribed by applicable legislation.',
          ],
          [
            'Smurfing / Structuring',
            'A money laundering technique involving the splitting of large sums of money into smaller transactions to avoid detection or reporting thresholds.',
          ],
          [
            'Suspicious Activity Report (SAR)',
            'A report submitted in terms of section 29 of the Financial Intelligence Centre Act where suspicious activities are identified.',
          ],
          [
            'Suspicious Transaction Report (STR)',
            'A report submitted in terms of section 29 of the Financial Intelligence Centre Act relating to a suspicious transaction or series of transactions.',
          ],
          [
            'Targeted Financial Sanctions (TFS)',
            'Financial sanctions imposed under applicable legislation to prohibit or restrict dealings with designated persons, entities or countries.',
          ],
          [
            'Terrorist Financing',
            'The provision, collection or use of funds, property or other assets to support terrorist acts, terrorist organisations or individual terrorists.',
          ],
          [
            'Transaction',
            'Any transaction concluded between a client and an accountable institution in the ordinary course of business, whether or not it involves the movement of money.',
          ],
          [
            'Unlawful Activity',
            'Conduct that constitutes a criminal offence or contravenes any law in the Republic of South Africa or elsewhere.',
          ],
          [
            'Verification',
            'The process of confirming the identity of a client or other relevant person using reliable, independent documentation, data or information.',
          ],
        ],
      ),

      h2('6. GOVERNANCE AND RESPONSIBILITIES'),
      h3('6.1 Governance'),
      p(
        'The Board of Directors is ultimately responsible for ensuring that the Company maintains an effective Anti-Money Laundering, Counter-Terrorist Financing and Targeted Financial Sanctions ("AML/CFT/TFS") governance framework.',
      ),
      p(
        "The Board shall ensure that the Company adopts appropriate policies, systems and internal controls to identify, assess, manage and monitor financial crime risks, taking into account the nature, size and complexity of the Company's business.",
      ),

      h3('6.2 Key Individual'),
      p(
        'Mr Mongiwethu Kumalo is responsible for overseeing the implementation of this Policy and ensuring that adequate measures are maintained to support compliance with applicable AML/CFT/TFS legislation.',
      ),
      p('Mr Mongiwethu Kumalo shall:'),
      ul([
        'oversee the implementation of this Policy;',
        'monitor the effectiveness of AML/CFT/TFS controls;',
        'ensure that identified financial crime risks are appropriately managed;',
        'report material AML/CFT/TFS matters to the Board; and',
        'promote a culture of compliance throughout the Company.',
      ]),

      h3('6.3 AML Compliance Officer'),
      p(
        "The Company shall designate Nndinde Tsanwani as an AML Compliance Officer who shall be responsible for the day-to-day administration and oversight of the Company's AML/CFT/TFS controls.",
      ),
      pBold('FIC Org Number:', '73266'),
      p('Nndinde Tsanwani shall:'),
      ul([
        'oversee the implementation of this Policy;',
        'monitor compliance with AML/CFT/TFS legislative requirements;',
        'receive and assess internal reports of suspicious or unusual activities;',
        'coordinate the submission of regulatory reports where required by law;',
        'monitor legislative and regulatory developments;',
        'coordinate AML/CFT/TFS training;',
        'maintain appropriate AML records; and',
        'report material AML/CFT/TFS matters to the Key Individual and the Board.',
      ]),

      h3('6.4 Representatives and Employees'),
      p('All Representatives and employees shall:'),
      ul([
        'comply with this Policy;',
        'remain vigilant to potential money laundering and terrorist financing risks;',
        'report suspicious or unusual activities without delay;',
        'complete required AML/CFT/TFS training; and',
        'cooperate with internal reviews and regulatory enquiries where required.',
      ]),

      h3('6.5 Outsourced Service Providers'),
      p(
        'Where the Company appoints outsourced service providers to perform regulated activities on its behalf, appropriate oversight shall be maintained to ensure that such service providers comply with applicable legal, regulatory and contractual obligations.',
      ),

      h2('7. RISK-BASED APPROACH'),
      p(
        'The Company shall adopt a risk-based approach to managing money laundering, terrorist financing and targeted financial sanctions risks.',
      ),
      p('Risk assessments shall take into account factors including:'),
      ul([
        'the nature of the client;',
        'the products and services provided;',
        'the method through which business relationships are established;',
        'the geographic location of clients or transactions where relevant; and',
        'any other factors that may increase the risk of financial crime.',
      ]),
      p(
        'The level of customer due diligence, monitoring and oversight applied by the Company shall be proportionate to the level of risk identified.',
      ),
      p(
        'The Company shall periodically review its assessment of financial crime risks to ensure that its controls remain appropriate and effective.',
      ),

      h2('8. CUSTOMER DUE DILIGENCE PRINCIPLES'),
      p(
        'The Company shall take reasonable steps to establish the identity of its clients before entering into a business relationship where required by applicable legislation.',
      ),
      p('Customer due diligence measures shall be designed to:'),
      ul([
        'identify and verify the identity of clients;',
        'identify any person acting on behalf of a client where applicable;',
        'establish the nature and purpose of the business relationship;',
        'identify beneficial ownership where required; and',
        'apply enhanced scrutiny where elevated financial crime risks are identified.',
      ]),
      p(
        'Where the Company is unable to obtain sufficient information to satisfy its due diligence requirements, it shall consider whether the business relationship should proceed, subject to applicable legal obligations.',
      ),
      p(
        'The Company shall maintain customer information that is accurate, complete and, where appropriate, updated during the course of the business relationship.',
      ),
      p(
        'The Company shall implement appropriate screening measures to identify clients or beneficial owners who may be subject to applicable targeted financial sanctions or other regulatory restrictions.',
      ),
      p(
        'Where a client is a juristic person, partnership or trust, the Company shall take reasonable steps to identify and verify the natural person(s) who ultimately own or exercise effective control over the client, in accordance with applicable legislative requirements.',
      ),

      h2('9. REPORTING OBLIGATIONS'),
      p(
        'The Company is committed to complying with all applicable legal obligations relating to the reporting of suspicious or unusual activities.',
      ),
      p(
        "Representatives and employees who become aware of information or circumstances that may indicate money laundering, terrorist financing or other financial crime shall promptly report such matters through the Company's internal reporting channels.",
      ),
      p(
        'The Company shall assess reported matters and, where required by law, submit reports to the appropriate regulatory authorities within the prescribed timeframes.',
      ),
      p(
        'Employees who report suspected financial crime in good faith shall be supported and protected in accordance with applicable legislation and Company policies.',
      ),
      p(
        'The Company shall maintain appropriate records of all internal reports, investigations and regulatory reports submitted.',
      ),
      p(
        'No employee shall suffer retaliation or prejudice for reporting suspected money laundering or terrorist financing activities in good faith.',
      ),

      h2('10. RECORD KEEPING'),
      p(
        'The Company shall maintain accurate, complete and secure records to demonstrate compliance with applicable AML/CFT/TFS legislative and regulatory requirements.',
      ),
      p('Records maintained under this Policy shall include, where applicable:'),
      ul([
        'customer identification and verification records;',
        'records relating to customer due diligence activities;',
        'records of internal reports concerning suspicious or unusual activities;',
        'reports submitted to the relevant regulatory authorities, where required;',
        'AML/CFT/TFS training records; and',
        'records of policy reviews and monitoring activities.',
      ]),
      p(
        'Records shall be retained for the period prescribed by applicable legislation and shall be protected against unauthorized access, loss, alteration or destruction.',
      ),

      h2('11. TRAINING AND AWARENESS'),
      p(
        'The Company recognizes that employee awareness is essential to the effective management of money laundering, terrorist financing and targeted financial sanctions risks.',
      ),
      p(
        'The Company shall provide appropriate AML/CFT/TFS training to Representatives and employees to ensure they:',
      ),
      ul([
        'understand their obligations under this Policy;',
        'recognize indicators of potential financial crime;',
        'understand their reporting responsibilities;',
        'remain informed of significant legislative and regulatory developments; and',
        "contribute to the Company's culture of compliance and ethical conduct.",
      ]),
      p(
        "Training shall be provided upon induction and periodically thereafter, taking into account the nature of each employee's responsibilities.",
      ),

      h2('12. MONITORING AND REVIEW'),
      p(
        "The Company shall monitor the effectiveness of this Policy on an ongoing basis to ensure that it remains appropriate to the Company's operations and the evolving financial crime risk environment.",
      ),
      p('This Policy shall be reviewed at least annually, or earlier where:'),
      ul([
        'there are material legislative or regulatory changes;',
        'significant financial crime risks are identified;',
        'material compliance deficiencies are detected;',
        "there are significant changes to the Company's products, services or operations; or",
        'the Board determines that a review is necessary.',
      ]),
      p(
        "Recommendations arising from monitoring or reviews shall be considered and implemented where appropriate to strengthen the Company's AML/CFT/TFS governance framework.",
      ),
      p(
        "The effectiveness of this Policy and the Company's AML/CFT/TFS controls may be independently reviewed from time to time to assess compliance with legislative requirements and identify opportunities for improvement.",
      ),

      h2('13. POLICY GOVERNANCE'),
      h3('13.1 Policy Ownership'),
      p('This Policy is owned by the Board of Directors.'),
      p(
        'Mr Mongiwethu Kumalo is responsible for overseeing the implementation, administration and periodic review of this Policy.',
      ),

      h3('13.2 Policy Approval'),
      p(
        'This Policy shall be approved by the Board of Directors and becomes effective from the date of approval.',
      ),
      p('All material amendments to this Policy shall be submitted to the Board for approval.'),

      h3('13.3 Compliance'),
      p(
        'All Representatives, employees, contractors and outsourced service providers performing regulated activities on behalf of the Company shall comply with this Policy.',
      ),
      p(
        'Failure to comply with this Policy may result in corrective or disciplinary action and, where applicable, regulatory reporting in accordance with relevant legislation.',
      ),

      h3('13.4 Continuous Improvement'),
      p(
        'The Company is committed to continually strengthening its AML/CFT/TFS governance arrangements through ongoing monitoring, staff training, internal oversight, regulatory developments and periodic policy reviews.',
      ),

      h2('14. AML/CFT/TFS RISK INDICATORS'),
      p(
        'The following non-exhaustive indicators may assist the Company in identifying potential financial crime risks:',
      ),
      ul([
        'Clients who are unwilling or unable to provide requested identification or verification information.',
        "Transactions or instructions that are inconsistent with the client's known profile or business activities.",
        'Requests to use complex ownership or control structures without a clear commercial rationale.',
        'Unusual or unexplained changes in client behavior or transaction patterns.',
        'Attempts to avoid identification or verification requirements.',
        'Transactions involving jurisdictions identified as presenting elevated financial crime risks.',
        'Any other activity that gives rise to suspicion of money laundering, terrorist financing or the breach of targeted financial sanctions.',
      ]),
    ],
  },

  // =========================================================================
  // 4. CONFLICT OF INTEREST POLICY
  // =========================================================================
  {
    id: 4,
    pageType: 'conflicts-of-interest',
    title: 'Conflict of Interest Policy',
    effectiveDate: '2024-01-15',
    version: 'v1.0',
    body: [
      // table(['Document Information', 'Details'], [
      //   ['Policy Title', 'Conflict of Interest Policy'],
      //   ['Document Number', 'NCM-COI-2024-V1'],
      //   ['Version', '1.0'],
      //   ['Policy Owner', 'Key Individual'],
      //   ['Approved By', 'Board of Directors'],
      //   ['Effective Date', '15 January 2024'],
      //   ['Next Review Date', 'Annual'],
      //   ['Classification', 'Internal / Public Regulatory Policy'],
      // ]),

      h2('1. INTRODUCTION'),
      p(
        'Newera Capital Markets (Pty) Ltd ("the Company") is committed to conducting its business with honesty, integrity, fairness and professionalism while placing the legitimate interests of its clients at the centre of all financial services rendered. The Company recognises that conflicts of interest, whether actual, potential or perceived, may impair objective decision-making, undermine client confidence and compromise the integrity of the financial services industry if they are not appropriately identified, disclosed and managed.',
      ),
      p(
        "As a financial services provider FSP 54447, the Company acknowledges that the existence of a conflict of interest is not, in itself, unlawful. However, where conflicts are not effectively managed, they may influence the rendering of financial services in a manner that is inconsistent with the Company's fiduciary responsibilities and regulatory obligations. The Company has therefore adopted this Conflict of Interest Policy to establish a comprehensive governance framework for the identification, assessment, avoidance, mitigation, disclosure, management and ongoing monitoring of conflicts of interest arising from its business activities.",
      ),
      p(
        "This Policy forms an integral part of the Company's corporate governance framework and should be read together with the Company's Compliance Policy, Code of Ethics and Conduct, Complaints Policy, Risk Management Policy, Information Security Policy and any other governance policies that support the Company's regulatory obligations.",
      ),
      p(
        'The Board of Directors is committed to fostering a culture in which conflicts of interest are openly identified and appropriately managed through sound governance, effective internal controls, ethical leadership and individual accountability. Every director, Key Individual, representative, employee and contractor is expected to understand the requirements of this Policy and to act in a manner that promotes fair client outcomes and maintains the integrity and reputation of the Company.',
      ),
      p(
        'This Policy shall be implemented throughout the organisation and shall apply to all business activities undertaken by or on behalf of the Company.',
      ),

      h2('2. PURPOSE'),
      p(
        "The purpose of this Policy is to establish a comprehensive framework for the identification, assessment, avoidance, mitigation, disclosure, management and ongoing monitoring of actual, potential and perceived conflicts of interest that may arise in the course of the Company's business activities.",
      ),
      p(
        'The Policy seeks to ensure that the Company, its directors, Key Individuals, representatives, employees and any person acting on its behalf act honestly, fairly, with due skill, care and diligence, and in the best interests of clients, as contemplated in the Financial Advisory and Intermediary Services Act 37 of 2002 ("FAIS Act") and the General Code of Conduct for Authorised Financial Services Providers and Representatives.',
      ),
      p(
        "This Policy further seeks to promote transparency, ethical decision-making and sound corporate governance by establishing clear standards and responsibilities for the identification, disclosure and management of conflicts of interest. It is intended to minimise the risk that personal interests, financial interests, business relationships or other competing interests may improperly influence the rendering of financial services or compromise the Company's regulatory obligations.",
      ),
      p('In implementing this Policy, the Company aims to:'),
      ul([
        'promote fair client outcomes and maintain the integrity of the financial services industry;',
        'ensure compliance with applicable legislative and regulatory requirements governing conflicts of interest;',
        'provide directors, Key Individuals, representatives and employees with clear guidance regarding the identification and management of conflicts of interest;',
        'establish effective governance measures to prevent conflicts of interest from adversely affecting clients or the Company;',
        'maintain appropriate records demonstrating compliance with legislative and internal governance requirements; and',
        'foster a culture of integrity, accountability and ethical conduct throughout the organisation.',
      ]),
      p(
        "This Policy forms part of the Company's broader governance framework and should be read together with the Compliance Policy, Code of Ethics and Conduct, Complaints Policy, Risk Management Policy and all other governance policies adopted by the Company.",
      ),

      h2('3. DEFINITIONS'),
      p(
        'For purposes of this Policy, unless the context indicates otherwise, the following definitions shall apply:',
      ),
      table(
        ['Term', 'Definition'],
        [
          [
            'Applicable Legislation',
            'All legislation, subordinate legislation, conduct standards, directives, notices and regulatory requirements applicable to the Company from time to time, including but not limited to the Financial Advisory and Intermediary Services Act 37 of 2002 ("FAIS Act"), the Financial Sector Regulation Act 9 of 2017 ("FSR Act"), the General Code of Conduct for Authorised Financial Services Providers and Representatives ("General Code of Conduct"), the Determination of Fit and Proper Requirements for Financial Services Providers, 2017, the Companies Act 71 of 2008, the Protection of Personal Information Act 4 of 2013 ("POPIA"), and any directives or guidance issued by the Financial Sector Conduct Authority ("FSCA").',
          ],
          [
            'Associate',
            'Shall bear the meaning assigned to it in the General Code of Conduct and includes any person or entity that has a relationship with the Company or a relevant individual which may reasonably influence the objectivity of a decision or create a conflict of interest.',
          ],
          [
            'Board',
            'The Board of Directors of Newera Capital Markets (Pty) Ltd, which is ultimately responsible for the governance of the Company and the oversight of this Policy.',
          ],
          ['Company', 'Newera Capital Markets (Pty) Ltd.'],
          [
            'Conflict of Interest',
            'Shall bear the meaning assigned to it in the General Code of Conduct and refers to any actual or potential situation in which the interests of the Company or a relevant person may influence the objective performance of obligations to a client, or may prevent the Company from rendering unbiased and fair financial services, or from acting in the interests of a client, including but not limited to a financial interest, ownership interest, relationship or other circumstance that may impair impartiality.',
          ],
          [
            'Employee',
            'Any person employed by the Company on a permanent, temporary, fixed-term or part-time basis.',
          ],
          [
            'Financial Interest',
            'Shall bear the meaning assigned to it in the General Code of Conduct and includes any cash, cash equivalent, voucher, gift, hospitality, accommodation, sponsorship, service, benefit, discount, domestic or foreign travel, incentive or other valuable consideration, excluding those financial interests specifically excluded under the General Code of Conduct.',
          ],
          [
            'FSCA',
            'The Financial Sector Conduct Authority established in terms of section 56 of the Financial Sector Regulation Act 9 of 2017.',
          ],
          [
            'Immaterial Financial Interest',
            'A financial interest with a determinable monetary value that does not exceed the threshold prescribed (currently R1000 or less per calendar year from the same third party) from time to time in the General Code of Conduct.',
          ],
          [
            'Key Individual',
            'A person approved or appointed to manage or oversee the rendering of financial services and the activities of representatives in accordance with the FAIS Act and the Determination of Fit and Proper Requirements.',
          ],
          [
            'Ownership Interest',
            'Shall bear the meaning assigned to it in the General Code of Conduct and refers to any equity or proprietary interest for which fair value was paid by the owner at the time of acquisition, excluding interests specifically excluded by legislation.',
          ],
          [
            'Representative',
            'Any person who renders financial services to clients on behalf of the Company as contemplated in the FAIS Act.',
          ],
          [
            'Third Party',
            'Shall bear the meaning assigned to it in the General Code of Conduct and includes, where applicable, product suppliers, other financial services providers, associates and any person who provides or receives a financial interest in connection with the rendering of financial services.',
          ],
          [
            'Relevant Person',
            'Any director, Key Individual, Representative, employee, contractor or any other individual acting for or on behalf of the Company.',
          ],
        ],
      ),

      h2('4. SCOPE'),
      p(
        'This Policy applies to every director, Key Individual, Representative, employee, contractor and any other person acting for or on behalf of the Company in connection with the rendering of financial services or any activity capable of creating an actual, potential or perceived Conflict of Interest.',
      ),
      p(
        'The Policy applies to all business activities undertaken by the Company, including the provision of financial advice, intermediary services, client onboarding, product selection, remuneration arrangements, procurement, marketing, outsourcing, supplier relationships and any interaction with clients, product suppliers or Third Parties that may influence, or reasonably be perceived to influence, the impartiality of the Company or its personnel.',
      ),
      p(
        'This Policy applies to all financial products for which the Company is authorised from time to time, including Long-Term Deposits, Short-Term Deposits, Forex investment and Derivative Instruments and shall remain applicable to any additional product categories approved by the FSCA in the future.',
      ),
      p(
        "Every person to whom this Policy applies is responsible for understanding its requirements, promptly identifying circumstances that may give rise to a Conflict of Interest, making the necessary disclosures and complying with the procedures prescribed by this Policy. Compliance with this Policy forms part of the Company's broader governance and compliance framework and shall be regarded as a condition of employment, appointment or engagement.",
      ),
      p(
        'Where any provision of this Policy is inconsistent with Applicable Legislation, the legislative requirement shall prevail, and the Company shall review and amend this Policy as soon as reasonably practicable to maintain regulatory compliance.',
      ),

      h2('5. LEGISLATIVE AND REGULATORY FRAMEWORK'),
      p(
        'This Policy has been developed in accordance with the legislative and regulatory framework governing the rendering of financial services in the Republic of South Africa. The Company acknowledges that effective conflict of interest management is a fundamental component of sound corporate governance, ethical business conduct and the fair treatment of clients.',
      ),
      p(
        'In implementing this Policy, the Company shall at all times comply with the provisions of the Financial Advisory and Intermediary Services Act 37 of 2002 ("FAIS Act"), together with all subordinate legislation, conduct standards and regulatory instruments issued thereunder. Particular regard shall be had to the General Code of Conduct for Authorised Financial Services Providers and Representatives, including section 3A, which requires every financial services provider to adopt, maintain and implement an appropriate Conflict of Interest Policy and to take reasonable steps to identify, avoid or, where avoidance is not possible, mitigate conflicts of interest in order to ensure that clients are treated fairly.',
      ),
      p(
        'The Company further recognises its obligations under the Financial Sector Regulation Act 9 of 2017 ("FSR Act"), which establishes the Financial Sector Conduct Authority as the market conduct regulator responsible for supervising compliance with financial sector laws and promoting the fair treatment of financial customers.',
      ),
      p(
        'Where applicable, this Policy shall also be interpreted together with the Determination of Fit and Proper Requirements for Financial Services Providers, 2017, which prescribes standards relating to honesty, integrity, competence and operational ability expected of Key Individuals and Representatives rendering financial services.',
      ),
      p(
        'In fulfilling their duties under this Policy, directors shall also have regard to their fiduciary duties under the Companies Act 71 of 2008, including the obligation to act in good faith, for a proper purpose and in the best interests of the Company, while recognising that the Company remains subject to statutory duties requiring the fair treatment of clients.',
      ),
      p(
        'Where the identification, disclosure or management of a conflict of interest involves the processing of personal information, the Company shall comply with the requirements of the Protection of Personal Information Act 4 of 2013 ("POPIA"), ensuring that all personal information is processed lawfully, transparently and securely.',
      ),
      p(
        "This Policy shall further be read together with any applicable Conduct Standards, FSCA Directives, Exemptions, Guidance Notices and other regulatory instruments issued by the Financial Sector Conduct Authority from time to time, as well as the Company's internal governance policies and procedures.",
      ),
      p(
        'Nothing contained in this Policy shall be interpreted as limiting or replacing any obligation imposed by applicable legislation. Where there is any inconsistency between this Policy and applicable legislation, the legislative provisions shall prevail, and this Policy shall be reviewed and amended as soon as reasonably practicable.',
      ),

      h2('6. PURPOSE (GOVERNANCE INTENT)'),
      p(
        'Newera Capital Markets (Pty) Ltd is committed to conducting its business with integrity, independence, transparency and professionalism. The Company recognises that actual, potential and perceived conflicts of interest may arise during the course of its operations and accepts responsibility for establishing and maintaining effective governance arrangements to identify, assess, avoid, disclose, mitigate and monitor such conflicts.',
      ),
      p(
        'The Company is committed to ensuring that no conflict of interest compromises its ability, or the ability of its directors, Key Individuals, Representatives or employees, to render financial services honestly, fairly, with due skill, care and diligence, or to act in the best interests of clients, as required by the FAIS Act and the General Code of Conduct.',
      ),
      p(
        'Accordingly, the Company shall maintain appropriate systems, internal controls and governance processes designed to:',
      ),
      ul([
        'identify conflicts of interest before they influence decision-making or the rendering of financial services;',
        'avoid conflicts of interest wherever reasonably possible;',
        'implement appropriate mitigation measures where conflicts cannot reasonably be avoided;',
        'ensure that all material conflicts are disclosed to affected clients in a clear, timely and meaningful manner;',
        'prohibit any practice that places the interests of the Company or any associated person above the interests of its clients;',
        'maintain appropriate records of identified conflicts, disclosures, decisions and mitigation measures; and',
        "regularly review the effectiveness of this Policy and the Company's conflict management framework.",
      ]),
      p(
        'The Board, Key Individuals and senior management shall promote a culture in which ethical conduct, transparency and accountability form part of everyday business practice. Every person to whom this Policy applies is expected to exercise sound judgement, avoid circumstances that may impair objectivity and immediately disclose any actual, potential or perceived conflict of interest in accordance with this Policy.',
      ),
      p(
        'The Company shall not encourage, permit or tolerate any arrangement that could reasonably be expected to compromise its independence or prejudice the fair treatment of clients.',
      ),

      h2('7. IDENTIFICATION OF CONFLICT OF INTEREST'),
      p(
        'The Company recognises that conflicts of interest may arise in a variety of circumstances and may involve the interests of the Company, its directors, Key Individuals, Representatives, employees, clients, product suppliers, associates or other third parties. In accordance with section 3A of the General Code of Conduct for Authorised Financial Services Providers and Representatives, the Company shall establish and maintain appropriate measures to identify actual, potential and perceived conflicts of interest before they influence the rendering of financial services or compromise the fair treatment of clients.',
      ),
      p(
        "The identification of conflicts of interest forms part of the Company's governance, compliance and risk management framework. All directors, Key Individuals, Representatives and employees are required to exercise due care and professional judgement in identifying circumstances that may give rise to a conflict of interest and shall immediately report any identified conflict in accordance with this Policy.",
      ),
      p(
        'A conflict of interest may arise where the personal, financial or business interests of the Company or a Relevant Person compete, or may reasonably be perceived to compete, with the interests of a client. Conflicts may also arise where competing duties are owed to different clients or where external relationships influence, or appear to influence, the objective exercise of professional judgement.',
      ),
      p(
        'Without limiting the scope of this Policy, conflicts of interest may arise in circumstances including, but not limited to:',
      ),
      ul([
        'the receipt or offering of a Financial Interest that may influence the objective rendering of financial services;',
        'remuneration structures or incentive arrangements that encourage behaviour inconsistent with the fair treatment of clients;',
        'personal, family or business relationships with clients, product suppliers, service providers or other Third Parties;',
        'ownership interests or other financial interests in entities with which the Company conducts business;',
        "outside employment, directorships or business activities that may impair a person's independence or objectivity;",
        'procurement or supplier selection processes where a Relevant Person has a direct or indirect personal interest;',
        'access to confidential or price-sensitive information that may create an opportunity for personal benefit; or',
        'any other circumstance that may reasonably be expected to impair impartiality or create a conflict between the interests of the Company, a Relevant Person and a client.',
      ]),
      p(
        'The Company acknowledges that not every conflict of interest can be avoided. Where a conflict cannot reasonably be avoided, it shall be assessed, appropriately managed, adequately disclosed where required, and continuously monitored to ensure that the interests of clients remain paramount.',
      ),
      p(
        'The Company shall periodically review its business activities, remuneration practices, relationships with product suppliers and Third Parties, governance arrangements and operational processes to identify emerging conflict risks and implement appropriate measures to address them.',
      ),

      h2('8. AVOIDANCE AND MANAGEMENT OF CONFLICT OF INTEREST'),
      p(
        "The Company is committed to avoiding conflicts of interest wherever reasonably possible. Where avoidance is not possible due to the nature of the business relationship or the services being rendered, the Company shall implement appropriate measures to manage and mitigate the conflict in a manner that ensures clients are treated fairly and that the Company's regulatory obligations are fulfilled.",
      ),
      p(
        "In managing conflicts of interest, the Company shall adopt a risk-based approach, taking into account the nature of the conflict, the potential impact on clients, the likelihood of the conflict influencing decision-making and the effectiveness of available mitigation measures. Appropriate controls shall be implemented to ensure that identified conflicts do not compromise the Company's ability to render financial services honestly, fairly, with due skill, care and diligence.",
      ),
      p('Depending on the nature of the conflict, mitigation measures may include:'),
      ul([
        'requiring the Relevant Person to make a written disclosure of the conflict;',
        "restricting the Relevant Person's participation in the relevant decision-making process;",
        'implementing independent oversight or supervisory review;',
        'segregating duties or responsibilities where appropriate;',
        'declining or terminating a business relationship where the conflict cannot be adequately managed; or',
        'disclosing the conflict to the affected client where disclosure is required by law or is necessary to enable the client to make an informed decision.',
      ]),
      p(
        'Where the Company determines that a conflict of interest cannot be effectively managed without prejudicing the interests of a client or compromising compliance with Applicable Legislation, the Company shall refrain from undertaking the relevant activity or transaction.',
      ),
      p(
        'Mr Kumalo Mongiwethu shall ensure that all identified conflicts of interest are appropriately assessed, documented and managed in accordance with this Policy, and that suitable records are maintained to demonstrate compliance with the requirements of the General Code of Conduct.',
      ),
      p(
        'The Company shall review the effectiveness of conflict mitigation measures on an ongoing basis and shall revise those measures where necessary to respond to changes in legislation, business activities, products, services or emerging compliance risks.',
      ),

      h2('9. FINANCIAL INTERESTS'),
      p(
        'The Company recognises that the offering, solicitation or acceptance of a Financial Interest has the potential to create actual, potential or perceived conflicts of interest that may compromise the objectivity of financial services rendered to clients. Accordingly, the Company shall ensure that all Financial Interests are managed in a manner that promotes transparency, independence and the fair treatment of clients.',
      ),
      p(
        'The Company shall not offer, provide, solicit or receive a Financial Interest except where such Financial Interest is permitted in terms of the General Code of Conduct or any other Applicable Legislation. In this regard, the Company shall ensure that any Financial Interest received from or provided to a Third Party complies with the limitations and conditions prescribed by law and does not improperly influence the rendering of financial services.',
      ),
      p(
        'Where a Financial Interest is capable of influencing, or may reasonably be perceived to influence, the objective exercise of professional judgement, the Relevant Person shall immediately disclose the matter to Mr Kumalo Mongiwethu and refrain from participating in any decision or activity until the conflict has been appropriately assessed.',
      ),
      p(
        "The Company shall maintain appropriate procedures to identify, evaluate and monitor Financial Interests received or provided in connection with its business activities. Such procedures shall include periodic reviews of remuneration arrangements, supplier relationships, commission structures, referral arrangements and any other incentives that may influence the Company's ability to act in the best interests of its clients.",
      ),
      p(
        "Mr Kumalo Mongiwethu shall ensure that all Financial Interests requiring disclosure or assessment are appropriately recorded and retained in accordance with this Policy and the Company's record management procedures.",
      ),

      h2('10. GIFTS, HOSPITALITY AND OTHER BENEFITS'),
      p(
        'The Company acknowledges that gifts, hospitality, sponsorships, entertainment and other benefits may strengthen legitimate business relationships. However, where such benefits are excessive, frequent or inappropriate, they may create a Conflict of Interest or give rise to a reasonable perception that business decisions have been improperly influenced.',
      ),
      p(
        'Accordingly, no Relevant Person may solicit, offer or accept any gift, hospitality or other benefit that could reasonably be expected to compromise, or appear to compromise, their independence, objectivity or ability to act in the best interests of clients.',
      ),
      p(
        'Any gift or hospitality offered or received shall be assessed having regard to its nature, value, frequency, purpose, timing and the surrounding circumstances. Particular consideration shall be given to whether the benefit could reasonably be perceived as an inducement to recommend a financial product, favour a particular product supplier or otherwise influence the rendering of financial services.',
      ),
      p(
        'Where there is uncertainty regarding the appropriateness of a proposed gift or hospitality, the Relevant Person shall obtain written approval from Mr Kumalo Mongiwethu before accepting or offering the benefit.',
      ),
      p(
        "The Company shall maintain a Gifts, Hospitality and Entertainment Register recording all gifts and hospitality that meet the reporting thresholds determined by the Company. The Register shall be reviewed periodically by Mr Kumalo Mongiwethu as part of the Company's ongoing compliance monitoring programme.",
      ),
      p(
        "Cash gifts or cash equivalents shall not be accepted or offered unless expressly permitted by Applicable Legislation and approved in accordance with the Company's governance procedures.",
      ),

      h2('11. ASSOCIATES, THIRD PARTIES AND OWNERSHIP INTERESTS'),
      p(
        'The Company recognises that business relationships with Associates, Third Parties and entities in which the Company or a Relevant Person holds an Ownership Interest may create circumstances capable of influencing the impartial rendering of financial services.',
      ),
      p(
        'Before entering into any business relationship with a Third Party or Associate, the Company shall undertake appropriate due diligence to identify any actual, potential or perceived Conflict of Interest that may arise from the proposed relationship. Such due diligence shall consider ownership structures, existing commercial relationships, remuneration arrangements, referral agreements and any other circumstances that may affect the independence of the Company or its personnel.',
      ),
      p(
        'Where a Relevant Person has a direct or indirect Ownership Interest in a product supplier, service provider or any other entity with which the Company conducts business, that interest shall be disclosed to Mr Kumalo Mongiwethu at the earliest reasonable opportunity. The Company shall assess whether the Ownership Interest creates a Conflict of Interest requiring mitigation, disclosure or, where appropriate, the withdrawal of the Relevant Person from the relevant decision-making process.',
      ),
      p(
        'The Company shall not enter into, maintain or continue any business relationship that is likely to compromise its ability to render financial services honestly, fairly, with due skill, care and diligence or that is inconsistent with its obligations under the FAIS Act and the General Code of Conduct.',
      ),
      p(
        "Relationships with Associates and Third Parties shall be reviewed periodically to ensure that they remain appropriate, transparent and consistent with the Company's regulatory obligations and governance standards.",
      ),

      h2('12. DISCLOSURE OF CONFLICT OF INTEREST'),
      p(
        'The Company is committed to ensuring that all actual, potential and perceived Conflicts of Interest are disclosed in a manner that is timely, accurate, complete and meaningful. Disclosure is intended to promote transparency, enable informed decision-making by clients and assist the Company in maintaining the integrity of its financial services.',
      ),
      p(
        'In accordance with section 3A of the General Code of Conduct for Authorised Financial Services Providers and Representatives, where a Conflict of Interest cannot reasonably be avoided, the Company shall take appropriate measures to mitigate the conflict and make adequate disclosure to the affected client before rendering the relevant financial service or concluding the relevant transaction.',
      ),
      p(
        'The disclosure shall be sufficiently detailed to enable the client to understand the nature of the Conflict of Interest, the parties involved, the potential impact on the financial service being rendered and the measures implemented by the Company to manage or mitigate the conflict. Generic or incomplete disclosures shall not be regarded as adequate for the purposes of this Policy.',
      ),
      p(
        'Every Relevant Person is responsible for disclosing any actual, potential or perceived Conflict of Interest immediately upon becoming aware of the circumstances giving rise to the conflict. Such disclosure shall be made to Mr Kumalo Mongiwethu using the prescribed Conflict of Interest Disclosure Form contained in Annexure A of this Policy.',
      ),
      p(
        "Mr Kumalo Mongiwethu shall assess each disclosure to determine the materiality of the Conflict of Interest, the potential impact on the Company's regulatory obligations and whether additional mitigation measures or client disclosures are required. Where necessary, the matter may be escalated to the Board for consideration and direction.",
      ),
      p(
        "All disclosures made in terms of this Policy shall be recorded in the Company's Conflict of Interest Register and retained in accordance with the Company's Record Management and Retention Policy.",
      ),

      h2('13. ROLES AND RESPONSIBILITIES'),
      p(
        "Effective management of Conflicts of Interest requires the active participation of the Board, Key Individuals, Representatives, employees and other Relevant Persons. Responsibility for managing conflicts of interest cannot be delegated solely to the compliance function and forms part of the Company's overall governance framework.",
      ),

      h3('13.1 Board of Directors'),
      p('The Board is ultimately responsible for the governance of the Company and shall:'),
      ul([
        'approve this Policy and any subsequent amendments;',
        'promote a culture of ethical conduct and integrity throughout the Company;',
        "oversee the effectiveness of the Company's conflict management framework;",
        'consider material conflicts of interest referred by the Key Individual;',
        'ensure that adequate resources are available to implement this Policy; and',
        'review reports concerning significant conflicts, emerging risks and material breaches of this Policy.',
      ]),

      h3('13.2 Key Individual'),
      p(
        'Mr Kumalo Mongiwethu is responsible for the day-to-day implementation of this Policy and shall:',
      ),
      ul([
        'oversee compliance with this Policy;',
        'assess and determine appropriate mitigation measures for disclosed conflicts;',
        'maintain the Conflict of Interest Register;',
        'ensure that appropriate disclosures are made to clients where required;',
        'provide guidance to Representatives and employees regarding the application of this Policy;',
        'report material conflict matters to the Board where appropriate; and',
        'ensure that periodic reviews of this Policy are undertaken.',
      ]),

      h3('13.3 Representatives and Employees'),
      p('Every Representative and employee shall:'),
      ul([
        'familiarise themselves with this Policy;',
        'identify and disclose actual, potential and perceived Conflicts of Interest;',
        'refrain from participating in decisions where an undisclosed Conflict of Interest exists;',
        'cooperate with investigations relating to identified conflicts; and',
        'act honestly, fairly, with due skill, care and diligence when rendering financial services.',
      ]),

      h3('13.4 Compliance Function'),
      p(
        "The Compliance Function shall monitor compliance with this Policy as part of the Company's overall compliance monitoring programme and shall:",
      ),
      ul([
        'assess the effectiveness of conflict management controls;',
        'monitor compliance with applicable legislation;',
        'report material findings to Mr Kumalo Mongiwethu and the Board, where appropriate;',
        'recommend improvements to conflict management processes; and',
        'verify that appropriate records and registers are maintained.',
      ]),

      h3('Responsibility Matrix'),
      table(
        [
          'Responsibility',
          'Board',
          'Key Individual',
          'Compliance Function',
          'Representative',
          'Employees',
        ],
        [
          ['Approve Policy', '✔', '', '', '', ''],
          ['Monitor Implementation', '✔', '✔', '✔', '', ''],
          ['Maintain Register', '', '✔', '✔', '', ''],
          ['Disclose Conflicts', '', '', '', '✔', '✔'],
          ['Report Breaches', '', '✔', '✔', '✔', '✔'],
          ['Annual Review', '✔', '✔', '✔', '', ''],
        ],
      ),

      h2('14. CONFLICT OF INTEREST REGISTER'),
      p(
        'The Company shall establish and maintain a Conflict of Interest Register for the purpose of recording all actual, potential and perceived Conflicts of Interest identified in the course of its business activities.',
      ),
      p(
        'The Register shall include sufficient information to demonstrate the nature of the Conflict of Interest, the individuals involved, the date on which the conflict was identified, the assessment undertaken, the mitigation measures implemented, whether client disclosure was required and the final outcome of the matter.',
      ),
      p(
        "The Register shall be maintained by Mr Kumalo Mongiwethu and shall be reviewed periodically as part of the Company's compliance monitoring programme to identify recurring issues, emerging trends and opportunities to strengthen internal controls.",
      ),
      p(
        'Where a Conflict of Interest remains ongoing, the Register shall record the outcome of periodic reviews and any amendments to the mitigation measures implemented by the Company.',
      ),
      p(
        'The Register shall be treated as a confidential governance record and shall only be accessible to authorised persons with a legitimate business need or where disclosure is required by law or by a regulatory authority.',
      ),

      h2('15. COMPLIANCE MONITORING AND REPORTING'),
      p(
        "The Company shall maintain an effective compliance monitoring programme to assess the implementation of this Policy, identify emerging conflict of interest risks and evaluate the effectiveness of the controls established to manage such risks. Compliance monitoring shall form part of the Company's broader compliance and risk management framework and shall be conducted on a risk-based basis, taking into account the nature, size and complexity of the Company's business activities.",
      ),
      p(
        'Mr Kumalo Mongiwethu, with the support of the Compliance Function where applicable, shall ensure that periodic monitoring activities are undertaken to verify compliance with this Policy, the General Code of Conduct and all other Applicable Legislation governing conflicts of interest.',
      ),
      p('Monitoring activities may include, amongst others, reviews of:'),
      ul([
        'client files and advice records;',
        'remuneration and incentive arrangements;',
        'gifts, hospitality and entertainment records;',
        'conflict of interest disclosures;',
        'the Conflict of Interest Register;',
        'relationships with product suppliers, Associates and Third Parties;',
        'complaints that may indicate the existence of undisclosed conflicts of interest; and',
        'any other operational activity identified as presenting a conflict risk.',
      ]),
      p(
        'The outcome of compliance monitoring activities shall be documented and, where appropriate, reported to the Board. Reports shall identify deficiencies, recommend corrective action and monitor the implementation of agreed remedial measures.',
      ),
      p(
        'Where monitoring identifies recurring or systemic weaknesses, the Company shall undertake an assessment of the underlying causes and implement appropriate corrective measures to prevent recurrence.',
      ),

      h2('16. TRAINING AND AWARENESS'),
      p(
        'The Company recognises that effective conflict of interest management depends upon employees and Representatives understanding both their legal obligations and the practical application of this Policy. The Company shall therefore establish and maintain an ongoing training and awareness programme designed to promote ethical conduct and compliance with Applicable Legislation.',
      ),
      p(
        "Every Relevant Person shall receive appropriate training on this Policy upon commencement of their employment or engagement with the Company and shall receive refresher training at appropriate intervals thereafter. Additional training shall be provided whenever there are material amendments to Applicable Legislation, this Policy or the Company's conflict management processes.",
      ),
      p('Training shall, where appropriate, address:'),
      ul([
        'the identification of actual, potential and perceived Conflicts of Interest;',
        'statutory obligations under the FAIS Act and the General Code of Conduct;',
        'disclosure obligations;',
        'Financial Interests and prohibited practices;',
        'gifts, hospitality and entertainment;',
        'reporting procedures;',
        "practical case studies relevant to the Company's business activities; and",
        'the consequences of non-compliance.',
      ]),
      p(
        'The Company shall maintain appropriate records of all training conducted, including attendance registers, training material, competency assessments and any remedial training provided.',
      ),

      h2('17. RECORD KEEPING'),
      p(
        "The Company shall maintain complete, accurate and reliable records demonstrating compliance with this Policy and all Applicable Legislation. Records shall be retained in accordance with the Company's Record Management and Retention Policy and any statutory retention periods prescribed by law.",
      ),
      p(
        'Without limiting the generality of the above, the Company shall maintain records relating to:',
      ),
      ul([
        'Conflict of Interest Disclosure Forms;',
        'the Conflict of Interest Register;',
        'Gifts, Hospitality and Entertainment Register;',
        'conflict assessments and mitigation measures;',
        'client disclosures;',
        'Board and management decisions relating to conflicts of interest;',
        'compliance monitoring reports;',
        'investigation reports;',
        'training records; and',
        'any other documentation necessary to demonstrate compliance with this Policy.',
      ]),
      p(
        'Records may be maintained in electronic or physical format, provided that they remain secure, readily retrievable, protected against unauthorised alteration or destruction and capable of being reproduced in a legible format throughout the applicable retention period.',
      ),
      p(
        "Access to conflict of interest records shall be restricted to authorised persons and shall be managed in accordance with the Protection of Personal Information Act 4 of 2013 and the Company's Information Security Policy.",
      ),

      h2('18. BREACHES OF THIS POLICY'),
      p(
        'Compliance with this Policy is mandatory. Every Relevant Person has an obligation to report any actual or suspected breach of this Policy immediately upon becoming aware of the circumstances.',
      ),
      p(
        'Where a breach is reported or identified, the Company shall conduct an appropriate investigation to determine:',
      ),
      ul([
        'the nature and extent of the breach;',
        'the persons involved;',
        'whether any client has suffered, or may suffer, prejudice;',
        'whether Applicable Legislation has been contravened;',
        'the root cause of the breach; and',
        'the corrective measures necessary to prevent recurrence.',
      ]),
      p(
        'Where appropriate, corrective measures may include additional supervision, enhanced monitoring, further training, amendments to internal controls, disciplinary action, termination of contractual arrangements or any other action considered necessary by the Company.',
      ),
      p(
        'Where a breach constitutes a reportable regulatory matter, the Company shall notify the Financial Sector Conduct Authority or any other competent authority where required by Applicable Legislation.',
      ),
      p(
        "Nothing contained in this Policy prevents any person from reporting unlawful or unethical conduct through the Company's whistleblowing procedures or directly to a competent regulatory authority where permitted by law.",
      ),

      h2('19. POLICY REVIEW'),
      p(
        "This Policy shall be reviewed at least annually, or more frequently where required as a result of legislative amendments, regulatory developments, changes to the Company's business activities, operational requirements or recommendations arising from compliance monitoring, internal audit findings or Board resolutions.",
      ),
      p(
        'Responsibility for initiating the review of this Policy rests with Mr Kumalo Mongiwethu, who shall consult with the Compliance Function, senior management and other relevant stakeholders before submitting any proposed amendments to the Board for approval.',
      ),
      p(
        'Where amendments are approved, the Company shall ensure that all Relevant Persons are informed of the changes and, where necessary, receive appropriate training to support the effective implementation of the revised Policy.',
      ),
      p(
        'The most recent approved version of this Policy shall replace all previous versions and shall be made readily available to all Relevant Persons.',
      ),

      h2('20. APPROVAL'),
      p(
        'This Policy has been approved by the Board of Directors of Newera Capital Markets (Pty) Ltd and shall remain in force until amended or withdrawn by the Board.',
      ),
      table(
        ['Document Information', 'Details'],
        [
          ['Policy Owner', 'Key Individual (Mr Kumalo Mongiwethu)'],
          ['Approved By', 'Board of Directors'],
          ['Effective Date', '15 January 2024'],
          ['Version', '1.0'],
          ['Next review Date', 'Annual (January 2025)'],
          ['Classification', 'Internal / Public Regulatory Policy'],
        ],
      ),

      //   h2('ANNEXURE A'),
      //   h3('Conflict of Interest Disclosure Form'),
      //   h4('1. Employee/Representative Details'),
      //   table(['Item', 'Information'], [
      //     ['Full Name', '[Employee / Representative Name]'],
      //     ['Position', '[Job Title / Role]'],
      //     ['Department', '[Department / Branch]'],
      //     ['Date of Disclosure', '[DD/MM/YYYY]'],
      //     ['Employee Number (if applicable)', '[Employee ID]'],
      //   ]),
      //   h4('2. Details of the Conflict of Interest'),
      //   table(['Item', 'Information'], [
      //     ['Nature of Conflict', 'Actual / Potential / Perceived (Checkbox)'],
      //     ['Date of Conflict Identified', '[Date Identified]'],
      //     ['Persons or Organisations Involved', '[Names & Entities Involved]'],
      //     ['Does the conflict involve a client', 'Yes / No (Provide client details if yes)'],
      //   ]),
      //   h4('3. Description of the Conflict'),
      //   p('Provide a full description of the circumstances giving rise to the Conflict of Interest.'),
      //   h4('4. Potential Impact'),
      //   p('Describe how the Conflict of Interest could affect: the client; the Company; regulatory compliance; or your ability to act objectively.'),
      //   h4('5. Proposed Mitigation Measures'),
      //   p('Detail proposed measures to eliminate, isolate or manage the conflict of interest.'),
      //   h4('6. Declaration'),
      //   p(
      //     'I declare that the information contained in this disclosure is true and complete to the best of my knowledge. I undertake to immediately notify the Company should any of the circumstances described above change.',
      //   ),
      //   pBold('Signature & Date:', '[Employee Signature] · [Date]'),
      //   h4('7. Assessment by Key Individual'),
      //   table(['Item', 'Assessment'], [
      //     ['Risk Rating', 'Low / Medium / High / Critical'],
      //     ['Conflict Confirmed', 'Yes / No'],
      //     ['Client Disclosure Required', 'Yes / No'],
      //     ['Mitigating Measures Approved', 'Approved / Revised / Rejected'],
      //     ['Additional Comments', '[Notes & Directives from Key Individual]'],
      //   ]),
      //   pBold('Key Individual:', 'Mr Kumalo Mongiwethu · [Signature] · [Date]'),

      //   h2('ANNEXURE B'),
      //   h3('Conflict of Interest Register'),
      //   table(
      //     ['Ref No.', 'Date Identified', 'Relevant Person', 'Description of Conflict', 'Actual / Potential / Perceived', 'Risk Rating', 'Mitigation Measures', 'Client Disclosure', 'Status', 'Review Date'],
      //     [
      //       ['[COI-001]', '[DD/MM/YYYY]', '[Name]', '[Detailed Conflict Context]', '[Actual / Potential / Perceived]', '[Low/Med/High]', '[Control Measures Applied]', '[Yes / No / N/A]', '[Active / Resolved]', '[DD/MM/YYYY]'],
      //     ],
      //   ),

      //   h2('ANNEXURE C'),
      //   h3('Gifts, Hospitality and Entertainment Register'),
      //   table(
      //     ['Date', 'Provider / Recipient', 'Description', 'Estimated Value', 'Business Purpose', 'Approved by Key Individual', 'Recorded By'],
      //     [
      //       ['[DD/MM/YYYY]', '[Third Party / Staff Name]', '[Nature of Gift/Hospitality]', '[Value in ZAR (max R1,000 threshold)]', '[Legitimate Business Purpose]', '[Approved / Declined]', '[Compliance Officer]'],
      //     ],
      //   ),
      //   p(
      //     'Declaration: I confirm that the gift, hospitality or entertainment recorded above complies with the requirements of the Conflict of Interest Policy and the General Code of Conduct.',
      //   ),

      //   h2('ANNEXURE D'),
      //   h3('Annual Conflict of Interest Declaration'),
      //   p(
      //     'I, [Full Name], holding the position of [Role / Title], declare that:',
      //   ),
      //   ul([
      //     'I have read and understood the Company\'s Conflict of Interest Policy.',
      //     'I understand my obligations under the Policy and Applicable Legislation.',
      //     'I have disclosed all actual, potential and perceived Conflicts of Interest of which I am aware.',
      //     'I will immediately disclose any new Conflict of Interest that may arise.',
      //     'I will comply with the requirements of the Policy at all times.',
      //   ]),
      //   pBold('Signature & Date:', '___________________________ · Date: ___________________'),

      //   h2('ANNEXURE E'),
      //   h3('Conflict of Interest Assessment Checklist'),
      //   table(
      //     ['Assessment Question', 'Yes', 'No', 'Comments'],
      //     [
      //       ['Has a Conflict of Interest been identified?', '☐', '☐', '[Analysis details]'],
      //       ['Does it involve a client?', '☐', '☐', '[Client identification]'],
      //       ['Does it involve a Financial Interest?', '☐', '☐', '[Value and nature]'],
      //       ['Can the conflict be avoided?', '☐', '☐', '[Avoidance evaluation]'],
      //       ['If not, can it be adequately mitigated?', '☐', '☐', '[Mitigation strategy]'],
      //       ['Is client disclosure required?', '☐', '☐', '[Form of written disclosure]'],
      //       ['Is Board approval required?', '☐', '☐', '[Governance escalation]'],
      //       ['Are additional controls required?', '☐', '☐', '[Follow-up monitoring]'],
      //     ],
      //   ),
      //   pBold('Overall Assessment & Action:', '[Documented Findings and Recommendations]'),
      //   pBold('Completed by:', '[Name] · [Signature] · [Date]'),

      //   h2('ANNEXURE F'),
      //   h3('Conflict of Interest Investigation Report'),
      //   table(['Item', 'Information'], [
      //     ['Investigation Reference', '[INV-COI-001]'],
      //     ['Date Reported', '[DD/MM/YYYY]'],
      //     ['Investigator', '[Assigned Compliance Lead]'],
      //     ['Person(s) Involved', '[Names & Titles]'],
      //     ['Nature of Alleged Conflict', '[Comprehensive description]'],
      //     ['Investigation Conducted', '[Interviews, system logs, transaction trails, supplier contracts]'],
      //     ['Findings', '[Confirmed facts and regulatory breaches]'],
      //     ['Root Cause Analysis', '[Governance/process/individual failure]'],
      //     ['Corrective Action', '[Disciplinary/remedial actions]'],
      //     ['Recommendations', '[Policy amendments, process redesign]'],
      //     ['Outcome', '☐ No Conflict Identified · ☐ Conflict Managed · ☐ Further Action Required · ☐ Disciplinary Action Recommended · ☐ Regulatory Notification Required'],
      //   ]),
      //   pBold('Approval:', 'Investigator: [Signature] [Date] | Key Individual: [Signature] [Date]'),
    ],
  },

  // =========================================================================
  // 5. RISK MANAGEMENT POLICY
  // =========================================================================
  {
    id: 5,
    pageType: 'risk-management-policy',
    title: 'Risk Management Policy',
    effectiveDate: '2024-01-15',
    version: 'v1.0',
    body: [
      // table(['Document Information', 'Details'], [
      //   ['Policy Title', 'Risk Management Policy'],
      //   ['Document Number', 'NCM-RMP-2024-V1'],
      //   ['Version', '1.0'],
      //   ['Policy Owner', 'Key Individual'],
      //   ['Approved By', 'Board of Directors'],
      //   ['Approval Date', '15 January 2024'],
      //   ['Effective Date', '15 January 2024'],
      //   ['Review Date', 'Annual'],
      // ]),

      h3('POLICY BACKGROUND'),
      p(
        "NewEra Capital Markets (Pty) Ltd, FSP 54447 recognizes that effective risk management is fundamental to achieving its strategic objectives, maintaining regulatory compliance and protecting the interests of its clients and stakeholders. This Policy forms part of the Company's Governance Framework and supports the Board of Directors in discharging its oversight responsibilities by establishing a structured approach to enterprise risk management.",
      ),

      h2('1. PURPOSE'),
      p(
        'The purpose of this Risk Management Policy ("Policy") is to establish a comprehensive and integrated framework for the identification, assessment, management, monitoring and reporting of risks that may affect the achievement of NewEra Capital Markets (Pty) Ltd\'s ("the Company") strategic objectives, operational effectiveness, financial soundness, regulatory compliance and the fair treatment of customers.',
      ),
      p(
        'The Company recognizes that effective risk management is a fundamental component of sound corporate governance and prudent business management. This Policy provides the principles, governance arrangements and processes through which risks are identified, evaluated, controlled and monitored to ensure that the Company remains resilient, sustainable and capable of fulfilling its obligations to clients, regulators, product suppliers and other stakeholders.',
      ),
      p(
        "Risk management forms an integral part of the Company's governance framework and supports informed decision-making across all levels of the organisation. The Company is committed to embedding risk management into its strategic planning, business operations, compliance activities and internal control environment to promote a proactive risk culture and continuous improvement.",
      ),
      p(
        "This Policy further supports the Company's commitment to delivering financial services honestly, fairly, with due skill, care and diligence, while promoting sound governance, protecting client interests and maintaining confidence in the integrity of the Company's operations.",
      ),

      h2('2. OBJECTIVES'),
      p('The objectives of this Policy are to:'),
      ul([
        'establish a structured and consistent approach to enterprise risk management throughout the Company;',
        'integrate risk management into strategic planning, governance, operational decision-making and business processes;',
        "identify, assess, evaluate, mitigate and monitor risks that may affect the achievement of the Company's strategic and operational objectives;",
        'support compliance with applicable legislative and regulatory requirements, including the Financial Advisory and Intermediary Services Act 37 of 2002 ("FAIS Act"), the Financial Sector Regulation Act 9 of 2017 and other applicable financial sector legislation;',
        'promote the effective management of strategic, operational, financial, compliance, conduct, information technology, cyber security and reputational risks;',
        "strengthen the Company's operational resilience and ability to respond effectively to emerging risks and disruptive events;",
        'support the Treating Customers Fairly ("TCF") principles by ensuring that conduct risk and customer outcomes are considered in business decisions;',
        'establish appropriate governance structures, reporting mechanisms and accountability for risk management; and',
        'promote a culture of continuous improvement, ethical conduct and responsible risk-taking throughout the Company.',
      ]),

      h2('3. SCOPE'),
      p(
        'This Policy applies to all directors, the Key Individual, Representatives, employees, contractors and, where applicable, outsourced service providers performing services on behalf of the Company.',
      ),
      p(
        'The Policy applies to all business activities, operational processes, products, services, projects, systems, information assets and strategic initiatives undertaken by the Company.',
      ),
      p(
        'All persons to whom this Policy applies are responsible for identifying, managing and reporting risks within their respective areas of responsibility and for complying with the risk management processes established by the Company.',
      ),
      p(
        "Risk management shall be embedded throughout the Company's governance framework and shall be applied proportionately, taking into account the nature, size and complexity of the Company's business operations.",
      ),
      p(
        "This Policy shall be read together with the Company's Business Plan, Compliance Management Framework, Business Continuity Policy, Disaster Recovery Plan, Financial Recovery Plan, Conflict of Interest Management Policy, Code of Ethics and Conduct and other governance documents forming part of the Company's overall governance framework.",
      ),

      h2('4. LEGISLATIVE AND REGULATORY FRAMEWORK'),
      p(
        "This Policy has been developed with due consideration to the legislative and regulatory framework governing the Company's operations as a Financial Services Provider. The Company shall ensure that its risk management practices remain aligned with applicable legislation, regulatory requirements and recognised principles of sound corporate governance.",
      ),
      p('The primary legislative and regulatory framework applicable to this Policy includes:'),
      table(
        ['Legislation / Regulatory Instrument', 'Relevance to this Policy'],
        [
          [
            'Financial Advisory and Intermediary Services Act 37 of 2002 (FAIS Act)',
            'Establishes the regulatory framework governing the rendering of financial services and requires the Company to maintain appropriate governance, risk management and internal control arrangements.',
          ],
          [
            'Financial Sector Regulation Act 9 of 2017',
            'Provides the overarching regulatory framework for the South African financial sector and promotes the safety, soundness and fair treatment of financial customers.',
          ],
          [
            'Companies Act 71 of 2008',
            'Establishes the duties and responsibilities of directors and supports sound corporate governance, accountability and risk oversight.',
          ],
          [
            'Protection of Personal Information Act 4 of 2013 (POPIA)',
            'Requires the Company to identify and manage risks relating to the protection, confidentiality and lawful processing of personal information.',
          ],
          [
            'Financial Intelligence Centre Act 38 of 2001 (where applicable)',
            'Requires the identification, assessment and management of money laundering and terrorist financing risks where the Company is subject to the Act.',
          ],
          [
            'Applicable FSCA Conduct Standards',
            'Establish governance and conduct requirements intended to promote market integrity, effective governance and fair customer outcomes.',
          ],
        ],
      ),
      p(
        'The Company shall monitor legislative and regulatory developments on an ongoing basis and, where necessary, update this Policy and its associated risk management processes to ensure continued compliance.',
      ),

      h2('5. DEFINITIONS'),
      p('For the purposes of this Policy, the following definitions apply:'),
      table(
        ['Term', 'Definition'],
        [
          [
            'Control',
            'A policy, procedure, process or activity implemented to prevent, detect or reduce the likelihood or impact of a risk.',
          ],
          [
            'Conduct Risk',
            "The risk that the Company's conduct, actions or omissions may result in poor customer outcomes, market misconduct or regulatory breaches.",
          ],
          [
            'Inherent Risk',
            'The level of risk that exists before the implementation of any controls or mitigating measures.',
          ],
          [
            'Key Risk Indicator (KRI)',
            'A measurable metric used to provide early warning of increasing risk exposure.',
          ],
          [
            'Residual Risk',
            'The level of risk that remains after controls and mitigating measures have been implemented.',
          ],
          [
            'Risk',
            "The possibility that an event or circumstance may affect the achievement of the Company's objectives, whether positively or negatively.",
          ],
          [
            'Risk Appetite',
            'The amount and type of risk that the Company is willing to accept in pursuit of its strategic objectives.',
          ],
          [
            'Risk Assessment',
            'The process of identifying, analysing and evaluating risks to determine their significance and appropriate treatment.',
          ],
          [
            'Risk Owner',
            'The individual responsible for managing and monitoring a specific risk and ensuring that appropriate controls are implemented.',
          ],
          [
            'Risk Tolerance',
            "The acceptable level of variation from the Company's risk appetite before management action is required.",
          ],
        ],
      ),

      h2('6. POLICY STATEMENT'),
      p(
        'NewEra Capital Markets (Pty) Ltd ("the Company") is committed to maintaining a comprehensive, effective and proportionate enterprise risk management framework that supports the achievement of its strategic objectives, protects the interests of clients and stakeholders, promotes regulatory compliance and strengthens the Company\'s operational resilience.',
      ),
      p(
        "The Company recognizes that risk is inherent in all business activities and that effective risk management is fundamental to sound corporate governance, prudent decision-making and the long-term sustainability of the business. Accordingly, risk management shall be integrated into the Company's governance framework, strategic planning, operational activities, compliance management processes and internal control environment.",
      ),
      p('The Company is committed to:'),
      ul([
        'establishing and maintaining an enterprise-wide risk management framework appropriate to the nature, size and complexity of its business;',
        'identifying, assessing, managing, monitoring and reporting risks on an ongoing basis;',
        'embedding risk management into business planning and operational decision-making;',
        'maintaining effective internal controls to mitigate identified risks;',
        'promoting a proactive risk-aware culture throughout the organisation;',
        'ensuring that conduct risk and fair customer outcomes are considered in all significant business decisions;',
        'complying with all applicable legislative and regulatory requirements; and',
        'continuously reviewing and improving its risk management practices in response to changes in the business environment, regulatory developments and emerging risks.',
      ]),
      p(
        'Risk management is the responsibility of every director, the Key Individual, Representative, employee and relevant service provider. While specific responsibilities are allocated within this Policy, every individual is expected to identify, report and appropriately manage risks arising within their respective areas of responsibility.',
      ),
      p(
        "The Board of Directors retains ultimate accountability for the oversight of the Company's risk management framework and for ensuring that appropriate governance arrangements, resources and internal controls are maintained.",
      ),

      h2('7. RISK MANAGEMENT PRINCIPLES'),
      p("The Company's Risk Management Framework is founded on the following principles:"),
      h3('7.1 Integration into Governance'),
      p(
        "Risk management shall form an integral part of the Company's governance framework and shall be embedded within strategic planning, operational management, compliance activities and decision-making processes.",
      ),
      h3('7.2 Proactive Risk Management'),
      p(
        'The Company shall adopt a proactive approach to identifying and managing risks before they result in financial loss, regulatory breaches, operational disruption or adverse customer outcomes.',
      ),
      h3('7.3 Proportionate Risk Management'),
      p(
        "Risk management processes shall be proportionate to the nature, size and complexity of the Company's business and shall remain practical, effective and appropriate to its operational environment.",
      ),
      h3('7.4 Accountability'),
      p(
        'Every director, the Key Individual, Representative and employee is responsible for managing risks within their respective areas of responsibility. Risk management shall not be regarded as the responsibility of a single individual or function.',
      ),
      h3('7.5 Risk-Informed Decision'),
      p(
        "Strategic, operational and business decisions shall take into account identified risks, available controls, potential impacts and the Company's risk appetite before implementation.",
      ),
      h3('7.6 Continuous Monitoring'),
      p(
        "Risks, controls and mitigation measures shall be monitored on an ongoing basis to ensure that they remain effective and responsive to changes in the Company's internal and external operating environment.",
      ),
      h3('7.7 Fair Customer Outcome'),
      p(
        "Risk management shall support the Company's commitment to treating customers fairly by ensuring that conduct risks are appropriately identified, assessed and managed throughout the client relationship.",
      ),
      h3('7.8 Continuous Improvement'),
      p(
        'The Company shall regularly review and enhance its Risk Management Framework in light of operational experience, internal monitoring, audit findings, legislative developments and emerging risks to ensure its continued effectiveness.',
      ),

      h2('8. RISK GOVERNANCE AND RESPONSIBILITIES'),
      h3('8.1 Risk Governance'),
      p(
        "The Company has established a governance framework that promotes effective oversight, accountability and the proactive management of risks across all business activities. Risk management forms an integral part of the Company's corporate governance framework and supports strategic decision-making, operational resilience, regulatory compliance and the fair treatment of customers.",
      ),
      p(
        "Ultimate accountability for the effectiveness of the Risk Management Framework rests with the Board of Directors. The Board delegates certain responsibilities to Mr Mongiwethu Kumalo and management while retaining oversight of the Company's overall risk profile and risk management arrangements.",
      ),
      p(
        'All directors, the Key Individual, Representatives, employees and, where applicable, outsourced service providers are responsible for supporting the effective implementation of this Policy within their respective areas of responsibility.',
      ),

      h3('8.2 Board of Directors'),
      p(
        "The Board of Directors is ultimately responsible for overseeing the Company's Risk Management Framework and ensuring that appropriate governance arrangements, resources and internal controls are maintained.",
      ),
      p('The Board shall:'),
      ul([
        'approve this Policy and any material amendments;',
        "determine the Company's overall risk appetite and risk tolerance;",
        'oversee the effectiveness of the Risk Management Framework;',
        'ensure that significant risks are identified, assessed and appropriately managed;',
        'monitor the effectiveness of internal controls and governance arrangements;',
        'review reports relating to significant risks, emerging risks and risk incidents; and',
        'promote a culture of ethical conduct, accountability and responsible risk management throughout the Company.',
      ]),

      h3('8.3 Key Individual'),
      p(
        "Mr Mongiwethu Kumalo is responsible for the implementation and day-to-day oversight of the Company's Risk Management Framework.",
      ),
      p('Mr Mongiwethu Kumalo shall:'),
      ul([
        'implement and maintain the Risk Management Framework;',
        'coordinate the identification, assessment and monitoring of risks;',
        "maintain the Company's Risk Register;",
        'ensure that appropriate risk mitigation measures are implemented;',
        'report material risks and significant incidents to the Board;',
        'monitor compliance with this Policy;',
        'promote risk awareness throughout the Company; and',
        'review the effectiveness of risk management processes on an ongoing basis.',
      ]),

      h3('8.4 Representatives and Employees'),
      p(
        'Representatives and employees are responsible for managing risks arising within their respective areas of responsibility and for complying with this Policy.',
      ),
      p('They shall:'),
      ul([
        'identify and report actual, emerging and potential risks;',
        'comply with approved policies, procedures and internal controls;',
        'implement agreed risk mitigation measures;',
        'promptly report incidents that may expose the Company to financial, operational, regulatory or reputational risk;',
        'participate in risk management training and awareness initiatives; and',
        "support the Company's commitment to ethical conduct and fair customer outcomes.",
      ]),

      h3('8.5 Outsourced Service Providers'),
      p(
        'Where business activities are outsourced, the Company shall take reasonable steps to ensure that outsourced service providers maintain appropriate governance arrangements, internal controls and risk management practices that are proportionate to the services provided.',
      ),
      p(
        'The Company shall periodically assess the risks associated with outsourced arrangements and implement appropriate oversight and contingency measures where necessary.',
      ),

      h3('8.6 Three Lines of Accountability'),
      p(
        'To promote effective governance and accountability, the Company adopts a proportionate Three Lines of Accountability model appropriate to the nature, size and complexity of its business:',
      ),
      ul([
        {
          label: 'First Line – Operational Management:',
          text: 'Representatives, employees and operational personnel are responsible for identifying, managing and reporting risks arising from their day-to-day activities. They are responsible for implementing approved policies, procedures and internal controls.',
        },
        {
          label: 'Second Line – Oversight:',
          text: 'Mr Mongiwethu Kumalo provides oversight of the Risk Management Framework, monitors compliance with this Policy, reviews the effectiveness of risk management activities and reports material risks to the Board of Directors.',
        },
        {
          label: 'Third Line – Strategic Oversight:',
          text: "The Board of Directors provides independent oversight of the Company's overall risk profile, governance arrangements and internal control environment. The Board reviews significant risks, monitors the effectiveness of the Risk Management Framework and ensures that appropriate corrective action is taken where necessary.",
        },
      ]),

      h2('9. RISK MANAGEMENT FRAMEWORK'),
      h3('9.1 General Framework'),
      p(
        "The Company has established an enterprise-wide Risk Management Framework to ensure that risks are identified, assessed, managed, monitored and reported in a structured and consistent manner. The Framework forms part of the Company's overall governance arrangements and supports informed decision-making, operational resilience, regulatory compliance and the achievement of strategic objectives.",
      ),
      p(
        'Risk management shall be integrated into all significant business activities and applied continuously throughout the organisation. The Framework is intended to promote a proactive risk culture by ensuring that risks are considered during strategic planning, business operations, project implementation and organisational change.',
      ),
      p(
        'The Company shall maintain appropriate policies, procedures, systems and internal controls to support the effective implementation of this Framework.',
      ),

      h3('9.2 Risk Management Process'),
      p("The Company's Risk Management Framework consists of the following continuous processes:"),
      ul([
        {
          label: 'Step 1 – Risk Identification:',
          text: "Risks that may affect the Company's objectives, operations, financial position, regulatory compliance, information assets, reputation or clients shall be identified on an ongoing basis.",
        },
        {
          label: 'Step 2 – Risk Assessment:',
          text: 'Each identified risk shall be assessed by considering its likelihood of occurring, its potential impact on the Company and the effectiveness of existing controls.',
        },
        {
          label: 'Step 3 – Risk Evaluation:',
          text: "The Company shall evaluate each identified risk to determine whether it falls within the Company's approved risk appetite and whether additional mitigation measures are required.",
        },
        {
          label: 'Step 4 – Risk Treatment:',
          text: "Appropriate treatment strategies shall be implemented to reduce, avoid, transfer or accept risks, depending on the level of exposure and the Company's risk appetite.",
        },
        {
          label: 'Step 5 – Risk Monitoring:',
          text: 'Risks and mitigation measures shall be monitored on an ongoing basis to ensure that controls remain effective and that emerging risks are identified promptly.',
        },
        {
          label: 'Step 6 – Risk Reporting:',
          text: 'Material risks, emerging risks, control weaknesses and significant incidents shall be reported to Mr Mongiwethu Kumalo and the Board of Directors through appropriate reporting channels.',
        },
        {
          label: 'Step 7 – Review and Continuous Improvement:',
          text: "The Risk Management Framework shall be reviewed periodically to ensure that it remains appropriate to the nature, size and complexity of the Company's business and continues to support sound governance and regulatory compliance.",
        },
      ]),

      h2('10. RISK IDENTIFICATION'),
      h3('10.1 General'),
      p(
        'The Company shall identify risks that may affect its ability to achieve its strategic objectives, deliver financial services effectively, comply with applicable legislation and regulatory requirements, protect client interests and maintain its financial and operational resilience.',
      ),
      p(
        "Risk identification shall be performed on an ongoing basis and shall consider both internal and external factors that may influence the Company's operations.",
      ),

      h3('10.2 Risk Categories'),
      p(
        "The Company recognizes that risks may arise from a variety of sources. The following categories provide a framework for identifying and managing the Company's principal risks:",
      ),
      table(
        ['Risk Category', 'Description', 'Examples'],
        [
          [
            'Strategic Risk',
            'Risks affecting the achievement of strategic objectives.',
            'Poor business planning, market changes, competition, ineffective decision-making.',
          ],
          [
            'Compliance Risk',
            'Risks arising from failure to comply with applicable legislation, regulatory requirements or internal policies.',
            'Legislative breaches, regulatory sanctions, license conditions not being met.',
          ],
          [
            'Conduct Risk',
            'Risks that may result in poor customer outcomes or inappropriate conduct.',
            'Mis-selling, conflicts of interest, inadequate disclosures, unfair treatment of clients.',
          ],
          [
            'Operational Risk',
            'Risks arising from inadequate or failed internal processes, people or systems.',
            'Human error, process failures, system outages, fraud.',
          ],
          [
            'Financial Risk',
            "Risks affecting the Company's financial stability.",
            'Cash flow constraints, budgeting failures, unexpected financial losses.',
          ],
          [
            'Information and Cyber Risk',
            'Risks relating to information security and technology systems.',
            'Cyber attacks, data breaches, ransomware, unauthorised access to information.',
          ],
          [
            'Reputational Risk',
            "Risks that may damage the Company's reputation or stakeholder confidence.",
            'Negative publicity, regulatory action, client complaints, unethical conduct.',
          ],
          [
            'Third-Party Risk',
            'Risks associated with outsourced service providers or external suppliers.',
            'Service interruptions, contractual failures, provider insolvency.',
          ],
          [
            'Business Continuity Risk',
            "Risks affecting the Company's ability to continue critical operations.",
            'Power failures, natural disasters, telecommunications failures, pandemics.',
          ],
        ],
      ),
      p(
        "Risk categories shall be reviewed periodically to ensure that they remain appropriate to the Company's business model and operating environment.",
      ),

      h2('11. RISK ASSESSMENT EVALUATION'),
      h3('11.1 General'),
      p(
        "All identified risks shall be assessed to determine their significance and the extent to which they may affect the achievement of the Company's strategic objectives, operational effectiveness, financial soundness, regulatory compliance and the fair treatment of customers.",
      ),
      p(
        "Risk assessments shall be conducted using a consistent methodology that considers the likelihood of a risk occurring, the potential impact of the risk and the effectiveness of existing controls. The results of the assessment shall be documented in the Company's Risk Register.",
      ),
      p('Risk assessments shall be undertaken:'),
      ul([
        'when new risks are identified;',
        'when significant business changes occur;',
        'following incidents or control failures;',
        'during periodic risk reviews; and',
        'whenever requested by the Board of Directors or the Key Individual.',
      ]),

      h3('11.2 Risk Assessment Methodology'),
      p('The Company shall assess each identified risk by considering:'),
      ul([
        'the likelihood that the risk will occur;',
        'the potential impact should the risk materialize;',
        'the effectiveness of existing controls;',
        'the resulting residual risk; and',
        'whether further mitigation measures are required.',
      ]),
      p(
        'The overall risk rating shall assist management in determining appropriate priorities and treatment strategies.',
      ),

      h3('11.3 Likelihood Ratings'),
      table(
        ['Rating', 'Description'],
        [
          ['1', 'Rare – Unlikely to occur except in exceptional circumstances.'],
          ['2', 'Unlikely – Could occur but is not expected.'],
          ['3', 'Possible – May occur under normal business conditions.'],
          ['4', 'Likely – Expected to occur in most circumstances.'],
          ['5', 'Almost Certain – Expected to occur frequently or repeatedly.'],
        ],
      ),

      h3('11.4 Impact Ratings'),
      table(
        ['Rating', 'Description'],
        [
          ['1', 'Insignificant – Minimal operational or financial impact.'],
          ['2', 'Minor – Limited disruption with minimal financial or regulatory consequences.'],
          [
            '3',
            'Moderate – Noticeable operational disruption or regulatory concern requiring management attention.',
          ],
          [
            '4',
            'Major – Significant operational disruption, financial loss or regulatory consequences.',
          ],
          [
            '5',
            "Severe – Critical impact threatening the Company's operations, financial stability, reputation or ability to continue providing financial services.",
          ],
        ],
      ),

      h3('11.5 Risk Rating Matrix'),
      p(
        'The overall risk rating shall be determined by multiplying the likelihood rating by the impact rating.',
      ),
      table(
        [
          'Impact \\ Likelihood',
          '1 (Rare)',
          '2 (Unlikely)',
          '3 (Possible)',
          '4 (Likely)',
          '5 (Almost Certain)',
        ],
        [
          ['5 (Severe)', '5 (Low)', '10 (Moderate)', '15 (High)', '20 (Critical)', '25 (Critical)'],
          ['4 (Major)', '4 (Low)', '8 (Moderate)', '12 (High)', '16 (Critical)', '20 (Critical)'],
          ['3 (Moderate)', '3 (Low)', '6 (Moderate)', '9 (Moderate)', '12 (High)', '15 (High)'],
          ['2 (Minor)', '2 (Low)', '4 (Low)', '6 (Moderate)', '8 (Moderate)', '10 (Moderate)'],
          ['1 (Insignificant)', '1 (Low)', '2 (Low)', '3 (Low)', '4 (Low)', '5 (Low)'],
        ],
      ),

      h3('11.6 Risk Rating Classification'),
      table(
        ['Risk Score', 'Risk Level', 'Management Response'],
        [
          ['1–5', 'Low', 'Manage through routine controls and periodic monitoring.'],
          [
            '6–10',
            'Moderate',
            'Monitor regularly and implement additional controls where appropriate.',
          ],
          [
            '11–15',
            'High',
            'Develop and implement a formal risk treatment plan and report to Mr Mongiwethu Kumalo.',
          ],
          [
            '16–25',
            'Critical',
            'Immediate management attention is required. The Board of Directors shall be informed, and urgent mitigation measures shall be implemented.',
          ],
        ],
      ),

      h3('11.7 Inherent and Residual Risk'),
      p(
        'The Company shall distinguish between inherent risk and residual risk when assessing risk exposure.',
      ),
      p(
        'Inherent Risk represents the level of risk before any controls or mitigation measures have been applied.',
      ),
      p(
        'Residual Risk represents the level of risk remaining after the implementation of existing controls and mitigation measures.',
      ),
      p(
        "Where residual risk exceeds the Company's approved risk appetite or risk tolerance, additional mitigation measures shall be implemented and monitored until the risk has been reduced to an acceptable level.",
      ),

      h2('12. LEGISLATIVE AND REGULATORY FRAMEWORK'),
      h3('12.1 General'),
      p(
        "Following the assessment and evaluation of identified risks, the Company shall determine and implement appropriate risk treatment measures to reduce risk exposure to a level that is consistent with the Company's approved risk appetite and risk tolerance.",
      ),
      p(
        "Risk treatment measures shall be proportionate to the nature, size and complexity of the identified risk and shall take into account the potential impact on the Company's operations, financial position, regulatory compliance and client outcomes.",
      ),
      p(
        'The Company shall ensure that risk treatment measures are documented, assigned to responsible persons and monitored to confirm their ongoing effectiveness.',
      ),

      h3('12.2 Risk Treatment Strategies'),
      p('The Company may adopt one or more of the following risk treatment strategies:'),
      table(
        ['Risk Treatment Strategy', 'Description'],
        [
          [
            'Avoid',
            'Discontinue or refrain from activities that give rise to unacceptable levels of risk.',
          ],
          [
            'Reduce',
            'Implement controls, procedures or other mitigation measures to reduce the likelihood or impact of the risk.',
          ],
          [
            'Transfer',
            'Transfer part of the risk through contractual arrangements, outsourcing or insurance, where appropriate.',
          ],
          [
            'Accept',
            "Accept the residual risk where it falls within the Company's approved risk appetite and appropriate controls have been implemented.",
          ],
        ],
      ),
      p(
        "The selected treatment strategy shall be appropriate to the significance of the risk and shall be documented in the Company's Risk Register and Risk Treatment Plan.",
      ),

      h3('12.3 Risk Controls'),
      p(
        'The Company shall implement appropriate preventive, detective and corrective controls to manage identified risks.',
      ),
      p('Risk controls may include:'),
      ul([
        'documented policies and procedures;',
        'segregation of duties where appropriate;',
        'management oversight and supervision;',
        'staff training and awareness;',
        'information technology security controls;',
        'compliance monitoring activities;',
        'business continuity arrangements;',
        'contractual controls relating to outsourced service providers; and',
        'periodic reviews of operational processes.',
      ]),
      p(
        'The effectiveness of risk controls shall be reviewed on an ongoing basis, and improvements shall be implemented where deficiencies are identified.',
      ),

      h3('12.4 Risk Treatment Plans'),
      p(
        'Where a risk is assessed as High or Critical, the Company shall develop and implement a Risk Treatment Plan.',
      ),
      p('A Risk Treatment Plan shall, where appropriate, include:'),
      ul([
        'a description of the identified risk;',
        'the existing controls;',
        'additional mitigation measures to be implemented;',
        'the responsible person;',
        'implementation timeframes;',
        'target completion dates; and',
        'monitoring and review arrangements.',
      ]),
      p(
        'Progress against Risk Treatment Plans shall be monitored by Mr Mongiwethu Kumalo and reported to the Board of Directors where necessary.',
      ),

      h2('13. RISK MONITORING AND REPORTING'),
      h3('13.1 Monitoring'),
      p(
        "The Company shall continuously monitor identified risks, control measures and mitigation activities to ensure that they remain appropriate, effective and responsive to changes in the Company's internal and external operating environment.",
      ),
      p('Monitoring activities shall include:'),
      ul([
        'periodic reviews of the Risk Register;',
        'assessment of the effectiveness of existing controls;',
        'monitoring of Key Risk Indicators (KRIs);',
        'review of incidents, complaints and operational losses;',
        'compliance monitoring activities;',
        'review of business continuity and disaster recovery testing outcomes; and',
        'identification of emerging risks.',
      ]),

      h3('13.2 Risk Register'),
      p(
        'The Company shall maintain a Risk Register that records identified risks, their assessed risk ratings, existing controls, mitigation measures, responsible persons and review dates.',
      ),
      p(
        "The Risk Register shall be reviewed regularly and updated whenever significant changes occur in the Company's operations, risk profile or regulatory environment.",
      ),

      h3('13.3 Reporting'),
      p(
        'Material risks, emerging risks, significant incidents and control deficiencies shall be reported to Mr Mongiwethu Kumalo as soon as reasonably practicable.',
      ),
      p(
        'Mr Mongiwethu Kumalo shall provide periodic risk reports to the Board of Directors that include:',
      ),
      ul([
        "significant risks and changes to the Company's risk profile;",
        'the effectiveness of risk mitigation measures;',
        'material incidents and lessons learned;',
        'emerging risks;',
        'progress on Risk Treatment Plans; and',
        'recommendations for strengthening the Risk Management Framework.',
      ]),

      h3('13.4 Review of the Framework'),
      p(
        'The Risk Management Framework shall be reviewed at least annually, or more frequently where:',
      ),
      ul([
        'significant operational changes occur;',
        'new legislation or regulatory requirements are introduced;',
        'material incidents occur;',
        'deficiencies are identified through monitoring or testing; or',
        'the Board determines that a review is necessary.',
      ]),
      p(
        "Recommendations arising from reviews shall be documented and implemented within a reasonable period to support the continuous improvement of the Company's governance and risk management practices.",
      ),

      h2('14. CONDUCT RISK AND TREATING CUSTOMERS FAIRLY'),
      h3('14.1 General'),
      p(
        'The Company recognizes that conduct risk is a key component of its overall Risk Management Framework and that the effective management of conduct risk is essential to maintaining client confidence, regulatory compliance and the integrity of the financial services industry.',
      ),
      p(
        "Conduct risk refers to the risk that the Company's actions, decisions, omissions or business practices may result in poor customer outcomes, regulatory breaches, financial loss or reputational damage.",
      ),
      p(
        'The Company shall identify, assess, monitor and manage conduct risk as part of its enterprise risk management processes and shall ensure that customer interests remain central to all business activities.',
      ),

      h3('14.2 Treating Customers Fairly'),
      p(
        'The Company is committed to embedding the principles of Treating Customers Fairly ("TCF") throughout its governance framework, operational processes and organizational culture.',
      ),
      p('In managing conduct risk, the Company shall endeavor to ensure that:'),
      ul([
        'clients are treated fairly throughout the product and service lifecycle;',
        'financial services are provided honestly, fairly, with due skill, care and diligence;',
        'communications with clients are clear, accurate and not misleading;',
        'products and services remain appropriate for the identified target market;',
        "advice and intermediary services are suitable for clients' needs and circumstances, where applicable;",
        'complaints are handled fairly, consistently and without unreasonable delay; and',
        'conflicts of interest are appropriately identified, disclosed and managed.',
      ]),

      h3('14.3 Management of Conduct Risk'),
      p(
        'The Company shall manage conduct risk through a combination of governance arrangements, internal controls and ongoing monitoring activities, including:',
      ),
      ul([
        'maintaining appropriate governance policies and procedures;',
        'promoting ethical conduct through the Code of Ethics and Conduct;',
        'implementing effective compliance monitoring activities;',
        'managing conflicts of interest;',
        'monitoring complaints, incidents and customer feedback to identify emerging conduct risks;',
        'providing regular training and awareness programmes for directors, Representatives and employees; and',
        'reviewing operational processes to promote consistently fair customer outcomes.',
      ]),
      p(
        'Where conduct risks are identified, the Company shall implement appropriate corrective actions and monitor the effectiveness of those actions to reduce the likelihood of recurrence.',
      ),

      h3('14.4 Relationship to Other Governance Documents'),
      p(
        "The management of conduct risk is supported by the Company's broader governance framework, including the:",
      ),
      ul([
        'Compliance Management Framework;',
        'Code of Ethics and Conduct;',
        'Conflict of Interest Management Policy;',
        'Complaints Management Framework;',
        'Business Continuity Policy;',
        'Business Plan; and',
        'other governance documents adopted by the Company from time to time.',
      ]),
      p(
        'Conduct risk shall be considered alongside strategic, operational, financial, compliance and reputational risks to ensure a comprehensive and integrated approach to enterprise risk management.',
      ),

      h2('15. POLICY GOVERNANCE'),
      h3('15.1 Policy Ownership'),
      p(
        'The Board of Directors is responsible for approving this Policy and ensuring that appropriate governance arrangements, resources and oversight mechanisms are maintained to support its effective implementation.',
      ),
      p(
        'Mr Mongiwethu Kumalo shall be responsible for the day-to-day administration, implementation, monitoring and periodic review of this Policy.',
      ),

      h3('15.2 Policy Review'),
      p('This Policy shall be reviewed:'),
      ul([
        'at least annually;',
        "following significant changes to the Company's business activities or governance framework;",
        'following material legislative or regulatory developments;',
        'after significant risk events or operational incidents; or',
        'where improvements are identified through monitoring, testing or internal reviews.',
      ]),
      p('Any amendments to this Policy shall be submitted to the Board of Directors for approval.'),

      h3('15.3 Compliance with this Policy'),
      p(
        'All directors, the Key Individual, Representatives, employees and relevant outsourced service providers are required to comply with this Policy.',
      ),
      p(
        "Failure to comply with this Policy may result in corrective action, disciplinary measures or other appropriate action in accordance with the Company's governance framework and applicable legislation.",
      ),

      h3('15.4 Continuous Improvement'),
      p(
        'The Company is committed to the continuous improvement of its Risk Management Framework. Lessons learned from incidents, monitoring activities, complaints, audits, regulatory developments and business continuity testing shall be used to strengthen governance arrangements, internal controls and risk management practices.',
      ),

      // h2('ANNEXURE A'),
      // h3('Risk Register'),
      // p(
      //   "The Risk Register is the Company's primary tool for recording, assessing, monitoring and reporting identified risks. The Register shall be reviewed regularly by Mr Mongiwethu Kumalo and reported to the Board of Directors where appropriate.",
      // ),
      // table(
      //   ['Risk ID', 'Risk Category', 'Risk Description', 'Inherent Risk Rating', 'Existing Controls', 'Residual Risk Rating', 'Risk Owner', 'Treatment Action', 'Target Date', 'Status'],
      //   [
      //     ['[RSK-01]', 'Operational', 'System downtime / execution failure during peak trading', 'High (15)', 'Redundant server cluster, auto-failover', 'Low (3)', 'IT Lead', 'Implement tertiary standby feed', '31/03/2024', 'Open'],
      //     ['[RSK-02]', 'Compliance', 'Regulatory reporting deadline breach under FAIS/FICA', 'Critical (20)', 'Automated reconciliation, daily sign-off', 'Moderate (6)', 'Compliance Officer', 'Enhanced compliance monitoring dashboard', '28/02/2024', 'In Progress'],
      //     ['[RSK-03]', 'Conduct', 'Unsuitable financial product recommendation or misrepresentation', 'Major (12)', 'Strict product boundary checks, audio recording', 'Low (4)', 'Key Individual', 'Bi-annual representative audit', '30/06/2024', 'Ongoing'],
      //   ],
      // ),

      // h2('ANNEXURE B'),
      // h3('Risk Assessment Matrix'),
      // h4('Likelihood Scale'),
      // table(['Rating', 'Description'], [
      //   ['1', 'Rare'],
      //   ['2', 'Unlikely'],
      //   ['3', 'Possible'],
      //   ['4', 'Likely'],
      //   ['5', 'Almost Certain'],
      // ]),
      // h4('Impact Scale'),
      // table(['Rating', 'Description'], [
      //   ['1', 'Insignificant'],
      //   ['2', 'Minor'],
      //   ['3', 'Moderate'],
      //   ['4', 'Major'],
      //   ['5', 'Severe'],
      // ]),
      // h4('Risk Rating Matrix (5x5)'),
      // table(
      //   ['Impact \\ Likelihood', '1 (Rare)', '2 (Unlikely)', '3 (Possible)', '4 (Likely)', '5 (Almost Certain)'],
      //   [
      //     ['5 (Severe)', '5', '10', '15', '20', '25'],
      //     ['4 (Major)', '4', '8', '12', '16', '20'],
      //     ['3 (Moderate)', '3', '6', '9', '12', '15'],
      //     ['2 (Minor)', '2', '4', '6', '8', '10'],
      //     ['1 (Insignificant)', '1', '2', '3', '4', '5'],
      //   ],
      // ),
      // h4('Risk Classification'),
      // table(
      //   ['Risk Score', 'Risk Level', 'Management Response'],
      //   [
      //     ['1–5', 'Low', 'Manage through routine controls and periodic monitoring.'],
      //     ['6–10', 'Moderate', 'Monitor regularly and implement additional controls where appropriate.'],
      //     ['11–15', 'High', 'Develop and implement a formal risk treatment plan and report to Mr Mongiwethu Kumalo.'],
      //     ['16–25', 'Critical', 'Immediate management attention is required. The Board of Directors shall be informed, and urgent mitigation measures shall be implemented.'],
      //   ],
      // ),

      // h2('ANNEXURE C'),
      // h3('Risk Treatment Plan'),
      // table(['Field', 'Details'], [
      //   ['Risk Reference', '[Risk Reference Code, e.g. RSK-001]'],
      //   ['Risk Description', '[Detailed Description of Identified Risk Event]'],
      //   ['Risk Owner', '[Assigned Department Head / Manager]'],
      //   ['Existing Controls', '[Current Preventive & Detective Safeguards]'],
      //   ['Additional Mitigation Measures', '[Action Steps, System Upgrades, Process Changes]'],
      //   ['Responsible Person', '[Assigned Individual for Implementation]'],
      //   ['Target Completion Date', '[DD/MM/YYYY]'],
      //   ['Resources Required', '[Budget, Personnel, Technology Tools]'],
      //   ['Current Status', '[Not Started / In Progress / Completed / Under Review]'],
      //   ['Date of Review', '[DD/MM/YYYY]'],
      //   ['Outcome', '[Reduction in Risk Score / Residual Acceptance]'],
      // ]),

      // h2('ANNEXURE D'),
      // h3('Key Risk Indicators (KRI) Register'),
      // p(
      //   'The Company shall establish and monitor Key Risk Indicators ("KRIs") to identify trends and provide early warning of increasing risk exposure.',
      // ),
      // table(
      //   ['Risk Category', 'Key Risk Indicator', 'Threshold', 'Reporting Frequency', 'Responsible Person'],
      //   [
      //     ['Compliance', 'Number of regulatory breaches', 'Zero tolerance', 'Quarterly', 'Key Individual'],
      //     ['Conduct', 'Number of justified complaints', 'Board-approved threshold', 'Quarterly', 'Key Individual'],
      //     ['Operational', 'Number of significant operational incidents', 'Board-approved threshold', 'Quarterly', 'Management'],
      //     ['Information Security', 'Number of cybersecurity incidents', 'Board-approved threshold', 'Quarterly', 'Responsible Person'],
      //     ['Business Continuity', 'Number of critical service interruptions', 'Board-approved threshold', 'Quarterly', 'Key Individual'],
      //   ],
      // ),

      // h2('ANNEXURE E - RISK REPORTING TEMPLATE'),
      // table(['Field', 'Content'], [
      //   ['Reporting Period', '[Quarter / Year, e.g. Q1 2024]'],
      //   ['Summary of Significant Risks', '[Executive overview of risk posture and critical exposures]'],
      //   ['Risk Current Rating Trend Action Required', '[Tabular breakdown of monitored risks, trends & actions]'],
      //   ['Emerging Risks', '[New regulatory, market, technology or operational threats]'],
      //   ['Significant Incidents', '[Log of breaches, outages or compliance incidents during period]'],
      //   ['Status of Risk Treatment Plans', '[Progress tracking on agreed risk mitigation roadmaps]'],
      //   ['Recommendations', '[Governance or control improvements for Board review]'],
      // ]),
      // pBold('Sign-off:', 'Prepared by: ________________ | Date: ________ | Reviewed by: ________________ | Approved by: ________________'),
    ],
  },
];
