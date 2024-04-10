import { useState } from 'react'

import useCurrencyInfo from './hooks/useCurrencyinfo'
import {InputBox} from './Componenets'

function App() {

  const [amount, setamount]=useState(0)
  const [from, setFrom]=useState("usd")
  const [to, setTo]=useState("inr")
  const [convertedamount, setconvertedamount]=useState(0)
const currencyinfo = useCurrencyInfo(from)

const options = Object.keys(currencyinfo)

const swap = ()=>{
  setFrom(to)
  setTo(from)
  setconvertedamount(amount)
  setamount(convertedamount)
}

const convert = ()=>{
  setconvertedamount(amount*currencyinfo[to])
}


    

  return (
      <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
          style={{
              backgroundImage: `url('https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
          }}
      >
          <div className="w-full">
              <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                  <form
                      onSubmit={(e) => {
                          e.preventDefault();
                          convert()
                         
                      }}
                  >
                      <div className="w-full mb-1">
                          <InputBox
                              label="From"
                              amount={amount}
                              currencyOptions={options}
                              onCurrencychange={(currency) => {
                                setFrom(currency); // Update the 'from' state with the newly selected currency
                            }}
                            
                              selectcurrency={from}
                              onAmountchange={(amount) => {
                                if (amount === 0 || amount === '0') { // Check if input is 0 or '0'
                                    setamount(''); // Set amount to empty string
                                } else {
                                    setamount(amount); // Update amount with new value
                                }
                            }}
                            
                          />
                      </div>
                      <div className="relative w-full h-0.5">
                          <button
                              type="button"
                              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                              onClick={swap}
                          >
                              swap
                          </button>
                      </div>
                      <div className="w-full mt-1 mb-4">
                          <InputBox
                              label="To"
                              amount={convertedamount}
                              currencyOptions={options}
                              onCurrencychange={(currency)=>
                                setTo(currency)}
                             
                              selectcurrency={to}
                              amountDisable
                              
                          />
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                          Convert {from.toUpperCase()} to {to.toUpperCase()}
                      </button>
                  </form>
              </div>
          </div>
      </div>
  );
                    }
export default App
