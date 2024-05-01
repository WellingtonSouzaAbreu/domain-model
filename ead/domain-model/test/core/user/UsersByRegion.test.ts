import { RegionCPF } from "@/core/shared/RegionCPF"
import { UsersByRegion } from "@/core/user/UsersByRegion"
import { UserBuilder } from "@/test/data/UserBuilder"

test('Deve agrupar usuários da região de SP', () => {
    const users = UserBuilder.generateList(100)
    const groupUsers = new UsersByRegion(users).groupUsers()

    const usersSP = groupUsers.get(RegionCPF.SP) ?? []
    const sameRegion = usersSP.every((p) => p.cpf.region.isEqual(RegionCPF.SP))

    expect(sameRegion).toBe(true)
})