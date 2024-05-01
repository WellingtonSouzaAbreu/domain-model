// Validação básica
// É uma declaração de uma interface com instância, mas ainda sem valor
export default class AnemicUserV2 {
    constructor(
        public id: number,
        public name: string,
        public email: string,
        public password?: string
    ) { }
}