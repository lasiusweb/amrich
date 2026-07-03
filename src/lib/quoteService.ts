/**
 * Quote/lead submission service for Amrich Pharma.
 * Collects farmer inquiries and queues failed submissions in localStorage
 * for retry. Posts to a configurable webhook endpoint when available.
 */

/**
 * Form data collected from the quote request modal.
 * Queued in localStorage for offline resilience and retried on subsequent page loads.
 */
export interface QuoteData {
  fullName: string;
  phone: string;
  location: string;
  pondSize: string;
  species: string;
  productInterest: string;
  challenge: string;
  contactMethod: string;
  referenceId: string;
  pageUrl?: string;
}

/** Webhook endpoint for quote form submissions. Configured via PUBLIC_QUOTE_WEBHOOK_URL env var. */
const WEBHOOK_URL = import.meta.env.PUBLIC_QUOTE_WEBHOOK_URL || '';

function getQueue(): QuoteData[] {
  try {
    return JSON.parse(localStorage.getItem('amrich_quote_queue') || '[]');
  } catch { return []; }
}

function setQueue(queue: QuoteData[]) {
  localStorage.setItem('amrich_quote_queue', JSON.stringify(queue));
}

/**
 * Submit a quote request.
 * Stores in localStorage queue, then attempts webhook POST.
 * On success, removes from queue. On failure, remains queued for retry.
 * @param data - Quote form data to submit
 */
export async function submitQuote(data: QuoteData): Promise<void> {
  const queue = getQueue();
  queue.push(data);
  setQueue(queue);

  if (WEBHOOK_URL) {
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, source: 'amrich-pharma-website' }),
      });
      if (res.ok) {
        const remaining = getQueue().filter(q => q.referenceId !== data.referenceId);
        setQueue(remaining);
        return;
      }
      throw new Error(`Webhook responded ${res.status}`);
    } catch (err) {
      console.warn('Quote webhook failed, queued in localStorage:', err);
      return;
    }
  }
}

/**
 * Build a WhatsApp deep link with pre-filled quote details for manual fallback.
 * @param data - Quote data to include in the WhatsApp message
 * @returns WhatsApp deep link URL with encoded message
 */
export function getWhatsAppLink(data: QuoteData): string {
  const msg = encodeURIComponent(
    `Hi Amrich Pharma, I requested a quote for ${data.productInterest} for my ${data.pondSize}-acre ${data.species} pond in ${data.location}. Preferred contact: ${data.contactMethod}. Ref: ${data.referenceId}`
  );
  return `https://wa.me/919712335338?text=${msg}`;
}

/**
 * Fire GA4 quote_form_submit event with product, pond size, species, and location data.
 * @param data - Quote data to track in GA4
 */
export function trackQuoteGA4(data: QuoteData) {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'quote_form_submit', {
      product_name: data.productInterest,
      pond_size_acres: data.pondSize,
      species: data.species,
      location: data.location,
      contact_method: data.contactMethod,
      reference_id: data.referenceId,
      page_url: data.pageUrl || window.location.pathname,
    });
  }
}

/**
 * Retry any queued quote submissions that failed previously.
 * Called on page load to ensure failed submissions are retried.
 */
export async function retryQueuedQuotes() {
  const queue = getQueue();
  if (!queue.length || !WEBHOOK_URL) return;
  const newQueue: QuoteData[] = [];
  for (const item of queue) {
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...item, source: 'amrich-pharma-website', retry: true }),
      });
      if (!res.ok) newQueue.push(item);
    } catch {
      newQueue.push(item);
    }
  }
  setQueue(newQueue);
}
