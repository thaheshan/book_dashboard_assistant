import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookService } from '../../../services/book.service';
import { Book } from '../../../models/book.model';

@Component({
  selector: 'app-table-widget',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="widget-card fade-in">
      <div class="widget-header">
        <div class="widget-title">
          <i class="fas fa-table"></i>
          <h3>Latest Books Added</h3>
        </div>
        <div class="widget-actions">
          <button class="action-btn">
            <i class="fas fa-download"></i>
          </button>
          <button class="action-btn">
            <i class="fas fa-ellipsis-v"></i>
          </button>
        </div>
      </div>
      
      <div class="widget-content">
        <div class="table-container">
          <table class="data-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Author</th>
                <th>ISBN</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let book of books; let i = index" class="table-row" [style.animation-delay]="(i * 0.1) + 's'">
                <td class="id-cell">{{ book.id }}</td>
                <td class="title-cell">
                  <div class="book-info">
                    <div class="book-icon">
                      <i class="fas fa-book"></i>
                    </div>
                    <span class="book-title">{{ book.title }}</span>
                  </div>
                </td>
                <td class="author-cell">{{ book.author }}</td>
                <td class="isbn-cell">{{ book.isbn }}</td>
                <td class="status-cell">
                  <span class="status-badge available">Available</span>
                </td>
              </tr>
            </tbody>
          </table>
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
      color: #667eea;
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
      padding: 0;
    }

    .table-container {
      overflow-x: auto;
    }

    .data-table {
      width: 100%;
      border-collapse: collapse;
    }

    .data-table th {
      background: #f8fafc;
      padding: 16px 24px;
      text-align: left;
      font-weight: 600;
      font-size: 14px;
      color: #475569;
      border-bottom: 1px solid #e2e8f0;
    }

    .data-table td {
      padding: 20px 24px;
      border-bottom: 1px solid #f1f5f9;
      font-size: 14px;
    }

    .table-row {
      transition: all 0.3s ease;
      animation: slideInUp 0.6s ease-out both;
    }

    .table-row:hover {
      background: #f8fafc;
    }

    .id-cell {
      font-weight: 600;
      color: #667eea;
      font-family: 'Courier New', monospace;
    }

    .book-info {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .book-icon {
      width: 32px;
      height: 32px;
      background: linear-gradient(135deg, #667eea, #764ba2);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 14px;
    }

    .book-title {
      font-weight: 600;
      color: #1e293b;
    }

    .author-cell {
      color: #64748b;
      font-weight: 500;
    }

    .isbn-cell {
      font-family: 'Courier New', monospace;
      color: #475569;
      font-size: 13px;
    }

    .status-badge {
      padding: 6px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .status-badge.available {
      background: #dcfce7;
      color: #166534;
    }

    @keyframes slideInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `]
})
export class TableWidgetComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.bookService.getLatestBooks(5).subscribe(books => {
      this.books = books;
    });
  }
}