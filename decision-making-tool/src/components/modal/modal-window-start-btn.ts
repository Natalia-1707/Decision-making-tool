export class ModalWindow {
    private modal: HTMLDialogElement;
    private closeButton: HTMLElement;
  
    constructor(message: string) {
      this.modal = document.createElement('dialog');
      this.modal.classList.add('modal-window');

      this.closeButton = document.createElement('i');
      this.closeButton.classList.add('fa-regular', 'fa-circle-xmark', 'modal-cancel-btn');
      
      const content = document.createElement('div');
      content.classList.add('modal-content');
      content.textContent = message;
  
      this.modal.append(content, this.closeButton);
      document.body.appendChild(this.modal);
      this.addEventListeners();
    }

    private addEventListeners(): void {
      this.closeButton.addEventListener('click', () => this.close());
      this.modal.addEventListener('click', (event: MouseEvent) => {
        if (event.target === this.modal) this.close();
      });
      document.addEventListener('keydown', (event: KeyboardEvent) => {
        if (event.key === 'Escape' && this.modal.open) this.close();
      });
    }
  
    open(): void {
      this.modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }
  
    close(): void {
        this.modal.style.display = 'none';
      document.body.style.overflow = '';
    }
    
    getModal(): HTMLDialogElement {
        return this.modal;
    }
  }