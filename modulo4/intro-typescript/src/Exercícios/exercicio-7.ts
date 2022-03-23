export default function converteDNAParaRNA(DNA: string): string {

    const RNA: string = DNA.replace(/A/g, "U").replace(/T/g, "A").replace(/C/g, "X").replace(/G/g, "C").replace(/X/g, "G")
    return RNA
}