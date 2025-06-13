import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookService } from '../../../services/book.service';
import { Book } from '../../../models/book.model';

@Component({
  selector: 'app-list-widget',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="widget-card fade-in">
      <div class="widget-header">
        <div class="widget-title">
          <i class="fas fa-list"></i>
          <h3>Oldest Books Collection</h3>
        </div>
        <div class="widget-actions">
          <button class="action-btn">
            <i class="fas fa-filter"></i>
          </button>
          <button class="action-btn">
            <i class="fas fa-ellipsis-v"></i>
          </button>
        </div>
      </div>
      
      <div class="widget-content">
        <div class="book-list">
          <div *ngFor="let book of books; let i = index" 
               class="book-item slide-in" 
               [style.animation-delay]="(i * 0.1) + 's'">
            <div class="book-info">
              <div class="book-icon">
                <i class="fas fa-book-open"></i>
              </div>
              <div class="book-details">
                <div class="book-header">
                  <span class="book-id">#{{ book.id }}</span>
                  <span class="book-title">{{ book.title }}</span>
                </div>
                <div class="book-meta">
                  <span class="isbn">ISBN: {{ book.isbn }}</span>
                  <span class="publication-date">
                    Published: {{ book.publicationDate | date:'MMM dd, yyyy' }}
                  </span>
                </div>
              </div>
            </div>
            <div class="book-actions">
              <button class="view-btn">
                <i class="fas fa-eye"></i>
              </button>
              <button class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
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
      color: #10b981;
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

    .book-list {
      max-height: 600px;
      overflow-y: auto;
    }

    .book-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 28px;
      border-bottom: 1px solid #f1f5f9;
      transition: all 0.3s ease;
    }

    .book-item:hover {
      background: #f8fafc;
    }

    .book-item:last-child {
      border-bottom: none;
    }

    .book-info {
      display: flex;
      align-items: center;
      gap: 16px;
      flex: 1;
    }

    .book-icon {
      width: 48px;
      height: 48px;
      background: linear-gradient(135deg, #10b981, #059669);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 18px;
    }

    .book-details {
      flex: 1;
    }

    .book-header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 6px;
    }

    .book-id {
      background: #e0e7ff;
      color: #3730a3;
      padding: 4px 8px;
      border-radius: 6px;
      font-size: 12px;
      font-weight: 600;
      font-family: 'Courier New', monospace;
    }

    .book-title {
      font-size: 16px;
      font-weight: 600;
      color: #1e293b;
    }

    .book-meta {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .isbn {
      font-size: 13px;
      color: #64748b;
      font-family: 'Courier New', monospace;
    }

    .publication-date {
      font-size: 13px;
      color: #94a3b8;
    }

    .book-actions {
      display: flex;
      gap: 8px;
    }

    .view-btn, .edit-btn {
      width: 32px;
      height: 32px;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
      font-size: 14px;
    }

    .view-btn {
      background: #dbeafe;
      color: #1d4ed8;
    }

    .view-btn:hover {
      background: #bfdbfe;
    }

    .edit-btn {
      background: #fef3c7;
      color: #d97706;
    }

    .edit-btn:hover {
      background: #fde68a;
    }
  `]
})
export class ListWidgetComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.bookService.getOldestBooks(10).subscribe(books => {
      this.books = books;
    });
  }
}