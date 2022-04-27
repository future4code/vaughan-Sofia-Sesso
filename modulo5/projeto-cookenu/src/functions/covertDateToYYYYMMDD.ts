export const convertDateToYYYYMMDD = (date: any): string => {
    const dd: number = date.getDate()
    let mm: number | string = date.getMonth() + 1
    const yyyy: number = date.getFullYear()

    if (mm < 10) {
        mm = "0" + mm.toString()
    }

    const newDate: string = `${yyyy}-${mm}-${dd}`

    return newDate
}