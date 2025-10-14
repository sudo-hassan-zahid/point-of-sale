import { Response } from "express";

export function handleError(res: Response, error: unknown) {
  console.error(error);
  res.status(500).json({
    success: false,
    message: error instanceof Error ? error.message : "Internal Server Error",
  });
}
