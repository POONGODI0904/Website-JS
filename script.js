function changeHeading()
{
    document.getElementById("mainHeading")
    .innerHTML="DOM Manipulation Successful";
}

function showGreeting()
{
    let name = document.getElementById("username").value.trim();
    let greeting = document.getElementById("greeting");

    if (!name) {
        greeting.innerHTML = "Please enter your name.";
        return;
    }

    greeting.innerHTML = "Welcome " + name;
}

function checkNumber()
{
    let input = document.getElementById("numberInput").value;
    let number = Number(input);
    let result = document.getElementById("result");

    if (!input || Number.isNaN(number)) {
        result.innerHTML = "Please enter a valid number.";
        return;
    }

    if (number % 2 === 0)
    {
        result.innerHTML = "Even Number";
    }
    else
    {
        result.innerHTML = "Odd Number";
    }
}

function generateTable()
{
    let number=Number(
        document.getElementById("tableNumber").value
    );

    let output= "";

    for(let i=1;i<=10;i++)
    {
        output +=
        `${number} x ${i} = ${number*i}<br>`;
    }

    document.getElementById("tableResult")
    .innerHTML = output;
}

function showStudent()
{
    let student=
    {
        name:"Poongodi",
        age:22,
        course:"JavaScript"
    };

    document.getElementById("studentInfo")
    .innerHTML=
    `
    Name: ${student.name}<br>
    Age: ${student.age}<br>
    Course: ${student.course}
    `;
}

function showFruits()
{
    let fruits=
    [
        "Apple",
        "Orange",
        "Mango",
        "Banana"
    ];
    
    document.getElementById("fruitList")
    .innerHTML=
    fruits.join(",");
}

function toggleTheme()
{
    document.body.classList.toggle("dark");
}

