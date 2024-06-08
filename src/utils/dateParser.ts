const parseDate = (date: string) => {
  const formattedDate = new Date(date);
  const months = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember'
  ]
  const month = months[formattedDate.getMonth()]
  const year = formattedDate.getFullYear()
  return `${formattedDate.getDate()} ${month} ${year}`

}

export { parseDate };