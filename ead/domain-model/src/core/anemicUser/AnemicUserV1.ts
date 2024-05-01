// Validação básica
// Mas não está ligado ao domínio
export default interface AnemicUserV1 {
    id: number
    name: string
    email: string
    password?: string
}