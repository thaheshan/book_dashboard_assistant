import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './/components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { TableWidgetComponent } from './components/widgets/table-widget/table-widget.component';
import { ListWidgetComponent } from './components/widgets/list-widget/list-widget.component';
import { ChartWidgetComponent } from './components/widgets/chart-widget/chart-widget.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    HeaderComponent,
    TableWidgetComponent,
    ListWidgetComponent,
    ChartWidgetComponent
  ],
  template: `
    <div class="app-container">
      <app-sidebar></app-sidebar>
      <div class="main-content">
        <app-header></app-header>
        <div class="dashboard-content">
          <div class="dashboard-grid">
            <div class="grid-item full-width">
              <app-table-widget></app-table-widget>
            </div>
            <div class="grid-item">
              <app-list-widget></app-list-widget>
            </div>
            <div class="grid-item">
              <app-chart-widget></app-chart-widget>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .app-container {
      display: flex;
      min-height: 100vh;
      background: #f8fafc;
    }

    .main-content {
      flex: 1;
      margin-left: 280px;
      display: flex;
      flex-direction: column;
    }

    .dashboard-content {
      flex: 1;
      padding: 32px;
      margin-top: 80px;
      overflow-y: auto;
    }

    .dashboard-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 32px;
      max-width: 1400px;
      margin: 0 auto;
    }

    .grid-item.full-width {
      grid-column: 1 / -1;
    }

    .grid-item {
      animation: fadeInUp 0.8s ease-out;
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media (max-width: 1200px) {
      .dashboard-grid {
        grid-template-columns: 1fr;
      }
      
      .grid-item.full-width {
        grid-column: 1;
      }
    }

    @media (max-width: 768px) {
      .main-content {
        margin-left: 0;
      }
      
      .dashboard-content {
        padding: 20px;
      }
      
      .dashboard-grid {
        gap: 20px;
      }
    }
  `]
})
export class AppComponent {
  title = 'Books Dashboard';
}