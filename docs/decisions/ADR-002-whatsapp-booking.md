# ADR-002: WhatsApp as the Sole Booking Channel

**Date:** 2026-06-28
**Status:** Accepted

---

## Context

L'Atelier Hamburg takes appointments. The site needs a way for visitors to initiate a booking.
The options range from a simple contact method to a purpose-built scheduling system.

At the time of this decision, the salon was managing all appointment coordination through WhatsApp.
The site was being built for initial launch, with speed and simplicity as constraints.

---

## Options Considered

### Option 1 — WhatsApp link (pre-filled message)

A button or CTA that opens WhatsApp with a pre-composed message. No third-party service, no backend.

**Trade-offs:** Zero implementation complexity. No ongoing cost or maintenance. Matches the staff's existing workflow exactly. Requires the salon owner to respond to each message manually — does not scale without staff.

### Option 2 — Third-party booking system (e.g. Booksy, Treatwell)

An embedded or linked scheduling system that lets customers self-book into available slots.

**Trade-offs:** Handles availability management, reminders, and cancellations automatically. Adds a recurring cost, an external dependency, and a more complex integration. Requires the salon to migrate their scheduling workflow into the system.

### Option 3 — Custom booking form with email or backend

A contact or booking form that sends an email or writes to a database.

**Trade-offs:** No third-party dependency. Requires a backend, form handling, email delivery, and ongoing maintenance. Higher implementation cost for the same outcome as Option 1 at this stage.

---

## Decision

**We chose Option 1 — WhatsApp link.**

The client already manages appointments through WhatsApp. Introducing a different channel would require staff to adopt a new workflow, adding friction on their side. A WhatsApp link keeps the booking experience consistent with what the client uses today and minimizes complexity during initial launch.

The cost of this decision is limited: it does not scale without additional staff and does not provide automated availability management. These constraints are acceptable for the current business volume.

---

## Consequences

**Accepted trade-offs:**
- Appointment volume is bounded by how fast the owner can respond to WhatsApp messages.
- No automated confirmation, reminder, or cancellation flow.
- Booking analytics are not available — volume can only be estimated indirectly.

**Follow-on actions required:**
- None at this time.

**Conditions for revisiting:**
- Appointment volume exceeds what manual WhatsApp coordination can handle.
- The client requests availability management or automated reminders.
- A second staff member requires shared scheduling visibility.
