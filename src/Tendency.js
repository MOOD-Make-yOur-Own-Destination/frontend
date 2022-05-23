import React, {useState} from 'react';

function Tendency(){

    let[question, setQuestion] = useState(['Q1','Q2', 'Q3'])

    return(
        <div className="QuestionList">
      
            <div className="gray-nav">
                <h4> 내 성향 분석하기(매우 아니다:1 ~ 매우 그렇다:5) </h4>
            </div>

            <div className="tendencylist">
                <h4>{성향질문[0]}</h4>
                <div>
                <label for="1">1</label>
                <input id="1" type="radio" value="one" name="number1"></input>

                <label for="2">2</label>
                <input id="2" type="radio" value="two" name="number1"></input>

                <label for="3">3</label>
                <input id="3" type="radio" value="three" name="number1"></input>

                <label for="4">4</label>
                <input id="4" type="radio" value="four" name="number1"></input>

                <label for="5">5</label>
                <input id="5" type="radio" value="five" name="number1"></input>
                </div>
            </div> 
            
            <div className="tendencylist">
                <h4>{성향질문[1]}</h4>
                <div>
                <label for="1">1</label>
                <input id="1" type="radio" value="one" name="number2"></input>

                <label for="2">2</label>
                <input id="2" type="radio" value="two" name="number2"></input>

                <label for="3">3</label>
                <input id="3" type="radio" value="three" name="number2"></input>

                <label for="4">4</label>
                <input id="4" type="radio" value="four" name="number2"></input>

                <label for="5">5</label>
                <input id="5" type="radio" value="five" name="number2"></input>
                </div>
            </div> 
            <div className="tendencylist">
                <h4>{성향질문[2]}</h4>
                <div>
                <label for="1">1</label>
                <input id="1" type="radio" value="one" name="number3"></input>

                <label for="2">2</label>
                <input id="2" type="radio" value="two" name="number3"></input>

                <label for="3">3</label>
                <input id="3" type="radio" value="three" name="number3"></input>

                <label for="4">4</label>
                <input id="4" type="radio" value="four" name="number3"></input>

                <label for="5">5</label>
                <input id="5" type="radio" value="five" name="number3"></input>
                </div>
            </div> 


    </div>
    )
}

export default Tendency;