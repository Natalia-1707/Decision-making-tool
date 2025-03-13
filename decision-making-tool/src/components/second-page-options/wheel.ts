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
    console.log('Обновленные опции:', this.options);
    this.drawWheel();
  }

  private drawWheel(): void {
    if (this.ctx === null) {
      throw new Error('Контекст канваса не был инициализирован');
    }

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

    if (this.ctx) {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.beginPath();
      this.ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      this.ctx.fillStyle = '#f0f0f0';
      this.ctx.fill();
      this.ctx.stroke();
    }

    this.options.forEach(({ title, weight }) => {
      const sliceAngle = (weight / totalWeight) * 2 * Math.PI;

      if (this.ctx) {
        this.ctx.beginPath();
        this.ctx.moveTo(centerX, centerY);
        this.ctx.arc(
          centerX,
          centerY,
          radius,
          currentAngle,
          currentAngle + sliceAngle
        );
        this.ctx.fillStyle = this.getRandomColor();
        this.ctx.fill();

        const textAngle = currentAngle + sliceAngle / 2;
        this.ctx.fillStyle = '#000000';
        this.ctx.font = '14px Arial';
        this.ctx.fillText(
          title,
          centerX + (radius / 2) * Math.cos(textAngle),
          centerY + (radius / 2) * Math.sin(textAngle)
        );
      }

      currentAngle += sliceAngle;
    });
  }

  private getRandomColor(): string {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
}
