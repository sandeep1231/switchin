import { Component, ElementRef, ViewChild } from '@angular/core';
import { ChatService, ChatMessage } from '../services/chat.service';

@Component({
  selector: 'app-chat-widget',
  standalone: false,
  templateUrl: './chat-widget.component.html',
  styleUrls: ['./chat-widget.component.scss']
})
export class ChatWidgetComponent {
  isOpen = false;
  userInput = '';
  isLoading = false;

  @ViewChild('messagesContainer') private messagesContainer!: ElementRef;

  constructor(private chatService: ChatService) {}

  get messages(): ChatMessage[] {
    return this.chatService.getHistory();
  }

  toggleChat() {
    this.isOpen = !this.isOpen;
    if (this.isOpen && this.messages.length === 0) {
      this.sendInitialGreeting();
    }
  }

  private async sendInitialGreeting() {
    this.isLoading = true;
    await this.chatService.sendMessage('Hello');
    this.isLoading = false;
    this.scrollToBottom();
  }

  async sendMessage() {
    const msg = this.userInput.trim();
    if (!msg || this.isLoading) return;

    this.userInput = '';
    this.isLoading = true;
    this.scrollToBottom();

    await this.chatService.sendMessage(msg);
    this.isLoading = false;
    this.scrollToBottom();
  }

  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }

  private scrollToBottom() {
    setTimeout(() => {
      if (this.messagesContainer) {
        const el = this.messagesContainer.nativeElement;
        el.scrollTop = el.scrollHeight;
      }
    }, 50);
  }
}
