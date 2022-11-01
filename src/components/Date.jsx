import { parseISO, format } from 'date-fns'

export function Date({ dateString }) {
  const date = parseISO(dateString)
  return <time className="text-sm" dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>
}
