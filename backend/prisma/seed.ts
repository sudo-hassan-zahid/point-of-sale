import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Starting database seed...');

  const products = await prisma.product.createMany({
    data: [
      { sku: 'P001', name: 'Apple iPhone 15', price: 250000, cost: 200000, stock: 10 },
      { sku: 'P002', name: 'Samsung Galaxy S24', price: 230000, cost: 190000, stock: 15 },
      { sku: 'P003', name: 'HP Laptop 15"', price: 180000, cost: 150000, stock: 8 },
      { sku: 'P004', name: 'Logitech Mouse', price: 5000, cost: 3000, stock: 50 }
    ]
  });

  const customer = await prisma.customer.create({
    data: {
      name: 'John Doe',
      phone: '03001234567',
      email: 'john@example.com'
    }
  });

  const sale = await prisma.sale.create({
    data: {
      total: 505000,
      customerId: customer.id,
      lines: {
        create: [
          { productId: 1, quantity: 1, price: 250000 },
          { productId: 2, quantity: 1, price: 230000 },
          { productId: 4, quantity: 5, price: 5000 }
        ]
      }
    }
  });

  console.log('Seeding completed successfully!');
  console.log(`Created Sale ID: ${sale.id}`);
}

main()
  .catch((e) => {
    console.error('Seeding error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
