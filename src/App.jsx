//importar el componente (TwitterFollowCard)
import { useState } from "react";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Angel Duran',
        isFollowing: true,
    },

    {
        userName: 'pheralb',
        name: 'Pablo Hernandez',
        isFollowing: false,
    },

    {
        userName: 'PacoHdezs',
        name: 'Paco Hdez',
        isFollowing: false,
    },

    {
        userName: 'TMChein',
        name: 'Tomas',
        isFollowing: true,
    }
]

//llamar componentes
export function App () {

    //pasar una funcion como propiedad
    // const format = (userName) => `@${userName}`;

    //pasar un elemento como propiedad
    // const formattedUserName = (<span>@midudev</span>)

    const [state, setState] = useState(0);

    return (

        //(<>)remplaza el <React.Fragment> que sirve para agrupar elementos
        <>
            <div className="App">

                {/* llamar componente (TwitterFollowCard) y asignar argumentos */}

                {
                    users.map(user => {
                        const {userName, name, isFollowing} = user;
                        return (
                            <TwitterFollowCard
                                key={userName}
                                userName={userName}
                                isFollowing={isFollowing}
                                name={name}
                            />
                        )
                    })
                }

            </div>
        </>
    )
}