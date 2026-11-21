export type ActivityId = string

export type ActivityStatus = 'belum' | 'selesai'

export type ActivityCategory = 'Akademik' | 'Organisasi' | 'Pribadi'

export interface Activity {
  id: ActivityId
  title: string
  category: ActivityCategory
  date: string
  description: string
  status: ActivityStatus
}
