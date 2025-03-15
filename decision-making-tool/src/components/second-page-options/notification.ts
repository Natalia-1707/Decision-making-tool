export class Notification {
    private notification: HTMLDialogElement;
    private closeButton: HTMLElement;
    private static readonly notificationFirst: string =
      'Fill in the field.';
    private static readonly notificationSecond: string =
      'Duration must be between 5 and 30 seconds.';
  
    constructor() {
      this.notification = document.createElement('dialog');
      this.notification.classList.add('notification-window');
  
      this.closeButton = document.createElement('i');
      this.closeButton.classList.add(
        'fa-regular',
        'fa-circle-xmark',
        'modal-cancel-btn'
      );
  
      const content = document.createElement('div');
      content.classList.add('notification');
  
      const notificationFirstLine = document.createElement('div');
      notificationFirstLine.textContent = Notification.notificationFirst;
  
      const notificationSecondLine = document.createElement('div');
      notificationSecondLine.textContent = Notification.notificationSecond;
  
      content.appendChild(notificationFirstLine);
      content.appendChild(notificationSecondLine);
  
      this.notification.append(content, this.closeButton);
      document.body.appendChild(this.notification);
      this.addEventListeners();
    }
  
    private addEventListeners(): void {
      this.closeButton.addEventListener('click', () => this.close());
      this.notification.addEventListener('click', (event: MouseEvent) => {
        if (event.target === this.notification) this.close();
      });
      document.addEventListener('keydown', (event: KeyboardEvent) => {
        if (event.key === 'Escape' && this.notification) this.close();
      });
    }
  
    open(): void {
      this.notification.style.display = 'flex';
      this.notification.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }
  
    close(): void {
      this.notification.style.display = 'none';
      this.notification.style.display = 'none';
      document.body.style.overflow = '';
    }
  
    getNotification(): HTMLDialogElement {
      return this.notification;
    }
  }
  