export const fetchData = async (url: string) => {
  // const response = await new Promise<any>((resolve) => {
  //   setTimeout(() => resolve(fetch(url)), 10000)
  // })
  const response = await fetch(url)
  const data = await response.json()
  return data
}
