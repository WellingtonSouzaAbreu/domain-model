import { CPF } from "../shared/CPF"
import { Entity, EntityProps } from "../shared/Entity"
import { UserName } from "../shared/UserName"

export interface UserProps extends EntityProps {
    name?: string
    cpf?: string
}

export class User extends Entity<User, UserProps> {
    readonly name: UserName
    readonly cpf: CPF

    constructor(props: UserProps) {
        super(props)

        this.name = new UserName(props.name)
        this.cpf = new CPF(props.cpf)
    }
}