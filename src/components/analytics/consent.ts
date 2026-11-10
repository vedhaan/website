export const CONSENT_KEY = "vt-analytics-consent";
export const CONSENT_EVENT = "vt-consent-change";

export function readConsent(): string | null {
  try {
    return localStorage.getItem(CONSENT_KEY);
  } catch {
    return null;
  }
}

export function writeConsent(value: "granted" | "denied" | null) {
  try {
    if (value) localStorage.setItem(CONSENT_KEY, value);
    else localStorage.removeItem(CONSENT_KEY);
  } catch {
    // storage unavailable, nothing to save
  }
  window.dispatchEvent(new Event(CONSENT_EVENT));
}