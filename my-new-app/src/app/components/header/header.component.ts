import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="header">
      <div class="header-content">
        <div class="header-left">
          <h1 class="page-title">Dashboard</h1>
          <div class="breadcrumb">
            <span>Home</span>
            <i class="fas fa-chevron-right"></i>
            <span>Dashboard</span>
          </div>
        </div>
        
        <div class="header-right">
          <div class="search-box">
            <i class="fas fa-search"></i>
            <input type="text" placeholder="Search books...">
          </div>
          
          <div class="header-actions">
            <div class="notification-icon">
              <i class="fas fa-bell"></i>
              <span class="notification-badge">3</span>
            </div>
            
            <div class="user-profile">
              <div class="user-avatar">
                <i class="fas fa-user"></i>
              </div>
              <div class="user-info">
                <span class="user-name">John Doe</span>
                <span class="user-role">Administrator</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  `,
  styles: [`
    .header {
      height: 80px;
      background: white;
      border-bottom: 1px solid #e2e8f0;
      position: fixed;
      top: 0;
      left: 280px;
      right: 0;
      z-index: 999;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    }

    .header-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 100%;
      padding: 0 32px;
    }

    .header-left {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .page-title {
      font-size: 28px;
      font-weight: 700;
      color: #1e293b;
      margin: 0;
    }

    .breadcrumb {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 14px;
      color: #64748b;
    }

    .breadcrumb i {
      font-size: 12px;
    }

    .header-right {
      display: flex;
      align-items: center;
      gap: 24px;
    }

    .search-box {
      position: relative;
      display: flex;
      align-items: center;
    }

    .search-box i {
      position: absolute;
      left: 16px;
      color: #94a3b8;
      font-size: 16px;
    }

    .search-box input {
      width: 300px;
      padding: 12px 16px 12px 48px;
      border: 2px solid #e2e8f0;
      border-radius: 12px;
      font-size: 14px;
      transition: all 0.3s ease;
      background: #f8fafc;
    }

    .search-box input:focus {
      outline: none;
      border-color: #667eea;
      background: white;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }

    .header-actions {
      display: flex;
      align-items: center;
      gap: 20px;
    }

    .notification-icon {
      position: relative;
      padding: 12px;
      cursor: pointer;
      border-radius: 12px;
      transition: background 0.3s ease;
    }

    .notification-icon:hover {
      background: #f1f5f9;
    }

    .notification-icon i {
      font-size: 20px;
      color: #64748b;
    }

    .notification-badge {
      position: absolute;
      top: 8px;
      right: 8px;
      background: #ef4444;
      color: white;
      font-size: 12px;
      font-weight: 600;
      padding: 2px 6px;
      border-radius: 10px;
      min-width: 18px;
      text-align: center;
    }

    .user-profile {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 8px 16px;
      border-radius: 12px;
      cursor: pointer;
      transition: background 0.3s ease;
    }

    .user-profile:hover {
      background: #f1f5f9;
    }

    .user-avatar {
      width: 40px;
      height: 40px;
      background: linear-gradient(135deg, #667eea, #764ba2);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 16px;
    }

    .user-info {
      display: flex;
      flex-direction: column;
    }

    .user-name {
      font-size: 14px;
      font-weight: 600;
      color: #1e293b;
    }

    .user-role {
      font-size: 12px;
      color: #64748b;
    }
  `]
})
export class HeaderComponent {}