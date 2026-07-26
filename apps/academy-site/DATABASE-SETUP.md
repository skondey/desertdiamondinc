# Desert Diamond Academy - Database Setup Guide

**Date:** July 26, 2026  
**Status:** Ready for Setup  
**Database:** PostgreSQL with Prisma ORM

---

## 📋 Overview

Complete database schema with 15 tables supporting:
- ✅ User Management (Students, Instructors, Admins)
- ✅ Course Management & Enrollments
- ✅ Content Delivery (Lectures with video support)
- ✅ Assessments (Quizzes & Grading)
- ✅ Live Classes (Zoom, Google Meet, Teams)
- ✅ Certificates & Payments (Stripe)
- ✅ Notifications & Audit Logs

---

## 🚀 Quick Start

### Step 1: Create Supabase Project (Recommended)

1. Go to [https://supabase.com](https://supabase.com)
2. Create new project
3. Copy the connection string (Settings → Database → Connection String → URI)
4. Replace `[YOUR-PASSWORD]` with your actual password

**Alternative Options:**
- AWS RDS PostgreSQL
- Local PostgreSQL
- Vercel Postgres

### Step 2: Configure Environment Variables

Create `.env` file in `apps/academy-site/`:

```env
# Copy from .env.example and update values
DATABASE_URL="postgresql://postgres.[project-ref]:[password]@aws-0-us-east-1.pooler.supabase.com:6543/postgres?pgbouncer=true"

# NextAuth
NEXTAUTH_URL="http://localhost:3001"
NEXTAUTH_SECRET="generate-with: openssl rand -base64 32"

# Stripe (get from https://dashboard.stripe.com/test/apikeys)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_SECRET_KEY="sk_test_..."
```

### Step 3: Run Database Migrations

```bash
cd apps/academy-site

# Generate Prisma Client
npm run db:generate

# Push schema to database (for development)
npm run db:push

# OR create a migration (for production)
npm run db:migrate

# Seed initial data (admin, instructor, courses)
npm run db:seed
```

---

## 📊 Database Schema

### Core Tables (15 Total)

#### 1. **users** - User accounts
- Roles: STUDENT, INSTRUCTOR, ADMIN
- Status: PENDING, ACTIVE, SUSPENDED, BANNED
- Password hashing with bcrypt

#### 2. **categories** - Course categories
- Cloud Computing, Cybersecurity, DevOps, etc.

#### 3. **courses** - Course catalog
- Title, description, pricing, capacity
- Instructor assignment
- Status: DRAFT, PUBLISHED, ARCHIVED

#### 4. **enrollments** - Student course registrations
- Progress tracking (percentage)
- Status: PENDING, ACTIVE, COMPLETED, DROPPED
- Grading

#### 5. **lectures** - Course content
- Markdown/text content
- Video URLs (YouTube, Vimeo, S3)
- File attachments (JSON array)
- Publishing control

#### 6. **lecture_progress** - Student viewing progress
- Watch time tracking
- Completion status

#### 7. **quizzes** - Assessments
- Duration, passing score, due dates
- Publishing control

#### 8. **quiz_questions** - Quiz content
- Types: Multiple Choice, True/False, Short Answer, Essay, Fill-in-Blank
- Points, options, correct answers, explanations

#### 9. **quiz_submissions** - Student answers
- Auto-grading for objective questions
- Manual grading for essays
- Instructor feedback

#### 10. **live_classes** - Scheduled sessions
- Platforms: Zoom, Google Meet, Teams
- Meeting URLs, passwords, recordings
- Status: SCHEDULED, IN_PROGRESS, COMPLETED

#### 11. **class_attendance** - Attendance tracking
- Join/leave times
- Duration calculation

#### 12. **certificates** - Course completion certificates
- Unique certificate number
- Verification code
- PDF URL (S3 storage)

#### 13. **payments** - Transaction records
- Stripe integration
- Status: PENDING, COMPLETED, FAILED, REFUNDED
- Invoice tracking

#### 14. **notifications** - User notifications
- Types: Enrollment, Lecture Added, Quiz Due, Grade Posted, etc.
- Read/unread status

#### 15. **audit_logs** - System activity tracking
- User actions, entity changes
- IP address, user agent
- Admin oversight

---

## 🎯 Seeded Data

After running `npm run db:seed`:

### Default Users

**Admin Account:**
- Email: `admin@desertdiamondinc.com`
- Password: `Admin123!`
- Access: Full system administration

**Instructor Account:**
- Email: `kondey@desertdiamondinc.com`
- Password: `Instructor123!`
- Access: Course management, grading

### Default Categories
1. Cloud Computing
2. Cybersecurity
3. DevOps

### Default Courses
1. **AWS Cloud Practitioner Essentials** - $2,500
2. **AWS Solutions Architect Associate** - $3,500
3. **AWS Solutions Architect Professional** - $3,500
4. **AWS Security Specialty** - $3,500
5. **AWS DevOps Engineer Professional** - $3,500

All courses:
- Start: October 1, 2026
- Duration: 5 Months
- Published status
- Assigned to instructor

---

## 🛠️ Database Commands

```bash
# Generate Prisma Client (after schema changes)
npm run db:generate

# Push schema to database (development - no migrations)
npm run db:push

# Create migration (production - versioned)
npm run db:migrate

# Seed database with initial data
npm run db:seed

# Open Prisma Studio (database GUI)
npm run db:studio

# Reset database (DANGER: deletes all data)
npx prisma migrate reset
```

---

## 🔐 Security Features

### Implemented
- ✅ Password hashing with bcrypt (10 rounds)
- ✅ UUID primary keys (non-sequential)
- ✅ Unique constraints on emails, slugs
- ✅ Cascade deletes (courses → lectures → progress)
- ✅ Enum types for role/status validation
- ✅ Audit logging for admin actions

### To Implement (Phase 2B+)
- [ ] Row-level security policies (RLS)
- [ ] Rate limiting on API routes
- [ ] Input validation with Zod schemas
- [ ] NextAuth.js authentication
- [ ] CSRF protection
- [ ] Secure file upload validation

---

## 📝 Schema Modifications

To add new fields or tables:

1. Edit `prisma/schema.prisma`
2. Run `npm run db:migrate` to create migration
3. Update seed script if needed
4. Generate Prisma Client: `npm run db:generate`

Example:
```prisma
model User {
  // ... existing fields
  phoneNumber String? @map("phone_number") // Added field
}
```

---

## 🔍 Prisma Studio

Visual database browser:

```bash
npm run db:studio
```

Opens at `http://localhost:5555` - Browse and edit data with a GUI.

---

## 🐛 Troubleshooting

### "Can't reach database server"
- Check DATABASE_URL format
- Verify network access (firewall, IP whitelist)
- Test connection with: `npx prisma db pull`

### "Migration failed"
- Check database permissions
- Ensure no active connections
- Review migration SQL in `prisma/migrations/`

### "Seed script errors"
- Check if data already exists (upsert prevents duplicates)
- Verify instructor ID references
- Look for bcrypt hashing errors

### "Prisma Client not found"
- Run `npm run db:generate`
- Restart your dev server
- Check `node_modules/.prisma/client/` exists

---

## 📚 Next Steps

### Phase 2A: Foundation (Week 1-2)
1. ✅ Database schema designed
2. ✅ Prisma configured
3. ⏳ Install NextAuth.js v5
4. ⏳ Create login/register pages
5. ⏳ Implement role-based middleware
6. ⏳ Build basic dashboards

### Phase 2B: Course Management (Week 3-4)
- Admin: Course CRUD operations
- Course detail pages
- Enrollment system

### Phase 2C: Content Delivery (Week 5-6)
- Lecture viewer
- Video player integration
- Progress tracking

---

## 📞 Support

**Questions?**
- Email: kondey@desertdiamondinc.com
- Reference: `IMPLEMENTATION-PLAN.md`
- Prisma Docs: https://pris.ly/d/prisma-schema

---

**Database Ready! ✨**  
Next: Set up authentication with NextAuth.js v5
