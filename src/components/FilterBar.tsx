import type { StatusFilter } from '../types'

interface FilterBarProps {
  keyword: string
  onKeywordChange: (value: string) => void
  statusFilter: StatusFilter
  onStatusFilterChange: (filter: StatusFilter) => void
}

const filterOptions: { label: string; value: StatusFilter }[] = [
  { label: 'Semua', value: 'semua' },
  { label: 'Belum', value: 'belum' },
  { label: 'Selesai', value: 'selesai' },
]

function FilterBar({
  keyword,
  onKeywordChange,
  statusFilter,
  onStatusFilterChange,
}: FilterBarProps) {
  return (
    <div className="filter-bar">
      <div className="filter-bar__search">
        <label className="filter-bar__label" htmlFor="activity-search">
          Cari kegiatan
        </label>
        <input
          className="filter-bar__input"
          id="activity-search"
          type="search"
          value={keyword}
          onChange={(event) => onKeywordChange(event.target.value)}
          placeholder="Cari judul atau deskripsi"
        />
      </div>
      <div className="filter-bar__filters" role="group" aria-label="Filter status">
        {filterOptions.map((option) => (
          <button
            className={
              statusFilter === option.value
                ? 'filter-bar__button filter-bar__button--active'
                : 'filter-bar__button'
            }
            type="button"
            key={option.value}
            aria-pressed={statusFilter === option.value}
            onClick={() => onStatusFilterChange(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default FilterBar
