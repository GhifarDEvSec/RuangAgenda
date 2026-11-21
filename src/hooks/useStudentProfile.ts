import { useCallback, useState } from 'react'
import appConfig from '../config'
import type { StudentProfile } from '../types'

const STORAGE_KEY = 'ruangagenda-profile'

const defaultProfile: StudentProfile = {
  name: appConfig.studentName,
  nim: appConfig.studentNim,
}

function isStudentProfile(value: unknown): value is StudentProfile {
  if (typeof value !== 'object' || value === null) {
    return false
  }

  const candidate = value as Record<string, unknown>

  return (
    typeof candidate.name === 'string' && typeof candidate.nim === 'string'
  )
}

function readProfile(): StudentProfile {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)

    if (stored === null) {
      return defaultProfile
    }

    const parsed: unknown = JSON.parse(stored)

    if (isStudentProfile(parsed)) {
      return { name: parsed.name, nim: parsed.nim }
    }

    return defaultProfile
  } catch {
    return defaultProfile
  }
}

export function useStudentProfile() {
  const [profile, setProfile] = useState<StudentProfile>(readProfile)

  const saveProfile = useCallback((next: StudentProfile) => {
    setProfile(next)

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    } catch {
      return
    }
  }, [])

  const hasProfile =
    profile.name.trim() !== '' && profile.nim.trim() !== ''

  return { profile, saveProfile, hasProfile }
}
