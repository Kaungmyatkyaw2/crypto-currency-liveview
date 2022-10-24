const HeaderRow = () => {

  const header = ['Rank','Coin','Price','Volumne','MTK Cap','Graph']

  return (
            <div className='w-full flex text-[15px] py-[20px]'>
                {header.map((i,index) => 
                <div key={index} className='w-[17%] font-bold text-center'><h1>{i}</h1></div>
                )
                }
            </div>
  )
}

export default HeaderRow