export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-22'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)
export const token = assertValue(
  "skDqeM50qBXo6fJDMR5kodrlBGq8FVCR38YcCiS26z5w4DSOalrmvCegPTHye3ZA5hvlxxXjlAphvXky4YurMiV3ZTRwbSBRRS0EPDd4VbAIKTpAcoPVXGRrB1FaHTcOv1iZ3XQn6GDzbsoxhtHK2ZXjyz6CdLJUWSKRAGA7zVttsBCT2OZz",
  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
