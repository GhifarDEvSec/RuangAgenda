import { useState } from 'react'
import type { FormEvent } from 'react'
import type { ActivityCategory, NewActivityInput } from '../types'
import Button from './ui/Button'

interface ActivityFormProps {
  onAdd: (input: NewActivityInput) => void
}

interface FormErrors {
  title?: string
  date?: string
}

const categoryOptions: ActivityCategory[] = [
  'Akademik',
  'Organisasi',
  'Pribadi',
]

function ActivityForm({ onAdd }: ActivityFormProps) {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState<ActivityCategory>('Akademik')
  const [date, setDate] = useState('')
  const [description, setDescription] = useState('')
  const [errors, setErrors] = useState<FormErrors>({})

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const nextErrors: FormErrors = {}

    if (title.trim() === '') {
      nextErrors.title = 'Judul kegiatan wajib diisi.'
    }

    if (date === '') {
      nextErrors.date = 'Tanggal kegiatan wajib diisi.'
    }

    setErrors(nextErrors)

    if (nextErrors.title || nextErrors.date) {
      return
    }

    onAdd({
      title: title.trim(),
      category,
      date,
      description: description.trim(),
    })

    setTitle('')
    setCategory('Akademik')
    setDate('')
    setDescription('')
    setErrors({})
  }

  return (
    <form className="activity-form" onSubmit={handleSubmit} noValidate>
      <h3 className="activity-form__title">Tambah Kegiatan</h3>
      <div className="activity-form__grid">
        <div className="activity-form__field">
          <label className="activity-form__label" htmlFor="activity-title">
            Judul
          </label>
          <input
            className="activity-form__input"
            id="activity-title"
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Contoh: Seminar Pemrograman Web"
            aria-invalid={errors.title ? true : false}
          />
          {errors.title ? (
            <p className="activity-form__error" role="alert">
              {errors.title}
            </p>
          ) : null}
        </div>
        <div className="activity-form__field">
          <label className="activity-form__label" htmlFor="activity-category">
            Kategori
          </label>
          <select
            className="activity-form__select"
            id="activity-category"
            value={category}
            onChange={(event) =>
              setCategory(event.target.value as ActivityCategory)
            }
          >
            {categoryOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="activity-form__field">
          <label className="activity-form__label" htmlFor="activity-date">
            Tanggal
          </label>
          <input
            className="activity-form__input"
            id="activity-date"
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
            aria-invalid={errors.date ? true : false}
          />
          {errors.date ? (
            <p className="activity-form__error" role="alert">
              {errors.date}
            </p>
          ) : null}
        </div>
        <div className="activity-form__field activity-form__field--full">
          <label className="activity-form__label" htmlFor="activity-description">
            Deskripsi
          </label>
          <textarea
            className="activity-form__textarea"
            id="activity-description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Tuliskan keterangan singkat kegiatan"
            rows={3}
          />
        </div>
        <div className="activity-form__actions">
          <Button label="Tambah Kegiatan" type="submit" variant="utama" />
        </div>
      </div>
    </form>
  )
}

export default ActivityForm
