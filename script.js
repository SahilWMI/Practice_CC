let canvas = document.querySelector("canvas"); 
let context = canvas.getContext('2d');

context.lineWidth = 4;

for(let i = 0; i<5;i++){
    for(let j = 0; j<5; j++){
        let width = 60;
        let height = 60;
        let gap = 20;
        let x = 100 + (width+gap) * i;
        let y = 100 + (height+gap) * j;

        context.beginPath();
        context.rect(x, y, width, height);
        context.stroke();
    }
}
