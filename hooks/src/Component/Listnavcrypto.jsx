// import '../styles/listcrypto.css'
import "../styles/coinComponent.css"
import white from "../assets/white-background.jpg"


function ListNavCrypto(){
    let myDate = new Date()
    console.log(myDate)

    return(
        <div className="bodylistcrypto">
            <div className="boddy-coin">
            <p>{new Date().toString()}</p>
            <div className="table-crypto">
        <div className="pembungkus-coin-container">
          <div className='coin-container'>
          <div className='coin-row' >
                    <div className='coin'>
                    <img src={white} alt="" />
                        <h1>Name</h1>
                        <p className='coin-symbol'>ID</p>
                    </div>
                    <div className='coin-data'> 
                        <p className='coin-price'> Current Prize</p>
                        <p className='coin-volume'>Market Cap</p>
                        <p className='coin-percent re'>Price Change</p>
                    </div>
              </div>
              </div>
              </div>
        </div>
        </div>
        </div>
    )
}

export default ListNavCrypto;