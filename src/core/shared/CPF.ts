import { errorMessages } from '../constants/errorMessages'
import { Validator } from '../utils/Validator'

export class CPF {
    readonly value: string

    constructor(value?: string) {
        const errors = Validator.stackErros(
            Validator.notNull(value, errorMessages.NULL_VALUE),
            Validator.notEmpty(value!, errorMessages.EMPTY_VALUE),
        )

        if (errors) throw new Error(errors.join(', '))

        if (!CPF.validateCPF(value!)) throw new Error(errorMessages.INVALID_CPF)

        this.value = this.clearCPF(value!)
    }

    formated() {
        return this.value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
    }

    private clearCPF(dirtCpf: string) {
        return dirtCpf.replace(/\D/g, '')
    }

    static validateCPF(dirtCpf: string): boolean {
        const cpf = dirtCpf.replace(/\D/g, '')
        if (cpf.length !== 11 || /^(.)\1+$/.test(cpf)) return false

        const firstDigitIsValid = CPF.validateVerifiedDigit(cpf, true)
        const secondDigitIsValid = CPF.validateVerifiedDigit(cpf)

        return firstDigitIsValid && secondDigitIsValid
    }

    static validateVerifiedDigit(cpf: string, firstDigit?: boolean) {
        const factor = firstDigit ? 9 : 10

        const sum = cpf.split('').slice(0, factor).reduce((acc, val, i) => acc + parseInt(val) * ((factor + 1) - i), 0)
        const checkDigit = 11 - (sum % 11)
        const calculatedCheckDigit = checkDigit >= 10 ? 0 : checkDigit
        return calculatedCheckDigit === parseInt(cpf.charAt(factor))
    }
}