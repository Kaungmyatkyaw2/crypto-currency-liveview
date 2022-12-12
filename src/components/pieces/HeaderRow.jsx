const HeaderRow = () => {

  const header = ['Rank','Coin','Price','Volumne','MTK Cap','Graph']
  const test = ['Volumne','MTK Cap']


  return (
            <div className='w-full flex text-[15px] py-[20px]'>
                {header.map((i,index) => 
                <div key={index} className={`md:w-[17%] w-[25%] font-bold text-center md:block ${test.includes(i) && 'hidden'}`}><h1>{i}</h1></div>
                )
                }
            </div>
  )
}

export default HeaderRow