import { PrismaClient } from '@prisma/client';
import { hash } from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed...');

  // Create default admin user
  const adminPassword = await hash('Admin123!', 10);
  const admin = await prisma.user.upsert({
    where: { email: 'admin@desertdiamondinc.com' },
    update: {},
    create: {
      email: 'admin@desertdiamondinc.com',
      passwordHash: adminPassword,
      role: 'ADMIN',
      firstName: 'System',
      lastName: 'Administrator',
      status: 'ACTIVE',
    },
  });
  console.log('✅ Created admin user:', admin.email);

  // Create default instructor
  const instructorPassword = await hash('Instructor123!', 10);
  const instructor = await prisma.user.upsert({
    where: { email: 'kondey@desertdiamondinc.com' },
    update: {},
    create: {
      email: 'kondey@desertdiamondinc.com',
      passwordHash: instructorPassword,
      role: 'INSTRUCTOR',
      firstName: 'Sorel',
      lastName: 'Kondey',
      status: 'ACTIVE',
    },
  });
  console.log('✅ Created instructor user:', instructor.email);

  // Create categories
  const categories = await Promise.all([
    prisma.category.upsert({
      where: { slug: 'cloud-computing' },
      update: {},
      create: {
        name: 'Cloud Computing',
        slug: 'cloud-computing',
        description: 'AWS and cloud infrastructure courses',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'cybersecurity' },
      update: {},
      create: {
        name: 'Cybersecurity',
        slug: 'cybersecurity',
        description: 'Security and compliance courses',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'devops' },
      update: {},
      create: {
        name: 'DevOps',
        slug: 'devops',
        description: 'DevOps and automation courses',
      },
    }),
  ]);
  console.log('✅ Created categories:', categories.length);

  // Create courses from existing program data
  const cloudCategory = categories.find((c) => c.slug === 'cloud-computing');
  const securityCategory = categories.find((c) => c.slug === 'cybersecurity');

  const courses = await Promise.all([
    prisma.course.upsert({
      where: { slug: 'aws-cloud-practitioner' },
      update: {},
      create: {
        title: 'AWS Cloud Practitioner Essentials',
        slug: 'aws-cloud-practitioner',
        description:
          'Master the fundamentals of AWS cloud computing and prepare for the AWS Certified Cloud Practitioner exam. Learn cloud concepts, security, architecture, pricing, and support.',
        shortDescription: 'Foundation-level AWS certification course',
        price: 2500.0,
        duration: '5 Months',
        capacity: 30,
        status: 'PUBLISHED',
        instructorId: instructor.id,
        categoryId: cloudCategory?.id,
        startDate: new Date('2026-10-01'),
        endDate: new Date('2027-03-01'),
      },
    }),
    prisma.course.upsert({
      where: { slug: 'aws-solutions-architect-associate' },
      update: {},
      create: {
        title: 'AWS Solutions Architect Associate',
        slug: 'aws-solutions-architect-associate',
        description:
          'Design and deploy scalable AWS architectures. Master compute, storage, networking, databases, security, and cost optimization. Prepare for the AWS Solutions Architect Associate certification.',
        shortDescription: 'Design scalable AWS cloud architectures',
        price: 3500.0,
        duration: '5 Months',
        capacity: 25,
        status: 'PUBLISHED',
        instructorId: instructor.id,
        categoryId: cloudCategory?.id,
        startDate: new Date('2026-10-01'),
        endDate: new Date('2027-03-01'),
      },
    }),
    prisma.course.upsert({
      where: { slug: 'aws-solutions-architect-professional' },
      update: {},
      create: {
        title: 'AWS Solutions Architect Professional',
        slug: 'aws-solutions-architect-professional',
        description:
          'Advanced AWS architecture for complex multi-tier applications. Design for organizational complexity, migrations, cost control, and continuous improvement.',
        shortDescription: 'Advanced AWS architecture certification',
        price: 3500.0,
        duration: '5 Months',
        capacity: 20,
        status: 'PUBLISHED',
        instructorId: instructor.id,
        categoryId: cloudCategory?.id,
        startDate: new Date('2026-10-01'),
        endDate: new Date('2027-03-01'),
      },
    }),
    prisma.course.upsert({
      where: { slug: 'security-specialty' },
      update: {},
      create: {
        title: 'AWS Security Specialty',
        slug: 'security-specialty',
        description:
          'Master AWS security best practices, incident response, logging, monitoring, data protection, infrastructure security, and compliance. Prepare for the AWS Certified Security Specialty exam.',
        shortDescription: 'AWS security certification course',
        price: 3500.0,
        duration: '5 Months',
        capacity: 20,
        status: 'PUBLISHED',
        instructorId: instructor.id,
        categoryId: securityCategory?.id,
        startDate: new Date('2026-10-01'),
        endDate: new Date('2027-03-01'),
      },
    }),
    prisma.course.upsert({
      where: { slug: 'devops-engineer-professional' },
      update: {},
      create: {
        title: 'AWS DevOps Engineer Professional',
        slug: 'devops-engineer-professional',
        description:
          'Implement and manage continuous delivery systems on AWS. Master CI/CD, infrastructure as code, monitoring, logging, security, governance, and validation.',
        shortDescription: 'Professional DevOps certification',
        price: 3500.0,
        duration: '5 Months',
        capacity: 20,
        status: 'PUBLISHED',
        instructorId: instructor.id,
        categoryId: cloudCategory?.id,
        startDate: new Date('2026-10-01'),
        endDate: new Date('2027-03-01'),
      },
    }),
  ]);
  console.log('✅ Created courses:', courses.length);

  console.log('🎉 Database seeded successfully!');
  console.log('\n📋 Login Credentials:');
  console.log('Admin: admin@desertdiamondinc.com / Admin123!');
  console.log('Instructor: kondey@desertdiamondinc.com / Instructor123!');
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
