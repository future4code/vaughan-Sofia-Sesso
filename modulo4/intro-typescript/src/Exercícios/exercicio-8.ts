export default function retornaStringReversa(palavra: string): string {
    const palavraArray: string[] = palavra.split("")
    const arrayReversa: string[] = palavraArray.reverse()
    const palavraReversa: string = arrayReversa.join("")

    return palavraReversa
}