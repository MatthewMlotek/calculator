
        const one = document.getElementById("btn1")
        const two = document.getElementById("btn2")
        const thre = document.getElementById("btn3")
        const four = document.getElementById("btn4")
        const five = document.getElementById("btn5")
        const six = document.getElementById("btn6")
        const seven = document.getElementById("btn7")
        const eight = document.getElementById("btn8")
        const nine = document.getElementById("btn9")
        const zero = document.getElementById("btn0")
        const dot = document.getElementById("btndot")
        const clear = document.getElementById("btnclear")
        const squared = document.getElementById("btn^2")


        const plus = document.getElementById("btn+")
        const minus = document.getElementById("btn-")
        const times = document.getElementById("btn*")
        const divide = document.getElementById("btn/")
        const equal = document.getElementById("btn=")



        var score = document.getElementById("score")
        var operation = document.getElementById("operation")

        //   /|\    /|\   referenctions to html elements

        var numbers = []
        var number = ("")



        function showText() {
            score.innerHTML = number
            operation.innerHTML = numbers.join("")
        }

        var interval = setInterval(showText, 100)

        function fplus() {
            number += " + "
            numbers.push(number)
            number = ""

        }

        function fminus() {
            number += " - "
            numbers.push(number)
            number = ""

        }

        function ftimes() {
            number += " * "
            numbers.push(number)
            number = ""

        }

        function fdivide() {
            number += " / "
            numbers.push(number)
            number = ""

        }
        function fequal() {
            clearInterval(interval)
            numbers.push(number)
            number = numbers.join("")
            score.innerHTML = eval(number)
            numbers = []
            number = eval(number)
            var interval = setInterval(showText, 100)

        }
        function fdot() {
            number += "."
        }
        function fsquared() {
            number += `**2`
            numbers.push(number)
            number = ""
        }


        // \|/  \|/  what buttons have to do

        function f1() {

            number += "1"
        }
        function f2() {
            number += "2"
        }
        function f3() {
            number += "3"
        }
        function f4() {
            number += "4"
        }
        function f5() {
            number += "5"
        }
        function f6() {
            number += "6"
        }
        function f7() {
            number += "7"
        }
        function f8() {
            number += "8"
        }
        function f9() {
            number += "9"
        }
        function f0() {
            number += "0"
        }
        function fclear() {
            location.reload()
            
        }


        // \|/  \|/  event listeners

        plus.addEventListener('click', fplus)
        minus.addEventListener('click', fminus)
        times.addEventListener('click', ftimes)
        divide.addEventListener('click', fdivide)

        equal.addEventListener('click', fequal)



        one.addEventListener('click', f1)
        two.addEventListener('click', f2)
        thre.addEventListener('click', f3)
        four.addEventListener('click', f4)
        five.addEventListener('click', f5)
        six.addEventListener('click', f6)
        seven.addEventListener('click', f7)
        eight.addEventListener('click', f8)
        nine.addEventListener('click', f9)
        zero.addEventListener('click', f0)
        dot.addEventListener('click', fdot)
        clear.addEventListener('click', fclear)
        squared.addEventListener('click', fsquared)