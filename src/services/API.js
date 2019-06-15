const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

const finalData = [];

const monthVisitData = () =>
  labels.map(m => {
    finalData.push(Math.floor(Math.random() * 1000) + 200);
  });
