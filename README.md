# Lagos Island Pilots website

Next.js (App Router) + Tailwind CSS v4 + react-icons. All forms submit to Web3Forms.

## Run it

```bash
npm install
cp .env.example .env.local   # then paste your Web3Forms access key
npm run dev
```

Get a free access key at https://web3forms.com. Until the key is set, forms show a
"Form not connected yet" message instead of sending.

## Where things are

- `lib/site.js`: contact details, pickup points, times, services, copy. Edit here first.
- `components/Web3Form.jsx`: the one submit handler (loading, success toast, error toast, spam trap).
- `components/ContactForm.jsx`, `InquiryForm.jsx`, `NewsletterForm.jsx`: the three forms.
- `components/Navbar.jsx`, `Footer.jsx`, `RouteCard.jsx`, `RouteStrip.jsx`: layout and route pieces.
- `app/*/page.js`: Home, About, Services, Contact.
- `app/globals.css`: colours and light/dark tokens (dark follows the visitor's system setting).

## Replace before launch

Phone, email, address, office hours, schedule times, drop-off schools, testimonials,
the leadership note and the "Our standards" wording in `lib/site.js` and
`app/about/page.js` are placeholders.
