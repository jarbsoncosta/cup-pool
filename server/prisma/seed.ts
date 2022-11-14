import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const user = await prisma.user.create({
        data:{
            name: 'Jarbson Costa',
            email:'jarbsonfc@gmail.com',
            avatarUrl:"https://avatars.githubusercontent.com/u/80639874?s=400&u=5864ad67fc2c6bdaee36180cbc6731086f7740d3&v=4"
        }
    })
    const pool = await prisma.pool.create({
        data:{
            title: 'Example Poll',
            code:'BOL123',
            ownerId:user.id,

            participant:{
                create:{
                    userId:user.id
                }
            }
        }
    
    })

     await prisma.game.create({
        data:{
        date: '2022-11-07T11:46:36.158Z',
        firstTeamCountryCode:"DE",
        secondTeamCountryCode:"BR"
           
        }
    })

     await prisma.game.create({
        data:{
        date: '2022-11-09T11:46:36.158Z',
        firstTeamCountryCode:"BR",
        secondTeamCountryCode:"AR",

        guesses:{
            create:{
                firstTeamPoints:2,
                secondTeamPoints: 1,
                
                participant:{
                    connect:{
                        userId_poolId:{
                            poolId:pool.id,
                            userId:user.id
                        }
                    }
                }
            }
        }
           
        }
    })
}


main()