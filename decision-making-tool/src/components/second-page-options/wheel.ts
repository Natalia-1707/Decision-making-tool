export class Wheel {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D | null;
    private options: { title: string; weight: number }[] = [];
  
    constructor() {
      this.canvas = document.createElement('canvas');
      this.canvas.width = 400;
      this.canvas.height = 400;
      this.ctx = this.canvas.getContext('2d');
  
      if (!this.ctx) {
        throw new Error('Не удалось получить контекст канваса');
      }
    }
  
    public getWheel(): HTMLCanvasElement {
      return this.canvas;
    }
  
    public setOptions(options: { title: string; weight: number }[]): void {
      this.options = options;
      this.drawWheel();
    }

    public drawWheel(): void {
        if (this.options.length === 0) {
            return;
          }
      const ctx = this.ctx!;

    
      const totalWeight = this.options.reduce(
        (sum, { weight }) => sum + weight,
        0
      );
    
      let currentAngle = 0;
      const [centerX, centerY, radius] = [
        this.canvas.width / 2,
        this.canvas.height / 2,
        this.canvas.width / 2,
      ];

      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      console.log('Рисуем колесо с опциями:', this.options);
    
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fillStyle = '#f0f0f0';
      ctx.fill();
      ctx.stroke();
    
      this.options.forEach(({ title, weight }) => {
        const sliceAngle = (weight / totalWeight) * 2 * Math.PI;
    
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(
          centerX,
          centerY,
          radius,
          currentAngle,
          currentAngle + sliceAngle
        );
        ctx.fillStyle = this.getRandomColor();
        ctx.fill();
    
        const textAngle = currentAngle + sliceAngle / 2;
        ctx.fillStyle = '#000000';
        ctx.font = '14px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(
          title,
          centerX + (radius / 1.5) * Math.cos(textAngle),
          centerY + (radius / 1.5) * Math.sin(textAngle)
        );
    
        currentAngle += sliceAngle;
      });
    }
  
    private getRandomColor(): string {
      return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
    }
  }