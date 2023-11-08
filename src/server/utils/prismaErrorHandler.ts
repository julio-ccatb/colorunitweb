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
  switch (error.code) {
    case "P2025": // Prisma code for UniqueConstraintViolationError
      return {
        message: "Unique constraint violation error occurred",
        code: "CONFLICT", // Use a valid key from TRPC_ERROR_CODES_BY_KEY
      };
    case "P2002": // Prisma code for ForeignConstraintViolationError
      return {
        message: "Foreign constraint violation error occurred",
        code: "BAD_REQUEST", // Use a valid key from TRPC_ERROR_CODES_BY_KEY
      };
    case "P2003": // Prisma code for NoRecordFoundError
      return {
        message: "No record found error occurred",
        code: "NOT_FOUND", // Use a valid key from TRPC_ERROR_CODES_BY_KEY
      };
    case "P2000": // Prisma code for InvalidFieldValueError
      return {
        message: "Invalid field value error occurred",
        code: "BAD_REQUEST", // Use a valid key from TRPC_ERROR_CODES_BY_KEY
      };
    case "P2001": // Prisma code for ConnectionClientError
      return {
        message: "Connection client error occurred",
        code: "INTERNAL_SERVER_ERROR", // Use a valid key from TRPC_ERROR_CODES_BY_KEY
      };
    // Add more cases for other Prisma error codes as needed

    default:
      // Handle any other Prisma errors here
      return {
        message: "An error occurred",
        code: "INTERNAL_SERVER_ERROR", // Use a valid key from TRPC_ERROR_CODES_BY_KEY
      };
  }
}
