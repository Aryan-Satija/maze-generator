function randomIndex(num)
{
    return Math.floor(Math.random()*(num + 1));
}
function visibility(index, box){
    let row = index/side;
    let col = index%side;
    if(col-1 >= 0 && box[index-1].classList.contains("hidden")) 
        box[index-1].classList.remove("hidden");
    if(col+1 < side && box[index+1].classList.contains("hidden"))
        box[index+1].classList.remove("hidden");
    if(row-1 >= 0){
        if(box[index-side].classList.contains("hidden"))
            box[index-side].classList.remove("hidden");
        if(col > 0 && box[index-side-1].classList.contains("hidden"))
            box[index-side-1].classList.remove("hidden");
        if(col < (side-1) && box[index-side+1].classList.contains("hidden"))
            box[index-side+1].classList.remove("hidden");
    }
    if(row+1 < side){
        if(box[index+side].classList.contains("hidden"))
            box[index+side].classList.remove("hidden");
        if(col > 0 && box[index+side-1].classList.contains("hidden"))
            box[index+side-1].classList.remove("hidden");
        if(col < (side-1) && box[index+side+1].classList.contains("hidden"))
            box[index+side+1].classList.remove("hidden");
    }

}
function generateGrid(row, col, grid, box)
{
    let index = (side*row + col);
    grid[row][col] = true;
    while(1)
    {
        //GOING UP IS VALID
        if(row-1 >= 0 && !grid[row-1][col])
        {
            //GOING RIGHT IS VALID
            if(col + 1 < side && !grid[row][col+1])
            {
                //GOING DOWN IS VALID
                if(row + 1 < side && !grid[row+1][col])
                {
                    //GOING LEFT IS VALID
                    if(col - 1 >= 0 && !grid[row][col-1])
                    {
                        let x = randomIndex(3);
                        if(x == 0)
                        {
                            // UP
                            box[index].classList.remove("top");
                            box[index-side].classList.remove("bottom");
                            generateGrid(row-1, col, grid, box);
                        }
                        else if(x == 1)
                        {
                            // RIGHT
                            box[index].classList.remove("right");
                            box[index+1].classList.remove("left");
                            generateGrid(row, col+1, grid, box);
                        }
                        else if(x == 2)
                        {
                            // DOWN
                            box[index].classList.remove("bottom");
                            box[index+side].classList.remove("top");
                            generateGrid(row+1, col, grid, box);
                        }
                        else
                        {
                            // LEFT
                            box[index].classList.remove("left");
                            box[index-1].classList.remove("right");
                            generateGrid(row, col-1, grid, box);
                        }
                    }
                    //GOING LEFT IS NOT VALID
                    else
                    {
                        let x = randomIndex(2);
                        if(x == 0)
                        {
                            // UP
                            box[index].classList.remove("top");
                            box[index-side].classList.remove("bottom");
                            generateGrid(row-1, col, grid, box);
                        }
                        else if(x == 1)
                        {
                            // RIGHT
                            box[index].classList.remove("right");
                            box[index+1].classList.remove("left");
                            generateGrid(row, col+1, grid, box);
                        }
                        else 
                        {
                            // DOWN
                            box[index].classList.remove("bottom");
                            box[index+side].classList.remove("top");
                            generateGrid(row+1, col, grid, box);
                        }
                    }
                }
                //GOING DOWN IS NOT VALID
                else
                {
                    //GOING LEFT IS VALID
                    if(col - 1 >= 0 && !grid[row][col-1])
                    {
                        let x = randomIndex(2);
                        if(x == 0)
                        {
                            // UP
                            box[index].classList.remove("top");
                            box[index-side].classList.remove("bottom");
                            generateGrid(row-1, col, grid, box);
                        }
                        else if(x == 1)
                        {
                            // RIGHT
                            box[index].classList.remove("right");
                            box[index+1].classList.remove("left");
                            generateGrid(row, col+1, grid, box);
                        }
                        else
                        {
                            // LEFT
                            box[index].classList.remove("left");
                            box[index-1].classList.remove("right");
                            generateGrid(row, col-1, grid, box);
                        }
                    }
                    //GOING LEFT IS NOT VALID
                    else
                    {
                        let x = randomIndex(1);
                        if(x == 0)
                        {
                            // UP
                            box[index].classList.remove("top");
                            box[index-side].classList.remove("bottom");
                            generateGrid(row-1, col, grid, box);
                        }
                        else if(x == 1)
                        {
                            // RIGHT
                            box[index].classList.remove("right");
                            box[index+1].classList.remove("left");
                            generateGrid(row, col+1, grid, box);
                        }
                    }
                }
            }
            //GOING RIGHT IS NOT VALID
            else
            {
                // GOING DOWN IS VALID
                if(row + 1 < side  && !grid[row+1][col])
                {
                    //GOING LEFT IS VALID
                    if(col - 1 >= 0 && !grid[row][col-1])
                    {
                        let x = randomIndex(2);
                        if(x == 0)
                        {
                            // UP
                            box[index].classList.remove("top");
                            box[index-side].classList.remove("bottom");
                            generateGrid(row-1, col, grid, box);
                        }
                        else if(x == 1)
                        {
                            // DOWN
                            box[index].classList.remove("bottom");
                            box[index+side].classList.remove("top");
                            generateGrid(row+1, col, grid, box);
                        }
                        else
                        {
                            // LEFT
                            box[index].classList.remove("left");
                            box[index-1].classList.remove("right");
                            generateGrid(row, col-1, grid, box);
                        }
                    }
                    //GOING LEFT IS NOT VALID
                    else
                    {
                        let x = randomIndex(1);
                        if(x == 0)
                        {
                            // UP
                            box[index].classList.remove("top");
                            box[index-side].classList.remove("bottom");
                            generateGrid(row-1, col, grid, box);
                        }
                        else
                        {
                            // DOWN
                            box[index].classList.remove("bottom");
                            box[index+side].classList.remove("top");
                            generateGrid(row+1, col, grid, box);
                        }
                    }
                }
                
                // GOING DOWN IS NOT VALID
                else
                {
                    //GOING LEFT IS VALID
                    if(col - 1 >= 0 && !grid[row][col-1])
                    {
                        let x = randomIndex(1);
                        if(x == 0)
                        {
                            // UP
                            box[index].classList.remove("top");
                            box[index-side].classList.remove("bottom");
                            generateGrid(row-1, col, grid, box);
                        }
                        else
                        {
                            // LEFT
                            box[index].classList.remove("left");
                            box[index-1].classList.remove("right");
                            generateGrid(row, col-1, grid, box);
                        }
                    }
                    //GOING LEFT IS NOT VALID
                    else
                    {
                        // UP
                        box[index].classList.remove("top");
                        box[index-side].classList.remove("bottom");
                        generateGrid(row-1, col, grid, box);
                    }
                }
            }
        }
        //GOING UP IS NOT VALID
        else
        {
            //GOING RIGHT IS VALID
            if(col + 1 < side && !grid[row][col+1])
            {
                // GOING DOWN IS VALID
                if(row + 1 < side && !grid[row+1][col])
                {
                    //GOING LEFT IS VALID
                    if(col - 1 >= 0 && !grid[row][col-1])
                    {
                        let x = randomIndex(2);
                        if(x == 0)
                        {
                            // RIGHT
                            box[index].classList.remove("right");
                            box[index+1].classList.remove("left");
                            generateGrid(row, col+1, grid, box);
                        }
                        else if(x == 1)
                        {
                            // DOWN
                            box[index].classList.remove("bottom");
                            box[index+side].classList.remove("top");
                            generateGrid(row+1, col, grid, box);
                        }
                        else
                        {
                            // LEFT
                            box[index].classList.remove("left");
                            box[index-1].classList.remove("right");
                            generateGrid(row, col-1, grid, box);
                        }
                    }
                    //GOING LEFT IS NOT VALID
                    else
                    {
                        let x = randomIndex(1);
                        if(x == 0)
                        {
                            // RIGHT
                            box[index].classList.remove("right");
                            box[index+1].classList.remove("left");
                            generateGrid(row, col+1, grid, box);
                        }
                        else 
                        {
                            // DOWN
                            box[index].classList.remove("bottom");
                            box[index+side].classList.remove("top");
                            generateGrid(row+1, col, grid, box);
                        }
                    }
                }
                // GOING DOWN IS NOT VALID
                else
                {
                    //GOING LEFT IS VALID
                    if(col - 1 >= 0 && !grid[row][col-1])
                    {
                        let x = randomIndex(1);
                        if(x == 0)
                        {
                            // RIGHT
                            box[index].classList.remove("right");
                            box[index+1].classList.remove("left");
                            generateGrid(row, col+1, grid, box);
                        }
                        else
                        {
                            // LEFT
                            box[index].classList.remove("left");
                            box[index-1].classList.remove("right");
                            generateGrid(row, col-1, grid, box);
                        }
                    }
                    //GOING LEFT IS NOT VALID
                    else
                    {
                        // RIGHT
                        box[index].classList.remove("right");
                        box[index+1].classList.remove("left");
                        generateGrid(row, col+1, grid, box);
                    }
                }
            }
            //GOING RIGHT IS NOT VALID
            else
            {
                // GOING DOWN IS VALID
                if(row + 1 < side && !grid[row+1][col])
                {
                    //GOING LEFT IS VALID
                    if(col - 1 >= 0 && !grid[row][col-1])
                    {
                        let x = randomIndex(1);
                        if(x == 1)
                        {
                            // DOWN
                            box[index].classList.remove("bottom");
                            box[index+side].classList.remove("top");
                            generateGrid(row+1, col, grid, box);
                        }
                        else
                        {
                            // LEFT
                            box[index].classList.remove("left");
                            box[index-1].classList.remove("right");
                            generateGrid(row, col-1, grid, box);
                        }
                    }
                    //GOING LEFT IS NOT VALID
                    else
                    {
                        // DOWN
                        box[index].classList.remove("bottom");
                        box[index+side].classList.remove("top");
                        generateGrid(row+1, col, grid, box);
                    }
                }
                // GOING DOWN IS NOT VALID
                else
                {
                    //GOING LEFT IS VALID
                    if(col - 1 >= 0 && !grid[row][col-1])
                    {
                        // LEFT
                        box[index].classList.remove("left");
                        box[index-1].classList.remove("right");
                        generateGrid(row, col-1, grid, box);
                    }
                    //GOING LEFT IS NOT VALID
                    else
                    {
                        return;
                    }
                }
            }
        }
    }
}
function initGame(box)
{
    let x = randomIndex(3);
    if(x == 0)
    {
        currentRow = 0;
        currentCol = 0;
        winRow = side-1;
        winCol = side-1;
    }
    else if(x == 1)
    {
        currentRow = 0;
        currentCol = side-1;
        winRow = side-1;
        winCol = 0;
    }    
    else if(x == 2)
    {
        currentRow = side-1;
        currentCol = 0;
        winRow = 0;
        winCol = side-1;
    }
    else
    {
        currentRow = side-1;
        currentCol = side-1;
        winRow = 0;
        winCol = 0;
    }
    box[side*currentRow + currentCol].classList.add("current");
    box[side*currentRow + currentCol].classList.remove("hidden");
    box[side*winRow + winCol].classList.add("destination");
    box[side*winRow + winCol].classList.remove("hidden");
    visibility(side*currentRow + currentCol, box);
    isOver = false;
}
function initTimer()
{
    countdown = setInterval(function(){
        TimeLeft--;
        if(TimeLeft > 0)
            document.querySelector(".timer").textContent = `00:${TimeLeft}`;
        else
        {
            clearInterval(countdown);
            document.querySelector(".timer").textContent = "GAME OVER";
            isOver = true;
            let modal = document.querySelector(".modal");
            modal.classList.add("active");
        }
    },1000);
}
function celebrate()
{
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti().then(() => jsConfetti.addConfetti());
    isOver = true;
    clearInterval(countdown);
}
var side = 10;
var currentRow;
var currentCol;
var isOver;
var TimeLeft;
var countdown;
var winRow;
var winCol;
const maze = document.querySelector(".maze");
document.querySelector("[newGame]").addEventListener("click", function(){
    const box1 = document.querySelectorAll(".box");
    clearInterval(countdown);
    for(let i = 0; i < side*side; i++)
    {
        if(box1[i])
        box1[i].remove();
    }
    if(document.querySelector("#basic").checked)
    {
        side = 5;
        maze.style.cssText = "grid-template-columns: repeat(5, 1fr);"
    }
    else if(document.querySelector("#medium").checked)
    {
        side = 10;
        maze.style.cssText = "grid-template-columns: repeat(10, 1fr);"
    }
    else if(document.querySelector("#hard").checked)
    {
        side = 20;
        maze.style.cssText = "grid-template-columns: repeat(20, 1fr);"
    }
    else
    {
        side = 25;
        maze.style.cssText = "grid-template-columns: repeat(25, 1fr);"
    }
    for(let i = 0; i < side*side; i++)
    {
        let block = document.createElement("div");
        block.classList.add("box", "left", "right", "top", "bottom", "hidden");
        maze.appendChild(block);
    }
    var grid = [];
    for(let i = 1; i <= side; i++)
    {
        let row = [];
        for(let j = 1; j <= side; j++)
        {
            row.push(false);
        }
        grid.push(row);
    }
    const box = document.querySelectorAll(".box");
    generateGrid(0, 0, grid, box);
    initGame(box);
    TimeLeft = 60;
    // initTimer();
});
document.querySelector("[openModal]").addEventListener("click", ()=>{
    let modal = document.querySelector(".modal");
    if(modal.classList.contains("active"))
    {
        modal.classList.remove("active");
    }
    else
    {   
        modal.classList.add("active");
    }
});
window.addEventListener("keyup", function(event){
    if(isOver == false)
    {
        const currentIndex = side*currentRow + currentCol;
        const box = document.querySelectorAll(".box");
        if(event.key == "ArrowUp")
        {
            if(!box[currentIndex].classList.contains("top"))
            {
                box[currentIndex].classList.add("hidden");
                box[currentIndex].classList.remove("current");
                currentRow -= 1;
                newIndex = side*currentRow + currentCol;
                box[newIndex].classList.add("current");
                box[newIndex].classList.remove("hidden");
                visibility(newIndex, box);
            }
        }
        else if(event.key == "ArrowDown")
        {
            if(!box[currentIndex].classList.contains("bottom"))
            {
                box[currentIndex].classList.add("hidden");
                box[currentIndex].classList.remove("current");
                currentRow += 1;
                newIndex = side*currentRow + currentCol;
                box[newIndex].classList.add("current");
                box[newIndex].classList.remove("hidden");
                visibility(newIndex, box);
            }
        }
        else if(event.key == "ArrowLeft")
        {
            if(!box[currentIndex].classList.contains("left"))
            {
                box[currentIndex].classList.add("hidden");
                box[currentIndex].classList.remove("current");
                currentCol -= 1;
                newIndex = side*currentRow + currentCol;
                box[newIndex].classList.add("current");
                box[newIndex].classList.remove("hidden");
                visibility(newIndex, box);
            }
        }
        else 
        {
            if(!box[currentIndex].classList.contains("right"))
            {
                box[currentIndex].classList.add("hidden");
                box[currentIndex].classList.remove("current");
                currentCol += 1;
                newIndex = side*currentRow + currentCol;
                box[newIndex].classList.add("current");
                box[newIndex].classList.remove("hidden");
                visibility(newIndex, box);
            }
        }
        if(currentRow == winRow && currentCol == winCol)
        {
            celebrate();
        }
    }
});