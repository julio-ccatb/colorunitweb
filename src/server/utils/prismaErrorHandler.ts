import { type Prisma } from "@prisma/client";
import { type TRPC_ERROR_CODES_BY_KEY } from "@trpc/server/rpc";

// Define a custom "trpc" error code type
type TrpcErrorCode = keyof typeof TRPC_ERROR_CODES_BY_KEY;

// Define a custom "trpc" error type
type TrpcError = {
  message: string;
  code: TrpcErrorCode; // Enforce the code to be one of the keys from TRPC_ERROR_CODES_BY_KEY
};

export // Map Prisma errors to "trpc" errors
function mapPrismaErrorToTrpcError(
  error: Prisma.PrismaClientKnownRequestError,
): TrpcError {
  console.log(error.code);
  switch (error.code) {
    case "P2000": // Prisma code for ForeignConstraintViolationError
      return {
        message: "Foreign constraint violation error occurred",
        code: "BAD_REQUEST", // Use a valid key from TRPC_ERROR_CODES_BY_KEY
      };
    case "P2001": // Prisma code for ForeignConstraintViolationError
      return {
        message: "The record searched for in the where condition dosent exist",
        code: "NOT_FOUND", // Use a valid key from TRPC_ERROR_CODES_BY_KEY
      };
    case "P2002": // Prisma code for ForeignConstraintViolationError
      return {
        message: "Unique constraint failed",
        code: "CONFLICT", // Use a valid key from TRPC_ERROR_CODES_BY_KEY
      };
    case "P2003": // Prisma code for NoRecordFoundError
      return {
        message: "Foreign key constraint failed on the field",
        code: "BAD_REQUEST", // Use a valid key from TRPC_ERROR_CODES_BY_KEY
      };
    case "P2004": // Prisma code for InvalidFieldValueError
      return {
        message: "A constraint failed on the database",
        code: "INTERNAL_SERVER_ERROR", // Use a valid key from TRPC_ERROR_CODES_BY_KEY
      };
    case "P2001": // Prisma code for ConnectionClientError
      return {
        message: "Connection client error occurred",
        code: "INTERNAL_SERVER_ERROR", // Use a valid key from TRPC_ERROR_CODES_BY_KEY
      };
    case "P2021": // Prisma code for ConnectionClientError
      return {
        message: "The table {table} does not exist in the current database.",
        code: "NOT_FOUND", // Use a valid key from TRPC_ERROR_CODES_BY_KEY
      };
    case "P2022": // Prisma code for ConnectionClientError
      return {
        message: "The column {column} does not exist in the current database.",
        code: "NOT_FOUND", // Use a valid key from TRPC_ERROR_CODES_BY_KEY
      };
    case "P2025":
      return {
        message:
          "An operation failed because it depends on one or more records that were required.",
        code: "NOT_FOUND", // Use a valid key from TRPC_ERROR_CODES_BY_KEY
      };
    default:
      // Handle any other Prisma errors here
      return {
        message: "An error occurred",
        code: "INTERNAL_SERVER_ERROR", // Use a valid key from TRPC_ERROR_CODES_BY_KEY
      };
  }
}
