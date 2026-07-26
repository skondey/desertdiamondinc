# Phase 2: Learning Management System (LMS) Requirements

**Date:** July 26, 2026  
**Status:** Planning Phase  
**Reference Site:** [To be added - reference website URL]

---

## Overview

Transform the Desert Diamond Academy site from a marketing platform into a full-featured Learning Management System (LMS) with three user roles: **Student**, **Instructor**, and **Admin**.

---

## Design Updates (Immediate)

### Visual Redesign
- **Reference:** Use color scheme and style from reference website
- **Hero Section:** Add rolling/carousel IT-themed images on homepage
- **Logo Size:** Increase logo size across both sites (larger than current)
- **Color Palette:** Update based on reference site while maintaining brand identity

### Both Sites (Main + Academy)
- Rolling hero images with IT/technology themes
- Updated color scheme
- Larger logo in header/footer

---

## Authentication & User Roles

### Three User Types

#### 1. **Student Account**
**Capabilities:**
- Register and create account
- Browse available courses
- Enroll in courses
- View course materials (lectures, notes, videos)
- Take quizzes and view scores
- Track course progress
- View grades and certificates
- Update profile

**Dashboard:**
- Enrolled courses
- Course progress
- Upcoming assignments
- Recent grades
- Announcements

#### 2. **Instructor Account**
**Capabilities:**
- View assigned courses
- Add/edit lecture notes
- Upload course materials (PDFs, videos, links)
- Create and manage quizzes
  - Multiple choice
  - True/False
  - Short answer
  - Essay questions
- Grade student submissions
- View student progress
- Post announcements
- Manage course calendar
- Export gradebook

**Dashboard:**
- My courses
- Student roster per course
- Pending grading queue
- Course analytics
- Recent activity

#### 3. **Admin Account**
**Capabilities:**
- **Course Management:**
  - Create new courses
  - Edit existing courses (title, description, pricing, duration)
  - Archive/delete courses
  - Assign instructors to courses
  - Set course capacity and cohort dates
  
- **User Management:**
  - Admit/reject student applications
  - Approve student enrollments
  - Create instructor accounts
  - Manage user roles and permissions
  - Suspend/ban users
  
- **Content Management:**
  - Approve course materials before publishing
  - Manage course categories/tags
  - Upload global resources
  
- **System Administration:**
  - View platform analytics (enrollments, revenue, engagement)
  - Configure platform settings
  - Manage payment integrations
  - Export reports (financial, academic)
  - View audit logs

**Dashboard:**
- Platform overview (users, courses, revenue)
- Pending approvals (students, content)
- Recent activity
- Financial reports
- System health

---

## Technical Architecture

### Database Schema (PostgreSQL Recommended)

#### Users Table
```sql
- id (UUID)
- email (unique)
- password_hash
- role (enum: student, instructor, admin)
- first_name
- last_name
- profile_image
- created_at
- updated_at
- last_login
- status (active, suspended, pending)
```

#### Courses Table
```sql
- id (UUID)
- title
- slug
- description
- price
- duration
- start_date
- end_date
- capacity
- instructor_id (FK to Users)
- status (draft, published, archived)
- created_at
- updated_at
```

#### Enrollments Table
```sql
- id (UUID)
- student_id (FK to Users)
- course_id (FK to Courses)
- enrolled_at
- status (pending, active, completed, dropped)
- progress_percentage
- grade
```

#### Lectures Table
```sql
- id (UUID)
- course_id (FK to Courses)
- title
- content (text/markdown)
- order
- video_url
- attachments (JSON array)
- created_at
- updated_at
```

#### Quizzes Table
```sql
- id (UUID)
- course_id (FK to Courses)
- title
- description
- duration_minutes
- passing_score
- created_at
- due_date
```

#### Quiz Questions Table
```sql
- id (UUID)
- quiz_id (FK to Quizzes)
- question_text
- question_type (multiple_choice, true_false, short_answer, essay)
- points
- options (JSON array for multiple choice)
- correct_answer
- order
```

#### Student Submissions Table
```sql
- id (UUID)
- quiz_id (FK to Quizzes)
- student_id (FK to Users)
- answers (JSON)
- score
- submitted_at
- graded_at
- instructor_feedback
```

---

## Features Breakdown

### Phase 2A: Foundation (Week 1-2)
- [ ] Database setup (PostgreSQL)
- [ ] Authentication system (NextAuth.js)
- [ ] User registration/login
- [ ] Role-based access control
- [ ] Basic dashboards (Student, Instructor, Admin)

### Phase 2B: Course Management (Week 3-4)
- [ ] Admin: Create/edit courses
- [ ] Admin: Assign instructors
- [ ] Course detail pages
- [ ] Enrollment system
- [ ] Course roster

### Phase 2C: Content Delivery (Week 5-6)
- [ ] Instructor: Add lecture notes
- [ ] File upload system (AWS S3 or Cloudflare R2)
- [ ] Student: View lectures
- [ ] Progress tracking

### Phase 2D: Assessment (Week 7-8)
- [ ] Instructor: Quiz builder
- [ ] Student: Take quizzes
- [ ] Auto-grading (multiple choice, T/F)
- [ ] Manual grading (short answer, essay)
- [ ] Gradebook

### Phase 2E: Administration (Week 9-10)
- [ ] Admin: Student admission workflow
- [ ] Admin: Analytics dashboard
- [ ] Admin: Platform settings
- [ ] Email notifications
- [ ] Audit logging

---

## Technology Stack

### Frontend (Existing)
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- React Hook Form (for complex forms)

### Backend/Database
- **Database:** PostgreSQL (Supabase or AWS RDS)
- **ORM:** Prisma or Drizzle
- **Authentication:** NextAuth.js v5 (supports roles)
- **File Storage:** AWS S3 or Cloudflare R2
- **Email:** AWS SES or Resend

### New Dependencies Needed
```json
{
  "next-auth": "^5.0.0",
  "prisma": "^5.x",
  "@prisma/client": "^5.x",
  "react-hook-form": "^7.x",
  "zod": "^3.x",
  "@aws-sdk/client-s3": "^3.x",
  "react-dropzone": "^14.x",
  "recharts": "^2.x" // for analytics charts
}
```

---

## UI/UX Requirements

### Dashboards

#### Student Dashboard
- Card-based layout
- Course cards with progress bars
- Quick access to:
  - Next lecture
  - Upcoming quizzes
  - Recent grades
  - Announcements

#### Instructor Dashboard
- Table view of courses
- Grading queue with counts
- Student performance charts
- Quick actions:
  - Add lecture
  - Create quiz
  - Post announcement

#### Admin Dashboard
- System overview metrics:
  - Total students/instructors
  - Active courses
  - Revenue (if applicable)
  - Pending approvals
- Quick actions:
  - Create course
  - Admit student
  - Assign instructor

### Course Builder (Admin)
- Rich text editor for description
- Drag-and-drop curriculum builder
- Pricing and scheduling
- Instructor assignment
- Capacity settings

### Lecture Editor (Instructor)
- Markdown or WYSIWYG editor
- File attachment uploader
- Video embed support
- Preview mode

### Quiz Builder (Instructor)
- Question type selector
- Dynamic question addition
- Point allocation
- Answer key configuration
- Preview mode

---

## Security Considerations

- [ ] Row-level security (RLS) in database
- [ ] CSRF protection
- [ ] Rate limiting on API routes
- [ ] Input validation with Zod
- [ ] File upload restrictions (type, size)
- [ ] Secure file URLs (signed URLs for S3)
- [ ] Audit logging for admin actions
- [ ] Password hashing (bcrypt)
- [ ] 2FA for admin accounts (optional)

---

## Payment Integration (Optional - Phase 3)

If courses require payment:
- Stripe integration
- Payment processing on enrollment
- Invoice generation
- Refund handling
- Admin: View revenue reports

---

## Email Notifications

**Students:**
- Welcome email
- Enrollment confirmation
- New lecture available
- Quiz due reminder
- Grade posted

**Instructors:**
- New student enrolled
- Submission pending review
- Course schedule reminder

**Admins:**
- New student application
- System alerts
- Daily/weekly reports

---

## Deployment Considerations

### Database
- **Option 1:** Supabase (easiest, includes auth + storage)
- **Option 2:** AWS RDS PostgreSQL + S3
- **Option 3:** Vercel Postgres + Vercel Blob

### Hosting
- Vercel (current Next.js apps)
- Environment variables for:
  - Database URL
  - NextAuth secret
  - S3/storage credentials
  - Email service API keys

---

## Migration Plan

### From Current State to LMS

1. **Preserve existing marketing pages:**
   - Keep current homepage, about, programs, contact
   - Add "Student Login" button in header

2. **Add new routes:**
   - `/dashboard` - Role-based redirect
   - `/admin/*` - Admin panel
   - `/instructor/*` - Instructor tools
   - `/student/*` - Student portal
   - `/courses/*` - Course pages

3. **Database migration:**
   - Create all tables
   - Seed with initial data (cohorts → courses)
   - Create default admin account

---

## Open Questions

1. **Reference website URL?** (Need to analyze color scheme and image style)
2. **Payment required?** Do students pay for courses, or free for now?
3. **Video hosting?** Use YouTube embed, Vimeo, or self-hosted (AWS S3)?
4. **Certificate generation?** Should students receive certificates on completion?
5. **Live classes?** Integrate Zoom/Google Meet, or just async content?
6. **Mobile app?** Or web-only for now?
7. **Branding:** Keep "Desert Diamond" branding, or rebrand academy portion?

---

## Estimated Timeline

**Phase 2A-E:** 10-12 weeks for full LMS implementation  
**Immediate Visual Updates:** 3-5 days

---

## Next Steps

1. ✅ Document requirements (this file)
2. ⏳ Get reference website URL
3. ⏳ Approve tech stack choices
4. ⏳ Start Phase 2A: Database + Auth setup
5. ⏳ Design database schema in detail
6. ⏳ Create wireframes for dashboards

---

**Prepared by:** Kiro AI  
**For:** Desert Diamond Tech  
**Contact:** kondey@desertdiamondinc.com
