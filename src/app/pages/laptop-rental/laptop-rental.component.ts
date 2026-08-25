import { Component, OnDestroy, OnInit } from '@angular/core';
import { SeoService } from '../../shared/services/seo.service';
import { WhatsappService } from '../../shared/services/whatsapp.service';

@Component({
  selector: 'app-laptop-rental',
  templateUrl: './laptop-rental.component.html',
  styleUrls: ['./laptop-rental.component.scss'],
  standalone: false,
})
export class LaptopRentalComponent implements OnInit, OnDestroy {
  constructor(private seo: SeoService, private whatsapp: WhatsappService) {}

  useCases = [
    {
      icon: 'bi-mortarboard-fill',
      title: 'Training & Workshops',
      desc: 'Fully configured laptops for corporate training sessions, workshops, and certification programs.'
    },
    {
      icon: 'bi-people-fill',
      title: 'Temporary & Contract Staff',
      desc: 'Onboard temporary employees and contractors quickly without committing to new hardware purchases.'
    },
    {
      icon: 'bi-briefcase-fill',
      title: 'Corporate Events & Exhibitions',
      desc: 'Short-term laptop fleets for conferences, trade shows, and product demos.'
    },
    {
      icon: 'bi-airplane-fill',
      title: 'Business Travel & Projects',
      desc: 'Reliable laptops for short-term assignments, audits, and on-site project work.'
    }
  ];

  plans = [
    {
      title: 'Short-Term Rental',
      duration: '1 day to 1 month',
      desc: 'Ideal for events, workshops, and short projects. Delivery and setup included.',
      features: ['Daily, weekly & monthly plans', 'Delivery & setup', 'Pre-installed OS & software']
    },
    {
      title: 'Long-Term Rental',
      duration: 'Quarterly & custom terms',
      desc: 'Built for businesses that need ongoing laptop fleets without the upfront capital cost.',
      features: ['Custom billing cycles', 'Bulk fleet availability', 'Priority replacement support']
    }
  ];

  steps = [
    { title: 'Enquire', desc: 'Tell us your specs, headcount, and rental duration.' },
    { title: 'Confirm', desc: 'We recommend the right configuration and confirm your rental plan.' },
    { title: 'Delivery', desc: 'Laptops are delivered pre-configured and ready to use.' },
    { title: 'Pickup & Return', desc: 'We collect the units once your rental period ends.' }
  ];

  faqs = [
    {
      q: 'What is the minimum rental period for a laptop?',
      a: 'We offer single-day rentals for events, as well as weekly, monthly, and quarterly plans for ongoing business needs.'
    },
    {
      q: 'Can I choose the laptop specifications and brand?',
      a: 'Yes, let us know your requirements — processor, RAM, and software needs — and we\'ll recommend suitable configurations from available stock.'
    },
    {
      q: 'Do rented laptops come with pre-installed software?',
      a: 'Yes, laptops are delivered with the operating system and any requested software already configured and ready to use.'
    },
    {
      q: 'Can I rent laptops in bulk for a corporate event or training?',
      a: 'Yes, we support bulk fleet rentals for corporate training, events, and temporary teams of any size.'
    },
    {
      q: 'What happens if a rented laptop develops a fault?',
      a: 'Long-term rental plans include priority replacement support to minimize downtime for your team.'
    },
    {
      q: 'Do you deliver and set up the laptops on-site?',
      a: 'Yes, delivery and setup are included with our rental plans. Contact us with your location to confirm availability.'
    }
  ];

  ngOnInit(): void {
    const title = 'Laptop Rental | Short & Long-Term Laptop Rentals — Switchin Solutions';
    const description = 'Rent laptops for corporate training, events, temporary staff, and business travel. Short-term and long-term plans with delivery, setup, and pre-installed software.';
    const canonical = 'https://www.switchinsolutions.com/laptop-rental';

    this.seo.updateMeta({
      title,
      description,
      keywords: 'laptop rental, laptop on rent, laptop rental for events, laptop rental for corporate training, laptop rental for business, rent laptop India, laptop hire, bulk laptop rental',
      canonical
    });

    this.seo.setJsonLd({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service',
          'name': 'Laptop Rental',
          'serviceType': 'Laptop Rental',
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
            { '@type': 'ListItem', 'position': 2, 'name': 'Laptop Rental', 'item': canonical }
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
      ? `Hi, I'm interested in the ${planTitle} for laptops. Can you share more details?`
      : `Hi, I'm interested in renting laptops. Can you share more details?`;
    this.whatsapp.open(msg);
  }
}
