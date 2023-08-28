import React from "react"
import '../../styles/tabbar.css'
import home from '../../tools/imgs/home.svg'

export default function Tabar (){
    return(
        <div className="body-tabbar">
            <nav class="tabbar">
                <div>
                    <input id="menu-1" type="radio" name="menu" />
                    <label for="menu-1">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
                        <g fill="#6c7486" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mixBlendMode: "normal", stroke: "none !important"}}><g transform="scale(5.33333,5.33333)"><path style={{stroke: 'none'}} d="M39.5,43h-9c-1.381,0 -2.5,-1.119 -2.5,-2.5v-9c0,-1.105 -0.895,-2 -2,-2h-4c-1.105,0 -2,0.895 -2,2v9c0,1.381 -1.119,2.5 -2.5,2.5h-9c-1.381,0 -2.5,-1.119 -2.5,-2.5v-19.087c0,-2.299 1.054,-4.471 2.859,-5.893l14.212,-11.199c0.545,-0.428 1.313,-0.428 1.857,0l14.214,11.199c1.805,1.422 2.858,3.593 2.858,5.891v19.089c0,1.381 -1.119,2.5 -2.5,2.5z"></path></g></g>
                        </svg>
                        <span>Inicio</span>
                    </label>
                    <input id="menu-2" type="radio" name="menu"/>
                    <label for="menu-2">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACjUlEQVR4nO1Yz2sTURDe6kXQg6A39aBHC4I/epEqnrxZFY3e/HHwR3ZeTN2ZRG8Lzc681Yr4Ryhq/QfEo571KBUKelIUL4qgYk3kRXfbYNK8bdJtaN4HDzaw38z3vZk3L6znOTg4DAeKKGOAMqdIGiu5AGXO5OqreEB9BEi+rLR4lZgg/lYiOdof8YFMKJTveYlXC5X4qSq60JN4RdE5QPmVt3iVLp5XxJeWufNcVsT11RMviYk6oL7RUyUcHDIgS3+WkE8nPCB5Ys1FnknzVXQhS861bwDM/LU2EB1LhaA8sOUB8f2We4aseT9sDMzaBvSr8egiHlsLQZ5KeEXiPRkq99qihTi2C8hvPK8xkgpBGbPk1aES7VvI2Bix/4/F0tXA5eDOVoX8oauIQCb+Ny8Ps7RPAiB9stulCSTv4aZs8WwAlehAZxM8DyST7Xi+H25SJM+WEPIUcXpjO65CRkD53VF8S9UsYCoBKLdMq5iD3QyC/Oga6v0toomLJeTdye9CYWY9oFxUxC8A+evfJc8VRRfCMFyX8qrxKKBcXRzrXxs+NpvXzIkyCyjaeuezQlXkrNk1QH5bqsbbbXnFoLZDkbwzXB/5jJc3zofhBkVyr6VvkT+bXu7GBdKnzLst54nkronZV5Fmrvukjyus7TTBr1yPtvmoDyvkaUD51HnUyctmWwV6b7kcbjbLPCsUH4hfLTEYPgLJbZPD5DI5i5N6lwr4hNGS3YDtbM5pec4AuQo0BqKFSkHtYDeuH8Tjy+H6HXh9NdALP4+8KZwBchVouBZS7hDL2ppCfhCPL8mp8KGBNjAQN7HnDIirwHC0EHT4xLgaBsDmk2IbA9zORN4GwGhAjjIbcHAYEvwBIZ/Hu/ptiVUAAAAASUVORK5CYII="/ >
                        <span>Tienda</span>
                    </label>
                    <input id="menu-3" type="radio" name="menu"/>
                    <label for="menu-3">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFMElEQVR4nO2aa2gcVRTHbxp81KrVovWJIOL7EUEtIq0g1hdFlOqqFVH8sm3m3tl055xN2iIOTeac2TTWB4hYn2gpYoxVoQqiqNW2Cr4+KCrSYqgfFLVqU1FrqytndjfZ3WzS3WTMZtb5wXyZx+79/++5j3PvVSomJiYm5r/BZGiBRl6jkT4yyDsN0M8a+GuNvMkAm2XQN1c1I7bTc5lBes8g58a7NPBeMSiT6T1CNQsaebkG3ncg8RVGbE9luk9XUcc4tKoe4eUX/agdPkNFFePQjQbpn4kbwDmN/BlA3ywVNe5y3UMN8uBkxJdcrooaGskOSbxEwS/JruxsFSU08JawDAiuDN+qokKyKzvbIO0P0wAN9KSKCjqdPT/U2s+PCG+rqGBn6IqwDZDRQEWFFPgXhW4A8BYVFZYv904IvQkAb1BRQgN/FXIfsFRFCYOUDVH8/lSKjlNRYhn0zdVAQyG1/0dVFDFA94TQ+++KXO2PkGvRyC9MIvT/shy6UkUZgL5ZBmhj/WFPQxb6N6jmICeRgJLU1Njm37GBzlHNRjrtzjFIKzTy+xr47/Jxnn7SwM/YyFer/wOu6x5sd2ZPbu/Mnh25VDcmJiYmZgwsXHO8bIQYpM2SwSUS/a1qkqm1Rn7CAL2qwU9alnu4mrbCgR8btQME/KlGul2Wyev5vY5M95mFPcTfKuYLvxrk1dNqr0Aj2QfK/CSpkZrUwHdbndlzbds9svi9bT90yNK0d5IB7zoN1K2Rt9YwYxyU/caGCk+n187UwOsnk+wY5D0T+hb4Q5PxE40W/24Y+X7dl0OrSqPHpP226mV05xigxTLrDFV8ItHfaoBeboj4fO2npBzG4SUa+Xvpd2ygm2XdoB3pghTQeTb2nJbviIPk6gcxIzQDDPLqhokPIoCXBOUA8mr9RjrpcMSn/bZC222IeA1MUo5kct1BBqi/jqh5RL6ZvAFA26ZeOD0ucwANdJuUQYZADfT6BH7rTem7JizecrLzG1Dje+2VdOxIKXItBmig/B0a0sj3m05vnizGyhDbDnyJBu6tMo8YCAzM9J5YtwEa+cUGhP3zgfnoXWiQ1lWKN8AfS4c3VplTXdlTNNInVc3NeBfXLD6dXjvTAP8x9Qb4C+X/DdJTVZ4PFk+VBQYB9Wugb4ORAfkl2aIrWYnaUSW61tdsgEF/4dSLpx2u684Iog/4rcrnNnjXB2UDb1G1ypHmU1xYDd4pf75HO94103ro09J+wVs0vLqM9EGJuO1ijrR3qfGxf4N3FZfcNNA3Jc8erFm8IAcUpj4CAqH77LR3aZVm8FxwL+MnaoikOwrfPzt8D2hA1YOWk5wNMEAuC+iWQhmGN1mk189XjN9Vg4krAwOAHhi5R2/Ua8DWRhlQrMGKKMxHAHp31hwBwBtKImCjihoaqLtE2E7JSdpX+EePl4pr5N35PiDXIiNEiQGfJ537jlFRwXKy80VMmUCgxfJMZojVDmUFmy+F02Ua/ZtGGQT0hRijooABfriKgO+KSY4F/uUy1ZU8RSP9GQybGVowslpVUvsVzSgS2Pn0dnQtI3853j6icegseafim03BrLLTm6eiRHJ4POenywXR7zJEyr6igZ5TZXlNO3SVHKyQyVCF+NeKk6vIkpRUGOmVukcToG0dHe5RqhlwXXeGBrp31C7z2EPh5qTrHqaaDR2E/5gToGFzZEVaNSOmkOVJLx9khGm/TbJASYMLHeBuOZhhIbWrZiSR6G+1kK+V88nVnsv9abubFBMTE6OmIf8CW/kH973f584AAAAASUVORK5CYII="/>
                        <span>Usuario</span>
                    </label>
                    <input id="menu-4" type="radio" name="menu"/>
                    <label for="menu-4">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABRElEQVR4nO3WsUoDQRAG4AUrWy3UUvANrKwsbAyCXUAEfYCb8cjejCAiWHgzSsBnEKzEF0ivoJ2dvURbLSwCihrZMypWd5fbrEL8YbthP2ZnuT1jhjLIco6s3d66AZKV34C7yPISWZ0Jgn8GWY4znGTHhAwkuuxgYL0MClt7OAosHSB9jWOZCIojSetj1ul6YFjx52Xzs4D0LAfemx4MLLe5XQPr9QA6PioCN73DLKu58MamzPuF5S3i5mQuXK+fjgDrvcdur3LRr+MmOfHY8UFhOCJd8wVHiSwUhq3dHXMPhodj7rgvoikTJLmo3DFJqxSawYlse4BtabjRSKeA5LEC+gBbOm76CbDOuWcSWZ4Lz5X0yf1gxLQ/2xc6vEFKl5D1zr0wSGmtal3hZBt9z7Bdte7vw0hprbdpO2JdrFr3HxMq73eI3UnBgVKrAAAAAElFTkSuQmCC"/>
                        <span>Carrito</span>
                    </label>
                    
                </div>
            </nav>

            <svg xmlns="http://www.w3.org/2000/svg" style={{display: "none"}}>
                <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="messageIcon" fill="currentColor">
                    <path d="M19.07 4.93a10 10 0 0 0-16.28 11 1.06 1.06 0 0 1 .09.64L2 20.8a1 1 0 0 0 .27.91A1 1 0 0 0 3 22h.2l4.28-.86a1.26 1.26 0 0 1 .64.09 10 10 0 0 0 11-16.28zM8 13a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm4 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm4 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1z" />
                </symbol>
                <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="imageIcon" fill="currentColor">
                    <path d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM8 7a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 8 7zm11 10.83A1.09 1.09 0 0 1 18 19H6l7.57-6.82a.69.69 0 0 1 .93 0l4.5 4.48z" />
                </symbol>
                <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="settingsIcon" fill="currentColor">
                    <circle cx="12" cy="12" r="1.5" />
                    <path d="M21.89 10.32L21.1 7.8a2.26 2.26 0 0 0-2.88-1.51l-.34.11a1.74 1.74 0 0 1-1.59-.26l-.11-.08a1.76 1.76 0 0 1-.69-1.43v-.28a2.37 2.37 0 0 0-.68-1.68 2.26 2.26 0 0 0-1.6-.67h-2.55a2.32 2.32 0 0 0-2.29 2.33v.24a1.94 1.94 0 0 1-.73 1.51l-.13.1a1.93 1.93 0 0 1-1.78.29 2.14 2.14 0 0 0-1.68.12 2.18 2.18 0 0 0-1.12 1.33l-.82 2.6a2.34 2.34 0 0 0 1.48 2.94h.16a1.83 1.83 0 0 1 1.12 1.22l.06.16a2.06 2.06 0 0 1-.23 1.86 2.37 2.37 0 0 0 .49 3.3l2.07 1.57a2.25 2.25 0 0 0 1.35.43A2 2 0 0 0 9 22a2.25 2.25 0 0 0 1.47-1l.23-.33a1.8 1.8 0 0 1 1.43-.77 1.75 1.75 0 0 1 1.5.78l.12.17a2.24 2.24 0 0 0 3.22.53L19 19.86a2.38 2.38 0 0 0 .5-3.23l-.26-.38A2 2 0 0 1 19 14.6a1.89 1.89 0 0 1 1.21-1.28l.2-.07a2.36 2.36 0 0 0 1.48-2.93zM12 15.5a3.5 3.5 0 1 1 3.5-3.5 3.5 3.5 0 0 1-3.5 3.5z" />
                </symbol>
            </svg>

                <a class="dribbble" href="https://dribbble.com/shots/6612066-Tab-Bar-active-animation" target="_blank">
                    <img src="https://cdn.dribbble.com/assets/dribbble-ball-mark-2bd45f09c2fb58dbbfb44766d5d1d07c5a12972d602ef8b32204d28fa3dda554.svg" alt=""/>
                </a>
        </div>
    )
}