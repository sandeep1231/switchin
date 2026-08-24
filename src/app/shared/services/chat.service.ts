import { Injectable } from '@angular/core';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { environment } from '../../../environments/environment';

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private genAI: GoogleGenerativeAI | null = null;
  private chatHistory: ChatMessage[] = [];
  private isConfigured = false;

  private systemPrompt = `You are the AI assistant for Switchin Solutions, a trusted security and communication solutions provider based in Bhubaneswar, Odisha, India.

Your role: Help potential customers with questions about our products and services.

Our services:
- CCTV Surveillance Systems (HD, IP cameras, dome, bullet, PTZ)
- Walkie-Talkie Communication Devices (professional and compact)
- Walkie-Talkie Dealership & Service (sales, repair, and maintenance)
- Walkie-Talkie Accessories (batteries, antennas, chargers)
- Walkie-Talkie Rentals (short-term and long-term)
- Metal Detection Equipment (walk-through and handheld)
- Tower Setup & Network Infrastructure
- IT Consulting & Infrastructure Design
- AMC (Annual Maintenance Contracts) & Technical Support

Important rules:
1. NEVER disclose pricing or quotes directly. Always say: "For pricing and detailed quotes, please contact us via WhatsApp at +91 82497 62491 or call us directly. We'll provide a customized quote based on your requirements."
2. Be professional, friendly, and helpful.
3. Provide general product information, recommendations, and guidance.
4. If asked about something outside our services, politely redirect to our offerings.
5. Keep responses concise (2-4 sentences max unless the customer asks for details).
6. For urgent queries, suggest calling: +91 82497 62491 or +91 94394 63666.
7. Business hours: Mon-Sat, 9 AM - 6 PM.

Start by greeting the customer warmly and asking how you can help.`;

  constructor() {
    this.initialize();
  }

  private initialize() {
    const apiKey = environment.geminiApiKey;
    if (apiKey && apiKey !== 'YOUR_GEMINI_API_KEY_HERE') {
      this.genAI = new GoogleGenerativeAI(apiKey);
      this.isConfigured = true;
    }
  }

  getIsConfigured(): boolean {
    return this.isConfigured;
  }

  getHistory(): ChatMessage[] {
    return this.chatHistory;
  }

  async sendMessage(userMessage: string): Promise<string> {
    this.chatHistory.push({
      role: 'user',
      content: userMessage,
      timestamp: new Date()
    });

    if (!this.isConfigured || !this.genAI) {
      const fallback = "Thank you for your message! Our AI assistant is currently being set up. Please contact us directly via WhatsApp at +91 82497 62491 or call us for immediate assistance.";
      this.chatHistory.push({ role: 'assistant', content: fallback, timestamp: new Date() });
      return fallback;
    }

    try {
      const model = this.genAI.getGenerativeModel({ model: 'gemini-3.6-flash' });

      const conversationContext = this.chatHistory
        .map(m => `${m.role === 'user' ? 'Customer' : 'Assistant'}: ${m.content}`)
        .join('\n');

      const prompt = `${this.systemPrompt}\n\nConversation so far:\n${conversationContext}\n\nRespond to the customer's latest message naturally and helpfully.`;

      const result = await model.generateContent(prompt);
      const response = result.response.text();

      this.chatHistory.push({
        role: 'assistant',
        content: response,
        timestamp: new Date()
      });

      return response;
    } catch {
      const errorMsg = "I'm sorry, I'm having trouble responding right now. Please contact us directly at +91 82497 62491 via WhatsApp or phone call.";
      this.chatHistory.push({ role: 'assistant', content: errorMsg, timestamp: new Date() });
      return errorMsg;
    }
  }

  clearHistory() {
    this.chatHistory = [];
  }
}
