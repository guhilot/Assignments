// Enter your code below

let data = {
  blue: 21,
  yellow: 11,
  red: 4,
  teal: 18,
  purple: 9,
  orange: 9,
  unknown: 4,
};
const url = 'https://swapi.dev/api/people';
fetch(url)
        .then(res=>res.json())
        .then(data=>dataMan([data]))

        function dataMan(val){
          const arr = val.map(data=>{
            return data.results.map(info=>{
              return {y: Number(info.height), label: info.name}
            })
          })
          console.log(arr)
          const r = arr[0]
          console.log(r)
          var chart = new CanvasJS.Chart("chartContainer", {
            animationEnabled: true,
            title:{
              text: "Height Comparason",
              horizontalAlign: "left"
            },
            data: [{
              type: "doughnut",
              startAngle: 60,
              //innerRadius: 60,
              indexLabelFontSize: 17,
              indexLabel: "{label} - #percent%",
              toolTipContent: "<b>{label}:</b> {y} (#percent%)",
              dataPoints: r
            }]
          });
          chart.render();
        }

// window.onload = function () {

//   const arr = [
//     { y: 67, label: "Inbox" },
//     { y: 28, label: "Archives" },
//     { y: 10, label: "Labels" },
//     { y: 7, label: "Drafts"},
//     { y: 15, label: "Trash"},
//     { y: 6, label: "Spam"}
//   ]
 
//   var chart = new CanvasJS.Chart("chartContainer", {
//     animationEnabled: true,
//     title:{
//       text: "Email Categories",
//       horizontalAlign: "left"
//     },
//     data: [{
//       type: "doughnut",
//       startAngle: 60,
//       //innerRadius: 60,
//       indexLabelFontSize: 17,
//       indexLabel: "{label} - #percent%",
//       toolTipContent: "<b>{label}:</b> {y} (#percent%)",
//       dataPoints: arr
//     }]
//   });
//   chart.render();
//   }



// Colors used :

// backgroundColor: [
//   'rgba(54, 162, 235, 0.8)',
//   'rgba(255, 206, 86, 0.8)',
//   'rgba(255, 99, 132, 0.8)',
//   'rgba(75, 192, 192, 0.8)',
//   'rgba(153, 102, 255, 0.8)',
//   'rgba(255, 159, 64, 0.8)',
//   'rgba(199, 199, 199, 0.8)',
// ]
// borderColor: [
//   'rgba(54, 162, 235, 1)',
//   'rgba(255, 206, 86, 1)',
//   'rgba(255, 99, 132, 1)',
//   'rgba(75, 192, 192, 1)',
//   'rgba(153, 102, 255, 1)',
//   'rgba(255, 159, 64, 1)',
//   'rgba(159, 159, 159, 1)',
// ]
