import { Component, OnDestroy, OnInit } from '@angular/core';
import { SeoService } from '../../shared/services/seo.service';
import { WhatsappService } from '../../shared/services/whatsapp.service';

@Component({
  selector: 'app-walkie-talkie-rental',
  templateUrl: './walkie-talkie-rental.component.html',
  styleUrls: ['./walkie-talkie-rental.component.scss'],
  standalone: false,
})
export class WalkieTalkieRentalComponent implements OnInit, OnDestroy {
  constructor(private seo: SeoService, private whatsapp: WhatsappService) {}

  useCases = [
    {
      icon: 'bi-mic-fill',
      title: 'Weddings & Events',
      desc: 'Keep your event coordination team, vendors, and security in sync from setup to teardown.'
    },
    {
      icon: 'bi-cone-striped',
      title: 'Construction Sites',
      desc: 'Reliable site-wide communication between supervisors, crews, and safety teams.'
    },
    {
      icon: 'bi-shield-check',
      title: 'Security & Venue Management',
      desc: 'Coordinate security personnel across large venues, malls, and public gatherings.'
    },
    {
      icon: 'bi-briefcase-fill',
      title: 'Corporate Events & Exhibitions',
      desc: 'Short-term rentals for conferences, trade shows, and product launches.'
    }
  ];

  plans = [
    {
      title: 'Short-Term Rental',
      duration: '1 day to 1 week',
      desc: 'Ideal for weddings, one-off events, and exhibitions. Delivery and pickup included.',
      features: ['Daily & weekly plans', 'Delivery & pickup', 'Basic accessories included']
    },
    {
      title: 'Long-Term Rental',
      duration: 'Monthly & custom terms',
      desc: 'Built for construction sites and ongoing security operations that need radios for months at a time.',
      features: ['Monthly billing', 'Bulk fleet availability', 'Priority replacement support']
    }
  ];

  steps = [
    { title: 'Enquire', desc: 'Tell us your event dates, headcount, and location.' },
    { title: 'Confirm', desc: 'We recommend the right units and confirm your rental plan.' },
    { title: 'Delivery', desc: 'Radios are delivered and set up ahead of your event or shift.' },
    { title: 'Pickup & Return', desc: 'We collect the units once your rental period ends.' }
  ];

  faqs = [
    {
      q: 'What is the minimum rental period for a walkie-talkie?',
      a: 'We offer single-day rentals for events, as well as weekly and monthly plans for construction sites and ongoing operations.'
    },
    {
      q: 'Do you deliver walkie-talkies to the event location?',
      a: 'Yes, delivery and pickup are included with short-term rental plans. Contact us with your location to confirm availability.'
    },
    {
      q: 'Are batteries, chargers, and accessories included with the rental?',
      a: 'Basic accessories like batteries and chargers are included. Additional accessories such as headsets can be added on request.'
    },
    {
      q: 'How many walkie-talkies can I rent at once?',
      a: 'We support bulk fleet rentals for large events, construction sites, and security teams — from a handful of units to large fleets.'
    },
    {
      q: 'Can I rent walkie-talkies for a construction site long-term?',
      a: 'Yes, we offer monthly and custom long-term rental plans for construction sites and other ongoing operations.'
    },
    {
      q: 'What happens if a rented unit stops working?',
      a: 'Long-term rental plans include priority replacement support to minimize any downtime for your team.'
    }
  ];

  ngOnInit(): void {
    const title = 'Walkie-Talkie Rental | Short & Long-Term Two-Way Radio Rentals — Switchin Solutions';
    const description = 'Rent professional walkie-talkies for events, weddings, construction sites, and security teams. Short-term and long-term plans with delivery, pickup, and accessories included.';
    const canonical = 'https://www.switchinsolutions.com/walkie-talkie-rental';

    this.seo.updateMeta({
      title,
      description,
      keywords: 'walkie talkie rental, walkie talkie on rent, two way radio rental, walkie talkie rental for events, walkie talkie rental for wedding, walkie talkie rental construction site, rent walkie talkie India, walkie talkie hire',
      canonical
    });

    this.seo.setJsonLd({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service',
          'name': 'Walkie-Talkie Rental',
          'serviceType': 'Walkie-Talkie Rental',
          'description': description,
          'url': canonical,
          'provider': {
            '@type': 'LocalBusiness',
            'name': 'Switchin Solutions',
            'url': 'https://www.switchinsolutions.com'
          },
          'areaServed': 'IN',
          'offers': {
            '@type': 'Offer',
            'priceCurrency': 'INR',
            'availability': 'https://schema.org/InStock',
            'url': canonical
          }
        },
        {
          '@type': 'FAQPage',
          'mainEntity': this.faqs.map(f => ({
            '@type': 'Question',
            'name': f.q,
            'acceptedAnswer': { '@type': 'Answer', 'text': f.a }
          }))
        },
        {
          '@type': 'BreadcrumbList',
          'itemListElement': [
            { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.switchinsolutions.com/' },
            { '@type': 'ListItem', 'position': 2, 'name': 'Walkie-Talkie Rental', 'item': canonical }
          ]
        }
      ]
    });
  }

  ngOnDestroy(): void {
    this.seo.removeJsonLd();
  }

  inquire(planTitle?: string): void {
    const msg = planTitle
      ? `Hi, I'm interested in the ${planTitle} for walkie-talkies. Can you share more details?`
      : `Hi, I'm interested in renting walkie-talkies. Can you share more details?`;
    this.whatsapp.open(msg);
  }
}
