import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="sidebar">
      <div class="sidebar-header">
        <div class="logo">
          <i class="fas fa-book"></i>
          <span>eZuite</span>
        </div>
      </div>
      
      <nav class="sidebar-nav">
        <div class="nav-section">
          <div class="nav-item active">
            <i class="fas fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </div>
          <div class="nav-item">
            <i class="fas fa-book-open"></i>
            <span>Books</span>
          </div>
          <div class="nav-item">
            <i class="fas fa-users"></i>
            <span>Authors</span>
          </div>
          <div class="nav-item">
            <i class="fas fa-chart-bar"></i>
            <span>Analytics</span>
          </div>
          <div class="nav-item">
            <i class="fas fa-cog"></i>
            <span>Settings</span>
          </div>
        </div>
      </nav>
    </div>
  `,
  styles: [`
    .sidebar {
      width: 280px;
      height: 100vh;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      position: fixed;
      left: 0;
      top: 0;
      z-index: 1000;
      box-shadow: 4px 0 20px rgba(0, 0, 0, 0.1);
    }

    .sidebar-header {
      padding: 24px 20px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 24px;
      font-weight: 700;
    }

    .logo i {
      font-size: 28px;
      color: #fbbf24;
    }

    .sidebar-nav {
      padding: 20px 0;
    }

    .nav-item {
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 16px 24px;
      cursor: pointer;
      transition: all 0.3s ease;
      border-left: 4px solid transparent;
    }

    .nav-item:hover {
      background: rgba(255, 255, 255, 0.1);
      border-left-color: #fbbf24;
    }

    .nav-item.active {
      background: rgba(255, 255, 255, 0.15);
      border-left-color: #fbbf24;
      font-weight: 600;
    }

    .nav-item i {
      font-size: 18px;
      width: 20px;
      text-align: center;
    }

    .nav-item span {
      font-size: 16px;
    }
  `]
})
export class SidebarComponent {}