export class Wheel {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D | null;
  private options: { title: string; weight: number }[] = [];

  constructor() {
    this.canvas = document.createElement('canvas');
    this.canvas.classList.add('wheel-canvas');
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
    if (this.options.length === 0) return;

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

      ctx.lineTo(
        centerX + radius * Math.cos(currentAngle + sliceAngle),
        centerY + radius * Math.sin(currentAngle + sliceAngle)
      );
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.stroke();

      if (sliceAngle >= Math.PI / 12) {
        const textAngle = currentAngle + sliceAngle / 2;
        const textRadius = radius * 0.5;
        const maxChars = Math.floor(sliceAngle / (Math.PI / 20));
        const shortedTitle =
          title.length > maxChars ? title.slice(0, maxChars) + '…' : title;

        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(textAngle);
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = '#ffffff';
        ctx.font = '1.2rem Kanit';
        ctx.fillText(shortedTitle, textRadius, 0);
        ctx.restore();
      }

      currentAngle += sliceAngle;
    });

    const centerRadius = radius * 0.1;
    ctx.beginPath();
    ctx.arc(centerX, centerY, centerRadius, 0, Math.PI * 2);
    ctx.fillStyle = '#003319';
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 3;
    ctx.stroke();

    this.drawCursor(centerX, centerY, radius);
  }

  private drawCursor(centerX: number, centerY: number, radius: number): void {
    const cursorSize = 40;
    const cursorX = centerX;
    const cursorY = centerY - radius - cursorSize / 2;

    this.ctx!.beginPath();
    this.ctx!.moveTo(cursorX, cursorY + cursorSize);
    this.ctx!.lineTo(cursorX - cursorSize / 2, cursorY);
    this.ctx!.lineTo(cursorX + cursorSize / 2, cursorY);
    this.ctx!.closePath();

    this.ctx!.fillStyle = '#ffffff';
    this.ctx!.fill();

    this.ctx!.strokeStyle = '#003319';
    this.ctx!.lineWidth = 3;
    this.ctx!.stroke();
  }

  private getRandomColor(): string {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')}`;
  }
}
