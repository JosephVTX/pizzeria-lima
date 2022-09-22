import React from 'react'

export const Nav = () => {

    const menuArr = ["INICIO", "MENÚ", "NOSOTROS", "SUCURSALES", "AYUDA"]

  return (
    <>
        <nav className='font-MrEaves'>

            <ul className='font-bold xl:flex xl:justify-center xl:gap-20 xl:items-center'>
                {
                    menuArr.map((e, i) => (
                        <div key={i}>
                            <li><a className='flex h-[70px] items-center justify-center' href="#">{e}</a></li>
                        </div>
                    ))
                }
                
            </ul>
        </nav>
    </>
  )
}
