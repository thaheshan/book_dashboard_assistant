import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookService } from '../../../services/book.service';
import { AuthorBookCount } from '../../../models/book.model';
import { Chart, ChartConfiguration } from 'chart.js/auto';

@Component({
  selector: 'app-chart-widget',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="widget-card fade-in">
      <div class="widget-header">
        <div class="widget-title">
          <i class="fas fa-chart-pie"></i>
          <h3>Books by Author</h3>
        </div>
        <div class="widget-actions">
          <button class="action-btn">
            <i class="fas fa-expand"></i>
          </button>
          <button class="action-btn">
            <i class="fas fa-ellipsis-v"></i>
          </button>
        </div>
      </div>
      
      <div class="widget-content">
        <div class="chart-container">
          <canvas #chartCanvas></canvas>
        </div>
        
        <div class="chart-legend">
          <div *ngFor="let item of authorData; let i = index" 
               class="legend-item slide-in"
               [style.animation-delay]="(i * 0.1) + 's'">
            <div class="legend-color" [style.background-color]="chartColors[i]"></div>
            <div class="legend-info">
              <span class="legend-label">{{ item.author }}</span>
              <span class="legend-value">{{ item.bookCount }} books</span>
            </div>
            <div class="legend-percentage">
              {{ getPercentage(item.bookCount) }}%
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .widget-card {
      background: white;
      border-radius: 16px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      overflow: hidden;
      transition: all 0.3s ease;
      border: 1px solid #f1f5f9;
    }

    .widget-card:hover {
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
      transform: translateY(-2px);
    }

    .widget-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 24px 28px 20px;
      border-bottom: 1px solid #f1f5f9;
    }

    .widget-title {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .widget-title i {
      font-size: 20px;
      color: #f59e0b;
    }

    .widget-title h3 {
      font-size: 20px;
      font-weight: 700;
      color: #1e293b;
      margin: 0;
    }

    .widget-actions {
      display: flex;
      gap: 8px;
    }

    .action-btn {
      width: 36px;
      height: 36px;
      border: none;
      background: #f8fafc;
      border-radius: 8px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
      color: #64748b;
    }

    .action-btn:hover {
      background: #e2e8f0;
      color: #334155;
    }

    .widget-content {
      padding: 28px;
    }

    .chart-container {
      position: relative;
      height: 300px;
      margin-bottom: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .chart-legend {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .legend-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 16px;
      background: #f8fafc;
      border-radius: 12px;
      transition: all 0.3s ease;
    }

    .legend-item:hover {
      background: #f1f5f9;
      transform: translateX(4px);
    }

    .legend-color {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      flex-shrink: 0;
    }

    .legend-info {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .legend-label {
      font-size: 14px;
      font-weight: 600;
      color: #1e293b;
    }

    .legend-value {
      font-size: 12px;
      color: #64748b;
    }

    .legend-percentage {
      font-size: 14px;
      font-weight: 700;
      color: #475569;
      background: white;
      padding: 4px 8px;
      border-radius: 6px;
      min-width: 45px;
      text-align: center;
    }
  `]
})
export class ChartWidgetComponent implements OnInit {
  @ViewChild('chartCanvas', { static: true }) chartCanvas!: ElementRef<HTMLCanvasElement>;
  
  authorData: AuthorBookCount[] = [];
  chart: Chart | null = null;
  totalBooks = 0;
  
  chartColors = [
    '#667eea', '#764ba2', '#f093fb', '#f5576c',
    '#4facfe', '#00f2fe', '#43e97b', '#38f9d7',
    '#ffecd2', '#fcb69f', '#a8edea', '#fed6e3'
  ];

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.bookService.getBooksByAuthor().subscribe(data => {
      this.authorData = data;
      this.totalBooks = data.reduce((sum, item) => sum + item.bookCount, 0);
      this.createChart();
    });
  }

  createChart() {
    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    if (!ctx) return;

    const config: ChartConfiguration = {
      type: 'doughnut',
      data: {
        labels: this.authorData.map(item => item.author),
        datasets: [{
          data: this.authorData.map(item => item.bookCount),
          backgroundColor: this.chartColors.slice(0, this.authorData.length),
          borderWidth: 0,
          hoverBorderWidth: 4,
          hoverBorderColor: '#ffffff'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        // cutout: '65%',
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            backgroundColor: '#1e293b',
            titleColor: '#ffffff',
            bodyColor: '#ffffff',
            borderColor: '#334155',
            borderWidth: 1,
            cornerRadius: 8,
            displayColors: true,
            callbacks: {
              label: (context) => {
                const percentage = ((context.parsed / this.totalBooks) * 100).toFixed(1);
                return `${context.label}: ${context.parsed} books (${percentage}%)`;
              }
            }
          }
        },
        animation: {
          duration: 1500,
          easing: 'easeOutQuart'
        },
        // Removed invalid 'hover.animationDuration' property
      }
    };

    this.chart = new Chart(ctx, config);
  }

  getPercentage(count: number): string {
    return ((count / this.totalBooks) * 100).toFixed(1);
  }

  ngOnDestroy() {
    if (this.chart) {
      this.chart.destroy();
    }
  }
}