import { useEffect, useRef, useState } from 'react'
import type { FormEvent, MouseEvent } from 'react'
import type { StudentProfile } from '../types'
import Button from './ui/Button'

interface ProfileFormProps {
  initialProfile: StudentProfile
  onSave: (profile: StudentProfile) => void
  onCancel?: () => void
}

interface ProfileErrors {
  name?: string
  nim?: string
}

function ProfileForm({ initialProfile, onSave, onCancel }: ProfileFormProps) {
  const [name, setName] = useState(initialProfile.name)
  const [nim, setNim] = useState(initialProfile.nim)
  const [errors, setErrors] = useState<ProfileErrors>({})
  const nameInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    nameInputRef.current?.focus()
  }, [])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && onCancel) {
        onCancel()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onCancel])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const nextErrors: ProfileErrors = {}
    const trimmedName = name.trim()
    const trimmedNim = nim.trim()

    if (trimmedName.length < 3) {
      nextErrors.name = 'Nama minimal 3 karakter.'
    }

    if (!/^\d{8,12}$/.test(trimmedNim)) {
      nextErrors.nim = 'NIM harus berupa angka dengan panjang 8 sampai 12 digit.'
    }

    setErrors(nextErrors)

    if (nextErrors.name || nextErrors.nim) {
      return
    }

    onSave({ name: trimmedName, nim: trimmedNim })
  }

  const handleBackdrop = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget && onCancel) {
      onCancel()
    }
  }

  return (
    <div className="modal" role="presentation" onMouseDown={handleBackdrop}>
      <div
        className="modal__card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="profile-form-title"
      >
        <h2 className="modal__title" id="profile-form-title">
          Isi Data Diri
        </h2>
        <p className="modal__note">
          Data diri disimpan di browser ini dan dipakai untuk menampilkan
          identitas pada agenda.
        </p>
        <form className="modal__form" onSubmit={handleSubmit} noValidate>
          <div className="modal__field">
            <label className="modal__label" htmlFor="profile-name">
              Nama Lengkap
            </label>
            <input
              className="modal__input"
              id="profile-name"
              ref={nameInputRef}
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Nama lengkap"
              aria-invalid={errors.name ? true : false}
            />
            {errors.name ? (
              <p className="modal__error" role="alert">
                {errors.name}
              </p>
            ) : null}
          </div>
          <div className="modal__field">
            <label className="modal__label" htmlFor="profile-nim">
              NIM
            </label>
            <input
              className="modal__input"
              id="profile-nim"
              type="text"
              inputMode="numeric"
              value={nim}
              onChange={(event) => setNim(event.target.value)}
              placeholder="Contoh: 22123456"
              aria-invalid={errors.nim ? true : false}
            />
            {errors.nim ? (
              <p className="modal__error" role="alert">
                {errors.nim}
              </p>
            ) : null}
          </div>
          <div className="modal__actions">
            <Button label="Simpan" type="submit" variant="utama" />
            {onCancel ? (
              <Button label="Batal" onClick={onCancel} variant="netral" />
            ) : null}
          </div>
        </form>
      </div>
    </div>
  )
}

export default ProfileForm
