import React from 'react';
import {useState} from 'react'

function Tendency(){
    
    let[question, setQuestion] = useState(['Q1','Q2', 'Q3'])

    return(
        <div className="QuestionList">
      
            <div className="tendency">
                <h4> 내 성향 분석하기 </h4>
                <h4>전혀 아니다(1) ~ 매우 그렇다(5)</h4>
            </div>

            <div className="tendencylist">
                <h4>{question[0]}</h4>
                <div>
                    <input id="q1-1" class ="btn-check" type="radio" name="number1" autocomplete="off" />
                    <label class="btn btn-outline-dark" for="q1-1">1</label>

                    <input id="q1-2" class ="btn-check" type="radio" name="number1" autocomplete="off"/>
                    <label class="btn btn-outline-dark" for="q1-2">2</label>

                    <input id="q1-3" class ="btn-check" type="radio" name="number1" autocomplete="off"/>
                    <label class="btn btn-outline-dark" for="q1-3">3</label>

                    <input id="q1-4" class ="btn-check" type="radio" name="number1" autocomplete="off"/>
                    <label class="btn btn-outline-dark" for="q1-4">4</label>

                    <input id="q1-5" class ="btn-check" type="radio" name="number1" autocomplete="off"/>
                    <label class="btn btn-outline-dark" for="q1-5">5</label>
                </div>
            </div> 
            
            <div className="tendencylist">
                <h4>{question[1]}</h4>
                <div>
                <input id="q2-1" class="btn-check" type="radio" value="one" name="number2" autocomplete="off"/>
                <label class="btn btn-outline-dark" for="q2-1">1</label>

                <input id="q2-2" class="btn-check" type="radio" value="two" name="number2" autocomplete="off"/>
                <label class="btn btn-outline-dark" for="q2-2">2</label>

                <input id="q2-3" class="btn-check" type="radio" value="two" name="number2" autocomplete="off"/>
                <label class="btn btn-outline-dark" for="q2-3">3</label>

                <input id="q2-4" class="btn-check" type="radio" value="two" name="number2" autocomplete="off"/>
                <label class="btn btn-outline-dark" for="q2-4">4</label>

                <input id="q2-5" class="btn-check" type="radio" value="two" name="number2" autocomplete="off"/>
                <label class="btn btn-outline-dark" for="q2-5">5</label>
                </div>
            </div> 
            <div className="tendencylist">
                <h4>{question[2]}</h4>
                <div>
                <input id="q3-1" class="btn-check" type="radio" value="one" name="number3" autocomplete="off"/>
                <label class="btn btn-outline-dark" for="q3-1">1</label>

                <input id="q3-2" class="btn-check" type="radio" value="two" name="number3" autocomplete="off"/>
                <label class="btn btn-outline-dark" for="q3-2">2</label>

                <input id="q3-3" class="btn-check" type="radio" value="three" name="number3" autocomplete="off"/>
                <label class="btn btn-outline-dark" for="q3-3">3</label>

                <input id="q3-4" class="btn-check" type="radio" value="four" name="number3" autocomplete="off"/>
                <label class="btn btn-outline-dark" for="q3-4">4</label>

                <input id="q3-5" class="btn-check" type="radio" value="five" name="number3" autocomplete="off"/>
                <label class="btn btn-outline-dark" for="q3-5">5</label>
                </div>
            </div> 


    </div>
    )
}

export default Tendency;