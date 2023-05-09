const morningbftab = () => {
    console.log("take dynaglipt before food");
  };
  const aftab = (callback) => {
    console.log("Wait till you eat to take glimester");
    setTimeout(() => {
      callback();
      console.log("Take glimester!!!!!");
    }, 6000);
  };
  const callback = () => {
    alert("Medicine!!!");
  };
  const eat = () => {
    console.log("Eat breakfast!!");
  };
  
  morningbftab();
  aftab(callback);
  eat();