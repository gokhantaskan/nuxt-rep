import type { ZodError } from "zod";

export function reduceZodIssues(error: ZodError) {
  return error.issues.reduce((acc: Record<string, string>, issue) => {
    acc[issue.path.join(".")] = issue.message;
    return acc;
  }, {});
}

export function customZodErrorWithData(error: ZodError) {
  return createError({
    statusCode: 400,
    statusMessage: "Validation Error",
    data: { errors: reduceZodIssues(error) },
  });
}
