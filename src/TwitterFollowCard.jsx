import { useState } from 'react';
//importar estilos a nivel de componente
import './TwitterFollowCard.css'
//crear y exportar el componente (App)
export function TwitterFollowCard ({userName, name}) {

    //array con valor del estado y de como actualizarlo
    const [isFollowing, setIsFollowing] = useState(false);
    //cambiar el avatar segun el nombre de usuario
    const imageAvatar = `https://unavatar.io/${userName}`;
    //cambiar el texto segun el parametro
    const btnFollow = isFollowing? 'Siguiendo' : 'Seguir';
    //cambiar el diseño segun el parametro
    const btnFollowClassName = isFollowing?
    'tw-followCard-button is-following' : 'tw-followCard-button'
    // actualizar el estado del boton que llama esta funcion
    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }

    return (
        <article className='tw-followCard'>

            <header className='tw-followCard-header'>

                <img className='tw-followCard-avatar' alt="Avatar" src={imageAvatar}/>

                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>

            </header>

            <aside>

                <button className={btnFollowClassName} onClick={handleClick}>
                    <span className='tw-followCard-text'>{btnFollow}</span>
                    <span className='tw-followCard-unFollow'>Dejar de seguir</span>
                </button>

            </aside>

        </article>
    )
}