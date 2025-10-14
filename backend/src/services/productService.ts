import prisma from "../prisma/client";

export const productService = {
  async getAll() {
    return prisma.product.findMany();
  },

  async getById(id: number) {
    return prisma.product.findUnique({ where: { id } });
  },

  async create(data: any) {
    return prisma.product.create({ data });
  },

  async update(id: number, data: any) {
    return prisma.product.update({
      where: { id },
      data,
    });
  },

  async remove(id: number) {
    return prisma.product.delete({ where: { id } });
  },
};
