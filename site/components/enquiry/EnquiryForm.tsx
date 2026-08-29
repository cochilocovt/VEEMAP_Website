'use client';

import { FormEvent, useState } from 'react';
import { ArrowUpRight, Check, ChevronDown } from 'lucide-react';
import { sectors as sectorRecords } from '@/content/sectors';

export const enquiryEmail = 'info@veemap.co.in';

/** Ordered by the content model, so Medical & Pharmaceutical leads (plan 2.2). */
const sectorOptions = sectorRecords.map((sector) => sector.name);

/**
 * Client-side mailto handoff. Plan section 2.10: no backend, no CRM, no upload,
 * no third-party submission service.
 */
export default function EnquiryForm({
  defaultSector = '',
  context,
}: {
  /** Preselects the sector when the form is reached from a sector page. */
  defaultSector?: string;
  /** Tailors the prepared email's opening line to the route it was sent from. */
  context?: string;
} = {}) {
  const [enquiryPrepared, setEnquiryPrepared] = useState(false);

  const prepareEnquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') || 'Prospective client');
    const lines = [
      ...(context ? [['Enquiry about', context]] : []),
      ['Name', data.get('name')],
      ['Company', data.get('company')],
      ['Email', data.get('email')],
      ['Phone', data.get('phone')],
      ['Sector', data.get('sector')],
      ['Project stage', data.get('stage')],
      ['Process / product', data.get('process')],
      ['Current challenge', data.get('challenge')],
      ['Target output', data.get('output')],
    ].filter(([, value]) => value);

    const subject = encodeURIComponent(`Manufacturing requirement — ${data.get('company') || name}`);
    const body = encodeURIComponent(lines.map(([label, value]) => `${label}: ${value}`).join('\n\n'));
    setEnquiryPrepared(true);
    window.location.href = `mailto:${enquiryEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <form className="enquiry-form" onSubmit={prepareEnquiry}>
      <label><span>Your name</span><input name="name" autoComplete="name" required /></label>
      <label><span>Company</span><input name="company" autoComplete="organization" required /></label>
      <label><span>Work email</span><input name="email" type="email" autoComplete="email" required /></label>
      <label><span>Phone <i>optional</i></span><input name="phone" type="tel" autoComplete="tel" /></label>
      <label><span>Sector</span><span className="select-wrap"><select name="sector" defaultValue={defaultSector} required><option value="" disabled>Select a sector</option>{sectorOptions.map((sector) => <option key={sector}>{sector}</option>)}<option>Other</option></select><ChevronDown aria-hidden="true" /></span></label>
      <label><span>Project stage</span><span className="select-wrap"><select name="stage" defaultValue="" required><option value="" disabled>Select a stage</option><option>Early feasibility</option><option>Defined requirement / RFQ</option><option>Existing process improvement</option><option>Plant-scale planning</option></select><ChevronDown aria-hidden="true" /></span></label>
      <label className="form-wide"><span>Process or product</span><textarea name="process" rows={3} placeholder="What is being assembled, inspected, tested or moved?" required /></label>
      <label className="form-wide"><span>Current challenge</span><textarea name="challenge" rows={3} placeholder="Where are speed, quality, safety, labour or traceability constrained?" required /></label>
      <label className="form-wide"><span>Target output <i>optional</i></span><input name="output" placeholder="For example: required cycle time, parts/minute or shift volume" /></label>
      <p className="form-note">Submitting prepares an email to VEEMAP in your default mail application. No files are collected.</p>
      <button className="submit-action" type="submit">Prepare enquiry <ArrowUpRight aria-hidden="true" /></button>
      {enquiryPrepared && <p className="form-success" role="status"><Check aria-hidden="true" /> Your requirement summary is ready in your email application.</p>}
    </form>
  );
}
